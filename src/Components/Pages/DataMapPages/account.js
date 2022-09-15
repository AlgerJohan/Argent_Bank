import React from "react";

/**
 * The second div element has a class name of account-content-wrapper cta.
 * @param props - The props object is a parameter that's passed into your component. It contains all
 * the data that's passed to the component from a parent component.
 */
const Accounts = (props) =>
  props.data.map((account, index) => (
    <section key={index} className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{account.title}</h3>
        <p className="account-amount">{account.amount}</p>
        <p className="account-amount-description">{account.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">{account.cta}</button>
      </div>
    </section>
  ));

export default Accounts;
