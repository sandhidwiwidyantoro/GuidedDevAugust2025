define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "97a093aa-9023-429c-a17f-d83a5f395992",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_sjpxmwq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RunMinimumPriceRealtyWebService",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RunMinimumPriceRealtyWebService_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "MinimumPriceOfRealtyRunWebServiceButtonRequest"
					},
					"clickMode": "default",
					"icon": "settings-button-icon"
				},
				"parentName": "FlexContainer_sjpxmwq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushRealtyVisitsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushRealtyVisitsButton_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAddRealtyVisitByButton",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_sjpxmwq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_thggi5o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_thggi5o_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunAvgPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealtyAveragePriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_thggi5o",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest",
						"params": {
							"showSuccessMessage": true
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "Button_thggi5o",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "checkmark-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_1mymvk5",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_1mymvk5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_h4zrcsx",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_h4zrcsx"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_6f8cs0o",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_6f8cs0o",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_w6gcaos",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_w6gcaos",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_hxib12t",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_hxib12t",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_9o0x3ey",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_9o0x3ey",
					"multiline": false,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_cvx449p",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_cvx449p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_z3h239s",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_z3h239s",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_w061rcw",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_w061rcw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_i446aa9",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_i446aa9",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_fb36qvi",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_fb36qvi",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0c48t58",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0c48t58_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ofdo659",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0c48t58",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ju1lz3e",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ofdo659",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ek8r6jc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ek8r6jc_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ju1lz3e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_vorybq3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_vorybq3_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_x9yay7xDS"
						}
					}
				},
				"parentName": "FlexContainer_ju1lz3e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_cey6yt9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_cey6yt9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ju1lz3e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_jg2q1yw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_jg2q1yw_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cey6yt9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2nqgvrl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2nqgvrl_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_cey6yt9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_x0ok6h3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_x0ok6h3_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_x0ok6h3_GridDetail_x9yay7x",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_x9yay7x"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_x0ok6h3_SearchValue",
							"GridDetailSearchFilter_x0ok6h3_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ju1lz3e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_np0qanz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_0c48t58",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_x9yay7x",
					"activeRow": "$GridDetail_x9yay7x_ActiveRow",
					"selectionState": "$GridDetail_x9yay7x_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_x9yay7x_SelectionState"
					},
					"primaryColumnName": "GridDetail_x9yay7xDS_Id",
					"columns": [
						{
							"id": "72a116bc-8ab9-efec-46fc-9b23d81e1ae7",
							"code": "GridDetail_x9yay7xDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_x9yay7xDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 159
						},
						{
							"id": "212b12b0-dd2e-7bd6-b584-b61ec3f3b324",
							"code": "GridDetail_x9yay7xDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_x9yay7xDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 172
						},
						{
							"id": "0be94945-543f-4876-6a18-589b03ca53a4",
							"code": "GridDetail_x9yay7xDS_UsrComments",
							"caption": "#ResourceString(GridDetail_x9yay7xDS_UsrComments)#",
							"dataValueType": 28,
							"width": 141
						},
						{
							"id": "a43b1c7d-73a5-1091-3c2a-84e19db78fc5",
							"code": "GridDetail_x9yay7xDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_x9yay7xDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 152
						},
						{
							"id": "347eb978-e02f-71b1-5787-99a565fd0d1e",
							"code": "GridDetail_x9yay7xDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_x9yay7xDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_np0qanz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_x9yay7x_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_x9yay7xDS",
							"filters": "$GridDetail_x9yay7x | crt.ToCollectionFilters : 'GridDetail_x9yay7x' : $GridDetail_x9yay7x_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_x9yay7x_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_x9yay7x_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_x9yay7xDS",
							"filters": "$GridDetail_x9yay7x | crt.ToCollectionFilters : 'GridDetail_x9yay7x' : $GridDetail_x9yay7x_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_x9yay7x_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_x9yay7x_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_x9yay7x_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_x9yay7x | crt.ToCollectionFilters : 'GridDetail_x9yay7x' : $GridDetail_x9yay7x_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_x9yay7x_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_x9yay7x_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_x9yay7xDS",
							"filters": "$GridDetail_x9yay7x | crt.ToCollectionFilters : 'GridDetail_x9yay7x' : $GridDetail_x9yay7x_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_x9yay7x_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_1mymvk5": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_h4zrcsx": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_w6gcaos": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_hxib12t": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_9o0x3ey": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrManager_cvx449p": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_i446aa9": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_z3h239s": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_w061rcw": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_6f8cs0o": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_fb36qvi": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_fb36qvi"
						}
					},
					"GridDetail_x9yay7x": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_x9yay7xDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_x0ok6h3_GridDetail_x9yay7x",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_x9yay7xDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.UsrVisitDateTime"
									}
								},
								"GridDetail_x9yay7xDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_x9yay7xDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.UsrComments"
									}
								},
								"GridDetail_x9yay7xDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.CreatedOn"
									}
								},
								"GridDetail_x9yay7xDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.UsrParentRealty"
									}
								},
								"GridDetail_x9yay7xDS_Id": {
									"modelConfig": {
										"path": "GridDetail_x9yay7xDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_x9yay7xDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_fb36qvi": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_x9yay7xDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/ [
      {
        request: "usr.PushButtonRequest",
        /* Implementation of the custom query handler. */
        handler: async (request, next) => {
          console.log("Button works...");
          Terrasoft.showInformation("My button was pressed.");
          var price = await request.$context.PDS_UsrPrice_1mymvk5;
          console.log("Price = " + price);
          request.$context.PDS_UsrArea_h4zrcsx = price * 0.2;
          /* Call the next handler if it exists and return its result. */
          return next?.handle(request);
        },
      },
      {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
          if (
            request.attributeName === "PDS_UsrPrice_1mymvk5" || // if price changed
            request.attributeName === "PDS_UsrOfferTypeUsrCommissionPercent_fb36qvi"
          ) {
            // or percent changed
            var price = await request.$context.PDS_UsrPrice_1mymvk5;
            var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_fb36qvi;
            var commission = (price * percent) / 100; 
            request.$context.PDS_UsrCommission_6f8cs0o = commission;
          }
          /* Call the next handler if it exists and return its result. */
          return next?.handle(request);
        },
      },
		{
			   request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_w6gcaos;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_hxib12t;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
		{		
				request: "crt.HandleViewModelAttributeChangeRequest",
		        /* The custom implementation of the base request handler. */
		        handler: async (request, next) => {
		            /* Check the request status. */
		            if (request.attributeName === 'PDS_UsrPrice_1mymvk5') {
						/* Create an instance of the system setting service from "@creatio-devkit/common." */
			            var sysSettingsService = new sdk.SysSettingsService();
						
			            /* Retrieve the value of the "MinPriceToRequireRealtyComment" system setting. */
		                var minPriceToRequireRealtyComment = (await sysSettingsService.getByCode('MinPriceToRequireRealtyComment')).value;	
						
						var currentPrice = await request.$context.PDS_UsrPrice_1mymvk5;
		                var isPassMinPrice = currentPrice > minPriceToRequireRealtyComment;
						
						/* Check the request description. */
		                if (isPassMinPrice) {
		                    request.$context.enableAttributeValidator('PDS_UsrComment_9o0x3ey', 'required');
		                } else {
		                    request.$context.disableAttributeValidator('PDS_UsrComment_9o0x3ey', 'required');
		                }
		            }
		            
					/* Call the next handler if it exists and return its result. */
		            return next?.handle(request);
			        }
			},
			{
				request: "MinimumPriceOfRealtyRunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service Minimun Price Of Realty button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_w6gcaos;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_hxib12t;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}
					
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetRealtyMinPriceByTypeIdAndOfferTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);

					//const endpoint = "http://localhost/Creatio-Assigment/0/rest/RealtyService/GetRealtyMinPriceByTypeIdAndOfferTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("Response min realty price = " + response.body.GetRealtyMinPriceByTypeIdAndOfferTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}			
    ] /**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/ {
      /* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
      "usr.DGValidator": {
        validator: function (config) {
          return function (control) {
            let value = control.value;
            let minValue = config.minValue;
            let valueIsCorrect = value >= minValue;
            var result;
            if (valueIsCorrect) {
              result = null;
            } else {
              result = {
                "usr.DGValidator": {
                  message: config.message,
                },
              };
            }
            return result;
          };
        },
        params: [
          {
            name: "minValue",
          },
          {
            name: "message",
          },
        ],
        async: false,
      },
    } /**SCHEMA_VALIDATORS*/
	};
});