var jason = [
    
       "That's  a gimmick meant to cover up for the failure of the U.N Security Council to do anything for the last six years. Now they are playing the scare game",

       "It's too late. It could have been mended a long time ago without going and resorting to this unnecessary war ... If you can be an angel or someone like Christ, maybe.",

       "It's part of a plan meant to weaken the Somali resistance ... I don't see any useful purpose.",

		   "You would categorise anything terrorist or linked with terrorism when you have failed to address the issues seriously. You can go back to the early 90s and see how the United States played the Somali issue. Now they want to find some excuse ... Especially since 9/11, terrorism has become a pretext for any wrongdoing anywhere.",

       "The resistance will continue until the Somalis are given the opportunity to find a solution for themselves. Somalis will prevail at the end of the day.",

       "You need to come with evidence, with facts ... We are fed up of this thing, and we are not worried at all because it's become very transparent and obvious to everyone that these people are doing wrong things and finding excuses andtrying to find scapegoats for their wrongdoing.",

      "If there was a way to provide the Somali resistance with anything, we could have done that without any hesitation if that was possible.",
	
		  "We would like integration more than anybody else ... Self-reliance is interpreted as an isolationist trend, which it is not at all ... Self-reliance is preparing yourself for partnership, equal partnership.",
          
      "We decline the invitation to go into another crisis.",


			"The gold reserves in this country are not comparable to anywhere in the region -- Sudan, Ethiopia, anywhere else. The Italians (colonisers) discovered this. We're not re-inventing anything new. The reserves and potential are huge.",

			"This is the property of the people of this country ... If it goes otherwise, then it becomes a curse.",

			"We need to spend, we need to be over-stretched, we need to have a lot of stress so that we can overcome problems for the future.",
			"We are not the perfect economy.",

			"I can assure you that in spite of the low GDP growth in this country, the quality of life has been improving.",
			"It has to come ... I have nothing to benefit by postponing a political process. I wouldn't like an election a la Kenya-style or the Zimbabwean style, or the Palestinian style, or the Afghani style.",

      "It's not anything personal. I will stay as long as it takes. That's not my choice, that's not my preference. It has to be decided based on the situation on the ground ... I will not be scared by someone coming telling me 'well you have to go, we have to find a change' ... I'm not a fool.",

      "It's very small numbers (arrested) and we are not shy to say these are individuals who've done harm to the national security of this country We are not questioning the fact that we have done this and we will continue to do it. This has nothing to do with human rights.",

      "No one has the right to point a finger at us.",

      "Hundreds of young have been misled that there is heaven outside ... It's an orchestrated attempt to deplete this nation of its young ... financed by the CIA.",
            
	];

   var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    
    function newQuot() {

        var randomQuot = Math.floor(Math.random() * (jason.length));
        var colorsRandom = Math.floor(Math.random() * (colors.length));
       document.getElementById('quotDisplay').innerHTML = jason[randomQuot];
       document.getElementById('x').style.backgroundColor  = colors[colorsRandom];
        
    }







