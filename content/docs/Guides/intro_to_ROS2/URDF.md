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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXTWK2W%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpcjrOMr9YGkn1QH1ZXOwaYO1355tgpHDfF2kI4RsSXwIgM1CGu%2BJ1LvkmQaENVGxyLPD78gbiGu8HGiJvlySD1%2BYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKi1ni58VPymVimqZyrcA4OZCe24rcfN5mWDWdA%2F%2BWOafIPL0FAYjEuIk8%2FTqlkDAccN1%2Bqn1fY9M9nujg7ntMtP8xAmSD2Tb3gVaXrCYg6rZk%2Fhm5AQeqRzVLeBEevyxHW651BD07f%2FWw7EeJtBd%2BeAoIzwAzhhXm63iLhBjJtFfgjumxlzyWXHQuF0X8A1NdYhvbLCJQRN0EpEhU%2BME6CQ9L%2FT42ZkU%2BbCam%2F9j%2BYbRMgldggTp8k1dWj6euabREMuM21%2BkHE3iX7L07zKy%2FoX3krhUWf6JtbHAkMQyt5Gb9G5XjFUTWQ5ski8VYy%2Bjr1qrPDHA9IFZVOxRtTk4t%2Bj1uakcvKWQmfP%2BPFHMcZ68i%2BEk2Xq0mmNt5jr6Ou5trmJyV4y5Yt%2F9erM%2FVPoFPGjBfbuJrZrUbrvMe0WQAdqo5r0uYewDoUp6BVKxYu8mv157wxfVAlF5QqmcbpKsZPHC5Gjm65vLMta%2BuCi%2FiSojw5OEoFk2puAjTgXsSCQMJhXRv1Ops8GfG3EnDZ%2FofiCW%2BgA2Z2YXh73vMyZtOjFhEfHLmrzpotxJ6k%2F6IgTrELMgLi8OH%2F7CGK2UHvMOGPX4GedZfJWfylaxnxy%2BMJqWOPsz%2FUfxWnI1d9hcqWlm%2BzhJ0R6ylNMfdNqMOuk%2Bb8GOqUBcpyT4Bomtes%2FhWIPw8Xy2z3kyFxJ7HRsMB8O%2FF%2FPg1%2FE9XJ8hMOvKVSlqTK4%2BZ7IGhZkSj7kwP%2Bcdhgq1tDtYnLc0XDDyAwiF4cCTUkUQGJ4lYvepy3ncz3aMVDB3XWQzWpOU9vydRn0LgnjRbI7cjy5BICO0eNavcvOVpteeiS55T8ExyHDlNhwhmO4qktpayaiBxcIAE0W%2BCnsrAbkw%2BvntQE1&X-Amz-Signature=d023517745df3ecc812b8d0a20a463a70098f7ba6b07d09e5b30c2d662d145c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQXTWK2W%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T132048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpcjrOMr9YGkn1QH1ZXOwaYO1355tgpHDfF2kI4RsSXwIgM1CGu%2BJ1LvkmQaENVGxyLPD78gbiGu8HGiJvlySD1%2BYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKi1ni58VPymVimqZyrcA4OZCe24rcfN5mWDWdA%2F%2BWOafIPL0FAYjEuIk8%2FTqlkDAccN1%2Bqn1fY9M9nujg7ntMtP8xAmSD2Tb3gVaXrCYg6rZk%2Fhm5AQeqRzVLeBEevyxHW651BD07f%2FWw7EeJtBd%2BeAoIzwAzhhXm63iLhBjJtFfgjumxlzyWXHQuF0X8A1NdYhvbLCJQRN0EpEhU%2BME6CQ9L%2FT42ZkU%2BbCam%2F9j%2BYbRMgldggTp8k1dWj6euabREMuM21%2BkHE3iX7L07zKy%2FoX3krhUWf6JtbHAkMQyt5Gb9G5XjFUTWQ5ski8VYy%2Bjr1qrPDHA9IFZVOxRtTk4t%2Bj1uakcvKWQmfP%2BPFHMcZ68i%2BEk2Xq0mmNt5jr6Ou5trmJyV4y5Yt%2F9erM%2FVPoFPGjBfbuJrZrUbrvMe0WQAdqo5r0uYewDoUp6BVKxYu8mv157wxfVAlF5QqmcbpKsZPHC5Gjm65vLMta%2BuCi%2FiSojw5OEoFk2puAjTgXsSCQMJhXRv1Ops8GfG3EnDZ%2FofiCW%2BgA2Z2YXh73vMyZtOjFhEfHLmrzpotxJ6k%2F6IgTrELMgLi8OH%2F7CGK2UHvMOGPX4GedZfJWfylaxnxy%2BMJqWOPsz%2FUfxWnI1d9hcqWlm%2BzhJ0R6ylNMfdNqMOuk%2Bb8GOqUBcpyT4Bomtes%2FhWIPw8Xy2z3kyFxJ7HRsMB8O%2FF%2FPg1%2FE9XJ8hMOvKVSlqTK4%2BZ7IGhZkSj7kwP%2Bcdhgq1tDtYnLc0XDDyAwiF4cCTUkUQGJ4lYvepy3ncz3aMVDB3XWQzWpOU9vydRn0LgnjRbI7cjy5BICO0eNavcvOVpteeiS55T8ExyHDlNhwhmO4qktpayaiBxcIAE0W%2BCnsrAbkw%2BvntQE1&X-Amz-Signature=ed96dff6556df2ab569dbdf3f74ba85cb4a0c229d098ffec4b280fc12efb5b27&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
