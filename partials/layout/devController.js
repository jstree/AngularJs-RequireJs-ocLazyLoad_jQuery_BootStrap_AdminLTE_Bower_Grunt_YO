'use strict';

define(
        ['projectWeb'],
        function() {

          var devIndexModule = angular.module('projectWeb', ['ui.router',
              'oc.lazyLoad', 'devLayoutService']);

          devIndexModule
                  .controller(
                          'devLayoutController',
                          [
                              '$scope',
                              '$ocLazyLoad',
                              'devLayoutService',
                              '$rootScope',
                              '$translate',
                              '$interval',
                              function($scope, $ocLazyLoad, devLayoutService,
                                      $rootScope, $translate, $interval) {

                                /**
                                 * Cache busting
                                 */
                                // $rootScope.VERSION_TAG = VERSION_TAG;
                                /**
                                 * Translations for the view
                                 */
                                var pageTitleTranslationId = 'PAGE_TITLE';
                                var pageContentTranslationId = 'PAGE_CONTENT';

                                $translate(pageTitleTranslationId,
                                        pageContentTranslationId)
                                        .then(
                                                function(translatedPageTitle,
                                                        translatedPageContent) {
                                                  $rootScope.pageTitle = translatedPageTitle;
                                                  $rootScope.pageContent = translatedPageContent;
                                                });

                                /**
                                 * $scope.locale
                                 */
                                $scope.locale = $translate.use();

                                /**
                                 * Provides info about current route path
                                 */
                                $rootScope
                                        .$on(
                                                '$routeChangeSuccess',
                                                function(event, current) {
                                                  $scope.currentPath = current.$$route.originalPath;
                                                });

                                /**
                                 * Current time
                                 */
                                $scope.currentTime = Date.now();
                                $interval(function() {
                                  $scope.currentTime = Date.now();
                                }, 1000);

                                /**
                                 * EVENTS
                                 */
                                $rootScope
                                        .$on(
                                                '$translateChangeSuccess',
                                                function(event, data) {
                                                  $scope.locale = data.language;
                                                  $rootScope.pageTitle = $translate
                                                          .instant(pageTitleTranslationId);
                                                  $rootScope.pageContent = $translate
                                                          .instant(pageContentTranslationId);
                                                });

                                $scope.mainHeader = 'partials/layout/header/DEV/';
                                $scope.mainSidebar = 'partials/layout/aside/DEV/';
                                $scope.contentWrapper = 'partials/layout/contents/DEV/';
                                $scope.mainFooter = 'partials/layout/footer/DEV/';
                                $scope.controlSidebar = 'partials/layout/sidebar/DEV/';

                                $scope
                                        .$on(
                                                '$includeContentLoaded',
                                                function(event, file) {
                                                  if (file === 'partials/layout/header/DEV/') {
                                                    console.log(file);
                                                  } else if (file === 'partials/layout/aside/DEV/') {
                                                    devLayoutService.fire();
                                                  } else if (file === 'partials/layout/contents/DEV/') {
                                                    $ocLazyLoad
                                                            .load('partials/layout/contents/DEV/index.css');
                                                    devLayoutService.fire();
                                                  } else if (file === 'partials/layout/footer/DEV/') {
                                                    devLayoutService.fire();
                                                  } else if (file === 'partials/layout/sidebar/DEV/') {
                                                    console.log(file);
                                                  }
                                                  ;
                                                });

                                $scope
                                        .$on(
                                                'goToHome',
                                                function() {
                                                  $scope.contentWrapper = "partials/layout/contents/DEV/";
                                                  $ocLazyLoad
                                                          .load('partials/layout/contents/DEV/index.css');
                                                  $('li .active').removeClass(
                                                          'active');
                                                  devLayoutService.fire();
                                                  console.log("goToHome");
                                                });

                                $scope.whyJsTree = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'whyJsTreeService',
                                                        files: ['partials/layout/contents/DEV/jstree/whyJsTree/service.js']
                                                      },
                                                      {
                                                        name: 'whyJsTreeController',
                                                        files: ['partials/layout/contents/DEV/jstree/whyJsTree/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/whyJsTree/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/whyJsTree/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.jsTreeArchitecture = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'jsTreeArchitectureService',
                                                        files: ['partials/layout/contents/DEV/jstree/jsTreeArchitecture/service.js']
                                                      },
                                                      {
                                                        name: 'jsTreeArchitectureController',
                                                        files: ['partials/layout/contents/DEV/jstree/jsTreeArchitecture/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/jsTreeArchitecture/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/jsTreeArchitecture/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.strutsiBatis = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'strutsiBatisService',
                                                        files: ['partials/layout/contents/DEV/jstree/strutsiBatis/service.js']
                                                      },
                                                      {
                                                        name: 'strutsiBatisController',
                                                        files: ['partials/layout/contents/DEV/jstree/strutsiBatis/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/strutsiBatis/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/strutsiBatis/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.springMyBatis = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'springMyBatisService',
                                                        files: ['partials/layout/contents/DEV/jstree/springMyBatis/service.js']
                                                      },
                                                      {
                                                        name: 'springMyBatisController',
                                                        files: ['partials/layout/contents/DEV/jstree/springMyBatis/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/springMyBatis/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/springMyBatis/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.springHibernate = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'springHibernateService',
                                                        files: ['partials/layout/contents/DEV/jstree/springHibernate/service.js']
                                                      },
                                                      {
                                                        name: 'springHibernateController',
                                                        files: ['partials/layout/contents/DEV/jstree/springHibernate/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/springHibernate/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/springHibernate/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.dwr = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'dwrService',
                                                        files: ['partials/layout/contents/DEV/jstree/DWR/service.js']
                                                      },
                                                      {
                                                        name: 'dwrController',
                                                        files: ['partials/layout/contents/DEV/jstree/DWR/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/DWR/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/DWR/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.lucene = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'luceneService',
                                                        files: ['partials/layout/contents/DEV/jstree/Lucene/service.js']
                                                      },
                                                      {
                                                        name: 'luceneController',
                                                        files: ['partials/layout/contents/DEV/jstree/Lucene/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/Lucene/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/Lucene/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.hadoop = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'hadoopService',
                                                        files: ['partials/layout/contents/DEV/jstree/Hadoop/service.js']
                                                      },
                                                      {
                                                        name: 'hadoopController',
                                                        files: ['partials/layout/contents/DEV/jstree/Hadoop/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/Hadoop/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/Hadoop/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.machineLearning = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'machineLearningService',
                                                        files: ['partials/layout/contents/DEV/jstree/MachineLearning/service.js']
                                                      },
                                                      {
                                                        name: 'machineLearningController',
                                                        files: ['partials/layout/contents/DEV/jstree/MachineLearning/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/jstree/MachineLearning/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/jstree/MachineLearning/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.confluence = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'confluenceService',
                                                        files: ['partials/layout/contents/DEV/tools/confluence/service.js']
                                                      },
                                                      {
                                                        name: 'confluenceController',
                                                        files: ['partials/layout/contents/DEV/tools/confluence/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/confluence/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/confluence/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.jira = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'jiraService',
                                                        files: ['partials/layout/contents/DEV/tools/jira/service.js']
                                                      },
                                                      {
                                                        name: 'jiraController',
                                                        files: ['partials/layout/contents/DEV/tools/jira/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/jira/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/jira/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.github = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'githubService',
                                                        files: ['partials/layout/contents/DEV/tools/github/service.js']
                                                      },
                                                      {
                                                        name: 'githubController',
                                                        files: ['partials/layout/contents/DEV/tools/github/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/github/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/github/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.fisheyeCrucible = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'fisheyeCrucibleService',
                                                        files: ['partials/layout/contents/DEV/tools/fisheyeCrucible/service.js']
                                                      },
                                                      {
                                                        name: 'fisheyeCrucibleController',
                                                        files: ['partials/layout/contents/DEV/tools/fisheyeCrucible/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/fisheyeCrucible/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/fisheyeCrucible/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.nas = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'nasService',
                                                        files: ['partials/layout/contents/DEV/tools/nas/service.js']
                                                      },
                                                      {
                                                        name: 'nasController',
                                                        files: ['partials/layout/contents/DEV/tools/nas/controller.js']
                                                      },
                                                      'partials/layout/contents/nas/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/nas/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.nexus = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'nexusService',
                                                        files: ['partials/layout/contents/DEV/tools/nexus/service.js']
                                                      },
                                                      {
                                                        name: 'nexusController',
                                                        files: ['partials/layout/contents/DEV/tools/nexus/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/nexus/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/nexus/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.bamboo = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'bambooService',
                                                        files: ['partials/layout/contents/DEV/tools/bamboo/service.js']
                                                      },
                                                      {
                                                        name: 'bambooController',
                                                        files: ['partials/layout/contents/DEV/tools/bamboo/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/bamboo/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/bamboo/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.hudson = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'hudsonService',
                                                        files: ['partials/layout/contents/DEV/tools/hudson/service.js']
                                                      },
                                                      {
                                                        name: 'hudsonController',
                                                        files: ['partials/layout/contents/DEV/tools/hudson/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/hudson/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/hudson/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.maven = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'mavenService',
                                                        files: ['partials/layout/contents/DEV/tools/maven/service.js']
                                                      },
                                                      {
                                                        name: 'mavenController',
                                                        files: ['partials/layout/contents/DEV/tools/maven/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/maven/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/maven/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.sonar = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'sonarService',
                                                        files: ['partials/layout/contents/DEV/tools/sonar/service.js']
                                                      },
                                                      {
                                                        name: 'sonarController',
                                                        files: ['partials/layout/contents/DEV/tools/sonar/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/sonar/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/sonar/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.google = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'googleService',
                                                        files: ['partials/layout/contents/DEV/tools/google/service.js']
                                                      },
                                                      {
                                                        name: 'googleController',
                                                        files: ['partials/layout/contents/DEV/tools/google/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/google/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/google/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.naver = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'naverService',
                                                        files: ['partials/layout/contents/DEV/tools/naver/service.js']
                                                      },
                                                      {
                                                        name: 'naverController',
                                                        files: ['partials/layout/contents/DEV/tools/naver/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/tools/naver/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/tools/naver/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.backendDevelopers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'backendDevelopersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/backendDevelopers/service.js']
                                                      },
                                                      {
                                                        name: 'backendDevelopersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/backendDevelopers/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/backendDevelopers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/backendDevelopers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.customers = function() {

                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'customersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/customers/service.js']
                                                      },
                                                      {
                                                        name: 'customersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/customers/controller.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/customers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/customers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };

                                $scope.frontendDevelopers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'frontendDevelopersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/controller.js']
                                                      },
                                                      {
                                                        name: 'frontendDevelopersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/service.js']
                                                      },
                                                      {
                                                        name: 'frontendDevelopersDirective',
                                                        files: ['partials/layout/contents/DEV/stakeholder/frontendDevelopers/directive.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/frontendDevelopers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/frontendDevelopers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };
                                $scope.systemEngineers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      {
                                                        name: 'systemEngineersService',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/service.js']
                                                      },
                                                      {
                                                        name: 'systemEngineersController',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/controller.js']
                                                      },
                                                      {
                                                        name: 'systemEngineersDirective',
                                                        files: ['partials/layout/contents/DEV/stakeholder/systemEngineers/directive.js']
                                                      },
                                                      'partials/layout/contents/DEV/stakeholder/systemEngineers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/systemEngineers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };
                                $scope.projectManagers = function() {
                                  $ocLazyLoad
                                          .load(
                                                  [
                                                      'partials/layout/contents/DEV/stakeholder/projectManagers/index.css'])
                                          .then(
                                                  function() {
                                                    $scope.contentWrapper = "partials/layout/contents/DEV/stakeholder/projectManagers/";
                                                  }, function(e) {
                                                    console.log(e);
                                                  });
                                };
                              }]);// indexModule.controller

          devIndexModule.controller('devContentsController', ['$scope',
              '$ocLazyLoad', 'devLayoutService',
              function($scope, $ocLazyLoad, devLayoutService) {
                console.log('devContentsController');
              }]);// devContentsController.controller

          devIndexModule.controller('devAsideController', ['$scope',
              '$ocLazyLoad', 'devLayoutService',
              function($scope, $ocLazyLoad, devLayoutService) {
                console.log('devAsideController');
              }]);// devContentsController.controller

        });
