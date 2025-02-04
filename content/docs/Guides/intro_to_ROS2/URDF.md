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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHUQOKG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH0klvTa%2BjTgKQMySWTnRh9SiS5W2EqpUSeSBv%2BqXafyAiBILkteEbKJrd7hTSdosU%2BJlkRRsL8gUxCwWFTkdtQ1jyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMz8MjC3QV2UmOItMkKtwDiVoNlgojmbOSTNMuzhBAQcXOOcSYFFo4Qqjq3SkzcZ0VOM7HegILENZNwBA3PdWp7jOgTBdSkub0YECn8Rr8ReFvvbKdPEc1nJZsleEuRwKL%2Fxw4ZBz0lYpQvCQXlFlDCCQSRv5bsW%2BpkZWyIUFysSVijAOTZstct%2BknnQmUAuzkh7gDYC87v1psfo%2BcN3v1Rh9PbevSzTpET5j%2FKyNmENPXnkLRwEP6nFs8WANNZqrVhmDuaYMdMYIxbKckgV%2BfJGBYZjzY%2FItEShKvQfuckSjPKK%2Flp3j2I0p2WqDJqLlzK6%2BIPHfe%2FeFqmxgBkbBs4sqz72zemkvI4CpfI9xdRqs084fj4vdN7tjzGYV7%2BCjXrM4oNoo1TvhDed7sZ6s9LKn8njXczO4K89FXU27ClbzIkd8zyvfEhNJooKnPLrI%2BMrL%2BxBNkMpSnhgM50byGBkOVregYjqiNJKN5e8md%2F7g9w7W2FHKEQcinUdASTF%2FFeLfV92j27aj8JtDB6bFN8olZ3AwYG2RiWq3Kj%2BdMAWTTT1WWnGrkgzDpldL%2BXvJxBLfilS%2FKe6VvSukU%2FZyE6RuHO7MOY1HjpQOfbjlPUJI6QFErZ86QwswuFX%2BuGqgdjEwjMCbsZgO1R6Uwy5%2BIvQY6pgH%2BHgKX6HicESQN3W4LpwDNkjueNXM0UxOIg6Z5k3rYVt3G410jNA8AMt2Gl1znd%2Fbn6SjFuUXuw2KwOIKPfcXc%2BIeR9hq3JhUn5Fmn98onvTBT7nT1Xrn8uSztOAJvuA6qp3vO7nBQjJkojAEWuAvqkHdOZCMT515r2IsqDver1NYvfFd219qcA5u1ScZGqovv5HdI6VjjOQTUSle2OlHfMr42HyyX&X-Amz-Signature=ace506c54d52d81096afc72aaaae9ffc3b6c13700c5962949f55aff90386600c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DHUQOKG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIH0klvTa%2BjTgKQMySWTnRh9SiS5W2EqpUSeSBv%2BqXafyAiBILkteEbKJrd7hTSdosU%2BJlkRRsL8gUxCwWFTkdtQ1jyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMz8MjC3QV2UmOItMkKtwDiVoNlgojmbOSTNMuzhBAQcXOOcSYFFo4Qqjq3SkzcZ0VOM7HegILENZNwBA3PdWp7jOgTBdSkub0YECn8Rr8ReFvvbKdPEc1nJZsleEuRwKL%2Fxw4ZBz0lYpQvCQXlFlDCCQSRv5bsW%2BpkZWyIUFysSVijAOTZstct%2BknnQmUAuzkh7gDYC87v1psfo%2BcN3v1Rh9PbevSzTpET5j%2FKyNmENPXnkLRwEP6nFs8WANNZqrVhmDuaYMdMYIxbKckgV%2BfJGBYZjzY%2FItEShKvQfuckSjPKK%2Flp3j2I0p2WqDJqLlzK6%2BIPHfe%2FeFqmxgBkbBs4sqz72zemkvI4CpfI9xdRqs084fj4vdN7tjzGYV7%2BCjXrM4oNoo1TvhDed7sZ6s9LKn8njXczO4K89FXU27ClbzIkd8zyvfEhNJooKnPLrI%2BMrL%2BxBNkMpSnhgM50byGBkOVregYjqiNJKN5e8md%2F7g9w7W2FHKEQcinUdASTF%2FFeLfV92j27aj8JtDB6bFN8olZ3AwYG2RiWq3Kj%2BdMAWTTT1WWnGrkgzDpldL%2BXvJxBLfilS%2FKe6VvSukU%2FZyE6RuHO7MOY1HjpQOfbjlPUJI6QFErZ86QwswuFX%2BuGqgdjEwjMCbsZgO1R6Uwy5%2BIvQY6pgH%2BHgKX6HicESQN3W4LpwDNkjueNXM0UxOIg6Z5k3rYVt3G410jNA8AMt2Gl1znd%2Fbn6SjFuUXuw2KwOIKPfcXc%2BIeR9hq3JhUn5Fmn98onvTBT7nT1Xrn8uSztOAJvuA6qp3vO7nBQjJkojAEWuAvqkHdOZCMT515r2IsqDver1NYvfFd219qcA5u1ScZGqovv5HdI6VjjOQTUSle2OlHfMr42HyyX&X-Amz-Signature=5340879f076326d5af69a067cf4b3e705a1e5b08c6c5b81d70f87d3d5f849799&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
