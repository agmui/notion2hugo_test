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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPVYDT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA7JQk2oLI4EKGL3gqrGKa5G4LhpMlHrJG3q6Dl0SauKAiA%2FExAyPPxTdvkItxvvQtrOftFQgTSPZfbBJmVEVeM5ryqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BioTF0RYxClpo%2BSKtwDSpEihx%2BRpVvGCEj39z4hF67PMIXybDyTD3Wer4FaDTnRy%2FiF2V8q3w9h76A14uNW%2F7qAvMgICdKgfSnJ2TYliO17ezuw93hy7KwUJ%2FuaFC%2BMwJN%2FW8Ah4wLLl00WiNcLDPajIxFXVDuJNuqRNgTlXckoWBaklID%2B%2FTeKtM2HPLiD%2FWumdS1I%2BkWxxZRhISrmP7jJpZFOdz8Uk9LYZHFwbTB515H0DDjiuVJbJsDwXfyojkjmlykKM%2FShju%2FxTBxv68LZfTap8wbkw2%2BgW3S4LxrKIlu%2F%2BNjBGwzBopO%2BrAy3I5P01FMh31v%2FMkNiBmNuWPUZhaaM4mwzPhEfpPvBAbXemodEMpVAjWIlulh%2F94P0YZ%2BEyG1OV%2Bj2G2eGSThOWATjHpqVRiu0Kbx5z6%2Bd4XuIlvcWRJq4byTbtShzPAumNkNY5vYR49sXVaGeZHmzMmjfG%2F8XteO8NopzCZJuJAVjAyO47N8lawJBbAYbFU7MWfibMPwtkCcpphkEH4RPRQu08raN5BDe4X1TLWSvN1oVPGSKWDSiKDNjEywKcRfr36Xw335qDa492JHOpvW0%2FfzI9lQ9sHB7W5x1O5ZJiWtBN554GenBaEjWTJtElmrHwV8ouvjULvSI%2FrowopSpwgY6pgFps1NkGGyO3LWwdhttjf0oZJDbXgrtWRx2PbE995NXuWqmjBxdG%2BdDALjXO1Z8CltMdhWPpcb8Wxa2rNpw6EtYZUpuXu8mJyeQoynEqBO2xw%2Fif6csJA9yQBmtdEHtg%2BY9znJhIukDQGdHvT5PXlinbVBVI2QsNCAOOJk9285uFmtbaLhSXTV3khnFpxR18ar4UOQwfeZ0dZSYypsm1DroM57EDtKI&X-Amz-Signature=a0a03cec1bcd05803b9371c59ffdb80d59e4a38f7fc40b73fd961bd764311fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPVYDT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIA7JQk2oLI4EKGL3gqrGKa5G4LhpMlHrJG3q6Dl0SauKAiA%2FExAyPPxTdvkItxvvQtrOftFQgTSPZfbBJmVEVeM5ryqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BioTF0RYxClpo%2BSKtwDSpEihx%2BRpVvGCEj39z4hF67PMIXybDyTD3Wer4FaDTnRy%2FiF2V8q3w9h76A14uNW%2F7qAvMgICdKgfSnJ2TYliO17ezuw93hy7KwUJ%2FuaFC%2BMwJN%2FW8Ah4wLLl00WiNcLDPajIxFXVDuJNuqRNgTlXckoWBaklID%2B%2FTeKtM2HPLiD%2FWumdS1I%2BkWxxZRhISrmP7jJpZFOdz8Uk9LYZHFwbTB515H0DDjiuVJbJsDwXfyojkjmlykKM%2FShju%2FxTBxv68LZfTap8wbkw2%2BgW3S4LxrKIlu%2F%2BNjBGwzBopO%2BrAy3I5P01FMh31v%2FMkNiBmNuWPUZhaaM4mwzPhEfpPvBAbXemodEMpVAjWIlulh%2F94P0YZ%2BEyG1OV%2Bj2G2eGSThOWATjHpqVRiu0Kbx5z6%2Bd4XuIlvcWRJq4byTbtShzPAumNkNY5vYR49sXVaGeZHmzMmjfG%2F8XteO8NopzCZJuJAVjAyO47N8lawJBbAYbFU7MWfibMPwtkCcpphkEH4RPRQu08raN5BDe4X1TLWSvN1oVPGSKWDSiKDNjEywKcRfr36Xw335qDa492JHOpvW0%2FfzI9lQ9sHB7W5x1O5ZJiWtBN554GenBaEjWTJtElmrHwV8ouvjULvSI%2FrowopSpwgY6pgFps1NkGGyO3LWwdhttjf0oZJDbXgrtWRx2PbE995NXuWqmjBxdG%2BdDALjXO1Z8CltMdhWPpcb8Wxa2rNpw6EtYZUpuXu8mJyeQoynEqBO2xw%2Fif6csJA9yQBmtdEHtg%2BY9znJhIukDQGdHvT5PXlinbVBVI2QsNCAOOJk9285uFmtbaLhSXTV3khnFpxR18ar4UOQwfeZ0dZSYypsm1DroM57EDtKI&X-Amz-Signature=c657c96c7f004fa3eeb161d3b455ab7c35ae938641fdc3adafba1554f53b5acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
