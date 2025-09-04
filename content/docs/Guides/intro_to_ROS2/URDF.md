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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKYDMAZ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUoQTX3WiuTlN%2FHviyio14gIQO%2FXKV4cOKEXPSdBL%2BAIgeHrwIPdPcRKQLbY%2FLw2M1tYQqSKL5tQMXyhCn%2BsYdNMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDISlVGYbQR%2BsdjdvuCrcAwgGHCLrTqksi2Dzl4WtqmdCHLIK7WdLTIseVShFww%2BB28LrZ1rLlemlPMDf7Vw5l9SnxGyr0Z%2FOoVWZ2gcFHXwDLouEQx3Kv%2FSVc8RDS5CfkBQimLMaxGoH7kB6dUVLV4LXDjdZSAmHnUN%2FhOP4L73B5pSmzGm9otygGxBMfX8UIlKjrD1pPkdQT0hxfc173KFkhQUZO5n%2BHHIPTfQY3P2E9zPuVBWjQKwo7cvnRgdGdaGBa8c4UZW%2FAerSmsKTlY49i1mUgoJ0hp6T6IFEv%2FfdkaDcag%2BM%2FvwGM1ERESgdA2UvZ%2BtouE1%2BkgZmYbETkwtaDgTNExcklL5LecCfk2XcBin5zNaDsMdMmpP9BcZXhUpTsfXwUbx6dasolvEfvZN8QXyU0mbmqCKbEEjqKj8ixa2Ve7OKJtjiS55iccMQtoPFPGxbk%2BFNF1i9uBZmZNDhQTx%2Bv2LfpYVB5YZvXqmVGoF0HD1d5tAAbZcLqJqfVLsUP0L26OYNdMwlyZWhFPVVCkBFnWsg0l8L3CxogP7kyyr310KTYMo4byiz0nL0FDRESF7zY3LTwloNicBCfXMjbTVNsSKoGu0%2Bw3EcpJyCAKGDmVK7gtnu8RHVvtY2qr5TUH3rDbGR8AC1MJu148UGOqUBmWq1jvIFadM5npdbHHbE9kQe3ran80VErT4%2BguX7XEyWbQeULshveSV6pvcZ8%2FZYpZttbKVwnQVjA7N2ahkiTSrnbcmAzo%2FlStGOfFLMwitBJ7gVLzYAv8zxjtvczi2Ejzd7nk2Q%2FMfC1CPrYyaH3BYg517x12acRFBJG4HTzyjxYYJx1Nm89p6YLjF9iqGudWCd5N35mKEPwnG3nwbirTmPzepn&X-Amz-Signature=a8f79fdb990ffdcf8e00c0a7398043dcc51dcb2b202a2157a5b2d41f5ff043bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VKYDMAZ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUUoQTX3WiuTlN%2FHviyio14gIQO%2FXKV4cOKEXPSdBL%2BAIgeHrwIPdPcRKQLbY%2FLw2M1tYQqSKL5tQMXyhCn%2BsYdNMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDISlVGYbQR%2BsdjdvuCrcAwgGHCLrTqksi2Dzl4WtqmdCHLIK7WdLTIseVShFww%2BB28LrZ1rLlemlPMDf7Vw5l9SnxGyr0Z%2FOoVWZ2gcFHXwDLouEQx3Kv%2FSVc8RDS5CfkBQimLMaxGoH7kB6dUVLV4LXDjdZSAmHnUN%2FhOP4L73B5pSmzGm9otygGxBMfX8UIlKjrD1pPkdQT0hxfc173KFkhQUZO5n%2BHHIPTfQY3P2E9zPuVBWjQKwo7cvnRgdGdaGBa8c4UZW%2FAerSmsKTlY49i1mUgoJ0hp6T6IFEv%2FfdkaDcag%2BM%2FvwGM1ERESgdA2UvZ%2BtouE1%2BkgZmYbETkwtaDgTNExcklL5LecCfk2XcBin5zNaDsMdMmpP9BcZXhUpTsfXwUbx6dasolvEfvZN8QXyU0mbmqCKbEEjqKj8ixa2Ve7OKJtjiS55iccMQtoPFPGxbk%2BFNF1i9uBZmZNDhQTx%2Bv2LfpYVB5YZvXqmVGoF0HD1d5tAAbZcLqJqfVLsUP0L26OYNdMwlyZWhFPVVCkBFnWsg0l8L3CxogP7kyyr310KTYMo4byiz0nL0FDRESF7zY3LTwloNicBCfXMjbTVNsSKoGu0%2Bw3EcpJyCAKGDmVK7gtnu8RHVvtY2qr5TUH3rDbGR8AC1MJu148UGOqUBmWq1jvIFadM5npdbHHbE9kQe3ran80VErT4%2BguX7XEyWbQeULshveSV6pvcZ8%2FZYpZttbKVwnQVjA7N2ahkiTSrnbcmAzo%2FlStGOfFLMwitBJ7gVLzYAv8zxjtvczi2Ejzd7nk2Q%2FMfC1CPrYyaH3BYg517x12acRFBJG4HTzyjxYYJx1Nm89p6YLjF9iqGudWCd5N35mKEPwnG3nwbirTmPzepn&X-Amz-Signature=af70045f530ed21e68e1c118447ea12d96c172d991ccd82a760ac13aab511d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
