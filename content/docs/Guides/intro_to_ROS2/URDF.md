---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXRHONM%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgi8RE63Eh1KewNgZgTZXKe4kPxHHG4Ei65w54k8%2FKNwIhAOPBGqgy2MVDDQEeV2xrlxnYbCTmKT%2Fd%2F9JhS5IqXlfoKv8DCGMQABoMNjM3NDIzMTgzODA1IgyrrlfruzOaKJoFXEAq3AMZdNuwCUcbzvKVWmztZm6fX3nNhIjJeG9n%2FVk%2B%2FguAv4foijFdFlnE20tLzIa7zmNfC%2F3cVDAkqR5SbQRzxgA80gXqQctEYT%2Bplr4b3%2FJXUjxssdkAY7JWApIl6Py9AY%2FBlgfFD2ua6eRtBJ%2FWf0%2BsEr%2FLKTwB%2Bk8tmDbpCxaKV%2F4RItDyLE0bEys4KeZV7HmjUa24npRxPESOB%2BaCZdklHiqIPvIRCBBoMA3wca3kxw25%2FoaW9QcLewCpqpFzYuZeQ%2Fb8epLTNe2qf93V3oCr5ZQp9wJ4auPw2UFojKSdAMa70Ee1K281Iy253xMIk49h9m8lrZ8iuGhvus6yMHp2Fz5%2BJGvBL4Wby0X8%2FeNkF3lymgDibSXbP82cLLTOhqN2LvpgzET06RR53BnVvRs16RYuzL%2FWhf8kjzn9VpPOxFmXjfq9HKRnPo6k39SOJXOn8tFkLqBYmZGhNDAv2HTiTZs7JjIPkAktNKz2CharOr5d7W0qHq3kMK0b6fLuAGAzj8MLni4YuShbflG9xDZ4RGp2gVCtc4pCGLXuz8ivu%2BnJ7bmNjhSAIlFBy4ubnO5qGyoJeZfaJpHmaAFJGJVqO6UCIU%2BUYvGWPVUgS4PXdgsfh6M%2F11gJN8vLhzCQ%2BN%2FPBjqkAYdpE0ccwIyKOrmC7pTo9kwL4YkfDthXiKQgcGwQyv1rtaeVPpmcGGGhX8zbZKpbHgH07pTPaXWUGa5mfD7Y9wYNWIasE6pjgtrat8npIOCoK3asguyoHxKuFckAcbptVtoh6Og9iSTtfm7LkBbmCfTir2uUhUPdxFHD%2Bb9Ztbg1ybxYlrf7yzwWTJINUyu0jm6HPuqwc5a3JgbtQaFaJ96S3C1P&X-Amz-Signature=408485d3ff2373bf7f460e21921baffe68dcc95ace8277e33d243cbeccce1fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXRHONM%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgi8RE63Eh1KewNgZgTZXKe4kPxHHG4Ei65w54k8%2FKNwIhAOPBGqgy2MVDDQEeV2xrlxnYbCTmKT%2Fd%2F9JhS5IqXlfoKv8DCGMQABoMNjM3NDIzMTgzODA1IgyrrlfruzOaKJoFXEAq3AMZdNuwCUcbzvKVWmztZm6fX3nNhIjJeG9n%2FVk%2B%2FguAv4foijFdFlnE20tLzIa7zmNfC%2F3cVDAkqR5SbQRzxgA80gXqQctEYT%2Bplr4b3%2FJXUjxssdkAY7JWApIl6Py9AY%2FBlgfFD2ua6eRtBJ%2FWf0%2BsEr%2FLKTwB%2Bk8tmDbpCxaKV%2F4RItDyLE0bEys4KeZV7HmjUa24npRxPESOB%2BaCZdklHiqIPvIRCBBoMA3wca3kxw25%2FoaW9QcLewCpqpFzYuZeQ%2Fb8epLTNe2qf93V3oCr5ZQp9wJ4auPw2UFojKSdAMa70Ee1K281Iy253xMIk49h9m8lrZ8iuGhvus6yMHp2Fz5%2BJGvBL4Wby0X8%2FeNkF3lymgDibSXbP82cLLTOhqN2LvpgzET06RR53BnVvRs16RYuzL%2FWhf8kjzn9VpPOxFmXjfq9HKRnPo6k39SOJXOn8tFkLqBYmZGhNDAv2HTiTZs7JjIPkAktNKz2CharOr5d7W0qHq3kMK0b6fLuAGAzj8MLni4YuShbflG9xDZ4RGp2gVCtc4pCGLXuz8ivu%2BnJ7bmNjhSAIlFBy4ubnO5qGyoJeZfaJpHmaAFJGJVqO6UCIU%2BUYvGWPVUgS4PXdgsfh6M%2F11gJN8vLhzCQ%2BN%2FPBjqkAYdpE0ccwIyKOrmC7pTo9kwL4YkfDthXiKQgcGwQyv1rtaeVPpmcGGGhX8zbZKpbHgH07pTPaXWUGa5mfD7Y9wYNWIasE6pjgtrat8npIOCoK3asguyoHxKuFckAcbptVtoh6Og9iSTtfm7LkBbmCfTir2uUhUPdxFHD%2Bb9Ztbg1ybxYlrf7yzwWTJINUyu0jm6HPuqwc5a3JgbtQaFaJ96S3C1P&X-Amz-Signature=cea664b2c8fadf32b641f7c7e64749cf4792dc57eb2a659735b53e2db37377dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
