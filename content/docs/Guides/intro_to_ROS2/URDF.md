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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFST4HTT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn6jJU4RkcLC2ALrv0vW3Nlv7BGRNNpRdDpokdwTO00AiEA1JgSUPPBO9%2BL4Pa7x51Qq5g9FAm5spdSwrClnJE8YWMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKknoWLx04OlY1Mx5ircAyS2bjPVybP96Lb79tg5luIkpficO45tW67D7RBzWpRZUAEvZ8a3wB3BozYaYG7eLxT2qz29QvQVgNTb6bjedRmn%2FE%2B74s13ZC8%2BU1ykn3X2LHQMFVHopu8eO3tbS6syn%2FLl91kqNHRPB7nVPeEdZUOvesLt9kTfiPdiYhcWBxoLo9u2AE7qCkH2fid94qki16YpAx98whqSn2nbsEFAQP%2BArybVWR169CQrk8LSdTa5iONBt0XQCQOn7lGq0G%2FYQ4nzsdJzDRPh36PlQbWJDfzDFf6XlHSNRHhYB6jljlkjcmhfSf4db5WJo%2BMIQU9dm8E2tKT%2BTcvVq%2F13b8aT2MaivD47Mh8007OKISipPnsmB6OY9bhd3zwgGoArHABJCiNsVyzrColSAQsPKafXcA6K1g8294KFN%2FpWnvZWvxmHJWkPZlTB3H6oBCPknwFG6H4LmiyoIgdsBwm2eaSHVoGcMcSytvWsMJI8tLyM7z%2BnK%2BKOh%2BTx2XpQfBq8ttuUcNyU7WbBO1625u6iCeQLQFZXN%2BZhS9tSzJulS9V4bIc2wkwxwRBcgAvLedRh6ZrwdFOPAl3iIT6oxi7yyJBINwCGDkuqJ0oEYP%2FER83RZlQArX2jB45GsCJNCltAMKzFhL8GOqUBOQRSeveECKgQhaQZlcSCF3qJ1eF7%2FIKQ6QvFMMvuoV5B1TqUscdAjFnEbu0ELBY6WXFlPhOR000kb%2FEMShWIl%2FsmiIQTbDDXm3UOy%2Fta0%2F97toAgAT9E3JYsAHJGztU3pAgVKOST2I2Il1UTVLP9gfxI9VIErwav6rhm5YGxi3Zevo8%2FjqkCuTRq%2BoO0r53Nu4ceTFG85wecUP9EE7HEEWWgqoT%2B&X-Amz-Signature=6b91a2fe63991ca4463dddbd7f7b1c0dbc00a06c1f37c2cb2a6f7663e48b6c50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFST4HTT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn6jJU4RkcLC2ALrv0vW3Nlv7BGRNNpRdDpokdwTO00AiEA1JgSUPPBO9%2BL4Pa7x51Qq5g9FAm5spdSwrClnJE8YWMqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKknoWLx04OlY1Mx5ircAyS2bjPVybP96Lb79tg5luIkpficO45tW67D7RBzWpRZUAEvZ8a3wB3BozYaYG7eLxT2qz29QvQVgNTb6bjedRmn%2FE%2B74s13ZC8%2BU1ykn3X2LHQMFVHopu8eO3tbS6syn%2FLl91kqNHRPB7nVPeEdZUOvesLt9kTfiPdiYhcWBxoLo9u2AE7qCkH2fid94qki16YpAx98whqSn2nbsEFAQP%2BArybVWR169CQrk8LSdTa5iONBt0XQCQOn7lGq0G%2FYQ4nzsdJzDRPh36PlQbWJDfzDFf6XlHSNRHhYB6jljlkjcmhfSf4db5WJo%2BMIQU9dm8E2tKT%2BTcvVq%2F13b8aT2MaivD47Mh8007OKISipPnsmB6OY9bhd3zwgGoArHABJCiNsVyzrColSAQsPKafXcA6K1g8294KFN%2FpWnvZWvxmHJWkPZlTB3H6oBCPknwFG6H4LmiyoIgdsBwm2eaSHVoGcMcSytvWsMJI8tLyM7z%2BnK%2BKOh%2BTx2XpQfBq8ttuUcNyU7WbBO1625u6iCeQLQFZXN%2BZhS9tSzJulS9V4bIc2wkwxwRBcgAvLedRh6ZrwdFOPAl3iIT6oxi7yyJBINwCGDkuqJ0oEYP%2FER83RZlQArX2jB45GsCJNCltAMKzFhL8GOqUBOQRSeveECKgQhaQZlcSCF3qJ1eF7%2FIKQ6QvFMMvuoV5B1TqUscdAjFnEbu0ELBY6WXFlPhOR000kb%2FEMShWIl%2FsmiIQTbDDXm3UOy%2Fta0%2F97toAgAT9E3JYsAHJGztU3pAgVKOST2I2Il1UTVLP9gfxI9VIErwav6rhm5YGxi3Zevo8%2FjqkCuTRq%2BoO0r53Nu4ceTFG85wecUP9EE7HEEWWgqoT%2B&X-Amz-Signature=ff68dbff7a1820ff9ea9467bbd7efaa5cd3fac0759b4c6bb7a0633b5f58082ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
