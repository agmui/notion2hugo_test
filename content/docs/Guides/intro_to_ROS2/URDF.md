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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQW76WF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDubYhhbLa3e1h834feh5fT8lMgkTaC7Wasf0S0h2E9YgIhAKt8Gxhm%2Bz5BB4fdPNLEohHKgLzBUVlizn1XfB313sxuKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Xmkk9qZOvBmVEhgq3AOrn8MIC6SKwxNL3rZrGkke6GDiNT2q%2BBQnJirkH3U0Skk6nGcPsZpEG9PRWLcl3LqJtn1fAExb3I5Dr0K3PIiT0k253y7HyMoxWbIaLyUTNf0eeUFWNgR0fZE9af6wvxrI6Bycg8mE2oQOIgpoVe4mO%2BB3N7f1uVoGLfQhfz82PoN%2BsWGnlcO2ZI%2B692nGRGVKBwkSOLzWeoAuc%2BMf11z6Q6rJQ5%2FQH5PM4mOO3ZWo%2BugJBIEIUzAO8VCs%2BWaSA1aF8J0uZ23HqHOgWhgvqK3m3pvU%2B6hv28R6ZgtexMgCdA0j6cp0Necz8LRiphufgEjoVzWizMtRXR8S4swF4fJjiB6Mg%2FY3PXJltg5806JG%2FZ4vJIR%2Bkw3DHsq%2BLNW%2F52OM9%2Bk2lCQDlNEB%2F9SZgzz2c7dpMwn3NyL%2BiS70cc4a4KCfPnJ4jJVqbkKIFmsmLQzZLGveLgzNdwJRxUqxgT7EvOobLT%2Bnx3swAB7g4OfWLToTNHp30Z12UaJcUAbg63EOTzI4Q542S2LzFYG8c8nV4yQrhjIIu392UbJWBUzm6KCC2H3C40GtGJz4%2FU%2Bcj%2FeopoJR7d6PJiBJlQMFn8TsC%2FidmK6fWGEvkSnhw8aP5T%2F1QZJgJReqeMmRbTCx%2F52%2BBjqkAfdwXWTaQiUDQQKhcVDF24bUw%2Fhlj5gTc7v2j9u7Lct5wUk4iV%2FHCR2qy5c0Dj2UB3G24LQ8A%2Fq8t7pewQm%2FcDwxztjz7RvVVgHnFtlMk3h070WUKSxsvgUP1OReBZVyXuQqLIFgUIirMmdYOCUngkFGD742x6AuAPZjH8rPWCEKmOLP4cAYjpdQfCw%2Bv%2BeuzHnp%2BPtLKpcGP%2FU7ZFfDEEgjPSbP&X-Amz-Signature=f6570b21037d9f7e88e9017014f85b4bb55d5c137b17fda6ee199a36e0601e47&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQW76WF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDubYhhbLa3e1h834feh5fT8lMgkTaC7Wasf0S0h2E9YgIhAKt8Gxhm%2Bz5BB4fdPNLEohHKgLzBUVlizn1XfB313sxuKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Xmkk9qZOvBmVEhgq3AOrn8MIC6SKwxNL3rZrGkke6GDiNT2q%2BBQnJirkH3U0Skk6nGcPsZpEG9PRWLcl3LqJtn1fAExb3I5Dr0K3PIiT0k253y7HyMoxWbIaLyUTNf0eeUFWNgR0fZE9af6wvxrI6Bycg8mE2oQOIgpoVe4mO%2BB3N7f1uVoGLfQhfz82PoN%2BsWGnlcO2ZI%2B692nGRGVKBwkSOLzWeoAuc%2BMf11z6Q6rJQ5%2FQH5PM4mOO3ZWo%2BugJBIEIUzAO8VCs%2BWaSA1aF8J0uZ23HqHOgWhgvqK3m3pvU%2B6hv28R6ZgtexMgCdA0j6cp0Necz8LRiphufgEjoVzWizMtRXR8S4swF4fJjiB6Mg%2FY3PXJltg5806JG%2FZ4vJIR%2Bkw3DHsq%2BLNW%2F52OM9%2Bk2lCQDlNEB%2F9SZgzz2c7dpMwn3NyL%2BiS70cc4a4KCfPnJ4jJVqbkKIFmsmLQzZLGveLgzNdwJRxUqxgT7EvOobLT%2Bnx3swAB7g4OfWLToTNHp30Z12UaJcUAbg63EOTzI4Q542S2LzFYG8c8nV4yQrhjIIu392UbJWBUzm6KCC2H3C40GtGJz4%2FU%2Bcj%2FeopoJR7d6PJiBJlQMFn8TsC%2FidmK6fWGEvkSnhw8aP5T%2F1QZJgJReqeMmRbTCx%2F52%2BBjqkAfdwXWTaQiUDQQKhcVDF24bUw%2Fhlj5gTc7v2j9u7Lct5wUk4iV%2FHCR2qy5c0Dj2UB3G24LQ8A%2Fq8t7pewQm%2FcDwxztjz7RvVVgHnFtlMk3h070WUKSxsvgUP1OReBZVyXuQqLIFgUIirMmdYOCUngkFGD742x6AuAPZjH8rPWCEKmOLP4cAYjpdQfCw%2Bv%2BeuzHnp%2BPtLKpcGP%2FU7ZFfDEEgjPSbP&X-Amz-Signature=23b63647da4c95e2f9163ce90c916ffba6f214dd03da0caf046d9e4a7057c6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
