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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTZQM6F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD18e%2FXRtExPPWmbs8rN0lCox3rBd3DUPoUwV%2BDG6hpgIhALbRjX5%2B%2Bedc2nkdgGS9pZNtnJqJhptf0EMIclbSrjmJKv8DCEsQABoMNjM3NDIzMTgzODA1IgzFKURGmiazw5HEfFsq3AO3esue6hNsJVXQhQVRhKq0ccFOqGjN3ZB%2B3LInpD3YqxnqeX0FzuvEx15tdtDq9eRPub84iSX1IFquAgVx%2BeU3h7ouqDCFQSpYcDdwP3xlcWmPMfzCbnIHIHOE0YgaPiDmL8wpxBGhw8DyarjWZnP4IFXZYCYhm4PsJf%2F3KKYU70WpPVmJDy%2FeMXZ1opW21Z0wV7BrMRuPObkXOZsE%2FUFPQhNd3%2BA6lqKpVD3Pv2NFvq2Hy80wquNesAZOz1QW%2FV5uM%2FC9Rq5%2FWcwZ%2F1Sqob1sp6dCU4hcwjquBzP63KzWE9T%2F%2F72WXbVljwysLLEYxFEzYWbwNGbT%2Fr8q%2FbnLA53pZkfqGjni8Zr5z2EQf0BfonLcQMluI3id9Buho4%2BPCMyhvRyDsAXotamAxJh9v4VPNRdhLgpZDrtVPda4j4x5IkXTfHdQZEIEBj9B%2FTJhgV8iIokYmv%2FPL8prHrVc5YI%2FQdv8QuFp1sS38npaxtIs886%2FdeTP2OLje6ouDrA94srYBbkzhXgpxC0KsSjBqXj6ap3ffj7Ho0SolEw5gVbMiDykrzS8Xgr4BK4xb6RmEmiHqBBfYRNkoAr8j6Xj5FztKWpt4fzwxSn8Zn0Sv01y23B1jNDdUQrJ8nGerzCL0NLBBjqkAaOUlPbDL1UGRnukeTC%2BakQEx14eDly0TDCMlQma4HT3DhneOjnrqqS4J5CQhizcg5AWAEHmUJYZqTjMta7wXVAjbQ7gnAOejVq0A4msC%2FAhQSdqcs4Sd83GcuAHssJeTgsgxpIv%2FOTCB0uT4SPV3%2BZ2M2ykBZI9vjs%2Bcn5nHGyLhnU5Pqg6Pox2rbM701ts3sSQrbZZAKeXjn%2BAdyD6R6MAnik4&X-Amz-Signature=c48c437ef501d4519e06e4fdb1e210dda0bd7fbe4493159e8d325759ed46e908&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTZQM6F%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD18e%2FXRtExPPWmbs8rN0lCox3rBd3DUPoUwV%2BDG6hpgIhALbRjX5%2B%2Bedc2nkdgGS9pZNtnJqJhptf0EMIclbSrjmJKv8DCEsQABoMNjM3NDIzMTgzODA1IgzFKURGmiazw5HEfFsq3AO3esue6hNsJVXQhQVRhKq0ccFOqGjN3ZB%2B3LInpD3YqxnqeX0FzuvEx15tdtDq9eRPub84iSX1IFquAgVx%2BeU3h7ouqDCFQSpYcDdwP3xlcWmPMfzCbnIHIHOE0YgaPiDmL8wpxBGhw8DyarjWZnP4IFXZYCYhm4PsJf%2F3KKYU70WpPVmJDy%2FeMXZ1opW21Z0wV7BrMRuPObkXOZsE%2FUFPQhNd3%2BA6lqKpVD3Pv2NFvq2Hy80wquNesAZOz1QW%2FV5uM%2FC9Rq5%2FWcwZ%2F1Sqob1sp6dCU4hcwjquBzP63KzWE9T%2F%2F72WXbVljwysLLEYxFEzYWbwNGbT%2Fr8q%2FbnLA53pZkfqGjni8Zr5z2EQf0BfonLcQMluI3id9Buho4%2BPCMyhvRyDsAXotamAxJh9v4VPNRdhLgpZDrtVPda4j4x5IkXTfHdQZEIEBj9B%2FTJhgV8iIokYmv%2FPL8prHrVc5YI%2FQdv8QuFp1sS38npaxtIs886%2FdeTP2OLje6ouDrA94srYBbkzhXgpxC0KsSjBqXj6ap3ffj7Ho0SolEw5gVbMiDykrzS8Xgr4BK4xb6RmEmiHqBBfYRNkoAr8j6Xj5FztKWpt4fzwxSn8Zn0Sv01y23B1jNDdUQrJ8nGerzCL0NLBBjqkAaOUlPbDL1UGRnukeTC%2BakQEx14eDly0TDCMlQma4HT3DhneOjnrqqS4J5CQhizcg5AWAEHmUJYZqTjMta7wXVAjbQ7gnAOejVq0A4msC%2FAhQSdqcs4Sd83GcuAHssJeTgsgxpIv%2FOTCB0uT4SPV3%2BZ2M2ykBZI9vjs%2Bcn5nHGyLhnU5Pqg6Pox2rbM701ts3sSQrbZZAKeXjn%2BAdyD6R6MAnik4&X-Amz-Signature=7582c7ce765a483aca154c8fbbe0997cfc4bed02d0be0191a712689eb9733c99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
