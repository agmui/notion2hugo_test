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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDB3NSM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvEsoHMkDRhoRx%2FjfClreGLvjQNRH8S0CMg6CF5dglWgIhALGtCKGhniJxuOth9NjNySlJvmWVKoMSPEfLg2HBnAskKv8DCHoQABoMNjM3NDIzMTgzODA1IgxZUeAkCBsZAwQjvlgq3ANvbFE9RrEevGq%2Fyn0MBB%2BGOhYcllmw3BlNu0%2Frpi9ibsr3gL2fFf87V%2FlxrQEcIHqx0pX%2BdTk3M3N5g5SK45oDUdD5r5G8R%2FVH4wBhDViy37AVvkA99Es%2FVO4jmqNwjAwu99TVNbetWAuFoknauyZLX2JxVQ97FofttqeddCs8r%2BIzueKR8MBCTEAje6MhdQdZkwe0tiOaojcaU7LFT11wnX7KxbGq5ykDigZi7d%2Bn%2BPN77CA6VL5Hc82TwJ%2Fo8sjwMlAsJKlW%2BRSlIDtxtV%2FiYL7kvae43iLbQOajQ53xfouhHhHOvCpbBiWQev15E03jDJIgdFgT78PPjmLh%2B2fNnVBRNC3wettMVjhjFEgHRdrRnhXECo6BPxSLm1s5U9luCRXzsmeuphDtEhxqILtxKEWKHCAEorHcPSJ1CHXGNi7sHBuRcSNZq%2BjbkfSRz4lCpmX5rHSMe%2BfQIC93WK2bsR6QEB2eiKcvX4WUdJrhv1m3OFyHg9%2FS4kFqO0O6K%2FRKpiUdlBCA8fd%2FWwcgyfMsWajtfjk73d8F5K957xbtH7EmgH%2FatDKAGZe1T0XWxREnaQKrMuRQ0qmkegky%2F3rfqiog6TaI6wm%2BFVf7pySUK7Ac9HxCob029bG%2BlDDQk4rABjqkAbEa19JYfrXA1LFSioyHDSEIg8B5elOAFcZj5t8uBOUW07tTBTxKmJJmrZmp8qZ891LGaNFGwl%2F8iEn3ukb5an8TOKFZClpnTNyEA0ieVW6Dcs0nxPClKEJJEOuzW7hXhyH%2FVA8zNraRlYccPeYD54evlG%2F2Ig%2F2Sq1NYcmDWpi98tSbRlycHmIiXzNMpMv5E2C4OQ0NJHB1uFm8Ubqz5RDABAGr&X-Amz-Signature=3d246049af65952581c3a7d3ea5a12f7e755b2ace3b64deb4604bdc351008082&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCDB3NSM%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvEsoHMkDRhoRx%2FjfClreGLvjQNRH8S0CMg6CF5dglWgIhALGtCKGhniJxuOth9NjNySlJvmWVKoMSPEfLg2HBnAskKv8DCHoQABoMNjM3NDIzMTgzODA1IgxZUeAkCBsZAwQjvlgq3ANvbFE9RrEevGq%2Fyn0MBB%2BGOhYcllmw3BlNu0%2Frpi9ibsr3gL2fFf87V%2FlxrQEcIHqx0pX%2BdTk3M3N5g5SK45oDUdD5r5G8R%2FVH4wBhDViy37AVvkA99Es%2FVO4jmqNwjAwu99TVNbetWAuFoknauyZLX2JxVQ97FofttqeddCs8r%2BIzueKR8MBCTEAje6MhdQdZkwe0tiOaojcaU7LFT11wnX7KxbGq5ykDigZi7d%2Bn%2BPN77CA6VL5Hc82TwJ%2Fo8sjwMlAsJKlW%2BRSlIDtxtV%2FiYL7kvae43iLbQOajQ53xfouhHhHOvCpbBiWQev15E03jDJIgdFgT78PPjmLh%2B2fNnVBRNC3wettMVjhjFEgHRdrRnhXECo6BPxSLm1s5U9luCRXzsmeuphDtEhxqILtxKEWKHCAEorHcPSJ1CHXGNi7sHBuRcSNZq%2BjbkfSRz4lCpmX5rHSMe%2BfQIC93WK2bsR6QEB2eiKcvX4WUdJrhv1m3OFyHg9%2FS4kFqO0O6K%2FRKpiUdlBCA8fd%2FWwcgyfMsWajtfjk73d8F5K957xbtH7EmgH%2FatDKAGZe1T0XWxREnaQKrMuRQ0qmkegky%2F3rfqiog6TaI6wm%2BFVf7pySUK7Ac9HxCob029bG%2BlDDQk4rABjqkAbEa19JYfrXA1LFSioyHDSEIg8B5elOAFcZj5t8uBOUW07tTBTxKmJJmrZmp8qZ891LGaNFGwl%2F8iEn3ukb5an8TOKFZClpnTNyEA0ieVW6Dcs0nxPClKEJJEOuzW7hXhyH%2FVA8zNraRlYccPeYD54evlG%2F2Ig%2F2Sq1NYcmDWpi98tSbRlycHmIiXzNMpMv5E2C4OQ0NJHB1uFm8Ubqz5RDABAGr&X-Amz-Signature=972b30570eee562422fc44ad69444300d52134cf9e9d604b1a03885f3216c4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
