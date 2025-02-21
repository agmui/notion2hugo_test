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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAH6D7X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgvt4r59%2BfASSGX0I4cFf4zE1VYhBLsFlpPRBD3SMGyQIhAP5eIAc%2Bsv%2FDUH%2FZlixPTTKMZswNDdfHqNy%2FrGrLOSepKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJraT00D0vTG%2FB1Pcq3AMtK3WBaBUdAAg7zTaOj2iMthudg6Ud1NwdueWR9wcHCxK1Thvc4RWgLvczs4L%2BRw2rQGPxDMWshX6gijy7BBVOFaK9r4gWAzshsoF49c8knNe8hhXhgRR%2Fh64J8a61GE%2Ba2NYKof%2BXhYFtC50hCaRVLVnKvWhZPQ87jHkP8A4CEC3BZeewM0ukUbt49ya36IkfSwW7Rnw1HRxxl6EzagCubrtPpEKoJEbmpKuH8ZADqqhg65PEeEuPJN9ag5HDNyk9Dl8NWbfmOu7pl4%2FlwQOApBepaTXDAGWKTQUbV%2FZh03RVu6LJlgK5t2LTHs7kXBSeMQpdDuOtMEHzhI8AJeCEM1aThEQDmerNhTp6jDcEXl%2ByuRfycJhZtvPsmxlvNnMdW5b9sN%2F3X4E4ZWnGRGmfHwMXyy%2BsaV1jbf8xS5%2B1w%2FHteMxxdkCgxVNRhm9mERxSEhP254qHUFOH4ElezWK3NKTmD1m3WILLa13BqFlIjxrl1l%2FiHyb0DzGbl6U4kx1MITyl%2Fo3%2Fe6aCzt80qY0wo7DVN%2FjFtVdwL8%2B%2FOV4fUEGXOYthn3Zp4B%2BVwI7aq1ouQk4bPhz55NDzHPwc0VrltfBhdN%2FfNSYPTARVG%2FrbaO4Wh%2BSi27ZmdaLV1zC8yOG9BjqkATJhL6%2FZ1ZLKxjqGHQADsHToA8na0lN%2BItLXcHXl%2BdqkMhrgqHMFIFnn%2BleVBJkL0tbY%2FnzAvOTpa0qO9ltLx9c8s1JfCncLpEOx%2FhkVmB2AsyDAATesa25Z2YkhHIBVdZCCbLQIp5uYfy3Ft2A%2FotoMrMnwIF%2FuHBt5Rt41DY5tJZfJ8PCb0nNVtf55xV4onxqMdkg2y3xe0sd4beBo5GC8C1m2&X-Amz-Signature=12b05379a205a8f7aebda3924a6283e6de26b2646b551e3b3b1c67494648ad4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAH6D7X%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgvt4r59%2BfASSGX0I4cFf4zE1VYhBLsFlpPRBD3SMGyQIhAP5eIAc%2Bsv%2FDUH%2FZlixPTTKMZswNDdfHqNy%2FrGrLOSepKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJraT00D0vTG%2FB1Pcq3AMtK3WBaBUdAAg7zTaOj2iMthudg6Ud1NwdueWR9wcHCxK1Thvc4RWgLvczs4L%2BRw2rQGPxDMWshX6gijy7BBVOFaK9r4gWAzshsoF49c8knNe8hhXhgRR%2Fh64J8a61GE%2Ba2NYKof%2BXhYFtC50hCaRVLVnKvWhZPQ87jHkP8A4CEC3BZeewM0ukUbt49ya36IkfSwW7Rnw1HRxxl6EzagCubrtPpEKoJEbmpKuH8ZADqqhg65PEeEuPJN9ag5HDNyk9Dl8NWbfmOu7pl4%2FlwQOApBepaTXDAGWKTQUbV%2FZh03RVu6LJlgK5t2LTHs7kXBSeMQpdDuOtMEHzhI8AJeCEM1aThEQDmerNhTp6jDcEXl%2ByuRfycJhZtvPsmxlvNnMdW5b9sN%2F3X4E4ZWnGRGmfHwMXyy%2BsaV1jbf8xS5%2B1w%2FHteMxxdkCgxVNRhm9mERxSEhP254qHUFOH4ElezWK3NKTmD1m3WILLa13BqFlIjxrl1l%2FiHyb0DzGbl6U4kx1MITyl%2Fo3%2Fe6aCzt80qY0wo7DVN%2FjFtVdwL8%2B%2FOV4fUEGXOYthn3Zp4B%2BVwI7aq1ouQk4bPhz55NDzHPwc0VrltfBhdN%2FfNSYPTARVG%2FrbaO4Wh%2BSi27ZmdaLV1zC8yOG9BjqkATJhL6%2FZ1ZLKxjqGHQADsHToA8na0lN%2BItLXcHXl%2BdqkMhrgqHMFIFnn%2BleVBJkL0tbY%2FnzAvOTpa0qO9ltLx9c8s1JfCncLpEOx%2FhkVmB2AsyDAATesa25Z2YkhHIBVdZCCbLQIp5uYfy3Ft2A%2FotoMrMnwIF%2FuHBt5Rt41DY5tJZfJ8PCb0nNVtf55xV4onxqMdkg2y3xe0sd4beBo5GC8C1m2&X-Amz-Signature=b62dd0a52ee830f85ecba6008ed2ef898fef33b5686bae46dd57c78e824d7ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
