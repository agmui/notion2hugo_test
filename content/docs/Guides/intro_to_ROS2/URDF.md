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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2JWSG6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEBtwFYvxigsvzUeaYDJxd1woRvTVAeX0wZphBh%2BZ7GgIhAOqZpntQkGXLMyX8Ls5wpc15wCmbE3AVm7kiIgRODSh7KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrzyBAUGkR8Bq6wsMq3AOBV72ssRRgFqezA2Fr2oPEPlglklZ8mbDKqi5YFkrgPYcNPAac1W3FrZ9Kb%2F%2BN%2FGkLwd4QvgtSD8bJ7kZ5T%2FInbEZskrHDGhdC1ljqW3VR73ixZgdGOkztuc3kpduM%2FNPlXzt%2BMO%2BY%2BNkZll0l5wmr%2B8Wu883fDU%2BI237mYhxqFPJ4JEC%2F5IKK3e5OdnzD6ZYiJoDBzTj1HkupJhd%2BpycVhUUsjFkIcLLx0Wu7tK7qX1HguLToUAPw%2FF%2BWMmmT22n4RIw6Erj0SD%2FSOKA1xL8BOvnAvyLL2JoYVpbsOWqVOcBh3PgEmUwHO5maw5G8td06zL14U1MJYncqA4zofvWmpqpl2%2BsYOqTkGRCFb0l7i1e6ISp4E7eRKptJLsc3TMH88Fk7yvS1ovfvESkDctGsifgsn2anE5CaQOqYNIQQEmZ7GTYgG5lEB4K%2Fh8dnXv18D7tV6310KcjAJGu6vp930MZsI%2Bs2Kz%2FLhiHCssyZU33YqC9Qo5CDq2IkMbb0Jbs4K2ohDitn01NofXjgdzMYf4%2FNi9WwnVlEwmchXcj09j11CU3FKsDfnojGZ3ewHvmWSZOpIjxXTk9dSFbin24TbMisfxANl5adAvlkca1mfAqFqBEq3PV6Q1o2GjDf4%2Fu8BjqkAcvEnMcdrjbOviA%2FgFpAo4%2FZOJvPDlcDD7eIhYDvMEMK1yqlE2vRu1vbE1L2wwvSzaISLUVKPS9oEmSiQEZKlQ08oBVVYd9SNbAVMA4cW0GugoYXSu6AfdVwNvnEHwLo0hakmiMkpr3Hmpw3e6YScKYg4bVGGLD7MEu7Y42I6vAEmhWTaQAqFW6E4PiGbaVXTH4jWm6W19uudO7K7tnddPReJoUe&X-Amz-Signature=83013187742b7688f7d0f3136d19cab16d5941d2e77a14ccb1199b09996033a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO2JWSG6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEBtwFYvxigsvzUeaYDJxd1woRvTVAeX0wZphBh%2BZ7GgIhAOqZpntQkGXLMyX8Ls5wpc15wCmbE3AVm7kiIgRODSh7KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrzyBAUGkR8Bq6wsMq3AOBV72ssRRgFqezA2Fr2oPEPlglklZ8mbDKqi5YFkrgPYcNPAac1W3FrZ9Kb%2F%2BN%2FGkLwd4QvgtSD8bJ7kZ5T%2FInbEZskrHDGhdC1ljqW3VR73ixZgdGOkztuc3kpduM%2FNPlXzt%2BMO%2BY%2BNkZll0l5wmr%2B8Wu883fDU%2BI237mYhxqFPJ4JEC%2F5IKK3e5OdnzD6ZYiJoDBzTj1HkupJhd%2BpycVhUUsjFkIcLLx0Wu7tK7qX1HguLToUAPw%2FF%2BWMmmT22n4RIw6Erj0SD%2FSOKA1xL8BOvnAvyLL2JoYVpbsOWqVOcBh3PgEmUwHO5maw5G8td06zL14U1MJYncqA4zofvWmpqpl2%2BsYOqTkGRCFb0l7i1e6ISp4E7eRKptJLsc3TMH88Fk7yvS1ovfvESkDctGsifgsn2anE5CaQOqYNIQQEmZ7GTYgG5lEB4K%2Fh8dnXv18D7tV6310KcjAJGu6vp930MZsI%2Bs2Kz%2FLhiHCssyZU33YqC9Qo5CDq2IkMbb0Jbs4K2ohDitn01NofXjgdzMYf4%2FNi9WwnVlEwmchXcj09j11CU3FKsDfnojGZ3ewHvmWSZOpIjxXTk9dSFbin24TbMisfxANl5adAvlkca1mfAqFqBEq3PV6Q1o2GjDf4%2Fu8BjqkAcvEnMcdrjbOviA%2FgFpAo4%2FZOJvPDlcDD7eIhYDvMEMK1yqlE2vRu1vbE1L2wwvSzaISLUVKPS9oEmSiQEZKlQ08oBVVYd9SNbAVMA4cW0GugoYXSu6AfdVwNvnEHwLo0hakmiMkpr3Hmpw3e6YScKYg4bVGGLD7MEu7Y42I6vAEmhWTaQAqFW6E4PiGbaVXTH4jWm6W19uudO7K7tnddPReJoUe&X-Amz-Signature=66b2306bb9c439f79918fb39b3521e6bf8611d6b3bfee89c843991d25dc90d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
