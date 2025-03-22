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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3SBWUH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIE%2B1g3DchQamGF3pGzlW6AGO74Upd92I0ZlCHephdZ1SAiBh8kprEN8dUZrSN9GvttFjEmgYcAP7lR9jGDm3Hwk07SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9mPvJMFn7Lw2buFKtwDNEdBYidpZ%2B4RE6KmM9BQGcGEIuJJBq5b%2FVvchBI6GSZyh0SzuUrcVZvwtSHzQfw%2F%2ByGtOgsSu%2BCUOIg3ajj8Gj2qKGgE92VQpaZQCtTY9vkHdlaRdCAbQybiU7ToxUouzDgyLZC8KfgElSxBJk8LzjLZrfu0DyLLVRKo4cZn1dN%2FnCsodWHa6k6uARhCPTOc92gt%2BIAgD2Y4QyYMSug%2F0d2C9So6invrO%2F82aYv6OW2%2Fy8yJpzPXDixBS5mDUYkaY8lBDwCllOXaktMI6PAq1fuwlNUBT96q8T2YUS52nDI8b8afocrbzJzhBgExkb68uKLQT70tcB%2FnKAh6MWBY7MU1QzXtymbqBEiQqAeR8171qtHfN53rL9gklaN1meymZqBwsDTcaX4qtRbgpk7nepinTDpb%2FnpStMqcECwT8MIXsjq%2FnMSUs4n2S%2Bu17bKBvw8G0KOo%2BeBFhKmJTu%2FaMpNqNYTjWyOhYgbxecDu5VMxeoAX5cJUcBo1i0fc8FNdedE3vISFRUQgu%2FmxJKcpVNQyY90uX5bsmw6%2B7CZ8amHCa495WYjBoXm50V%2BW4O0txYdetR3YC8JtRROtuY6rAvMppEsM7xhGV3x%2Fbp02uJj3UsU6zxvtiGlz7www54v5vgY6pgGYk6bfhH3gTICIc1NNBcFIypc%2Bh55H0EcFg8XMuVKGIoXPtWOM4Fwb%2BR%2FnblXtmOoj4Cu0Usz5SWiorZ93%2F7Vl4QcuGU9lK%2FCjTjqrwF9jYBxON2L8V0fdjHx23VOxjpmAFnLIjzZ0m%2FQIR%2FIvOihiDmO%2FKK7CDIhwWdX12fi%2B%2Bd9SSW3lavMprZuj%2B%2BW6qBNPLQq9SWKhoQY8iOeIDRhA4ey1UcJ8&X-Amz-Signature=e9019dd84a71d7623de3522f92a18deabe18c079f84afb2877418fe1da17f35b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y3SBWUH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIE%2B1g3DchQamGF3pGzlW6AGO74Upd92I0ZlCHephdZ1SAiBh8kprEN8dUZrSN9GvttFjEmgYcAP7lR9jGDm3Hwk07SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF9mPvJMFn7Lw2buFKtwDNEdBYidpZ%2B4RE6KmM9BQGcGEIuJJBq5b%2FVvchBI6GSZyh0SzuUrcVZvwtSHzQfw%2F%2ByGtOgsSu%2BCUOIg3ajj8Gj2qKGgE92VQpaZQCtTY9vkHdlaRdCAbQybiU7ToxUouzDgyLZC8KfgElSxBJk8LzjLZrfu0DyLLVRKo4cZn1dN%2FnCsodWHa6k6uARhCPTOc92gt%2BIAgD2Y4QyYMSug%2F0d2C9So6invrO%2F82aYv6OW2%2Fy8yJpzPXDixBS5mDUYkaY8lBDwCllOXaktMI6PAq1fuwlNUBT96q8T2YUS52nDI8b8afocrbzJzhBgExkb68uKLQT70tcB%2FnKAh6MWBY7MU1QzXtymbqBEiQqAeR8171qtHfN53rL9gklaN1meymZqBwsDTcaX4qtRbgpk7nepinTDpb%2FnpStMqcECwT8MIXsjq%2FnMSUs4n2S%2Bu17bKBvw8G0KOo%2BeBFhKmJTu%2FaMpNqNYTjWyOhYgbxecDu5VMxeoAX5cJUcBo1i0fc8FNdedE3vISFRUQgu%2FmxJKcpVNQyY90uX5bsmw6%2B7CZ8amHCa495WYjBoXm50V%2BW4O0txYdetR3YC8JtRROtuY6rAvMppEsM7xhGV3x%2Fbp02uJj3UsU6zxvtiGlz7www54v5vgY6pgGYk6bfhH3gTICIc1NNBcFIypc%2Bh55H0EcFg8XMuVKGIoXPtWOM4Fwb%2BR%2FnblXtmOoj4Cu0Usz5SWiorZ93%2F7Vl4QcuGU9lK%2FCjTjqrwF9jYBxON2L8V0fdjHx23VOxjpmAFnLIjzZ0m%2FQIR%2FIvOihiDmO%2FKK7CDIhwWdX12fi%2B%2Bd9SSW3lavMprZuj%2B%2BW6qBNPLQq9SWKhoQY8iOeIDRhA4ey1UcJ8&X-Amz-Signature=b6e4b8166d0b7492e7a292983aaf6a751dfe3743a5f0b10411771dcbc8f9d878&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
