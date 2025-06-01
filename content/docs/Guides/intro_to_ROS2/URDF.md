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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J5JNVI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICzKLfP2r5oNvF2Nf7frO41uIALMkG%2Fsz9GItJ3nSpZpAiAnR03Bw2M1LSrvXIlQFAWrDpYBNu27Cv5560M5aQLYtyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BolvXQ7ncqxLJ0wUKtwDEgFI%2B2P6plV%2BrSVn8pRtKxyadv2XVHBlcwMQ%2FWrm7RT1qNK0bv7%2Fff8tTtfzTz56RDEeQT6zDFU1yHxbHJVHjl%2Fl0uy8SsX8oxXPMjRS8P%2BJaBU1bwEnAGA2tCuUuj0BuY000D9GhDnT9ESv7EyOG%2BPoRA8mKo6LuQXAEJtd7Wb8X1l9%2FseVw%2FK%2FtXUvzDtAijcu90t83A%2BMP54uT0%2F6HI2fKL4Jir93cLoD97KRoRSUaSzUJH4rtANkzd9MrozVqrkoS0c6QxMPnzEqrtyL0Tno9V6uoHdRK7OpRzN4UsrQZdDXxltxqoc3SM051WPNtt%2B4wjqKDcw2xDYrlzDm3lA6TcsczWTHwC3z22TpYM5Qbe9hrNyhkRWKFrjAOLHrR09aieX0wroISWe9y6SGPsqiUJkeFC71SC%2BNjILagL%2B1VnH%2BJsS3YWpRM9ycfjgYUqIH26iBu5px4D6lAZU3Hpj1u5hl39aQWjbSqBFEd24MxnK7SSmT1O552n5e8j5k1Iu48LrcVrk3zBZp25vagAnGjw7njuzVDFZQItYb0YHkAi8lcZmBchP%2Bclv5jGbHQ7iJTIW4xU4Vnoird3cMWq%2FYkINAuqbre3bGYdDRAcLeMmsNA6xptXYHMhEw4f%2FxwQY6pgHDs6hQ%2F2%2F8tE3STXS210ZACytZCiJVuKyak9VnUzp8TBi95ML2p2LmpkQ58sqTPUGMmRVPRM3elW8eczste6S1ZnO7jrNhvcG%2B%2FPfZFhKJwFV7mS11UOxyWfTLxFqdEu3TakvEeMxzgijMQqiXLEWeM7fyuPhLg3on54gyrsO4ew7ARUlmyNJWNZRLTQGFeDRcZPKp%2FWbLGoWwYLSzf33OijFSrmvy&X-Amz-Signature=f22352cb804dc13d4358dddb151dd7133f5dffe257fa5c8126845e9e0dcf5ced&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5J5JNVI%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCICzKLfP2r5oNvF2Nf7frO41uIALMkG%2Fsz9GItJ3nSpZpAiAnR03Bw2M1LSrvXIlQFAWrDpYBNu27Cv5560M5aQLYtyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BolvXQ7ncqxLJ0wUKtwDEgFI%2B2P6plV%2BrSVn8pRtKxyadv2XVHBlcwMQ%2FWrm7RT1qNK0bv7%2Fff8tTtfzTz56RDEeQT6zDFU1yHxbHJVHjl%2Fl0uy8SsX8oxXPMjRS8P%2BJaBU1bwEnAGA2tCuUuj0BuY000D9GhDnT9ESv7EyOG%2BPoRA8mKo6LuQXAEJtd7Wb8X1l9%2FseVw%2FK%2FtXUvzDtAijcu90t83A%2BMP54uT0%2F6HI2fKL4Jir93cLoD97KRoRSUaSzUJH4rtANkzd9MrozVqrkoS0c6QxMPnzEqrtyL0Tno9V6uoHdRK7OpRzN4UsrQZdDXxltxqoc3SM051WPNtt%2B4wjqKDcw2xDYrlzDm3lA6TcsczWTHwC3z22TpYM5Qbe9hrNyhkRWKFrjAOLHrR09aieX0wroISWe9y6SGPsqiUJkeFC71SC%2BNjILagL%2B1VnH%2BJsS3YWpRM9ycfjgYUqIH26iBu5px4D6lAZU3Hpj1u5hl39aQWjbSqBFEd24MxnK7SSmT1O552n5e8j5k1Iu48LrcVrk3zBZp25vagAnGjw7njuzVDFZQItYb0YHkAi8lcZmBchP%2Bclv5jGbHQ7iJTIW4xU4Vnoird3cMWq%2FYkINAuqbre3bGYdDRAcLeMmsNA6xptXYHMhEw4f%2FxwQY6pgHDs6hQ%2F2%2F8tE3STXS210ZACytZCiJVuKyak9VnUzp8TBi95ML2p2LmpkQ58sqTPUGMmRVPRM3elW8eczste6S1ZnO7jrNhvcG%2B%2FPfZFhKJwFV7mS11UOxyWfTLxFqdEu3TakvEeMxzgijMQqiXLEWeM7fyuPhLg3on54gyrsO4ew7ARUlmyNJWNZRLTQGFeDRcZPKp%2FWbLGoWwYLSzf33OijFSrmvy&X-Amz-Signature=4c5602d042affba0457c2a7c3eb1feea079ed19e2eab509f2e98217c80fc8107&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
