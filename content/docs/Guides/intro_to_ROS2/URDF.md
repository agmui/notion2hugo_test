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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEAV26P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDaQhUz3aBQaUZvvEB5PN7xvLDP8h6ngVtt7Vh5m0%2BfoQIhAOyIUkDD5lFp81YSo3UyrQo9mNczISAOMSuU4UJIOa01KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSPyw%2BBA3lOpJ71oUq3AMg5ZbgyFwn9BreHHHlbaorzIDu7%2Fkh7GYqHFrgElGKkrrd5DXj8M5cwSrLYhfXZTRr36Lr65n%2Fc2Rrp2u3uKGIkDtFT3ltPhICnISTxmqhMUSK2btv0pHbL7UFR7YaCLW%2FCG1L7I7Pc0CWYws%2F6%2BNJv2F%2FejpIzVmt%2FxKXilT1xYzoJw%2F0euFaLEhUrf%2BcdS%2F%2BKsuv3Hcquob0wiN%2BfDfIXK6vz%2B%2Fk6Hl0hXqZUWLjZ%2Flz357wsjndPEsfi%2FleHdQM6goYlJ8rGc7m5ZwThplpKfWfiv%2FXZNi3ciE3fHJTHgX5F3T1819U1ep7hj0NLTUr1MBiDXAtd06WfBuO5allioadUkHX7sGvxU1dzNRYjl23LWNkfbTTTO6wZynnqgK4S4Z30ei1xJeyw%2BNqaSOu5aQnU8FrKlynRznEl78FeiV6u2aDxOLqPaTbydtpQOlX5pATMH2BULLyPo82yZ%2BjSxYdhfQ7ciumn2mDDXO%2BI1%2BXieWQI0C1%2Bn9H%2BkExVMz%2BQzaeF%2FHM6d6SMfsUs4%2Fvh%2FL8hMypGcKeLBqMsXRIkXKXt%2Fy3v5OUH4ctcVwhUEe3RYfG3fcVkjZXjvKWhe7VRSXo5N1J5mvoGqbqkBveLX5gzcg15Y3pZ4EiPDDG2sO%2BBjqkAVWprTOrSFCvmu4wzJwHGVxVx%2FA7t%2FNHKCg5tNv7c8HJ%2B6%2FuhB5%2FdgEitI3wdoEkHODwe46de2whDhRSEAuZoM6GyYWRVty1lcf3Sw7J1f7M0px69ORPWq50ngmYj0GNikRkUbVhvQkz0QPNn5Yg9jZWoFUS%2BD%2Bvm%2FFpsZaq9h%2FkIZH%2FuJLXu4zHiv9NVhqyBGB6ZvQ1BcpVx4RroThGaucs%2Bvb3&X-Amz-Signature=eec79f467c2c290621f7fb19f1e73968b3a9d5dd25eefc3e241eb8b8baaae743&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEAV26P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDaQhUz3aBQaUZvvEB5PN7xvLDP8h6ngVtt7Vh5m0%2BfoQIhAOyIUkDD5lFp81YSo3UyrQo9mNczISAOMSuU4UJIOa01KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSPyw%2BBA3lOpJ71oUq3AMg5ZbgyFwn9BreHHHlbaorzIDu7%2Fkh7GYqHFrgElGKkrrd5DXj8M5cwSrLYhfXZTRr36Lr65n%2Fc2Rrp2u3uKGIkDtFT3ltPhICnISTxmqhMUSK2btv0pHbL7UFR7YaCLW%2FCG1L7I7Pc0CWYws%2F6%2BNJv2F%2FejpIzVmt%2FxKXilT1xYzoJw%2F0euFaLEhUrf%2BcdS%2F%2BKsuv3Hcquob0wiN%2BfDfIXK6vz%2B%2Fk6Hl0hXqZUWLjZ%2Flz357wsjndPEsfi%2FleHdQM6goYlJ8rGc7m5ZwThplpKfWfiv%2FXZNi3ciE3fHJTHgX5F3T1819U1ep7hj0NLTUr1MBiDXAtd06WfBuO5allioadUkHX7sGvxU1dzNRYjl23LWNkfbTTTO6wZynnqgK4S4Z30ei1xJeyw%2BNqaSOu5aQnU8FrKlynRznEl78FeiV6u2aDxOLqPaTbydtpQOlX5pATMH2BULLyPo82yZ%2BjSxYdhfQ7ciumn2mDDXO%2BI1%2BXieWQI0C1%2Bn9H%2BkExVMz%2BQzaeF%2FHM6d6SMfsUs4%2Fvh%2FL8hMypGcKeLBqMsXRIkXKXt%2Fy3v5OUH4ctcVwhUEe3RYfG3fcVkjZXjvKWhe7VRSXo5N1J5mvoGqbqkBveLX5gzcg15Y3pZ4EiPDDG2sO%2BBjqkAVWprTOrSFCvmu4wzJwHGVxVx%2FA7t%2FNHKCg5tNv7c8HJ%2B6%2FuhB5%2FdgEitI3wdoEkHODwe46de2whDhRSEAuZoM6GyYWRVty1lcf3Sw7J1f7M0px69ORPWq50ngmYj0GNikRkUbVhvQkz0QPNn5Yg9jZWoFUS%2BD%2Bvm%2FFpsZaq9h%2FkIZH%2FuJLXu4zHiv9NVhqyBGB6ZvQ1BcpVx4RroThGaucs%2Bvb3&X-Amz-Signature=fac13170ca808c49c8d6e176b069ef6bcfa2c736f302d92807a547b598dc1452&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
