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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7CMFBO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpgcpKZHXQJHhF35RlMQF8nUYT%2BNsQG7DJSENYtsoowAiAGFjCP4d0tacc%2F48Kr6yS%2F%2BJxS17LZSF6nt%2B5UF2mjBCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAUNiLV1xIcxrSvHlKtwDwka9R24X%2FV8fd5RRg%2BUh0sNX5fyhApQ3hSgyWpSjK%2BAPjnzI7DYU2kPPKVyAn5AbYpGZGEGPu%2Bvuae2kj4yEtG3x%2B6lhUahxws3kdtYhEqKXTGQbSrEspEye8%2FEe1Q%2F9YrotCLpUAeOmxJz96aABNupEyPuIj4kQQoVPFu1il4aUbKyTZK2VFe%2FF%2FQsGwHnhuDG7j0FjlhjCyvHt4ocq5tmEpKuVCWT1DweMdV252Cs%2FjQx%2BTgvUMBNha0cQO18yJGx9RL31WOZ3O4mOBFoFS769POzgcH4vXH5Aydf89tWGIpoISh2MjmHuBc%2FAFK9S4UDpqSth%2FcD%2B6q9mR8G6N4EUlWfOjrpk5I6wFBuHQQyQ0VLq6D0CtZZqMvPS%2F6MkLQxOaJmddPIJA7EM6YgcNLwgUlpclxMMSP9wtxDeBl8vA%2F8BkdisgpdbI1quZ0KmMpIW461aJKogC1%2Bf2892O5Yueb0EdwV3Hw%2Fgh2dy0%2FhyH%2FrghRn12prImqDOcXk4OMJWXWOgcH5Pn536Of4%2FWb36mP%2BmnAzYrOHn62ti3XsdW11dkGMeF%2BrdK4e5H4TSy%2ByFMPHTFcIXzLf7gu4ctrAqeNraNcw9iIQubU5YomU5rSrFAqhySST36OAwiaCfwQY6pgENStDJRWam2gku3pZW55AIK8WT3t9E6qutFlMCNsTDqrYGQKQxMd8mamN%2FWX0k%2BAIinnxtmpCJw9mnnLDWx8L2Y4%2Bw9z8b0y6n31LHneXH1Cji8A0Z7FEQ9ht8Cssf5g3qfiy%2FKE4XeYXAPHGWxIvQNGc2mmTdIhzFLpr6zSvN%2FbgRO8aS058VGy6Bk9G11xTM4t9Dk4zNWlREt4WX%2B%2BzRCvCktAnr&X-Amz-Signature=c4fe440d95e7b16415b8e6b80be4430475c5845fe48a9ab944e9c1b3ecadea0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7CMFBO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpgcpKZHXQJHhF35RlMQF8nUYT%2BNsQG7DJSENYtsoowAiAGFjCP4d0tacc%2F48Kr6yS%2F%2BJxS17LZSF6nt%2B5UF2mjBCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAUNiLV1xIcxrSvHlKtwDwka9R24X%2FV8fd5RRg%2BUh0sNX5fyhApQ3hSgyWpSjK%2BAPjnzI7DYU2kPPKVyAn5AbYpGZGEGPu%2Bvuae2kj4yEtG3x%2B6lhUahxws3kdtYhEqKXTGQbSrEspEye8%2FEe1Q%2F9YrotCLpUAeOmxJz96aABNupEyPuIj4kQQoVPFu1il4aUbKyTZK2VFe%2FF%2FQsGwHnhuDG7j0FjlhjCyvHt4ocq5tmEpKuVCWT1DweMdV252Cs%2FjQx%2BTgvUMBNha0cQO18yJGx9RL31WOZ3O4mOBFoFS769POzgcH4vXH5Aydf89tWGIpoISh2MjmHuBc%2FAFK9S4UDpqSth%2FcD%2B6q9mR8G6N4EUlWfOjrpk5I6wFBuHQQyQ0VLq6D0CtZZqMvPS%2F6MkLQxOaJmddPIJA7EM6YgcNLwgUlpclxMMSP9wtxDeBl8vA%2F8BkdisgpdbI1quZ0KmMpIW461aJKogC1%2Bf2892O5Yueb0EdwV3Hw%2Fgh2dy0%2FhyH%2FrghRn12prImqDOcXk4OMJWXWOgcH5Pn536Of4%2FWb36mP%2BmnAzYrOHn62ti3XsdW11dkGMeF%2BrdK4e5H4TSy%2ByFMPHTFcIXzLf7gu4ctrAqeNraNcw9iIQubU5YomU5rSrFAqhySST36OAwiaCfwQY6pgENStDJRWam2gku3pZW55AIK8WT3t9E6qutFlMCNsTDqrYGQKQxMd8mamN%2FWX0k%2BAIinnxtmpCJw9mnnLDWx8L2Y4%2Bw9z8b0y6n31LHneXH1Cji8A0Z7FEQ9ht8Cssf5g3qfiy%2FKE4XeYXAPHGWxIvQNGc2mmTdIhzFLpr6zSvN%2FbgRO8aS058VGy6Bk9G11xTM4t9Dk4zNWlREt4WX%2B%2BzRCvCktAnr&X-Amz-Signature=446f86d2ddf315ed444443329f3d8ff2c151ff5f445bb300b1aa0faed15d5de0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
