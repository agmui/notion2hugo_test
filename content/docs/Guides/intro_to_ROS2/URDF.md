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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INIAY6L%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF99brwGAn4FkQWmUv%2BYSwwJw31gIZTTmGeLXYahfbTAAiEAjTeO3l7i22ADNKmkIFZMVdFzmfxUkMIAp1MtwYKKQbIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmX1MSWH8PHNKAeNyrcA3HCCRAB6rWRn9TLFuOFcTLxfFjNhIAjtw7oCcDZ9klgn31GYE5KGW2si92fGi%2BbRJJ1Pf%2FaGwrfwC7mkvC%2FvG24V2UvWdnPKLfv6smhx1mV%2FKQxhm9Hb0vfljhrQB%2BVcF1hPC275d4X%2B0guEEoL8E99P2y3Ylo%2BBKOWF7zmI2Xcas7GXTZI7Snpo2V2cKQLbUxL5F2W9wRFnwetU7ubhavqo9ltFBwIS%2BFkNsXJvphRtbmbyaYCaX6ELJ19a4Enq81ZdRTqJrG4HdhPwqum3o1DTDizq3hiRhU3q%2BaZUqEGrJGcnXe4aFIdOZpsn4T9Xylsmb72f%2FGD7yZ2K4R7iKax33HD3Fdp3ROMp7bIInDJEVEYENIxE76Fk3MD%2BPn%2FLWMoTTWJBVXjYJOW5h6EUHXhLOYpzbp5YR32UggkDHiq2ornoC31Dp8Sz2vPmFmQQ2SEwxBm%2B4kVcackRX%2F2YoedeEG%2FLZBSsboCD6pmQLpuSLHSIJzYg%2Bh1B7pDIWWUd%2FPz5InferZIrhBuzCPKuT7n7qyveA4ep%2B6rDT84In8fkn7G6Juy9nZUqQjwLr%2F4%2FLu2x8O%2B3hekDXfP8%2FKVqqvSqGJJrhsEuIbVJE4IlZAtse8Z%2Bgc89w4O9tTaMPiPiMMGOqUBYzoRKVb4%2B4QzLCBi9nF51%2FQce90q%2F%2FbMX2LWtqPEtYZLjn1TDUvAmpzEKXe5Dt6VJoFCb3IxSZmkjO8kS%2BuKZVPVK2yk3SnTt2n9%2BxEwWKONAO7U6jmM64m22yk9pSKKMDBYjWNnFhk%2BSWRYG9rfz6g%2BWdcbNRl3XjJFzd8KRMWBgD432%2F7Pc40FkEUEu7kHiO7aAXrjYaqkrureKhhNRkvFT0Oh&X-Amz-Signature=c9c4ef60b3c1845f450dfb84ac781fe0b37f1d81d8dcf7d2f0400d5ab3c90410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INIAY6L%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF99brwGAn4FkQWmUv%2BYSwwJw31gIZTTmGeLXYahfbTAAiEAjTeO3l7i22ADNKmkIFZMVdFzmfxUkMIAp1MtwYKKQbIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmX1MSWH8PHNKAeNyrcA3HCCRAB6rWRn9TLFuOFcTLxfFjNhIAjtw7oCcDZ9klgn31GYE5KGW2si92fGi%2BbRJJ1Pf%2FaGwrfwC7mkvC%2FvG24V2UvWdnPKLfv6smhx1mV%2FKQxhm9Hb0vfljhrQB%2BVcF1hPC275d4X%2B0guEEoL8E99P2y3Ylo%2BBKOWF7zmI2Xcas7GXTZI7Snpo2V2cKQLbUxL5F2W9wRFnwetU7ubhavqo9ltFBwIS%2BFkNsXJvphRtbmbyaYCaX6ELJ19a4Enq81ZdRTqJrG4HdhPwqum3o1DTDizq3hiRhU3q%2BaZUqEGrJGcnXe4aFIdOZpsn4T9Xylsmb72f%2FGD7yZ2K4R7iKax33HD3Fdp3ROMp7bIInDJEVEYENIxE76Fk3MD%2BPn%2FLWMoTTWJBVXjYJOW5h6EUHXhLOYpzbp5YR32UggkDHiq2ornoC31Dp8Sz2vPmFmQQ2SEwxBm%2B4kVcackRX%2F2YoedeEG%2FLZBSsboCD6pmQLpuSLHSIJzYg%2Bh1B7pDIWWUd%2FPz5InferZIrhBuzCPKuT7n7qyveA4ep%2B6rDT84In8fkn7G6Juy9nZUqQjwLr%2F4%2FLu2x8O%2B3hekDXfP8%2FKVqqvSqGJJrhsEuIbVJE4IlZAtse8Z%2Bgc89w4O9tTaMPiPiMMGOqUBYzoRKVb4%2B4QzLCBi9nF51%2FQce90q%2F%2FbMX2LWtqPEtYZLjn1TDUvAmpzEKXe5Dt6VJoFCb3IxSZmkjO8kS%2BuKZVPVK2yk3SnTt2n9%2BxEwWKONAO7U6jmM64m22yk9pSKKMDBYjWNnFhk%2BSWRYG9rfz6g%2BWdcbNRl3XjJFzd8KRMWBgD432%2F7Pc40FkEUEu7kHiO7aAXrjYaqkrureKhhNRkvFT0Oh&X-Amz-Signature=e8d791dd2912757acef9dace38785e2070a69752aa3f607b0f60028d25c6964f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
