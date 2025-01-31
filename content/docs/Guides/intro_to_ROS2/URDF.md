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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DV7IQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfujEA7Ro79OkMsGKKxLd0Varz2sMGQFqcnPRWeuNL%2BAiBPY5mH%2B393%2BVWkE1U%2FDJViaz2uq%2FDNPWAXJ%2BPq9bEe0yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPowzH148IdcdDrU4KtwDTrIkVaHtg%2BEc3GjEa2Y6FUms1AGYOpnWF7UdqVqkeg0Z7Js4bgk2COcy2a5emIR8PuemxG32S2%2BI8kyhbBJ6Fk8%2FZPX0VtbXG%2FV9fYf8a%2FBTeWTtuQ0aYrNwVJZOu8LybgVTg1OAdjRpItkhcpVqXcBUzelkZtwvQBTk37V6Nn%2Bog7rRgniaOeFCm8QvxijX%2BOdp4F6UTsUVIsM9rnIXqd8MtE4zqlGCoAKFLQAnPz9Tgk%2FBcO1aGz81iaOwA6ZVfRTMXwaz8M6M4340SW2LHd%2Fj0eL4mTI2qm7oVLckz1uIXGBVSQU8ql98ENV6egu7Z8zgaJ4T3zJiINfDNe91L3QffNXzbPk5TfUrsA%2FXCJXFQDoAchqXsth45rF7Th%2BZibVaPt3DZS4MIHUYyH9TUqqHNP6Et6yuIZYg1dozxlzzQK0uG4JsYoO%2BhEnm9N3PwexzZKK8dkOdUDZayi0gN5lgl%2F78p%2F1MYP%2Fd37klV1pf5aJiPzjZtBKegPAPNKAdh0%2FD2HGEPwmv%2BkxJ3pw64jikOYHZ%2B3ek9NoNuPkGg6CaD%2Bkl5Zj482yXsOrnrmhEMCFGeByIeONjvIP%2FwJOVA5j6q1TAhiGp7ynkIUMrcL3MFvL%2Br%2BcKxw18q9Uw%2FdHwvAY6pgHbx2gYaxxjRp6qw1s8BDGaHis%2BxqSFy%2FnNggBavwuJiVlpfl1uuPgGcJY4aHWzTW1p4f5QkV%2B4JU%2BSrpW51qnszlF7b%2FcrSh0zTsICnGIR%2Fpxt%2FpmFpLou3lkXW948yRfGyFVXvkkDIGIJ%2Bb48x9VGRttN9DxctJNRNiyk4jpUQ0%2B27Jgo%2Fqczba5%2B7tTwjqf3KHA2jjxpeMCkPRl0b9hNYpZDh3WU&X-Amz-Signature=e1981df194d47190c8c9f42dd4231c0925af49c9c61b39d1f1f0550632e675ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DV7IQJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfujEA7Ro79OkMsGKKxLd0Varz2sMGQFqcnPRWeuNL%2BAiBPY5mH%2B393%2BVWkE1U%2FDJViaz2uq%2FDNPWAXJ%2BPq9bEe0yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPowzH148IdcdDrU4KtwDTrIkVaHtg%2BEc3GjEa2Y6FUms1AGYOpnWF7UdqVqkeg0Z7Js4bgk2COcy2a5emIR8PuemxG32S2%2BI8kyhbBJ6Fk8%2FZPX0VtbXG%2FV9fYf8a%2FBTeWTtuQ0aYrNwVJZOu8LybgVTg1OAdjRpItkhcpVqXcBUzelkZtwvQBTk37V6Nn%2Bog7rRgniaOeFCm8QvxijX%2BOdp4F6UTsUVIsM9rnIXqd8MtE4zqlGCoAKFLQAnPz9Tgk%2FBcO1aGz81iaOwA6ZVfRTMXwaz8M6M4340SW2LHd%2Fj0eL4mTI2qm7oVLckz1uIXGBVSQU8ql98ENV6egu7Z8zgaJ4T3zJiINfDNe91L3QffNXzbPk5TfUrsA%2FXCJXFQDoAchqXsth45rF7Th%2BZibVaPt3DZS4MIHUYyH9TUqqHNP6Et6yuIZYg1dozxlzzQK0uG4JsYoO%2BhEnm9N3PwexzZKK8dkOdUDZayi0gN5lgl%2F78p%2F1MYP%2Fd37klV1pf5aJiPzjZtBKegPAPNKAdh0%2FD2HGEPwmv%2BkxJ3pw64jikOYHZ%2B3ek9NoNuPkGg6CaD%2Bkl5Zj482yXsOrnrmhEMCFGeByIeONjvIP%2FwJOVA5j6q1TAhiGp7ynkIUMrcL3MFvL%2Br%2BcKxw18q9Uw%2FdHwvAY6pgHbx2gYaxxjRp6qw1s8BDGaHis%2BxqSFy%2FnNggBavwuJiVlpfl1uuPgGcJY4aHWzTW1p4f5QkV%2B4JU%2BSrpW51qnszlF7b%2FcrSh0zTsICnGIR%2Fpxt%2FpmFpLou3lkXW948yRfGyFVXvkkDIGIJ%2Bb48x9VGRttN9DxctJNRNiyk4jpUQ0%2B27Jgo%2Fqczba5%2B7tTwjqf3KHA2jjxpeMCkPRl0b9hNYpZDh3WU&X-Amz-Signature=3e94db4d25f7fd09e2deea355778cad231f40f6d6b151e08eb1927cdadb12d00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
