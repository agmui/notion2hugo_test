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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXL6ZRA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDzPqsndcIHy%2FAi%2BSlWiB6SM%2BG4MBsfS2AT6WeCME0DaQIhANG2Om5PXgM0oy%2BwDs%2BWSeyWIoJAgV8mddnUxoH0dejdKv8DCGEQABoMNjM3NDIzMTgzODA1IgzPj6TYEQTrnfPo5Qcq3APbyYVxT5gjtxA6ju1hWfwofkLkRoi4gkXxyoX0T1vNPn1p7YDVH1RRkDWygnkF2ZGe8kzrkCGm%2B3BnL3%2F22mvbEJihacgbd7IM1BrABpfmPGO4hSpaDmR9sCjSI%2FEWWwW7x9JAO2EqdwNwbujCArHsImmL5VT93ciltwyhha%2BjRk%2BXI33z8TjA%2BIAdd7QAGhUQddVBMJ0X15DNEzitaAEQE%2BoqSg%2BSzPVZpRsGMBZ4ahEZ7%2BQdrVov%2B2lstpWA0E8zcKmhlo3mUDbbf4INIDJm445OD8YVvyBezvp9CbEjrrz%2BqHD0RYTAiuJVhbPHyDIDTSOhXv4wt7FepfpSiO946nOGnG0wjtXKHBTz0OSdB7xNg88H%2F0BhKzFUmTLXL9XHiStHRf4ZOv%2BDtTCvgCOMAWUNFUxL4tjrhOnh8QCQBXkDDH2z8Edq9zzoPoo%2BGS0NH0qJef6ziy7JNS6yI8Dv7PEMPr2g5ZeB%2B4Q3zlUfvReu1xoHOrzUQJGer9VTKGbGtY%2BZ1LnNkX%2FoIl8oDtNvh%2B2KA5qxWWT4S2TxWQ66OdtrEpiz%2Bdzy6q%2BmY9WgG%2BW1qqr0dZOn%2FslAvpjDCZus%2FiLk3pwC0YcZ6VGuadIHZR7Veqb2sSQMuv%2Bu9zDatOa%2BBjqkAXm0i2KBTXJx%2Bo8%2BCmp%2F4TFJZAaoQzeWXq1vYr440LXTHpwAaahy0vFIYP7zfAqumCXTZkCSw2PV8d6hF0MIOthlidzEkAWGNpbviYlWuMwdJOz97pkFXTKwYzDN8tOztFryx518tVRiWKmYv0BlRXc539C8enPWuOcItRE4uT8yrjhdkLPNdBOckcUKTjE8Lrr6irkQRF1Vwb%2FHuhlX4ncdBHun&X-Amz-Signature=340ed07312c7108452731cb2e8cfdfd9f2e9165204438d7bc4b02dd758736373&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQXL6ZRA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDzPqsndcIHy%2FAi%2BSlWiB6SM%2BG4MBsfS2AT6WeCME0DaQIhANG2Om5PXgM0oy%2BwDs%2BWSeyWIoJAgV8mddnUxoH0dejdKv8DCGEQABoMNjM3NDIzMTgzODA1IgzPj6TYEQTrnfPo5Qcq3APbyYVxT5gjtxA6ju1hWfwofkLkRoi4gkXxyoX0T1vNPn1p7YDVH1RRkDWygnkF2ZGe8kzrkCGm%2B3BnL3%2F22mvbEJihacgbd7IM1BrABpfmPGO4hSpaDmR9sCjSI%2FEWWwW7x9JAO2EqdwNwbujCArHsImmL5VT93ciltwyhha%2BjRk%2BXI33z8TjA%2BIAdd7QAGhUQddVBMJ0X15DNEzitaAEQE%2BoqSg%2BSzPVZpRsGMBZ4ahEZ7%2BQdrVov%2B2lstpWA0E8zcKmhlo3mUDbbf4INIDJm445OD8YVvyBezvp9CbEjrrz%2BqHD0RYTAiuJVhbPHyDIDTSOhXv4wt7FepfpSiO946nOGnG0wjtXKHBTz0OSdB7xNg88H%2F0BhKzFUmTLXL9XHiStHRf4ZOv%2BDtTCvgCOMAWUNFUxL4tjrhOnh8QCQBXkDDH2z8Edq9zzoPoo%2BGS0NH0qJef6ziy7JNS6yI8Dv7PEMPr2g5ZeB%2B4Q3zlUfvReu1xoHOrzUQJGer9VTKGbGtY%2BZ1LnNkX%2FoIl8oDtNvh%2B2KA5qxWWT4S2TxWQ66OdtrEpiz%2Bdzy6q%2BmY9WgG%2BW1qqr0dZOn%2FslAvpjDCZus%2FiLk3pwC0YcZ6VGuadIHZR7Veqb2sSQMuv%2Bu9zDatOa%2BBjqkAXm0i2KBTXJx%2Bo8%2BCmp%2F4TFJZAaoQzeWXq1vYr440LXTHpwAaahy0vFIYP7zfAqumCXTZkCSw2PV8d6hF0MIOthlidzEkAWGNpbviYlWuMwdJOz97pkFXTKwYzDN8tOztFryx518tVRiWKmYv0BlRXc539C8enPWuOcItRE4uT8yrjhdkLPNdBOckcUKTjE8Lrr6irkQRF1Vwb%2FHuhlX4ncdBHun&X-Amz-Signature=54a94df69e32e5111005273bdf66d822cbb1d346eb5a2658702dbde3094b2d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
