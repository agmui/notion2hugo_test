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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTF2KIKN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEQRrlnxxPjmXGkGAqpYtlBiB8C8JKHkyP5HY2ugbX9pAiEAu7qrzm12DCnqojmUYKiPnMeUcXx84FwVgR7yK3DaE3sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE42y6vZg%2FW5jLimnircA1B7fkT7XcVLRmqcvF%2BV0KduMdaeXm90pcSt7e5JLQ4Mw%2BOiNx4DWrqZNeTaOpZEPvuy90vo93gNV6nMqw5HeJ0N2ft8lU2i3hO9d%2FrR7jfAl4KB1jAKhHgk5DjyeGZ0Bke9iYSvdNQVAyUQnMSMJj%2B2QRZQdoB31AgPxHpOq6dwxfSC9dPNpFEumc07%2FhzcwYn324wLdSSGY6BFhGYgRcHxLoFFrqz0E3Dcc11M0t6r68VzehoylCMOmBkGAxRnEY4g6WrZ7nWd8t1QyYpYKrHDYBdHO%2BQrltXOYwR6IuUxPjN3I%2FWjCNodQ1KBW%2FK%2Fo4WyHA8tpr4rtBwz4O1J8S7Or3H8Dk67Z1nS516E7y1vMj5VOcD8Lebp1j2iQ0lXwTajP%2F%2B5yO0%2B2YFWscYu%2FjmX%2BinXQdiXu6sUhSa2yofOcuwlzaVO%2BkwwFxKEcVxo%2BXmo00in2lmCG93fQSxkXJkhYLMzq2rbwin%2FFHZChcyxw%2FmWZbPL2fJrEAof65LbaZ6DW%2BuJMeVzdWfvzr1633LzuW1TPhuaBr08OQCpbzPelTmD0Dj3GV%2FNMDnGeLYjUX1hhsZqT%2BOpMXZZmUSqwbvdA7nl9Ejbyz9FFpFQgFBWt7fXp69s3YuuYIwnMP2Q9cEGOqUBjoKvEn29UcbTIWTwvhJhBCIJxf6eIV7ImmqP4wRHY0qTKe91v8V9her71SEZQyCo5K7oYd5W8tPbO%2F%2BzgVQbGtUztn3HYaw3nOvwWeAsW8u7SMMIVfENTR4ePwgO3RgRnnn1jWDRk7WRdbjaQSaKtqFxtne8wetBR%2F%2BZkHc42rRpxuSgooXi%2FZ%2FNNfPcckZ972Msaz37EDrlAVUHGVKCjYXyYziM&X-Amz-Signature=bf6566172ce82b5362c28bf6175c8c95deacbdddbb71367d18179053fefc3ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTF2KIKN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEQRrlnxxPjmXGkGAqpYtlBiB8C8JKHkyP5HY2ugbX9pAiEAu7qrzm12DCnqojmUYKiPnMeUcXx84FwVgR7yK3DaE3sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE42y6vZg%2FW5jLimnircA1B7fkT7XcVLRmqcvF%2BV0KduMdaeXm90pcSt7e5JLQ4Mw%2BOiNx4DWrqZNeTaOpZEPvuy90vo93gNV6nMqw5HeJ0N2ft8lU2i3hO9d%2FrR7jfAl4KB1jAKhHgk5DjyeGZ0Bke9iYSvdNQVAyUQnMSMJj%2B2QRZQdoB31AgPxHpOq6dwxfSC9dPNpFEumc07%2FhzcwYn324wLdSSGY6BFhGYgRcHxLoFFrqz0E3Dcc11M0t6r68VzehoylCMOmBkGAxRnEY4g6WrZ7nWd8t1QyYpYKrHDYBdHO%2BQrltXOYwR6IuUxPjN3I%2FWjCNodQ1KBW%2FK%2Fo4WyHA8tpr4rtBwz4O1J8S7Or3H8Dk67Z1nS516E7y1vMj5VOcD8Lebp1j2iQ0lXwTajP%2F%2B5yO0%2B2YFWscYu%2FjmX%2BinXQdiXu6sUhSa2yofOcuwlzaVO%2BkwwFxKEcVxo%2BXmo00in2lmCG93fQSxkXJkhYLMzq2rbwin%2FFHZChcyxw%2FmWZbPL2fJrEAof65LbaZ6DW%2BuJMeVzdWfvzr1633LzuW1TPhuaBr08OQCpbzPelTmD0Dj3GV%2FNMDnGeLYjUX1hhsZqT%2BOpMXZZmUSqwbvdA7nl9Ejbyz9FFpFQgFBWt7fXp69s3YuuYIwnMP2Q9cEGOqUBjoKvEn29UcbTIWTwvhJhBCIJxf6eIV7ImmqP4wRHY0qTKe91v8V9her71SEZQyCo5K7oYd5W8tPbO%2F%2BzgVQbGtUztn3HYaw3nOvwWeAsW8u7SMMIVfENTR4ePwgO3RgRnnn1jWDRk7WRdbjaQSaKtqFxtne8wetBR%2F%2BZkHc42rRpxuSgooXi%2FZ%2FNNfPcckZ972Msaz37EDrlAVUHGVKCjYXyYziM&X-Amz-Signature=1c537ecd6ff9bbedf55dec313ad60415f71c0ff6fa87e51315959b8a101b631c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
