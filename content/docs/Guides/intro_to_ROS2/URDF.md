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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCUJEEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDM14%2BdJZezonf9iT0qE49JlgvgbrKL6uGQJlDlXonc8AiEAzMPIsGPKw4a1zCjDqpbdeyOkjW5f%2FHYOCcf90YgAR28q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD%2Bk3Su1caCskZ1PtircAx1Kmqnljs2ItFJYKymmEy2C%2FqO%2BoGWu%2FWwu%2BIoUF9BN%2BEYwtZMoEWbkA27xWSy3ju1o%2BWl4qqJNRn3GVjxQWZS%2BHYnLlcrQoRvXE3JPQSkmt1BrLOArEUR6mEWQmwZXNly9bVaj9E%2FQOAjPK7EUax7RBJBJaDEkBp0B%2F07yFiM0wShEcxJtEtS68rQ4dyUkSuINK%2FVHEJBA0sxFHKGx4IW3BSbDDgnOaKkTWLusQGLdQOZX40GG3NTPrWHIXvc1wKK5qThjfLD%2BHjaj1fIzCx0FsPm6%2FITjNLmVa6GUc%2Fi8f47nHYNnEAmXu93csZW9B2V5mQl2PtvKamQsAblVFf86DUt9twRhgc9YndvAnmflofiziEuceegCus4KU8BNdGEnng7SDOAOZz3nyjFI0%2BmE9WAIRBJCErmyWr7Hwn0Nxfn25hOVYdDPAlbdqQ29R%2F3c0aE71X7PIqKKhwvamu95MfyZbN%2B6VYtRf21P1%2FF%2BoZd7mVge%2FVC%2FJ1dG0XJwrwyIDNgxNH4EbPaCFJRUl%2F18vhlAiFUTfYH1DgjHRN%2FQoLab74WFxHn5hbpam8SEgC1COHZ6ysVHl55erbQaWVTcUYJu4aeiey95Fd2ELO1ytbIyvSWFN6n3zzxkMLnsn8MGOqUBNhrXwEbSzAliyyKlq%2BXZq3OQhy1%2BsbAGWQtRUqS2bIuSPxrZDQsonTsR6jCxgjQWnbKjdAqeL9uJWuRUmzkLxQK6%2BzVSCQWR4%2BamLwx7497%2BS%2Fl3YOE0%2BWkkbX8GK484Md34RK%2FWVo%2BfsX4958pN%2B2DNeDdHI6Kez5vdAjtrDh%2BUtVcvp%2FwHkgduoEWzV8O5qd1c1gbJVEPTmqKCrrUrqfhqt611&X-Amz-Signature=5da3a26975f28dc3efb051d0bbcee1831afda7d23d887ef4c50d715a6d967fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCUJEEK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDM14%2BdJZezonf9iT0qE49JlgvgbrKL6uGQJlDlXonc8AiEAzMPIsGPKw4a1zCjDqpbdeyOkjW5f%2FHYOCcf90YgAR28q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD%2Bk3Su1caCskZ1PtircAx1Kmqnljs2ItFJYKymmEy2C%2FqO%2BoGWu%2FWwu%2BIoUF9BN%2BEYwtZMoEWbkA27xWSy3ju1o%2BWl4qqJNRn3GVjxQWZS%2BHYnLlcrQoRvXE3JPQSkmt1BrLOArEUR6mEWQmwZXNly9bVaj9E%2FQOAjPK7EUax7RBJBJaDEkBp0B%2F07yFiM0wShEcxJtEtS68rQ4dyUkSuINK%2FVHEJBA0sxFHKGx4IW3BSbDDgnOaKkTWLusQGLdQOZX40GG3NTPrWHIXvc1wKK5qThjfLD%2BHjaj1fIzCx0FsPm6%2FITjNLmVa6GUc%2Fi8f47nHYNnEAmXu93csZW9B2V5mQl2PtvKamQsAblVFf86DUt9twRhgc9YndvAnmflofiziEuceegCus4KU8BNdGEnng7SDOAOZz3nyjFI0%2BmE9WAIRBJCErmyWr7Hwn0Nxfn25hOVYdDPAlbdqQ29R%2F3c0aE71X7PIqKKhwvamu95MfyZbN%2B6VYtRf21P1%2FF%2BoZd7mVge%2FVC%2FJ1dG0XJwrwyIDNgxNH4EbPaCFJRUl%2F18vhlAiFUTfYH1DgjHRN%2FQoLab74WFxHn5hbpam8SEgC1COHZ6ysVHl55erbQaWVTcUYJu4aeiey95Fd2ELO1ytbIyvSWFN6n3zzxkMLnsn8MGOqUBNhrXwEbSzAliyyKlq%2BXZq3OQhy1%2BsbAGWQtRUqS2bIuSPxrZDQsonTsR6jCxgjQWnbKjdAqeL9uJWuRUmzkLxQK6%2BzVSCQWR4%2BamLwx7497%2BS%2Fl3YOE0%2BWkkbX8GK484Md34RK%2FWVo%2BfsX4958pN%2B2DNeDdHI6Kez5vdAjtrDh%2BUtVcvp%2FwHkgduoEWzV8O5qd1c1gbJVEPTmqKCrrUrqfhqt611&X-Amz-Signature=733a288dbdf478e65ae916db2460adb93096b72bab868a92392dae4e14057f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
