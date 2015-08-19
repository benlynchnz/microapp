import React from "react";

let dispatch = (element, action, payload, evt) => {
  let type = evt ? evt : "event";

  let event = new CustomEvent(type, {
    detail: { action, payload },
  });

  element.dispatchEvent(event);
};

export default class Dashboard extends React.Component {
  componentDidMount() {
    dispatch(document, null, null, "render");

    let datePicker = document.getElementById("foo");
    let datePickerHandler = function(e) {
      console.log("ACTION:: " + e.detail.action);
      console.log("PAYLOAD:: " + e.detail.payload);
    };
    datePicker.addEventListener("event", datePickerHandler);
  }
  render() {
    return (
      <div>
        <react-datepicker id="foo"></react-datepicker>
      </div>
    );
  }
}
