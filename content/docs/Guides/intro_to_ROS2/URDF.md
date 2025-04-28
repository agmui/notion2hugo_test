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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPMJ7NW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQMVER5PsdKGf1%2Fuayscl8MGiO3vaYXtL5jQQDaJEuwIgDLzIM7s6amLOi6NgRFwhoHI0kZfDeWwHFZssGn64YMcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA1AaHVfpuSdbKR8YyrcAws0K20AMWz9o9HnEQ%2BFdWI%2BltzQDg1nrz0sNlDK%2BFwH5VKR7qWmHLA2yTMYgynvWPwNI7zr4H1pRI9S0mU1ZSsWDXxu%2BYxPOwCcRiWnz0rbKMCCd3Aj%2FMn1FG1dWJ6SgK649rTs9%2BoI%2FHfWzcDJnlP8U1sCBy0vmPBSM2dLuAMVPzr%2FwSbnLVx6U7%2FrugLQnbnwqWsLAIYur%2FMNEviMkHsWp183%2F%2B9%2FLpkDOak%2FM4tNBSImFVNZD3xb8prvSBE3jHiCqbaIgaUfsMco3YvcveW5%2BLDZk0Hbe99IF40YIgjARyve32k%2BvxPktbu4vbmv%2FZ%2BCKojA%2F%2FkOqNz0mlOpt%2FNu31J11hXVrgp2meMiDCYln%2Bm7FWg2ZXk5abiDJDZ6V3ee9U7ljm5WWHCyg6G5N5sRZb%2BkozKDYEg5Y3znH5wLRJzrYLAV0XmS49f7HA5EHtRAqVOGIWRcLAaI%2FLKDVt8IeUd5R3kIWiGDdxRHsn8s30txSGCX%2FTd6CBdJ58gWjsK9z7%2F5TP9eHQ65uJw9dcWXMDRYgtqY9MZVh0BYbD8Ri5U041z54qDa4wlLwtx7J8M82luc%2BX9JJWQOCH3o6DjzTm9kQowVbc9HYtOSawrLwW%2BRiExh7yDpG%2BGSMILtv8AGOqUBNuxhdEsszL4qVaHVd2CF6y9BaI2AD0yKqEfB7AGZdWbpXGfJlQ5BTEyqbTZMEzNCimdk95ZNHnr1Uh7FLoqRrOyFg0aU2NXxkjrx9oA2CaZpuu5Qwkfxaubb9s3KdTmbmunILbEn1PTCIZSOA0%2B%2F1kyahINqq8f%2BH%2FVt1zT2PIm9umCFrWK5OhHfB7dxTQmV5N4OZRfFMdfzpBZWvrpQyCDQOiCN&X-Amz-Signature=552e77aa3adce90b68ac68c2bbec84c0ef6748483177d7629ed8332f57fca600&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPMJ7NW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQMVER5PsdKGf1%2Fuayscl8MGiO3vaYXtL5jQQDaJEuwIgDLzIM7s6amLOi6NgRFwhoHI0kZfDeWwHFZssGn64YMcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA1AaHVfpuSdbKR8YyrcAws0K20AMWz9o9HnEQ%2BFdWI%2BltzQDg1nrz0sNlDK%2BFwH5VKR7qWmHLA2yTMYgynvWPwNI7zr4H1pRI9S0mU1ZSsWDXxu%2BYxPOwCcRiWnz0rbKMCCd3Aj%2FMn1FG1dWJ6SgK649rTs9%2BoI%2FHfWzcDJnlP8U1sCBy0vmPBSM2dLuAMVPzr%2FwSbnLVx6U7%2FrugLQnbnwqWsLAIYur%2FMNEviMkHsWp183%2F%2B9%2FLpkDOak%2FM4tNBSImFVNZD3xb8prvSBE3jHiCqbaIgaUfsMco3YvcveW5%2BLDZk0Hbe99IF40YIgjARyve32k%2BvxPktbu4vbmv%2FZ%2BCKojA%2F%2FkOqNz0mlOpt%2FNu31J11hXVrgp2meMiDCYln%2Bm7FWg2ZXk5abiDJDZ6V3ee9U7ljm5WWHCyg6G5N5sRZb%2BkozKDYEg5Y3znH5wLRJzrYLAV0XmS49f7HA5EHtRAqVOGIWRcLAaI%2FLKDVt8IeUd5R3kIWiGDdxRHsn8s30txSGCX%2FTd6CBdJ58gWjsK9z7%2F5TP9eHQ65uJw9dcWXMDRYgtqY9MZVh0BYbD8Ri5U041z54qDa4wlLwtx7J8M82luc%2BX9JJWQOCH3o6DjzTm9kQowVbc9HYtOSawrLwW%2BRiExh7yDpG%2BGSMILtv8AGOqUBNuxhdEsszL4qVaHVd2CF6y9BaI2AD0yKqEfB7AGZdWbpXGfJlQ5BTEyqbTZMEzNCimdk95ZNHnr1Uh7FLoqRrOyFg0aU2NXxkjrx9oA2CaZpuu5Qwkfxaubb9s3KdTmbmunILbEn1PTCIZSOA0%2B%2F1kyahINqq8f%2BH%2FVt1zT2PIm9umCFrWK5OhHfB7dxTQmV5N4OZRfFMdfzpBZWvrpQyCDQOiCN&X-Amz-Signature=ff4d72b70dc460e83e7ee80da02d59c88d3b84ce1a12dc65748614483ef2a2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
