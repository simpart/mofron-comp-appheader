/**
 *  @file  mofron-comp-appheader/index.js
 *  @brief app header component for mofron
 *  @author simpart
 */
const mf     = require('mofron');
const Image  = require('mofron-comp-image');
const Header = require('mofron-comp-txtheader');
const Text   = require('mofron-comp-text');
const Click  = require('mofron-event-click');
const Synhei = require('mofron-effect-synchei');
const Hrzpos = require('mofron-effect-hrzpos');
const Horiz  = require('mofron-layout-horizon');


mf.comp.AppHeader = class extends Header {
    constructor (po, ttl, nav) {
        try {
            super();
            this.name('AppHeader');
            this.prmMap(['logo', 'title', 'navi']);
            this.prmOpt(po, ttl, nav);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * init dom contents
     * 
     * @note private method
     */
    initDomConts() {
        try {
            super.initDomConts();
            this.addChild(this.logo(), 0);
            
            let conts = new mf.Component({
                layout : new Horiz()
            });
            this.addChild(conts);
            this.addChild(this.naviWrap());
            
            this.target(conts.target());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter logo image
     * insert logo image to left side of title
     *
     * @param p1 (string)         path to image
     * @param p1 (mf.comp.Image)  image object
     * @param p1 (undefined) call as getter
     * @return   (mf.comp.Image)  logo image
     */
    logo (prm, off) {
        try {
            if ('string' === typeof prm) {
                this.logo().execOption({
                    path : prm
                });
                this.logo().effect('SyncHei').offset(off);
                return;
            } else if (true === mf.func.isInclude(prm, 'Image')) {
                prm.execOption({
                    event  : this.getUrlJump(),
                    effect : new Synhei(this, off),
                    style  : [{ 'margin-left' : '0.2rem' }, true]
                });
            }
            return this.innerComp('logo', prm, Image);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * get click function
     *
     * @note private method
     */
    getUrlJump () {
        try {
            let func = (p1, p2, p3) => {
                try {
                    if (null !== p3.url()) {
                        location.href = p3.url();
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            return new Click([func, this]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter header title
     *
     * @param p1 (string)       header title
     * @param p1 (mf.comp.Text) text object for mofron
     * @param p1 (undefined)    call as getter
     * @return   (string)       header title
     */
    title (txt, p2) {
        try {
            let ret = this.text(txt, p2);
            if ( (true === mf.func.isInclude(ret, 'Text')) &&
                 (null === ret.event('Click')) ) {
                ret.event([this.getUrlJump()]);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter url jump target
     * it jump to this url when user clicks logo or title
     * set null if you don't want jump
     * 
     * @param p1 (string)    url
     * @param p1 (undefined) call as getter
     * @return   (string)    url
     */
    url (prm) {
        try { return this.member('url', 'string', prm, './'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter navigate area
     *
     * @param p1 (Component Object)   navigate component
     * @param p1 (undefined)          call as getter
     * @return   ([Component Object]) navigate component
     */
    navi (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.naviWrap().child();
            }
            /* setter */
            this.naviWrap().execOption({ child : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter navigate wrap
     *
     * @note private method
     */
    naviWrap (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'Component')) {
                prm.execOption({
                    layout : new Horiz(),
                    effect : new Hrzpos('right', '0.2rem')
                });
            }
            return this.innerComp('naviWrap', prm, mf.Component);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.AppHeader;
/* end of file */
