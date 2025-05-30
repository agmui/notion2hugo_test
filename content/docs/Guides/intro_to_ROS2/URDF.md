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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OSVZUJI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7CwPWZAzk5AiO5lkpjBQ8wznZ4JSfkEGBbO34bBzQAIgNpEJz6bzL%2BsFlJkXvtcZevHQ7GccJ2UCBTkjyAMrLCgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtKY3OtvsT5fk8aTCrcA6jVVY7AbCwd%2FQ%2FKhQ5rAY6NsIzJc7ar5nTTGUq2gxxecLKKqsTtQLRtjMMLCXTEe65FBNhToJOdSQtJz%2B8hsmfwszprI%2F17GiVxZQ%2B%2FD1OLkMz0E9MC%2FpYoAjCjVNv8yMi1zStZr8vxMs8cgih6Y%2FQwbjwm8utPwNhvjx7qWitghRWK8cdXH5Ea6oAecaSUuUURjiC%2Fc0gGItAVteikjFiRNTI4EQA1ZDzPv7zvn0JSStjapgZcz8YfDnUllFSQmptS4jDQnQKnYxVuGBftRuR%2FoLKMkRq9xmbR8zw4X2nCVB8N0GljQzjj6aHjrgEJDYjVupOp2brOCFaMiFRvikrjdhw4%2F5DLVhgVwhK7ZPGOfnuLwCBm0ULiQCGYF8cCbmbAlJLQDK1FN6CU0Znx78wE8QLNlRRfKncaavJzP7YIlNfsRLZoMH10dz8zP4UawKUD74fiGu8Po0vuYM%2BGBsRn0LBvPDCw7PJcAarGmOWnB3dWYn6pmYj3EAZEMhJbD81T0CDLs3HVTpieJH736SSi5UoQ9csEkOYXXLxKE0W3FyvfUs3nrY0SpdNZwzRly4Gw3kaFFZB81PMwGC87yUYYFJEoVa9rGCpuJqaEH7ejszaVo%2FDoN4Of%2BDH3MLCm6MEGOqUBU83i%2BQ%2BEmPi4V1IC3bQRCMvRwQQeyKgiDi%2BRgu1OOC1BuA9%2Bb3DFh6k%2BfHxvJF93kow5Dtwutf2F%2BPAwSSHH8H8TUTvjev3txRc%2FABASgZXeYb5ZuK06%2B5fJ%2BegB6csgEK4qJ2CW5mhCTACeD4tx8hpaQOZp%2B1wtTgNfTYotvaLXcNdHs1vIfH81jpogVq5jvPB7gPwmKDWUym%2BssJwfFAEqeDJF&X-Amz-Signature=cc8ceafd13f671c37b71346eb250e84b699ca94083be82148058301cdd9f482d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OSVZUJI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ7CwPWZAzk5AiO5lkpjBQ8wznZ4JSfkEGBbO34bBzQAIgNpEJz6bzL%2BsFlJkXvtcZevHQ7GccJ2UCBTkjyAMrLCgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtKY3OtvsT5fk8aTCrcA6jVVY7AbCwd%2FQ%2FKhQ5rAY6NsIzJc7ar5nTTGUq2gxxecLKKqsTtQLRtjMMLCXTEe65FBNhToJOdSQtJz%2B8hsmfwszprI%2F17GiVxZQ%2B%2FD1OLkMz0E9MC%2FpYoAjCjVNv8yMi1zStZr8vxMs8cgih6Y%2FQwbjwm8utPwNhvjx7qWitghRWK8cdXH5Ea6oAecaSUuUURjiC%2Fc0gGItAVteikjFiRNTI4EQA1ZDzPv7zvn0JSStjapgZcz8YfDnUllFSQmptS4jDQnQKnYxVuGBftRuR%2FoLKMkRq9xmbR8zw4X2nCVB8N0GljQzjj6aHjrgEJDYjVupOp2brOCFaMiFRvikrjdhw4%2F5DLVhgVwhK7ZPGOfnuLwCBm0ULiQCGYF8cCbmbAlJLQDK1FN6CU0Znx78wE8QLNlRRfKncaavJzP7YIlNfsRLZoMH10dz8zP4UawKUD74fiGu8Po0vuYM%2BGBsRn0LBvPDCw7PJcAarGmOWnB3dWYn6pmYj3EAZEMhJbD81T0CDLs3HVTpieJH736SSi5UoQ9csEkOYXXLxKE0W3FyvfUs3nrY0SpdNZwzRly4Gw3kaFFZB81PMwGC87yUYYFJEoVa9rGCpuJqaEH7ejszaVo%2FDoN4Of%2BDH3MLCm6MEGOqUBU83i%2BQ%2BEmPi4V1IC3bQRCMvRwQQeyKgiDi%2BRgu1OOC1BuA9%2Bb3DFh6k%2BfHxvJF93kow5Dtwutf2F%2BPAwSSHH8H8TUTvjev3txRc%2FABASgZXeYb5ZuK06%2B5fJ%2BegB6csgEK4qJ2CW5mhCTACeD4tx8hpaQOZp%2B1wtTgNfTYotvaLXcNdHs1vIfH81jpogVq5jvPB7gPwmKDWUym%2BssJwfFAEqeDJF&X-Amz-Signature=776b2188879cad2e08de73c928ee919ee962b95c84ba4ba8a13ee6fe893371b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
