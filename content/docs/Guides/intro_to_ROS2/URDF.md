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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKVZOY7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzr%2FYUNR0RVzUTIxqY9NeBvb5DUASKMq%2F5iV89McA0fAiEAt012kwtJmRIUowVhO6%2FmTz0ckQJGYHzngKaDrBZGiaYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bi8rHWyBhnotEN6CrcAz2Wu%2FutxPHC4rmspPuo0IAfR5iCwI62oDfOWPRBFAGDo9HaTVMHs0O7JWIHQsM2Z9q0LmGbdW710WEPG3JcoBno5nm9Y50c%2F71gIq9ZwpwevLaUDW6XDy%2FDPGZIyGt0PbNx5BTP92tdK8kTWCAP4R4GkuOb9juDVDh95VkxycMxG0PDf8rYppAiOkA6xJd6IwIaTQmQv%2BtKhBH7mtqhc%2FaFDls%2FT%2FKgod%2FoFjuqIerWCE1OFz6Xeqvf4KKe0ch26rcHGuI7xvBrmC8EbU6lOzhwnXVMOLkUp0ZhJLfLyyHm%2Beg%2BaKbZB4am2gRmE0WXTNTuSVslrn4OBr%2Fpy7uTy3N0Gb8hmgU1zx%2FTMlAphYkooUYH5ewAEgFtDmomJ7XjsI8bavdx6COA3ZHejMQUM05N4KLEO6BqgJtC1KPKvaL9z9QXqWHDPGorx7ml2Ub7AJecHWIDNofVl9w%2Bg8tO0PJwU14tp8nCVRa%2BeDpRDkN2PF98uZonRF7A3L8kRvAWLdsHsvpQ7EfXSHSgivkPYZEy06Q8AMKSgmJfxUzudcApqwzUPqz3Qwl%2BoK6LpoXcEy8H39kaxpmv2zK7yrbPJMO9pgIVJgbQXMyI2BF6YXRpHO57Skfzd%2F74CMZbMJbNhsMGOqUBbRwYCgYoia%2BQAb8rzgw9TL4Gg0DPruAaWTT6AQybfE35T1%2BJmBKAbIpOTtXQIEDg2cNd4RRr0SjVZLDz7mGbgGzqcM%2BoY2aNgc2EdOs0G%2B62r1TaX6kl8xPrTY9K5QaMOkLAfFxtCeKqzLfArY8zr%2BuG%2BgjHR2nPklAms%2FKs5qFZ8QxtVYxBShtx5fkxlTKF5nWQPVpPvh2ouRRAEPY8SW4gjLzN&X-Amz-Signature=62320ccda210fdfb829dac03799eb8d103036ce56aa1488c42c78021f5b960e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKVZOY7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzr%2FYUNR0RVzUTIxqY9NeBvb5DUASKMq%2F5iV89McA0fAiEAt012kwtJmRIUowVhO6%2FmTz0ckQJGYHzngKaDrBZGiaYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bi8rHWyBhnotEN6CrcAz2Wu%2FutxPHC4rmspPuo0IAfR5iCwI62oDfOWPRBFAGDo9HaTVMHs0O7JWIHQsM2Z9q0LmGbdW710WEPG3JcoBno5nm9Y50c%2F71gIq9ZwpwevLaUDW6XDy%2FDPGZIyGt0PbNx5BTP92tdK8kTWCAP4R4GkuOb9juDVDh95VkxycMxG0PDf8rYppAiOkA6xJd6IwIaTQmQv%2BtKhBH7mtqhc%2FaFDls%2FT%2FKgod%2FoFjuqIerWCE1OFz6Xeqvf4KKe0ch26rcHGuI7xvBrmC8EbU6lOzhwnXVMOLkUp0ZhJLfLyyHm%2Beg%2BaKbZB4am2gRmE0WXTNTuSVslrn4OBr%2Fpy7uTy3N0Gb8hmgU1zx%2FTMlAphYkooUYH5ewAEgFtDmomJ7XjsI8bavdx6COA3ZHejMQUM05N4KLEO6BqgJtC1KPKvaL9z9QXqWHDPGorx7ml2Ub7AJecHWIDNofVl9w%2Bg8tO0PJwU14tp8nCVRa%2BeDpRDkN2PF98uZonRF7A3L8kRvAWLdsHsvpQ7EfXSHSgivkPYZEy06Q8AMKSgmJfxUzudcApqwzUPqz3Qwl%2BoK6LpoXcEy8H39kaxpmv2zK7yrbPJMO9pgIVJgbQXMyI2BF6YXRpHO57Skfzd%2F74CMZbMJbNhsMGOqUBbRwYCgYoia%2BQAb8rzgw9TL4Gg0DPruAaWTT6AQybfE35T1%2BJmBKAbIpOTtXQIEDg2cNd4RRr0SjVZLDz7mGbgGzqcM%2BoY2aNgc2EdOs0G%2B62r1TaX6kl8xPrTY9K5QaMOkLAfFxtCeKqzLfArY8zr%2BuG%2BgjHR2nPklAms%2FKs5qFZ8QxtVYxBShtx5fkxlTKF5nWQPVpPvh2ouRRAEPY8SW4gjLzN&X-Amz-Signature=ef8f41de7627b3d2a0092aa6817c511ff407a51682c957f250717b6bcdcdcaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
