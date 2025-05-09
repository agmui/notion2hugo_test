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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4SNHMP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHigqMndzXbsXT3LPS%2B%2FzOXJrrvUKT5ehECxtEiktZZ2AiEA0uxVjfz3peNET0PC3NsItjdDWm0FbbP8D2BWjD1hx94qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTwA5mNi3YY%2F6AlzircA5XbD8XvKg8mJpI93zeWkTHtmdLQ0fQhDtLhANE9bYfOp4eWz80UIMJwlCZhFUFxzVDtE3Gz2Wh62BTPwNl%2Bi%2B%2F0rjacuo%2B3s7nBKcnk1WMjGJWmot4vAnQIboM3Yb1ihfQUQurb5IlHnY%2FqECT%2F8hWr67VtXCGqU6TENmVtl3uZElgOYxa5Dy5E3V48NBGAV6mo9yqXCge3S9al9uCYapJAdG2PZWow8XWaegx0MKOJSQ6yFwvcXK1TEFCeVCy%2FyWtkK%2BSSnN%2B%2BRquykmMgtjA95NwXMM%2BZvHveTm2ZpSBS62P9Jc7vqmmp%2FpG5rgifqPatuHnESR2Ff1ZXzxRY9K5PLRqiH42Dj4Nxe32UkqZRMrj7l1jP8grknidFG0FHk%2BfzZePkJdVohsC2Cmr6Zxf5qaHJhxZ4iL%2BKNuxyJlOWn5KgpvLfe6uu4B1iRCLKZfBZxARJmIycaXF7I%2FVeAY7aAHVdKSHqSxfTr4oHcXGLUAqRhQhhyoiFZC0KlgV9XcyNyOV7uZoPaUmd02ydkr8RFSuQ4JX4eofeLnVgXDGynEq7ry5F%2F6fPlH1vV5Dkh8EeqRC6q4FTbR1EX3ClyTDSrakywLS7XZyKgu5tGUkXqnGd8XIlqAr8MbU1MLHk9cAGOqUBNvChT0BjEq3LP9TVij3rKwM8Wh0CfBC4xCh5qOH906wn4xHpwqPTDyqGCVUQudxj7qXDRkxThENs3ZdqNAJohAz44v%2BxQGbRVKQjjx32csUf0uJDDylts3HR8hpY2UEtG7N0tAFysFBZMZLQmHg%2FcgqzDTipqll8R%2Bw%2FOTey%2FOcv5OOErCKCgq7Qx8cJzF094k8T9QoFnDcUNaVE0Ie6nHEi5ETd&X-Amz-Signature=21be316ddf67897f39c4377c9476cdd9098c6ebb7ac1c157dd54fda7033a5ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4SNHMP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHigqMndzXbsXT3LPS%2B%2FzOXJrrvUKT5ehECxtEiktZZ2AiEA0uxVjfz3peNET0PC3NsItjdDWm0FbbP8D2BWjD1hx94qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTwA5mNi3YY%2F6AlzircA5XbD8XvKg8mJpI93zeWkTHtmdLQ0fQhDtLhANE9bYfOp4eWz80UIMJwlCZhFUFxzVDtE3Gz2Wh62BTPwNl%2Bi%2B%2F0rjacuo%2B3s7nBKcnk1WMjGJWmot4vAnQIboM3Yb1ihfQUQurb5IlHnY%2FqECT%2F8hWr67VtXCGqU6TENmVtl3uZElgOYxa5Dy5E3V48NBGAV6mo9yqXCge3S9al9uCYapJAdG2PZWow8XWaegx0MKOJSQ6yFwvcXK1TEFCeVCy%2FyWtkK%2BSSnN%2B%2BRquykmMgtjA95NwXMM%2BZvHveTm2ZpSBS62P9Jc7vqmmp%2FpG5rgifqPatuHnESR2Ff1ZXzxRY9K5PLRqiH42Dj4Nxe32UkqZRMrj7l1jP8grknidFG0FHk%2BfzZePkJdVohsC2Cmr6Zxf5qaHJhxZ4iL%2BKNuxyJlOWn5KgpvLfe6uu4B1iRCLKZfBZxARJmIycaXF7I%2FVeAY7aAHVdKSHqSxfTr4oHcXGLUAqRhQhhyoiFZC0KlgV9XcyNyOV7uZoPaUmd02ydkr8RFSuQ4JX4eofeLnVgXDGynEq7ry5F%2F6fPlH1vV5Dkh8EeqRC6q4FTbR1EX3ClyTDSrakywLS7XZyKgu5tGUkXqnGd8XIlqAr8MbU1MLHk9cAGOqUBNvChT0BjEq3LP9TVij3rKwM8Wh0CfBC4xCh5qOH906wn4xHpwqPTDyqGCVUQudxj7qXDRkxThENs3ZdqNAJohAz44v%2BxQGbRVKQjjx32csUf0uJDDylts3HR8hpY2UEtG7N0tAFysFBZMZLQmHg%2FcgqzDTipqll8R%2Bw%2FOTey%2FOcv5OOErCKCgq7Qx8cJzF094k8T9QoFnDcUNaVE0Ie6nHEi5ETd&X-Amz-Signature=944595ee98f7785beb01395d318a4c02e19cdc978c54eb601e92e3b974040a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
