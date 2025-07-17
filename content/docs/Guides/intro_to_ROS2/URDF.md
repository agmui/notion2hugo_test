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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSP2RRBN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHYKWfaoNcobrNOVLFILepyTQ66LMWDAAhS1dNJ6VOEMAiEAkNa8SnTDyUESsiHC4k5him%2FfADpokDS98fUB7Bj7xd8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHy2aWIsqCaVgf6WNircA4Tq9XxEt8Rx2gVTqKt%2BeOeiSML4HANZ1cf1SwotHbtbsKWpSpGPtP%2FWGHGaw0Flhg3YLvJEjbZuKfx7wtyPyE28CCB30xJTNkCQYDpjDzQX%2BFsooSzMwcSO4vVhjMlTZeclUbqamEYTmbWYiW1gItGKcGVwKCMIimoBkJTrt%2FFYhhjIEw712E%2Bh8GBdjGWorOtWXZzp2o77XHOpWPqCV8TaFgi%2BCsAv1NNqtetvRYXtCO2gqmZjcSO0krzZMIEPq9r0XPr%2Fr%2FUOlVw7Y6ehm2lQn1yf48TXUdBxxVhc%2BirlEPJ2Dd9RSY0iaVuh4ch9GfGrHAmqNKVleSK6EuizKShtLAHNAh6pdJeTmMML8RhtJFVljZ8NENPTYObvJQ3fzJbqqoGemgl0x1qPxsqxr58LMidQblBALIex5NUUyFApPUo1r3YE%2FxfWG1db0K2XeeXJfuvIZAI3OWsE365hY1S0OEKiG%2F%2B%2FISFnzGEagKZsA1Hk%2B78Xk8ZiblJKz2kb1j33SHW%2Bao%2FD0l0siJ%2BLXxYMkintRaU8tZcH8C%2BoA%2BZXrKzrNbGiFv8L9JU1yoA1GcvS4sEwUSbSAojOwgrnC63BvYa58FuB8iCJv0XDSP53KSwaiCDt4x70RUOsMP3H4cMGOqUB%2BuySRTzXR4%2BV4NSBQl%2BhUUtRg0yoSTPY96%2BdvnWbKmf%2FjWIOyMO2ZDYQ%2BrdRWmlagQbkyO9QezuvzSIKlV7WIrfr9qfEBttKaUxOOrPeiBFEHu0df1yXuHVzBgpdyzKh45gPD9aOpxJEv9o4J5Yk8PNyTBv4QaPSI%2FZ%2BvIQ4AVoAgID70OXAJlvhFvNa6P%2F%2BOZR1zxKCJl9DKdiiMLOiMU0cgqy6&X-Amz-Signature=9e1d82da097da893c65ce82cbd7f003b5f01e73e4f5ea41bbeb4f678ca507f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSP2RRBN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHYKWfaoNcobrNOVLFILepyTQ66LMWDAAhS1dNJ6VOEMAiEAkNa8SnTDyUESsiHC4k5him%2FfADpokDS98fUB7Bj7xd8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHy2aWIsqCaVgf6WNircA4Tq9XxEt8Rx2gVTqKt%2BeOeiSML4HANZ1cf1SwotHbtbsKWpSpGPtP%2FWGHGaw0Flhg3YLvJEjbZuKfx7wtyPyE28CCB30xJTNkCQYDpjDzQX%2BFsooSzMwcSO4vVhjMlTZeclUbqamEYTmbWYiW1gItGKcGVwKCMIimoBkJTrt%2FFYhhjIEw712E%2Bh8GBdjGWorOtWXZzp2o77XHOpWPqCV8TaFgi%2BCsAv1NNqtetvRYXtCO2gqmZjcSO0krzZMIEPq9r0XPr%2Fr%2FUOlVw7Y6ehm2lQn1yf48TXUdBxxVhc%2BirlEPJ2Dd9RSY0iaVuh4ch9GfGrHAmqNKVleSK6EuizKShtLAHNAh6pdJeTmMML8RhtJFVljZ8NENPTYObvJQ3fzJbqqoGemgl0x1qPxsqxr58LMidQblBALIex5NUUyFApPUo1r3YE%2FxfWG1db0K2XeeXJfuvIZAI3OWsE365hY1S0OEKiG%2F%2B%2FISFnzGEagKZsA1Hk%2B78Xk8ZiblJKz2kb1j33SHW%2Bao%2FD0l0siJ%2BLXxYMkintRaU8tZcH8C%2BoA%2BZXrKzrNbGiFv8L9JU1yoA1GcvS4sEwUSbSAojOwgrnC63BvYa58FuB8iCJv0XDSP53KSwaiCDt4x70RUOsMP3H4cMGOqUB%2BuySRTzXR4%2BV4NSBQl%2BhUUtRg0yoSTPY96%2BdvnWbKmf%2FjWIOyMO2ZDYQ%2BrdRWmlagQbkyO9QezuvzSIKlV7WIrfr9qfEBttKaUxOOrPeiBFEHu0df1yXuHVzBgpdyzKh45gPD9aOpxJEv9o4J5Yk8PNyTBv4QaPSI%2FZ%2BvIQ4AVoAgID70OXAJlvhFvNa6P%2F%2BOZR1zxKCJl9DKdiiMLOiMU0cgqy6&X-Amz-Signature=a57e2fd06a3be42ad8a87efb3db7b3b6d47b01651bfe034693b3388d9ab61454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
