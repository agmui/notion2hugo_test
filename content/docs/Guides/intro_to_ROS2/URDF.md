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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTR77QG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDu%2FM%2FUXO9Ya5Z3ShRjqlQlDJ6wods0yp%2BHFYzQti2rtQIgIuCu53mqby5OveQqxTibYXyUfTvmaahUScMN3aaBPpkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9Uu1AMAFy%2B5UI3kCrcA3Cy8dB%2FKAyYhbey3OKWaYwo%2BVuo0yUz4nK26liD8NO83bAP681qkjGE2L4tmMJpN90t9h0mlNuR5QyHaHquhb0oZ5WjhrspJ6vrMnhgDAbN9l0BUOeZYFHksYbcNCZBxHfQR%2BdkfijFHh0Ol9hFDF0ucnkcVjibO57LsDGzvRrzXqQcHBQ2tEqL%2BDHNpYMs%2BxP%2Bto%2Fi2Xz29nxgLylnbWdErbsI5vCSIL1pd%2BTMnn6JXIqUESd2L4FqxPuiSJDtQtHAlYKBjeByvzxIEQ2Ym1kRIkoG6mCR8GoZlacrAtGzL6UOMMzSIPvirnJdI2mndiQbTaqfcVOP2eQvcM0bWnEHZEr%2Ft7M%2Fj2NBRxgnB6kxRWipeN70cjOUIVx9UNgarsQ3vFIW3oPE%2FuhihL8%2BtyKO1J4Q%2BUam%2BtZMu9Xqk6EO5wjTmtN006RBXV96RAP9SjjVhT9NtkygJ6HVjcYE3mHAPUxG89dCfwueNHgK7MeRdbdFfTD4VWuWTk%2BhTdAUgZ1OqHqNEt4CxwzfOIenRxH8IO93oyE5SnMrH3NrkSzdkx3%2F%2B1y%2FlAUvJh7u21hmKbBciwwangYvGG13GHkNLbeN7UQYFrv9qgEHSKAAR9TZwcZsLSkF6fFnZon5MJmsnr0GOqUB7O8Yyo8mxb7StfsMPLvuCnaQxJlDPuWc%2F3gP%2BFZPax74CoCx1BrjhnxWcy1%2FMSM3s8ub1c26lQLWkkZnL3tZCGAgF1z6iSy15BAOWTE7KvD86tBTXg3D9AYCgBzwxx16VcNbJxA0LCI8laVGZPQ0BgPyRuBWOvJ5tsJjomUCAw3tUm1WSOvL23m1vuwcuaoVvZVBA8PYyHnjWCnAkdu8xsLKu08N&X-Amz-Signature=b5ade67bec75f5f8ba96ce3a30abb3b5387a400a6511d3fffab43a537cd968a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVTR77QG%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDu%2FM%2FUXO9Ya5Z3ShRjqlQlDJ6wods0yp%2BHFYzQti2rtQIgIuCu53mqby5OveQqxTibYXyUfTvmaahUScMN3aaBPpkqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9Uu1AMAFy%2B5UI3kCrcA3Cy8dB%2FKAyYhbey3OKWaYwo%2BVuo0yUz4nK26liD8NO83bAP681qkjGE2L4tmMJpN90t9h0mlNuR5QyHaHquhb0oZ5WjhrspJ6vrMnhgDAbN9l0BUOeZYFHksYbcNCZBxHfQR%2BdkfijFHh0Ol9hFDF0ucnkcVjibO57LsDGzvRrzXqQcHBQ2tEqL%2BDHNpYMs%2BxP%2Bto%2Fi2Xz29nxgLylnbWdErbsI5vCSIL1pd%2BTMnn6JXIqUESd2L4FqxPuiSJDtQtHAlYKBjeByvzxIEQ2Ym1kRIkoG6mCR8GoZlacrAtGzL6UOMMzSIPvirnJdI2mndiQbTaqfcVOP2eQvcM0bWnEHZEr%2Ft7M%2Fj2NBRxgnB6kxRWipeN70cjOUIVx9UNgarsQ3vFIW3oPE%2FuhihL8%2BtyKO1J4Q%2BUam%2BtZMu9Xqk6EO5wjTmtN006RBXV96RAP9SjjVhT9NtkygJ6HVjcYE3mHAPUxG89dCfwueNHgK7MeRdbdFfTD4VWuWTk%2BhTdAUgZ1OqHqNEt4CxwzfOIenRxH8IO93oyE5SnMrH3NrkSzdkx3%2F%2B1y%2FlAUvJh7u21hmKbBciwwangYvGG13GHkNLbeN7UQYFrv9qgEHSKAAR9TZwcZsLSkF6fFnZon5MJmsnr0GOqUB7O8Yyo8mxb7StfsMPLvuCnaQxJlDPuWc%2F3gP%2BFZPax74CoCx1BrjhnxWcy1%2FMSM3s8ub1c26lQLWkkZnL3tZCGAgF1z6iSy15BAOWTE7KvD86tBTXg3D9AYCgBzwxx16VcNbJxA0LCI8laVGZPQ0BgPyRuBWOvJ5tsJjomUCAw3tUm1WSOvL23m1vuwcuaoVvZVBA8PYyHnjWCnAkdu8xsLKu08N&X-Amz-Signature=2acaaf3a21e69ec8cf62c21244ac064b416add712556cbc975f0db38dfff5dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
