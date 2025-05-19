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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVJFHSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3swl6F4WLW3OrpQlzw9G64nPKHRxOatfLp9paIQ2GzAiEAxOHSx%2BGGxoD4upnfI4Je4dyR%2BW0KgG1zhw8k5va%2Bz8IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPggo2CecVbjoZWMbCrcA53V9DObey5OuXCPdTzoqvm3z13pAyIs%2FGczkoDO6aaj7ACngHiOFYo5EbiczE1UkvMPauzXw6dZghcokrTa9jjX1jb7xMnYqh9SAc%2FDeBChXZgdZCi1OMrfzuaJJo7bJfPtm1TYDis22dF7LyUa1g%2B2Wy3DC23ocr94Jyi7Wr5Dy5mprtdtMBx%2FOhUUvPXk5ciHzDyudKIyhkNh4qw88na50%2BhrHICwfRL8eEMI5UFIJs9gKFTJ2IyDt5s6rp%2FowJjlXRhMtO0Pzrby2rnK3zmTEzO2ojAMhEqwyGEPJXo7ttZhe3SUsXb%2B5%2FkcjCQCzVcG%2BJJkhJdRSS9CeISumnGjoRHpCe%2FgnSxqI%2FgRtW3nA9Igzr%2BYSbCHcP6AfonjwTz5z%2F14R0b3xsqYyvQTrcd0pnaiDRxNniy9x7wsgVPhGUQseNdc22mKn2h9ucdj4G9RpBjAaWmzewET3X00A%2FaUBHEY0i%2Bj5%2Bg5Y5NGiYPEa81ptkUFXjgPZ84fuxb1gXBYnp7LykYPvlS3RDOHfSN8AglricpO0opiljE4IT5%2BbvJWETCftMPVfHuKI%2F59g1XINVwqLSY3tzoEjlBJ66An99aKJPQ8fAgFMqFsCc%2BFzvl6zTZ42rk%2FZhvCMPPIrcEGOqUBWLyyTNbjFHrYuDvsbPSPdeHHb5V93IICnX8CqDVIYbEDgGb02%2FY3zSCiNWG5vYubswfD18%2Fy5Ve0JP%2ByaDavdV%2FuJmGr%2BNupECbD5qtL9O9gjRxS%2FmL2cTNE858JsxieLp3hv4K4h9kvfCxtKI20bKjfWM75EmcedIx7sJ8XfuX8oTUcd710WyWf6Jb2DEbf7ueGrjzYstZb5fsXkFjlfTdZd5WI&X-Amz-Signature=6ee15296eabf462faac666ac865cfb3b5d612c4773108489e03238b8bbf884af&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVJFHSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3swl6F4WLW3OrpQlzw9G64nPKHRxOatfLp9paIQ2GzAiEAxOHSx%2BGGxoD4upnfI4Je4dyR%2BW0KgG1zhw8k5va%2Bz8IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPggo2CecVbjoZWMbCrcA53V9DObey5OuXCPdTzoqvm3z13pAyIs%2FGczkoDO6aaj7ACngHiOFYo5EbiczE1UkvMPauzXw6dZghcokrTa9jjX1jb7xMnYqh9SAc%2FDeBChXZgdZCi1OMrfzuaJJo7bJfPtm1TYDis22dF7LyUa1g%2B2Wy3DC23ocr94Jyi7Wr5Dy5mprtdtMBx%2FOhUUvPXk5ciHzDyudKIyhkNh4qw88na50%2BhrHICwfRL8eEMI5UFIJs9gKFTJ2IyDt5s6rp%2FowJjlXRhMtO0Pzrby2rnK3zmTEzO2ojAMhEqwyGEPJXo7ttZhe3SUsXb%2B5%2FkcjCQCzVcG%2BJJkhJdRSS9CeISumnGjoRHpCe%2FgnSxqI%2FgRtW3nA9Igzr%2BYSbCHcP6AfonjwTz5z%2F14R0b3xsqYyvQTrcd0pnaiDRxNniy9x7wsgVPhGUQseNdc22mKn2h9ucdj4G9RpBjAaWmzewET3X00A%2FaUBHEY0i%2Bj5%2Bg5Y5NGiYPEa81ptkUFXjgPZ84fuxb1gXBYnp7LykYPvlS3RDOHfSN8AglricpO0opiljE4IT5%2BbvJWETCftMPVfHuKI%2F59g1XINVwqLSY3tzoEjlBJ66An99aKJPQ8fAgFMqFsCc%2BFzvl6zTZ42rk%2FZhvCMPPIrcEGOqUBWLyyTNbjFHrYuDvsbPSPdeHHb5V93IICnX8CqDVIYbEDgGb02%2FY3zSCiNWG5vYubswfD18%2Fy5Ve0JP%2ByaDavdV%2FuJmGr%2BNupECbD5qtL9O9gjRxS%2FmL2cTNE858JsxieLp3hv4K4h9kvfCxtKI20bKjfWM75EmcedIx7sJ8XfuX8oTUcd710WyWf6Jb2DEbf7ueGrjzYstZb5fsXkFjlfTdZd5WI&X-Amz-Signature=523549633e6ce99cf18e43063ea4af36e811f924fd691ca55e4f40d2e018d64f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
