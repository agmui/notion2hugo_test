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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICK6BE4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkdHaM0eStz3jdCM7hbKyRNF2NJWYAncSHQhXmgNQyAiEA3%2BqMxvqK5GAIqi7VqElVjqMXmwS4S513SR203CzDvicqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyL4qvN82dDgzejkSrcAwLPSfRv8k3D37pCKt1N55RmA2nWS8o3w0eoO2t6c2FjjVb1ksI0gKuYdOgFv2xziywQTnx6ETkEDnBlO0tjwRRA7Od4tf%2BH4zTQa8vM6iSkxucpgpGka4oztJkOyQNZES4eLv1UzjvMmC0AYDvGJHtItXJlHeq5y66ZA397HGaTG3jGuYi3FR6yAFsYPiN%2BWPTu%2FLS4qdS%2B9Njv2e168Z1B7xY3ruN%2B8gxqRjfJOpSrDm%2FX4RLnqG8QufvK9OnaBqI83rLqgLPCsE55jaEBuAqZ88UzA5WgA2TxW8OGyvSWZ2Ng85crZ7iWmGZU1CgDtng2Tmp12S9q0iprR4pqWE6qnoAZ8yKf9DoUEpJTxacd936WiJeb%2BFqqe1R3kL5%2F2Tjgyg6K07YbD2n0tzTR5HiP6QbENJ0oGulM%2FqgJusepv%2BTPNlTphy2W7d9z4zUlkl5GE2IJnnxhXmHpMyvf5PfPZAdz3SUxaNf5z%2B1w%2FVotkhyp32Yh0VTdg3p8SXe7G378f%2BbQcQw0Gq3ON8RqA36zhhyuuD4cEatBcBGfelrwqtUV72V8UXA3cU5rw9E5FvcwKwiAWTCrE2G9jwM7xhcQDqq2KguAheb5gQLCkoJJY9OcYBIHz5D9LVS9MMmb070GOqUBoCa3aYA2A7Zwr%2BN9clm%2FVTcfM3ihcHSrqOM0J0Z4VaGTm7QUdCQKH%2F50nJfx25woWh5TZiPhQMajpek5r33G2FrKJUjSSDBBqu1kOkR%2F2mCLtL6i0GIffSMrtTqI9gCgD%2BeowCNZMyFibPkFBO%2BBgZkUfxQOk1XBUAkHQ%2BP6oY3BFLnAKrcw2dJtigLNXNrjJaolseCfTTrFiXTzLweQDvR3ARgO&X-Amz-Signature=890f733a8ad798a25e73e151b9751fc69770a26b2130874744e85c83244feaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICK6BE4%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFWkdHaM0eStz3jdCM7hbKyRNF2NJWYAncSHQhXmgNQyAiEA3%2BqMxvqK5GAIqi7VqElVjqMXmwS4S513SR203CzDvicqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyL4qvN82dDgzejkSrcAwLPSfRv8k3D37pCKt1N55RmA2nWS8o3w0eoO2t6c2FjjVb1ksI0gKuYdOgFv2xziywQTnx6ETkEDnBlO0tjwRRA7Od4tf%2BH4zTQa8vM6iSkxucpgpGka4oztJkOyQNZES4eLv1UzjvMmC0AYDvGJHtItXJlHeq5y66ZA397HGaTG3jGuYi3FR6yAFsYPiN%2BWPTu%2FLS4qdS%2B9Njv2e168Z1B7xY3ruN%2B8gxqRjfJOpSrDm%2FX4RLnqG8QufvK9OnaBqI83rLqgLPCsE55jaEBuAqZ88UzA5WgA2TxW8OGyvSWZ2Ng85crZ7iWmGZU1CgDtng2Tmp12S9q0iprR4pqWE6qnoAZ8yKf9DoUEpJTxacd936WiJeb%2BFqqe1R3kL5%2F2Tjgyg6K07YbD2n0tzTR5HiP6QbENJ0oGulM%2FqgJusepv%2BTPNlTphy2W7d9z4zUlkl5GE2IJnnxhXmHpMyvf5PfPZAdz3SUxaNf5z%2B1w%2FVotkhyp32Yh0VTdg3p8SXe7G378f%2BbQcQw0Gq3ON8RqA36zhhyuuD4cEatBcBGfelrwqtUV72V8UXA3cU5rw9E5FvcwKwiAWTCrE2G9jwM7xhcQDqq2KguAheb5gQLCkoJJY9OcYBIHz5D9LVS9MMmb070GOqUBoCa3aYA2A7Zwr%2BN9clm%2FVTcfM3ihcHSrqOM0J0Z4VaGTm7QUdCQKH%2F50nJfx25woWh5TZiPhQMajpek5r33G2FrKJUjSSDBBqu1kOkR%2F2mCLtL6i0GIffSMrtTqI9gCgD%2BeowCNZMyFibPkFBO%2BBgZkUfxQOk1XBUAkHQ%2BP6oY3BFLnAKrcw2dJtigLNXNrjJaolseCfTTrFiXTzLweQDvR3ARgO&X-Amz-Signature=fd685437aab7ef445eea79407b5d335646f86d4e6af1fdf17d0cc2c035d84f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
