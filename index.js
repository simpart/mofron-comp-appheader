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
                    /* title area */
                    new mf.Dom({
                        tag       : 'div',
                        component : this,
                        style     : { 'display' : 'flex' }
                    }),
                    /* center area */
                    new mf.Dom({
                        tag       : 'div',
                        component : this,
                        style     : { 'display' : 'flex' }
                    }),
                    /* navigate area */
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
            
            this.switchTgt(
                this.getApphdrTgt(0),
                (swh_prm) => {
                    try {
                        if (null === swh_prm[1]) {
                            swh_prm[0].addChild(img, 0);
                        } else {
                            swh_prm[0].updChild(swh_prm[1], img);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                [this,this.logo()]
             );
             this.execAutoResize(img);
             this.setUrlJump(img);
             this.m_logo = img;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (prm) {
        try {
            let ret = this.text(prm);
            if ((undefined === ret) && (null !== this.url())) {
                /* setter */
                let txt = this.text();
                this.setUrlJump(txt[txt.length-1]);
            }
            return ret;
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
            if (null === prm) {
                this.m_url = prm;
                return;
            }
            if ('string' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.m_url = prm;
            let ttl    = this.title();
            for (let tidx in ttl) {
                this.setUrlJump(ttl[tidx]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setUrlJump (prm) {
        try {
            if (true !== mf.func.isInclude(prm, 'Component')) {
                throw new Error('invalid parameter');
            }
            let url = this.url();
            if (null === url) {
                throw new Error('could not find url');
            }
            prm.execOption({
                event : [
                    new Click(
                        () => {
                            try {
                                location.href = url;
                            } catch (e) {
                                console.error(e.stack);
                                throw e;
                            }
                        }
                    )
                ]
            });
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
            prm.execOption({
                style : { 'margin-right' : (undefined === rof) ? '0.2rem' : rof }
            });
            
            this.switchTgt(
                this.getApphdrTgt(2),
                (swh_prm) => {
                    try {
                        if (null === swh_prm.navigate()) {
                            swh_prm.addChild(prm);
                        } else {
                            swh_prm.updChild(swh_prm.navigate(), prm);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
            this.m_navi = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execAutoResize (prm) {
        try {
            super.execAutoResize(prm);
            if ((undefined === prm) && (null !== this.logo())) {
                super.execAutoResize(this.logo());
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.AppHeader;
/* end of file */
