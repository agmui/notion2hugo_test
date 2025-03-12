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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZLUVEE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIB7PK7hQ4HF8hIEfCMELFr54V4PpdNoYmmlqLarV70BCAiEAp1ico7WTtaq8Q9GLKHLBhJFfVH6w0hx0rtdIVRNL%2FUoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2FLD%2BCf3Nw2y%2BrEyrcA7KQivEC7VimtJzSr88hWYEMA28L1BKHNTNMULMb0UUc744fxDoT%2BhABAr0F3bcKwTS5mp%2BqNGBIvUHQvOoeva%2Fdr%2FSuvvV2FRs6QM61aiPNdQyIOmuldPvMN9ogZitYbGwfYlNE06yUYtk%2Bdi5%2Fm%2F2Y%2FN764XH2LRcWeIZgGbaMDGg2dB9VexqtIAlVxvpFWUzroHjX2y6W6A4TFGUZRpfcTNXBghbhTM9qXrVjRWpq%2BoC03JUbTNHIw5MT238%2F%2BYVFE7t10f9ihs87KYKkVSIU7o3%2Fa3Cx60960BDbIWIHGZATcI0GhbKE6BXDc4JeVC2kAP9MOvbX2n4N%2FlchAraWDV4NgaUapbLkCF%2BS%2FukfgWuwA0%2F7yx6vDFAvoUOyHXoN8lDodouUdfJeXeW74a%2F5OJIHj7w6usIJqErRxVVaG4vali9uS3EGHagpW0M5%2BI6smq6U5PGl250w0Fz8oSi%2FaAduUfuQl3mq8nDRwtjT8pXO64YzVo3FEpRxEpa1Syu5ibnClnYgSQWdH1yA0FJoQ%2FCASFSTa43q8m%2BzdEPC2cAhkiDepJC7pHQmEoTDAnfI3sr2ONw5nzcL3ae9KtEsLjCWZv00tJPAE8juJ3akmZdOgBnIn14mdI4hMMv7w74GOqUBHh4OGcXxXJcnMdhLbk9pKUoBfOQ3DYtBg65mV3RftnSzcvW8UDK66ptnUZ54LX4qm9FKqpRhu%2FznN8M0KrizVmk4cMqRXfhxBT8pFPyXjmO6Op%2BBzzjvOyKuEQfC8FICgSXDGU3tJa8e3vanpy%2FhoWbHMGoc2Rd2FEYw7YnOdkVfDRPnBsQKkgDG97%2BIhrSTT%2FVZXTZUkkVDYhJCsRPMXc3jhotm&X-Amz-Signature=f60eae81b798b4bad8854214ce5e3feb24054aeb48bb98e4c0440f8b6d6a2704&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZLUVEE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIB7PK7hQ4HF8hIEfCMELFr54V4PpdNoYmmlqLarV70BCAiEAp1ico7WTtaq8Q9GLKHLBhJFfVH6w0hx0rtdIVRNL%2FUoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2FLD%2BCf3Nw2y%2BrEyrcA7KQivEC7VimtJzSr88hWYEMA28L1BKHNTNMULMb0UUc744fxDoT%2BhABAr0F3bcKwTS5mp%2BqNGBIvUHQvOoeva%2Fdr%2FSuvvV2FRs6QM61aiPNdQyIOmuldPvMN9ogZitYbGwfYlNE06yUYtk%2Bdi5%2Fm%2F2Y%2FN764XH2LRcWeIZgGbaMDGg2dB9VexqtIAlVxvpFWUzroHjX2y6W6A4TFGUZRpfcTNXBghbhTM9qXrVjRWpq%2BoC03JUbTNHIw5MT238%2F%2BYVFE7t10f9ihs87KYKkVSIU7o3%2Fa3Cx60960BDbIWIHGZATcI0GhbKE6BXDc4JeVC2kAP9MOvbX2n4N%2FlchAraWDV4NgaUapbLkCF%2BS%2FukfgWuwA0%2F7yx6vDFAvoUOyHXoN8lDodouUdfJeXeW74a%2F5OJIHj7w6usIJqErRxVVaG4vali9uS3EGHagpW0M5%2BI6smq6U5PGl250w0Fz8oSi%2FaAduUfuQl3mq8nDRwtjT8pXO64YzVo3FEpRxEpa1Syu5ibnClnYgSQWdH1yA0FJoQ%2FCASFSTa43q8m%2BzdEPC2cAhkiDepJC7pHQmEoTDAnfI3sr2ONw5nzcL3ae9KtEsLjCWZv00tJPAE8juJ3akmZdOgBnIn14mdI4hMMv7w74GOqUBHh4OGcXxXJcnMdhLbk9pKUoBfOQ3DYtBg65mV3RftnSzcvW8UDK66ptnUZ54LX4qm9FKqpRhu%2FznN8M0KrizVmk4cMqRXfhxBT8pFPyXjmO6Op%2BBzzjvOyKuEQfC8FICgSXDGU3tJa8e3vanpy%2FhoWbHMGoc2Rd2FEYw7YnOdkVfDRPnBsQKkgDG97%2BIhrSTT%2FVZXTZUkkVDYhJCsRPMXc3jhotm&X-Amz-Signature=71a3f77eb133433851bb8b9fedfb9b18e80abbe45793b055dac803d6c66646b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
