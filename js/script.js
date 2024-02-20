const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: 'tab1',
            tabs: {
                'tab1': {'img':'bundles', 'title': 'Пакеты услуг', 'text': 'Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, инициированные исключительно синтетически, призваны к ответу. Безусловно, укрепление и развитие внутренней структуры предполагает независимые способы реализации системы обучения кадров!'},
                'tab2': {'img':'internet', 'title': 'Интернет', 'text': 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'},
                'tab3': {'img':'tv', 'title': 'Цифровое ТВ', 'text': 'Генерация рыбатекста происходит довольно просто: есть несколько фиксированных наборов фраз и словочетаний, из которых в опредёленном порядке формируются предложения. Предложения складываются в абзацы — и вы наслаждетесь очередным бредошедевром.'},
                'tab4': {'img':'services', 'title': 'Цифровые сервисы', 'text': 'Сама идея работы генератора заимствована у псевдосоветского "универсального кода речей", из которого мы выдернули используемые в нём словосочетания, запилили приличное количество собственных, в несколько раз усложнили алгоритм, добавив новые схемы сборки.'},
            }
        }
    },
    computed: {
        currentTabComponent() {
            return this.tabs[this.currentTab];
        }
    },
    methods: {
        setActive(key) {
            this.currentTab = key;
        }
    }
}).mount('#app');