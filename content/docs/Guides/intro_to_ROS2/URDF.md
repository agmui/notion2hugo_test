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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXX5TLS3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe3OEoGmA3SowGHEj5%2BT%2BgdqYSz3LxjFmPlOzjXhgPgwIgXO%2BToGl0tgHNiTeFt2kXu%2BQVB2v34m0ZQfNeORPtmwAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdoUeBeT9ovQN0bQCrcA2fyFku9KYUtVwB50QPVDhMK7hGsGoot2pqr7Ded%2FdkGvU%2BOy0BxluWtjCjzUvDtyf7MRqz0FRX5QrSZvH35Yrop%2BDB3e2AZk5NCnABZknvk0K8i4y63y0C%2FTeSeAH4%2B6PsPWAxT%2BcNoqpPtoGtg8Bz49jQFeW15ChdpTFjw8EiQ42gPOEz7TwGIVFSTGohaoFDtqQ2uwHXcgk3h61zei7%2F1B5YPYLgR9qq9LUcC6qEBkVx%2B%2B35ndvDPxfOGms2VOD%2BmYmIQMfngvMvLptYvG%2B%2BP5xH4afvXOyxtTB5aFZ9nUpIcoERPmsaAVur4LCMaTDThVXNfuWxTo2gWntmH0%2B7xICUnMVn8w3xTWQ2iYjrjcPxZPeUjzqxSNrGQ9B6WHMtDR48x1zIOyP0FeOR86ZOsm7oojfj%2B2E9Sv3zfUiz3SEoSE%2FT0wKkLx%2BgMq24rnOG%2FI43fufqR%2B1ik%2F0ZTjWd7Deeb0QUx0HO2I9%2FhrH0B6c1dhG2lV2U4PEeQmVZ2F4xnFxVoysOt66JlzRx5zBs1HWNqmWmjenJKjLj%2BVdLEk3XC5fUyljKF%2F%2B71bSqs26ss5zazBkNTG%2BBTILrl8WGeQt3BcMr9AbBsmUuM8j13WO%2FRi571KSnkHvzYMP7ypcQGOqUBS3XcUyscWRqQLpl8Q0LrtsZ2baAaRxL9VxTZryg5JxRW0opitZiNM%2Fh8GLdFdRk9Itd66Tk647yzxoaVfuCl5NC7x1XaONPk82BkAgxwlIEor9ocgCtG1Oo5IOL%2F5JI1qUF3l5L%2BZRRaTMRiZq65QcZMNErH%2FEwKfn4rZYcWAgMtykV8h4k2c7kdQKYIuVhXfmo7X0V2oss1Dzk%2F7NXvllL9oWMf&X-Amz-Signature=dfb71ad51e1b99035ee6d49495599fb64b6646dd4ddc12a875ec64161dae6477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXX5TLS3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe3OEoGmA3SowGHEj5%2BT%2BgdqYSz3LxjFmPlOzjXhgPgwIgXO%2BToGl0tgHNiTeFt2kXu%2BQVB2v34m0ZQfNeORPtmwAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdoUeBeT9ovQN0bQCrcA2fyFku9KYUtVwB50QPVDhMK7hGsGoot2pqr7Ded%2FdkGvU%2BOy0BxluWtjCjzUvDtyf7MRqz0FRX5QrSZvH35Yrop%2BDB3e2AZk5NCnABZknvk0K8i4y63y0C%2FTeSeAH4%2B6PsPWAxT%2BcNoqpPtoGtg8Bz49jQFeW15ChdpTFjw8EiQ42gPOEz7TwGIVFSTGohaoFDtqQ2uwHXcgk3h61zei7%2F1B5YPYLgR9qq9LUcC6qEBkVx%2B%2B35ndvDPxfOGms2VOD%2BmYmIQMfngvMvLptYvG%2B%2BP5xH4afvXOyxtTB5aFZ9nUpIcoERPmsaAVur4LCMaTDThVXNfuWxTo2gWntmH0%2B7xICUnMVn8w3xTWQ2iYjrjcPxZPeUjzqxSNrGQ9B6WHMtDR48x1zIOyP0FeOR86ZOsm7oojfj%2B2E9Sv3zfUiz3SEoSE%2FT0wKkLx%2BgMq24rnOG%2FI43fufqR%2B1ik%2F0ZTjWd7Deeb0QUx0HO2I9%2FhrH0B6c1dhG2lV2U4PEeQmVZ2F4xnFxVoysOt66JlzRx5zBs1HWNqmWmjenJKjLj%2BVdLEk3XC5fUyljKF%2F%2B71bSqs26ss5zazBkNTG%2BBTILrl8WGeQt3BcMr9AbBsmUuM8j13WO%2FRi571KSnkHvzYMP7ypcQGOqUBS3XcUyscWRqQLpl8Q0LrtsZ2baAaRxL9VxTZryg5JxRW0opitZiNM%2Fh8GLdFdRk9Itd66Tk647yzxoaVfuCl5NC7x1XaONPk82BkAgxwlIEor9ocgCtG1Oo5IOL%2F5JI1qUF3l5L%2BZRRaTMRiZq65QcZMNErH%2FEwKfn4rZYcWAgMtykV8h4k2c7kdQKYIuVhXfmo7X0V2oss1Dzk%2F7NXvllL9oWMf&X-Amz-Signature=e2b9aab921a8357eec78d2aef2c32c1a3f6336690cfbcdb8e187ac42eb427f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
