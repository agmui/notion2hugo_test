---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M44VUHO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFjD937bDOKzB9joezPQg3nMR8GdgAnb%2FxPUgIvCm9x%2FAiAWWT6jTYktfYOS%2BptBZpg0wpPZRf7YzK3UzkmRwG5SwyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSQfZnXj9Dh41W2CKtwDDXCRc5uo%2F2m8RhOWbWRBrw1ogMT8rRIhFienzESYIm9CU%2BAxv8379NL5Ii9vWeTCKKTwc2OJuS7vTKDzJ3eKj301QVm2CHUpUGS%2BwmtRXbWzte4PN1%2BjKeqpbLs7eg67V9Vk7xLyX38T4gMYSzMKPeWuB77%2BmKjCDcdgHetxrC17pl0WcAGaTpCSHLpQKvE6feZ9cowRtdwRbZIVZBholdpOtrZetuQBkveuHl6Se0DtSklR7RJ4OH%2BfuimsK2WEVNo5Ss0LCSFfbPwUvp4TJk9%2By0u4Irl92G0q8zu2B%2BolvbSGKc42eOkRR440XCmQXlKjJ1mTu316vxZEec%2BcfZ0klXJu3k6J9psQHgZfES5g%2BxcqFpG1H8NAgkbiN1xSeZK91mi8an3fRxc9LVb9PYJnXe%2FjEGrL29OHupnK%2FLAFAEyXODgYzNlVuE6a5ATGm3f0I0qdYYhir1Np7hEYqckUmR8DalWZciCzym0TOdMyi7DD1Z60bi9nJLTVqUCmI%2BHemscrNXGgiPiM9OMlIhwkIYOqpz3szsNzXpQkCG4kiY5JsanwdibEnnG2q29I1vmnYMn0s66jfHt8tkxwIBOWZs2B2CS0AMbabzOEqD5lgmPqwieguHlPJwAw5OqJxQY6pgE6S%2F2FEYE%2FBm3UvJLSt9ZYuyBkSC6FCax6bO0PA4rQGBJIKky1Ut6pfXJtPvsqkVL5rL%2BkJwgZjVVfo5WU8ek6UP6nx3j%2FlnperIAq7UpGu4AW%2FbszdPi86XnrvclJbwbSurofEs25dz%2FTMbF1BylK89X4BqQrlWfd9AG6TguPMMfutHQ1F%2F8UGXBksJaF01PSlEFCaPCoYBmtdHjaYco%2BXjZPi8O8&X-Amz-Signature=4db6d8b7f6bc534751d86ab5d0aa48a2d4d8696aeec09a5d827af65184068ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M44VUHO%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFjD937bDOKzB9joezPQg3nMR8GdgAnb%2FxPUgIvCm9x%2FAiAWWT6jTYktfYOS%2BptBZpg0wpPZRf7YzK3UzkmRwG5SwyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSQfZnXj9Dh41W2CKtwDDXCRc5uo%2F2m8RhOWbWRBrw1ogMT8rRIhFienzESYIm9CU%2BAxv8379NL5Ii9vWeTCKKTwc2OJuS7vTKDzJ3eKj301QVm2CHUpUGS%2BwmtRXbWzte4PN1%2BjKeqpbLs7eg67V9Vk7xLyX38T4gMYSzMKPeWuB77%2BmKjCDcdgHetxrC17pl0WcAGaTpCSHLpQKvE6feZ9cowRtdwRbZIVZBholdpOtrZetuQBkveuHl6Se0DtSklR7RJ4OH%2BfuimsK2WEVNo5Ss0LCSFfbPwUvp4TJk9%2By0u4Irl92G0q8zu2B%2BolvbSGKc42eOkRR440XCmQXlKjJ1mTu316vxZEec%2BcfZ0klXJu3k6J9psQHgZfES5g%2BxcqFpG1H8NAgkbiN1xSeZK91mi8an3fRxc9LVb9PYJnXe%2FjEGrL29OHupnK%2FLAFAEyXODgYzNlVuE6a5ATGm3f0I0qdYYhir1Np7hEYqckUmR8DalWZciCzym0TOdMyi7DD1Z60bi9nJLTVqUCmI%2BHemscrNXGgiPiM9OMlIhwkIYOqpz3szsNzXpQkCG4kiY5JsanwdibEnnG2q29I1vmnYMn0s66jfHt8tkxwIBOWZs2B2CS0AMbabzOEqD5lgmPqwieguHlPJwAw5OqJxQY6pgE6S%2F2FEYE%2FBm3UvJLSt9ZYuyBkSC6FCax6bO0PA4rQGBJIKky1Ut6pfXJtPvsqkVL5rL%2BkJwgZjVVfo5WU8ek6UP6nx3j%2FlnperIAq7UpGu4AW%2FbszdPi86XnrvclJbwbSurofEs25dz%2FTMbF1BylK89X4BqQrlWfd9AG6TguPMMfutHQ1F%2F8UGXBksJaF01PSlEFCaPCoYBmtdHjaYco%2BXjZPi8O8&X-Amz-Signature=ad229c61d3b64c49be49855085777a3a2ec65e4005301cc22ed754f776c53605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
