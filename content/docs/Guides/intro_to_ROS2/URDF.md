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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKXHH3Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM7qqa7BreeroC0rMoGH4Jalfx22QlD%2BC9QY2qLcU9LAIgRtCdxpF3X7T1Ze%2Bre4Ndu3lR6bE6Zf7eJUt4IQAvXuwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA4eDaoq64DxjBzEyrcAwXTNwZ2%2FiLc2P%2F83ShoX15X2S%2FGIc8%2FwtzFW8CL9xxceDgNTd87ShUy6tkYQBjX07tuNs%2B8Dq%2FwAz%2BWrZLw79drlTB4f75HQ6VxyZWguRrj9cex%2BK5CCTZi9EmEDmLsol0KBbyoOgIFYsXH%2BAEuDGFm5Ip2MO8egwIbqjN939panSYkre05lhpyTZ1t8MXkkWDEJngUAJHxdDJK8oBqXJC2w2tO3Es1jexit%2B5nogeAGW%2BowxCWQXZOXXToFQCYkPD78%2FuKYGDIeygzNIXg7VYQADg0HqywA7AjHgNtH%2FEq%2FJBfFRZXvuq0IglSQhVdIuNGniLwp0hACEgi9OLWLqeG1fSPmlhey4brHC8EME7EtkRn5ciwRNZJcwf26fwpFR8BIoCaAvQaNHRsULvVoNFVJRbFQPYygBGFuMhFtU5UDqcEgiw4iJc72829TTPVxY99MP9GxkLZLlXT%2FkywssMtW1X8xdozpGRvrUBWccELxhzzr2wz45JdAwAReVwWi93bKbbbW4ftUYKHdWSMbRaMSq4UyMqHu4%2FqgmToRZ2u85S9rsM8IC6ALTz%2BGxTg5lcfogC8Kj6%2BokIr7u9eh1LqxhPMTuQYj4pk0zE7JCT6vdzyy2ZrJ7U1tl8iMMK%2FoL0GOqUBl0SGdhBTCgGUCW%2FohbcYp7EwxsNETIZbnA60sgb3rNF77VOai%2BnzQ%2BTAN%2F%2B%2BXkS4DBZIz75XmWYIJaRBb3KtJNChiV0GYkwy6F%2BGENWrIieDksElCgTrYvoO%2B9RXq7bWNOlUhrbxNpC%2BR2O4UobtEPenyWjgNjL4DH7v3gVKj9GnFeJti%2BS3XH0zKwYlQmjY8K2IZEZ0X8nUK%2BLIGrAvIB8XQd3k&X-Amz-Signature=7cff473136fde941cef0021cc66e7952eb6f7ab6fd9a340d57b1173ce0800c34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKXHH3Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM7qqa7BreeroC0rMoGH4Jalfx22QlD%2BC9QY2qLcU9LAIgRtCdxpF3X7T1Ze%2Bre4Ndu3lR6bE6Zf7eJUt4IQAvXuwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA4eDaoq64DxjBzEyrcAwXTNwZ2%2FiLc2P%2F83ShoX15X2S%2FGIc8%2FwtzFW8CL9xxceDgNTd87ShUy6tkYQBjX07tuNs%2B8Dq%2FwAz%2BWrZLw79drlTB4f75HQ6VxyZWguRrj9cex%2BK5CCTZi9EmEDmLsol0KBbyoOgIFYsXH%2BAEuDGFm5Ip2MO8egwIbqjN939panSYkre05lhpyTZ1t8MXkkWDEJngUAJHxdDJK8oBqXJC2w2tO3Es1jexit%2B5nogeAGW%2BowxCWQXZOXXToFQCYkPD78%2FuKYGDIeygzNIXg7VYQADg0HqywA7AjHgNtH%2FEq%2FJBfFRZXvuq0IglSQhVdIuNGniLwp0hACEgi9OLWLqeG1fSPmlhey4brHC8EME7EtkRn5ciwRNZJcwf26fwpFR8BIoCaAvQaNHRsULvVoNFVJRbFQPYygBGFuMhFtU5UDqcEgiw4iJc72829TTPVxY99MP9GxkLZLlXT%2FkywssMtW1X8xdozpGRvrUBWccELxhzzr2wz45JdAwAReVwWi93bKbbbW4ftUYKHdWSMbRaMSq4UyMqHu4%2FqgmToRZ2u85S9rsM8IC6ALTz%2BGxTg5lcfogC8Kj6%2BokIr7u9eh1LqxhPMTuQYj4pk0zE7JCT6vdzyy2ZrJ7U1tl8iMMK%2FoL0GOqUBl0SGdhBTCgGUCW%2FohbcYp7EwxsNETIZbnA60sgb3rNF77VOai%2BnzQ%2BTAN%2F%2B%2BXkS4DBZIz75XmWYIJaRBb3KtJNChiV0GYkwy6F%2BGENWrIieDksElCgTrYvoO%2B9RXq7bWNOlUhrbxNpC%2BR2O4UobtEPenyWjgNjL4DH7v3gVKj9GnFeJti%2BS3XH0zKwYlQmjY8K2IZEZ0X8nUK%2BLIGrAvIB8XQd3k&X-Amz-Signature=f1950420c6aa5550619bf15a5a976074d9d09639c5851506d6f22c13a3f77db2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
