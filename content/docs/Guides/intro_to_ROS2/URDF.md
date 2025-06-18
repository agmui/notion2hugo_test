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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KQ72X6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBLWgjHSMHE0oz%2B1y07CITwjZSmU%2BQ2tITB8nA%2BtKpPAiEA%2BXX7n7UdUVISzQfJDGn2dw67PKcGUN1SGOO19Vc9apoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnEjOj%2BvJ%2ByYl%2BiircA07LiFe0kMgODl0oQjgdqNoJzlvx87SebFb9RZ5gkieFRziEtl9QO4wJmO8w6OmgviNTzWUZLWowvZ8ROzC8yKgGjjhZMguqNcRNBeNUWcyUHELE1AhTgAvBKOxxeB6hEQCO2hLdVJ4jNYsfyZ19HBkZkRPs6JVoQNQ%2F1gQwo3iU3OkIVvvFbqkDytl%2F2AEUIkysYBRcM%2FgaOjQEVgWmIP2Cq2zwQLDzKGgssyho3om%2BCqaSJmst7UpAYX0F65rPQfM1W%2BiK98GqXQbYjeio1G7KRS5Fc15vu1%2FdvPeAcycgKRbdq0JxNpaNhEHno5aOASl84HTGV6mQSQcmz11vLb%2BGkNjbikARLknsF0ADYyLQRjiHqHpRdR3no0i5%2Bmb8193PsNwqPoMC171WdgbFBXRovQ197VCH3RdEoTj4tcmZNw6qHqR4UxKnkiSe%2BB8gHXUGCw13USn7GKdDZpsSC%2Fvm40i4WNGlGFq6fXtTxX9hcdDPeYP%2Ffe%2F8fawepnqNn2yhx3b8qghW16LOzhugGY8hshpZqPTf0zaYGLrIDJuyqO5k0qpvHV3zbkEZzYMAwrrBOOmFVstuQ0L0R2sDNB03T%2FlLw5%2BnbF4RKvAcYc6ZuTrTLJQGieKqxHIWMKP8y8IGOqUBNbWnorHXbGC%2FB5bFEiQQcw%2FkzOz%2BUW7LB8Sc7fzpOY8BFULwZFvy39SZwKgLKAdCEDLcyCoSWasIVKhvCcYy4tkbHvpBfwsakUQFVA%2B7a6HUTQzHUCxF%2FHuVvatQq2%2BgZ%2F%2B%2Br6ZfMQjGE7kof9NZqGXidDbSrYKFyA7O7g2r6FhgLWu%2FuRFFnr13QZbnjONfA%2BguFNK6NPpm3AhHMJyA0VeibeNh&X-Amz-Signature=4fee335ffec2a8cf9e7c3f109da5880d844cdc4ebb70d7ba8929cba4017f1f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KQ72X6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBLWgjHSMHE0oz%2B1y07CITwjZSmU%2BQ2tITB8nA%2BtKpPAiEA%2BXX7n7UdUVISzQfJDGn2dw67PKcGUN1SGOO19Vc9apoqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAnEjOj%2BvJ%2ByYl%2BiircA07LiFe0kMgODl0oQjgdqNoJzlvx87SebFb9RZ5gkieFRziEtl9QO4wJmO8w6OmgviNTzWUZLWowvZ8ROzC8yKgGjjhZMguqNcRNBeNUWcyUHELE1AhTgAvBKOxxeB6hEQCO2hLdVJ4jNYsfyZ19HBkZkRPs6JVoQNQ%2F1gQwo3iU3OkIVvvFbqkDytl%2F2AEUIkysYBRcM%2FgaOjQEVgWmIP2Cq2zwQLDzKGgssyho3om%2BCqaSJmst7UpAYX0F65rPQfM1W%2BiK98GqXQbYjeio1G7KRS5Fc15vu1%2FdvPeAcycgKRbdq0JxNpaNhEHno5aOASl84HTGV6mQSQcmz11vLb%2BGkNjbikARLknsF0ADYyLQRjiHqHpRdR3no0i5%2Bmb8193PsNwqPoMC171WdgbFBXRovQ197VCH3RdEoTj4tcmZNw6qHqR4UxKnkiSe%2BB8gHXUGCw13USn7GKdDZpsSC%2Fvm40i4WNGlGFq6fXtTxX9hcdDPeYP%2Ffe%2F8fawepnqNn2yhx3b8qghW16LOzhugGY8hshpZqPTf0zaYGLrIDJuyqO5k0qpvHV3zbkEZzYMAwrrBOOmFVstuQ0L0R2sDNB03T%2FlLw5%2BnbF4RKvAcYc6ZuTrTLJQGieKqxHIWMKP8y8IGOqUBNbWnorHXbGC%2FB5bFEiQQcw%2FkzOz%2BUW7LB8Sc7fzpOY8BFULwZFvy39SZwKgLKAdCEDLcyCoSWasIVKhvCcYy4tkbHvpBfwsakUQFVA%2B7a6HUTQzHUCxF%2FHuVvatQq2%2BgZ%2F%2B%2Br6ZfMQjGE7kof9NZqGXidDbSrYKFyA7O7g2r6FhgLWu%2FuRFFnr13QZbnjONfA%2BguFNK6NPpm3AhHMJyA0VeibeNh&X-Amz-Signature=dc178f80672da4fba4f3ac88988a785e4455976c5de66659c752ddd34b78ef51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
