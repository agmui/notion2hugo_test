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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6OD5WJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE6boGb7iiy0q7DWX%2FGd6OIDvArirfqYLJLhlNbNP7%2BAiAupZA39sVddo09xVqNdMjtBngMrNOLalP3avhzsWKDhiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9UJsc1%2Bzx3E1T8dKtwDLCvzAo%2BAaGqzAd4of8P0BXJi9CiBrXAc9LYi8xNBglTZGW3tzUMm280hps9cWj7%2FQWB3mtVHs0iHS0tsNDgERQpWS9%2Fn62P6dlwPHQFcVhqu9iZKPthFmXn3sExYOwCeGyGXpg6WPQn2pc5cl5dliTzuyGNMT5wgZkOPHz8NgnJaTJaz8NKQsWgN%2B002q0xzFXnnj72zrMNFjQYt40OdbN8Emk03lYLnlzD%2FVSYauP5fSjjmpW%2FfSWKTFDSPk%2BXnxpoys7xMuD39TIt4zwz4TLOd5FARQonh%2F6ovQ6AGJ4njHbrJ8rsdLJHbjKCwatXlFiC7RyWQW%2FwInQbpW%2FQrju3hSpGije25dyLdnsXNwH8kJFfegcmiDYz%2FV8511benHyAQ%2Bvqd06A19aaX0NANm%2FDKpqgCBFSy%2Fv27XuVRhNS47CzIbpwuNu5yoTfO6WGvCtCnA4haWMAz3VnyDDfxXu51LyPVR0Q6Gjx5kLIBEG3p0A7QoEAPwQGibvWW3hRWkAO%2Fz6p3zk9lqSQcEZulzzaajIr04dGEVBsm7rQaYWIQUFeb83E9AaQrjsgiskc7t0FFbOxGQ1dB7eyZ48JFYXLSX4R5JU2woOCuf8AvUqeCQh%2BIf97RXpOpbTswxNi1wwY6pgEfl7seMtCvDfROtWMf6I2k85l7kN1Dw1KcZw7MLAfDkWhdNSirbg55vkQEMFPuBagYOf3h9cg8Ec2HvCcWURr%2BmtcXyMdgite4T1ftrhah3t6kPTDQ1de4Fs%2FrOvsgb%2Fp%2F%2BERSDN0WkihRQppulfvFf668HU7h1WL2M4XPQC7scf9JqTmvP1knI3PHt%2Bvhmi07n9FW25sQ89%2FXNLLbl0awhX4Ajl06&X-Amz-Signature=304498996071e95584d5c3593cc7ff364f9cbc471e9815deaaa6e33e4dc3e5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH6OD5WJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE6boGb7iiy0q7DWX%2FGd6OIDvArirfqYLJLhlNbNP7%2BAiAupZA39sVddo09xVqNdMjtBngMrNOLalP3avhzsWKDhiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML9UJsc1%2Bzx3E1T8dKtwDLCvzAo%2BAaGqzAd4of8P0BXJi9CiBrXAc9LYi8xNBglTZGW3tzUMm280hps9cWj7%2FQWB3mtVHs0iHS0tsNDgERQpWS9%2Fn62P6dlwPHQFcVhqu9iZKPthFmXn3sExYOwCeGyGXpg6WPQn2pc5cl5dliTzuyGNMT5wgZkOPHz8NgnJaTJaz8NKQsWgN%2B002q0xzFXnnj72zrMNFjQYt40OdbN8Emk03lYLnlzD%2FVSYauP5fSjjmpW%2FfSWKTFDSPk%2BXnxpoys7xMuD39TIt4zwz4TLOd5FARQonh%2F6ovQ6AGJ4njHbrJ8rsdLJHbjKCwatXlFiC7RyWQW%2FwInQbpW%2FQrju3hSpGije25dyLdnsXNwH8kJFfegcmiDYz%2FV8511benHyAQ%2Bvqd06A19aaX0NANm%2FDKpqgCBFSy%2Fv27XuVRhNS47CzIbpwuNu5yoTfO6WGvCtCnA4haWMAz3VnyDDfxXu51LyPVR0Q6Gjx5kLIBEG3p0A7QoEAPwQGibvWW3hRWkAO%2Fz6p3zk9lqSQcEZulzzaajIr04dGEVBsm7rQaYWIQUFeb83E9AaQrjsgiskc7t0FFbOxGQ1dB7eyZ48JFYXLSX4R5JU2woOCuf8AvUqeCQh%2BIf97RXpOpbTswxNi1wwY6pgEfl7seMtCvDfROtWMf6I2k85l7kN1Dw1KcZw7MLAfDkWhdNSirbg55vkQEMFPuBagYOf3h9cg8Ec2HvCcWURr%2BmtcXyMdgite4T1ftrhah3t6kPTDQ1de4Fs%2FrOvsgb%2Fp%2F%2BERSDN0WkihRQppulfvFf668HU7h1WL2M4XPQC7scf9JqTmvP1knI3PHt%2Bvhmi07n9FW25sQ89%2FXNLLbl0awhX4Ajl06&X-Amz-Signature=5c98a83e0d278c674e5f8a8f9775ce1a72b9b81444f1d7daa868f8f9f712cd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
