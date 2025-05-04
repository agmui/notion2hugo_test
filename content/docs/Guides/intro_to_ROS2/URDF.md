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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USODLBWC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCq1QjvPuyUwmqCyOFaORCOaT67TdE9bF5U2nTJTg%2B0vwIhALbysxKrjWlmDCmr96QIRvHNnrWevkkOWwhIh3pokYm3Kv8DCBQQABoMNjM3NDIzMTgzODA1Igw1hYosu4dlMoITnyAq3AMJ2gHckxoA9v%2FdZQpZIDkemaFYhTI1837itN4PP7fuihMN6IedKeFwC9MES1pCYVrk3eSgSbmpiE%2B8%2F0iSwciD0nYiAgpRzVWAW%2BxVrlc5zRmi01mgmZgP10v76gejxbdnD8IAggIH%2FV1GOwk6HqChPFfea65KPu0Vt7AbCBMuPAHQcmI1P23tmvfU78dP8DZEkrZdHr73%2F8UtkKMDSzoEZDlGSdJ238W8yw8xu7Klkcvieg7iu0%2FbnVmAaZy8twjRAur1TpDD%2BlfPBr9%2BegALVdeyXzfbYPjCVs1Lr1jYz%2F4i8Vcp%2BOlBYU%2FCuBiENfr72lyKjMcef%2Fq506SFKN7NIkFXnu6Uug326PPFj2bQufpc6UrVJsaGD9qqLqqRcz4nW5eE4YDwyMV1G0XRuc4e29%2BbKwletIqM9XV5wf7IKr3vtPmUBFSMcWylO2ADARbq3bZYsXYeyqPB49F2izTR9V%2BQRDxTkNUbdv%2F%2BeaFewjyYv%2BLjPl%2BvHr89ExC6fmtGLXrZ%2FAsqr7qko76jLSmVGZAbINlheZNIwXp%2B636j%2Be0fphsVMNKyWYkjMyslOVuY0gwSowms9z4uYzSCzC0v91wxFx8YNtvEdJVe8RYModx1QJB6%2FF8ZnfxP5zCQit3ABjqkAY9ZgpHXHQi4%2B6PimAPQik2LQJI2aYjgoSTMXy7e%2FbD%2Fax0msYp5H4mrUqxSNXmuh%2BY4BEN9TpNxtUnvPnMRvbYoku0Fl7NA59WTtEIwhq6Ai53M2m2j4Laiax0G2iYOWf8B0BOjfIqCeG8LxSLfXQ3cZaMYYzF1Pwaw9s3NZSP2nUXtV3qtZDdlfxl1TevQ%2B%2FZ9MZ%2FhmebZYQLQDhrJZzkPlH0j&X-Amz-Signature=c2ac1eebc16bcfd76a9d974b71d0d298d69dcffbc06582beea148f67bc0c0eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USODLBWC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCq1QjvPuyUwmqCyOFaORCOaT67TdE9bF5U2nTJTg%2B0vwIhALbysxKrjWlmDCmr96QIRvHNnrWevkkOWwhIh3pokYm3Kv8DCBQQABoMNjM3NDIzMTgzODA1Igw1hYosu4dlMoITnyAq3AMJ2gHckxoA9v%2FdZQpZIDkemaFYhTI1837itN4PP7fuihMN6IedKeFwC9MES1pCYVrk3eSgSbmpiE%2B8%2F0iSwciD0nYiAgpRzVWAW%2BxVrlc5zRmi01mgmZgP10v76gejxbdnD8IAggIH%2FV1GOwk6HqChPFfea65KPu0Vt7AbCBMuPAHQcmI1P23tmvfU78dP8DZEkrZdHr73%2F8UtkKMDSzoEZDlGSdJ238W8yw8xu7Klkcvieg7iu0%2FbnVmAaZy8twjRAur1TpDD%2BlfPBr9%2BegALVdeyXzfbYPjCVs1Lr1jYz%2F4i8Vcp%2BOlBYU%2FCuBiENfr72lyKjMcef%2Fq506SFKN7NIkFXnu6Uug326PPFj2bQufpc6UrVJsaGD9qqLqqRcz4nW5eE4YDwyMV1G0XRuc4e29%2BbKwletIqM9XV5wf7IKr3vtPmUBFSMcWylO2ADARbq3bZYsXYeyqPB49F2izTR9V%2BQRDxTkNUbdv%2F%2BeaFewjyYv%2BLjPl%2BvHr89ExC6fmtGLXrZ%2FAsqr7qko76jLSmVGZAbINlheZNIwXp%2B636j%2Be0fphsVMNKyWYkjMyslOVuY0gwSowms9z4uYzSCzC0v91wxFx8YNtvEdJVe8RYModx1QJB6%2FF8ZnfxP5zCQit3ABjqkAY9ZgpHXHQi4%2B6PimAPQik2LQJI2aYjgoSTMXy7e%2FbD%2Fax0msYp5H4mrUqxSNXmuh%2BY4BEN9TpNxtUnvPnMRvbYoku0Fl7NA59WTtEIwhq6Ai53M2m2j4Laiax0G2iYOWf8B0BOjfIqCeG8LxSLfXQ3cZaMYYzF1Pwaw9s3NZSP2nUXtV3qtZDdlfxl1TevQ%2B%2FZ9MZ%2FhmebZYQLQDhrJZzkPlH0j&X-Amz-Signature=bcc7053ed92e67626cb675e5e392fb4499207e5590544290c73e5fd53fb75ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
