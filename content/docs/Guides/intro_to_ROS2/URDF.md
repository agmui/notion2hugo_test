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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQBJMKY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aD2FjVno3%2BmDsxAo%2Fd53eMXuRBU3iEo0alpcaQkaJQIgZLtJILfNv3n0yPD2ywKNQgDmABqkOnBOCG0QIIs9zYoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEDLT%2FYSItRitGvHwyrcA9%2FDu%2Fmd2XUtL5Xeye%2Bgno35dYpKg6k1xA0AzufZpFuWg4tRXKMvEXzz64o5MoZDlxqCVoHz5lsLpjyKdUaFvvucKgXy%2FWFknyc6A0WWBigxvqZ54wOigtKNFh4k9Q%2F9957cqbWXfDo06jNP9O4hqT%2BzM4FCp%2FUSIJsCSne19%2FwnbRwZ3cbQ08ZYiY%2FUV3S2gZigEvWONH00HKoH%2BhD7qatHf8%2FkZr7cfXUmzEzL6OBeDHFlKfTD2ID2WuzV1Nmb4S2zfcY2iKHPlmDlkOLZtrsEVqQRANgbOwwrDkm22WyA8YDSFufn6B9uhNHt8UndjsX0D1YE74ccLaSsY%2BHoemShO6ATEu5o0Krth%2Bvt8182dxub5ujHYyHRCyBcYNyLar3N263RqIS5kkQQpnfS4ikEhVzO3MqU1%2FMuKXu%2FbjrkLzCsd8VJ%2FVfk%2F9yNM4C%2FkPerCpLst5NWm8ySDI96TXYUjnCMlaTK4%2F1MdjUjxM16Hh8AdbK7odK8olJQfjObgbpPdjJexO9LfWHXOZIfr%2FcgdB7TetHVUp6swnZSCepkO4sjpd%2F4pCtbplGdhtoWAs%2BRF2PHuEBobEPTgIwtUEziSiSa1l8%2BQDpT3LD7mExiQRqRM%2BeBteLj4UoNMICH5L4GOqUBm5uXZLB38YdcvRUwfXUQZrYJWFVGdXLM9ry%2BGhFzkwes7pWHTdbKXyj%2B7e%2Bj7oIb0ZgyRVeLBhuZrCvjSzMrLHqFEN6ZtqLM6GlkLajo7DMq9DGM5uhR2HbVHKnrppLAxktW9PWTUj2fRZHkmVL1GEBuv3cHc9vKz0%2FJ7yhLAcB1dwzguxVZAu%2FJYOUMTxUSrrjLueGQJHamrgnq1%2BsEA0472u7V&X-Amz-Signature=38c13c8cdbf4403c38a8ec71ccf3eacc1500e5e8c720a5f7b8c7fdcc27d04f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQBJMKY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3aD2FjVno3%2BmDsxAo%2Fd53eMXuRBU3iEo0alpcaQkaJQIgZLtJILfNv3n0yPD2ywKNQgDmABqkOnBOCG0QIIs9zYoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEDLT%2FYSItRitGvHwyrcA9%2FDu%2Fmd2XUtL5Xeye%2Bgno35dYpKg6k1xA0AzufZpFuWg4tRXKMvEXzz64o5MoZDlxqCVoHz5lsLpjyKdUaFvvucKgXy%2FWFknyc6A0WWBigxvqZ54wOigtKNFh4k9Q%2F9957cqbWXfDo06jNP9O4hqT%2BzM4FCp%2FUSIJsCSne19%2FwnbRwZ3cbQ08ZYiY%2FUV3S2gZigEvWONH00HKoH%2BhD7qatHf8%2FkZr7cfXUmzEzL6OBeDHFlKfTD2ID2WuzV1Nmb4S2zfcY2iKHPlmDlkOLZtrsEVqQRANgbOwwrDkm22WyA8YDSFufn6B9uhNHt8UndjsX0D1YE74ccLaSsY%2BHoemShO6ATEu5o0Krth%2Bvt8182dxub5ujHYyHRCyBcYNyLar3N263RqIS5kkQQpnfS4ikEhVzO3MqU1%2FMuKXu%2FbjrkLzCsd8VJ%2FVfk%2F9yNM4C%2FkPerCpLst5NWm8ySDI96TXYUjnCMlaTK4%2F1MdjUjxM16Hh8AdbK7odK8olJQfjObgbpPdjJexO9LfWHXOZIfr%2FcgdB7TetHVUp6swnZSCepkO4sjpd%2F4pCtbplGdhtoWAs%2BRF2PHuEBobEPTgIwtUEziSiSa1l8%2BQDpT3LD7mExiQRqRM%2BeBteLj4UoNMICH5L4GOqUBm5uXZLB38YdcvRUwfXUQZrYJWFVGdXLM9ry%2BGhFzkwes7pWHTdbKXyj%2B7e%2Bj7oIb0ZgyRVeLBhuZrCvjSzMrLHqFEN6ZtqLM6GlkLajo7DMq9DGM5uhR2HbVHKnrppLAxktW9PWTUj2fRZHkmVL1GEBuv3cHc9vKz0%2FJ7yhLAcB1dwzguxVZAu%2FJYOUMTxUSrrjLueGQJHamrgnq1%2BsEA0472u7V&X-Amz-Signature=792a33c93f75cf0bc448ff7ea4ee079b8cc6109a88d1e07fc5ef5b1db6fdfffb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
