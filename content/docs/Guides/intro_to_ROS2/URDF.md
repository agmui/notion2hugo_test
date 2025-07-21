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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FOOI6J%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpKU%2F0U7e2eGE4LODP4qgvhYqza36x%2Fk9uIb4bQEVYZAIhAIQYHdPdP8Xl0kM275zFa8isn3cWCkXP%2Bd4s%2FhL4e6XQKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi5LYLKmmYIYzmkNYq3AOzVJ6tQWONJKk96%2Bke%2BNIKUnlND28pLaPVWgAlmf1A0pw8Xu8AP0O9KiIYoLA9smD%2BqscopG0YIp6ZOmUtAmWnMtbVH9pVJuVBhmKy%2BqJZNL5FE%2FVdLHANE1xxYRS5RkngSm41N%2B23S3WPZq5HlT8YtycWlw8f3ycMG7QlOkozN3j3ha%2Fc1UiWTxq9s4Z97f48X8Vw%2F1ok0PQxZlzQGHTAhL2DHlfLNvL4WVahjxjYuK2gxruc8H%2Fv8fZO6wH3KHPmHwSsCJ87IGqF4wfSMWnSU7gltkbuDdARpJ0sZ%2BYiwcmnlja0LXcRcu3810LwuUskzsEMiPj%2F%2BUZAuU7y36sjfG4ifhfO8vSuJnZbNa5BtNYsj0lLWUn3C4ojWdFJ6b3tBX4fcQzYznSZNl2WgrsN3fTiq%2BilxxJc4A7fpL5aV7VSseM5ZXevXgRBxi6ltbi%2BDuNL54ssKiwkNTPOh4i8%2BI8rx9xieaRfjCKJyBq6WJqyFVEX48S2frcJJPgaKd3jsEiDvglmwhjnLDmul2xZcCyhuY3LyPxtDuAnCmLE4y8bYftwS0IqNZ4Qd74YhgrsRynMKEEzuEt7XUCuovW4H0VjJaDQDktcZuKOHTer%2BHvNwbWRdbrTwlmSJTDUxPnDBjqkASoXUx7qTxQ67UfZhPS8Q%2FfWSjbLPCEHNIEHmTfsesVS3EupC5KgMdj47dt%2B95ySYFz9vvCC%2FsgDj4jnALBqpqbIvQkcjXPT%2BHr66pFaRQe5coesZ1XdGjxJroHHnzljOnTKibR1BAlMyCycnsp8%2BcEHJOzFxiGkyN4ts4kp7NPd0CopnZoNDIqM4hQvkiWqAw79WBeuHIcsZgl5%2F1nD2B7Fzmoz&X-Amz-Signature=824dc6406d2582bf92988d19295e59d72a0412b936e6db034e5b60b4c14b6716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FOOI6J%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpKU%2F0U7e2eGE4LODP4qgvhYqza36x%2Fk9uIb4bQEVYZAIhAIQYHdPdP8Xl0kM275zFa8isn3cWCkXP%2Bd4s%2FhL4e6XQKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi5LYLKmmYIYzmkNYq3AOzVJ6tQWONJKk96%2Bke%2BNIKUnlND28pLaPVWgAlmf1A0pw8Xu8AP0O9KiIYoLA9smD%2BqscopG0YIp6ZOmUtAmWnMtbVH9pVJuVBhmKy%2BqJZNL5FE%2FVdLHANE1xxYRS5RkngSm41N%2B23S3WPZq5HlT8YtycWlw8f3ycMG7QlOkozN3j3ha%2Fc1UiWTxq9s4Z97f48X8Vw%2F1ok0PQxZlzQGHTAhL2DHlfLNvL4WVahjxjYuK2gxruc8H%2Fv8fZO6wH3KHPmHwSsCJ87IGqF4wfSMWnSU7gltkbuDdARpJ0sZ%2BYiwcmnlja0LXcRcu3810LwuUskzsEMiPj%2F%2BUZAuU7y36sjfG4ifhfO8vSuJnZbNa5BtNYsj0lLWUn3C4ojWdFJ6b3tBX4fcQzYznSZNl2WgrsN3fTiq%2BilxxJc4A7fpL5aV7VSseM5ZXevXgRBxi6ltbi%2BDuNL54ssKiwkNTPOh4i8%2BI8rx9xieaRfjCKJyBq6WJqyFVEX48S2frcJJPgaKd3jsEiDvglmwhjnLDmul2xZcCyhuY3LyPxtDuAnCmLE4y8bYftwS0IqNZ4Qd74YhgrsRynMKEEzuEt7XUCuovW4H0VjJaDQDktcZuKOHTer%2BHvNwbWRdbrTwlmSJTDUxPnDBjqkASoXUx7qTxQ67UfZhPS8Q%2FfWSjbLPCEHNIEHmTfsesVS3EupC5KgMdj47dt%2B95ySYFz9vvCC%2FsgDj4jnALBqpqbIvQkcjXPT%2BHr66pFaRQe5coesZ1XdGjxJroHHnzljOnTKibR1BAlMyCycnsp8%2BcEHJOzFxiGkyN4ts4kp7NPd0CopnZoNDIqM4hQvkiWqAw79WBeuHIcsZgl5%2F1nD2B7Fzmoz&X-Amz-Signature=026ef84dabbd0c1d05540ffd9fc0d1f97e4708546b87d636bae7a125319a3fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
