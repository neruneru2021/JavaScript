
(() => 
{
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';

    const init = () => 
    {
        $content[0].style.display = 'block';
    }

    init();

    const handleClick = (e) => 
    {
        e.preventDefault();

        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //初期化
        for (let i = 0; i < $nav.length; i++) 
        {
            $content[i].style.display = 'none';
            $nav[i].classList.remove(ACTIVE_CLASS);
        }            

        //選択箇所の活性化
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    }

    for (let i = 0; i < $nav.length; i++) 
        $nav[i].addEventListener('click', (e) => handleClick(e));

})();