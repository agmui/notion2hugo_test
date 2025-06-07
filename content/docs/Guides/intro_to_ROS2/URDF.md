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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKOYNLBP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcA%2FhgZZoI%2FhT36gCLRPDx6sXeZs7Z8kH%2FjOxPUcu3PAiEAj9J7psDqQSjneo9aVzmlevyjZU88546LCeRGBALQNAgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF%2FO1SSgoQMikTStYSrcAw7wGAay%2Bs76uzGDdJeLk5MyBIFOB38lxIrkR1vfecj%2BA3Vo8oXVuNa2uXL95L97PcH%2FfYUl7yclI7NUHJ1WzLb8RqI7Pnye%2FGSmuL0vdomp64Tlzg4sIKvAmkfccNr9%2BdyPmjwp7gLxdWJoOwP%2BAc5f9hmf0pi0HxZyoWPssw1WBi8kIUSX%2BgpmNEWaYIRbIxyI2kvSrBayV5v5zBRSjaRcC%2B5w25wIbCKjg2uNhC1GR7ylVQF120e%2BDr0I2UAQIdAStxRbcgymZ8%2BwQJGzKs3bV8IAoMV1XYaliPafz2InUHkIIsrtOUQs5i%2FTP%2FyDFmSnDaxpCi9%2BbiuQMQu65BJALvtCdkkqJ6XMVnbOovlHpTja%2BTe8Sg%2BUsQblyjg2vJW%2BCmsR7aTMGYSFYWHX2s9LvRDfzpUN0Hcj%2BGXelKPAelMwQzY51%2FaY7tqRO7ItL%2BbRhsrhlw9%2FPqm2FtPNfeV3kfy5XHM2e1uD%2FmVVHwuy2v%2F%2BNaQucfMdf33JURXa58vOz%2F4vMLIQvV18geOvWHFyHGP58Gj%2FBdvgPv%2BYjnWq%2FaQc0BWsTYHT0nQOZxW1Np6A%2B3J%2F91jJuLB%2BxmkeciCEB%2B2kFT29qsUA7E4TYTUKU3iObHw8fATwhEilMNH6j8IGOqUBMV0ekcN01vMIjA0l3oeMWiBIlIIQ6uRr9ePvzOcaW1IIkj6EAA0PFdcYcFVLk%2BcL%2BgQyPIPauyT8ri64klln7Zsg4R95fo7oSlRhd4%2FfKY3zj9QGuCeeO6zjLszh5SL1kW%2Fdc6%2F6%2Bps17bD4U5QCXXPTk%2BMg%2Fjsh3D7G51CAF1hvrigXybgyrsz4ff4N627PnmM0neWfmg6QNIVTe1pDH2sF4I%2Fp&X-Amz-Signature=525c19209059816fe29393506dcf1ad36df812528bd8a91bb23a2d776766a841&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKOYNLBP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcA%2FhgZZoI%2FhT36gCLRPDx6sXeZs7Z8kH%2FjOxPUcu3PAiEAj9J7psDqQSjneo9aVzmlevyjZU88546LCeRGBALQNAgq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDF%2FO1SSgoQMikTStYSrcAw7wGAay%2Bs76uzGDdJeLk5MyBIFOB38lxIrkR1vfecj%2BA3Vo8oXVuNa2uXL95L97PcH%2FfYUl7yclI7NUHJ1WzLb8RqI7Pnye%2FGSmuL0vdomp64Tlzg4sIKvAmkfccNr9%2BdyPmjwp7gLxdWJoOwP%2BAc5f9hmf0pi0HxZyoWPssw1WBi8kIUSX%2BgpmNEWaYIRbIxyI2kvSrBayV5v5zBRSjaRcC%2B5w25wIbCKjg2uNhC1GR7ylVQF120e%2BDr0I2UAQIdAStxRbcgymZ8%2BwQJGzKs3bV8IAoMV1XYaliPafz2InUHkIIsrtOUQs5i%2FTP%2FyDFmSnDaxpCi9%2BbiuQMQu65BJALvtCdkkqJ6XMVnbOovlHpTja%2BTe8Sg%2BUsQblyjg2vJW%2BCmsR7aTMGYSFYWHX2s9LvRDfzpUN0Hcj%2BGXelKPAelMwQzY51%2FaY7tqRO7ItL%2BbRhsrhlw9%2FPqm2FtPNfeV3kfy5XHM2e1uD%2FmVVHwuy2v%2F%2BNaQucfMdf33JURXa58vOz%2F4vMLIQvV18geOvWHFyHGP58Gj%2FBdvgPv%2BYjnWq%2FaQc0BWsTYHT0nQOZxW1Np6A%2B3J%2F91jJuLB%2BxmkeciCEB%2B2kFT29qsUA7E4TYTUKU3iObHw8fATwhEilMNH6j8IGOqUBMV0ekcN01vMIjA0l3oeMWiBIlIIQ6uRr9ePvzOcaW1IIkj6EAA0PFdcYcFVLk%2BcL%2BgQyPIPauyT8ri64klln7Zsg4R95fo7oSlRhd4%2FfKY3zj9QGuCeeO6zjLszh5SL1kW%2Fdc6%2F6%2Bps17bD4U5QCXXPTk%2BMg%2Fjsh3D7G51CAF1hvrigXybgyrsz4ff4N627PnmM0neWfmg6QNIVTe1pDH2sF4I%2Fp&X-Amz-Signature=f4a17b9ca3f6b78aafbc7018b279d37222801cf51c6c1f5957a3631f80b7f6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
