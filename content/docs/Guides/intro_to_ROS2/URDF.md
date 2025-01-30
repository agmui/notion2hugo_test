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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZC4A7XK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIcTqS85A5ZqL%2FPsKeX8vZs5GV%2FoN3cUFyHRbVu9ZobwIgbk1rp1MsZbTQ7kTJWDxoT8CUFD%2BpVbe3W3PBVZQd6LYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0GuDPymHbDZ4IfIyrcAyAL%2FpFCtHIaHlH8nXvzN4nYpL%2FUe%2BUPvtYOoWJ6cgVoJ4tvIUEVoJgVLmlLjtk4%2F8tRLRICfJCb88QDSbc5Fgz6sYp%2BTGOfeQsX9GjdH%2B5GgDyVDG88tNjR5aXECG5VFXAzQJidB1tGuGe2KHh1NJw3Ln3lSFwNNTLfX5MXr49ivZ3Pgt%2FoZvmPrBEfw2M9Stztb7HDo3uquHeC6QE52boi3m4y4RAQdCmEQk3iMXSFss5zDEkL%2BCTefDkCA8vI9pXhxGF7ZjwF6LSS11c9O4sgfd57l4jQnMqhNT4h7dVsf%2BoWr6n%2Fe2TeLOO1dVZ1DuRdmvScT6Wa2ZWJJSb3x6YcSVzS%2BUyOKtUOgdHUvx72MVsmlXtISh2QeTHsizQxUnX2EDKHzvqIImXyw7c%2FfThYvpCg3lmX4aKs5OyoKsWr%2B8PpWfvWnIwMp2%2B%2F%2BqvE8tAJ1bC0F%2FqBOjQc39yCD9w9POefnhU9rm5vo7QEzosx13eydrDueW053z%2FC%2FEdikEV%2BAJany1hcTrVb9UI%2BxIlkfPQ1tuuuEbSD%2BL%2BTmZoYz70Q3ZxHMEJmJEAO4OH9BimCu6BQqMtuY11Ydo3JymIY9KtOvxH8LNNuHVReakp%2FYQ1D7ydJEUgrXYkYMPmz67wGOqUB5pXr1NTrutBr8YKZ36MREP%2FarWv2C3nV0tImRn7kRcKZQqMxNHhEwmHJvCFZ6mIXWRkmrWOSl4eApXQ5yOXxT8T%2FzXT%2FnTs%2B2luzDUZef9Ws%2BxuMRdG8e%2Bl82YGgdOQsUIOdzwoEu%2F1i0vsYTd24VKFi8cBjIwswREr5d4mw%2FrqoIrf2IDgUdLklIpNYAZDHTy81uVEX%2FaLl2WfIQDiP80jRu2SA&X-Amz-Signature=95f81416a3808959c7d6e5ec35f6a2eb29eae813a68ae8a25ce60137fcc3f92c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZC4A7XK%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIcTqS85A5ZqL%2FPsKeX8vZs5GV%2FoN3cUFyHRbVu9ZobwIgbk1rp1MsZbTQ7kTJWDxoT8CUFD%2BpVbe3W3PBVZQd6LYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0GuDPymHbDZ4IfIyrcAyAL%2FpFCtHIaHlH8nXvzN4nYpL%2FUe%2BUPvtYOoWJ6cgVoJ4tvIUEVoJgVLmlLjtk4%2F8tRLRICfJCb88QDSbc5Fgz6sYp%2BTGOfeQsX9GjdH%2B5GgDyVDG88tNjR5aXECG5VFXAzQJidB1tGuGe2KHh1NJw3Ln3lSFwNNTLfX5MXr49ivZ3Pgt%2FoZvmPrBEfw2M9Stztb7HDo3uquHeC6QE52boi3m4y4RAQdCmEQk3iMXSFss5zDEkL%2BCTefDkCA8vI9pXhxGF7ZjwF6LSS11c9O4sgfd57l4jQnMqhNT4h7dVsf%2BoWr6n%2Fe2TeLOO1dVZ1DuRdmvScT6Wa2ZWJJSb3x6YcSVzS%2BUyOKtUOgdHUvx72MVsmlXtISh2QeTHsizQxUnX2EDKHzvqIImXyw7c%2FfThYvpCg3lmX4aKs5OyoKsWr%2B8PpWfvWnIwMp2%2B%2F%2BqvE8tAJ1bC0F%2FqBOjQc39yCD9w9POefnhU9rm5vo7QEzosx13eydrDueW053z%2FC%2FEdikEV%2BAJany1hcTrVb9UI%2BxIlkfPQ1tuuuEbSD%2BL%2BTmZoYz70Q3ZxHMEJmJEAO4OH9BimCu6BQqMtuY11Ydo3JymIY9KtOvxH8LNNuHVReakp%2FYQ1D7ydJEUgrXYkYMPmz67wGOqUB5pXr1NTrutBr8YKZ36MREP%2FarWv2C3nV0tImRn7kRcKZQqMxNHhEwmHJvCFZ6mIXWRkmrWOSl4eApXQ5yOXxT8T%2FzXT%2FnTs%2B2luzDUZef9Ws%2BxuMRdG8e%2Bl82YGgdOQsUIOdzwoEu%2F1i0vsYTd24VKFi8cBjIwswREr5d4mw%2FrqoIrf2IDgUdLklIpNYAZDHTy81uVEX%2FaLl2WfIQDiP80jRu2SA&X-Amz-Signature=c5513e8a592ea1db3d3bd321aed23930a419b89e5dc932920eaadd6426929bff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
