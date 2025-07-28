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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3A3IJV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICdxwUM63k0rr2U4RW3hjZT%2Fr23IDOpplMqPuubOteCsAiEA8HYHd%2Fu5xpUsC2ry2%2Fev04WTG9pxbEus3%2Bjm8YWpyLMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwUjBJYOci%2F1sG%2BWircA85eaH9ebetz%2B13OI2N%2FtLlHqX3gV5zfnvO5agKUWBAD9Mvp8mVibPIDz84qhHjvu5BR6kVk9iXH0APBetxBr9WMzG%2BuqPDSdYEOE6CS8c83wf9moOj49f8X9scMGdKZp9Kd01lD%2BpdCHdF9JE%2BkYiH2%2B4CSsNH8Z3fgj8eCEhUhrpakeSfT0r92O8m9PHLJOc4o1OseYq8C%2FP7yXBXm1bhtLu%2BLDgfrCpLJt7bh4Wc1uUsgNWtg8GdrIRWDBWDyXd87QL1X8dCR%2BamvHTmKbQlUnSEZ8wSaxibMTp1wQMOC8UqpkBqXCjO7COSCLMQBCvURPCDmtT7WG6qMODAM71QOiDrKlVCy5b%2Ftx%2BqtxE85KvXmWYwz2M%2FINiK%2BcMqEsJd7yPyX5BQdJ7Ul0HV8be9eJjMM8o08O1Ia0ZApsk%2FSG06NuQunqdQemKeyNN6X0pJCJEetdwKgyWyq%2BvET2N%2B8VeqCPPIi%2Fp4IcyzA8W%2Ff8KwM9wT1yd4Nb8Z1vM5RTrPWm3YQyi16hb1aeuuqWhp14vb9iCsNHrI0J8hUv0LVvaaZvr%2B0qJfNa0zBfcMG887LNPcXS0XE8qAG7jMI8rQcDLdFYc5Pj40ShxVKbYE7KXpesAKA7OBd0KbEMPv7ncQGOqUBlua%2B%2Br7UsNPp2Lqy5q8ksYLh4lKlUXK2d71AVc4X62lh3KrX4QGY2joOo%2FF7vmJ%2BtwlQ7UaJJd4ZOhgOzJdV1sQBT6KoeftstgGYqk6GZZiwWTQrw7Yh1SkGx4oOYb%2FbiJv4APolf%2FcxN0Ha%2FC5N1HUMOZI%2B%2BNSYThLI%2FY%2FpIf1%2FEGtuSTodvBWTci7MZbbaGKn3pZ7%2BIF%2Bs0jpZHEEwb8PRXDzM&X-Amz-Signature=787ac0f357ff4644c72274257614d8f9d8952ce406db210b51565bb3d9817803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3A3IJV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICdxwUM63k0rr2U4RW3hjZT%2Fr23IDOpplMqPuubOteCsAiEA8HYHd%2Fu5xpUsC2ry2%2Fev04WTG9pxbEus3%2Bjm8YWpyLMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwUjBJYOci%2F1sG%2BWircA85eaH9ebetz%2B13OI2N%2FtLlHqX3gV5zfnvO5agKUWBAD9Mvp8mVibPIDz84qhHjvu5BR6kVk9iXH0APBetxBr9WMzG%2BuqPDSdYEOE6CS8c83wf9moOj49f8X9scMGdKZp9Kd01lD%2BpdCHdF9JE%2BkYiH2%2B4CSsNH8Z3fgj8eCEhUhrpakeSfT0r92O8m9PHLJOc4o1OseYq8C%2FP7yXBXm1bhtLu%2BLDgfrCpLJt7bh4Wc1uUsgNWtg8GdrIRWDBWDyXd87QL1X8dCR%2BamvHTmKbQlUnSEZ8wSaxibMTp1wQMOC8UqpkBqXCjO7COSCLMQBCvURPCDmtT7WG6qMODAM71QOiDrKlVCy5b%2Ftx%2BqtxE85KvXmWYwz2M%2FINiK%2BcMqEsJd7yPyX5BQdJ7Ul0HV8be9eJjMM8o08O1Ia0ZApsk%2FSG06NuQunqdQemKeyNN6X0pJCJEetdwKgyWyq%2BvET2N%2B8VeqCPPIi%2Fp4IcyzA8W%2Ff8KwM9wT1yd4Nb8Z1vM5RTrPWm3YQyi16hb1aeuuqWhp14vb9iCsNHrI0J8hUv0LVvaaZvr%2B0qJfNa0zBfcMG887LNPcXS0XE8qAG7jMI8rQcDLdFYc5Pj40ShxVKbYE7KXpesAKA7OBd0KbEMPv7ncQGOqUBlua%2B%2Br7UsNPp2Lqy5q8ksYLh4lKlUXK2d71AVc4X62lh3KrX4QGY2joOo%2FF7vmJ%2BtwlQ7UaJJd4ZOhgOzJdV1sQBT6KoeftstgGYqk6GZZiwWTQrw7Yh1SkGx4oOYb%2FbiJv4APolf%2FcxN0Ha%2FC5N1HUMOZI%2B%2BNSYThLI%2FY%2FpIf1%2FEGtuSTodvBWTci7MZbbaGKn3pZ7%2BIF%2Bs0jpZHEEwb8PRXDzM&X-Amz-Signature=1ca0b4d097436a5262b257aa5673c27dc5e51ce5bcb4759feafbf24e2863f373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
