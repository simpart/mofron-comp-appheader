/**
 * @file   mofron-comp-apphdr/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-ttlhdr');

mf.comp.Apphdr = class extends Header {
    
    constructor (po) {
        try {
            super();
            this.name('Apphdr');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            this.titleBase().style({
                'position' : 'fixed'
            });
            
            /* set index area */
            this.addChild(this.indexBase());
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    image (img) {
        try {
            let ttl = this.title();
            if (undefined === img) {
                /* getter */
                return ( (0 !== ttl.length) ||
                         (true === mf.func.isInclude(ttl[0], 'Image')) ) ? ttl[0] : null;
            }
            /* setter */
            if (true !== mf.func.isInclude(img, 'Image')) {
                throw new Error('invalid parameter');
            }
            this.title(img);
            if (0 !== ttl.length) {
                for (let tidx in ttl) {
                    ttl[tidx].destroy();
                }
                this.addTitle(ttl);
            }
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
                'width'        : '100%'
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
