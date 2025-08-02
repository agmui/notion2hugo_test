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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO2D5Q5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgfDjKp0KPRA0dsVGrO59LTef0otShKFD%2Frnz4ej5K%2BgIhAJcGNZlLdX5M%2Bk4DhSkYAj1k5yhtZ2D1zO2XhBTQeQ69KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM2m6blU4uDrRQt6Aq3AM%2FaeadK3qdSwh%2BafC8m9vsbSNBRTaCkKIeh37%2FpNKn%2FRn778Sg4XuO6SY%2BXEyNZk5zbYQDPDy3%2FAvC%2B8JM8Ds7M1fGxK1UR8DjdFmuGMvSzPxBeDdnJj3zO8EYb1eIMsoUrMUVRpw7n65%2FcsZGXna1NdRwuCmqQWg7%2ByFNZmgbSB1D5dwV5gWNZNDGhHQ15TaxtzBEpT75I2qw9tP9zYG7zUbwT7tJy7g4hKQnfGAF7XRpbxq1WX%2BecJdvJSDXaz9XGhAKMPClrvifuBuRdROZhsM5Dfv0eeyfTYYgFznQ5qdn1Nf17jnlU1Dyq%2Bu7lnzbIqzbIDZcKcn2oBkYayB%2Bufy2NWiVAE%2B6QPE8Wg0ERcDcudIyr3YdmtoN7AWyO9PAfZKjbhpM4nFjKGcYqosdHCHsxHvobJTXlcQ0l%2BPJAit8M%2BI5mc8yetZR7svyMpA9MvEKLQ3B7VSk0wJaXtp49SyDy73ZimSfL2AjYbBBqSU84J0YXoSdWMq61OX2lFpH3LfSH%2B2j78GDqBrCrlKiXZt1GbRhJp9%2FWKYAES4zrXRC4aVmGoeOZaQx8pPU2UwA16xrMitDkPFz0bKiJt40YQIISN4nuVTClgTw4MC4s6Agd4%2BKiKjA%2BNzZ%2BDCdnbbEBjqkAbcsDCxtVNv%2BFRPVTWukiHTsywzFLz0PMZ4%2FhAt%2F7ih9APqaFwmMdYQSINcBVWny6Qaatpk57vod0R2CPTeKUK%2BE8NTNarmXRBLelw3rAF2c5M31AefbhlcTUIhfmvPMGgsbxVyrOp7aVGwunboDX6DRQvzE0Dqyn9ClR0NokM8zAGgW6tAnyst9GcvxHHgOifioR5DeR0ZLYQXfuFtCE%2FhD%2BAQw&X-Amz-Signature=b5485b211e8e9ac609733d0b28120b24f622eeae7221e9414f3c4a94e2df34ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNO2D5Q5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgfDjKp0KPRA0dsVGrO59LTef0otShKFD%2Frnz4ej5K%2BgIhAJcGNZlLdX5M%2Bk4DhSkYAj1k5yhtZ2D1zO2XhBTQeQ69KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM2m6blU4uDrRQt6Aq3AM%2FaeadK3qdSwh%2BafC8m9vsbSNBRTaCkKIeh37%2FpNKn%2FRn778Sg4XuO6SY%2BXEyNZk5zbYQDPDy3%2FAvC%2B8JM8Ds7M1fGxK1UR8DjdFmuGMvSzPxBeDdnJj3zO8EYb1eIMsoUrMUVRpw7n65%2FcsZGXna1NdRwuCmqQWg7%2ByFNZmgbSB1D5dwV5gWNZNDGhHQ15TaxtzBEpT75I2qw9tP9zYG7zUbwT7tJy7g4hKQnfGAF7XRpbxq1WX%2BecJdvJSDXaz9XGhAKMPClrvifuBuRdROZhsM5Dfv0eeyfTYYgFznQ5qdn1Nf17jnlU1Dyq%2Bu7lnzbIqzbIDZcKcn2oBkYayB%2Bufy2NWiVAE%2B6QPE8Wg0ERcDcudIyr3YdmtoN7AWyO9PAfZKjbhpM4nFjKGcYqosdHCHsxHvobJTXlcQ0l%2BPJAit8M%2BI5mc8yetZR7svyMpA9MvEKLQ3B7VSk0wJaXtp49SyDy73ZimSfL2AjYbBBqSU84J0YXoSdWMq61OX2lFpH3LfSH%2B2j78GDqBrCrlKiXZt1GbRhJp9%2FWKYAES4zrXRC4aVmGoeOZaQx8pPU2UwA16xrMitDkPFz0bKiJt40YQIISN4nuVTClgTw4MC4s6Agd4%2BKiKjA%2BNzZ%2BDCdnbbEBjqkAbcsDCxtVNv%2BFRPVTWukiHTsywzFLz0PMZ4%2FhAt%2F7ih9APqaFwmMdYQSINcBVWny6Qaatpk57vod0R2CPTeKUK%2BE8NTNarmXRBLelw3rAF2c5M31AefbhlcTUIhfmvPMGgsbxVyrOp7aVGwunboDX6DRQvzE0Dqyn9ClR0NokM8zAGgW6tAnyst9GcvxHHgOifioR5DeR0ZLYQXfuFtCE%2FhD%2BAQw&X-Amz-Signature=c947707e9c996d4c5bf9c02b3b19c78cbdd64214367fd1cd83069938076c8336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
