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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HVRJN5B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDuHXCqh5XFAxcEvEj2BqSwsd8%2FO2NcgRzbePfw53UZpQIgI0BFJqIwey7CdgrMXU%2Fq9wpvYSZwaKBeEGDRhN9ck3Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGA2u5RhUczKaxxLRCrcA8sk0Na0ebWka80QZPybeSlFRxdjb0Uyk5HGcUO%2FiLX%2BKVb4RPUcnFkMsLbL%2BNRQida7sSP8OM8Yf8cqoyNpUICaWxmIPYmwwNvG%2Bd4uFBtK%2FukrSH7bTRSNfreAteuGNEEQFYBISMVxf%2BbzJyKdXiK1YjRxee1EqZWQjh3KpEdMh9zvBqcDiIU5lnXpQzmwgXA2xZFIS5Qjmy%2Fv5x7B%2B26aQ%2FyN1cetTKEHOc5siTZ5cd%2F1TXgjct3on7Gv1B34Yh%2Fray79XvfK6Jv%2FjzMmXSInxsYZGNd7dfp15gsXbw10hE8gyfJrxAANQ%2BzJ8SRcj1%2BnPmaXodu1yJ8QQ6kzhX3%2F0wA64O8mT4Tv6azTxJRJRjzvO1kNcDQZow%2B45SY1cCpfsXsKpILUbtSwi%2FO8hNFB4a17WTKr9zxbXQ3fxL0929RBtcbbo6ptdEU8KQN9kKRLjvXrjsI2%2Fqu8ui4QG0Atl3hIkKRaJ0jQnNAUORtKSYU6t6K%2BAYAUUzMrzQlPzqcEgUnoenlgDm%2Fi%2FBdzGnsFICx%2BeK8poqfILZ58Qo%2B7xKwzq0HTGSda6WPMugnckf6YgyJaFStHKRwMc6WmKDW6BS77%2F8LDj%2Fd4P60qeYBQ%2BjzNs0d87WEGn9ckMP6oh8IGOqUByqo6ERkzqQTclbbnV4ROrcJg%2BOi88LI6GjVlrCpDuujkcN28oiuOJynSefJSZavzTJduUMA1iJINWgDk10kjP0JvC%2BAqDdnL%2B0x3AEuty5WKpkQ1oxb%2BTfPQmdSUNRoyxtslGnaPsEG5B9Hvp7I9BlxtPh7ln1pcJYppIRMXrOXSDWlrFvat0Lb3knwgB6X7XQrgRFwHGTA79ZgYPJx2YAirP9e%2F&X-Amz-Signature=d3f4f3aa118b11d8c3461c45418a3fa8a7b3de884a666f6beea1ff2869b38529&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HVRJN5B%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDuHXCqh5XFAxcEvEj2BqSwsd8%2FO2NcgRzbePfw53UZpQIgI0BFJqIwey7CdgrMXU%2Fq9wpvYSZwaKBeEGDRhN9ck3Iq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGA2u5RhUczKaxxLRCrcA8sk0Na0ebWka80QZPybeSlFRxdjb0Uyk5HGcUO%2FiLX%2BKVb4RPUcnFkMsLbL%2BNRQida7sSP8OM8Yf8cqoyNpUICaWxmIPYmwwNvG%2Bd4uFBtK%2FukrSH7bTRSNfreAteuGNEEQFYBISMVxf%2BbzJyKdXiK1YjRxee1EqZWQjh3KpEdMh9zvBqcDiIU5lnXpQzmwgXA2xZFIS5Qjmy%2Fv5x7B%2B26aQ%2FyN1cetTKEHOc5siTZ5cd%2F1TXgjct3on7Gv1B34Yh%2Fray79XvfK6Jv%2FjzMmXSInxsYZGNd7dfp15gsXbw10hE8gyfJrxAANQ%2BzJ8SRcj1%2BnPmaXodu1yJ8QQ6kzhX3%2F0wA64O8mT4Tv6azTxJRJRjzvO1kNcDQZow%2B45SY1cCpfsXsKpILUbtSwi%2FO8hNFB4a17WTKr9zxbXQ3fxL0929RBtcbbo6ptdEU8KQN9kKRLjvXrjsI2%2Fqu8ui4QG0Atl3hIkKRaJ0jQnNAUORtKSYU6t6K%2BAYAUUzMrzQlPzqcEgUnoenlgDm%2Fi%2FBdzGnsFICx%2BeK8poqfILZ58Qo%2B7xKwzq0HTGSda6WPMugnckf6YgyJaFStHKRwMc6WmKDW6BS77%2F8LDj%2Fd4P60qeYBQ%2BjzNs0d87WEGn9ckMP6oh8IGOqUByqo6ERkzqQTclbbnV4ROrcJg%2BOi88LI6GjVlrCpDuujkcN28oiuOJynSefJSZavzTJduUMA1iJINWgDk10kjP0JvC%2BAqDdnL%2B0x3AEuty5WKpkQ1oxb%2BTfPQmdSUNRoyxtslGnaPsEG5B9Hvp7I9BlxtPh7ln1pcJYppIRMXrOXSDWlrFvat0Lb3knwgB6X7XQrgRFwHGTA79ZgYPJx2YAirP9e%2F&X-Amz-Signature=b50f3791455fd0e0e88f4823d553902f2a135bde5bf2d203f2e6e0c240aa54ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
