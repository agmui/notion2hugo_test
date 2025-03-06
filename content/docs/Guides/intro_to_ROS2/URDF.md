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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IALBA7G%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtIG4kRKIu6youTEUG9dOa3bX8SsSiZJsn0a8ZN8tTfAiAq3AJ2hYmgj7V6Rj9xk6X9sh4urRKnp8TP8H6EQjIoIir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMgPJGpY9rEejQR5pEKtwDOwOI1f%2Bv2vujb4USWhoCXmRn%2B7XsXBH02FbGNbjGy2CKxE%2FWDeFvYsw%2FuIeBvn%2Ft8rmcj3KcbrG133ObyQCFV%2Bcn5NElknA8LXr%2FMWfj1TWNz0sDDZnyjAHLPpcLMfIiLKIOTzjUv%2FcGW0FP6am4cPcMZY8km8rTC6lUpBp63N9yhxWZk9E2slCET1o6ZNhlJ7x0I2%2B8eyWYkwSD1S%2BSYfp8ImI7xImhFiSyY8Vpl93yvlq%2FyXDqCkVbzNDwXF%2F7orauH8KlQ2GgaUrdZCdvz5Tb1dxx7A%2BAEe2ImXBULaOCdfRPcRUZPeCzIZVeDzsUoysfaM82QWr2sKglxumeFyTc0Ifbw%2BhJWF4O5F%2FTO97EAf3h%2FxrcWt0747uycpEVHrep27LS8buYcF6hfJIhh4qqEISrECdDFdJjSdbdBHz6H%2FnrOZOkmID97OMTHPoIwZUBMPMg6dtmqrbI55UtPfaGa4xEpJeG8h2gm24aavSm2kUWaqbGzmZ9SQtdi8EF6NwDrt%2BbKLbVP0U8ZsfrfWeAg6L0csf%2FNcA2tiYudOwOTfzQsKX6wzuB7sYK7xRPC67L4s1%2B2b2BVjbgTRxjzreR%2BNU9kWC37BRS4Ibf6sijbEm%2F2peKTZSG8LMwzrWlvgY6pgH%2B3OcleSUdP0X9z7slIJK8uWwa8PekIfpQ7RBz36e9f4XGl7GCkqQdzkDdgFuBsgsvSexLFopbo%2FvskmuLl4zTKVOCbKRAieoPOtD1IaD3q2UvQ6KTJign9XYVEAywqhGa2Wew5s9xGxsI1AHz%2FhTJBoeOFLdhiJukRuMyIvi9%2FGd%2FPl9MW7Y2c8gUalplsIqlBBVSJOHx9lsvWEQWkVKC%2FPBopUEH&X-Amz-Signature=dd239dd73241c5272761846069f761b522680222cef085a73ee568bac98e649a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IALBA7G%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtIG4kRKIu6youTEUG9dOa3bX8SsSiZJsn0a8ZN8tTfAiAq3AJ2hYmgj7V6Rj9xk6X9sh4urRKnp8TP8H6EQjIoIir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMgPJGpY9rEejQR5pEKtwDOwOI1f%2Bv2vujb4USWhoCXmRn%2B7XsXBH02FbGNbjGy2CKxE%2FWDeFvYsw%2FuIeBvn%2Ft8rmcj3KcbrG133ObyQCFV%2Bcn5NElknA8LXr%2FMWfj1TWNz0sDDZnyjAHLPpcLMfIiLKIOTzjUv%2FcGW0FP6am4cPcMZY8km8rTC6lUpBp63N9yhxWZk9E2slCET1o6ZNhlJ7x0I2%2B8eyWYkwSD1S%2BSYfp8ImI7xImhFiSyY8Vpl93yvlq%2FyXDqCkVbzNDwXF%2F7orauH8KlQ2GgaUrdZCdvz5Tb1dxx7A%2BAEe2ImXBULaOCdfRPcRUZPeCzIZVeDzsUoysfaM82QWr2sKglxumeFyTc0Ifbw%2BhJWF4O5F%2FTO97EAf3h%2FxrcWt0747uycpEVHrep27LS8buYcF6hfJIhh4qqEISrECdDFdJjSdbdBHz6H%2FnrOZOkmID97OMTHPoIwZUBMPMg6dtmqrbI55UtPfaGa4xEpJeG8h2gm24aavSm2kUWaqbGzmZ9SQtdi8EF6NwDrt%2BbKLbVP0U8ZsfrfWeAg6L0csf%2FNcA2tiYudOwOTfzQsKX6wzuB7sYK7xRPC67L4s1%2B2b2BVjbgTRxjzreR%2BNU9kWC37BRS4Ibf6sijbEm%2F2peKTZSG8LMwzrWlvgY6pgH%2B3OcleSUdP0X9z7slIJK8uWwa8PekIfpQ7RBz36e9f4XGl7GCkqQdzkDdgFuBsgsvSexLFopbo%2FvskmuLl4zTKVOCbKRAieoPOtD1IaD3q2UvQ6KTJign9XYVEAywqhGa2Wew5s9xGxsI1AHz%2FhTJBoeOFLdhiJukRuMyIvi9%2FGd%2FPl9MW7Y2c8gUalplsIqlBBVSJOHx9lsvWEQWkVKC%2FPBopUEH&X-Amz-Signature=10fc22630e41760788e589778233d18c92a926d86e5057c6e8aa1238ff81c4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
