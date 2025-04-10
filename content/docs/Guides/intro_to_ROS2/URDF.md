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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL3P5AS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBjBEKiwW2xbdGjRsnTcytC%2FrdGaYFQdB44RJ3N%2Biyr0AiBhVwym9woPEo3jU4%2Bw2SHoC%2FmLBBbQFwmt8Xwz6VEBuyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBW90DfAcUHUwJhXJKtwDPNt4xbv1xPHS9Q5zKMwTxpWz4t6tA7lAUG%2BaOmDgy3gDOOqRMZF9fDxNFf7gt2Yc8gLxTS8MRvCojFL7Z8DZn9Rz0iouDDKpBOZlfixyWV6JlZb5I0WolMcy8%2BchI6yegX6bzB3EYte1WG0bqzcBB3nT1qGWjxDB5kObR%2BTDf%2BqzV5hvh9gEeuBkWIBicX%2BHSnaI5bRd9Iga%2BFVkCghV%2F4Q3NNhQdLZhEAo%2BNzkWZe9n0biFK%2FyJ5iLq2oiDodTEH858UQMkcx3AYtp%2Fx0Yfkqk5hENCw8%2Bz3P%2F5pIefhRN30%2BGmQUFpTFvCFVDzs%2BFKvqLK8qxApsYzx0F0aYkHGz1ihUGM0AabYT6xqCx%2Bt7Uazf9eX1z3MFretnyWe8g3evL6nZlcBMM1NfiD%2Bk4Ag9yPsr9SM0nP3RUI0miq9zdtpNsWokaTSVtGx5xTZCYSDJ7CRt5vI9FB98%2Fd01UH3nBgboUUE2ElcR93cc%2B%2F5ixUPtpe%2F6oFg7UsJq%2Fwl4ul42h1qA%2FONm8pxoJsxlOTJP8H%2BrYkmF3pqIZerQuuOUIQoBkGW0irKmtaPWjswgQDWLElPrrms7ca5%2B4UMNvmhRs6Q95yPPcG%2BGlsBQ0VAL%2Fa8C4Hbd%2Bxj8rdGEsw5%2FfcvwY6pgHNcFhp6XO45EwIdQ0cvHcn6j7tQYngYIjPeXIJDu5dkcE%2F09lQh4iFH2DpketX4b3D%2BYZ3I4CshC358Cuo4zcha9vOUF4jW0xxP9ro5KvXOQuUBKr9RvAgeL7%2BKGPiuDpTIoOJcf0eCUtjR8sc2DUftBG1OmD5DfgVXxKSZiO0nYRVNE5PdbN31ClwltQWgYGNhzYiNDxD20fVx1myGvAEtpSU1LbA&X-Amz-Signature=5a78c266b6badba3ec93d08b1f34168718a676a65da385cd6361bb6804c8e629&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXL3P5AS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBjBEKiwW2xbdGjRsnTcytC%2FrdGaYFQdB44RJ3N%2Biyr0AiBhVwym9woPEo3jU4%2Bw2SHoC%2FmLBBbQFwmt8Xwz6VEBuyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBW90DfAcUHUwJhXJKtwDPNt4xbv1xPHS9Q5zKMwTxpWz4t6tA7lAUG%2BaOmDgy3gDOOqRMZF9fDxNFf7gt2Yc8gLxTS8MRvCojFL7Z8DZn9Rz0iouDDKpBOZlfixyWV6JlZb5I0WolMcy8%2BchI6yegX6bzB3EYte1WG0bqzcBB3nT1qGWjxDB5kObR%2BTDf%2BqzV5hvh9gEeuBkWIBicX%2BHSnaI5bRd9Iga%2BFVkCghV%2F4Q3NNhQdLZhEAo%2BNzkWZe9n0biFK%2FyJ5iLq2oiDodTEH858UQMkcx3AYtp%2Fx0Yfkqk5hENCw8%2Bz3P%2F5pIefhRN30%2BGmQUFpTFvCFVDzs%2BFKvqLK8qxApsYzx0F0aYkHGz1ihUGM0AabYT6xqCx%2Bt7Uazf9eX1z3MFretnyWe8g3evL6nZlcBMM1NfiD%2Bk4Ag9yPsr9SM0nP3RUI0miq9zdtpNsWokaTSVtGx5xTZCYSDJ7CRt5vI9FB98%2Fd01UH3nBgboUUE2ElcR93cc%2B%2F5ixUPtpe%2F6oFg7UsJq%2Fwl4ul42h1qA%2FONm8pxoJsxlOTJP8H%2BrYkmF3pqIZerQuuOUIQoBkGW0irKmtaPWjswgQDWLElPrrms7ca5%2B4UMNvmhRs6Q95yPPcG%2BGlsBQ0VAL%2Fa8C4Hbd%2Bxj8rdGEsw5%2FfcvwY6pgHNcFhp6XO45EwIdQ0cvHcn6j7tQYngYIjPeXIJDu5dkcE%2F09lQh4iFH2DpketX4b3D%2BYZ3I4CshC358Cuo4zcha9vOUF4jW0xxP9ro5KvXOQuUBKr9RvAgeL7%2BKGPiuDpTIoOJcf0eCUtjR8sc2DUftBG1OmD5DfgVXxKSZiO0nYRVNE5PdbN31ClwltQWgYGNhzYiNDxD20fVx1myGvAEtpSU1LbA&X-Amz-Signature=74db0d8a5a596121618ca20cb44236cfd32b570b6686266802c95f8e0f1317cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
