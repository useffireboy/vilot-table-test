export const dataJson = {
    "nodes": [
        {
            "id": 1001,
            "is_root": true,
            "name": "Intern",
            "location": "CN",
            "type": "Person",
            "is_third_party": "N",
            "position": {
                "x": 200,
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
                "x": 600,
                "y": 350
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
                "x": 600,
                "y": 600
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
                "x": 1200,
                "y": 350
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
                "x": 1600,
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
                "x": 1200,
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
                "x": 600,
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
                "x": 1200,
                "y": 600
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
                "x": 1600,
                "y": 600
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
                "x": 600,
                "y": 850
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
                "x": 1200,
                "y": 850
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
                "x": 1600,
                "y": 850
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
                "x": 2000,
                "y": 850
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
                "x": 2000,
                "y": 1100
            }
        }
    ],
    "edges": [
        {
            "id": 2,
            "source_id": 1001,
            "source_name": "Intern",
            "target_id": 1005,
            "target_name": "TA Team",
            "transmitted_type": "Manual",
            "is_root": "Y",
            "info_num": 2,
            "trans_info": "Onboarding Required Document"
        },
        {
            "id": 1,
            "source_id": 1001,
            "source_name": "Intern",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Manual",
            "info_num": 1,
            "trans_info": "SPI Required Document"
        },
        {
            "id": 5,
            "source_id": 1005,
            "source_name": "TA Team",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 2,
            "trans_info": "Onboarding Required Document"
        },
        {
            "id": 11,
            "source_id": 1007,
            "source_name": "Sanofi Business Services",
            "target_id": 10012,
            "target_name": "SharePoint",
            "transmitted_type": "Manual",
            "info_num": 2,
            "trans_info": "Onboarding Required Document"
        },
        {
            "id": 4,
            "source_id": 1001,
            "source_name": "Intern",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 3,
            "trans_info": "Other information"
        },
        {
            "id": 42,
            "source_id": 1007,
            "source_name": "Intern",
            "target_id": 1001,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 3,
            "trans_info": "Other information"
        },
        {
            "id": 7,
            "source_id": 1007,
            "source_name": "Sanofi Business Services",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Manual",
            "info_num": 4,
            "trans_info": "Master data"
        },
        {
            "id": 8,
            "source_id": 1008,
            "source_name": "Workday",
            "target_id": 1009,
            "target_name": "Tibco Middleware",
            "transmitted_type": "Auto",
            "info_num": 4,
            "trans_info": "Master data"
        },
        {
            "id": 9,
            "source_id": 1009,
            "source_name": "Tibco Middleware",
            "target_id": 10010,
            "target_name": "Tibco MDM",
            "transmitted_type": "Auto",
            "info_num": 4,
            "trans_info": "Master data"
        },
        {
            "id": 10,
            "source_id": 10010,
            "source_name": "Tibco MDM",
            "target_id": 10018,
            "target_name": "EIM",
            "transmitted_type": "Auto",
            "info_num": 4,
            "trans_info": "Master data"
        },
        {
            "id": 12,
            "source_id": 10012,
            "source_name": "SharePoint",
            "target_id": 10013,
            "target_name": "Local SBS Team",
            "transmitted_type": "Manual",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 13,
            "source_id": 10013,
            "source_name": "Local SBS Team",
            "target_id": 10014,
            "target_name": "One Support",
            "transmitted_type": "Manual",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 14,
            "source_id": 10014,
            "source_name": "One Support",
            "target_id": 10015,
            "target_name": "UAM Team",
            "transmitted_type": "Manual",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 15,
            "source_id": 10015,
            "source_name": "UAM Team",
            "target_id": 10016,
            "target_name": "Edentity",
            "transmitted_type": "Manual",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 16,
            "source_id": 10016,
            "source_name": "Edentity",
            "target_id": 1008,
            "target_name": "Workday",
            "transmitted_type": "Auto",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 17,
            "source_id": 10016,
            "source_name": "Edentity",
            "target_id": 10017,
            "target_name": "Active Directory",
            "transmitted_type": "Auto",
            "info_num": 5,
            "trans_info": "Inter on boarding information"
        },
        {
            "id": 3,
            "source_id": 1001,
            "source_name": "Intern",
            "target_id": 1006,
            "target_name": "契约锁",
            "transmitted_type": "Manual",
            "info_num": 6,
            "trans_info": "PI information"
        },
        {
            "id": 6,
            "source_id": 1006,
            "source_name": "契约锁",
            "target_id": 1007,
            "target_name": "Sanofi Business Services",
            "transmitted_type": "Manual",
            "info_num": 6,
            "trans_info": "PI information"
        }
    ]
}