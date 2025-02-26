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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUK5OCRG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCFdiTt9RZfMK08l4BMfw%2BRmso3gGHuSimxdexyYqJWXwIgEy0EGKjknXDqwB9gPpwv9RZ8BUsGWaCwWcOiHciP24kq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMrUSACVeHobSqNdwSrcA7ik2E0%2FXflNfGMeXt0GHwEeQ46dz%2BmSbaIY7XBgnAi2L2K4%2FHBdTLCp0a5rokEjHNYJzvQ1yl%2Bo%2BabOVy%2B%2BWiwgC9uslys0feGwb2LiTJdDh%2FY7up%2FT4NoXo8f%2FtkM9u8%2B22tMVip13je%2BgLTy89syGrVt4Sifq7a6EKwXJed794bGKSD3kYkG2HPUs4MKG0Ve%2BFiG%2ButVTBPaPhDY6nS6nBd5QT0BZLt7%2FHyyEolruci7glX1Ksl2x6fhK8M253CvG%2B7%2BmLK4dfDnTl%2B%2Bur20NAwdiDqDOeF9xu7Vx1QVU6gB7lMGfr%2FObzpRML1EE0dTmTvX5p4OobasZoLg61%2BPSKu2eY4GsYy0jUY6spXwbo6kzJDF2Vr%2BJ86JDWHsMqhk58JuQni8ADzVKp%2Fn71%2F2jBdyP2%2BdszeYNUrXPNLAxNLWz77BypmBtRQOrpJpZrTAXylCqj0oEag495xlFak1S6puuluzHAG2OJTAVmwg0zYtArnmzBuXM9hSYq5KNVLR1LcmYFLkPVK2niJHdxXJvBlhSRWm8MSG%2F4BqeXSvwode3tQZU%2BxRZxrqGvBY%2BngHpeeTSBtmcnTMRhT9Du7Xpgmp9N4656rgBIPufdtk8aZsointLX5p1aVU0MLa7%2Fr0GOqUBT2r4P4chOgAGDEmRxHIqU7LhKEjqLScXaRA%2FBKiERNkD4LcV7EmYIeHFedYhmvfvS3pGB6v318O%2F8iHQbiucrmixy%2B7uP%2BC5Oo2VOcJ4cJeYX%2B2pxOMMKtrlJJ5BBXxnUito9cby6H9kWAafFisfYaQV8U6n%2BIDlc7ExvmYggz7yLpNCQjsm1LINk5DbFV64Y4DOLENwClH3GQzMiv9v2XS6lflj&X-Amz-Signature=6ed2ab81034635826bbf21d8d7e4135b1eb9a7deabdd0768eab2e6c45ae004a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUK5OCRG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCFdiTt9RZfMK08l4BMfw%2BRmso3gGHuSimxdexyYqJWXwIgEy0EGKjknXDqwB9gPpwv9RZ8BUsGWaCwWcOiHciP24kq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMrUSACVeHobSqNdwSrcA7ik2E0%2FXflNfGMeXt0GHwEeQ46dz%2BmSbaIY7XBgnAi2L2K4%2FHBdTLCp0a5rokEjHNYJzvQ1yl%2Bo%2BabOVy%2B%2BWiwgC9uslys0feGwb2LiTJdDh%2FY7up%2FT4NoXo8f%2FtkM9u8%2B22tMVip13je%2BgLTy89syGrVt4Sifq7a6EKwXJed794bGKSD3kYkG2HPUs4MKG0Ve%2BFiG%2ButVTBPaPhDY6nS6nBd5QT0BZLt7%2FHyyEolruci7glX1Ksl2x6fhK8M253CvG%2B7%2BmLK4dfDnTl%2B%2Bur20NAwdiDqDOeF9xu7Vx1QVU6gB7lMGfr%2FObzpRML1EE0dTmTvX5p4OobasZoLg61%2BPSKu2eY4GsYy0jUY6spXwbo6kzJDF2Vr%2BJ86JDWHsMqhk58JuQni8ADzVKp%2Fn71%2F2jBdyP2%2BdszeYNUrXPNLAxNLWz77BypmBtRQOrpJpZrTAXylCqj0oEag495xlFak1S6puuluzHAG2OJTAVmwg0zYtArnmzBuXM9hSYq5KNVLR1LcmYFLkPVK2niJHdxXJvBlhSRWm8MSG%2F4BqeXSvwode3tQZU%2BxRZxrqGvBY%2BngHpeeTSBtmcnTMRhT9Du7Xpgmp9N4656rgBIPufdtk8aZsointLX5p1aVU0MLa7%2Fr0GOqUBT2r4P4chOgAGDEmRxHIqU7LhKEjqLScXaRA%2FBKiERNkD4LcV7EmYIeHFedYhmvfvS3pGB6v318O%2F8iHQbiucrmixy%2B7uP%2BC5Oo2VOcJ4cJeYX%2B2pxOMMKtrlJJ5BBXxnUito9cby6H9kWAafFisfYaQV8U6n%2BIDlc7ExvmYggz7yLpNCQjsm1LINk5DbFV64Y4DOLENwClH3GQzMiv9v2XS6lflj&X-Amz-Signature=ba648d794ed7da80542771bb73622c260fe7e8060999949708c71e3fae7bc9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
