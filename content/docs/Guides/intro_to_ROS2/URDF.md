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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSYC7UQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFi7526m8RUVRRQxkVQi3IWQbmLnW6ZJ0Umaq7BpL4NfAiEAmFjq6%2FgUWb2GepFDQbC4Uej%2F0Lo%2Fpto3DGQN5dIxVvkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEkyn4TJACWQ9wY4WSrcA1PRRvoZAOKpVPfqqGzpDV6GiJm2%2Fjz2lu6meJ86EmRVm2mox%2F1b3wR4eb37iXuJ8%2FF6T9yOSD18Zr0i0v9n2FPVk2yWuBbZ55jMycNuwqSzGXFDquIm01S0zR%2Fq8vNA%2Bum12S9vqel5jhDQWCr%2BFfU1MQqxfEqx4NkZ7wkFxyp3r4I1agfL%2Fi20Dq%2Fs3fdWpLi0VVaJnPbTc24tO5dIhJGf%2B2B6HhSHK6P2dYalijqLnzl%2FUIkfMy2dmITdfR%2FW%2FbbupIz6jPIYRzRRX48BkEcukMEfsGUPT33z1JADigvQe8Sy7M0Z0xCLkQnDIP%2F57V9ajMna2oAivSt4rA3EKVfc8B9jH5HkuUN0DkqX%2Fd4m3HU0EkCt%2BnU0nRHxFax0Co5lXyWbyboowyIwxMlzWCMdw%2F%2Bv0XDZXs06k%2FotVqA%2BkNmlY3TKIssjCsgHSjY2pckZO3SexnkAjHzdiGLQ7E4GQyyJ42uRF5gZetGdlaETqchUOjJAXVFpopiWpxYtal%2BQGE%2FwNv1AGV8lFEeCpX7dpYTFWF5gyRzTmmqr6%2F9e0VOLUiJ7yqpUof2PjF3XGmQ32LX2WfbKG%2B9OyLwfX38i8wUhl5D9UwJ7CRc2Gjk3uUlel1EnKnSj3R7zMKjS%2FMEGOqUBpEofDYE3l%2FIs5dSZZc5O0InX2UEqlZe%2FJsNNrH%2B31%2FHfHXC%2BvrSV9edhT5YygAahOMFWS4ZUysCvL98sjP1bh%2BC%2BYmUQUD3SCNwAPFktI3FClLXSkkI1QJ1RcirqY4xcjiAbsbt4q69Ggy1TQBiw3oknp%2BFS%2FPNjw6MzdMUES2MH1oBwSTjHdL5fzqa5cX0opUksL9d%2FyXnVTFlVrjWLauSLC3du&X-Amz-Signature=5bf32b275bc6e8306dfe7890fe975d592d810d0c823eed5b9f4b931e900a0204&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KSYC7UQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIFi7526m8RUVRRQxkVQi3IWQbmLnW6ZJ0Umaq7BpL4NfAiEAmFjq6%2FgUWb2GepFDQbC4Uej%2F0Lo%2Fpto3DGQN5dIxVvkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEkyn4TJACWQ9wY4WSrcA1PRRvoZAOKpVPfqqGzpDV6GiJm2%2Fjz2lu6meJ86EmRVm2mox%2F1b3wR4eb37iXuJ8%2FF6T9yOSD18Zr0i0v9n2FPVk2yWuBbZ55jMycNuwqSzGXFDquIm01S0zR%2Fq8vNA%2Bum12S9vqel5jhDQWCr%2BFfU1MQqxfEqx4NkZ7wkFxyp3r4I1agfL%2Fi20Dq%2Fs3fdWpLi0VVaJnPbTc24tO5dIhJGf%2B2B6HhSHK6P2dYalijqLnzl%2FUIkfMy2dmITdfR%2FW%2FbbupIz6jPIYRzRRX48BkEcukMEfsGUPT33z1JADigvQe8Sy7M0Z0xCLkQnDIP%2F57V9ajMna2oAivSt4rA3EKVfc8B9jH5HkuUN0DkqX%2Fd4m3HU0EkCt%2BnU0nRHxFax0Co5lXyWbyboowyIwxMlzWCMdw%2F%2Bv0XDZXs06k%2FotVqA%2BkNmlY3TKIssjCsgHSjY2pckZO3SexnkAjHzdiGLQ7E4GQyyJ42uRF5gZetGdlaETqchUOjJAXVFpopiWpxYtal%2BQGE%2FwNv1AGV8lFEeCpX7dpYTFWF5gyRzTmmqr6%2F9e0VOLUiJ7yqpUof2PjF3XGmQ32LX2WfbKG%2B9OyLwfX38i8wUhl5D9UwJ7CRc2Gjk3uUlel1EnKnSj3R7zMKjS%2FMEGOqUBpEofDYE3l%2FIs5dSZZc5O0InX2UEqlZe%2FJsNNrH%2B31%2FHfHXC%2BvrSV9edhT5YygAahOMFWS4ZUysCvL98sjP1bh%2BC%2BYmUQUD3SCNwAPFktI3FClLXSkkI1QJ1RcirqY4xcjiAbsbt4q69Ggy1TQBiw3oknp%2BFS%2FPNjw6MzdMUES2MH1oBwSTjHdL5fzqa5cX0opUksL9d%2FyXnVTFlVrjWLauSLC3du&X-Amz-Signature=23b2c946e7df980144e588aba036d477d5bd0641b919ad471544938e3c7f84d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
