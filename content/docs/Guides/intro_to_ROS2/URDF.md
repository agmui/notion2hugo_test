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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM46UEYX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH8q6SJgfMhhzUfdVln4RLtX6BIVzR4NcVQdfwKtAy8NAiEA82Giy1KkGF2zPdZoonTm1GmoH6UvzjnJZ2fzsPHZ7AQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLVavwi59JBrC%2BF7mircA8P6T9u0oWVeRdBaAcbWcjILczQ2Q%2BUv73VUa%2BGa7sOc0Q9KwU7Fooj3OEONzyKXAkluod0clqsoFBUnlcBbi%2Fq7qMl3EHTwOjPrYEhub6UMOOIoJjFLIpjF6SQqBJUZiVPrVyM1XFA%2FiJg1%2Be%2BisX%2FNNYa%2FafOpgmmvaWacJfo4MJvrWHtquHvO6WiP%2F9cKrbRaBEwV7RPTQVuC40QYdAMv54laBLFLsiKFOimvHOaq%2F8Ry3NzHfASHGVOpZ7NlcnzfYMUwZCdqqtYRmiNxI%2BFwJCndcZAeHUSEKrWi9PxAg0scrmb3T2OycKNQvrksekdSkth4Fu4XvpdeYfXJ8AGqgYQHAkP0bj5mMJmAkgZpkO3oBimmbkQ8R4CdeENzKqpGK4%2BZ9ngL6MHwkDQUo86IWWfyPFPpmhdaCg%2BMpwid04fq7fs8myow5l5m99zFDmTQGTlnG%2FzgJHVoa0T%2Bk5XldRBHp1zPDzfLw2x4%2BLZhAcKoWkYRMZ%2FveZkakRdmMjKuJ9DkwHW4hBv2lLfLCtFoeoLCn4RhTyPsm4%2FxSdoM1q%2BDhYUTQSsmMIyJgZs9bnM80wYm2R%2BxmaxBCStcxjN9Zza6x2yPMQb2vTQPKFkz8sb57gjopo%2F%2B57FZMIGD9L0GOqUBuF3PQLd1pIPktPpU556Mea6sHyxDKtu3eTrt4A5HhvZaj%2BtgJMd02QVvA0hkGuyhdCdqCNRLAo8KeWSSSvc%2Bz%2FX87MXeRVQJw3Y8TZxd7w5V6DFUKWe%2B7SoSN5Ju2mMS5Lzlx0f983PYjjvT7RKgIRMtgYY%2FxL%2BW8GWehgDlex65Rlu%2FTUywiy99aF7I5dSd8RdiX4lndp6dn9Nsqjk6P4Ws1YnY&X-Amz-Signature=e7532641158c00bed3cd68c0a467fdee5909fa067adbbcd9f27525ef1a262990&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM46UEYX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T003714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIH8q6SJgfMhhzUfdVln4RLtX6BIVzR4NcVQdfwKtAy8NAiEA82Giy1KkGF2zPdZoonTm1GmoH6UvzjnJZ2fzsPHZ7AQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLVavwi59JBrC%2BF7mircA8P6T9u0oWVeRdBaAcbWcjILczQ2Q%2BUv73VUa%2BGa7sOc0Q9KwU7Fooj3OEONzyKXAkluod0clqsoFBUnlcBbi%2Fq7qMl3EHTwOjPrYEhub6UMOOIoJjFLIpjF6SQqBJUZiVPrVyM1XFA%2FiJg1%2Be%2BisX%2FNNYa%2FafOpgmmvaWacJfo4MJvrWHtquHvO6WiP%2F9cKrbRaBEwV7RPTQVuC40QYdAMv54laBLFLsiKFOimvHOaq%2F8Ry3NzHfASHGVOpZ7NlcnzfYMUwZCdqqtYRmiNxI%2BFwJCndcZAeHUSEKrWi9PxAg0scrmb3T2OycKNQvrksekdSkth4Fu4XvpdeYfXJ8AGqgYQHAkP0bj5mMJmAkgZpkO3oBimmbkQ8R4CdeENzKqpGK4%2BZ9ngL6MHwkDQUo86IWWfyPFPpmhdaCg%2BMpwid04fq7fs8myow5l5m99zFDmTQGTlnG%2FzgJHVoa0T%2Bk5XldRBHp1zPDzfLw2x4%2BLZhAcKoWkYRMZ%2FveZkakRdmMjKuJ9DkwHW4hBv2lLfLCtFoeoLCn4RhTyPsm4%2FxSdoM1q%2BDhYUTQSsmMIyJgZs9bnM80wYm2R%2BxmaxBCStcxjN9Zza6x2yPMQb2vTQPKFkz8sb57gjopo%2F%2B57FZMIGD9L0GOqUBuF3PQLd1pIPktPpU556Mea6sHyxDKtu3eTrt4A5HhvZaj%2BtgJMd02QVvA0hkGuyhdCdqCNRLAo8KeWSSSvc%2Bz%2FX87MXeRVQJw3Y8TZxd7w5V6DFUKWe%2B7SoSN5Ju2mMS5Lzlx0f983PYjjvT7RKgIRMtgYY%2FxL%2BW8GWehgDlex65Rlu%2FTUywiy99aF7I5dSd8RdiX4lndp6dn9Nsqjk6P4Ws1YnY&X-Amz-Signature=faed469d2520c0b13af5d92774ce30a475f826ab52e0184a6a4c95a14362da4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
