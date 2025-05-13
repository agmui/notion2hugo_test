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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINO7WCS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID%2FrBSOpu%2F2I0VTHGcbtdJRvvoz3fzuGsCUmtw8WbyL%2FAiAEs%2FP%2Fd4LE4rN6GyHGV3sJrAqjatbt9XEBGPqR%2BPUoQCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPkbG7827Php5O0jKtwDq53%2F%2FclOctaJkSw%2B318BbuBklXyxMDYoXPB%2FTa2aN6vymHU6tMNVtRvDckYmAbcK%2FZKrKxJaV6mDBZz63pSLSaSf1L2%2BYuJ4thK%2FvHwPM6X04Xlnq3ztbBz65AP9xQOUmaBL57WxBmlQ1XhSGe197t%2B%2BPVwmX0oxTB6rhNUDaUwgjWxUxjqIJX%2B8lXH9bYn2kjJ86%2FDYrh7%2BuZvjOZ4UZaoN7ZXX07q%2Fd9DzkeZyb%2FlXBNohTuwfO03MpySqlMssbhguOCedvV9XOE2ojE7Vu4eN2JtozZdQApxRbQPyZp2ar%2FoXGPnp05wBzAi%2ByJOkBo%2FVHwB537yzUVFKLwE1EXqRIebuJecSi24UYk%2BaIXETfwqed96Xw7iWND%2FTqHBWRTpVOaUGZfbiav0hNtOGWL8%2B%2BwJBzOlolc%2FjMCqUilDiYdnXKQwUpxrmdlSQggdNtquCXNo338sppUQ1pMv22VRWUj7TVUmYtTklgGMd2eS%2BG6pMI3ikAJ9lEIpEUQWIpSadfypVlxBiZ7seXqe8rDr20LRF8rCXtZVp2Pl15sujDXal%2BMCjOhQWqpEOo%2BB2cCs46oBQJb6RFhSL2oXyMGQd3UxjLX8QMUHjZ6OZWBt3PG83bfM0zvoczusw2tmLwQY6pgHhiAnEFg1HnrGbKrRjXz4SaNNudvlGiVwRAauqwtYp00yBUhqqFR7fwMBFkszHyp6Yi6NsSBuXLIgMflk8z0FNXcpDQ5vxTdhDraKbiCvo7Lp1QWCuvApWc5Wkb1zAXQSxNe7%2BkoQ2qyXsHxfsld2l3YJDQY8utxqZJjJ8wVFDlRIYOLeLzZILzYgs892pO7wYeYCpa7PnMHz2vHm%2Bb9LfajV%2BuE26&X-Amz-Signature=2670a49b465f68651dd74d681b7fb1f34ac2cb58be97416323390f2e1d5aad75&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZINO7WCS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID%2FrBSOpu%2F2I0VTHGcbtdJRvvoz3fzuGsCUmtw8WbyL%2FAiAEs%2FP%2Fd4LE4rN6GyHGV3sJrAqjatbt9XEBGPqR%2BPUoQCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPkbG7827Php5O0jKtwDq53%2F%2FclOctaJkSw%2B318BbuBklXyxMDYoXPB%2FTa2aN6vymHU6tMNVtRvDckYmAbcK%2FZKrKxJaV6mDBZz63pSLSaSf1L2%2BYuJ4thK%2FvHwPM6X04Xlnq3ztbBz65AP9xQOUmaBL57WxBmlQ1XhSGe197t%2B%2BPVwmX0oxTB6rhNUDaUwgjWxUxjqIJX%2B8lXH9bYn2kjJ86%2FDYrh7%2BuZvjOZ4UZaoN7ZXX07q%2Fd9DzkeZyb%2FlXBNohTuwfO03MpySqlMssbhguOCedvV9XOE2ojE7Vu4eN2JtozZdQApxRbQPyZp2ar%2FoXGPnp05wBzAi%2ByJOkBo%2FVHwB537yzUVFKLwE1EXqRIebuJecSi24UYk%2BaIXETfwqed96Xw7iWND%2FTqHBWRTpVOaUGZfbiav0hNtOGWL8%2B%2BwJBzOlolc%2FjMCqUilDiYdnXKQwUpxrmdlSQggdNtquCXNo338sppUQ1pMv22VRWUj7TVUmYtTklgGMd2eS%2BG6pMI3ikAJ9lEIpEUQWIpSadfypVlxBiZ7seXqe8rDr20LRF8rCXtZVp2Pl15sujDXal%2BMCjOhQWqpEOo%2BB2cCs46oBQJb6RFhSL2oXyMGQd3UxjLX8QMUHjZ6OZWBt3PG83bfM0zvoczusw2tmLwQY6pgHhiAnEFg1HnrGbKrRjXz4SaNNudvlGiVwRAauqwtYp00yBUhqqFR7fwMBFkszHyp6Yi6NsSBuXLIgMflk8z0FNXcpDQ5vxTdhDraKbiCvo7Lp1QWCuvApWc5Wkb1zAXQSxNe7%2BkoQ2qyXsHxfsld2l3YJDQY8utxqZJjJ8wVFDlRIYOLeLzZILzYgs892pO7wYeYCpa7PnMHz2vHm%2Bb9LfajV%2BuE26&X-Amz-Signature=5a8271d39df43ebbe951ffbfbdcc7d1d681508604872a55d11104ac90d27c6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
