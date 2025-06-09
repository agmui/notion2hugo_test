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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GAH6ZV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJOWHLI6T2C3VfgVlESAMTg%2FPPM%2FSSKC7cFiLbTFoRjwIhAIb%2FS38qbxhqqULVkVDe3XzEXIRsYyOjVQupSpmQxF5fKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6NcFz3XED%2BQGQCDAq3APc4eHjQaLAvyh%2BY%2B1T1wNt5UH57Ezo4HlnT8v86yM059cTcmXpF8rg0uhrzSzALfX0MG4kBQHgqfTj0Rne0HUngiBIby6YEut97UXvmAiPHwL70anis53%2FW3v%2FlVa8sJ0cU8mJoU8DUiujOTLa0vwezprXP6dSQ4KxZalKYde5XtHS93M1%2F3nxrEVB%2FWaxy99JYQ3T1nyWezHP6Ei8b1U3IPRzUQivkpmj6lZSW0eozH641ZqptbHxvl3Lu3KaPoIaawQ%2FrnmQmRNrFnkEmIgpozhcwtACp6F8PNyEgZIbwOS0bvDa%2FShYqeWts%2BkydUN%2Bux4v4Vv%2Fz0BkS2RYtAN%2FEOZtkPMD3FUTpAaoc8jYg%2BVvys1sVGJyEehX78WTaci1vY8gMeAaDbkfNDZqJZJkTxGntx63tHN66uvz98p1OUimIhgCwTl%2FGtK2gnVoXVbbrZvVOZNHNhMJ0%2BCoprcGXE9rFRA28xLmydo%2FZ7Nha4iMGZdpFzOJU14e7OzgTkj11F70ZzKLR9DCfWHCFpZOIANR4Y4Ss%2Bc6gTCjJTNTraStmZ6OVXGzyugiBI8E0djpCn8ZVPaw8fsokLOe9A6l824MiH8PJ76R6i3cbCNOd7lCuMgan0pBwgJN4DDl%2BJzCBjqkAXbLYTeWzxmIyOy5FrotWYvbdAWrUB6hTmUJaStmW2vRdRoUny%2FV4GTVjpdMIj8VWdyqJVW28B3MiXlhaSoZNYbE8gAbYjIY1rv7gmoKF2o%2Fwcw%2B8Iutd5U12HP9e%2BuG9TI8%2BnTfOPKcI8tMiKZtemVXT7CVqIsawCv2ls9qu4tUMA6L%2BUhwju%2BjdTPizrRJPBiSpUwQaLdlcdC8Sa3AzicZSm%2FX&X-Amz-Signature=d5ef02e90b3bff1d1558055d3ac6ae523b2191aaeb179b1c03ecd7abf2a695f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GAH6ZV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJOWHLI6T2C3VfgVlESAMTg%2FPPM%2FSSKC7cFiLbTFoRjwIhAIb%2FS38qbxhqqULVkVDe3XzEXIRsYyOjVQupSpmQxF5fKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6NcFz3XED%2BQGQCDAq3APc4eHjQaLAvyh%2BY%2B1T1wNt5UH57Ezo4HlnT8v86yM059cTcmXpF8rg0uhrzSzALfX0MG4kBQHgqfTj0Rne0HUngiBIby6YEut97UXvmAiPHwL70anis53%2FW3v%2FlVa8sJ0cU8mJoU8DUiujOTLa0vwezprXP6dSQ4KxZalKYde5XtHS93M1%2F3nxrEVB%2FWaxy99JYQ3T1nyWezHP6Ei8b1U3IPRzUQivkpmj6lZSW0eozH641ZqptbHxvl3Lu3KaPoIaawQ%2FrnmQmRNrFnkEmIgpozhcwtACp6F8PNyEgZIbwOS0bvDa%2FShYqeWts%2BkydUN%2Bux4v4Vv%2Fz0BkS2RYtAN%2FEOZtkPMD3FUTpAaoc8jYg%2BVvys1sVGJyEehX78WTaci1vY8gMeAaDbkfNDZqJZJkTxGntx63tHN66uvz98p1OUimIhgCwTl%2FGtK2gnVoXVbbrZvVOZNHNhMJ0%2BCoprcGXE9rFRA28xLmydo%2FZ7Nha4iMGZdpFzOJU14e7OzgTkj11F70ZzKLR9DCfWHCFpZOIANR4Y4Ss%2Bc6gTCjJTNTraStmZ6OVXGzyugiBI8E0djpCn8ZVPaw8fsokLOe9A6l824MiH8PJ76R6i3cbCNOd7lCuMgan0pBwgJN4DDl%2BJzCBjqkAXbLYTeWzxmIyOy5FrotWYvbdAWrUB6hTmUJaStmW2vRdRoUny%2FV4GTVjpdMIj8VWdyqJVW28B3MiXlhaSoZNYbE8gAbYjIY1rv7gmoKF2o%2Fwcw%2B8Iutd5U12HP9e%2BuG9TI8%2BnTfOPKcI8tMiKZtemVXT7CVqIsawCv2ls9qu4tUMA6L%2BUhwju%2BjdTPizrRJPBiSpUwQaLdlcdC8Sa3AzicZSm%2FX&X-Amz-Signature=a614f1bfe835d1e9fd30597ea444f4481d3414d009b40eb9ff85273d52f22358&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
