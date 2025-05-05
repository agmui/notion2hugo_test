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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZDMRWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCLpjHiaaoSSJ%2FjNBol%2BTfbImkPClVgWKFwzei3CI89ZQIhAP78F2Uz6BfzyBfP%2FxLruXBrlDXmT0wN5p5eEa6EkOfAKv8DCCIQABoMNjM3NDIzMTgzODA1IgzOb%2BfGzcgXhs%2FuC3cq3AOPVAZFfENOaxtVIiC7k0YAw57TFrz6bByI5uqeTVj4OI2KnCqTouqgU%2BB9CWMecATvh983A0n3OvGXKtZFbzGnoNNy1ypAPUds0Hn49%2BeIonQ6EzTHdHd%2Blt0Y%2Bhs3msdWc06FwI5NqO3P2yiTrdSFQgspb3FhFC8uFBiGaSmcGSx%2FMmBnvgwYlg9XylNVDjACV4cZfbotub7BNX269QU0l8TjdwcATDPcSrMpDIuA1siKwVJIG3asiG%2FjHDa%2B9j2ZBLLLk9HYGrGAO7i38YB9LKUO9KQoWVq8YhnaNVechbl%2FXxtzIP%2FP0wximNqU15i%2BANckf0XwxV7uoBXwvLj8opqZ0rM0XPwK%2FZDdT%2FIUNAFglsog942vfpD7affozrbiTXux6TLGBOc1K%2BObRjYnhaf6SIYdySQNntb4if4vxr87qDHrHOmZAmFrjge6AbzHmYs3xu6X5ipqPZfRLPO0lgWXAuh8Z9a42NT8dE4zVcuandxg5Z5pivPnxFELifjdFzH4WSF4wtd7H%2BxbBz7kStiaeYjSSg4uJjVRsaDjoakDS9m8EjJi6WYHtb3IiFsLQuu7PQlu886xDVxmKs35ODmExnAIefq8ZUJH2uorN7qAz%2Br7Ja2dOW6ziTDvjeDABjqkAdplqtPviDzW8iWSIj1v96HGgQTTLPtfQj3l2mZexsFZUbKQ4YGjj02CnBPn4aBtotB0EkMtfydJJtI0bNLWYgA%2B0WPfKGQhM89fyokwvweQ8xhZ5AKmWNJ22UaVg8956AkXSFoDu%2F50MymLy4FvhTY%2BLtI5hExnXy3SEq0hy9Kn%2FrS9K8xmHr1KY4Tm3H3uTHCnSQvjX0dNlrH4RXdYX4QAPCc%2F&X-Amz-Signature=a07f390944ae35032a48e0939aac40782c357b4332f2da6ef5da525dff1409e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZDMRWH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCLpjHiaaoSSJ%2FjNBol%2BTfbImkPClVgWKFwzei3CI89ZQIhAP78F2Uz6BfzyBfP%2FxLruXBrlDXmT0wN5p5eEa6EkOfAKv8DCCIQABoMNjM3NDIzMTgzODA1IgzOb%2BfGzcgXhs%2FuC3cq3AOPVAZFfENOaxtVIiC7k0YAw57TFrz6bByI5uqeTVj4OI2KnCqTouqgU%2BB9CWMecATvh983A0n3OvGXKtZFbzGnoNNy1ypAPUds0Hn49%2BeIonQ6EzTHdHd%2Blt0Y%2Bhs3msdWc06FwI5NqO3P2yiTrdSFQgspb3FhFC8uFBiGaSmcGSx%2FMmBnvgwYlg9XylNVDjACV4cZfbotub7BNX269QU0l8TjdwcATDPcSrMpDIuA1siKwVJIG3asiG%2FjHDa%2B9j2ZBLLLk9HYGrGAO7i38YB9LKUO9KQoWVq8YhnaNVechbl%2FXxtzIP%2FP0wximNqU15i%2BANckf0XwxV7uoBXwvLj8opqZ0rM0XPwK%2FZDdT%2FIUNAFglsog942vfpD7affozrbiTXux6TLGBOc1K%2BObRjYnhaf6SIYdySQNntb4if4vxr87qDHrHOmZAmFrjge6AbzHmYs3xu6X5ipqPZfRLPO0lgWXAuh8Z9a42NT8dE4zVcuandxg5Z5pivPnxFELifjdFzH4WSF4wtd7H%2BxbBz7kStiaeYjSSg4uJjVRsaDjoakDS9m8EjJi6WYHtb3IiFsLQuu7PQlu886xDVxmKs35ODmExnAIefq8ZUJH2uorN7qAz%2Br7Ja2dOW6ziTDvjeDABjqkAdplqtPviDzW8iWSIj1v96HGgQTTLPtfQj3l2mZexsFZUbKQ4YGjj02CnBPn4aBtotB0EkMtfydJJtI0bNLWYgA%2B0WPfKGQhM89fyokwvweQ8xhZ5AKmWNJ22UaVg8956AkXSFoDu%2F50MymLy4FvhTY%2BLtI5hExnXy3SEq0hy9Kn%2FrS9K8xmHr1KY4Tm3H3uTHCnSQvjX0dNlrH4RXdYX4QAPCc%2F&X-Amz-Signature=3242010537e4959bc8dc089567add6fd8e6fd2771e57322f09707de601237a80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
