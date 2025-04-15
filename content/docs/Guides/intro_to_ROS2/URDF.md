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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJPIRB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4KIa76bKFDgoHc%2B25LcNvhNkER6WyCeDprs%2F87xWsUgIgDH6u3Cx6W52ujrYIN9cCAAR8GcxWM6CxvrWPwvRM6D8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ%2BcGPsatqnd1uSvCyrcA%2BkdhN5YtZXVDhXmH4BxeB3svXSVU6FGZWjD0136x7wBFrBiChgl4%2BGs5j%2Fzmy40%2F6bxiZi8nFhLD%2FX%2Fb8vTqVSzMHO4ze%2Bd7OGavGqJc2equrTcwHe%2Fa%2BmNCmsl2tLj4yF8z%2FEH9tO4E2vYWE4%2FL1EqSy6bywAyqc6UMqJlgZKxfPl1t3Llrlye5RCo%2BI2uZ2o9trng9pRhJQi2HNK6%2FLxfG%2FxhnmkLWMqD9VEaRkACTR8i%2FMWTIIglJcAFC7qL0uJiJNTucHEPAYDuo3Wc2UokYrJyTdgYMhMWJ3UyweGS%2BqkkBQ%2BxGor7y6D1qvOFxrw6B4pgvyCeqEYVlIi2LT5zqRLBeSxgmCQpD0MiOjhEmfWCS%2Bjyy85ecM910lM5plZNnReKNV88PO6hy9iTC4yPtbO3PCR9Cq5%2FzJgpk7bih%2FkWBDaXTgVp6ZzvS6Fe1%2FzT27AzJbHqE8JRCUzKbKpceIDOM7UDpMvb%2FQlNyugljRyukHC4d%2BvCyylZRSrVCdTvfFKM%2FDet9LmHNjJmqRibUjckdlovu06tk%2Bv2ta2%2FyDuvBekQgvwlvyUKhyHlxoXv7YlRdsjYilZ%2Fh0NI9My21FhZI%2Fc6AYJOd8EvdQbrBWClku%2BIaFs9P2skMPfV%2Br8GOqUB589t7TxrBg594jr15Xb9N8LFKVXXSRL4%2BPUSMojA6mvClUOLJdwAZ6djxB%2BA2t%2BNPRkFgv1BGhtEqKhXQmGsM2s5qaufBE8THR0R7GobXcoMLftlgI2Q4%2F6PFALpN4IRGDPk%2Fjw7xTDWc0ybWThyb5fEkOEmcNXZphstwe%2Fyjqdnh71Y9%2F%2FnCeOAbAECDdQcFclvGQUfzFcC9PjNz%2Bc7yetrF4y1&X-Amz-Signature=55e4d8e7866a758da8a72386feeb599d9e1139b82bc7fbd005e84552b968e80e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJPIRB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4KIa76bKFDgoHc%2B25LcNvhNkER6WyCeDprs%2F87xWsUgIgDH6u3Cx6W52ujrYIN9cCAAR8GcxWM6CxvrWPwvRM6D8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJ%2BcGPsatqnd1uSvCyrcA%2BkdhN5YtZXVDhXmH4BxeB3svXSVU6FGZWjD0136x7wBFrBiChgl4%2BGs5j%2Fzmy40%2F6bxiZi8nFhLD%2FX%2Fb8vTqVSzMHO4ze%2Bd7OGavGqJc2equrTcwHe%2Fa%2BmNCmsl2tLj4yF8z%2FEH9tO4E2vYWE4%2FL1EqSy6bywAyqc6UMqJlgZKxfPl1t3Llrlye5RCo%2BI2uZ2o9trng9pRhJQi2HNK6%2FLxfG%2FxhnmkLWMqD9VEaRkACTR8i%2FMWTIIglJcAFC7qL0uJiJNTucHEPAYDuo3Wc2UokYrJyTdgYMhMWJ3UyweGS%2BqkkBQ%2BxGor7y6D1qvOFxrw6B4pgvyCeqEYVlIi2LT5zqRLBeSxgmCQpD0MiOjhEmfWCS%2Bjyy85ecM910lM5plZNnReKNV88PO6hy9iTC4yPtbO3PCR9Cq5%2FzJgpk7bih%2FkWBDaXTgVp6ZzvS6Fe1%2FzT27AzJbHqE8JRCUzKbKpceIDOM7UDpMvb%2FQlNyugljRyukHC4d%2BvCyylZRSrVCdTvfFKM%2FDet9LmHNjJmqRibUjckdlovu06tk%2Bv2ta2%2FyDuvBekQgvwlvyUKhyHlxoXv7YlRdsjYilZ%2Fh0NI9My21FhZI%2Fc6AYJOd8EvdQbrBWClku%2BIaFs9P2skMPfV%2Br8GOqUB589t7TxrBg594jr15Xb9N8LFKVXXSRL4%2BPUSMojA6mvClUOLJdwAZ6djxB%2BA2t%2BNPRkFgv1BGhtEqKhXQmGsM2s5qaufBE8THR0R7GobXcoMLftlgI2Q4%2F6PFALpN4IRGDPk%2Fjw7xTDWc0ybWThyb5fEkOEmcNXZphstwe%2Fyjqdnh71Y9%2F%2FnCeOAbAECDdQcFclvGQUfzFcC9PjNz%2Bc7yetrF4y1&X-Amz-Signature=029ad22f2f48c3468256504056e3fe2e135329f55d9f54992e51c53b3f166f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
