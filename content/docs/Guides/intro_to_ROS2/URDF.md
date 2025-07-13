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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOIAMGLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7uz1gH0PvdTIuVSP9V0suYX%2BEJUg%2B45fPiFV6ux8wdAiEAlpdq29oiAalg2dd1f8aiDVpRYXvz1oTi%2BmaJ2IJZbpMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPtlu9Htu5L2TOF8dSrcAw1LNRC4KmKvTG%2Fw%2BUSlVEG9TAmkiWTvTL2udfgiqocOAC39Yocf6pxpH8DRGOeV0Rn9sDNMf%2F7b7yVsK7yP%2FCLZmt5yHInlDqbN6TBMwJloSWlM%2BAvfe5LOYiydFGpTsMR4e3ayFIR34oPZeZ1XK9zwdSss1uPV9AA1Qm%2Fg4lu6DMQkyLY8FSrjNV7twreOS71DFniCGjDLX6LbmyQwkWi5JuXHDmn0WJNlnsA4T0Ohrq6Xj9yX44wxvGFr9eXo%2B%2F6f00QWkblLEuV3f6wIs%2Bkp31LRTYP6OWhFyVhrAaRedoFQIrBpRxW87fp1y4PaHQ4R14tlHpY%2B%2F2CsMddlOQXqf1YFRdxKPFqOdDKKumBrn1f%2FrD4JYfE6y5qnLNPwR2NdUdKOhEoR66Fx2oJ0%2Fi0HH9ceF8Qwatp8K%2F86U%2F7C%2BGzxN3kbIkb4mV%2BEqN2gPRVNnQxz8KA0MSaplhzcHwBx3jGF%2BwKzl3o3sF2T6NuAl8%2FELk22WGxJOvLL1ryIJGmeCw3XcZ%2FrpfwmBh2tdI50zi4vHak9fw8r90YyNk6rkj5D%2FY7yqp84PrLdltVXhk4v2ikedV9x22X0GMrIE7%2FjVft5gwSS7wL8x13iQNyocG3oFJr8YdTscXInMMOVz8MGOqUBjSVSsUKQ8G5oIdSr3aV3EROS9Q0Un9sscVRKvylTICCXsq%2BVhlg7eAo5AEzXhGpXCmlcpHx%2BblcbjcPnCCcQK0ohNJH5LF5Zkgs8JUNVlFCIhUfAj4dtS1K4HO1aEh8dI7o9w1Q%2FENeSwmGODuuF9VtNhN3VIamqaFaCqW%2FnxcNwHMGj%2BM5l89vsYcku28SGsxGEoSAlbWHtkZfdTpLJ7RHN3Eug&X-Amz-Signature=7d3b6583323d06ea0cf522de1a3109876456616d3e90315c190b4f69a5353618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOIAMGLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7uz1gH0PvdTIuVSP9V0suYX%2BEJUg%2B45fPiFV6ux8wdAiEAlpdq29oiAalg2dd1f8aiDVpRYXvz1oTi%2BmaJ2IJZbpMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPtlu9Htu5L2TOF8dSrcAw1LNRC4KmKvTG%2Fw%2BUSlVEG9TAmkiWTvTL2udfgiqocOAC39Yocf6pxpH8DRGOeV0Rn9sDNMf%2F7b7yVsK7yP%2FCLZmt5yHInlDqbN6TBMwJloSWlM%2BAvfe5LOYiydFGpTsMR4e3ayFIR34oPZeZ1XK9zwdSss1uPV9AA1Qm%2Fg4lu6DMQkyLY8FSrjNV7twreOS71DFniCGjDLX6LbmyQwkWi5JuXHDmn0WJNlnsA4T0Ohrq6Xj9yX44wxvGFr9eXo%2B%2F6f00QWkblLEuV3f6wIs%2Bkp31LRTYP6OWhFyVhrAaRedoFQIrBpRxW87fp1y4PaHQ4R14tlHpY%2B%2F2CsMddlOQXqf1YFRdxKPFqOdDKKumBrn1f%2FrD4JYfE6y5qnLNPwR2NdUdKOhEoR66Fx2oJ0%2Fi0HH9ceF8Qwatp8K%2F86U%2F7C%2BGzxN3kbIkb4mV%2BEqN2gPRVNnQxz8KA0MSaplhzcHwBx3jGF%2BwKzl3o3sF2T6NuAl8%2FELk22WGxJOvLL1ryIJGmeCw3XcZ%2FrpfwmBh2tdI50zi4vHak9fw8r90YyNk6rkj5D%2FY7yqp84PrLdltVXhk4v2ikedV9x22X0GMrIE7%2FjVft5gwSS7wL8x13iQNyocG3oFJr8YdTscXInMMOVz8MGOqUBjSVSsUKQ8G5oIdSr3aV3EROS9Q0Un9sscVRKvylTICCXsq%2BVhlg7eAo5AEzXhGpXCmlcpHx%2BblcbjcPnCCcQK0ohNJH5LF5Zkgs8JUNVlFCIhUfAj4dtS1K4HO1aEh8dI7o9w1Q%2FENeSwmGODuuF9VtNhN3VIamqaFaCqW%2FnxcNwHMGj%2BM5l89vsYcku28SGsxGEoSAlbWHtkZfdTpLJ7RHN3Eug&X-Amz-Signature=813f4761fcfbef8357e8de0733aaa3bd89b70d6579ca417dda95f387306f2fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
