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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETQD6WU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCem9OM2eaq5CyoKaHLteECpkF7wbHQR2CJOGktRho7sAIhAMFohYnPGlQt0NIjhXPDnOuJv3cICigJ%2FFAouZsW3mVLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjha8I0DYw7wJgH0gq3AMp7rxp0u1xxjKZq3xGshoUI%2BGRlSoGEtIY4Op30dxVkjEErMM%2FXV%2FHq6GzqXHE8KWGyOzkm6jVxije2i6HKK3Lk%2BTKmC0xLvlavhWocX1OM1QmBLtudK7tXERtECiTJWy%2FjRHnVFKM1w%2BQN6A7%2FQgflNo3qj4wwJcksVv46lZMPQPk5oMqcvS3FLBVDDnGW%2BGn%2BC1R4%2FlK32rE0%2BsIru%2FlUl7H7LhywgtKUggrEnemyJhRYHWBSs2hSgWxZkcQ7mTAbVOpWyTPeSWeR4wxdBKzHHV4kSyGux0jDiEvAwYlIdWaf3Zm1EfRiWfETU%2FRT5KBmW%2BYL%2FhrmrnouQOdJG8x8rWz7648ibI61DpxhYoPkd%2BhePmDODALilN8aqQM0jjNqCyXEeFPELzsoIJopILd3GVHUqSwIXehhpXPP8JEhR4dvXpt93WofVKt73fx5M%2BjV5rsXB3Gk6DAl0RQKgEECYA9rQ6BlmahT%2BAAuF%2B9VDziyNvpVIGWyQzVhwnoBcQ4z3cfj%2B6fNvX1Z6PugmBzFY8pqSQy5cLIYFhcBSApepqWWOcSLpq8GYWkroWnpfvP1%2Boby6fpB1Euxf3c6pj65KZ%2B2ROdoMG0P8HLzbZxxss%2BpC6OkoXhe%2F2kMDCMtsHABjqkAXdLasi5a%2BMAk4rUz5bvyNM0TLMbQs2%2BLGequswP7Wth8WJPIzWe3cdRfn4KwEheIMTJLjB3x49AflgCxOBQO0iK38gR6hISBgP7CWR9s%2B9f3QWBqboFNDrewXmLfU9nu0yvMyk3hVyZXMwWw6nf%2FloZht7Mu8beN6QFQ6%2BUU3o%2Bsr75Sq9fsqBdHdJyBv%2BPsuwggnOnxcxTml4%2BJGU8nt3xRuao&X-Amz-Signature=dc82be2f2113da57694c83fde359751ff83065da20da0afe90a59d3717ce24a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETQD6WU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCem9OM2eaq5CyoKaHLteECpkF7wbHQR2CJOGktRho7sAIhAMFohYnPGlQt0NIjhXPDnOuJv3cICigJ%2FFAouZsW3mVLKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzjha8I0DYw7wJgH0gq3AMp7rxp0u1xxjKZq3xGshoUI%2BGRlSoGEtIY4Op30dxVkjEErMM%2FXV%2FHq6GzqXHE8KWGyOzkm6jVxije2i6HKK3Lk%2BTKmC0xLvlavhWocX1OM1QmBLtudK7tXERtECiTJWy%2FjRHnVFKM1w%2BQN6A7%2FQgflNo3qj4wwJcksVv46lZMPQPk5oMqcvS3FLBVDDnGW%2BGn%2BC1R4%2FlK32rE0%2BsIru%2FlUl7H7LhywgtKUggrEnemyJhRYHWBSs2hSgWxZkcQ7mTAbVOpWyTPeSWeR4wxdBKzHHV4kSyGux0jDiEvAwYlIdWaf3Zm1EfRiWfETU%2FRT5KBmW%2BYL%2FhrmrnouQOdJG8x8rWz7648ibI61DpxhYoPkd%2BhePmDODALilN8aqQM0jjNqCyXEeFPELzsoIJopILd3GVHUqSwIXehhpXPP8JEhR4dvXpt93WofVKt73fx5M%2BjV5rsXB3Gk6DAl0RQKgEECYA9rQ6BlmahT%2BAAuF%2B9VDziyNvpVIGWyQzVhwnoBcQ4z3cfj%2B6fNvX1Z6PugmBzFY8pqSQy5cLIYFhcBSApepqWWOcSLpq8GYWkroWnpfvP1%2Boby6fpB1Euxf3c6pj65KZ%2B2ROdoMG0P8HLzbZxxss%2BpC6OkoXhe%2F2kMDCMtsHABjqkAXdLasi5a%2BMAk4rUz5bvyNM0TLMbQs2%2BLGequswP7Wth8WJPIzWe3cdRfn4KwEheIMTJLjB3x49AflgCxOBQO0iK38gR6hISBgP7CWR9s%2B9f3QWBqboFNDrewXmLfU9nu0yvMyk3hVyZXMwWw6nf%2FloZht7Mu8beN6QFQ6%2BUU3o%2Bsr75Sq9fsqBdHdJyBv%2BPsuwggnOnxcxTml4%2BJGU8nt3xRuao&X-Amz-Signature=4efc83c4682d2d97e21671c3726ce8b8a8d35260c51ce305ece773686077097e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
