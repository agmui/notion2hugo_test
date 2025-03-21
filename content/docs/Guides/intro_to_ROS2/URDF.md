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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J6NP3HV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICJYhE3gpL3t1rG25XQxkLFI%2Fle8LJ1%2Fd6LCjiwmCKYTAiA2yLSMc%2B7fVacbTpj2PcoByc6FeTqToH6owDqUkmC8syqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJbuErG2aRxVJfNVZKtwD8vaAh5XZUDpNzMa%2B%2B8%2FIXPclYD%2B8PStoYm2pvz4N57GOxYvZyNjRbEsWVxag33QWXD%2FkOeATPkAO3QDEAoWiS9fO264W%2F8QbdEydLEuOJu%2FF8TUQiXs0XbShndx%2BXnbT1ebPK4fyHmIeIndP6if3xEnhIvpn4UXkMZiWMzw1gUJyyoi%2F9MGzdMOcL1HPn6NyVtLr%2FRjkkUt5N5yYcL9tyNt2R8idWaCWWzVn0OGTg%2B2YDtahS5TFrK1HVNNMHKEsdVI8XJlYd%2FXbPElfl1UMHkeCBSBa6ET6cy70V8CcqmcnUE03z7tXkb26UxJiAB4fiKSRwgRd0ggYGmNjKpUPJJY6h4S9cf%2FZC5itFLrdYau7hdUz%2FGrZde4T2k7df4O%2FNX9ngoVerE%2BGfr%2BLaLh19ppkD7BJTu%2FALUqfoKMNvqzM1qcR9EHew%2FemqiIIwNRSNyLZWbIEoJAQXyoRR7dG5jfsUdfUBhPGQ4qz95kQyKtsMv%2FunCMzs4KA2yVls0Of5BOpNRmbx8r0dmIpwv39Ostg3MAInHG92nLB5DEQ0WHgOgcJUxVZIwVwiUth%2BWzbmCHWhDS032KSWstYOOjiaPb8O2XyrSVdaD%2Be4BarFny2MoLSf%2Frh%2BFtbGcww4tr1vgY6pgGXZz5USYkTYUj9Wp55gkJOuFQCnhMDJfAWpVQqSimGqDOFM%2BZUWiRYEqK%2FfSnQwl286X0gDhgFH%2FW1YDrK9cDCHnsW32zSM%2FzdtiONTCaB6Yrszg1%2FhNr7XLFZIypBCKke3GkBhzXNZ5nGE8eB1pp08LrxY8F1qkYVK6X4B4%2FcGhCKPE3w6nMeLdquaehXe%2B5Xyfw4UrRuLF%2Bw0RJQoVAsjJRUXx58&X-Amz-Signature=67ac2bd79c0d0f4b7ea78b07f43196df3a875bd28e6a132f6e1cbd2547a20d90&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J6NP3HV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICJYhE3gpL3t1rG25XQxkLFI%2Fle8LJ1%2Fd6LCjiwmCKYTAiA2yLSMc%2B7fVacbTpj2PcoByc6FeTqToH6owDqUkmC8syqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJbuErG2aRxVJfNVZKtwD8vaAh5XZUDpNzMa%2B%2B8%2FIXPclYD%2B8PStoYm2pvz4N57GOxYvZyNjRbEsWVxag33QWXD%2FkOeATPkAO3QDEAoWiS9fO264W%2F8QbdEydLEuOJu%2FF8TUQiXs0XbShndx%2BXnbT1ebPK4fyHmIeIndP6if3xEnhIvpn4UXkMZiWMzw1gUJyyoi%2F9MGzdMOcL1HPn6NyVtLr%2FRjkkUt5N5yYcL9tyNt2R8idWaCWWzVn0OGTg%2B2YDtahS5TFrK1HVNNMHKEsdVI8XJlYd%2FXbPElfl1UMHkeCBSBa6ET6cy70V8CcqmcnUE03z7tXkb26UxJiAB4fiKSRwgRd0ggYGmNjKpUPJJY6h4S9cf%2FZC5itFLrdYau7hdUz%2FGrZde4T2k7df4O%2FNX9ngoVerE%2BGfr%2BLaLh19ppkD7BJTu%2FALUqfoKMNvqzM1qcR9EHew%2FemqiIIwNRSNyLZWbIEoJAQXyoRR7dG5jfsUdfUBhPGQ4qz95kQyKtsMv%2FunCMzs4KA2yVls0Of5BOpNRmbx8r0dmIpwv39Ostg3MAInHG92nLB5DEQ0WHgOgcJUxVZIwVwiUth%2BWzbmCHWhDS032KSWstYOOjiaPb8O2XyrSVdaD%2Be4BarFny2MoLSf%2Frh%2BFtbGcww4tr1vgY6pgGXZz5USYkTYUj9Wp55gkJOuFQCnhMDJfAWpVQqSimGqDOFM%2BZUWiRYEqK%2FfSnQwl286X0gDhgFH%2FW1YDrK9cDCHnsW32zSM%2FzdtiONTCaB6Yrszg1%2FhNr7XLFZIypBCKke3GkBhzXNZ5nGE8eB1pp08LrxY8F1qkYVK6X4B4%2FcGhCKPE3w6nMeLdquaehXe%2B5Xyfw4UrRuLF%2Bw0RJQoVAsjJRUXx58&X-Amz-Signature=16b629048700acc6f09b1ffcff7282ad5487870688bf427d266349c39b8f1619&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
