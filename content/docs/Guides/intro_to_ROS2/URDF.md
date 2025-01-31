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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4BBRWW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjzMSGWoW36AruFZQOOgD9%2BMO8deMVijUFNbjgnnFKtgIgVamnbnGRWU6w4EyJbhuKf6WXRr85UUsTgYXW0o5bFTQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDex2nPopZgQonIClSrcA87eqyf4ZSA%2B2jdTef8TZVuaov9JIsFOmkK7HKl3wRpPOKmsUgiSfN4QNlm4bSfGxtlIrtWPpfMiu%2Fj7pPHPQXmLSmZoavu5R%2F5hfA%2B3XU%2Fhe1xnaMUXUwuf8sEE5VakDR%2FOPKRiN8uN6jTgRvE0Fm0R7t0FgZcPGCUnGbetDqmrTtC2WB7LU1fJXhISCgWKT4J17IlQE33BKO4KbVKCAys3e%2FsbJcTG1XJS5PUKUqtsYf9dU9%2Bfum5S%2BIDkNHSL5t%2Blw9B9kO6ccq6CLQW1a8EJLtL84SefQv5TbdH65C6vulgzr3aKG9VEX39f6%2FjgdMgmxI28iXh9tZoXUKnPPRYZ%2BSQWVTF751NTLYkHCysYGhzs88YRIsPBZs%2BSKPzIuILDNp%2FWub62aClAwn2EuF4SyAqpyHrAnnFF%2FIZ%2BSQd33g%2BYEwYENevlaDvovvKErF0SwPLV4Gx7v9G%2BHCLgp9KR%2BwlL5VAYLYe26xoQFShpPV7sqrz%2FwuSRz2NAXOg8IC9F%2BTYhvqw50muP3m8xYh%2BapFVk%2FKFrVrtXQmIJFc3XXKsdt5uv4Hsw4kD41FQlkpLQGVOtpbD5dfaaZwJRJgwo43ryw2vR086yIlU6E1bhDcyKx7ftXw6SX7ldMOzR8LwGOqUBOKmjZbCZ7BnGknRGmlfGaADeCXIGXN4DtBfL9W1Ygd642C95go8s5YXtho%2F1mEmTGmlqnXmu3lLh1%2FbFvzmPGUBsuoHK%2BDsBMHrvRioWgMJS%2FT2lEUAqfQPObl0IgcK08e4ggDKSW3l2i4TDGwxvF9f0OgZWOwYpEaoikbTHXOMlxnE4gsuTQve%2Bb243UNlX7YnV66oe6w6HEfF6c1%2B9x5Km9UZl&X-Amz-Signature=5086b53dd05fcc5d8af5c71e784243cf88b572515dedade81e7f40523ca71f76&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4BBRWW%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjzMSGWoW36AruFZQOOgD9%2BMO8deMVijUFNbjgnnFKtgIgVamnbnGRWU6w4EyJbhuKf6WXRr85UUsTgYXW0o5bFTQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDex2nPopZgQonIClSrcA87eqyf4ZSA%2B2jdTef8TZVuaov9JIsFOmkK7HKl3wRpPOKmsUgiSfN4QNlm4bSfGxtlIrtWPpfMiu%2Fj7pPHPQXmLSmZoavu5R%2F5hfA%2B3XU%2Fhe1xnaMUXUwuf8sEE5VakDR%2FOPKRiN8uN6jTgRvE0Fm0R7t0FgZcPGCUnGbetDqmrTtC2WB7LU1fJXhISCgWKT4J17IlQE33BKO4KbVKCAys3e%2FsbJcTG1XJS5PUKUqtsYf9dU9%2Bfum5S%2BIDkNHSL5t%2Blw9B9kO6ccq6CLQW1a8EJLtL84SefQv5TbdH65C6vulgzr3aKG9VEX39f6%2FjgdMgmxI28iXh9tZoXUKnPPRYZ%2BSQWVTF751NTLYkHCysYGhzs88YRIsPBZs%2BSKPzIuILDNp%2FWub62aClAwn2EuF4SyAqpyHrAnnFF%2FIZ%2BSQd33g%2BYEwYENevlaDvovvKErF0SwPLV4Gx7v9G%2BHCLgp9KR%2BwlL5VAYLYe26xoQFShpPV7sqrz%2FwuSRz2NAXOg8IC9F%2BTYhvqw50muP3m8xYh%2BapFVk%2FKFrVrtXQmIJFc3XXKsdt5uv4Hsw4kD41FQlkpLQGVOtpbD5dfaaZwJRJgwo43ryw2vR086yIlU6E1bhDcyKx7ftXw6SX7ldMOzR8LwGOqUBOKmjZbCZ7BnGknRGmlfGaADeCXIGXN4DtBfL9W1Ygd642C95go8s5YXtho%2F1mEmTGmlqnXmu3lLh1%2FbFvzmPGUBsuoHK%2BDsBMHrvRioWgMJS%2FT2lEUAqfQPObl0IgcK08e4ggDKSW3l2i4TDGwxvF9f0OgZWOwYpEaoikbTHXOMlxnE4gsuTQve%2Bb243UNlX7YnV66oe6w6HEfF6c1%2B9x5Km9UZl&X-Amz-Signature=e7ffa2cf879380c20a2cdb098c0a5b42769cfb432eeeea89457665a9fbe52832&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
