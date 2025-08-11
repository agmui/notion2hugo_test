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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BUGWXPL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsD%2FTcWXFVDcsLSudhh1wKeoCjSvkKwgv8boieJpWsEAiEA%2BPcjQeuoUGvgFZ4nluha1248ReUN3z5HGGsRtJVIrc8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYMFgYfVucz%2FGGiOircA7qAM7xEQnqaWlXnjaRDNpsGEcQ7vCRs9cOwV79npFW6j5P1ahcVdcVOCXJA%2BM%2FAoTtER3XJdfPNJXLpFNlQhaAiFkvCjgbCtH4eAROO5CEMhw7hvRxbc4SnxhBYJEl8j7%2BJnw0afpQOkrD8DLMhzWQsGwe16HKrCTGM3ld9a2662I3tOiu5yxNH5hc207NPFNTxmYMNYTNFkKXZaZqG0Ylvr39PpKVPaZXslck2734f1oXVW1J9QxBC8wFiMCVhyWq0yIifG9b1NtucfarxTbVS4MQUyNS7ZXoNty7x7qJ4%2FsQoDt1sAPt1tzYUHB%2FMhXx1wCJa1K9XqZ5r%2B%2FvNyhUUBDMVBReUJLh5W%2B94c4SdPXHyAPGlTG9iJdoJJOBU8RIOT%2Fb8h%2F2rDUkIV1u4rS7C6znizv4%2BZ2cjuiZNNEN09HZcSX2DVsepjHCv2PVP2Wx9nQaBr1jW0ub%2FLRNt5MP%2FTruw3PDRmtNZxgMo80AjMpz3ngQ4E9h95hK5YugvH5SZHbpp3ddwGcwh%2Ba44hFrdrT2D1OITv%2F6Y0XxVic6tJmKhPNd0kU4g8bEZ%2Fp6KZrp81ggdelsmQQNzWZeje6SFauLk2QmY%2BRTXeiy8ieu717liCgA5cMYKLwJ%2FMK6e5cQGOqUBUKIkuhMflF3gCN0LDpVMbKliIEcmcTEXC94fkYOS6NqJ0vCIAIBjSm8lVJyA%2B7AgXIEhSxJBDc6IJvHh2SV%2FYfC5a3DlojWVOxZNDD%2FOm6iajyYoPxxqJj0SdVgGqzrzg8JijxYCKoIFvGw8pwgaeBVIKYwASnKJybh%2BtN4EYplT6jgRaovxyiT3QUYsFNzZf1hxngJq%2B9DrvmzD6NM1KyXWgQ9l&X-Amz-Signature=aa818b0d458418ec5392872a492da393d9bb3568793cf994eff0e388e90cf3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BUGWXPL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsD%2FTcWXFVDcsLSudhh1wKeoCjSvkKwgv8boieJpWsEAiEA%2BPcjQeuoUGvgFZ4nluha1248ReUN3z5HGGsRtJVIrc8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYMFgYfVucz%2FGGiOircA7qAM7xEQnqaWlXnjaRDNpsGEcQ7vCRs9cOwV79npFW6j5P1ahcVdcVOCXJA%2BM%2FAoTtER3XJdfPNJXLpFNlQhaAiFkvCjgbCtH4eAROO5CEMhw7hvRxbc4SnxhBYJEl8j7%2BJnw0afpQOkrD8DLMhzWQsGwe16HKrCTGM3ld9a2662I3tOiu5yxNH5hc207NPFNTxmYMNYTNFkKXZaZqG0Ylvr39PpKVPaZXslck2734f1oXVW1J9QxBC8wFiMCVhyWq0yIifG9b1NtucfarxTbVS4MQUyNS7ZXoNty7x7qJ4%2FsQoDt1sAPt1tzYUHB%2FMhXx1wCJa1K9XqZ5r%2B%2FvNyhUUBDMVBReUJLh5W%2B94c4SdPXHyAPGlTG9iJdoJJOBU8RIOT%2Fb8h%2F2rDUkIV1u4rS7C6znizv4%2BZ2cjuiZNNEN09HZcSX2DVsepjHCv2PVP2Wx9nQaBr1jW0ub%2FLRNt5MP%2FTruw3PDRmtNZxgMo80AjMpz3ngQ4E9h95hK5YugvH5SZHbpp3ddwGcwh%2Ba44hFrdrT2D1OITv%2F6Y0XxVic6tJmKhPNd0kU4g8bEZ%2Fp6KZrp81ggdelsmQQNzWZeje6SFauLk2QmY%2BRTXeiy8ieu717liCgA5cMYKLwJ%2FMK6e5cQGOqUBUKIkuhMflF3gCN0LDpVMbKliIEcmcTEXC94fkYOS6NqJ0vCIAIBjSm8lVJyA%2B7AgXIEhSxJBDc6IJvHh2SV%2FYfC5a3DlojWVOxZNDD%2FOm6iajyYoPxxqJj0SdVgGqzrzg8JijxYCKoIFvGw8pwgaeBVIKYwASnKJybh%2BtN4EYplT6jgRaovxyiT3QUYsFNzZf1hxngJq%2B9DrvmzD6NM1KyXWgQ9l&X-Amz-Signature=f359dfa70c0e64ea5c0d3810e8a48ba19f091c53e2c84b8b344a01594af5b8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
