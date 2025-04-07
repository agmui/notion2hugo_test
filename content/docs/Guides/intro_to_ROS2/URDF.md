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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFJSAQF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxRxnzimuKdoNL9GJwIt9S%2FzxFuJZLGl7eEkPFnXk5UAIgIDTtvMTD8T4tB3moE7NjFWb%2B4BDdATq5JJBHSH6qcqsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFMHTcBZr9rSyi2QmSrcAyqawJJ5QfT5uzaXJ%2FAig3SzrCZiT3YXzJyOETiGS4Q0Rd7su0pamUhRuCmpYNp0MJsgnTwkiGkOpszhF7pdjI9GuANxUX%2BNbQe53%2BXiCaYYndsww%2Bz436e4usTUYp26PuJhu%2FoZ9y7Gx%2FwLM803NbqL0rQfRkL2oDUhlcRXcKfLCvMZJe9bOXa6KMGxQ3FWMXJJveWBcSaq4oFu9EznEb%2B4DHJkxwHC4NSQ4HxfJiuQwLccvuPB2PRTHjEKR5tl4Vf%2BgWlJpstWXR1dqUaDzby6U3gNq%2B9%2Fuot8%2FXDShChykG16F6et2Na4VfvJDRVmuj%2BBGcr7HefeDng76%2BRUHnjYkgXKFpYgoKHzzKcxsI2kec9AGKLi1xNgKQXjahf5RvR9bi0NAffSqzTiq1A5MsOIk3U%2Bn2gAe8UJNY%2F5WbzgnUHl9ATSbuYRmHtV9tL8zXUWNyGgh980RB5koDaITaU9EHnimWyl1XkZN3RV2rA6kWnN4iwQly0KvOHarOhPdzj%2BISKF%2FdxNS%2FWl2PvM%2FfeGYBPmNEQMplXGBZOASpe7%2B09dbbP7Bkwh%2BmiTzAdg2KvC39yfsWydmrDz4FZOg4orouO3M9LmUGJMtMkVI%2F8d60eKJIEwwvgSOSypMMqj0L8GOqUB2Fv%2BYiv1TpzB5rJkE48BneJTFXpUilV56%2BEahidX89Z628lMfdLqQXbWcFQ7S9mfOdb6ipuezg4g2miGD0JL39Lb%2BKOtN67gxCqPAc0IJftZ%2Bx%2BkQQNVDXQIISriy3ZQd2FwxGZ9LIPnEEGzIf7vo0gXzF0hXhb8mo44PsQesG5%2FHrBT8CEVhc%2BGJEa6%2BJnDJK0pLxpy4hjM%2F2EXgmzzoqO0FIWw&X-Amz-Signature=c6d74871b24936649008d010d63dc534b269f0bca05a1035ad9abcd4a55ec7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFJSAQF%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxRxnzimuKdoNL9GJwIt9S%2FzxFuJZLGl7eEkPFnXk5UAIgIDTtvMTD8T4tB3moE7NjFWb%2B4BDdATq5JJBHSH6qcqsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFMHTcBZr9rSyi2QmSrcAyqawJJ5QfT5uzaXJ%2FAig3SzrCZiT3YXzJyOETiGS4Q0Rd7su0pamUhRuCmpYNp0MJsgnTwkiGkOpszhF7pdjI9GuANxUX%2BNbQe53%2BXiCaYYndsww%2Bz436e4usTUYp26PuJhu%2FoZ9y7Gx%2FwLM803NbqL0rQfRkL2oDUhlcRXcKfLCvMZJe9bOXa6KMGxQ3FWMXJJveWBcSaq4oFu9EznEb%2B4DHJkxwHC4NSQ4HxfJiuQwLccvuPB2PRTHjEKR5tl4Vf%2BgWlJpstWXR1dqUaDzby6U3gNq%2B9%2Fuot8%2FXDShChykG16F6et2Na4VfvJDRVmuj%2BBGcr7HefeDng76%2BRUHnjYkgXKFpYgoKHzzKcxsI2kec9AGKLi1xNgKQXjahf5RvR9bi0NAffSqzTiq1A5MsOIk3U%2Bn2gAe8UJNY%2F5WbzgnUHl9ATSbuYRmHtV9tL8zXUWNyGgh980RB5koDaITaU9EHnimWyl1XkZN3RV2rA6kWnN4iwQly0KvOHarOhPdzj%2BISKF%2FdxNS%2FWl2PvM%2FfeGYBPmNEQMplXGBZOASpe7%2B09dbbP7Bkwh%2BmiTzAdg2KvC39yfsWydmrDz4FZOg4orouO3M9LmUGJMtMkVI%2F8d60eKJIEwwvgSOSypMMqj0L8GOqUB2Fv%2BYiv1TpzB5rJkE48BneJTFXpUilV56%2BEahidX89Z628lMfdLqQXbWcFQ7S9mfOdb6ipuezg4g2miGD0JL39Lb%2BKOtN67gxCqPAc0IJftZ%2Bx%2BkQQNVDXQIISriy3ZQd2FwxGZ9LIPnEEGzIf7vo0gXzF0hXhb8mo44PsQesG5%2FHrBT8CEVhc%2BGJEa6%2BJnDJK0pLxpy4hjM%2F2EXgmzzoqO0FIWw&X-Amz-Signature=d2cf4f40095ec1ec156597f1a89a4110b7141d33eaaed86aaeb77bb68a9728bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
