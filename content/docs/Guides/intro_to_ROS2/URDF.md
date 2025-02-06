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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACWWCXM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEUXiqmIpX8%2BKvxvDIFSHA5zSSTwxUKkruPkyZ00cBfaAiEA5xFBLM8sZqfP5HrmBcdIj8O9Se5F13ng7K7teYxgzNEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIekrMpfWoA99PTtCSrcA7Y3Auvvq7tU5pSS6LG4ovssn5NymiyfQSnOXAy%2BAKr0B8A3XXpvVVhMCNAKQHoRwdQXE1XcMCOTXFYp74l5nYn4vWMnK33KGEWcBDgO7nAyaKMXrgZsmHtQaDNEnSnyT9jfnDLT23MohP6fSsJPUv22dxjDvp%2B6PieBffbcOaSolIycM4Hq6i%2FLiu94ggE34l%2Bo6n7dxqMlfDQ%2F2NWXsH5tc3CnZrtHwNeQsRw%2FvsCGRpYxABEouhLDM4TY%2FdI%2F0rzexMPaV%2FRlsHoZd9Fyi7%2FSXRcpwmVTCzxaOVWY0Ct2zUt6ZiKX2q3jUb7%2BpV5%2BTb%2FfTDbPYy%2BAixfGe%2FiVQ8ewCj%2Fg44Pa0xYugJJ%2FAlI1oLh8hHfSxvxsVbJ0OX%2FJ62WIwRW3BLGgk%2B22BnP3KxTFlbj6rIsr9fawjQCxZ%2BiOtVIaoMZaplUxZ3zx0RaX3GbgoulU5dsBVrPUCkIsi0NqknrpyL1ACwJhleEQxbeZQ%2B4Zdd4Gd75xDdQpHBMrb%2B7WnKFWvkMbL93BQD8cWZAWtZCcHLEbeg%2BeTUCr3W5%2B9DJkZIyMO9wgL5gnuaZ18GOgZ4ibH3aYwNGddTktdAE2a4R7E2NrYz%2BxbmjfBRupqlH3S33luFC86wbAMPq1kb0GOqUBj40B11BynB5gOC9up9nyLeR6OZNFwCmBmxOD1zaAzRWa94jd%2Fy83DZsqIxrDJ4MtWnmfsx2ID2P34QDhj4RJOihd3tXkaXe%2BGRVRLP%2B%2FkHW158bHvbC1IiJ%2Fq615ncVTaZUnBAqQ8P29dXb8DN6%2BARBiEud%2B%2BFVetrWqdSRHlzDvoJzZVPWmvmpPt5iMw3EiGOsZ1NTtMAxnilLWectG3uyisUFm&X-Amz-Signature=9e2cb7c03d515a67242862680f25aa6489f2c02f5536030421ac9f5200c5832f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACWWCXM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEUXiqmIpX8%2BKvxvDIFSHA5zSSTwxUKkruPkyZ00cBfaAiEA5xFBLM8sZqfP5HrmBcdIj8O9Se5F13ng7K7teYxgzNEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDIekrMpfWoA99PTtCSrcA7Y3Auvvq7tU5pSS6LG4ovssn5NymiyfQSnOXAy%2BAKr0B8A3XXpvVVhMCNAKQHoRwdQXE1XcMCOTXFYp74l5nYn4vWMnK33KGEWcBDgO7nAyaKMXrgZsmHtQaDNEnSnyT9jfnDLT23MohP6fSsJPUv22dxjDvp%2B6PieBffbcOaSolIycM4Hq6i%2FLiu94ggE34l%2Bo6n7dxqMlfDQ%2F2NWXsH5tc3CnZrtHwNeQsRw%2FvsCGRpYxABEouhLDM4TY%2FdI%2F0rzexMPaV%2FRlsHoZd9Fyi7%2FSXRcpwmVTCzxaOVWY0Ct2zUt6ZiKX2q3jUb7%2BpV5%2BTb%2FfTDbPYy%2BAixfGe%2FiVQ8ewCj%2Fg44Pa0xYugJJ%2FAlI1oLh8hHfSxvxsVbJ0OX%2FJ62WIwRW3BLGgk%2B22BnP3KxTFlbj6rIsr9fawjQCxZ%2BiOtVIaoMZaplUxZ3zx0RaX3GbgoulU5dsBVrPUCkIsi0NqknrpyL1ACwJhleEQxbeZQ%2B4Zdd4Gd75xDdQpHBMrb%2B7WnKFWvkMbL93BQD8cWZAWtZCcHLEbeg%2BeTUCr3W5%2B9DJkZIyMO9wgL5gnuaZ18GOgZ4ibH3aYwNGddTktdAE2a4R7E2NrYz%2BxbmjfBRupqlH3S33luFC86wbAMPq1kb0GOqUBj40B11BynB5gOC9up9nyLeR6OZNFwCmBmxOD1zaAzRWa94jd%2Fy83DZsqIxrDJ4MtWnmfsx2ID2P34QDhj4RJOihd3tXkaXe%2BGRVRLP%2B%2FkHW158bHvbC1IiJ%2Fq615ncVTaZUnBAqQ8P29dXb8DN6%2BARBiEud%2B%2BFVetrWqdSRHlzDvoJzZVPWmvmpPt5iMw3EiGOsZ1NTtMAxnilLWectG3uyisUFm&X-Amz-Signature=92c0c058f9cc303de422164c82897298cc516b1cf73c7a75eee71bb107a181fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
