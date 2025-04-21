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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATPHJQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCfV0c1R0tLl4QqV4E8b15dk1nuo3cIDWSjGBB%2B532ePgIhALe4W%2Fxwk0wq0BcyKHamCRMRP2UkTECBk%2FBdejnYDHxtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BEWzPJGQxHZ1tbwYq3AMqHCve2hO48PY9v8VvXoIfKNKLmANcBtiEgeD3qLrdeSsX2LOAPF4g0UJcEswtgFbRYnC2VBdb0kRNT54RP1UBex8y0c5U6N13hx0V8cB3uLfAv1u2dWl%2FSlj4x3clQluGETn9S1NTxvRwVVT8Ge7eT6VbMySr%2FA16TTbn0y%2FmDTXA7HrPgq3YM4J47OiFLFTZdhNAynSWAkiqkjqEnKPe5XGD%2FlVmdAC%2B9Ihb6YlVTqFN7hRTIOEpu1VkUW2yjxWZ9Aq1ORYqtoxeanH5aPOwQ%2Bo67MoblGWmoYY6fvwg4lj0bvE2GqA3xAsYKp8wqd%2BE4n%2B3peVGJC8rWIlA8876yKcDvi6voSBx8aVlr4QVJ4WmBhZmNiYAYQmAq7QjKSfK1NtBKiBOBgjdH1JwwbHzH7CIJ77P74UXx9R4qm%2FiuR6DcGRuR%2FoZaRFXUiwU6sjcC2Lk57zE5W0Kw0PTTHQO8SjUuHIi3519Sfcf0pdt1JF55rbGvAk0X3n3aaLWuQo2jN6A1%2FzUnqZdf%2BKj8zu1qb1c%2F%2FXOtkKExgfIctzA%2F01KnwrdJk2WOsZk6Duob4ohNcsFszEClruXYUJHxwX70jcLwo8Fb5r1n%2BtwfKfB98WnvzSjxYXxEZVzBzCJupnABjqkAfdj0W9cI3aXjvqozVtq%2F3cDZCu5fhQibccqhjTXffzkq1YsDJDa2e14ETKUomLDPhZKcTPRtwx%2FUvqQQmUQ8FDquYftUK3l%2BiHxjaz63kjA5BdwS3QuJP%2FYDBBrpad1ks5xqZG9GI7cOz68j4TPypkc3Gien3pqeisct%2Bl8pwJ0Ubt492OkTFfbQdc%2BzI%2FB92Gba0F6TgwjOdJJx7JsEN8XAvcQ&X-Amz-Signature=ea13efe4bc0b4f5c9a0430317da6d1bcf827c332a8407033f9e4ae41986ea500&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATPHJQE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCfV0c1R0tLl4QqV4E8b15dk1nuo3cIDWSjGBB%2B532ePgIhALe4W%2Fxwk0wq0BcyKHamCRMRP2UkTECBk%2FBdejnYDHxtKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BEWzPJGQxHZ1tbwYq3AMqHCve2hO48PY9v8VvXoIfKNKLmANcBtiEgeD3qLrdeSsX2LOAPF4g0UJcEswtgFbRYnC2VBdb0kRNT54RP1UBex8y0c5U6N13hx0V8cB3uLfAv1u2dWl%2FSlj4x3clQluGETn9S1NTxvRwVVT8Ge7eT6VbMySr%2FA16TTbn0y%2FmDTXA7HrPgq3YM4J47OiFLFTZdhNAynSWAkiqkjqEnKPe5XGD%2FlVmdAC%2B9Ihb6YlVTqFN7hRTIOEpu1VkUW2yjxWZ9Aq1ORYqtoxeanH5aPOwQ%2Bo67MoblGWmoYY6fvwg4lj0bvE2GqA3xAsYKp8wqd%2BE4n%2B3peVGJC8rWIlA8876yKcDvi6voSBx8aVlr4QVJ4WmBhZmNiYAYQmAq7QjKSfK1NtBKiBOBgjdH1JwwbHzH7CIJ77P74UXx9R4qm%2FiuR6DcGRuR%2FoZaRFXUiwU6sjcC2Lk57zE5W0Kw0PTTHQO8SjUuHIi3519Sfcf0pdt1JF55rbGvAk0X3n3aaLWuQo2jN6A1%2FzUnqZdf%2BKj8zu1qb1c%2F%2FXOtkKExgfIctzA%2F01KnwrdJk2WOsZk6Duob4ohNcsFszEClruXYUJHxwX70jcLwo8Fb5r1n%2BtwfKfB98WnvzSjxYXxEZVzBzCJupnABjqkAfdj0W9cI3aXjvqozVtq%2F3cDZCu5fhQibccqhjTXffzkq1YsDJDa2e14ETKUomLDPhZKcTPRtwx%2FUvqQQmUQ8FDquYftUK3l%2BiHxjaz63kjA5BdwS3QuJP%2FYDBBrpad1ks5xqZG9GI7cOz68j4TPypkc3Gien3pqeisct%2Bl8pwJ0Ubt492OkTFfbQdc%2BzI%2FB92Gba0F6TgwjOdJJx7JsEN8XAvcQ&X-Amz-Signature=10e5540effb33e4b0ed4f1f0159e19b98a65b45f28066d38761e2a9dffe5235a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
