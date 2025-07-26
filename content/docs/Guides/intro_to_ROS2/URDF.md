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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TU2H5AT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEDgH023X7lcwiQ7CX%2Bazbrkce1bQNHJ3GP0tN2r533EAiEAmdiS2iISgIqxt%2BiDqwlMR1EsdF2XG7MVSPpKK71%2BPaEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHvxFKdsixsGfed%2BJSrcA%2FQDko%2BUVhSSAhd8fLk5w7%2FGvcNPY7%2BzI1f5Ynv99iOukzDZKi9EnmU38bsvwFoZwWJhMiQsJ9O5zZzKAskJNQcuGHowHdvOgfakWBVgC%2FSWGKNdaxTcY7pjRRpdfYLq%2FYsQbFHwPyzcCCGtSGrxHYEncVEhHUH9qIwVc33DqLlBAkN2tCRYLsqsekH%2Fo6UPzwFWilXr2BqWaKqkk2LEG5JUo7nV5%2FROBLdYWeVN8jENiy7z6Eqn%2BlUxuMTx6zx6m3S6ZmjnQAR9WE6k45o5HzMQOzt9PhXM6q7wVjn%2BrZ8G2%2BxmfPl96MHWGCiqqaLNc5C6uZuCOZpB6hQZPmAXlS%2FS4GmbGhMvX1%2FuHYe8H7xsJSIfDCcgMKmJYOKk%2FOQ2IEDXlx59a2vReflLa%2BMgRxIovL61Z9Pq0mzjYMM7JTWJ%2Fk9XiEA9XRRi78HUu9yn1tOnLQPSfvFaY78tqbdrCFGlHUjIETQRAWDQU%2BkGG8Kpc9dQ6t%2B9W3%2BobiINjMOzsbboyNM6OMo7JoL%2FlwKBnpbLmxOeITy6brxXrlEJ5oGhMhLYeJgc6UzbtFZiIqlfhV0tUVOQ5nPdjhhCBQ9odmyQGRaok8%2FVKWD3WfGsUW10KY9HxyXnW0aVBxL1MM7%2FlMQGOqUBiiLwQK8Ds1DA7gzTRQzrTh5pOYfW5GRVcaOWa5Q%2BEL2M%2Bnwq8yu0K0PVJ4DxxIvBhObOYDfTU%2Bjfo%2FMgOEqCoVk82oRxY7VNEydSeudTb0P5c4bVhx%2FNcCF8q9hNoMNC4ibc2XEpROnOqT2XOd7xQPFGIQpQ1%2FOqUJm3iKlmkD9H1T7f9SPD0MP5v%2FRZuu6y2x2g9MbPl5SJpwWp5VDVe%2F2qTSwX&X-Amz-Signature=6b63bea67d89ede4f2d3a2ea61908d154a6e92ded34d4d5b02c551caccd08bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TU2H5AT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEDgH023X7lcwiQ7CX%2Bazbrkce1bQNHJ3GP0tN2r533EAiEAmdiS2iISgIqxt%2BiDqwlMR1EsdF2XG7MVSPpKK71%2BPaEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHvxFKdsixsGfed%2BJSrcA%2FQDko%2BUVhSSAhd8fLk5w7%2FGvcNPY7%2BzI1f5Ynv99iOukzDZKi9EnmU38bsvwFoZwWJhMiQsJ9O5zZzKAskJNQcuGHowHdvOgfakWBVgC%2FSWGKNdaxTcY7pjRRpdfYLq%2FYsQbFHwPyzcCCGtSGrxHYEncVEhHUH9qIwVc33DqLlBAkN2tCRYLsqsekH%2Fo6UPzwFWilXr2BqWaKqkk2LEG5JUo7nV5%2FROBLdYWeVN8jENiy7z6Eqn%2BlUxuMTx6zx6m3S6ZmjnQAR9WE6k45o5HzMQOzt9PhXM6q7wVjn%2BrZ8G2%2BxmfPl96MHWGCiqqaLNc5C6uZuCOZpB6hQZPmAXlS%2FS4GmbGhMvX1%2FuHYe8H7xsJSIfDCcgMKmJYOKk%2FOQ2IEDXlx59a2vReflLa%2BMgRxIovL61Z9Pq0mzjYMM7JTWJ%2Fk9XiEA9XRRi78HUu9yn1tOnLQPSfvFaY78tqbdrCFGlHUjIETQRAWDQU%2BkGG8Kpc9dQ6t%2B9W3%2BobiINjMOzsbboyNM6OMo7JoL%2FlwKBnpbLmxOeITy6brxXrlEJ5oGhMhLYeJgc6UzbtFZiIqlfhV0tUVOQ5nPdjhhCBQ9odmyQGRaok8%2FVKWD3WfGsUW10KY9HxyXnW0aVBxL1MM7%2FlMQGOqUBiiLwQK8Ds1DA7gzTRQzrTh5pOYfW5GRVcaOWa5Q%2BEL2M%2Bnwq8yu0K0PVJ4DxxIvBhObOYDfTU%2Bjfo%2FMgOEqCoVk82oRxY7VNEydSeudTb0P5c4bVhx%2FNcCF8q9hNoMNC4ibc2XEpROnOqT2XOd7xQPFGIQpQ1%2FOqUJm3iKlmkD9H1T7f9SPD0MP5v%2FRZuu6y2x2g9MbPl5SJpwWp5VDVe%2F2qTSwX&X-Amz-Signature=717e979e5a4b9e042b4d419a3160f682951813b2bf165cd8e57f36b466ac4af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
