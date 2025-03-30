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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEBGONC%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHdx0u%2FrQteYxjzyKfDg3zFC1hAqa7yKp9qypsdxS%2FdtAiBE%2Bv1hLMyxIogcAcYYv2h4afc%2BC%2B0goWlVjtN2UZWOxyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdeiOifn8b2EbTCKKtwDHGsNk8kBl9EI4rLwGxLCbvRJrKuGLEiyu9yCRcU%2BJKibyRPAqn5Ky%2Box1bytecH0dqACO9IlYsYM%2FClR%2Baa10NOQwkEktsG%2FGmP3s1I1D9aZzT1qJLf83DEqmFQqU1aRbXAlgLO0NJwInnF6JqaMwfSkZ4pweyDeeLlFOT%2Fn%2FrEWHkS6jg6V4VBG2Y%2BMuTas9fQ0%2BJayixc2HWodwIv%2F0vQr26LFpUuUtCiB1GqZNgZyMgUUpAegFIIjbm7yFeGO4gRvrthm4eKsRoDOQlB6ngVgK544aD7y5WPMWvY7sOXef%2FDPoF9HkeO5v6OyEMhXNnLgyrlQV6fVm2VQ0Ibf962GixnJVCctnDZVc8elYsAaBTMBt%2BWtZc1dkewP0F3ShfpGSVDIAT0ZjCAg8toM78uEdjv4wUku2%2B56QAxaDquO9fx7umz3uTJyKp%2Bj1dEfmnSsYaD%2FbkJuepm0xT5%2BXogo7Y3Unr1ICcZidZxQoDLuiEGQ2p%2Bu%2Bp46MqKvlsw4pi9BWSpXO20MQ%2Bv07XD%2BsQ9dlzmKhDSp%2BVLTuJVnSk3wTeTMcxzIO3BKcvimpMCPyhUcoyG2uRvQuqnDlDKts80J%2FvnbpKEHWSTd0htCYnTAfNwHy4Czmir%2BlnswyfCjvwY6pgFNEAkcBKzFFcxtnBdKbM3Jwi34gBFgtmMyR5SDVwrzs2eCHE%2FxoAgBnK8dcaanFaVzhUSfAqg76SGdeHzCXEdBER2CPEYQ6NfYgJjit%2FOs4pKZYTFdldV0l1OaBu19zvINfeVj4KK%2FPqFdjjEkGHcOwZhlSqVNeHQ3VM%2BhXstYLiM2TJZlOzNPZQxnW%2BMGbVmsjXHoXIy5EmK%2BCo2tBpOI6DPKGtQj&X-Amz-Signature=ea846af12a597d156afc4a14384cfd6967c98a311b5fa8a8913721735c6259d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAEBGONC%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHdx0u%2FrQteYxjzyKfDg3zFC1hAqa7yKp9qypsdxS%2FdtAiBE%2Bv1hLMyxIogcAcYYv2h4afc%2BC%2B0goWlVjtN2UZWOxyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzdeiOifn8b2EbTCKKtwDHGsNk8kBl9EI4rLwGxLCbvRJrKuGLEiyu9yCRcU%2BJKibyRPAqn5Ky%2Box1bytecH0dqACO9IlYsYM%2FClR%2Baa10NOQwkEktsG%2FGmP3s1I1D9aZzT1qJLf83DEqmFQqU1aRbXAlgLO0NJwInnF6JqaMwfSkZ4pweyDeeLlFOT%2Fn%2FrEWHkS6jg6V4VBG2Y%2BMuTas9fQ0%2BJayixc2HWodwIv%2F0vQr26LFpUuUtCiB1GqZNgZyMgUUpAegFIIjbm7yFeGO4gRvrthm4eKsRoDOQlB6ngVgK544aD7y5WPMWvY7sOXef%2FDPoF9HkeO5v6OyEMhXNnLgyrlQV6fVm2VQ0Ibf962GixnJVCctnDZVc8elYsAaBTMBt%2BWtZc1dkewP0F3ShfpGSVDIAT0ZjCAg8toM78uEdjv4wUku2%2B56QAxaDquO9fx7umz3uTJyKp%2Bj1dEfmnSsYaD%2FbkJuepm0xT5%2BXogo7Y3Unr1ICcZidZxQoDLuiEGQ2p%2Bu%2Bp46MqKvlsw4pi9BWSpXO20MQ%2Bv07XD%2BsQ9dlzmKhDSp%2BVLTuJVnSk3wTeTMcxzIO3BKcvimpMCPyhUcoyG2uRvQuqnDlDKts80J%2FvnbpKEHWSTd0htCYnTAfNwHy4Czmir%2BlnswyfCjvwY6pgFNEAkcBKzFFcxtnBdKbM3Jwi34gBFgtmMyR5SDVwrzs2eCHE%2FxoAgBnK8dcaanFaVzhUSfAqg76SGdeHzCXEdBER2CPEYQ6NfYgJjit%2FOs4pKZYTFdldV0l1OaBu19zvINfeVj4KK%2FPqFdjjEkGHcOwZhlSqVNeHQ3VM%2BhXstYLiM2TJZlOzNPZQxnW%2BMGbVmsjXHoXIy5EmK%2BCo2tBpOI6DPKGtQj&X-Amz-Signature=09f607e2aebd55c77fef8118cecb0814a255232eaebe55ffa1f979858add7b92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
