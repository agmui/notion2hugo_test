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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJ4VD2U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaPVBqNdbP4IIm4quCRX9pFmf1sqTQtZUE%2B3gnGf3zlAiEA9ftM2TGkgx2mrskqGqueSrtcNroL%2B4j%2B2zqcZg%2Fn5uwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvTTw4T0zDvdZSp%2FircA0FkpHD8y5I2vU9yGPgCAAn2QqUVxebK4PYbDbSp9thDD0iQS%2FV%2BapGZ4j8AhibbzZBWjaKPpXrgDLiZYPm0AamIUotL1nfb8rpjOWqcAgPddSqcqFboqcsfS1qmiS1Cde%2By8lbW9nn1MdKqv1i7PR4onP0hGs0BP18wF9gbJ%2Bk%2FvVNC4Oj1qhghFyXSlISBgoxdYoUF0wK5cq7h8upj73ZV%2FJWx35B05sTx%2F5etpSnSC%2FdPTahHxY5jJN4txnXfRBssRAYueNgNQVFy00bzqV94mQWUO%2FWF3XnX2LrC95J95mN%2FkJ6MGYXiDzegD%2BKsAKPHf7ukytxUygsm3EAxGaYamq0subUtGnMIAjSPLXiZfhR8fO8jobRPtJw6DJ2v5bLqa5sq5KJ64273WhWzvx23udUQRPgaHBLA9PGnubmrAqwhPOp6shpiWjdPnB5s%2FzTdDYiobqCfCiVhA59LdfrRU6yqBb%2FnOJphD5rMO76eU1WnN%2BNBulDmGC%2FPI3XMibz15Ll8iJ1CyUL99N9LjFLiE03nRhtsOwDniY%2B2TEtyDnQZP6KTY7aWg17WOHUk3MO6Mtv7hNgfvzB6mrIiq9sLyuBLhhsj8tcWd%2Fg6ASFb9neL4PAeImt%2Fhk%2BIMP7n370GOqUBX7exvclSA9gk2N4hrKm%2F8Ohuo5jVRk%2BH3ilzaMu0MTjX016X623SpNT0InJLSEOt0tow5S5cTpt9MUn74e%2Bo%2BvBEVfFsfh6N6H1ESuJsveZC6O1qN1McZp5dXu9NxXmCx8blljX8eCtto4A%2FMxEBhk31ejO7HPgeKF0hoDaQ7Hh7wGIr9oxo1Ye2UFXR9MQ8bz3XxPyz926usUJkZ%2FDXDMa4cK4y&X-Amz-Signature=34351b40d278a60af2fb457ea603f125bfdda54a463c006724d53915bf64b6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJ4VD2U%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaPVBqNdbP4IIm4quCRX9pFmf1sqTQtZUE%2B3gnGf3zlAiEA9ftM2TGkgx2mrskqGqueSrtcNroL%2B4j%2B2zqcZg%2Fn5uwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvTTw4T0zDvdZSp%2FircA0FkpHD8y5I2vU9yGPgCAAn2QqUVxebK4PYbDbSp9thDD0iQS%2FV%2BapGZ4j8AhibbzZBWjaKPpXrgDLiZYPm0AamIUotL1nfb8rpjOWqcAgPddSqcqFboqcsfS1qmiS1Cde%2By8lbW9nn1MdKqv1i7PR4onP0hGs0BP18wF9gbJ%2Bk%2FvVNC4Oj1qhghFyXSlISBgoxdYoUF0wK5cq7h8upj73ZV%2FJWx35B05sTx%2F5etpSnSC%2FdPTahHxY5jJN4txnXfRBssRAYueNgNQVFy00bzqV94mQWUO%2FWF3XnX2LrC95J95mN%2FkJ6MGYXiDzegD%2BKsAKPHf7ukytxUygsm3EAxGaYamq0subUtGnMIAjSPLXiZfhR8fO8jobRPtJw6DJ2v5bLqa5sq5KJ64273WhWzvx23udUQRPgaHBLA9PGnubmrAqwhPOp6shpiWjdPnB5s%2FzTdDYiobqCfCiVhA59LdfrRU6yqBb%2FnOJphD5rMO76eU1WnN%2BNBulDmGC%2FPI3XMibz15Ll8iJ1CyUL99N9LjFLiE03nRhtsOwDniY%2B2TEtyDnQZP6KTY7aWg17WOHUk3MO6Mtv7hNgfvzB6mrIiq9sLyuBLhhsj8tcWd%2Fg6ASFb9neL4PAeImt%2Fhk%2BIMP7n370GOqUBX7exvclSA9gk2N4hrKm%2F8Ohuo5jVRk%2BH3ilzaMu0MTjX016X623SpNT0InJLSEOt0tow5S5cTpt9MUn74e%2Bo%2BvBEVfFsfh6N6H1ESuJsveZC6O1qN1McZp5dXu9NxXmCx8blljX8eCtto4A%2FMxEBhk31ejO7HPgeKF0hoDaQ7Hh7wGIr9oxo1Ye2UFXR9MQ8bz3XxPyz926usUJkZ%2FDXDMa4cK4y&X-Amz-Signature=387f6c20c35148b775bb75cf7d5707612f4c345bf83b8bbbfba9404bc32507f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
