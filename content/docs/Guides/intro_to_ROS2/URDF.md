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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JORWHM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBTGwRKK5%2Bw5GeOejysBWsCDdq41qhOJtc%2Bx9y0KRmAiA4gVswsxeQJSnzSmW2gsnpAdo7TVckaHvi0yTXH0NRWSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5rJ0JUvtGsPF8lQ4KtwDJ%2FaB5hI%2FEa2wwL5YzkJSG9ta68Yl6Gqg8fz4xKwxTXdDBfu1lDYx45m%2FhpSRpiNLLuCJk%2FnkpEHRi9QH5sYoujLcI36OPUWZAG%2BzeeCcVgt6baHwdE7yCgeWT9bmoLIdsKvsUkcHT%2B8RTFYfUi7N6qXXOZNOcitdeLtGbcskg6Lzqy51692g%2FHylzjz8T6sf3IVEzHIibM80tzguVNHMXQN6IZYd9t5xgwhICtsjwFNgVfLR3PYT9tAXHq0sL7sQcbu13%2FpIdwvMScXSM6cX0xKXJZFHCCYsVU59jT7u2g2Jja8jiQQ7qFgvQX037uXwp2gAqDjTeqSJgjWq2%2FQawKOb0l%2Ft2UApUQ8UUYAJE0MqJDr%2Fz%2BN6Wk7vEGsl807VQgiXm7sZVntIdNe5oOpc5beoxKOXGI%2FrZKbXudfrk5oW3mxBnRw8Cpt1t9xPQYnTGvyeFsqYzokQaOTIJzpCg7b0RpZ%2BTYuQvumdf%2B5HLu9RXgVaQwBVMWQKFChmvgSmfz5pq5xGHWuMtAdAFHMxCQtcbixbXOdjbH0mrbLnSv9CmiQQdFBesVZa78fWdajmzf34oU4S56IW4OFAZwrPyhtr2XZpIFD9ohYnpfIQW1ajWrN6KaN9T9DzS%2FEw2d20wAY6pgFzGSy9gSzcC1TB1upmMdTxmr4yxk8fdbFSM8SZOWwlAEd8Z0ttrMV3ylN0xDrQdGg%2B5rMMSFwJD6F8zsYOYVkzAP4s7JHTLp9nEbpKebb6pq%2F1lkipA5TULZoU%2FUFHunj4ZEkHRAXqv5s7PLPm7rAO%2BSP4tUSV813gkJMMp482F6uLnewHzHRyMpIH6NaPeCWljFnWtQ0OpR94MWSXJ0PBukp80ndQ&X-Amz-Signature=f534bbdb326a11582ec21f0c7d3d1a90abd71b1c5bbf2e414c68806b6fa1c0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6JORWHM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBTGwRKK5%2Bw5GeOejysBWsCDdq41qhOJtc%2Bx9y0KRmAiA4gVswsxeQJSnzSmW2gsnpAdo7TVckaHvi0yTXH0NRWSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM5rJ0JUvtGsPF8lQ4KtwDJ%2FaB5hI%2FEa2wwL5YzkJSG9ta68Yl6Gqg8fz4xKwxTXdDBfu1lDYx45m%2FhpSRpiNLLuCJk%2FnkpEHRi9QH5sYoujLcI36OPUWZAG%2BzeeCcVgt6baHwdE7yCgeWT9bmoLIdsKvsUkcHT%2B8RTFYfUi7N6qXXOZNOcitdeLtGbcskg6Lzqy51692g%2FHylzjz8T6sf3IVEzHIibM80tzguVNHMXQN6IZYd9t5xgwhICtsjwFNgVfLR3PYT9tAXHq0sL7sQcbu13%2FpIdwvMScXSM6cX0xKXJZFHCCYsVU59jT7u2g2Jja8jiQQ7qFgvQX037uXwp2gAqDjTeqSJgjWq2%2FQawKOb0l%2Ft2UApUQ8UUYAJE0MqJDr%2Fz%2BN6Wk7vEGsl807VQgiXm7sZVntIdNe5oOpc5beoxKOXGI%2FrZKbXudfrk5oW3mxBnRw8Cpt1t9xPQYnTGvyeFsqYzokQaOTIJzpCg7b0RpZ%2BTYuQvumdf%2B5HLu9RXgVaQwBVMWQKFChmvgSmfz5pq5xGHWuMtAdAFHMxCQtcbixbXOdjbH0mrbLnSv9CmiQQdFBesVZa78fWdajmzf34oU4S56IW4OFAZwrPyhtr2XZpIFD9ohYnpfIQW1ajWrN6KaN9T9DzS%2FEw2d20wAY6pgFzGSy9gSzcC1TB1upmMdTxmr4yxk8fdbFSM8SZOWwlAEd8Z0ttrMV3ylN0xDrQdGg%2B5rMMSFwJD6F8zsYOYVkzAP4s7JHTLp9nEbpKebb6pq%2F1lkipA5TULZoU%2FUFHunj4ZEkHRAXqv5s7PLPm7rAO%2BSP4tUSV813gkJMMp482F6uLnewHzHRyMpIH6NaPeCWljFnWtQ0OpR94MWSXJ0PBukp80ndQ&X-Amz-Signature=da82f6b6d199c4d6d019a5a89fd3874154ca09cc6f92cd43296d5786b2b13468&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
