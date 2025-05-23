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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCF2MJJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUntNd3%2FlPCWp0pJNCC3nWzJ4fizpV4pCfEBr2ENEe8gIhAMGKTtEbaIS%2Fr9lwWOpy%2FLlz2rOJduVF3bEb2H7YFdg5KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRoLdDMw1ZWtcEt0Uq3APjj9QfuibcpW6KZ7IFRXaUE2WupA%2B5K%2FHz7z28wFZITOFD9QhDbflcP8pEnU9%2FbiGHyJWCWadDBUVxuK2u44DjcZeLPQtKsxVOE437QktiCHA8O4WeQZDt1K2vkpyViWS%2F%2BRz%2FAWYN24H7Y9JkXY6qHW9%2B5Sp2M1SWWwSPi0WsagtbPaaickMC9wJlex7io1vFgsF36oss0OrCH1oJC2c8b%2B82DCX%2BgZfKx1Bf%2BxRf6j%2FecUTJlK7y0%2B6gBA%2FDyix%2F93TDfoQQha%2FYJHDyeNWivQpyW%2FqfB8pISNeoY6B9RAwa6DKKpEegN3cKQlPsX1q5kl8wuhOlcZ4nTmUbRa6TkbAmY4ORxIgTo9AhKY5%2BuyKOa9UeM9tero7J7F3SuTQDsoAVCLWbwI%2BRb7yu%2Fs0%2BQe6UrXYeaFqoRUpC%2FCsZr5SPeYmLu%2FbDV8LGYmHq5xfdSCr42mNjzXoyMzJO7B6X5%2BT9F12RNkJ1co49GUle6n%2FvqPh6fSFumn9FIKvP41%2FTgyEL9s3E8%2FIiELbqzIqGlYobC9h%2B1YXe0T%2BwC3QXNmqUdiZmT%2FjT6vmQERYU4rKTcgpY1%2BecWI%2FrCuRAwLRCycqg%2B5fWAJVoHhYOKfzL1JEXQZatcWwQ1nXKPzDlxMHBBjqkASA41jqqrjmmRRM4bQLteg3KbEa7UAxUlKmCqqdNAoE%2F8VNRFMpF8TEc%2FNkQ%2FKgUcnC5OAQ6yjurpJonECYfOlymAhgXL0Ag32%2BAIOgg1p1C7euwQi3QR5Rfm4FiedrRzp7qEOonXoF5xgnQwDYmMGHDloKlAIkHeMeega4EHubT0tr6C1aQ3B6Fo1Z7%2Bq3o0kQ23LHbRENqZM7C6VyFq%2BYO0U41&X-Amz-Signature=364adf7edd067e65a7d38186ca20de4f9f7e96f7669e7e439246faa049c0a4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGCF2MJJ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUntNd3%2FlPCWp0pJNCC3nWzJ4fizpV4pCfEBr2ENEe8gIhAMGKTtEbaIS%2Fr9lwWOpy%2FLlz2rOJduVF3bEb2H7YFdg5KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRoLdDMw1ZWtcEt0Uq3APjj9QfuibcpW6KZ7IFRXaUE2WupA%2B5K%2FHz7z28wFZITOFD9QhDbflcP8pEnU9%2FbiGHyJWCWadDBUVxuK2u44DjcZeLPQtKsxVOE437QktiCHA8O4WeQZDt1K2vkpyViWS%2F%2BRz%2FAWYN24H7Y9JkXY6qHW9%2B5Sp2M1SWWwSPi0WsagtbPaaickMC9wJlex7io1vFgsF36oss0OrCH1oJC2c8b%2B82DCX%2BgZfKx1Bf%2BxRf6j%2FecUTJlK7y0%2B6gBA%2FDyix%2F93TDfoQQha%2FYJHDyeNWivQpyW%2FqfB8pISNeoY6B9RAwa6DKKpEegN3cKQlPsX1q5kl8wuhOlcZ4nTmUbRa6TkbAmY4ORxIgTo9AhKY5%2BuyKOa9UeM9tero7J7F3SuTQDsoAVCLWbwI%2BRb7yu%2Fs0%2BQe6UrXYeaFqoRUpC%2FCsZr5SPeYmLu%2FbDV8LGYmHq5xfdSCr42mNjzXoyMzJO7B6X5%2BT9F12RNkJ1co49GUle6n%2FvqPh6fSFumn9FIKvP41%2FTgyEL9s3E8%2FIiELbqzIqGlYobC9h%2B1YXe0T%2BwC3QXNmqUdiZmT%2FjT6vmQERYU4rKTcgpY1%2BecWI%2FrCuRAwLRCycqg%2B5fWAJVoHhYOKfzL1JEXQZatcWwQ1nXKPzDlxMHBBjqkASA41jqqrjmmRRM4bQLteg3KbEa7UAxUlKmCqqdNAoE%2F8VNRFMpF8TEc%2FNkQ%2FKgUcnC5OAQ6yjurpJonECYfOlymAhgXL0Ag32%2BAIOgg1p1C7euwQi3QR5Rfm4FiedrRzp7qEOonXoF5xgnQwDYmMGHDloKlAIkHeMeega4EHubT0tr6C1aQ3B6Fo1Z7%2Bq3o0kQ23LHbRENqZM7C6VyFq%2BYO0U41&X-Amz-Signature=28a3d43d6355221481eb08f79f5d8339bb46e72c92813c8196e12aa7d091eac0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
