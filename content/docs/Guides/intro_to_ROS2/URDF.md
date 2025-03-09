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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBKDD25%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC0KVyQE9JhADdrbgnvyKcY23fBiv1bbFEE5w2FwgYW8wIhAI1ffetDce5%2BDZ4tQ%2BgGigJ6qDLrLS6TKavWrXdb8U1fKv8DCHsQABoMNjM3NDIzMTgzODA1Igw3ORjddlvPGpws1Mkq3AOi%2BhHSQ1AyluaZ0ym1IbEY5VMXoREZ%2BAOBB%2B3kWeKlYkbsSKw%2BKoESCB0nNNIEaeneCzRG9qt9Y0iCMndf5pIkR3AygOOOqNQDyb8oRMNQMBvBgGDedXcj%2F24Z9ZZ6k6cc2%2FW%2BT0dn0Z%2F3fcdd8z8mkQ4yU%2FptfowqmLQlieeG%2Fj0ifDA7sltV9D1tga37rk0iFC665npOnpTYDgnsPrJ%2FaLKTw4dInXYL82OWldvYjLzOFGxC5%2F4rrXQAs3XQNBsR2PCA8LsBLrx06UFS1Z8mXyjGqjayanWi7tI66C6sv8RQIWBQxzd1ti2Jfz4hSazP6Acil1wTjxxl4dsj0mwL0BcRvFqQKsTJXSrlbdpFAC9Ymi6Bp6mDDThAv1lnL4nz6EzhdycyN0ukzDMe9xvAciKe2ZAH4fLzC59k9S%2Fxx93KCFJwhVw0%2BuJlDmXHVbp%2FgBb0x6rmjCVB%2FUOunDZScN5AouV0i72YqL6pXFTxTgocTijRU0c7KqgUxCDeKwjn%2BewwuBaIJb%2BPzuu3MdXTHdwJHP8KZACxJn6CpjbybzGUAa%2B4lNC%2BUHp8%2BlI5RwsKA86Isq4Mf8pTshNj0aeoFBo%2FTdtugiVZgg0P7srUkH70x4I2UJOnaca5JjCFtbe%2BBjqkAX8Mug4JMjBqFtJqxCEiqsOX9g4kpO5RVTxp8RAeFfTq3bkXAn9UJlfwnZI%2F1GboqXJXY4eKScddI%2FLs0D37haVp8eOInK5VTNqrAHk1tNGDmWlcso3QuowgXO8x7tgqhY8vtKDkBnWTHMQBPpnODtK2suUH6vD0m3pZxaj0oJgsfD%2F%2BAII5%2FduevJJJtmmAljuOZeym%2FfXK9kzqL8US0UP6JfcV&X-Amz-Signature=4d69c3c836ea60b0c4b9fb0742bf120a07be201895386963aab4e7e6e39deb53&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBKDD25%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC0KVyQE9JhADdrbgnvyKcY23fBiv1bbFEE5w2FwgYW8wIhAI1ffetDce5%2BDZ4tQ%2BgGigJ6qDLrLS6TKavWrXdb8U1fKv8DCHsQABoMNjM3NDIzMTgzODA1Igw3ORjddlvPGpws1Mkq3AOi%2BhHSQ1AyluaZ0ym1IbEY5VMXoREZ%2BAOBB%2B3kWeKlYkbsSKw%2BKoESCB0nNNIEaeneCzRG9qt9Y0iCMndf5pIkR3AygOOOqNQDyb8oRMNQMBvBgGDedXcj%2F24Z9ZZ6k6cc2%2FW%2BT0dn0Z%2F3fcdd8z8mkQ4yU%2FptfowqmLQlieeG%2Fj0ifDA7sltV9D1tga37rk0iFC665npOnpTYDgnsPrJ%2FaLKTw4dInXYL82OWldvYjLzOFGxC5%2F4rrXQAs3XQNBsR2PCA8LsBLrx06UFS1Z8mXyjGqjayanWi7tI66C6sv8RQIWBQxzd1ti2Jfz4hSazP6Acil1wTjxxl4dsj0mwL0BcRvFqQKsTJXSrlbdpFAC9Ymi6Bp6mDDThAv1lnL4nz6EzhdycyN0ukzDMe9xvAciKe2ZAH4fLzC59k9S%2Fxx93KCFJwhVw0%2BuJlDmXHVbp%2FgBb0x6rmjCVB%2FUOunDZScN5AouV0i72YqL6pXFTxTgocTijRU0c7KqgUxCDeKwjn%2BewwuBaIJb%2BPzuu3MdXTHdwJHP8KZACxJn6CpjbybzGUAa%2B4lNC%2BUHp8%2BlI5RwsKA86Isq4Mf8pTshNj0aeoFBo%2FTdtugiVZgg0P7srUkH70x4I2UJOnaca5JjCFtbe%2BBjqkAX8Mug4JMjBqFtJqxCEiqsOX9g4kpO5RVTxp8RAeFfTq3bkXAn9UJlfwnZI%2F1GboqXJXY4eKScddI%2FLs0D37haVp8eOInK5VTNqrAHk1tNGDmWlcso3QuowgXO8x7tgqhY8vtKDkBnWTHMQBPpnODtK2suUH6vD0m3pZxaj0oJgsfD%2F%2BAII5%2FduevJJJtmmAljuOZeym%2FfXK9kzqL8US0UP6JfcV&X-Amz-Signature=b834e895ceae2473e938f26c6634d70505b23e28c11f72e50f228abf95eae965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
