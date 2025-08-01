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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673APO3N7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuy5%2F3soB0fxHU5Z4o%2FnWMgNfZlLpTYfkUlO8OSdGlFwIgLrwMh7bRbzBlYDJPGqC%2Fm0Xc6dD72ZNub%2FH57ZGYBnQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPp0j%2FDowMzfXiONircAzrAu4%2B0kaUv7nM3Vcvekns4HDLsbRnFYX4L%2B%2FvNnYGi5CdvWma2gfcbCCYiAsX9MyUT7JoSLxjfYtkoYo0ndggorUXoHrOun71knLYYiCqLN2fMwRCrpa8FzZRiYZ4lIowsJedNg%2FTuurutA841g4ks8KgEeA17kLmDSlKPJ%2BeKVWC1CdstTOEI4ERcHd1OJ2nr8yfMzz4rlLKgmZpW5iyPXNZ7D7NvPGtxoWB2UpFrUGFA%2BHwCUuOEBY9E%2BYAve2u0oDcOkyify3HDv9u77%2Fc6sVRPLFEJzLGuQd6UX1KGsIqodeeQL28HadfCinJsRSY0i7KBv7sLeyGG2LqFqK0yHSlEvKenoJzIw27uUKk8fhYkbbXoVOf57BIkJ%2BHspAxn%2FWCE130fvDEhsN%2FZOgOH4x3ASLO203KOiwiCdcmd3S3RbUhngGtcmFD%2FrppvsP%2FM6OEyCQ8rn18Wz5vwVDGlBT8U4%2Bqa2HohSyzszFuHHORY9P98xcO8OlPELk5bZ1hXLMCaJufp8vDs3ITUPxQ%2FNOw5g3EUKzie2HG6obASLccYW5uouzjI%2F%2B28P%2FMYKll4HXiQFGWzjtc1U2sJyME85Mcc6r2p6Ey8xltJAkYtTzWEnkwRv2qGOXYgMKfVs8QGOqUBelFaSG7B656vZWmLBIBteF6HWA221ZUZVWeETHXbl2NUpr20dbbNJqsTZsIhXqbhlFVx9h%2BQynbk5ZRqa1KoE3V2cGW6T19Z%2F5Z7r0muTgnu3EPjFF9T18FnF8loaMw0IHMFThPkgK6w%2FK9EBuL%2FKVtrqfthXYCzPtcX8opBDksjIp5Ngc7cIrt25fDCsJ4mOcQj43dJy6Z9OzKglClxAF06auf3&X-Amz-Signature=3355c50cd944a1277d416ca55a9573021b1c0891bd26e232d274137036f372b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673APO3N7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuy5%2F3soB0fxHU5Z4o%2FnWMgNfZlLpTYfkUlO8OSdGlFwIgLrwMh7bRbzBlYDJPGqC%2Fm0Xc6dD72ZNub%2FH57ZGYBnQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPp0j%2FDowMzfXiONircAzrAu4%2B0kaUv7nM3Vcvekns4HDLsbRnFYX4L%2B%2FvNnYGi5CdvWma2gfcbCCYiAsX9MyUT7JoSLxjfYtkoYo0ndggorUXoHrOun71knLYYiCqLN2fMwRCrpa8FzZRiYZ4lIowsJedNg%2FTuurutA841g4ks8KgEeA17kLmDSlKPJ%2BeKVWC1CdstTOEI4ERcHd1OJ2nr8yfMzz4rlLKgmZpW5iyPXNZ7D7NvPGtxoWB2UpFrUGFA%2BHwCUuOEBY9E%2BYAve2u0oDcOkyify3HDv9u77%2Fc6sVRPLFEJzLGuQd6UX1KGsIqodeeQL28HadfCinJsRSY0i7KBv7sLeyGG2LqFqK0yHSlEvKenoJzIw27uUKk8fhYkbbXoVOf57BIkJ%2BHspAxn%2FWCE130fvDEhsN%2FZOgOH4x3ASLO203KOiwiCdcmd3S3RbUhngGtcmFD%2FrppvsP%2FM6OEyCQ8rn18Wz5vwVDGlBT8U4%2Bqa2HohSyzszFuHHORY9P98xcO8OlPELk5bZ1hXLMCaJufp8vDs3ITUPxQ%2FNOw5g3EUKzie2HG6obASLccYW5uouzjI%2F%2B28P%2FMYKll4HXiQFGWzjtc1U2sJyME85Mcc6r2p6Ey8xltJAkYtTzWEnkwRv2qGOXYgMKfVs8QGOqUBelFaSG7B656vZWmLBIBteF6HWA221ZUZVWeETHXbl2NUpr20dbbNJqsTZsIhXqbhlFVx9h%2BQynbk5ZRqa1KoE3V2cGW6T19Z%2F5Z7r0muTgnu3EPjFF9T18FnF8loaMw0IHMFThPkgK6w%2FK9EBuL%2FKVtrqfthXYCzPtcX8opBDksjIp5Ngc7cIrt25fDCsJ4mOcQj43dJy6Z9OzKglClxAF06auf3&X-Amz-Signature=1f0f870311556adc2eac76590c080b04044cc25390dc1086f08b902fea80680c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
