(() => {

    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');

    const triggerLen = $trigger.length;
    for (let i = 0; i < $trigger.length; i++) 
    {
        $trigger[i].addEventListener('click', (e) => clickHandler(e));	
    }

    

    const clickHandler = (e) =>
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

})();