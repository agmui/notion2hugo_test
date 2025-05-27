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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSL3CME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0fMDmjxJ8%2F9%2BnQoLiwUY6l5ZfceLQs%2Bd39RttGkS1HwIhAMz%2FUDotY12pMsCLzUOVztdcv8E9KWlP2ji4EW3bIkKtKv8DCFcQABoMNjM3NDIzMTgzODA1IgxUSScM1GBQar2ZUB4q3AM4JOptljhzspYQtzw8GQS73wsq1fXHeno6P0cNgQxqrP14iyJKooPQBO1G22ybLNIIMxxAMJRBaP%2FQHECeuZXc0Sj3Hnzo0fE%2FEzpq05cgEm2SzAoOTIwsYOs4H%2BVhWKYJlTwQCWA0clnfOIDEEWRDLuvM9ac3H16KDO6VQnrsyd7rOaD892IVzDA%2FmMj2e4p6o5hxg7OnG2QUrDMyaCPbRD7UjzJTmW0l%2Bfe1ceTXZF4IpHM3wY9KXgFZibjGJNqdw9MY0rjl4bWQdcH6OvH9UXtqoahF6T68SqmdDzRF9JIfUDw5%2BN45v%2BW%2BeF%2Fx8WV%2F0xyuh4rKZuatqwwl5L7liUQnWfP86HTxRaSlwgfN0jROW2Mox2QYQXLzp9qrGJ7IIxatwahC%2BjnJ8zw75fJSZaq3BRTuSMRPJwFyHuT6o6XejUspGM%2FYxSxN37mQgM7FOatAwY34ggWWaKeXTUtuPwjQM3TTMMa01l8LYGfleVb%2BaHh69zhWEpid4CIOKsQJAcbXAfVhSGFIQQIdM0%2BlKN1Lbx1mJpTxtOeDuXLVYIO6fazB1UA1VKpasR4trReubT4WHH6JQK3Hb5ow%2BHRLbIdRnkQsSyneMOm3xCw6whOQHrJgXvryJSYzPTDytNXBBjqkAab5ZT7Y1s5iXlaW77J18Lk1MUHLdKqGl0vzmkVd98ql4gyeZKWJYcyKZx%2FGDbnghbua%2FPuU7FsWH8F9E0Ha8WKb%2FKVTmVgt%2Bb46VaOoNV%2BwrpUNICTS%2F%2B0du5ADa4Lp6vkzhd7sWQkRYktkH0WUIVcrZIAp707%2BHcelptE9CQP%2B%2FG3320NkAO9nusS0wZHYX8kDM7MYH4TubfzakovsGZPt1%2FVS&X-Amz-Signature=68c1d626fd35341ca7ffc9fbd5595709a6957dedfe243ce0d58b3a317bb11b65&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSL3CME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0fMDmjxJ8%2F9%2BnQoLiwUY6l5ZfceLQs%2Bd39RttGkS1HwIhAMz%2FUDotY12pMsCLzUOVztdcv8E9KWlP2ji4EW3bIkKtKv8DCFcQABoMNjM3NDIzMTgzODA1IgxUSScM1GBQar2ZUB4q3AM4JOptljhzspYQtzw8GQS73wsq1fXHeno6P0cNgQxqrP14iyJKooPQBO1G22ybLNIIMxxAMJRBaP%2FQHECeuZXc0Sj3Hnzo0fE%2FEzpq05cgEm2SzAoOTIwsYOs4H%2BVhWKYJlTwQCWA0clnfOIDEEWRDLuvM9ac3H16KDO6VQnrsyd7rOaD892IVzDA%2FmMj2e4p6o5hxg7OnG2QUrDMyaCPbRD7UjzJTmW0l%2Bfe1ceTXZF4IpHM3wY9KXgFZibjGJNqdw9MY0rjl4bWQdcH6OvH9UXtqoahF6T68SqmdDzRF9JIfUDw5%2BN45v%2BW%2BeF%2Fx8WV%2F0xyuh4rKZuatqwwl5L7liUQnWfP86HTxRaSlwgfN0jROW2Mox2QYQXLzp9qrGJ7IIxatwahC%2BjnJ8zw75fJSZaq3BRTuSMRPJwFyHuT6o6XejUspGM%2FYxSxN37mQgM7FOatAwY34ggWWaKeXTUtuPwjQM3TTMMa01l8LYGfleVb%2BaHh69zhWEpid4CIOKsQJAcbXAfVhSGFIQQIdM0%2BlKN1Lbx1mJpTxtOeDuXLVYIO6fazB1UA1VKpasR4trReubT4WHH6JQK3Hb5ow%2BHRLbIdRnkQsSyneMOm3xCw6whOQHrJgXvryJSYzPTDytNXBBjqkAab5ZT7Y1s5iXlaW77J18Lk1MUHLdKqGl0vzmkVd98ql4gyeZKWJYcyKZx%2FGDbnghbua%2FPuU7FsWH8F9E0Ha8WKb%2FKVTmVgt%2Bb46VaOoNV%2BwrpUNICTS%2F%2B0du5ADa4Lp6vkzhd7sWQkRYktkH0WUIVcrZIAp707%2BHcelptE9CQP%2B%2FG3320NkAO9nusS0wZHYX8kDM7MYH4TubfzakovsGZPt1%2FVS&X-Amz-Signature=628b959570ca2cae63a69b193da6314187218964bcd03870b0b0376d27292e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
