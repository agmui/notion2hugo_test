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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIW2QBFL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5I1r6N6c3%2B7elltMrXjIFNcE0bbpefQWZEqmfZ1yg5AIgFwGflkJLSBeafnmKQsi1zBFzPYnMrq4DQll3%2FASw24gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBgdXyUS6v1mh34aqSrcA160UpTUUJ0AvNjIvdcOOMrGjVTB54p8PpOzcP3UZFmEWPV4XHAZomZMQVvVaaTilIN36es7fRWD%2Fu9MexgVaw%2BoXdPcXWP3BNQamvvYBTC7lmzV02m4gdRaH6p1X9ThslOiw33eNP8CjIHBhJh%2FnuXvs7j1AZ1gpUmiZJJ2BlFqSgxkpV1CMh1ZCeXhdYnPnP%2FsKf5bohCwquDuMbw6ZfUs1389YrKdZouMbyaG9K4DJGdSqMqmhHN0bOeYIKqMfy6J06vIGLSXdjB%2F41xWRltwWzo9VOGLGUhnkB1Oiz2aWB3FG4FlPrbNuzKVarlx%2BGjYeHNUdtaHaMi38%2FSo8%2BNxlXHqrkCtfCRxRNNM8gu8P0fHjn%2FVe3sbAWI4aNSMsUmfexD4a3I424tf3Tao6jVuFo1MP00Kub0xsqXDpgjaJerBVNfg8X%2Bp8EIL%2Bt%2F50FJm5%2FpxabR1EDLVC3KVP%2FmfgM55mvsgjXTBr9E%2F5BJvLQduWjPcEO9fJtS328lbBV7zrJf%2FyQrGWZ9wriYT13bpTcZT9kwyTPKqkWfnVsbR1y3yLdh%2Br9T%2BpKPaCYOvJk4tuCU1aSF26pcZqVrnGlZpb%2F5ANoE%2F9ZAo33PotK7Jq%2FUr8sq1w77uDP8YMIywmL8GOqUBiigNM4ICaHh8tfqHgUTDCbbbHtw221TWM5kT9YKU6jz9tuKKyBze0xZUXONqT0FeDbYgwnxNJRvU9vI0byQ%2FP2gOSMuXKF%2BNzJPE7no2v0IibQ3wtNoxeI5FaQzTOIW3uUfGhoWf5%2BSw5%2BWlcEQoL0MCgucwEVHr%2FnHPm0n8WaYQQkl8EY6g%2FyhvxrWUVre%2BkKpB3Fn%2Bu18WK6yYyRajQadzEA9A&X-Amz-Signature=bf6a12d0ae5b17e8217b267dae43e912da432d7c1e8148c6b78557893de81803&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIW2QBFL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5I1r6N6c3%2B7elltMrXjIFNcE0bbpefQWZEqmfZ1yg5AIgFwGflkJLSBeafnmKQsi1zBFzPYnMrq4DQll3%2FASw24gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBgdXyUS6v1mh34aqSrcA160UpTUUJ0AvNjIvdcOOMrGjVTB54p8PpOzcP3UZFmEWPV4XHAZomZMQVvVaaTilIN36es7fRWD%2Fu9MexgVaw%2BoXdPcXWP3BNQamvvYBTC7lmzV02m4gdRaH6p1X9ThslOiw33eNP8CjIHBhJh%2FnuXvs7j1AZ1gpUmiZJJ2BlFqSgxkpV1CMh1ZCeXhdYnPnP%2FsKf5bohCwquDuMbw6ZfUs1389YrKdZouMbyaG9K4DJGdSqMqmhHN0bOeYIKqMfy6J06vIGLSXdjB%2F41xWRltwWzo9VOGLGUhnkB1Oiz2aWB3FG4FlPrbNuzKVarlx%2BGjYeHNUdtaHaMi38%2FSo8%2BNxlXHqrkCtfCRxRNNM8gu8P0fHjn%2FVe3sbAWI4aNSMsUmfexD4a3I424tf3Tao6jVuFo1MP00Kub0xsqXDpgjaJerBVNfg8X%2Bp8EIL%2Bt%2F50FJm5%2FpxabR1EDLVC3KVP%2FmfgM55mvsgjXTBr9E%2F5BJvLQduWjPcEO9fJtS328lbBV7zrJf%2FyQrGWZ9wriYT13bpTcZT9kwyTPKqkWfnVsbR1y3yLdh%2Br9T%2BpKPaCYOvJk4tuCU1aSF26pcZqVrnGlZpb%2F5ANoE%2F9ZAo33PotK7Jq%2FUr8sq1w77uDP8YMIywmL8GOqUBiigNM4ICaHh8tfqHgUTDCbbbHtw221TWM5kT9YKU6jz9tuKKyBze0xZUXONqT0FeDbYgwnxNJRvU9vI0byQ%2FP2gOSMuXKF%2BNzJPE7no2v0IibQ3wtNoxeI5FaQzTOIW3uUfGhoWf5%2BSw5%2BWlcEQoL0MCgucwEVHr%2FnHPm0n8WaYQQkl8EY6g%2FyhvxrWUVre%2BkKpB3Fn%2Bu18WK6yYyRajQadzEA9A&X-Amz-Signature=fc7150f5e89fbc86716d0b40a85c110151de1dd33dbba70197dc6abfb3d1d216&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
