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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJLYBFX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH3jZRIuFPIwznRiNjf7wLNNF6ZWiklKQTGsFsle4f1LAiEA%2FGYWPmbOb2Qt0cL%2F1JuDUJsTfmVwNtoiBPiEekbId5Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMIV%2BZEo833WyjNk%2BSrcA2ltflSS1rTFI4ztuwnRIaMU88VYCQ%2FI47D5v1jhrFQiDGH6c1BiW8HXwIBFRc9uIlgkAoeehuHkw3fDrhjDZrr5z9R6v5VR2prkqZyQ1THcvOvejkyN0iH8tPAUZpFIo7Xl7d0hvOgUAUDCuJcLzgSM%2FRbEP1HHK9yx78KV%2FPvkNs3kb7cDSv2%2BdEzqzsWP8Q2NPdzdFPWIAWjiZzgylhdWFNZXjO8VWcq37T50l9uB%2B4jGPGc31y78LAPqKwg3mN0NpjyDMw%2BMGooK2LwpsSxrXj0WduqyZi5mCZwBYyeXY5mPCAjm874bty7E7yApCHqu%2Br5%2FfotFVBzEveTYzUJ0B9fCIRChUd7DVn1753PZp3uR%2FokuHPCyXkTUhQAHl%2Brmk%2FwyXWbgYetOaqB67bcZwlUnMaSW0nT0pFbwsalwhklbfmxSanEl5ejJjUeRL0EORE%2B7JtTHNZnOeC8fTAXLEPUUtorVyriSMd1nUWhe2p5YmtbMt3ldrEHcRvVs9eH4Vyf%2BZeZM5c4m7AS44%2BQkLaZEiH7H8dP4nsH%2F%2FgvfTwg4Yr1tLCHyIB8uyGxylepVFOoiohAFGbc86rDpK1QxYqS%2F6LbDQarE7%2BI5EvPM1mVdD6Ga0UCMtlqDMJ%2FJwMIGOqUBAmGcqvZJ9VfDnp3uHMqDxG%2FkVofpAv2MT6uYCapM6BebEeKBzQ%2BnmAz%2FOhK42pLZPwh9ghIAeWN3KO1oPecqhdAhKJG7M7jPV46BpE5189thrHKTgEo8TW9s8CXeNbvJH4MEvDGr80UmXfTUP15aBusulG%2FRKWG%2B3Qc%2FBDPhcYRrXmeMzOyaakcGq5M9aAK%2FSKUiDmHrn0%2Ff5n20PKyAxjwSvQCT&X-Amz-Signature=9c278cc7be87b08cb56b7df25846cd254471ed35c83293cbc333883f38600602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJLYBFX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIH3jZRIuFPIwznRiNjf7wLNNF6ZWiklKQTGsFsle4f1LAiEA%2FGYWPmbOb2Qt0cL%2F1JuDUJsTfmVwNtoiBPiEekbId5Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMIV%2BZEo833WyjNk%2BSrcA2ltflSS1rTFI4ztuwnRIaMU88VYCQ%2FI47D5v1jhrFQiDGH6c1BiW8HXwIBFRc9uIlgkAoeehuHkw3fDrhjDZrr5z9R6v5VR2prkqZyQ1THcvOvejkyN0iH8tPAUZpFIo7Xl7d0hvOgUAUDCuJcLzgSM%2FRbEP1HHK9yx78KV%2FPvkNs3kb7cDSv2%2BdEzqzsWP8Q2NPdzdFPWIAWjiZzgylhdWFNZXjO8VWcq37T50l9uB%2B4jGPGc31y78LAPqKwg3mN0NpjyDMw%2BMGooK2LwpsSxrXj0WduqyZi5mCZwBYyeXY5mPCAjm874bty7E7yApCHqu%2Br5%2FfotFVBzEveTYzUJ0B9fCIRChUd7DVn1753PZp3uR%2FokuHPCyXkTUhQAHl%2Brmk%2FwyXWbgYetOaqB67bcZwlUnMaSW0nT0pFbwsalwhklbfmxSanEl5ejJjUeRL0EORE%2B7JtTHNZnOeC8fTAXLEPUUtorVyriSMd1nUWhe2p5YmtbMt3ldrEHcRvVs9eH4Vyf%2BZeZM5c4m7AS44%2BQkLaZEiH7H8dP4nsH%2F%2FgvfTwg4Yr1tLCHyIB8uyGxylepVFOoiohAFGbc86rDpK1QxYqS%2F6LbDQarE7%2BI5EvPM1mVdD6Ga0UCMtlqDMJ%2FJwMIGOqUBAmGcqvZJ9VfDnp3uHMqDxG%2FkVofpAv2MT6uYCapM6BebEeKBzQ%2BnmAz%2FOhK42pLZPwh9ghIAeWN3KO1oPecqhdAhKJG7M7jPV46BpE5189thrHKTgEo8TW9s8CXeNbvJH4MEvDGr80UmXfTUP15aBusulG%2FRKWG%2B3Qc%2FBDPhcYRrXmeMzOyaakcGq5M9aAK%2FSKUiDmHrn0%2Ff5n20PKyAxjwSvQCT&X-Amz-Signature=4a67b5a513df8823afddab20c889a8befd8ca9d2363fad289732392a2c37c600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
