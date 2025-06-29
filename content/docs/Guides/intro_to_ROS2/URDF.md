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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7KGKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVVehYvZdzGkEBV%2B1Y%2FkyD5vkGdCZ8IHtV9b0tq%2F7%2FAIgHfDaxmoyjU734FyO%2F1aX0W4R5mcg%2BVHunYtYEAPbGU8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRccLJdfaEREsia3SrcA6xQRU3Jag57eJhEXdSZCial02asXMhyFSZZUjSvPpPdbMJD5XPSq5kZ9zO%2BKq9sYJ3vg56T6nU4N%2BIkoz3Yc6JN8GKFIY%2FNzHp8Vk3n9ugDJB4gWJcCUg8nHi4vjNwOJdeP88l1hGR3n7JVxUmTvxIJGCvjQl2zoGU0tmbbM%2FtzcJG0iq5yRo%2FA8aaewNE6RC4xx89UkEO9SAAFD83jgRYE58XhbbvNQyjYiNMWSkkRFVmqSGOXg6lOl6HPZjUxaWiWeW%2Fv8cz0DkRHk9VTwM%2FZdXOLxBYxynmjxoMe2dEy1CUe53mTLW0r3Qgz8pcNcc%2B3lgQOKODTwj0H425avNLWZG9vXDfbVBYVlHDzVQ4XppkxlSdzQs1OBD2ousfCaPZ9LK4EZvfpy%2BQroQY6bZhCwPimyQjTLakbsUtluQ7ev3%2BKcVct4NtMt%2BVRehr%2BvbFlhyx3aNfkZleifdpMhTJArR4gMszHGdhz1RhsGbvTvlx2Lvz8uQogKjFPeJK8y3puSAMGd7zVkSFdXbvhEhCDPbO3kGGB99yB%2BPuUkJKUJJ%2BZSavJbX0Kcom8bGMMxf5D9v0G80uxJ2lnc5nkA8mUXzrGO1bhl4iV8AVlxf6QczWIsij8663voP0lMKSZgsMGOqUBvyRBGykd23KxpZkyZZkHmuFvsVqMHxDN2heJGOTLliwto8SsA5W8cNHxE8eWMbWMU8DuNF4qW6vkAJMLBgInojHSEwy9v3HIeaRBhUqnFu5YuJTdIhZwif5rsYGtAHLRBQCoX11y6tfsR3b2YfTCYWIPgFf5xS6GuxV5rFLO0zaGuBWvUg9SaL1%2BpRU3VSZ7WHYBd%2FpgE%2B5%2Fiqs3hsEuaciBtza8&X-Amz-Signature=47b72f8066bb607e5004d53fc8f23c2868c4f3bbbf96f71d866d8ee3ba1ad6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654B7KGKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdVVehYvZdzGkEBV%2B1Y%2FkyD5vkGdCZ8IHtV9b0tq%2F7%2FAIgHfDaxmoyjU734FyO%2F1aX0W4R5mcg%2BVHunYtYEAPbGU8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRccLJdfaEREsia3SrcA6xQRU3Jag57eJhEXdSZCial02asXMhyFSZZUjSvPpPdbMJD5XPSq5kZ9zO%2BKq9sYJ3vg56T6nU4N%2BIkoz3Yc6JN8GKFIY%2FNzHp8Vk3n9ugDJB4gWJcCUg8nHi4vjNwOJdeP88l1hGR3n7JVxUmTvxIJGCvjQl2zoGU0tmbbM%2FtzcJG0iq5yRo%2FA8aaewNE6RC4xx89UkEO9SAAFD83jgRYE58XhbbvNQyjYiNMWSkkRFVmqSGOXg6lOl6HPZjUxaWiWeW%2Fv8cz0DkRHk9VTwM%2FZdXOLxBYxynmjxoMe2dEy1CUe53mTLW0r3Qgz8pcNcc%2B3lgQOKODTwj0H425avNLWZG9vXDfbVBYVlHDzVQ4XppkxlSdzQs1OBD2ousfCaPZ9LK4EZvfpy%2BQroQY6bZhCwPimyQjTLakbsUtluQ7ev3%2BKcVct4NtMt%2BVRehr%2BvbFlhyx3aNfkZleifdpMhTJArR4gMszHGdhz1RhsGbvTvlx2Lvz8uQogKjFPeJK8y3puSAMGd7zVkSFdXbvhEhCDPbO3kGGB99yB%2BPuUkJKUJJ%2BZSavJbX0Kcom8bGMMxf5D9v0G80uxJ2lnc5nkA8mUXzrGO1bhl4iV8AVlxf6QczWIsij8663voP0lMKSZgsMGOqUBvyRBGykd23KxpZkyZZkHmuFvsVqMHxDN2heJGOTLliwto8SsA5W8cNHxE8eWMbWMU8DuNF4qW6vkAJMLBgInojHSEwy9v3HIeaRBhUqnFu5YuJTdIhZwif5rsYGtAHLRBQCoX11y6tfsR3b2YfTCYWIPgFf5xS6GuxV5rFLO0zaGuBWvUg9SaL1%2BpRU3VSZ7WHYBd%2FpgE%2B5%2Fiqs3hsEuaciBtza8&X-Amz-Signature=819503cd5ecca5d705450601c346984ea1b515a13d401413a606a60bdae52815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
