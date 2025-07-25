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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNK5F6T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFF5K%2BwsQ2wK2cD0kQX3N0oHTqfg9U1MYcbYlJQjsdLTAiEA%2FmxWYLy1%2FHeR8GjpbORc1ajV1%2BX80MA%2B4XGgUyzLJ7sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGIYZfcRCNDKeH3upircA3XaRuM5sT7mqhX9O1cJKTC0aDasVXl8vCES37ItQpDoA7kz37r%2B4DdOX47D9wAjfLO8ipDTRBJFzBO1tOa831TadpVSufg6L9O9fGkF6mqY3uL2dzDRC26odXwyeQhs4LbidhA%2B7XGNIjZ37hneQE78RESCH6AhS9NP%2FdWzn0JoQvIkaJpO1bVNjf4iNLCzcNt6xIFmkYnj1fCrCEVwl2YbCU8qBr8p38CJ3LLPMPU1uPIYSNBuCl5TJnYUGpShWVFowAam2R%2F7nBXU1m2ucdiaH23Y9FKH0YTNN05cIsH55B%2Fy%2Fzk9mWhtMvpbfHrUS%2Fs%2BQgNwgO3ctpYsMl0%2B9BESI%2ByYvEB%2FV%2Bfda0UJb8cV5ittIkQ3NM3luHtPv7Y4qscpsFi9S3vGBXUyl1TlL0Dq0kXlHSaBRNNddeb1b2izDf7W%2Fm22Amiq%2FyY8KAao0OTFzZmmXyuA7BxDQoA%2BGgfZLfov1%2B3N%2BKPyGNL4DYR6uZzygZioVQsx3MmVYSBaIEO%2BZhPBgPTHN%2Fdf8Os6d4CIyX8GXRnX91WHMGJqVikJz8%2BDo5tfPlX6IXdVgmRu%2BTQc8OzUPIippnXZCX3mgR6Qjf21deeyNxFxAlS15GESLx289IE38YuW7hClMK%2Bqj8QGOqUBCWU%2FdWgxuQF%2FssRPZkT4NcNIJQQM7IFuxi2uasW%2FPR9mHM3c7t7Pdy7vBFHU%2BbrY%2Bo5uxRdb9muz%2FbudsRBjUc8KP%2F8T0W%2FwLtroR6xFIXkJeveXTqb9f5NVAXzKyj1j%2FgWEJJtbvpKO9k42qtUeOxd9g%2B7u9gGg65kaSen40kWCEzse90swiE1fWTP8Z%2B0rS2s0RjARfLHgRtUVpJhYu%2FakBc6n&X-Amz-Signature=b76e1ff2ffa080f07c5701dd754b7f14450e3e8511e3dd892deb97e8419edd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GNK5F6T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFF5K%2BwsQ2wK2cD0kQX3N0oHTqfg9U1MYcbYlJQjsdLTAiEA%2FmxWYLy1%2FHeR8GjpbORc1ajV1%2BX80MA%2B4XGgUyzLJ7sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGIYZfcRCNDKeH3upircA3XaRuM5sT7mqhX9O1cJKTC0aDasVXl8vCES37ItQpDoA7kz37r%2B4DdOX47D9wAjfLO8ipDTRBJFzBO1tOa831TadpVSufg6L9O9fGkF6mqY3uL2dzDRC26odXwyeQhs4LbidhA%2B7XGNIjZ37hneQE78RESCH6AhS9NP%2FdWzn0JoQvIkaJpO1bVNjf4iNLCzcNt6xIFmkYnj1fCrCEVwl2YbCU8qBr8p38CJ3LLPMPU1uPIYSNBuCl5TJnYUGpShWVFowAam2R%2F7nBXU1m2ucdiaH23Y9FKH0YTNN05cIsH55B%2Fy%2Fzk9mWhtMvpbfHrUS%2Fs%2BQgNwgO3ctpYsMl0%2B9BESI%2ByYvEB%2FV%2Bfda0UJb8cV5ittIkQ3NM3luHtPv7Y4qscpsFi9S3vGBXUyl1TlL0Dq0kXlHSaBRNNddeb1b2izDf7W%2Fm22Amiq%2FyY8KAao0OTFzZmmXyuA7BxDQoA%2BGgfZLfov1%2B3N%2BKPyGNL4DYR6uZzygZioVQsx3MmVYSBaIEO%2BZhPBgPTHN%2Fdf8Os6d4CIyX8GXRnX91WHMGJqVikJz8%2BDo5tfPlX6IXdVgmRu%2BTQc8OzUPIippnXZCX3mgR6Qjf21deeyNxFxAlS15GESLx289IE38YuW7hClMK%2Bqj8QGOqUBCWU%2FdWgxuQF%2FssRPZkT4NcNIJQQM7IFuxi2uasW%2FPR9mHM3c7t7Pdy7vBFHU%2BbrY%2Bo5uxRdb9muz%2FbudsRBjUc8KP%2F8T0W%2FwLtroR6xFIXkJeveXTqb9f5NVAXzKyj1j%2FgWEJJtbvpKO9k42qtUeOxd9g%2B7u9gGg65kaSen40kWCEzse90swiE1fWTP8Z%2B0rS2s0RjARfLHgRtUVpJhYu%2FakBc6n&X-Amz-Signature=a473f06e8b8643fe922809830a1ab305f73e85c86515c1987c84c26774cde4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
