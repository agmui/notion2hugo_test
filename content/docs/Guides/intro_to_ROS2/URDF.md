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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWAJDN7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFdwJcTB%2BHOXZErp6wQMwyIeEuuC97WOsm%2BnBIC%2BjGvAiEAgZy5uusf0CTYAISb6UZoVH7SkP2wrVEkKhYGDi9QoEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6o096eEXrw5Lh%2FKyrcAw4MmXTSlkR7YTb44yaYrViKWlMcMCaaMoS4gWaYM4eDrRPrDFaa3tDyf61h1t6sjkNww7PLhGug3UHWtP5NWUXzbwZ662xGO7SC429JT%2BGcv%2Fr0ovhj%2BjBn1N9SN3kR76wvjOrqijirtsx8k2YNY4D759BhZjIB2VNDB3CyYURQDyZQzcmYdA45zEq7VgvcUJ%2BRllRgnjZgJkGupNz1y18wxECimi3hyhZGCH2Ka%2FaOCFqHKcz0iDC%2BJNyOAdY7AEfBAaqMjBEl%2FsAjTbHll60Cn0YlNlpw4OVdkoTHBckPKJljS%2F6BFWbVE8cIp%2BxASV%2Fm6Gj7U0orRnBUhhMVjJWMBo3PlqosxprFy2zd%2B15I9lnUPCAJpi5NlXyqUMZh%2BkpBygEreXXOzoqgLAcHs6jHF13Sgc0YN1t5R9FWY1c4yZZ6qPfDzGGQBrCzboirBQ9ok1lxiG6ySzwJp9ZNsPH8vC6Sfx75J5JUxkvLWKqgK4LfJRQfSBKvAr2AtndlsUmoI4H3h%2F%2FVbeaPTaqFlR2YZvJlsl98xcNzbipRj5CsvduGLiSTtNIGoEwgo6RrF5GPAuAH99OC9NJnPLzYIdfiMPFC2fCZ8zIOFsWD7swSnS6PU%2BWQQ1jN4iWBMLTAyL4GOqUBBNndolYfXHlZCTBtR6pOeJpSSFNStTJzGj7H0oikNjmU08LAs5TWBLD2qTR9Yb5X6%2B2WtgCbYYcUoQSNvhmrgwvCRJZ%2B9AeYWvN7%2FKzeJjAJ1Ye9ja7sVYFisghzLsc2GqE8HvELFf8CS65De1fUPZHYVV75r5xKYfgSCLmW%2BPMhcnaoj8GjIl2zz2T3X4D5fUaD3o0uGjzzzGHG5SM4aPIggPLx&X-Amz-Signature=1650ddf45f7e0fa239dd3503155b4cc0c55bd021e8d840fde2f329325c41ee88&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWAJDN7%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFdwJcTB%2BHOXZErp6wQMwyIeEuuC97WOsm%2BnBIC%2BjGvAiEAgZy5uusf0CTYAISb6UZoVH7SkP2wrVEkKhYGDi9QoEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6o096eEXrw5Lh%2FKyrcAw4MmXTSlkR7YTb44yaYrViKWlMcMCaaMoS4gWaYM4eDrRPrDFaa3tDyf61h1t6sjkNww7PLhGug3UHWtP5NWUXzbwZ662xGO7SC429JT%2BGcv%2Fr0ovhj%2BjBn1N9SN3kR76wvjOrqijirtsx8k2YNY4D759BhZjIB2VNDB3CyYURQDyZQzcmYdA45zEq7VgvcUJ%2BRllRgnjZgJkGupNz1y18wxECimi3hyhZGCH2Ka%2FaOCFqHKcz0iDC%2BJNyOAdY7AEfBAaqMjBEl%2FsAjTbHll60Cn0YlNlpw4OVdkoTHBckPKJljS%2F6BFWbVE8cIp%2BxASV%2Fm6Gj7U0orRnBUhhMVjJWMBo3PlqosxprFy2zd%2B15I9lnUPCAJpi5NlXyqUMZh%2BkpBygEreXXOzoqgLAcHs6jHF13Sgc0YN1t5R9FWY1c4yZZ6qPfDzGGQBrCzboirBQ9ok1lxiG6ySzwJp9ZNsPH8vC6Sfx75J5JUxkvLWKqgK4LfJRQfSBKvAr2AtndlsUmoI4H3h%2F%2FVbeaPTaqFlR2YZvJlsl98xcNzbipRj5CsvduGLiSTtNIGoEwgo6RrF5GPAuAH99OC9NJnPLzYIdfiMPFC2fCZ8zIOFsWD7swSnS6PU%2BWQQ1jN4iWBMLTAyL4GOqUBBNndolYfXHlZCTBtR6pOeJpSSFNStTJzGj7H0oikNjmU08LAs5TWBLD2qTR9Yb5X6%2B2WtgCbYYcUoQSNvhmrgwvCRJZ%2B9AeYWvN7%2FKzeJjAJ1Ye9ja7sVYFisghzLsc2GqE8HvELFf8CS65De1fUPZHYVV75r5xKYfgSCLmW%2BPMhcnaoj8GjIl2zz2T3X4D5fUaD3o0uGjzzzGHG5SM4aPIggPLx&X-Amz-Signature=24a512ccebad1e94fd9b2d549a4fe6c294516fbd9a0c8b1d466c6061b1587e31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
