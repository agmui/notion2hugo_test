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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3JYRTT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHPuW%2BQcSDBhiN8FirwJScnEBaE5wlLvrS9M3dvcoWKAiEA63flTYUEDP1K7J6OCp5VgsaRJtdAi9HcxjoJgHVGpLUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3n%2F81lE0WEaqSUzyrcA08fIm5rkN7Eozi4PxSy7i8Z2yNC2f%2Fpt9zYaWgp2ZhrRqMhRC%2B4svMhDQoOXBMTEn%2BQzwEYCz1vuttL4KmMLk0dGZDhi1j2TKvjKU44Sojp46m0eqsmr4iq%2B4ncj5Ny%2B9b5KUckVK4SykRQEiUDYtiKy02rG5tSSBKD4E6F%2FYEZpJKy7OocbQJOc%2BSunk9YG%2FiYmcqYrb%2Be63y52BOjMxP2Jdxize3bM8NJSzvwxq0r9ozVCvDhvIyoJSymNqnDaS7Rv3woZto3yRQZ0cwu3QG69nzIJ%2BVqljpyZbkOCSaj1gaNEMCjf0LyVjk4dJqhFM1WnF8ufGJbtCdkY7R8Pw6lqFXMcO8rINkW5VJ8M0IyGnjp%2Bp%2FDSXjQsapDEKIE23cs5tkutN5aZdP4iBq3KYJMeEZ6%2BrIn0IPeHNkSbMPfOaPO%2BA5VZSn2T9uFj1ca3S2pY7aXnzE%2Be3jtiVlXRq%2B502oTjVc%2FcZFKLBziCjt3v6zsm1UAiTNgLMoemotM5uuI5l2t0U2bOQVrdQjPaUWu31KO5SkO4S50h7R2nuqi9Ydi5BvvOjRI0Bi%2FEtz3UCp0qEPcD7sP0q%2FOsCxE9i%2FST8FA01nBuODJmWLYJZE2fxGEk%2FeQgVpz7HQfMMrB4L0GOqUBu2sTXWdXLTrSATltLXuP9DbP7LtUPSEBaj%2BWlWrrnjaN7kyj5Xl5hRzRBXlj5W4t6CrxmDTjaKV3I0iw49%2BipEsmeuPLcP3HBCMDiC62UD4xWsSWPp1Jd4vEItak%2Ff%2FDcUhu5O9tugBiCiWKe8jjmSimonDkIwgQYcIYlqXkWrmxqdh0u9whhBZgkU7E%2FGzR9CB3O3hpqZW1CryHuDr5eaoHrmvh&X-Amz-Signature=358ea360f793da614faba53465064232546574be0fd18e3c79fae9c744c5630a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3JYRTT%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHPuW%2BQcSDBhiN8FirwJScnEBaE5wlLvrS9M3dvcoWKAiEA63flTYUEDP1K7J6OCp5VgsaRJtdAi9HcxjoJgHVGpLUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3n%2F81lE0WEaqSUzyrcA08fIm5rkN7Eozi4PxSy7i8Z2yNC2f%2Fpt9zYaWgp2ZhrRqMhRC%2B4svMhDQoOXBMTEn%2BQzwEYCz1vuttL4KmMLk0dGZDhi1j2TKvjKU44Sojp46m0eqsmr4iq%2B4ncj5Ny%2B9b5KUckVK4SykRQEiUDYtiKy02rG5tSSBKD4E6F%2FYEZpJKy7OocbQJOc%2BSunk9YG%2FiYmcqYrb%2Be63y52BOjMxP2Jdxize3bM8NJSzvwxq0r9ozVCvDhvIyoJSymNqnDaS7Rv3woZto3yRQZ0cwu3QG69nzIJ%2BVqljpyZbkOCSaj1gaNEMCjf0LyVjk4dJqhFM1WnF8ufGJbtCdkY7R8Pw6lqFXMcO8rINkW5VJ8M0IyGnjp%2Bp%2FDSXjQsapDEKIE23cs5tkutN5aZdP4iBq3KYJMeEZ6%2BrIn0IPeHNkSbMPfOaPO%2BA5VZSn2T9uFj1ca3S2pY7aXnzE%2Be3jtiVlXRq%2B502oTjVc%2FcZFKLBziCjt3v6zsm1UAiTNgLMoemotM5uuI5l2t0U2bOQVrdQjPaUWu31KO5SkO4S50h7R2nuqi9Ydi5BvvOjRI0Bi%2FEtz3UCp0qEPcD7sP0q%2FOsCxE9i%2FST8FA01nBuODJmWLYJZE2fxGEk%2FeQgVpz7HQfMMrB4L0GOqUBu2sTXWdXLTrSATltLXuP9DbP7LtUPSEBaj%2BWlWrrnjaN7kyj5Xl5hRzRBXlj5W4t6CrxmDTjaKV3I0iw49%2BipEsmeuPLcP3HBCMDiC62UD4xWsSWPp1Jd4vEItak%2Ff%2FDcUhu5O9tugBiCiWKe8jjmSimonDkIwgQYcIYlqXkWrmxqdh0u9whhBZgkU7E%2FGzR9CB3O3hpqZW1CryHuDr5eaoHrmvh&X-Amz-Signature=f30546a112061a15e19a8ee585ecc7d755df397699d2a9085813f79dd5aa3e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
