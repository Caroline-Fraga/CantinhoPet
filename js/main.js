(function(){
    'use strict';

    /*
     * main.js - Comportamentos JS do site
     * Refatorado para legibilidade e boas práticas:
     * - nomes em português onde fazem sentido
     * - uso de const/let
     * - funções com responsabilidade única
     * - comentários em português
     */

    const CAROUSEIS = {
        servicos: '#carouselServicos',
        produtos: '#carouselProdutos',
        depoimentos: '#carouselDepoimentos'
    };

    /**
     * Igualar altura dos cartões dentro de um carrossel.
     * Mede todas as slides (mesmo as escondidas) e aplica minHeight igual ao maior card.
     * @param {string} seletorCarousel - seletor CSS do carrossel
     */
    function igualarAlturaCartoes(seletorCarousel){
        const carousel = document.querySelector(seletorCarousel);
        if(!carousel) return;

        const cards = carousel.querySelectorAll('.card.h-100');
        // reset
        cards.forEach(c => { c.style.minHeight = ''; });

        let maxH = 0;
        const items = carousel.querySelectorAll('.carousel-item');

        items.forEach(item => {
            const precisaRestaurar = window.getComputedStyle(item).display === 'none';
            const estadoPrevio = { display: item.style.display, position: item.style.position, visibility: item.style.visibility, left: item.style.left };

            if(precisaRestaurar){
                item.style.display = 'block';
                item.style.position = 'absolute';
                item.style.left = '-9999px';
                item.style.visibility = 'hidden';
            }

            const itemCards = item.querySelectorAll('.card.h-100');
            itemCards.forEach(c => { const h = c.offsetHeight; if(h > maxH) maxH = h; });

            if(precisaRestaurar){
                item.style.display = estadoPrevio.display;
                item.style.position = estadoPrevio.position;
                item.style.left = estadoPrevio.left;
                item.style.visibility = estadoPrevio.visibility;
            }
        });

        cards.forEach(c => { c.style.minHeight = maxH ? (maxH + 'px') : ''; });
    }

    /** Igualar em todos os carrosséis */
    function igualarTodos(){
        igualarAlturaCartoes(CAROUSEIS.servicos);
        igualarAlturaCartoes(CAROUSEIS.produtos);
        igualarAlturaCartoes(CAROUSEIS.depoimentos);
    }

    /** Debounce simples */
    function debounce(fn, wait){
        let t;
        return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), wait); };
    }

    /** Marca cards sem imagem para manter espaçamento igual */
    function marcarCartoesSemImagem(){
        document.querySelectorAll('.card').forEach(card => { if(!card.querySelector('img')) card.classList.add('card-no-img'); });
    }

    /** Configura o comportamento do formulário de contato */
    function configurarFormulario(){
        const form = document.getElementById('contactForm');
        const success = document.getElementById('contactSuccess');
        if(!form) return;

        if(success){
            success.setAttribute('role', 'status');
            success.setAttribute('aria-live', 'polite');
            // permitir foco para melhores feedbacks de acessibilidade
            success.tabIndex = -1;
        }

        form.addEventListener('submit', function(e){
            e.preventDefault();
            e.stopPropagation();

            if(!form.checkValidity()){
                form.classList.add('was-validated');
                return;
            }

            if(success){
                success.classList.remove('d-none');
                try{ success.focus(); } catch(err){}
            }

            // Este é um projeto estático — em ambiente real, enviar via fetch/POST para backend.
            form.reset();
            form.classList.remove('was-validated');
            setTimeout(() => { if(success) success.classList.add('d-none'); }, 5000);
        }, false);
    }

    /* Inicialização */
    document.addEventListener('DOMContentLoaded', () => {
        igualarTodos();
        marcarCartoesSemImagem();
        configurarFormulario();
    });

    window.addEventListener('load', igualarTodos);
    window.addEventListener('resize', debounce(igualarTodos, 120));

    /* Recalcular após transição do carrossel (Bootstrap) */
    [CAROUSEIS.servicos, CAROUSEIS.produtos, CAROUSEIS.depoimentos].forEach(sel => {
        const el = document.querySelector(sel);
        if(!el) return;
        el.addEventListener('slid.bs.carousel', () => setTimeout(igualarTodos, 80));
    });

})();
