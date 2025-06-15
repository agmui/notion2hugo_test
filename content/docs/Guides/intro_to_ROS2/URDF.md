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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDL3RGR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDx84iTuPgY0gCL7jE1rB9kpaw241FIUVpeY7bJRsRTVQIgLCFdXVFx9T7dTcLngGVosz73tkX%2BRdiFcHNAKIFRSa4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPVuVTPFiLWeO3xR0CrcAyVFHnrIlhqSxKAR4CCyCwtTk8tnChsjpZQYH8TtmylExtCpPCSVQfa9ksh3swHyimdU7%2B%2FDUTGZTiLbsPGZx4d0SAYN3oauGshAC1xXtcL%2Bv4ABsH9RdCszPSxwO8hQ4iHF%2BtTbQK8Vy5TAtisqxjTgXRZffRvCSgdek1wU4uQiC5SbTC%2BBvc79I6MOPf5cgq3%2FNKi%2FsgA3dsboe%2FkErOx4D6nG4%2ByI4%2Bmw4oyZ8c1XgLrgsGLfECc3%2F1S1yRXGJ5zZJrdo7wP6NRJ8sTzqj89dJFBj1GjeZKkn6i1J61tb1EDtj7HMTcnu58DlbE8%2F6bQw3aMK1dpNI6DhRxPq0jePXf1KlLancsCFJsEruERkkRHecYFWf2mwgkp%2FYvGi%2B2E2%2FVNnTSgvspdFIbcljI5CZvPwCaoxJUd3QiAEEClbSRTh9wRJo9hyJ8%2BTT84Oj1MgXLJzZD8tAOGnYkvL2PbrgZholKaZ2pA3DjKHovRttA%2BzjnDKmkos7KluJfj2TnPpghmV5KiDJrxG9nNCB0x5l7AGe0RN9gUscuD639pMj0JUzNajUzgjH%2Fm%2FoXBZzACeqFT8cIhwxblWXLWWfhrie8N4Tf0JEVuh6iCQxrg%2FyV2UmanXhaHKs8rqMKqtucIGOqUBVQCWz4tHwEPTbGxgoHzTW30%2Bl3eAtE0WlH8fhQ1L869YPOPmxwklJB%2FbaVYoIbDIH8PqVi61niCoisl6kncT7j%2FdRWVOLBkFv3y9FMh6LC9Czh7MEA8YlgZtgO7v7ZiJxoAvGpqxlXiqjmRri6kiZ8qGLHDjh%2Fc6dY%2BekelogW33b2Iz2tUR6azx3b7ev2Q7Iq0YOdeqNlqw%2FSQKDPi%2FWpObAD4s&X-Amz-Signature=eee70b93c3430fd3f171111a75a07b5703b16327d3579c149113eaee559c068a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWDL3RGR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDx84iTuPgY0gCL7jE1rB9kpaw241FIUVpeY7bJRsRTVQIgLCFdXVFx9T7dTcLngGVosz73tkX%2BRdiFcHNAKIFRSa4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPVuVTPFiLWeO3xR0CrcAyVFHnrIlhqSxKAR4CCyCwtTk8tnChsjpZQYH8TtmylExtCpPCSVQfa9ksh3swHyimdU7%2B%2FDUTGZTiLbsPGZx4d0SAYN3oauGshAC1xXtcL%2Bv4ABsH9RdCszPSxwO8hQ4iHF%2BtTbQK8Vy5TAtisqxjTgXRZffRvCSgdek1wU4uQiC5SbTC%2BBvc79I6MOPf5cgq3%2FNKi%2FsgA3dsboe%2FkErOx4D6nG4%2ByI4%2Bmw4oyZ8c1XgLrgsGLfECc3%2F1S1yRXGJ5zZJrdo7wP6NRJ8sTzqj89dJFBj1GjeZKkn6i1J61tb1EDtj7HMTcnu58DlbE8%2F6bQw3aMK1dpNI6DhRxPq0jePXf1KlLancsCFJsEruERkkRHecYFWf2mwgkp%2FYvGi%2B2E2%2FVNnTSgvspdFIbcljI5CZvPwCaoxJUd3QiAEEClbSRTh9wRJo9hyJ8%2BTT84Oj1MgXLJzZD8tAOGnYkvL2PbrgZholKaZ2pA3DjKHovRttA%2BzjnDKmkos7KluJfj2TnPpghmV5KiDJrxG9nNCB0x5l7AGe0RN9gUscuD639pMj0JUzNajUzgjH%2Fm%2FoXBZzACeqFT8cIhwxblWXLWWfhrie8N4Tf0JEVuh6iCQxrg%2FyV2UmanXhaHKs8rqMKqtucIGOqUBVQCWz4tHwEPTbGxgoHzTW30%2Bl3eAtE0WlH8fhQ1L869YPOPmxwklJB%2FbaVYoIbDIH8PqVi61niCoisl6kncT7j%2FdRWVOLBkFv3y9FMh6LC9Czh7MEA8YlgZtgO7v7ZiJxoAvGpqxlXiqjmRri6kiZ8qGLHDjh%2Fc6dY%2BekelogW33b2Iz2tUR6azx3b7ev2Q7Iq0YOdeqNlqw%2FSQKDPi%2FWpObAD4s&X-Amz-Signature=52a19ffaec6fd790b76b0bc67bb40cc4f5e9456f74ee2bdbd9e34a4e01050637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
