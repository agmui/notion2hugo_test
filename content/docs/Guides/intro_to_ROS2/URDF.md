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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAFZA27%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYQ3ZmIGXflvMV9tYLtFJfqj6W0u1sRT2PDP10q%2BHzwAiEA%2FMbt2jJZUVTT7KIXf2t274JkNU%2Fp9VgK8%2FNJXnrX0JsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAGXaFbnMN334QsZircA5wCRiPzKh6DGmier3%2FX9i1S42fAXdZSZOgJiNzNdGWaKMQyri3kQJemt%2B5A50Bj1vuK%2F8KRhkb0noME2TeD03iwXrJTAMBu%2B5Wp1g0QviK7O39pMvosr12GiyQX6iSqv7c%2BNxG7mpDI6vv6%2BYw%2BKL2gQ1Jejot5aHb9YOniDEQMrtX577neWY4KnjXJwbCiK%2BbZSIe%2BfRKfT0NjdrqrOQF8SRscL2JzuT2G7EDPjP3TraQWt7cQMPcF2ivqF4dOEEuHEzEN8tDgX7hPWMp9NLeb56DlZj4zKFCdkAA9v49c%2F4FZHiOazxsTkvCq9q21kNkZTB5tu217FH18zCi1vQJCnNMkWsDyY6P18JurqqwKgAXoYoXdDuhCRnhqsZEdLyDGpjk1s5BdTYiqpu2eGqbbDejVkgMgtkLe0RIBg7jl%2Fo85%2BBotW2DbvAXS6%2FM0Uikap1WJc4wVhOaPw%2Bk7qR03c5QVpWMTwAwhfqK8BhzRFXZgpsaN3CC95lUinTq%2FHfDPKzec%2B1anpSaygiVSLteT6GCsWkyXSl3eqQ25BbouGSaclzH%2BbN4S6lJCzR070kEI9EgQqBpvNSpRHUgtQuWZQELdoYogDGIwDTgEpejCGP6%2F0J3aghMcKueDMLfRu78GOqUBZzEXCpDD10Ki%2BzcTIUssYSb4kZaAP8kuffeJJ3cs819sVcUX3lOHh1DvnRSj4ogAVjmFHAwneWRkeQQYcwILIdbmEv9NOuDbZEPsY0WbbmDmNblXr%2B97lzK778HyKVNMHUXivyGS6VPT0AkZV1jMrb5wqC1Nfr9zq29Ksg98EPgYg%2BjQPbkqTu5Lts493RPEavgHq%2FyZgCSKQq%2F42kh28gAuZjyO&X-Amz-Signature=23bd0ced91b4739cb13407e6cb53415ee9168fd0ea61e359ff04d5db82e7d10a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAFZA27%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYQ3ZmIGXflvMV9tYLtFJfqj6W0u1sRT2PDP10q%2BHzwAiEA%2FMbt2jJZUVTT7KIXf2t274JkNU%2Fp9VgK8%2FNJXnrX0JsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAGXaFbnMN334QsZircA5wCRiPzKh6DGmier3%2FX9i1S42fAXdZSZOgJiNzNdGWaKMQyri3kQJemt%2B5A50Bj1vuK%2F8KRhkb0noME2TeD03iwXrJTAMBu%2B5Wp1g0QviK7O39pMvosr12GiyQX6iSqv7c%2BNxG7mpDI6vv6%2BYw%2BKL2gQ1Jejot5aHb9YOniDEQMrtX577neWY4KnjXJwbCiK%2BbZSIe%2BfRKfT0NjdrqrOQF8SRscL2JzuT2G7EDPjP3TraQWt7cQMPcF2ivqF4dOEEuHEzEN8tDgX7hPWMp9NLeb56DlZj4zKFCdkAA9v49c%2F4FZHiOazxsTkvCq9q21kNkZTB5tu217FH18zCi1vQJCnNMkWsDyY6P18JurqqwKgAXoYoXdDuhCRnhqsZEdLyDGpjk1s5BdTYiqpu2eGqbbDejVkgMgtkLe0RIBg7jl%2Fo85%2BBotW2DbvAXS6%2FM0Uikap1WJc4wVhOaPw%2Bk7qR03c5QVpWMTwAwhfqK8BhzRFXZgpsaN3CC95lUinTq%2FHfDPKzec%2B1anpSaygiVSLteT6GCsWkyXSl3eqQ25BbouGSaclzH%2BbN4S6lJCzR070kEI9EgQqBpvNSpRHUgtQuWZQELdoYogDGIwDTgEpejCGP6%2F0J3aghMcKueDMLfRu78GOqUBZzEXCpDD10Ki%2BzcTIUssYSb4kZaAP8kuffeJJ3cs819sVcUX3lOHh1DvnRSj4ogAVjmFHAwneWRkeQQYcwILIdbmEv9NOuDbZEPsY0WbbmDmNblXr%2B97lzK778HyKVNMHUXivyGS6VPT0AkZV1jMrb5wqC1Nfr9zq29Ksg98EPgYg%2BjQPbkqTu5Lts493RPEavgHq%2FyZgCSKQq%2F42kh28gAuZjyO&X-Amz-Signature=3b1a1f882b29d0c23bb045bb2d602366cb4b3f6df53f4230a9f4214c2318ed13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
