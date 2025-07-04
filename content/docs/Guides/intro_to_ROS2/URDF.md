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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DO5G4M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCz9T%2FQOxZwYFx319x6yVTrWW%2Bg2x2mNj4l5PdyquqSnAIhANNBxeSMOvI4nbUnKt4dDsLEhXhvjplMSO7NoXR3VNypKv8DCCcQABoMNjM3NDIzMTgzODA1Igw9dPTpvG5SYyYbnsIq3APY5ibA4NQHdOoo2SJQtZ%2FeaU9CXNmQyIky%2FNnqhCQ%2F8FBpJNL%2FlNwJVIpdEDIvKnwRk3zwPOT36bghLo2Ok%2F9aI6CAnEjuavhw8qs%2BZA0rozdxifd1tprIgNUNOthZ1%2BTIvWsFl0jCcWSuOoeBJtAkQtT6AUYao0rqTRu%2FL374Rkm2rmRrS2XyKL3%2B0opO07z9cZVrQoMG035ntb6w7rKiKlBZ2cXwJa21eN2nqxYWFsyOeKw7feoTkC6VyIKNzkjwE8sW85yscF3%2FTScmkJKlGl4J%2BVj5zEE5dtMb0Dt0t%2Be%2FbxydkZSGIHp3LDo%2F%2Fm0z58xLH3LWYW6Wcd67STIviqYd1BVTy9hDld1V4hBrFD0xf1%2B3yqt9FYRl46p0DlPc2xSpEERvtWCmunhy1KnroggiziX%2B4A2XDU0klQzz6CkPzC%2B871rFXyJyz31XVBIW5ltGPw01THCD%2FedJoHcoo0KGHPpRg5PGakW3efj8wpbBC30%2FuRJYG93Dznp0Ep7tmSxEU1Zr6Tw8tiMSmrldIMgeZXc4%2FSPldFRcl%2FY822bZ8VOG2tlynKEbkXJLaJuC4s6%2BvZseL6Zm9sJdCJNhYeuscTB41%2FG9KWcFvihAzU2J3SnlLmlaxuMlUTDX4J3DBjqkAfU2nzoXM21BPyrO3o59c%2FOIv9d7eP7hCTt1oGkkhh%2BJdg5tfUsizQauSsTFMtU1op5YRAmxT15PbHsJxT7Aabg4aSlGO0V%2FXV9N9C39bm%2B42ejIVMQTvINmn1SxtHdpCfAojVznAl263WCih3xeMkbZLPJsgCljh9%2BUH1rJ4HAlDnVz627u2%2FoRnQr6CFQsh17WowJ58dJ8oCRdDqS7ozEXDmHe&X-Amz-Signature=e141dc6c03a40883d5b619f2dbc31fe51469c9318763e630434918adaa836d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DO5G4M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCz9T%2FQOxZwYFx319x6yVTrWW%2Bg2x2mNj4l5PdyquqSnAIhANNBxeSMOvI4nbUnKt4dDsLEhXhvjplMSO7NoXR3VNypKv8DCCcQABoMNjM3NDIzMTgzODA1Igw9dPTpvG5SYyYbnsIq3APY5ibA4NQHdOoo2SJQtZ%2FeaU9CXNmQyIky%2FNnqhCQ%2F8FBpJNL%2FlNwJVIpdEDIvKnwRk3zwPOT36bghLo2Ok%2F9aI6CAnEjuavhw8qs%2BZA0rozdxifd1tprIgNUNOthZ1%2BTIvWsFl0jCcWSuOoeBJtAkQtT6AUYao0rqTRu%2FL374Rkm2rmRrS2XyKL3%2B0opO07z9cZVrQoMG035ntb6w7rKiKlBZ2cXwJa21eN2nqxYWFsyOeKw7feoTkC6VyIKNzkjwE8sW85yscF3%2FTScmkJKlGl4J%2BVj5zEE5dtMb0Dt0t%2Be%2FbxydkZSGIHp3LDo%2F%2Fm0z58xLH3LWYW6Wcd67STIviqYd1BVTy9hDld1V4hBrFD0xf1%2B3yqt9FYRl46p0DlPc2xSpEERvtWCmunhy1KnroggiziX%2B4A2XDU0klQzz6CkPzC%2B871rFXyJyz31XVBIW5ltGPw01THCD%2FedJoHcoo0KGHPpRg5PGakW3efj8wpbBC30%2FuRJYG93Dznp0Ep7tmSxEU1Zr6Tw8tiMSmrldIMgeZXc4%2FSPldFRcl%2FY822bZ8VOG2tlynKEbkXJLaJuC4s6%2BvZseL6Zm9sJdCJNhYeuscTB41%2FG9KWcFvihAzU2J3SnlLmlaxuMlUTDX4J3DBjqkAfU2nzoXM21BPyrO3o59c%2FOIv9d7eP7hCTt1oGkkhh%2BJdg5tfUsizQauSsTFMtU1op5YRAmxT15PbHsJxT7Aabg4aSlGO0V%2FXV9N9C39bm%2B42ejIVMQTvINmn1SxtHdpCfAojVznAl263WCih3xeMkbZLPJsgCljh9%2BUH1rJ4HAlDnVz627u2%2FoRnQr6CFQsh17WowJ58dJ8oCRdDqS7ozEXDmHe&X-Amz-Signature=d083d604aca01f1a7012a87d502b30e1f0d55157084bb011d2ee59915597887c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
