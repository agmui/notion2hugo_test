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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIM5WXS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDgqkDv3J00AVQEZUfdG6%2FfkcD9BompPEoUS8Fxi521xAIgc9PG2hx%2FH6WT7qkILNnz%2B%2F36dv56B3RElY1XoP1yXVAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK4dZ2Uat3jNnLz0cSrcA%2BQstHkEGbiW%2FkmxSo6BcjgFCHd0rL6TEVYcS78BiBh%2BGUnNQ3xdP%2FpxTfklSgTrOdKwjYKVMMiBSnArNZUu78OHJSLfBsqOvmuba9FXgzngwQgYlQqh%2BVV6YfpTYg7NJ1Nxl9QApxFha29dpGUhXsIHKal9P8Y3zp7zIZ3x4Nyl%2Bz00wDCPUyanfre618AnCPZ4s%2FjzZqH%2BLySAfWGyKYEYIVJlnv%2F6ebzdWYXqutRIBT1zoKXNTxJk9WVaCVb%2B79FQGNej2LV%2Fudw2SRLXUY5pP5twykW2F%2FPisnOvWMUbqS0Oqain95hsLDAOKhrKEoh8W5NVJcY4AP4RT8IcjMLFca4TkW1bqt2QmijYKtxTKv51llkEZy7Y9RjYrAEiKu26GytZhOo%2FYac0a9Wi2s4bMAKbxOZpVy9LZux9uVUbkfcv9P0na%2FgYNaTMnyp2Vm4fLh3ejWJWd3voLM86sEB0%2BVZkNN9%2FhP2ktZPDNTZcXebAH8wye4Nkw5nk3okyy7lGhdMnnc4x50jqZcL%2BUoLEp709d0qh1rW1Xhft5cAesS8hrSUnPTiVYBPHfppjveoY1xH%2F%2F9i1XtkjzDaiaJ4GuYmwVNgwyWY9gBnQc8JUwGCgpMb2kcHePX6ZMM7Pk8EGOqUBGEw1KiHWXsSslVwiQSvWV0%2FbIDRPiRGFMtVQjoQu250eE%2B9NpwhCHV4hCixjO58TNtglLxHNWo8dpaF4prU%2FlZKa2piFFyEfpztqgKnENsh%2BCqA1L0i1cN7vl5PJA7oTfCYD7kVK%2F4odywDxKhsxSIfpAkgObu98bIydzdYccVG3sYwY%2BscfJMVe%2FGPgfNeYKUPwNVzeM1uv3MQNEVCkg1RaT8v4&X-Amz-Signature=749fd8c4f0751204707b8ac4fb75ebccc03b9f5abd3039ec4f5e8a45f4516136&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPIM5WXS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDgqkDv3J00AVQEZUfdG6%2FfkcD9BompPEoUS8Fxi521xAIgc9PG2hx%2FH6WT7qkILNnz%2B%2F36dv56B3RElY1XoP1yXVAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK4dZ2Uat3jNnLz0cSrcA%2BQstHkEGbiW%2FkmxSo6BcjgFCHd0rL6TEVYcS78BiBh%2BGUnNQ3xdP%2FpxTfklSgTrOdKwjYKVMMiBSnArNZUu78OHJSLfBsqOvmuba9FXgzngwQgYlQqh%2BVV6YfpTYg7NJ1Nxl9QApxFha29dpGUhXsIHKal9P8Y3zp7zIZ3x4Nyl%2Bz00wDCPUyanfre618AnCPZ4s%2FjzZqH%2BLySAfWGyKYEYIVJlnv%2F6ebzdWYXqutRIBT1zoKXNTxJk9WVaCVb%2B79FQGNej2LV%2Fudw2SRLXUY5pP5twykW2F%2FPisnOvWMUbqS0Oqain95hsLDAOKhrKEoh8W5NVJcY4AP4RT8IcjMLFca4TkW1bqt2QmijYKtxTKv51llkEZy7Y9RjYrAEiKu26GytZhOo%2FYac0a9Wi2s4bMAKbxOZpVy9LZux9uVUbkfcv9P0na%2FgYNaTMnyp2Vm4fLh3ejWJWd3voLM86sEB0%2BVZkNN9%2FhP2ktZPDNTZcXebAH8wye4Nkw5nk3okyy7lGhdMnnc4x50jqZcL%2BUoLEp709d0qh1rW1Xhft5cAesS8hrSUnPTiVYBPHfppjveoY1xH%2F%2F9i1XtkjzDaiaJ4GuYmwVNgwyWY9gBnQc8JUwGCgpMb2kcHePX6ZMM7Pk8EGOqUBGEw1KiHWXsSslVwiQSvWV0%2FbIDRPiRGFMtVQjoQu250eE%2B9NpwhCHV4hCixjO58TNtglLxHNWo8dpaF4prU%2FlZKa2piFFyEfpztqgKnENsh%2BCqA1L0i1cN7vl5PJA7oTfCYD7kVK%2F4odywDxKhsxSIfpAkgObu98bIydzdYccVG3sYwY%2BscfJMVe%2FGPgfNeYKUPwNVzeM1uv3MQNEVCkg1RaT8v4&X-Amz-Signature=38819067639241072e5f021b8120c2e344e02c38f5de5ac48bf12c8922bd51e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
