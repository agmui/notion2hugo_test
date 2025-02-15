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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MP7WN2M%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBdCOJCQWa2KA0ctCkepxx77bSa5EOp3d9Z4v4NP7Y7RAiEAj40JPGwBAo4Qn3iGjDIZYSd1L2Z%2Fuf9WhaNbZ4jC93cq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJBGaIKCOUS3m8RwpCrcA4bmAcxFH1mWp2o1uGacanZnkfIsVGiDkgPTgWuDsKVPjchH5QYvF4VlKltGbxlG7l6wko3Oy7Wl6ONRIPt7yj%2BjQm%2B%2BRLvu3S6kTTbV0%2FsrxN6dB2o4%2FYJzDouI74x82Ue%2FpOnEN6qpq70xvYh%2B7R%2BQwdFku7uo8Ooe4%2FIGTzw4ZfUyiByNcvpX02jCHENVnPHbRpZSd25O%2BKxOkeYXABJhLdjilKv6VahY1sN9bxP%2FYIYOgfe4vPaeeQUEabgYF5Yct%2B6CA87IwMGiGDdAFnvYYutkBT7FKE8AuiUXXuBcaO1Ng%2B%2FpliAOtUCcDuXbkOlzGBq0VfRXIzAGU8HQ71kBKagOz%2F1k01WjIegH0ZiXKjPxJgBIguYmCWT%2F%2B1unCFuCdhPU6QR9OyTPQCrP8LzmLTVFjlndXTUWlWbuVEAWEV9oN5ScoqCjUYu9WLJKZOEfdEFrRtP4YlyN5FVTD8wNVBleHpaFnIJBLG5b7apCkD1EJh9N6MXMVL4kkAV%2FB4uJf43tWJ9d6vEi4%2BsEpwi%2BPDsAwunwDGPW3ZcbAjh47rcix80c8GVDx6juDyg6dveC6Q2wrDOMJQj92avnHg5U4qMJMUO3EQ5Prk0lxfhmTxZejgQ%2F7ZrTrghuMMPtwb0GOqUBGhHDZHnt63ri8fjHM1xj9JYbCoMOY8e%2FO410I%2FMJF0T8KcjIkUcA70jFZbkHFXOoKxkkQGBEfiqegY1xzn6Au9L7o%2BPmOtjlB0oJL7XOTsX5k%2BSvfahaQYVtQVMu8cYSQWE7D42AfvnUPprAnHISS6xlem5a9Uu4bcZqRiA4eIkHp0whpgZseimbnA85JhgwHOlRBMPJONTfr1xE4rV5TXXABnbF&X-Amz-Signature=676014c8c484af2e8505f7f8aa59c306cd374813ba19a76d13847c772920bf7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MP7WN2M%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBdCOJCQWa2KA0ctCkepxx77bSa5EOp3d9Z4v4NP7Y7RAiEAj40JPGwBAo4Qn3iGjDIZYSd1L2Z%2Fuf9WhaNbZ4jC93cq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJBGaIKCOUS3m8RwpCrcA4bmAcxFH1mWp2o1uGacanZnkfIsVGiDkgPTgWuDsKVPjchH5QYvF4VlKltGbxlG7l6wko3Oy7Wl6ONRIPt7yj%2BjQm%2B%2BRLvu3S6kTTbV0%2FsrxN6dB2o4%2FYJzDouI74x82Ue%2FpOnEN6qpq70xvYh%2B7R%2BQwdFku7uo8Ooe4%2FIGTzw4ZfUyiByNcvpX02jCHENVnPHbRpZSd25O%2BKxOkeYXABJhLdjilKv6VahY1sN9bxP%2FYIYOgfe4vPaeeQUEabgYF5Yct%2B6CA87IwMGiGDdAFnvYYutkBT7FKE8AuiUXXuBcaO1Ng%2B%2FpliAOtUCcDuXbkOlzGBq0VfRXIzAGU8HQ71kBKagOz%2F1k01WjIegH0ZiXKjPxJgBIguYmCWT%2F%2B1unCFuCdhPU6QR9OyTPQCrP8LzmLTVFjlndXTUWlWbuVEAWEV9oN5ScoqCjUYu9WLJKZOEfdEFrRtP4YlyN5FVTD8wNVBleHpaFnIJBLG5b7apCkD1EJh9N6MXMVL4kkAV%2FB4uJf43tWJ9d6vEi4%2BsEpwi%2BPDsAwunwDGPW3ZcbAjh47rcix80c8GVDx6juDyg6dveC6Q2wrDOMJQj92avnHg5U4qMJMUO3EQ5Prk0lxfhmTxZejgQ%2F7ZrTrghuMMPtwb0GOqUBGhHDZHnt63ri8fjHM1xj9JYbCoMOY8e%2FO410I%2FMJF0T8KcjIkUcA70jFZbkHFXOoKxkkQGBEfiqegY1xzn6Au9L7o%2BPmOtjlB0oJL7XOTsX5k%2BSvfahaQYVtQVMu8cYSQWE7D42AfvnUPprAnHISS6xlem5a9Uu4bcZqRiA4eIkHp0whpgZseimbnA85JhgwHOlRBMPJONTfr1xE4rV5TXXABnbF&X-Amz-Signature=dd165f92217a18489542c6ca33cffdc176035fa144dc868c1e2322c33ff34fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
