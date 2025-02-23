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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLKWCIK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzsGFNei1R8eNHrS2Lrs62lcZ7%2FM0ogb4lfPVb3FflMAiAlP3EpbwoN2mOwBnPhmPkugVDrzxjhTAlE%2BKYvkhJ5Pir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMN56F%2BQPt%2BKFsHw8zKtwD3QMKOgjeJcbYtAwjXwgBQo18KiVrnEsZs%2BuC4ksCR4J1q5GMd%2F%2F%2BvMc8h9Z%2BkQeVL00BTF7N6D20ObsB5sXKAr%2FhbB6biZHu2g8accCQFgmtveQZC2SfHb%2BtANipsoiWBjbbdhiU40zpzITZ2IKIaFnniB0Qo6V%2Fp9yILPKVmIgL6z3PT9KgzyEuKHidBswI1piOWDM9MGUos9Pz%2BqZIiV1Ae1tzEB3XdWbhHt1n2vu167FP2M36nJ4AJKiVXe0Uw2dII%2FEo%2FZBF9VRFCaZMdJwpJYFmBhTrjUZmPfDoYf%2FjjyrrArH18MNffoAfmqCWFczGSZjQcZCBNTC7W%2FkyzhiAWe%2B3cOELXzKuGgmlTL0wfnUyr7bwMe8LMhzhbrMb%2FcRU%2FG35JCz3mRX8VIEg1oWkofQlVCmf8A8jmeLiVTDnL7G50vIa7UzSJT4yo9DEr7t2mI8DffOqFOsiZRzKJuBc3H9mm4O%2BycQ3IFxDVrF2oQxbRwVzoHk5OU8NGpFCm7KGfh6lMox5L0qlkUhD9lElFdhHfEi4hVCo%2B%2Fv1i41oBTJScXReJ57zRKk3XNYhXBpfZFf%2FaFWLBAWpGTdFnogrg02C0YuWlInafOH8eI4Vbk%2BGoZ9I4Wz1cAUw7e%2FrvQY6pgEBifEVQytvncByA4d%2FpwhRD7SyRsWBfxLHwUcye0kHzoU9hJRHvTqMfcsaHpx6iNObQBKWHE4b0zFTMwTKL151wkhOHt%2FrKIvc5F93Rd5vDl8beIgfegwGe3AU4Cz3EmHKr7kasCK16%2FP3Mupkn1UpqSozRz7b7%2B2XHjO8jlQRVc%2FZ4AhtggqycYylacBxg54bxLq0woWZ0xMXh%2BGHG683mOFnNzu5&X-Amz-Signature=f83c88d238d323051ce29edd0abe91e3f4efc83a7d1446f519506fffd58a66d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLKWCIK%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzsGFNei1R8eNHrS2Lrs62lcZ7%2FM0ogb4lfPVb3FflMAiAlP3EpbwoN2mOwBnPhmPkugVDrzxjhTAlE%2BKYvkhJ5Pir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMN56F%2BQPt%2BKFsHw8zKtwD3QMKOgjeJcbYtAwjXwgBQo18KiVrnEsZs%2BuC4ksCR4J1q5GMd%2F%2F%2BvMc8h9Z%2BkQeVL00BTF7N6D20ObsB5sXKAr%2FhbB6biZHu2g8accCQFgmtveQZC2SfHb%2BtANipsoiWBjbbdhiU40zpzITZ2IKIaFnniB0Qo6V%2Fp9yILPKVmIgL6z3PT9KgzyEuKHidBswI1piOWDM9MGUos9Pz%2BqZIiV1Ae1tzEB3XdWbhHt1n2vu167FP2M36nJ4AJKiVXe0Uw2dII%2FEo%2FZBF9VRFCaZMdJwpJYFmBhTrjUZmPfDoYf%2FjjyrrArH18MNffoAfmqCWFczGSZjQcZCBNTC7W%2FkyzhiAWe%2B3cOELXzKuGgmlTL0wfnUyr7bwMe8LMhzhbrMb%2FcRU%2FG35JCz3mRX8VIEg1oWkofQlVCmf8A8jmeLiVTDnL7G50vIa7UzSJT4yo9DEr7t2mI8DffOqFOsiZRzKJuBc3H9mm4O%2BycQ3IFxDVrF2oQxbRwVzoHk5OU8NGpFCm7KGfh6lMox5L0qlkUhD9lElFdhHfEi4hVCo%2B%2Fv1i41oBTJScXReJ57zRKk3XNYhXBpfZFf%2FaFWLBAWpGTdFnogrg02C0YuWlInafOH8eI4Vbk%2BGoZ9I4Wz1cAUw7e%2FrvQY6pgEBifEVQytvncByA4d%2FpwhRD7SyRsWBfxLHwUcye0kHzoU9hJRHvTqMfcsaHpx6iNObQBKWHE4b0zFTMwTKL151wkhOHt%2FrKIvc5F93Rd5vDl8beIgfegwGe3AU4Cz3EmHKr7kasCK16%2FP3Mupkn1UpqSozRz7b7%2B2XHjO8jlQRVc%2FZ4AhtggqycYylacBxg54bxLq0woWZ0xMXh%2BGHG683mOFnNzu5&X-Amz-Signature=01acf89ece275407e9633b411c2966c3b4105293edc6cd50f59d3c07eb686850&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
