'use strict';
(function() {
    var SkillCreator = (function() {
        return function() {
            var listParentElem = $('#skills-list');
            var skillBlock = function(skillItem) {
                return (
                '<li data-level=' + skillItem.level + '>' +
                    '<div class="row">' +
                        '<div class="col-xm-12 col-sm-3">' +
                            '<p class="text-right skill-name">' + skillItem.name + '</p>' +
                        '</div>' +
                        '<div class="col-xm-12 col-sm-9 skill-item">' +
                            '<div class="skill-graph">' +
                                '<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>' +
                            '</div>' +
                            '<p class="skill-level">'+ skillItem.level +'</p>' +
                        '</div>' +
                    '</div>' +
                '</li>');
            };
            
            var skillsJSON = [
                {
                    name: 'HTML/ CSS',
                    level: 10
                },
                {
                    name: 'JavaScript, jQuery',
                    level: 8
                },
                {
                    name: 'CoffeeScript',
                    level: 6
                },
                {
                    name: 'BackboneJS, Marionette',
                    level: 9
                },
                {
                    name: 'Node JS',
                    level: 7
                },
                {
                    name: 'Mongo DB',
                    level: 6
                },
                {
                    name: 'Grunt, RequireJS, Browserify',
                    level: 8
                },
                {
                    name: 'UI/UX Design',
                    level: 6
                }
            ];
            
            skillsJSON.forEach(function(skillItem) {
                listParentElem.append(skillBlock(skillItem));
            });
            
            listParentElem.find('> li').each(function() {
                var  __this = $(this);
                var level = parseInt(__this.data('level'));
                var intervalCounter = setInterval((function(internalLevel) {
                    return function() {
                        if (internalLevel++ >= level) {
                            clearInterval(intervalCounter);
                            __this
                                .find('.skill-level')
                                .css({left: ((level/2 * 10)) + '%'})
                                .fadeIn();
                            
                            return;
                        }
                        __this
                            .find('.skill-graph > span:nth-child(' + internalLevel + ')')
                            .addClass('selected');
                    };
                })(0), 150);
            });
        };

    })();
    
    new SkillCreator();
}());
