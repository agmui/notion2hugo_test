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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FD2QRDU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD47n8181M%2FezsQDyCMq55YqpjQGy9Gg5KI0JZjLHDXfgIgU8s6%2FczXIzp2BbG4sZqxXLDuP%2FLRpfdPFYk6a%2BsTgjAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxTfWZgoqVbHCkvsCrcAxctGEpQc9CPWZsK5zv8WvPyTRY71H%2B%2BOPRfAmekc2cpsumLq1rpAlK08fpTj8FVOblmoYpnoN5tQnnOamyklmqNua18tUd9J36%2FbTeCjCSuyE86in1R7HkcYFxVoMue5oxqjc6maJb7A5RQO4X4IPJ2Qtllzzh9qQvDzsDR07psAPwwY%2Fd8BvnO6ohaS9TgFSQrszs0%2FfaRuolZBYsRFQQWiIShsD48ElrQzjSLrSRhuqOj%2B%2BokhN5wSvocMIlqoAM5w1vhJuFj3cu6YIQtVxW5fzjZrAJtAmJywSdO5aK3kOJi77BqtVhNdDIgGtsKxyMsYdVVhN7jHm0gXgE%2FmIuW5nZGeMqa60OzWrPOk0psVg8RaD%2Bk7y6UAWRgPvl%2F2jnHf4Awiz7Ep2%2BW%2FL1cpeUYQmsDouJlznNcToZ%2FnyrtiJ6JMraWyK3oW1H69CUC5CBEKzkcxabA2fYYhHNteue2tLtoykwzrtxoFNSRdF61tgFk2p0Hg7Ea33CwREp3xK8pReIHP2LC%2Fu8V3xwOdbZ0op5rjlzdU3SiRAFBNc3U0L%2BovDTKjelpxwo4ghLLOYoWnB3GBzMIEXJdynYt1MnKVzyRJ0VUMIg%2FHhxrr6vY0w89TiruDLAMJjE3MJLl08AGOqUB8emcf6a4ao5gA%2FoeNavdbliaW5pUbkjaLEtO81QQmFOQNRYpkIgDSIyUrmXQWe%2BgIVeBsI%2BCSXXee8AbXgQGkyXyq3875xVyt7pEByEbKZRd4rS%2FUyuPyzjPu7EiSP%2B1OmAmOp0c%2BU4mtQQY71LZ2uX5O7CyfY7rM20BW87QabBs567W%2F2gZgks6baHRg5QYAyoFUeBv2N9jc6Uedx6oSDNBEEMb&X-Amz-Signature=03cc62d72bb64829b2373230934f6697b6ecdde2360c4dd5596f4c406da926c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FD2QRDU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD47n8181M%2FezsQDyCMq55YqpjQGy9Gg5KI0JZjLHDXfgIgU8s6%2FczXIzp2BbG4sZqxXLDuP%2FLRpfdPFYk6a%2BsTgjAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxTfWZgoqVbHCkvsCrcAxctGEpQc9CPWZsK5zv8WvPyTRY71H%2B%2BOPRfAmekc2cpsumLq1rpAlK08fpTj8FVOblmoYpnoN5tQnnOamyklmqNua18tUd9J36%2FbTeCjCSuyE86in1R7HkcYFxVoMue5oxqjc6maJb7A5RQO4X4IPJ2Qtllzzh9qQvDzsDR07psAPwwY%2Fd8BvnO6ohaS9TgFSQrszs0%2FfaRuolZBYsRFQQWiIShsD48ElrQzjSLrSRhuqOj%2B%2BokhN5wSvocMIlqoAM5w1vhJuFj3cu6YIQtVxW5fzjZrAJtAmJywSdO5aK3kOJi77BqtVhNdDIgGtsKxyMsYdVVhN7jHm0gXgE%2FmIuW5nZGeMqa60OzWrPOk0psVg8RaD%2Bk7y6UAWRgPvl%2F2jnHf4Awiz7Ep2%2BW%2FL1cpeUYQmsDouJlznNcToZ%2FnyrtiJ6JMraWyK3oW1H69CUC5CBEKzkcxabA2fYYhHNteue2tLtoykwzrtxoFNSRdF61tgFk2p0Hg7Ea33CwREp3xK8pReIHP2LC%2Fu8V3xwOdbZ0op5rjlzdU3SiRAFBNc3U0L%2BovDTKjelpxwo4ghLLOYoWnB3GBzMIEXJdynYt1MnKVzyRJ0VUMIg%2FHhxrr6vY0w89TiruDLAMJjE3MJLl08AGOqUB8emcf6a4ao5gA%2FoeNavdbliaW5pUbkjaLEtO81QQmFOQNRYpkIgDSIyUrmXQWe%2BgIVeBsI%2BCSXXee8AbXgQGkyXyq3875xVyt7pEByEbKZRd4rS%2FUyuPyzjPu7EiSP%2B1OmAmOp0c%2BU4mtQQY71LZ2uX5O7CyfY7rM20BW87QabBs567W%2F2gZgks6baHRg5QYAyoFUeBv2N9jc6Uedx6oSDNBEEMb&X-Amz-Signature=83b3c2a3ed576ab6a2464929d627c90aa0d50e8f1e9af1362aafa7b75b25a879&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
