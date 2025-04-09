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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36KIS5O%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIAeBHR68A2K8i5myZdmBoKWQ4yCpxJiwzLNYs%2F%2FQNrOMAiBIR6rhAm6glj4sE9oJAcEzb1Vg88bEezWNObUdHPtoPCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FzxoAfJ45r%2Fh9faGKtwDXkI2jKdZ1w3Yrpr30gb8imJ82NAei71GbfJrnCanviN0a9N5LicwCH2oQDtEolo%2FKogbeixX5qoqVda0J7RAIflqxKGdTDJsEsQwACc%2Bh5siMdB6wzPFk5zbgvJdPfS3Oq9Y5emgGdHf800bllVDZ1mm0Ea1m0X9U8dvlrEnrAK3IBxoWygm4IvMjfvAfvVNW9TSsn86UdAi8mHpLk%2FLShfRJbauBROMGpy13IJYiMS72jDLTC%2BBuRpkJP8MCjmabj%2FN4p4WLS96K4vGwyE7UxDd2sLvsNBZssY31OvW7hB7xIAiNaxipay3YE10olFDRECPTTGx1mR7UlZVRHYHLTK40qEJPKu92MmEQmVPDu8HlN4wRBRj7INt1jS%2Fn3Pm%2B2towpJNrCZNgfhx93lxQnObRrdg4XHMKLPylRDLMte%2F9avC4BlctLjL6URPPl%2Ba9xTM4aELtvPzVYXlCX7xdtqYAsav7w1MFT0oYjX64kiKF2rTCBc9jxuwffZuIryoCs%2F9W2XEQdODY%2BxjBS81zXDiUNqmEovFhsuCpbxh4qchfe0au7cAN%2BjFVjpw0T0gEz5SDxaWBOVd8%2FmljbsvL92xgEg9gniVZKHF08YoUsYxC7u7Me%2Fh69lKtq0woPzYvwY6pgHghFmqsv2AInwxOcjvQm9ysxSHMBXEG1WOwbeY%2Fb4k%2F7PjQblHa%2FaIelwAj43FWV037HQdrHD3QrXvDC2nAh5bMkr%2FpG76ugyJWk%2F67vWoRIjgvGaDIlgGNKPD9cDQ40%2FQ37HVXnfGeLRMxglJ5SX3RSHOJfrdhs0dwVOOBu1WkG6bRWeztQZYPCzW7nEdWcrDqcsWywfUZkZ8WsumNa5xEUg2AoJR&X-Amz-Signature=4efbeff6e5b279a104f0fbdf913def55fb06ef22623537c739c7a42fccbfc6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36KIS5O%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIAeBHR68A2K8i5myZdmBoKWQ4yCpxJiwzLNYs%2F%2FQNrOMAiBIR6rhAm6glj4sE9oJAcEzb1Vg88bEezWNObUdHPtoPCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FzxoAfJ45r%2Fh9faGKtwDXkI2jKdZ1w3Yrpr30gb8imJ82NAei71GbfJrnCanviN0a9N5LicwCH2oQDtEolo%2FKogbeixX5qoqVda0J7RAIflqxKGdTDJsEsQwACc%2Bh5siMdB6wzPFk5zbgvJdPfS3Oq9Y5emgGdHf800bllVDZ1mm0Ea1m0X9U8dvlrEnrAK3IBxoWygm4IvMjfvAfvVNW9TSsn86UdAi8mHpLk%2FLShfRJbauBROMGpy13IJYiMS72jDLTC%2BBuRpkJP8MCjmabj%2FN4p4WLS96K4vGwyE7UxDd2sLvsNBZssY31OvW7hB7xIAiNaxipay3YE10olFDRECPTTGx1mR7UlZVRHYHLTK40qEJPKu92MmEQmVPDu8HlN4wRBRj7INt1jS%2Fn3Pm%2B2towpJNrCZNgfhx93lxQnObRrdg4XHMKLPylRDLMte%2F9avC4BlctLjL6URPPl%2Ba9xTM4aELtvPzVYXlCX7xdtqYAsav7w1MFT0oYjX64kiKF2rTCBc9jxuwffZuIryoCs%2F9W2XEQdODY%2BxjBS81zXDiUNqmEovFhsuCpbxh4qchfe0au7cAN%2BjFVjpw0T0gEz5SDxaWBOVd8%2FmljbsvL92xgEg9gniVZKHF08YoUsYxC7u7Me%2Fh69lKtq0woPzYvwY6pgHghFmqsv2AInwxOcjvQm9ysxSHMBXEG1WOwbeY%2Fb4k%2F7PjQblHa%2FaIelwAj43FWV037HQdrHD3QrXvDC2nAh5bMkr%2FpG76ugyJWk%2F67vWoRIjgvGaDIlgGNKPD9cDQ40%2FQ37HVXnfGeLRMxglJ5SX3RSHOJfrdhs0dwVOOBu1WkG6bRWeztQZYPCzW7nEdWcrDqcsWywfUZkZ8WsumNa5xEUg2AoJR&X-Amz-Signature=da113ce85637354871dbb014e43851aa4f8e9e582d448fa9fa9086e3860315f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
