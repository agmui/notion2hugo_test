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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662373LJ3C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlmcPgiJvV4I0F6aPwquEvRsqOITUAPJmSlBgbkeumqAiAB8tcSn4KVN41EhkSiz2oOkx92unfsRQ8%2BDWEaNO44ZiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0at5fvaxG4qxqX2zKtwDWeboOrSqj5T1nCbCy1yWYEWe7eXPng9uI5Km6eF2XuV%2FhL80TN7R%2Fha2SmKkXJQH7DqiWQpI8Ki5SFxWTfQYWMNpnKSHEflHQ8%2BCbEXdPsaI2GD89kLFdhIb8u5QDdqI7BDSK69Bl87IRZQuuL2YgwcRbJdMhuH1Gss0V8g62OsgSHE5h9kG35RL6XOjs7pDjbevk4HV394eFDpC5L3Eyggv8bsAn3raaLKw9qlouP8cAXMRalZSgxFVQp7sP8sLZGEloy9mZUJ%2BtqllwK1eslkXIUBIMa%2BHqedKFxoHB%2FhgSRW54Sk9HkAGD5s3VbOsBpAygOrda4xlHlozTdzeKIKh844LaAu%2Fg2pcGuS2qdXPNio1XWxiqtf5T75i2GoZi7zCdHx8auS%2F2jEhlxL4R49JoMMf9HO1XBmQGFIk7o5qdd5tPhte%2FftN%2BdrVfxZyhAckNlJopXS78Ir1Ajmj85ct8rjbaNWSxAaUS%2Fyz4%2FufBZFOil3Oqg0Oqt0INzpVStHbAgAbyxCbVEZqxE%2BO1dO5hmf%2FbWOcJY4Pp7nGXVM2hzXHM3M3NcKgj97TtHGL9FM5QLsavxKtKbLN%2F9%2BUsAxUHU315MJqgiUqgnTdYlh6LSasWkdVEHXtDrcwzayBvwY6pgFJvHRyZ4n5HATBOmBRaLFeTWzn7GsW3WsZNjhAch741TDlodsPWxojADdaC9eWB6Cs4OchzgwzHy3RXQ4Ko%2BPxDCdKBLYLvLTVdZOwgUy%2F6xmJjC8vRs%2BHplqp9Kcj6jx8IDKvBKQPSxZ5G4610jXrLfD1TtPWajs0rDEQ5JB6WrcU98guX4r9YutvfT4gJjcRqhpB146XKpmngNDp5a615tXszLUU&X-Amz-Signature=89a3a49046b212eeaa06f6b9655a2e8a20109ce918a32a6cd8c3e6dc70196307&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662373LJ3C%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlmcPgiJvV4I0F6aPwquEvRsqOITUAPJmSlBgbkeumqAiAB8tcSn4KVN41EhkSiz2oOkx92unfsRQ8%2BDWEaNO44ZiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0at5fvaxG4qxqX2zKtwDWeboOrSqj5T1nCbCy1yWYEWe7eXPng9uI5Km6eF2XuV%2FhL80TN7R%2Fha2SmKkXJQH7DqiWQpI8Ki5SFxWTfQYWMNpnKSHEflHQ8%2BCbEXdPsaI2GD89kLFdhIb8u5QDdqI7BDSK69Bl87IRZQuuL2YgwcRbJdMhuH1Gss0V8g62OsgSHE5h9kG35RL6XOjs7pDjbevk4HV394eFDpC5L3Eyggv8bsAn3raaLKw9qlouP8cAXMRalZSgxFVQp7sP8sLZGEloy9mZUJ%2BtqllwK1eslkXIUBIMa%2BHqedKFxoHB%2FhgSRW54Sk9HkAGD5s3VbOsBpAygOrda4xlHlozTdzeKIKh844LaAu%2Fg2pcGuS2qdXPNio1XWxiqtf5T75i2GoZi7zCdHx8auS%2F2jEhlxL4R49JoMMf9HO1XBmQGFIk7o5qdd5tPhte%2FftN%2BdrVfxZyhAckNlJopXS78Ir1Ajmj85ct8rjbaNWSxAaUS%2Fyz4%2FufBZFOil3Oqg0Oqt0INzpVStHbAgAbyxCbVEZqxE%2BO1dO5hmf%2FbWOcJY4Pp7nGXVM2hzXHM3M3NcKgj97TtHGL9FM5QLsavxKtKbLN%2F9%2BUsAxUHU315MJqgiUqgnTdYlh6LSasWkdVEHXtDrcwzayBvwY6pgFJvHRyZ4n5HATBOmBRaLFeTWzn7GsW3WsZNjhAch741TDlodsPWxojADdaC9eWB6Cs4OchzgwzHy3RXQ4Ko%2BPxDCdKBLYLvLTVdZOwgUy%2F6xmJjC8vRs%2BHplqp9Kcj6jx8IDKvBKQPSxZ5G4610jXrLfD1TtPWajs0rDEQ5JB6WrcU98guX4r9YutvfT4gJjcRqhpB146XKpmngNDp5a615tXszLUU&X-Amz-Signature=4cf0c15555d6340a18cbc4a577bb260033561b05a267a6df26254c1e0222daa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
