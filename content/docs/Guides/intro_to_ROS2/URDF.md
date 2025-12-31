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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYPPNRO%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3ZtL59M20vY8Y2dzE1NgjAyXaCVE18YOrqxPXE56CAAiAQCiFtSEUaWFQ8D2Kr7xU%2BKifaTiorOrlu2mmMBWcz7SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0YnmIu%2Br%2F5%2BHNpTvKtwD2tA2PwUKEymVABsfdnKeyaeiaUiXPLl3wPdd1av8s2Y3SeVX5P1gnLatCjmrysQLaDGUuzRnLywocfcMcsWyPxrmDRoSLYaqzIoyV%2BOiUL5QrNq%2FFp5vxX05P59eZ0uX0RiktkNP8wjpvxtH69JoaBY1rttUI9FpmvGY456DpWktFpgCIxng%2BKYMBrmpapcN8aYDXBVz2avOiE1WgVjDoGbgphPCAX6PrKF8WJzmZkcuBBat21onFGKDDumJ8A44ClEA0DJMhoHKf%2FYRY0z0Z2dRyx1RJ9dVQi6JCNcXcTaik72wQnd5fIlmlezyyNPWs0JPXgF7OIL5dmeGiPK5HngFkKjw9OZ3Ut0%2FVbRJQdGFrha4JpG0ZnNVgnq3iuJaU1T36XewJWzivmEAv6kAFCxM9YaZZWYu%2F2sz9CZjfEqYdi4YQZd1Q2hNFBlZoc0LKjxbi1ejLBC13Oh4YAk4L2VCYuEGUKIQp9DwW6A8YI7iNQ1FGbHLs3mn7dAfwmqqiTmTkdc0SzjcJq5tL5kQpGBZQRDCS5zCH0VRQi5NfjIO8adWvghSS5qnkoaOLc%2ByEwWdgNEFwAvV6J56KS6E8VyLS0SwC6P4a4s6lqzEUG6aFlAOuidpJ5QNZBIwzPTRygY6pgGGuTZvE59E6kYnO2pbgccUENhVj%2BNq%2BIKTMfVu5oEHEbTB%2Fkln0%2F7bcP0XlBlUSWOB9tl32uDfWsCFc5GdkIf9atLCH2wFYIWm0q7tjFCJUZRi59tp3%2F1xCoyGr9IOewP6Yhba8mSt49Um6SUgRNezDJOEGZbxVP1yMRoGVGpzE51UUDm71LPzxWdaPWGo36KYrTnntPlAs9%2F1KgxVFRtMdDRPLbx9&X-Amz-Signature=f8e09e36cccb8311986188612f8ff6e3e5a31dc173714cde96e705fef6efb0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SYPPNRO%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3ZtL59M20vY8Y2dzE1NgjAyXaCVE18YOrqxPXE56CAAiAQCiFtSEUaWFQ8D2Kr7xU%2BKifaTiorOrlu2mmMBWcz7SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0YnmIu%2Br%2F5%2BHNpTvKtwD2tA2PwUKEymVABsfdnKeyaeiaUiXPLl3wPdd1av8s2Y3SeVX5P1gnLatCjmrysQLaDGUuzRnLywocfcMcsWyPxrmDRoSLYaqzIoyV%2BOiUL5QrNq%2FFp5vxX05P59eZ0uX0RiktkNP8wjpvxtH69JoaBY1rttUI9FpmvGY456DpWktFpgCIxng%2BKYMBrmpapcN8aYDXBVz2avOiE1WgVjDoGbgphPCAX6PrKF8WJzmZkcuBBat21onFGKDDumJ8A44ClEA0DJMhoHKf%2FYRY0z0Z2dRyx1RJ9dVQi6JCNcXcTaik72wQnd5fIlmlezyyNPWs0JPXgF7OIL5dmeGiPK5HngFkKjw9OZ3Ut0%2FVbRJQdGFrha4JpG0ZnNVgnq3iuJaU1T36XewJWzivmEAv6kAFCxM9YaZZWYu%2F2sz9CZjfEqYdi4YQZd1Q2hNFBlZoc0LKjxbi1ejLBC13Oh4YAk4L2VCYuEGUKIQp9DwW6A8YI7iNQ1FGbHLs3mn7dAfwmqqiTmTkdc0SzjcJq5tL5kQpGBZQRDCS5zCH0VRQi5NfjIO8adWvghSS5qnkoaOLc%2ByEwWdgNEFwAvV6J56KS6E8VyLS0SwC6P4a4s6lqzEUG6aFlAOuidpJ5QNZBIwzPTRygY6pgGGuTZvE59E6kYnO2pbgccUENhVj%2BNq%2BIKTMfVu5oEHEbTB%2Fkln0%2F7bcP0XlBlUSWOB9tl32uDfWsCFc5GdkIf9atLCH2wFYIWm0q7tjFCJUZRi59tp3%2F1xCoyGr9IOewP6Yhba8mSt49Um6SUgRNezDJOEGZbxVP1yMRoGVGpzE51UUDm71LPzxWdaPWGo36KYrTnntPlAs9%2F1KgxVFRtMdDRPLbx9&X-Amz-Signature=789767e97d396dbdd614f583c3a713ffa9572725fcc1c3c92c10037b307c6753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
