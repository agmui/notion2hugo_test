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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJX2P77%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC73naS5hqJDV6UaL47K1aWt%2BNPai9VfVm6gojb7G1JQAiBieySllKemzcg3TM1dhUm%2F1wJ%2FxPL%2Bah%2F0iqdLpNlQayr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMd1K2zc%2Bf%2FFUAunm9KtwD9ni7HTeXl%2BX4qxOrJ0YfCH22xJh8ODaO4z%2FVOQ5auBWv%2F6tqoiWG%2BibvaEY2hXuKPEZ%2BH1owrxkZpJOmNJUis9XWpi4FGcREN7TYvmdg5mI%2FJNUQDe206NbVxCiffG0p5b%2FKmOeswsBotjdkCS4lF7n%2BY4n7SqA5oOhV3%2B5%2FO9D8SzG14orO8dZkNlOzGS7t7w0jn%2FaYZF%2FuM18IgXOE6g1FP%2FpaScnQrnFGflFm0c5tWiGdKVmmZUbQ0bfdXf0c%2Bjc01iapjLh4hAZxnyrGqzvnbvY5Eq4%2FGMsRB7lKGKQ5ab7tHvb9LVLitORa3UFQJy%2FnmnlbazunR2V1NmgBSW7mwQQv%2FtEI9K%2FrPkisfZ4uLtIxVQqWWWhzdlFP6cuhtqosyLxTnIrWm5MSyomuRYVBTeV6Bef5WZnNI59fqKcXwRA0MboP4KrGke3pOhdhyKQi9acW7OerP4RD7Zh68dhbWzTzn4gfurJg%2BHRYUEXLYE5kvQ4JNLHSm7vSUqM63sq2ceSQEQ%2F2NgTTvjze3yDkee02PUB04W4WtGgUhclrIuLf8aD0fEQJAhGZ8Lq7aOOIZGt7Uj1zONGJXeHz1Ww3rPsf1oMRFPLT4hgCf%2BgVkR5Q3ShCZpchxGcwvKCtvgY6pgHUT1nJjuRLUukiFt1WHx%2Fy%2B1LDWZf68KNwfdqOo3c7Nc78TDnHRZWL%2BevaEFQsaNrm9zd5PPFHfj8EkBItzOp5yeYHu%2Fah4ET2VdOxQihubItb9pqqtoMLuoAlHDJL9i0ENZ3JI7tTlkGyTe7rDxXmQ60hpqe3zRZz0FthMCV8uVwla7hO16X53R6TqNoQRh8OHwvPpFPV%2FabmsepIj4u%2FduYLP9Wx&X-Amz-Signature=f2832145bab9f431e2abe3079a6d1da93515a43607c3e73c30b70ce71e61d0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJX2P77%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIC73naS5hqJDV6UaL47K1aWt%2BNPai9VfVm6gojb7G1JQAiBieySllKemzcg3TM1dhUm%2F1wJ%2FxPL%2Bah%2F0iqdLpNlQayr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMd1K2zc%2Bf%2FFUAunm9KtwD9ni7HTeXl%2BX4qxOrJ0YfCH22xJh8ODaO4z%2FVOQ5auBWv%2F6tqoiWG%2BibvaEY2hXuKPEZ%2BH1owrxkZpJOmNJUis9XWpi4FGcREN7TYvmdg5mI%2FJNUQDe206NbVxCiffG0p5b%2FKmOeswsBotjdkCS4lF7n%2BY4n7SqA5oOhV3%2B5%2FO9D8SzG14orO8dZkNlOzGS7t7w0jn%2FaYZF%2FuM18IgXOE6g1FP%2FpaScnQrnFGflFm0c5tWiGdKVmmZUbQ0bfdXf0c%2Bjc01iapjLh4hAZxnyrGqzvnbvY5Eq4%2FGMsRB7lKGKQ5ab7tHvb9LVLitORa3UFQJy%2FnmnlbazunR2V1NmgBSW7mwQQv%2FtEI9K%2FrPkisfZ4uLtIxVQqWWWhzdlFP6cuhtqosyLxTnIrWm5MSyomuRYVBTeV6Bef5WZnNI59fqKcXwRA0MboP4KrGke3pOhdhyKQi9acW7OerP4RD7Zh68dhbWzTzn4gfurJg%2BHRYUEXLYE5kvQ4JNLHSm7vSUqM63sq2ceSQEQ%2F2NgTTvjze3yDkee02PUB04W4WtGgUhclrIuLf8aD0fEQJAhGZ8Lq7aOOIZGt7Uj1zONGJXeHz1Ww3rPsf1oMRFPLT4hgCf%2BgVkR5Q3ShCZpchxGcwvKCtvgY6pgHUT1nJjuRLUukiFt1WHx%2Fy%2B1LDWZf68KNwfdqOo3c7Nc78TDnHRZWL%2BevaEFQsaNrm9zd5PPFHfj8EkBItzOp5yeYHu%2Fah4ET2VdOxQihubItb9pqqtoMLuoAlHDJL9i0ENZ3JI7tTlkGyTe7rDxXmQ60hpqe3zRZz0FthMCV8uVwla7hO16X53R6TqNoQRh8OHwvPpFPV%2FabmsepIj4u%2FduYLP9Wx&X-Amz-Signature=a3d4c54aa602dd375caf62852142e42d9bca010a02d482156dce48b75e1f1c08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
