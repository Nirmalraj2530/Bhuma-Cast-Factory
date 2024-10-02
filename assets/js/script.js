
        // reveal website 

        window.addEventListener('scroll', slided);

        function slided() {
            var slideLeft = document.querySelectorAll('.slided');

            for (var i = 0; i < slideLeft.length; i++) {
                var windowHeight = window.innerHeight;

                var slidtop = slideLeft[i].getBoundingClientRect().top;

                var slidPoint = 50;

                if (slidtop < windowHeight - slidPoint) {
                    slideLeft[i].classList.add('active');
                }
                else {
                    slideLeft[i].classList.remove('active');
                }


            }
        }

        ///////////////////////////////////////////////////

        
        // reveal website 

        window.addEventListener('scroll', slided1);

        function slided1() {
            var slide1Left = document.querySelectorAll('.slided1');

            for (var i = 0; i < slide1Left.length; i++) {
                var window1Height = window.innerHeight;

                var slid1top = slide1Left[i].getBoundingClientRect().top;

                var slid1Point = 50;

                if (slid1top < window1Height - slid1Point) {
                    slide1Left[i].classList.add('active');
                }
                else {
                    slide1Left[i].classList.remove('active');
                }


            }
        }
        
      