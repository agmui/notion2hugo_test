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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJT4W5I3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIE5UMGbFh8lJlfUf0y4Oj9t8j21UTOlLd9NVy1jTd1vZAiBd5g%2FogDBDb2oIEMF8j60kgGNvBqmOfLGchqDNwvIh%2Byr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMGAF82pcIxykmHc9KtwD6osBrLOLyX242T1pU7OZrADcT7v%2FnKg7JE7Veniyr21uND5IRO2wDX9ngAIwlpQRnY%2FBn4U8LGZ7H%2BsTmmmiRlkT%2BqHXMvKTbHZtRydhvB0TDWkLTOWrjVTvVHtvKTxR%2BbnfO0VyYgzEdsK1tosd6BUv8OSW4okVRa%2F95MZmCOUaWWiXPINsfMGTWBOkxwIL9bLJL1CDugU%2B23oAFWIsrmnQxEJbjmudCA%2FqQQMOA4CQ%2BJqnVEq1uw%2FnLWvNrepfh4W5v8Fd5K21t4MDYb%2FjSevSbH7gUiKOcGuiaFecRkJYgrPjCfjul44egPnnzke33VdCPjk7qUQphiv%2FRYPTgmqf8MmhpqUA51kwg%2Fz3sE2HMFibGvnngreNARj9OB0OJBGcLWRw09xSpf5k7eycy618CCHbOTnUgvEEuYc8NxV07oFEqmkMv8znhIxXi%2FAD2SYbvWjK1YIOLYsww0Aeh70CEnNYlWC9hKHpMMmstju5uHUZ2D%2By3rdBmAtYiIjt3vQ%2BRFKE8WYwM3ot%2B8O5JBvZVp%2FZDW4zLI2HI6jIHM96GMsSyyN4ArIbp2ZGUd7F2fsdQDuNe8yZV5ERaf2AqqQKu1Y8LIwca0G7DZ9ECiyHO%2By%2FStcQ4yE7WVsw0umV0wY6pgEMH6Uyu0y8IMMpC%2Brj%2BU0naoYJ5fc27pWA9HJCwSQLpffbT2Co7lZ%2BBS0eVshSebeBmOBxGOz4vptqDHahpmIwWOl%2B0ZBio%2FW7rR0QuJzUTfaPslDlwyMyZRoauHj53BRfta0iAdjeRiJEaPLHdqSqJoJIIgZYchgsJN2reK1foO5fpo2ICtQz5Lcq5HDKnKqKkh%2BTzQ9RwnxR1c48dUdJtZmgvwzN&X-Amz-Signature=f62f1ff8d6ffb6ecd2cbdacd444d6ae9fbc915c8d0389cdb28fc788ef3fb8750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJT4W5I3%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIE5UMGbFh8lJlfUf0y4Oj9t8j21UTOlLd9NVy1jTd1vZAiBd5g%2FogDBDb2oIEMF8j60kgGNvBqmOfLGchqDNwvIh%2Byr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMMGAF82pcIxykmHc9KtwD6osBrLOLyX242T1pU7OZrADcT7v%2FnKg7JE7Veniyr21uND5IRO2wDX9ngAIwlpQRnY%2FBn4U8LGZ7H%2BsTmmmiRlkT%2BqHXMvKTbHZtRydhvB0TDWkLTOWrjVTvVHtvKTxR%2BbnfO0VyYgzEdsK1tosd6BUv8OSW4okVRa%2F95MZmCOUaWWiXPINsfMGTWBOkxwIL9bLJL1CDugU%2B23oAFWIsrmnQxEJbjmudCA%2FqQQMOA4CQ%2BJqnVEq1uw%2FnLWvNrepfh4W5v8Fd5K21t4MDYb%2FjSevSbH7gUiKOcGuiaFecRkJYgrPjCfjul44egPnnzke33VdCPjk7qUQphiv%2FRYPTgmqf8MmhpqUA51kwg%2Fz3sE2HMFibGvnngreNARj9OB0OJBGcLWRw09xSpf5k7eycy618CCHbOTnUgvEEuYc8NxV07oFEqmkMv8znhIxXi%2FAD2SYbvWjK1YIOLYsww0Aeh70CEnNYlWC9hKHpMMmstju5uHUZ2D%2By3rdBmAtYiIjt3vQ%2BRFKE8WYwM3ot%2B8O5JBvZVp%2FZDW4zLI2HI6jIHM96GMsSyyN4ArIbp2ZGUd7F2fsdQDuNe8yZV5ERaf2AqqQKu1Y8LIwca0G7DZ9ECiyHO%2By%2FStcQ4yE7WVsw0umV0wY6pgEMH6Uyu0y8IMMpC%2Brj%2BU0naoYJ5fc27pWA9HJCwSQLpffbT2Co7lZ%2BBS0eVshSebeBmOBxGOz4vptqDHahpmIwWOl%2B0ZBio%2FW7rR0QuJzUTfaPslDlwyMyZRoauHj53BRfta0iAdjeRiJEaPLHdqSqJoJIIgZYchgsJN2reK1foO5fpo2ICtQz5Lcq5HDKnKqKkh%2BTzQ9RwnxR1c48dUdJtZmgvwzN&X-Amz-Signature=cd5c633b960304ce969c8e3a41dbd19b3d8c18ed248e060b662d07845b6cb8e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
