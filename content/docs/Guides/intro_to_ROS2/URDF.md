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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPSP3E2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDunA%2Fd5EOL8GUWIDvhQxkAF62as%2BlGp4TXP2OSdZF6YgIgGIqlmhjSplqXZDzJN83QIqO4hPJ9rIO3SCIYBwF3fPsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMaLZUIPL03OA11ySrcAxL4E9XGRcWRtUUDguceTSLsFS7tWvDEoYPKmvweHqXqbElB0GBIWq%2F4HsfikuXe893c51YCnHHfb0k%2FRr%2BLtqLCm6ADTm%2FeRGk5VvUPCYtghbZDh%2Bw97OqJiCUPlBMtNh%2FYxhFNepMZajNMID0qgRtKmTpPyCQiJxoMkJs4YEpNhtzw5XIMOjrc8jH0ooaIZUPG8eaGGsXX2ZVWH%2FeFvF%2FzEhhiNXuHHVmq5nQR%2BggUqG%2FbmeCq832as0G3qeU7k%2B95g0%2B3E7rkzmsBxE3cp1q624Ct40oMWE9SiqlyB%2Ffdz%2B1WnetbY%2BtxmfXc2l8NkdrPUMRShFMv8bNvTyEkZIXsOWGTQljd3U8lU0V9T8zVftM%2FsEsVg6QxYjCWs2qs%2FgcXnSB9XLEX9fGgyXMAahqA9VZdHghvs%2BYZw%2FVhzN%2FF0iK%2FEMgU%2BKFBmyTbT1hjQ5xn%2F%2FbOTEew%2Bgvl6xmozuaJvAKxXDxtjJqItpqFGmkSS2oS63KNr%2B1TGwC816APyPTZvKP7T8B%2BFUJxVoQOX2hQ7dv6AwtIIfBC2DoqwAJ2eD5StD%2B%2BiGTaykSW3fJp%2BOrUDnqHshBNAZQdngvI5s3R9lVRIwicmV6hQfiKRZXSRyjNM%2B0aE%2FDKcNP9MN%2FW58MGOqUBTnDKgMF10grnv%2Bnb7epWl7LlEnPjVbiDvtTWfCsddc7vj1XDbmVx5BtYnb082UJSh3ri5TWKPWQC3bIOcNaXFRmvRLJ%2BasuPdc7P4sEXGaG2o6XYrhLggpubSMVWSiIIvSy5l8D0EWcUzURAuNREKzuwxwQ%2FH61WPijajx%2BQI1ZNUlUH%2FW%2FId2Sb2waItlUHTiLAHOj%2FrlWqPYqq5ULTRlTJaIXM&X-Amz-Signature=dae1907a0f5d42b8af58efaecf6c0517440f1ead68735c3ee6b4cdc9f0d8ab03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPSP3E2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDunA%2Fd5EOL8GUWIDvhQxkAF62as%2BlGp4TXP2OSdZF6YgIgGIqlmhjSplqXZDzJN83QIqO4hPJ9rIO3SCIYBwF3fPsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMaLZUIPL03OA11ySrcAxL4E9XGRcWRtUUDguceTSLsFS7tWvDEoYPKmvweHqXqbElB0GBIWq%2F4HsfikuXe893c51YCnHHfb0k%2FRr%2BLtqLCm6ADTm%2FeRGk5VvUPCYtghbZDh%2Bw97OqJiCUPlBMtNh%2FYxhFNepMZajNMID0qgRtKmTpPyCQiJxoMkJs4YEpNhtzw5XIMOjrc8jH0ooaIZUPG8eaGGsXX2ZVWH%2FeFvF%2FzEhhiNXuHHVmq5nQR%2BggUqG%2FbmeCq832as0G3qeU7k%2B95g0%2B3E7rkzmsBxE3cp1q624Ct40oMWE9SiqlyB%2Ffdz%2B1WnetbY%2BtxmfXc2l8NkdrPUMRShFMv8bNvTyEkZIXsOWGTQljd3U8lU0V9T8zVftM%2FsEsVg6QxYjCWs2qs%2FgcXnSB9XLEX9fGgyXMAahqA9VZdHghvs%2BYZw%2FVhzN%2FF0iK%2FEMgU%2BKFBmyTbT1hjQ5xn%2F%2FbOTEew%2Bgvl6xmozuaJvAKxXDxtjJqItpqFGmkSS2oS63KNr%2B1TGwC816APyPTZvKP7T8B%2BFUJxVoQOX2hQ7dv6AwtIIfBC2DoqwAJ2eD5StD%2B%2BiGTaykSW3fJp%2BOrUDnqHshBNAZQdngvI5s3R9lVRIwicmV6hQfiKRZXSRyjNM%2B0aE%2FDKcNP9MN%2FW58MGOqUBTnDKgMF10grnv%2Bnb7epWl7LlEnPjVbiDvtTWfCsddc7vj1XDbmVx5BtYnb082UJSh3ri5TWKPWQC3bIOcNaXFRmvRLJ%2BasuPdc7P4sEXGaG2o6XYrhLggpubSMVWSiIIvSy5l8D0EWcUzURAuNREKzuwxwQ%2FH61WPijajx%2BQI1ZNUlUH%2FW%2FId2Sb2waItlUHTiLAHOj%2FrlWqPYqq5ULTRlTJaIXM&X-Amz-Signature=07f41e5f5660d55e84be01062960b1ccb6b946e71b96a068d065934d2436948c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
