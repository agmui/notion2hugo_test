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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HN4TAI3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGhOJXWYOf3UMnFHC%2BB%2FusrUNY%2BehMezWuJjvIWEpIuAiB6Yy%2FTeXWB6ZIZqgQe4jxLb6GIKGMqpq%2Bk%2B2HC2k1RASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAkNBfptbuLEJdOJkKtwD%2BGxjSXUMaJBDjuYetzIZUeUn59meDHM%2BLsiPChF0JcoUM4xLe6UYlzTrw8kHZ34Zj5muNPfnftEJL1t48Y0M0WiCGnvr244LdmPZvd%2FHKRMD1PwhqwdQdlTbxVvVokjitgwGH9g6I6TlpxurHEZmI%2FpmXt%2F6AL9NQRaes%2FNADSKN10wjcZwjBHEOJ3SPOg6t1XuwbVtQV4jZSpr%2BjXBRXWNfsa4h%2B1y5zFIU9HSJEc1Exd1kCYeG7zWfU0XVVdaM9s6XfWT097q%2BBlu0va%2BMDOiHMBVeDmyatYWo1zqk9XAv%2FBwA46U4WN0XGnX9vUCzpW0INplYkUcHhQi9p6TMHrxBJwJtb3hsS4IPLY6SI0BsIfjiqCTGB34aen%2BOVgjW6K93dqde7t5y7X3ODwZLSEE9fiS%2FVrlH4w6X3RhDfK%2BDmDHxWREe3qOuYPsyMBZLmfmNNch2ZP5lyk%2B8nCmUDn%2BVtCV5CIFtSrIVoue3FnlQ9iktdCvOXhPdPrGBJXrnchaHollIFrfNNbezbsA9FxaXkpXVlq8uEPQBCFT1EyGnU1kCDSEmpc%2FXk5L6XEpqFNpyzkn7K9GAGe9mnfVn0Xku8VaHOjBV%2FoQj%2B3VuY8HPn%2FBkfzddRohQY6ww4fqFwwY6pgHUGmyHNB2qF98fRSNcOVQK%2Bg8uoewrbIHwDSBhXlyY7Asxejy9ZkZVKkiXklHi%2FZ4CXkvR6AExowMloYrl2rGawmR2dZlumSphCvWl1O42QMWLkvfG6YUWueh0cUk4w9G0PbkUhJcrA7ppdY1WyMcdZT%2FlTcUM27ycjrZZ%2BXdDKinP8KettbsHTJvURix5NEsjAZGasRSLm3Kxhh0F8pc%2Fxo%2Fzplhi&X-Amz-Signature=1e53c8b6656e19cedf86c5f5bc9caebdbc12fdbcddb6bcb240130eca0ea654ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HN4TAI3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGhOJXWYOf3UMnFHC%2BB%2FusrUNY%2BehMezWuJjvIWEpIuAiB6Yy%2FTeXWB6ZIZqgQe4jxLb6GIKGMqpq%2Bk%2B2HC2k1RASqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAkNBfptbuLEJdOJkKtwD%2BGxjSXUMaJBDjuYetzIZUeUn59meDHM%2BLsiPChF0JcoUM4xLe6UYlzTrw8kHZ34Zj5muNPfnftEJL1t48Y0M0WiCGnvr244LdmPZvd%2FHKRMD1PwhqwdQdlTbxVvVokjitgwGH9g6I6TlpxurHEZmI%2FpmXt%2F6AL9NQRaes%2FNADSKN10wjcZwjBHEOJ3SPOg6t1XuwbVtQV4jZSpr%2BjXBRXWNfsa4h%2B1y5zFIU9HSJEc1Exd1kCYeG7zWfU0XVVdaM9s6XfWT097q%2BBlu0va%2BMDOiHMBVeDmyatYWo1zqk9XAv%2FBwA46U4WN0XGnX9vUCzpW0INplYkUcHhQi9p6TMHrxBJwJtb3hsS4IPLY6SI0BsIfjiqCTGB34aen%2BOVgjW6K93dqde7t5y7X3ODwZLSEE9fiS%2FVrlH4w6X3RhDfK%2BDmDHxWREe3qOuYPsyMBZLmfmNNch2ZP5lyk%2B8nCmUDn%2BVtCV5CIFtSrIVoue3FnlQ9iktdCvOXhPdPrGBJXrnchaHollIFrfNNbezbsA9FxaXkpXVlq8uEPQBCFT1EyGnU1kCDSEmpc%2FXk5L6XEpqFNpyzkn7K9GAGe9mnfVn0Xku8VaHOjBV%2FoQj%2B3VuY8HPn%2FBkfzddRohQY6ww4fqFwwY6pgHUGmyHNB2qF98fRSNcOVQK%2Bg8uoewrbIHwDSBhXlyY7Asxejy9ZkZVKkiXklHi%2FZ4CXkvR6AExowMloYrl2rGawmR2dZlumSphCvWl1O42QMWLkvfG6YUWueh0cUk4w9G0PbkUhJcrA7ppdY1WyMcdZT%2FlTcUM27ycjrZZ%2BXdDKinP8KettbsHTJvURix5NEsjAZGasRSLm3Kxhh0F8pc%2Fxo%2Fzplhi&X-Amz-Signature=0c0e716a0e1748b6d5349d88076ab9e9c1bfda3a25e003b4145e797dd2675550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
