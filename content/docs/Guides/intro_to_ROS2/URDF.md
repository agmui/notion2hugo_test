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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFP5OL4G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC35oYXfrkFw5111rGSlzsDvSPfVF%2BGJssEdJZc36vx1AiEAry6Bk0KAMvUMw23HDKZ2LEoOsV2qRa6s%2F2DvuhF9bZMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3puo5BD%2BcZZPDuGircA1j3srJmncRsxwboIL8lC4A9vARg0X8w%2FX%2Bh%2FhMN8tLfiZZR4x28YTQmjVDSd%2FKB2%2FBkhlbIfG85%2B9nvZsg%2FU2Dfadns9yOhytB%2BJw%2BoTsRdkWkEondltu3uwOtcNtn1jQTqHlQ59PEyfqi3H5YMAwXvZKij2yX5KHfucq3vngYGO%2BY9rUGIt1zElLCiSc4GrJJGpogSEzRXuN9ffjKAbBATjdOyvcHesrvHr7GwI%2BjlH7mGXEqQ4IUSoUwWsfk%2Fg4ecG6n%2Bp8IhaFT7eb9O1mQuzb8ShbJ%2B6Ec4%2F%2BceDvINZNLWs9fLBj2VSwE5VeF9PIbvL1VQJamp1FVvpkYFf3Rms8Jcr0Fjta0TQT%2FMB5E3pi8Xb8x9GleCj5JITctAteu2E3Qyu3nEDC49dftxYKZVXiLqcL0toudgPL4SUxVpXsjGS57Vh7uqRVbjNyiHuSUlDodh6NV20DYLl04nZa8FNb8OlHLkix24FrCxGTueCtxD6FCR9yv4ae1kmmJGbWHueaYYtcXZsAIC%2FcpJ2kUNKe2VuQ5ZOKiNzef%2BgG8R%2Fym27KfJvfEcQLxBKAR7xujNpkiE6yoA8KMf7PxdbWGRypqEvEo%2BTmcGkH4rMew9Zlk4mPdH8j7wuAawMKGp0sAGOqUBxeKFhAuvdzBlza1ZozkhAvYeUmEduMDdEiPPiWYwuJltFvDF7a69gN0JMSCn9xYDuAXbceDUb8nb3t8dk%2BD%2BR0RO0nBqDUEksFfAQlEUt4aeJYsdjgrha2x2xmTybJE9%2F5%2FI529zCz0UlPJJifAgvRXq3JaAu8tMKsgjnbu5d4j4ST9KSfOCfaekZ5X%2BnOUdIe7xixruFcqVbKQm8OoS5C1eW9Fv&X-Amz-Signature=7e2ba207b0852cd6df7bd81cc2fcd13f56ec34a69c083b5a7ac6c701dd280542&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFP5OL4G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC35oYXfrkFw5111rGSlzsDvSPfVF%2BGJssEdJZc36vx1AiEAry6Bk0KAMvUMw23HDKZ2LEoOsV2qRa6s%2F2DvuhF9bZMqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3puo5BD%2BcZZPDuGircA1j3srJmncRsxwboIL8lC4A9vARg0X8w%2FX%2Bh%2FhMN8tLfiZZR4x28YTQmjVDSd%2FKB2%2FBkhlbIfG85%2B9nvZsg%2FU2Dfadns9yOhytB%2BJw%2BoTsRdkWkEondltu3uwOtcNtn1jQTqHlQ59PEyfqi3H5YMAwXvZKij2yX5KHfucq3vngYGO%2BY9rUGIt1zElLCiSc4GrJJGpogSEzRXuN9ffjKAbBATjdOyvcHesrvHr7GwI%2BjlH7mGXEqQ4IUSoUwWsfk%2Fg4ecG6n%2Bp8IhaFT7eb9O1mQuzb8ShbJ%2B6Ec4%2F%2BceDvINZNLWs9fLBj2VSwE5VeF9PIbvL1VQJamp1FVvpkYFf3Rms8Jcr0Fjta0TQT%2FMB5E3pi8Xb8x9GleCj5JITctAteu2E3Qyu3nEDC49dftxYKZVXiLqcL0toudgPL4SUxVpXsjGS57Vh7uqRVbjNyiHuSUlDodh6NV20DYLl04nZa8FNb8OlHLkix24FrCxGTueCtxD6FCR9yv4ae1kmmJGbWHueaYYtcXZsAIC%2FcpJ2kUNKe2VuQ5ZOKiNzef%2BgG8R%2Fym27KfJvfEcQLxBKAR7xujNpkiE6yoA8KMf7PxdbWGRypqEvEo%2BTmcGkH4rMew9Zlk4mPdH8j7wuAawMKGp0sAGOqUBxeKFhAuvdzBlza1ZozkhAvYeUmEduMDdEiPPiWYwuJltFvDF7a69gN0JMSCn9xYDuAXbceDUb8nb3t8dk%2BD%2BR0RO0nBqDUEksFfAQlEUt4aeJYsdjgrha2x2xmTybJE9%2F5%2FI529zCz0UlPJJifAgvRXq3JaAu8tMKsgjnbu5d4j4ST9KSfOCfaekZ5X%2BnOUdIe7xixruFcqVbKQm8OoS5C1eW9Fv&X-Amz-Signature=ad8121226005802e17659f69b5dc8e64a7c222d435b1eb703bb6bf467573f0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
