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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCG7S2ZF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIALKkUgrSOF%2FlitQibr5qaP3mXI4%2FYtCNxaqeBTuBiiaAiAQhLO84rRHWHAhhqF%2BKtJSkyQzY7pvrPbppDTHlUTuRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMptf0RHAHQp2Vf9R0KtwDEyVPJCAAmaDXlEii340hazF2bBibmSub2QwErkLY8INvcjCNDfSEZalNp763Dre1dLwBmR1t2XvIuAsCbXK42mH27qmP%2BsZUK3jRr9JLqPChg%2FbLEkcj0VmA4fQtM0VVIj%2BZVIx5gvQOqDZPV8M1HA1np2ed7evk26OrbomSO9%2F3zObktixh8eTxJxbmAUciey4nVGELgI2hQcsMeuDfM0u0nWJIhiyoWhdsP7ZP%2BUnNX%2F7RryEKJ0CI3aKEEWEUG12NuOi%2FH2HqcYGQo21e6%2FxTYWG7tHSHfkefzfjlEym%2FFOuDEI2E8ChjMXm9WjRUNz45EatuwmGjhqAHUMjKv%2BDx%2FUXZ%2BwQe3kVt3TCl2mBy2atCjDm3FQ7959Azh%2BpffTWfT61UhbVKt%2BRNb9YA5d8Z4inalj8PAW4G2YoEOuvnxVKO61kJS%2FVBrfL9cQ9qsc%2BMTdLVw%2FPD3A1hEJ0hJsBtCF%2BnD5N0hF00FcWHRKfMt4Htnulh84SxOU6iktoP7EjWsiq3Y54pHywOZ5vVKw3Jr%2BbvjsO7ufrahXByK6T%2BlHz%2F85CfQZkWBJ3H%2BTulrPfKQsVy3uv1dnvT5gf2UMOj4Psst9OHcOqQ6wHgSetAabftSJBvAQwc0eow2LacwwY6pgFIWUij0LgOhuIin%2FPfNGXILULJ7K%2B3Bm3%2BoKDlI6OYSUJxWJIVYq0Kuo5QTuT%2BUzKUwNqASOuCjd3ZBnX6bDyKLN7%2FWl8isjzi0wkHKI9yITHN489kF%2FnYlGTBLo8%2FpEDL5PYXc4xLGo7kplM%2BMt30G1mhdFLdIUR9CmC8VJPfXtWRyJtkz0DU3x1n27d%2F%2Btd1wPisdL2onmchhcrQ7fZpxtdBqMQL&X-Amz-Signature=64c76f3941994635b540f2c20980d020d0cc64bd20c0f13e8468b7b8473f21e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCG7S2ZF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIALKkUgrSOF%2FlitQibr5qaP3mXI4%2FYtCNxaqeBTuBiiaAiAQhLO84rRHWHAhhqF%2BKtJSkyQzY7pvrPbppDTHlUTuRyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMptf0RHAHQp2Vf9R0KtwDEyVPJCAAmaDXlEii340hazF2bBibmSub2QwErkLY8INvcjCNDfSEZalNp763Dre1dLwBmR1t2XvIuAsCbXK42mH27qmP%2BsZUK3jRr9JLqPChg%2FbLEkcj0VmA4fQtM0VVIj%2BZVIx5gvQOqDZPV8M1HA1np2ed7evk26OrbomSO9%2F3zObktixh8eTxJxbmAUciey4nVGELgI2hQcsMeuDfM0u0nWJIhiyoWhdsP7ZP%2BUnNX%2F7RryEKJ0CI3aKEEWEUG12NuOi%2FH2HqcYGQo21e6%2FxTYWG7tHSHfkefzfjlEym%2FFOuDEI2E8ChjMXm9WjRUNz45EatuwmGjhqAHUMjKv%2BDx%2FUXZ%2BwQe3kVt3TCl2mBy2atCjDm3FQ7959Azh%2BpffTWfT61UhbVKt%2BRNb9YA5d8Z4inalj8PAW4G2YoEOuvnxVKO61kJS%2FVBrfL9cQ9qsc%2BMTdLVw%2FPD3A1hEJ0hJsBtCF%2BnD5N0hF00FcWHRKfMt4Htnulh84SxOU6iktoP7EjWsiq3Y54pHywOZ5vVKw3Jr%2BbvjsO7ufrahXByK6T%2BlHz%2F85CfQZkWBJ3H%2BTulrPfKQsVy3uv1dnvT5gf2UMOj4Psst9OHcOqQ6wHgSetAabftSJBvAQwc0eow2LacwwY6pgFIWUij0LgOhuIin%2FPfNGXILULJ7K%2B3Bm3%2BoKDlI6OYSUJxWJIVYq0Kuo5QTuT%2BUzKUwNqASOuCjd3ZBnX6bDyKLN7%2FWl8isjzi0wkHKI9yITHN489kF%2FnYlGTBLo8%2FpEDL5PYXc4xLGo7kplM%2BMt30G1mhdFLdIUR9CmC8VJPfXtWRyJtkz0DU3x1n27d%2F%2Btd1wPisdL2onmchhcrQ7fZpxtdBqMQL&X-Amz-Signature=cb0107b99ac0a159c9fe5b332f588cff496696b2dc6fa10975ac955ea09962f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
