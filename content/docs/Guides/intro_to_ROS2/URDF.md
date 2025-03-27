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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJX5WYO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyK68C1VdlAeB8j6TehmlNFcYBtbBdRxuI9ueGtb70jAIgKJ7TEIRoY6kAj3QgRVwqZ7q2BSOzw496LqKQH5%2FW%2BrMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCm8sx%2B4sPTHK0H99CrcA%2FseB0R4aLTuuXM7duqcs9or6%2FaaZZxRqi5yG%2FklGKkzFn5IVQhZ1UpECU3e7s7DpVlwgr2x0IjEpP9jsPZI%2BSbxS2EfYYQ%2FM7r3C1%2Fic%2B4d53CiMqsNqCpGpvSJiTQdvNsJxwZSW%2B0nXOq2fmISTNVcRFrwQBQ5yPRabfJY4lNydtvcCmf7sQjw50dAEE0v0GFpu24HRYKVGYX3zV9dvDIedW5vne9Audm4izoZWeMjMV%2BIC6WmcbwiaQVzFkOUjm%2FBKLQQ70pe3guEkVgrgWnqnzKbxkgDKXZRg5uU2spHrO%2FZQ2g4OvYfiWb19zuJROtoGRL5afzNmeTzAyh%2FMMEQ%2BYIe02L%2F%2BEIdcdR7iQyWnFio7So8vbPhvtu99XnC7sYplscwy98qlIX7Vp2o6kblaRU1ooxmM8Q4vDX3PUjHprZA8%2FEX%2FEXZjJZocOBFG6rk5HbzuYadct5guXGnIA0Xm%2FDc5CMnIzlGUYtpqrs1y8CuthKMwkrphskSBUPUFZ7ISZO0eNldpge1CqAoe6791TjGehdSNLcVZpDtIJAadgtM%2Fv%2BfDY%2BKuMYt4lFZYtPMtwN%2B9JVIM2h1MTi40WZfKhkIE2eEFlg7SpGlB5vLY0QNimOf0iSxRYIOMK%2FblL8GOqUBcZM7r%2FnOq%2FLIYn8pNc1mhN9CflAaY08fWEj6ZweV3oC0m%2FkKcWkOSmjyUigvl4DP%2BjmAUQulYrwuUKDuOmloVYd7fhFSj0YO5ozPZho53qWkofBfyctMsXQHZKxN%2Bb07BiDao04wxLBNtWZgYCeG8V9rjuT3Npp3W%2Fp8oLhM35Rgoyq7AonFHDzDbVrPmt5R%2BkXt52Lp6Z0JfBkEAn28dQLUZBR5&X-Amz-Signature=6d029a3f3fac0843ec75152f57db4ddfbc63ed0c14d1efe02bd644b3f04e69bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHJX5WYO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyK68C1VdlAeB8j6TehmlNFcYBtbBdRxuI9ueGtb70jAIgKJ7TEIRoY6kAj3QgRVwqZ7q2BSOzw496LqKQH5%2FW%2BrMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCm8sx%2B4sPTHK0H99CrcA%2FseB0R4aLTuuXM7duqcs9or6%2FaaZZxRqi5yG%2FklGKkzFn5IVQhZ1UpECU3e7s7DpVlwgr2x0IjEpP9jsPZI%2BSbxS2EfYYQ%2FM7r3C1%2Fic%2B4d53CiMqsNqCpGpvSJiTQdvNsJxwZSW%2B0nXOq2fmISTNVcRFrwQBQ5yPRabfJY4lNydtvcCmf7sQjw50dAEE0v0GFpu24HRYKVGYX3zV9dvDIedW5vne9Audm4izoZWeMjMV%2BIC6WmcbwiaQVzFkOUjm%2FBKLQQ70pe3guEkVgrgWnqnzKbxkgDKXZRg5uU2spHrO%2FZQ2g4OvYfiWb19zuJROtoGRL5afzNmeTzAyh%2FMMEQ%2BYIe02L%2F%2BEIdcdR7iQyWnFio7So8vbPhvtu99XnC7sYplscwy98qlIX7Vp2o6kblaRU1ooxmM8Q4vDX3PUjHprZA8%2FEX%2FEXZjJZocOBFG6rk5HbzuYadct5guXGnIA0Xm%2FDc5CMnIzlGUYtpqrs1y8CuthKMwkrphskSBUPUFZ7ISZO0eNldpge1CqAoe6791TjGehdSNLcVZpDtIJAadgtM%2Fv%2BfDY%2BKuMYt4lFZYtPMtwN%2B9JVIM2h1MTi40WZfKhkIE2eEFlg7SpGlB5vLY0QNimOf0iSxRYIOMK%2FblL8GOqUBcZM7r%2FnOq%2FLIYn8pNc1mhN9CflAaY08fWEj6ZweV3oC0m%2FkKcWkOSmjyUigvl4DP%2BjmAUQulYrwuUKDuOmloVYd7fhFSj0YO5ozPZho53qWkofBfyctMsXQHZKxN%2Bb07BiDao04wxLBNtWZgYCeG8V9rjuT3Npp3W%2Fp8oLhM35Rgoyq7AonFHDzDbVrPmt5R%2BkXt52Lp6Z0JfBkEAn28dQLUZBR5&X-Amz-Signature=457af046028042c9d186d4b20530ce8f2a5294d6db533ae69444901747ab7803&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
