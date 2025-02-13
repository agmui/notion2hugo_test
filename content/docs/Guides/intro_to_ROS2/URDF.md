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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CEBG5J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM2IJRY1jTL3lJeuZaxpoAwgx5g7D9BCRamKdacAOqJAiA5kp3SpF3LXzLKc5xX3Z86UqpUtvZGcbsPWROPs8p67ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMx%2FuNifIDH8QuuZ%2F5KtwDXc9%2Bd9CTquddivU1K1fQpOMBVSerGdbYizMB33vYPRbx8Ca18MWJnUApG8pTQT1TTubhhkrmrrAKCgMqYJ%2FfWq6hfnxDDPZH8%2FDNQvSmZ%2Fj5k0Z3FnBv4W%2BXa34GBZatfBlWJf4TQry4mdDDcZW32KbRawwI5BaVLaeqKoIaaufr66hz5vGsaQsumRTm8F2yxNIOkx532bR6DUXehhLcSFpbjTcEY%2Fg8YyTmepoohCg2RA3KKDp5uJrsLBUFdtQa3H%2F5Bo1QpPzfgAvnZz9p3uu9RAKejlCBo6KoedhEHn9qjavsD%2Bda2rOR6nQ6MRAoa3sYC0H3UDvC510e3SpNvXZTwmYI4O%2Bxts4dgBoHXs7zRxPTndCNc7%2FT5Uw9NSTMF2V1g%2BqrgCb9a5d7tmNqBmw%2BzWS6fbto1SHqlXVWleJKdkQ%2B5A%2B%2BfQDCGseSLsYjjYEt8DiLLTB8KvTs5ZNxagYYB7Qgwsm3gqjRabMzUp4uPZS%2BvowH5Sbe7G6RAbRdxjsalgoMuFveIJ00tNKj%2BL3I7OVQBhA1LCeh4NmdNPNGZjZ38CFL%2B0bIV29ScmGQqb0d3%2B5GmE6IEt3xJbX1hiIDFpBqlLeI6BuyyzkXKgAb073VEeAhCnj9y%2FowiMK3vQY6pgECIVIKqvbwxTrzLMcnbZ58PZ3O8YNDuWQCZNNfV6Z8GpUIYCggMHtQ4MlyJmqf7pW9zax6Y5bmSFG3wG3KN2nJa4vZ%2BsC0lWZRenaSHKJSayxgor8l%2Fsj5V3Tt8Px6UjaZQ80y0eOuJdl9m3JfwDWNskjyb0cgsYtyfvfbtuLNRt%2BXCnV80NdEEcs8BFeXlRgxCVZDyEVfRm%2FLoyQaUx8NueH%2BDB5I&X-Amz-Signature=6d437072041f4cdaaf50bf31912aec2c61594d124d70a856a12953e5188c4e91&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CEBG5J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGM2IJRY1jTL3lJeuZaxpoAwgx5g7D9BCRamKdacAOqJAiA5kp3SpF3LXzLKc5xX3Z86UqpUtvZGcbsPWROPs8p67ir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMx%2FuNifIDH8QuuZ%2F5KtwDXc9%2Bd9CTquddivU1K1fQpOMBVSerGdbYizMB33vYPRbx8Ca18MWJnUApG8pTQT1TTubhhkrmrrAKCgMqYJ%2FfWq6hfnxDDPZH8%2FDNQvSmZ%2Fj5k0Z3FnBv4W%2BXa34GBZatfBlWJf4TQry4mdDDcZW32KbRawwI5BaVLaeqKoIaaufr66hz5vGsaQsumRTm8F2yxNIOkx532bR6DUXehhLcSFpbjTcEY%2Fg8YyTmepoohCg2RA3KKDp5uJrsLBUFdtQa3H%2F5Bo1QpPzfgAvnZz9p3uu9RAKejlCBo6KoedhEHn9qjavsD%2Bda2rOR6nQ6MRAoa3sYC0H3UDvC510e3SpNvXZTwmYI4O%2Bxts4dgBoHXs7zRxPTndCNc7%2FT5Uw9NSTMF2V1g%2BqrgCb9a5d7tmNqBmw%2BzWS6fbto1SHqlXVWleJKdkQ%2B5A%2B%2BfQDCGseSLsYjjYEt8DiLLTB8KvTs5ZNxagYYB7Qgwsm3gqjRabMzUp4uPZS%2BvowH5Sbe7G6RAbRdxjsalgoMuFveIJ00tNKj%2BL3I7OVQBhA1LCeh4NmdNPNGZjZ38CFL%2B0bIV29ScmGQqb0d3%2B5GmE6IEt3xJbX1hiIDFpBqlLeI6BuyyzkXKgAb073VEeAhCnj9y%2FowiMK3vQY6pgECIVIKqvbwxTrzLMcnbZ58PZ3O8YNDuWQCZNNfV6Z8GpUIYCggMHtQ4MlyJmqf7pW9zax6Y5bmSFG3wG3KN2nJa4vZ%2BsC0lWZRenaSHKJSayxgor8l%2Fsj5V3Tt8Px6UjaZQ80y0eOuJdl9m3JfwDWNskjyb0cgsYtyfvfbtuLNRt%2BXCnV80NdEEcs8BFeXlRgxCVZDyEVfRm%2FLoyQaUx8NueH%2BDB5I&X-Amz-Signature=804ad4932a365cd90ae55933525ee73aa4f4c941bfcb74527265f0d758b22d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
