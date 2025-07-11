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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YAYSO5W%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8c4VbZsABjWP8gn%2BOyWNxe9MEeOMjujk9k8XvOxxIAIgC8rvG2xi%2FOAApuCY%2Fr6U5ICoGI5U%2Ff%2Bt0HfAY1Qb1YIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1e9kGRbhhUVojBRyrcA903l0VGk9PBW3%2FeSeLezyqw6HM5dDrwyKBwMbO38edTJm5Vu9Xvug%2B1cyXWHqDpdVrCk34adKT1i1EmyMmKVupQ5fH3hA7Kb9HtkFughp%2Bi%2BhmWG%2FhDYO5O5EVUzc3k%2BOgmliWa6E9yz0naScJmTjmTJqNfIADCf731oG6He0PbAKqpkVYQ%2Bj%2F2TH7oDlCfTe8X2vVmfNKXzSsVMMgzSHfPPm%2FArfh%2F8F2nJmwW9gWHO16IVZRPDk2eTa7eyIJedsvqxHx%2FNffI16MSIxifdTBEXrzXGzaly6wn2xYZZzFgIHgEYpbDoId7gyscull%2Bb212LQekvdaWpHVXkz%2Ff5gIQndd0%2FW6AIDlHqhI9xNJAzVuIJNNn%2BcvcICw4wjqkNCNxW2Vzm7xbsCWcSxhHwEL7IoXh2AUsuJyd7FYju7fzcZBSlXiGDtRkK7LcizwBKo2eKLqfqwekkNlrwTrUsJodjv48CpM6PM5NPidK2V4D%2FJIDj6alzs6VOJHUC%2Fr79kz1YJhf%2BVIZzxofFUsWKtv%2F1E%2FAEXlK1km00K4IhO6yq64zMmBrDJqt8J%2B%2FmRJiz9J4a8bo1yZGpnignd9%2Fi%2ByI9G0vclNgsZLieVgYMYt%2FKADqsQ%2BE%2FeN5%2FBYRMKLTwsMGOqUBPMSrtttg6jCN3W99k7s%2Br9%2FNhAXK56cZ8BQbS5GzPcSAGd6GPUZ6LdLexu5FdysRN94umIJhnF3eMU0Sp2Eak6RNsGDe6TE6SanBfBl7uDCMgmmmQKYFrO%2BW0kdOrhnPi9%2Fu56%2BfW%2BYyj5445mAvoe%2FCKeGgW13QdqNvOWMMqKi0qhZORJX8q3HdpNFasgXP6wx%2Fc6ZDsubpj%2F2OhcQ853XQhEZu&X-Amz-Signature=e9e71ac5ca5a7881230f9654e99f34c3d15322c9d65c4d651804f7d67fb46f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YAYSO5W%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD8c4VbZsABjWP8gn%2BOyWNxe9MEeOMjujk9k8XvOxxIAIgC8rvG2xi%2FOAApuCY%2Fr6U5ICoGI5U%2Ff%2Bt0HfAY1Qb1YIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1e9kGRbhhUVojBRyrcA903l0VGk9PBW3%2FeSeLezyqw6HM5dDrwyKBwMbO38edTJm5Vu9Xvug%2B1cyXWHqDpdVrCk34adKT1i1EmyMmKVupQ5fH3hA7Kb9HtkFughp%2Bi%2BhmWG%2FhDYO5O5EVUzc3k%2BOgmliWa6E9yz0naScJmTjmTJqNfIADCf731oG6He0PbAKqpkVYQ%2Bj%2F2TH7oDlCfTe8X2vVmfNKXzSsVMMgzSHfPPm%2FArfh%2F8F2nJmwW9gWHO16IVZRPDk2eTa7eyIJedsvqxHx%2FNffI16MSIxifdTBEXrzXGzaly6wn2xYZZzFgIHgEYpbDoId7gyscull%2Bb212LQekvdaWpHVXkz%2Ff5gIQndd0%2FW6AIDlHqhI9xNJAzVuIJNNn%2BcvcICw4wjqkNCNxW2Vzm7xbsCWcSxhHwEL7IoXh2AUsuJyd7FYju7fzcZBSlXiGDtRkK7LcizwBKo2eKLqfqwekkNlrwTrUsJodjv48CpM6PM5NPidK2V4D%2FJIDj6alzs6VOJHUC%2Fr79kz1YJhf%2BVIZzxofFUsWKtv%2F1E%2FAEXlK1km00K4IhO6yq64zMmBrDJqt8J%2B%2FmRJiz9J4a8bo1yZGpnignd9%2Fi%2ByI9G0vclNgsZLieVgYMYt%2FKADqsQ%2BE%2FeN5%2FBYRMKLTwsMGOqUBPMSrtttg6jCN3W99k7s%2Br9%2FNhAXK56cZ8BQbS5GzPcSAGd6GPUZ6LdLexu5FdysRN94umIJhnF3eMU0Sp2Eak6RNsGDe6TE6SanBfBl7uDCMgmmmQKYFrO%2BW0kdOrhnPi9%2Fu56%2BfW%2BYyj5445mAvoe%2FCKeGgW13QdqNvOWMMqKi0qhZORJX8q3HdpNFasgXP6wx%2Fc6ZDsubpj%2F2OhcQ853XQhEZu&X-Amz-Signature=5452fbe6e1c3e03bf6d61b28c98b066ab5e3cf6f6039986044c7b9cf4e3c1901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
