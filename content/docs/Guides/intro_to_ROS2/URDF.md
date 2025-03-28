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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4WQJCV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETWtaW7Vf9OWKp9L3v5SjSWDNgURIdHeLwnorS6ygDeAiBBPhK4B8IsL8hz%2FpPQsFU0bdCdgYC6RN7%2Fx6IT7s13JCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMRrcb4rJWJsWwgDkLKtwD8w4XyG1SsReg2YgEgyzRtxlM98vt5ObRpjniiU6VD6qO63jEwio2jZZmoR1MDqq6bmzfDcC7ytsZk%2F%2BnZq0L3aySRWzpCMMmJIR7rPcCUr9%2BpXMQGuoPBhxqiqbgLWIPl1nuDleZf8SV%2Fji8U%2BFZCSaIhanYADGaiDBU5NVKnuKonhqxE6510%2FsmfuYR2%2FFxpEbaUBxjf6y8eOW9sEfqP8fKWgNl2ZoTHOI5Lt0XF9%2F8ELqX0wWeRgOxcVRqOpu4Sw0Cca2dVEFEMtWEEpYQS%2BuOV1qeOiGcPDdIcJcuzvFquDyRcXi%2FsKS7i%2B7jNWjf50St7dFqH5FDXJYDk%2Fhk78GdPgcM5Bb8AvvQIz1hls3GyM%2B4ePPGK5hUrwzFM92aEykl2O2Yb33t9b4OYE%2B9IIwjtugRM1h7DJqV%2BhDpRNKeKdVk5m1c8WOfWXUVtD%2FvjqbYS7W7MY1tixeoUwejlkua0FekZWV%2B0jYslrRxf%2FHp1%2BGDXhjJ2v%2FXQDxOkUSerdOdzJR7YabURlgHGX8EkD27LIMeyLnlI7Cs64QbL3xsY07ojpZ4UWpE%2Bq4TWmm2ZCYNJmeOgBfgMsK0p%2Bmt1wckWYgvdWSQXo0flh2JAc9xdUPccl65TkB6qIAwpcScvwY6pgG%2F33YiICL3rowRje5fu1drTeDguW%2B6Fcyjp%2FybmWyI1QrddRW%2FtWjWbNse%2FDEsULV745tGdlClKBtbEty25xjbrTljUxUAn7FaD29BF0OZ0o91Je%2B7oDZ4OdRkr89S9DAjOY05FFglTVr6ecc7%2B72CvkIK5bYYbmybPJWJ7sXNWuAxD6F97IlwfQtqK9%2Fz8lcw1CsPo3%2FWDIwyqprhWQ8eKqut%2FrJZ&X-Amz-Signature=d558940be122c76e9353e13eb104fc8016ba2cf172283ea1bf3409298f9bd696&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA4WQJCV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETWtaW7Vf9OWKp9L3v5SjSWDNgURIdHeLwnorS6ygDeAiBBPhK4B8IsL8hz%2FpPQsFU0bdCdgYC6RN7%2Fx6IT7s13JCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMRrcb4rJWJsWwgDkLKtwD8w4XyG1SsReg2YgEgyzRtxlM98vt5ObRpjniiU6VD6qO63jEwio2jZZmoR1MDqq6bmzfDcC7ytsZk%2F%2BnZq0L3aySRWzpCMMmJIR7rPcCUr9%2BpXMQGuoPBhxqiqbgLWIPl1nuDleZf8SV%2Fji8U%2BFZCSaIhanYADGaiDBU5NVKnuKonhqxE6510%2FsmfuYR2%2FFxpEbaUBxjf6y8eOW9sEfqP8fKWgNl2ZoTHOI5Lt0XF9%2F8ELqX0wWeRgOxcVRqOpu4Sw0Cca2dVEFEMtWEEpYQS%2BuOV1qeOiGcPDdIcJcuzvFquDyRcXi%2FsKS7i%2B7jNWjf50St7dFqH5FDXJYDk%2Fhk78GdPgcM5Bb8AvvQIz1hls3GyM%2B4ePPGK5hUrwzFM92aEykl2O2Yb33t9b4OYE%2B9IIwjtugRM1h7DJqV%2BhDpRNKeKdVk5m1c8WOfWXUVtD%2FvjqbYS7W7MY1tixeoUwejlkua0FekZWV%2B0jYslrRxf%2FHp1%2BGDXhjJ2v%2FXQDxOkUSerdOdzJR7YabURlgHGX8EkD27LIMeyLnlI7Cs64QbL3xsY07ojpZ4UWpE%2Bq4TWmm2ZCYNJmeOgBfgMsK0p%2Bmt1wckWYgvdWSQXo0flh2JAc9xdUPccl65TkB6qIAwpcScvwY6pgG%2F33YiICL3rowRje5fu1drTeDguW%2B6Fcyjp%2FybmWyI1QrddRW%2FtWjWbNse%2FDEsULV745tGdlClKBtbEty25xjbrTljUxUAn7FaD29BF0OZ0o91Je%2B7oDZ4OdRkr89S9DAjOY05FFglTVr6ecc7%2B72CvkIK5bYYbmybPJWJ7sXNWuAxD6F97IlwfQtqK9%2Fz8lcw1CsPo3%2FWDIwyqprhWQ8eKqut%2FrJZ&X-Amz-Signature=61176bf7b3ce241ad1bd98436e8e173c6d91458a80c4ef937db606bef9992895&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
