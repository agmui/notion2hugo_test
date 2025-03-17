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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IMAIE2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qrHXppFZmeFVpugsdU8r00U56gtN%2FZ%2BUU2REFxwU%2FAiEA%2BGC3VjAp%2BIlLR3xrp1YRuIv%2BvL%2Fgq9rlMINWzu7%2F%2FCEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDCwgWGXX50XMJ1S4yrcA5J6lGCso1jp4q3HOUQwqfxYnzQTlb71zAj%2BQmX8SIk1kRr%2BIXg6yuGZwRvkidvrUMYoQNApmwYh%2FyaOPkBIT%2BuVv6qmMPGwgdM%2FDq8RH2%2BwpaXvrbjM19tVhWJlKVr2oHUgCn5twaYWMn5gHD4P7Sps8392H%2FG2jldKZ5i1Wt0v7v%2FbUNmLtblMhs7OPAcG7i2TuavA2AvuoqxN3pHwp9Iw9aV4g4buDeqDpb0r0LxQziTjseBgWXVynpSzaHrCKqI1ql3O%2BHmqsaBrEL27oocCVecwnTQeRfXxRY4g3DkPm5n2LuYokwNNYwKLYXIIVayteXvHJnZb41z5n4pux4V0%2FikrIqzT1VOnTzXsNeLOd72SlUo%2FmfXaxV0VgjP5VMUtDTaiIvSyD%2BEl2t7eiqWrmEjvnGz2bz5cICAKDuJZ%2F5eap0D40yYNRNVNtw9BA0TgKY%2BSsKAb6u0czA4VqFKw9c2GYfApXc4pWfGYmfMVPJYCNVcJ%2F%2BT2InfgtJd19fBhPEIEe%2BSy26b9fwN5g%2FiOE4QJoCtwLpZqkUTMsxeOQEe21kSmut4jkLcs8KgmV45gdlGBoS89%2FgTfe3ZfGc4Tm1CemkeZrZAj9FuOTMweLtoPExqGwD3xaJ88MLW83r4GOqUBNJnkf%2FQVDUw0njzNEE%2FWnTThgP9D8RoT8Nu1jAi3DQ0bRouXI7bfdxHMViqrrvWmXlALLzBzaPMEiTmYb5fd3qSZ9fpNYwJ9D7ckiBQHShVrsh%2FErH8SJCkF6hqCw1lvDhzjVq5yBHqkgCYg5V5u0BseLx7WNGPbi%2FPnLeYe%2F0hcYiLlJfJAhUny9t7tEP3sLFIWqZGBY1EnDgfnmo8hJljY3DBJ&X-Amz-Signature=f052ff4cea9b3334671e7810cc4b7aeb80c6b100a6b56f384cb0fa34203a102a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633IMAIE2%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T041055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1qrHXppFZmeFVpugsdU8r00U56gtN%2FZ%2BUU2REFxwU%2FAiEA%2BGC3VjAp%2BIlLR3xrp1YRuIv%2BvL%2Fgq9rlMINWzu7%2F%2FCEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDCwgWGXX50XMJ1S4yrcA5J6lGCso1jp4q3HOUQwqfxYnzQTlb71zAj%2BQmX8SIk1kRr%2BIXg6yuGZwRvkidvrUMYoQNApmwYh%2FyaOPkBIT%2BuVv6qmMPGwgdM%2FDq8RH2%2BwpaXvrbjM19tVhWJlKVr2oHUgCn5twaYWMn5gHD4P7Sps8392H%2FG2jldKZ5i1Wt0v7v%2FbUNmLtblMhs7OPAcG7i2TuavA2AvuoqxN3pHwp9Iw9aV4g4buDeqDpb0r0LxQziTjseBgWXVynpSzaHrCKqI1ql3O%2BHmqsaBrEL27oocCVecwnTQeRfXxRY4g3DkPm5n2LuYokwNNYwKLYXIIVayteXvHJnZb41z5n4pux4V0%2FikrIqzT1VOnTzXsNeLOd72SlUo%2FmfXaxV0VgjP5VMUtDTaiIvSyD%2BEl2t7eiqWrmEjvnGz2bz5cICAKDuJZ%2F5eap0D40yYNRNVNtw9BA0TgKY%2BSsKAb6u0czA4VqFKw9c2GYfApXc4pWfGYmfMVPJYCNVcJ%2F%2BT2InfgtJd19fBhPEIEe%2BSy26b9fwN5g%2FiOE4QJoCtwLpZqkUTMsxeOQEe21kSmut4jkLcs8KgmV45gdlGBoS89%2FgTfe3ZfGc4Tm1CemkeZrZAj9FuOTMweLtoPExqGwD3xaJ88MLW83r4GOqUBNJnkf%2FQVDUw0njzNEE%2FWnTThgP9D8RoT8Nu1jAi3DQ0bRouXI7bfdxHMViqrrvWmXlALLzBzaPMEiTmYb5fd3qSZ9fpNYwJ9D7ckiBQHShVrsh%2FErH8SJCkF6hqCw1lvDhzjVq5yBHqkgCYg5V5u0BseLx7WNGPbi%2FPnLeYe%2F0hcYiLlJfJAhUny9t7tEP3sLFIWqZGBY1EnDgfnmo8hJljY3DBJ&X-Amz-Signature=a16d081e3dc2016565bf96b8ab8ba861963160b0b66e3c96226575aab984c4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
