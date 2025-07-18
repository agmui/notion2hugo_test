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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TYPUHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHcSFX3w%2FATO9J5aN2%2B%2Bt0c3h7Tfc27TUo5v7koCJSqfAiA4jI0fqo%2BH7wG4cyQmNHjMgsarTLOmKwFg2dAQem64oyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGE9JaoMXQogKAt5KtwDNwJ0bRo5JYPSEptbi04Tocd3HRZsI7tJFhHnqTDr6W7aOJuAEaUTorETxhzn6KKAVQm11cUintu3%2BlXU6mDk16nY0xrftPgUHyAWVUsuftD%2B1LetSvAAqFpDC%2F5vgLpzdI3%2F7IAj564AfVG9dp9lTdjTc2GGzvfRgVSJVC5UEIjuCQSdqdKWvvPz%2FWDhkWNm4%2FOyu10R4uT0TecYn%2F1jl3oI4lYqGuTD9SR1ASctic67lpYNQ8VnqUSLDsdL1JCTxU%2BXJ26e9KEiVxGLsOE91faJoAI1Hld7jOx2ibemrgvm%2F3BR4mSCpC4TUBc6rMYbR64W00OI2ySCtdFARL94baGqci62haymY7KdVDYDK0dm4Q%2Fg00WTrQ61owxbXMeyFQGWEsh9yBh7xwkhs0iYRhnTTtBUYbHHsydxVqq97Lb9LvSs2toeyugtQvorh%2BXaFI6r%2Bo%2FwLF%2FjNua3sAZO%2B%2FA3Ug1bWXV%2BqPTIJ0Gaf6J0gYztZKIjC48MWVbhSiOdwyXhJSz9KW1NeCeqO6YruuU2zQo9SCFnX2A%2B5FPii1NRiO8xlGSOtilWQcPhmskQ8D2ju6z%2FSdn34pmRYtcWUjyztCKDKz2ih4RZ%2BP70jTTWpxmddCTvr%2By33cUw14jnwwY6pgFpxvFLgyVdCBwbq3plnj%2F2XCIN1B7oiuVxueTXTdTNdq7LVK4bFfJskmryY5l1nIBgweK%2BXji3%2FyoJBzwoevOEjcuZ58BOyfPM3YZTq%2F9JQkSkADvH821BMELFRjX3d511lYDGqC%2FBPD%2BU76Fkl%2BWAcwKrcbss5dFrPLUpcFKdFQ4iVcKBDcR0X2eJ%2Fq%2BqRXzpVxI3zqwXYLsu%2B94ufvOmc4c4oO4p&X-Amz-Signature=bf8a5ddf376fdefb71763152af7ad512fa81e608f19d3939619b4ec28f0a91a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4TYPUHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHcSFX3w%2FATO9J5aN2%2B%2Bt0c3h7Tfc27TUo5v7koCJSqfAiA4jI0fqo%2BH7wG4cyQmNHjMgsarTLOmKwFg2dAQem64oyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGE9JaoMXQogKAt5KtwDNwJ0bRo5JYPSEptbi04Tocd3HRZsI7tJFhHnqTDr6W7aOJuAEaUTorETxhzn6KKAVQm11cUintu3%2BlXU6mDk16nY0xrftPgUHyAWVUsuftD%2B1LetSvAAqFpDC%2F5vgLpzdI3%2F7IAj564AfVG9dp9lTdjTc2GGzvfRgVSJVC5UEIjuCQSdqdKWvvPz%2FWDhkWNm4%2FOyu10R4uT0TecYn%2F1jl3oI4lYqGuTD9SR1ASctic67lpYNQ8VnqUSLDsdL1JCTxU%2BXJ26e9KEiVxGLsOE91faJoAI1Hld7jOx2ibemrgvm%2F3BR4mSCpC4TUBc6rMYbR64W00OI2ySCtdFARL94baGqci62haymY7KdVDYDK0dm4Q%2Fg00WTrQ61owxbXMeyFQGWEsh9yBh7xwkhs0iYRhnTTtBUYbHHsydxVqq97Lb9LvSs2toeyugtQvorh%2BXaFI6r%2Bo%2FwLF%2FjNua3sAZO%2B%2FA3Ug1bWXV%2BqPTIJ0Gaf6J0gYztZKIjC48MWVbhSiOdwyXhJSz9KW1NeCeqO6YruuU2zQo9SCFnX2A%2B5FPii1NRiO8xlGSOtilWQcPhmskQ8D2ju6z%2FSdn34pmRYtcWUjyztCKDKz2ih4RZ%2BP70jTTWpxmddCTvr%2By33cUw14jnwwY6pgFpxvFLgyVdCBwbq3plnj%2F2XCIN1B7oiuVxueTXTdTNdq7LVK4bFfJskmryY5l1nIBgweK%2BXji3%2FyoJBzwoevOEjcuZ58BOyfPM3YZTq%2F9JQkSkADvH821BMELFRjX3d511lYDGqC%2FBPD%2BU76Fkl%2BWAcwKrcbss5dFrPLUpcFKdFQ4iVcKBDcR0X2eJ%2Fq%2BqRXzpVxI3zqwXYLsu%2B94ufvOmc4c4oO4p&X-Amz-Signature=734063508b8e7d6a473c542833f9e7f2b7642b68210065f634461572c9b654d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
