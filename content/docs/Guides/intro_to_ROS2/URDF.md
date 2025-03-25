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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQU3JYT7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWXEUp8eTriswXG1EjFCC4%2BKdZ%2B8cH%2BrZTc13S6bGgIhAIuIuQ9LbFK1vK6MDkjcAil0I7tFLUnFGbIl90pfXo0zKv8DCB0QABoMNjM3NDIzMTgzODA1IgzyTJMHICTvnUFYFk0q3ANJLpa68Lmf6rgn3h73j4KfRS0nHk%2BJkxB945r%2FvjZkY5aPIANd1k3Z0kU5K%2FR9mKz5lUU5KdoxhBjDmFQ48RNpo04EuAlHjURDtaBRMY%2BfiZsL5PKo%2Fgagl8vH%2F7guBTOlDqQ7RApLOOXUDXSy7%2F1JS2K3jOhuHMdvVKQr5mSPvCnXi0Rg8nhFeWLGchQ3hOmsQn1jF%2BvClIzLQiHRvieBTU0UupsKzxrLaLF7OF2ZmGm4Spt6IhU9crDo55d32eZIBjPCYokxte76AcRq%2FGzd%2FAR29MVwU8opC368cWEQtSXwsW%2FHYMf%2FBwpZo8syqynCgMS1xdDnjNLJxuXNHo%2BtZ9%2Bqx7jD3zMstB3GltRZ3k%2B2us8mM%2F44%2Fj7%2B5oVy%2BGp6dH9s5sl8c7GozlH%2Fjc3J%2Bwe1kLjcv5Bwj8LoPd2df6TlI6813X3qUejoYUxoPNVQDkzWOk9eR6VLGdvASS153CN4RmOvJQ80I1AP6CbsSiHA21r5D1RNb2BfCAPo9hYAoxDc5GIy3HhMXf2oP14baU2eeVAvUdrnM0BEUmC87UXE%2F4ZY7K9ia%2Bu94YPldJTjowvIaZdWUtU324JxAnJdOOdKcLxfAOF%2FVnNKfKWwM1wztxeoBQyQwMosrjDql4y%2FBjqkAfteKk%2Fp8EckFKqf21ASDRwds4%2BEthRx7rrxLdF8dqVpOcM4oMuHUhJZlrv%2BAUW1XoEk22iu5gRo0RC2tugQSr0SyUwhwFJY99GOpPgzJOIYZ057lO6I95W7UiPU3MwltbYVO9B1sbm%2BsIRDhtU0oJr%2BQqNlipvVS591jWZmoCVgENbaZqCNxtKsiFDsIaW5iNVr5BaB%2BXuXkwBh7d4QFzs9fFNC&X-Amz-Signature=73323b7a050ad9b5207b1f76094af4760cb9484c9866d6ec96c03d020d028fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQU3JYT7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWXEUp8eTriswXG1EjFCC4%2BKdZ%2B8cH%2BrZTc13S6bGgIhAIuIuQ9LbFK1vK6MDkjcAil0I7tFLUnFGbIl90pfXo0zKv8DCB0QABoMNjM3NDIzMTgzODA1IgzyTJMHICTvnUFYFk0q3ANJLpa68Lmf6rgn3h73j4KfRS0nHk%2BJkxB945r%2FvjZkY5aPIANd1k3Z0kU5K%2FR9mKz5lUU5KdoxhBjDmFQ48RNpo04EuAlHjURDtaBRMY%2BfiZsL5PKo%2Fgagl8vH%2F7guBTOlDqQ7RApLOOXUDXSy7%2F1JS2K3jOhuHMdvVKQr5mSPvCnXi0Rg8nhFeWLGchQ3hOmsQn1jF%2BvClIzLQiHRvieBTU0UupsKzxrLaLF7OF2ZmGm4Spt6IhU9crDo55d32eZIBjPCYokxte76AcRq%2FGzd%2FAR29MVwU8opC368cWEQtSXwsW%2FHYMf%2FBwpZo8syqynCgMS1xdDnjNLJxuXNHo%2BtZ9%2Bqx7jD3zMstB3GltRZ3k%2B2us8mM%2F44%2Fj7%2B5oVy%2BGp6dH9s5sl8c7GozlH%2Fjc3J%2Bwe1kLjcv5Bwj8LoPd2df6TlI6813X3qUejoYUxoPNVQDkzWOk9eR6VLGdvASS153CN4RmOvJQ80I1AP6CbsSiHA21r5D1RNb2BfCAPo9hYAoxDc5GIy3HhMXf2oP14baU2eeVAvUdrnM0BEUmC87UXE%2F4ZY7K9ia%2Bu94YPldJTjowvIaZdWUtU324JxAnJdOOdKcLxfAOF%2FVnNKfKWwM1wztxeoBQyQwMosrjDql4y%2FBjqkAfteKk%2Fp8EckFKqf21ASDRwds4%2BEthRx7rrxLdF8dqVpOcM4oMuHUhJZlrv%2BAUW1XoEk22iu5gRo0RC2tugQSr0SyUwhwFJY99GOpPgzJOIYZ057lO6I95W7UiPU3MwltbYVO9B1sbm%2BsIRDhtU0oJr%2BQqNlipvVS591jWZmoCVgENbaZqCNxtKsiFDsIaW5iNVr5BaB%2BXuXkwBh7d4QFzs9fFNC&X-Amz-Signature=8db779567f6422fbb22e7b4fb31498d0d83114625be7b983874463e4b8a4f361&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
