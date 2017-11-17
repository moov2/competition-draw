(function () {
    var START_KEY = 32,
        DURATION_LOWER = 10,
        DURATION_UPPER = 20;

    var data = [
        { name: 'Andrea Thomas', info: '@andreablack' },
        { name: 'Dan Thomas', info: '@dannyt' },
        { name: 'Peter Keating', info: '@peterkeating' },
        { name: 'Larwence Dine', info: '@ldine' },
        { name: 'Ben Gammon', info: '@bengammon' },
        { name: 'Joe Berkley', info: '@joeeigel' },
        { name: 'Mobin Zadeh Koochak', info: '@mobinzk' },
        { name: 'Ben Joy', info: '@benjoy93' },
        { name: 'Sam Prince', info: '' }
    ],
    total = data.length,
    $selectedItem = document.querySelector('.js-selected-item'),
    target = { x: 0 },
    prev;

    /**
     * 
     */
    var checkStart = function (e) {
        if (e.keyCode !== START_KEY) {
            return;
        }

        start();
    };

    var complete = function () {
        window.step();
    };
    
    var setItem = function () {
        if (prev === target.x.toFixed(2)) {
            return;
        }

        prev = target.x.toFixed(2);

        var item = data[Math.round(Math.random() * ((total - 1) - 0) + 0)];
        $selectedItem.innerHTML = '<h1>' + item.name + '</h1><h2>' + item.info + '</h2>';
    };

    var start = function () {
        var duration = Math.round(Math.random() * (DURATION_UPPER - DURATION_LOWER) + DURATION_LOWER),
            tween;

        if (window.isCelebration) {
            window.cancelCelebration = true;
        }

        prev = target.x = 0;
        
        tween = new TweenLite(target, duration, { 
            x: 1,
            ease: Power1.easeInOut,
            onUpdate: setItem,
            onComplete: complete
        });
    };

    window.addEventListener('keyup', checkStart);
})();


