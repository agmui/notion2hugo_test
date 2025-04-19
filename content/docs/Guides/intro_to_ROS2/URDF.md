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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSQN2HL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVT0x8PwkedjmPzL4%2FflKobiCjWVMvH%2FA8P1Ce9oMcAiEA2h6XaBze01Lzj4K3dvPpxjl8eyv28UTBKT%2FcLkvGw%2FwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBFw7FB283Kk%2Bj7pyrcA0%2BEF34mMqNF9UbfOW3TlqWmUmqK6SMxtkuMT2jwY2ilDaI8L0e8d6k%2BHbWnG9te63Ho43s8RlxL6tUt0977ZotCriJ14SbULVquj1LP9h4FexcJSGy%2Fl0xBJLJNUPfrtx%2Bit85qVSVYgG0nSRVJZzI%2BPKN5uPpPyLLnbd4SwG5eEs5RkUc%2Fsfm6BFtiILUxh9Evr6KreiGH2l0m3lY2G6S1lv9o%2Folwh8roH9TjORTlL7gtkBa8GLK5XU1iqYnPBFacARjaekbcJ5BorJCi8ANqKU88PB%2B33cCZctpGW%2F36JCNXZAt8Pva6v9RgEbIL5aQ52C5drY7SDUg%2BuZA33BDsx8ka3mXuw0UQg10J%2FWxHH353syh7333ucM%2BLl1mXOPiDGzeOPQ3F1i6cJRcSNuw6BbbFwxj5jX5CPNClZ5FgwwuAi3q6EcPx0yF4PScoQabxmWljGZT7t6MYuLuRX8W%2F0KN2Fst5mryDKjHZDVSDSMbwb%2BA9TagU7sJL%2FOuGXIo7S5GebCTb%2FOGLE81fie1s8ZI%2BVPHIJdWhnCsK7KCWUoJFIkF7uRpQkmCr4x1K4kY2juJrZnIwQkuUwgtk8HRDdFoZ8l6QTpwPlCysKCGdu6aJuRigmgUZunJ9MM%2FYjMAGOqUBI8sYeJoxCnlxkXrKHEMw%2BN9lAFoJR%2B6RIy8h9Kxce41qFdQPpY%2F0OsCTFr9AbUnViwqPDaal732CTwSkKyXp3celcbmT8qubDlltnH%2F%2Bvf0W%2FnY8PWd2%2FsxZJ%2BB%2FIsDIGjvtRAckIUk82HqUk2HcOwa30CoJ6jFm2MzUSygJBHPW1sRRwWOAy4IXOEB8PjEqBYpycLqa6mO9k3SwRv4Qm8vvaohZ&X-Amz-Signature=4382543a87cb43b9372cfb045a067420c6f5cdcabafe2f2f223d65e5e686324c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSQN2HL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfVT0x8PwkedjmPzL4%2FflKobiCjWVMvH%2FA8P1Ce9oMcAiEA2h6XaBze01Lzj4K3dvPpxjl8eyv28UTBKT%2FcLkvGw%2FwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBFw7FB283Kk%2Bj7pyrcA0%2BEF34mMqNF9UbfOW3TlqWmUmqK6SMxtkuMT2jwY2ilDaI8L0e8d6k%2BHbWnG9te63Ho43s8RlxL6tUt0977ZotCriJ14SbULVquj1LP9h4FexcJSGy%2Fl0xBJLJNUPfrtx%2Bit85qVSVYgG0nSRVJZzI%2BPKN5uPpPyLLnbd4SwG5eEs5RkUc%2Fsfm6BFtiILUxh9Evr6KreiGH2l0m3lY2G6S1lv9o%2Folwh8roH9TjORTlL7gtkBa8GLK5XU1iqYnPBFacARjaekbcJ5BorJCi8ANqKU88PB%2B33cCZctpGW%2F36JCNXZAt8Pva6v9RgEbIL5aQ52C5drY7SDUg%2BuZA33BDsx8ka3mXuw0UQg10J%2FWxHH353syh7333ucM%2BLl1mXOPiDGzeOPQ3F1i6cJRcSNuw6BbbFwxj5jX5CPNClZ5FgwwuAi3q6EcPx0yF4PScoQabxmWljGZT7t6MYuLuRX8W%2F0KN2Fst5mryDKjHZDVSDSMbwb%2BA9TagU7sJL%2FOuGXIo7S5GebCTb%2FOGLE81fie1s8ZI%2BVPHIJdWhnCsK7KCWUoJFIkF7uRpQkmCr4x1K4kY2juJrZnIwQkuUwgtk8HRDdFoZ8l6QTpwPlCysKCGdu6aJuRigmgUZunJ9MM%2FYjMAGOqUBI8sYeJoxCnlxkXrKHEMw%2BN9lAFoJR%2B6RIy8h9Kxce41qFdQPpY%2F0OsCTFr9AbUnViwqPDaal732CTwSkKyXp3celcbmT8qubDlltnH%2F%2Bvf0W%2FnY8PWd2%2FsxZJ%2BB%2FIsDIGjvtRAckIUk82HqUk2HcOwa30CoJ6jFm2MzUSygJBHPW1sRRwWOAy4IXOEB8PjEqBYpycLqa6mO9k3SwRv4Qm8vvaohZ&X-Amz-Signature=57d2c6a1921a19842b0e241e8a19ab217b2cbeeda45b1b5eb2e88cecf1aa0025&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
