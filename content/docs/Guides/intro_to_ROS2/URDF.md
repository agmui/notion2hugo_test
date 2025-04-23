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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHXRRLD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID3QB%2Ff1GABZJ61HD0MFmin%2F5lB95Uqpp6fc%2BiZbz1eQAiEAkDYUxSjZqNoFtZ56Iqj65iby4GfGoPWHmpFHnDrg53EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FQ3Rl0XGCsK59PRyrcA%2Fc0dDl5deN%2BPLwjGrbV9e8ookOaTeGc9n5dKLrzrVYInatZMKp7URfDZXhCieNdZnpyN8iPzrsJnIvsLB4Jg9%2B2iH2ZD%2ByZOg6wTPQRoNtB1GG54SBuB3%2BcokWca1XFNHoKNyMS7O3lBlFR7re57%2BjLep5LU7556xsrvfxqyMq93S1RkvCmcfaVkWiRsHs6XLv%2B5ITtttcHw6CytYJl0gz4tpNJ2XDRoo%2FUZ6knhtSWpJjFR52bB%2F0spregIOPTWVluysSSBcfOHGrGuCTufmLHHfUQm4qgbygVFTZuzufCs2%2F0VqdpnXKNC6NPDNZ9I9z5C6s48OS%2FG6prMcvlmqDxuNUi%2FThi8iorwKyvsW%2B5oBo5mDV3fPQdlAIxmRBwS61T7yIMlvF5ThG0rQ%2BFB748DpkPumcR3Br0E%2FjbvCSqMxYwwqa0QONS8QyAlqPKQRHcTDmyoP6b9y4fFw3IPnfdYDD8NINJlse0bRwvIMKJcYrtV4vJR18FqwJu1DESinH6Vypm7pqCUZjp%2FLwitA%2BFa3YmXtI0waCX%2FJiNFAF8lQ6MsE86DDwFq6NuyqGPlBn8tooh7hRba5ZhfBpbfUPBXjf670ueq%2BN0m2m%2FtdO%2FMdN0qrJkDMmcBMg0MKTYoMAGOqUB%2FVW%2BOzhM1Hge4qPi1coP2%2BApvTH%2BJXlQ%2BP9olnqWZOfuug2EnP9mdzjdIYZVXZ3HmQriDtsdJsiV6ksDXnLtFa9SRf9xEsoaLWYN6z63y4S8PSWyJM%2F8%2FBJbOhKUSOKXfYOk%2BA0JcGvVSIGSDAM8JFg9EVvTKS0ArmGcAkP6D%2B9n8tozqWCDOOma7%2F%2Ftab3a2IjeVcU9ibcese8xsR3hbLQWBPOn&X-Amz-Signature=8278da6e0d50764d982df24b560430e593e2cce72e000fba41795a05bce82bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FHXRRLD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCID3QB%2Ff1GABZJ61HD0MFmin%2F5lB95Uqpp6fc%2BiZbz1eQAiEAkDYUxSjZqNoFtZ56Iqj65iby4GfGoPWHmpFHnDrg53EqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FQ3Rl0XGCsK59PRyrcA%2Fc0dDl5deN%2BPLwjGrbV9e8ookOaTeGc9n5dKLrzrVYInatZMKp7URfDZXhCieNdZnpyN8iPzrsJnIvsLB4Jg9%2B2iH2ZD%2ByZOg6wTPQRoNtB1GG54SBuB3%2BcokWca1XFNHoKNyMS7O3lBlFR7re57%2BjLep5LU7556xsrvfxqyMq93S1RkvCmcfaVkWiRsHs6XLv%2B5ITtttcHw6CytYJl0gz4tpNJ2XDRoo%2FUZ6knhtSWpJjFR52bB%2F0spregIOPTWVluysSSBcfOHGrGuCTufmLHHfUQm4qgbygVFTZuzufCs2%2F0VqdpnXKNC6NPDNZ9I9z5C6s48OS%2FG6prMcvlmqDxuNUi%2FThi8iorwKyvsW%2B5oBo5mDV3fPQdlAIxmRBwS61T7yIMlvF5ThG0rQ%2BFB748DpkPumcR3Br0E%2FjbvCSqMxYwwqa0QONS8QyAlqPKQRHcTDmyoP6b9y4fFw3IPnfdYDD8NINJlse0bRwvIMKJcYrtV4vJR18FqwJu1DESinH6Vypm7pqCUZjp%2FLwitA%2BFa3YmXtI0waCX%2FJiNFAF8lQ6MsE86DDwFq6NuyqGPlBn8tooh7hRba5ZhfBpbfUPBXjf670ueq%2BN0m2m%2FtdO%2FMdN0qrJkDMmcBMg0MKTYoMAGOqUB%2FVW%2BOzhM1Hge4qPi1coP2%2BApvTH%2BJXlQ%2BP9olnqWZOfuug2EnP9mdzjdIYZVXZ3HmQriDtsdJsiV6ksDXnLtFa9SRf9xEsoaLWYN6z63y4S8PSWyJM%2F8%2FBJbOhKUSOKXfYOk%2BA0JcGvVSIGSDAM8JFg9EVvTKS0ArmGcAkP6D%2B9n8tozqWCDOOma7%2F%2Ftab3a2IjeVcU9ibcese8xsR3hbLQWBPOn&X-Amz-Signature=22f2c3a40616702e7164a93cfd59828435356dc022e1fa4a91e3ca9cb0ab08ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
