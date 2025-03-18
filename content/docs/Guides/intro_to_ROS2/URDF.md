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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSTRER6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDxUI%2FAGVIY9X74qr34oOFpEyjY3zQIDy2H6tYQvQz4RwIgLPnVFHxHcnPixOLr3Xcv9ctt7ZyPicJT5OY%2BZuiYGf4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJbtR5MgKYBxxJah%2FyrcA%2BZcyDxXvEvh4gXK9RdJCE%2B7nRbSKnMA4%2Fqb58QUr3Ot87DPXhjRqdyKvuaCd6fggf2EKihz1SFV4dXxSTI%2BDSUGk%2FGYUZdurU%2Fm9fFjBaVJlKw04FPw3GSmHaEh7XRylBOONPMPJUQ7bYiv3R7Qo2W4OQbE%2FUP1kWKEUf6KO0jU9XWygAfQEhm3ct9ip8p3Acqmx0KrSKryxDAPq%2Bv8w1k4a24tutrbvYj0CYa9igUV8VWWiPBZr%2Fd0GoeOty%2BCjTpLZ%2Bd7HA5cyeUIlzAgYIgPu9jQByCNpcpaAcf%2B8DCUfZk8K1iS9vG4tnZzPiNcAw5RkfeQ8e%2BgDfvQg%2BqMgkzy4QcXV6A9uE6P%2FsUnxTn4QIGihbGKfxqsQfFlIL%2BcxKBIiL9eRl9gpZC16NLaH17%2F5bS9FfpJPMVDZd2RpU%2BlYnn5wJwDh3aEtskTVNlZpmEeww6I%2FNZ6lHIrBezZ2Z3%2FNWdWueyFUUzLxgnso%2Fp%2FRqIMNWSYytfW5FaNQ5pEjQ%2BwNCr10z9C9tVFelhQOy4cDt0ZP74zjNGDCTsoAJeDhODDvYLZ5Bghv%2F2dY1ut0FpDh%2FAxDl4hcnukk%2FLOYOTCBpMkwGoRmmCcrImDMb9q5%2FjwVPmNQGeSBzjVMMj25L4GOqUBmijiG05ayi6w6XrnXjrlAn6%2Bsd3lieiBd2NHswSfQTGaz4o1jjXAPbB4HE4Ex29sOjKGw5C47PXsaRVNa2xG6qaumQs%2F7eryhy9Nzr9g1Ottq%2FEzYx4GYe8BK2BrcYLSKZOE%2Fh56e5DYHVVJSeyG4BEBC1lFq5qfQ886Dvyg7XYZoBhvCe9rRbhfbsOtkV5ZJc12wITlOIgdhHEXz0VEehl9lm2r&X-Amz-Signature=54ba8c03bd6fa71f8ae9bcf1bd991c00265c2bb1fc0153c25f03621ff4cc4054&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TSTRER6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDxUI%2FAGVIY9X74qr34oOFpEyjY3zQIDy2H6tYQvQz4RwIgLPnVFHxHcnPixOLr3Xcv9ctt7ZyPicJT5OY%2BZuiYGf4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJbtR5MgKYBxxJah%2FyrcA%2BZcyDxXvEvh4gXK9RdJCE%2B7nRbSKnMA4%2Fqb58QUr3Ot87DPXhjRqdyKvuaCd6fggf2EKihz1SFV4dXxSTI%2BDSUGk%2FGYUZdurU%2Fm9fFjBaVJlKw04FPw3GSmHaEh7XRylBOONPMPJUQ7bYiv3R7Qo2W4OQbE%2FUP1kWKEUf6KO0jU9XWygAfQEhm3ct9ip8p3Acqmx0KrSKryxDAPq%2Bv8w1k4a24tutrbvYj0CYa9igUV8VWWiPBZr%2Fd0GoeOty%2BCjTpLZ%2Bd7HA5cyeUIlzAgYIgPu9jQByCNpcpaAcf%2B8DCUfZk8K1iS9vG4tnZzPiNcAw5RkfeQ8e%2BgDfvQg%2BqMgkzy4QcXV6A9uE6P%2FsUnxTn4QIGihbGKfxqsQfFlIL%2BcxKBIiL9eRl9gpZC16NLaH17%2F5bS9FfpJPMVDZd2RpU%2BlYnn5wJwDh3aEtskTVNlZpmEeww6I%2FNZ6lHIrBezZ2Z3%2FNWdWueyFUUzLxgnso%2Fp%2FRqIMNWSYytfW5FaNQ5pEjQ%2BwNCr10z9C9tVFelhQOy4cDt0ZP74zjNGDCTsoAJeDhODDvYLZ5Bghv%2F2dY1ut0FpDh%2FAxDl4hcnukk%2FLOYOTCBpMkwGoRmmCcrImDMb9q5%2FjwVPmNQGeSBzjVMMj25L4GOqUBmijiG05ayi6w6XrnXjrlAn6%2Bsd3lieiBd2NHswSfQTGaz4o1jjXAPbB4HE4Ex29sOjKGw5C47PXsaRVNa2xG6qaumQs%2F7eryhy9Nzr9g1Ottq%2FEzYx4GYe8BK2BrcYLSKZOE%2Fh56e5DYHVVJSeyG4BEBC1lFq5qfQ886Dvyg7XYZoBhvCe9rRbhfbsOtkV5ZJc12wITlOIgdhHEXz0VEehl9lm2r&X-Amz-Signature=20123567a08d5d233bc1bc2f6c9aff74cbfe8479174d4cac93b193c0e035048b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
