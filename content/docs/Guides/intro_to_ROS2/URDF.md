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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQOPLJG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDln3adkv%2F32h4CTp4L1xPPMrzw96BOxwKNqKldJy8UugIhAMjrsOxMMpRYv7jG2q28fjFDnvzQ5czx5w%2Bk6n%2F9kETYKv8DCFUQABoMNjM3NDIzMTgzODA1Igwt19w1GsJeG%2Bbyj0kq3APo5J3wngIEpWsJA0ipGYEV%2FfcVjRTNIPNLuoRxCT511vbuqGKORn4n%2BYnBIpQ31GskagPI2Kj1Fc9IG0ILhVK0PXYuZXrppc9hNNdzgaJeWn82JSSwuqAs1oIpM0Q5p2G5wbw0K2TiTyllDoVh%2BaCoeB9pQEwI7mwyH2DS%2FZT1b1w4DddHNsRcA%2Bd2DRl%2B%2BxEchsc1%2BiUjuoHLSB3qrx%2B60SluMDTiIDYZbArwoEqdHoA7R7oDjXWDTGvB47JNwm5TOk5Va%2BQWPAi40pmP6CQDj%2BEjjNu8Pxhqe2pNQJDYtui3pLArfDuZMxj7Pp0cYtlqR2m0Csn40qDOkHYdfioObN78TJw%2Fbj61F7UVPWNhCtEk8TK%2BSTI7ePUf0OvxKmn8oKx7DhmrwGuLOviKW8vGpK8ehsUhUQupJKAOw%2BHbEUUbosJka4FKsvmuynlCQkyzpU%2FSBvjeLJeeuo8q9Ny2FJJGxwRSa%2FWCWJ0JFJCLIHFt75GxjfyocYW886hr1xWA%2BuyYm28SXW%2BgQVOccMIrUlB%2BSYPWOqDt%2B9chEdY9geQ238nrnAYU4Qs1Yn%2FSQIH0lwFyKBDHANxeMU7n7T%2BzEUcLK066B5aI%2B4rFm2yzEWDr8zND4CChZaHO5jCa0InCBjqkAZNzrMaEooWKQ1ppcB55xhJINiSWMk69C1IuwqtfJni4SoacmbbuRrsm29s6ATQcfMB9P0o5Jm%2BqBkblfsmx0r61cRA93%2B8dgENPapEmNcjO8BKzqPlyqsWM3KbPlb34vf4I3ntG7ZB%2FOCHcF0R6vpnZkbk%2Bha6k0lMbwYrU%2FzaDI03A0%2BRxv18hPUuarmvp5eEYPsmwAHGa7r4c2iPnQDI%2F9ujb&X-Amz-Signature=d7468596f26a3d39960b0ff42a596e5a799f82e699a03ad07adb74fad873d098&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQOPLJG%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDln3adkv%2F32h4CTp4L1xPPMrzw96BOxwKNqKldJy8UugIhAMjrsOxMMpRYv7jG2q28fjFDnvzQ5czx5w%2Bk6n%2F9kETYKv8DCFUQABoMNjM3NDIzMTgzODA1Igwt19w1GsJeG%2Bbyj0kq3APo5J3wngIEpWsJA0ipGYEV%2FfcVjRTNIPNLuoRxCT511vbuqGKORn4n%2BYnBIpQ31GskagPI2Kj1Fc9IG0ILhVK0PXYuZXrppc9hNNdzgaJeWn82JSSwuqAs1oIpM0Q5p2G5wbw0K2TiTyllDoVh%2BaCoeB9pQEwI7mwyH2DS%2FZT1b1w4DddHNsRcA%2Bd2DRl%2B%2BxEchsc1%2BiUjuoHLSB3qrx%2B60SluMDTiIDYZbArwoEqdHoA7R7oDjXWDTGvB47JNwm5TOk5Va%2BQWPAi40pmP6CQDj%2BEjjNu8Pxhqe2pNQJDYtui3pLArfDuZMxj7Pp0cYtlqR2m0Csn40qDOkHYdfioObN78TJw%2Fbj61F7UVPWNhCtEk8TK%2BSTI7ePUf0OvxKmn8oKx7DhmrwGuLOviKW8vGpK8ehsUhUQupJKAOw%2BHbEUUbosJka4FKsvmuynlCQkyzpU%2FSBvjeLJeeuo8q9Ny2FJJGxwRSa%2FWCWJ0JFJCLIHFt75GxjfyocYW886hr1xWA%2BuyYm28SXW%2BgQVOccMIrUlB%2BSYPWOqDt%2B9chEdY9geQ238nrnAYU4Qs1Yn%2FSQIH0lwFyKBDHANxeMU7n7T%2BzEUcLK066B5aI%2B4rFm2yzEWDr8zND4CChZaHO5jCa0InCBjqkAZNzrMaEooWKQ1ppcB55xhJINiSWMk69C1IuwqtfJni4SoacmbbuRrsm29s6ATQcfMB9P0o5Jm%2BqBkblfsmx0r61cRA93%2B8dgENPapEmNcjO8BKzqPlyqsWM3KbPlb34vf4I3ntG7ZB%2FOCHcF0R6vpnZkbk%2Bha6k0lMbwYrU%2FzaDI03A0%2BRxv18hPUuarmvp5eEYPsmwAHGa7r4c2iPnQDI%2F9ujb&X-Amz-Signature=530c2fd4641ed22f807ca1994003e077e0fd74b16993f63057cfa56b4d9af4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
