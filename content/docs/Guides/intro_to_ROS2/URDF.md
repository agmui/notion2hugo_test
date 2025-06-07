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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKUBCQB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdfCAOVwWcWOQYDPmWr5CIaxz%2BzMnxWjIuR%2BS7jiKOOAiBEt6KQfh1ITNFXrWIuAi9v8pXT1lrUtGkuPpmQvxcxBir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMaK4OeJd9jQHd%2FJbsKtwDxU8FN8rMpAJtDWFPnwB%2Bb0iyAzkdI2pgEaDcCd2DRp7r36eReKmRpJqjOCqFBj%2BewcLL4uiSWqEQkQ1owBvUgze2RxnM6iMA05CXVpGNGJyk1Q21dfl0the2cYmOizgHLuZ8qt91HKOnIvDeSDC%2FBrFbt39csPt7x19ts1j1RZ3sclSRrNtG8mCfRHeMoy%2BASWV9UvXTg5HQeP5f0lZQcHgJh18y2CQViTUBvSZrxLo%2B443PgQg0AlAcVUQNASP0i%2FnpxTW0LlXGIOhOgay9ePgTw1%2FO%2BAM64%2BjdREnRVvzfOhRDIi2fOBtkoUpTRCHhJPzrqZlkyYdu4aqjNj5bWw%2B5nB6HZv8sKqpVSFzLUBT1X1TJuiQf7v2qOnMWVU3kfzLr2cB2c4YQ0ZbgJ8U9o9%2BGOvNv0MGeXkSnoEhm4zXp6kT3v06sLB0f6jNTfyn%2F5EKiDpu%2FSx%2B7qR%2FSFWa9Us1FOWWv9CkAh%2F3XJltlhlWIn0wsKi2S6vZJhuNlAqhLIeZqwvLcX6%2FzSft4hWSDHCU8E56kUgfgnFCbuwsPlfq%2BCPGfc%2FssyLV%2BtBZF2G4EgcDWZegmSNUOkQHoISGYtvGSU9lFC81J%2F2YR%2BftGnCihBKGIHzoe6IMLw%2Fswu8COwgY6pgEA8mkD8%2FLlmWjQ7qPYnRmQcwm%2BZW2PQgM09SWm%2FyQaZ16Dc2SiLtEDxXndb6beDkikxYxHvvNZyOLtYL%2Flm2i9hum01pKjAewJLynhW9wwzQIOUY6oaBfAnSBJZZB3WFVt8xBKXQ9VLsck9VsJlFkYReO2CVpykhZ8kwBBxDXV8waJ%2BxemryinPYNdK4yMTEik5bsPAMgwQvYerXAx%2BPXswEGYQL0h&X-Amz-Signature=7d4e40220e437fd5b6e7ec20c340d586b1b38739cc49287fd4cdf5bc89801a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BKUBCQB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdfCAOVwWcWOQYDPmWr5CIaxz%2BzMnxWjIuR%2BS7jiKOOAiBEt6KQfh1ITNFXrWIuAi9v8pXT1lrUtGkuPpmQvxcxBir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMaK4OeJd9jQHd%2FJbsKtwDxU8FN8rMpAJtDWFPnwB%2Bb0iyAzkdI2pgEaDcCd2DRp7r36eReKmRpJqjOCqFBj%2BewcLL4uiSWqEQkQ1owBvUgze2RxnM6iMA05CXVpGNGJyk1Q21dfl0the2cYmOizgHLuZ8qt91HKOnIvDeSDC%2FBrFbt39csPt7x19ts1j1RZ3sclSRrNtG8mCfRHeMoy%2BASWV9UvXTg5HQeP5f0lZQcHgJh18y2CQViTUBvSZrxLo%2B443PgQg0AlAcVUQNASP0i%2FnpxTW0LlXGIOhOgay9ePgTw1%2FO%2BAM64%2BjdREnRVvzfOhRDIi2fOBtkoUpTRCHhJPzrqZlkyYdu4aqjNj5bWw%2B5nB6HZv8sKqpVSFzLUBT1X1TJuiQf7v2qOnMWVU3kfzLr2cB2c4YQ0ZbgJ8U9o9%2BGOvNv0MGeXkSnoEhm4zXp6kT3v06sLB0f6jNTfyn%2F5EKiDpu%2FSx%2B7qR%2FSFWa9Us1FOWWv9CkAh%2F3XJltlhlWIn0wsKi2S6vZJhuNlAqhLIeZqwvLcX6%2FzSft4hWSDHCU8E56kUgfgnFCbuwsPlfq%2BCPGfc%2FssyLV%2BtBZF2G4EgcDWZegmSNUOkQHoISGYtvGSU9lFC81J%2F2YR%2BftGnCihBKGIHzoe6IMLw%2Fswu8COwgY6pgEA8mkD8%2FLlmWjQ7qPYnRmQcwm%2BZW2PQgM09SWm%2FyQaZ16Dc2SiLtEDxXndb6beDkikxYxHvvNZyOLtYL%2Flm2i9hum01pKjAewJLynhW9wwzQIOUY6oaBfAnSBJZZB3WFVt8xBKXQ9VLsck9VsJlFkYReO2CVpykhZ8kwBBxDXV8waJ%2BxemryinPYNdK4yMTEik5bsPAMgwQvYerXAx%2BPXswEGYQL0h&X-Amz-Signature=dda0a8b1008ccf16cf9c5dc5384c5f64ecca87e0e90281cc98e9a90724b9cea2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
