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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUJYI7S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMT0OELjQj0e9F7DhTIMHIAUZuiNduIoJg2EqwgXT6gIhALjUAaP79ipGL%2B1P%2F68KJ1StqvErTkQ1ShLepOd7HhVRKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDYHkKkRDFYDlL7X0q3AMRqEbBX7O5ouVJbDOVWoLkaEzgJBTGL00c4TWrV7jbeKaixBTlyHmeXnsSg2q0%2F6Kl20zHG4EEpIUA2XtayuLQfeXv%2FqSGeR514bqvvjyiwHJBZrDdMFo3qnfx2AXDsQSlrS8IgcovtNF37ButR%2FFCAJVbDHkdm%2FYWU30XxaGtFSDiiVMnpxQH%2F3UClfk5HBgaloFk6msrBR16ydtjQ0Pwzd6R%2FK9fFT9D4RZWHOfpFyQ%2FppzCq6XrDMNkniX%2B4fBPoCD9RhIlFUb20FaasARaJeYRTEn0c6egR4ROtR%2FNhao9GHCOMQ%2BkguGVKmCLhJqkK8r9ZakPqKFWTc0DSSmstlg39oe2%2FyMg%2Fv0%2Bg54hbJfrbWG6afgmjI9n5xf3mVGMGOFnBcr3%2FSWfZja2%2F%2F3kNCSRdJeJqHVNNu5A84sTh7%2FoWGfdWpWDAab3DknH2lgxyoi5Ajcqw1ThjZXpN8wilC7CKN5sQQzIaiby5U9qmkWt4VPxsQ1a%2BkE%2B%2Fb3aOQvcvcdYEOPS8THpt8hPMgFGmnZ9TSstwiQG8Cx81Et%2BXgx0TXJAIyKM0XTBGSpeV%2FttQcyNTjTRRvYRJyikWyznholBe39Wf18zP3OLZqli4ik9DCYY8NaryBfEVTDZ%2B%2B28BjqkASoxwstrL1A9RujxvsFTyCQ1hVO5mELtt7h%2B1nyA0K7KRlQwc%2B7zoN0ivQTIHOLjWS6kdjskXKe7GWMskYRfBDymygyKC6dF95tWmEfEsrwyXTT7hQSS5hSgUT5%2FuLgnHThFfMeCsCpILpeq4j2asSgHtFpHWLoehVOdCB6ulqXy%2Fg6ICbL0WHVSBrj50V1ivnAH1Au8rAPgrAi7D6Ojwpvk1lCI&X-Amz-Signature=c843cc43db32dd914f155851bd8246aae18b2a0a227fcb9b2b6aa3469993a6da&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYUJYI7S%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMT0OELjQj0e9F7DhTIMHIAUZuiNduIoJg2EqwgXT6gIhALjUAaP79ipGL%2B1P%2F68KJ1StqvErTkQ1ShLepOd7HhVRKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDYHkKkRDFYDlL7X0q3AMRqEbBX7O5ouVJbDOVWoLkaEzgJBTGL00c4TWrV7jbeKaixBTlyHmeXnsSg2q0%2F6Kl20zHG4EEpIUA2XtayuLQfeXv%2FqSGeR514bqvvjyiwHJBZrDdMFo3qnfx2AXDsQSlrS8IgcovtNF37ButR%2FFCAJVbDHkdm%2FYWU30XxaGtFSDiiVMnpxQH%2F3UClfk5HBgaloFk6msrBR16ydtjQ0Pwzd6R%2FK9fFT9D4RZWHOfpFyQ%2FppzCq6XrDMNkniX%2B4fBPoCD9RhIlFUb20FaasARaJeYRTEn0c6egR4ROtR%2FNhao9GHCOMQ%2BkguGVKmCLhJqkK8r9ZakPqKFWTc0DSSmstlg39oe2%2FyMg%2Fv0%2Bg54hbJfrbWG6afgmjI9n5xf3mVGMGOFnBcr3%2FSWfZja2%2F%2F3kNCSRdJeJqHVNNu5A84sTh7%2FoWGfdWpWDAab3DknH2lgxyoi5Ajcqw1ThjZXpN8wilC7CKN5sQQzIaiby5U9qmkWt4VPxsQ1a%2BkE%2B%2Fb3aOQvcvcdYEOPS8THpt8hPMgFGmnZ9TSstwiQG8Cx81Et%2BXgx0TXJAIyKM0XTBGSpeV%2FttQcyNTjTRRvYRJyikWyznholBe39Wf18zP3OLZqli4ik9DCYY8NaryBfEVTDZ%2B%2B28BjqkASoxwstrL1A9RujxvsFTyCQ1hVO5mELtt7h%2B1nyA0K7KRlQwc%2B7zoN0ivQTIHOLjWS6kdjskXKe7GWMskYRfBDymygyKC6dF95tWmEfEsrwyXTT7hQSS5hSgUT5%2FuLgnHThFfMeCsCpILpeq4j2asSgHtFpHWLoehVOdCB6ulqXy%2Fg6ICbL0WHVSBrj50V1ivnAH1Au8rAPgrAi7D6Ojwpvk1lCI&X-Amz-Signature=4f65ec2381dffab9d7af5ec1a5ce88d1dafa8a3e19ab155173c40257b73bb7da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
