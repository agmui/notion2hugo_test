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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LASBGG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIA9QU50NKbY9oaxh17gxsZtY3q9MBozf9AwLbv7g0rQ0AiB%2B5ntsyTbGS4w7V0DfNCb%2BJFhpAa3t4tkPWr5msJ8XrSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qfCTc8XNScHRuaYKtwD0TpOx1U7qTe5%2FbuhfVzgOkNopXh7B3s0IkTmGkwKmOwXhmitPXcfy8Qpq8mJILL5LDA4ouYnimoWaUmskgcudDxdO5Q5QBoUosP14AKDoQwff9DQq0aeaaFYV37qno93wj7cX0ACKaeMHTaDjbs4rFUw%2Fi5rNBDrpkTR645biX03cHDHqi8zp8xqnDjKLBFOurMznfZH0bPDwBgB2UMRJNHALjA0rMQ2m8rK%2FgC0X0IoJZbC42975f1%2BI5SypVA%2FzOpA0Ki4JplznR%2FhRr5CLGgQQc7Jy4C4dq4u4H5ktMjlM%2BUVexC20MLuWaxl76DPnad9yePCFQOftFJFLb%2FZ0yyz8mqg3b94dji6GToQEeP1xEn8FGY2zO8fIAx%2Fjja8DFC6W5zEmKr09bLbG7uh6y2%2FaRlxOUlaOj899paK5H1c8TLGD%2BXc0ezQ8%2FUre%2BdxoCWYk%2BAtPZ9MesrHxRhX7FEtvVlf2kMbk9V0OzS71YilgjaRyEGzA05TOndfQQ41eL1eeXHlDsqaoNFhk37VqjmTtDCQPe4To%2FxJmv5%2FyRVcyL5CJ%2FNJ32B96IcVfmaeUcqkshvuGC%2BqIeCIdHTPeV2R7lXjHmxC6xZu9knQ1eZIhY9xQeaGqFvhmucwgpOxwwY6pgEQcQYuGBjr%2BoMteHPXlQaR0V39NFkU4qT3MFznpt5rrCTwlzdcCnBnhwLQihp2s6sGTKCSnJY5QsGdXPCWJn0iUkLQxrPO8cdY%2BS26ail4d%2Fn5pWydIJdDWToy5XOLf2gMhcY3GnZZOYGRASAMMp%2FW9BQGIY2mcowalruyxwHU4Zv6WQXS%2FlesGEJ8HM7D9t%2F43RMxLENaS7Jn3LowgZM6GtuE33QW&X-Amz-Signature=d58bb38576be6c18b63b237c3de81a0069429ea42616c871b5df2be42d3013f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LASBGG%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIA9QU50NKbY9oaxh17gxsZtY3q9MBozf9AwLbv7g0rQ0AiB%2B5ntsyTbGS4w7V0DfNCb%2BJFhpAa3t4tkPWr5msJ8XrSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qfCTc8XNScHRuaYKtwD0TpOx1U7qTe5%2FbuhfVzgOkNopXh7B3s0IkTmGkwKmOwXhmitPXcfy8Qpq8mJILL5LDA4ouYnimoWaUmskgcudDxdO5Q5QBoUosP14AKDoQwff9DQq0aeaaFYV37qno93wj7cX0ACKaeMHTaDjbs4rFUw%2Fi5rNBDrpkTR645biX03cHDHqi8zp8xqnDjKLBFOurMznfZH0bPDwBgB2UMRJNHALjA0rMQ2m8rK%2FgC0X0IoJZbC42975f1%2BI5SypVA%2FzOpA0Ki4JplznR%2FhRr5CLGgQQc7Jy4C4dq4u4H5ktMjlM%2BUVexC20MLuWaxl76DPnad9yePCFQOftFJFLb%2FZ0yyz8mqg3b94dji6GToQEeP1xEn8FGY2zO8fIAx%2Fjja8DFC6W5zEmKr09bLbG7uh6y2%2FaRlxOUlaOj899paK5H1c8TLGD%2BXc0ezQ8%2FUre%2BdxoCWYk%2BAtPZ9MesrHxRhX7FEtvVlf2kMbk9V0OzS71YilgjaRyEGzA05TOndfQQ41eL1eeXHlDsqaoNFhk37VqjmTtDCQPe4To%2FxJmv5%2FyRVcyL5CJ%2FNJ32B96IcVfmaeUcqkshvuGC%2BqIeCIdHTPeV2R7lXjHmxC6xZu9knQ1eZIhY9xQeaGqFvhmucwgpOxwwY6pgEQcQYuGBjr%2BoMteHPXlQaR0V39NFkU4qT3MFznpt5rrCTwlzdcCnBnhwLQihp2s6sGTKCSnJY5QsGdXPCWJn0iUkLQxrPO8cdY%2BS26ail4d%2Fn5pWydIJdDWToy5XOLf2gMhcY3GnZZOYGRASAMMp%2FW9BQGIY2mcowalruyxwHU4Zv6WQXS%2FlesGEJ8HM7D9t%2F43RMxLENaS7Jn3LowgZM6GtuE33QW&X-Amz-Signature=e399d0e0caa3ff6382d0b80bb2dce4e094a29b9908068e5d93d5105f2c170738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
