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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVVMBWZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEklL96kRkS7LAGxfoa7oN4gEcZ%2FOFFGwKgWhYjlW9YIAiEA2BceY%2Fx7D3ux%2BPSChlAQdWxsZM%2FHpliYorS9RWYt%2Br0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdjvILP3d4gKjm96SrcA3Si3RZB3EJH8zU866F3KbwSklDao3BjA2Gz8JRp3SWdQRvMen9DpBDsADjzMr75EwOqdXuObNY%2FMWDzVN%2BBQkQ%2Bru%2B7Tq%2FbPARwZPRYqCe%2FoIiPO4xpp%2B87Bs6UMon1xSSRxADGoGjxQZYrx2xfeMc57Ts41i3lk5wOAWLzyPEdrFipTRx3qhUpa40DeyeSmX55YJkFHsDM1e8yra59Du%2BbfGS69awrzQ8KPYY645%2FJPWAUu9mGdusaXXA%2FgTaxYSyhDLMVd3Tl4p0gTV1wyA38%2BeGKXyRLwuXc8ohzT1GwVY9iC066CRvc9b7ZHpzPoQyOYx%2BzalkA%2FHP0j%2FchSsbJrwfv7Q%2FTAvDjB44DB6Ow895MKrK3iE%2FO4b8ilevdgTc5%2BQytIVnJu0oqhzOGJU%2FPidTUptQa24g9IN5VPJV2zAyJsTuIpIorUP0YeUwh7jkFet%2BqNAu4mHqoOBD6lhqMO6M8VmEYKxBz7RlT01F2PE21v3jtVkYnxc5zuDaXfKG3wmUza0XjqQfodK0GGl8Xg8z1wcmKI3E4knop3X8eAKa5LDq2perjdVjPDxfDJE1kdFlTOspTTHUxaJlZGb1bxNEouBX3eXtxem80ozwu5W%2FplCEfiGXdEH%2F3MKH8xL4GOqUBEP758tQOOoXMcj5G1DM7GWkA3cxAWVyMclOrOLHu1KRaDNr58kkTmm5BFdh7X6ZMNSOti81NF%2B5WWPcxgZEioWNlMFf%2Fz9p6%2BHQZ%2FXPdMEQ7JeAPqFyFR8hLXFqHVxfFtKdNXZ7ZdzhXH2OyOre4PGbP4fD9VpOOfKOvAGbceNRI5qiUrLOZSZ4RbEhyORb6K5OeUSeNTj4qO7Ko3P5xCLN6PihR&X-Amz-Signature=f350ce8fb3ba4d0e1b9a5df8db1b365d684887198cb3ced6006747fd61368003&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVVMBWZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEklL96kRkS7LAGxfoa7oN4gEcZ%2FOFFGwKgWhYjlW9YIAiEA2BceY%2Fx7D3ux%2BPSChlAQdWxsZM%2FHpliYorS9RWYt%2Br0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdjvILP3d4gKjm96SrcA3Si3RZB3EJH8zU866F3KbwSklDao3BjA2Gz8JRp3SWdQRvMen9DpBDsADjzMr75EwOqdXuObNY%2FMWDzVN%2BBQkQ%2Bru%2B7Tq%2FbPARwZPRYqCe%2FoIiPO4xpp%2B87Bs6UMon1xSSRxADGoGjxQZYrx2xfeMc57Ts41i3lk5wOAWLzyPEdrFipTRx3qhUpa40DeyeSmX55YJkFHsDM1e8yra59Du%2BbfGS69awrzQ8KPYY645%2FJPWAUu9mGdusaXXA%2FgTaxYSyhDLMVd3Tl4p0gTV1wyA38%2BeGKXyRLwuXc8ohzT1GwVY9iC066CRvc9b7ZHpzPoQyOYx%2BzalkA%2FHP0j%2FchSsbJrwfv7Q%2FTAvDjB44DB6Ow895MKrK3iE%2FO4b8ilevdgTc5%2BQytIVnJu0oqhzOGJU%2FPidTUptQa24g9IN5VPJV2zAyJsTuIpIorUP0YeUwh7jkFet%2BqNAu4mHqoOBD6lhqMO6M8VmEYKxBz7RlT01F2PE21v3jtVkYnxc5zuDaXfKG3wmUza0XjqQfodK0GGl8Xg8z1wcmKI3E4knop3X8eAKa5LDq2perjdVjPDxfDJE1kdFlTOspTTHUxaJlZGb1bxNEouBX3eXtxem80ozwu5W%2FplCEfiGXdEH%2F3MKH8xL4GOqUBEP758tQOOoXMcj5G1DM7GWkA3cxAWVyMclOrOLHu1KRaDNr58kkTmm5BFdh7X6ZMNSOti81NF%2B5WWPcxgZEioWNlMFf%2Fz9p6%2BHQZ%2FXPdMEQ7JeAPqFyFR8hLXFqHVxfFtKdNXZ7ZdzhXH2OyOre4PGbP4fD9VpOOfKOvAGbceNRI5qiUrLOZSZ4RbEhyORb6K5OeUSeNTj4qO7Ko3P5xCLN6PihR&X-Amz-Signature=396a0c84564a22b16d60023f516474a6fb635cdb634583ee9efb030582e3f3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
