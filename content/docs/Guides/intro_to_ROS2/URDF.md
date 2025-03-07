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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGOGSHC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSUxYP5Tv4osyUWlWeKF%2BFZlvBq2OdD8QLV05JfUxQgIgdW%2F5aD7Duy2KmSwZG10BqJ4pEsYGJ8hfBtiL2zsdV4Mq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHN9HVxFVocPyo4p7SrcAyZ4C3yhAZ%2F%2BjT1r0c0nppCEck%2BU%2Bh3KhhKGlkkdpLYpz81g%2FafciK9xTbO84wRhX0yXoXs9MHs1gTYSpJd7LcSOAnzq%2FSd2xdff7iSWcW9hb19NJIH%2FNRHW3NDnC2wfzxW7oPxmSSDpGMUpT8Rc0DWA50%2FT7hBqofnOO0jroIVQpocIMAfzTSod%2F7tw7hkBybeuYtXAdvoLZvUUya8MjI75YhAbNZkFwVl5MFGZnJZfwejIUQhADfkjJwwAxSY1kbQoiuYPqY9DGLGkwv2F81%2F%2Bm%2BxnuQOZK1LNQpFdqESgW2xqyejiuKKdfbNxbgpfipHHt2S95M9X1ToJZW4FeWKdnLsuIV7vJI56Y%2F7m%2FHJsCOPpe2gvYHHg1p5BFK7GM0wZZgZ2iqRTEW9becSQYlHQhVdOWV0iu1NtGaLrdCDiUVnpc1ub4eHYsDJVhf2mhdxHINHLrpE%2BXEvC8WauRaaPvBDWwM2w%2Bl3QyC%2BTpeuxRTmOAHa4tolpiSGZxXXCGtC0orF3qy4NSq19v0ELgvL6TZnDiIiOFPAfd3z9dXGvbouIiLBK53aixcqO7uWF2b4cSctQfvsR3bbMdQB%2FhP98iqRu2xpWYPIfqvCf5GqGMclhwfOzsCVZOJk2MLiHq74GOqUB3einw6EC4xbwXjb%2FoAugMgIcXh2OVrMzstnlmMwTjrq2ROe7IghCPoovnwMxyY36HyEG2hVNUX0D3s1vjaUwi5T8EdcK5u82nBZMnDOocpO76UP8ZM2jTTKxs13wV%2FVHZZDEGqL%2FnCINU2Iw2mMc5vMM2eswEIQnnBPotaOeAn%2FnB4CFNwyGjTIi2gEmnGS9H4BQZn%2FFbb6i8J2Mx79wUdrcW4ZI&X-Amz-Signature=010f9b2cf5e9a589239f7f3d64b37a4ea461c804251f06be6eac9c51fbee72d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IGOGSHC%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjSUxYP5Tv4osyUWlWeKF%2BFZlvBq2OdD8QLV05JfUxQgIgdW%2F5aD7Duy2KmSwZG10BqJ4pEsYGJ8hfBtiL2zsdV4Mq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDHN9HVxFVocPyo4p7SrcAyZ4C3yhAZ%2F%2BjT1r0c0nppCEck%2BU%2Bh3KhhKGlkkdpLYpz81g%2FafciK9xTbO84wRhX0yXoXs9MHs1gTYSpJd7LcSOAnzq%2FSd2xdff7iSWcW9hb19NJIH%2FNRHW3NDnC2wfzxW7oPxmSSDpGMUpT8Rc0DWA50%2FT7hBqofnOO0jroIVQpocIMAfzTSod%2F7tw7hkBybeuYtXAdvoLZvUUya8MjI75YhAbNZkFwVl5MFGZnJZfwejIUQhADfkjJwwAxSY1kbQoiuYPqY9DGLGkwv2F81%2F%2Bm%2BxnuQOZK1LNQpFdqESgW2xqyejiuKKdfbNxbgpfipHHt2S95M9X1ToJZW4FeWKdnLsuIV7vJI56Y%2F7m%2FHJsCOPpe2gvYHHg1p5BFK7GM0wZZgZ2iqRTEW9becSQYlHQhVdOWV0iu1NtGaLrdCDiUVnpc1ub4eHYsDJVhf2mhdxHINHLrpE%2BXEvC8WauRaaPvBDWwM2w%2Bl3QyC%2BTpeuxRTmOAHa4tolpiSGZxXXCGtC0orF3qy4NSq19v0ELgvL6TZnDiIiOFPAfd3z9dXGvbouIiLBK53aixcqO7uWF2b4cSctQfvsR3bbMdQB%2FhP98iqRu2xpWYPIfqvCf5GqGMclhwfOzsCVZOJk2MLiHq74GOqUB3einw6EC4xbwXjb%2FoAugMgIcXh2OVrMzstnlmMwTjrq2ROe7IghCPoovnwMxyY36HyEG2hVNUX0D3s1vjaUwi5T8EdcK5u82nBZMnDOocpO76UP8ZM2jTTKxs13wV%2FVHZZDEGqL%2FnCINU2Iw2mMc5vMM2eswEIQnnBPotaOeAn%2FnB4CFNwyGjTIi2gEmnGS9H4BQZn%2FFbb6i8J2Mx79wUdrcW4ZI&X-Amz-Signature=ffc144b32afcecf9027773e74edcc5dbf4e9c95fc80a2a37c5b1b8abcb330fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
