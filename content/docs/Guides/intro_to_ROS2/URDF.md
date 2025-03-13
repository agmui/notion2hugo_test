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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQOFY3T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwqT3H3uOCIoTV1kF9ei2oAgkaraQiBi4XILGDm9KDvAIgC9yoUeD%2F1U0UM7U2QB7XMbHtxASLwxRecrgYTTpv8M8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTTHkGmx0k8Es76GCrcAxAfrIlLetD3jW3WhzhEod7rrqOKc%2FQ%2FdIAJRZQQwNs5wPfgfgmIZp9ZD%2Bjwb2LN4U%2F04vCVKvL1%2BMhqHbd2%2BskApblFpMF%2F3eUZP%2B7941hdJAAOaYtbUJffv0XAvbzcCPac5MonO4ZKlT1d2KT77b3PcXaIiQgbkCZvKC6z4BL3GuYhH9FNxO7QLd4MnpRfhoVcSuGfi52NrFmNsArL3yMalL5A46RL1aa7BlAq9QxEgLXi0gEb2H6daILaWSu39xVoICNQs2FYRRICzzp6MSrmpbyLl%2B2eKNO9CuPPlXEiTKl3C3J%2BYDL3AnCiyEuWA0cvEyJu7gYRvBEydn0ZR45a9%2Bqw%2FEepZ0%2B0hJ%2BPc%2F2gGKZU1l2vEkHcYB%2BMA%2BDMvERqfAzGW2WlmuM90FE6P0VRCqaFe%2FlKJ%2FQpnCv4QRQ7dat6VtcbjpjeJkPWa348%2FXc4FwDNRp8MAfRTJwwIiLpgFJXVk9Afdg7SYGH9UvvfIg5%2BgkuQh0AJzyeljwu8ieVBNkBrN12PTzaA%2Fd6KNYpSHEqK2yqxsCMc55r7gYiJZyXNXEF4U3mi7F3NUNtVfv5BWmtRjRAZeJ85MzAkkPkYRft%2FLnWjsEKlGyEYHxgTmxl40pNsCgyNdApJMNj1zL4GOqUB0gx4HrlknhcJtaUB%2FkyOFeFcCQy5XGjfkGMgPIZt2dYJuu%2B3RCzZzm9Oj7xz9okDyBsGmYSX9ibgLZMKnTwvTKcBOOPjEKonC7c8OuKdkogVN0GZdRaMm%2F%2FqKNN9PoeKc5oPdiBCrOsoFyptip4WikyAGtnUYhu7Pv%2Fs4oRsxPLaIWoJTIzZYd5jfhgO6oEiu8TjWIcFh%2B68LodxwS0WypzNP6Q2&X-Amz-Signature=b1724e94ecd46235d0ae4dc2bab9d46b2e594325ed6806e5c94352828469c5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQOFY3T%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwqT3H3uOCIoTV1kF9ei2oAgkaraQiBi4XILGDm9KDvAIgC9yoUeD%2F1U0UM7U2QB7XMbHtxASLwxRecrgYTTpv8M8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTTHkGmx0k8Es76GCrcAxAfrIlLetD3jW3WhzhEod7rrqOKc%2FQ%2FdIAJRZQQwNs5wPfgfgmIZp9ZD%2Bjwb2LN4U%2F04vCVKvL1%2BMhqHbd2%2BskApblFpMF%2F3eUZP%2B7941hdJAAOaYtbUJffv0XAvbzcCPac5MonO4ZKlT1d2KT77b3PcXaIiQgbkCZvKC6z4BL3GuYhH9FNxO7QLd4MnpRfhoVcSuGfi52NrFmNsArL3yMalL5A46RL1aa7BlAq9QxEgLXi0gEb2H6daILaWSu39xVoICNQs2FYRRICzzp6MSrmpbyLl%2B2eKNO9CuPPlXEiTKl3C3J%2BYDL3AnCiyEuWA0cvEyJu7gYRvBEydn0ZR45a9%2Bqw%2FEepZ0%2B0hJ%2BPc%2F2gGKZU1l2vEkHcYB%2BMA%2BDMvERqfAzGW2WlmuM90FE6P0VRCqaFe%2FlKJ%2FQpnCv4QRQ7dat6VtcbjpjeJkPWa348%2FXc4FwDNRp8MAfRTJwwIiLpgFJXVk9Afdg7SYGH9UvvfIg5%2BgkuQh0AJzyeljwu8ieVBNkBrN12PTzaA%2Fd6KNYpSHEqK2yqxsCMc55r7gYiJZyXNXEF4U3mi7F3NUNtVfv5BWmtRjRAZeJ85MzAkkPkYRft%2FLnWjsEKlGyEYHxgTmxl40pNsCgyNdApJMNj1zL4GOqUB0gx4HrlknhcJtaUB%2FkyOFeFcCQy5XGjfkGMgPIZt2dYJuu%2B3RCzZzm9Oj7xz9okDyBsGmYSX9ibgLZMKnTwvTKcBOOPjEKonC7c8OuKdkogVN0GZdRaMm%2F%2FqKNN9PoeKc5oPdiBCrOsoFyptip4WikyAGtnUYhu7Pv%2Fs4oRsxPLaIWoJTIzZYd5jfhgO6oEiu8TjWIcFh%2B68LodxwS0WypzNP6Q2&X-Amz-Signature=6a537f5bba9a1d6fe2cbd5790bb98c6057ebb0e19cbe7ac74fc62e05be636ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
