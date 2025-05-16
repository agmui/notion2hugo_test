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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y526HKRH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrZe7PibnyrFeQ3ws5%2BL%2FWHchkUH2A0XAaf3TTapVv0AiEAv5JnosDFgMrAW8rZ7lOPlIe8wzzMaQMcZ3fQ%2BZNDNXQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMBvhz70cW2CzPekPyrcA0Uvp%2FrMOr4qG51MytU2JyADCVlz%2B4UGfeqi0UcUAv79kfisj1LJCaPyi4Bpi4EGnQBT35dVgjkKaSaB8zbsNBjZfiLIKMs%2BrJKd5T%2Fk6jRlpIwu70RoLHgiLTZM9zrqD7vPyMIFid4eVXX%2ByCvZfAzGeoAKjJCXBNyTQh1BG%2B6mBlVQQs%2F4AFgG%2FPhyFMW4JLsKEgL8qWjfiOHjAMiy8U829Uy9QSz5JchQdhp2RLuizCneJp8Lgfj7rGlJ1sb5aEdB6G6OStdHWfEz36pSOP%2BWvkxt9H0gS7MjII9irTrQgdFQdlbz7lnapG2aP8QKeEvboK31bHN%2Boblh%2B8xCjmdA0rLG%2BZgoznpiZtbOpELBL%2FXpvL6voniJD5eqxjeal0hj2q2AVUo9ytPYK6h7gZ%2FPOSNnYtgZW6ooqT9gbcc1pn3EcBTiCXWl7OcXvW4cxaxJZVpQvS8c%2BsEsm7tGlr3UHm9eLZF7kstCeQMp90WgA6WOH4MK9Ct1Axc%2BJW9Jx1j%2BHyTTqmHh0o0KAB0ihPGIxMuOTc8NRdtO13XiG22k90sKshXKZELi97Ktm%2BnOdQUtmNQUnWb2uoIUxX65d7MH2FIp2MRfjcr41bOY1ppOVtj%2FZ%2F9hr3A4%2BUc0MLzTmsEGOqUBYoDtqWl5UJMNU3QM0LL7vLQtWwm69DvcLJYbMdRhxkwlklkG7PV98bLapJBpVQlimoeYHhrJqRUc5hZGCwz02i6LWBsC%2FQ7KPrWPw0AI6cH6L%2FPDb%2BKC6uiAPWC%2FmehqeuxdfjzX3XJvgDTbcsz3gjPFtVx8tYQbgaxDp52wq0KHa3vqeAeMpRhz8a8ATjlvzvcCyvH82f4Cgky3Glm8b79vn5wJ&X-Amz-Signature=da1c3e578c419aea7c9c535634d7ee222ece794c995b09b1f083ee59504bd2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y526HKRH%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrZe7PibnyrFeQ3ws5%2BL%2FWHchkUH2A0XAaf3TTapVv0AiEAv5JnosDFgMrAW8rZ7lOPlIe8wzzMaQMcZ3fQ%2BZNDNXQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMBvhz70cW2CzPekPyrcA0Uvp%2FrMOr4qG51MytU2JyADCVlz%2B4UGfeqi0UcUAv79kfisj1LJCaPyi4Bpi4EGnQBT35dVgjkKaSaB8zbsNBjZfiLIKMs%2BrJKd5T%2Fk6jRlpIwu70RoLHgiLTZM9zrqD7vPyMIFid4eVXX%2ByCvZfAzGeoAKjJCXBNyTQh1BG%2B6mBlVQQs%2F4AFgG%2FPhyFMW4JLsKEgL8qWjfiOHjAMiy8U829Uy9QSz5JchQdhp2RLuizCneJp8Lgfj7rGlJ1sb5aEdB6G6OStdHWfEz36pSOP%2BWvkxt9H0gS7MjII9irTrQgdFQdlbz7lnapG2aP8QKeEvboK31bHN%2Boblh%2B8xCjmdA0rLG%2BZgoznpiZtbOpELBL%2FXpvL6voniJD5eqxjeal0hj2q2AVUo9ytPYK6h7gZ%2FPOSNnYtgZW6ooqT9gbcc1pn3EcBTiCXWl7OcXvW4cxaxJZVpQvS8c%2BsEsm7tGlr3UHm9eLZF7kstCeQMp90WgA6WOH4MK9Ct1Axc%2BJW9Jx1j%2BHyTTqmHh0o0KAB0ihPGIxMuOTc8NRdtO13XiG22k90sKshXKZELi97Ktm%2BnOdQUtmNQUnWb2uoIUxX65d7MH2FIp2MRfjcr41bOY1ppOVtj%2FZ%2F9hr3A4%2BUc0MLzTmsEGOqUBYoDtqWl5UJMNU3QM0LL7vLQtWwm69DvcLJYbMdRhxkwlklkG7PV98bLapJBpVQlimoeYHhrJqRUc5hZGCwz02i6LWBsC%2FQ7KPrWPw0AI6cH6L%2FPDb%2BKC6uiAPWC%2FmehqeuxdfjzX3XJvgDTbcsz3gjPFtVx8tYQbgaxDp52wq0KHa3vqeAeMpRhz8a8ATjlvzvcCyvH82f4Cgky3Glm8b79vn5wJ&X-Amz-Signature=90b899076b7a01287c0510568cf10260831dfc5033b3b541e26be011c908620c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
