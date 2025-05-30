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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBV4UN3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoq7QhMBqTZcmE64WXziAqkVLK0UnMnoVgLRboBMR%2FCAiB1RV5Fyzly2PsCEGrF6dLczSl7juAnh2rRrO92JIG1dyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6U3UFmQOY3igJzVKtwDJYWnIitlBsuR4YKCHLRF%2FGN2Lr7iCtv7HKc5l8AuPLCOgRU00agzW6eT6ZokmB%2F7aN7N0DkJTOnBp5k%2BhyPEjslO6iblj1tlQFqu%2BIF%2FeLEFgEzahZI%2BkQ2ci5EDQieomhLvW0oon%2FgYw4tUTadAOugKjqNsQwWrxXqOkfvKN1IU6c0BLr5VQIFWQ2Odt%2FAcQz2TNFYHou1ERvb%2B0573eWu0QGzHHDMvKua3QDJVcA5JWl3BQO%2BWxfulCewwGIWrWG4mZSEVhoKPIiRJE012vdr8PKr8VC0V1nOuROq8LLcLVJXqlLvbVt5rBR1apT4MQtuZ5dsMm0cTxfFJLbGPCIjDYeIFnWYGdrbmn8ME7PpDxYlhh6BQf80BYGUR9R0cWtFMDgqIg7oInzi9kWiDRFVaGBXxi%2B3KPBp0TS1g5BjIXLWDme07ON6vjnHDsDQK6tAV8AxWC7Sa1WPAmjXwKuA8w9PqQQImcwuW6Z1GYPOWa8A03ovft6TtPmeBePrhLjxzL7dJESQA6W0P2RU3zSGi53OCE%2Fb74c20TsiRaduS%2FCqGxR7cRiZdV3layBONmdG8OEsGnd53h%2B1oCeYZFoCq87gap%2FXqJR%2F4SB6EMkFvW%2FH7mSclZbc5ZAow1I7mwQY6pgEIcy1X64V5P5y0xTCekUoNuZMwGGo80arow30o5qCTxV4QUezMRyImhiQpR5QIRoSVl3nHIwAKel241o7qfE%2BGxjuqE40R8vGH8qsI%2BcmhS0BPAHKm1dOvtmtj9O4HQEiEwncGfLhadvaLsYSMOux0DMCBoPH8Dbwtmc3CrDvUUic8MHEyZNiVo3MERozFzuKmUykIRx6n6s%2FSMcQkzfoRQUctEyaE&X-Amz-Signature=959429e3dbf17916135e13e3143480abdb07a029c983f4794dc941d181b5a1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBV4UN3%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoq7QhMBqTZcmE64WXziAqkVLK0UnMnoVgLRboBMR%2FCAiB1RV5Fyzly2PsCEGrF6dLczSl7juAnh2rRrO92JIG1dyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6U3UFmQOY3igJzVKtwDJYWnIitlBsuR4YKCHLRF%2FGN2Lr7iCtv7HKc5l8AuPLCOgRU00agzW6eT6ZokmB%2F7aN7N0DkJTOnBp5k%2BhyPEjslO6iblj1tlQFqu%2BIF%2FeLEFgEzahZI%2BkQ2ci5EDQieomhLvW0oon%2FgYw4tUTadAOugKjqNsQwWrxXqOkfvKN1IU6c0BLr5VQIFWQ2Odt%2FAcQz2TNFYHou1ERvb%2B0573eWu0QGzHHDMvKua3QDJVcA5JWl3BQO%2BWxfulCewwGIWrWG4mZSEVhoKPIiRJE012vdr8PKr8VC0V1nOuROq8LLcLVJXqlLvbVt5rBR1apT4MQtuZ5dsMm0cTxfFJLbGPCIjDYeIFnWYGdrbmn8ME7PpDxYlhh6BQf80BYGUR9R0cWtFMDgqIg7oInzi9kWiDRFVaGBXxi%2B3KPBp0TS1g5BjIXLWDme07ON6vjnHDsDQK6tAV8AxWC7Sa1WPAmjXwKuA8w9PqQQImcwuW6Z1GYPOWa8A03ovft6TtPmeBePrhLjxzL7dJESQA6W0P2RU3zSGi53OCE%2Fb74c20TsiRaduS%2FCqGxR7cRiZdV3layBONmdG8OEsGnd53h%2B1oCeYZFoCq87gap%2FXqJR%2F4SB6EMkFvW%2FH7mSclZbc5ZAow1I7mwQY6pgEIcy1X64V5P5y0xTCekUoNuZMwGGo80arow30o5qCTxV4QUezMRyImhiQpR5QIRoSVl3nHIwAKel241o7qfE%2BGxjuqE40R8vGH8qsI%2BcmhS0BPAHKm1dOvtmtj9O4HQEiEwncGfLhadvaLsYSMOux0DMCBoPH8Dbwtmc3CrDvUUic8MHEyZNiVo3MERozFzuKmUykIRx6n6s%2FSMcQkzfoRQUctEyaE&X-Amz-Signature=2bde7f782f094c303585abe32cc688a1069eca9d9d635f7cdf9ffa8d2f2c9381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
