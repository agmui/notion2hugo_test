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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YO5BRTX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9o2B%2BvOEciLa3cmqkbQARHPpVRo0UMcFBZYI3B%2FspgAiBaxvOFuR4VrxXON3uIAm12wDdNrR6y4idvPV9aYUc7rSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOOJUlmdQ9GgM8ch6KtwDd6xuLqHU%2BDBrM8n%2FKPVfhkkjbUyPqa%2BvaHbEufcng%2FdNXzZTBUZTQ%2BI7H6Q0pB7bGuKeSycZsFrwSOCy7t6wSZQixf%2BSiBvlP2GMHEAU1XANAdw3lznthOWFC%2FIbdr2yPlKh9GUDve1izeh3Ul3P%2FrlDrqrUc31DdY2CgkEowNt2IcR780nArw7yAl7FJIPzm9aYho45f8APwEPcVj%2BMICOKtdW9wNfqqtPtCK%2Bh%2FI%2BSTJoRLE1lZCS40JieOsBszL2M0CLol7NX39CoUqrhR8bqSat9M1DXbnguXLj7S1h2vQXAogU5rgajJY%2FNYXJBU%2Ft0pLysu4f0Lb0Tc0ojB634QKXkpdedWY6BMGFjaN41j1E2F6qXnKCzRpwvjdG%2BD2hP0ujXoJO6gY%2BjAZ%2BjtO%2FVYsIHDqL09SlvNzcMCtkJoBUrRGa9X7A3G4bdIpjhf6f3EYARDhwBGVwsqHy24g%2F8Z3rinW7PM2o2SiospcbTu0M8wZz3QODQ2ZhRMC%2BBsf%2FHPts4bX3oJ7UI3rdzwiEczjy7Wt%2BGJ3slQSr5OVlJPqHWzez8M%2BgdGgfhvuX0i9cKGJ%2F2hmkwI11AjCdJhJyC3nNx2NNpQC1KeoGJvgm6DwRPKbWsyV0Mg40wguimwQY6pgE0M8EQ%2BQOSIGmHpvvmrEE9%2B%2BJ0pNrcVSZuTJ0dLhTtwV9MHIko%2BtwXZKI2oAjR2dPstkyhDiR27f86ZnwI%2FqzYYXwNimu%2Fz3%2ByVxvQ3DeHl6xbg1ytOARIaClSKhbXDmVMkwxTQKoKHwduGgMkQBEYAhEjrTqra1cvZrpf0x5NGAJ3EufMKShnmwWJ9yTc7GXNTr8KAUKhz8U3GJrZ96MqsHad16Vo&X-Amz-Signature=dc78395bf027923b267293468321bbd6a154773f9243927c5bed64c18bed9f38&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YO5BRTX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9o2B%2BvOEciLa3cmqkbQARHPpVRo0UMcFBZYI3B%2FspgAiBaxvOFuR4VrxXON3uIAm12wDdNrR6y4idvPV9aYUc7rSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMOOJUlmdQ9GgM8ch6KtwDd6xuLqHU%2BDBrM8n%2FKPVfhkkjbUyPqa%2BvaHbEufcng%2FdNXzZTBUZTQ%2BI7H6Q0pB7bGuKeSycZsFrwSOCy7t6wSZQixf%2BSiBvlP2GMHEAU1XANAdw3lznthOWFC%2FIbdr2yPlKh9GUDve1izeh3Ul3P%2FrlDrqrUc31DdY2CgkEowNt2IcR780nArw7yAl7FJIPzm9aYho45f8APwEPcVj%2BMICOKtdW9wNfqqtPtCK%2Bh%2FI%2BSTJoRLE1lZCS40JieOsBszL2M0CLol7NX39CoUqrhR8bqSat9M1DXbnguXLj7S1h2vQXAogU5rgajJY%2FNYXJBU%2Ft0pLysu4f0Lb0Tc0ojB634QKXkpdedWY6BMGFjaN41j1E2F6qXnKCzRpwvjdG%2BD2hP0ujXoJO6gY%2BjAZ%2BjtO%2FVYsIHDqL09SlvNzcMCtkJoBUrRGa9X7A3G4bdIpjhf6f3EYARDhwBGVwsqHy24g%2F8Z3rinW7PM2o2SiospcbTu0M8wZz3QODQ2ZhRMC%2BBsf%2FHPts4bX3oJ7UI3rdzwiEczjy7Wt%2BGJ3slQSr5OVlJPqHWzez8M%2BgdGgfhvuX0i9cKGJ%2F2hmkwI11AjCdJhJyC3nNx2NNpQC1KeoGJvgm6DwRPKbWsyV0Mg40wguimwQY6pgE0M8EQ%2BQOSIGmHpvvmrEE9%2B%2BJ0pNrcVSZuTJ0dLhTtwV9MHIko%2BtwXZKI2oAjR2dPstkyhDiR27f86ZnwI%2FqzYYXwNimu%2Fz3%2ByVxvQ3DeHl6xbg1ytOARIaClSKhbXDmVMkwxTQKoKHwduGgMkQBEYAhEjrTqra1cvZrpf0x5NGAJ3EufMKShnmwWJ9yTc7GXNTr8KAUKhz8U3GJrZ96MqsHad16Vo&X-Amz-Signature=5ce9f6450ad4d2abb18c90d62896eefef27f0b6df36c03755697759a84cc8357&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
