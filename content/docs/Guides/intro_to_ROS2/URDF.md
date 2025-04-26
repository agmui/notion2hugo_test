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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDZJNZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATywCOiBZqcReH4%2BJA1kFaQX5WX%2BMn9TOis%2Fg1R%2B91GAiEA7SFrQnRWTROarBmqvZ4f%2FgYahF4CSL2CsR4PcWogH0cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOS%2B9Wgp%2Fo%2Bc%2B2CuWSrcA1e4urMcu3rQJKGaJxZqs2tmk31WjvxF3bPoWP8PuHS%2BOLuOkq%2BKNoh65347Tm8TIWAdfdLyMKtO6Hr2mTEyUfYMKa0fXgBW3EcOXXrHlBwGuYv0CNB15DB8QtXZuFjovXKh9XSJxX%2BS435tpc%2BXnFXICXo9vSJEG9iPKMoNxFB08WCv1vSPgMGA%2FZ0l7hLzfj2uANmkq4aUqLCQ0d%2B9QxopEM53VE92MXpYHwnTaac%2FljoxJjj%2BjhLGHU0Bxm73Zw9PDhHYKwgse6CV0jGj7WB1rX1zh5cVDaiCGvixSQBje%2FeFWU80aMYBAkZT%2F7sEtYP7ZU8eGTv0VD5W2iDukE4pBOnzkSgqpUswKNx2tjwQJlyVtm6rmHcLea2Xcwas9iI1AWAIhwJ1fBWkpcPJobDmfanR4ck1V%2B4uoDlwbaj4k02JnxkrxEwL4dwdfb2D80ay2ga8O3YqEBDfULhDK9wCVWAt%2Fcpp9GzfSKKae0yLb20N2FkIdNam%2BuoYgD5rp8wxMUIw9xbm%2F00d%2FsXcu61EHyCKEJaTzus4TLMT%2BUbPJ5AiznokcFKsY4AM7RWqEZTF%2BSw20b9yXOuA7ROeZ8nubyOJjLDsHDyuxxMvMNrrdvis0atNCCKPCtCfMKmEssAGOqUBCGM666NsqbOX1grBmcriZOnFeKLPzZL3hieTL3ya4TmwYIWhswWOyaRQXb6X9%2FRR6Lc7tISfLTyeW9K5oOPjskK5DXT2XaN0n2zZ0N%2FmLI7g7hsEfipkd8Pjfy%2Fi64sRdX1fJeuzhtuESBSgOEFM%2BnB%2B9UEHeV9WIwXbSOnfiX02f8EYD1gdXExbgb432xxGoT1s9bU5cPiknW7FNRJjd2tKOtZW&X-Amz-Signature=015f27b1bc9eae6bcdb2fb46b7f0a45cf894054bf921ec9f5fd16c3dae61ddb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDZJNZE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATywCOiBZqcReH4%2BJA1kFaQX5WX%2BMn9TOis%2Fg1R%2B91GAiEA7SFrQnRWTROarBmqvZ4f%2FgYahF4CSL2CsR4PcWogH0cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOS%2B9Wgp%2Fo%2Bc%2B2CuWSrcA1e4urMcu3rQJKGaJxZqs2tmk31WjvxF3bPoWP8PuHS%2BOLuOkq%2BKNoh65347Tm8TIWAdfdLyMKtO6Hr2mTEyUfYMKa0fXgBW3EcOXXrHlBwGuYv0CNB15DB8QtXZuFjovXKh9XSJxX%2BS435tpc%2BXnFXICXo9vSJEG9iPKMoNxFB08WCv1vSPgMGA%2FZ0l7hLzfj2uANmkq4aUqLCQ0d%2B9QxopEM53VE92MXpYHwnTaac%2FljoxJjj%2BjhLGHU0Bxm73Zw9PDhHYKwgse6CV0jGj7WB1rX1zh5cVDaiCGvixSQBje%2FeFWU80aMYBAkZT%2F7sEtYP7ZU8eGTv0VD5W2iDukE4pBOnzkSgqpUswKNx2tjwQJlyVtm6rmHcLea2Xcwas9iI1AWAIhwJ1fBWkpcPJobDmfanR4ck1V%2B4uoDlwbaj4k02JnxkrxEwL4dwdfb2D80ay2ga8O3YqEBDfULhDK9wCVWAt%2Fcpp9GzfSKKae0yLb20N2FkIdNam%2BuoYgD5rp8wxMUIw9xbm%2F00d%2FsXcu61EHyCKEJaTzus4TLMT%2BUbPJ5AiznokcFKsY4AM7RWqEZTF%2BSw20b9yXOuA7ROeZ8nubyOJjLDsHDyuxxMvMNrrdvis0atNCCKPCtCfMKmEssAGOqUBCGM666NsqbOX1grBmcriZOnFeKLPzZL3hieTL3ya4TmwYIWhswWOyaRQXb6X9%2FRR6Lc7tISfLTyeW9K5oOPjskK5DXT2XaN0n2zZ0N%2FmLI7g7hsEfipkd8Pjfy%2Fi64sRdX1fJeuzhtuESBSgOEFM%2BnB%2B9UEHeV9WIwXbSOnfiX02f8EYD1gdXExbgb432xxGoT1s9bU5cPiknW7FNRJjd2tKOtZW&X-Amz-Signature=e288a39a8a8c03cf7e895f87a2f8ecbf863a2f990bf0fbe8781b510af2d7c58e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
