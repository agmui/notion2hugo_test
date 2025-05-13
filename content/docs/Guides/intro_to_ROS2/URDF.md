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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FFTUSL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIG0eaIX8XSfWBxu2LX3bDjerebSWnPHkT07ZKDmL7BstAiEA8n9KUyotiwft2WRPENYARx%2F55ESVUdwYM6zM2g49SiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMKxxNSyqdpNxR9ySrcAzGr7K0%2FuS9EODWOo11eW9maUQ8DqNg8t%2FjVe01qzn3gOGKHLlgQhlmT40KORi7z3%2F1WS5gF0%2Fm6rXXZeNdUd4r4BsT9mp5xuoll1MJMQJWn%2FX6Y1BwbjKtcTdGjsrjh0T4nbfL6VRXAXe8hVporUwujQn62kGywYodNL86kyJMgkEYPbzmNnrGQJ5irlfVa3sVL6J8MJio6oHiEJuz3nYiMgmP5UyuQvehjJRhHkKAEFwxxaC4bza4J0Pw6VS4D1a2bxys1MKdJHTL0vT3schgP%2FABDWb2Soh4u72a14xy08zo3E2XuYY4Q4jsd90m8NJbvSsCT3MZuXtazfgnkLBhhc5szQt%2BJFnbPRk0blkhEVxeZUQQxoIxnrUkYn5uiKpCDDAcKwVao0joFXffg9Q7NYl4LHqHkZ7bLbuiTI8n09LvdamGY7LQA8XN5nhdAXZTC3LU8zC0hKKCGpYlpAKP2SgTmnKslnn76Pt%2BSCqJtgmxCGIDe6FXcXFDh3HHkHXsmt5%2Flj9HEagUparRqR48YTWFuofwS8zAFfk9uBI5qBEZWxh%2FW6cCLxAi1%2BjsPo%2BSuC7jiiEhGyhSwdgT8iAyMvnzPuGdb2KDriErKzVn0dNj22gpWMyEm7zhaMI%2FcjcEGOqUBcpYibIr4Y8m7kzoNRICD46WlQX89lhseB8iZmxv3kAKBDVl1ae89YIx42x07jJzbz0sjtlweL01uimXEV4atQ0opPx2oTcPjDLFCz52CAsHuqys37a7asbdSGMOApIkijudxqEUww2M4IW1%2BBRVjfUaJQ0hyWwxQkJH24RYx1ut98%2BTS59CBN%2FDHKXE%2BHL5aUo0vtD%2BDCHyKjYqC2MdcpEw7Uc4l&X-Amz-Signature=92ab3f332c089f3d79105ba6b8f6eae418add862b5da80a9271b114f9e9b00b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FFTUSL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIG0eaIX8XSfWBxu2LX3bDjerebSWnPHkT07ZKDmL7BstAiEA8n9KUyotiwft2WRPENYARx%2F55ESVUdwYM6zM2g49SiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMKxxNSyqdpNxR9ySrcAzGr7K0%2FuS9EODWOo11eW9maUQ8DqNg8t%2FjVe01qzn3gOGKHLlgQhlmT40KORi7z3%2F1WS5gF0%2Fm6rXXZeNdUd4r4BsT9mp5xuoll1MJMQJWn%2FX6Y1BwbjKtcTdGjsrjh0T4nbfL6VRXAXe8hVporUwujQn62kGywYodNL86kyJMgkEYPbzmNnrGQJ5irlfVa3sVL6J8MJio6oHiEJuz3nYiMgmP5UyuQvehjJRhHkKAEFwxxaC4bza4J0Pw6VS4D1a2bxys1MKdJHTL0vT3schgP%2FABDWb2Soh4u72a14xy08zo3E2XuYY4Q4jsd90m8NJbvSsCT3MZuXtazfgnkLBhhc5szQt%2BJFnbPRk0blkhEVxeZUQQxoIxnrUkYn5uiKpCDDAcKwVao0joFXffg9Q7NYl4LHqHkZ7bLbuiTI8n09LvdamGY7LQA8XN5nhdAXZTC3LU8zC0hKKCGpYlpAKP2SgTmnKslnn76Pt%2BSCqJtgmxCGIDe6FXcXFDh3HHkHXsmt5%2Flj9HEagUparRqR48YTWFuofwS8zAFfk9uBI5qBEZWxh%2FW6cCLxAi1%2BjsPo%2BSuC7jiiEhGyhSwdgT8iAyMvnzPuGdb2KDriErKzVn0dNj22gpWMyEm7zhaMI%2FcjcEGOqUBcpYibIr4Y8m7kzoNRICD46WlQX89lhseB8iZmxv3kAKBDVl1ae89YIx42x07jJzbz0sjtlweL01uimXEV4atQ0opPx2oTcPjDLFCz52CAsHuqys37a7asbdSGMOApIkijudxqEUww2M4IW1%2BBRVjfUaJQ0hyWwxQkJH24RYx1ut98%2BTS59CBN%2FDHKXE%2BHL5aUo0vtD%2BDCHyKjYqC2MdcpEw7Uc4l&X-Amz-Signature=3c410d1cb75d4157f3b0694123765a78cb88085f5a254eb0926b17bbc225185d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
