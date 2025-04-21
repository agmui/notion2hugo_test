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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXMMCYQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC8lK8nWX6yW251c%2FUDzoxw%2BNtWK%2FUXGsCXUrdy7XeVwgIhANVPlwhlp1Ig%2BhQwnHCBqC9OQL%2FRA%2BiSCQtKZiIakIVwKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaXOLHZy8Amt2CaTsq3AMY2YDiiEX%2BaDzHdFG1rucPMf58f%2BAYEtnWArgTpeAkWDpr1GJSXPDt5GJOx6hH39lcNbgR66TMLHF9uyJ%2F4iACgoGXFo1EzTAKj2c%2BcQWiy9EIHwT6jOb3lTXD7Bifu7mrXgjg57hsAju%2FtEnlha7YJiK6UHEsN1fg4bnCFM1ICarCbCnIbqbFd2mgW2meDiAhiBGkyObChY694Nd%2B%2BBnDflv4cWjmpuIT23yho96ls4zjF2we6st1hmYCHJu9SSZ3JmaJqO2yXjIbEVHjUtxcpzf8MsB64w%2Fa2dvpa2FQ6xdk5KoNVGk9hZCER4Fr6Z4yHFBX%2B0S7OvXOnuwNTSnDHfBLTS0r1D94%2Bxhqa%2Fplfh2S%2FRUKkcziboa4SfPUjJelyOZ5TO5Gi5H6DlhO3AhGKuUV8w5qZzNwNcwOam9LfEZflSiTLL%2B9xlU2M%2FGFVqQAPm%2B5CUG2y23RNcKXxBP9lfoFjt8XCCRoSsyAWtOXwvICMjqMdjrdNNpY76NvUqfFv3%2FpuDB79iDUzIlGReMx5kNhvFBE6yUFIKYcRNjZt0XMZN1b%2FyhBHDMQrhIuiKBBx02etELxxSAmsGgtQWxxQ7wDSRApow01Yq9b0qG6uCwqeHX%2F2Eg1kJvG9jDrhpnABjqkAY8JbFVDe1ra9vOW3rLRmCTRlAkTBnFxUiBD6MbpUsAy41dSYszBjCYKfmyP6UirWsJcnu86rrkm6ERuWoERGSOXuBtRhBDEhZon0Sy3b%2BgvhO9g6D67DMWaV6kAFh3vGID5Si9NhjAiVyLHBtmTKSkCExz70I7nniFDfMTTKv7%2F3Sg5vM0tGYS3wWVi5X833Ee29HcRqo4NbIrFNf2vvYFL28NZ&X-Amz-Signature=ce9c617c99809682f598069492065820b558ee02ae2b9d0d18ceed41577be1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXMMCYQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC8lK8nWX6yW251c%2FUDzoxw%2BNtWK%2FUXGsCXUrdy7XeVwgIhANVPlwhlp1Ig%2BhQwnHCBqC9OQL%2FRA%2BiSCQtKZiIakIVwKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaXOLHZy8Amt2CaTsq3AMY2YDiiEX%2BaDzHdFG1rucPMf58f%2BAYEtnWArgTpeAkWDpr1GJSXPDt5GJOx6hH39lcNbgR66TMLHF9uyJ%2F4iACgoGXFo1EzTAKj2c%2BcQWiy9EIHwT6jOb3lTXD7Bifu7mrXgjg57hsAju%2FtEnlha7YJiK6UHEsN1fg4bnCFM1ICarCbCnIbqbFd2mgW2meDiAhiBGkyObChY694Nd%2B%2BBnDflv4cWjmpuIT23yho96ls4zjF2we6st1hmYCHJu9SSZ3JmaJqO2yXjIbEVHjUtxcpzf8MsB64w%2Fa2dvpa2FQ6xdk5KoNVGk9hZCER4Fr6Z4yHFBX%2B0S7OvXOnuwNTSnDHfBLTS0r1D94%2Bxhqa%2Fplfh2S%2FRUKkcziboa4SfPUjJelyOZ5TO5Gi5H6DlhO3AhGKuUV8w5qZzNwNcwOam9LfEZflSiTLL%2B9xlU2M%2FGFVqQAPm%2B5CUG2y23RNcKXxBP9lfoFjt8XCCRoSsyAWtOXwvICMjqMdjrdNNpY76NvUqfFv3%2FpuDB79iDUzIlGReMx5kNhvFBE6yUFIKYcRNjZt0XMZN1b%2FyhBHDMQrhIuiKBBx02etELxxSAmsGgtQWxxQ7wDSRApow01Yq9b0qG6uCwqeHX%2F2Eg1kJvG9jDrhpnABjqkAY8JbFVDe1ra9vOW3rLRmCTRlAkTBnFxUiBD6MbpUsAy41dSYszBjCYKfmyP6UirWsJcnu86rrkm6ERuWoERGSOXuBtRhBDEhZon0Sy3b%2BgvhO9g6D67DMWaV6kAFh3vGID5Si9NhjAiVyLHBtmTKSkCExz70I7nniFDfMTTKv7%2F3Sg5vM0tGYS3wWVi5X833Ee29HcRqo4NbIrFNf2vvYFL28NZ&X-Amz-Signature=fda44d589eadab891447c7a3959678006e016d0f26c49128f3217c5315aa797d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
