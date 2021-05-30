
(() => 
{
    class Tab
    {
        tab_;
        nav_;
        content_;
    
        ACTIVE_CLASS = 'is-active'

        DoInit(arg)
        {
            const $doc = document;

            this.tab_ = $doc.getElementById(arg.hookName);

            this.nav_ = this.tab_.querySelectorAll('[data-nav]');
            this.content_ = this.tab_.querySelectorAll('[data-content]');;

            this.content_[0].style.display = 'block';

            for (let i = 0; i < this.nav_.length; i++) 
                this.nav_[i].addEventListener(
                    'click', 
                    (e) => this.clickHandler(e));            
        }

        constructor(obj)
        {
            this.DoInit(obj);
        }

        clickHandler(e)
        {
            e.preventDefault();

            const $this = e.target;
            const targetVal = $this.dataset.nav;
    
             //初期化
            for (let i = 0; i < this.nav_.length; i++) 
            {
                this.content_[i].style.display = 'none';
                this.nav_[i].classList.remove(this.ACTIVE_CLASS);
            }     
    
            //選択箇所の活性化
            this.tab_.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
            this.nav_[targetVal].classList.add(this.ACTIVE_CLASS);
        }
    }

    const Tab_01 = new Tab(
    {
        hookName: 'js-tab'
    });

    const Tab_02 = new Tab(
    {
        hookName: 'js-tab_2'
    });

    const Tab_03 = new Tab(
    {
        hookName: 'js-tab_3'
    });        

})();