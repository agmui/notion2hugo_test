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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJTYIZS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BzMh%2F6RQ4x%2Fx5t7RX2B0l%2FuNj%2B5WAbs%2FHsNZYSrkSfwIgaKhCG5zt3pLbYClVTBlvQHNbQD89DXkg9t8YcO%2FKpNMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDONLE%2F2LDSLVDfXWBCrcA7xWdLr6IrmX9SriaCkiHrdMHaHjhA6x5rdirOIYCM8K9jnxBJ1vmvQQtvtBpfuqQ%2BEwfL3ewXYs5BYEdmIKyUIjvGnqbyQTyoPhXGZEnRgbgU8jdrktleMH570ikCSSQr6lpdT8I5EctisgwvfRTxXP1nlYivb%2FS%2BRjdAI6cqGIHN%2FVei0HIe1OmOqrNz%2BjiEccpsjij4usIWlyCwmLik0NSPdcpj9rA5EKBILVS5qzyDSs%2FxK%2Fd1wky%2FyT2ma%2BIRCgDiaMv0j4ifvTpX1mbqxZEQnWgdDH3kiCeGrTnmH3H7yXc5jh18jn3NwWsQUkXFxJCvuKX0IKQRWwBqlLY8o6APSkS29tHIcnL7x%2FGCYvC%2BmogaAk2aY6AUKsgE%2B8aSM5dykQ%2FV7ilWK%2BnHfRk5tDw8Pl%2FxgKCbSzcLN93mRO3Irp1P%2Fa2HXf1DZlnvbZ6OoftsTECjL3CjBPhP%2FlB4Qfcby6uttzmh6fhX7NF6%2BKj6Eweit5bfYrdnp%2B1d7TVOBNlkFt2n3wCij8W0%2B7SyTPlFP8j0XQoYFU9md1bPbJhPp3vgFb5VRlh4ldygTkRCxJvqD5xelEKX6so1r6DeF370ip8r8UO%2Bqg1aFN6rtxsxHd99ZzbN66BILnMKjtib8GOqUBAXcW4yhkdqxOSEmnuSX2LJq32QSnM%2BwNrKt4N%2FCS58RxrV8RXFOJImYLM%2Bm%2B1YO4YxbsGRXtqmC90gGipIDG5xPrKX4RAIve9qnwulrFfGpkH6hvK1wTLfXvdz64eeb5hf6n%2FpfTyBSG4e901xHufSV9a3nJBHZpzVSYDcl9QvB6SBCSOhy3vwTzoyYibNoYyWOJx50j3ldJrwznPtuOmfQwFzHz&X-Amz-Signature=9f08c08606d3813198f5f1a34b1a1c99412fa64765ac4eacf3fbe4954f116b00&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJTYIZS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BzMh%2F6RQ4x%2Fx5t7RX2B0l%2FuNj%2B5WAbs%2FHsNZYSrkSfwIgaKhCG5zt3pLbYClVTBlvQHNbQD89DXkg9t8YcO%2FKpNMq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDONLE%2F2LDSLVDfXWBCrcA7xWdLr6IrmX9SriaCkiHrdMHaHjhA6x5rdirOIYCM8K9jnxBJ1vmvQQtvtBpfuqQ%2BEwfL3ewXYs5BYEdmIKyUIjvGnqbyQTyoPhXGZEnRgbgU8jdrktleMH570ikCSSQr6lpdT8I5EctisgwvfRTxXP1nlYivb%2FS%2BRjdAI6cqGIHN%2FVei0HIe1OmOqrNz%2BjiEccpsjij4usIWlyCwmLik0NSPdcpj9rA5EKBILVS5qzyDSs%2FxK%2Fd1wky%2FyT2ma%2BIRCgDiaMv0j4ifvTpX1mbqxZEQnWgdDH3kiCeGrTnmH3H7yXc5jh18jn3NwWsQUkXFxJCvuKX0IKQRWwBqlLY8o6APSkS29tHIcnL7x%2FGCYvC%2BmogaAk2aY6AUKsgE%2B8aSM5dykQ%2FV7ilWK%2BnHfRk5tDw8Pl%2FxgKCbSzcLN93mRO3Irp1P%2Fa2HXf1DZlnvbZ6OoftsTECjL3CjBPhP%2FlB4Qfcby6uttzmh6fhX7NF6%2BKj6Eweit5bfYrdnp%2B1d7TVOBNlkFt2n3wCij8W0%2B7SyTPlFP8j0XQoYFU9md1bPbJhPp3vgFb5VRlh4ldygTkRCxJvqD5xelEKX6so1r6DeF370ip8r8UO%2Bqg1aFN6rtxsxHd99ZzbN66BILnMKjtib8GOqUBAXcW4yhkdqxOSEmnuSX2LJq32QSnM%2BwNrKt4N%2FCS58RxrV8RXFOJImYLM%2Bm%2B1YO4YxbsGRXtqmC90gGipIDG5xPrKX4RAIve9qnwulrFfGpkH6hvK1wTLfXvdz64eeb5hf6n%2FpfTyBSG4e901xHufSV9a3nJBHZpzVSYDcl9QvB6SBCSOhy3vwTzoyYibNoYyWOJx50j3ldJrwznPtuOmfQwFzHz&X-Amz-Signature=a23c68ebe2c85cecabe5d5a444943044061379c5a0cbb66c113f15bc4d84e5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
