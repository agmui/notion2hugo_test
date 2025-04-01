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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM65VXKA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC6nyL6g%2BjcPWI0qQrd8PGLqW6I65m50NhZBndNKdtfOQIhAIqj7CWv6gLN94A0fS49ffnsqBlMqsKUA4M4LnyHF2ZvKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmplvCEgKleYGLql8q3AN98l8Exg7sYz%2FUAwV5EnwWKGj3T8pxIiXXkAwCkG1%2BLQNHI7cagoz8IPNqDcod5P201opSEYtX5%2BwIJtrY8ayx1IhjGrwtfztNRiMz3W0j1jTlMsLvHEljVjTCswIrOA94bRMr285JCcX8Furwtpumqfvmm7vRbFFWzMPY3s0F1WrF6LKuaZPPVhZj7tvMjTXBZdiPKsQU2k19KrU2sM3ZLpJ0m1OfYhsBuPCRvVx%2FDF8HE%2FZd%2FOP3%2FwLws4lWmKet4vn2EQryvyYstto55duCiQSv9uxi5Aq9dBBkoFwSDTKt049QP%2FVDLuYeVlCjAw1A5rOXxNwCxE7KSbjypBW4Sk8RYOEtakhjkQCQB4H3KLwf0tsH5xVAYCNXQ4TQ%2BhXFcSnQnPgE4FuwkdFPvYv3DShXaRbkZqDZVES86epWU31uhALr1VM4Uj2DOtjEjO%2F34zTrZA%2B3mLTL%2Bs4vaPKldmAuM4u%2BElAJykfj1P1bIxEqext5Dcq2BXr%2F418SJ%2B98KCMltiL0tcHE7lvEUg8K%2BAfUOt0cVf39t2zN5EKsLKnCqDNy9csQ3RQwPKJBHF8Wd1a0r0lkN8WTsYZXySJ88xF309jouiIIbNPq%2FyUTs3tpxrP89x6ik7oeCzDZhK6%2FBjqkAanukz6rMXcToShlksposU06%2BRK1tUsdA1DBJ8iblgFUhoIaAF1ty%2BUALMTl3fQi%2FVPRixzex6bMSh7sXvrbuqHbakRAlQnjMUxCIHLvddOstsNI1kwiTlYXtCM2Ui86fcszPq8xepRoCn4uZWh%2FPPsPntSFb0zSeWZwjXKV42ytkpoXcpkFB6zEmvGt9OZXaBenD%2F1c%2B3FRWp3zNYCJENAzjT0u&X-Amz-Signature=a91b8f74e1d50aa3f35153fe66b64a5076c8dcb8bf4299ed8d5b7174c9370c42&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM65VXKA%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQC6nyL6g%2BjcPWI0qQrd8PGLqW6I65m50NhZBndNKdtfOQIhAIqj7CWv6gLN94A0fS49ffnsqBlMqsKUA4M4LnyHF2ZvKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmplvCEgKleYGLql8q3AN98l8Exg7sYz%2FUAwV5EnwWKGj3T8pxIiXXkAwCkG1%2BLQNHI7cagoz8IPNqDcod5P201opSEYtX5%2BwIJtrY8ayx1IhjGrwtfztNRiMz3W0j1jTlMsLvHEljVjTCswIrOA94bRMr285JCcX8Furwtpumqfvmm7vRbFFWzMPY3s0F1WrF6LKuaZPPVhZj7tvMjTXBZdiPKsQU2k19KrU2sM3ZLpJ0m1OfYhsBuPCRvVx%2FDF8HE%2FZd%2FOP3%2FwLws4lWmKet4vn2EQryvyYstto55duCiQSv9uxi5Aq9dBBkoFwSDTKt049QP%2FVDLuYeVlCjAw1A5rOXxNwCxE7KSbjypBW4Sk8RYOEtakhjkQCQB4H3KLwf0tsH5xVAYCNXQ4TQ%2BhXFcSnQnPgE4FuwkdFPvYv3DShXaRbkZqDZVES86epWU31uhALr1VM4Uj2DOtjEjO%2F34zTrZA%2B3mLTL%2Bs4vaPKldmAuM4u%2BElAJykfj1P1bIxEqext5Dcq2BXr%2F418SJ%2B98KCMltiL0tcHE7lvEUg8K%2BAfUOt0cVf39t2zN5EKsLKnCqDNy9csQ3RQwPKJBHF8Wd1a0r0lkN8WTsYZXySJ88xF309jouiIIbNPq%2FyUTs3tpxrP89x6ik7oeCzDZhK6%2FBjqkAanukz6rMXcToShlksposU06%2BRK1tUsdA1DBJ8iblgFUhoIaAF1ty%2BUALMTl3fQi%2FVPRixzex6bMSh7sXvrbuqHbakRAlQnjMUxCIHLvddOstsNI1kwiTlYXtCM2Ui86fcszPq8xepRoCn4uZWh%2FPPsPntSFb0zSeWZwjXKV42ytkpoXcpkFB6zEmvGt9OZXaBenD%2F1c%2B3FRWp3zNYCJENAzjT0u&X-Amz-Signature=883bf8ad9db26aa201851003f21f5b58b005c802cfeb352ec81669694d728646&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
