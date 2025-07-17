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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNTBOIF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD49Fu3Juo6tuTYAPWj0%2B7H4srIAKA6LIqMb3M%2F6rP95gIgKZ4qUpRLFhs7Keq%2BHqgad%2BC9m4tlkYHLqISey%2FFhbeQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJFjcuKFJdgHeWo3ISrcA%2ByMOlANtdeqE6qX%2BiyJN3djqeoKaKxWOEQKUQHJUuDJDOex5R15Q%2F7rm85JdMCE0PsypFHX4pKPnHl9lloQT8bolxed65u0Uds5jAqIMH8X7i8pFFTKs%2Be%2FkzpAafaW3D%2FVo375XaKwjDqwSt%2BXPJ4Nj2VoSeEUu77z%2BPA90JoiipzVy%2B1b85Ad5YWVdqIH%2B7dD8cxeY4zUSSAeDU%2BkWD7VqAhf0v49oPPvbtt6xXjofTq%2B9%2BKYmoD499Pi2Qqj2%2B6OMAq%2FrrLBQADZLO4WBlNtD3oe4qxmMdAmDl84x8%2FEJd%2FwLQZr6Enuv2%2BqhOkaU%2B4BdiTsmPOsLpWmrGSZ72W1xuxo%2FTC7N%2B1kLS3td6k%2FNanU75tm6Zi9mQameonpAuT0zv7ciwG8h5PXfStLoh8UF7ZSQQ52V7QC%2FkkB6mP1KtY497LREEdR92YheljbIIHjh037Q9O1By94BMvDdioJdd35IT2MyWaS6nb2BEBuaWJcyUArVcoLcxAvuKcYw3smBSdGX2PNZE7X3sx7J3ZyRu2jstvwPXaM39j0B4aFHMyuZ4mDHGtus%2B2OPB3KXAqt1XhoOZlGgt722FiysqwsF%2FPvPSuo6f9Icfr1iOdnUY6D8N%2FCuspGBqhtMNLt4cMGOqUBOwSI%2Fi94yDI%2FjsVvxsXPVuj6ye3akCmIymFloKeAKL1quLtiXQHB0P%2Fraz4%2FU0uUv6ofRCd3vZNn8cUGWT4f2xPNL5jxUjdyBLr%2Ft7CYLt6Z%2B6uNErlJP4P2QugCTWKPxmckof4s%2FMS3i14FPSifuvEfIGslexTAoRIYOvS%2BtFe8Ld2r8l9OIRBqsW0kLBL7hwrq2IhOto74tAOWBNzDwQWkXZuP&X-Amz-Signature=edcfb79eea0407b5d49c2e181c127d483c847ab146cb1af7ddac749985fc7e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WNTBOIF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD49Fu3Juo6tuTYAPWj0%2B7H4srIAKA6LIqMb3M%2F6rP95gIgKZ4qUpRLFhs7Keq%2BHqgad%2BC9m4tlkYHLqISey%2FFhbeQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJFjcuKFJdgHeWo3ISrcA%2ByMOlANtdeqE6qX%2BiyJN3djqeoKaKxWOEQKUQHJUuDJDOex5R15Q%2F7rm85JdMCE0PsypFHX4pKPnHl9lloQT8bolxed65u0Uds5jAqIMH8X7i8pFFTKs%2Be%2FkzpAafaW3D%2FVo375XaKwjDqwSt%2BXPJ4Nj2VoSeEUu77z%2BPA90JoiipzVy%2B1b85Ad5YWVdqIH%2B7dD8cxeY4zUSSAeDU%2BkWD7VqAhf0v49oPPvbtt6xXjofTq%2B9%2BKYmoD499Pi2Qqj2%2B6OMAq%2FrrLBQADZLO4WBlNtD3oe4qxmMdAmDl84x8%2FEJd%2FwLQZr6Enuv2%2BqhOkaU%2B4BdiTsmPOsLpWmrGSZ72W1xuxo%2FTC7N%2B1kLS3td6k%2FNanU75tm6Zi9mQameonpAuT0zv7ciwG8h5PXfStLoh8UF7ZSQQ52V7QC%2FkkB6mP1KtY497LREEdR92YheljbIIHjh037Q9O1By94BMvDdioJdd35IT2MyWaS6nb2BEBuaWJcyUArVcoLcxAvuKcYw3smBSdGX2PNZE7X3sx7J3ZyRu2jstvwPXaM39j0B4aFHMyuZ4mDHGtus%2B2OPB3KXAqt1XhoOZlGgt722FiysqwsF%2FPvPSuo6f9Icfr1iOdnUY6D8N%2FCuspGBqhtMNLt4cMGOqUBOwSI%2Fi94yDI%2FjsVvxsXPVuj6ye3akCmIymFloKeAKL1quLtiXQHB0P%2Fraz4%2FU0uUv6ofRCd3vZNn8cUGWT4f2xPNL5jxUjdyBLr%2Ft7CYLt6Z%2B6uNErlJP4P2QugCTWKPxmckof4s%2FMS3i14FPSifuvEfIGslexTAoRIYOvS%2BtFe8Ld2r8l9OIRBqsW0kLBL7hwrq2IhOto74tAOWBNzDwQWkXZuP&X-Amz-Signature=f5bd79858722290a3df4ab03a76168e3b62fa7aa3430e7fe75751a9430c655a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
