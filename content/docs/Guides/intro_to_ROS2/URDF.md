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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFL7PUU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBScw1WEErnhy3%2B%2FB1MH0xahM9JnQM7LlCm3edwghWGhAiEAvAIXugNSz12crU3rVNMjPhho5PbiJ5vq9njshhf6Xgwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFkebdFAb%2Bl%2BAFTo%2FyrcA%2B3E%2FJBFOqugxF8EcNsUQ2L3oXAW5cAUjY8jWl4bASlM7aXyRsFpHQHboJUCswWlz3i9r3S5Zix3h2Dlg%2B3pkpz5t9pzOY3f%2B7nUs08N1Dh82XHQy4jC4tgRjcoxW3GKiCQsrvP%2BCwxLMwTHPK8VvPB3aYTSwj61yWuEXCPP7n8txk0WqDtA8mkqrvC0hXN6jqbqAGdoHZWwFnm1aoDkx48QGqfeTxP2hj8%2BJrV5cAA4ON%2BolVRks7qeocWTlH0XMGItHOdDTMYT18uto%2BadfOEZTOD5WEvqQ8UJLLJmOvWFcAQW9ld2Gm9YJjShU5O1MrJ397zWC43uOYCJ5QYkcbCbDLg%2FNRsYIxTAFP%2Bs2iPXvIo69ykNqytNc4TSW71VcSH5NZ8Kq3D25l75QeXWtNT5oSTkSy9SEOqJiSzAxFL3TII9%2B3YaT7dCJrpURM2s0Ibsn%2BxU7fImzEhYi0EUeq8F6swPjX7IxEK5t55CLhZZm%2BSa%2BpPyMjarPyGKnrIrS87ghsqZ4Dunwp%2F0hSbKSBratAPM6S6cyDkyZwrOsmZ8W0RoojKZufq1afVaBCXMdE7Hv8ru9gsW7BEJScr5NhkXO9BvzYfqRkwL%2Fpq7vCzJSHjDYmj3fXZ67H3XMO%2FGgMAGOqUB5dX40l4EHJBWV69eEulEgUkVbYarH%2FmjyVEKa6LYINfNHjt7y%2FMIpREhk7%2BA16wK4%2FJTSjwwv%2Bjxcf%2BFVmseVaSXFCDlth3fngxx%2BdzoFhDQKBOoe0dYklhEaxEgO8%2Bwcuewduo%2FfYss0Ls13Rmp%2F7AesIP32oIRn6hO066Jary%2FWzEsWbUv8%2BT8d0e2t%2FzpBdujFlNtAzBpL%2FZrMcA%2B3BZpfccc&X-Amz-Signature=1cee0c3735de8b7c0b96cfe17bbdc6606eca06cd210d61c4e3eaef1586d1b3b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFL7PUU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBScw1WEErnhy3%2B%2FB1MH0xahM9JnQM7LlCm3edwghWGhAiEAvAIXugNSz12crU3rVNMjPhho5PbiJ5vq9njshhf6Xgwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFkebdFAb%2Bl%2BAFTo%2FyrcA%2B3E%2FJBFOqugxF8EcNsUQ2L3oXAW5cAUjY8jWl4bASlM7aXyRsFpHQHboJUCswWlz3i9r3S5Zix3h2Dlg%2B3pkpz5t9pzOY3f%2B7nUs08N1Dh82XHQy4jC4tgRjcoxW3GKiCQsrvP%2BCwxLMwTHPK8VvPB3aYTSwj61yWuEXCPP7n8txk0WqDtA8mkqrvC0hXN6jqbqAGdoHZWwFnm1aoDkx48QGqfeTxP2hj8%2BJrV5cAA4ON%2BolVRks7qeocWTlH0XMGItHOdDTMYT18uto%2BadfOEZTOD5WEvqQ8UJLLJmOvWFcAQW9ld2Gm9YJjShU5O1MrJ397zWC43uOYCJ5QYkcbCbDLg%2FNRsYIxTAFP%2Bs2iPXvIo69ykNqytNc4TSW71VcSH5NZ8Kq3D25l75QeXWtNT5oSTkSy9SEOqJiSzAxFL3TII9%2B3YaT7dCJrpURM2s0Ibsn%2BxU7fImzEhYi0EUeq8F6swPjX7IxEK5t55CLhZZm%2BSa%2BpPyMjarPyGKnrIrS87ghsqZ4Dunwp%2F0hSbKSBratAPM6S6cyDkyZwrOsmZ8W0RoojKZufq1afVaBCXMdE7Hv8ru9gsW7BEJScr5NhkXO9BvzYfqRkwL%2Fpq7vCzJSHjDYmj3fXZ67H3XMO%2FGgMAGOqUB5dX40l4EHJBWV69eEulEgUkVbYarH%2FmjyVEKa6LYINfNHjt7y%2FMIpREhk7%2BA16wK4%2FJTSjwwv%2Bjxcf%2BFVmseVaSXFCDlth3fngxx%2BdzoFhDQKBOoe0dYklhEaxEgO8%2Bwcuewduo%2FfYss0Ls13Rmp%2F7AesIP32oIRn6hO066Jary%2FWzEsWbUv8%2BT8d0e2t%2FzpBdujFlNtAzBpL%2FZrMcA%2B3BZpfccc&X-Amz-Signature=609ea1e4ec36297783caf56f780dc08d7bb4ef1b479f24a7f9e884b370151b54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
