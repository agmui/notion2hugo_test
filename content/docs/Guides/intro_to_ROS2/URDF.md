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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2SGQ7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIENu6DJY4mszPtdnsLel%2BuSZE1XQj2WgpfBRQkBFtLuXAiEA8yCImJgwNGPscVb7l0S5%2BcNmA7okd8g4lVYd40lm2vYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsslao5IzlL3EOMVSrcAyuXQiX%2BbYPGn2okRoSH0uua6%2FeThiQuGselZvXud2Q8sWZYFFOyRgVY%2Bx1Br71cM2JxpQ2rQdk2pTagupANR8kXE4RLLNypJpHpNke1c3Dm0HDGrnbxF4BRNcAYWpQXW4ZO0NEqFkn4d3IrXUqfxLMfvui5mIBZkxTC%2FpiDuJjbufA5D2F73HoCHdZJXnpdADAJ9cIc7fe00iIk6iJgjQu0WhOHT4TnpSGiO0G1Wt0KcMYDy0iplX8NGVjEuaQsBVynMcWdhZ6kz2JP5gw%2FCshUePm2G6FKJ5CQ6tmSpnAXsx8nM%2BE%2BWng06hcGwE4%2Bb4fWYtrYoNgNx53LBTvTW%2B%2F26q1oNqkrLnwLEN18cP2GcsKKJ4svkdSWzZI9Ml0rWSksNB1bsvr2QTKSfM37Hlkm0dpiomYtFefEOg3ngdJPKx97OlzewFtbaJimJs630KKHpamfxTFJb5ObM4FpUTKW%2BrK3aYnZ9q5w3vzM0GPFa%2FaX%2B5R9f75Ilg5NCy2%2FcacXFvLfcYc%2But7osnhpTHRlp22nHelmmgMidVXKrjefI7pqosef54uULloD3z2cOghzUKb6dTCL1r52oX32xXi86E2rEUR88sCO9wkE2E%2BF4w21KmBVaAL1MPTiMLafmsAGOqUBZnE7gDDEqNMn3VtPF%2F5cK%2B2vVOQ4pnkB1qh5XzthtdIuwGA2kPEIbub7lwobcsQ8noRtB9%2B6F8a4ppzejFE7VFvO76tKQU2Ml4%2FpJFzK8KHGciUuIwtSqzpMP7jqlTY1iAduyyLuLQye5ZJokJKkstun00BsilDxVyVAiK3sXnlbPEWrton1tdOm%2BnF7KMZoUACUKhJWlFE8g6KeL3kpKRTxFL%2BJ&X-Amz-Signature=e9cd76683d7f640c55caf8ce1b11d12949257db7379ae56b6fd55a7805264102&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2SGQ7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIENu6DJY4mszPtdnsLel%2BuSZE1XQj2WgpfBRQkBFtLuXAiEA8yCImJgwNGPscVb7l0S5%2BcNmA7okd8g4lVYd40lm2vYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsslao5IzlL3EOMVSrcAyuXQiX%2BbYPGn2okRoSH0uua6%2FeThiQuGselZvXud2Q8sWZYFFOyRgVY%2Bx1Br71cM2JxpQ2rQdk2pTagupANR8kXE4RLLNypJpHpNke1c3Dm0HDGrnbxF4BRNcAYWpQXW4ZO0NEqFkn4d3IrXUqfxLMfvui5mIBZkxTC%2FpiDuJjbufA5D2F73HoCHdZJXnpdADAJ9cIc7fe00iIk6iJgjQu0WhOHT4TnpSGiO0G1Wt0KcMYDy0iplX8NGVjEuaQsBVynMcWdhZ6kz2JP5gw%2FCshUePm2G6FKJ5CQ6tmSpnAXsx8nM%2BE%2BWng06hcGwE4%2Bb4fWYtrYoNgNx53LBTvTW%2B%2F26q1oNqkrLnwLEN18cP2GcsKKJ4svkdSWzZI9Ml0rWSksNB1bsvr2QTKSfM37Hlkm0dpiomYtFefEOg3ngdJPKx97OlzewFtbaJimJs630KKHpamfxTFJb5ObM4FpUTKW%2BrK3aYnZ9q5w3vzM0GPFa%2FaX%2B5R9f75Ilg5NCy2%2FcacXFvLfcYc%2But7osnhpTHRlp22nHelmmgMidVXKrjefI7pqosef54uULloD3z2cOghzUKb6dTCL1r52oX32xXi86E2rEUR88sCO9wkE2E%2BF4w21KmBVaAL1MPTiMLafmsAGOqUBZnE7gDDEqNMn3VtPF%2F5cK%2B2vVOQ4pnkB1qh5XzthtdIuwGA2kPEIbub7lwobcsQ8noRtB9%2B6F8a4ppzejFE7VFvO76tKQU2Ml4%2FpJFzK8KHGciUuIwtSqzpMP7jqlTY1iAduyyLuLQye5ZJokJKkstun00BsilDxVyVAiK3sXnlbPEWrton1tdOm%2BnF7KMZoUACUKhJWlFE8g6KeL3kpKRTxFL%2BJ&X-Amz-Signature=5e8ef28f023c0205376e1290a98702ecdcee089a05f4b66ddaa1bd5d62359639&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
