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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATXMZDA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEG35QXCtTkYVf2M7q0U%2FxYcCfRm1Ys%2FPWCygdhgKonhAiA4mdBOq9q%2BjLOnxQnWfkDS81VeKSojXrx%2BGjYJ9Nz5Byr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM9Cg4nGeBTyfo1tBJKtwD3u%2FCAj%2FHes%2FVelk%2B0fko6G8zOFQJ%2FHzh6273jljUSjwlWYfdwu%2BTtpNqgZT%2B2p26Aw8DqvJsJNoPm95qH0audGutxr51r4LOk%2Fqd8yuwcnMP5U4t6RtqwfejovLLHVAFH5yMxAahROrdoAwk1M7s3FOmLmvJde3EZmRWGd4%2FnNG9c%2BzqRV3LalA%2FOjYMwm1FKnRQfNuRziGMwn6k6MHUXh74eduAsXVlnuffV%2BoZEid%2F%2Bs6Bp0Vwyll1pT5D9eZv6wqwQV8MCqjHFJV695k%2Bb%2FfOnHO9xIAOId0Yqvx2xqvxRIv31dE0Kh%2F1HN06c1vNIwsWqnItjnY9XBClMouafY7oC%2BXyWOiurhuziHPuC72YghsFClYvPUQPbF9w6M9crkn%2BUGEwS2vaAK616WoGz3rhsoGCezuNqdfkQFDvDkIPJwaKonVP3BB2GJ7r0tCCl2jNO1u2kluoxLjZ8rqEHfH5IMSNWtoNek%2BCnHm34%2B40YnoHNkb6S5mmfcnoDQHUxdhQ5HURBNYwh4w1ziT4MBgRHFD0%2FSiMn0Tv4xnGRTbFh%2BF2K%2Bpcub4DPfrDiKDEgyhhwmSwxeh5kRe1Poa0iQo6qMQ62kA1x0UF37dwD%2BoQID13IhU5uziEo3kwzJ7PwQY6pgFknng%2B43yUejlIJG%2FEJXgbyCkUYx7U7GfEakdObjnVmztLyAYgFtzqT5gsEDRWxU2hEcWbgOoiZiQV9jXjXcElDXEdUoAG%2FpuyeR%2BbLXJPZiOGo7XCbBlsYYl8d0akLfaxVWCyMRUYyVW4cFeOleUXSSvvT%2F0Rt0AcA39XODHdsiY6yGLvEWZrmvy65tkQ9E2h2WsHHraAVqz4EmVhl%2BKRvcZHrDHW&X-Amz-Signature=cc1efd51f49905aca98b57645a0158f935ba7de5d91778ff74f626fca8e8896c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UATXMZDA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEG35QXCtTkYVf2M7q0U%2FxYcCfRm1Ys%2FPWCygdhgKonhAiA4mdBOq9q%2BjLOnxQnWfkDS81VeKSojXrx%2BGjYJ9Nz5Byr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM9Cg4nGeBTyfo1tBJKtwD3u%2FCAj%2FHes%2FVelk%2B0fko6G8zOFQJ%2FHzh6273jljUSjwlWYfdwu%2BTtpNqgZT%2B2p26Aw8DqvJsJNoPm95qH0audGutxr51r4LOk%2Fqd8yuwcnMP5U4t6RtqwfejovLLHVAFH5yMxAahROrdoAwk1M7s3FOmLmvJde3EZmRWGd4%2FnNG9c%2BzqRV3LalA%2FOjYMwm1FKnRQfNuRziGMwn6k6MHUXh74eduAsXVlnuffV%2BoZEid%2F%2Bs6Bp0Vwyll1pT5D9eZv6wqwQV8MCqjHFJV695k%2Bb%2FfOnHO9xIAOId0Yqvx2xqvxRIv31dE0Kh%2F1HN06c1vNIwsWqnItjnY9XBClMouafY7oC%2BXyWOiurhuziHPuC72YghsFClYvPUQPbF9w6M9crkn%2BUGEwS2vaAK616WoGz3rhsoGCezuNqdfkQFDvDkIPJwaKonVP3BB2GJ7r0tCCl2jNO1u2kluoxLjZ8rqEHfH5IMSNWtoNek%2BCnHm34%2B40YnoHNkb6S5mmfcnoDQHUxdhQ5HURBNYwh4w1ziT4MBgRHFD0%2FSiMn0Tv4xnGRTbFh%2BF2K%2Bpcub4DPfrDiKDEgyhhwmSwxeh5kRe1Poa0iQo6qMQ62kA1x0UF37dwD%2BoQID13IhU5uziEo3kwzJ7PwQY6pgFknng%2B43yUejlIJG%2FEJXgbyCkUYx7U7GfEakdObjnVmztLyAYgFtzqT5gsEDRWxU2hEcWbgOoiZiQV9jXjXcElDXEdUoAG%2FpuyeR%2BbLXJPZiOGo7XCbBlsYYl8d0akLfaxVWCyMRUYyVW4cFeOleUXSSvvT%2F0Rt0AcA39XODHdsiY6yGLvEWZrmvy65tkQ9E2h2WsHHraAVqz4EmVhl%2BKRvcZHrDHW&X-Amz-Signature=3f336699f46b71556028e460971038f7f42df81854683ad62d17b1826172172d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
