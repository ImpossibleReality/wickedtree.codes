// @flow
import { graphql, Link } from 'gatsby';
import * as React from 'react';
import styles from './Subscribe.module.scss';
import $ from 'jquery';
import { NAVICONS } from '../../../constants';


class Subscribe extends React.Component {
    render () {
        let emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let subscribeInfo = {}
        function emailSubmit () {
            let input = document.getElementsByClassName(styles['subscribe-new-email'])[0].value;
            if (emailRegExp.test(input)) {
                document.getElementsByClassName(styles['subscribe-err'])[0].innerHTML = ""
                subscribeInfo.type = "email";
                subscribeInfo.email = input;
                $("." + styles['subscribe-new']).css("transform", "translateX(-120%)");
                // window.OneSignal.push(() => {window.OneSignal.setEmail(input)});
            } else {
                document.getElementsByClassName(styles['subscribe-err'])[0].innerHTML = "Invalid Email"
            }
        }

        function pushSubscribe () {

            // window.OneSignal.push(() => {window.OneSignal.showCategorySlidedown()});
        }
        return(
            <div className={styles['subscription-modal']}>
                <div className={styles['subscribe-new']}>
                    <h1>
                        Subscribe
                    </h1>
                    <span className={styles['subscribe-desc']}>
                        Subscribe to get updates about our newest posts
                    </span>
                    <label htmlFor="email">Your email</label>
                    <input id="email" className={styles['subscribe-new-email']} type="email" placeholder="john.doe@mydomain.com" /><br />
                    <button className={[styles['subscribe-new-submit'], styles['subscribe-btn']].join(" ")} onClick={emailSubmit}>Lets Go!</button><br />
                    <span className={styles['subscribe-err']}></span>
                    <span className={styles['subscribe-new-or']}>OR</span>
                    <button className={styles['subscribe-btn']} onClick={pushSubscribe}>Use push notifications</button><br />
                </div>
                <div className={styles['subscribe-choose']}>
                    <div className={styles['subscribe-choose-back']}><svg xmlns="http://www.w3.org/2000/svg" viewBox={NAVICONS.BACK.viewBox}><path d={NAVICONS.BACK.path} /></svg></div>
                </div>
            </div>
        );
    }
}

export default Subscribe;