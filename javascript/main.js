'use strict';

/* ###### DOM Elements ###### */
const body = document.querySelector('body');
const openSettingsButton = document.querySelector('.open-settings-button');
const closeSettingsButton = document.querySelector('.close-settings-button');
const pageTitle = document.querySelector('h1');
const newPageTitleInput = document.querySelector('.new-page-title-input');
const changePageTitleButton = document.querySelector('.page-title-change-btn');
const optionsPanel = document.querySelector('.options-panel');
const newPageTitleColorInput = document.querySelector('.new-page-title-color-input');
const newPageBackgroundColorInput = document.querySelector('.new-page-background-color-input');
const pageTitleSize = document.querySelector('.page-title-size');
const resetOptionsButton = document.querySelector('.reset-options-button');

/* ###### Functions ###### */
let f_changePageTitle = () => {
    if(newPageTitleInput.value != ''){
        pageTitle.textContent = newPageTitleInput.value;
    }
};
let f_showOptionsPanel = () => {
    if(optionsPanel.style.display === 'none' || !optionsPanel.style.display){
        optionsPanel.style.display = 'block';
    }
    else{
        optionsPanel.style.display = 'none';
    }
};
let f_hideOptionsPanel = () => {
    optionsPanel.style.display = 'none';
}
let f_changePageTitleColor = () => {
    pageTitle.style.color = newPageTitleColorInput.value;
};
let f_changePageBackgroundColor = () => {
    body.style.backgroundColor = newPageBackgroundColorInput.value;
};
let f_changePageTitleSize = () => {
    pageTitle.style.fontSize = `${pageTitleSize.value}px`;
};
let f_resetOptions = () => {
    pageTitle.textContent = 'Mon projet JS';
    pageTitle.style.fontSize = '24px';
    pageTitle.style.color = '#000';
    body.style.backgroundColor = '#fff';
};
/* ###### Event listeners ###### */

changePageTitleButton.addEventListener('click', f_changePageTitle);
openSettingsButton.addEventListener('click', f_showOptionsPanel);
closeSettingsButton.addEventListener('click', f_hideOptionsPanel);
newPageTitleColorInput.addEventListener('change', f_changePageTitleColor);
newPageBackgroundColorInput.addEventListener('change', f_changePageBackgroundColor);
pageTitleSize.addEventListener('change', f_changePageTitleSize);
resetOptionsButton.addEventListener('click', f_resetOptions);