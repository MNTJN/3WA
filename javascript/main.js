'use strict';

/* ###### DOM Elements ###### */
const body = document.querySelector('body');
const pageTitle = document.querySelector('.page-title');
const pageSettingsPanel = document.querySelector('.page-settings-panel');
const pageSettingsButton = document.querySelector('.page-settings-panel-button');
const articleSettingsPanel = document.querySelector('.article-settings-panel');
const articlesSection = document.querySelector('.articles-section');
const deleteArticleButton = document.querySelector('.delete-article-button');
const changeArticleTitleButton = document.querySelector('.new-article-title-ok-button');
const changeArticleTextContentButton = document.querySelector('.new-article-text-content-ok-button');
const changeArticleTitleColorButton = document.querySelector('.new-article-title-color-input');
const changeArticleBackgroundColorButton = document.querySelector('.new-article-background-color-input');
const addArticleImageButton = document.querySelector('.new-article-image-link-ok-button');
const deleteArticleImageButton = document.querySelector('.new-article-image-link-delete-button');
let targetArticle = null;

/* ###### Functions ###### */
const f_onSettingsPanelOpen = () => {
    //reset setting panel's inputs values according to current elements style values

    // *page title input*
    document.querySelector('.new-page-title-input').value = '';

    // *page title color input*
    document.querySelector('.new-page-title-color-input').value = window.getComputedStyle(pageTitle).color;

    // *page title font size*
    document.querySelector('.page-title-font-size-input').value = window.getComputedStyle(pageTitle).fontSize;

    // *page background color*
    document.querySelector('.new-page-background-color-input').value = window.getComputedStyle(body).color;

    // *article title*
    document.querySelector('.new-article-title-input').value = '';

    // *article text content*
    document.querySelector('.new-article-text-content-input').value = '';

    // *article title color input*
    if(targetArticle){
        if(targetArticle.querySelector('h2')){
            changeArticleTitleColorButton.value = window.getComputedStyle(targetArticle.querySelector('h2')).color;
        }
    }

    // *article background color input*
    if(targetArticle){
        changeArticleBackgroundColorButton.value = window.getComputedStyle(targetArticle).backgroundColor;
    }
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
    pageTitle.style.fontSize = `${document.querySelector('.page-title-font-size-input').value}px`;
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
const f_deleteArticle = () => {
    targetArticle.remove();
    f_toggleArticleSettingsPanel();
};
const f_changeArticleTitle = () => {
    if(document.querySelector('.new-article-title-input').value !== ''){
        targetArticle.querySelector('h2').textContent = document.querySelector('.new-article-title-input').value;
    }
};
const f_changeArticleTextContent = () => {
    if(document.querySelector('.new-article-text-content-input').value !== ''){
        targetArticle.querySelector('p').innerText = document.querySelector('.new-article-text-content-input').value;
    }
};
const f_changeArticleTitleColor = () => {
    targetArticle.querySelector('h2').style.color = changeArticleTitleColorButton.value;
};
const f_changeArticleBackgroundColor = () => {
    targetArticle.style.backgroundColor = changeArticleBackgroundColorButton.value;
};
const f_addArticleImage = e => {
    if(targetArticle.querySelector('img')){
        console.log('image exists');
        targetArticle.querySelector('img').setAttribute('src', document.querySelector('.new-article-image-url').value);
    }
    else{
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('article-image-container');
        let img = document.createElement('img');
        targetArticle.appendChild(imgContainer);
        img.setAttribute('src', document.querySelector('.new-article-image-url').value);
        imgContainer.appendChild(img);
        console.log('image created');
    }
};
const f_deleteArticleImage = e => {
    if(targetArticle.querySelector('img')){
        targetArticle.removeChild(targetArticle.querySelector('.article-image-container'));
    }
}
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
        targetArticle = e.target.parentNode.parentNode;
        f_onSettingsPanelOpen();
        f_toggleArticleSettingsPanel();
    }
});
document.addEventListener('change', e => {
    const targetClassList = e.target.classList;

    //Change page title font size
    if(targetClassList.contains('page-title-font-size-input')){
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

changeArticleTitleButton.addEventListener('click', f_changeArticleTitle);

changeArticleTextContentButton.addEventListener('click', f_changeArticleTextContent);

addArticleImageButton.addEventListener('click', f_addArticleImage);

deleteArticleImageButton.addEventListener('click', f_deleteArticleImage);

changeArticleTitleColorButton.addEventListener('change', f_changeArticleTitleColor);

changeArticleBackgroundColorButton.addEventListener('change', f_changeArticleBackgroundColor);