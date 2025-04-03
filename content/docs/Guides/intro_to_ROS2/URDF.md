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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH32FUX7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHeV4N5sL9kmyMmuL3NqOJCbk%2FxRrubUZvCCSzicO%2Fg6AiEA5TIDBB9TxF5P9xiro0fco2uxDsGTciIzonBLVVRq%2FUcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaYUrGa%2F6Wm9Ro%2FQSrcA7utS3q%2Fz5l%2ButeAyjvrjGqY2CEIjqVvNT57%2BHlisHUmGVxzIP6ku3OhTyINf%2F2G4KnpidCMIAdcNTe4mXDznMjT8LQxE05G%2FZXdyphAMPKWFfkwsIQH2touDGu5ufOvjUtMemdn5uxUPadDtjJZnB4nTlxCj1vTwGpOPougbC4SgsUammrJXY1cXxoYZJS4ei7s89TlB1szWr6b7iXXsit1PYMh%2FNB%2F%2B0m359AqRMri43jr%2BPI3gCB8dss%2BRvYxr0QIy7XjGUQ3CTBTgj1N1uXDeqHtI4lQBXrRja0vWEZ6rtgIwHulVr2sk0fXJccMu%2BPm9ofhwK6iY%2FJHa5q7XcAKADsL%2FQHjM4HxcModp%2FBxQdm4cS2R5fLGBWX3oiHcPX6HdX22vSciqLd%2BsE%2Bh4dgEcHJd9Os3bJlVvMpXdoZlfhAeJxXvhiEavxsNvdRSHd4PxirAhFsKdHr7A9VyRZaxIa%2BirfguE%2BSLdICoIIfOSBkJYroeA%2Fuu%2BU9ndzoIZRCVSpdoKcaLonsQkxwffCzJvv%2FxdsQSh7CeCB4SgJwLeGKSUPlblXoD1e%2FVfH7pIs6TRbw8Zjmm5Hx0ePat0qQ6mbXpkxyLdFmhAPTaYZ6PsBJOMnxv1nfyIewwMNOVuL8GOqUBZ174WyVqlJdy0Za08oPqsj8P7Terclp4isb457HDEFouLjybdcy1UvyeGp08FNFI9%2FQcJZgSUJoFni%2BWfy%2Br3cvPS9wHJz7348XiBuab3cw4bzE%2BoCWPRBdJfEY2fB8BL4WYdOuuupcxngO7XeD%2ByRqZwBXQHweodL2WkpdTI9wq7szmsx%2FSFqBfxFOkS0v3bQ5rcjjveG7YHzn%2F2sIue4FA%2FJIO&X-Amz-Signature=9df1d025b0f2a5da0f425fc57d5c45c419101a760890440615ab1c3524d57602&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH32FUX7%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIHeV4N5sL9kmyMmuL3NqOJCbk%2FxRrubUZvCCSzicO%2Fg6AiEA5TIDBB9TxF5P9xiro0fco2uxDsGTciIzonBLVVRq%2FUcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaYUrGa%2F6Wm9Ro%2FQSrcA7utS3q%2Fz5l%2ButeAyjvrjGqY2CEIjqVvNT57%2BHlisHUmGVxzIP6ku3OhTyINf%2F2G4KnpidCMIAdcNTe4mXDznMjT8LQxE05G%2FZXdyphAMPKWFfkwsIQH2touDGu5ufOvjUtMemdn5uxUPadDtjJZnB4nTlxCj1vTwGpOPougbC4SgsUammrJXY1cXxoYZJS4ei7s89TlB1szWr6b7iXXsit1PYMh%2FNB%2F%2B0m359AqRMri43jr%2BPI3gCB8dss%2BRvYxr0QIy7XjGUQ3CTBTgj1N1uXDeqHtI4lQBXrRja0vWEZ6rtgIwHulVr2sk0fXJccMu%2BPm9ofhwK6iY%2FJHa5q7XcAKADsL%2FQHjM4HxcModp%2FBxQdm4cS2R5fLGBWX3oiHcPX6HdX22vSciqLd%2BsE%2Bh4dgEcHJd9Os3bJlVvMpXdoZlfhAeJxXvhiEavxsNvdRSHd4PxirAhFsKdHr7A9VyRZaxIa%2BirfguE%2BSLdICoIIfOSBkJYroeA%2Fuu%2BU9ndzoIZRCVSpdoKcaLonsQkxwffCzJvv%2FxdsQSh7CeCB4SgJwLeGKSUPlblXoD1e%2FVfH7pIs6TRbw8Zjmm5Hx0ePat0qQ6mbXpkxyLdFmhAPTaYZ6PsBJOMnxv1nfyIewwMNOVuL8GOqUBZ174WyVqlJdy0Za08oPqsj8P7Terclp4isb457HDEFouLjybdcy1UvyeGp08FNFI9%2FQcJZgSUJoFni%2BWfy%2Br3cvPS9wHJz7348XiBuab3cw4bzE%2BoCWPRBdJfEY2fB8BL4WYdOuuupcxngO7XeD%2ByRqZwBXQHweodL2WkpdTI9wq7szmsx%2FSFqBfxFOkS0v3bQ5rcjjveG7YHzn%2F2sIue4FA%2FJIO&X-Amz-Signature=692cf39accf2ce15cf2b75c603095e8c1f51fabfb4e59d81e4a5bc38d34adcd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
