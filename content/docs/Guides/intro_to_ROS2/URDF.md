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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MR4N7W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBZh4UfFYrQ2hcJN2nGSihWrHL8ARMmKGsxaO9NIPnOyAiAs2FSLAjOuTiLJO8bkUMf95thDC7AcAUS%2B8dYzfeDn%2FCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM8cw4i1lDaoCs%2F0ztKtwDQ%2BKsjv%2F0qvMDYcJh6EAg8xCzqoU6qwrkrlW2eefFJyW%2F9cvNWn0VedpaZhezgkQFNUHjT3IdrrNGqFzweLXbOWiu3jV2Av3SOfHv1fzR2LpCAIa75Qrr0zSpocBCthdxiDI5zaAKE5U%2FuuS7%2FdixwYGVF7%2BT7gaOvi8wRRS%2F2HKFFtIz6Sq74s39DiTT5%2F0i5pgTdYe%2Bx8xHEsfDBUZkArbEUJ1b1zZS9lRLc%2FwZe77ECjWSqB%2BvU%2Bnl3DrIrdu5HkbYFRLH2jdRUicrtfYUH2trNGDiB%2FD8nFEVBXd6PUJ1N23Av8Avy7CJEMaRzIdrUQwY4x58tw8%2BHOvKgxgpp9TvKrLVWEeFYwcotbeb%2BhmJVq%2BWEtLGIZGgdXjYQigytILUXBRvgR%2Bs9%2Bcq8Drg%2BFgUEuRJfx5MJVS3%2BfhN9ZHdzXwlbqpt3O6DEorJUrT5FnAqtijYzwNlvlYbtH8N3Mi2rDVLISak6YAuduJkBZcyLbx8MKdwse4%2BcVeQTV4kGH3uQ8g3LCqKuzZU7wdYrRLgYbu98fyGqcNH3%2FgNk%2BK%2FSG7JP9uakJW0PRfMgHgoJT9lq%2BoemR8Gl%2BEYoT5BEg58HVKxHKGh%2Fc7gU8TI207fifIypSbUvqHMp1gws7jswgY6pgH3c%2BtY5L3Xrw%2FkBsOwKRkNQJ70v%2FYjjl0SA%2BYxskP5gWAb0WTlTMM1JHrT%2FuHcF8Uk1bDTFE0k7cN%2Fx%2BwUSy%2BJCDnizj3Zv4HlG2qoQmMj2jV8IM1takWLTLxp%2FnOtRUtbaDAPTlLDDhpmxKXw3SeQlsoY34YhPQr3KKd8TiT9H50X%2BaPuz6MMRKevHV%2FMdPDuB8oqeoNJHn1FXOirG9Ts7NR%2BY52u&X-Amz-Signature=5346c9a9507aa8eca8ae75a59890bde50354881806a4bde80bfe18cb69b4283b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5MR4N7W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBZh4UfFYrQ2hcJN2nGSihWrHL8ARMmKGsxaO9NIPnOyAiAs2FSLAjOuTiLJO8bkUMf95thDC7AcAUS%2B8dYzfeDn%2FCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM8cw4i1lDaoCs%2F0ztKtwDQ%2BKsjv%2F0qvMDYcJh6EAg8xCzqoU6qwrkrlW2eefFJyW%2F9cvNWn0VedpaZhezgkQFNUHjT3IdrrNGqFzweLXbOWiu3jV2Av3SOfHv1fzR2LpCAIa75Qrr0zSpocBCthdxiDI5zaAKE5U%2FuuS7%2FdixwYGVF7%2BT7gaOvi8wRRS%2F2HKFFtIz6Sq74s39DiTT5%2F0i5pgTdYe%2Bx8xHEsfDBUZkArbEUJ1b1zZS9lRLc%2FwZe77ECjWSqB%2BvU%2Bnl3DrIrdu5HkbYFRLH2jdRUicrtfYUH2trNGDiB%2FD8nFEVBXd6PUJ1N23Av8Avy7CJEMaRzIdrUQwY4x58tw8%2BHOvKgxgpp9TvKrLVWEeFYwcotbeb%2BhmJVq%2BWEtLGIZGgdXjYQigytILUXBRvgR%2Bs9%2Bcq8Drg%2BFgUEuRJfx5MJVS3%2BfhN9ZHdzXwlbqpt3O6DEorJUrT5FnAqtijYzwNlvlYbtH8N3Mi2rDVLISak6YAuduJkBZcyLbx8MKdwse4%2BcVeQTV4kGH3uQ8g3LCqKuzZU7wdYrRLgYbu98fyGqcNH3%2FgNk%2BK%2FSG7JP9uakJW0PRfMgHgoJT9lq%2BoemR8Gl%2BEYoT5BEg58HVKxHKGh%2Fc7gU8TI207fifIypSbUvqHMp1gws7jswgY6pgH3c%2BtY5L3Xrw%2FkBsOwKRkNQJ70v%2FYjjl0SA%2BYxskP5gWAb0WTlTMM1JHrT%2FuHcF8Uk1bDTFE0k7cN%2Fx%2BwUSy%2BJCDnizj3Zv4HlG2qoQmMj2jV8IM1takWLTLxp%2FnOtRUtbaDAPTlLDDhpmxKXw3SeQlsoY34YhPQr3KKd8TiT9H50X%2BaPuz6MMRKevHV%2FMdPDuB8oqeoNJHn1FXOirG9Ts7NR%2BY52u&X-Amz-Signature=1a10fbb126a176259caad3604e0def3dc9c19b99ea65a4501a882155e3751d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
