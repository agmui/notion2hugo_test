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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NXCKFB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZNVEblMdDaVzetNWXEjFzqYfZ8ks2RL2Ntc6Kvas7fAiB7ruO7ymA7XV1Dx1m667N8HqMmmFtik%2FYS%2FBh2dTyAyCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMOzA7MB%2B3J03l68%2BoKtwD5Gg2URDOesv1GG0B0l6N9Jz6w3FBP2FkM355Ah2xDyeIVjulmtx36RAbDk25fjmpp57SEmNb39JvOKVpUPDNC3TVTxmg8MPch54XO64fCN46yPrwzvlGv2bp3EqmcBIOK9e1TfsAux1i5QzTTia5mVq2GT0S6aWbPfKHfTzWMmm6IbB1JMdm2nyfvMnXAmfkUXrK9MPFJAEYOsrWF%2BkGOZAUNH1ySUoIRhoXOJvx8QpcASVd372ixYtd9oN%2BmJH1%2BYCmkSZugdoytVSCCI56O%2FZoWfo%2F2D3MYLce5FmH5rEqLf3qI7dIibDlhjnqx9u1u8B2zpMKD0SKeG2elPIpdY0MCjLE1vbgPx7hpBzeGMJoTgARmQC%2F9MY7xfwDeFRGi4AXQN%2B1topZl%2FOWQUS4nUq%2B%2F7qkO6Ke6DonDJw%2B3icOn9ks4V3WcfYgW4FwXXG6S7v%2Fyb9md0VLZqaIzAQvfen0RSXPkWiDyQ6K8j3r2gYqJvN4s5waQp2xRItsTEXq%2BHwMcmjQXtVNA2jIebQOkYFVI%2BwD20OPeHi6lkCGJElBBqI1ORhGIz9JarKK5wT07mMuqyKvXibrvy9HnDKxZ%2BJ4ac7pgo%2BQINkZS3fC8tBBfRbf%2BQusakok6wIw%2FpeMvwY6pgGQImmuGErT%2FUO7Lh6RLrteBPdh6yiwbsuezcd3Aru3yq0Y5jWcl4vuWWcjk30tq8ZjRRNlbUSqcj%2FOkMVxh2cnTYijbO096I7oC5SWsrfZANleX%2F0WNpS9JzIuwAWjrDzXoqV%2B7sIR3Ql4UDAwp6CVNqQwRkuwNG3Lka48Mo4n8pixxfl7goUc4iZ8xmM%2BfZJcQFXdMbcm1z9TIVyrJleFIyduPvrG&X-Amz-Signature=13756c64fccc8ba1c6ca59deca8ae9f82e57e0622067606a28449574759e3d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NXCKFB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZNVEblMdDaVzetNWXEjFzqYfZ8ks2RL2Ntc6Kvas7fAiB7ruO7ymA7XV1Dx1m667N8HqMmmFtik%2FYS%2FBh2dTyAyCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMOzA7MB%2B3J03l68%2BoKtwD5Gg2URDOesv1GG0B0l6N9Jz6w3FBP2FkM355Ah2xDyeIVjulmtx36RAbDk25fjmpp57SEmNb39JvOKVpUPDNC3TVTxmg8MPch54XO64fCN46yPrwzvlGv2bp3EqmcBIOK9e1TfsAux1i5QzTTia5mVq2GT0S6aWbPfKHfTzWMmm6IbB1JMdm2nyfvMnXAmfkUXrK9MPFJAEYOsrWF%2BkGOZAUNH1ySUoIRhoXOJvx8QpcASVd372ixYtd9oN%2BmJH1%2BYCmkSZugdoytVSCCI56O%2FZoWfo%2F2D3MYLce5FmH5rEqLf3qI7dIibDlhjnqx9u1u8B2zpMKD0SKeG2elPIpdY0MCjLE1vbgPx7hpBzeGMJoTgARmQC%2F9MY7xfwDeFRGi4AXQN%2B1topZl%2FOWQUS4nUq%2B%2F7qkO6Ke6DonDJw%2B3icOn9ks4V3WcfYgW4FwXXG6S7v%2Fyb9md0VLZqaIzAQvfen0RSXPkWiDyQ6K8j3r2gYqJvN4s5waQp2xRItsTEXq%2BHwMcmjQXtVNA2jIebQOkYFVI%2BwD20OPeHi6lkCGJElBBqI1ORhGIz9JarKK5wT07mMuqyKvXibrvy9HnDKxZ%2BJ4ac7pgo%2BQINkZS3fC8tBBfRbf%2BQusakok6wIw%2FpeMvwY6pgGQImmuGErT%2FUO7Lh6RLrteBPdh6yiwbsuezcd3Aru3yq0Y5jWcl4vuWWcjk30tq8ZjRRNlbUSqcj%2FOkMVxh2cnTYijbO096I7oC5SWsrfZANleX%2F0WNpS9JzIuwAWjrDzXoqV%2B7sIR3Ql4UDAwp6CVNqQwRkuwNG3Lka48Mo4n8pixxfl7goUc4iZ8xmM%2BfZJcQFXdMbcm1z9TIVyrJleFIyduPvrG&X-Amz-Signature=cf7009e4f043ed586dfa83e2c40d55dfd6c6df39f4dbd6f10054166b75389cb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
