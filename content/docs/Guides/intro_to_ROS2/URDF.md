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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJMCESM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCbPfj4yCaTx8SqDn%2BAsCBmv%2FZQhGyJywwgoCg0aIqzKQIhAPq4EWQIwg00AavnaBlGiFc%2BIztMLScLBeCq579ds3OAKv8DCCYQABoMNjM3NDIzMTgzODA1IgwErq%2Fl24eYE7UVqBkq3ANuO0X%2BOHSuticg6PTlY44kcwiCWKpNKKwG9CB01%2FcQ1FLVVtKAfgAy3HxS4lcmNYfY1oD2RK%2FMUqpd47KpuxsmGFgjd14nf%2F12U%2FuUbmTNMMy9DfpolADeI1mHPtfAc0%2Batgf2N%2B%2BvuzqXJOidL6ihPJqFeN95XDue%2FOurZlaI%2F3zVKLPOm5UoPW8YhNADkMVXMnsFHAHk2xsdBJ2VYp8Pj53KMudZyId6%2BgIyEF%2Forb6E0Ev1YI%2BpoDcJTr2t3shuFOE%2BH3AHLo5FSQ0DrT6Q5MHZH3%2BG5tirm9DPmhtD7cSLl0efiHMkY7zYraMsexJJiqles7PFxLDJ6Z%2BWrHwJ7Y3d6SwQTnLcGDH33joP20XnR1%2FxpTZ6bNFP%2F3OstXMjjf6hyaof3%2Fpc9j%2B%2BPm9CTpbtGPreIL9Gf9P1HLXvnbXJZKC%2FS5gnSl0fInDojsm7X08io296JqA0%2F3ZWfc%2BHMbciFqljypPx6ynGyX3l7%2FmK%2BxX4MZozYfUYBJUgJLe39gTvhuth9V6LXJeqnnZf2MXMQ8%2B%2FfkIl2IcO552Jl46vcgli3H6Ou0v5473qPWVkdKb0Z3R1ebrv5a%2FomgcP1WihmqrjED5ZnR%2BghIkuDVdBxXb0QNMlZzKvBTDqtZ3DBjqkAZwCUH9ti1LEzv1RWlmMQjnN9pAFbkFRweEr%2BpHGShSq3vbDSkFdG%2FeDvF125TdgRCriaztIwI9PfG41XmjMTGsOkWpF%2Bj6h12JrwYFKLHqZuVo%2BB5Y8Wp54tSCL1pjfSYrgbsO3msWBlbWvHm0E%2BlgqkZbVm7%2BdxXWboUUmTH6rXOFLbtVkvW0yPd8yDOsQwbcbNClF%2BIM3ZfBlThdj6PdvZBe2&X-Amz-Signature=93b8e2399291914afbb3ed8df0c096f3aaa6a970da30be65fc2dd35c171220aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVJMCESM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCbPfj4yCaTx8SqDn%2BAsCBmv%2FZQhGyJywwgoCg0aIqzKQIhAPq4EWQIwg00AavnaBlGiFc%2BIztMLScLBeCq579ds3OAKv8DCCYQABoMNjM3NDIzMTgzODA1IgwErq%2Fl24eYE7UVqBkq3ANuO0X%2BOHSuticg6PTlY44kcwiCWKpNKKwG9CB01%2FcQ1FLVVtKAfgAy3HxS4lcmNYfY1oD2RK%2FMUqpd47KpuxsmGFgjd14nf%2F12U%2FuUbmTNMMy9DfpolADeI1mHPtfAc0%2Batgf2N%2B%2BvuzqXJOidL6ihPJqFeN95XDue%2FOurZlaI%2F3zVKLPOm5UoPW8YhNADkMVXMnsFHAHk2xsdBJ2VYp8Pj53KMudZyId6%2BgIyEF%2Forb6E0Ev1YI%2BpoDcJTr2t3shuFOE%2BH3AHLo5FSQ0DrT6Q5MHZH3%2BG5tirm9DPmhtD7cSLl0efiHMkY7zYraMsexJJiqles7PFxLDJ6Z%2BWrHwJ7Y3d6SwQTnLcGDH33joP20XnR1%2FxpTZ6bNFP%2F3OstXMjjf6hyaof3%2Fpc9j%2B%2BPm9CTpbtGPreIL9Gf9P1HLXvnbXJZKC%2FS5gnSl0fInDojsm7X08io296JqA0%2F3ZWfc%2BHMbciFqljypPx6ynGyX3l7%2FmK%2BxX4MZozYfUYBJUgJLe39gTvhuth9V6LXJeqnnZf2MXMQ8%2B%2FfkIl2IcO552Jl46vcgli3H6Ou0v5473qPWVkdKb0Z3R1ebrv5a%2FomgcP1WihmqrjED5ZnR%2BghIkuDVdBxXb0QNMlZzKvBTDqtZ3DBjqkAZwCUH9ti1LEzv1RWlmMQjnN9pAFbkFRweEr%2BpHGShSq3vbDSkFdG%2FeDvF125TdgRCriaztIwI9PfG41XmjMTGsOkWpF%2Bj6h12JrwYFKLHqZuVo%2BB5Y8Wp54tSCL1pjfSYrgbsO3msWBlbWvHm0E%2BlgqkZbVm7%2BdxXWboUUmTH6rXOFLbtVkvW0yPd8yDOsQwbcbNClF%2BIM3ZfBlThdj6PdvZBe2&X-Amz-Signature=72066c98c92d9d044fa1b320d34529dd4d43a1e6176a0c32b8b2f6bc820fd8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
