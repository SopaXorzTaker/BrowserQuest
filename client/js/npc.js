
define(['character'], function(Character) {

    var NpcTalk = {
        "guard": [
            "Ну, привет",
            "Нам не нужно тебя опознавать",
            "Ты не игрок, которого мы ищем",
            "Иди, иди..."
        ],
    
        "king": [
            "Привет, я Король",
            "Я управляю этим местом",
            "Как босс",
            "Я говорю с людьми",
            "Как босс",
            "Я ношу корону",
            "Как босс",
            "Я весь день ничего не делаю",
            "Как босс",
            "А теперь, оставь меня одного",
            "Как босса"
        ],
    
        "villagegirl": [
            "Привет, путешественник!",
            "Ну что, тебе нравится эта игра?",
            "Всё это делается в одной веб-страничке, правда здорово?",
            "Это возможно благодаря веб-сокетам.",
            "Я мало об этом знаю, я же всё-таки простая программа.",
            'Почему бы тебе не прочитать этот <a target="_blank" href="http://hacks.mozilla.org/2012/03/browserquest/">пост в нашем блоге (англ.)</a> и всё про них узнать?'
        ],
    
        "villager": [
            "Приветствую, приятель! Ты любишь поэзию?",
            "Роза красна, а колокольчик синий...",
            "Охотится на крыс прекрасно, когда ты такой сильный!",
            "Крыс больше нет, что будешь делать ты?",
            "Често, я не знаю, а знаю только про цветы...",
            "Может, интересует тебя лес?",
            "А вообще, тут у нас полным-полно чудес."
        ],
    
        "agent": [
            "Не пытайся согнуть меч",
            "Это невозможно.",
            "Вместо этого, попробуй понять правду...",
            "Меча не существует."
        ],
    
        "rick": [
            "We're no strangers to love",
            "You know the rules and so do I",
            "A full commitment's what I'm thinking of",
            "You wouldn't get this from any other guy",
            "I just wanna tell you how I'm feeling",
            "Gotta make you understand",
            "Never gonna give you up",
            "Never gonna let you down",
            "Never gonna run around and desert you",
            "Never gonna make you cry",
            "Never gonna say goodbye",
            "Never gonna tell a lie and hurt you"
        ],
        
        "scientist": [
            "Приветствую.",
            "Я изобретатель этих зелий.",
            "Красное восполнит твой запас здоровья.",
            "А оранжевое сделает тебя неуязвымым огнелисом...",
            "Но действует оно недолго.",
            "Так что используй его аккуратно!",
            "А теперь, если позволишь, я вернусь к экспериментам."
        ],
    
        "nyan": [
            "Ня-ня ня ня ня",
            "ня ня ня ня ня",
            "Ня-ня ня ня",
            "Ня ня ня ня ня-ня ня-ня"
        ],
        
        "beachnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "forestnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "desertnpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
        
        "lavanpc": [
            "lorem ipsum dolor sit amet",
            "consectetur adipisicing elit, sed do eiusmod tempor"
        ],
    
        "priest": [
            "Oh, hello, young man.",
            "Wisdom is everything, so I'll share a few guidelines with you.",
            "You are free to go wherever you like in this world",
            "but beware of the many foes that await you.",
            "You can find many weapons and armors by killing enemies.",
            "The tougher the enemy, the higher the potential rewards.",
            "You can also unlock achievements by exploring and hunting.",
            "Click on the small cup icon to see a list of all the achievements.",
            "Please stay a while and enjoy the many surprises of BrowserQuest",
            "Farewell, young friend."
        ],
        
        "sorcerer": [
            "Ah... I had foreseen you would come to see me.",
            "Well? How do you like my new staff?",
            "Pretty cool, eh?",
            "Where did I get it, you ask?",
            "I understand. It's easy to get envious.",
            "I actually crafted it myself, using my mad wizard skills.",
            "But let me tell you one thing...",
            "There are lots of items in this game.",
            "Some more powerful than others.",
            "In order to find them, exploration is key.",
            "Good luck."
        ],
        
        "octocat": [
            "Welcome to BrowserQuest!",
            "Want to see the source code?",
            'Check out <a target="_blank" href="http://github.com/mozilla/BrowserQuest">the repository on GitHub</a>'
        ],
        
        "coder": [
            "Hi! Do you know that you can also play BrowserQuest on your tablet or mobile?",
            "That's the beauty of HTML5!",
            "Give it a try..."
        ],
    
        "beachnpc": [
            "Don't mind me, I'm just here on vacation.",
            "I have to say...",
            "These giant crabs are somewhat annoying.",
            "Could you please get rid of them for me?"
        ],
        
        "desertnpc": [
            "One does not simply walk into these mountains...",
            "An ancient undead lord is said to dwell here.",
            "Nobody knows exactly what he looks like...",
            "...for none has lived to tell the tale.",
            "It's not too late to turn around and go home, kid."
        ],
    
        "othernpc": [
            "lorem ipsum",
            "lorem ipsum"
        ]
    };

    var Npc = Character.extend({
        init: function(id, kind) {
            this._super(id, kind, 1);
            this.itemKind = Types.getKindAsString(this.kind);
            this.talkCount = NpcTalk[this.itemKind].length;
            this.talkIndex = 0;
        },
    
        talk: function() {
            var msg = null;
        
            if(this.talkIndex > this.talkCount) {
                this.talkIndex = 0;
            }
            if(this.talkIndex < this.talkCount) {
                msg = NpcTalk[this.itemKind][this.talkIndex];
            }
            this.talkIndex += 1;
            
            return msg;
        }
    });
    
    return Npc;
});
