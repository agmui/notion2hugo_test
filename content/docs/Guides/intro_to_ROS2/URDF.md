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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3WXYCG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb04%2FXWQVIrCOJG65rDFHqFEv%2FFsnt0Sg%2FKlaUhCJ1CQIgOx7hh69f1w1%2BWNi%2Fvie2nddIYKI%2B3hnxXNI%2F82CPkcgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFZr5Dfk%2BIhhX647DyrcA8YvRyxbKhHJButEGAt%2F8%2BFpfObFv4o6f55LIH0yreYLVY0fWwBlVYZGYo4wMTqc83vMXWaad%2BQWOexxzKK%2B%2Fqox3fp8nZ7tugrKUbcy2rxcKdl7NwfNGUonSoHxcG76mCo51fnBHQUNI6nZbsjZ1qaCTr4gOsMSR5bNq88P4u5qPSTa%2Fyina%2FBGCrUux03%2F7C1VT6x1e70LZq6ZTOrj3FL5m4aDOm3M0KIZer5197DLf3QPDUHuQCZ7x2s%2BcBYqdRvKUYFK2%2BjcNwg52%2FD7F1%2FjKRbOuTAp45IFNxXuvToW6ygW7WKw%2BUZa6pLjGOuMeyh5zXBKJkVPGUC475YHu5n%2F%2B9lnxJXiGvub22nuGHdb%2FMZXMMbjZD7lxaBzIlBCe0D44ABIlRzDP9j%2Byqa7z4YO51xjzsH9yKT7H%2FaMZASfjGbqAGmJs2q9Fw4ZYG6EVU3TD%2BvYWU3FpcJpcK%2BKNwNxsUL0zrb5ZSLl8ps3QJGQCITMmmStHH1L%2BQ6HsWUMCkK4ZL4vIeDH83K33GPNx4nO3lEp6NNtbl34jKZEY%2BrOd1L8mF5PpT2R3LosKpSRisp%2FGeX9XzG4s8vXYo6wmo77adoNm%2FXLtmjfbyQcD5E7%2BDR6EnWXST3gOoIrMN74pcEGOqUB4XoamDE7ompLvpvmwO3c0zhi%2Ff5znUpUI21nC5TcFbXxGWK2nClXubrFfh8uvEPERxpCb6qKDkcF9fG80B2%2BKrtzlYWJhKdrNfWvoTBrdZn%2F1kXJuq0%2Bj1jjkVhQtMNu4cPQl%2Fyy3z4KtcrSd5eXisZcH2LosoBTVT5anAaF4ep7JZgaoWC8SJYwEoGFeYnooo4TRyNLgq0uvAw51fiRKvE17ziJ&X-Amz-Signature=ed01fb9dd4e76006c30527553dd4a230d4dae93f605fbe9dd7d18c00e6f0f447&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB3WXYCG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb04%2FXWQVIrCOJG65rDFHqFEv%2FFsnt0Sg%2FKlaUhCJ1CQIgOx7hh69f1w1%2BWNi%2Fvie2nddIYKI%2B3hnxXNI%2F82CPkcgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFZr5Dfk%2BIhhX647DyrcA8YvRyxbKhHJButEGAt%2F8%2BFpfObFv4o6f55LIH0yreYLVY0fWwBlVYZGYo4wMTqc83vMXWaad%2BQWOexxzKK%2B%2Fqox3fp8nZ7tugrKUbcy2rxcKdl7NwfNGUonSoHxcG76mCo51fnBHQUNI6nZbsjZ1qaCTr4gOsMSR5bNq88P4u5qPSTa%2Fyina%2FBGCrUux03%2F7C1VT6x1e70LZq6ZTOrj3FL5m4aDOm3M0KIZer5197DLf3QPDUHuQCZ7x2s%2BcBYqdRvKUYFK2%2BjcNwg52%2FD7F1%2FjKRbOuTAp45IFNxXuvToW6ygW7WKw%2BUZa6pLjGOuMeyh5zXBKJkVPGUC475YHu5n%2F%2B9lnxJXiGvub22nuGHdb%2FMZXMMbjZD7lxaBzIlBCe0D44ABIlRzDP9j%2Byqa7z4YO51xjzsH9yKT7H%2FaMZASfjGbqAGmJs2q9Fw4ZYG6EVU3TD%2BvYWU3FpcJpcK%2BKNwNxsUL0zrb5ZSLl8ps3QJGQCITMmmStHH1L%2BQ6HsWUMCkK4ZL4vIeDH83K33GPNx4nO3lEp6NNtbl34jKZEY%2BrOd1L8mF5PpT2R3LosKpSRisp%2FGeX9XzG4s8vXYo6wmo77adoNm%2FXLtmjfbyQcD5E7%2BDR6EnWXST3gOoIrMN74pcEGOqUB4XoamDE7ompLvpvmwO3c0zhi%2Ff5znUpUI21nC5TcFbXxGWK2nClXubrFfh8uvEPERxpCb6qKDkcF9fG80B2%2BKrtzlYWJhKdrNfWvoTBrdZn%2F1kXJuq0%2Bj1jjkVhQtMNu4cPQl%2Fyy3z4KtcrSd5eXisZcH2LosoBTVT5anAaF4ep7JZgaoWC8SJYwEoGFeYnooo4TRyNLgq0uvAw51fiRKvE17ziJ&X-Amz-Signature=22e2552e1ba7f804ea295178c31acc6f5fe8126a912239a60712022623365849&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
