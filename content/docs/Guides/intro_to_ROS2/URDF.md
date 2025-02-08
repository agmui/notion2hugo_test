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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO5OSV5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBbbYE0fgadV81PZ13y0GDoJjm2ZiXxULpMA8Zq0oV7MAiB%2Fs9o0%2BySUOJeMhc8YSEkybdw1c9UlTQNSTl7%2BLXLFWSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9WPxmgWoaWzYVcxKtwD6lLVVkbiby%2BvUQGhcv%2BOyWh08HrLFDpe7PUb%2Bj4cVaxNPK68dCWlCifPfNemkcxtE5NZ7k7%2F%2F7c752x%2Bm%2BJe9D9zj6ytcQcuhVOP9lNxIO3dlpzniyQy8esrZ0NW3KK0W6%2B%2Fbux91poJenCHjIH9t01EXvj2hZNrBYaG%2BzMiSSreoRQiG8hCLl4M32R7l%2FOD%2BsVpekYfIgvSpufrHLHl3dSk5yCwtxvXkucyfFi778NhUuPikqEViVfaXDffiy9SYK5gG4JBjPYES6Kq4PYTQbTHSD0TxfKjbD0l0YxOUbLYmoLa7RpiCryrruvoTOURqQHxXwVmdOLPDOI5JiACBwBgwzdOtaUnOqfqWO5%2FaO2gCP1hCp%2Fnjl0xYLxEw74NgqhGaDFYULvlCEwSxDKH5QFws3uMX5IRZLqJnjTUbn6MS6a6jJE1uYd9C1s8agf7tnLTRBt%2BtKIgqkt%2F3LTMRY2WR30Nm9rRNCUdpW7VoSfAgue9eWmf6JAPBz1MyD7SVY6T5WEjgv3lSi1TazkuWtbbC8FZ5sLB9R2XStz4NBZJ6%2FDsg9CSbI3lMPO1B%2F4zTdduOXaRNEbQ94XvJr2U6QDa7MxRBc4XWiCBcPod1JZSy6o%2BnUyFFrJ6BmAwooadvQY6pgH4Rj%2FXg2%2Bo8TV%2BTB6aoeHqNBpe9er7CZCIWh3bos%2FkOikew7gkcKAELrYB%2Bj%2B5I1eULxE3tZKX%2BX9Oy4pfhC8w8LOQ7NpRSa7z3wPzsrnO%2FoTVLTPple9Ub8LLi6ynV9ZeiVx44UQEjFa0fCjf2efmgPhwgVQKN8mpxG4XqL%2FN3rpCPX3IVWjphQPrYiPVVPG8KMPVdjCS1q69CgFD6i8Vz%2FYIrYGD&X-Amz-Signature=35f9e053de2f2eb6697db477a71e4606f569d3b327f12be0d24774cd9fa7ba84&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSO5OSV5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBbbYE0fgadV81PZ13y0GDoJjm2ZiXxULpMA8Zq0oV7MAiB%2Fs9o0%2BySUOJeMhc8YSEkybdw1c9UlTQNSTl7%2BLXLFWSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9WPxmgWoaWzYVcxKtwD6lLVVkbiby%2BvUQGhcv%2BOyWh08HrLFDpe7PUb%2Bj4cVaxNPK68dCWlCifPfNemkcxtE5NZ7k7%2F%2F7c752x%2Bm%2BJe9D9zj6ytcQcuhVOP9lNxIO3dlpzniyQy8esrZ0NW3KK0W6%2B%2Fbux91poJenCHjIH9t01EXvj2hZNrBYaG%2BzMiSSreoRQiG8hCLl4M32R7l%2FOD%2BsVpekYfIgvSpufrHLHl3dSk5yCwtxvXkucyfFi778NhUuPikqEViVfaXDffiy9SYK5gG4JBjPYES6Kq4PYTQbTHSD0TxfKjbD0l0YxOUbLYmoLa7RpiCryrruvoTOURqQHxXwVmdOLPDOI5JiACBwBgwzdOtaUnOqfqWO5%2FaO2gCP1hCp%2Fnjl0xYLxEw74NgqhGaDFYULvlCEwSxDKH5QFws3uMX5IRZLqJnjTUbn6MS6a6jJE1uYd9C1s8agf7tnLTRBt%2BtKIgqkt%2F3LTMRY2WR30Nm9rRNCUdpW7VoSfAgue9eWmf6JAPBz1MyD7SVY6T5WEjgv3lSi1TazkuWtbbC8FZ5sLB9R2XStz4NBZJ6%2FDsg9CSbI3lMPO1B%2F4zTdduOXaRNEbQ94XvJr2U6QDa7MxRBc4XWiCBcPod1JZSy6o%2BnUyFFrJ6BmAwooadvQY6pgH4Rj%2FXg2%2Bo8TV%2BTB6aoeHqNBpe9er7CZCIWh3bos%2FkOikew7gkcKAELrYB%2Bj%2B5I1eULxE3tZKX%2BX9Oy4pfhC8w8LOQ7NpRSa7z3wPzsrnO%2FoTVLTPple9Ub8LLi6ynV9ZeiVx44UQEjFa0fCjf2efmgPhwgVQKN8mpxG4XqL%2FN3rpCPX3IVWjphQPrYiPVVPG8KMPVdjCS1q69CgFD6i8Vz%2FYIrYGD&X-Amz-Signature=e2d77c58641ce1a9c5d89da50158eeeebb71d16b89e9718e811d3b4716581265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
