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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TURAGQW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDKYUd8o2l5xvTh8IuhDicOsHzJo2ritaGl5lhI5ktcAAIhANQe9JnBm7GO6tS%2FUZBLKaiTXn%2FFNqYZRHZjpl0dBZNyKv8DCBoQABoMNjM3NDIzMTgzODA1IgybB7cCWtiPDSgQoroq3AO2eAMd7LydX7VOx9TL4QKisQ1a6UxQQO55rjYlAQr0sfv9Pp5pqNu9ZVkv68CE4CdWUG%2BugAXICcGPsiPgJkM5lJXgJ9q%2B8wZbcan0reFC8YpIbVRGH5lAjq%2BA52%2B9g1OWyT4yccoVlI3g9GWgTPJV7KSCqRrWz7L0sLnZ8rIZsB96mP%2B7R%2BO2DqzuMvJs%2FY9LOTUe0ogv7X1wGuB5IkwSFNoTwQs35aNXvqtRs%2B3MA7BQAcLGUIhqfoYJJVZl71l2iY22p0zt6xlHFVetvNoyXQ7j6n1iiFdVfF7331agP%2BnpaJ44L%2FOehZJFktN7S4kPSpigBdTm4snRO8vvfc2vL%2BAw3rczS7QvKti7dS0WPFPkq1qDElIZW%2B8Pmz5gLUK3qZZkTAYXQV8%2B3BLZ%2BpCnKvFUqk2B%2FbLmuE3qYpBZWIoZ0e6MzXCYoom5wbFWTla2fiCUTGslqI1PbtNAo6ygGq%2F4JSnU%2BWyUslWL9XKy95jk44K%2BnDsj%2BHIUtj1P45R9I2JxVZ5g4V8HDzVgP8utGOBC%2B%2FR%2Fg2%2FSCM4N2ASVI1EQXE2EPXpF09ka3398yeTtVa33X4a7Vi%2Ff%2BU4Knm7t75L4WJN6iCY6z5dTJm%2BFtSGNZ7N%2F05BSKv7hMzCWu97ABjqkAdBcAdrWSPYe7gQvuOo0FbUE%2FIpLyZbuMFP5D%2BCi3xhF4uURKerY5%2FGDYMaHSWRFg5EoW3i3oWzPzCCQ91GVziBQp6UE16cGahn%2FqLIMtLtWqgaKwIOSk0%2BLn5nNFyR368BJYwiZja%2BWDUKIkuoDdagGB4VrMvBbrQoYY0Fe0LXYanTpS9IPm7rKCAOw7cM2gYaVH429bfBeogM9nbUGCM2xN1nb&X-Amz-Signature=501ed45c8968112c1e784aab4c1dc434e982049bea2808ee8d88f177e4de6c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TURAGQW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDKYUd8o2l5xvTh8IuhDicOsHzJo2ritaGl5lhI5ktcAAIhANQe9JnBm7GO6tS%2FUZBLKaiTXn%2FFNqYZRHZjpl0dBZNyKv8DCBoQABoMNjM3NDIzMTgzODA1IgybB7cCWtiPDSgQoroq3AO2eAMd7LydX7VOx9TL4QKisQ1a6UxQQO55rjYlAQr0sfv9Pp5pqNu9ZVkv68CE4CdWUG%2BugAXICcGPsiPgJkM5lJXgJ9q%2B8wZbcan0reFC8YpIbVRGH5lAjq%2BA52%2B9g1OWyT4yccoVlI3g9GWgTPJV7KSCqRrWz7L0sLnZ8rIZsB96mP%2B7R%2BO2DqzuMvJs%2FY9LOTUe0ogv7X1wGuB5IkwSFNoTwQs35aNXvqtRs%2B3MA7BQAcLGUIhqfoYJJVZl71l2iY22p0zt6xlHFVetvNoyXQ7j6n1iiFdVfF7331agP%2BnpaJ44L%2FOehZJFktN7S4kPSpigBdTm4snRO8vvfc2vL%2BAw3rczS7QvKti7dS0WPFPkq1qDElIZW%2B8Pmz5gLUK3qZZkTAYXQV8%2B3BLZ%2BpCnKvFUqk2B%2FbLmuE3qYpBZWIoZ0e6MzXCYoom5wbFWTla2fiCUTGslqI1PbtNAo6ygGq%2F4JSnU%2BWyUslWL9XKy95jk44K%2BnDsj%2BHIUtj1P45R9I2JxVZ5g4V8HDzVgP8utGOBC%2B%2FR%2Fg2%2FSCM4N2ASVI1EQXE2EPXpF09ka3398yeTtVa33X4a7Vi%2Ff%2BU4Knm7t75L4WJN6iCY6z5dTJm%2BFtSGNZ7N%2F05BSKv7hMzCWu97ABjqkAdBcAdrWSPYe7gQvuOo0FbUE%2FIpLyZbuMFP5D%2BCi3xhF4uURKerY5%2FGDYMaHSWRFg5EoW3i3oWzPzCCQ91GVziBQp6UE16cGahn%2FqLIMtLtWqgaKwIOSk0%2BLn5nNFyR368BJYwiZja%2BWDUKIkuoDdagGB4VrMvBbrQoYY0Fe0LXYanTpS9IPm7rKCAOw7cM2gYaVH429bfBeogM9nbUGCM2xN1nb&X-Amz-Signature=529aec0f920487a4c4cd06c686b4dde374605dd80185cef672a41505198a1709&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
