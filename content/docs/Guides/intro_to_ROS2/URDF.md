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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67TPD26%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDRGY6evh3FP4MVfAXPMl4u6lKCvkhTopDSn%2B%2FoStgM0QIgRIBWgkIXNlFc%2FCh0dEocH8uzOc7frBWuGKF8STNNVoMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDG%2BJqHZVH%2BmUWJcq%2FyrcA7lWCTtHeLceXKB2e78z0dFtpataQal8KEf%2FIlkrR08BhidhhByeTymtQDlzhqV5QAQ0l%2BjqCdc1zk9y1bn2qfHk0NEVOMdeYua01dauahilwkJ77wj12GE6Qz5G7Om6FTwYZUPyGRs5Exknqjd67S8TMHjoA4Ev6u5Vm8dnNhX5yXqWmwx26cWHjgbDVQgbIneFgtbQMqZj8rr%2FqVrY4Kq9Vq96s3J14s%2B0JRyUTf8lxqLxliISN3SmFOf29S%2Fma%2B3nzf0tKfhoheC3SVvP2odW%2Bmxm%2FXgx1HfsrtXwXzKqtFTF4reBB8T6hOxxShVbOFNSVSquaQtT4ylHdMgxGBAgaSIfnVFCHf3C0ZuArdCI0olJ4GIG9HTeJntUR%2BEY1MsEPWm6ocglWI1rTSn8XEKqHV4X1xVZVouhBwq478rOauem6%2BjVhmSJxLcBXB03elO0xFaXsPDU%2F2WrsyyaCvwfmSVb8hYUG%2Fv8aTzPRVA5ssRax8%2BuwjBiRv%2BZzqZR5b%2BK%2FJG2JcZapnpDjlLUe3JeN5BPgFsZcUEHv%2B1QpFT3sU3Bmpv8ZqBuaprswkNRefkcNmtUtEXOytS%2BlpIt1%2B%2BF3Kqtvt3U7cL5Uz7NdmWbhJKlmZI8yQg0IOYqMOHV5b4GOqUByBPTGl9aV%2FLy%2FO2%2FZKXwHjBQbKq1QqvNLEfEzVkoKsJkeh3eGC%2FE2TzLMyKxMh8zDY9dDfST4t3spiTZIYGM7wLzI3GbC6kB%2BNtmcQ5dfApVffXzWL7Ya7hMAMdve85tn2wb%2F0K6n19fGpLvfAriggp8Nfgo%2B1ipDYWnuIpbDkflT7XehpQ3wJdqP69pMF9aZ5cayFY5SitcSWr4k26MCZ%2BPYWTO&X-Amz-Signature=eac6678601518ce5e1f0d3d30ac7003ff715e6e5daabd15361765f1a9f00b0fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67TPD26%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDRGY6evh3FP4MVfAXPMl4u6lKCvkhTopDSn%2B%2FoStgM0QIgRIBWgkIXNlFc%2FCh0dEocH8uzOc7frBWuGKF8STNNVoMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDG%2BJqHZVH%2BmUWJcq%2FyrcA7lWCTtHeLceXKB2e78z0dFtpataQal8KEf%2FIlkrR08BhidhhByeTymtQDlzhqV5QAQ0l%2BjqCdc1zk9y1bn2qfHk0NEVOMdeYua01dauahilwkJ77wj12GE6Qz5G7Om6FTwYZUPyGRs5Exknqjd67S8TMHjoA4Ev6u5Vm8dnNhX5yXqWmwx26cWHjgbDVQgbIneFgtbQMqZj8rr%2FqVrY4Kq9Vq96s3J14s%2B0JRyUTf8lxqLxliISN3SmFOf29S%2Fma%2B3nzf0tKfhoheC3SVvP2odW%2Bmxm%2FXgx1HfsrtXwXzKqtFTF4reBB8T6hOxxShVbOFNSVSquaQtT4ylHdMgxGBAgaSIfnVFCHf3C0ZuArdCI0olJ4GIG9HTeJntUR%2BEY1MsEPWm6ocglWI1rTSn8XEKqHV4X1xVZVouhBwq478rOauem6%2BjVhmSJxLcBXB03elO0xFaXsPDU%2F2WrsyyaCvwfmSVb8hYUG%2Fv8aTzPRVA5ssRax8%2BuwjBiRv%2BZzqZR5b%2BK%2FJG2JcZapnpDjlLUe3JeN5BPgFsZcUEHv%2B1QpFT3sU3Bmpv8ZqBuaprswkNRefkcNmtUtEXOytS%2BlpIt1%2B%2BF3Kqtvt3U7cL5Uz7NdmWbhJKlmZI8yQg0IOYqMOHV5b4GOqUByBPTGl9aV%2FLy%2FO2%2FZKXwHjBQbKq1QqvNLEfEzVkoKsJkeh3eGC%2FE2TzLMyKxMh8zDY9dDfST4t3spiTZIYGM7wLzI3GbC6kB%2BNtmcQ5dfApVffXzWL7Ya7hMAMdve85tn2wb%2F0K6n19fGpLvfAriggp8Nfgo%2B1ipDYWnuIpbDkflT7XehpQ3wJdqP69pMF9aZ5cayFY5SitcSWr4k26MCZ%2BPYWTO&X-Amz-Signature=c4cfdb84878e29c14209d444f9b7c649a4908b80f064bc0205b2643204252d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
