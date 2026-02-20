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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDVX46N%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeuzWRhSU7WU1N%2B6GU24dfhQrThN3gX02n8Dz%2FHHpVTAiEAmIp5egZ11ui9BDhqBBngX8%2BubSVSfhgNI867BR29qjEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhuRJ%2BPwqWWWKVExSrcAwRWc%2BeaIZ9WMWyFriBdHEyu6hu5Xi%2BZ4KZDUBL6Y8LvUDT36%2B18t8AYZ5%2BN8Zqe%2BUn7gcU7nqNf6bg7Ldt003q6m99dlxek%2BruVLUjNaDFI%2B8WEKmxl9ENCIxDJL%2BlkBBeV%2BQrE6fD3GrTQs%2FxLun%2BpbsMVPmhXrloTecT6WaseBDjJEBFj9nSw9tgVG%2FDNcuVycC%2FUF%2BkinbdEksLUMfz7Ye7udWIwlquIgpFVRn70uN3o0jt0lr6AW7ZHbrHt43gKxmWp6dQwlbgrCU24hCipmtNrEizeGX0zBRPVe4sAH%2Bkd%2FS7s2N%2FokayfzQdihx9Ea3ji5Ks8VihhhZNCeLMeXI9OQ%2B6z0UZczDtcPxMnCwmrCb37WRiyKKzYZ8eT%2FYFGFO%2BJJYHbXAZCH1evkdLlP85Ls6z5Ikd3tLchF0uvJT5RF22ae0XOz%2FXsVLnQzghgPcqXEtfb9mmibEBsJR%2B1BacOc6fWJgU%2BPCAIXhuW7ZOPRMqtqBPQMk3FTgApCpCqzLXbQkbcIAcKkAI5hFDJwVCQOiwJ2zbE2zb7x4HeVfj%2FWvFW8xCgFiEaGsDj6ga%2BTJTEvFi9h%2BGzIL3lVYDXSX9rDIoSZWheuMCZyg3fqFAewOzH4GVKd1izMI3o3swGOqUBOfPcnshRGLVR9KvAg92czaxq2fVBZQcxr0u%2F8Y6KE6rH%2FVKFbeFhHMVt1q8ZFZsuPC6jJ9wMsm4gEm4bxInrmb%2F4NShekjdZWh5D2Jmj%2BgdUuLGey76Emtbr%2BG37SemMRZoC0iLSynqfZtrcblI2TBnBVpNdsuD99s%2Fad47%2FY%2FwGKEKPlOl4K%2FCm31ZkBrYG4pHc8RNt39BsHY6J2Db1n4%2FqKj05&X-Amz-Signature=0216088c2b1c3fc806d97b2005458d858888b6fa876cc0a21b10998a0bce7a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDVX46N%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeuzWRhSU7WU1N%2B6GU24dfhQrThN3gX02n8Dz%2FHHpVTAiEAmIp5egZ11ui9BDhqBBngX8%2BubSVSfhgNI867BR29qjEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhuRJ%2BPwqWWWKVExSrcAwRWc%2BeaIZ9WMWyFriBdHEyu6hu5Xi%2BZ4KZDUBL6Y8LvUDT36%2B18t8AYZ5%2BN8Zqe%2BUn7gcU7nqNf6bg7Ldt003q6m99dlxek%2BruVLUjNaDFI%2B8WEKmxl9ENCIxDJL%2BlkBBeV%2BQrE6fD3GrTQs%2FxLun%2BpbsMVPmhXrloTecT6WaseBDjJEBFj9nSw9tgVG%2FDNcuVycC%2FUF%2BkinbdEksLUMfz7Ye7udWIwlquIgpFVRn70uN3o0jt0lr6AW7ZHbrHt43gKxmWp6dQwlbgrCU24hCipmtNrEizeGX0zBRPVe4sAH%2Bkd%2FS7s2N%2FokayfzQdihx9Ea3ji5Ks8VihhhZNCeLMeXI9OQ%2B6z0UZczDtcPxMnCwmrCb37WRiyKKzYZ8eT%2FYFGFO%2BJJYHbXAZCH1evkdLlP85Ls6z5Ikd3tLchF0uvJT5RF22ae0XOz%2FXsVLnQzghgPcqXEtfb9mmibEBsJR%2B1BacOc6fWJgU%2BPCAIXhuW7ZOPRMqtqBPQMk3FTgApCpCqzLXbQkbcIAcKkAI5hFDJwVCQOiwJ2zbE2zb7x4HeVfj%2FWvFW8xCgFiEaGsDj6ga%2BTJTEvFi9h%2BGzIL3lVYDXSX9rDIoSZWheuMCZyg3fqFAewOzH4GVKd1izMI3o3swGOqUBOfPcnshRGLVR9KvAg92czaxq2fVBZQcxr0u%2F8Y6KE6rH%2FVKFbeFhHMVt1q8ZFZsuPC6jJ9wMsm4gEm4bxInrmb%2F4NShekjdZWh5D2Jmj%2BgdUuLGey76Emtbr%2BG37SemMRZoC0iLSynqfZtrcblI2TBnBVpNdsuD99s%2Fad47%2FY%2FwGKEKPlOl4K%2FCm31ZkBrYG4pHc8RNt39BsHY6J2Db1n4%2FqKj05&X-Amz-Signature=04300d2cf199e9a915a95e141c1d4924b6fa51f8fd86965799669f8e8d05c14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
