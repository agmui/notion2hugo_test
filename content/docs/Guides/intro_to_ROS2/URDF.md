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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NZVCCG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDCN9pVZ%2BIPvKtCrd3QRwWk7rhYA50D1h4IiCk8iTcG%2FgIgfOJ2%2FJEcBvfeknwDvUFMPpESqCUc5K1Q5s5k1XNrIBUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIPfB72fHv%2Fo7QZjrSrcA2BAKArM%2FqQm4G%2FTBQJclhZIr1AxSguOGEtcU%2FtzKlP86LwF1W5PJRcYxgjHM0jAQotAC%2FezJVoQb%2FNLsLM89MtHrf1WrGn6MlKeVw60ptQpfN57Jec7DpBCSBCaOugRVuBeQG%2F2pNqB1KDTRwj05MY%2BL21YRrrYCFXm6OBWyrGhGFqFHc984%2FBQgnmRmUEiVZq5lP7hOOjm1dz4x35Ny%2BJWGWZU0GABYE0lj1aiRtNVcuPAXtoXSvP9iRXnXH%2BQnP%2FwU%2BxgiZgBx02Y5BHUirCm9KlXhOZAW1b8jtfO1QuqooOkGVVR8Isw57Dg8wRTQr6HSFWUv%2Fy3T8wT3v6klz%2F8Tm%2BL0S25giEblsbRjgHORSAiXweFXITErNZY5z8zMtrX4Ieo0o2ewVw4j0F0jmYNBVD%2Bh3bBPN%2BGLQ8tbR9UjGh7LsBVZozlKG5wY3k9H8CrMImfj6PsYHYjtwQSPj%2FFuBKkZlUCa0cvDUFWocE3L3D5hlF6cSQPRZcdE%2Fm7L9exX8ts0R7d1Pzj05iHccWMeYcEBl%2FphCCyUDQpDx7s%2BiKRuMuO9fi7YsyPAiE9BamwFNPG9%2BE1DMR87GfEIEdyo7q3XOS8wjkut5gN3j%2B1VXMV00wigdYvjszMMMKI%2FL0GOqUBGl5jmAIFxJKJkw1Xd0FnbqJs9mqO7qckCW3R2v29qwNeyVIaZxZwofuYNNTQM2tTnUr7Rojabbl68d%2BJQT2bVDp1ho%2Bo6TEqIomu7yLJYmoK3mV31pmTroGWKFfdgtLJYW%2BGMOAn2ba%2FyvBr7WIlp3HgYIqv5fcZYUQcxBiE%2BPtgAYNE4ALz%2FMNESZwf9y6FTAZFUtR%2FVSRRYiVcHmJEVcKCDc%2BP&X-Amz-Signature=1357b21b9de7ca2afdc61d4fb280bc951d8c4e8719c394e266165756fa64fbda&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NZVCCG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDCN9pVZ%2BIPvKtCrd3QRwWk7rhYA50D1h4IiCk8iTcG%2FgIgfOJ2%2FJEcBvfeknwDvUFMPpESqCUc5K1Q5s5k1XNrIBUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIPfB72fHv%2Fo7QZjrSrcA2BAKArM%2FqQm4G%2FTBQJclhZIr1AxSguOGEtcU%2FtzKlP86LwF1W5PJRcYxgjHM0jAQotAC%2FezJVoQb%2FNLsLM89MtHrf1WrGn6MlKeVw60ptQpfN57Jec7DpBCSBCaOugRVuBeQG%2F2pNqB1KDTRwj05MY%2BL21YRrrYCFXm6OBWyrGhGFqFHc984%2FBQgnmRmUEiVZq5lP7hOOjm1dz4x35Ny%2BJWGWZU0GABYE0lj1aiRtNVcuPAXtoXSvP9iRXnXH%2BQnP%2FwU%2BxgiZgBx02Y5BHUirCm9KlXhOZAW1b8jtfO1QuqooOkGVVR8Isw57Dg8wRTQr6HSFWUv%2Fy3T8wT3v6klz%2F8Tm%2BL0S25giEblsbRjgHORSAiXweFXITErNZY5z8zMtrX4Ieo0o2ewVw4j0F0jmYNBVD%2Bh3bBPN%2BGLQ8tbR9UjGh7LsBVZozlKG5wY3k9H8CrMImfj6PsYHYjtwQSPj%2FFuBKkZlUCa0cvDUFWocE3L3D5hlF6cSQPRZcdE%2Fm7L9exX8ts0R7d1Pzj05iHccWMeYcEBl%2FphCCyUDQpDx7s%2BiKRuMuO9fi7YsyPAiE9BamwFNPG9%2BE1DMR87GfEIEdyo7q3XOS8wjkut5gN3j%2B1VXMV00wigdYvjszMMMKI%2FL0GOqUBGl5jmAIFxJKJkw1Xd0FnbqJs9mqO7qckCW3R2v29qwNeyVIaZxZwofuYNNTQM2tTnUr7Rojabbl68d%2BJQT2bVDp1ho%2Bo6TEqIomu7yLJYmoK3mV31pmTroGWKFfdgtLJYW%2BGMOAn2ba%2FyvBr7WIlp3HgYIqv5fcZYUQcxBiE%2BPtgAYNE4ALz%2FMNESZwf9y6FTAZFUtR%2FVSRRYiVcHmJEVcKCDc%2BP&X-Amz-Signature=38d08029a4a94e1c088e859338bb7e00c56c0b85a4f3f73a92aae3d28dd07200&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
