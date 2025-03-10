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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3KYTOL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBMyjUQvN5IV33ukErs3A6St0uBsL9bPAHtAIoCOjkljAiBckKP%2FJoZnVfQVIdBxRKvXbNGvJJcKAYvWd4pJfqgM3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2FMhtU6dcnEqs1SCKtwDscFwePLEmjZDWTBuKLfPqLRg34eEDx4Im2tq7qONC6RJH0sdodlzwTzGDieMLFGF6yXvKrapGWUp2lYDANIfCNWTDdt5LLSzDm4U0qXIw93XRQMOqHmtRd0L0tvOG6hR1AE0C1TOgRWsAZ1fSclhtJOG%2FDMRxars5gL0nEGGvvCgo%2Bo8D3FXolGcLkAIPDTqhJAgQQlo7NqAViED3ZToZ7BdR3Icwia4y%2F5Orkdn0k2Tb7MUCac9WDQPw7%2FFyOPeN2CThc05Jqro0iNz5FfKA924t338rlMNBiCNSg0guPDVid6VZAoAKr4vTdsqDqVatq4jZUhggDDcrPPoQbSy9VGXJT%2F8tiyh%2B4UTaIx%2FUFO1pFAl01rX904EnYsG8E%2BNfR0dwiQb5C6tRXIafJpQr6LSSNBvpe4NO19UKJ1ZWn7%2Fg4LRINJKNGWzd%2BGr9U%2Bl9V7voQjfSoA86g1n3xIG1SHdF3tbp49p0DMVJ2dPkUWavaEEu7iJfZyHcGu8WVZ891rxjNMG%2BFMnvVF56QEgd0obtXk6B9EvqZPmmdmKJf9HIxn8BKZTG2cBX0wHL2x7%2BMRJder3WfexaBJZcvrCcI9Bz0g6MOnAjUnfgdt5SvHzjAVmUTqF27KwZqIw8Iu8vgY6pgHHY%2BNKXbYnoP%2Bj7S%2FIjAD1bbmTxSCi5MMlLObbrS7GdzEWpcIDsbu0N5%2FMq%2FDbGMZK74pG3B%2FAzuvAJWqMXrAoqxemub58Sn1wIUUtK61BwCshwaUInZmcZUtvdeX0Nv43EomXg8qvtHU6rDDlS3osDxRvQtMn7%2FCcXt%2F9nN%2BDP%2BGberBg5F%2FrKwiQ9Bk2hFHuIbYKemQIVlRPZMswV7RsjRBaQX7E&X-Amz-Signature=f38ed5496e2e09a4084d900e661b1bc503109183c569a83adeeba017bc059313&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W3KYTOL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBMyjUQvN5IV33ukErs3A6St0uBsL9bPAHtAIoCOjkljAiBckKP%2FJoZnVfQVIdBxRKvXbNGvJJcKAYvWd4pJfqgM3yqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2FMhtU6dcnEqs1SCKtwDscFwePLEmjZDWTBuKLfPqLRg34eEDx4Im2tq7qONC6RJH0sdodlzwTzGDieMLFGF6yXvKrapGWUp2lYDANIfCNWTDdt5LLSzDm4U0qXIw93XRQMOqHmtRd0L0tvOG6hR1AE0C1TOgRWsAZ1fSclhtJOG%2FDMRxars5gL0nEGGvvCgo%2Bo8D3FXolGcLkAIPDTqhJAgQQlo7NqAViED3ZToZ7BdR3Icwia4y%2F5Orkdn0k2Tb7MUCac9WDQPw7%2FFyOPeN2CThc05Jqro0iNz5FfKA924t338rlMNBiCNSg0guPDVid6VZAoAKr4vTdsqDqVatq4jZUhggDDcrPPoQbSy9VGXJT%2F8tiyh%2B4UTaIx%2FUFO1pFAl01rX904EnYsG8E%2BNfR0dwiQb5C6tRXIafJpQr6LSSNBvpe4NO19UKJ1ZWn7%2Fg4LRINJKNGWzd%2BGr9U%2Bl9V7voQjfSoA86g1n3xIG1SHdF3tbp49p0DMVJ2dPkUWavaEEu7iJfZyHcGu8WVZ891rxjNMG%2BFMnvVF56QEgd0obtXk6B9EvqZPmmdmKJf9HIxn8BKZTG2cBX0wHL2x7%2BMRJder3WfexaBJZcvrCcI9Bz0g6MOnAjUnfgdt5SvHzjAVmUTqF27KwZqIw8Iu8vgY6pgHHY%2BNKXbYnoP%2Bj7S%2FIjAD1bbmTxSCi5MMlLObbrS7GdzEWpcIDsbu0N5%2FMq%2FDbGMZK74pG3B%2FAzuvAJWqMXrAoqxemub58Sn1wIUUtK61BwCshwaUInZmcZUtvdeX0Nv43EomXg8qvtHU6rDDlS3osDxRvQtMn7%2FCcXt%2F9nN%2BDP%2BGberBg5F%2FrKwiQ9Bk2hFHuIbYKemQIVlRPZMswV7RsjRBaQX7E&X-Amz-Signature=6b03b222c8621e282e141e22a1b03d1839b76fd5afa6de82e676577524208038&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
