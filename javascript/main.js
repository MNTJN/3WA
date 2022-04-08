'use strict';

/* ###### DOM Elements ###### */
const body = document.querySelector('body');
const pageTitle = document.querySelector('.page-title');
const pageSettingsPanel = document.querySelector('.page-settings-panel');
const pageSettingsButton = document.querySelector('.page-settings-panel-button');
const articleSettingsPanel = document.querySelector('.article-settings-panel');
const articlesSection = document.querySelector('.articles-section');
const deleteArticleButton = document.querySelector('.delete-article-button');
let articleSelectionne = null;

/* ###### Functions ###### */
const f_onSettingsPanelOpen = () => {
    //reset setting panel's inputs values according to current elements style values

    // *page title input*
    document.querySelector('.new-page-title-input').value = '';

    // *page title color*
    document.querySelector('.new-page-title-color-input').value = window.getComputedStyle(pageTitle).color;

    // *page title font size*
    document.querySelector('.page-title-font-size').value = window.getComputedStyle(pageTitle).fontSize;

    // *page background color*
    document.querySelector('.new-page-background-color-input').value = window.getComputedStyle(body).color;
};
const f_generateArticle = () => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article-item');
    return newArticle;
};
const f_generateArticleSettingsButton = () => {
    //Generate article settings button (+ container)
    const articleSettingsPanelButtonContainer = document.createElement('div');
    articleSettingsPanelButtonContainer.classList.add('article-settings-panel-button-container');
    const articleSettingsPanelButton = document.createElement('i');
    articleSettingsPanelButton.classList.add('fas','fa-cog','article-settings-panel-button');

    articleSettingsPanelButtonContainer.appendChild(articleSettingsPanelButton);

    return articleSettingsPanelButtonContainer;
};
const f_generateArticleTitle = () => {
    const articleTitle = document.createElement('h2');
    articleTitle.textContent = `Titre de l'article`;

    return articleTitle;
};
const f_generateArticleTextContent = () => {
    const articleTextContent = document.createElement('p');
    articleTextContent.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In totam cum amet debitis quia voluptates fugit quis molestiae error ut quod quam, vitae distinctio dicta quidem maxime eveniet sint quaerat! Modi ea natus, et adipisci delectus voluptas, minima laudantium non quos rem assumenda atque cumque suscipit at aliquam excepturi unde, odio optio. Atque dicta, ducimus veritatis soluta, perspiciatis dolor facilis nam nisi ipsum nesciunt dignissimos sequi molestias itaque? Perferendis sunt fugiat aliquam consectetur repudiandae, voluptatibus esse, deserunt quam natus qui nam?';

    return articleTextContent;
};
const f_addArticle = () => {

    const newArticle = f_generateArticle();
    const articleSettingsPanelButtonContainer = f_generateArticleSettingsButton();
    const articleTitle = f_generateArticleTitle();
    const articleTextContent = f_generateArticleTextContent();

    //append elements
    newArticle.appendChild(articleSettingsPanelButtonContainer);
    newArticle.appendChild(articleTitle);
    newArticle.appendChild(articleTextContent);
    articlesSection.appendChild(newArticle);

    //Set ID to article
    let numberOfArticles = 0;
    if(document.querySelector('.article-item')){
        numberOfArticles = document.querySelectorAll('.article-item').length;
    }
    newArticle.setAttribute('id', numberOfArticles);
};
const f_togglePageSettingsPanel = () => {
    pageSettingsPanel.classList.toggle('show');
    pageSettingsPanel.classList.toggle('hide');
};
const f_changePageTitle = () => {
    if(document.querySelector('.new-page-title-input').value !== ''){
        pageTitle.textContent = document.querySelector('.new-page-title-input').value;
    }
}
const f_changePageTitleFontSize = () => {
    pageTitle.style.fontSize = `${document.querySelector('.page-title-font-size').value}px`;
};
const f_changePageTitleColor = () => {
    pageTitle.style.color = document.querySelector('.new-page-title-color-input').value;
};
const f_changePageBackgroundColor = () => {
    body.style.backgroundColor = document.querySelector('.new-page-background-color-input').value;
};
const f_resetPageSettings = () => {
    pageTitle.textContent = 'Mon Projet JS';
    pageTitle.style.fontSize = '24px';
    pageTitle.style.color = '#000';
    body.style.backgroundColor = '#fff';
};
const f_toggleArticleSettingsPanel = () => {
    articleSettingsPanel.classList.toggle('show');
    articleSettingsPanel.classList.toggle('hide');
};
const f_deleteArticle = e => {
    e.preventDefault();
    articleSelectionne.remove();
    f_toggleArticleSettingsPanel();
};
/* ###### Event listeners ###### */
document.addEventListener('click', e => {
    const targetClassList = e.target.classList;

    //Page settings panel open/close buttons
    if(targetClassList.contains('page-settings-panel-button') || targetClassList.contains('page-settings-panel-close-button')){
        f_onSettingsPanelOpen();
        f_togglePageSettingsPanel();
    }

    //Change page title
    else if(targetClassList.contains('page-title-change-button')){
        f_changePageTitle(); 
    }

    //Add article
    else if(targetClassList.contains('add-article-button')){
        f_addArticle();
    }

    //Reset page settings
    else if(targetClassList.contains('reset-page-settings-button')){
        f_resetPageSettings();
        f_onSettingsPanelOpen();
    }

    //Article settings panel open/close buttons
    else if(targetClassList.contains('article-settings-panel-button') || targetClassList.contains('article-settings-panel-close-button')){
        articleSelectionne = e.target.parentNode.parentNode;
        f_onSettingsPanelOpen();
        f_toggleArticleSettingsPanel();
    }
});
document.addEventListener('change', e => {
    const targetClassList = e.target.classList;

    //Change page title font size
    if(targetClassList.contains('page-title-font-size')){
        f_changePageTitleFontSize();
    }

    //Change page title font color
    else if(targetClassList.contains('new-page-title-color-input')){
        f_changePageTitleColor(); 
    }

    //Change page background color
    else if(targetClassList.contains('new-page-background-color-input')){
        f_changePageBackgroundColor(); 
    }
});

deleteArticleButton.addEventListener('click', f_deleteArticle);

const test = document.querySelector('#test');
const clicked = e => {
    console.log('test button clicked !');
    test.removeEventListener('click', clicked);
}
test.addEventListener('click', clicked);