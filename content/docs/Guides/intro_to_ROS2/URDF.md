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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NJGF4Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIExhfN51X8X1YyFXt7XgIcclTy4yTlsRc6tKBSntGAygAiEA5cwcXlpOz75eEys9dH2TMmapZedjCsREV7PgPCZw7Eoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAU63TV0OKS7AiEwCyrcA8YDcu9dlTwLW2pih4CYCVrK5Zabexgqzf1j4M0w2xbi0qqt3i1H4y5V6W8T1FMwkPRLu61y5DGP%2F0bHnRDnubntI6FVJPq0NmkgaYpu3ScprgbjQe0omWMRTkRPr1%2F46hBP3FgtU8aI2RAQ8epotA4FbqvvVAHAvtLe4I%2B0uFFF%2F8%2BE7sN7v7ADEiItUKHWSJWSmJloD9eGEJb8ZVBVysO4L1lupzULvGRDM8wh7fPzLoUc5jl7pWT14FiPYJuaP123bNCLWDQqJiCBbB2nVi2Z1QiLpBrSb%2F6%2FIMEtGRh1p1gsw4TzYkFz08rHjhPpJrQ6BwP7Ip9G5angrkvhUyCCz6PiA63g6k6Q5t04y7SNGKf0Jz1ZE9bJYtxkThUBspO5iWqim01CO85sGT09AZsDQ57HF3%2BMdR6GwclUpp0i9WllWjrGsNErRSTCnuqSL5zDzDYrFNFZTZ52VIKaCLRMzC0UeDULEGeafPV3N7mq2DtrU2BiP%2B5ODBnNuXwtUEzDDIAbV%2FyqAf%2BGGm2TB1xi%2FuduLzfDKn6%2BKwAPRRoo8aESG6ft1xHjcUr7h5YkYuh5rzEPCcp4KbXP%2BBgu6Tgd9oQr7%2FiwJt4gSBoRlPAYnZy%2FvWTOZ9db8uILMIXLy8QGOqUBFWjA3ad1%2FlzZfjNiWvSFB8MLxvpoGzKZPnHru7hF%2BlisBOaeQkPdLl%2BNVykginnwQewVh0%2BkcJQUDF%2Bsxi0qif2piwJJhAlTjWeN%2FstRmWftUKfkSRZXfMdr%2FwwLfUc2n2%2FbCa8QVQKRY32O3ndF3PZrknBo3nUjmv00vHJ3HkV6m8iaR9I4oZP87agz4%2BBHP1aEcU0tYz6VxqaPUD2p9cnQaWL6&X-Amz-Signature=d80831b4dabdf3dfc324a2e8ee1078417e0a317a59ca8f4329fcf7d16db8acc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NJGF4Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIExhfN51X8X1YyFXt7XgIcclTy4yTlsRc6tKBSntGAygAiEA5cwcXlpOz75eEys9dH2TMmapZedjCsREV7PgPCZw7Eoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDAU63TV0OKS7AiEwCyrcA8YDcu9dlTwLW2pih4CYCVrK5Zabexgqzf1j4M0w2xbi0qqt3i1H4y5V6W8T1FMwkPRLu61y5DGP%2F0bHnRDnubntI6FVJPq0NmkgaYpu3ScprgbjQe0omWMRTkRPr1%2F46hBP3FgtU8aI2RAQ8epotA4FbqvvVAHAvtLe4I%2B0uFFF%2F8%2BE7sN7v7ADEiItUKHWSJWSmJloD9eGEJb8ZVBVysO4L1lupzULvGRDM8wh7fPzLoUc5jl7pWT14FiPYJuaP123bNCLWDQqJiCBbB2nVi2Z1QiLpBrSb%2F6%2FIMEtGRh1p1gsw4TzYkFz08rHjhPpJrQ6BwP7Ip9G5angrkvhUyCCz6PiA63g6k6Q5t04y7SNGKf0Jz1ZE9bJYtxkThUBspO5iWqim01CO85sGT09AZsDQ57HF3%2BMdR6GwclUpp0i9WllWjrGsNErRSTCnuqSL5zDzDYrFNFZTZ52VIKaCLRMzC0UeDULEGeafPV3N7mq2DtrU2BiP%2B5ODBnNuXwtUEzDDIAbV%2FyqAf%2BGGm2TB1xi%2FuduLzfDKn6%2BKwAPRRoo8aESG6ft1xHjcUr7h5YkYuh5rzEPCcp4KbXP%2BBgu6Tgd9oQr7%2FiwJt4gSBoRlPAYnZy%2FvWTOZ9db8uILMIXLy8QGOqUBFWjA3ad1%2FlzZfjNiWvSFB8MLxvpoGzKZPnHru7hF%2BlisBOaeQkPdLl%2BNVykginnwQewVh0%2BkcJQUDF%2Bsxi0qif2piwJJhAlTjWeN%2FstRmWftUKfkSRZXfMdr%2FwwLfUc2n2%2FbCa8QVQKRY32O3ndF3PZrknBo3nUjmv00vHJ3HkV6m8iaR9I4oZP87agz4%2BBHP1aEcU0tYz6VxqaPUD2p9cnQaWL6&X-Amz-Signature=e0a87f87819ef0207b655c78cffed075507128bcfc45f7070f38da3cdcd5273a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
