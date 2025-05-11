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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VV36OR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICftNunWnlP5%2B3bTKD1QQWDLwueym7DHhz7PfGfRRNbfAiEA2mHJTYAKe6jLp2OyJfZzr6yLOrPIfJPMwamkmMdsdmsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSCG8tbX19%2Frb7ulyrcA6yTyesCVvIlV0aL%2Bblc7TVtHWjfipHCcZ%2BTdaqsoyxL81DTW590QbTXk8R33dQh8oC%2Fx92xoSCJjNk5IMwhrzSERmrm8YkcmSu03nk5w4bEXwQJIFOn8RxvnLPZ87JCR2LsSnuQ798obw8PVI13jh3EGmDTP5rGb2shPBeHnVBWvUIbRWIWzEIqKgZdmwxG1K2Ci%2BzBg%2FRURxALpP%2B6fWbP%2BtyqAY1F4HQz7NEKhZcGPhKupHOpS0G290doig1I4nGuAu5K0HCwE%2BC3skRx7TUmfDg%2B3KQc4AQQA2sG4eyD1x34OuHBtWM2tSchHTioKLW5Amdo3EaCeZihRKDriZjLWkkKIJq0NAExVjjENmhv5gzv88kImkZSqdQaysDZvKKZ5maygJpcgtSE%2BIMuKoGpWC255HcVeyzVeSqLWEYf17UoaXZWfUuPf3pMab2ywDSGThwVjlKep99rVMyI%2Bta2MY7Ow6Hd68QDMrHYSuod7toRcrEIo5dgN2FPozENMJCHz1VSHi2gLsRmVrN0NuOcEoHc6JwaTrPwzvJ1atM%2FXSy0OqDGYMqArXPcTD3xfdzziP%2F9V7UMMLuxI%2FqaWgZUVXZr6tnT5efmXX3KOhGaGCT1y%2FWrtNWBu12FMLTegMEGOqUBKO9r74Piz9x5vAcgGUW%2B2OSuOIq%2BaLCtA1KCiiLFclT2T9TWOIvi8Q4PIrYa8zt%2B5jfjytpCNWM7kRi%2BVTWnH%2FeNLBiqiWqQ2yMimvleGYVW6DSghfP7edJM28om755BEvQyXdjyaNhy46rIeVWHzfZp9uQ%2BSuL819hhOMLEURiEIP29Q6g0U7d5r3dHmRktdRhn2PxdpkV0a02sSKCPBOkuydnz&X-Amz-Signature=f010432fcd83805faa81290421e95d2be2f7cc0ddc7f34358e5088b132d67807&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VV36OR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICftNunWnlP5%2B3bTKD1QQWDLwueym7DHhz7PfGfRRNbfAiEA2mHJTYAKe6jLp2OyJfZzr6yLOrPIfJPMwamkmMdsdmsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSCG8tbX19%2Frb7ulyrcA6yTyesCVvIlV0aL%2Bblc7TVtHWjfipHCcZ%2BTdaqsoyxL81DTW590QbTXk8R33dQh8oC%2Fx92xoSCJjNk5IMwhrzSERmrm8YkcmSu03nk5w4bEXwQJIFOn8RxvnLPZ87JCR2LsSnuQ798obw8PVI13jh3EGmDTP5rGb2shPBeHnVBWvUIbRWIWzEIqKgZdmwxG1K2Ci%2BzBg%2FRURxALpP%2B6fWbP%2BtyqAY1F4HQz7NEKhZcGPhKupHOpS0G290doig1I4nGuAu5K0HCwE%2BC3skRx7TUmfDg%2B3KQc4AQQA2sG4eyD1x34OuHBtWM2tSchHTioKLW5Amdo3EaCeZihRKDriZjLWkkKIJq0NAExVjjENmhv5gzv88kImkZSqdQaysDZvKKZ5maygJpcgtSE%2BIMuKoGpWC255HcVeyzVeSqLWEYf17UoaXZWfUuPf3pMab2ywDSGThwVjlKep99rVMyI%2Bta2MY7Ow6Hd68QDMrHYSuod7toRcrEIo5dgN2FPozENMJCHz1VSHi2gLsRmVrN0NuOcEoHc6JwaTrPwzvJ1atM%2FXSy0OqDGYMqArXPcTD3xfdzziP%2F9V7UMMLuxI%2FqaWgZUVXZr6tnT5efmXX3KOhGaGCT1y%2FWrtNWBu12FMLTegMEGOqUBKO9r74Piz9x5vAcgGUW%2B2OSuOIq%2BaLCtA1KCiiLFclT2T9TWOIvi8Q4PIrYa8zt%2B5jfjytpCNWM7kRi%2BVTWnH%2FeNLBiqiWqQ2yMimvleGYVW6DSghfP7edJM28om755BEvQyXdjyaNhy46rIeVWHzfZp9uQ%2BSuL819hhOMLEURiEIP29Q6g0U7d5r3dHmRktdRhn2PxdpkV0a02sSKCPBOkuydnz&X-Amz-Signature=e631a49347e1ad26b35a369d40366ac4fbb5d5094464b834c7182281733ebcc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
