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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFTRYGN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2oeuxT%2B6K4jgZ0BdPNHLOPfka4JISpGaCY9gZ22iVVAiEA5JWYTDLo4GZ04Uzm3yqtGSplRbKlob1FqrlTrLTf6ggq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOyT04ZQTCPFzimqOSrcA6z8mJLyi8%2FrHRoWUljI8nkP5oYnqWRB1QGNHwjza8znaU9vDKdMg5uxPIi%2BT%2FdVkCrcWgPICty7QZ1FJa857uZxbzKbocPQwoHfjFvo%2BnUUzAB1AGIatuUPiMc8kROUs9U%2BQYXnIXdW5vbMBMoTxLLP234xcCdLCXym%2F1oNcsMkhjOf7NbXHD2SJx5lhKjdlGMqjZ%2Fx%2Bt2IWBoRdcLZDXjwOU6pw%2FNq%2F%2FSVreRHY2Y9qDZDTQ5ZTd9PnqWfMC8AAy%2FswaKE0O2Q7vQRMmNcXKI68GCsj%2BS7VtT86pu5ip6DjwGXX8lO4A1T0A2IyghiZqjKkN4VEgspFH33a6bBpjoK53NyCQXFTV6at0b6wzEG7x7kxqpAPGirVK0bRk9OQrH0rONebqee%2F83iJQb5BNcEnMzzZQdxgJhLmr90tG2dSYGoXklFXsLHrE9K%2FC7QZeue4Eh4OANMXFeMywgEV3K860xMoOYh1sM1kptxjOODmrMhDDMbY7octRgr6TvRm6qgNp8%2BUTxkYYnB8HCQLsGp1upDHUhFXholg16yIQZdb4er7ARZVg5ZcYrdyKWfGJJp1sGxFt5MoI7KpNwLh8vZ%2Br8Bi7HBxUxXx%2Buw5PnTKEul8tbMGAwFcodGMKqv%2FMIGOqUBZNLKLpQUmfUOeIPBx4Q6069ocBSlJyoFYBUywC1Mc8RNCb2ja5q1xi01iPJZojJsedg%2FRhUwEuJOwMS0DIhzxaJ3%2FTPOG4Pzn83S0MUkiKk6WAsFEaSraBU8hoCKlvYBYlNXZVK64yAXoBTE6rthqpbr%2BBE7ly6PeFYB0DY%2FAw00XMvcdXSnUjeKbLLdtli7N9BZ8UHZZvmWg4Qkg6mGW0ZAYuOC&X-Amz-Signature=808ad395dd21386bcf92303c08a269a23f5bc4858260f898bb8249c2195f055c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFTRYGN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2oeuxT%2B6K4jgZ0BdPNHLOPfka4JISpGaCY9gZ22iVVAiEA5JWYTDLo4GZ04Uzm3yqtGSplRbKlob1FqrlTrLTf6ggq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOyT04ZQTCPFzimqOSrcA6z8mJLyi8%2FrHRoWUljI8nkP5oYnqWRB1QGNHwjza8znaU9vDKdMg5uxPIi%2BT%2FdVkCrcWgPICty7QZ1FJa857uZxbzKbocPQwoHfjFvo%2BnUUzAB1AGIatuUPiMc8kROUs9U%2BQYXnIXdW5vbMBMoTxLLP234xcCdLCXym%2F1oNcsMkhjOf7NbXHD2SJx5lhKjdlGMqjZ%2Fx%2Bt2IWBoRdcLZDXjwOU6pw%2FNq%2F%2FSVreRHY2Y9qDZDTQ5ZTd9PnqWfMC8AAy%2FswaKE0O2Q7vQRMmNcXKI68GCsj%2BS7VtT86pu5ip6DjwGXX8lO4A1T0A2IyghiZqjKkN4VEgspFH33a6bBpjoK53NyCQXFTV6at0b6wzEG7x7kxqpAPGirVK0bRk9OQrH0rONebqee%2F83iJQb5BNcEnMzzZQdxgJhLmr90tG2dSYGoXklFXsLHrE9K%2FC7QZeue4Eh4OANMXFeMywgEV3K860xMoOYh1sM1kptxjOODmrMhDDMbY7octRgr6TvRm6qgNp8%2BUTxkYYnB8HCQLsGp1upDHUhFXholg16yIQZdb4er7ARZVg5ZcYrdyKWfGJJp1sGxFt5MoI7KpNwLh8vZ%2Br8Bi7HBxUxXx%2Buw5PnTKEul8tbMGAwFcodGMKqv%2FMIGOqUBZNLKLpQUmfUOeIPBx4Q6069ocBSlJyoFYBUywC1Mc8RNCb2ja5q1xi01iPJZojJsedg%2FRhUwEuJOwMS0DIhzxaJ3%2FTPOG4Pzn83S0MUkiKk6WAsFEaSraBU8hoCKlvYBYlNXZVK64yAXoBTE6rthqpbr%2BBE7ly6PeFYB0DY%2FAw00XMvcdXSnUjeKbLLdtli7N9BZ8UHZZvmWg4Qkg6mGW0ZAYuOC&X-Amz-Signature=d4292004861ffbb83f9ddfc16180940e7c2a77a47ee1cfd8c9bf132daf8c5886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
