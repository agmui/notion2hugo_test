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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSCCFPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhD4fKVjKq7Rp1agjAYEDWUpcqmZlnadAAW5rBMuk9AIhALA2MMjGccnihiHSaW8eORrTySYzeWB3TGa2%2F5EYCqmAKv8DCF8QABoMNjM3NDIzMTgzODA1Igyep21DMlrubwS7BaIq3AOyskWrrPwwvxhLY%2BZmexsAZWii4BfMSJbNFNF9zRMT%2FOs98vybuksWbjEKKQX%2FusGhc55vyydVIeLn%2FGRHZLVp4lnU9IdZ4d95gs3c%2BmdYNyOOIRvUbQ9Xawm2Dv6Lattf2hfWzZoEqxpLk%2F8jRB9fSDg%2BMKIBh9VmcVHZIpsKljjoby0jzmI%2FD6qKEXqNpvKfN1wKCisD69JSO7DSnUQGdm%2FFMmu7iF7N5s%2FrEC8HL4%2B4Mk2FVag8mA5kU9e4JvVgFjkTEg1PLJNzUbTfnVTHjRHjN3u75U9asgntYUQ4B6yogkBDIiU44ETNWsLyFGASzxLDeny2iOdAi4znTyGpEGWhIq1CQjH0kcGTEx4NowheacPLugJ1ntg7vibeOlxUfVA4ITP7Wu9n6%2BKpDmGB18sDzLN3EVdpQhDsVKs4PNiciZQbjCsfapfzsupN3pd4vCh%2Ffc%2Bo%2F81WfOgACmEc1rbT7oLbhMnBH5buIK3mCyG2uYbLnx4gTrBJYzmoWOvlhrYRgLSBUUeXa5iDp%2FyrNFAOzewtfrafhvz3jmaBE6wNy3tkC85%2FveN19kDFclPYF4CldAP2RuzTbs9afbhHgH6EBWop%2F76ir0sHtNJzw5Y5lCVJrcoxiWf%2B4zDsts%2B%2FBjqkAexuI0vi4lSpwgEKwXiQOIV%2FIxh84MF9z66o9I6XRKa8rXpzlf%2BW3%2BWEV2nyux5tut34y3H8FNa0hC5fD3VIlsK0TUwvO1vwIy4PR9aeiEoADSLZa9pw7hpez3mdgw7GQ5rOLVzgBmD%2F9VrqwXg6klIz0H0ND6bBwmWz7gIazwMEVIxtWN4XPBKEwlcZWFmZPVR8K59uvRhXB6xkouXUXmBKsYFG&X-Amz-Signature=c52e162ab24e97bdf99fad057b64d18cfb96f908625b74c584dcd60e46a5ca57&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSCCFPJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhD4fKVjKq7Rp1agjAYEDWUpcqmZlnadAAW5rBMuk9AIhALA2MMjGccnihiHSaW8eORrTySYzeWB3TGa2%2F5EYCqmAKv8DCF8QABoMNjM3NDIzMTgzODA1Igyep21DMlrubwS7BaIq3AOyskWrrPwwvxhLY%2BZmexsAZWii4BfMSJbNFNF9zRMT%2FOs98vybuksWbjEKKQX%2FusGhc55vyydVIeLn%2FGRHZLVp4lnU9IdZ4d95gs3c%2BmdYNyOOIRvUbQ9Xawm2Dv6Lattf2hfWzZoEqxpLk%2F8jRB9fSDg%2BMKIBh9VmcVHZIpsKljjoby0jzmI%2FD6qKEXqNpvKfN1wKCisD69JSO7DSnUQGdm%2FFMmu7iF7N5s%2FrEC8HL4%2B4Mk2FVag8mA5kU9e4JvVgFjkTEg1PLJNzUbTfnVTHjRHjN3u75U9asgntYUQ4B6yogkBDIiU44ETNWsLyFGASzxLDeny2iOdAi4znTyGpEGWhIq1CQjH0kcGTEx4NowheacPLugJ1ntg7vibeOlxUfVA4ITP7Wu9n6%2BKpDmGB18sDzLN3EVdpQhDsVKs4PNiciZQbjCsfapfzsupN3pd4vCh%2Ffc%2Bo%2F81WfOgACmEc1rbT7oLbhMnBH5buIK3mCyG2uYbLnx4gTrBJYzmoWOvlhrYRgLSBUUeXa5iDp%2FyrNFAOzewtfrafhvz3jmaBE6wNy3tkC85%2FveN19kDFclPYF4CldAP2RuzTbs9afbhHgH6EBWop%2F76ir0sHtNJzw5Y5lCVJrcoxiWf%2B4zDsts%2B%2FBjqkAexuI0vi4lSpwgEKwXiQOIV%2FIxh84MF9z66o9I6XRKa8rXpzlf%2BW3%2BWEV2nyux5tut34y3H8FNa0hC5fD3VIlsK0TUwvO1vwIy4PR9aeiEoADSLZa9pw7hpez3mdgw7GQ5rOLVzgBmD%2F9VrqwXg6klIz0H0ND6bBwmWz7gIazwMEVIxtWN4XPBKEwlcZWFmZPVR8K59uvRhXB6xkouXUXmBKsYFG&X-Amz-Signature=ea19762a893094ae79be8fe942b78fd06f5177a3373115a6c6490173a144039b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
