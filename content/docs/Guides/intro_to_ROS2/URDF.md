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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTR2U57N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25x%2FMI5yse2YpZpkYwEdxfjGwaBx1IxWKRcqVXrVP1wIgCDkc%2FQQTRllaGoSvtMbnNxjSSHrImfQM2QO19b1cqX8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjBDPaaW3Mmy0QtqircAzCzx88zOJaLIjNJ%2BsC4jUpCvv9LCb5KG5ZTC1wSNYnmiFbx0s%2B6ZO0L9HS5cuu9Wqoq3FHNNIU%2Bqq6uCAOHX1xh95z03mH0w7m4P3hfw4194Mp3N1JrHPx7BqO8BrfCLeIU9N5ZNv9C7O%2F7i4alDhSya%2FAVvMg6A03fw2Klrz6jAAW07Xa11lKxOVsx32M4KOdFNsr2ZMdBlasQa06sbOQmmlj%2FkPMo1KzoeVMF28w9t9Uj9Z4avmAc9%2Ft%2Fxc6BXo0JyJOA0wRyV3E6eDuVKBWNAIVzm71IIyC4SKDg4aj%2FOWYB5Qlxx0pzMY5kugNHWj4JJlN6Wj0JE7SmSfxw%2F32sDHZNzvcA0SVq81bVUw9YyapFnArGihaT5BkdTx%2BzueZUlcGshyYaM8BYwC2Is1xO3qzo%2Faq6vc7utt%2F%2FeZfNkHymaiWk%2Bf4T%2BxnDps%2B%2Ff0JncG6iKNBA7urBVY7m%2FTnGeqss37HjUb1fm%2FAPOWRcK6MD3yuxPJEjQKGMLzw030CjxX97ara%2BYahzLIBc1xQiDEdNzf3fVW83725FUYH0Czqob0BtWTlJpOPWFzfLkhxKJshcBK3mZpKIS9mMyiort2zr7B6nJp4w%2BTiTwSIAdj9mKshHcLnTtpLoMNfdqr0GOqUB%2Fq7wbenlj%2BHBuPQpFBps5q9of%2FLyxiKfOEDSxiKRs1GfeNR9SjnVmbecCoc3GoqKWA3nkQ%2FRJ%2FGUwfGdoMJHG5OlTkRLre4%2B9u26oU28ijqVajoeWIzC5HehbZhfKvKTVSrJQuLW%2F%2B8ZfXLkm0n04J89WGOS5uVcHkBhzUFcUWSXEg2LHoKT6xeijZ%2BSHR%2Fp3nUqraVfw853NFXQsbN3BsPCqeMX&X-Amz-Signature=2475bd43b10e802ee25c2d1ad0a1d4a7bd86d11c330eb8928357a73e71dfc939&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTR2U57N%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25x%2FMI5yse2YpZpkYwEdxfjGwaBx1IxWKRcqVXrVP1wIgCDkc%2FQQTRllaGoSvtMbnNxjSSHrImfQM2QO19b1cqX8qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjBDPaaW3Mmy0QtqircAzCzx88zOJaLIjNJ%2BsC4jUpCvv9LCb5KG5ZTC1wSNYnmiFbx0s%2B6ZO0L9HS5cuu9Wqoq3FHNNIU%2Bqq6uCAOHX1xh95z03mH0w7m4P3hfw4194Mp3N1JrHPx7BqO8BrfCLeIU9N5ZNv9C7O%2F7i4alDhSya%2FAVvMg6A03fw2Klrz6jAAW07Xa11lKxOVsx32M4KOdFNsr2ZMdBlasQa06sbOQmmlj%2FkPMo1KzoeVMF28w9t9Uj9Z4avmAc9%2Ft%2Fxc6BXo0JyJOA0wRyV3E6eDuVKBWNAIVzm71IIyC4SKDg4aj%2FOWYB5Qlxx0pzMY5kugNHWj4JJlN6Wj0JE7SmSfxw%2F32sDHZNzvcA0SVq81bVUw9YyapFnArGihaT5BkdTx%2BzueZUlcGshyYaM8BYwC2Is1xO3qzo%2Faq6vc7utt%2F%2FeZfNkHymaiWk%2Bf4T%2BxnDps%2B%2Ff0JncG6iKNBA7urBVY7m%2FTnGeqss37HjUb1fm%2FAPOWRcK6MD3yuxPJEjQKGMLzw030CjxX97ara%2BYahzLIBc1xQiDEdNzf3fVW83725FUYH0Czqob0BtWTlJpOPWFzfLkhxKJshcBK3mZpKIS9mMyiort2zr7B6nJp4w%2BTiTwSIAdj9mKshHcLnTtpLoMNfdqr0GOqUB%2Fq7wbenlj%2BHBuPQpFBps5q9of%2FLyxiKfOEDSxiKRs1GfeNR9SjnVmbecCoc3GoqKWA3nkQ%2FRJ%2FGUwfGdoMJHG5OlTkRLre4%2B9u26oU28ijqVajoeWIzC5HehbZhfKvKTVSrJQuLW%2F%2B8ZfXLkm0n04J89WGOS5uVcHkBhzUFcUWSXEg2LHoKT6xeijZ%2BSHR%2Fp3nUqraVfw853NFXQsbN3BsPCqeMX&X-Amz-Signature=b3ab45a0f6adc4b269800aeafa47e6d465c189309f10850b0331f039ee388965&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
