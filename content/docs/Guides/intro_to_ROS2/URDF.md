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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGUIWI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFw3HvAq0WALEXxk7zOcidT8AHfcfuHY3dcdBwTpZ95GAiEA6PlzGtPRNsS2LUp%2B%2Bap7NhlfsJsO%2F8WNHHUkypHP47wqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAZex8YXVFiyIwCwCrcA5Tx7rbMohdlBu9DkUYBZW59NKjHZ91vLLrMuZOpy1V4nm3eNLGG2ewHlUNstpwJD0mD1VxXudaBBsIgtWcUZpn7DaV48Dz%2Bs7%2Fs4pMWtGgPrmRbLZhEV2MAtdRt7aNXjDEyTv8IxrrQaUBOxTMn4Pp%2FxXj6HUZonnsypowOslgB8Td2B7SNNyF7c2r%2FslU5gR2%2FJslyd2YKbWhxmCTYGj1rOCmjDXw5WsfbmbbflpmFFF9BzM1FxDqsueVCmzHa7oDxWC7oLuJQeKoj1Pg452T6e0B71cJo9HHjC5X3hWpPV8X%2BIIobptsm4g%2BhTez3Wj8q2VgOL9dzWNRra3uW%2FHBwLkJL7new5Hw63gzh7hhblj66fXao21WkOjXt1vzTD%2BfWRCXuQ5wYW5gGnn5bvo8EejtTjLRLwrzpJp03mweuveMEBzLjNis4tUUvhAJ4XAMJLaxEX5Dovt0Biush5nay6Ldo2qWorVnvmO0ixFsLx8pkA8HmFghwxBH7L8gZUwYRdC66xkU75L6knmYjMxIwSFqnYRk791POkJcQtIr1cxcia3%2BXerIwLk1rSp495Ce8%2FtaalbdxZjW0ZF%2FTzI4TSDWJ4tuDfcaLym5c%2Fn8E16pXZw3Sjw%2BXLj2pMITKy8AGOqUBIePo4znz3uA3RIuZCZOxKuqQ1Rz4d3IfUDgGu5JouvKJeN0UlGeF0Z%2BlIvitgxe6P%2FQ7eOpEOw3qIZAIMVnS0gItj1h2TrjcHRFGxv7VOk5BIQRrGTnh%2FrJY1oSfKudBC%2FmRdRbyg6YY47xJG%2BksFGJqyV52S6qHGfM9zbnZkqr7RGe3rN0%2B2mr8tWM8LF4yBarxSZa5I2KFGaTWT1FS9lnHH%2FR6&X-Amz-Signature=d5fb82d85f60dfaf46e34e3676d90dc29f76251680f0486c5b46b061c892153f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLRGUIWI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFw3HvAq0WALEXxk7zOcidT8AHfcfuHY3dcdBwTpZ95GAiEA6PlzGtPRNsS2LUp%2B%2Bap7NhlfsJsO%2F8WNHHUkypHP47wqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAZex8YXVFiyIwCwCrcA5Tx7rbMohdlBu9DkUYBZW59NKjHZ91vLLrMuZOpy1V4nm3eNLGG2ewHlUNstpwJD0mD1VxXudaBBsIgtWcUZpn7DaV48Dz%2Bs7%2Fs4pMWtGgPrmRbLZhEV2MAtdRt7aNXjDEyTv8IxrrQaUBOxTMn4Pp%2FxXj6HUZonnsypowOslgB8Td2B7SNNyF7c2r%2FslU5gR2%2FJslyd2YKbWhxmCTYGj1rOCmjDXw5WsfbmbbflpmFFF9BzM1FxDqsueVCmzHa7oDxWC7oLuJQeKoj1Pg452T6e0B71cJo9HHjC5X3hWpPV8X%2BIIobptsm4g%2BhTez3Wj8q2VgOL9dzWNRra3uW%2FHBwLkJL7new5Hw63gzh7hhblj66fXao21WkOjXt1vzTD%2BfWRCXuQ5wYW5gGnn5bvo8EejtTjLRLwrzpJp03mweuveMEBzLjNis4tUUvhAJ4XAMJLaxEX5Dovt0Biush5nay6Ldo2qWorVnvmO0ixFsLx8pkA8HmFghwxBH7L8gZUwYRdC66xkU75L6knmYjMxIwSFqnYRk791POkJcQtIr1cxcia3%2BXerIwLk1rSp495Ce8%2FtaalbdxZjW0ZF%2FTzI4TSDWJ4tuDfcaLym5c%2Fn8E16pXZw3Sjw%2BXLj2pMITKy8AGOqUBIePo4znz3uA3RIuZCZOxKuqQ1Rz4d3IfUDgGu5JouvKJeN0UlGeF0Z%2BlIvitgxe6P%2FQ7eOpEOw3qIZAIMVnS0gItj1h2TrjcHRFGxv7VOk5BIQRrGTnh%2FrJY1oSfKudBC%2FmRdRbyg6YY47xJG%2BksFGJqyV52S6qHGfM9zbnZkqr7RGe3rN0%2B2mr8tWM8LF4yBarxSZa5I2KFGaTWT1FS9lnHH%2FR6&X-Amz-Signature=31d26e8067a750230c6d908b36c172d168ca8706d5d53fb3b0d8bbaec8bdaf43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
