// This section defines behavior for basic playing cards:


function getCardName(suit, num)
{
    if (suit < 1 || suit > 4) throw new Error("Error--suit index out of range");
    if (num < 1 || num > 13) throw new Error("Error--card number out of range");
    var suitStr = "";
    var cardStr = "";
    switch(suit)
    {
        case 1: suitStr = "spades"; break;
        case 2: suitStr = "clubs"; break;
        case 3: suitStr = "diamonds"; break;
        case 4: suitStr = "hearts"; break;
    }
    if (num == 1) cardStr = "ace";
    else if (num == 11) cardStr = "jack";
    else if (num == 12) cardStr = "queen";
    else if (num == 13) cardStr = "king";
    else cardStr = num.toString();
    return suit + "_" + cardStr;
} // returns in suit_number form (ie: spades_ace, diamonds_3)

class Card
{
    suitNum; // spades is 1, followed by clubs, diamonds, hearts
    valNum; // ace is 1, jack is 11, queen 12 and king 13
    nameStr; // <suit>_<val>
    constructor(suit, num)
    {
        suitNum = suit;
        valNum = num;
        nameStr = getCardName(suit, num);
    }
}

var masterDeck = new Array(52);

class Deck
{
    cards = new Array(52);
    // constructor()
    // {
    //     for (var suit = 1; suit <= 4; ++suit) // In order: spades, clubs, diamonds, hearts
    //     {
    //         for (var num = 1; num <= 13; ++num) // 1=ace, 11=jack, 12=queen, 13=king
    //         {
    //             var card = new Card(suit, num);
    //             cards[(suit - 1)*13 + num - 1] = card;
    //         }
    //     }
    // }

    constructor()
    {
        for (var i = 0; i < 52; ++i)
        {
            tempCards = new Array(52);
            tempCards[i] = cards[Math.trunc(52 * Math.random())]; // picks a random int from 0 - 51
        }
        cards = tempCards;
    }
}

class Hand
{
    card1;
    card2;
    constructor(cards) // can be empty array or populated with two cards
    {
        if (cards.length != 2 && cards.length != 0) throw new Error("Error--hands must contain 2 or 0 cards");
        if (cards.length == 2)
        {
            card1 = cards[0];
            card2 = cards[1];
        }
        card1 = null;
        card2 = null;
    }

}

class Table
{
    users; // array of Hand objects
    constructor(numUsers)
    {
        users = new Array(numUsers);
        for (var i = 0; i < numUsers; ++i)
        {
            users[i] = new Hand([]);
        }
    }
}
class Deal
{
    table // table object, contains user's hands
    deck; // deck object, containing remaining cards
    discard; // discarded cards
    communityCards; // community cards (flop, turn and river)

    constructor(_table /*pass in a table object*/)
    {
        table = _table;
        deck = new Deck();
        discard = [];
        communityCards = [];
    }
}

// End playing card behavior section^
