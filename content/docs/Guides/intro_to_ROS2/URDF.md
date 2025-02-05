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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5CE25B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCWw%2B%2BailABVtPNBcW3jX0zkD0xp1kVKb111sATEV9oSgIgN0ndz8F8kyOfquOZBon4CNhMkioluUKpGoMkfcBOiqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDO0Xuy1AQ0aK3kEQOSrcA9kMJsDsvtqIwdOlYnBGhi8cnCoUictaILvpV1r%2FeLDV%2Fplbpgpe0Akm7KuWCEmRvmtE8sMkVY2iT8zy2o6GIB%2FFbZss0p3QUYdAgDGBk49UY%2BQ45BgfCOoFWDRcofH6pSj1%2FtVl9NNu6bMhggeMf9pPOUF2Ykhy4g0Pf2C%2BaNjBcBHBsE8WtF7C7eoxbX9Q3mfAOEDA5A2661NdCw1TCcPMn1NVjHvpVGKpRBiPPU4SJ7oQxGIOIM0Ka90svsnOEElsJBZ2VYv%2B81dgwvHwTpP%2BA1Iu3reDMEPQhFh10ZCS%2Fv3f3CPkhlyIFmrzqJfpMF8oJ7UyXJ6PtzocM2FYl9ZyTWnDDgrIBtNYW0e1VGtasy%2BAwLq%2FBdcSBoMG3X0Fshi3%2FZ4HjaGsqwGnZonNMSj8y8I7Ybc7drAKFD0n6OCWuZGh8Rxyzg55qucV80GZyaBx1bkf8qQ6q54Y36AexlAnAh1A2UyZecDA9gE5zvk02lrqrSvIxWRX615CwQ8s3oL5%2FSbMskE%2Fcxtf8GTDa2ZkeXHrEbygj5DSPlH9Pnl%2FkVFjm5s3I%2Fst7EwZx4DL65c0kudQPaaPreQ9D61RdowiIjfs6cCOuaWO%2Fywdv0e0x6P3dgs7xiXm7tdeMOeLjb0GOqUBRowpPsWO5VB8LKahG0mZSXO9uns6psiol4ZgCG3yYfrJ9zoKlXUumImKvPQmaQ9X0Vfv7AyIwI54GFhmO%2FWbvsharmQB6rOil0OO89tCR8B6QJcrM%2B%2F3VxfJfrJxuAtAwQ8DT5NQ7c9UjzTn4Q7lO4vP4IeR%2F43q1QLA3CKmecatSFe4Jx%2FZEEk%2FGb9%2FwR9xkkgaXDnW2dP6FkY%2B68U4lyiVsBDa&X-Amz-Signature=889561c61ab3a2daabf99741bf4b153e9e70b5855567a5eca3644f7930e3f36d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ5CE25B%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCWw%2B%2BailABVtPNBcW3jX0zkD0xp1kVKb111sATEV9oSgIgN0ndz8F8kyOfquOZBon4CNhMkioluUKpGoMkfcBOiqYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDO0Xuy1AQ0aK3kEQOSrcA9kMJsDsvtqIwdOlYnBGhi8cnCoUictaILvpV1r%2FeLDV%2Fplbpgpe0Akm7KuWCEmRvmtE8sMkVY2iT8zy2o6GIB%2FFbZss0p3QUYdAgDGBk49UY%2BQ45BgfCOoFWDRcofH6pSj1%2FtVl9NNu6bMhggeMf9pPOUF2Ykhy4g0Pf2C%2BaNjBcBHBsE8WtF7C7eoxbX9Q3mfAOEDA5A2661NdCw1TCcPMn1NVjHvpVGKpRBiPPU4SJ7oQxGIOIM0Ka90svsnOEElsJBZ2VYv%2B81dgwvHwTpP%2BA1Iu3reDMEPQhFh10ZCS%2Fv3f3CPkhlyIFmrzqJfpMF8oJ7UyXJ6PtzocM2FYl9ZyTWnDDgrIBtNYW0e1VGtasy%2BAwLq%2FBdcSBoMG3X0Fshi3%2FZ4HjaGsqwGnZonNMSj8y8I7Ybc7drAKFD0n6OCWuZGh8Rxyzg55qucV80GZyaBx1bkf8qQ6q54Y36AexlAnAh1A2UyZecDA9gE5zvk02lrqrSvIxWRX615CwQ8s3oL5%2FSbMskE%2Fcxtf8GTDa2ZkeXHrEbygj5DSPlH9Pnl%2FkVFjm5s3I%2Fst7EwZx4DL65c0kudQPaaPreQ9D61RdowiIjfs6cCOuaWO%2Fywdv0e0x6P3dgs7xiXm7tdeMOeLjb0GOqUBRowpPsWO5VB8LKahG0mZSXO9uns6psiol4ZgCG3yYfrJ9zoKlXUumImKvPQmaQ9X0Vfv7AyIwI54GFhmO%2FWbvsharmQB6rOil0OO89tCR8B6QJcrM%2B%2F3VxfJfrJxuAtAwQ8DT5NQ7c9UjzTn4Q7lO4vP4IeR%2F43q1QLA3CKmecatSFe4Jx%2FZEEk%2FGb9%2FwR9xkkgaXDnW2dP6FkY%2B68U4lyiVsBDa&X-Amz-Signature=a8700792592957452721f32b9ca55a2a22f618da93cf8303a2b468789d5d1863&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
