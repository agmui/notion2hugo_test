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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NGSZJX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBdgwrTQlcERqMwqXvGzYV%2FEyEp3JtLclu5O5m8HxJIMAiABjoGNDVLimTTzGpDNkfATEtAC5asM8Nvg8QMw4GyGEyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT9ZWqZpttBvA%2FUh%2BKtwDkqmMBckryycQ4o%2B2OwdbUB1NUM5Dji0ujj3BLpMPFqliZ%2BjWCxH%2B7ZZaOw5OJtuz8dJiwMKPFNFNsOeDdI%2FjqHyDG1Gj4dnNKdgsDjL29PGrh9cT%2B13%2BFcXXFXB8s%2Beb9FQQSNJCGWGH7SzwMGfRhR5B%2FLeTMovG77scUzD0cqscNtlYcsVAQFClCZwxpnNaxaCqimluounL6qCWeqKCsMjpTLfsD17iCS82wOGTs863vZ5NrgLlFvIk90L05emR0rPWJTAa0cQgEOrRL3lpo%2Fh%2FxKokdyV2aewqSJls5lv8MEUCV%2Fm1o9OZr0VRl1oEWCDcPDIgCrzSFDTUT4GmNMV4dRWRM7YnzUxx%2FL8kXBEQSDnlK88u1roUzzdqlh5%2FpjtKDcZQUEbT3dolzcrreguLEPl%2FpEBKyVdXbRh5NF%2Bo%2FMpBnZoaTcHg2HCQaiCcX4d72COc9Bn4kSPyUOzs24VNefqNMsPI4Tx9jtb0qds5PoQrVBm9S2KCBptNL3E03UD7B1TDHEAJBcL5HxqekjGpUBwiTCLWMYE9HxpsOkacxfN97PNsCOGcmFTGkJHL7yYZYlnkBTMRZ%2F29AQByDCQIEnQw%2BhNjcXtIwzTh3bWlvUbdOJyMSiOQkfow3KOSwAY6pgGqb6UAGTfQAwOOcpdGWRgc7dBH9ofzF9xTgz7VgxIAD6GLh1oankOHA93Ud6mC2item7AlGMQkMeEmme4opQQQa%2Fdn8YWDyPEcsC0%2B%2BVgYi7trj5ewu6ELU6daJtFNOBt40QI2sEUsEClBalL5S1iJPpkKkho8zg3ffPoVvE16uG%2FkBRepBvyTuNZSUuwuyyeO6Oz3Vp0OCRWUAnbMcLOkt61hF%2BDP&X-Amz-Signature=710d7b7d14fd36e1e1f48fd1f67386b15ea5df5e3aa1e01fed6a2b4189cc9302&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NGSZJX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBdgwrTQlcERqMwqXvGzYV%2FEyEp3JtLclu5O5m8HxJIMAiABjoGNDVLimTTzGpDNkfATEtAC5asM8Nvg8QMw4GyGEyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT9ZWqZpttBvA%2FUh%2BKtwDkqmMBckryycQ4o%2B2OwdbUB1NUM5Dji0ujj3BLpMPFqliZ%2BjWCxH%2B7ZZaOw5OJtuz8dJiwMKPFNFNsOeDdI%2FjqHyDG1Gj4dnNKdgsDjL29PGrh9cT%2B13%2BFcXXFXB8s%2Beb9FQQSNJCGWGH7SzwMGfRhR5B%2FLeTMovG77scUzD0cqscNtlYcsVAQFClCZwxpnNaxaCqimluounL6qCWeqKCsMjpTLfsD17iCS82wOGTs863vZ5NrgLlFvIk90L05emR0rPWJTAa0cQgEOrRL3lpo%2Fh%2FxKokdyV2aewqSJls5lv8MEUCV%2Fm1o9OZr0VRl1oEWCDcPDIgCrzSFDTUT4GmNMV4dRWRM7YnzUxx%2FL8kXBEQSDnlK88u1roUzzdqlh5%2FpjtKDcZQUEbT3dolzcrreguLEPl%2FpEBKyVdXbRh5NF%2Bo%2FMpBnZoaTcHg2HCQaiCcX4d72COc9Bn4kSPyUOzs24VNefqNMsPI4Tx9jtb0qds5PoQrVBm9S2KCBptNL3E03UD7B1TDHEAJBcL5HxqekjGpUBwiTCLWMYE9HxpsOkacxfN97PNsCOGcmFTGkJHL7yYZYlnkBTMRZ%2F29AQByDCQIEnQw%2BhNjcXtIwzTh3bWlvUbdOJyMSiOQkfow3KOSwAY6pgGqb6UAGTfQAwOOcpdGWRgc7dBH9ofzF9xTgz7VgxIAD6GLh1oankOHA93Ud6mC2item7AlGMQkMeEmme4opQQQa%2Fdn8YWDyPEcsC0%2B%2BVgYi7trj5ewu6ELU6daJtFNOBt40QI2sEUsEClBalL5S1iJPpkKkho8zg3ffPoVvE16uG%2FkBRepBvyTuNZSUuwuyyeO6Oz3Vp0OCRWUAnbMcLOkt61hF%2BDP&X-Amz-Signature=03f5df52d07b6751d495c7182d776edb134b9ceb1b606580d37d976663cbf06d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
