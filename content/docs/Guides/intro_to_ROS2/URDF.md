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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2BV6FX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8BTAPhpRVhP%2FkrhkFP1gSUrQWTxftQhZR5f%2BU4pHvsAIhAIOItmx9hkRQkSwRwWzOQTgvhUB3K82sZuetH%2FbPg4HTKv8DCEsQABoMNjM3NDIzMTgzODA1IgyYFSJvwF8L1F9Q%2FKIq3APConcc4sHgJq4BTceNadR1sZRePYaOFaEiDPblkE47RKdQZmzHchFK%2BkGPEsCC%2B7YbDHRf1TXYoJsJUOIIfRbAB%2FPpwIgJUEGkSh6PI2bK7h0AHvzLxaEAMEFdchxk%2BVYjlL7i6UOfPNqMInQYupMhbOFlMlkQgNX3hA5LWT9mLXQVmxmKnkaEm2HUn9m19MxjxVl47J%2FZgbkzC1CGIxG6iXzs4i04%2FJcXzswzaDdcDQ1bPNulqzC%2FQU2nwvAC7s9L5PH5%2B8uunCaB53nzI62aeEd%2BfJCS56UbnRcJ8er6EoKe4ytXy6ssCJsNWBIly7vDYLe%2FWiR%2FX2J00iw%2FZrhe4PzU0Fj0hFSruvVKIp7zZDY7TitSD0bmxdZRALffgA7JV9yihIS38U0p4zAQ5LLWmLF%2BelgosiNqhk6k90GxbVdaALqVmxfgf5UE6%2BcE2fDo%2BKBbQd6bFrpKhKa8Wv0HDJAEFgwz55KvrLXg%2F71P3%2F%2F%2F93%2FyL3OIDCOoCm8gPtFPKIBV7KDSFZr9c4yFVzIUpRN9wH5Wi1KrD6lIkab011l5dEhJVkot5%2BzRlBruhQYNqs9%2BLKtRthJ%2FIabG3NgEcKaYJrHAfooa7hVE7h2McSyHk0o3D5zWiCjeozDhsuDLBjqkAUpztUnRIUYfpTv1r6xoUlS0tMBad1bR6oblVAXU1QLAM6jQQEKd9LPcrRFrEEncMevUA4OB4%2F5Lk6foWSYT%2BB9lZIbaMN1WjhtiI9i5x6Vrd0sx5LyFj%2Bp6SzMFqvyW%2FuWOngRgPpvuWKIGdU4JR8FFWOqtaQnArHJpV58sI8iQhIdjzcMRtXdX7Ov9YVKup%2FRPvqiMxxyg9zRNP2SgZJ%2FlVqqp&X-Amz-Signature=7aeec9fa935fef46031c6d0524c9593979e10c5b5269d118bbc89d70df3c5c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2BV6FX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8BTAPhpRVhP%2FkrhkFP1gSUrQWTxftQhZR5f%2BU4pHvsAIhAIOItmx9hkRQkSwRwWzOQTgvhUB3K82sZuetH%2FbPg4HTKv8DCEsQABoMNjM3NDIzMTgzODA1IgyYFSJvwF8L1F9Q%2FKIq3APConcc4sHgJq4BTceNadR1sZRePYaOFaEiDPblkE47RKdQZmzHchFK%2BkGPEsCC%2B7YbDHRf1TXYoJsJUOIIfRbAB%2FPpwIgJUEGkSh6PI2bK7h0AHvzLxaEAMEFdchxk%2BVYjlL7i6UOfPNqMInQYupMhbOFlMlkQgNX3hA5LWT9mLXQVmxmKnkaEm2HUn9m19MxjxVl47J%2FZgbkzC1CGIxG6iXzs4i04%2FJcXzswzaDdcDQ1bPNulqzC%2FQU2nwvAC7s9L5PH5%2B8uunCaB53nzI62aeEd%2BfJCS56UbnRcJ8er6EoKe4ytXy6ssCJsNWBIly7vDYLe%2FWiR%2FX2J00iw%2FZrhe4PzU0Fj0hFSruvVKIp7zZDY7TitSD0bmxdZRALffgA7JV9yihIS38U0p4zAQ5LLWmLF%2BelgosiNqhk6k90GxbVdaALqVmxfgf5UE6%2BcE2fDo%2BKBbQd6bFrpKhKa8Wv0HDJAEFgwz55KvrLXg%2F71P3%2F%2F%2F93%2FyL3OIDCOoCm8gPtFPKIBV7KDSFZr9c4yFVzIUpRN9wH5Wi1KrD6lIkab011l5dEhJVkot5%2BzRlBruhQYNqs9%2BLKtRthJ%2FIabG3NgEcKaYJrHAfooa7hVE7h2McSyHk0o3D5zWiCjeozDhsuDLBjqkAUpztUnRIUYfpTv1r6xoUlS0tMBad1bR6oblVAXU1QLAM6jQQEKd9LPcrRFrEEncMevUA4OB4%2F5Lk6foWSYT%2BB9lZIbaMN1WjhtiI9i5x6Vrd0sx5LyFj%2Bp6SzMFqvyW%2FuWOngRgPpvuWKIGdU4JR8FFWOqtaQnArHJpV58sI8iQhIdjzcMRtXdX7Ov9YVKup%2FRPvqiMxxyg9zRNP2SgZJ%2FlVqqp&X-Amz-Signature=105ff7017adfe0c94ea118d58e8fcb38191a10e93adbfce2a45705d64cb27daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
