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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6BBDDP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAucMQEvgnErj%2FTCFQYLR8262%2BPvQ11%2F6tEexK4O716AAiB7Jvp8TN2tEbRxjSojBm8GcOYQVxqx3EsbHWdt7OVKqCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMMrJInmrU5zcmERZiKtwD0dqtpGHUzmXP3IEgoRKjmdAG0BnzBJq5VWHINykc%2BgcJuYk3MiCD96oDku%2F3lmAhXp3dvpUBpq4EQ2KabUrM1D6UI0Y8fGIFd%2FQaf774zFBIfkkwNLJOyl%2Fbj5hNOYcZSf1hNn%2FXds%2F6UOb2P24zMYiakWpF7EN3bzfWLjY3bvpkQ0R%2FimDANLpMEsPzpl1G1feNLr3DtTtR5ODODc6Y5Pcm5ZIOVEyBODdJljJWITjkempZ0G7NisX4nGXS2kMjGipQdrU%2FqMbdCRCn4UXiVIaHmzhx7M0XPsmF4Y7jk0l%2B%2FiH%2FxvoC8xkD12lULPDZTCjQzxXyLo8tn4AHduZVeNTo3fk5VwYNZjj8EVS2Aeq76pmZk7S30I6EBqDLI%2FyruETvuGE2BNtvx%2BVVxnlB43RiREXYtfBcFdxsuMKp0H9zir4stK3i3jIJzk4NOt3ETYDS9u3lx7IJMBK5VousaN5AcBPTQB5ZfOaxaxrn3LSVhcnDSzkHnZGw%2BbJ7c6Cc72fO8abUau%2BZ4z7KSmMndMBbuOWT0LbfzNwLNMd9Iv3noR4grK7LBrsIzB0WZh5Go3ZYNxU%2BrWD6Y2Rgns3VFcMqFQgcSRyoqoE8QtqIDJh9moLRCxMn1CA6YxMwwbjSvwY6pgFgwvJf38Mrt882SdZbvjoI0cfqD%2BAGTodu6Cn0kfXld57aLN%2Fi35gB8u%2BZEY%2Fp4iB6OywHmielibgIZaXJCUWyByZEibTHQsgAuYBoVhx8dCTF7oB8fdGDiDuHZFZwqyHhCVY1pAuHKIhIqMUWfizIURKI%2Fbf5XUvTxQnQhmd56O7CHo6bQy6dNi18WfJsUzryxjcwAsIvLjfu1HMiz4whzs6HpKLG&X-Amz-Signature=de00c0d2916fde7fd21b1b2d5c7d22376ebebd2becad705ac4e43d20afd7dd07&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV6BBDDP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAucMQEvgnErj%2FTCFQYLR8262%2BPvQ11%2F6tEexK4O716AAiB7Jvp8TN2tEbRxjSojBm8GcOYQVxqx3EsbHWdt7OVKqCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMMrJInmrU5zcmERZiKtwD0dqtpGHUzmXP3IEgoRKjmdAG0BnzBJq5VWHINykc%2BgcJuYk3MiCD96oDku%2F3lmAhXp3dvpUBpq4EQ2KabUrM1D6UI0Y8fGIFd%2FQaf774zFBIfkkwNLJOyl%2Fbj5hNOYcZSf1hNn%2FXds%2F6UOb2P24zMYiakWpF7EN3bzfWLjY3bvpkQ0R%2FimDANLpMEsPzpl1G1feNLr3DtTtR5ODODc6Y5Pcm5ZIOVEyBODdJljJWITjkempZ0G7NisX4nGXS2kMjGipQdrU%2FqMbdCRCn4UXiVIaHmzhx7M0XPsmF4Y7jk0l%2B%2FiH%2FxvoC8xkD12lULPDZTCjQzxXyLo8tn4AHduZVeNTo3fk5VwYNZjj8EVS2Aeq76pmZk7S30I6EBqDLI%2FyruETvuGE2BNtvx%2BVVxnlB43RiREXYtfBcFdxsuMKp0H9zir4stK3i3jIJzk4NOt3ETYDS9u3lx7IJMBK5VousaN5AcBPTQB5ZfOaxaxrn3LSVhcnDSzkHnZGw%2BbJ7c6Cc72fO8abUau%2BZ4z7KSmMndMBbuOWT0LbfzNwLNMd9Iv3noR4grK7LBrsIzB0WZh5Go3ZYNxU%2BrWD6Y2Rgns3VFcMqFQgcSRyoqoE8QtqIDJh9moLRCxMn1CA6YxMwwbjSvwY6pgFgwvJf38Mrt882SdZbvjoI0cfqD%2BAGTodu6Cn0kfXld57aLN%2Fi35gB8u%2BZEY%2Fp4iB6OywHmielibgIZaXJCUWyByZEibTHQsgAuYBoVhx8dCTF7oB8fdGDiDuHZFZwqyHhCVY1pAuHKIhIqMUWfizIURKI%2Fbf5XUvTxQnQhmd56O7CHo6bQy6dNi18WfJsUzryxjcwAsIvLjfu1HMiz4whzs6HpKLG&X-Amz-Signature=ca80535ab079691ec1d67c301894cce1108ad690dbb941324f758b6ceb12cdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
