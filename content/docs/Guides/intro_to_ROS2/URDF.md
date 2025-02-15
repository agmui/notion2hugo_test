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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3RG3XA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIApH6tgpOqajQSYYh9iaFvXn%2Biqb0qfh5IUygrA%2FXjVDAiEAwVsp%2BVSlE98DE6slVmfdxtne5zhwgPB1UcuxioGevBwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH2%2BVcG%2FcODspVUUuyrcA99%2FFRlK9ia59WgQoeLpuU4m0ScPqGW9v9OLRL4w5hTfI7mcopybdSOUPK8W%2FhTi2hjtiXqQRXOkyUA0DJlhKzHqTK3ZKnJh5x3ZGuVITX%2BTtdOCzi63sxG6NH%2F4Zr5GO17IKKjXCP8srzxHvBUFfGFuVaCGJDlYBLBZl96IuOb8QAWcJ2%2FirhoKBvhG5O5%2FlxIbRTXLYKuLeCAp0IYX3OrpgNLCwCKO7KIBFdwsQ9oAG9QL7p3yOc7UPY82glAwDFtPvVmZtBW8MicDWVTab2zJ4DNUd9Ac8q8gz4E%2BstTmed03wHcgw0Z5Tdb2Es%2Fryw018wl8URWJXUiRzqtKLojK6SSsLoNa8ZuwJNX3aSO5cMKk6Xr1OImVOAtUpvfxmXl7XG6sozCOtFROETpboPhEZ6tsRfSHGiQ5y2bMIQq3C8G8VNnJeZ31N1ViCu5JTEGMkI6P4YWe6MDHtAoH4FQghAdhPeY%2Bs0OZgWT6JW33VlZGmzaKU03KcgRbrwKGO6Yi6lE5s%2Flwx0osutSHNaalhLTrbWi89KCgHJVfDVz7rYGbXsLDWS6uwyphbcXH%2Fy%2BzXPrMLjxmx2i5FrrkxMpqkdaSX0O%2Bgry6dTZZ8jVW6AFPrgrfErbQGIGzMJG0v70GOqUBGvFegToHemSpv%2BqG0wrSuK6wlL%2F7w5QkBJ6eyY0B3Hv4E%2FYWWzkk8pb9UwZFMy4FW6ZQ5MXcKDlyqUe5M2%2BGw4sieyM1YcyyqDPFrJdrQC70T4tQfQipkq6ivr%2BFSesGdLVF8XCiTNBWqzN3DUE%2FHikGelogJixAAklOlzrtn2SufBjfxlYoz1Li9QiDY7P0mlRcFsWXihDsUz%2BG7OC4qI%2Fi1kBf&X-Amz-Signature=72ea5dd38845021d22885c0d47ed5bb166f8fe16446e250c238f8a5cb825b742&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3RG3XA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIApH6tgpOqajQSYYh9iaFvXn%2Biqb0qfh5IUygrA%2FXjVDAiEAwVsp%2BVSlE98DE6slVmfdxtne5zhwgPB1UcuxioGevBwq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH2%2BVcG%2FcODspVUUuyrcA99%2FFRlK9ia59WgQoeLpuU4m0ScPqGW9v9OLRL4w5hTfI7mcopybdSOUPK8W%2FhTi2hjtiXqQRXOkyUA0DJlhKzHqTK3ZKnJh5x3ZGuVITX%2BTtdOCzi63sxG6NH%2F4Zr5GO17IKKjXCP8srzxHvBUFfGFuVaCGJDlYBLBZl96IuOb8QAWcJ2%2FirhoKBvhG5O5%2FlxIbRTXLYKuLeCAp0IYX3OrpgNLCwCKO7KIBFdwsQ9oAG9QL7p3yOc7UPY82glAwDFtPvVmZtBW8MicDWVTab2zJ4DNUd9Ac8q8gz4E%2BstTmed03wHcgw0Z5Tdb2Es%2Fryw018wl8URWJXUiRzqtKLojK6SSsLoNa8ZuwJNX3aSO5cMKk6Xr1OImVOAtUpvfxmXl7XG6sozCOtFROETpboPhEZ6tsRfSHGiQ5y2bMIQq3C8G8VNnJeZ31N1ViCu5JTEGMkI6P4YWe6MDHtAoH4FQghAdhPeY%2Bs0OZgWT6JW33VlZGmzaKU03KcgRbrwKGO6Yi6lE5s%2Flwx0osutSHNaalhLTrbWi89KCgHJVfDVz7rYGbXsLDWS6uwyphbcXH%2Fy%2BzXPrMLjxmx2i5FrrkxMpqkdaSX0O%2Bgry6dTZZ8jVW6AFPrgrfErbQGIGzMJG0v70GOqUBGvFegToHemSpv%2BqG0wrSuK6wlL%2F7w5QkBJ6eyY0B3Hv4E%2FYWWzkk8pb9UwZFMy4FW6ZQ5MXcKDlyqUe5M2%2BGw4sieyM1YcyyqDPFrJdrQC70T4tQfQipkq6ivr%2BFSesGdLVF8XCiTNBWqzN3DUE%2FHikGelogJixAAklOlzrtn2SufBjfxlYoz1Li9QiDY7P0mlRcFsWXihDsUz%2BG7OC4qI%2Fi1kBf&X-Amz-Signature=49b628945fcfe436e6370c21fb71788e6cc299950592ee6fdf8e6e6b48b653bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
