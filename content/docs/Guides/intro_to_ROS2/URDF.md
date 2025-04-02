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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQRC24%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCrkGPKiCOkdEQOo0gyI5L5uzn4csCAUK%2FpxWNJxTm%2B5AIhAKwHm%2BpQsYIK%2BqfAsBmQ%2F%2BGaKhqpJYZn5FeAH7gSewziKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5XZdPb4TE03BM8NMq3AMP%2F2hVwaTPsOxqCb6fT7NVbiQvzj6bL04W9CAhZS%2F543LAlvrEY2PF1J1cZKJjsNxfYIpEBBK3x3uXIjgoYOTZXbyswz6gAzYCbsx%2BCBaYav2N8MVqcoIdOwBH8uToe2TqQq9sMIzOz%2F24XxTOjqtPkgtFpxGkE7K2awnUOcN6zIj7tpjnBnTc560kUU5LpCYsJO8DIl44ZecEHzopXL1wjEnUmEHGboGNodMhF%2BLBj3KCG14pRgN76ElLeFfWIt1WNq1GBN3FReDP3tNh3kLiroiBI9bTRLaPZqrMmlqHztI%2BUYsOQLp3FC6NOc34jHdifdRo9rCtmPflyvCd2ZW49tCzEmAC6Slagr5H4ZQ%2Fduy7zMR%2BOFrNIdhAC1rsAHMCVuEWCm0%2F9yvWSMc%2Fqq5JPF1GuvDvKiDroHNnrFk3J1eTWUIkUWZAy2DNSrmlB2aMC%2F%2B9fpz%2B1jMpElkeAN%2FBB3LUdZLYw7OyR4XU9UQrXSFbZ7SuSpGS%2FcbbstASV7BYnXAh%2BVRlrSC1YDKHJPeq9ebR3fLAIBspQrGBdg8Nf%2BvDdNwUAWsR5FP8OsespbW88Wkc3bz6gc2A9O1yzsYfqn24PzC4OPErMHAvkAxiMR%2BNu5Px3Ymd0BcCCzDC6bW%2FBjqkAerpfIYvwEbiRgeHueFEiWgAJQMIq0YV3gWWrGN4z%2FBTLvpyCE4J%2FcZv74Ixhn%2BvbmZaSac6wDoGF%2BXhPFK1omJZ0UqbN6aXEQyCjHWnhMAt9DfHB5g6aDsUYRbjoXhrSW3q5dNMmYZqXHp585fo5rIL75u9XuC2rBf8ErAhsstKHPx0hn3hRwDPZvx62JzdAkhnYuPS4ZHj1FxJSgd%2Fb1eics63&X-Amz-Signature=5f3eb9a70ae2d49f25e68d06f4fcc75c6a620ca8434a9fe905b5954aa3625953&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQRC24%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCrkGPKiCOkdEQOo0gyI5L5uzn4csCAUK%2FpxWNJxTm%2B5AIhAKwHm%2BpQsYIK%2BqfAsBmQ%2F%2BGaKhqpJYZn5FeAH7gSewziKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5XZdPb4TE03BM8NMq3AMP%2F2hVwaTPsOxqCb6fT7NVbiQvzj6bL04W9CAhZS%2F543LAlvrEY2PF1J1cZKJjsNxfYIpEBBK3x3uXIjgoYOTZXbyswz6gAzYCbsx%2BCBaYav2N8MVqcoIdOwBH8uToe2TqQq9sMIzOz%2F24XxTOjqtPkgtFpxGkE7K2awnUOcN6zIj7tpjnBnTc560kUU5LpCYsJO8DIl44ZecEHzopXL1wjEnUmEHGboGNodMhF%2BLBj3KCG14pRgN76ElLeFfWIt1WNq1GBN3FReDP3tNh3kLiroiBI9bTRLaPZqrMmlqHztI%2BUYsOQLp3FC6NOc34jHdifdRo9rCtmPflyvCd2ZW49tCzEmAC6Slagr5H4ZQ%2Fduy7zMR%2BOFrNIdhAC1rsAHMCVuEWCm0%2F9yvWSMc%2Fqq5JPF1GuvDvKiDroHNnrFk3J1eTWUIkUWZAy2DNSrmlB2aMC%2F%2B9fpz%2B1jMpElkeAN%2FBB3LUdZLYw7OyR4XU9UQrXSFbZ7SuSpGS%2FcbbstASV7BYnXAh%2BVRlrSC1YDKHJPeq9ebR3fLAIBspQrGBdg8Nf%2BvDdNwUAWsR5FP8OsespbW88Wkc3bz6gc2A9O1yzsYfqn24PzC4OPErMHAvkAxiMR%2BNu5Px3Ymd0BcCCzDC6bW%2FBjqkAerpfIYvwEbiRgeHueFEiWgAJQMIq0YV3gWWrGN4z%2FBTLvpyCE4J%2FcZv74Ixhn%2BvbmZaSac6wDoGF%2BXhPFK1omJZ0UqbN6aXEQyCjHWnhMAt9DfHB5g6aDsUYRbjoXhrSW3q5dNMmYZqXHp585fo5rIL75u9XuC2rBf8ErAhsstKHPx0hn3hRwDPZvx62JzdAkhnYuPS4ZHj1FxJSgd%2Fb1eics63&X-Amz-Signature=da8678f6635b38525e47d50883726908899439bc168f8d339baa25a518bba895&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
