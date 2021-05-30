(() => {

    class Accordion
    {
        DoInit(arg)
        {
            const $elm = document.querySelector(arg.hookName);
            const $trigger = $elm.getElementsByTagName(arg.tagName);
        
            const triggerLen = $trigger.length;
            for (let i = 0; i < $trigger.length; i++) 
            {
                $trigger[i].addEventListener('click', (e) => this.clickHandler(e));	
            }
        }

        constructor(obj){ this.DoInit(obj); }

        clickHandler(e)
        {
            e.preventDefault();
    
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
    
            if($content.style.display === 'block')
            {
                $content.style.display = 'none';
            }
            else
            {
                $content.style.display = 'block';
            }
        };
    }

    const accdion_01 = new Accordion(
    {
        hookName: '#js-faq',
        tagName: 'p'
    });

    const accdion_02 = new Accordion(
    {
        hookName: '#js-accordion',
        tagName: 'a'
    });

})();