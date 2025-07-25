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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZRFYDS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDuaNjUhsEUUJKwvQw9jgAA%2FDji0W6u6UiZWGS14yjDeAiEAy%2BxFS9roTqcwgrptJuqZJa630u29BlY6scFTwkTXGHoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFa6QsBypOndM1XfCyrcA%2FsheHKjNvlj2Y4ljvZpl9kMGqQgfufScYrPB6yiLOQDvdxOspxMoiCXNsCaqWsLMkVDWOyRf%2FrauQU1cgrfu%2BUsTpMGQATRi5Y8UtSHCWVMBUBpl3LGAfutl2g0iUrwXquxvs3qKPZBmGBGwjeC2go5%2BQ%2BmKjPHroY1qI3W1%2BY6pA0YA2%2Fm%2BSCSwq8CHJqwOjSvwbA9lbabvVOvPnsIJgVp0fESccuqlE17cF8KNU8DHHuQMDiWg%2FHeFq2yGNF75GXMekmn467sffrOV5UdW4PxJVGR06%2FYtOP23RHzMEmUG6gZtQlIkyXTphqbEMYnDdIkI3RU3foiOqevzp%2Ffql3LMmqbAJ8iIZGM1T%2FHVx6qoHne1uJaD6UlJMDiLMY8Z6lC1E78M6L5yWGscdXI8Gi5GpkQULrN52D07eKnrWANT5so80GZtigEfCsJtVi%2FzO0mBWsB8nHlTYXZAnjJ5lTUFc%2BGeU1w8lNJDouWOEHfk8d6dKtd1R%2FbBg%2Fe3xPZRnEarqTejUAfHZm%2BpzsLksPuiGSQbV6WG1cea1XjCdSrodUomL2OoCGamkqbQ8W4SpeqncykLjSKIf8%2BPw77LOjdzrqDiU6myvmyPAvPngxZ%2BCEW40aM44dv3P8LMOaGj8QGOqUBNOmzEIF%2BrmDJio%2FIZtYbPEz0bbAJtPJRH5Mt4ocJdVBrmSKZFi%2FEHjow0G3UEwYHSil9sXn9Qdhjio%2F6ewsDI6h5GbHxSe9yvfRDOfOoYWGpVfnTiDT01YKC%2Ft86U84ahD8ZJYhWdvYRKPcJ5CzaChKgTcxO%2BGS%2BcdlOmPMM2KgTZQ9g9I5mHv0vdqlSke5dcy1yv6DZtke6SbYDNPSMEdA44ZqY&X-Amz-Signature=b983778a618ec897f1a4240fc0ba3cdab3bb3b278cd442f266d1a6dc5139d701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PZRFYDS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDuaNjUhsEUUJKwvQw9jgAA%2FDji0W6u6UiZWGS14yjDeAiEAy%2BxFS9roTqcwgrptJuqZJa630u29BlY6scFTwkTXGHoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDFa6QsBypOndM1XfCyrcA%2FsheHKjNvlj2Y4ljvZpl9kMGqQgfufScYrPB6yiLOQDvdxOspxMoiCXNsCaqWsLMkVDWOyRf%2FrauQU1cgrfu%2BUsTpMGQATRi5Y8UtSHCWVMBUBpl3LGAfutl2g0iUrwXquxvs3qKPZBmGBGwjeC2go5%2BQ%2BmKjPHroY1qI3W1%2BY6pA0YA2%2Fm%2BSCSwq8CHJqwOjSvwbA9lbabvVOvPnsIJgVp0fESccuqlE17cF8KNU8DHHuQMDiWg%2FHeFq2yGNF75GXMekmn467sffrOV5UdW4PxJVGR06%2FYtOP23RHzMEmUG6gZtQlIkyXTphqbEMYnDdIkI3RU3foiOqevzp%2Ffql3LMmqbAJ8iIZGM1T%2FHVx6qoHne1uJaD6UlJMDiLMY8Z6lC1E78M6L5yWGscdXI8Gi5GpkQULrN52D07eKnrWANT5so80GZtigEfCsJtVi%2FzO0mBWsB8nHlTYXZAnjJ5lTUFc%2BGeU1w8lNJDouWOEHfk8d6dKtd1R%2FbBg%2Fe3xPZRnEarqTejUAfHZm%2BpzsLksPuiGSQbV6WG1cea1XjCdSrodUomL2OoCGamkqbQ8W4SpeqncykLjSKIf8%2BPw77LOjdzrqDiU6myvmyPAvPngxZ%2BCEW40aM44dv3P8LMOaGj8QGOqUBNOmzEIF%2BrmDJio%2FIZtYbPEz0bbAJtPJRH5Mt4ocJdVBrmSKZFi%2FEHjow0G3UEwYHSil9sXn9Qdhjio%2F6ewsDI6h5GbHxSe9yvfRDOfOoYWGpVfnTiDT01YKC%2Ft86U84ahD8ZJYhWdvYRKPcJ5CzaChKgTcxO%2BGS%2BcdlOmPMM2KgTZQ9g9I5mHv0vdqlSke5dcy1yv6DZtke6SbYDNPSMEdA44ZqY&X-Amz-Signature=1ec8c4bc18c782107fbdbb05350609bf61f08c05b6e5e18a594b47b82af0eb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
