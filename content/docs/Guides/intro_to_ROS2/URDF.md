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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4ABLKD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJGD1HL8umKmuEOtqU1haEWsMMKSpgJHP2pj%2BMXM6J2AiBgxgtbS4C4Wc69YBvlhgv8xYMZSBBLW9H%2B1VkMAROqoyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALrdouBJLi6b0%2BwIKtwDCd94mL1UcRzQgK2Y37sPAg5fW88hPtftSC13eKgehDsMMVVaC5yOgUUF1%2FV0ahgCnHPpGZ6QeV6nOMzyuchhR8pz1DyUU7115aQJ4Epq%2Fs1ggdpmzi0vMUilucvf6qynTJ9nTwPQUY%2BG6zian4Xps%2Bne%2FshV9g0mmJKZ%2BZaEo2UXFwSGM2ypsk%2BzBSpgBsfPvHlewhjD7qggN3Qr8Dt%2BhO3LZHP0API3Q3j9gVew%2F4ar9FM4U%2F716SSr013sV9vdT9ZQr1ZefAEUEPDVzlGJP6Oq4KkD3At4GcmrDs5GiE9LwNpWnYeTCuaEKr%2BdUhEHAeKKDsk6zlH1wkOZvHzhaDxcZ0jmg2lf3NPS9OQrJ%2Bk4O2yPfwGu68tiKEnwRfTfTbXIS2elhqzqUYy1sWJ3h2iZbbtjLvGyLqq8LI%2FSPcApJWC2CcSIZ1MF79cATUBcte5zRMy6fYcAhGUMUAXVvxae4IP5WkRHDkCR2fm6TkKWY7h4IioCKfXlVD5%2FgyZVTYwAvRCSJtspsGuGLsX32J%2Fxm70WsJUcfiyjHDFA%2FK97t5NjbEYr5VNV6onfmxKFJuXUdruZUZ6PJsMbZ24dMRtwj26ygUNeUb7drvK43ON3cwNhXObH7Nn25UgwmKb0vAY6pgHwEYkih1IQv5m4VzcxKm6j4TGdiCzbI%2BmkA4kfuTWGpX6n6ujoujQ%2Fu%2Bd9G7DW5MuwJ70gYAiCZ%2BAwcnzMgczt%2Be89s%2FubYvPNazkNf70h1zRcCKmhuNLW5khbt5Ilvj20vVNw1O4T4jlOjKSkQgN4zvpGjF5jUaCHor3F3yJ7kiCV39qxAfWoUiXuwNudTgAuXgFvUUoedpuGP3Boc2OoHbGsoW0O&X-Amz-Signature=3f44978c5ee2d056248e0f9c3b766cbabc337fb716904fb516df80c38702f332&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE4ABLKD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJGD1HL8umKmuEOtqU1haEWsMMKSpgJHP2pj%2BMXM6J2AiBgxgtbS4C4Wc69YBvlhgv8xYMZSBBLW9H%2B1VkMAROqoyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALrdouBJLi6b0%2BwIKtwDCd94mL1UcRzQgK2Y37sPAg5fW88hPtftSC13eKgehDsMMVVaC5yOgUUF1%2FV0ahgCnHPpGZ6QeV6nOMzyuchhR8pz1DyUU7115aQJ4Epq%2Fs1ggdpmzi0vMUilucvf6qynTJ9nTwPQUY%2BG6zian4Xps%2Bne%2FshV9g0mmJKZ%2BZaEo2UXFwSGM2ypsk%2BzBSpgBsfPvHlewhjD7qggN3Qr8Dt%2BhO3LZHP0API3Q3j9gVew%2F4ar9FM4U%2F716SSr013sV9vdT9ZQr1ZefAEUEPDVzlGJP6Oq4KkD3At4GcmrDs5GiE9LwNpWnYeTCuaEKr%2BdUhEHAeKKDsk6zlH1wkOZvHzhaDxcZ0jmg2lf3NPS9OQrJ%2Bk4O2yPfwGu68tiKEnwRfTfTbXIS2elhqzqUYy1sWJ3h2iZbbtjLvGyLqq8LI%2FSPcApJWC2CcSIZ1MF79cATUBcte5zRMy6fYcAhGUMUAXVvxae4IP5WkRHDkCR2fm6TkKWY7h4IioCKfXlVD5%2FgyZVTYwAvRCSJtspsGuGLsX32J%2Fxm70WsJUcfiyjHDFA%2FK97t5NjbEYr5VNV6onfmxKFJuXUdruZUZ6PJsMbZ24dMRtwj26ygUNeUb7drvK43ON3cwNhXObH7Nn25UgwmKb0vAY6pgHwEYkih1IQv5m4VzcxKm6j4TGdiCzbI%2BmkA4kfuTWGpX6n6ujoujQ%2Fu%2Bd9G7DW5MuwJ70gYAiCZ%2BAwcnzMgczt%2Be89s%2FubYvPNazkNf70h1zRcCKmhuNLW5khbt5Ilvj20vVNw1O4T4jlOjKSkQgN4zvpGjF5jUaCHor3F3yJ7kiCV39qxAfWoUiXuwNudTgAuXgFvUUoedpuGP3Boc2OoHbGsoW0O&X-Amz-Signature=5c7c8c5fc5cea90b91962ae0114d00881012234c8968099a7923d24cb2f10ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
