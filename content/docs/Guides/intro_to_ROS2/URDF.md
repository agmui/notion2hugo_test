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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSQKMRZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVejMMge4NWdbn9orxuIQhnoY0eh80oiju%2FbNb3BWmAiBNZUKJzS6cVo45BeTiauBotxiIUJtK2eEnT9MtiIeYiCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJeOUh96uruGSMQZ4KtwD78yuw%2B9UswjPEmRLxORL5CU8iM5tKgXnGXasK6GOrHLNU%2FfbQgW1ByJCHCKkH%2FtmBZY0lYSeyqEwp6P%2FgMjEwueg5FpJ%2FlaQhk8ApTIrZNQpedkOKeD5a0UpbrE3xkWGG%2FKwi88U2GlBItRfUVQEleQWzcGWdIdoGnEjn%2BT2%2FWJmMHAxWYIjOtYmXbpNYIODu7EX4hD6O1YUTwFFKXmtn7zFM%2Fzz2Uho5AUtbOSJyJABqEUWmyS4hXnAmgYQHlFgTKtkg7bc4Y88tcSas8%2FAbvnzNYnKkY4LcIOYMroktHr84tgKVB0scNQMCa8qyHm%2BOT8sRXtdgRUpPOUAnhqhPjRe6%2Fkpl0qGdSykk8eaZi5TrYoBtZMYEUyu%2FxQRm4sjvqORFUDsUmViLnwegINcum88OlqSg2v0iWEvnHF%2FEqXpzO6rICKytxOD9t%2BMvUyOv3LBknNiAVLw0QV6mGNtnMHKLzwUqS%2B%2FvvPK9alD%2FBvu5Wb%2FTWDCrthu4X3yjYhcdY2%2BR%2Blc1YuMuItubq9qNWDffxG5ZiFk3k0SFGli87ASAS%2BFTFZuuQJcT1wutoofojn%2FQViY3hAtsuie4e8Jtz78xaWdj9HEm7nwKpL%2BUQnLCyPYfC0yeazD2ZQw2o%2FbwgY6pgGR4xFgtONEOcvBH6e3xyWMxAX8LBAVcXmXGgvoTzyyn%2FAd%2BI9XP0fJlAXaHMjUkAnAhy2a4dmpfbD2uZrFH4M5Tvtx1zqnv6p0gWCpJZ9v%2BIkSH6lXGWEIOIFw0aT9sa2YFrr7BHHqv8cgybGGoQoFwXV9%2B6Zebc9AuTHab7X9ZUxucHb%2Fgun8Ah6Z9Ypx0ge3xLGjg%2BqPuD%2BQq2Ri1I2E7tHUqc5f&X-Amz-Signature=063fc4f59b809e935e67bde1800e599495385df8d0e6c62b448976a8516e26b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSQKMRZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsVejMMge4NWdbn9orxuIQhnoY0eh80oiju%2FbNb3BWmAiBNZUKJzS6cVo45BeTiauBotxiIUJtK2eEnT9MtiIeYiCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJeOUh96uruGSMQZ4KtwD78yuw%2B9UswjPEmRLxORL5CU8iM5tKgXnGXasK6GOrHLNU%2FfbQgW1ByJCHCKkH%2FtmBZY0lYSeyqEwp6P%2FgMjEwueg5FpJ%2FlaQhk8ApTIrZNQpedkOKeD5a0UpbrE3xkWGG%2FKwi88U2GlBItRfUVQEleQWzcGWdIdoGnEjn%2BT2%2FWJmMHAxWYIjOtYmXbpNYIODu7EX4hD6O1YUTwFFKXmtn7zFM%2Fzz2Uho5AUtbOSJyJABqEUWmyS4hXnAmgYQHlFgTKtkg7bc4Y88tcSas8%2FAbvnzNYnKkY4LcIOYMroktHr84tgKVB0scNQMCa8qyHm%2BOT8sRXtdgRUpPOUAnhqhPjRe6%2Fkpl0qGdSykk8eaZi5TrYoBtZMYEUyu%2FxQRm4sjvqORFUDsUmViLnwegINcum88OlqSg2v0iWEvnHF%2FEqXpzO6rICKytxOD9t%2BMvUyOv3LBknNiAVLw0QV6mGNtnMHKLzwUqS%2B%2FvvPK9alD%2FBvu5Wb%2FTWDCrthu4X3yjYhcdY2%2BR%2Blc1YuMuItubq9qNWDffxG5ZiFk3k0SFGli87ASAS%2BFTFZuuQJcT1wutoofojn%2FQViY3hAtsuie4e8Jtz78xaWdj9HEm7nwKpL%2BUQnLCyPYfC0yeazD2ZQw2o%2FbwgY6pgGR4xFgtONEOcvBH6e3xyWMxAX8LBAVcXmXGgvoTzyyn%2FAd%2BI9XP0fJlAXaHMjUkAnAhy2a4dmpfbD2uZrFH4M5Tvtx1zqnv6p0gWCpJZ9v%2BIkSH6lXGWEIOIFw0aT9sa2YFrr7BHHqv8cgybGGoQoFwXV9%2B6Zebc9AuTHab7X9ZUxucHb%2Fgun8Ah6Z9Ypx0ge3xLGjg%2BqPuD%2BQq2Ri1I2E7tHUqc5f&X-Amz-Signature=528f5f512b354f52b02c21edd6f230c113d667ede51183148a670accd6ae416a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
