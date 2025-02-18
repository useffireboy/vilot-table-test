const originData = {
	"nodes": [
		{ "id": 1001, "is_root": true, "name": "Intern", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 1005, "is_root": false, "name": "TA Team", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 10051, "is_root": false, "name": "TA Team", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 10052, "is_root": false, "name": "TA Team", "location": "SG", "type": "Person", "is_third_party": "N" },
		{ "id": 1006, "is_root": false, "name": "契约锁", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 1008, "is_root": false, "name": "Workday", "location": "IE", "type": "Person", "is_third_party": "N" },
		{ "id": 1009, "is_root": false, "name": "Tibco Middleware", "location": "Global", "type": "System", "is_third_party": "N" },
		{ "id": 10010, "is_root": false, "name": "Tibco MDM", "location": "SG", "type": "System", "is_third_party": "N" },
		{ "id": 10018, "is_root": false, "name": "EIM", "location": "CN", "type": "System", "is_third_party": "N" },
		{ "id": 1007, "is_root": false, "name": "Sanofi Business Services", "location": "MY", "type": "Person", "is_third_party": "N" },
		{ "id": 10012, "is_root": false, "name": "SharePoint", "location": "Global", "type": "System", "is_third_party": "N" },
		{ "id": 10013, "is_root": false, "name": "Local SBS Team", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 10014, "is_root": false, "name": "One Support", "location": "Global", "type": "System", "is_third_party": "N" },
		{ "id": 10015, "is_root": false, "name": "UAM Team ", "location": "CN", "type": "Person", "is_third_party": "N" },
		{ "id": 10016, "is_root": false, "name": "Edentity", "location": "Global", "type": "System", "is_third_party": "N" },
		{ "id": 10017, "is_root": false, "name": "Active Directory", "location": "Global", "type": "System", "is_third_party": "N" }
	],
	"edges":
		[
			{ "id": 1, "source_id": 1001, "source_name": "Intern", "target_id": 1008, "target_name": "Workday", "transmitted_type": "Manual", "info_num": "1", "trans_info": "Onboarding Required Document" }
			, { "id": 123, "source_id": 1001, "source_name": "Intern", "target_id": 10051, "target_name": "Workday", "transmitted_type": "Manual", "info_num": "1", "trans_info": "Onboarding Required Document" }
			, { "id": 124, "source_id": 1001, "source_name": "Intern", "target_id": 10052, "target_name": "Workday", "transmitted_type": "Manual", "info_num": "1", "trans_info": "Onboarding Required Document" }
			, { "id": 2, "source_id": 1001, "source_name": "Intern", "target_id": 1005, "target_name": "TA Team", "transmitted_type": "Manual", "is_root": "Y", "info_num": "1", "trans_info": "Onboarding Required Document" }
			, { "id": 5, "source_id": 1005, "source_name": "TA Team", "target_id": 1007, "target_name": "Sanofi Business Services", "transmitted_type": "Manual", "info_num": "2", "trans_info": "Onboarding Required Document" }
			, { "id": 11, "source_id": 1007, "source_name": "Sanofi Business Services", "target_id": 10012, "target_name": "SharePoint", "transmitted_type": "Manual", "info_num": "2", "trans_info": "Onboarding Required Document" }
			, { "id": 4, "source_id": 1001, "source_name": "Intern", "target_id": 1007, "target_name": "Sanofi Business Services", "transmitted_type": "Manual", "info_num": "4", "trans_info": "Other information" }
			, { "id": 7, "source_id": 1007, "source_name": "Sanofi Business Services", "target_id": 1008, "target_name": "Workday", "transmitted_type": "Manual", "info_num": "8", "trans_info": "Master data" }
			, { "id": 8, "source_id": 1008, "source_name": "Workday", "target_id": 1009, "target_name": "Tibco Middleware", "transmitted_type": "Auto", "info_num": "4", "trans_info": "Master data" }
			, { "id": 9, "source_id": 1009, "source_name": "Tibco Middleware", "target_id": 10010, "target_name": "Tibco MDM", "transmitted_type": "Auto", "info_num": "4", "trans_info": "Master data" }
			, { "id": 10, "source_id": 10010, "source_name": "Tibco MDM", "target_id": 10018, "target_name": "EIM", "transmitted_type": "Auto", "info_num": "4", "trans_info": "Master data" }
			, { "id": 12, "source_id": 10012, "source_name": "SharePoint", "target_id": 10013, "target_name": "Local SBS Team", "transmitted_type": "Manual", "info_num": "5", "trans_info": "Inter on boarding information" }
			, { "id": 13, "source_id": 10013, "source_name": "Local SBS Team", "target_id": 10014, "target_name": "One Support", "transmitted_type": "Manual", "info_num": "10", "trans_info": "Inter on boarding information" }
			, { "id": 14, "source_id": 10014, "source_name": "One Support", "target_id": 10015, "target_name": "UAM Team", "transmitted_type": "Manual", "info_num": "5", "trans_info": "Inter on boarding information" }
			, { "id": 15, "source_id": 10015, "source_name": "UAM Team", "target_id": 10016, "target_name": "Edentity", "transmitted_type": "Manual", "info_num": "15", "trans_info": "Inter on boarding information" }
			, { "id": 16, "source_id": 10016, "source_name": "Edentity", "target_id": 1008, "target_name": "Workday", "transmitted_type": "Auto", "info_num": "5", "trans_info": "Inter on boarding information" }
			, { "id": 17, "source_id": 10016, "source_name": "Edentity", "target_id": 10017, "target_name": "Active Directory", "transmitted_type": "Auto", "info_num": "5", "trans_info": "Inter on boarding information" }
			, { "id": 3, "source_id": 1001, "source_name": "Intern", "target_id": 1006, "target_name": "契约锁", "transmitted_type": "Manual", "info_num": "6", "trans_info": "PI information" }
			, { "id": 6, "source_id": 1006, "source_name": "契约锁", "target_id": 1007, "target_name": "Sanofi Business Services", "transmitted_type": "Manual", "info_num": "16", "trans_info": "PI information" }
		]
}

const sourceMapTarget = new Map();
const nodeLineNumberMap = new Map();
originData.edges.forEach(edge => {
	//对节点进行连线个数统计
	if (!nodeLineNumberMap.get(edge.source_id)) {
		nodeLineNumberMap.set(edge.source_id, 1)
	} else {
		nodeLineNumberMap.set(edge.source_id, nodeLineNumberMap.get(edge.source_id) + 1)
	}
	if (!nodeLineNumberMap.get(edge.target_id)) {
		nodeLineNumberMap.set(edge.target_id, 1)
	} else {
		nodeLineNumberMap.set(edge.target_id, nodeLineNumberMap.get(edge.target_id) + 1)
	}
	//记录节点的子节点id
	if (!sourceMapTarget.get(edge.source_id)) {
		const arr = [edge.target_id];
		sourceMapTarget.set(edge.source_id, arr);
	} else {
		sourceMapTarget.get(edge.source_id).push(edge.target_id);
	}
})
console.log('[ nodeLineNumberMap ]-44-「origin」', nodeLineNumberMap);

const deep = (parentNodes, validNodes, level, arr2) => {
	let levelNodeIds = [], newValidNodes = [], leftLevelNodes = [], rightLevelNodes = [];
	if (validNodes.length === 0) {
		return;
	}
	parentNodes.forEach(node => {
		const childrenIds = sourceMapTarget.get(node.id)
		levelNodeIds = levelNodeIds.concat(childrenIds);
	})
	//去重
	levelNodeIds = Array.from(new Set(levelNodeIds));
	validNodes.forEach(node => {
		if (levelNodeIds.includes(node.id)) {
			if (node.location === "CN") {
				leftLevelNodes.push(node)
			} else {
				rightLevelNodes.push(node)
			}
		} else {
			newValidNodes.push(node);
		}
	})
	arr2[level] = {
		left: leftLevelNodes,
		right: rightLevelNodes
	};
	deep(leftLevelNodes.concat(rightLevelNodes), newValidNodes, level + 1, arr2);
}

function buildData() {
	let arr2 = {};
	const { nodes } = originData;
	const rootLeft = [], rootRight = [];
	const validItems = [];
	nodes.forEach(item => {
		if (item.is_root) {
			if (item.location === "CN") {
				rootLeft.push(item);
			} else {
				rootRight.push(item);
			}
		} else {
			validItems.push(item);
		}
	})
	arr2[0] = { left: rootLeft, right: rootRight };
	deep(rootLeft.concat(rootRight), validItems, 1, arr2);
	return arr2;
}
const levelData = buildData();

// left  x  0-600
let nodeWidth = 100, nodeHeight = 100, horizontalSpacing = 250, verticalSpacing = 250;
let maxLeftX = 2 * (nodeWidth + horizontalSpacing);
let gap = 20;
let l_startX = 0, l_startY = 0;
let r_startX = maxLeftX + gap + horizontalSpacing, r_startY = 0;
Object.values(levelData).forEach((item, index) => {
	//连线多的放在中间
	item.left.sort((a, b) => nodeLineNumberMap.get(a.id) - nodeLineNumberMap.get(b.id));
	item.right.sort((a, b) => nodeLineNumberMap.get(b.id) - nodeLineNumberMap.get(a.id));
	const l_len = item.left.length;
	item.left.forEach((item, num) => {
		let x = num * (nodeWidth + horizontalSpacing) + (3-l_len)*(nodeWidth + horizontalSpacing),
			y = index * (nodeHeight + verticalSpacing) + l_startY;
		item.position = { x, y };
	})
	item.right.forEach((item, num) => {
		let x = num * (nodeWidth + horizontalSpacing) + r_startX,
			y = index * (nodeHeight + verticalSpacing) + r_startY;
		item.position = { x, y };
	})
})
console.log('[ leveData ]-103-「origin」', levelData,originData);

export const customData = originData;
