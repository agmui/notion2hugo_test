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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXZVSSC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUW0g%2BV0bywa2PYfm37woX0ExgET1t6mxFq%2FjYb5IkSQIgbqzlsUbHJjXzfruiE%2B%2FW6Qi%2Ffc37JBRcx26AlqjAk6Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBdLKSWAe34tQjXBvyrcAyhswje5JqG8rEIUkoKJu%2B7seNrLgqff7rn0Nf6asF84%2BJFrlBbcKAKRMmLf8z%2Bq%2FFeBcy8T%2BOkIl8bpL%2FxoyKrwWxYohrjMNfkD2FVoh48k5jBP348UWxN6t04%2FO5TrtQEfgE9%2BP4OcSTxJNjsdNRzMae6hN31t%2BXeI5GOYFf5qKHKaZAZtVVzta60b6SU3T832lKwcIzV3oSl2MzWd2aUkYPOjjpiyXWcPcSxovNR8fNhrO3cBNDFx%2FmiEk4uzIaL%2BofDw6xlEd%2B56nknuibOAdsm8ycqPTMyCcjzppe2WM5lKL7sx8JWrsDD6BzxR9KjPaZEOeGk%2BgCdwsvgxZ6bxWZRu8o96N4bqQcG5v%2BvLI%2B87Cp3KgYvjj0w%2BWssXsOaOrLHEdYT5TX8V5MtJVfDHJ8kAhnNlhETQjozyRyY9or5ErixhQB%2FpUTsneyVoaC4kpaR2gi4reQZuwbQeol3JAwRDUM%2BFPivJMp1BKLcbmAHHuoHAcg0TWYD0hXHNXigWVcmpanbuv9dfrmZisPkp3fFsf0VtV0JajFBSbzMI%2BtyjB2dqXhUw8I4aKRvj2NE%2Fpb52Gxp4dSXuBMUhns%2BXFIkeK0f3UmRv7ykku81INeLXrQRSFwSz3Nz0MMK3r8AGOqUBnNcq0qAoUED0Oslh7qJyYD%2FmmdxnRa6UTlR48POI1L2zyO8J67dHRihDTiCV8d%2BV6dGf5OswNi60HweWetnxmSUxjK9zgICPD28fxXb9FAJiEr1hM6s%2FFq9hA65qU%2BDCKT2VrIY1S3QCGOaYAWaxyIs3EzHRxNUEJeJWGyNdr4LhiDZt%2Fc5%2B9GNq9HDNLT4EzlFiHH%2BAyOb%2BVXYxSsMpm3ccBd1H&X-Amz-Signature=0e6383b746f39769eaa070e646351219ec7f8f3efcab2034ff3ed39d278e427e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XXZVSSC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUW0g%2BV0bywa2PYfm37woX0ExgET1t6mxFq%2FjYb5IkSQIgbqzlsUbHJjXzfruiE%2B%2FW6Qi%2Ffc37JBRcx26AlqjAk6Eq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBdLKSWAe34tQjXBvyrcAyhswje5JqG8rEIUkoKJu%2B7seNrLgqff7rn0Nf6asF84%2BJFrlBbcKAKRMmLf8z%2Bq%2FFeBcy8T%2BOkIl8bpL%2FxoyKrwWxYohrjMNfkD2FVoh48k5jBP348UWxN6t04%2FO5TrtQEfgE9%2BP4OcSTxJNjsdNRzMae6hN31t%2BXeI5GOYFf5qKHKaZAZtVVzta60b6SU3T832lKwcIzV3oSl2MzWd2aUkYPOjjpiyXWcPcSxovNR8fNhrO3cBNDFx%2FmiEk4uzIaL%2BofDw6xlEd%2B56nknuibOAdsm8ycqPTMyCcjzppe2WM5lKL7sx8JWrsDD6BzxR9KjPaZEOeGk%2BgCdwsvgxZ6bxWZRu8o96N4bqQcG5v%2BvLI%2B87Cp3KgYvjj0w%2BWssXsOaOrLHEdYT5TX8V5MtJVfDHJ8kAhnNlhETQjozyRyY9or5ErixhQB%2FpUTsneyVoaC4kpaR2gi4reQZuwbQeol3JAwRDUM%2BFPivJMp1BKLcbmAHHuoHAcg0TWYD0hXHNXigWVcmpanbuv9dfrmZisPkp3fFsf0VtV0JajFBSbzMI%2BtyjB2dqXhUw8I4aKRvj2NE%2Fpb52Gxp4dSXuBMUhns%2BXFIkeK0f3UmRv7ykku81INeLXrQRSFwSz3Nz0MMK3r8AGOqUBnNcq0qAoUED0Oslh7qJyYD%2FmmdxnRa6UTlR48POI1L2zyO8J67dHRihDTiCV8d%2BV6dGf5OswNi60HweWetnxmSUxjK9zgICPD28fxXb9FAJiEr1hM6s%2FFq9hA65qU%2BDCKT2VrIY1S3QCGOaYAWaxyIs3EzHRxNUEJeJWGyNdr4LhiDZt%2Fc5%2B9GNq9HDNLT4EzlFiHH%2BAyOb%2BVXYxSsMpm3ccBd1H&X-Amz-Signature=db94a7accea310d9d6c28b7be92fbb2825b3731a3fd18cdcc73b59139492cad2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
