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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7ZMW7Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCS%2FAiOCKxlFhNHbzyatj5lyQZyo8s2XJ2ze5UVAkYP0gIhAIQL2o8dmSmi%2F%2BBdMgRC5NsyIqvh%2FO%2FbqrYq0JvHZbD0KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBYPAQV%2BzCDr%2F5oK8q3APFzdrtIOmWQG8AAq3B2jmqQrf0smCdKi7xG8Q7cGUIS9xXlgQ5YaQHCuwduf0Y7XUMp8mlbrYyIqwKuh%2BzIj6L0Tiig3Spfx8kYll7swdI0sjE4mRZAXkIJEPZqOWwakPWSF5l9ywMhHhB9wVSkVdt114dZYOGGZ4GlXjC3YNZsleuS6mwHGI47rY787K0J1bu%2BQSTBrOlEP31mqQaGNdTCYOzgKSPghdMmBUEV50BnPOMi6RYO427Mc4KQb0JgdOaOnYxiNj97atpobhI3IWyLdR13lxk4Jv7%2BQkwWk3Cq7Zd3TDVUzRDpefBl6SHBfSWrOeO%2BitX%2Fw5kW5neQMcgiazJQu3epTMOtQAM57c2FHaAyetIorkMN5Qua7jc3TEc2WlN5cdTxntrGNN7TDG1%2FaL36bW%2FG6cpBE0jwv2e4zGq6KZ6lSDBrYBmHY8qKI%2B3Fx0Gz6Gv%2FlnnL%2FSb4GGyG17Bj2KkYBBVgo%2BtHvCQjmhLwTNS9CxzXTBgdahoGFDu%2FQEE%2BRls41cxniQaTLzwNmhM4VLk9SBLo%2Ft5UrvXUIxX%2FTNYZxv4Smi4sSdUnhcuG%2BNLTME%2BI%2BpGjkvJjKEL3Q%2BxeURJp5jjNWNnOF%2FWx6q%2BGsa5mMqQXlfuHDCTks%2FABjqkAaYseYTHLXqL%2BJZexAcf6iyCo11NdZI1MYaFLfd0mO%2BJFstZc%2BnIU1chLWirULT%2Bt%2Ba%2BzmKAuJap9ANwZS8yZgLAwW3T3LIglMf%2BT4iC2MRcSz6nJAnFji2kHVhufzMtdcLr321jsWbSr2UqqyIwxAimQqm%2BS13j7z7JrUYex%2FvS29WBeMAbMqRVoh6VdRDM6ycmUHMV2M5EOfPJTg5y4sq4GeIV&X-Amz-Signature=b87c738a1cbfb4fe55918660fb764fa93dd8e9fb411a684cd2b1137bcf47ec50&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7ZMW7Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCS%2FAiOCKxlFhNHbzyatj5lyQZyo8s2XJ2ze5UVAkYP0gIhAIQL2o8dmSmi%2F%2BBdMgRC5NsyIqvh%2FO%2FbqrYq0JvHZbD0KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBYPAQV%2BzCDr%2F5oK8q3APFzdrtIOmWQG8AAq3B2jmqQrf0smCdKi7xG8Q7cGUIS9xXlgQ5YaQHCuwduf0Y7XUMp8mlbrYyIqwKuh%2BzIj6L0Tiig3Spfx8kYll7swdI0sjE4mRZAXkIJEPZqOWwakPWSF5l9ywMhHhB9wVSkVdt114dZYOGGZ4GlXjC3YNZsleuS6mwHGI47rY787K0J1bu%2BQSTBrOlEP31mqQaGNdTCYOzgKSPghdMmBUEV50BnPOMi6RYO427Mc4KQb0JgdOaOnYxiNj97atpobhI3IWyLdR13lxk4Jv7%2BQkwWk3Cq7Zd3TDVUzRDpefBl6SHBfSWrOeO%2BitX%2Fw5kW5neQMcgiazJQu3epTMOtQAM57c2FHaAyetIorkMN5Qua7jc3TEc2WlN5cdTxntrGNN7TDG1%2FaL36bW%2FG6cpBE0jwv2e4zGq6KZ6lSDBrYBmHY8qKI%2B3Fx0Gz6Gv%2FlnnL%2FSb4GGyG17Bj2KkYBBVgo%2BtHvCQjmhLwTNS9CxzXTBgdahoGFDu%2FQEE%2BRls41cxniQaTLzwNmhM4VLk9SBLo%2Ft5UrvXUIxX%2FTNYZxv4Smi4sSdUnhcuG%2BNLTME%2BI%2BpGjkvJjKEL3Q%2BxeURJp5jjNWNnOF%2FWx6q%2BGsa5mMqQXlfuHDCTks%2FABjqkAaYseYTHLXqL%2BJZexAcf6iyCo11NdZI1MYaFLfd0mO%2BJFstZc%2BnIU1chLWirULT%2Bt%2Ba%2BzmKAuJap9ANwZS8yZgLAwW3T3LIglMf%2BT4iC2MRcSz6nJAnFji2kHVhufzMtdcLr321jsWbSr2UqqyIwxAimQqm%2BS13j7z7JrUYex%2FvS29WBeMAbMqRVoh6VdRDM6ycmUHMV2M5EOfPJTg5y4sq4GeIV&X-Amz-Signature=2a9037bf90e8f674abec41dc2236740bfbc7e0486e6b9c5c96fabd154bfe9906&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
