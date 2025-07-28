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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STQQBST%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCu8VZbTmyfCbKan2z5vPml4DPinOTYe4hojZDNcyKzQwIgO75F0iLkuAWEkWszYjWkGvwNVQA26%2FP9JUJBjdhxoM0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3eFxrKKD60sxmXWSrcA9XVkaGEJrXRbYhimYGVkJzfBtDv0VtEW%2FYtsBY86RulDXX2UgXOaIk0Sz7P5p%2FyBhFavcVaqVFz6nvhd4U0Qk5cPKJUZZe3EOvUpdfq1pJGB6ux8982CzShW9LChchnIlNJ8SkopbqsCk9jU3WRsnbBPJ3Iy9UGBvfkRsI%2B8rdN2l6mj8KHIYVlIqPVtoimPU3l2Man3lVzMZASgPF9H3oZ8LdXs03wXr7IeIZ8%2B9VCuOjbHLOQAMZwUaz%2FOwS%2FbbrNgoug6ybo1TyKXW5PaIF2KT3nElwiJhp1edXfflEp1yx0u9gtUcRaqH8sK%2F%2FahOWBPBErFK2q1WyN4xowBxz50N1Bnxyo69DHekjCO2bpxcFrxlTj8HPnXanZ6S9wL%2F9Z1kYlxleK2CQLn%2Bbg7BxNLV8fQmak0u71Wo4Xky2xzVgH5ECtKL2%2B8TWxFFcNEB5fI7fDwp5bU5OGnuvbQra13pOU4dgDaYxkFl%2FueKHicHaRSoxceBk2Y9mAs3OEqmq%2FEu4Ma1Qu9Ogyc1ekIeatFYE3XTEaAmImIZhmOkvMP8UCWDqVxCpfUPtYRBToVPOMgWmyOC5Mk81S0C6May%2BNNg1rj5rFtK8uETRk%2FkRIB%2F660QD79zVVPGizMIGTncQGOqUBLLWitCry8oaZSYQ1fJeLQ5kkx9sNvzMF5KBCHvrMzFnPlOcswHlAMRFJwMLZheRDkWCvlDV8qJAv71nIw1Om1uaa8%2FtSRz0v2Ygr6jg97rg5CjtrXxgcg4eyU70spZf5kXxx%2FJZ59n1flfNRsYB2%2B9a3lEsV2FmVVbrWUVoBL%2Bq7awey2XuB8j9bIO5BUeADd9G5m2eop%2BnbupVUCGqAt9WiIhl8&X-Amz-Signature=09390526dd09a2a071e235f1315536b1d48818f06aae25213e2fe5d339d6253f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STQQBST%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCu8VZbTmyfCbKan2z5vPml4DPinOTYe4hojZDNcyKzQwIgO75F0iLkuAWEkWszYjWkGvwNVQA26%2FP9JUJBjdhxoM0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3eFxrKKD60sxmXWSrcA9XVkaGEJrXRbYhimYGVkJzfBtDv0VtEW%2FYtsBY86RulDXX2UgXOaIk0Sz7P5p%2FyBhFavcVaqVFz6nvhd4U0Qk5cPKJUZZe3EOvUpdfq1pJGB6ux8982CzShW9LChchnIlNJ8SkopbqsCk9jU3WRsnbBPJ3Iy9UGBvfkRsI%2B8rdN2l6mj8KHIYVlIqPVtoimPU3l2Man3lVzMZASgPF9H3oZ8LdXs03wXr7IeIZ8%2B9VCuOjbHLOQAMZwUaz%2FOwS%2FbbrNgoug6ybo1TyKXW5PaIF2KT3nElwiJhp1edXfflEp1yx0u9gtUcRaqH8sK%2F%2FahOWBPBErFK2q1WyN4xowBxz50N1Bnxyo69DHekjCO2bpxcFrxlTj8HPnXanZ6S9wL%2F9Z1kYlxleK2CQLn%2Bbg7BxNLV8fQmak0u71Wo4Xky2xzVgH5ECtKL2%2B8TWxFFcNEB5fI7fDwp5bU5OGnuvbQra13pOU4dgDaYxkFl%2FueKHicHaRSoxceBk2Y9mAs3OEqmq%2FEu4Ma1Qu9Ogyc1ekIeatFYE3XTEaAmImIZhmOkvMP8UCWDqVxCpfUPtYRBToVPOMgWmyOC5Mk81S0C6May%2BNNg1rj5rFtK8uETRk%2FkRIB%2F660QD79zVVPGizMIGTncQGOqUBLLWitCry8oaZSYQ1fJeLQ5kkx9sNvzMF5KBCHvrMzFnPlOcswHlAMRFJwMLZheRDkWCvlDV8qJAv71nIw1Om1uaa8%2FtSRz0v2Ygr6jg97rg5CjtrXxgcg4eyU70spZf5kXxx%2FJZ59n1flfNRsYB2%2B9a3lEsV2FmVVbrWUVoBL%2Bq7awey2XuB8j9bIO5BUeADd9G5m2eop%2BnbupVUCGqAt9WiIhl8&X-Amz-Signature=aef76f0c23fb4db50687c395d5f9609c85602841c328434e741918ae63797759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
