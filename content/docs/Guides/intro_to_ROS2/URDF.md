---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUK36S7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDyA8%2Bd6vhGBatGzE8mcQzB1D65qMnbmkQ8HAMerlLrUAiEA7jYdk6nIGNdMl3OTZJHvjoxzdZV2vDDXXqt82iMzVSYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDfgGyGkhLp2rKTNcSrcAx4MQCRl0uwhQIvDztzH%2BFhOzw9QhpbBEc7bgK6IQU9WCyU9XVzsGaS0YJ63xyo4EhSnXhjCf7P8UR50UqLdlzEVgl0eDQ8jCx2yjVLO9U3V1uAIkOrVNwhfCB7X8VsTwBDh9vObw2O5xWoB7u9eevFafj7GDahUtZ8rbpWj4OemMeS4fSoxtOvij3ssEhrNRZaPW663%2Be3B9r4KjLT%2BLCm5AO6Qn1CzE%2BSbvVxfFIxsrAzSuUVwK904BywUwYX%2BlNCkFcZPCCRUzMTO6Rp85EgoIwtoBMTZLrOsVzb6asVh55QqgSoU7ldhWjKWy61H1%2BUlhKF82tWI48kqMwj8%2FpJiCRghxrzz1xIE%2FsmpvAZF32Wunp0TBH55QtmN%2FiRJ%2BesRY7oJVw%2BlQCdpVGIyDjNMUBqOJvpV%2Fxg3894qC67Qh6KmdKdZc9QsoRvqQCG8Fy7pyfh1yzfgVg9nrhD2ZdZx%2F40w2AcV2NHiAHM8TLgVQhO5G9rjnRDe3HOdY4cro2toGD1oyizqoi0sV%2BcCn7fK%2FyblzXMVDSAA0417XK7CR001%2BqmUrMrYWBS%2BTPL0i6rcLEP3EuOgu9BQiNFZH6q%2BN3V38E2RiYJhuXe%2F0QnE9oTA7dTn7WdESZA0MNetzcQGOqUBdNrGK%2FI3Q6RI9CDbGdegZAr6zZG4ltattyU7UNq2E5x6HbJyC0L0MubmzTBngPyG1Mudt6erhFIGbZQ41ejD608EAEIKh8uuzTDOwJKdeJqwltOqrkMUAFFlmYBIWeFcrN3g10IKnI3G3BRWVeCFhmvq4FeFWYuTlVQLEw%2FRwcdqUpmpz5vRW5QuqFYuElMYMoU2ASjl5HpeSFPSXZGdikSc%2FrRt&X-Amz-Signature=fcf0074f127ff514fbf1e2c9cdc8ae24770d0e5ed2465e1f23c0ca09be2476ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUK36S7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDyA8%2Bd6vhGBatGzE8mcQzB1D65qMnbmkQ8HAMerlLrUAiEA7jYdk6nIGNdMl3OTZJHvjoxzdZV2vDDXXqt82iMzVSYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDfgGyGkhLp2rKTNcSrcAx4MQCRl0uwhQIvDztzH%2BFhOzw9QhpbBEc7bgK6IQU9WCyU9XVzsGaS0YJ63xyo4EhSnXhjCf7P8UR50UqLdlzEVgl0eDQ8jCx2yjVLO9U3V1uAIkOrVNwhfCB7X8VsTwBDh9vObw2O5xWoB7u9eevFafj7GDahUtZ8rbpWj4OemMeS4fSoxtOvij3ssEhrNRZaPW663%2Be3B9r4KjLT%2BLCm5AO6Qn1CzE%2BSbvVxfFIxsrAzSuUVwK904BywUwYX%2BlNCkFcZPCCRUzMTO6Rp85EgoIwtoBMTZLrOsVzb6asVh55QqgSoU7ldhWjKWy61H1%2BUlhKF82tWI48kqMwj8%2FpJiCRghxrzz1xIE%2FsmpvAZF32Wunp0TBH55QtmN%2FiRJ%2BesRY7oJVw%2BlQCdpVGIyDjNMUBqOJvpV%2Fxg3894qC67Qh6KmdKdZc9QsoRvqQCG8Fy7pyfh1yzfgVg9nrhD2ZdZx%2F40w2AcV2NHiAHM8TLgVQhO5G9rjnRDe3HOdY4cro2toGD1oyizqoi0sV%2BcCn7fK%2FyblzXMVDSAA0417XK7CR001%2BqmUrMrYWBS%2BTPL0i6rcLEP3EuOgu9BQiNFZH6q%2BN3V38E2RiYJhuXe%2F0QnE9oTA7dTn7WdESZA0MNetzcQGOqUBdNrGK%2FI3Q6RI9CDbGdegZAr6zZG4ltattyU7UNq2E5x6HbJyC0L0MubmzTBngPyG1Mudt6erhFIGbZQ41ejD608EAEIKh8uuzTDOwJKdeJqwltOqrkMUAFFlmYBIWeFcrN3g10IKnI3G3BRWVeCFhmvq4FeFWYuTlVQLEw%2FRwcdqUpmpz5vRW5QuqFYuElMYMoU2ASjl5HpeSFPSXZGdikSc%2FrRt&X-Amz-Signature=6e9b285fccd4025347b2bf06308cb27d605721fc08d2cc27a20b5102a9d36a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
