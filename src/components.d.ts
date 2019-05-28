/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  Event,
  EventEmitter,
} from '@stencil/core';
import {
  OgCalendarDate,
  OgCalendarSelectionType,
  OgDateDecorator,
} from './components/og-calendar/interfaces/og-calendar-date-decorator';
import {
  Moment,
} from 'moment';
import {
  OgDatatableConfig,
} from './components/og-datatable/interfaces/og-datatable-column-def';


export namespace Components {

  interface OgButton {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the button
    */
    'label': string;
  }
  interface OgButtonAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the button
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onClicked'?: (event: CustomEvent<Event>) => void;
  }

  interface OgCalendarGroup {
    'dateDecorator': OgDateDecorator;
    'displayedMonths': number;
    'firstDayOfWeek': number;
    'month': number;
    'selection': OgCalendarDate[];
    'selectionType': OgCalendarSelectionType;
    'showCalendarWeek': boolean;
    'year': number;
  }
  interface OgCalendarGroupAttributes extends StencilHTMLAttributes {
    'dateDecorator'?: OgDateDecorator;
    'displayedMonths'?: number;
    'firstDayOfWeek'?: number;
    'month'?: number;
    'onDateClicked'?: (event: CustomEvent<OgCalendarDate>) => void;
    'onSelectionChanged'?: (event: CustomEvent<OgCalendarDate[]>) => void;
    'selection'?: OgCalendarDate[];
    'selectionType'?: OgCalendarSelectionType;
    'showCalendarWeek'?: boolean;
    'year'?: number;
  }

  interface OgCalendar {
    'dateDecorator': OgDateDecorator;
    'firstDayOfWeek': number;
    'month': number;
    'selection': OgCalendarDate[];
    'showCalendarWeek': boolean;
    'year': number;
  }
  interface OgCalendarAttributes extends StencilHTMLAttributes {
    'dateDecorator'?: OgDateDecorator;
    'firstDayOfWeek'?: number;
    'month'?: number;
    'onDateClicked'?: (event: CustomEvent<Moment>) => void;
    'selection'?: OgCalendarDate[];
    'showCalendarWeek'?: boolean;
    'year'?: number;
  }

  interface OgCard {
    /**
    * The title for this card (optional)
    */
    'name': string;
  }
  interface OgCardAttributes extends StencilHTMLAttributes {
    /**
    * The title for this card (optional)
    */
    'name'?: string;
  }

  interface OgCheckbox {
    /**
    * The value of the checkbox
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the checkbox
    */
    'label': string;
  }
  interface OgCheckboxAttributes extends StencilHTMLAttributes {
    /**
    * The value of the checkbox
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the checkbox
    */
    'label'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
  }

  interface OgCombobox {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty': string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty': string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value': string;
  }
  interface OgComboboxAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'itemLabelProperty'?: string;
    /**
    * Set the property for the items to define as value. Default: "value"
    */
    'itemValueProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value'?: string;
  }

  interface OgDatatable {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config': OgDatatableConfig;
    /**
    * Triggers a reload of the table data.
    */
    'reloadData': () => void;
    /**
    * Selected row identified by id-property
    */
    'selected': any;
    /**
    * Programatically update selected row by idProperty.
    */
    'setSelection': (id: any) => void;
  }
  interface OgDatatableAttributes extends StencilHTMLAttributes {
    /**
    * Table configuration (type OgDatatableConfig)
    */
    'config'?: OgDatatableConfig;
    /**
    * Item selection event. Event.detail contains selected item.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Selected row identified by id-property
    */
    'selected'?: any;
  }

  interface OgDatepicker {
    'dateDecorator': OgDateDecorator;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    'firstDayOfWeek': number;
    'format': string;
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value': string;
  }
  interface OgDatepickerAttributes extends StencilHTMLAttributes {
    'dateDecorator'?: OgDateDecorator;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    'firstDayOfWeek'?: number;
    'format'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onDateSelected'?: (event: CustomEvent<any>) => void;
    /**
    * Optional placeholder if no value is selected.
    */
    'placeholder'?: string;
    /**
    * The selected value of the combobox
    */
    'value'?: string;
  }

  interface OgConfirmDialog {
    /**
    * Label for cancel button.
    */
    'cancelLabel': string;
    /**
    * Label for confirmation button.
    */
    'confirmLabel': string;
    /**
    * The title for this modal dialog
    */
    'name': string;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon': string;
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgConfirmDialogAttributes extends StencilHTMLAttributes {
    /**
    * Label for cancel button.
    */
    'cancelLabel'?: string;
    /**
    * Label for confirmation button.
    */
    'confirmLabel'?: string;
    /**
    * The title for this modal dialog
    */
    'name'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onCancelled'?: (event: CustomEvent<Event>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onConfirmed'?: (event: CustomEvent<Event>) => void;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon'?: string;
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }

  interface OgDialog {
    /**
    * The title for this modal dialog.
    */
    'name': string;
    /**
    * SVG markup that can be styled by orgenic themes.
    */
    'svgIcon': string;
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgDialogAttributes extends StencilHTMLAttributes {
    /**
    * The title for this modal dialog.
    */
    'name'?: string;
    /**
    * SVG markup that can be styled by orgenic themes.
    */
    'svgIcon'?: string;
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }

  interface OgMessageDialog {
    /**
    * Label for approve button.
    */
    'approveLabel': string;
    /**
    * The title for this modal dialog
    */
    'name': string;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon': string;
    /**
    * Dialog type can be: success / warning / error / info with. An icon as well as the icon color will be automatically assigned.
    */
    'type': 'success' | 'warning' | 'error' | 'info';
    /**
    * Visibility state of this dialog.
    */
    'visible': boolean;
  }
  interface OgMessageDialogAttributes extends StencilHTMLAttributes {
    /**
    * Label for approve button.
    */
    'approveLabel'?: string;
    /**
    * The title for this modal dialog
    */
    'name'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onConfirmed'?: (event: CustomEvent<Event>) => void;
    /**
    * Optional SVG Icon as markup.
    */
    'svgIcon'?: string;
    /**
    * Dialog type can be: success / warning / error / info with. An icon as well as the icon color will be automatically assigned.
    */
    'type'?: 'success' | 'warning' | 'error' | 'info';
    /**
    * Visibility state of this dialog.
    */
    'visible'?: boolean;
  }

  interface OgExpander {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded': boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group': string;
    /**
    * The name for this expander
    */
    'name': string;
    /**
    * Use this method to toggle expanded state. Group property is respected when calling this method.
    */
    'toggleExpandedState': () => void;
  }
  interface OgExpanderAttributes extends StencilHTMLAttributes {
    /**
    * Sets or unsets the expanded state.
    */
    'expanded'?: boolean;
    /**
    * Optional group identifier for this expander. Expanders with same group will behave like an accordion, opening one expander will close other expanders.
    */
    'group'?: string;
    /**
    * The name for this expander
    */
    'name'?: string;
  }

  interface OgFormItem {
    'disabled': boolean;
    /**
    * The label for the form item
    */
    'label': string;
  }
  interface OgFormItemAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    /**
    * The label for the form item
    */
    'label'?: string;
  }

  interface OgNumberInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Maximum value for this component.
    */
    'max': number;
    /**
    * Minimum value for this component.
    */
    'min': number;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step': number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': number;
  }
  interface OgNumberInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Maximum value for this component.
    */
    'max'?: number;
    /**
    * Minimum value for this component.
    */
    'min'?: number;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<number>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Increment or decrement steps for the value.
    */
    'step'?: number;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: number;
  }

  interface OgPasswordInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility': boolean;
    'togglePasswordVisibility': () => void;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgPasswordInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * Define, whether a switch should be visible, to show the password in plain text.
    */
    'showTogglePasswordVisibility'?: boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgTextInput {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgTextInputAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus..
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * Optional placeholder text if input is empty.
    */
    'placeholder'?: string;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgListItem {
    /**
    * Set the url of the image to be shown in the placeholder
    */
    'image': string;
    /**
    * Set the flag, it this list item is in disabled state.
    */
    'isDisabled': boolean;
    /**
    * Set the flag, if this list item is in selected state.
    */
    'isSelected': boolean;
    /**
    * The value is needed for the using @see OgList instance to correctly handle selection.
    */
    'key': any;
    /**
    * Sets the value of the label.
    */
    'label': string;
    /**
    * Set flag, if place for an image is reserved, wheather used or not.
    */
    'showImage': boolean;
    /**
    * Set flag, if place for a value bage is reserved wheather used or not
    */
    'showValue': boolean;
    /**
    * Set the value to be shown in the badge placeholder
    */
    'value': string;
  }
  interface OgListItemAttributes extends StencilHTMLAttributes {
    /**
    * Set the url of the image to be shown in the placeholder
    */
    'image'?: string;
    /**
    * Set the flag, it this list item is in disabled state.
    */
    'isDisabled'?: boolean;
    /**
    * Set the flag, if this list item is in selected state.
    */
    'isSelected'?: boolean;
    /**
    * The value is needed for the using @see OgList instance to correctly handle selection.
    */
    'key'?: any;
    /**
    * Sets the value of the label.
    */
    'label'?: string;
    /**
    * Set flag, if place for an image is reserved, wheather used or not.
    */
    'showImage'?: boolean;
    /**
    * Set flag, if place for a value bage is reserved wheather used or not
    */
    'showValue'?: boolean;
    /**
    * Set the value to be shown in the badge placeholder
    */
    'value'?: string;
  }

  interface OgList {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Set the property for the items to define as disabled. Default: "disabled"
    */
    'disabledProperty': string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage': string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items': any[];
    /**
    * Set the property for the items to define as value. Default: "key"
    */
    'keyProperty': string;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'labelProperty': string;
    /**
    * The key of the selected list item
    */
    'selected': string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty': string;
  }
  interface OgListAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Set the property for the items to define as disabled. Default: "disabled"
    */
    'disabledProperty'?: string;
    /**
    * Set the that will be displayed if the items array is empty.
    */
    'emptyListMessage'?: string;
    /**
    * Set the property for the items to define as image url. *Optional* Default: no image
    */
    'imageUrlProperty'?: string;
    /**
    * An array of items to choose from
    */
    'items'?: any[];
    /**
    * Set the property for the items to define as value. Default: "key"
    */
    'keyProperty'?: string;
    /**
    * Set the property for the items to define as label. Default: "label"
    */
    'labelProperty'?: string;
    /**
    * Event is being emitted when value changes.
    */
    'onItemSelected'?: (event: CustomEvent<any>) => void;
    /**
    * The key of the selected list item
    */
    'selected'?: string;
    /**
    * Set the property for the items to define as value. *Optional* Default: no value
    */
    'valueProperty'?: string;
  }

  interface OgRadioButtonGroup {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name': string;
    /**
    * The value of the selected radio button.
    */
    'value': string;
  }
  interface OgRadioButtonGroupAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * name for the radiobuttons within this group
    */
    'name'?: string;
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The value of the selected radio button.
    */
    'value'?: string;
  }

  interface OgRadioButton {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked': boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled': boolean;
    /**
    * The label of the radio button
    */
    'label': string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name': string;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value': string;
  }
  interface OgRadioButtonAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the radio button is checked or not
    */
    'checked'?: boolean;
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Determines, whether the control is disabled from the parent group
    */
    'groupDisabled'?: boolean;
    /**
    * The label of the radio button
    */
    'label'?: string;
    /**
    * The name of the radio button. All radio buttons with the same name belong to one group.
    */
    'name'?: string;
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the radio button that is set to the parent group if radio button is selected
    */
    'value'?: string;
  }

  interface OgTabContainer {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    'openTab': (index: number) => void;
  }
  interface OgTabContainerAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onTabSelected'?: (event: CustomEvent<number>) => void;
  }

  interface OgTab {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The label of the tab
    */
    'label': string;
    'selected': boolean;
  }
  interface OgTabAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * The label of the tab
    */
    'label'?: string;
    'selected'?: boolean;
  }

  interface OgTextarea {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled': boolean;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value': string;
  }
  interface OgTextareaAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when input gets focus.
    */
    'onFocusGained'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when focus gets lost.
    */
    'onFocusLost'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * Event is being emitted when value changes.
    */
    'onValueChanged'?: (event: CustomEvent<string>) => void;
    /**
    * The initial value. Can be updated at runtime.
    */
    'value'?: string;
  }

  interface OgToggleSwitch {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled': boolean;
    /**
    * The value of the toggle-switch
    */
    'value': boolean;
  }
  interface OgToggleSwitchAttributes extends StencilHTMLAttributes {
    /**
    * Determines, whether the control is disabled or not
    */
    'disabled'?: boolean;
    /**
    * Event is being emitted when value changes.
    */
    'onChanged'?: (event: CustomEvent<MouseEvent>) => void;
    /**
    * The value of the toggle-switch
    */
    'value'?: boolean;
  }
}

declare global {
  interface StencilElementInterfaces {
    'OgButton': Components.OgButton;
    'OgCalendarGroup': Components.OgCalendarGroup;
    'OgCalendar': Components.OgCalendar;
    'OgCard': Components.OgCard;
    'OgCheckbox': Components.OgCheckbox;
    'OgCombobox': Components.OgCombobox;
    'OgDatatable': Components.OgDatatable;
    'OgDatepicker': Components.OgDatepicker;
    'OgConfirmDialog': Components.OgConfirmDialog;
    'OgDialog': Components.OgDialog;
    'OgMessageDialog': Components.OgMessageDialog;
    'OgExpander': Components.OgExpander;
    'OgFormItem': Components.OgFormItem;
    'OgNumberInput': Components.OgNumberInput;
    'OgPasswordInput': Components.OgPasswordInput;
    'OgTextInput': Components.OgTextInput;
    'OgListItem': Components.OgListItem;
    'OgList': Components.OgList;
    'OgRadioButtonGroup': Components.OgRadioButtonGroup;
    'OgRadioButton': Components.OgRadioButton;
    'OgTabContainer': Components.OgTabContainer;
    'OgTab': Components.OgTab;
    'OgTextarea': Components.OgTextarea;
    'OgToggleSwitch': Components.OgToggleSwitch;
  }

  interface StencilIntrinsicElements {
    'og-button': Components.OgButtonAttributes;
    'og-calendar-group': Components.OgCalendarGroupAttributes;
    'og-calendar': Components.OgCalendarAttributes;
    'og-card': Components.OgCardAttributes;
    'og-checkbox': Components.OgCheckboxAttributes;
    'og-combobox': Components.OgComboboxAttributes;
    'og-datatable': Components.OgDatatableAttributes;
    'og-datepicker': Components.OgDatepickerAttributes;
    'og-confirm-dialog': Components.OgConfirmDialogAttributes;
    'og-dialog': Components.OgDialogAttributes;
    'og-message-dialog': Components.OgMessageDialogAttributes;
    'og-expander': Components.OgExpanderAttributes;
    'og-form-item': Components.OgFormItemAttributes;
    'og-number-input': Components.OgNumberInputAttributes;
    'og-password-input': Components.OgPasswordInputAttributes;
    'og-text-input': Components.OgTextInputAttributes;
    'og-list-item': Components.OgListItemAttributes;
    'og-list': Components.OgListAttributes;
    'og-radio-button-group': Components.OgRadioButtonGroupAttributes;
    'og-radio-button': Components.OgRadioButtonAttributes;
    'og-tab-container': Components.OgTabContainerAttributes;
    'og-tab': Components.OgTabAttributes;
    'og-textarea': Components.OgTextareaAttributes;
    'og-toggle-switch': Components.OgToggleSwitchAttributes;
  }


  interface HTMLOgButtonElement extends Components.OgButton, HTMLStencilElement {}
  var HTMLOgButtonElement: {
    prototype: HTMLOgButtonElement;
    new (): HTMLOgButtonElement;
  };

  interface HTMLOgCalendarGroupElement extends Components.OgCalendarGroup, HTMLStencilElement {}
  var HTMLOgCalendarGroupElement: {
    prototype: HTMLOgCalendarGroupElement;
    new (): HTMLOgCalendarGroupElement;
  };

  interface HTMLOgCalendarElement extends Components.OgCalendar, HTMLStencilElement {}
  var HTMLOgCalendarElement: {
    prototype: HTMLOgCalendarElement;
    new (): HTMLOgCalendarElement;
  };

  interface HTMLOgCardElement extends Components.OgCard, HTMLStencilElement {}
  var HTMLOgCardElement: {
    prototype: HTMLOgCardElement;
    new (): HTMLOgCardElement;
  };

  interface HTMLOgCheckboxElement extends Components.OgCheckbox, HTMLStencilElement {}
  var HTMLOgCheckboxElement: {
    prototype: HTMLOgCheckboxElement;
    new (): HTMLOgCheckboxElement;
  };

  interface HTMLOgComboboxElement extends Components.OgCombobox, HTMLStencilElement {}
  var HTMLOgComboboxElement: {
    prototype: HTMLOgComboboxElement;
    new (): HTMLOgComboboxElement;
  };

  interface HTMLOgDatatableElement extends Components.OgDatatable, HTMLStencilElement {}
  var HTMLOgDatatableElement: {
    prototype: HTMLOgDatatableElement;
    new (): HTMLOgDatatableElement;
  };

  interface HTMLOgDatepickerElement extends Components.OgDatepicker, HTMLStencilElement {}
  var HTMLOgDatepickerElement: {
    prototype: HTMLOgDatepickerElement;
    new (): HTMLOgDatepickerElement;
  };

  interface HTMLOgConfirmDialogElement extends Components.OgConfirmDialog, HTMLStencilElement {}
  var HTMLOgConfirmDialogElement: {
    prototype: HTMLOgConfirmDialogElement;
    new (): HTMLOgConfirmDialogElement;
  };

  interface HTMLOgDialogElement extends Components.OgDialog, HTMLStencilElement {}
  var HTMLOgDialogElement: {
    prototype: HTMLOgDialogElement;
    new (): HTMLOgDialogElement;
  };

  interface HTMLOgMessageDialogElement extends Components.OgMessageDialog, HTMLStencilElement {}
  var HTMLOgMessageDialogElement: {
    prototype: HTMLOgMessageDialogElement;
    new (): HTMLOgMessageDialogElement;
  };

  interface HTMLOgExpanderElement extends Components.OgExpander, HTMLStencilElement {}
  var HTMLOgExpanderElement: {
    prototype: HTMLOgExpanderElement;
    new (): HTMLOgExpanderElement;
  };

  interface HTMLOgFormItemElement extends Components.OgFormItem, HTMLStencilElement {}
  var HTMLOgFormItemElement: {
    prototype: HTMLOgFormItemElement;
    new (): HTMLOgFormItemElement;
  };

  interface HTMLOgNumberInputElement extends Components.OgNumberInput, HTMLStencilElement {}
  var HTMLOgNumberInputElement: {
    prototype: HTMLOgNumberInputElement;
    new (): HTMLOgNumberInputElement;
  };

  interface HTMLOgPasswordInputElement extends Components.OgPasswordInput, HTMLStencilElement {}
  var HTMLOgPasswordInputElement: {
    prototype: HTMLOgPasswordInputElement;
    new (): HTMLOgPasswordInputElement;
  };

  interface HTMLOgTextInputElement extends Components.OgTextInput, HTMLStencilElement {}
  var HTMLOgTextInputElement: {
    prototype: HTMLOgTextInputElement;
    new (): HTMLOgTextInputElement;
  };

  interface HTMLOgListItemElement extends Components.OgListItem, HTMLStencilElement {}
  var HTMLOgListItemElement: {
    prototype: HTMLOgListItemElement;
    new (): HTMLOgListItemElement;
  };

  interface HTMLOgListElement extends Components.OgList, HTMLStencilElement {}
  var HTMLOgListElement: {
    prototype: HTMLOgListElement;
    new (): HTMLOgListElement;
  };

  interface HTMLOgRadioButtonGroupElement extends Components.OgRadioButtonGroup, HTMLStencilElement {}
  var HTMLOgRadioButtonGroupElement: {
    prototype: HTMLOgRadioButtonGroupElement;
    new (): HTMLOgRadioButtonGroupElement;
  };

  interface HTMLOgRadioButtonElement extends Components.OgRadioButton, HTMLStencilElement {}
  var HTMLOgRadioButtonElement: {
    prototype: HTMLOgRadioButtonElement;
    new (): HTMLOgRadioButtonElement;
  };

  interface HTMLOgTabContainerElement extends Components.OgTabContainer, HTMLStencilElement {}
  var HTMLOgTabContainerElement: {
    prototype: HTMLOgTabContainerElement;
    new (): HTMLOgTabContainerElement;
  };

  interface HTMLOgTabElement extends Components.OgTab, HTMLStencilElement {}
  var HTMLOgTabElement: {
    prototype: HTMLOgTabElement;
    new (): HTMLOgTabElement;
  };

  interface HTMLOgTextareaElement extends Components.OgTextarea, HTMLStencilElement {}
  var HTMLOgTextareaElement: {
    prototype: HTMLOgTextareaElement;
    new (): HTMLOgTextareaElement;
  };

  interface HTMLOgToggleSwitchElement extends Components.OgToggleSwitch, HTMLStencilElement {}
  var HTMLOgToggleSwitchElement: {
    prototype: HTMLOgToggleSwitchElement;
    new (): HTMLOgToggleSwitchElement;
  };

  interface HTMLElementTagNameMap {
    'og-button': HTMLOgButtonElement
    'og-calendar-group': HTMLOgCalendarGroupElement
    'og-calendar': HTMLOgCalendarElement
    'og-card': HTMLOgCardElement
    'og-checkbox': HTMLOgCheckboxElement
    'og-combobox': HTMLOgComboboxElement
    'og-datatable': HTMLOgDatatableElement
    'og-datepicker': HTMLOgDatepickerElement
    'og-confirm-dialog': HTMLOgConfirmDialogElement
    'og-dialog': HTMLOgDialogElement
    'og-message-dialog': HTMLOgMessageDialogElement
    'og-expander': HTMLOgExpanderElement
    'og-form-item': HTMLOgFormItemElement
    'og-number-input': HTMLOgNumberInputElement
    'og-password-input': HTMLOgPasswordInputElement
    'og-text-input': HTMLOgTextInputElement
    'og-list-item': HTMLOgListItemElement
    'og-list': HTMLOgListElement
    'og-radio-button-group': HTMLOgRadioButtonGroupElement
    'og-radio-button': HTMLOgRadioButtonElement
    'og-tab-container': HTMLOgTabContainerElement
    'og-tab': HTMLOgTabElement
    'og-textarea': HTMLOgTextareaElement
    'og-toggle-switch': HTMLOgToggleSwitchElement
  }

  interface ElementTagNameMap {
    'og-button': HTMLOgButtonElement;
    'og-calendar-group': HTMLOgCalendarGroupElement;
    'og-calendar': HTMLOgCalendarElement;
    'og-card': HTMLOgCardElement;
    'og-checkbox': HTMLOgCheckboxElement;
    'og-combobox': HTMLOgComboboxElement;
    'og-datatable': HTMLOgDatatableElement;
    'og-datepicker': HTMLOgDatepickerElement;
    'og-confirm-dialog': HTMLOgConfirmDialogElement;
    'og-dialog': HTMLOgDialogElement;
    'og-message-dialog': HTMLOgMessageDialogElement;
    'og-expander': HTMLOgExpanderElement;
    'og-form-item': HTMLOgFormItemElement;
    'og-number-input': HTMLOgNumberInputElement;
    'og-password-input': HTMLOgPasswordInputElement;
    'og-text-input': HTMLOgTextInputElement;
    'og-list-item': HTMLOgListItemElement;
    'og-list': HTMLOgListElement;
    'og-radio-button-group': HTMLOgRadioButtonGroupElement;
    'og-radio-button': HTMLOgRadioButtonElement;
    'og-tab-container': HTMLOgTabContainerElement;
    'og-tab': HTMLOgTabElement;
    'og-textarea': HTMLOgTextareaElement;
    'og-toggle-switch': HTMLOgToggleSwitchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
