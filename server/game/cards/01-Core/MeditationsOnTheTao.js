const ProvinceCard = require('../../provincecard.js');
const { CardTypes } = require('../../Constants');

class MeditationsOnTheTao extends ProvinceCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Remove a fate from a character',
            target: {
                cardType: CardTypes.Character,
                cardCondition: card => card.isAttacking(),
                gameAction: ability.actions.removeFate()
            }
        });
    }
}

MeditationsOnTheTao.id = 'meditations-on-the-tao';

module.exports = MeditationsOnTheTao;
