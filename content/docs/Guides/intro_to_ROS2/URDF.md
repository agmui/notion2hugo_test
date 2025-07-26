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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3DE675%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCsBzld0x4GofuFjajXxznZo5vdad4Di2pivuubpNxJvwIhAIFW%2FXV615HtOB1Bprhk%2BbFWVEAMIqnC0TFf%2FxMYlxvtKv8DCF8QABoMNjM3NDIzMTgzODA1Igw5rRd0RFlFGM955woq3ANcJcFyRnOLJ4860gWdBJT3CD%2BUfQY%2BRzwu70ee5J3cobstoCzvz26LLJkw1Tm47qZPi5WWBDwohUsDH857UHGIM37J8%2FknMa5ltiBrsI1sNrHcl5KeDVJBrCqLJLUh6n7M%2B7MqoGVzVftVWiXMCbFPWe5ZPYF3oH6JuwU1JwTv3X8WJXKNyp2kk0NM%2FaqBmkWe32FU5Hbnx1D%2Fj2K904WQ%2FKxE%2Bx1pTvQGeV03Srn3rwmISPEU5kZv5HU8mco1oCwMacEp%2FgFhAHvSZJjzq%2FM62TVyBel9USQa2eUwoKHJxWvd68q%2F2N5t%2FoM7kgZa3e2AbriLzhmB54775M2rP5FIRYiK24cKsJSCQRkxjOfmVSiXLwB%2FjMvjk7%2BbTbGz0uCSyVeQR9pwg0wNwgaX4v34s%2Bn1P%2BgmYoFqzzsnV58UwOGdd8FsyUGUD9Nlx%2FZ2CFVZ3CKDQjPKzo4%2BTgdh%2B82Rnpku5nPvNg1ia3rE9OauMKCdxIkrqFUsGlNjT9iuaOQF%2Bx9ddyHxLe9hZn%2B12F4J9npnzb1zHfMRd3IykbOrU3QEPWSqlVs8kdHvvffpHy%2BwyaXHU1B7V1%2FDMNBqPVvgEHI5qrbAZFWxdtKgTxG%2BPuoYzs8DRgER1fQT7jD0wZPEBjqkAZ2HuF86JrTE%2BBX1gMSGa4pYXYoaKJW%2Fe6Wil%2FB4RR8OuUxiWmt%2FSDvguWfUqTi%2F%2B%2FTxx%2BDeP8SACtB%2BVmojcatefAJw8W5I3v7bX2xXyrAWFHMVURuYsl4o%2BGuhqwABfUW2WMRUioxL37wtUHncRnuQIhxWWftngMpCDRB4mXknBkxMXOu%2Bturvy04nPW1pwLDoxgOl2En6kTy2PtWvXMS3neVz&X-Amz-Signature=1935751abbf254d2d76a5e47e58acc738a18063f2d0c39fd9990b3bbd727ea3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3DE675%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCsBzld0x4GofuFjajXxznZo5vdad4Di2pivuubpNxJvwIhAIFW%2FXV615HtOB1Bprhk%2BbFWVEAMIqnC0TFf%2FxMYlxvtKv8DCF8QABoMNjM3NDIzMTgzODA1Igw5rRd0RFlFGM955woq3ANcJcFyRnOLJ4860gWdBJT3CD%2BUfQY%2BRzwu70ee5J3cobstoCzvz26LLJkw1Tm47qZPi5WWBDwohUsDH857UHGIM37J8%2FknMa5ltiBrsI1sNrHcl5KeDVJBrCqLJLUh6n7M%2B7MqoGVzVftVWiXMCbFPWe5ZPYF3oH6JuwU1JwTv3X8WJXKNyp2kk0NM%2FaqBmkWe32FU5Hbnx1D%2Fj2K904WQ%2FKxE%2Bx1pTvQGeV03Srn3rwmISPEU5kZv5HU8mco1oCwMacEp%2FgFhAHvSZJjzq%2FM62TVyBel9USQa2eUwoKHJxWvd68q%2F2N5t%2FoM7kgZa3e2AbriLzhmB54775M2rP5FIRYiK24cKsJSCQRkxjOfmVSiXLwB%2FjMvjk7%2BbTbGz0uCSyVeQR9pwg0wNwgaX4v34s%2Bn1P%2BgmYoFqzzsnV58UwOGdd8FsyUGUD9Nlx%2FZ2CFVZ3CKDQjPKzo4%2BTgdh%2B82Rnpku5nPvNg1ia3rE9OauMKCdxIkrqFUsGlNjT9iuaOQF%2Bx9ddyHxLe9hZn%2B12F4J9npnzb1zHfMRd3IykbOrU3QEPWSqlVs8kdHvvffpHy%2BwyaXHU1B7V1%2FDMNBqPVvgEHI5qrbAZFWxdtKgTxG%2BPuoYzs8DRgER1fQT7jD0wZPEBjqkAZ2HuF86JrTE%2BBX1gMSGa4pYXYoaKJW%2Fe6Wil%2FB4RR8OuUxiWmt%2FSDvguWfUqTi%2F%2B%2FTxx%2BDeP8SACtB%2BVmojcatefAJw8W5I3v7bX2xXyrAWFHMVURuYsl4o%2BGuhqwABfUW2WMRUioxL37wtUHncRnuQIhxWWftngMpCDRB4mXknBkxMXOu%2Bturvy04nPW1pwLDoxgOl2En6kTy2PtWvXMS3neVz&X-Amz-Signature=88f573951305d150c3d2416f1b6e16a590fbbfaf5aa7635812619bb57a07b641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
