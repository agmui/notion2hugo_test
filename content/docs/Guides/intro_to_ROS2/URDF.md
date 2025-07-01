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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HWM3SA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWvaRPMzY7sVuyzLjIuerPiCYvxDoNGdscQz8hRMYHQIhAK%2BIuY3W8nilE3iDnAzaiXPZKXsF9otKINrNzW8p2eQkKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEx14mBYcFJ7aeAtUq3AOo7WFw0EunCV%2BpFfGrSHXHUINOk9loYe4DZrNuY16x2J5Oerlm9RgtHhIhV%2BrUsxgFZ72yqL4jBvC9j7klYc25xYuRQjS3H4M5ufCgx%2FuDEskUrvT8kdbhRwtgpOUbN1Qhv2q3D2Fb6XOQfeXNimqlghrvlZb51yObRAd9vyZVfxHe0RXIhucqPY%2BePNbpUKWLWr0DCuHf6qykB60MfSUeNSqBZsRCAWHec8tbxN0la62OVlZ2KyM8w08YyKhZWUikwSKOuaBwjAasjm2HT5OMRJ2f7yhDZEyPBUJTlDerCTlyGp7rR7lP1STlSGfCKa1rvMJ3gDLPIAxONjsMCZgLNFoVJcApZO5fJyg%2BfJ23a01y5NKyLDcW0xL46Lsrfkb9rKOAS03%2FveMYsz7OOVAeehpifTqwJ08UUHnyw1wDXZSQlLCHVo8H58%2B%2FAv8tySMbjIs5ayuIPgVfKYDMINFSL3lnryTuem1l3Hj1wUOLvKiRQsPoyXnjO2Ao0PZ%2BsDn7nRksVIAubihDzbEIr6OJjBxK96ZsF3cEDC8gXguDRv31H1msjC%2B%2FqMmTMeUry%2BBI2GOh4wFHiZn4CWtRBY3A2UAfnF7flzBBh3DMsr9NdvZScSOKPYCd1OYWyTDU%2F47DBjqkAcUtOyh0qlkgx08IOlo2galVK8H6OgF%2BrW7ynJgiDxkDSIK8tbL%2FFdUcX%2BacvnoJSpuOzwwF3oYI5zWYkTuf2qcYIwSTyG7SfPVgpdUe0y4mNZ1%2BYdBYzm4sSgBekIzK0g%2BuNAdzuAg2kR%2F09EDEf3cQvJf%2FctHKikW94FliwcEArjfXmQRkry5aLoF2hYmtgHz2uhfHo9Jmr2qPT28KnnGxyHNY&X-Amz-Signature=cde3ab7a9aaaaf0cadf0bf6fb09478aba3e91a9fdc57765d5c7fc0973a2ecdc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HWM3SA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMWvaRPMzY7sVuyzLjIuerPiCYvxDoNGdscQz8hRMYHQIhAK%2BIuY3W8nilE3iDnAzaiXPZKXsF9otKINrNzW8p2eQkKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEx14mBYcFJ7aeAtUq3AOo7WFw0EunCV%2BpFfGrSHXHUINOk9loYe4DZrNuY16x2J5Oerlm9RgtHhIhV%2BrUsxgFZ72yqL4jBvC9j7klYc25xYuRQjS3H4M5ufCgx%2FuDEskUrvT8kdbhRwtgpOUbN1Qhv2q3D2Fb6XOQfeXNimqlghrvlZb51yObRAd9vyZVfxHe0RXIhucqPY%2BePNbpUKWLWr0DCuHf6qykB60MfSUeNSqBZsRCAWHec8tbxN0la62OVlZ2KyM8w08YyKhZWUikwSKOuaBwjAasjm2HT5OMRJ2f7yhDZEyPBUJTlDerCTlyGp7rR7lP1STlSGfCKa1rvMJ3gDLPIAxONjsMCZgLNFoVJcApZO5fJyg%2BfJ23a01y5NKyLDcW0xL46Lsrfkb9rKOAS03%2FveMYsz7OOVAeehpifTqwJ08UUHnyw1wDXZSQlLCHVo8H58%2B%2FAv8tySMbjIs5ayuIPgVfKYDMINFSL3lnryTuem1l3Hj1wUOLvKiRQsPoyXnjO2Ao0PZ%2BsDn7nRksVIAubihDzbEIr6OJjBxK96ZsF3cEDC8gXguDRv31H1msjC%2B%2FqMmTMeUry%2BBI2GOh4wFHiZn4CWtRBY3A2UAfnF7flzBBh3DMsr9NdvZScSOKPYCd1OYWyTDU%2F47DBjqkAcUtOyh0qlkgx08IOlo2galVK8H6OgF%2BrW7ynJgiDxkDSIK8tbL%2FFdUcX%2BacvnoJSpuOzwwF3oYI5zWYkTuf2qcYIwSTyG7SfPVgpdUe0y4mNZ1%2BYdBYzm4sSgBekIzK0g%2BuNAdzuAg2kR%2F09EDEf3cQvJf%2FctHKikW94FliwcEArjfXmQRkry5aLoF2hYmtgHz2uhfHo9Jmr2qPT28KnnGxyHNY&X-Amz-Signature=c9f1ff9ee2793461081f29e0c2263e536ab8a6101b29f00cdfc151fc25993406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
