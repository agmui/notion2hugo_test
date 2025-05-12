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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUS5OKL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjMyAdcz8Jxi455uobrOQExLkykAJeH4esL9pNgVbOTQIgDv7CbPRb6fAVqan8uHmsbkpv9RMOw86GZ7T5if%2BnMH8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsTjp48oW2t8F8ltSrcA9KFPwQYV2BHYUpKPp%2B10FFI%2BpVSIKP%2BMoJuS5UEmeXrBDi7ugyfXM6ecZc4gOLpH8s%2BhEO1EFtG4btxh%2FwFBsdyRrAnTx31XoaRABGkvKZXfWPKrRqYWaUiInbowlE1JjGi5P%2FOOXdeUCdN0Aeg3hmwjvIDgNRpYLL6GlQQZZksodg26kKonP%2BSx0yHg0vfGVmxg8D4OR1cLjc2VnnjBcm0sqkgkaC13OFDncER0E3oXa%2B%2BwgYJnutdKZfkbxEmhjsfuaCrZhfwrHh2yeb7xf4RUVy6YLY7yDSwgv%2FbPKF5w5BktLMKnV7gP059vAFEivA%2FwJtauQd14BhbNtJSCN3XaivZsA%2FhqwQTwhu7OHIP6fISWmj%2BnECHLzDNC%2FwA8qiv3W8Y1zTMGOVpXi%2F9ole55RaKyM3yXCrlvDd1b7pFZeM7by62yV3p3K9Yf7hQvvhlt4Ab1j5zx0UAEKOCqxdge%2Fgq5H%2FvZ7nhkBmEaKlVSxWbznfc04pecfftpOeVzO7zgTCtIVy04IfjueicAbfAlLFgijtHKVWEaUm3OUdBMI%2BIWH3U37tsJx1VAWgw43%2B5qJWiMAoq4qkpjuVaHMY6ZUSJ1bdGSyTHmTlmfEKsP5Z7r3GqPko1xZ%2BvMIuGhcEGOqUBzZGxr62o9JUbimot%2FpWQW0dR9HaskrYavG%2BRAkmRkHI3gFVjDW7jV2fXodLhWsHPCNxdWg7s6%2FvbdBSplqXXGjaByN8ZBjEkmuz7a5h9TebPvnccD6apsEVOVS4dXmWARWAcT2Xd%2BoaCehMzrzfV%2F3xzLE8QyY5ooUIUIwwv3erElichjr4Tw5%2FwL6VpCRBpBSYJ2cGGfwNjJ9owY5sM6M%2Fo%2B6gw&X-Amz-Signature=d3928ab6bd440877e9e56a96296586f7ae2af7bf9f65ebaf9b716372b87ae36f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUS5OKL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDjMyAdcz8Jxi455uobrOQExLkykAJeH4esL9pNgVbOTQIgDv7CbPRb6fAVqan8uHmsbkpv9RMOw86GZ7T5if%2BnMH8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJsTjp48oW2t8F8ltSrcA9KFPwQYV2BHYUpKPp%2B10FFI%2BpVSIKP%2BMoJuS5UEmeXrBDi7ugyfXM6ecZc4gOLpH8s%2BhEO1EFtG4btxh%2FwFBsdyRrAnTx31XoaRABGkvKZXfWPKrRqYWaUiInbowlE1JjGi5P%2FOOXdeUCdN0Aeg3hmwjvIDgNRpYLL6GlQQZZksodg26kKonP%2BSx0yHg0vfGVmxg8D4OR1cLjc2VnnjBcm0sqkgkaC13OFDncER0E3oXa%2B%2BwgYJnutdKZfkbxEmhjsfuaCrZhfwrHh2yeb7xf4RUVy6YLY7yDSwgv%2FbPKF5w5BktLMKnV7gP059vAFEivA%2FwJtauQd14BhbNtJSCN3XaivZsA%2FhqwQTwhu7OHIP6fISWmj%2BnECHLzDNC%2FwA8qiv3W8Y1zTMGOVpXi%2F9ole55RaKyM3yXCrlvDd1b7pFZeM7by62yV3p3K9Yf7hQvvhlt4Ab1j5zx0UAEKOCqxdge%2Fgq5H%2FvZ7nhkBmEaKlVSxWbznfc04pecfftpOeVzO7zgTCtIVy04IfjueicAbfAlLFgijtHKVWEaUm3OUdBMI%2BIWH3U37tsJx1VAWgw43%2B5qJWiMAoq4qkpjuVaHMY6ZUSJ1bdGSyTHmTlmfEKsP5Z7r3GqPko1xZ%2BvMIuGhcEGOqUBzZGxr62o9JUbimot%2FpWQW0dR9HaskrYavG%2BRAkmRkHI3gFVjDW7jV2fXodLhWsHPCNxdWg7s6%2FvbdBSplqXXGjaByN8ZBjEkmuz7a5h9TebPvnccD6apsEVOVS4dXmWARWAcT2Xd%2BoaCehMzrzfV%2F3xzLE8QyY5ooUIUIwwv3erElichjr4Tw5%2FwL6VpCRBpBSYJ2cGGfwNjJ9owY5sM6M%2Fo%2B6gw&X-Amz-Signature=3f315d8880e1602d293d843b7707e4d93e531644609b172ff82d2ad8e44d2f1d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
