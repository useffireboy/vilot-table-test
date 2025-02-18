// export const dataJson = {
//     "nodes": [
//         {
//             "id": 1001,
//             "is_root": true,
//             "name": "Intern",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 200,
//                 "y": 100
//             }
//         },
//         {
//             "id": 1005,
//             "is_root": false,
//             "name": "TA Team",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 600,
//                 "y": 350
//             }
//         },
//         {
//             "id": 1006,
//             "is_root": false,
//             "name": "契约锁",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 600,
//                 "y": 600
//             }
//         },
//         {
//             "id": 1008,
//             "is_root": false,
//             "name": "Workday",
//             "location": "IE",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1200,
//                 "y": 350
//             }
//         },
//         {
//             "id": 1009,
//             "is_root": false,
//             "name": "Tibco Middleware",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1600,
//                 "y": 100
//             }
//         },
//         {
//             "id": 10010,
//             "is_root": false,
//             "name": "Tibco MDM",
//             "location": "SG",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1200,
//                 "y": 100
//             }
//         },
//         {
//             "id": 10018,
//             "is_root": false,
//             "name": "EIM",
//             "location": "CN",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 600,
//                 "y": 100
//             }
//         },
//         {
//             "id": 1007,
//             "is_root": false,
//             "name": "Sanofi Business Services",
//             "location": "MY",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1200,
//                 "y": 600
//             }
//         },
//         {
//             "id": 10012,
//             "is_root": false,
//             "name": "SharePoint",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1600,
//                 "y": 600
//             }
//         },
//         {
//             "id": 10013,
//             "is_root": false,
//             "name": "Local SBS Team",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 600,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10014,
//             "is_root": false,
//             "name": "One Support",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1200,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10015,
//             "is_root": false,
//             "name": "UAM Team ",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1600,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10016,
//             "is_root": false,
//             "name": "Edentity",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 2000,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10017,
//             "is_root": false,
//             "name": "Active Directory",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 2000,
//                 "y": 1100
//             }
//         }
//     ],
//     "edges": [
//         {
//             "id": 1,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Manual",
//             "info_num": 1,
//             "trans_info": "SPI Required Document"
//         },
//         {
//             "id": 2,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1005,
//             "target_name": "TA Team",
//             "transmitted_type": "Manual",
//             "is_root": "Y",
//             "info_num": 2,
//             "trans_info": "Onboarding Required Document"
//         },
//         {
//             "id": 5,
//             "source_id": 1005,
//             "source_name": "TA Team",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 2,
//             "trans_info": "Onboarding Required Document"
//         },
//         {
//             "id": 11,
//             "source_id": 1007,
//             "source_name": "Sanofi Business Services",
//             "target_id": 10012,
//             "target_name": "SharePoint",
//             "transmitted_type": "Manual",
//             "info_num": 2,
//             "trans_info": "Onboarding Required Document"
//         },
//         {
//             "id": 4,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 3,
//             "trans_info": "Other information"
//         },
//         {
//             "id": 7,
//             "source_id": 1007,
//             "source_name": "Sanofi Business Services",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Manual",
//             "info_num": 4,
//             "trans_info": "Master data"
//         },
//         {
//             "id": 8,
//             "source_id": 1008,
//             "source_name": "Workday",
//             "target_id": 1009,
//             "target_name": "Tibco Middleware",
//             "transmitted_type": "Auto",
//             "info_num": 4,
//             "trans_info": "Master data"
//         },
//         {
//             "id": 9,
//             "source_id": 1009,
//             "source_name": "Tibco Middleware",
//             "target_id": 10010,
//             "target_name": "Tibco MDM",
//             "transmitted_type": "Auto",
//             "info_num": 4,
//             "trans_info": "Master data"
//         },
//         {
//             "id": 10,
//             "source_id": 10010,
//             "source_name": "Tibco MDM",
//             "target_id": 10018,
//             "target_name": "EIM",
//             "transmitted_type": "Auto",
//             "info_num": 4,
//             "trans_info": "Master data"
//         },
//         {
//             "id": 12,
//             "source_id": 10012,
//             "source_name": "SharePoint",
//             "target_id": 10013,
//             "target_name": "Local SBS Team",
//             "transmitted_type": "Manual",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 13,
//             "source_id": 10013,
//             "source_name": "Local SBS Team",
//             "target_id": 10014,
//             "target_name": "One Support",
//             "transmitted_type": "Manual",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 14,
//             "source_id": 10014,
//             "source_name": "One Support",
//             "target_id": 10015,
//             "target_name": "UAM Team",
//             "transmitted_type": "Manual",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 15,
//             "source_id": 10015,
//             "source_name": "UAM Team",
//             "target_id": 10016,
//             "target_name": "Edentity",
//             "transmitted_type": "Manual",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 16,
//             "source_id": 10016,
//             "source_name": "Edentity",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Auto",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 17,
//             "source_id": 10016,
//             "source_name": "Edentity",
//             "target_id": 10017,
//             "target_name": "Active Directory",
//             "transmitted_type": "Auto",
//             "info_num": 5,
//             "trans_info": "Inter on boarding information"
//         },
//         {
//             "id": 3,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1006,
//             "target_name": "契约锁",
//             "transmitted_type": "Manual",
//             "info_num": 6,
//             "trans_info": "PI information"
//         },
//         {
//             "id": 6,
//             "source_id": 1006,
//             "source_name": "契约锁",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 6,
//             "trans_info": "PI information"
//         }
//     ]
// }

// const data = {
//     "nodes": [
//         {
//             "id": 1001,
//             "is_root": true,
//             "name": "Intern",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 50,
//                 "y": 100
//             }
//         },
//         {
//             "id": 1005,
//             "is_root": false,
//             "name": "TA Team",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 450,
//                 "y": 350
//             }
//         },
//         {
//             "id": 1006,
//             "is_root": false,
//             "name": "契约锁",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 450,
//                 "y": 600
//             }
//         },
//         {
//             "id": 1008,
//             "is_root": false,
//             "name": "Workday",
//             "location": "IE",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1250,
//                 "y": 350
//             }
//         },
//         {
//             "id": 1009,
//             "is_root": false,
//             "name": "Tibco Middleware",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1650,
//                 "y": 100
//             }
//         },
//         {
//             "id": 10010,
//             "is_root": false,
//             "name": "Tibco MDM",
//             "location": "SG",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1250,
//                 "y": 100
//             }
//         },
//         {
//             "id": 10018,
//             "is_root": false,
//             "name": "EIM",
//             "location": "CN",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 450,
//                 "y": 100
//             }
//         },
//         {
//             "id": 1007,
//             "is_root": false,
//             "name": "Sanofi Business Services",
//             "location": "MY",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1250,
//                 "y": 600
//             }
//         },
//         {
//             "id": 10012,
//             "is_root": false,
//             "name": "SharePoint",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1650,
//                 "y": 600
//             }
//         },
//         {
//             "id": 10013,
//             "is_root": false,
//             "name": "Local SBS Team",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 450,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10014,
//             "is_root": false,
//             "name": "One Support",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1250,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10015,
//             "is_root": false,
//             "name": "UAM Team ",
//             "location": "CN",
//             "type": "Person",
//             "is_third_party": "N",
//             "position": {
//                 "x": 450,
//                 "y": 1100
//             }
//         },
//         {
//             "id": 10016,
//             "is_root": false,
//             "name": "Edentity",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 1650,
//                 "y": 850
//             }
//         },
//         {
//             "id": 10017,
//             "is_root": false,
//             "name": "Active Directory",
//             "location": "Global",
//             "type": "System",
//             "is_third_party": "N",
//             "position": {
//                 "x": 2050,
//                 "y": 1100
//             }
//         }
//     ],
//     "edges": [
//         {
//             "id": 1,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Manual",
//             "info_num": 1,
//             "trans_info": "SPI Required Document",
//             "title": "Intern->Workday"
//         },
//         {
//             "id": 2,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1005,
//             "target_name": "TA Team",
//             "transmitted_type": "Manual",
//             "is_root": "Y",
//             "info_num": 2,
//             "trans_info": "Onboarding Required Document",
//             "title": "Intern->TA Team"
//         },
//         {
//             "id": 5,
//             "source_id": 1005,
//             "source_name": "TA Team",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 3,
//             "trans_info": "Onboarding Required Document",
//             "title": "TA Team->Sanofi Business Services"
//         },
//         {
//             "id": 11,
//             "source_id": 1007,
//             "source_name": "Sanofi Business Services",
//             "target_id": 10012,
//             "target_name": "SharePoint",
//             "transmitted_type": "Manual",
//             "info_num": 4,
//             "trans_info": "Onboarding Required Document",
//             "title": "Sanofi Business Services->SharePoint"
//         },
//         {
//             "id": 4,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 5,
//             "trans_info": "Other information",
//             "title": "Intern->Sanofi Business Services"
//         },
//         {
//             "id": 7,
//             "source_id": 1007,
//             "source_name": "Sanofi Business Services",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Manual",
//             "info_num": 6,
//             "trans_info": "Master data",
//             "title": "Sanofi Business Services->Workday"
//         },
//         {
//             "id": 8,
//             "source_id": 1008,
//             "source_name": "Workday",
//             "target_id": 1009,
//             "target_name": "Tibco Middleware",
//             "transmitted_type": "Auto",
//             "info_num": 7,
//             "trans_info": "Master data",
//             "title": "Workday->Tibco Middleware"
//         },
//         {
//             "id": 9,
//             "source_id": 1009,
//             "source_name": "Tibco Middleware",
//             "target_id": 10010,
//             "target_name": "Tibco MDM",
//             "transmitted_type": "Auto",
//             "info_num": 8,
//             "trans_info": "Master data",
//             "title": "Tibco Middleware->Tibco MDM"
//         },
//         {
//             "id": 10,
//             "source_id": 10010,
//             "source_name": "Tibco MDM",
//             "target_id": 10018,
//             "target_name": "EIM",
//             "transmitted_type": "Auto",
//             "info_num": 9,
//             "trans_info": "Master data",
//             "title": "Tibco MDM->EIM"
//         },
//         {
//             "id": 12,
//             "source_id": 10012,
//             "source_name": "SharePoint",
//             "target_id": 10013,
//             "target_name": "Local SBS Team",
//             "transmitted_type": "Manual",
//             "info_num": 10,
//             "trans_info": "Inter on boarding information",
//             "title": "SharePoint->Local SBS Team"
//         },
//         {
//             "id": 13,
//             "source_id": 10013,
//             "source_name": "Local SBS Team",
//             "target_id": 10014,
//             "target_name": "One Support",
//             "transmitted_type": "Manual",
//             "info_num": 11,
//             "trans_info": "Inter on boarding information",
//             "title": "Local SBS Team->One Support"
//         },
//         {
//             "id": 14,
//             "source_id": 10014,
//             "source_name": "One Support",
//             "target_id": 10015,
//             "target_name": "UAM Team",
//             "transmitted_type": "Manual",
//             "info_num": 12,
//             "trans_info": "Inter on boarding information",
//             "title": "One Support->UAM Team"
//         },
//         {
//             "id": 15,
//             "source_id": 10015,
//             "source_name": "UAM Team",
//             "target_id": 10016,
//             "target_name": "Edentity",
//             "transmitted_type": "Manual",
//             "info_num": 13,
//             "trans_info": "Inter on boarding information",
//             "title": "UAM Team->Edentity"
//         },
//         {
//             "id": 16,
//             "source_id": 10016,
//             "source_name": "Edentity",
//             "target_id": 1008,
//             "target_name": "Workday",
//             "transmitted_type": "Auto",
//             "info_num": 14,
//             "trans_info": "Inter on boarding information",
//             "title": "Edentity->Workday"
//         },
//         {
//             "id": 17,
//             "source_id": 10016,
//             "source_name": "Edentity",
//             "target_id": 10017,
//             "target_name": "Active Directory",
//             "transmitted_type": "Auto",
//             "info_num": 15,
//             "trans_info": "Inter on boarding information",
//             "title": "Edentity->Active Directory"
//         },
//         {
//             "id": 3,
//             "source_id": 1001,
//             "source_name": "Intern",
//             "target_id": 1006,
//             "target_name": "契约锁",
//             "transmitted_type": "Manual",
//             "info_num": 16,
//             "trans_info": "PI information",
//             "title": "Intern->契约锁"
//         },
//         {
//             "id": 6,
//             "source_id": 1006,
//             "source_name": "契约锁",
//             "target_id": 1007,
//             "target_name": "Sanofi Business Services",
//             "transmitted_type": "Manual",
//             "info_num": 17,
//             "trans_info": "PI information",
//             "title": "契约锁->Sanofi Business Services"
//         }
//     ]
// }

//json7
const data={
    "nodes": [
        {
            "id": 1001,
            "is_root": true,
            "name": "Intern",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 50,
                "y": 100
            }
        },
        {
            "id": 1005,
            "is_root": false,
            "name": "TA Team",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 450,
                "y": 500
            }
        },
        {
            "id": 1006,
            "is_root": false,
            "name": "契约锁",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 450,
                "y": 900
            }
        },
        {
            "id": 1008,
            "is_root": false,
            "name": "Workday",
            "location": "IE",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 1250,
                "y": 500
            }
        },
        {
            "id": 1009,
            "is_root": false,
            "name": "Tibco Middleware",
            "location": "Global",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 1650,
                "y": 100
            }
        },
        {
            "id": 10010,
            "is_root": false,
            "name": "Tibco MDM",
            "location": "SG",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 1250,
                "y": 100
            }
        },
        {
            "id": 10018,
            "is_root": false,
            "name": "EIM",
            "location": "CN",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 450,
                "y": 100
            }
        },
        {
            "id": 1007,
            "is_root": false,
            "name": "Sanofi Business Services",
            "location": "MY",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 1250,
                "y": 900
            }
        },
        {
            "id": 10012,
            "is_root": false,
            "name": "SharePoint",
            "location": "Global",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 1650,
                "y": 900
            }
        },
        {
            "id": 10013,
            "is_root": false,
            "name": "Local SBS Team",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 450,
                "y": 1300
            }
        },
        {
            "id": 10014,
            "is_root": false,
            "name": "One Support",
            "location": "Global",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 1250,
                "y": 1300
            }
        },
        {
            "id": 10015,
            "is_root": false,
            "name": "UAM Team ",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 450,
                "y": 1700
            }
        },
        {
            "id": 10016,
            "is_root": false,
            "name": "Edentity",
            "location": "Global",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 1650,
                "y": 1300
            }
        },
        {
            "id": 10017,
            "is_root": false,
            "name": "Active Directory",
            "location": "Global",
            "type": "System",
            "is_third_party": "N",
            "position": {
                "x": 2050,
                "y": 1700
            }
        }
    ],
    "edges": [
        {
            "id": 1,
            "source_id": 1001,
            "pi_subject": "Employees & dependents",
            "source_name": "Intern",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Manual",
            "info_num": 1,
            "pi_element": "name, employee ID, email address, country, phone number"
        },
        {
            "id": 2,
            "source_id": 1001,
            "pi_subject": "Employees & dependents",
            "source_name": "Intern",
            "target_id": 1005,
            "target_name": "TA Team",
            "transmitted_type": "Manual",
            "is_root": "Y",
            "info_num": 2,
            "pi_element": "employee ID, ID card, bank account"
        },
        {
            "id": 5,
            "source_id": 1005,
            "pi_subject": "Employees & dependents",
            "source_name": "TA Team",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 3,
            "pi_element": "employee ID, ID card, bank account"
        },
        {
            "id": 11,
            "source_id": 1007,
            "pi_subject": "Employees & dependents",
            "source_name": "Sanofi Business Services",
            "target_id": 10012,
            "target_name": "SharePoint",
            "transmitted_type": "Manual",
            "info_num": 4,
            "pi_element": "employee ID, ID card, bank account"
        },
        {
            "id": 4,
            "source_id": 1001,
            "pi_subject": "Employees & dependents",
            "source_name": "Intern",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 5,
            "pi_element": "transaction and consumption records"
        },
        {
            "id": 7,
            "source_id": 1007,
            "pi_subject": "Employees & dependents",
            "source_name": "Sanofi Business Services",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Manual",
            "info_num": 6,
            "pi_element": "name, employee ID, email address, country, phone number, transaction and consumption records\n"
        },
        {
            "id": 8,
            "source_id": 1008,
            "pi_subject": "Employees & dependents",
            "source_name": "Workday",
            "target_id": 1009,
            "target_name": "Tibco Middleware",
            "transmitted_type": "Auto",
            "info_num": 7,
            "pi_element": "name, employee ID, email address, country, phone number, transaction and consumption records\n"
        },
        {
            "id": 9,
            "source_id": 1009,
            "pi_subject": "Employees & dependents",
            "source_name": "Tibco Middleware",
            "target_id": 10010,
            "target_name": "Tibco MDM",
            "transmitted_type": "Auto",
            "info_num": 8,
            "pi_element": "name, employee ID, email address, country, phone number, transaction and consumption records\n"
        },
        {
            "id": 10,
            "source_id": 10010,
            "pi_subject": "Employees & dependents",
            "source_name": "Tibco MDM",
            "target_id": 10018,
            "target_name": "EIM",
            "transmitted_type": "Auto",
            "info_num": 9,
            "pi_element": "name, employee ID, email address, country, phone number, transaction and consumption records\n"
        },
        {
            "id": 12,
            "source_id": 10012,
            "pi_subject": "Employees & dependents",
            "source_name": "SharePoint",
            "target_id": 10013,
            "target_name": "Local SBS Team",
            "transmitted_type": "Manual",
            "info_num": 10,
            "pi_element": "Inter on boarding information"
        },
        {
            "id": 13,
            "source_id": 10013,
            "pi_subject": "Employees & dependents",
            "source_name": "Local SBS Team",
            "target_id": 10014,
            "target_name": "One Support",
            "transmitted_type": "Manual",
            "info_num": 11,
            "pi_element": "Inter on boarding information"
        },
        {
            "id": 14,
            "source_id": 10014,
            "pi_subject": "Employees & dependents",
            "source_name": "One Support",
            "target_id": 10015,
            "target_name": "UAM Team",
            "transmitted_type": "Manual",
            "info_num": 12,
            "pi_element": "Inter on boarding information"
        },
        {
            "id": 15,
            "source_id": 10015,
            "pi_subject": "Employees & dependents",
            "source_name": "UAM Team",
            "target_id": 10016,
            "target_name": "Edentity",
            "transmitted_type": "Manual",
            "info_num": 13,
            "pi_element": "phone number, flights and high-speed rail travel records"
        },
        {
            "id": 16,
            "source_id": 10016,
            "pi_subject": "Employees & dependents",
            "source_name": "Edentity",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Auto",
            "info_num": 14,
            "pi_element": "transaction and consumption records"
        },
        {
            "id": 17,
            "source_id": 10016,
            "pi_subject": "Employees & dependents",
            "source_name": "Edentity",
            "target_id": 10017,
            "target_name": "Active Directory",
            "transmitted_type": "Auto",
            "info_num": 15,
            "pi_element": "phone number, flights and high-speed rail travel records"
        },
        {
            "id": 3,
            "source_id": 1001,
            "pi_subject": "Employees & dependents",
            "source_name": "Intern",
            "target_id": 1006,
            "target_name": "契约锁",
            "transmitted_type": "Manual",
            "info_num": 16,
            "pi_element": "phone number, flights and high-speed rail travel records"
        },
        {
            "id": 6,
            "source_id": 1006,
            "pi_subject": "Employees & dependents",
            "source_name": "契约锁",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 17,
            "pi_element": "phone number, flights and high-speed rail travel records"
        }
    ]
}

let middleline = 0;
let height = 0, width = 0;
data.nodes.forEach(item => {
    if (item.location === "CN") {
        if (middleline < item.position.x) {
            middleline = item.position.x;
        }
    }

    if (height < item.position.y) {
        height = item.position.y;
    }
    if (width < item.position.x) {
        width = item.position.x;
    }
})
// middleline;
width = width + 140;
height += 200;
const boxNodes: any = [
    {
        "id": "box-node-1",
        "shape": "lane",
        "width": 600,
        "height": 1000,
        "attrs": {
            "name-rect": {
                width: 600,
                height: 30,
            },
            "name-text": {
                fontSize: 16,
            }
        },
        "position": {
            "x": 0,
            "y": 0
        },
        "label": "Domestic"
    },
    {
        "id": "box-node-2",
        "shape": "lane",
        "width": 600,
        "height": 1000,
        "attrs": {
            "name-rect": {
                width: 600,
                height: 30,
            },
            "name-text": {
                fontSize: 16,
            }
        },
        "position": {
            "x": 600,
            "y": 0
        },
        "label": "Oversea"
    },
    {
        "id": "box-node-3",
        "shape": "lane",
        "width": 400,
        "height": 1000,
        "attrs": {
            "name-rect": {
                width:1000,
                height: 30,
            },
            "name-text": {
                fontSize: 16,
            }
        },
        "position": {
            "x": 1200,
            "y": 0
        },
        "label": ""
    },
]
const box3Width = 0.42 * width;
boxNodes.forEach((node: any) => {
    switch (node.id) {
        case "box-node-1":
            node.width = width / 2;
            node.height = height;
            node.attrs["name-rect"].width = width / 2;
            break;
        case "box-node-2":
            node.width = width / 2;
            node.height = height;
            node.attrs["name-rect"].width = width / 2;
            node.position.x = width / 2;
            break;
        case "box-node-3":
            node.height = height;
            node.position.x = width;
            node.width = box3Width;
            node.attrs["name-rect"].width = box3Width;
            break;
        default:
            break;
    }
})
data.nodes.unshift(...boxNodes);
// console.log("啊哈哈哈哈", middleline, width, height)
export const dataJson = data;
export const initWidth = width + box3Width;
export const initHeight = height;
export const boxWidth = box3Width;
