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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZGUOWF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKxypw8d38TbhA3rYdo3UhmLkNWtVY82vBZDzdbR4YhAiAy3a0QqDBIyhlit8CreJnUWljtlsBwa9WzoFvIBq72RCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIsiebNK%2F5UrWhsSOKtwDtjpqmXG0QBHt1otnV3hPMvRnKdUpDg6ixt%2B66K1yWZKMCXC9CJpDhFp8Y7kXANWp42aN4x%2FkWKy6mtBAZXz9%2B63qGqfsqlgAkA5fZEaaY93x7PKljW%2FWavOlgdPhDTQyBI86KvgowcF2Gshss8lo7j4L4FrGaJvPRMqA5OGOXtCrRde6o51tUsPsaV%2FIfGD27XCQn1AlGHEhTCMh5jeh1OTgt%2F77LsFpiJTrlIBDYchZI%2FiTRxWwbDalz3qKkmEO%2FzgKPr7t4PyZ936o6PLQgemxm3ZSiSjd1T3Z2qC7J0OZORfppKs9ef3f3ZAEyE6694GHW0IhpZ3fwo8uN37ei7F1iKVdaK3RaL%2F84YVJIbE8EdNSKoO%2BZIRn3yN42JrYk2FWBg4PirQ9ZTnvQ5qE7Zu%2F7w4ka%2FlijAvjr8PbIPRcnQPVpiQ9lZRwoJsz190mw%2Fo9ll9MF2DueB25U47R1qHUdvPVPTapcqQp76w5ufAxcPbjrHVOZMLpUUm4np24pTm6jystJZlaL7ueU502X9B4VpwmnRlVwZ4dPfiy6J77y%2BWYdQfGqtgZ2Ma4tzhA0%2FKFWu2rPAdg6ZJyxCrRMlUA%2BFXYcRUwhZzfObGD5q0pXd8wqOgYCKoreYowj7HywAY6pgHA7qT1YbJg0NfsJMGBvkxPGXbyxM4WJgk03NO%2BxPqw1ZiPA3sHCAAVns4JgiskPYhxXOBBw9Xk91zStzmZvRD%2F1AltFX9oM%2FVzFprGuHsE6CZkOkuGjztB%2B3JVc7ykrbq66n4Dgr3QFk4lg7Fma%2FwIMf7t3xOW2mx5m%2F6R%2FJFh5o4RiGz%2FUnjr0K0ilPhplQNQvh9bIVwKNtlf0wQXoev8Dx59oMjb&X-Amz-Signature=8cba569b16a94da93fb7c12bdca6d3fcfbc48766e98fc4bffb8a3adecc451760&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJZGUOWF%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKxypw8d38TbhA3rYdo3UhmLkNWtVY82vBZDzdbR4YhAiAy3a0QqDBIyhlit8CreJnUWljtlsBwa9WzoFvIBq72RCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMIsiebNK%2F5UrWhsSOKtwDtjpqmXG0QBHt1otnV3hPMvRnKdUpDg6ixt%2B66K1yWZKMCXC9CJpDhFp8Y7kXANWp42aN4x%2FkWKy6mtBAZXz9%2B63qGqfsqlgAkA5fZEaaY93x7PKljW%2FWavOlgdPhDTQyBI86KvgowcF2Gshss8lo7j4L4FrGaJvPRMqA5OGOXtCrRde6o51tUsPsaV%2FIfGD27XCQn1AlGHEhTCMh5jeh1OTgt%2F77LsFpiJTrlIBDYchZI%2FiTRxWwbDalz3qKkmEO%2FzgKPr7t4PyZ936o6PLQgemxm3ZSiSjd1T3Z2qC7J0OZORfppKs9ef3f3ZAEyE6694GHW0IhpZ3fwo8uN37ei7F1iKVdaK3RaL%2F84YVJIbE8EdNSKoO%2BZIRn3yN42JrYk2FWBg4PirQ9ZTnvQ5qE7Zu%2F7w4ka%2FlijAvjr8PbIPRcnQPVpiQ9lZRwoJsz190mw%2Fo9ll9MF2DueB25U47R1qHUdvPVPTapcqQp76w5ufAxcPbjrHVOZMLpUUm4np24pTm6jystJZlaL7ueU502X9B4VpwmnRlVwZ4dPfiy6J77y%2BWYdQfGqtgZ2Ma4tzhA0%2FKFWu2rPAdg6ZJyxCrRMlUA%2BFXYcRUwhZzfObGD5q0pXd8wqOgYCKoreYowj7HywAY6pgHA7qT1YbJg0NfsJMGBvkxPGXbyxM4WJgk03NO%2BxPqw1ZiPA3sHCAAVns4JgiskPYhxXOBBw9Xk91zStzmZvRD%2F1AltFX9oM%2FVzFprGuHsE6CZkOkuGjztB%2B3JVc7ykrbq66n4Dgr3QFk4lg7Fma%2FwIMf7t3xOW2mx5m%2F6R%2FJFh5o4RiGz%2FUnjr0K0ilPhplQNQvh9bIVwKNtlf0wQXoev8Dx59oMjb&X-Amz-Signature=85d4c3e08695f7cce714fd69d294182e235d0db888db8592a7e2e4edff65675f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
