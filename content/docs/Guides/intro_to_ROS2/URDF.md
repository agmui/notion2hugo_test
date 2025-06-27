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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PRKWJM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDDKm5qbRw1H%2B40ESEy0Wnkv7A6bcFWFtcxO9PQAODZBgIhAIhxE23ykYlgBzbOXqgywQYHdp6nyNwS4gbuEh2lsaHMKv8DCHMQABoMNjM3NDIzMTgzODA1IgzoY95tnHLLJY2Et90q3AM%2BSTe%2B8ovZsBnjHOsBN53l5OwFGkVGvEroF9z40fNCB9eGJzskUXLCPROQ3eenyDqDsuNa0VdX%2FlonhGPSDLQgdMqqnChiu8MNDerdjR4Gj5tJOkh9A4sgxeqRzYK8%2B75UrDqUGkK3Uk2V9wNi9Rv1hLw%2B73Sampp6q4sxdn0KvDkkku6SKLsmp2CA8oolI51FMxONS%2FCUCWZmAL%2BhTH2EAPbPVY4fMO3qcnORk%2F6lQelu9IP9qHetPMX2RAe5cjhj0p9%2Bjq93f7PdNFB%2BCmAHCay%2F8%2Bm6Aht3yMxFxGEV5FG5mPgtafa8jPjsuk0ZkZNBmdWnIKMb7RVrw970sX937YSB1eJ5p%2F9agrsPm2Gv67PUndJXrvQ0Irj8AP2H2Ab3UwtJNBLEXmBztUezHzcynECg%2BG1tFD2ShS1%2FGL8OFugSj3SPBOjURC8KDwRoJblqADI2M52QpOoKKMblYmocs%2FIqB0omoLtsJ%2BN53w9%2FhO96HgTLp08oODnodviFaLPzHUOgD17t4Wp5tO%2FM1iZvQcJuVl7qjbsUfbUNytV5j5JncJNBq5v70KhaLiYJgMqdVwiEGpKP80kavj2nD8uQKTnlCFVwKS3LTakTz5w9XGcfG1iwjiwJ6rOWkDC40%2FnCBjqkASdRwijuhlVLIjFB1EwBTJtTmOFHdAZ63n%2FSMQZggrddH5XzsN1NFWS2FwOTfst2WZGut7TjV6HFNTd4JzvHxlJCJno7HOSA%2BspcA7I9jswPy2HTk3paSxX%2F0AVJS%2BvjcDsqIgXhr%2FRTXY7Mhaud7N%2FydaarPZhZoVHWhk3cTWnb1ZLuAuJuWN3CL7VfMa1%2FQPOghiErOzMUdB7b3QWa0GdmYntK&X-Amz-Signature=e0bc9f92c537ef8529c9bc4ff92b430a5d069b409042b0a65b66823bc30aa4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PRKWJM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDDKm5qbRw1H%2B40ESEy0Wnkv7A6bcFWFtcxO9PQAODZBgIhAIhxE23ykYlgBzbOXqgywQYHdp6nyNwS4gbuEh2lsaHMKv8DCHMQABoMNjM3NDIzMTgzODA1IgzoY95tnHLLJY2Et90q3AM%2BSTe%2B8ovZsBnjHOsBN53l5OwFGkVGvEroF9z40fNCB9eGJzskUXLCPROQ3eenyDqDsuNa0VdX%2FlonhGPSDLQgdMqqnChiu8MNDerdjR4Gj5tJOkh9A4sgxeqRzYK8%2B75UrDqUGkK3Uk2V9wNi9Rv1hLw%2B73Sampp6q4sxdn0KvDkkku6SKLsmp2CA8oolI51FMxONS%2FCUCWZmAL%2BhTH2EAPbPVY4fMO3qcnORk%2F6lQelu9IP9qHetPMX2RAe5cjhj0p9%2Bjq93f7PdNFB%2BCmAHCay%2F8%2Bm6Aht3yMxFxGEV5FG5mPgtafa8jPjsuk0ZkZNBmdWnIKMb7RVrw970sX937YSB1eJ5p%2F9agrsPm2Gv67PUndJXrvQ0Irj8AP2H2Ab3UwtJNBLEXmBztUezHzcynECg%2BG1tFD2ShS1%2FGL8OFugSj3SPBOjURC8KDwRoJblqADI2M52QpOoKKMblYmocs%2FIqB0omoLtsJ%2BN53w9%2FhO96HgTLp08oODnodviFaLPzHUOgD17t4Wp5tO%2FM1iZvQcJuVl7qjbsUfbUNytV5j5JncJNBq5v70KhaLiYJgMqdVwiEGpKP80kavj2nD8uQKTnlCFVwKS3LTakTz5w9XGcfG1iwjiwJ6rOWkDC40%2FnCBjqkASdRwijuhlVLIjFB1EwBTJtTmOFHdAZ63n%2FSMQZggrddH5XzsN1NFWS2FwOTfst2WZGut7TjV6HFNTd4JzvHxlJCJno7HOSA%2BspcA7I9jswPy2HTk3paSxX%2F0AVJS%2BvjcDsqIgXhr%2FRTXY7Mhaud7N%2FydaarPZhZoVHWhk3cTWnb1ZLuAuJuWN3CL7VfMa1%2FQPOghiErOzMUdB7b3QWa0GdmYntK&X-Amz-Signature=637302238f85aa4c5413b0418f3dc38d47540cf23726efd2780b1e7c0b234267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
