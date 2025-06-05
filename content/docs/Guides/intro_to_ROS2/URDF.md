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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VV4N3H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIG4xeRWyPPmdi7OAMqTTOeuB5T5Y0S6%2FTBbGDoDCLdT%2FAiEAyn9shsqpF8vUVimSxXQM7lrxMOQqlOxtTzMpC4GJu%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJLf8vMVWyS369RlFCrcAzh9uYe1Y0ljsZP2hjhFQUIJl%2BFNvEE0%2BiG75FECluLcH%2BaMNwZUZe5OGEIxz4LXynTJ6zQqWscPLp1e%2BPQjfg41uWVx5%2BOUfM2Op2x0zYBLerH75dMaMtHy2MqyIuWwrY1NPtbcmL1eDqNCXcFnFi1EGTSXteUsBTCDCYy4aX6A30M%2B35t2YSJCXPDci%2F2fmAgqFZCseS2GlhsI06fDZU5siIIZ7Iz4CkvOU8%2FahfgF%2BVWeiIwNLQtRRhqserACEkTOidCkFKYBzePzLD4KpUtY5FPeC62K%2FXKXPFgyW%2Bt7Rp3Z61HYqc5yJx0A7cfM2%2Fo7zm%2B3f8sVyF3WcfKCiVb%2BrnAlhwSFGEmERxUObJzf0X3ltfSsIbb3JR2TDSLXIxbNLTYh3hBD1O74mW6oU5MHZiIvbOIeTFiSk7%2Fh7VL%2FmiYs%2FLADuByePcost9ci8%2BvhtDbFTPiaprMEv%2FA0ICC%2BfIXeThih60nl1mqvQ2ZRXLnN3RiJDthzzqT7Af0yzwmsYf4hzSTY7UNoOTX0O6h%2Ba9WVTOQeRsqeUNAwNp89ZMalO%2Bbh7qMmpAJw9X2YDt3zm3vaSuG75UNaU5USOhddM1Wq2sMEmmdzjBK4%2FMPES8Ps5GtjPELtfxcGMOGuhcIGOqUBVESRw6qVDvrCRoOXfc1AcER28hCu08EQ%2BUZxzlk9Qz5eRF2dOe5KSaVFPfEoiikEGSIEfBBfSeLQb2RI00S8jJhMrH1scPHVW22e%2Fc%2FFRPjeSGIoayIiQ9n%2B7E3OIcKc13KCQiRRsRbllESxyjPpmOqHYqgDvEcTPSfGpIa6f3rEtSnLHsZaVxGPT%2BLZs6NcC%2B69tix0ysuIC63ToIhAsrgkaboG&X-Amz-Signature=fecebb198ccf5f534601f73a2e04ccfab084b294b4bb720b2e19aae48e3d792b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646VV4N3H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIG4xeRWyPPmdi7OAMqTTOeuB5T5Y0S6%2FTBbGDoDCLdT%2FAiEAyn9shsqpF8vUVimSxXQM7lrxMOQqlOxtTzMpC4GJu%2Bwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJLf8vMVWyS369RlFCrcAzh9uYe1Y0ljsZP2hjhFQUIJl%2BFNvEE0%2BiG75FECluLcH%2BaMNwZUZe5OGEIxz4LXynTJ6zQqWscPLp1e%2BPQjfg41uWVx5%2BOUfM2Op2x0zYBLerH75dMaMtHy2MqyIuWwrY1NPtbcmL1eDqNCXcFnFi1EGTSXteUsBTCDCYy4aX6A30M%2B35t2YSJCXPDci%2F2fmAgqFZCseS2GlhsI06fDZU5siIIZ7Iz4CkvOU8%2FahfgF%2BVWeiIwNLQtRRhqserACEkTOidCkFKYBzePzLD4KpUtY5FPeC62K%2FXKXPFgyW%2Bt7Rp3Z61HYqc5yJx0A7cfM2%2Fo7zm%2B3f8sVyF3WcfKCiVb%2BrnAlhwSFGEmERxUObJzf0X3ltfSsIbb3JR2TDSLXIxbNLTYh3hBD1O74mW6oU5MHZiIvbOIeTFiSk7%2Fh7VL%2FmiYs%2FLADuByePcost9ci8%2BvhtDbFTPiaprMEv%2FA0ICC%2BfIXeThih60nl1mqvQ2ZRXLnN3RiJDthzzqT7Af0yzwmsYf4hzSTY7UNoOTX0O6h%2Ba9WVTOQeRsqeUNAwNp89ZMalO%2Bbh7qMmpAJw9X2YDt3zm3vaSuG75UNaU5USOhddM1Wq2sMEmmdzjBK4%2FMPES8Ps5GtjPELtfxcGMOGuhcIGOqUBVESRw6qVDvrCRoOXfc1AcER28hCu08EQ%2BUZxzlk9Qz5eRF2dOe5KSaVFPfEoiikEGSIEfBBfSeLQb2RI00S8jJhMrH1scPHVW22e%2Fc%2FFRPjeSGIoayIiQ9n%2B7E3OIcKc13KCQiRRsRbllESxyjPpmOqHYqgDvEcTPSfGpIa6f3rEtSnLHsZaVxGPT%2BLZs6NcC%2B69tix0ysuIC63ToIhAsrgkaboG&X-Amz-Signature=79dd69e4fd14a1fc6af1246727c21a89e0b12220f04bca8891e7b1f06835fc71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
