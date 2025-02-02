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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446KBFMC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbVASjkYaqJNstwqM4gMLOrihfnguHewZTDt0XrydVgIgKMJLMv8cp%2BIQHipCQVSmZlHbQXLzs9mOaW%2BiI7GxDecqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFko1h0tkhjdsh7tOSrcA7HlrOWPzMuDukD5BOCjH73yYXLFFKkQOzPaZgZ7jjtqmb7GrDEz2fDSB6l0Z25SOS7VX2nOURpkXBKLQdLGhAwU1PqDhvJ43kdN5wI5mQuXoq7FMX9449nhVAFG6cYXEjyiKY7Z%2FTQN8lkYxssuYyhh7DmCAS8H9tL0A19mlspbw6sfNn%2B7jMjUzmfS2XJSK628FPM0FtZWhPMrxUcut5VrixDB%2BMp%2FZ2TaAh3w8aEUiMPhe%2FYFe0SO23a%2FmEdTYPsMoYVyjHeuNpnW1YNiqzdsA3gXl1Y2H8ZSr%2BdWoJAEOTD5mDJnP17NczrqCcLpSWxTCWpoXpseraDbBhPnmbRM%2BuAPCTzxuDWDDQBiBfv6ssVHWbrv8K1Qgkj%2BEtemzROhF%2B1R2LNEiu5pXMyVwKp4%2BXyJhYHLSlfcHwTu9jrvZ6Oh5KzLG8F%2B%2BTImXyrLCiOri9bxOUgsTjgKNPYM7N%2FTV2CziI45KT314EzwV3%2BBedBzxBA%2BPXEVEiWHmiFfcDCQdgVuWWojEjqrZo8ZNKgdh5kDqZDAXB7%2BwaSd0MwjzLDVGdHtvBfySQpvYw%2BTl3QDMWwiywpwW2fX8XFwBqj3YrZVI76Dw5Jl0VeLG79XajBVYgKjhrECNs%2F0MOif%2B7wGOqUBIdpb7CIMHiQqf34Xivn42r4%2FJm%2FqUeHm8NXmsIJtBpkKRn3iVxn1EmSrFsTXz%2BHTxV5LRTUpxiWcMApY2465hLD9sg%2B1nN%2FjVHG8u%2BOhmZttJH%2FyfqgZj16tS6Ko2t%2BBWDm7206%2F3xBfrd9pI7RDn%2BOhqkvnnxNnvj3kAbmyNUec7SX1dVokGPMC62oeS%2BlziNNkIzPoa8I8kA%2BU9RlZ8BQer7AP&X-Amz-Signature=a0363beff89373c10bf3062ce2995f8fb95c5a0fe4e79ee926598e28f08b52fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466446KBFMC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkbVASjkYaqJNstwqM4gMLOrihfnguHewZTDt0XrydVgIgKMJLMv8cp%2BIQHipCQVSmZlHbQXLzs9mOaW%2BiI7GxDecqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFko1h0tkhjdsh7tOSrcA7HlrOWPzMuDukD5BOCjH73yYXLFFKkQOzPaZgZ7jjtqmb7GrDEz2fDSB6l0Z25SOS7VX2nOURpkXBKLQdLGhAwU1PqDhvJ43kdN5wI5mQuXoq7FMX9449nhVAFG6cYXEjyiKY7Z%2FTQN8lkYxssuYyhh7DmCAS8H9tL0A19mlspbw6sfNn%2B7jMjUzmfS2XJSK628FPM0FtZWhPMrxUcut5VrixDB%2BMp%2FZ2TaAh3w8aEUiMPhe%2FYFe0SO23a%2FmEdTYPsMoYVyjHeuNpnW1YNiqzdsA3gXl1Y2H8ZSr%2BdWoJAEOTD5mDJnP17NczrqCcLpSWxTCWpoXpseraDbBhPnmbRM%2BuAPCTzxuDWDDQBiBfv6ssVHWbrv8K1Qgkj%2BEtemzROhF%2B1R2LNEiu5pXMyVwKp4%2BXyJhYHLSlfcHwTu9jrvZ6Oh5KzLG8F%2B%2BTImXyrLCiOri9bxOUgsTjgKNPYM7N%2FTV2CziI45KT314EzwV3%2BBedBzxBA%2BPXEVEiWHmiFfcDCQdgVuWWojEjqrZo8ZNKgdh5kDqZDAXB7%2BwaSd0MwjzLDVGdHtvBfySQpvYw%2BTl3QDMWwiywpwW2fX8XFwBqj3YrZVI76Dw5Jl0VeLG79XajBVYgKjhrECNs%2F0MOif%2B7wGOqUBIdpb7CIMHiQqf34Xivn42r4%2FJm%2FqUeHm8NXmsIJtBpkKRn3iVxn1EmSrFsTXz%2BHTxV5LRTUpxiWcMApY2465hLD9sg%2B1nN%2FjVHG8u%2BOhmZttJH%2FyfqgZj16tS6Ko2t%2BBWDm7206%2F3xBfrd9pI7RDn%2BOhqkvnnxNnvj3kAbmyNUec7SX1dVokGPMC62oeS%2BlziNNkIzPoa8I8kA%2BU9RlZ8BQer7AP&X-Amz-Signature=fd120c7623e54d5ca16f1bc519550ea44b56032e19746929e33c1477c66bbb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
