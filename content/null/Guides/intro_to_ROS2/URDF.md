---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46HVJC4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCM6jsKbKGekEPGIeTHSslpSd2zj6dg14aLuipcMjkOZwIgPjeY%2Fp0128J3oh4TTJfBMRB3r5gyGedpB4r%2FFJbnhq0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKZ8YTPKtVtZ7rnbQSrcA4R%2BAHZXmh186wnSj7tFV5xwm5grmzuxBMFj15rAYREW0E6l%2FsyKn7ZMM1lO8aV77FhFOVl7%2FI%2FIsLjR8CzJDACjngEnvLJBCIdPfuyNDNoOXnssUf95AslUbALAQAt4gT3Yyh5KYZEW43U4FdG7%2Bbsg2qmdUTFBrduV%2F%2FPF3J%2BedK9z2BCSZ8%2Bez%2ByJP99jgOvFcbbc2NmGBGVpEdYxOFNj7gGaEBOvTx0O2KL0UIZcUjilT6x%2Fsv3TH%2BREUcrkY7mF45fIQXOfxeo46hW70TbgTqw72PZiVmbfzo6HOhWoZA%2FJ9Tb4mRuApjmLDFZh2IaKCydzobZqUQ0gD7sI8o7hrh3KDx8ni4YFz4hSbwwUQXGF7y5vt2JfAZlmeIXdg48jygBGcLdmttvSRS2YLvoPMDiUSNVqVFh%2Bhx7ZGvnTZzZ%2FpVtgLimXKmpbaFLuSgDrCvrd6l6UFAwDyXl28j7C8DT2YPXsR8zUEL%2Fu7fP1bmiN9UgA1Fin%2BQq3DFzWLd%2BiTor2kBoaORCTP2AuTqrTJztMtEINs451CS7umBNAjDhWkqR0ASoHcRitw8souk0hBYUwsNbCpR9PEH%2FJ8ieu7puD2z8hIRKf2QXn1RHFF%2FzLrcPxmgfblGLxMOX9ib0GOqUB3noINJsHe1%2FPvd1O13ucueK0rFwU4aLaWQ8jgHMA%2FefSyfPI5ZTr5DDFBBpdSSeY6sAynCAQL8fLQe6V38nL%2FlXxo%2B9uAU09Hp0f2wIyCkOx5soagVk%2BPEHutvTxLX8XbjGmHynoMHIEDQ7Ilv2i4Io4Vcn%2BHw97TCqeOGS%2BqHGyHHY%2FPSM6T3vGwZSEbg0RXxeoHgJtq5qEOBlu%2BJK%2BsqCPsqGp&X-Amz-Signature=818dd3f6e3421f1293f794aaafb81453bdd9d3ec0201b9081b4e53db9241bcc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46HVJC4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCM6jsKbKGekEPGIeTHSslpSd2zj6dg14aLuipcMjkOZwIgPjeY%2Fp0128J3oh4TTJfBMRB3r5gyGedpB4r%2FFJbnhq0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKZ8YTPKtVtZ7rnbQSrcA4R%2BAHZXmh186wnSj7tFV5xwm5grmzuxBMFj15rAYREW0E6l%2FsyKn7ZMM1lO8aV77FhFOVl7%2FI%2FIsLjR8CzJDACjngEnvLJBCIdPfuyNDNoOXnssUf95AslUbALAQAt4gT3Yyh5KYZEW43U4FdG7%2Bbsg2qmdUTFBrduV%2F%2FPF3J%2BedK9z2BCSZ8%2Bez%2ByJP99jgOvFcbbc2NmGBGVpEdYxOFNj7gGaEBOvTx0O2KL0UIZcUjilT6x%2Fsv3TH%2BREUcrkY7mF45fIQXOfxeo46hW70TbgTqw72PZiVmbfzo6HOhWoZA%2FJ9Tb4mRuApjmLDFZh2IaKCydzobZqUQ0gD7sI8o7hrh3KDx8ni4YFz4hSbwwUQXGF7y5vt2JfAZlmeIXdg48jygBGcLdmttvSRS2YLvoPMDiUSNVqVFh%2Bhx7ZGvnTZzZ%2FpVtgLimXKmpbaFLuSgDrCvrd6l6UFAwDyXl28j7C8DT2YPXsR8zUEL%2Fu7fP1bmiN9UgA1Fin%2BQq3DFzWLd%2BiTor2kBoaORCTP2AuTqrTJztMtEINs451CS7umBNAjDhWkqR0ASoHcRitw8souk0hBYUwsNbCpR9PEH%2FJ8ieu7puD2z8hIRKf2QXn1RHFF%2FzLrcPxmgfblGLxMOX9ib0GOqUB3noINJsHe1%2FPvd1O13ucueK0rFwU4aLaWQ8jgHMA%2FefSyfPI5ZTr5DDFBBpdSSeY6sAynCAQL8fLQe6V38nL%2FlXxo%2B9uAU09Hp0f2wIyCkOx5soagVk%2BPEHutvTxLX8XbjGmHynoMHIEDQ7Ilv2i4Io4Vcn%2BHw97TCqeOGS%2BqHGyHHY%2FPSM6T3vGwZSEbg0RXxeoHgJtq5qEOBlu%2BJK%2BsqCPsqGp&X-Amz-Signature=f407f4f9a21fb626b4ccad27cfcae2c3b44873b99229f3df7695e9bec4bbeb11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
