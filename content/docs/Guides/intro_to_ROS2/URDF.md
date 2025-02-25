---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CUUAFT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD%2BXISCZ2zgGz3kO0bVKG8diiymddJXBGG%2FGK%2BOFHWvmgIgFskAskbdoVexYukqZYqg34lSYk18hlnUZzfr2QV3MB4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgGvERBat%2F57aslECrcA3FhegUjGP6sSqkngrTCneptH4mege%2FM0%2F7AxwC6bcL0wIe%2FzWPA0X4taiX9kz4%2F9bL9QaOM8X88ZoeA6v4Gr29jXZx4I5jhTGlZAnUAvpXR3AXou4E9wVOw0e8ZAEgIUVNRo%2FyodBkIqcLGZuQxdzX0768XUtpkP51cFebhw%2BkSlbxiAOq1ZTACLQ6nXnRN3t5Bmlxp3AVRsOaKdNEO%2FQBFljwpNUSPDniV%2FLuEvB7wqoeWjPBOzQmeJJJHVKE6Blysys90JrfJWwYCBrBvn6KRbG0%2BqAyLBm%2FvZt62D9%2BbxJEcZXGDbbn290Aum2acWut3ToyPyGBZ2iKGVlFAGKvHNiZGd49VM6f3PVc0fTW83WWzujFVag25WCDOt0WkFxtDZrQgM7lIHuHvYpI3gPWlQyaMTrYayZfjK0PMMxAQBN7ZF7XQhz%2B6jAJbnAvWqdwoMC1bp99eTvQ%2BL8%2FhRN8oy7ojSebo9Mw6EHuuUh8Zg1KecHzoRee31%2FiPDiFDk55B5z6losJjdqJOpO4hT%2FzyBCmY3996BXoV4gpM0XbVWmJqnzQZ6wCu1al%2ByhvewWl7tZGrHMpAYB%2BO3LHRWDrkbcYZyCISAkW7gMiJ7Da%2BvMzdoV9cIzSofY82MLLn9b0GOqUB6%2FkiXu3S%2Fc7QESki5YjadSxjFB%2FL11vV4x2tMTYfrofkWYQrzIWnr9jnSLsVv5Q7P99IoVn42tRWcHlFQnnrtkwtkbb39YDo%2F9NDY2DbCB11v6KxemwtWCXaFNa3QfXy%2BJy7L61gYz4F0rhVOox3D6Xlu3rqCSvqNoAFC%2FubNWyfKsI%2FRU6OlQ%2BfXp1t3BBL%2Bu4PaattshRFZALhWSdslKDjOLNx&X-Amz-Signature=54664361510f987cd17364bbd633a066afd3f0e32f83ed23389b810f2ae15ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CUUAFT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQD%2BXISCZ2zgGz3kO0bVKG8diiymddJXBGG%2FGK%2BOFHWvmgIgFskAskbdoVexYukqZYqg34lSYk18hlnUZzfr2QV3MB4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMgGvERBat%2F57aslECrcA3FhegUjGP6sSqkngrTCneptH4mege%2FM0%2F7AxwC6bcL0wIe%2FzWPA0X4taiX9kz4%2F9bL9QaOM8X88ZoeA6v4Gr29jXZx4I5jhTGlZAnUAvpXR3AXou4E9wVOw0e8ZAEgIUVNRo%2FyodBkIqcLGZuQxdzX0768XUtpkP51cFebhw%2BkSlbxiAOq1ZTACLQ6nXnRN3t5Bmlxp3AVRsOaKdNEO%2FQBFljwpNUSPDniV%2FLuEvB7wqoeWjPBOzQmeJJJHVKE6Blysys90JrfJWwYCBrBvn6KRbG0%2BqAyLBm%2FvZt62D9%2BbxJEcZXGDbbn290Aum2acWut3ToyPyGBZ2iKGVlFAGKvHNiZGd49VM6f3PVc0fTW83WWzujFVag25WCDOt0WkFxtDZrQgM7lIHuHvYpI3gPWlQyaMTrYayZfjK0PMMxAQBN7ZF7XQhz%2B6jAJbnAvWqdwoMC1bp99eTvQ%2BL8%2FhRN8oy7ojSebo9Mw6EHuuUh8Zg1KecHzoRee31%2FiPDiFDk55B5z6losJjdqJOpO4hT%2FzyBCmY3996BXoV4gpM0XbVWmJqnzQZ6wCu1al%2ByhvewWl7tZGrHMpAYB%2BO3LHRWDrkbcYZyCISAkW7gMiJ7Da%2BvMzdoV9cIzSofY82MLLn9b0GOqUB6%2FkiXu3S%2Fc7QESki5YjadSxjFB%2FL11vV4x2tMTYfrofkWYQrzIWnr9jnSLsVv5Q7P99IoVn42tRWcHlFQnnrtkwtkbb39YDo%2F9NDY2DbCB11v6KxemwtWCXaFNa3QfXy%2BJy7L61gYz4F0rhVOox3D6Xlu3rqCSvqNoAFC%2FubNWyfKsI%2FRU6OlQ%2BfXp1t3BBL%2Bu4PaattshRFZALhWSdslKDjOLNx&X-Amz-Signature=24a106b439d7ab340907c37ae132710b0b5eedb2eabc70fb6ce740de99c7551a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
