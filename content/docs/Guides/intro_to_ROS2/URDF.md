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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DX6WDP4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBFe5yHaVLDMuL13cP61YEkh%2BYj6oDm8WVfhGl6Upm3QIhANsUqC5SqQ6mKWwmjaCaYSi9bjV5SPSOUaJtCO2eJ5iJKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDTujBMxH2Ilj7A34q3ANrOt1555Fi7uz%2BjNsP5a0HZc3b3odWytGlUaOeJggHlO2tYNde5YkFDZv3xXdBSuVOQ8dCMpHArzxugO2kP8w2Ml6wj%2BsGyLcG06kV449Hu563%2FANF1kQ57pVdjfmbm8rrIgrXKHX0LdUA5%2FO5gxHwC%2FSttTjefwxKTfMba7%2BS%2BAL5PijSq6r1Wsux4LF92MZtMhbNK4x4FDBldx20M7Y2wJ9XQ5NjauXF8B7lR6uMO2XQXkRmHhL23xVjXgiFSHy1DEbxHNRP0fLkUKS1wUQWlyOkW3a7fsng7RQMbhLGrIf%2FdwKkXugpekENQP9ip%2BvEDvRJdSXvr4jWtO2R2%2B3%2Fgq6RQZMrZ%2BGxXotjW3Z%2BhH7E%2FLEr5Dbi%2Faya0AjKzqs1KyRB5uF4YC%2BHG%2FogKTyQbOlFYhHb5Qd1os1bE7%2FtGdCRJ2bZf3b2KvTDrNxMijw7Yt4eyWudRSJhRiKhRDQ6yxucio0WI%2F%2FgrMgB%2FBOxvyXA23j%2FXz8sJ2gVjz8qqpKj9iEdGvFNEo%2B1%2FE8AJ%2ByktEXMnTOHWgz%2FGC9MPC9P0N67Fqd%2F%2FDcQi17uL4SSU%2BCe%2BNoWrORmAb%2B3ieaWUg12kqWx8ZN3c5aVcI6xJzuigswcmki2BX2TqTLanjCzmfi%2BBjqkAWZmoZPKCcle%2Bm1F5ZgP%2BCnD76Y%2BnGtK%2FsvRMGU7JOGwfBQxM8xTcSPTLMkWZPmeiWKUEzdwRQKhMk%2FYMTZNEnkhk8DTbp9681a6u0UIwPUpZXM9Q7kHNqu62qpTHwM6SlV3dP%2FkvS5hw%2FJ9coLY%2B7JBgT1kA0khMl6dEMZyytLRlKVHTA8PEWf4kLuy6TGdFfhWLVRBZBlcMgalnpaQnTWSiF3J&X-Amz-Signature=857ca392f761e4dd1bec005b9a7024cdbdcd4b8c3dd0c2109192f15048c50cac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DX6WDP4%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCBFe5yHaVLDMuL13cP61YEkh%2BYj6oDm8WVfhGl6Upm3QIhANsUqC5SqQ6mKWwmjaCaYSi9bjV5SPSOUaJtCO2eJ5iJKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDTujBMxH2Ilj7A34q3ANrOt1555Fi7uz%2BjNsP5a0HZc3b3odWytGlUaOeJggHlO2tYNde5YkFDZv3xXdBSuVOQ8dCMpHArzxugO2kP8w2Ml6wj%2BsGyLcG06kV449Hu563%2FANF1kQ57pVdjfmbm8rrIgrXKHX0LdUA5%2FO5gxHwC%2FSttTjefwxKTfMba7%2BS%2BAL5PijSq6r1Wsux4LF92MZtMhbNK4x4FDBldx20M7Y2wJ9XQ5NjauXF8B7lR6uMO2XQXkRmHhL23xVjXgiFSHy1DEbxHNRP0fLkUKS1wUQWlyOkW3a7fsng7RQMbhLGrIf%2FdwKkXugpekENQP9ip%2BvEDvRJdSXvr4jWtO2R2%2B3%2Fgq6RQZMrZ%2BGxXotjW3Z%2BhH7E%2FLEr5Dbi%2Faya0AjKzqs1KyRB5uF4YC%2BHG%2FogKTyQbOlFYhHb5Qd1os1bE7%2FtGdCRJ2bZf3b2KvTDrNxMijw7Yt4eyWudRSJhRiKhRDQ6yxucio0WI%2F%2FgrMgB%2FBOxvyXA23j%2FXz8sJ2gVjz8qqpKj9iEdGvFNEo%2B1%2FE8AJ%2ByktEXMnTOHWgz%2FGC9MPC9P0N67Fqd%2F%2FDcQi17uL4SSU%2BCe%2BNoWrORmAb%2B3ieaWUg12kqWx8ZN3c5aVcI6xJzuigswcmki2BX2TqTLanjCzmfi%2BBjqkAWZmoZPKCcle%2Bm1F5ZgP%2BCnD76Y%2BnGtK%2FsvRMGU7JOGwfBQxM8xTcSPTLMkWZPmeiWKUEzdwRQKhMk%2FYMTZNEnkhk8DTbp9681a6u0UIwPUpZXM9Q7kHNqu62qpTHwM6SlV3dP%2FkvS5hw%2FJ9coLY%2B7JBgT1kA0khMl6dEMZyytLRlKVHTA8PEWf4kLuy6TGdFfhWLVRBZBlcMgalnpaQnTWSiF3J&X-Amz-Signature=82015d14464dd48d3f3a4ff644e58bc4dc8c7434fe7a586f049ce5f55a66047c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
