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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCVEM4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTP2xpA5PhywxuiW0zFBYZehjbuElRYStGGmUMluhMLwIhAMdhsnAx5NviZKK97FBG6Byg%2BCA1bUmstG5bapbpJlv7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8F0GPTz%2Bxw6JQjYq3ANyBQuOOBygzwkt%2BVy5JWllQIqg%2Bg0Hnjm76yfrxXMLVxyn8t5GO0V7bN%2Byp58%2FELheACBGkqoJqtCXJF2buY%2Fv9jIJtEBTneTERwQuBZIuir5eSvESwL%2FYXpo3ohQXm5vA6KDFFl637BjvaiDHd%2FQ5Zfugysr13npzDUvzLKLpHuEOQMJsvy%2FnJUaSYsxOVZVFry1oGK%2B%2Bx2rn%2FBEUk%2BPGMVgJkRLZNoYO635%2FkKtIZBY%2BlCyNI3BCBp56aqTXikmKQalIcFkpnesc51ZLI6AfNHFi1hYYuwpEnjwOf%2F5wJnyPF4LdKQegv3RB%2BRUoXKhDrwBUsEmZpksjqbeS7f5n%2FeWJgAIImZquoRH%2FouAy8wv%2FJdhBXkXlgjpGmIWEQb1%2FUekgx9UTd3AOHJWAtaQaJvM4x2dHxyMIKIQii7%2BcT3lVk4rQ%2F7GphrW1d3NIOZ4UVwjCYsmSOv1lS3kvZqBuJgEmqfodoNXdsBMWQnirzESR4OEwI6jKbf71xlMMAAmcilzLJphpsp64us0uH0RCuJaCN8oAzZzB0nGHXqY8Dz9xtAjd23bUMqUpWgYCHzSxRvuUawJYL3EH0Smk01weg7YI%2BRYO4FdqfV8PY%2FI%2FEU9q9pM5GOLchAqkGzDGuuPEBjqkASJZoL5i5RwrYXhuPPBsyZXF%2BeLpWxz4%2BS4IwkZI7mOIWrcWCNnDwtC%2FxE6k9ILNMVYGsvveS%2BWWRiEnQ0fSJV%2FP%2BxDjpS0Dm%2B5c5jjB17A%2BINI8b2V2JQIahQjIKeVkgnEtL3JjxeKCuWrXuoVa2fw%2BfhySnH8qdLn2n7ku8u9U0vrFmFusc7XxnhLcDAmMzWI6ieIRUGKnCbIN0haGG4YT6KLP&X-Amz-Signature=8b5c5f3548acd0e7580ce733cdf09e49c25ed2958840a758e6187429d40c4898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCVEM4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTP2xpA5PhywxuiW0zFBYZehjbuElRYStGGmUMluhMLwIhAMdhsnAx5NviZKK97FBG6Byg%2BCA1bUmstG5bapbpJlv7KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr8F0GPTz%2Bxw6JQjYq3ANyBQuOOBygzwkt%2BVy5JWllQIqg%2Bg0Hnjm76yfrxXMLVxyn8t5GO0V7bN%2Byp58%2FELheACBGkqoJqtCXJF2buY%2Fv9jIJtEBTneTERwQuBZIuir5eSvESwL%2FYXpo3ohQXm5vA6KDFFl637BjvaiDHd%2FQ5Zfugysr13npzDUvzLKLpHuEOQMJsvy%2FnJUaSYsxOVZVFry1oGK%2B%2Bx2rn%2FBEUk%2BPGMVgJkRLZNoYO635%2FkKtIZBY%2BlCyNI3BCBp56aqTXikmKQalIcFkpnesc51ZLI6AfNHFi1hYYuwpEnjwOf%2F5wJnyPF4LdKQegv3RB%2BRUoXKhDrwBUsEmZpksjqbeS7f5n%2FeWJgAIImZquoRH%2FouAy8wv%2FJdhBXkXlgjpGmIWEQb1%2FUekgx9UTd3AOHJWAtaQaJvM4x2dHxyMIKIQii7%2BcT3lVk4rQ%2F7GphrW1d3NIOZ4UVwjCYsmSOv1lS3kvZqBuJgEmqfodoNXdsBMWQnirzESR4OEwI6jKbf71xlMMAAmcilzLJphpsp64us0uH0RCuJaCN8oAzZzB0nGHXqY8Dz9xtAjd23bUMqUpWgYCHzSxRvuUawJYL3EH0Smk01weg7YI%2BRYO4FdqfV8PY%2FI%2FEU9q9pM5GOLchAqkGzDGuuPEBjqkASJZoL5i5RwrYXhuPPBsyZXF%2BeLpWxz4%2BS4IwkZI7mOIWrcWCNnDwtC%2FxE6k9ILNMVYGsvveS%2BWWRiEnQ0fSJV%2FP%2BxDjpS0Dm%2B5c5jjB17A%2BINI8b2V2JQIahQjIKeVkgnEtL3JjxeKCuWrXuoVa2fw%2BfhySnH8qdLn2n7ku8u9U0vrFmFusc7XxnhLcDAmMzWI6ieIRUGKnCbIN0haGG4YT6KLP&X-Amz-Signature=9333107418663ce5a10c30cc5b53a0fe22983f6acfe58f834576ecc2f73a8977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
