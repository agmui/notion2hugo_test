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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJPDVQ7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL5zxRqEayJnhIBzdTIMGo5t%2BeVJYlxRPwbQ6W0VbCSAIhAOdLeEp1takpIt8A74ycMjgqc%2Bak20mo7%2BijqqpJ6kXKKv8DCBoQABoMNjM3NDIzMTgzODA1IgzH5bTLY%2F4bFVoQY8Eq3AO19iMXXgBLuDBMxTTshdflGLHV6mjbfcLp6LcKlkwH%2FVRSNhSfpvYZzGbaHO2Ui%2BsgjZfbiiH0rsJlkVTjOPKY4yV9ZhXKRi2%2BGddrOi9ALnUKYZGdmqDva7cKj5S31Emrwt2zSjWRpa6crJ6lz6RyKm3TnytGahAP0jt5A2MHqOY%2BZLDL2%2BJdAe9ukLubevWyENeOcvgG9HnLbJZBWwQq6xx1WhhpsH9sOWfb%2BFuxp%2B4f5UiC90jSXAvpTdOfrle1%2Fx5raCNATAw7mT2K1LbMz%2BI245UxySlRmJN5AY1HyQRjzK0xn05NbCLNmK%2FvP965gMZyci208WEF8Y6HucEO8E4DoqkmD%2Fs1gN9TNUkvnAtyPExlr5F%2FZFTisMG6MORd7ODURfYJ4lyy7rwaGINzaGqVR6REJSH%2Fl2UEb9YD7p2qVQnNV2wTizfwZCS6DuA93gtzdeaKeh9h2WntfURAkSqNCFCIthbJXIiQYQ3c0cnCuxpwKLVpIpHIKs3RCZjA0Ini3nJxbleF%2FaIMzLYiwsHmuCr6%2BoIb%2FMUwOXQoVuxspPYJacnbMANH7dx%2FIIgvpV4S2ikQsS97kLwNzgXM5ULAbW522GgOjKSKPuabTJrj%2BP%2F3i6b%2Fe%2BqtajCfxIu%2FBjqkAX%2BB%2BQkTcdO1bRuPu37%2F3Dt3ZzPegYFRs1zsycBkL9R1g9%2BHiOnRmsZaz8R6UXr%2BkN%2FNSb%2BxG7ukuIc5RCpFCpc%2FJspX36huSxi0MJh4%2BlAlAIMj1DB4%2BxN%2FEFxBSDWruZS4UvngVoxi5%2BCXArwwuyiOcZhZLaQ9PwNk5Eoi50KTcM%2BS3zj7JCcDBWtRxLW4caYbWuqfYKkT5munNL3fQwxOV9UL&X-Amz-Signature=149a75e6c2414178885ca37480790bd5ffc1ff3c373bd23cffa367b50ff029fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLJPDVQ7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL5zxRqEayJnhIBzdTIMGo5t%2BeVJYlxRPwbQ6W0VbCSAIhAOdLeEp1takpIt8A74ycMjgqc%2Bak20mo7%2BijqqpJ6kXKKv8DCBoQABoMNjM3NDIzMTgzODA1IgzH5bTLY%2F4bFVoQY8Eq3AO19iMXXgBLuDBMxTTshdflGLHV6mjbfcLp6LcKlkwH%2FVRSNhSfpvYZzGbaHO2Ui%2BsgjZfbiiH0rsJlkVTjOPKY4yV9ZhXKRi2%2BGddrOi9ALnUKYZGdmqDva7cKj5S31Emrwt2zSjWRpa6crJ6lz6RyKm3TnytGahAP0jt5A2MHqOY%2BZLDL2%2BJdAe9ukLubevWyENeOcvgG9HnLbJZBWwQq6xx1WhhpsH9sOWfb%2BFuxp%2B4f5UiC90jSXAvpTdOfrle1%2Fx5raCNATAw7mT2K1LbMz%2BI245UxySlRmJN5AY1HyQRjzK0xn05NbCLNmK%2FvP965gMZyci208WEF8Y6HucEO8E4DoqkmD%2Fs1gN9TNUkvnAtyPExlr5F%2FZFTisMG6MORd7ODURfYJ4lyy7rwaGINzaGqVR6REJSH%2Fl2UEb9YD7p2qVQnNV2wTizfwZCS6DuA93gtzdeaKeh9h2WntfURAkSqNCFCIthbJXIiQYQ3c0cnCuxpwKLVpIpHIKs3RCZjA0Ini3nJxbleF%2FaIMzLYiwsHmuCr6%2BoIb%2FMUwOXQoVuxspPYJacnbMANH7dx%2FIIgvpV4S2ikQsS97kLwNzgXM5ULAbW522GgOjKSKPuabTJrj%2BP%2F3i6b%2Fe%2BqtajCfxIu%2FBjqkAX%2BB%2BQkTcdO1bRuPu37%2F3Dt3ZzPegYFRs1zsycBkL9R1g9%2BHiOnRmsZaz8R6UXr%2BkN%2FNSb%2BxG7ukuIc5RCpFCpc%2FJspX36huSxi0MJh4%2BlAlAIMj1DB4%2BxN%2FEFxBSDWruZS4UvngVoxi5%2BCXArwwuyiOcZhZLaQ9PwNk5Eoi50KTcM%2BS3zj7JCcDBWtRxLW4caYbWuqfYKkT5munNL3fQwxOV9UL&X-Amz-Signature=fd8ef6017a7552ebe58f1d214b530eac3d1f73b905478378cc2c2592e6cd997f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
