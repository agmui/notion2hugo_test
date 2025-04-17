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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THF5UWYR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye7epLBBIllECkyy824SDy4CesQiuq1Xo8aWiKTliDwIgZMcV8IJ30V%2B%2Bml%2BX5wYLRYmm96chaOuYBdeq107qm20q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC04DypRiZ0xV%2BFGqircA5Qu6eElIdO%2BG6d4ISHvphXbD0qXyFbJn4XAnLPRl2O6u5RBk5jRowzOjYDjqcTN9bPPAW%2FVcTFLwGqMXV0FtuKdFUwdvTw%2FVg%2BSrbn0ATcsOAT0pYOe2U2QN64W9W6nd3BnCoJ2Xr7KF6eTMCnLmesW0xwl3mkQ5bWYKqU9vrhaOvtVAOaGTDpeIREzeZrpr0j6qkHE4hFTn8BPVaBHOwlLw8%2FizcK4VspJ2IwDj6yYtZJPe6vDF5iwVWsNp9%2B13y43vZg7GsoihH1qRjtyXRVR0L0fpehbZTh3aqsCw8A%2F7P6L3nrASicOhwlO8EEswO5RFxqVVlwfHUqo46ADNPmdhTyVigpZSb0o5Buh%2BJUg0do5jk02nUzrRi70JHFxIfSJlA6SbjbTbn9d9M2TsXgOLGxrRnAlYlqI%2FJdFk2y%2BDQ%2FInDg%2FPcVoGRMBoH12rpj2NMEhtwt3t%2Bu6E3yh%2BBl7yN5uNGqPOQcSdCC4AiqVl7rPTG47EmoO9GYN769%2BhPbayqH8z8ye8UzBzMf%2BSN0HRY0UGBj5zCU5OlFCnCsBxOlNIOid7IReNN79FPqcYhFK5PfH4K9CL6qOXPUtO%2FLGbErTzopeek%2FxFL%2BvSmC8rAZgCL5QHJRRgY1LMNmUg8AGOqUBUxaMZe7jxuVfdm11YiH%2Fs4Ej64D%2F0enA%2FSz50MgTH4bGTBGSGaaw1gHy5kpUDlPjazGvdrC8yPb%2FZ%2Fg88qiC2SvM8fHG4WWYlKCH8ibyCvQMttjFCeXctqp7vf0kdtYeRn8q3VyTJdkaJcTc1jXY1CQLxoyKQyGKS0%2BD5LYFXq2I2IUZQ8w%2FA1WiKa1wTLfdLeNybf%2BIjnw2USvJWGpvQ9ZDs8UO&X-Amz-Signature=8e120d9bc65e071980d5b3b4c6f3fe88ee8084e396a627e8f6046117eb980250&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THF5UWYR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDye7epLBBIllECkyy824SDy4CesQiuq1Xo8aWiKTliDwIgZMcV8IJ30V%2B%2Bml%2BX5wYLRYmm96chaOuYBdeq107qm20q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC04DypRiZ0xV%2BFGqircA5Qu6eElIdO%2BG6d4ISHvphXbD0qXyFbJn4XAnLPRl2O6u5RBk5jRowzOjYDjqcTN9bPPAW%2FVcTFLwGqMXV0FtuKdFUwdvTw%2FVg%2BSrbn0ATcsOAT0pYOe2U2QN64W9W6nd3BnCoJ2Xr7KF6eTMCnLmesW0xwl3mkQ5bWYKqU9vrhaOvtVAOaGTDpeIREzeZrpr0j6qkHE4hFTn8BPVaBHOwlLw8%2FizcK4VspJ2IwDj6yYtZJPe6vDF5iwVWsNp9%2B13y43vZg7GsoihH1qRjtyXRVR0L0fpehbZTh3aqsCw8A%2F7P6L3nrASicOhwlO8EEswO5RFxqVVlwfHUqo46ADNPmdhTyVigpZSb0o5Buh%2BJUg0do5jk02nUzrRi70JHFxIfSJlA6SbjbTbn9d9M2TsXgOLGxrRnAlYlqI%2FJdFk2y%2BDQ%2FInDg%2FPcVoGRMBoH12rpj2NMEhtwt3t%2Bu6E3yh%2BBl7yN5uNGqPOQcSdCC4AiqVl7rPTG47EmoO9GYN769%2BhPbayqH8z8ye8UzBzMf%2BSN0HRY0UGBj5zCU5OlFCnCsBxOlNIOid7IReNN79FPqcYhFK5PfH4K9CL6qOXPUtO%2FLGbErTzopeek%2FxFL%2BvSmC8rAZgCL5QHJRRgY1LMNmUg8AGOqUBUxaMZe7jxuVfdm11YiH%2Fs4Ej64D%2F0enA%2FSz50MgTH4bGTBGSGaaw1gHy5kpUDlPjazGvdrC8yPb%2FZ%2Fg88qiC2SvM8fHG4WWYlKCH8ibyCvQMttjFCeXctqp7vf0kdtYeRn8q3VyTJdkaJcTc1jXY1CQLxoyKQyGKS0%2BD5LYFXq2I2IUZQ8w%2FA1WiKa1wTLfdLeNybf%2BIjnw2USvJWGpvQ9ZDs8UO&X-Amz-Signature=266bc553a3548e4336725f1d16a39b14c48f0c0ed43986218ea3723424be996e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
