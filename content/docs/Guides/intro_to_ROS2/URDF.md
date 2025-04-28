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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKRA4DA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoAyMpTPtflo52A6fOygiR%2B5ZBGRYRFpiUNCvfvpYQkAiEA%2FO4%2ByT%2FO4H0sJoGDaA5Y%2BsxDrkeFXlUVWWK5l%2BNn7tEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKJD15EiKXli0cIbdCrcA%2FTIP%2FrEPVpYRSjVNchpfoAUiJ1XQkso3mGybUswSP%2FTLOrSeBtNVOcOBGYv5RkYYcC5nBnx1NVMHS5sxx2ElsJCdVSaG8L8lVX2Shz%2BzJBXnMrvIHWKojGvjR%2BAm6dy%2FpTdDyKMoV%2F5i9UB3W8Ql8%2FNxGrXmmHK3jOCQijLlC1o1veO9VA4xTaayxTxSfzbLBLK8Dgfm9SYJaPgcUEmmAk3pdL7pWO8MQ%2FouX7GIFYZsmyAt33e3jnLKVUoPCLtWFw%2Bms3iTlFmggXa65emzTV8C%2FOuU%2FX%2FgVBygOcZKUNN9Xdzl9Pe1EiYiSepd5LpQ4xkMASul3knnLWxvHt6Fv8Xatlb3B6P4pngKNS7CWOmvKoAEi5GaMPAf0zkEcAmMB%2FXppTBIqBkhpvqSOtx0ZwoqBX%2BBfAyapNYPuF9WNy1%2FHp00BC69JJbA9XPBjIRhalBqhgvwPeL0oNzXfflhpAlKS4QxtWclyf8fB4%2BMdBZtXJ8nuxoLvV0p9ifhUUPvHUFNUTFutl6RDggQ9kGPj5mKETXNCycJByclPBYCXuvBlbu27oFP%2BMp7mzgJlG7TdY4hBQLbVZWsTMqTyCbsdjYMlKayhSGQdzcme9TkZ5ZnvOuGkr0bCL1acyQMK6bv8AGOqUB5Ut5JKhEKJcygxfN2emHjRPygaoPk%2BlAi3pLBY3dEKtTPKs24Os9J6fpU32YrHbCtsP%2BY7kGzfT0Q30CiTQRuODOQnBQI3CX%2B5qeK7cWGL68%2FScFVzmsVcNjKlhwmnxcJg6ATEr%2Bi8eAkz6qTL%2FKaIhRodEqiVgmrt%2BqfdW4%2FNrICQURxU6D0keV72rlvgmOuIR5S3rx54082G9WcrnFe1MT3nNM&X-Amz-Signature=a338aceb774bbf5435f87c6937ba8c097253f66e02a6722da1a171855d70fb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKRA4DA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoAyMpTPtflo52A6fOygiR%2B5ZBGRYRFpiUNCvfvpYQkAiEA%2FO4%2ByT%2FO4H0sJoGDaA5Y%2BsxDrkeFXlUVWWK5l%2BNn7tEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKJD15EiKXli0cIbdCrcA%2FTIP%2FrEPVpYRSjVNchpfoAUiJ1XQkso3mGybUswSP%2FTLOrSeBtNVOcOBGYv5RkYYcC5nBnx1NVMHS5sxx2ElsJCdVSaG8L8lVX2Shz%2BzJBXnMrvIHWKojGvjR%2BAm6dy%2FpTdDyKMoV%2F5i9UB3W8Ql8%2FNxGrXmmHK3jOCQijLlC1o1veO9VA4xTaayxTxSfzbLBLK8Dgfm9SYJaPgcUEmmAk3pdL7pWO8MQ%2FouX7GIFYZsmyAt33e3jnLKVUoPCLtWFw%2Bms3iTlFmggXa65emzTV8C%2FOuU%2FX%2FgVBygOcZKUNN9Xdzl9Pe1EiYiSepd5LpQ4xkMASul3knnLWxvHt6Fv8Xatlb3B6P4pngKNS7CWOmvKoAEi5GaMPAf0zkEcAmMB%2FXppTBIqBkhpvqSOtx0ZwoqBX%2BBfAyapNYPuF9WNy1%2FHp00BC69JJbA9XPBjIRhalBqhgvwPeL0oNzXfflhpAlKS4QxtWclyf8fB4%2BMdBZtXJ8nuxoLvV0p9ifhUUPvHUFNUTFutl6RDggQ9kGPj5mKETXNCycJByclPBYCXuvBlbu27oFP%2BMp7mzgJlG7TdY4hBQLbVZWsTMqTyCbsdjYMlKayhSGQdzcme9TkZ5ZnvOuGkr0bCL1acyQMK6bv8AGOqUB5Ut5JKhEKJcygxfN2emHjRPygaoPk%2BlAi3pLBY3dEKtTPKs24Os9J6fpU32YrHbCtsP%2BY7kGzfT0Q30CiTQRuODOQnBQI3CX%2B5qeK7cWGL68%2FScFVzmsVcNjKlhwmnxcJg6ATEr%2Bi8eAkz6qTL%2FKaIhRodEqiVgmrt%2BqfdW4%2FNrICQURxU6D0keV72rlvgmOuIR5S3rx54082G9WcrnFe1MT3nNM&X-Amz-Signature=70e0f2996dde9bb99336c44d114609e0c85ceb802867e4fa8ea44081f4a10c27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
