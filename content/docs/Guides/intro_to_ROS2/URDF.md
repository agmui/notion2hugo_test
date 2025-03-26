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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXE23M7S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNqG7erB%2F0sdDvUhFawoKzFif5NekxcI0fvL9pZ%2FqCAAiEAtD2GR60nGqTbDGbMMuml2%2B5kUEwM9IVo5pCQXy75YHsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGvk%2F%2FbrlhaDbFqJ5SrcAwla4j41ShTrG8mNIZDQdQ7nL91jpKMRFSxrJi6xJX0%2F9%2FFe1ELs1WZRYNErbAAt2081NCxggiQ0fodiChOvrLSf4NwmfWzwW1ekIIHxkYkE3ZkevD9Br94%2BPu8bGnCiyNszvaofCaEdAUS5kDHfD%2Bthu4jtRAC8F99s39e2Aeh%2F3Kw3RaojOyYfJ7cVfh4PkK4nk%2BPVKKlnRS9FpsdsKgr%2Fyt9mY85SPEHNhkjl5C6THsfwZ0RlhGN3aqm8DgJGufuhMZxha0o0N8dgkaZPxz0%2Bgit9s39yEUcD5eUb3mfurJZxuM%2FFMn1TWvSZibX58heK0cq3bRCLuHvvzO2oNVG3lV9otcMqEwNTzBb2N8MD5%2B%2FXwBEuXKGlZdK0%2BVCYHiqWu1eYKoMETgAw9XngQKplaaUWA%2FhitGo5QJlNt%2BICETSfk5FzbGlalL4lo4WrBIjhqGpRxmO1as%2BgjQJ4Bl%2FzWFYuRaGCZWEdcfx9K08p1%2FkDPwPF9QhIYSQXDLxzcPo2rJ6o6jYbcrbNxB2Rz%2FnrmttcKZk%2BRHa8QuAAkfu7OTHACWEy0SYLSQrry%2F%2FQ0sy4Y4ro0nqJHFjg0tpTnMsWhipGpwtPzrQriEyJ%2Fj678%2BO6F%2FM1Pmd8mj6JMLvTkb8GOqUB%2Br%2Fb1ogmSkoDKgkDujTCZPjNvFKZJDTG2UKGDJa3gtYyeCObT%2BRQjvO%2FPc3kyYjX5946fgNsBv%2F6oeYOwvRaECvAXtzokK1kUUtDu5o1dWg0DbHGJraZ3J0bc1mYhPQl%2FW24UjxtZ4RtBjDMmhIs9DZjKCG48F0TGy9awzn3cPGlD3QR496EqyAgQxPHBCO0j%2Fch%2F9Vw9KEtTkGmv3M4ATMrY%2F9f&X-Amz-Signature=f203cd659e0dce52008dfe9aae4eaa429f520d2c6757622193749a83701e271f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXE23M7S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNqG7erB%2F0sdDvUhFawoKzFif5NekxcI0fvL9pZ%2FqCAAiEAtD2GR60nGqTbDGbMMuml2%2B5kUEwM9IVo5pCQXy75YHsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGvk%2F%2FbrlhaDbFqJ5SrcAwla4j41ShTrG8mNIZDQdQ7nL91jpKMRFSxrJi6xJX0%2F9%2FFe1ELs1WZRYNErbAAt2081NCxggiQ0fodiChOvrLSf4NwmfWzwW1ekIIHxkYkE3ZkevD9Br94%2BPu8bGnCiyNszvaofCaEdAUS5kDHfD%2Bthu4jtRAC8F99s39e2Aeh%2F3Kw3RaojOyYfJ7cVfh4PkK4nk%2BPVKKlnRS9FpsdsKgr%2Fyt9mY85SPEHNhkjl5C6THsfwZ0RlhGN3aqm8DgJGufuhMZxha0o0N8dgkaZPxz0%2Bgit9s39yEUcD5eUb3mfurJZxuM%2FFMn1TWvSZibX58heK0cq3bRCLuHvvzO2oNVG3lV9otcMqEwNTzBb2N8MD5%2B%2FXwBEuXKGlZdK0%2BVCYHiqWu1eYKoMETgAw9XngQKplaaUWA%2FhitGo5QJlNt%2BICETSfk5FzbGlalL4lo4WrBIjhqGpRxmO1as%2BgjQJ4Bl%2FzWFYuRaGCZWEdcfx9K08p1%2FkDPwPF9QhIYSQXDLxzcPo2rJ6o6jYbcrbNxB2Rz%2FnrmttcKZk%2BRHa8QuAAkfu7OTHACWEy0SYLSQrry%2F%2FQ0sy4Y4ro0nqJHFjg0tpTnMsWhipGpwtPzrQriEyJ%2Fj678%2BO6F%2FM1Pmd8mj6JMLvTkb8GOqUB%2Br%2Fb1ogmSkoDKgkDujTCZPjNvFKZJDTG2UKGDJa3gtYyeCObT%2BRQjvO%2FPc3kyYjX5946fgNsBv%2F6oeYOwvRaECvAXtzokK1kUUtDu5o1dWg0DbHGJraZ3J0bc1mYhPQl%2FW24UjxtZ4RtBjDMmhIs9DZjKCG48F0TGy9awzn3cPGlD3QR496EqyAgQxPHBCO0j%2Fch%2F9Vw9KEtTkGmv3M4ATMrY%2F9f&X-Amz-Signature=13ed0e016e3ba416f3ef8edae135f36930e1f17ef5b659782c9b5b94db226fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
