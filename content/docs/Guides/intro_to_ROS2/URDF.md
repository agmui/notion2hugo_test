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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662K6VXAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpCyzeyZqe20RCQ4rLfPIbVyJyixOoA3FI0KsHYmij%2BAIhAPRI%2B1R0zUqiWnfOYEiVRGmFHIPJ%2B45sqAdbU3cZOQ4LKv8DCFYQABoMNjM3NDIzMTgzODA1Igwhk0d6AMF6fguDjFoq3ANogxF%2FRC%2B69jaFM6VpFkqqf7eJfQwgKi%2FfSKP%2Bxx6ULmb8pjzXWPQykRk1G90c%2F6qoYud6r3F7H4BwLRtjMwbz5OM%2F2bRC9FA%2BBOQKkW9nxrnIadJSMcn7WLbx7b9fbx01fwhLb3w9IFes6Xlql8NVygL8E%2B0S6XL21%2Br8aQgc226lm7e7j3Chw3Sc8Ta41uFqAe4OvbR1K9hZH6hXqGLA3NrwMHQb7ho7vlRGUKdSX%2FtM4%2FxYMDueJpVvUflFDKjYk4w60mOXzACn9H7ZuTDdyYrAF4Hu8802nqR93X6pM%2B4oDKrEVKTdkQBHK9ZF%2BGPUn0kkh0kDU3j3dMZZOEFv6SVXZ9l9YoS9m6Q%2BcNzK5hwjNRye650mon97VUqb%2B5PshuoUae1k1JDC%2Bu1V73zAXfWit6A35sAeN%2Fq7HTKruQ%2FrUZmnnufGqVSpjZhiriR%2F%2BeXl%2B879dd%2BTBpQU2BroAzQU8VSM%2BGMRtvOHa%2FF5uWQoNFWhD%2Bc6LSObQrVmr8uj%2FGj7BylGlApAZlqZKJnVD7n%2FDN9JJEjLEJG9kmjlajOBBjrCFkuF2nEByiL554ieNmxrvUOeVX4eNCkAaPWGGP%2BCmK70HpLem9vVKMIkHj3eMU3PRZKNoVOtHjD97LbABjqkAVPK5J2Vnp7UzEVR4cdopVqF70S2tw04ofa9DI0zo0wOJBREs6Kk%2B5KWim%2FengtoCPScqVNj6LnSiPYDijJr3QM8Pt26%2ByGDw%2B6sdJWayPcbp9FNizrxUIzUcZGsrAKROaxL%2FnPcedTbWheRBKG9oXwjmGNwlAkRLdfleoE5rvr3mbGYTw9Qr0TDL9Mq7CxVL4zbt7Ru%2F749LqRO6WGIMRYCpUjI&X-Amz-Signature=047133c34a1ee353f1e3c7b22162f8c17736b9021bad43f154dc87fcb56aaa27&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662K6VXAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpCyzeyZqe20RCQ4rLfPIbVyJyixOoA3FI0KsHYmij%2BAIhAPRI%2B1R0zUqiWnfOYEiVRGmFHIPJ%2B45sqAdbU3cZOQ4LKv8DCFYQABoMNjM3NDIzMTgzODA1Igwhk0d6AMF6fguDjFoq3ANogxF%2FRC%2B69jaFM6VpFkqqf7eJfQwgKi%2FfSKP%2Bxx6ULmb8pjzXWPQykRk1G90c%2F6qoYud6r3F7H4BwLRtjMwbz5OM%2F2bRC9FA%2BBOQKkW9nxrnIadJSMcn7WLbx7b9fbx01fwhLb3w9IFes6Xlql8NVygL8E%2B0S6XL21%2Br8aQgc226lm7e7j3Chw3Sc8Ta41uFqAe4OvbR1K9hZH6hXqGLA3NrwMHQb7ho7vlRGUKdSX%2FtM4%2FxYMDueJpVvUflFDKjYk4w60mOXzACn9H7ZuTDdyYrAF4Hu8802nqR93X6pM%2B4oDKrEVKTdkQBHK9ZF%2BGPUn0kkh0kDU3j3dMZZOEFv6SVXZ9l9YoS9m6Q%2BcNzK5hwjNRye650mon97VUqb%2B5PshuoUae1k1JDC%2Bu1V73zAXfWit6A35sAeN%2Fq7HTKruQ%2FrUZmnnufGqVSpjZhiriR%2F%2BeXl%2B879dd%2BTBpQU2BroAzQU8VSM%2BGMRtvOHa%2FF5uWQoNFWhD%2Bc6LSObQrVmr8uj%2FGj7BylGlApAZlqZKJnVD7n%2FDN9JJEjLEJG9kmjlajOBBjrCFkuF2nEByiL554ieNmxrvUOeVX4eNCkAaPWGGP%2BCmK70HpLem9vVKMIkHj3eMU3PRZKNoVOtHjD97LbABjqkAVPK5J2Vnp7UzEVR4cdopVqF70S2tw04ofa9DI0zo0wOJBREs6Kk%2B5KWim%2FengtoCPScqVNj6LnSiPYDijJr3QM8Pt26%2ByGDw%2B6sdJWayPcbp9FNizrxUIzUcZGsrAKROaxL%2FnPcedTbWheRBKG9oXwjmGNwlAkRLdfleoE5rvr3mbGYTw9Qr0TDL9Mq7CxVL4zbt7Ru%2F749LqRO6WGIMRYCpUjI&X-Amz-Signature=99c82d0a226a752b58aad36f20355318db5d5194b9352b4a33f7847e3f6594b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
