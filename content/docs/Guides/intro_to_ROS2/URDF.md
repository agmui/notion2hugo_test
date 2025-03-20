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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDT5FF6J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCfasLNXe8XX3A4xWWUzxfGSaVZUfmq7A6oGV%2B2TG0gtQIhALdzCaxzOxrRpZ4jtGZsUY5PBkH6QBhmbV36OoyxXNFOKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Xkvgjs7vfE0DRh8q3ANXYYqSj250IS9HbdbIOMhz99SnFQ%2FB687a01zkm1ZgArJ2XwDw%2BN1%2F9ZEFumKi9y99QZ6uKPnvROhOq5I4Z55uSXosRKmeZCuj%2Fuyx5za9qVlcOeqSNhfi599I1Xov5CJc8qpgpDNCmftYKYvf8lvKrW7Ff7xRsCUm02PDLbZoe3nhbAO5ETekk8V659LF76wB2KZV4tFfn07XwgslhGo7p55zzWN%2BIdOVjnf%2F0al0tKHy%2FSMsbN6UVOZ059Rk5Cqho%2BblO8FbIMV5rVlKh9i3D1cvkej6w3QWdqeIceKJa%2BaCRNMT2fTFfakka4sFQlN02oHpQ3Ge6CX5uCAM08lMpHo7sWf%2FdxK1z1ChhYUQKF4BavMIrVSqMlhEk8oKa0J5x1s7L8K6cP9K%2B44bUlxyG9dxwFwH9cukCHSY9VlOi1%2BJ791fUmhjjj290sXbscqhxpSkv%2BMFDSIqGHCf3NLzZwMZVPwH8G5i9vSRnA%2BC%2B%2FzT6oFpKd0KYpigKy0musrqkyqu3KAV2hztAqaCsXHbjAQeOLFmXu3mNg3H1jiuj%2FHEvmEQktURIApdZSf2WHuZlZMa8Jslxncw2Dj%2BpmUVPDXX%2B5eghnCVuUMC3SGGxdISs5dscmbhB98r0zCwxfC%2BBjqkAVr0Pr%2FArz03p75LzlXIur7n9Et%2FJxErAJV2pF%2B0MWfytBBSMIfcedwDD52awysUI0KHSgrQHPg0WGXEdu4tmWbMqIZ0A7cIo8YxJMe5wjy%2Fng8F4Yag7gdDeRcpVxw4g2YaZvCqJVWnJJRoZgGTtMMdQvBnRxShw4GC9fALD977J7LJ93DKZBTvcFp6q72gByMjUfL5i2oOHXLA%2B%2Bps13RqPcuj&X-Amz-Signature=d277bf234ee1686209f0f905721fbd1e9cb2f7ec394522238645452c682cdc8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDT5FF6J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCfasLNXe8XX3A4xWWUzxfGSaVZUfmq7A6oGV%2B2TG0gtQIhALdzCaxzOxrRpZ4jtGZsUY5PBkH6QBhmbV36OoyxXNFOKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Xkvgjs7vfE0DRh8q3ANXYYqSj250IS9HbdbIOMhz99SnFQ%2FB687a01zkm1ZgArJ2XwDw%2BN1%2F9ZEFumKi9y99QZ6uKPnvROhOq5I4Z55uSXosRKmeZCuj%2Fuyx5za9qVlcOeqSNhfi599I1Xov5CJc8qpgpDNCmftYKYvf8lvKrW7Ff7xRsCUm02PDLbZoe3nhbAO5ETekk8V659LF76wB2KZV4tFfn07XwgslhGo7p55zzWN%2BIdOVjnf%2F0al0tKHy%2FSMsbN6UVOZ059Rk5Cqho%2BblO8FbIMV5rVlKh9i3D1cvkej6w3QWdqeIceKJa%2BaCRNMT2fTFfakka4sFQlN02oHpQ3Ge6CX5uCAM08lMpHo7sWf%2FdxK1z1ChhYUQKF4BavMIrVSqMlhEk8oKa0J5x1s7L8K6cP9K%2B44bUlxyG9dxwFwH9cukCHSY9VlOi1%2BJ791fUmhjjj290sXbscqhxpSkv%2BMFDSIqGHCf3NLzZwMZVPwH8G5i9vSRnA%2BC%2B%2FzT6oFpKd0KYpigKy0musrqkyqu3KAV2hztAqaCsXHbjAQeOLFmXu3mNg3H1jiuj%2FHEvmEQktURIApdZSf2WHuZlZMa8Jslxncw2Dj%2BpmUVPDXX%2B5eghnCVuUMC3SGGxdISs5dscmbhB98r0zCwxfC%2BBjqkAVr0Pr%2FArz03p75LzlXIur7n9Et%2FJxErAJV2pF%2B0MWfytBBSMIfcedwDD52awysUI0KHSgrQHPg0WGXEdu4tmWbMqIZ0A7cIo8YxJMe5wjy%2Fng8F4Yag7gdDeRcpVxw4g2YaZvCqJVWnJJRoZgGTtMMdQvBnRxShw4GC9fALD977J7LJ93DKZBTvcFp6q72gByMjUfL5i2oOHXLA%2B%2Bps13RqPcuj&X-Amz-Signature=a4212ffc003f89a32214d10e17dbe4aaa8decad09358d3593d8cef863fb21142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
