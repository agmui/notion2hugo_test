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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEUJRUOC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGO%2B5iPVZ2Fpz%2FJrIPr6it8KrzP1lJ4gMzGOjZK1n74hAiEAssUxG0%2FbtXDSkFwjYE%2BQ%2B6mnLXsznE7%2FjONji8SJeb4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHIlgQY3m7MaqNeE0SrcA%2FZFjy71Bv%2FcaSt6DOdjqNUDa1l8npLATcMz1qiNVqsWZQp7fXS4nzAir4aOZD2iecaIoL4zcVacvlP%2BeKY7hbNTsEBZENNKu%2FH2SSjMRy5MqynqyuQAIvac09hh57iBqSGjRdMBKYmw9lGLX437kN5hBAjDaCdue094Ua88OwKM1nnhZp%2B0B%2F1CLsMxeo4Eu7eORYE%2BoVuhpgsh7qXbaMswQ6b35oIps5f4zVrHc61%2FF6d4jdsVhxlTziBNyyQJiWMOL%2FbuYOobCFpWEXuw%2BBElvaXS7oHfaLiOgmABerS0I6uoIvuH40FVjM98EZyNVKtyIM5l%2FqsG%2Bivy19ixD4zVPTM%2FwtuLB9NBiBwWnwPImGIuzyVhECwUbpVKX9xkNYD4RQ6vgQ8m7YOWVUnMMx17IgB%2FahuVh9y0wtciLQ6%2FDLnRTOu6KbnXFJL4Z%2Bt4CMmkAAA3EWQaADZiga9t%2F5Ancufgz33BjoVlGkCjKyvWt1eOnMi6WhPswC30vI9AG2vsPdkFSMZeqJ6cukQJYihGw88xJP2AITci8kwhe0u1Jhm9N%2FBg6Kjq%2BIaAcvxH1fCg%2BXduE1sFuwMUSAF5N16x6DR5wyWhRUg1uOKQ8MitxRyQAghjwsVJ%2B5yFMJSy%2F70GOqUBFMVcETxjTfJoHX7%2BKQkxGzpdS%2FHRJ5wmwG7Y3oO43kmp89px5yDojCjd0dgHNLnB5m42jxNd5IktSa8vGw9ejDCbiaXj5IgqmQFhsXRJIgwnuBxMaBvSGJcN7e5hkOa4vbRMEkvNSPJo4HoXZ2iaJhanR8WP%2FWf2Q%2BSXe0AtP6nle5w4T%2FU0qscvSy4KEsI6%2BhTjX7PQ%2Bx3n4Ym8dXb%2BnBumn0B%2B&X-Amz-Signature=9d76bab2a6b3272ccb9adf17e717cce3ef6269a78204696dade6102e8fb856b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEUJRUOC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGO%2B5iPVZ2Fpz%2FJrIPr6it8KrzP1lJ4gMzGOjZK1n74hAiEAssUxG0%2FbtXDSkFwjYE%2BQ%2B6mnLXsznE7%2FjONji8SJeb4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHIlgQY3m7MaqNeE0SrcA%2FZFjy71Bv%2FcaSt6DOdjqNUDa1l8npLATcMz1qiNVqsWZQp7fXS4nzAir4aOZD2iecaIoL4zcVacvlP%2BeKY7hbNTsEBZENNKu%2FH2SSjMRy5MqynqyuQAIvac09hh57iBqSGjRdMBKYmw9lGLX437kN5hBAjDaCdue094Ua88OwKM1nnhZp%2B0B%2F1CLsMxeo4Eu7eORYE%2BoVuhpgsh7qXbaMswQ6b35oIps5f4zVrHc61%2FF6d4jdsVhxlTziBNyyQJiWMOL%2FbuYOobCFpWEXuw%2BBElvaXS7oHfaLiOgmABerS0I6uoIvuH40FVjM98EZyNVKtyIM5l%2FqsG%2Bivy19ixD4zVPTM%2FwtuLB9NBiBwWnwPImGIuzyVhECwUbpVKX9xkNYD4RQ6vgQ8m7YOWVUnMMx17IgB%2FahuVh9y0wtciLQ6%2FDLnRTOu6KbnXFJL4Z%2Bt4CMmkAAA3EWQaADZiga9t%2F5Ancufgz33BjoVlGkCjKyvWt1eOnMi6WhPswC30vI9AG2vsPdkFSMZeqJ6cukQJYihGw88xJP2AITci8kwhe0u1Jhm9N%2FBg6Kjq%2BIaAcvxH1fCg%2BXduE1sFuwMUSAF5N16x6DR5wyWhRUg1uOKQ8MitxRyQAghjwsVJ%2B5yFMJSy%2F70GOqUBFMVcETxjTfJoHX7%2BKQkxGzpdS%2FHRJ5wmwG7Y3oO43kmp89px5yDojCjd0dgHNLnB5m42jxNd5IktSa8vGw9ejDCbiaXj5IgqmQFhsXRJIgwnuBxMaBvSGJcN7e5hkOa4vbRMEkvNSPJo4HoXZ2iaJhanR8WP%2FWf2Q%2BSXe0AtP6nle5w4T%2FU0qscvSy4KEsI6%2BhTjX7PQ%2Bx3n4Ym8dXb%2BnBumn0B%2B&X-Amz-Signature=a486e04e8e791f1087770d28f8356472d7ff7ceffedead037ebc9e61a80d1835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
