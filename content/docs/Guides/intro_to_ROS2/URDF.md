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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWSA3EZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6VrYBIc2eU00rVqzPQe0ZoscTVV%2BTCbUEDSvTOX1DFAiEAlGUVJlkG1qehq8rwXjUcM0Kf9cfiWLHpjrxoCQTjBw0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbg%2FgOJEjgvs3bCVCrcAyHgE2Xv2jS%2F%2BwbpHiH4%2FsCgYfjZ9fVHSDYs92qo7%2FxB0coHOidGWXc5D2khUbb0OjY73u0OruTauFaJnRQkLWdOEYHAOpnN8v8kEMVcWb3cpKERPkQHkpe3lEpf8svnX%2FL81gy9i60jVtk0iln5ENTYQGQiv0CIqFE7ki3Od1apC2cz4MftLYYTOUUiS5RAySU4Eh%2FcZ9XELMYWDbk%2Fi0dTBPc6PvntO7F%2FmnW%2Fdw6Lnfq4gahV5DCOK0A0DAh82QVXPYhbJNdALT7EUXGRtZV2g5YbvkoAJy%2FcSHevDMiMTssNf5uNLeor6saA9iEr39BMezMtHScFj8usGqtQsC2be5RYmpq9npY7tNl6QUpD2u9JBP20xmbSNhwMrwSQQPPHWEmJ3ttLvKs8Wk4UuJOpklM6pxws4rsG3AiYwPh4lTlcOFNBzrFOwEHYvpg4qQ7fAOSnaRX3vC8Uzbuul70KlxY8nt3C%2Bxnk%2B93h5fNXA0XJycL3gbaCYc3LuAsXAQy81YBo3IZ4IyfM3kF%2BksSafW75zYqzM6QSMuowC%2Fi2mDEz2beHyIlqN2wY%2FDJQ9m5E%2FSNCuBVgcOcPYifcnDzaLIVPuK1aAqvjLFC1Vn%2FOzM5TFoZ87VGg1x7oMP%2BY4sQGOqUBQmxRLcHxnsUEKQZxuJJoo9viKm7tS3ACwrf8Vpar1aWrsQ6EJyLC5xIOCwZ1e4SxOHPZ%2BFpc0sZgJUivZVATBgQ7gZ%2Budo76%2BKmDhFYMtNRp4xulOdxLCTggW8MYHKXCBGFtGRGtJqngX1Pztu1fKvWRhtZsP726n%2FevDwQ0PYHHXl%2F7Fyy8kXSvh7MO8PZmYfn5QNRE3PAWZXm7JYgxuRTDhCxO&X-Amz-Signature=c345064e72118f94aaedcaa1ca9ae47d74c7c267ff89c0a1f5e0a5bf61fe5c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWSA3EZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6VrYBIc2eU00rVqzPQe0ZoscTVV%2BTCbUEDSvTOX1DFAiEAlGUVJlkG1qehq8rwXjUcM0Kf9cfiWLHpjrxoCQTjBw0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbg%2FgOJEjgvs3bCVCrcAyHgE2Xv2jS%2F%2BwbpHiH4%2FsCgYfjZ9fVHSDYs92qo7%2FxB0coHOidGWXc5D2khUbb0OjY73u0OruTauFaJnRQkLWdOEYHAOpnN8v8kEMVcWb3cpKERPkQHkpe3lEpf8svnX%2FL81gy9i60jVtk0iln5ENTYQGQiv0CIqFE7ki3Od1apC2cz4MftLYYTOUUiS5RAySU4Eh%2FcZ9XELMYWDbk%2Fi0dTBPc6PvntO7F%2FmnW%2Fdw6Lnfq4gahV5DCOK0A0DAh82QVXPYhbJNdALT7EUXGRtZV2g5YbvkoAJy%2FcSHevDMiMTssNf5uNLeor6saA9iEr39BMezMtHScFj8usGqtQsC2be5RYmpq9npY7tNl6QUpD2u9JBP20xmbSNhwMrwSQQPPHWEmJ3ttLvKs8Wk4UuJOpklM6pxws4rsG3AiYwPh4lTlcOFNBzrFOwEHYvpg4qQ7fAOSnaRX3vC8Uzbuul70KlxY8nt3C%2Bxnk%2B93h5fNXA0XJycL3gbaCYc3LuAsXAQy81YBo3IZ4IyfM3kF%2BksSafW75zYqzM6QSMuowC%2Fi2mDEz2beHyIlqN2wY%2FDJQ9m5E%2FSNCuBVgcOcPYifcnDzaLIVPuK1aAqvjLFC1Vn%2FOzM5TFoZ87VGg1x7oMP%2BY4sQGOqUBQmxRLcHxnsUEKQZxuJJoo9viKm7tS3ACwrf8Vpar1aWrsQ6EJyLC5xIOCwZ1e4SxOHPZ%2BFpc0sZgJUivZVATBgQ7gZ%2Budo76%2BKmDhFYMtNRp4xulOdxLCTggW8MYHKXCBGFtGRGtJqngX1Pztu1fKvWRhtZsP726n%2FevDwQ0PYHHXl%2F7Fyy8kXSvh7MO8PZmYfn5QNRE3PAWZXm7JYgxuRTDhCxO&X-Amz-Signature=6c30829aa615cd2102b2c26ad2ebbc98bf0798dd099c3ef445efc5f4ff972533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
