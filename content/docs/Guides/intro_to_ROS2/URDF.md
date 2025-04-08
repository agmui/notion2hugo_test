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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXFBXFE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFzmcSdRDIztdRAHhvpZhVrBDmhHCdKWlH%2FQGipXfCo9AiEAsv4yZwEA4172ep9iV0cwt2ObdkHgBPZ8d6zaKuAjpYEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM4R%2FZ0jsMAA0Cr9XyrcA842wia5FD6TFqXjI%2BC0pIxorz%2F3obPOq5sU0TeuD6JB84OGRLYPwgVAkacVm5UYVH1fy01UZL22uHSvcFXniG6LeecaFD0Hb50Op7eFoDmGQMp2XZOphrKJ8i5AyRQAo8urhn7xq1MT0f0EFL%2B%2BamGYi1%2FaFagAyUOypevUhTct3DVzLnA94Vi%2FIp7kF%2FvJOsgNtUNovJEDQ9v6zuSSCMeZsteiiX5arcJba2iblgdMxtEcdK%2BTchU4CmUEJKU%2ByNdQaX2xyfaIGVASRHW9%2F9dsose8QCBOWJGpYfaNmywOSxRfZN5m560EL514DQvi%2FpLem2DoDZVwgtgGzFMZzRAlbbT%2Bwr9zQd6FnjNRTvbabOOwyA9kbDDch4qZNxpP5tH%2BOTSIAtBd4uv%2BXtEIhYDSSRHg0ODhPwHIqPQYJfHnp%2Fabt1Dp5RImLfbaf8lV7Xqdz1z33UgEp%2B6Y%2FsSGSNIq2G2E523qj911V9aqgmd5ZKZjX7B6MbQv32iysrlzG53YKQbf7EXNN8OlzhnUyTaWB9XHipaksswhNI4K%2BzXzfvW%2BGmT63aohyNgF1B1WjsDktN3MgwuSR%2FrFH9ms1LwHY16nF1ZZrJwn2T6NzUlrlhCYHriEea12M0DAMOCq1r8GOqUBodZFoUMr83yl98%2FS4YzGSkTGZdARK5CKrNOyX2Us3hNXRibbizmZtPDVV9StPx6EIzHq2LAphiIINd8b9tXXqrBAdz9sZytJmJRX6F8LM5EYuCuXDro3w%2FeNzCR35cZ2Vi6B6ym6%2BCaToXgpgtkBKTZx8oTLs1FvUkrAPbPSvkRYtb7%2B3Z2SN1BvYMoDdtwZpgptKj4edM7g44FguLKc68u8l5Vo&X-Amz-Signature=bae52d09a3fe747168b9ff32895a66058ff8ac500dd4016631c7ce64f0d5da6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXFBXFE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFzmcSdRDIztdRAHhvpZhVrBDmhHCdKWlH%2FQGipXfCo9AiEAsv4yZwEA4172ep9iV0cwt2ObdkHgBPZ8d6zaKuAjpYEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM4R%2FZ0jsMAA0Cr9XyrcA842wia5FD6TFqXjI%2BC0pIxorz%2F3obPOq5sU0TeuD6JB84OGRLYPwgVAkacVm5UYVH1fy01UZL22uHSvcFXniG6LeecaFD0Hb50Op7eFoDmGQMp2XZOphrKJ8i5AyRQAo8urhn7xq1MT0f0EFL%2B%2BamGYi1%2FaFagAyUOypevUhTct3DVzLnA94Vi%2FIp7kF%2FvJOsgNtUNovJEDQ9v6zuSSCMeZsteiiX5arcJba2iblgdMxtEcdK%2BTchU4CmUEJKU%2ByNdQaX2xyfaIGVASRHW9%2F9dsose8QCBOWJGpYfaNmywOSxRfZN5m560EL514DQvi%2FpLem2DoDZVwgtgGzFMZzRAlbbT%2Bwr9zQd6FnjNRTvbabOOwyA9kbDDch4qZNxpP5tH%2BOTSIAtBd4uv%2BXtEIhYDSSRHg0ODhPwHIqPQYJfHnp%2Fabt1Dp5RImLfbaf8lV7Xqdz1z33UgEp%2B6Y%2FsSGSNIq2G2E523qj911V9aqgmd5ZKZjX7B6MbQv32iysrlzG53YKQbf7EXNN8OlzhnUyTaWB9XHipaksswhNI4K%2BzXzfvW%2BGmT63aohyNgF1B1WjsDktN3MgwuSR%2FrFH9ms1LwHY16nF1ZZrJwn2T6NzUlrlhCYHriEea12M0DAMOCq1r8GOqUBodZFoUMr83yl98%2FS4YzGSkTGZdARK5CKrNOyX2Us3hNXRibbizmZtPDVV9StPx6EIzHq2LAphiIINd8b9tXXqrBAdz9sZytJmJRX6F8LM5EYuCuXDro3w%2FeNzCR35cZ2Vi6B6ym6%2BCaToXgpgtkBKTZx8oTLs1FvUkrAPbPSvkRYtb7%2B3Z2SN1BvYMoDdtwZpgptKj4edM7g44FguLKc68u8l5Vo&X-Amz-Signature=16c9a1c793b9ce09068d67d25a4a14aef9ee7d7a6ffafa45e8bba8ad91fe50ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
