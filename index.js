/**
 * @file   mofron-comp-apphdr/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-ttlhdr');

mf.comp.Apphdr = class extends Header {
    
    initDomConts(prm) {
        try {
            this.name('Apphdr');
            super.initDomConts(prm);
            
            /* set index area */
            this.addChild(this.indexBase(), undefined, false);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (val, idx, flg) {
        try {
            if (false === flg) {
                super.addChild(val, idx);
            } else {
                super.addChild(val, this.child().length-1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    logo (img) {
        try {
            let chd = this.child();
            if (undefined === img) {
                /* getter */
                return ( (0 !== chd.length) ||
                         (true === mf.func.isInclude(chd[0], 'Image')) ) ? chd[0] : null;
            }
            /* setter */
            if (true !== mf.func.isInclude(img, 'Image')) {
                throw new Error('invalid parameter');
            }
            this.title(img, 0);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    indexBase (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (undefined === this.m_idxbs) {
                    this.indexBase(new mf.Component());
                }
                return this.m_idxbs;
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Component')) {
                throw new Error('invalid parameter');
            }
            val.style({
                'display'      : 'flex'    ,
                'align-items'  : 'center'  ,
                'margin-right' : '20px'    ,
                'margin-left'  : 'auto'
            });
            this.m_idxbs = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    indexConts (val) {
        try {
            let idxbs = this.indexBase();
            if (undefined === val) {
                /* getter */
                return idxcnt.child();
            }
            /* setter */
            if (true !== mf.func.isInclude(val, 'Component')) {
                throw new Error('invalid parameter');
            }
            val.style({
                'margin-right' : '20px',
                'margin-left'  : 'auto'
            });
            if (0 === idxbs.child().length) {
                idxbs.addChild(val);
            } else {
                idxbs.updChild(idxbs.child()[0], val);
            }
            
            this.url(
                (null === this.url()) ? './' : undefined
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Apphdr;
/* end of file */
