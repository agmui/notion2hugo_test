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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSLOKBQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqV7GohmKyWT%2B3huvX5R9DB%2FDD6R167tcnN1SVyiWg%2BAiEAoYUvoC4djDBJzwASKhUBL9wQC%2B5SauEeWGhB6ARpWDEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYuEQWigMYHTUVlXCrcA6qow0ism4l94aFjeuCe4zn25f%2B%2BW7QAcIGqZtfQt%2B1VdBe6wp26z%2BtR5fMocCbg2xjoKoBx0uQqaVFSDKL%2Bdizr%2BomO3L8QUkFqeoQ9hfXxHLYSkWEW3Kw6OzwaJPoF4LZCJiXbnldYrSDOGytzqQ9T5P4ynHmsO6spNNlu%2F3xQIluLE%2FeH%2ByNmNt7sTn52rl99AZjANV27%2B%2BE94PACRgJnkJB5k96DMEzzCV5HbUg5feRrMqgL6K%2BAiP35cdxInNFnMFBD09FjkfL%2FKCqRMAPCvvvhTOzepiKisqbePCqGSO1TjilGA0Dec6lVQjM6P6OTwN56gT%2FW3xqo%2BRZM9TGwFrSrR2zwLxJHpM32uSHqpdCfudI%2FmGn%2F35M%2F3G69lIVtDmx6WEQhHYH%2BGwFm6ipEBqdjUEvf8dYF1qZTLXH1CkK3J8CsCJO3jfn3L2SscAoW%2FCl0VQfHgHZ8%2B3%2F8Ru5gO3%2FQ4RRHB1mEJhplawGb5bx7KtJLh47O%2F02q4ThvZHLgL%2B184Y0w3zAKFlZvcCTS2E3Rix1%2FbLB5PzU2ApQrZnXoYBWmzg7yUeydfxRRdR5YT%2Bl36rHtkvKsrK8NteCFcb8oENSAEs7uRNEKiuZe716ZIO0IMzGEDP4VMP2PtcEGOqUB%2Bm1VqWO%2Bpw7bhvzfBggs1BO9W0r25s7CnZBI8n8sHvBxEJwfe18vxgYTq1Ts5sza1h04407V3Mrompm6HNmSJyj1MKo0Nk4IxlyT%2BWVc6rxSJbMsKqxRjYbYQm4XHXgxac6%2BIF4XJZyrl5y%2F1Ml%2BpOPMcajLm8qphkACsW%2FNLUoPa3%2F3mxmfOcQ0APEczTUZjhMcu6mSHH8%2BoFzaCHf71mAzEeEJ&X-Amz-Signature=382f0bb7be06f67c53dad94ac4dd0a9c87fc31810f18118b092b896d99c3ee56&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSLOKBQ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqV7GohmKyWT%2B3huvX5R9DB%2FDD6R167tcnN1SVyiWg%2BAiEAoYUvoC4djDBJzwASKhUBL9wQC%2B5SauEeWGhB6ARpWDEqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYuEQWigMYHTUVlXCrcA6qow0ism4l94aFjeuCe4zn25f%2B%2BW7QAcIGqZtfQt%2B1VdBe6wp26z%2BtR5fMocCbg2xjoKoBx0uQqaVFSDKL%2Bdizr%2BomO3L8QUkFqeoQ9hfXxHLYSkWEW3Kw6OzwaJPoF4LZCJiXbnldYrSDOGytzqQ9T5P4ynHmsO6spNNlu%2F3xQIluLE%2FeH%2ByNmNt7sTn52rl99AZjANV27%2B%2BE94PACRgJnkJB5k96DMEzzCV5HbUg5feRrMqgL6K%2BAiP35cdxInNFnMFBD09FjkfL%2FKCqRMAPCvvvhTOzepiKisqbePCqGSO1TjilGA0Dec6lVQjM6P6OTwN56gT%2FW3xqo%2BRZM9TGwFrSrR2zwLxJHpM32uSHqpdCfudI%2FmGn%2F35M%2F3G69lIVtDmx6WEQhHYH%2BGwFm6ipEBqdjUEvf8dYF1qZTLXH1CkK3J8CsCJO3jfn3L2SscAoW%2FCl0VQfHgHZ8%2B3%2F8Ru5gO3%2FQ4RRHB1mEJhplawGb5bx7KtJLh47O%2F02q4ThvZHLgL%2B184Y0w3zAKFlZvcCTS2E3Rix1%2FbLB5PzU2ApQrZnXoYBWmzg7yUeydfxRRdR5YT%2Bl36rHtkvKsrK8NteCFcb8oENSAEs7uRNEKiuZe716ZIO0IMzGEDP4VMP2PtcEGOqUB%2Bm1VqWO%2Bpw7bhvzfBggs1BO9W0r25s7CnZBI8n8sHvBxEJwfe18vxgYTq1Ts5sza1h04407V3Mrompm6HNmSJyj1MKo0Nk4IxlyT%2BWVc6rxSJbMsKqxRjYbYQm4XHXgxac6%2BIF4XJZyrl5y%2F1Ml%2BpOPMcajLm8qphkACsW%2FNLUoPa3%2F3mxmfOcQ0APEczTUZjhMcu6mSHH8%2BoFzaCHf71mAzEeEJ&X-Amz-Signature=32f441d2f870623bbc990d8339384bf6b5f800b5b60c1006ed8bb40a72c01a55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
