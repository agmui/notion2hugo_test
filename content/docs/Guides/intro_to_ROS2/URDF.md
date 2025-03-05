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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCWDG6KZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNNzXxPXPDLsto20qHU7pJxObwv%2F4fu6SFhGVk8CTlQIgB46CoymeX2ZCv1xiTWR69SBYfWD%2Bs2y%2BXJaI3bVrMH4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0a3wHXOWJUPE310SrcA68yC2XZdf7IALHbDhOkL5wTRxrdzVxu28KEeHHnsfkfcflTAlSdWiJfHw7sLB7%2BWkPkPxgbFOcQ%2BWMsjQ4Wp80q7aNi%2BSJk5xD4PtvqpZ6CEx%2FE4eMwWt6N8ehGr83AL9wlYjbqeSO%2FAIgijGkdoc4YkLX09CGHLXzOysENWw7TFBbBiGchcWsTJbt6k0xTg%2BcIkb8ViqT3fU2JQP1QkXVlJ8Vv9to944HNB8srGnixl%2FMGFlzqMlBL%2Ft0KwoOT57RBCrkKVIyWb1E7TesTOUcYUCRJE%2Bg1gPtlEonMZ%2F%2FFV97GLHBzm9QsLCZUBOXC4jVSxryOcpJS6QcKUoheECCPBD%2FrZtIBI80u9e2whg1misMjkb0cYBnoK6VYKvATWA08HW9ksizqdJRIR3rFca%2BeUOloS4ZwWZ4Wp%2FLpT0V9lFREi6aEUt4fWgkhSha6k%2F04ASBtXrb2pr77sayjPo2hV8v55Pmv%2FOyZh%2Fv1CgBI%2BM%2FRBv4%2BPBpZooiCHnzdEcBEGwgAwiNt43D3jNQIH6z1WvLoXSICTMD9D3kjAzJRlR5evRgPbooWevboQZoeuNMMSxfUBuRWObnS3J5APW199SFJLFwBTe6EpvazRKIc6YAPjYtmsOUk1nAFML6Jn74GOqUBVwcw97I%2BV47jWoEFYLgC0Boy9HYiIaa91ftpoAyYuw%2BFWY1PkAV7257l6T%2FydLNr3XdNbEhkWBDZ2pE58eBo1fJG70xUdCM6o65NqAzHFrPKeoTC92L7njjZCBdQmQB76vVS6P8xEhZf7I0WkcmuosGkh4NGVLBgqJyDdwAWuiTYX4OyqNRrNWmmHtZQ4lFL2giUcxkQJZpA20F1rJielDPYCfgF&X-Amz-Signature=7fdd7f054f6a7cc88ae250de590c973d20a881ee78d0b4e1c933bd5e16a8bb04&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCWDG6KZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjNNzXxPXPDLsto20qHU7pJxObwv%2F4fu6SFhGVk8CTlQIgB46CoymeX2ZCv1xiTWR69SBYfWD%2Bs2y%2BXJaI3bVrMH4qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0a3wHXOWJUPE310SrcA68yC2XZdf7IALHbDhOkL5wTRxrdzVxu28KEeHHnsfkfcflTAlSdWiJfHw7sLB7%2BWkPkPxgbFOcQ%2BWMsjQ4Wp80q7aNi%2BSJk5xD4PtvqpZ6CEx%2FE4eMwWt6N8ehGr83AL9wlYjbqeSO%2FAIgijGkdoc4YkLX09CGHLXzOysENWw7TFBbBiGchcWsTJbt6k0xTg%2BcIkb8ViqT3fU2JQP1QkXVlJ8Vv9to944HNB8srGnixl%2FMGFlzqMlBL%2Ft0KwoOT57RBCrkKVIyWb1E7TesTOUcYUCRJE%2Bg1gPtlEonMZ%2F%2FFV97GLHBzm9QsLCZUBOXC4jVSxryOcpJS6QcKUoheECCPBD%2FrZtIBI80u9e2whg1misMjkb0cYBnoK6VYKvATWA08HW9ksizqdJRIR3rFca%2BeUOloS4ZwWZ4Wp%2FLpT0V9lFREi6aEUt4fWgkhSha6k%2F04ASBtXrb2pr77sayjPo2hV8v55Pmv%2FOyZh%2Fv1CgBI%2BM%2FRBv4%2BPBpZooiCHnzdEcBEGwgAwiNt43D3jNQIH6z1WvLoXSICTMD9D3kjAzJRlR5evRgPbooWevboQZoeuNMMSxfUBuRWObnS3J5APW199SFJLFwBTe6EpvazRKIc6YAPjYtmsOUk1nAFML6Jn74GOqUBVwcw97I%2BV47jWoEFYLgC0Boy9HYiIaa91ftpoAyYuw%2BFWY1PkAV7257l6T%2FydLNr3XdNbEhkWBDZ2pE58eBo1fJG70xUdCM6o65NqAzHFrPKeoTC92L7njjZCBdQmQB76vVS6P8xEhZf7I0WkcmuosGkh4NGVLBgqJyDdwAWuiTYX4OyqNRrNWmmHtZQ4lFL2giUcxkQJZpA20F1rJielDPYCfgF&X-Amz-Signature=c88e6982f556f665bc24c65d4f7c8a6badaba02468a051cb7d3a2783bf6d4628&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
