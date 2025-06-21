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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2HA4WZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwUmOvNtFJUapC%2BMyUikUWU9Ll%2FH2EeKghL3dcejRBwAIhAOQlRmfUdGFoQXlERgoV35NVTveTYa6UCHaIwZABTwhUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDyJ8CDoPW%2FqbIrkq3APLqQK0Si2kG0z5p89OSFNhIBhTW5g0lMxR1eZNty73hVT%2B2dld4FETrOzScrLqeOzfY8f2OGKjrQ1LBi4gunI%2FoUcdsEdSqY7YsrkpblNK%2BfOJnIrGiQQPO7hALTWtv%2Be0CcSMxX399rppw3sYeGCy%2BlFIHpIt0Yp1bvAlQUIvRnpwTDguDvMsM9AoBIiWqHOfwglR1x0Li251bn41cobUYRpSLkjQ6VsiSc%2BAs4wGVEvF4bF%2BBJ2Cf4DTTCKd5vhWBJcflvfXYcJt5PO0cVfuaD0jhZ3EHL1SQsLgIRz1xr4915AXj02iZAAL5pcasfPx4DOzFXCip9li1zuuKCFGXDwZARnP4RQ9XRVeBKEzj64fGIYCRCkB9sFPT82MNfejx2aUBwsqmLZ0Y3TPsUjJyGgxHR%2BIFAJIZv0pyixgc1838hDNJmTjKt4DODOkOBPlcUy6dfRZHZOpIGHlpjIlIBuD78MZ0nsHHjuQi5pbr3Zgc8IzC%2Fe78UjN3ZxutEW8atTahdJ7nfiz0FYQ8GR2LqL%2FxfvatljpBgNKx9PaB5JK3kpPwODOaGRqS0WAwEqWQ%2FfwEYy5rcfvVOvW8u1Sq5Gd0El9OStxO2Mh%2Fq6FIP0yz0lFt2gUUo2KFjCMjNnCBjqkAR8m%2FxW%2Fvj3LkJZ3yDmLoduVr9TYwXGa7ooxIPtGas4gFPtuTBrmff6JB02%2FQS4r5vC6mZmlGLTT50QxaZ7lbfLQKGeXhHTqO53KoCRlOBJEgtBM56hVdAZLPSeXwslSeC%2FArSFy5zgft0vMfjjoBz6hoKaxWHzHn4T8SOnynBBEA2DyTrljYeDXtTOo4E1RggLrSOOlKSOj1VGKF4EX7JwVw74o&X-Amz-Signature=e618253170c05003c4ff2bd667fd1116fc12493266b3599704e9d8fb68af243a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV2HA4WZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwUmOvNtFJUapC%2BMyUikUWU9Ll%2FH2EeKghL3dcejRBwAIhAOQlRmfUdGFoQXlERgoV35NVTveTYa6UCHaIwZABTwhUKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDyJ8CDoPW%2FqbIrkq3APLqQK0Si2kG0z5p89OSFNhIBhTW5g0lMxR1eZNty73hVT%2B2dld4FETrOzScrLqeOzfY8f2OGKjrQ1LBi4gunI%2FoUcdsEdSqY7YsrkpblNK%2BfOJnIrGiQQPO7hALTWtv%2Be0CcSMxX399rppw3sYeGCy%2BlFIHpIt0Yp1bvAlQUIvRnpwTDguDvMsM9AoBIiWqHOfwglR1x0Li251bn41cobUYRpSLkjQ6VsiSc%2BAs4wGVEvF4bF%2BBJ2Cf4DTTCKd5vhWBJcflvfXYcJt5PO0cVfuaD0jhZ3EHL1SQsLgIRz1xr4915AXj02iZAAL5pcasfPx4DOzFXCip9li1zuuKCFGXDwZARnP4RQ9XRVeBKEzj64fGIYCRCkB9sFPT82MNfejx2aUBwsqmLZ0Y3TPsUjJyGgxHR%2BIFAJIZv0pyixgc1838hDNJmTjKt4DODOkOBPlcUy6dfRZHZOpIGHlpjIlIBuD78MZ0nsHHjuQi5pbr3Zgc8IzC%2Fe78UjN3ZxutEW8atTahdJ7nfiz0FYQ8GR2LqL%2FxfvatljpBgNKx9PaB5JK3kpPwODOaGRqS0WAwEqWQ%2FfwEYy5rcfvVOvW8u1Sq5Gd0El9OStxO2Mh%2Fq6FIP0yz0lFt2gUUo2KFjCMjNnCBjqkAR8m%2FxW%2Fvj3LkJZ3yDmLoduVr9TYwXGa7ooxIPtGas4gFPtuTBrmff6JB02%2FQS4r5vC6mZmlGLTT50QxaZ7lbfLQKGeXhHTqO53KoCRlOBJEgtBM56hVdAZLPSeXwslSeC%2FArSFy5zgft0vMfjjoBz6hoKaxWHzHn4T8SOnynBBEA2DyTrljYeDXtTOo4E1RggLrSOOlKSOj1VGKF4EX7JwVw74o&X-Amz-Signature=27447a0718051b6e7ccf07e4aef7a021743d7b23ce31250a11374ac2d30b54c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
