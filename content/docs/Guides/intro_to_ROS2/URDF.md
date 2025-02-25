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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4MIKY5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5Dsj8tZA%2BgOtFu2U6L2O4z3y3dTOjPcdmQozi48pRgQIgfbcMV31NxYL1FKTneldFVJDjfsfYGkjDSkUscjAW1dgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPmrTucQDn4cnRJ95CrcA1azQaADru8Q8y2b6Kp%2BmGKDtOLryfgOtPniH26h5iR9rUFuaJCngGwA789PkZgN5jcgh8D%2FLL6hKSnPTjGpIm3fJ6psxOH9233BvZI%2B0DWDlei0NCKLARcnAbprFMlH5R67o1ChK4Gt0JIL4hi3ul%2BOSi0U4gWVTWIwwY3je0%2BVDQKWRVxEQZC0QBRk%2BGKw678rpEqnWZtEXecDzAlJzPoq54Oa838EIG7ilkyFkwbB4BsFaf4cWHbCvGzQxIEOyfQjCvI33VbcfyY%2BVQVjZBwlxyrmqPqJ%2BAnZRIq8qJY%2BNcMhjSbnZiFSdmPogNnwFDQFi9dmULYOEmIKYMmYU6DXmcv81h9uPe%2B0%2F22SZEni18ZaNC0fh8ZuPCLyoefVn3DhA7MdV%2BImFb7y%2B8%2FAAqdnolTpQ4Wb4iYRg%2FhDhkw%2FyEyWPANDUtbdpti87BOwDuQc5NkoU2vo%2FXqMOS3Vq1hlZFeQSj0DhuorplbysW6TGgRpb6ZlcKgJz7Y7ijD2gOCFtxv9JzmO5qm%2Bv5PO1QJuxQYV9PAmakE7CifBQZjxjgTUWZDQ5%2FQV%2FMtcICfmS9qukg366f%2F0i%2BoelJhCeaBPVFBEdUo5V5G7u2%2BDZmxynzYJTqaw9YJU1xM9MOfQ970GOqUBUPYfnHLT5cJtek5h6nshxgFFKTkAPiIE65uguYSc4Ws2t3%2BVfJ%2FJArpRmD%2FVOze%2Fyv%2Fk6kpBVKLACKP%2BC0mblipsmsKZQ5PknapnauAOwR0x6xu5kMXMcK74PBr4w2XJmY6muGaY0eQzzKxgSFDJ46ak2mG7LRw1k6hCvCMDTL49YjBbobCg9Q5lUPeHXJBUxtxrvQ5DT9WgJr0CJG5kL9u6%2BSPG&X-Amz-Signature=47cd4b93d90a7b5fadb64e46832673f8acbbb0ae452d563df2981dbe96fec156&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4MIKY5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD5Dsj8tZA%2BgOtFu2U6L2O4z3y3dTOjPcdmQozi48pRgQIgfbcMV31NxYL1FKTneldFVJDjfsfYGkjDSkUscjAW1dgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPmrTucQDn4cnRJ95CrcA1azQaADru8Q8y2b6Kp%2BmGKDtOLryfgOtPniH26h5iR9rUFuaJCngGwA789PkZgN5jcgh8D%2FLL6hKSnPTjGpIm3fJ6psxOH9233BvZI%2B0DWDlei0NCKLARcnAbprFMlH5R67o1ChK4Gt0JIL4hi3ul%2BOSi0U4gWVTWIwwY3je0%2BVDQKWRVxEQZC0QBRk%2BGKw678rpEqnWZtEXecDzAlJzPoq54Oa838EIG7ilkyFkwbB4BsFaf4cWHbCvGzQxIEOyfQjCvI33VbcfyY%2BVQVjZBwlxyrmqPqJ%2BAnZRIq8qJY%2BNcMhjSbnZiFSdmPogNnwFDQFi9dmULYOEmIKYMmYU6DXmcv81h9uPe%2B0%2F22SZEni18ZaNC0fh8ZuPCLyoefVn3DhA7MdV%2BImFb7y%2B8%2FAAqdnolTpQ4Wb4iYRg%2FhDhkw%2FyEyWPANDUtbdpti87BOwDuQc5NkoU2vo%2FXqMOS3Vq1hlZFeQSj0DhuorplbysW6TGgRpb6ZlcKgJz7Y7ijD2gOCFtxv9JzmO5qm%2Bv5PO1QJuxQYV9PAmakE7CifBQZjxjgTUWZDQ5%2FQV%2FMtcICfmS9qukg366f%2F0i%2BoelJhCeaBPVFBEdUo5V5G7u2%2BDZmxynzYJTqaw9YJU1xM9MOfQ970GOqUBUPYfnHLT5cJtek5h6nshxgFFKTkAPiIE65uguYSc4Ws2t3%2BVfJ%2FJArpRmD%2FVOze%2Fyv%2Fk6kpBVKLACKP%2BC0mblipsmsKZQ5PknapnauAOwR0x6xu5kMXMcK74PBr4w2XJmY6muGaY0eQzzKxgSFDJ46ak2mG7LRw1k6hCvCMDTL49YjBbobCg9Q5lUPeHXJBUxtxrvQ5DT9WgJr0CJG5kL9u6%2BSPG&X-Amz-Signature=94f24e1dfbedc6408bbd4f7f94793b0ba43878a14b3cf05a9ceef03053f54c74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
