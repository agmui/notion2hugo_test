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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QH6MLL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPFRz7KCzlgtU9kFnJojCETqMjtlR4TSh13cSX%2F0vJfAiEA1S39uCrSfbkxByC0P3MphzZFabDgiExh2hVC61ULoxEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF9pYHRYOp9nCIWayrcA6d7eV6Mp4bjSCoGfkCQiDJx4kWDy7szPoMU%2Fm3%2BDlsdkNSFI5cl3FFxcJDAhJ5Nxap21Eo0EESr%2Fw4xPihjsTdbs0CYS3PYGsNN3oMId9ks5ASyLsbLAPB%2BCqXbouHUhpJ3i8grQC20rLSeT5Q19aNuOaGvM4JncXMnM4aQrucODt0iE8GM6I5MDLXcdAL8aZt5n4ekR%2FxwW2hM47yxGgq3Nm1LuTGYc6%2Bbf0JdN%2BURiny80OgLgxq38k8gnSmCWFV1LX84114yg3cQ9g4xvkB01V12elIxIQSzuSgnjyo7nns6R5KxnS5SpBtNjQsCtyTtWssca7oGfUVrzFqOQLKEkReXdsZfQeo9tDepHguaZ91r541jD73cZuVzfjdHKpC5fcHfmc4uYN2HXrPB%2F6oPe8P2%2BoI94r7MFmNfw1mkzXjKrWAkcrJjyI9XrZxnNOKTfmtd4dxNuqLkhFApMaACPAHUD%2BtmcLRmakh2n8LriJ%2BK33wSFMlei4gdoLMyVWfa4x4O5S%2FjwvftApaR09g%2BtywwyU6%2FmD3bkJ8U9DkGCIdG4x5dSMfXhcd0duwrc36ryuP6Wt%2F4jkk%2FKgyXujvn9tuOYFwTV7mXwLUEiUEXf%2FdsQ3PK%2FC1%2FZEjeMN%2Blj8MGOqUBPvn%2FlPioEcRQq8fqJYx8hmmGi8WtGBokj9KpUqk9FE6fjESEnscI24c3UVz0fnaWi6WfNqHzDcg5yUDtugCxbfbPaN0un%2F51fmZoiiy90fniOAN3PmIjHCwzq%2BrZcSX8FXSSlYzptwln6LBnAI9mi6TUCaIZruDG0RzIbILJKoIaLsA3zmTz9Fzj5zawGnRqnhwyRN7RhR099wHIuneqEw2jgDN4&X-Amz-Signature=3d02cac89d092f14704dad2ffb4dc3863d960e57a447256ec7af26e4135a268d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3QH6MLL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPFRz7KCzlgtU9kFnJojCETqMjtlR4TSh13cSX%2F0vJfAiEA1S39uCrSfbkxByC0P3MphzZFabDgiExh2hVC61ULoxEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF9pYHRYOp9nCIWayrcA6d7eV6Mp4bjSCoGfkCQiDJx4kWDy7szPoMU%2Fm3%2BDlsdkNSFI5cl3FFxcJDAhJ5Nxap21Eo0EESr%2Fw4xPihjsTdbs0CYS3PYGsNN3oMId9ks5ASyLsbLAPB%2BCqXbouHUhpJ3i8grQC20rLSeT5Q19aNuOaGvM4JncXMnM4aQrucODt0iE8GM6I5MDLXcdAL8aZt5n4ekR%2FxwW2hM47yxGgq3Nm1LuTGYc6%2Bbf0JdN%2BURiny80OgLgxq38k8gnSmCWFV1LX84114yg3cQ9g4xvkB01V12elIxIQSzuSgnjyo7nns6R5KxnS5SpBtNjQsCtyTtWssca7oGfUVrzFqOQLKEkReXdsZfQeo9tDepHguaZ91r541jD73cZuVzfjdHKpC5fcHfmc4uYN2HXrPB%2F6oPe8P2%2BoI94r7MFmNfw1mkzXjKrWAkcrJjyI9XrZxnNOKTfmtd4dxNuqLkhFApMaACPAHUD%2BtmcLRmakh2n8LriJ%2BK33wSFMlei4gdoLMyVWfa4x4O5S%2FjwvftApaR09g%2BtywwyU6%2FmD3bkJ8U9DkGCIdG4x5dSMfXhcd0duwrc36ryuP6Wt%2F4jkk%2FKgyXujvn9tuOYFwTV7mXwLUEiUEXf%2FdsQ3PK%2FC1%2FZEjeMN%2Blj8MGOqUBPvn%2FlPioEcRQq8fqJYx8hmmGi8WtGBokj9KpUqk9FE6fjESEnscI24c3UVz0fnaWi6WfNqHzDcg5yUDtugCxbfbPaN0un%2F51fmZoiiy90fniOAN3PmIjHCwzq%2BrZcSX8FXSSlYzptwln6LBnAI9mi6TUCaIZruDG0RzIbILJKoIaLsA3zmTz9Fzj5zawGnRqnhwyRN7RhR099wHIuneqEw2jgDN4&X-Amz-Signature=755e32cbf271c3ec34342973ff9505891a974742b04be2cc468eade25b9017c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
