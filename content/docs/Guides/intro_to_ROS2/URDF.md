---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QRDFL7%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5iufuhswsIMQE%2B%2FllNhMxTb2wXeToofLSlnwnYgtNbAiAr4p8UlZhNHNtgUvL4VI3rCEEu4zZPCvzGNn4RCAyYkyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnAz68EwQrNqtkXQPKtwDdGGtKk5fszHlDU18xYo7rFw%2BQh2IURLIr4b9B3YxWRHBLjkqnrjOaqX%2FaAb8s0uLxUeLGgGm2ta0vq43VRzeK7G9v4CqGP%2BpnP4sdzYPV2Ebfb%2BXjfo39LqUGsjGGxDT8%2Frwv6UHKYwSIQ4zR%2Fg4DGjYdqfhy6VR%2BWbV7arGrIBqkmFJ52wc9hXTGstWt8KEDKrlDAohL7mD3RIhWqvDMUBEq05u3wWH2C1MRPi80qySyfEsM8JhIIX7OuHCkaGbvxE1g0dYqCZPX2eGEoNlM9GIAI5cOzI7wOqNAcuOnJTxf13SZuHYDySZNpl%2BT2jeOlDs73brahAb8vr4PbPgqP%2B8KTJNd8FCJ8QbNLmnnIY%2BjKr7sA80qGgndjMFQg69Ii1lRJawafJv1vaWNWCDat9%2BH5O%2FavADarbKS5O245yN3sVrA9BtKQDNjvSrsR%2FXDMRKSm3Ljd18GM1mOxskFbRLomgnOruMAEP%2F6BOAFfXYlTTcgeFgI994iVA7C1q6QaxkOr6CoLNnioV%2BVSVVAZm14tviE7NINdKhIVcXYDW2%2FRvNwUZ31KtJgQU8G4%2F2cTQFwjABY70bNNiQaidX3GSdbtsTKCi%2BNc5nRSpDKsORnJ1Rp73m27ItK7owisqHzgY6pgEtgFsWHYfXHoyA3zcGKbhL%2F0BFTFQL6av7EM%2BNB7tqP62heo9bgzqTjcERQI0G3E254PI3WDtGbJ5y5giW548x5CPR5dCBESGTv5TOe1NcEPhiWHRU2geIA1GT82hVXg3xqlFLP9SzagsPh%2Bo%2FfwjnAbsTBL7aeqGxhNh%2Bt79W5UPAK9ru6V4yNyS4zFraxBMbJppQonzmNoV2IieIZ0St0lnPV8PY&X-Amz-Signature=3b1720bd62d0e8e61e4ea53c159e4dac7bf966038f3a39ffb96e7b370ce3e24d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QRDFL7%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5iufuhswsIMQE%2B%2FllNhMxTb2wXeToofLSlnwnYgtNbAiAr4p8UlZhNHNtgUvL4VI3rCEEu4zZPCvzGNn4RCAyYkyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnAz68EwQrNqtkXQPKtwDdGGtKk5fszHlDU18xYo7rFw%2BQh2IURLIr4b9B3YxWRHBLjkqnrjOaqX%2FaAb8s0uLxUeLGgGm2ta0vq43VRzeK7G9v4CqGP%2BpnP4sdzYPV2Ebfb%2BXjfo39LqUGsjGGxDT8%2Frwv6UHKYwSIQ4zR%2Fg4DGjYdqfhy6VR%2BWbV7arGrIBqkmFJ52wc9hXTGstWt8KEDKrlDAohL7mD3RIhWqvDMUBEq05u3wWH2C1MRPi80qySyfEsM8JhIIX7OuHCkaGbvxE1g0dYqCZPX2eGEoNlM9GIAI5cOzI7wOqNAcuOnJTxf13SZuHYDySZNpl%2BT2jeOlDs73brahAb8vr4PbPgqP%2B8KTJNd8FCJ8QbNLmnnIY%2BjKr7sA80qGgndjMFQg69Ii1lRJawafJv1vaWNWCDat9%2BH5O%2FavADarbKS5O245yN3sVrA9BtKQDNjvSrsR%2FXDMRKSm3Ljd18GM1mOxskFbRLomgnOruMAEP%2F6BOAFfXYlTTcgeFgI994iVA7C1q6QaxkOr6CoLNnioV%2BVSVVAZm14tviE7NINdKhIVcXYDW2%2FRvNwUZ31KtJgQU8G4%2F2cTQFwjABY70bNNiQaidX3GSdbtsTKCi%2BNc5nRSpDKsORnJ1Rp73m27ItK7owisqHzgY6pgEtgFsWHYfXHoyA3zcGKbhL%2F0BFTFQL6av7EM%2BNB7tqP62heo9bgzqTjcERQI0G3E254PI3WDtGbJ5y5giW548x5CPR5dCBESGTv5TOe1NcEPhiWHRU2geIA1GT82hVXg3xqlFLP9SzagsPh%2Bo%2FfwjnAbsTBL7aeqGxhNh%2Bt79W5UPAK9ru6V4yNyS4zFraxBMbJppQonzmNoV2IieIZ0St0lnPV8PY&X-Amz-Signature=8199369470761fe4228dc12221191a4c1e1e3908c02c2598c0a882fab2bfa53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
