/**
 * @file   mofron-comp-apphdr/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Image  = require('mofron-comp-image');
let Header = require('mofron-comp-txtheader');
let Text   = require('mofron-comp-text');
let Click  = require('mofron-event-click');

mf.comp.AppHeader = class extends Header {
    constructor (po, ttl, nav) {
        try {
            super();
            this.name('AppHeader');
            this.prmMap('logo', 'title', 'navigate');
            this.prmOpt(po, ttl, nav);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts() {
        try {
            super.initDomConts();
            /* set area */
            for (let idx = 0; idx < 3 ; idx++) {
                this.target().addChild(this.getApphdrTgt(idx));
            }
            /* update target to contents area */
            this.target(this.getApphdrTgt(1));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getApphdrTgt (idx) {
        try {
            if ('number' !== typeof idx) {
                throw new Error('invalid parameter');
            }
            if ((0 > idx) || (2 < idx)) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_apphdrtgt) {
                this.m_apphdrtgt = [
                    new mf.Dom({
                        tag       : 'div',
                        component : this,
                        style     : { 'display' : 'flex' }
                    }),
                    new mf.Dom({
                        tag       : 'div',
                        component : this,
                        style     : { 'display' : 'flex' }
                    }),
                    new mf.Dom({
                        tag       : 'div',
                        component : this,
                        style     : { 
                            'display'      : 'flex',
                            'margin-right' : '0px' ,
                            'margin-left'  : 'auto'
                        }
                    })
                ];
            }
            
            
            return this.m_apphdrtgt[idx];
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    logo (img, lof) {
        try {
            if (undefined === img) {
                /* getter */
                return (undefined === this.m_logo) ? null : this.m_logo;
            }
            /* setter */
            if ('string' === typeof img) {
                img = new Image(img);
            } else if (true !== mf.func.isInclude(img, 'Image')) {
                throw new Error('invalid parameter');
            }
            this.setTitleConf(img, lof, true);
            this.m_logo = img;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (prm, lof) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.text();
            }
            /* setter */
            if (undefined === lof) {
                lof = 10;
            }
            this.setTitleConf(prm, lof);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setTitleConf (prm, lof, lfg) {
        try {
            if (undefined === lof) {
                lof = 10;
            }
            /* change target */
            let tgt_buf = this.target();
            this.target(this.getApphdrTgt(0));
            
            /* add component */
            let set_txt = null;
            if (true === lfg) {
                this.execAutoResize(prm);
                this.addChild(prm, 0);
                set_txt = prm;
            } else {
                this.text(prm);
                set_txt = this.text()[this.text().length-1];
            }
            this.target(tgt_buf);
            set_txt.style({
                'margin-left' : lof + 'px'
            });
            
            /* set click event */
            let jump = (txt, hdr) => {
                try {
                    location.href = hdr.url();
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            };
            set_txt.execOption({
                event : [new Click(jump, this)]
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    url (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_url) ? './' : this.m_url;
            }
            /* setter */
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_url = prm;;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    navigate (prm, rof) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_navi) ? null : this.m_navi;
            }
            /* setter */
            if (true !== mf.func.isInclude(prm, 'Component')) {
                throw new Error('invalid parameter');
            }
            if (undefined === rof) {
                rof = 0.2;
            }
            let tgt_buf = this.target();
            this.target(this.getApphdrTgt(2));
            this.addChild(prm);
            this.target(tgt_buf);
            
            prm.execOption({
                style : {
                    'margin-right' : rof + this.sizeType()
                }
            });
            
            this.m_navi = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execAutoResize(prm) {
        try {
            let ret = super.execAutoResize(prm);
            if ((undefined === prm) && (null !== this.logo())) {
                 super.execAutoResize(this.logo());
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.AppHeader;
/* end of file */
