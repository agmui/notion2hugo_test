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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCJ7YH6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG76uvN%2Fp0ygc0zHV%2FgNdw8udqWI9oXp3sM%2FDHgB4ls9AiBpQP9reCUybLDHZ1JxWMv5F6dpPpjrP5%2B%2B2%2BJMzNYT8iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP3owieKCow3KonIKKtwDLN2q3fuiJyYth9lDGwq3cuhfM34KoYQPRLfHT72ZlvwPeuTrhb9CBl35cdl7vK2a%2BR%2BJ23dJ%2FUPVeszW%2B9B%2FRISdtkTW%2FFYwBS0GuraflE6XhxIWD8Y7VtgYW6mCGqJPEQA7zAmL7TI%2FZvymYmEnQaO3sgn1XiXelM%2B4spd0LX%2F68cKkvzbGGwVRq2SVyFAei%2Fxo%2FGmuDUC4jxE%2FqnvXTCH2GtvUiKgAhvLXBWiolAciQcOM7XJ7xa6HR1KFDoRXa7ziUPlFRgOdwr3V%2FIdu1bDy30NM4jlIuVPbNEA1H6h3mSgrImC5zWoWTG2YBl%2FqqOpnEmicKbh60keIBkt3LPrKfd0YrJyxVGXqVaVdFhWEqaZC%2BPKRvpDirah3LaHRBnkBRUOSXn8WbRLhgLpaPy%2FTUzoil4UiXgwSlJus8NDuAOTMNQxpO1ZKt%2BnRxeU8%2Br6lBpgJu1eVDaFMzc4%2FIb0S6KST1gTbcH0dhSoa8%2F1S7lOvQaEECn%2FVACE6ahiRaYUW7gIfoyEviwxue7h50C%2FGq2ZYRnDjL1LvlkqDO1aCGcJG6qQXzItm4mC2A7bI0ilCr2fFEcEBS49%2BLin%2F2stQvf5ImMrPdSgD8bvIBnyrcCq0pKbPbXH%2B5AQw8tXJwgY6pgFtyZNvaYYRVWn9p%2BbInfHIorrnbB03eJ%2Bw%2Fl8gH3Ntlvw0H%2Bmvi9YAeWwSPoGqXtgYxoSs%2BxesLJmwpB%2Bg8x%2ByIH%2BUUE7H0ssqavs6fNgtIYrYED2JZjNuPUn3qpL9x45s0%2B7r3XnwtFrwW5Ui7hytiRsuGYDFUqqZdVUA%2BHOp4w07c1GF7earrFww7sEDJki%2Fi70tIZnE6PWP7opQIGgEWSlJR1p%2B&X-Amz-Signature=241c46976c443c97aa64a1347fbfde19ef2e275cb856b2cda7b36125a62a0833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCJ7YH6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG76uvN%2Fp0ygc0zHV%2FgNdw8udqWI9oXp3sM%2FDHgB4ls9AiBpQP9reCUybLDHZ1JxWMv5F6dpPpjrP5%2B%2B2%2BJMzNYT8iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP3owieKCow3KonIKKtwDLN2q3fuiJyYth9lDGwq3cuhfM34KoYQPRLfHT72ZlvwPeuTrhb9CBl35cdl7vK2a%2BR%2BJ23dJ%2FUPVeszW%2B9B%2FRISdtkTW%2FFYwBS0GuraflE6XhxIWD8Y7VtgYW6mCGqJPEQA7zAmL7TI%2FZvymYmEnQaO3sgn1XiXelM%2B4spd0LX%2F68cKkvzbGGwVRq2SVyFAei%2Fxo%2FGmuDUC4jxE%2FqnvXTCH2GtvUiKgAhvLXBWiolAciQcOM7XJ7xa6HR1KFDoRXa7ziUPlFRgOdwr3V%2FIdu1bDy30NM4jlIuVPbNEA1H6h3mSgrImC5zWoWTG2YBl%2FqqOpnEmicKbh60keIBkt3LPrKfd0YrJyxVGXqVaVdFhWEqaZC%2BPKRvpDirah3LaHRBnkBRUOSXn8WbRLhgLpaPy%2FTUzoil4UiXgwSlJus8NDuAOTMNQxpO1ZKt%2BnRxeU8%2Br6lBpgJu1eVDaFMzc4%2FIb0S6KST1gTbcH0dhSoa8%2F1S7lOvQaEECn%2FVACE6ahiRaYUW7gIfoyEviwxue7h50C%2FGq2ZYRnDjL1LvlkqDO1aCGcJG6qQXzItm4mC2A7bI0ilCr2fFEcEBS49%2BLin%2F2stQvf5ImMrPdSgD8bvIBnyrcCq0pKbPbXH%2B5AQw8tXJwgY6pgFtyZNvaYYRVWn9p%2BbInfHIorrnbB03eJ%2Bw%2Fl8gH3Ntlvw0H%2Bmvi9YAeWwSPoGqXtgYxoSs%2BxesLJmwpB%2Bg8x%2ByIH%2BUUE7H0ssqavs6fNgtIYrYED2JZjNuPUn3qpL9x45s0%2B7r3XnwtFrwW5Ui7hytiRsuGYDFUqqZdVUA%2BHOp4w07c1GF7earrFww7sEDJki%2Fi70tIZnE6PWP7opQIGgEWSlJR1p%2B&X-Amz-Signature=e0e6fdf040fdd521424f4c7658a5118939fba0e3e83beecf5f1f64ce6e819f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
