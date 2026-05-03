---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVQ6L264%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4BaVQz%2BIRhpH6eafAXLKE44bKg1y6vSFd%2BoajIzgtqgIhAKXhaFI7HYk47ciRfp8xCnPazye%2BD375I3yb751W%2FzjbKv8DCEsQABoMNjM3NDIzMTgzODA1IgzXoColQKJEzeP8r08q3ANok4qpWVXhhIcJAUNrNZzg1V94v0CYVZLiN3gaqvu9vw9YNv97MIYzNctWvX7WDqAul6K9FFF3pRNOYAaex57IbsDCs7yOuA11%2F556VqHsn3lzmYgfOUSmfLryMHNT9%2BNybJqcCRTLf7GzrGpDOjbdhkE6tUyoCPX4ouwIgHsn%2Fg5fY7%2FIE6155OlEt3TogsbH5Iw64mJ%2FMfqAb7pm8zsS1v4r3o0hLgp5PZ9ip4WUDDodg5cjQ7%2FhV17SQXCBsPIfaItmxTKc%2BF3H4aMQ5p0gyQ%2Fe83PlY6lEYdjXqCJX7p1V5sbHs22z3EG7NnUrmeUxyGJtXt5xdskYl8DR9YKWFY4yz5bAmSvKCMSSmYanig5clBYNpqIU9Bbhlxc6jQLUdsI90gMt%2BUL9ziVhwlmNXzeG4Pyxsq91d16hF00X7hKe65uYV6HgvrvMUpj%2Bvd%2Bxr7ul6dVkutB%2BEK%2BkgxT1aT%2BX5nCv%2BxCatXnXi40B0DgOOBeTFbsR4Foo9G9iF%2BGR0aVmjjBHwPoCjaIZWLmguiUgjM8pwJUjSKYT42pB9PRwdDSh2MHhxnEgCsVq5wSLcDtpmrjxtSTqSlTgkj3yyzaClugztCyn2FVm5XpwZyg4DVN%2BHhjD4%2BxBvjCF19rPBjqkATb1S0BIJrILqS%2BsDndRN76butgeayxDxUFv4yLYQ1yws1Mg8U4%2FNLPzcUtiDdlKgutZULSH4ru4OLM66UMxGHwcHXLjNFmGoalg84px1a3O2jmP6%2F3QuenUYd1%2FbEo8tSoBm0%2Bo%2B%2BBTu%2BWNQBWhXw%2B0np2opcBnfJhLsTa%2FcuzQL9dUANRff%2B2cLYFdYfiq3VzTYMQ4QTyHyr0%2F5z4plpbj74Y%2F&X-Amz-Signature=6e36771e749c1421c6db12a6973527c598ed0236113aa341a4be060ba9e2d186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVQ6L264%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4BaVQz%2BIRhpH6eafAXLKE44bKg1y6vSFd%2BoajIzgtqgIhAKXhaFI7HYk47ciRfp8xCnPazye%2BD375I3yb751W%2FzjbKv8DCEsQABoMNjM3NDIzMTgzODA1IgzXoColQKJEzeP8r08q3ANok4qpWVXhhIcJAUNrNZzg1V94v0CYVZLiN3gaqvu9vw9YNv97MIYzNctWvX7WDqAul6K9FFF3pRNOYAaex57IbsDCs7yOuA11%2F556VqHsn3lzmYgfOUSmfLryMHNT9%2BNybJqcCRTLf7GzrGpDOjbdhkE6tUyoCPX4ouwIgHsn%2Fg5fY7%2FIE6155OlEt3TogsbH5Iw64mJ%2FMfqAb7pm8zsS1v4r3o0hLgp5PZ9ip4WUDDodg5cjQ7%2FhV17SQXCBsPIfaItmxTKc%2BF3H4aMQ5p0gyQ%2Fe83PlY6lEYdjXqCJX7p1V5sbHs22z3EG7NnUrmeUxyGJtXt5xdskYl8DR9YKWFY4yz5bAmSvKCMSSmYanig5clBYNpqIU9Bbhlxc6jQLUdsI90gMt%2BUL9ziVhwlmNXzeG4Pyxsq91d16hF00X7hKe65uYV6HgvrvMUpj%2Bvd%2Bxr7ul6dVkutB%2BEK%2BkgxT1aT%2BX5nCv%2BxCatXnXi40B0DgOOBeTFbsR4Foo9G9iF%2BGR0aVmjjBHwPoCjaIZWLmguiUgjM8pwJUjSKYT42pB9PRwdDSh2MHhxnEgCsVq5wSLcDtpmrjxtSTqSlTgkj3yyzaClugztCyn2FVm5XpwZyg4DVN%2BHhjD4%2BxBvjCF19rPBjqkATb1S0BIJrILqS%2BsDndRN76butgeayxDxUFv4yLYQ1yws1Mg8U4%2FNLPzcUtiDdlKgutZULSH4ru4OLM66UMxGHwcHXLjNFmGoalg84px1a3O2jmP6%2F3QuenUYd1%2FbEo8tSoBm0%2Bo%2B%2BBTu%2BWNQBWhXw%2B0np2opcBnfJhLsTa%2FcuzQL9dUANRff%2B2cLYFdYfiq3VzTYMQ4QTyHyr0%2F5z4plpbj74Y%2F&X-Amz-Signature=0c3b47ec18dc4a8b35538ec8bbf6c296dfd886894b35bcef5979adba936096d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
