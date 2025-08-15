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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMM5PBK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDkHPbuKxTUmGqwd5iTkB6U0TS3%2BD1ufs9zn%2FtKaoCaFAiEAgEYNBHT7MVeheT1Cd6PO4TQ5DmSrqaDUgkv8lVgl65kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKgkYUf9s0KP53NaiyrcAxhtzgU84HVq0FRKzhTxDEMy%2F2AB9827QhfOcypjelJUoe7S3539%2B1i20h3AevhXmoiCzoUcDbKnV2eGRb53TMbeR3c17dCEdbLco9UolL4BChmKP9%2FgLIWQ8YWYrMoljDsWwKm5x49dXTwH%2BiygBQTJvdQGlViX9crK0y2SG5v4bcVGbjFhVujfiTwi5DczU%2FjAQBLn3IdkaXa%2Bch8Aod4MHazAMMqJSeqEoTvZWWmXgxdwRdoDe1iEUBWNJxBzgMphPLQtKYovJTjrC2Ah2e0fP0F5JquBMCanqFYbQMh9A9uwo3o1xAnxsO8eEfzH9eEETOLesE6DnFTw9%2F3YCBhBWslPhSZfB6jkaLa1v0uIibLb9EZNeUHL2a6TlgMurhCdIPq4I%2B2CwOr9Uf5ukHClbCg13PQGNOogVEIrTWx7804mKMARaoNf8RrJx7Q%2BpsiCkmWPbBZ%2FDvV%2BSScM1DJYLLqWh8%2BkUNJYeSWu7LfiVJKJ9%2BJ4QeCDRF0FZSDA5Gccq58TNIXRJBVSV5ue82qKp3g0o2n8YZ%2BDoTBxL8xjRAYvVlb8ezHrkXz8xaFyiLejDkQsZg7Cc6Jz8wJZxSsiaNxdfUSk1P0i6CeE3uHOWSfbHQus%2BZmyxs2sMPKi%2B8QGOqUBRRgtrrEFWeDlYmIeg8yjoutr%2Fg3Pwb9oiCfNpzMO3mFYY3kkXyyLHys51d8z6O00GaTRYlQtTWOWkujh7hD9xojlMkCnB9KrPjrVB%2BtnrtZm4zfmcZEFmWuPY48nWnnO%2FCCWzFutyc8EpKQXbud2onHHAgysqe7Qol7Z4uh34gZ5SXK6bHopIXxQUBFI5RvFPG6mJct8xxag0RJea%2FKb2MkrkRap&X-Amz-Signature=b764a6143be44bd893350e297b378433fbc5eb6357ed8cea37170de520d7dc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HMM5PBK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDkHPbuKxTUmGqwd5iTkB6U0TS3%2BD1ufs9zn%2FtKaoCaFAiEAgEYNBHT7MVeheT1Cd6PO4TQ5DmSrqaDUgkv8lVgl65kq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDKgkYUf9s0KP53NaiyrcAxhtzgU84HVq0FRKzhTxDEMy%2F2AB9827QhfOcypjelJUoe7S3539%2B1i20h3AevhXmoiCzoUcDbKnV2eGRb53TMbeR3c17dCEdbLco9UolL4BChmKP9%2FgLIWQ8YWYrMoljDsWwKm5x49dXTwH%2BiygBQTJvdQGlViX9crK0y2SG5v4bcVGbjFhVujfiTwi5DczU%2FjAQBLn3IdkaXa%2Bch8Aod4MHazAMMqJSeqEoTvZWWmXgxdwRdoDe1iEUBWNJxBzgMphPLQtKYovJTjrC2Ah2e0fP0F5JquBMCanqFYbQMh9A9uwo3o1xAnxsO8eEfzH9eEETOLesE6DnFTw9%2F3YCBhBWslPhSZfB6jkaLa1v0uIibLb9EZNeUHL2a6TlgMurhCdIPq4I%2B2CwOr9Uf5ukHClbCg13PQGNOogVEIrTWx7804mKMARaoNf8RrJx7Q%2BpsiCkmWPbBZ%2FDvV%2BSScM1DJYLLqWh8%2BkUNJYeSWu7LfiVJKJ9%2BJ4QeCDRF0FZSDA5Gccq58TNIXRJBVSV5ue82qKp3g0o2n8YZ%2BDoTBxL8xjRAYvVlb8ezHrkXz8xaFyiLejDkQsZg7Cc6Jz8wJZxSsiaNxdfUSk1P0i6CeE3uHOWSfbHQus%2BZmyxs2sMPKi%2B8QGOqUBRRgtrrEFWeDlYmIeg8yjoutr%2Fg3Pwb9oiCfNpzMO3mFYY3kkXyyLHys51d8z6O00GaTRYlQtTWOWkujh7hD9xojlMkCnB9KrPjrVB%2BtnrtZm4zfmcZEFmWuPY48nWnnO%2FCCWzFutyc8EpKQXbud2onHHAgysqe7Qol7Z4uh34gZ5SXK6bHopIXxQUBFI5RvFPG6mJct8xxag0RJea%2FKb2MkrkRap&X-Amz-Signature=8c13c7bc9fe26d9d60219a494d45974e66d2602d9edfff030041ad45316a36de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
