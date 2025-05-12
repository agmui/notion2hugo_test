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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPQF53R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGPAO43v63TFcOezClnf%2BWDy92XXELYUmied2WhGcXIOAiEApwuM5ZxvoDc%2FspmMRIl1JpPwcUCZc1ym0D3rNXFJRdYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu3Yp0RG1O6Svvv1ircA9hMzuY19BUiU75IFG56PaKLPryZ8Id%2BAsuIR7BrMfv7OFLZvZiRCuxpttbT%2F1HJlB2s59sbqx%2BHxrnrKQTXcvn5mPYEuAOIQqMiampIUNkIhww4jvqENQ00MhXRWA%2BizoiD2BHSJ2Y2KKp0ti63wtYTDs3ZSA%2BtphpRVCgarGICE8pkzpsVkdRC1zM3VgHe1H67PhbkQPyz7fvMpG%2BOX%2BXNekusCGX1V6IrOxh4R5rz5K4Xk4NP0PP2Flom32o8TrB7Vr6peugbK1sP9R5CfnUfH1bv7YgIqZClsIm3wY%2BxPUMWiTu%2BtOj1nxWi%2F2fq9N4P4tVM4V9fL6sblconNX4M4WWAOXs4QZQZZOO6PKKJiSeWVKzO2XeK66JszE39wjjSzex7aedk5V0ASCJyRa%2FbyIxRpVn6ahKlJ0NO%2FAryoPSYJ9lm2kSxcvGY2lp2R7GwlH%2F3al5sGj%2B8lC9xXm9MmfESE8UZQq3AU3X3jikuX4Yn2cqxUcusUwKNMOIXrRARrtLDuspyA1OYzDYryqUMJz2LAde03rM846KiHg7mTwQ4UQ%2FCNqyH6Sao8HcjsF%2Bx0PGvqJBPMqS04Ev7%2BuikBlvECSKXcFGUqE1UyFpeJMMZM1X5p3vNxc5EMNzqhcEGOqUBJTO4eHrR79%2B%2BECyeZAXnx5%2BgGdOPs72vzbZXthZ4MKCTF9b%2BBBxqlFAmqT4LZ%2Bor1SzyIVzLjy5NSo2AZur7J3Cr2WXWz50Lj6ABMGXY1LAcdmcodQQVnmVV6YRPljVXKJDsmFAdv8pxc78Ja0ACFfvTW1BoxRgkUi6aWpHR1kaA5gxxmpIa2DUtEcLEVpJj5xIW4sL3MXrRd%2FuiB8LJPClOvrWg&X-Amz-Signature=aa5427ca0a5b0e8a24fd992cc2045dfe9e1cdfd74f5c7d284da94e3efe9252fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPQF53R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T051015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGPAO43v63TFcOezClnf%2BWDy92XXELYUmied2WhGcXIOAiEApwuM5ZxvoDc%2FspmMRIl1JpPwcUCZc1ym0D3rNXFJRdYqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJu3Yp0RG1O6Svvv1ircA9hMzuY19BUiU75IFG56PaKLPryZ8Id%2BAsuIR7BrMfv7OFLZvZiRCuxpttbT%2F1HJlB2s59sbqx%2BHxrnrKQTXcvn5mPYEuAOIQqMiampIUNkIhww4jvqENQ00MhXRWA%2BizoiD2BHSJ2Y2KKp0ti63wtYTDs3ZSA%2BtphpRVCgarGICE8pkzpsVkdRC1zM3VgHe1H67PhbkQPyz7fvMpG%2BOX%2BXNekusCGX1V6IrOxh4R5rz5K4Xk4NP0PP2Flom32o8TrB7Vr6peugbK1sP9R5CfnUfH1bv7YgIqZClsIm3wY%2BxPUMWiTu%2BtOj1nxWi%2F2fq9N4P4tVM4V9fL6sblconNX4M4WWAOXs4QZQZZOO6PKKJiSeWVKzO2XeK66JszE39wjjSzex7aedk5V0ASCJyRa%2FbyIxRpVn6ahKlJ0NO%2FAryoPSYJ9lm2kSxcvGY2lp2R7GwlH%2F3al5sGj%2B8lC9xXm9MmfESE8UZQq3AU3X3jikuX4Yn2cqxUcusUwKNMOIXrRARrtLDuspyA1OYzDYryqUMJz2LAde03rM846KiHg7mTwQ4UQ%2FCNqyH6Sao8HcjsF%2Bx0PGvqJBPMqS04Ev7%2BuikBlvECSKXcFGUqE1UyFpeJMMZM1X5p3vNxc5EMNzqhcEGOqUBJTO4eHrR79%2B%2BECyeZAXnx5%2BgGdOPs72vzbZXthZ4MKCTF9b%2BBBxqlFAmqT4LZ%2Bor1SzyIVzLjy5NSo2AZur7J3Cr2WXWz50Lj6ABMGXY1LAcdmcodQQVnmVV6YRPljVXKJDsmFAdv8pxc78Ja0ACFfvTW1BoxRgkUi6aWpHR1kaA5gxxmpIa2DUtEcLEVpJj5xIW4sL3MXrRd%2FuiB8LJPClOvrWg&X-Amz-Signature=54df00ae3eba729fdf5aa440ceab54a31d431920194ab473f88b5ac8c34a0e66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
