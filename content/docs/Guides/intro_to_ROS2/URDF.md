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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BPJ6J4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDMYalS%2FuZHwif2Oom6l5trsVPJa2XjHPdPEO63nUOQQAiEA%2FxN3d3reTt%2FEkUtDQhUNBW%2FhjaONfM5bJuX4nQ%2FEfW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOlsLt7565RZ2YDWnCrcA2UA3FtMRVmcfolWyJBnw8hCuavGZCyqjfmgBRwK7e1ehb89vl6kyhgHBfhxMan8SFZNiPxfFUypEaYtw7jxqYkU7sJa%2B7i5IY96a1uxoq4cUTLsOkILQZCyc5EkgfuwuNA9caBygV3LQNHMnqgQth37WYlefqkviNn0zy6UTZqR%2FBoch7pEQThsFGQx37F%2BFzdmnZ3IaWLDDu0MJ9NhlIvszRt4oi3GSuzaGrDx211uMkqY3NHpOiGugwXk997ss4SCCxPt06Jfx82PKj%2BKuNOwAyPnCMSkkdYwN5JPBLq3csVshp4h5Pg4Dy8YP2e8UfrAmV6ryPwgh1mCJeU%2BYFst077C9E%2F4iZPv70MiL2rpNn%2FMXVPZxyLJ7gZLYulKLNNoF3SF3%2Fr1ABrvKG7hBFHWhi%2Fmjng9kW5xeOMEcRcu3AR5M%2Bv5%2FN2iWY%2BvWJTFYs%2BdPx3pDNPafrLizKIZiUuGU9YZvAHqshIlrGE8vXsbTBzTy9Ob%2FewJck0R%2BDLWP9tIp6oSTqHlek5WQiBOXn%2BwstTIrtKAkUh9SmzRXDfwCzoG1d1LFVjdm9kk3rx0RYVzVR52O5ly1wQeEHiOE4kjWK8OfG95age5w1aieY%2FabnjOBO4Rb1VxVXxFMNeyrcMGOqUBJP8huMu1SWU6wygcXn1nlWHGbAmpS2RIpH3um04SY3QSiJ%2BYSVFtwm%2B%2BJiXkBtCLYVxRlCaKkJy2LmgTlFCfvsBpVh46WeMysnXirgC5u8iVBKbaidQEXTXJeHNu97jdBsC4%2B91SMI1xOjvIPgPasF7j1beFG2yLA4e1167VMnJu0FHhI5rqhai38Vi8s%2BJNl5TQ1d3q5ikSf7s3wn%2Bzt%2Bq43PxZ&X-Amz-Signature=03a257b9da7dbeec4fadd1d53da8d2b643d060e8ce021796418751d53d3c8a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634BPJ6J4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDMYalS%2FuZHwif2Oom6l5trsVPJa2XjHPdPEO63nUOQQAiEA%2FxN3d3reTt%2FEkUtDQhUNBW%2FhjaONfM5bJuX4nQ%2FEfW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOlsLt7565RZ2YDWnCrcA2UA3FtMRVmcfolWyJBnw8hCuavGZCyqjfmgBRwK7e1ehb89vl6kyhgHBfhxMan8SFZNiPxfFUypEaYtw7jxqYkU7sJa%2B7i5IY96a1uxoq4cUTLsOkILQZCyc5EkgfuwuNA9caBygV3LQNHMnqgQth37WYlefqkviNn0zy6UTZqR%2FBoch7pEQThsFGQx37F%2BFzdmnZ3IaWLDDu0MJ9NhlIvszRt4oi3GSuzaGrDx211uMkqY3NHpOiGugwXk997ss4SCCxPt06Jfx82PKj%2BKuNOwAyPnCMSkkdYwN5JPBLq3csVshp4h5Pg4Dy8YP2e8UfrAmV6ryPwgh1mCJeU%2BYFst077C9E%2F4iZPv70MiL2rpNn%2FMXVPZxyLJ7gZLYulKLNNoF3SF3%2Fr1ABrvKG7hBFHWhi%2Fmjng9kW5xeOMEcRcu3AR5M%2Bv5%2FN2iWY%2BvWJTFYs%2BdPx3pDNPafrLizKIZiUuGU9YZvAHqshIlrGE8vXsbTBzTy9Ob%2FewJck0R%2BDLWP9tIp6oSTqHlek5WQiBOXn%2BwstTIrtKAkUh9SmzRXDfwCzoG1d1LFVjdm9kk3rx0RYVzVR52O5ly1wQeEHiOE4kjWK8OfG95age5w1aieY%2FabnjOBO4Rb1VxVXxFMNeyrcMGOqUBJP8huMu1SWU6wygcXn1nlWHGbAmpS2RIpH3um04SY3QSiJ%2BYSVFtwm%2B%2BJiXkBtCLYVxRlCaKkJy2LmgTlFCfvsBpVh46WeMysnXirgC5u8iVBKbaidQEXTXJeHNu97jdBsC4%2B91SMI1xOjvIPgPasF7j1beFG2yLA4e1167VMnJu0FHhI5rqhai38Vi8s%2BJNl5TQ1d3q5ikSf7s3wn%2Bzt%2Bq43PxZ&X-Amz-Signature=a2dbc7ea2cf368598382f50dc8cd795308e29162c0b94e359ebac43a772ae040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
