'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">spm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' : 'data-target="#xs-components-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' :
                                            'id="xs-components-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' }>
                                            <li class="link">
                                                <a href="components/AdmindashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdmindashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArborescenceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArborescenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DragDropComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DragDropComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/variantproductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >variantproductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' : 'data-target="#xs-injectables-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' :
                                        'id="xs-injectables-links-module-AppModule-ab3b0307a1fed2212c2424480cf79b32ae295be5480d88626733602434bd7b352c8adfda60971182778cbb653beedb220f05c6c5a0758f41bed00ba99a4495ab"' }>
                                        <li class="link">
                                            <a href="injectables/NodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NodeServices.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeServices</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialExampleModule.html" data-type="entity-link" >MaterialExampleModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrimengModule.html" data-type="entity-link" >PrimengModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NodeService.html" data-type="entity-link" >NodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NodeServices.html" data-type="entity-link" >NodeServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VariantproductService.html" data-type="entity-link" >VariantproductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});