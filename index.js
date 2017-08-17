/**
 * @file   mofron-comp-header-title/index.js
 * @author simpart
 */
let mf     = require('mofron');
let Header = require('mofron-comp-titleheader');

mf.comp.AppHeader = class extends Header {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('AppHeader');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            this.addChild(new mf.Component());
            this.addChild(
                new mf.Component({
                    style    : { 'margin-left'  : 'auto',
                                 'margin-right' : '40px' }//,
                    //addChild : new Text({
                    //    style : { 'margin-right' : '40px' },
                    //    size  : 30,
                    //    text  : 'TEST'
                    //})
                })
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    center (chd, disp) {
        try {
            if (undefined === chd) {
                /* getter */
                let center = this.child()[1].child();
                if (null !== center) {
                    return (1 === center.length) ? center[0] : center;
                } else {
                    return null;
                }
            }
            /* setter */
            this.child()[1].addChild(chd, disp);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    right (chd, disp) {
        try {
            if (undefined === chd) {
                /* getter */
                let rgh = this.child()[2].child();
                if (null !== rgh) {
                    return (1 === rgh.length) ? rgh[0] : rgh;
                } else {
                    return null;
                }
            }
            /* setter */
            this.child()[2].addChild(chd, disp);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.AppHeader;
