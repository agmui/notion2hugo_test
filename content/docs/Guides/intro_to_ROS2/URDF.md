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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=32961dc1d1824bf0f5857616fcdb2a58d59e5923b5b276396c7dc6f626676516&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFWCHNZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCDJyEwb3%2BiY%2BuiJN6DBhvntHzLhZYXhU3PzD7CWHUp1gIhALT0Wi06pGLy4Vtk7Hsz93e%2BYtyt4fNuJsGjiUCMicCAKv8DCFcQABoMNjM3NDIzMTgzODA1IgymXAmITu3zgoyjRpUq3APz5UYCgmWeX%2FKkqa7QIkF%2FYxfzuI3brSLOtnahIFqKpDbNilv4vhyNYiE6K96fqqxXGTPQTNCEGlPRWNsH%2FBKYPKKEYejICU3KPYoxP7uUw5qM%2FMfnCINHTBORgpOCSIYmT9jHyRrXEQDVdE%2FlyQbuap26yICsCLmddHTSmn82XxP%2FwGlES7rZZyPGZDhcic5BS5U8qlIzGSDeuVclDKsNJUAGTGS94%2BCp5nH9l%2BUuE29jql2c39BaqTlMocIcRTYHVYcDV%2BuvuzdwFlSL%2FyHLLUDGU8VpF%2FdjDuy8KALTI8S8otILa0%2BHu25rGT%2BnkidnOLpqOLrSlUgntdSpQ%2FoKriabz2XweTXZB5T4rRPkVQI7%2BPeIdBA2uyaTpsC%2FQuv%2BOioJSDpyLEKVxy5LQShX3sBHLsaDW4skiC9D4iOtQfbLt80URTE%2F4Yw3EpM1GTIGn2nIHONtBRxB2Nz4A2k0WRgRhgHsZmS%2Bibw57EqLwJC5Irdk7E3Y1xX7AGXst6ew29OxvUH7ruEFvJHQjyQY6O0nc3sz2Fe5vnkV7vlEoGbTd5OXfOamaWai1%2Bj2KpzZ7qBhBK7oBvUUXtQMXmNTgv08%2FjVAXB3qbTiqx3pBBbdr9WnutZoKXQJq1jDD%2FcW9BjqkAayzxHd91LgtFP8JoyVHVs5tC3om8H0HAd0oO%2B7txMLbcwzgOZB3Na5vfMVRRyLdpaP%2Bu1nzzxpicofGHwtVWZauSNrl0H%2F7EDRG8s5M0wNBWJeHHS4ApCIknsBxWvDUhwN4kf5VZPREPpyyGGhbbd%2BjEtTmJh9Tz2473V3fadvhdRfLJkziwarYO3DIuaMN55VbgeFgS473rixNPQstLu0u1GbR&X-Amz-Signature=5196924e1a5fc15bd6a248207ba4847ddfc8a67bd8f4c707ed6090799a0d83ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
