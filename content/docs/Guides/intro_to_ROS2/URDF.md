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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLQECG2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NdX4l3uGPd%2BYwakIbAAYsNcEub0CyM59z0vPeYlqAAIgBl2EP7umXLH7TNBNjpoEzyt%2BQeZcDcXSAOgAGt9U%2FC8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5SmEDqNV7I6KoJcCrcA35z8zAb%2FDR7%2BXFsLH6s64AOTC24dv8kLkkM8kh3pTMNhMLUNzPV0sXh29lISITNFwYmxPTLh41I05l95GbuOGq1b5eF6Ps3FySTXgUhXoHC6rJ%2FqIxNXBXCJ18arc%2B4dxdEUGagoLcN0akb0YqwD4WShUBzvQ6IavMuv9rc9F2AYCDlo%2FGDP3Uoo2igRCcaKDEdIhiQCld7216y8804u2oDFIaNNJccVTxtwFc641x63JVm%2BeQw%2BmGbtpEZ8tDWEh8bllsjEcKHf%2F4BwNPvrWHcL8s3rcobA4vjW08Lr9daFGJRoPoU2AHPGi%2BmXqtEzbx6bpbxee3WR0bYB1FmfsGbTWNxKqM%2BLE%2Bz7T8baWSCZ%2Fo8aWhFQvhFyjQsJ3OfKKisPkIB6B4lG0OzKcI3zZL35h03MsU6ssiJDtBGA6mNdPlvyArYR3MBjWoAyXHixmWcGihG7M2nWIQgG2iZtAw4aRje0CAe9n1rpE6aS31M77dJ6lxXfao2XoPSj2IA79N94IDDl1D9bIDx0aR81UjEsg8yDYkBDWCJnL39zdpuAcCTFYPC3NdcuMF9TULHNZAO%2B7caknKh0GimHWEQO1aFaHrkr%2BwztV5%2F5k0nZJGFGWau6P%2BgQMkmQ%2FLuML3n%2F7wGOqUBDhWLSdFdSRwDppbJHotAywlmHNTgdiQwjDRGOIeXO41l4CTGFQwsLaJpxXGkJdV3vJpeZhRXYTM1ictr2lEdBdZwKe93XRuQBeIXliiRm0U%2FmIl0HQJGiGpm8XKG91IIagnRSXq7kFou%2FFcgACNB%2FhLfER3FcWt5aEjzlcRbV92ZR6DZJGPwA2iTj%2FklX7BwPaAaiwqwS4neLfhUqDtp5OnTzBAj&X-Amz-Signature=6edeea317216ad0f5ace16e6c38c439b4ed40f064b2547e6047a81679432af4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLQECG2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NdX4l3uGPd%2BYwakIbAAYsNcEub0CyM59z0vPeYlqAAIgBl2EP7umXLH7TNBNjpoEzyt%2BQeZcDcXSAOgAGt9U%2FC8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5SmEDqNV7I6KoJcCrcA35z8zAb%2FDR7%2BXFsLH6s64AOTC24dv8kLkkM8kh3pTMNhMLUNzPV0sXh29lISITNFwYmxPTLh41I05l95GbuOGq1b5eF6Ps3FySTXgUhXoHC6rJ%2FqIxNXBXCJ18arc%2B4dxdEUGagoLcN0akb0YqwD4WShUBzvQ6IavMuv9rc9F2AYCDlo%2FGDP3Uoo2igRCcaKDEdIhiQCld7216y8804u2oDFIaNNJccVTxtwFc641x63JVm%2BeQw%2BmGbtpEZ8tDWEh8bllsjEcKHf%2F4BwNPvrWHcL8s3rcobA4vjW08Lr9daFGJRoPoU2AHPGi%2BmXqtEzbx6bpbxee3WR0bYB1FmfsGbTWNxKqM%2BLE%2Bz7T8baWSCZ%2Fo8aWhFQvhFyjQsJ3OfKKisPkIB6B4lG0OzKcI3zZL35h03MsU6ssiJDtBGA6mNdPlvyArYR3MBjWoAyXHixmWcGihG7M2nWIQgG2iZtAw4aRje0CAe9n1rpE6aS31M77dJ6lxXfao2XoPSj2IA79N94IDDl1D9bIDx0aR81UjEsg8yDYkBDWCJnL39zdpuAcCTFYPC3NdcuMF9TULHNZAO%2B7caknKh0GimHWEQO1aFaHrkr%2BwztV5%2F5k0nZJGFGWau6P%2BgQMkmQ%2FLuML3n%2F7wGOqUBDhWLSdFdSRwDppbJHotAywlmHNTgdiQwjDRGOIeXO41l4CTGFQwsLaJpxXGkJdV3vJpeZhRXYTM1ictr2lEdBdZwKe93XRuQBeIXliiRm0U%2FmIl0HQJGiGpm8XKG91IIagnRSXq7kFou%2FFcgACNB%2FhLfER3FcWt5aEjzlcRbV92ZR6DZJGPwA2iTj%2FklX7BwPaAaiwqwS4neLfhUqDtp5OnTzBAj&X-Amz-Signature=1b1ae7a2f4975e4bd8dccdb328ca38b17d4b34eea858cbf693996cf37e32f0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
