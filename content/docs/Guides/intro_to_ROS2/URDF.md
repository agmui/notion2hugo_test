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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7SNDRC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHfedx2kercwnCg5EFZNy6lW6pgy2ee4dBntpe7Uke5AAiEAygIfW4ok8aE8mngKtl7vbiBv7wSLA1zzoy8k2XNp8dwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDK5OHM88qfh1NW7vbyrcA9q1ZkbepXS0%2B%2Be0lauty733PIbfZMILJFRIRHBGxCANBLwbXOORh9BwQAG8SAB1o5ITyMhkcYUfX33QRszS%2FmBa6nFSivwDZaWdRcSa5IhxwMjFcSRgQFOBoGBYn1ZE%2Fn0scHfEJ3L1A2msY0MKBqazbfBydp7AeYt0x4B2aM4JbZvhMC8mnccC21O0EU24tu6iM8T2gmqCrb27fwm4656hPYoV9ULu6Edm2%2FGyIR5RbnyVQs4vATliodx%2Fz1E2RCHDwnPKPutjavYD%2F71AmqaOK0a4RUybXP75rJA9nzU9nHxra3NyNr2IrAxlph8DsS74q7eoaCQnA2l%2B6dx07iX1%2F4Qn%2Bu0IIUkUKVTlttE5tShYRkQMRBuwlaM5QS7nKaK6NPMir1vzTmtAeSIQ7g7GvliQYnQwDlItqk%2FcU1EZjJanE0h3APGkV0YWY%2B02dAPihIGCA7ACSJqYj0zDT06LkDJrVlo8O2%2Bh38xAjgcSoArRqJTUHd3t1SHs9sHbLwRVGmNLlBweVVJr1sp9Wi9878j%2BD42%2BmRcCC7EokKBd1dy9HluWiV%2FFnfaaVLk1z42OmMS6L3kWBM5fZQleKbE06P0%2FHZbRxVhDE%2FqYXaoDX9un2RCJ%2Bx5IcBakMNGEusIGOqUBATym3z9huF27W%2FBrNLisFIuyTJHspl3Py5kj%2BX2OIp3wdRIG8S4XnAB4YNGfA27cxUIA%2FfIpEIrNVK1n8kUhGlgsHEbVedjj3oebTDLOGlIHzcxCCvtN68ZHPDSIWeO74HfXiPSPspFrVlUr%2BCBunnKAFB%2FpsCgOHOhFKhiXDRvD7Kf9q8dfCX%2FkouboL4mFqGO8q8JcJh9TOiBP9xxjc5SOTp9Y&X-Amz-Signature=55affefa0427b935220038124f56d6199fdd218efb9bfc4b05825956c48de200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7SNDRC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHfedx2kercwnCg5EFZNy6lW6pgy2ee4dBntpe7Uke5AAiEAygIfW4ok8aE8mngKtl7vbiBv7wSLA1zzoy8k2XNp8dwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDK5OHM88qfh1NW7vbyrcA9q1ZkbepXS0%2B%2Be0lauty733PIbfZMILJFRIRHBGxCANBLwbXOORh9BwQAG8SAB1o5ITyMhkcYUfX33QRszS%2FmBa6nFSivwDZaWdRcSa5IhxwMjFcSRgQFOBoGBYn1ZE%2Fn0scHfEJ3L1A2msY0MKBqazbfBydp7AeYt0x4B2aM4JbZvhMC8mnccC21O0EU24tu6iM8T2gmqCrb27fwm4656hPYoV9ULu6Edm2%2FGyIR5RbnyVQs4vATliodx%2Fz1E2RCHDwnPKPutjavYD%2F71AmqaOK0a4RUybXP75rJA9nzU9nHxra3NyNr2IrAxlph8DsS74q7eoaCQnA2l%2B6dx07iX1%2F4Qn%2Bu0IIUkUKVTlttE5tShYRkQMRBuwlaM5QS7nKaK6NPMir1vzTmtAeSIQ7g7GvliQYnQwDlItqk%2FcU1EZjJanE0h3APGkV0YWY%2B02dAPihIGCA7ACSJqYj0zDT06LkDJrVlo8O2%2Bh38xAjgcSoArRqJTUHd3t1SHs9sHbLwRVGmNLlBweVVJr1sp9Wi9878j%2BD42%2BmRcCC7EokKBd1dy9HluWiV%2FFnfaaVLk1z42OmMS6L3kWBM5fZQleKbE06P0%2FHZbRxVhDE%2FqYXaoDX9un2RCJ%2Bx5IcBakMNGEusIGOqUBATym3z9huF27W%2FBrNLisFIuyTJHspl3Py5kj%2BX2OIp3wdRIG8S4XnAB4YNGfA27cxUIA%2FfIpEIrNVK1n8kUhGlgsHEbVedjj3oebTDLOGlIHzcxCCvtN68ZHPDSIWeO74HfXiPSPspFrVlUr%2BCBunnKAFB%2FpsCgOHOhFKhiXDRvD7Kf9q8dfCX%2FkouboL4mFqGO8q8JcJh9TOiBP9xxjc5SOTp9Y&X-Amz-Signature=e3a8e815f905a587d859c6360dbbc1471a61f7a74c8f98eb1fed2f638c578694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
