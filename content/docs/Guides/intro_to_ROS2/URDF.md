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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTQOEJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoIBbtNrGb3155MabYstN5XF5f6t8sL53i7WFqa4TU0AIhANAeIjhrJjZ%2BPejzVhTkYkcNaN%2Bl8Ut2NTbgexRQcQ1wKv8DCGsQABoMNjM3NDIzMTgzODA1Igysdn8nnWCcjBQIuzEq3AO5lBOdfIILO27khR7oYUtjoTYUZAVpxDGQlQQRZ9Auiizg0mrbDDHzMjybZ5z8X0F73E46gRWDQ2JyCY8wh4w1Flqcu5BfuYHTm5Hv7MNxMyW0lfjVT6ZIZaH%2BeFV9Z5O1%2B23awjqn8KKpSXn3waHY3v10RR72%2FNDl174utJDCvGUNBsLqJXQgq0bHMWOLRVfGK9iEW82ww%2FJ2LWyM9OXyIpuZqQay6n5i3ZylNrnkF5qp446y8OW1yKOWgqc1lzKh2FFWFOz0tkObgUDV4tZAacZbl5m8nw7f1Mw1WFNlVHNCfxvIN7gEmXAN2ce0bI5Xf6LjvRUJ%2FbdE%2BR8g%2FlC9ItUjpzgt5g3CNs0%2FIiDqMWDRnaFOeoJOKDqvf3Jxsfx1QLjCbjQGioxv1BpPqHuD5%2B03nsk%2F9GPTR3xal2A1Vpc6%2FeBhB5voABdUoF2UfB9H4%2BoWd8C6sQE5N0uIrncMW8R4RqLRKEY3gNBREyPyefGFPrnwunp%2F88abziUuhjruRX%2FnkNDhJ4MrKHO6QbowN%2B%2FnREcL4jb4EJMaBviYrOcmV%2FvyPrq27BQ96Z5AnZdKUm9TbbMIQS%2BE97Jy9IjbFkvFbWU6qL%2BOyWp1bD%2F1GWhtqQrZ52rfGC1mPTCOhNK%2FBjqkAezJ%2BjbpeG6FSyTB%2BQXK0dx0ak0Au1gb3TzasR3I8WLX2pVsnZmmC1CEi7J6Da2du3rDabIVd6vUyZb%2BQpO%2BGuM5VeK1WdROVtKNOG6I9QgMpX%2FOdPYGqNlE4M6FcPRphuOr0NxfSVMff87vi8GoLzLOnG6wg0upkx7mmZrpii7A6Iu3q0WnATKjyDoLb7YooJfghUSWRPI2jXk6N738zWji9YHw&X-Amz-Signature=f2b05b6c2e894a8d147753caafaee817480c657760572e0476d694e292b947f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTQOEJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoIBbtNrGb3155MabYstN5XF5f6t8sL53i7WFqa4TU0AIhANAeIjhrJjZ%2BPejzVhTkYkcNaN%2Bl8Ut2NTbgexRQcQ1wKv8DCGsQABoMNjM3NDIzMTgzODA1Igysdn8nnWCcjBQIuzEq3AO5lBOdfIILO27khR7oYUtjoTYUZAVpxDGQlQQRZ9Auiizg0mrbDDHzMjybZ5z8X0F73E46gRWDQ2JyCY8wh4w1Flqcu5BfuYHTm5Hv7MNxMyW0lfjVT6ZIZaH%2BeFV9Z5O1%2B23awjqn8KKpSXn3waHY3v10RR72%2FNDl174utJDCvGUNBsLqJXQgq0bHMWOLRVfGK9iEW82ww%2FJ2LWyM9OXyIpuZqQay6n5i3ZylNrnkF5qp446y8OW1yKOWgqc1lzKh2FFWFOz0tkObgUDV4tZAacZbl5m8nw7f1Mw1WFNlVHNCfxvIN7gEmXAN2ce0bI5Xf6LjvRUJ%2FbdE%2BR8g%2FlC9ItUjpzgt5g3CNs0%2FIiDqMWDRnaFOeoJOKDqvf3Jxsfx1QLjCbjQGioxv1BpPqHuD5%2B03nsk%2F9GPTR3xal2A1Vpc6%2FeBhB5voABdUoF2UfB9H4%2BoWd8C6sQE5N0uIrncMW8R4RqLRKEY3gNBREyPyefGFPrnwunp%2F88abziUuhjruRX%2FnkNDhJ4MrKHO6QbowN%2B%2FnREcL4jb4EJMaBviYrOcmV%2FvyPrq27BQ96Z5AnZdKUm9TbbMIQS%2BE97Jy9IjbFkvFbWU6qL%2BOyWp1bD%2F1GWhtqQrZ52rfGC1mPTCOhNK%2FBjqkAezJ%2BjbpeG6FSyTB%2BQXK0dx0ak0Au1gb3TzasR3I8WLX2pVsnZmmC1CEi7J6Da2du3rDabIVd6vUyZb%2BQpO%2BGuM5VeK1WdROVtKNOG6I9QgMpX%2FOdPYGqNlE4M6FcPRphuOr0NxfSVMff87vi8GoLzLOnG6wg0upkx7mmZrpii7A6Iu3q0WnATKjyDoLb7YooJfghUSWRPI2jXk6N738zWji9YHw&X-Amz-Signature=2ba601004b71b3d069bba9a4e72c00afa4d65d6529950d0ba5d934a816a5cddf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
