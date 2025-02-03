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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYMCFKL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1XGtjqVuOSJlEA%2Fe%2FPvmqgRr71Ny89gdoahzOVDpDQIgKsxzXuuyYuYKVwH0vrVyl8ONupmw7i2oo0r16PZxmNwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyf8dIiNPJZ3CQZ3SrcA4GU9xrRrfpnFViiOz1dqgRhYVc%2BQt2DkZDJrVWwaNkR%2FA9IfBv%2FTqC8jB28SnKs49qiwOHWvlT0pKS8I6BrPOym53iU9qse125vUjIk8zrzMbM4UjQz3%2FCgozd4jt%2BcNwNifRsAGRrEc4%2Bzm4V0JwC5x%2BaXLj98LZiYq2cEpprKnRmVMZddB4etY3lkZZVotq5pf8P6M2bSdheHyXKDN0Wq4k5%2ByUbnvIF8LiPPONZZRUyich%2BICYe2i6lLAVrN3ATfUp139IJRl2VGE4ofDO%2BGwHEnB7bH80PQ%2BjuAH%2BJKjO1gs5CNI1CZZ9rFyPDZoZijjEvqA9kky8GxmEaFoUfS5Wyb6kZvoRVm29Dld4EzQhe3bGqaCBi6KIQbJjbJg4ldxNN3i%2FolRCYZqV4n%2FGy8GTC5Sql9Wd9sFzSkC8GRaObuMR7ehMmFOmC8ElPkeYM36nznQJkN4OWn9cpk0LiJvvy8ZisxvQR0LsGb2T0eoxHbMpquYfvV%2FLPbt07%2B7Gul9%2BjXqzrzdhGDhB1Ym9YnNzvjzWRhLLITkeHW%2FTScCd54ZSi4SeV2AZmoUlz4%2FBA9spmDqv4J%2Bl%2Fpp0QCfmLfw5x3G3pVWceMFphLWd4TtuS1%2BWgGxJvNtZENMNW7gb0GOqUBI17rYw9bxn4tXfF74ZurYkylCS6Mq1iwgJPOQXkdPawvnH69HtufaVf7k04EgI7dfNNWxxcdS6Jr14P0BFxp31cQWUd3u1Hr5dFVqI%2FzSsOiogSqSPAWw0x62oJxHmsPTnz7Gtfu1bQwXO4iAYTtdaCCT1Ul2yZ7Ynye8oXrwe7UhFj0bQVTZh%2BQzfl2qeiMFMHDplVSOwXN9hp0qXVlLycGWD5x&X-Amz-Signature=2548f7c9bfb885c2f1958d5c74b31f676640bf99a0bca22e998997e5d3e2ff37&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYMCFKL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE1XGtjqVuOSJlEA%2Fe%2FPvmqgRr71Ny89gdoahzOVDpDQIgKsxzXuuyYuYKVwH0vrVyl8ONupmw7i2oo0r16PZxmNwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyf8dIiNPJZ3CQZ3SrcA4GU9xrRrfpnFViiOz1dqgRhYVc%2BQt2DkZDJrVWwaNkR%2FA9IfBv%2FTqC8jB28SnKs49qiwOHWvlT0pKS8I6BrPOym53iU9qse125vUjIk8zrzMbM4UjQz3%2FCgozd4jt%2BcNwNifRsAGRrEc4%2Bzm4V0JwC5x%2BaXLj98LZiYq2cEpprKnRmVMZddB4etY3lkZZVotq5pf8P6M2bSdheHyXKDN0Wq4k5%2ByUbnvIF8LiPPONZZRUyich%2BICYe2i6lLAVrN3ATfUp139IJRl2VGE4ofDO%2BGwHEnB7bH80PQ%2BjuAH%2BJKjO1gs5CNI1CZZ9rFyPDZoZijjEvqA9kky8GxmEaFoUfS5Wyb6kZvoRVm29Dld4EzQhe3bGqaCBi6KIQbJjbJg4ldxNN3i%2FolRCYZqV4n%2FGy8GTC5Sql9Wd9sFzSkC8GRaObuMR7ehMmFOmC8ElPkeYM36nznQJkN4OWn9cpk0LiJvvy8ZisxvQR0LsGb2T0eoxHbMpquYfvV%2FLPbt07%2B7Gul9%2BjXqzrzdhGDhB1Ym9YnNzvjzWRhLLITkeHW%2FTScCd54ZSi4SeV2AZmoUlz4%2FBA9spmDqv4J%2Bl%2Fpp0QCfmLfw5x3G3pVWceMFphLWd4TtuS1%2BWgGxJvNtZENMNW7gb0GOqUBI17rYw9bxn4tXfF74ZurYkylCS6Mq1iwgJPOQXkdPawvnH69HtufaVf7k04EgI7dfNNWxxcdS6Jr14P0BFxp31cQWUd3u1Hr5dFVqI%2FzSsOiogSqSPAWw0x62oJxHmsPTnz7Gtfu1bQwXO4iAYTtdaCCT1Ul2yZ7Ynye8oXrwe7UhFj0bQVTZh%2BQzfl2qeiMFMHDplVSOwXN9hp0qXVlLycGWD5x&X-Amz-Signature=b30fe34a30ef792eed540fffa573f66e2aff6fe84f1a29490f6aa5ad06b1d355&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
