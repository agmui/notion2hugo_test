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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPU65GTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2%2F1pF7N3fCQINwFYDlaj2NCHduM9OjTtXKNEB8LnyIQIhAKS9oyeU8m2JJMrLWXpwQrEdXXTIFjtP5L3SHrA4Ch5ZKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRh9Q2tWC%2B74Ici7Uq3APdcf2WleM3my5pacufnX%2FFvnC1xpivE08SeKQgAS5X%2F%2FO0Q3Y46FC1a2%2BpXVf%2BdZD5QyqiC8OUgrdPkGOza%2FY2c2HEzruJTSRfD5Qb5wZi4KUzn%2FUFSQfksOMn27vwBAxLJM4ge9lY0NBDq0V0G8uxTc5548rSIVf2udmw2eKQg%2FLUT%2F%2FH8RURG8jCbb9n7TOK4s5t%2BxUqqUsOH2IEmDH0Oa2wm5IV9BkViWw%2F2SbBf0Ix%2FuKWRJf9xPxkFvliSV5xhNEk58anygy5SnlcctdbNmNCbM2D%2BJNQQK5duEd5fiH%2FfLBPfP5uRfnq1fDi%2FJW9s7dFg4p%2B1OL85izOI6M7SYspBXStrF5GMXrqGyliBI1KZv4QGn4emRGDo08lBvpDGcljLE2yqcUemJCxGo%2FU4ww6eaT0lcr8hA2D30TxHF64prXa5giaaUgmZFZVN45%2B%2BTN9WUsj1vN5RuHpH%2Fdw6tdIrWGD4OLwnuUSrXrqQJGrwcITJJVDJJLfITtq5MlEevTF2C7zJWRcMyX7R%2BZlkCYAzomxLSjc3MIScBHGOORup4%2BjtlfnH9YDpmdt56hHLlAXZXAzdHrDTRGcL1zp47GeHJJ0V8gG4tBDonWnlPSft%2F5JI45WVj0X7zCgg7LDBjqkAX%2FjamyqyBpdKsaHPqjPPl0hj%2BBNYau5%2BujWcV3VGoC6JGKAIIM9RMQv4PhqwMZzv8XGQosNp3o5r4U%2BewYIfheiI6Oavr6SzWGUhqiPoyGHeEDXs3QalD62sfm%2BIf2vHRD6k28EW6LR6Ahp%2Bt4PPiaasRHbgpA%2F9l4C5yNzQz5UX3l0vyNR%2BqRJlRhiPbOl74oXFzDqLvh%2ByKvMj7fHacobuePm&X-Amz-Signature=49c7fe968c14cd78608126fb41e4f4b908d16bc98ebaa13943007a813de7f63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPU65GTE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC2%2F1pF7N3fCQINwFYDlaj2NCHduM9OjTtXKNEB8LnyIQIhAKS9oyeU8m2JJMrLWXpwQrEdXXTIFjtP5L3SHrA4Ch5ZKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRh9Q2tWC%2B74Ici7Uq3APdcf2WleM3my5pacufnX%2FFvnC1xpivE08SeKQgAS5X%2F%2FO0Q3Y46FC1a2%2BpXVf%2BdZD5QyqiC8OUgrdPkGOza%2FY2c2HEzruJTSRfD5Qb5wZi4KUzn%2FUFSQfksOMn27vwBAxLJM4ge9lY0NBDq0V0G8uxTc5548rSIVf2udmw2eKQg%2FLUT%2F%2FH8RURG8jCbb9n7TOK4s5t%2BxUqqUsOH2IEmDH0Oa2wm5IV9BkViWw%2F2SbBf0Ix%2FuKWRJf9xPxkFvliSV5xhNEk58anygy5SnlcctdbNmNCbM2D%2BJNQQK5duEd5fiH%2FfLBPfP5uRfnq1fDi%2FJW9s7dFg4p%2B1OL85izOI6M7SYspBXStrF5GMXrqGyliBI1KZv4QGn4emRGDo08lBvpDGcljLE2yqcUemJCxGo%2FU4ww6eaT0lcr8hA2D30TxHF64prXa5giaaUgmZFZVN45%2B%2BTN9WUsj1vN5RuHpH%2Fdw6tdIrWGD4OLwnuUSrXrqQJGrwcITJJVDJJLfITtq5MlEevTF2C7zJWRcMyX7R%2BZlkCYAzomxLSjc3MIScBHGOORup4%2BjtlfnH9YDpmdt56hHLlAXZXAzdHrDTRGcL1zp47GeHJJ0V8gG4tBDonWnlPSft%2F5JI45WVj0X7zCgg7LDBjqkAX%2FjamyqyBpdKsaHPqjPPl0hj%2BBNYau5%2BujWcV3VGoC6JGKAIIM9RMQv4PhqwMZzv8XGQosNp3o5r4U%2BewYIfheiI6Oavr6SzWGUhqiPoyGHeEDXs3QalD62sfm%2BIf2vHRD6k28EW6LR6Ahp%2Bt4PPiaasRHbgpA%2F9l4C5yNzQz5UX3l0vyNR%2BqRJlRhiPbOl74oXFzDqLvh%2ByKvMj7fHacobuePm&X-Amz-Signature=1972216f5329697e207a06c95fb53b30f6a3c52f45e049387ec02bebd1500844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
