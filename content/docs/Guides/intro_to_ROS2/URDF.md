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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IPGYV6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtg1bqy1R%2FiwBbfnoyFxSmrqOTd1zeqGWdMvPXNwP29AiAmW83LfArJR4h%2BCbQq3T8HWbSXWNHzkdtYyiiRl%2F2X3Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMY16tfoPEokO%2FAEp7KtwD0nOCZ3pRfpcM1ZT2MQKh2%2F%2B4H2%2FD9dBblFbvYabQRRtOZnLOICwYjtlvGzoEw6%2F4%2FcVkwZNhX5GTL0S1YawdcrvUwKaHM6oaBZrKRFmb9CV%2FBrIY5KHPfLhL5CR%2FvUobwPcAOOb4v5PYzEAZUp0LO8XW4Ia4ynfrN6rT8octa0N9u%2B8lBwPl049ucC50Kfc0Vp8b6a81SP0kEXGkuff6FHpA5sjVgyz%2FwNmXQ92egnxKjWm1gR172ROMO%2FMxNVCM%2BX7OM91sftMrmTsTeHXqMgkkJn%2B4p%2BTz1D24VhB7TsJWtx%2F9z6YPSHeaeXHOKL0p8LzNwbg5RScMVwsNxnN8TLeH697T93cSYSLOhqAs43SeWrTMnBmgW7Z8eHv5vTE32plT4cxzEZfD0JDNWBy99K%2B1gv5c50R0Fm5i%2Foe4avA9nrDF3%2B2JPV4RAAC1B8%2B%2FLCZbmM1ZdQAp%2FPe9VoHHZaxujkVgvMlYya9Va4S2LKCCv0bmUWS4MSfHof%2BdJqCqNj7vVYpnDwKeGPWHOwAXUnYlirzkLVYmoUt60ut9BWKd70wwK5Vm5OG3EQoowi8hd%2FWJHj4%2Fzrygbd0Z5s3jGNTHzcXNqxXrAHot8zYD5nGzxsJth2%2BgPbo0UdYwpOzWvgY6pgHG5lWIC%2BR%2Btp6sHYE88Ts1qDF3%2By1KU868JnFSCLEPs61D48j4o%2BZIP0w6MF0NTQWG5dYOqQJD5Fl6COZe8E5%2Fzs%2BWmZUHmoE695kz0DrxL%2B6F%2FXUxwEiVYTsQ2FucneumnHo7gM508Pf2UbVGpxY8pBKKFY%2FBTGSdSFbnLsTcadw6xdy4fu%2FUhpBjAd%2F8Vl8OA0AFNo1%2FQcOu6EQLQJzmtbqWEV2c&X-Amz-Signature=1dd2c23fbbd21fbf60d94b3be77d689f08617a8030a2b584cacc75eb24367bee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IPGYV6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtg1bqy1R%2FiwBbfnoyFxSmrqOTd1zeqGWdMvPXNwP29AiAmW83LfArJR4h%2BCbQq3T8HWbSXWNHzkdtYyiiRl%2F2X3Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMY16tfoPEokO%2FAEp7KtwD0nOCZ3pRfpcM1ZT2MQKh2%2F%2B4H2%2FD9dBblFbvYabQRRtOZnLOICwYjtlvGzoEw6%2F4%2FcVkwZNhX5GTL0S1YawdcrvUwKaHM6oaBZrKRFmb9CV%2FBrIY5KHPfLhL5CR%2FvUobwPcAOOb4v5PYzEAZUp0LO8XW4Ia4ynfrN6rT8octa0N9u%2B8lBwPl049ucC50Kfc0Vp8b6a81SP0kEXGkuff6FHpA5sjVgyz%2FwNmXQ92egnxKjWm1gR172ROMO%2FMxNVCM%2BX7OM91sftMrmTsTeHXqMgkkJn%2B4p%2BTz1D24VhB7TsJWtx%2F9z6YPSHeaeXHOKL0p8LzNwbg5RScMVwsNxnN8TLeH697T93cSYSLOhqAs43SeWrTMnBmgW7Z8eHv5vTE32plT4cxzEZfD0JDNWBy99K%2B1gv5c50R0Fm5i%2Foe4avA9nrDF3%2B2JPV4RAAC1B8%2B%2FLCZbmM1ZdQAp%2FPe9VoHHZaxujkVgvMlYya9Va4S2LKCCv0bmUWS4MSfHof%2BdJqCqNj7vVYpnDwKeGPWHOwAXUnYlirzkLVYmoUt60ut9BWKd70wwK5Vm5OG3EQoowi8hd%2FWJHj4%2Fzrygbd0Z5s3jGNTHzcXNqxXrAHot8zYD5nGzxsJth2%2BgPbo0UdYwpOzWvgY6pgHG5lWIC%2BR%2Btp6sHYE88Ts1qDF3%2By1KU868JnFSCLEPs61D48j4o%2BZIP0w6MF0NTQWG5dYOqQJD5Fl6COZe8E5%2Fzs%2BWmZUHmoE695kz0DrxL%2B6F%2FXUxwEiVYTsQ2FucneumnHo7gM508Pf2UbVGpxY8pBKKFY%2FBTGSdSFbnLsTcadw6xdy4fu%2FUhpBjAd%2F8Vl8OA0AFNo1%2FQcOu6EQLQJzmtbqWEV2c&X-Amz-Signature=da07f40baae33857dd8907a51f007720e6defeb4e2cb95d70b69d7ac6a9778ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
