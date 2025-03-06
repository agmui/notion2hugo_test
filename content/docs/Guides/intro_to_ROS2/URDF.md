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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YYA6JO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4o0bCcwDXllJORGgJj2vCA%2FsH2pnIyYdPZO%2F3kK0CeAiEA%2B7XlaXZR05sqi7jGGgB9p26bZg677i0vriD4dr0Ia6cq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCsqWwsqBDbRtyO5ECrcA%2FRUtgYhxDUiuPWjdXs2VpSrlctwtaueSOMT825cFDHbWasFTUNK14DGWw8GyChaXCQAlvuUAEB5ZzPZUg569OBxsYYEGqYeaHKQwpihI%2FRA9F4U5bFKL9wID5z6cAR%2FuQK%2FvHiAh2fqPgyb%2F1%2F3tC6WJc%2F34yrnt7o21%2F7mJzmsktU%2FECVEv6kTc07L5WtO0%2BjeAcS6tUnYtoQR%2BKr%2B%2FND%2FcHnaDvNOhFS9wH8jsrUuWVQcrDbO450gqq7wN6gnwUPOYL%2BHPZtEGpp0sFn0KZ2W3VQm9jXCm9yh73ql92uomjLYS6wt6nZ4rJjgT3w2Bbcw9TsxNJm6lNCdgSSeOCEXqrT%2Bm2bm1P9SG5Dht0bMKjFzQLF%2B%2F6G7nCVjWR9ZQIXCGt7dJZegxFukbs3L3h8YeGAVqA7HYxepOmJ%2BMWn4nqHy8cPRoE8aVwBPWqWbSBotegQc9Xc5w1w4zxF28OEk%2F36c1DS1edoni9HgG4Yk%2Bf2jaBXtOq3G%2BPeqgYKxTjEA9PIQx9H4KtwYZlZs%2B0dSr3TbxUomvqX8ijDtAMH%2B96SNOjrQl%2FweUEJ6OM4ELFPnFpLXxOgrdchQw2%2BpAU%2FeiT7yiI97TUD2lRcWvKMrlk7onO%2BaL0n4lQ3BMNbNp74GOqUBnFnM9hfovepBRp33%2BWDc0Cswd2lujFtdhxsBSqrGYgL2f98qme4UUoY%2BbYjfdO02pFDtffUbpd28TEQgaeIetrTfK62VVViN%2FR1pCe0t65ZipOeLr3RsFvllhknlEYWm%2BfuLLd%2Fpedv5ZcMmXqYNr0EVZpZ4K5MnpqLB2bUKFaDw6qs6xcQdvVn4ohkiZ7T8LFiK45WV0wy4HpgQvYX5di%2FZzwXl&X-Amz-Signature=9f757e589a4874e66525aff7c88633403949616f7e59063cbe681a5a139466a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YYA6JO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4o0bCcwDXllJORGgJj2vCA%2FsH2pnIyYdPZO%2F3kK0CeAiEA%2B7XlaXZR05sqi7jGGgB9p26bZg677i0vriD4dr0Ia6cq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCsqWwsqBDbRtyO5ECrcA%2FRUtgYhxDUiuPWjdXs2VpSrlctwtaueSOMT825cFDHbWasFTUNK14DGWw8GyChaXCQAlvuUAEB5ZzPZUg569OBxsYYEGqYeaHKQwpihI%2FRA9F4U5bFKL9wID5z6cAR%2FuQK%2FvHiAh2fqPgyb%2F1%2F3tC6WJc%2F34yrnt7o21%2F7mJzmsktU%2FECVEv6kTc07L5WtO0%2BjeAcS6tUnYtoQR%2BKr%2B%2FND%2FcHnaDvNOhFS9wH8jsrUuWVQcrDbO450gqq7wN6gnwUPOYL%2BHPZtEGpp0sFn0KZ2W3VQm9jXCm9yh73ql92uomjLYS6wt6nZ4rJjgT3w2Bbcw9TsxNJm6lNCdgSSeOCEXqrT%2Bm2bm1P9SG5Dht0bMKjFzQLF%2B%2F6G7nCVjWR9ZQIXCGt7dJZegxFukbs3L3h8YeGAVqA7HYxepOmJ%2BMWn4nqHy8cPRoE8aVwBPWqWbSBotegQc9Xc5w1w4zxF28OEk%2F36c1DS1edoni9HgG4Yk%2Bf2jaBXtOq3G%2BPeqgYKxTjEA9PIQx9H4KtwYZlZs%2B0dSr3TbxUomvqX8ijDtAMH%2B96SNOjrQl%2FweUEJ6OM4ELFPnFpLXxOgrdchQw2%2BpAU%2FeiT7yiI97TUD2lRcWvKMrlk7onO%2BaL0n4lQ3BMNbNp74GOqUBnFnM9hfovepBRp33%2BWDc0Cswd2lujFtdhxsBSqrGYgL2f98qme4UUoY%2BbYjfdO02pFDtffUbpd28TEQgaeIetrTfK62VVViN%2FR1pCe0t65ZipOeLr3RsFvllhknlEYWm%2BfuLLd%2Fpedv5ZcMmXqYNr0EVZpZ4K5MnpqLB2bUKFaDw6qs6xcQdvVn4ohkiZ7T8LFiK45WV0wy4HpgQvYX5di%2FZzwXl&X-Amz-Signature=bd117050d2cc6e7d0ecefc0afeaeec298e64e9a7e201d341ed6fb66178d5a048&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
