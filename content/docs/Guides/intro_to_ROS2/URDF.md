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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6X2SS56%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCH9vIlNYcYYu%2FdtlHOfYQUjbs%2FjNP39pjWSY9YzZirZgIhAOt5Dt3WcAek2FajFdhOBTB48FjeI9KVuV8aPp2qXgJtKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1%2F1ZJQSyO6rrHesq3ANLS8dMemkXT%2FpFYo83Sw%2BdetSkGjNkDr0J8l9tDEbHZb5DQjDZiJjZy6l9iS9XQ6fPViUjH3N3IxQvaUvhT9UlNfIHbE1G3kbinOT7IuJ57Yds%2B9vuZk%2FC6mxTwnJD46hlnsBuOGWuauAzI9zVGL02XqRCjHXX8Gx6QX7Kqu3wZR35XsFS%2B%2BG%2Ffa%2BXqolr5T17nbxPem3ZDAgFovnRbozP9XPWxOnA8mxyLPuB3m4HnuprvuhYPF2%2Bi0VJjbp%2B4QwLzNs6bmoQyY89ym5T0Wit4yWiDGaD8x%2F5zWRw7Z59ECz%2F4yfbLh5HFJ6KuTBxclgT89yMkNm8kkHp%2Bn1kYah1TgmH6xp2OS12Q0I0GL3LvXRX1Fqqy6SdnN%2BXMm4MzBKy9IeNSOgNnBUEwvfTHwHiwNzDnWSGJQjjvi9RVCUfh%2BSShZbrGhbxeWy89f4iG3R8ihQkCUGmzZxUksEMiTMsJfw8i5ywawcq%2BfnCmdWJp3mROLpNNWDppIkRiDHYVbgn0dWv29YOV0H1UK2PAhp5B9vooTFX9Wn21aQZAleddKBveLLk0Qb3%2F2J%2FD3zSmXq0uzHLPtMEIKjaMMx9yGOpII1%2BknKAOKDmI8ymUqBGQwUD8AimDryhcS4s3jCgkrzBBjqkAauebwwus5Bt75FDP79BhyXqAJeE57I4juIQy4evKekoRiGh02MHlxUcK%2FdsPs2sGVwL%2Fld2A9G89jhho1j1HPektmu2eXhR2MxZeclgnAsqhJORBlFM0IMrHAwGWE%2BOEe0rm5voyE1FEKeqwlHDcT1oILKLdk6v6C6lX3CLV6x9VoIirI5WHJAQ8TnJ0kG4gpxH4n5eJOfKdMaa6EtvWc8CDKQl&X-Amz-Signature=90b64e1741d92fbce7563b4656071a0a9926f38b0c3bf36274ee294fe19381d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6X2SS56%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCH9vIlNYcYYu%2FdtlHOfYQUjbs%2FjNP39pjWSY9YzZirZgIhAOt5Dt3WcAek2FajFdhOBTB48FjeI9KVuV8aPp2qXgJtKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1%2F1ZJQSyO6rrHesq3ANLS8dMemkXT%2FpFYo83Sw%2BdetSkGjNkDr0J8l9tDEbHZb5DQjDZiJjZy6l9iS9XQ6fPViUjH3N3IxQvaUvhT9UlNfIHbE1G3kbinOT7IuJ57Yds%2B9vuZk%2FC6mxTwnJD46hlnsBuOGWuauAzI9zVGL02XqRCjHXX8Gx6QX7Kqu3wZR35XsFS%2B%2BG%2Ffa%2BXqolr5T17nbxPem3ZDAgFovnRbozP9XPWxOnA8mxyLPuB3m4HnuprvuhYPF2%2Bi0VJjbp%2B4QwLzNs6bmoQyY89ym5T0Wit4yWiDGaD8x%2F5zWRw7Z59ECz%2F4yfbLh5HFJ6KuTBxclgT89yMkNm8kkHp%2Bn1kYah1TgmH6xp2OS12Q0I0GL3LvXRX1Fqqy6SdnN%2BXMm4MzBKy9IeNSOgNnBUEwvfTHwHiwNzDnWSGJQjjvi9RVCUfh%2BSShZbrGhbxeWy89f4iG3R8ihQkCUGmzZxUksEMiTMsJfw8i5ywawcq%2BfnCmdWJp3mROLpNNWDppIkRiDHYVbgn0dWv29YOV0H1UK2PAhp5B9vooTFX9Wn21aQZAleddKBveLLk0Qb3%2F2J%2FD3zSmXq0uzHLPtMEIKjaMMx9yGOpII1%2BknKAOKDmI8ymUqBGQwUD8AimDryhcS4s3jCgkrzBBjqkAauebwwus5Bt75FDP79BhyXqAJeE57I4juIQy4evKekoRiGh02MHlxUcK%2FdsPs2sGVwL%2Fld2A9G89jhho1j1HPektmu2eXhR2MxZeclgnAsqhJORBlFM0IMrHAwGWE%2BOEe0rm5voyE1FEKeqwlHDcT1oILKLdk6v6C6lX3CLV6x9VoIirI5WHJAQ8TnJ0kG4gpxH4n5eJOfKdMaa6EtvWc8CDKQl&X-Amz-Signature=c3d2ef3b9581b18079eea78f41d537f0d7a301714a50f7052e753f133f4a9381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
