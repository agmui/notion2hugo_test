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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MGXGB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPDwqbBWftDHy%2FTFASgboDcDCsSWpeV%2F4tG4JKIsM1AiAqSE2LNT%2FbJC1aIWNtwNZF0vJGjU5zCAeenXm6PYss6ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMN8EBWp4qjnxvuE00KtwDEnixCQ9eNR758ZlNv7TDlY7ciosCg%2FkEpuhISMUGcxxiZZcLCFHRKMBieUOPrIoo7iue1grMm7sFMIafpK9cQr5mUqKzC7piOg6lbSKrG3BKkf4IXsZ57ZmiNtcg8L%2BHpC6MkGbVM8jPByLn9BsHbKlhU3IwInvLwLeagFcVn4kL%2Fjhd%2BpHiWVG93mwLXcryGZX%2FOilMtfttOOQJnXpGAnOI5TdEDfjJU83lzeCwGKElnAZfbKfbvJYg%2B29ZbQM%2BKPARnwuS2uGMGhRipNwpeznOjxry1mhb8uiu4zIIkrP3seJFscxIvlCV2Gz8pEzF%2FkIMutwLzV7cdkJrWCQnlcVlQfDT0Y%2F0WMp0%2FJaRXdiitmHGbfE7aX8zlFoIbhXfgzU8B%2FHBUn%2BI92JeilDIstCA8Br08v0m6I%2BmhizeNt2Pxez3IkI0Ct5Oy6lDbvOam3Y9zaEuqnEauHGNbDHFRhJ2SFAYe9lC%2FhoRmXK0JXi2T2iiZsew5dd2%2FQJninMe8znsQecVycW3VfdKmP7Z%2FlSrBvAC0WPa5EXb02a%2Ft8xZKzL98Z5VAl8hROKQ4I348GbnNNm5LvEe2B7PnDq0plVKxuIuCYWZGlPjIAkIyoWuT4UHkGY0NEwynZkwwKq9wAY6pgGKHMYbSWeKP3THONlCJILrMjJaH7klyr4IfIHBDFIk%2BiLrK8nxLHfyhq8ee0j9xzFQvzugpfP6My%2BWUV12SO4nSG%2FQhDstMOAALmU7XJOkUuMj%2F%2FQn99JVOQlY1bJOgOKGEpY%2FXOEjC%2BrMLp91VB7QsA8IQTQriykgVgeju3kGyR7kRzqQOiRMuYJVQNnGkiE4ckk4gb2PM%2F18hmqavAivf2F4k4wG&X-Amz-Signature=62188db6e370b0ae4d7617e0e84b8c8298e02206f8a066f16d8a96a3f1779f81&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T45MGXGB%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfPDwqbBWftDHy%2FTFASgboDcDCsSWpeV%2F4tG4JKIsM1AiAqSE2LNT%2FbJC1aIWNtwNZF0vJGjU5zCAeenXm6PYss6ir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMN8EBWp4qjnxvuE00KtwDEnixCQ9eNR758ZlNv7TDlY7ciosCg%2FkEpuhISMUGcxxiZZcLCFHRKMBieUOPrIoo7iue1grMm7sFMIafpK9cQr5mUqKzC7piOg6lbSKrG3BKkf4IXsZ57ZmiNtcg8L%2BHpC6MkGbVM8jPByLn9BsHbKlhU3IwInvLwLeagFcVn4kL%2Fjhd%2BpHiWVG93mwLXcryGZX%2FOilMtfttOOQJnXpGAnOI5TdEDfjJU83lzeCwGKElnAZfbKfbvJYg%2B29ZbQM%2BKPARnwuS2uGMGhRipNwpeznOjxry1mhb8uiu4zIIkrP3seJFscxIvlCV2Gz8pEzF%2FkIMutwLzV7cdkJrWCQnlcVlQfDT0Y%2F0WMp0%2FJaRXdiitmHGbfE7aX8zlFoIbhXfgzU8B%2FHBUn%2BI92JeilDIstCA8Br08v0m6I%2BmhizeNt2Pxez3IkI0Ct5Oy6lDbvOam3Y9zaEuqnEauHGNbDHFRhJ2SFAYe9lC%2FhoRmXK0JXi2T2iiZsew5dd2%2FQJninMe8znsQecVycW3VfdKmP7Z%2FlSrBvAC0WPa5EXb02a%2Ft8xZKzL98Z5VAl8hROKQ4I348GbnNNm5LvEe2B7PnDq0plVKxuIuCYWZGlPjIAkIyoWuT4UHkGY0NEwynZkwwKq9wAY6pgGKHMYbSWeKP3THONlCJILrMjJaH7klyr4IfIHBDFIk%2BiLrK8nxLHfyhq8ee0j9xzFQvzugpfP6My%2BWUV12SO4nSG%2FQhDstMOAALmU7XJOkUuMj%2F%2FQn99JVOQlY1bJOgOKGEpY%2FXOEjC%2BrMLp91VB7QsA8IQTQriykgVgeju3kGyR7kRzqQOiRMuYJVQNnGkiE4ckk4gb2PM%2F18hmqavAivf2F4k4wG&X-Amz-Signature=c140e386b328477b517b75aa4d890a991eaf2f7f7ccae30ea1f86631af2ab65d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
