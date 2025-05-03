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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRQ5H37%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDTKmkXCirm1NE7%2Fq3l2%2FApwWVGTzGSi7qV8y4yXV%2FTrAiEAppL7yS8m5Yk1QJ9k%2BFb36Inwwjuq6tbVMP3ROK1HBDIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPwd%2BwFx%2FuP%2BrPM%2FSrcAxOaSCXoCnEZEE6gIesZfHHTy1EfKHetplssM%2FBb6mW%2B27r4H8ZDF%2BY2GyBHcBL6zksO5GP0L1H86OoqMbTdDcFOvPUQzpFCAgzaQpXj1uBHQe0O7qpinacD2cTwg3nUfNMQdYyBSCFOsM89aj07NKEpZp6XVuRwDr%2FYVg9jMVPpO%2Bs1mjzDoQgKwyUUOT9%2F8x1MKzuRDnyvktkfeBG2GXy%2FoQYylhRxLVfBmkuLybBZFnjfkztZ88QW5xLLDfyoqijwjY7K69cmD3F8WiRExMIBq%2FXnjuC4xNw%2FzNb%2BIoXPGwxIJ0bZ8gRFqbK7ymLRwd48%2Fqsl2ycs%2FO2p3Ou%2B1ZF8rZtDGaca4QfvjQAHfk7unRRa%2Fzs4p2KDcw3VqsMD5s%2FfR2TfyfE1tJDe5XzMHKIqcyayT9UhIPPrXL3cjtntFaQ2halQ3Y7YGH8%2F7H%2Bgcl2WGEkTi1hZ8ReOIzA9TgR7Go88cVbYk8nMSbc1M5FagiWu%2FSTts3uxJQQ%2BNbEF%2BAnHzKBfOsG%2FrKPry1uFtVKHhskhj1nKP70a%2FD5jfiWttCsiciFV9kpyBTmGmXOhCItHiiKpMYSjM89jXbu0%2BRj3dIjs9RVH33icwt8FYeOSMvPOzgIBZFprlqyEMOCa2sAGOqUBj4qwgV2VXjRJATMs7i0z2G%2BXK7k5aAauuuKN1xzLJgVyKpZnbBG07G9p4UKYGIWOikH2rB%2FBQDWuvdc4I%2FP8KTd%2BVSeLkrev7TEbV4FR%2BVCYW%2BLLCo%2F73aIfyhVPVxTWN1GU54hchjPfz8nfnFlVgoTBd%2FBbtn3B4c7G3CW8wKtTBOyoxsXk1X16LBz0znULn5D1H71730wU8BsnE8ADSIrdrF%2Bs&X-Amz-Signature=8e5a14769404eca40e6ddacb435892aad03b1510d0a9a86a4276206eba4222ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYRQ5H37%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDTKmkXCirm1NE7%2Fq3l2%2FApwWVGTzGSi7qV8y4yXV%2FTrAiEAppL7yS8m5Yk1QJ9k%2BFb36Inwwjuq6tbVMP3ROK1HBDIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPwd%2BwFx%2FuP%2BrPM%2FSrcAxOaSCXoCnEZEE6gIesZfHHTy1EfKHetplssM%2FBb6mW%2B27r4H8ZDF%2BY2GyBHcBL6zksO5GP0L1H86OoqMbTdDcFOvPUQzpFCAgzaQpXj1uBHQe0O7qpinacD2cTwg3nUfNMQdYyBSCFOsM89aj07NKEpZp6XVuRwDr%2FYVg9jMVPpO%2Bs1mjzDoQgKwyUUOT9%2F8x1MKzuRDnyvktkfeBG2GXy%2FoQYylhRxLVfBmkuLybBZFnjfkztZ88QW5xLLDfyoqijwjY7K69cmD3F8WiRExMIBq%2FXnjuC4xNw%2FzNb%2BIoXPGwxIJ0bZ8gRFqbK7ymLRwd48%2Fqsl2ycs%2FO2p3Ou%2B1ZF8rZtDGaca4QfvjQAHfk7unRRa%2Fzs4p2KDcw3VqsMD5s%2FfR2TfyfE1tJDe5XzMHKIqcyayT9UhIPPrXL3cjtntFaQ2halQ3Y7YGH8%2F7H%2Bgcl2WGEkTi1hZ8ReOIzA9TgR7Go88cVbYk8nMSbc1M5FagiWu%2FSTts3uxJQQ%2BNbEF%2BAnHzKBfOsG%2FrKPry1uFtVKHhskhj1nKP70a%2FD5jfiWttCsiciFV9kpyBTmGmXOhCItHiiKpMYSjM89jXbu0%2BRj3dIjs9RVH33icwt8FYeOSMvPOzgIBZFprlqyEMOCa2sAGOqUBj4qwgV2VXjRJATMs7i0z2G%2BXK7k5aAauuuKN1xzLJgVyKpZnbBG07G9p4UKYGIWOikH2rB%2FBQDWuvdc4I%2FP8KTd%2BVSeLkrev7TEbV4FR%2BVCYW%2BLLCo%2F73aIfyhVPVxTWN1GU54hchjPfz8nfnFlVgoTBd%2FBbtn3B4c7G3CW8wKtTBOyoxsXk1X16LBz0znULn5D1H71730wU8BsnE8ADSIrdrF%2Bs&X-Amz-Signature=6ee68b5016ac4cd017512b16e380958a95a1183aa52837dacc67de019e5d8ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
