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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB37VM2P%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTZdVMex6VOLNoLXONDUGEsGAXK9yfdMsy%2FBBlt3UHAIgPwdMVovRxpU0Tci2vEFkm2uEzswT90j%2F%2FyhKYmgyaiIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSynNlqfrZpLPZoyyrcAz5Y00XeOVmZGYtH4ZcB9Mk0sM6pgp4sqm5HySXYZDX5lFFk%2FrsPNstrDlhVEuz6f8zY5Zj3R2uxnX00cgnKpjBCrwKink45%2FlnB3jWz7tLazo9INXLeTqKW1s2SOPybLX%2BrkbzqZAYhk%2BQydq0Wly3ZZETPJldySetrkj3ALysvzvReXLn2ws%2BbSYW1J1%2FoCYatpCyiIzz%2FEbCFtwQWUPAo7jk9RMGdVHW%2F3uroxBFt5P1LfwwaBLwy1kJF9Fkjp0ogSW9%2FC%2Fn7sQJSHF5Ucj4Wr2I1QQp9X%2FjE46tpV4Fbruvg8AEnyeCGVdxm9jrVKsGnq0TmnfyD%2BPYf%2Frvw%2FzAoNpE1bmu3iC0Xlf1iEh8lUc85jvXc7%2FO1cRcg617Zo%2FWSNHI1a%2Fseqg8gfZn%2BIsY7HaR0HRw4BkWQ5NGqzJy%2BN3PU%2FI1gYwJgsHCeCnDEvj%2FdYUF52daarnCgyUmmrbsy9iDJ8YSy8sQAIukywJxBUasTtb0PJ1CiWB0tedHPWQBUlfcTE%2Bcmf4YqC7SQTQXJd4ciQ6d7F%2B%2B%2FGIG2ljMl6Y67zVc20Kf41AAsuhU9A5tKU5BJyd7qRaAwQKy96Bli%2FQAqh6Wfc%2BbSK8Fjaue7wymOkOSusu8oz89%2BMLSEisMGOqUBwWf2fix13bACc9qzoB65jmWhHxEoBGulhUeTgMxDjoIk%2BhYIVdrO2vdMF3xICQ6FZvWnTKL5GsFiBbT7KUQaePWKzPGWBobHPjMCodSpPEdhfHmFL9OeagjdLTYG2B2BZcfWhEfmXXKc30CyKHVtu8MIAlZmW1VxSxRTYuRENsgYz8XFye5Nx4BP0dprkFL7cE95ncA1DbJjUvU10DtPYbFGArQL&X-Amz-Signature=76db6a41c89f1fecdc1b3fd543f9871f3740615385b71d85ef04fc6e8fe1536c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB37VM2P%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTTZdVMex6VOLNoLXONDUGEsGAXK9yfdMsy%2FBBlt3UHAIgPwdMVovRxpU0Tci2vEFkm2uEzswT90j%2F%2FyhKYmgyaiIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSynNlqfrZpLPZoyyrcAz5Y00XeOVmZGYtH4ZcB9Mk0sM6pgp4sqm5HySXYZDX5lFFk%2FrsPNstrDlhVEuz6f8zY5Zj3R2uxnX00cgnKpjBCrwKink45%2FlnB3jWz7tLazo9INXLeTqKW1s2SOPybLX%2BrkbzqZAYhk%2BQydq0Wly3ZZETPJldySetrkj3ALysvzvReXLn2ws%2BbSYW1J1%2FoCYatpCyiIzz%2FEbCFtwQWUPAo7jk9RMGdVHW%2F3uroxBFt5P1LfwwaBLwy1kJF9Fkjp0ogSW9%2FC%2Fn7sQJSHF5Ucj4Wr2I1QQp9X%2FjE46tpV4Fbruvg8AEnyeCGVdxm9jrVKsGnq0TmnfyD%2BPYf%2Frvw%2FzAoNpE1bmu3iC0Xlf1iEh8lUc85jvXc7%2FO1cRcg617Zo%2FWSNHI1a%2Fseqg8gfZn%2BIsY7HaR0HRw4BkWQ5NGqzJy%2BN3PU%2FI1gYwJgsHCeCnDEvj%2FdYUF52daarnCgyUmmrbsy9iDJ8YSy8sQAIukywJxBUasTtb0PJ1CiWB0tedHPWQBUlfcTE%2Bcmf4YqC7SQTQXJd4ciQ6d7F%2B%2B%2FGIG2ljMl6Y67zVc20Kf41AAsuhU9A5tKU5BJyd7qRaAwQKy96Bli%2FQAqh6Wfc%2BbSK8Fjaue7wymOkOSusu8oz89%2BMLSEisMGOqUBwWf2fix13bACc9qzoB65jmWhHxEoBGulhUeTgMxDjoIk%2BhYIVdrO2vdMF3xICQ6FZvWnTKL5GsFiBbT7KUQaePWKzPGWBobHPjMCodSpPEdhfHmFL9OeagjdLTYG2B2BZcfWhEfmXXKc30CyKHVtu8MIAlZmW1VxSxRTYuRENsgYz8XFye5Nx4BP0dprkFL7cE95ncA1DbJjUvU10DtPYbFGArQL&X-Amz-Signature=d8f5608594337c2760f235aa943d6d779fe614de9c57aaa2f39c167818f43b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
