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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UBUZ2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFlaKSbQtv3mABshC1xZEbd4PShx8HdKu4f9kazaM%2BQoAiA0qg5pL6n1XdkhqXAOKi9bTD1E6YFD7NYh89yx9QIkOiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTuWgSDRy2kmFlxcKtwDpGVggRyuZzzuMCqB3dm2cfcRA2X7VFG9BTOGOaYrgzjanPI%2BQRZUy8PwzYtbJvECPmAeTB8CweWf6uQtiSGuc7sSGvfrcEiP0wULLj1R1v4jlbO0j1LAMDKtfPWEIQ2frEGQhnAxguzqjtelgOMMtEvcMiMhJYteZePUkN2Dxiyg7ckj8zXQMa1%2BEsfPjYO8BDMYSh4SLPCkI0l0RzLw43ukcwMl40wBTCerCmi9shOTAoaVkjeBnB8kNTRlo7cIiKIHOGx0eNQl6ChPDO%2FXPmWUa8i7kpjxxUcYGsRgx5f6GBlORR6R9VZ%2FRJ09Voj6QfHAFds2ut0wnTnft2EXNtjpAVsumZpgsBiuN6jlhYJKrmh6Jc3HSuwihikUFmTueB0AFLaSjAmy79EXV9vmbd%2F2yL1jUBJgYkN5t1wG47ZhZS8hU9DeEd3dRHkuI0S8JTKVNGZOP4MUVarqh%2BC6U62qLSx4G5w3Rsabe7OcXzUC5%2BAwYOuCMDwryUzH772oOlnbveanLFQC5bz7Pi5mpO4hwly%2BLAwx1DygMH%2BOOaHflMgtr%2F2KEYLuA1DHv5Fn5XVW%2BbNwVPB7uket8ZZvWrHF%2B5Gsn6bhSkbkN1AyncnwKteQC3BBvj1YpuYwueP9vgY6pgESMBRwG10n%2BAs7NUz0gpZfru4SYyVY3Rx78UNvX%2FkacaszsxitU9EsNo%2FduMzHplOTxOIM70lZTnm7jIWE%2FIYGehKnRO7vVNaytMDyg3NrLWwTTbPMTfAyN5dO5ftTtr49myw%2Bk%2BqzEO4vCTHFFFhuNG0ZNQ6k3v3piro3rERMKlml3R6N5QUXzjmoeqAhbOhfm0ety32euSmRuJIRqL0tGzhSRbFz&X-Amz-Signature=9ee227054b7d573d9e67663f93883062b5eef384303e66f332a9da7f54c643e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246UBUZ2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFlaKSbQtv3mABshC1xZEbd4PShx8HdKu4f9kazaM%2BQoAiA0qg5pL6n1XdkhqXAOKi9bTD1E6YFD7NYh89yx9QIkOiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTuWgSDRy2kmFlxcKtwDpGVggRyuZzzuMCqB3dm2cfcRA2X7VFG9BTOGOaYrgzjanPI%2BQRZUy8PwzYtbJvECPmAeTB8CweWf6uQtiSGuc7sSGvfrcEiP0wULLj1R1v4jlbO0j1LAMDKtfPWEIQ2frEGQhnAxguzqjtelgOMMtEvcMiMhJYteZePUkN2Dxiyg7ckj8zXQMa1%2BEsfPjYO8BDMYSh4SLPCkI0l0RzLw43ukcwMl40wBTCerCmi9shOTAoaVkjeBnB8kNTRlo7cIiKIHOGx0eNQl6ChPDO%2FXPmWUa8i7kpjxxUcYGsRgx5f6GBlORR6R9VZ%2FRJ09Voj6QfHAFds2ut0wnTnft2EXNtjpAVsumZpgsBiuN6jlhYJKrmh6Jc3HSuwihikUFmTueB0AFLaSjAmy79EXV9vmbd%2F2yL1jUBJgYkN5t1wG47ZhZS8hU9DeEd3dRHkuI0S8JTKVNGZOP4MUVarqh%2BC6U62qLSx4G5w3Rsabe7OcXzUC5%2BAwYOuCMDwryUzH772oOlnbveanLFQC5bz7Pi5mpO4hwly%2BLAwx1DygMH%2BOOaHflMgtr%2F2KEYLuA1DHv5Fn5XVW%2BbNwVPB7uket8ZZvWrHF%2B5Gsn6bhSkbkN1AyncnwKteQC3BBvj1YpuYwueP9vgY6pgESMBRwG10n%2BAs7NUz0gpZfru4SYyVY3Rx78UNvX%2FkacaszsxitU9EsNo%2FduMzHplOTxOIM70lZTnm7jIWE%2FIYGehKnRO7vVNaytMDyg3NrLWwTTbPMTfAyN5dO5ftTtr49myw%2Bk%2BqzEO4vCTHFFFhuNG0ZNQ6k3v3piro3rERMKlml3R6N5QUXzjmoeqAhbOhfm0ety32euSmRuJIRqL0tGzhSRbFz&X-Amz-Signature=df451382c9bce3a6ad27d13c8d23d349c2e58c41ca367c99df3d642350b0d71e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
