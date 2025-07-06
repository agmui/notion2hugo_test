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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHU4O2ID%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEL4QXP6vCFZVqgJ8F7qvW2gUSjIM1uQfb8FzlBYdFagAiBtvG4RxVhTHvyfoUA64u1lrESUlr7PIICH5TydD0g%2FJyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZ01gF3GsoBILPNPkKtwDaIvdN1adAJDlqyCkrMA6KiaGgkB5uhBTGZkil5X3ovUUBXtsi77jEOAVbaVyULpdp0VlRovLhWDI%2B2ZdXqTKdnlqKk6gHjtvLOjQClAessDPYFxolMFzYoNmcAw7Z4idOX%2FgXajQhSYjLjPrd9LOco3iH9SmIek9kAtMKRpfSuBlya97EDaABzmzTdmr7Vvhc9XB6zpQNqayfe1%2FcDcCYsJgN0sdqZ2nD%2BX9uZXpiQFUSjOs%2F%2FOApyatZ%2BYqDvw9u%2FiATLqeVbXe8rhscAQmCWMXidgU1I0iJ8ZEzJkRDuxMkSXaGtpR1aKQ593vzTFU%2FhvHjqJ%2BcTOO8tZJeqBGkQQB0zx0taHZ065gdyV8WCQkdXQYs4DTY6MSimx9RDoRP9zFFq8GS5YWPYm%2BfacH7Pf9Dgy35%2BajJkQVJDizS2d%2Bvs2mcdcaSqqpjnFERb5rNEyOz0%2BDLaSpjP7lp924DUtB0YbP09TGHHkVRDnOccKPeci%2BYMWjYbqD5Q3XMeoO97v%2FhYG2yOzw3j6E%2FU7Kly07sSdZAQSbAHWV5wS2ci3Nmk%2Fv7PM9y6JsJ3DmW2HTbO0ZHo1W%2FlPPXwLAgy2Vv8luAPnJqM8u%2BiH635cOhJFe7mHWKCETuMa7OxkwtaaowwY6pgFa%2FpSIYcxur%2FOK4%2BRf3q6q0fKCkbZq3kFVBMWpOyWsZlAHclteJrmIoaSRTWRtSz7ouf3qlMkOpB%2Bj0XgCwpxPFF%2F%2B3%2BLQPsqIQa%2BGsqUq%2BZMNdJ93AjKCGg6In4Nzh3k1phzTUs8cBVKwSGlG13hkNargXfVDhfa4pXoLKVAJdkBxeDxEkw4jQh%2BA2L8tOxx9yZGC%2FIdebqkt4QURZPYYd%2B6ogHw9&X-Amz-Signature=1ec767eecff0b265b007ac2686310ada0cbe0a7aa60e663d6c7dc36d1d88e5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHU4O2ID%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIEL4QXP6vCFZVqgJ8F7qvW2gUSjIM1uQfb8FzlBYdFagAiBtvG4RxVhTHvyfoUA64u1lrESUlr7PIICH5TydD0g%2FJyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZ01gF3GsoBILPNPkKtwDaIvdN1adAJDlqyCkrMA6KiaGgkB5uhBTGZkil5X3ovUUBXtsi77jEOAVbaVyULpdp0VlRovLhWDI%2B2ZdXqTKdnlqKk6gHjtvLOjQClAessDPYFxolMFzYoNmcAw7Z4idOX%2FgXajQhSYjLjPrd9LOco3iH9SmIek9kAtMKRpfSuBlya97EDaABzmzTdmr7Vvhc9XB6zpQNqayfe1%2FcDcCYsJgN0sdqZ2nD%2BX9uZXpiQFUSjOs%2F%2FOApyatZ%2BYqDvw9u%2FiATLqeVbXe8rhscAQmCWMXidgU1I0iJ8ZEzJkRDuxMkSXaGtpR1aKQ593vzTFU%2FhvHjqJ%2BcTOO8tZJeqBGkQQB0zx0taHZ065gdyV8WCQkdXQYs4DTY6MSimx9RDoRP9zFFq8GS5YWPYm%2BfacH7Pf9Dgy35%2BajJkQVJDizS2d%2Bvs2mcdcaSqqpjnFERb5rNEyOz0%2BDLaSpjP7lp924DUtB0YbP09TGHHkVRDnOccKPeci%2BYMWjYbqD5Q3XMeoO97v%2FhYG2yOzw3j6E%2FU7Kly07sSdZAQSbAHWV5wS2ci3Nmk%2Fv7PM9y6JsJ3DmW2HTbO0ZHo1W%2FlPPXwLAgy2Vv8luAPnJqM8u%2BiH635cOhJFe7mHWKCETuMa7OxkwtaaowwY6pgFa%2FpSIYcxur%2FOK4%2BRf3q6q0fKCkbZq3kFVBMWpOyWsZlAHclteJrmIoaSRTWRtSz7ouf3qlMkOpB%2Bj0XgCwpxPFF%2F%2B3%2BLQPsqIQa%2BGsqUq%2BZMNdJ93AjKCGg6In4Nzh3k1phzTUs8cBVKwSGlG13hkNargXfVDhfa4pXoLKVAJdkBxeDxEkw4jQh%2BA2L8tOxx9yZGC%2FIdebqkt4QURZPYYd%2B6ogHw9&X-Amz-Signature=c508f9d5ccd4d4ddc793c680efccd15eb2d912bb4d51c61f0387d5416038e76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
