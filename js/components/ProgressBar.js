import { renderSocials } from "./renderSocials";

const progress {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
    }

    isValidSelector() {
        if (typeof this.selector !=='string' ||
        this.selector === '') {
        console.error('ERROR: netinkamo formto selectorius.');
        return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('ERROR: nurodyto elemento pagal duota selectoriu nera.');
            return false;
        }
        this.DOM = DOM;

        return true;
    }

    render() {
        let HTML = 'DEMO PROGRESS BAR CONTENT...';

        this.DOM.innerHTML += HTML;
    
    }
}

export { progress }
