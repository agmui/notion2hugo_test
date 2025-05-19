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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3L4JXE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNXtG8MIcbe1C2%2F3fDtsD9dSm21dooFGsXQ7SsGsM6gIhAMN8hX%2BdMB0G%2B%2BAaS%2BAFAr9GSEzVjUIMWExBlQ9DnuxlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEoGAYVgN9WvJvqwgq3AOAkeEpCzWKNfr3TZjkRkI6gCXZQgDYcUwtxsHmU4NEFENTZoKZSGRgqMnwajJpKzrDfN3AV8KrrsmBpJORtmTszvssHMCNBAmdkkmV4vTBLeyXvEVWGLqbA0TQ89u%2Bd0f5rp1oKd284TKxG0l4PjkdcGLarytaQCcIct7Tf7NVPjU0Ac2wGT7coF3JR11IH6KVDuALbLR42Kv1gDunkHkTZCOprQjMmgEp2NLuo%2F1P5dxubBnBSlcZ7dpNUdvo7qVJ4G8zLxiHM7OmNbE0nDOY4aKQQjSAQmrSx%2BkQqR6oBGrZ%2FhXWOBpZi4MxRcuICtLv%2FWy3%2FmvGVgajmQ3THlm9IW5Llg5KXmLTBXXnZCN3AM1FGY1%2F8F2LDZVfM9hNF3VROnYd%2BAR4tmlorNTzt0T89XLcgn1eNR5uMfiNh6YGdlwLdD0H6SxYRIDPI8e3syjBbUA8bmirzJOnTjW96YA8UmbfM7ty6rbU4nU8ncTy71I%2F0JbqdeFHXRz39n%2BYqcMpNveAhw6JFF4ytXYMCs590F7KDBQ2wINnv8KhBrPxZod9VKBNBPgn%2B1ifBkivre1rthyuikyN3t7xk3NQ1gVLe%2F3i6l7nFJ6qZYvBh8wbtuEfjh1PiwBRAWffzTDwuavBBjqkAWd3DlKt52txJ%2F3cFmwCHcRyIB2x0pPywA9VrGQX0xlEJMtjp8CTbetJaEWyiOvrUOsZFD3B%2FV2icl%2FYxsXRntjrNN7VfnjfQveeFOVGTTolUG1Bi%2FSaauhY3Zq0f5dq8EWVTNGmA0Yy4txblKyUZQ5Q1fMs7MgFyTGYDxGMe7cXB%2BqW0hi4CVn7Zf4lq5kI45xsfIiGBvvQaDjSoSMtfP8phxjs&X-Amz-Signature=ae7d9be980a0cd3e837127b659f326e110db47340d0bb7e6cdea1f5bf021d852&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3L4JXE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkNXtG8MIcbe1C2%2F3fDtsD9dSm21dooFGsXQ7SsGsM6gIhAMN8hX%2BdMB0G%2B%2BAaS%2BAFAr9GSEzVjUIMWExBlQ9DnuxlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEoGAYVgN9WvJvqwgq3AOAkeEpCzWKNfr3TZjkRkI6gCXZQgDYcUwtxsHmU4NEFENTZoKZSGRgqMnwajJpKzrDfN3AV8KrrsmBpJORtmTszvssHMCNBAmdkkmV4vTBLeyXvEVWGLqbA0TQ89u%2Bd0f5rp1oKd284TKxG0l4PjkdcGLarytaQCcIct7Tf7NVPjU0Ac2wGT7coF3JR11IH6KVDuALbLR42Kv1gDunkHkTZCOprQjMmgEp2NLuo%2F1P5dxubBnBSlcZ7dpNUdvo7qVJ4G8zLxiHM7OmNbE0nDOY4aKQQjSAQmrSx%2BkQqR6oBGrZ%2FhXWOBpZi4MxRcuICtLv%2FWy3%2FmvGVgajmQ3THlm9IW5Llg5KXmLTBXXnZCN3AM1FGY1%2F8F2LDZVfM9hNF3VROnYd%2BAR4tmlorNTzt0T89XLcgn1eNR5uMfiNh6YGdlwLdD0H6SxYRIDPI8e3syjBbUA8bmirzJOnTjW96YA8UmbfM7ty6rbU4nU8ncTy71I%2F0JbqdeFHXRz39n%2BYqcMpNveAhw6JFF4ytXYMCs590F7KDBQ2wINnv8KhBrPxZod9VKBNBPgn%2B1ifBkivre1rthyuikyN3t7xk3NQ1gVLe%2F3i6l7nFJ6qZYvBh8wbtuEfjh1PiwBRAWffzTDwuavBBjqkAWd3DlKt52txJ%2F3cFmwCHcRyIB2x0pPywA9VrGQX0xlEJMtjp8CTbetJaEWyiOvrUOsZFD3B%2FV2icl%2FYxsXRntjrNN7VfnjfQveeFOVGTTolUG1Bi%2FSaauhY3Zq0f5dq8EWVTNGmA0Yy4txblKyUZQ5Q1fMs7MgFyTGYDxGMe7cXB%2BqW0hi4CVn7Zf4lq5kI45xsfIiGBvvQaDjSoSMtfP8phxjs&X-Amz-Signature=88ad2762a8af2f4480f23a89a1162af064319d05b03c06680c0f924f2a771b13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
