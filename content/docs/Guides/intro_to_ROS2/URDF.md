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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7PDT7B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGtu5iwQpucAA%2BE%2FJtzk%2FcznCwYN0jpODmFGJrftFH5AiEAvXzup2eGWGvA5kgouKAK%2F5j2nc5pMq7xEIBU1R8JhzoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqr4U%2BNdaAt66j9JCrcA509hoxBm%2Boa%2FKu1vO9bNcREoTq6bkfSSLp1oZO7SB%2BdibN%2B75GBz05IDVHzUoBCzcAu3kIjLx7wJwJesY40NdPmK90U%2Bm7WBoD8mxMhPLMhBfRRcfj0wZ1s%2FZl7tjb0ccZaGk1rwdwPIP0FPWVYWP9aD9fNKu38On0ztas7iwT40bBiWTy7Km2MpJnqrAjc9mAB3vkKCVMBlbTtMVWx6Cnse7e2HHmD%2FbqcEyxE4fp8pE9tRJ96nv7pHpQnsUc6CEu0rYrrJRy1L3Vla7PgjGn6EScRu8yRTR2hnD5Me%2Fn2vwuMYt%2F5CwPpPNuTw%2BtviDsDa%2B6%2FlPDWuYlZYqv2%2BfJ9kSceK%2BUAQEvyRif3DvTg%2FJ%2BdmVUDLkoH%2BQGyC4Dt%2Fim6N6q5Ef43%2Fguhz95OlF53Snl%2FQ%2FSDFrkNtuJm1s6GMdWmpwf%2BWnIC8aMFU0njbUZXXDgVVi81gHYWgd1PYoiQUY9YoYaueb%2FQIdcYWAlAKNH1YsuEZcjIPqjpkAdW0K2x70RuQjbo37s7c2TUUNYHHpWNybwdGkq4b%2BJ%2BH%2B9fa9JHCPShsS6lPJLSsCaiIcChYAXbF9DvNnCtM6aXQaevBg84DAxUEoKEqGq1Asd%2BWFEQYuB6jyIx2WkuMLbi7cEGOqUBWhl4Bx8WkXKE%2F8sQ3pnLy8RQQFEW8hSijjsP9BuUULq5aCVl%2BJI9SXtNH1Hmdm80yp7IFNCGCkMzS194vICixXXksGG3qXohyPkA1IJzAoMk6CeDJe5128zVadyGTCxJ%2Bw%2BRwzzJGGZiXODOMS%2BejvbuzRLJmPvNpl%2BZMjU05CO0d3WTPcvS%2FBc8MsYrR00cCzKCWNJYgiFkprZ7bQWLHBCjjnBI&X-Amz-Signature=1731aef56da877e8006809f70901873cca35d227ec09a34b4862f2304f47632a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7PDT7B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGtu5iwQpucAA%2BE%2FJtzk%2FcznCwYN0jpODmFGJrftFH5AiEAvXzup2eGWGvA5kgouKAK%2F5j2nc5pMq7xEIBU1R8JhzoqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqr4U%2BNdaAt66j9JCrcA509hoxBm%2Boa%2FKu1vO9bNcREoTq6bkfSSLp1oZO7SB%2BdibN%2B75GBz05IDVHzUoBCzcAu3kIjLx7wJwJesY40NdPmK90U%2Bm7WBoD8mxMhPLMhBfRRcfj0wZ1s%2FZl7tjb0ccZaGk1rwdwPIP0FPWVYWP9aD9fNKu38On0ztas7iwT40bBiWTy7Km2MpJnqrAjc9mAB3vkKCVMBlbTtMVWx6Cnse7e2HHmD%2FbqcEyxE4fp8pE9tRJ96nv7pHpQnsUc6CEu0rYrrJRy1L3Vla7PgjGn6EScRu8yRTR2hnD5Me%2Fn2vwuMYt%2F5CwPpPNuTw%2BtviDsDa%2B6%2FlPDWuYlZYqv2%2BfJ9kSceK%2BUAQEvyRif3DvTg%2FJ%2BdmVUDLkoH%2BQGyC4Dt%2Fim6N6q5Ef43%2Fguhz95OlF53Snl%2FQ%2FSDFrkNtuJm1s6GMdWmpwf%2BWnIC8aMFU0njbUZXXDgVVi81gHYWgd1PYoiQUY9YoYaueb%2FQIdcYWAlAKNH1YsuEZcjIPqjpkAdW0K2x70RuQjbo37s7c2TUUNYHHpWNybwdGkq4b%2BJ%2BH%2B9fa9JHCPShsS6lPJLSsCaiIcChYAXbF9DvNnCtM6aXQaevBg84DAxUEoKEqGq1Asd%2BWFEQYuB6jyIx2WkuMLbi7cEGOqUBWhl4Bx8WkXKE%2F8sQ3pnLy8RQQFEW8hSijjsP9BuUULq5aCVl%2BJI9SXtNH1Hmdm80yp7IFNCGCkMzS194vICixXXksGG3qXohyPkA1IJzAoMk6CeDJe5128zVadyGTCxJ%2Bw%2BRwzzJGGZiXODOMS%2BejvbuzRLJmPvNpl%2BZMjU05CO0d3WTPcvS%2FBc8MsYrR00cCzKCWNJYgiFkprZ7bQWLHBCjjnBI&X-Amz-Signature=ce5ad7c6d66abb590f15ebdad6be5be523de78578867222312393cd06ce257ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
