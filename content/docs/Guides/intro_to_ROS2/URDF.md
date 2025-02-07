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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWL6RM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCikcIDOmy2PGY%2B8GtFTPlG91JkYWIOFQeHSOLIEB0%2BZAIgHlWbq5Lls6tLwoMyt5ULYWgnQIwWYbtWW3qngwEMxigq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHZgqFCG1lehxshBJircA2A7K0LqZQfeFfoclesSPgyDsVABZWUKjdVSvcZ%2BjD5s5AQS9KC0Xdx2amGMA5gmNTPEp3FqZN40%2FUDK1tz3gCZrmvyU0JTUwrp7tqNkwr3sKYr5eJWVvsOaCSevIOG0Y6sHIf9aW%2FacavCYgXoZJVK5%2F37zlBPpJn53TIfqOqTlqGYXUgmVjmXSMALw2GrUvqCpInyA49qX4tZAWuSfXCSOGPumhZ7DRU69g6JQP1jWxNHt3YZ8psj14mh7hCoUjouxXJdO4BasqE2KE7%2FG7AML82R087vc10KLhCXKgk44FWVeC6ZCj8KdTYY8gweDR9zsNhvSE2CPVkeO%2Ba0ApaTz%2B1DhUWsVH7tgyIZCGFDW%2Bdywv6Jc%2BNFnmS8rpjgJZbTHZWYPubgtQtSg5lgY%2FNvBsK%2B2T1L%2BZrEIqTS5%2F%2BVa0LsprsClOfMJUaRslLYI2eLW6h7bghqfYU3ITHcR53z328yaRWrb%2BNomg8%2FWR46EKJ3SmGgsKyMU0zffGkoQOthwNmzoalwnPiVLCE%2BfVIc4u%2Fmg9ey2BEVY8XJaVuHfqJhni22NV2SyOql3MUkZuKrZ4WohUBg0kvLzBlkXlb8WcEcPMu30MGkAkJNyi04ksLosgjBNAIEJQV%2FmMJObmb0GOqUBcLL6VVsoCnk5yHSJURwjlFaUE%2BEVhqvIfvVn%2FfFFQsthoRqo3%2FQzbvm4cblYjaAdGKqkDLwiwbz7VrFwq3sGBvjVQTdYHGGAKMI4W7f6SiAlkAdicap0lfGagHBUr%2FOKnE4ukUWMNQnS6nzdV8ypC1NlHJ3Ekeq0SdfH1hCzwQpyNTVF1RRQnfbXVjYpVEuupRUWgK5OAeABKUz2%2BIhVsgz7sELq&X-Amz-Signature=3796103f9d7bade9cd0ecf7873038724a4867b5f724826c05402b9cd76be5b68&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWL6RM%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCikcIDOmy2PGY%2B8GtFTPlG91JkYWIOFQeHSOLIEB0%2BZAIgHlWbq5Lls6tLwoMyt5ULYWgnQIwWYbtWW3qngwEMxigq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHZgqFCG1lehxshBJircA2A7K0LqZQfeFfoclesSPgyDsVABZWUKjdVSvcZ%2BjD5s5AQS9KC0Xdx2amGMA5gmNTPEp3FqZN40%2FUDK1tz3gCZrmvyU0JTUwrp7tqNkwr3sKYr5eJWVvsOaCSevIOG0Y6sHIf9aW%2FacavCYgXoZJVK5%2F37zlBPpJn53TIfqOqTlqGYXUgmVjmXSMALw2GrUvqCpInyA49qX4tZAWuSfXCSOGPumhZ7DRU69g6JQP1jWxNHt3YZ8psj14mh7hCoUjouxXJdO4BasqE2KE7%2FG7AML82R087vc10KLhCXKgk44FWVeC6ZCj8KdTYY8gweDR9zsNhvSE2CPVkeO%2Ba0ApaTz%2B1DhUWsVH7tgyIZCGFDW%2Bdywv6Jc%2BNFnmS8rpjgJZbTHZWYPubgtQtSg5lgY%2FNvBsK%2B2T1L%2BZrEIqTS5%2F%2BVa0LsprsClOfMJUaRslLYI2eLW6h7bghqfYU3ITHcR53z328yaRWrb%2BNomg8%2FWR46EKJ3SmGgsKyMU0zffGkoQOthwNmzoalwnPiVLCE%2BfVIc4u%2Fmg9ey2BEVY8XJaVuHfqJhni22NV2SyOql3MUkZuKrZ4WohUBg0kvLzBlkXlb8WcEcPMu30MGkAkJNyi04ksLosgjBNAIEJQV%2FmMJObmb0GOqUBcLL6VVsoCnk5yHSJURwjlFaUE%2BEVhqvIfvVn%2FfFFQsthoRqo3%2FQzbvm4cblYjaAdGKqkDLwiwbz7VrFwq3sGBvjVQTdYHGGAKMI4W7f6SiAlkAdicap0lfGagHBUr%2FOKnE4ukUWMNQnS6nzdV8ypC1NlHJ3Ekeq0SdfH1hCzwQpyNTVF1RRQnfbXVjYpVEuupRUWgK5OAeABKUz2%2BIhVsgz7sELq&X-Amz-Signature=ce0153a834ed73ce19ed537d327f9f184a52c3021e67dc6866b2e5579cb0aa87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
