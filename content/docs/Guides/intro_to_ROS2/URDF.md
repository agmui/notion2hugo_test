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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK32WM4M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGhPk2aExXnFMTT7L7ZPSsmw5hizUyx2KWTk%2BP%2B%2FrowIgCus%2F7p9qjttA4i1rJ6IbqVKJGW6AL6mehIQz53d7l0sqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYvcS5ClyLs0431HCrcA54l850RaE%2FmQ9MEYsNEwbin66siKYh%2BOY%2FAXm8VV49MrVO5k3seHnp2dag3F%2BxHM%2FSUUTe2DhmxoCm1zoGzEl2vs92%2BR3zsFu1Fhkei0fmoONaJ1t3qYeoc%2B%2FFwcWJ%2BFG%2FFHhVsVTzlvMLxPR74oh0kSb%2By7tDmRvV6gfRJV6ahE8OtYozF9SPOhMHScW6lI5zcv0PAyPhJUB7hhmARDOlCdC%2FBF0dct5sNV%2FdstAtid55rWay3Qbc5THJpTLHc%2B5aPIDef6P3xrvtofV0ivk%2BXB59pH%2Bu%2F3986nkrt8wHzLd1c7ALabZ9wsOxusld8%2FlbNmPwznnHUoenqVOSLmY%2FMK1JvLnW%2FJKSa8F6q7u7nVnCWwJ2R6RcpGYcWBqi3x479WN3uuIoPYVhfj8NFiFJxwAcsE6XyvOtOfvdzXnygsR5Ibl9D%2BlLG8u9r03o%2FLXsyGoOOh8uXQDHmbJs%2BtESdY5sL5X5dITyI21ahmLIeDvypgkDkMS3fmvUxMyy36jX4MF9%2FEO9ff5kMRthYbbMH2w4BPlFleJs8iX4WbtaN32u5Yrzs5XxdUehVz3sjliRelhfwJB4J8z5lhG%2FzGMXLuRVJLZEa3%2FAmPa3fPF1zMo9jge4C5i2BL5mPMOe7470GOqUByfdhQaptXxrmw02rhqQYc6CXi9m%2FsjP23EUk4%2BrQKyrPzTH8deaHGTD3vU0A7cMfF%2FRruilOT7wObwntGk9jxsTUhRMQpAC%2BAhFFLlfp3%2FsZA02pSnh4o7t5qC6QhF8hDHe%2FNI9tC501c9tkRhDsRRhg4lyxLTWt2cliWodE0bDaWvLNCnRXytLa0RQcW687KQivTSRuTVYS6YDzKKl6LuY0sa7d&X-Amz-Signature=d45088271609f8a32fbeccc489b36fb94bfba34d30af1d52821a5f15495024f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK32WM4M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAGhPk2aExXnFMTT7L7ZPSsmw5hizUyx2KWTk%2BP%2B%2FrowIgCus%2F7p9qjttA4i1rJ6IbqVKJGW6AL6mehIQz53d7l0sqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYvcS5ClyLs0431HCrcA54l850RaE%2FmQ9MEYsNEwbin66siKYh%2BOY%2FAXm8VV49MrVO5k3seHnp2dag3F%2BxHM%2FSUUTe2DhmxoCm1zoGzEl2vs92%2BR3zsFu1Fhkei0fmoONaJ1t3qYeoc%2B%2FFwcWJ%2BFG%2FFHhVsVTzlvMLxPR74oh0kSb%2By7tDmRvV6gfRJV6ahE8OtYozF9SPOhMHScW6lI5zcv0PAyPhJUB7hhmARDOlCdC%2FBF0dct5sNV%2FdstAtid55rWay3Qbc5THJpTLHc%2B5aPIDef6P3xrvtofV0ivk%2BXB59pH%2Bu%2F3986nkrt8wHzLd1c7ALabZ9wsOxusld8%2FlbNmPwznnHUoenqVOSLmY%2FMK1JvLnW%2FJKSa8F6q7u7nVnCWwJ2R6RcpGYcWBqi3x479WN3uuIoPYVhfj8NFiFJxwAcsE6XyvOtOfvdzXnygsR5Ibl9D%2BlLG8u9r03o%2FLXsyGoOOh8uXQDHmbJs%2BtESdY5sL5X5dITyI21ahmLIeDvypgkDkMS3fmvUxMyy36jX4MF9%2FEO9ff5kMRthYbbMH2w4BPlFleJs8iX4WbtaN32u5Yrzs5XxdUehVz3sjliRelhfwJB4J8z5lhG%2FzGMXLuRVJLZEa3%2FAmPa3fPF1zMo9jge4C5i2BL5mPMOe7470GOqUByfdhQaptXxrmw02rhqQYc6CXi9m%2FsjP23EUk4%2BrQKyrPzTH8deaHGTD3vU0A7cMfF%2FRruilOT7wObwntGk9jxsTUhRMQpAC%2BAhFFLlfp3%2FsZA02pSnh4o7t5qC6QhF8hDHe%2FNI9tC501c9tkRhDsRRhg4lyxLTWt2cliWodE0bDaWvLNCnRXytLa0RQcW687KQivTSRuTVYS6YDzKKl6LuY0sa7d&X-Amz-Signature=be35a3caf8b5ac29785c458540178935ffe02366796f27ba5c30df08e45a5aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
