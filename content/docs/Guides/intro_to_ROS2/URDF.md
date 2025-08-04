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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOYQRRE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDZwh1Gy8MJOR4QcntykFQUEchVc2TzpU%2BTPyrWgbmCqAiBC5XdM4UI920Gf3zylbLEQrrom86TRXNpGabRMl%2Bv%2FKyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7Z1OShIelpbgpdoZKtwDtRcBW%2FRuesNWQAEgaEOdBaYZW8myvHkA%2FqwQLJlliL0zCQkXlTiZsx4ycdtHESXtMTGJ8fYCs5uJLE0O2Tu9LBjWKv3FHGMJeAxaiomxhdGh23yYPdk3R30pWqeviFHoUT1bHcJp05tcOlSA1dLeVhMqxPvaHp9qcPqAAoQoQQ8cG8bsmTHF4THy9k8nir7J5g7k9e1yvsc7oPUV4Rloebf2ERFoPm0YHv2BDFQ3CACNopJCesFivT1TZVSMvh9vAIAps4M5nYfdwSvHnrMqKDVhAo7JuKgjnfT2h%2FkoCoxwWX3SyeWrwm%2FwVrnnSuYbTg%2F6h07rShFtVIDbOlGvGVjoImyY8iFEuG7rTSVQh2dICE5uXc6m0WCzyA0lGCjTeY6wbrLZByHF9DMEcBhXyEpq8%2BjT%2FqHRWV4yH1wnUQZ6tfuOS%2FZ4RGSpt%2BUwHNqxoOJyaxq0TT1Yj0wiUX0ECmddIxIYooIDwslmP487CxYIoUvvUvgh94bc8qjB2WOACC3RLZ21k2lUnlVUd%2FCbwI8K7eVweEHsuP5sYl17FJ746nqIvUCsc7Wk13A%2BkAiHrRgZC4Ica9XEOzxHFW6xfSZTfvP%2BgToBaH9vVAlTNV9PNLAP%2BO7kTYWxtOkwuc7DxAY6pgGOWW56b3J3fEMlQsTl6RUmNfGdYCJqCoCwbLW5r9o%2BnFFnurfKNSMUdVoTliRmzNThoojNdwwoeGZbM1oYt9fb%2Fd4J0HT8wPxbGP124wtJohWV7EKG3KVMRDvsP9wRLeg2bGT4sIK9GkvdcdKTVT3sIpL%2BG%2FY5lyIgC5J7ghQEB7SWl7UFJtYC9f93KrcBeNwvROEsls2SKNp0P1fJAWRsGgUOZLCm&X-Amz-Signature=b605836c7cf912b3b44da021297eec279ed84cc18df5304a8fa6925a325df64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOYQRRE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDZwh1Gy8MJOR4QcntykFQUEchVc2TzpU%2BTPyrWgbmCqAiBC5XdM4UI920Gf3zylbLEQrrom86TRXNpGabRMl%2Bv%2FKyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7Z1OShIelpbgpdoZKtwDtRcBW%2FRuesNWQAEgaEOdBaYZW8myvHkA%2FqwQLJlliL0zCQkXlTiZsx4ycdtHESXtMTGJ8fYCs5uJLE0O2Tu9LBjWKv3FHGMJeAxaiomxhdGh23yYPdk3R30pWqeviFHoUT1bHcJp05tcOlSA1dLeVhMqxPvaHp9qcPqAAoQoQQ8cG8bsmTHF4THy9k8nir7J5g7k9e1yvsc7oPUV4Rloebf2ERFoPm0YHv2BDFQ3CACNopJCesFivT1TZVSMvh9vAIAps4M5nYfdwSvHnrMqKDVhAo7JuKgjnfT2h%2FkoCoxwWX3SyeWrwm%2FwVrnnSuYbTg%2F6h07rShFtVIDbOlGvGVjoImyY8iFEuG7rTSVQh2dICE5uXc6m0WCzyA0lGCjTeY6wbrLZByHF9DMEcBhXyEpq8%2BjT%2FqHRWV4yH1wnUQZ6tfuOS%2FZ4RGSpt%2BUwHNqxoOJyaxq0TT1Yj0wiUX0ECmddIxIYooIDwslmP487CxYIoUvvUvgh94bc8qjB2WOACC3RLZ21k2lUnlVUd%2FCbwI8K7eVweEHsuP5sYl17FJ746nqIvUCsc7Wk13A%2BkAiHrRgZC4Ica9XEOzxHFW6xfSZTfvP%2BgToBaH9vVAlTNV9PNLAP%2BO7kTYWxtOkwuc7DxAY6pgGOWW56b3J3fEMlQsTl6RUmNfGdYCJqCoCwbLW5r9o%2BnFFnurfKNSMUdVoTliRmzNThoojNdwwoeGZbM1oYt9fb%2Fd4J0HT8wPxbGP124wtJohWV7EKG3KVMRDvsP9wRLeg2bGT4sIK9GkvdcdKTVT3sIpL%2BG%2FY5lyIgC5J7ghQEB7SWl7UFJtYC9f93KrcBeNwvROEsls2SKNp0P1fJAWRsGgUOZLCm&X-Amz-Signature=e5656b9e2433a309461e087cfb46876c0f98e12c9f0454e80eb63d4b22a5efdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
