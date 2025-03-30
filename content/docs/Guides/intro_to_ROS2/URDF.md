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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEOPSFU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCy%2F%2FVD7J3BFD%2BmpQw8Hc6HpP%2Bfme1XhJUw6jWsb2SeigIgLs18Vt0GdhVOgJjvKzj6jbXdS7RQv2xG%2Bog7PWLIIW8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsfivBb23dK3buRHircA1k3SB2gqW%2BIR%2BzrmtAoytV1BluUlOmc3CYjk2Idoa2utJMqdjRx060SI%2B9vtca2XPEZNq68s1m5NimpcX5oESAoKAx519WGYAQRtvj0grriYDJlY1A7PZhOsCRiNEwTR2sFo04%2B1BgAV6ILzzcPhRQJyBKy%2FHXbOt7U2nuQQfT0oAIOHQrvwYY4wBx64akMZIkHFJwzdqa6xn4RCiS%2BjJgzCZpb93bJ5Zoe6PxNtmCb6O1Gh0PcykN7WVs2gMqo3JL2ZqeoJc4sTzLpOBr6K%2BWahCD7McLfTQGGki9bnG%2F4Bkf2keSXzZ9S9WgrufcT%2FVGLVFf%2F9l7obd2c4RtHmVowZIgSNjltxbWUyP1suGb4YiIASXuMHruNjj9AdmBqtFoa65dEfLC2gbg76PMzzIlqw9fThvMIwu%2BRs9h9%2B1hNz0cS11%2FkzfRq24AxvDslWiCuY0Gh%2Fo2FqGJB8O%2B3EQM7J5ENTZQBAf1ShFxrlmQ0dxMpj79xnusyJeIL6KCto2aNWq0YC357c0O0Hu6jH%2B7aP7DOJisKXzaN7Yc26M4qwHSufgbfmG5%2FblGg1eP%2Bi7u6m2rT%2FOXOMWbLUR%2BRQMsfJzGkIdXk9qL%2FWdok5YliNbF%2BUdFSw3ONJpzuMITwo78GOqUB9g22tBfOeRFyKPYOC2bSpqTyf3mXavhPPpEFVC%2FOw15BCW8Ujxt9wjWHVnNihepOYdBV3bTia2k9dy2FwTlabByddBEbFtyuAbFHY2rzL6p60uTeA8EDTOr7Cb11Xcy%2Ft0fmCVAabSSAIeQBOnPU2RxubrrPZ1YI69RXMZ86VXnpBg4c6JbNBMYswA7LEYAiAchqmLiTOVfuMiA3v5hbIrcn0X0J&X-Amz-Signature=7fb6137e94e14b1e0dfc838de5af2525840da9bc2e6f627b546211bb840aecd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPEOPSFU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCy%2F%2FVD7J3BFD%2BmpQw8Hc6HpP%2Bfme1XhJUw6jWsb2SeigIgLs18Vt0GdhVOgJjvKzj6jbXdS7RQv2xG%2Bog7PWLIIW8qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCsfivBb23dK3buRHircA1k3SB2gqW%2BIR%2BzrmtAoytV1BluUlOmc3CYjk2Idoa2utJMqdjRx060SI%2B9vtca2XPEZNq68s1m5NimpcX5oESAoKAx519WGYAQRtvj0grriYDJlY1A7PZhOsCRiNEwTR2sFo04%2B1BgAV6ILzzcPhRQJyBKy%2FHXbOt7U2nuQQfT0oAIOHQrvwYY4wBx64akMZIkHFJwzdqa6xn4RCiS%2BjJgzCZpb93bJ5Zoe6PxNtmCb6O1Gh0PcykN7WVs2gMqo3JL2ZqeoJc4sTzLpOBr6K%2BWahCD7McLfTQGGki9bnG%2F4Bkf2keSXzZ9S9WgrufcT%2FVGLVFf%2F9l7obd2c4RtHmVowZIgSNjltxbWUyP1suGb4YiIASXuMHruNjj9AdmBqtFoa65dEfLC2gbg76PMzzIlqw9fThvMIwu%2BRs9h9%2B1hNz0cS11%2FkzfRq24AxvDslWiCuY0Gh%2Fo2FqGJB8O%2B3EQM7J5ENTZQBAf1ShFxrlmQ0dxMpj79xnusyJeIL6KCto2aNWq0YC357c0O0Hu6jH%2B7aP7DOJisKXzaN7Yc26M4qwHSufgbfmG5%2FblGg1eP%2Bi7u6m2rT%2FOXOMWbLUR%2BRQMsfJzGkIdXk9qL%2FWdok5YliNbF%2BUdFSw3ONJpzuMITwo78GOqUB9g22tBfOeRFyKPYOC2bSpqTyf3mXavhPPpEFVC%2FOw15BCW8Ujxt9wjWHVnNihepOYdBV3bTia2k9dy2FwTlabByddBEbFtyuAbFHY2rzL6p60uTeA8EDTOr7Cb11Xcy%2Ft0fmCVAabSSAIeQBOnPU2RxubrrPZ1YI69RXMZ86VXnpBg4c6JbNBMYswA7LEYAiAchqmLiTOVfuMiA3v5hbIrcn0X0J&X-Amz-Signature=27a157d0dda79698bc7db0fe9aa5c125bbbda50b5a431b05ebc3108f8dabd721&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
