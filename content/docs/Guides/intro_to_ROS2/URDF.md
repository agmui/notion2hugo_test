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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDY3ASQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2JSPAafel%2FqemPlxN04Uc6nrsFIlaADYDWqYZrM5ZIwIgR3qbwbMi55pOy7UMk2eb4PhEri9SfvNnjtKv1Esibkwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFMM97wuyjuGdBbEmCrcA%2FTiTxFWpxESfAt5sFYEKq%2FcHZJv%2Fx5pupzfjET6z6XC%2F50OUBSipV1NVos0CDlPqM4IY61VqEFUPP%2FZBdORrL2ceohTAZ5LRkYnuFlOvUF%2BHgYt1NMFxYk6KBDfhbxsCW8NB53TH%2BjfO4C9QUc%2BCUo%2BLo4bzIqedYvlqr%2FJgeiFGiW%2BDeTBFfgDu2nNMYhaHmQvTZ9bSqV7ZK7Ubqc9OlH140mzASSFxkazaLu0Sz%2FfiGGmCiLYo50RuSdJSlbDxt3FjACr1wAgaAgOJBN7AZBw%2B3yklmdB05IE24r0GDCA6auhyDzXcgnfKw5CSjbTW%2FoxEr3KS2JiDmf5dxUwrcPBSWCuP1DnEjrg%2BlPRy5XuOH8ThHOnaFgYQfQorcm26V9AFuCW%2BQYE041Beuctodyni%2BjGQzyvpL6iJ9%2BtzchbXtxjYf%2Fpaausd5Ex36R5YT998BP2L5DpSyqq1z0FrjJLnaS1uO8zaZpCyuVKcUmQuRZLbVGOXnypD%2FrVkUJeNHDkIc17c6tGNTQVt9KtCHHNo8A4%2BguFrhbp6HWWhyHdiVVLD%2FYC5aMjR8hm2FLQnaku1bMZlrxxW9r2c2BSJLA%2BEh%2FvkSS3g1QKEQPXghwpup8Tx6F0lOSSTNGgMIzhgcAGOqUB%2Byctb9XmL5y6owIin0bKVNJr1wzKTeasQYoGBkiWjmkbpQiU%2FUoi0z%2BnADO%2FwN7xbjq2yjnQgUU2ZGWrs8rtTDvqDB4WCZ73QAYow0RUgK5uyYXZG3Y4%2FZBIMQl6pt%2B0Kcpec037AGhDH36tMcrRSwj%2B3XfFFlcBSWfxfJG0KzXOmD6T2FoLxC8eKq0d%2Fpatbnp46nlfE8euvmXnmhYiocO3ok0l&X-Amz-Signature=0962ca685f6435336428e8b54528e43d7de4b408fb0ae3f71674d409234c69db&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDY3ASQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2JSPAafel%2FqemPlxN04Uc6nrsFIlaADYDWqYZrM5ZIwIgR3qbwbMi55pOy7UMk2eb4PhEri9SfvNnjtKv1Esibkwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFMM97wuyjuGdBbEmCrcA%2FTiTxFWpxESfAt5sFYEKq%2FcHZJv%2Fx5pupzfjET6z6XC%2F50OUBSipV1NVos0CDlPqM4IY61VqEFUPP%2FZBdORrL2ceohTAZ5LRkYnuFlOvUF%2BHgYt1NMFxYk6KBDfhbxsCW8NB53TH%2BjfO4C9QUc%2BCUo%2BLo4bzIqedYvlqr%2FJgeiFGiW%2BDeTBFfgDu2nNMYhaHmQvTZ9bSqV7ZK7Ubqc9OlH140mzASSFxkazaLu0Sz%2FfiGGmCiLYo50RuSdJSlbDxt3FjACr1wAgaAgOJBN7AZBw%2B3yklmdB05IE24r0GDCA6auhyDzXcgnfKw5CSjbTW%2FoxEr3KS2JiDmf5dxUwrcPBSWCuP1DnEjrg%2BlPRy5XuOH8ThHOnaFgYQfQorcm26V9AFuCW%2BQYE041Beuctodyni%2BjGQzyvpL6iJ9%2BtzchbXtxjYf%2Fpaausd5Ex36R5YT998BP2L5DpSyqq1z0FrjJLnaS1uO8zaZpCyuVKcUmQuRZLbVGOXnypD%2FrVkUJeNHDkIc17c6tGNTQVt9KtCHHNo8A4%2BguFrhbp6HWWhyHdiVVLD%2FYC5aMjR8hm2FLQnaku1bMZlrxxW9r2c2BSJLA%2BEh%2FvkSS3g1QKEQPXghwpup8Tx6F0lOSSTNGgMIzhgcAGOqUB%2Byctb9XmL5y6owIin0bKVNJr1wzKTeasQYoGBkiWjmkbpQiU%2FUoi0z%2BnADO%2FwN7xbjq2yjnQgUU2ZGWrs8rtTDvqDB4WCZ73QAYow0RUgK5uyYXZG3Y4%2FZBIMQl6pt%2B0Kcpec037AGhDH36tMcrRSwj%2B3XfFFlcBSWfxfJG0KzXOmD6T2FoLxC8eKq0d%2Fpatbnp46nlfE8euvmXnmhYiocO3ok0l&X-Amz-Signature=c5dcd76649001ac1b3be2a4169199e72de97264536c4382527c5edea8237c0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
