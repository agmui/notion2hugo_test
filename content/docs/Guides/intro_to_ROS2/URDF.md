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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6EMHKN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCew8mf2ejdhB0od1zSAGMXEkhkYQvHlbltHX4HB6OwAiA6xiEQWgpkyWdfMzs7cF33DFQ7N9WtQUZqfKjn9%2FDM6SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNHZdioGg065DeL%2FTKtwDarD6bnu3fN84AwN1KVoCuPyzivl0SU1IUiGkS3EdeycxM8aqqOkTEVyYnniu%2Fm8zYPWBR5CnEHoxhhFOm3KDWFQR3lbGPzzP3j%2B%2F3k%2Fh6tw4Cl0Nz%2FFOxpYYojdOzyjeGtm%2B8oLLz1PRRR%2BwWAGyWYJD%2F7bqeUk1462%2F5kiKdAMtdPRvBh892QwWZWj83%2FIhVq%2FXHtIPOfy0XEF3J7GY8m%2B%2BcK0%2FN1TA9mgRPm5nQwWdExHB%2F1B22%2BeQ5hD8xHM0a%2BJYHViJu4GG8aPrY0%2Bl8tVwHgzk3HjEvQePBDYldVP6GU%2FcormzFGGgLCsqnkfdKGlX22bT8NBche4m4uENqHn8tKuErVokPtpHl4cFTstkFyKNfd9c4cmBKc3X6iM2QONgPwbJOgmshVlosjMlGqUrdsGNLI7fFaDBFD5DJdcYdRuybBICBRuOAbL8CiZ6%2BGucHV1y16vO9vqRT%2FyEuWlK19CpNJILqt%2Fxuk5qqWNm6SQgUvf46M5nO8J0Gdfsa9cL42OOQHRDo97TWeti1MCQ%2F6gBfuZkXqDCkYyYtOf4bMWYZZ6sdfQivRx%2FrL9QWel2m6ocyC8uHNR1BjB269mLI4TSC44PqZf1ukUrahlOzl6TcU5YwX6myZAwnezzvAY6pgF8smsSGbWtUL5ZN6uKrPmpBmUCN2%2F7ooOQjSJT76teXW8S9SlYtyEv4C%2FIdq%2B%2BjOh5ZsI3Dph1RN9y2eJXbpaxV9mZJmHmqIEzM4JRlyXYs23O%2FIw2RfSKB0xlI5HDgrXoybGV1H5aN6V2ty9Amy6LxCPK5DeyylcW1ksrr0nM%2BIxVKREKBMlytDzp3uYiBzr1va9WLzLC8%2BTwniziDLTJ9S%2FsebLr&X-Amz-Signature=6765e0a7d45c3f44fe8c30490ff8449ef8660229e84b28098a44dc0316979bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ6EMHKN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCew8mf2ejdhB0od1zSAGMXEkhkYQvHlbltHX4HB6OwAiA6xiEQWgpkyWdfMzs7cF33DFQ7N9WtQUZqfKjn9%2FDM6SqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNHZdioGg065DeL%2FTKtwDarD6bnu3fN84AwN1KVoCuPyzivl0SU1IUiGkS3EdeycxM8aqqOkTEVyYnniu%2Fm8zYPWBR5CnEHoxhhFOm3KDWFQR3lbGPzzP3j%2B%2F3k%2Fh6tw4Cl0Nz%2FFOxpYYojdOzyjeGtm%2B8oLLz1PRRR%2BwWAGyWYJD%2F7bqeUk1462%2F5kiKdAMtdPRvBh892QwWZWj83%2FIhVq%2FXHtIPOfy0XEF3J7GY8m%2B%2BcK0%2FN1TA9mgRPm5nQwWdExHB%2F1B22%2BeQ5hD8xHM0a%2BJYHViJu4GG8aPrY0%2Bl8tVwHgzk3HjEvQePBDYldVP6GU%2FcormzFGGgLCsqnkfdKGlX22bT8NBche4m4uENqHn8tKuErVokPtpHl4cFTstkFyKNfd9c4cmBKc3X6iM2QONgPwbJOgmshVlosjMlGqUrdsGNLI7fFaDBFD5DJdcYdRuybBICBRuOAbL8CiZ6%2BGucHV1y16vO9vqRT%2FyEuWlK19CpNJILqt%2Fxuk5qqWNm6SQgUvf46M5nO8J0Gdfsa9cL42OOQHRDo97TWeti1MCQ%2F6gBfuZkXqDCkYyYtOf4bMWYZZ6sdfQivRx%2FrL9QWel2m6ocyC8uHNR1BjB269mLI4TSC44PqZf1ukUrahlOzl6TcU5YwX6myZAwnezzvAY6pgF8smsSGbWtUL5ZN6uKrPmpBmUCN2%2F7ooOQjSJT76teXW8S9SlYtyEv4C%2FIdq%2B%2BjOh5ZsI3Dph1RN9y2eJXbpaxV9mZJmHmqIEzM4JRlyXYs23O%2FIw2RfSKB0xlI5HDgrXoybGV1H5aN6V2ty9Amy6LxCPK5DeyylcW1ksrr0nM%2BIxVKREKBMlytDzp3uYiBzr1va9WLzLC8%2BTwniziDLTJ9S%2FsebLr&X-Amz-Signature=25c53bf36843888130e51f1d58ecd579f681fca76b6d5dd2fcdbf32f390cbbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
