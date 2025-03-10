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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EJSTQ3H%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDZhqKzt1FbfxTr1EttJZ2Ph%2FNACe7jHgvOpJRR%2F6tixwIhAKJCfnZafI%2F3uPJxUe728uYE5vyxCrT1Xfnp0jlhapcSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmVQ7j89WbULyAGsq3AMGWS7DpR1gQP%2B6WRriHPM0Kw%2FTVaanv1mkqkwBJyFDzBo7%2FPv4MixQRkJcF5bc0z0oVvojdIdiV%2BqjPgdlcT1DMNVgfnYzvu4z5MbPdGfRSjDjpX247s9wWb87cXd4pXMaLNYu1PO8rXLqNDEnUl%2Bh09qKJ92LLHtggurq3Ij7VskssMm2sSPBX7XUnzXyOjBuHX1E0F0%2BzUnlT%2BpFwlhYKD5V53hfryKcm4Wb4d4UiiO4nETnd6094pXn0NAob1ZGClJKtsr73E%2FXtfCVabXT%2Fp29t9ydJJ0NllLeMpTrPWAaq5Khpg4VTPNciU7O6bCHhEj6DZpzmMQJezOlWo8lrLnk%2FiPRaM0HhU5fD0dwDyWNjCFJNO%2BIMP7TCoqwEKlqZP2%2BBJa%2FWhNvzlXhg%2BdBoIrgv2eDvo7vdmMPpII1i8vRnSrdUWZr8j93UkncSimUDIC%2FO6HzPHbUrTjGPrIUIUd%2FugJmpCw%2Bec%2B59iOaab7xFVy2VgoaIWLM5pSrIOd103IiwhsUVYljofZJ1Nf2CbSycK6yflDNufXyz9WhVEz39AhPaNL78389p7ASTZ7VE%2F0e8D%2Bc9FNhz3AvI30M4KB5rBEWI0q91FqzaA2FlyLZRr1RZAx6aYMBeTCYi72%2BBjqkATomPdZzVz%2BLVquwZYwWUTI8sITNReRmb1P%2FZQY7fZWJeRF1%2FL8Cl4WYp0ho5xXlJ%2Bwqzk%2F5UfHrC2VWywLJp6Kd0ldG6Z7EL1%2Fm6y5x6lhZV4Fjtu7zGbx1Da2uO4GqAhgrLy%2F61qVZt%2BrXOzE5ZffVyIfYB7sHv2mWioIPT9q6mXCof6PgQ4SlYLdtQ3Cr3NWqUyTXTjJ8iGUaJaYGsc3kJIeV&X-Amz-Signature=3b2684293f5ea3640562b3919d84eb101ce8282f7bf72a7bb94c440540bb212f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EJSTQ3H%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDZhqKzt1FbfxTr1EttJZ2Ph%2FNACe7jHgvOpJRR%2F6tixwIhAKJCfnZafI%2F3uPJxUe728uYE5vyxCrT1Xfnp0jlhapcSKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGmVQ7j89WbULyAGsq3AMGWS7DpR1gQP%2B6WRriHPM0Kw%2FTVaanv1mkqkwBJyFDzBo7%2FPv4MixQRkJcF5bc0z0oVvojdIdiV%2BqjPgdlcT1DMNVgfnYzvu4z5MbPdGfRSjDjpX247s9wWb87cXd4pXMaLNYu1PO8rXLqNDEnUl%2Bh09qKJ92LLHtggurq3Ij7VskssMm2sSPBX7XUnzXyOjBuHX1E0F0%2BzUnlT%2BpFwlhYKD5V53hfryKcm4Wb4d4UiiO4nETnd6094pXn0NAob1ZGClJKtsr73E%2FXtfCVabXT%2Fp29t9ydJJ0NllLeMpTrPWAaq5Khpg4VTPNciU7O6bCHhEj6DZpzmMQJezOlWo8lrLnk%2FiPRaM0HhU5fD0dwDyWNjCFJNO%2BIMP7TCoqwEKlqZP2%2BBJa%2FWhNvzlXhg%2BdBoIrgv2eDvo7vdmMPpII1i8vRnSrdUWZr8j93UkncSimUDIC%2FO6HzPHbUrTjGPrIUIUd%2FugJmpCw%2Bec%2B59iOaab7xFVy2VgoaIWLM5pSrIOd103IiwhsUVYljofZJ1Nf2CbSycK6yflDNufXyz9WhVEz39AhPaNL78389p7ASTZ7VE%2F0e8D%2Bc9FNhz3AvI30M4KB5rBEWI0q91FqzaA2FlyLZRr1RZAx6aYMBeTCYi72%2BBjqkATomPdZzVz%2BLVquwZYwWUTI8sITNReRmb1P%2FZQY7fZWJeRF1%2FL8Cl4WYp0ho5xXlJ%2Bwqzk%2F5UfHrC2VWywLJp6Kd0ldG6Z7EL1%2Fm6y5x6lhZV4Fjtu7zGbx1Da2uO4GqAhgrLy%2F61qVZt%2BrXOzE5ZffVyIfYB7sHv2mWioIPT9q6mXCof6PgQ4SlYLdtQ3Cr3NWqUyTXTjJ8iGUaJaYGsc3kJIeV&X-Amz-Signature=28b90b3d72a0c7cdf342edc75d1aa63868e192da536388a555caaa9ae7c434b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
