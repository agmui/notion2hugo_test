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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5RYCSG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFRgrt%2Ft%2FU9ELYoCICf40PIjKWfwwU86jT8NuMrfgcj%2FAiAeSG3jQ6A%2FtdVAGO0DYJubkhhmKGwNzTlPvadOlMesmCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM89tuIwHkOTK8a%2FDZKtwDAqrpCN5JmX92E5NIwocJ%2B07Z08LKRFeZKbG%2F4hTBKxgR3cnqiQPcqXBmXCFw5vfGy22QKqu4bEzuF8wIbXeXOWHOFl%2Ft0xa1UAcAWdnGVIb5JeMvLDpQwNEgbiNAVIf24Bptb11ZJmV10mbX5wb4EcKbGXpwNB2r%2FUuSOZrX1HBrtXFayA8leTsDx8SLZDMyfW0usEtC6hRRQptV0yXwjBmTSPDrfT2FCOru8V9TgFk%2F69pTTe6GsBMKo7XAMoZkBAC2NVuMLIfHPtS3mG0KZYMHT1FMIV9HF7tDr5rhtlQJ8Rf9DAb1gRZIF%2BNCaLx%2BbFDWX26BXoT3i96kXchdIO9Lm4GmsTHMcLvRgXDU2UbPn0deUTFpqZf%2FpArCCcVnFZkUi6rig6ULXfskn9dFBkyccu%2FXPeoWGpg%2FvUwMNf%2BJgnc0c%2FF5K%2BZZKIixSZSntpBJZCCKSVq8FTv2Y6RrgQ8XmG6jQODOwvDRP6J4RJ6aWsTdIk3RqIjU88Buk1LuzLc%2BFXI2Zw7c0%2BAZ%2B%2FpkWSTzZsTE4t5KVDLvCth14wGdTK9VhPSZqp58Me5F8YFsf2rLq74q7YTUmGCR9Y1T8AgFOhX6f03DmX8vjr0n6ziFUn0RVwdlHTgrXfcwqP%2B4wgY6pgEEiqohkF%2BcBMmUdzWo4JgrIj%2BWP%2BHkulX0Ng29wRZUeC4sUJR4k8J3PjNh983JI%2BS7MVj8wm6pA3t89H50skZg27%2BGsxubhp2K%2FGDYLGcRioudmd4CYOE0lgYlj%2BTbA23LscOuLpCRkcmux3DLYQ7gZRBtNDBHTDV4D08yiLkaf2YW8miUYAQx3qSmXoLuM7FTeRF%2F9fuGPgWVUBATH%2B3IPScmATqD&X-Amz-Signature=df455b66a257ef621ef314d9e1ae1fa57938e1f03fab6e3020cf7b10663f2ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5RYCSG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFRgrt%2Ft%2FU9ELYoCICf40PIjKWfwwU86jT8NuMrfgcj%2FAiAeSG3jQ6A%2FtdVAGO0DYJubkhhmKGwNzTlPvadOlMesmCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM89tuIwHkOTK8a%2FDZKtwDAqrpCN5JmX92E5NIwocJ%2B07Z08LKRFeZKbG%2F4hTBKxgR3cnqiQPcqXBmXCFw5vfGy22QKqu4bEzuF8wIbXeXOWHOFl%2Ft0xa1UAcAWdnGVIb5JeMvLDpQwNEgbiNAVIf24Bptb11ZJmV10mbX5wb4EcKbGXpwNB2r%2FUuSOZrX1HBrtXFayA8leTsDx8SLZDMyfW0usEtC6hRRQptV0yXwjBmTSPDrfT2FCOru8V9TgFk%2F69pTTe6GsBMKo7XAMoZkBAC2NVuMLIfHPtS3mG0KZYMHT1FMIV9HF7tDr5rhtlQJ8Rf9DAb1gRZIF%2BNCaLx%2BbFDWX26BXoT3i96kXchdIO9Lm4GmsTHMcLvRgXDU2UbPn0deUTFpqZf%2FpArCCcVnFZkUi6rig6ULXfskn9dFBkyccu%2FXPeoWGpg%2FvUwMNf%2BJgnc0c%2FF5K%2BZZKIixSZSntpBJZCCKSVq8FTv2Y6RrgQ8XmG6jQODOwvDRP6J4RJ6aWsTdIk3RqIjU88Buk1LuzLc%2BFXI2Zw7c0%2BAZ%2B%2FpkWSTzZsTE4t5KVDLvCth14wGdTK9VhPSZqp58Me5F8YFsf2rLq74q7YTUmGCR9Y1T8AgFOhX6f03DmX8vjr0n6ziFUn0RVwdlHTgrXfcwqP%2B4wgY6pgEEiqohkF%2BcBMmUdzWo4JgrIj%2BWP%2BHkulX0Ng29wRZUeC4sUJR4k8J3PjNh983JI%2BS7MVj8wm6pA3t89H50skZg27%2BGsxubhp2K%2FGDYLGcRioudmd4CYOE0lgYlj%2BTbA23LscOuLpCRkcmux3DLYQ7gZRBtNDBHTDV4D08yiLkaf2YW8miUYAQx3qSmXoLuM7FTeRF%2F9fuGPgWVUBATH%2B3IPScmATqD&X-Amz-Signature=4e6e0163ec709e877c7249eed7a92233c604586e28fea17aeb18282df8c9faf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
