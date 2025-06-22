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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNSY5OS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNm1f3F96IIWcQPfUWgXS33rrnqTFgdGQgS1FNrwGBOwIhALw%2BPAxm85O8%2FF5oT%2FsRfa6rRcy6%2FzR2YP6P2jdkWoC7KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRP2yG5pbpb4pwx4Mq3AP6OaL0UyLUidQnfod7Y37b6QNqd7sz2bQ9NJOQOvBqk%2B7rOhL8En9Edoiz50mNIWYfoFdNiCDryGPnPJ7E81aRFrO%2FgUBdCD80hV6o%2BlgNR7qMzq2lo0rZgrGgxOIgL5pppVeqaMMQ47gNF24N16sU%2FwCY%2FYeW0Dl04QrHfWsJ1bLJX5krqQCdoEUybVIg4%2BTkvq9sbGX7Zv4DzmdT8s2e83pjYRs4fn%2Bq4pNTnvrcPe72NUzCOyBGXz52GLY4x41FAiunJdcnZ2CeiW2oPKs4VajnVRnVNzHAc3pftb549CU6jBZIRKeXmak%2FFvUNLWFMdCp%2FkRigcSDah4CRxvR1WaEiP%2Fy1%2B9mXlE18la3tWH96Q3VwcOWkDk%2Fc87shQA46R3%2FQOPJbMxRH7PCIp39HT9fvmkkVb6c3WD%2BudbBOP8k%2FuEEnKn148eVwSYccAznwbL895kL1pYKMOQeWlnjzndG4kQNuQmCwRucNRZCMdO%2F1ZgF4Upd2XbIY9wUodFosg3v6TfykYT7LivF5ySJUI%2BcY40vcUwYAOIl8Y07JJ4PyggCaz8xPbWwhKni7pktuIMyfbON6CL7hdk29k6dN4iVJNd%2BWf25x3q99pOpU9ZBYFKQRwQt1RlHOMTCJrN7CBjqkAdjyvSW%2B7412Tql2UN5oyIHKwpdHtMMQc9M666nX0pFmkbr9xgltmhqcQGElWdOmbK5Lae4bKgfD%2F8i6GQ%2Bd8j48fVmdcCz1RCpx4xt7o30gositxm4yA8cOXIWiVOfZ76XBVlefFfi9jwBJ8YVqaUyEvN6qBRxnPch%2BoaIcaWX%2FiPUuX4YY%2FjIIKLTzM%2BxBHb9rfKwgNDzMa5NNkhhLDBelalDD&X-Amz-Signature=0979e3e643bc7488f4508750807c4699697576402ba9a47410abc994183717dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNSY5OS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNm1f3F96IIWcQPfUWgXS33rrnqTFgdGQgS1FNrwGBOwIhALw%2BPAxm85O8%2FF5oT%2FsRfa6rRcy6%2FzR2YP6P2jdkWoC7KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRP2yG5pbpb4pwx4Mq3AP6OaL0UyLUidQnfod7Y37b6QNqd7sz2bQ9NJOQOvBqk%2B7rOhL8En9Edoiz50mNIWYfoFdNiCDryGPnPJ7E81aRFrO%2FgUBdCD80hV6o%2BlgNR7qMzq2lo0rZgrGgxOIgL5pppVeqaMMQ47gNF24N16sU%2FwCY%2FYeW0Dl04QrHfWsJ1bLJX5krqQCdoEUybVIg4%2BTkvq9sbGX7Zv4DzmdT8s2e83pjYRs4fn%2Bq4pNTnvrcPe72NUzCOyBGXz52GLY4x41FAiunJdcnZ2CeiW2oPKs4VajnVRnVNzHAc3pftb549CU6jBZIRKeXmak%2FFvUNLWFMdCp%2FkRigcSDah4CRxvR1WaEiP%2Fy1%2B9mXlE18la3tWH96Q3VwcOWkDk%2Fc87shQA46R3%2FQOPJbMxRH7PCIp39HT9fvmkkVb6c3WD%2BudbBOP8k%2FuEEnKn148eVwSYccAznwbL895kL1pYKMOQeWlnjzndG4kQNuQmCwRucNRZCMdO%2F1ZgF4Upd2XbIY9wUodFosg3v6TfykYT7LivF5ySJUI%2BcY40vcUwYAOIl8Y07JJ4PyggCaz8xPbWwhKni7pktuIMyfbON6CL7hdk29k6dN4iVJNd%2BWf25x3q99pOpU9ZBYFKQRwQt1RlHOMTCJrN7CBjqkAdjyvSW%2B7412Tql2UN5oyIHKwpdHtMMQc9M666nX0pFmkbr9xgltmhqcQGElWdOmbK5Lae4bKgfD%2F8i6GQ%2Bd8j48fVmdcCz1RCpx4xt7o30gositxm4yA8cOXIWiVOfZ76XBVlefFfi9jwBJ8YVqaUyEvN6qBRxnPch%2BoaIcaWX%2FiPUuX4YY%2FjIIKLTzM%2BxBHb9rfKwgNDzMa5NNkhhLDBelalDD&X-Amz-Signature=a3faf6929660e3b352560854fad8465377ca85d7211b131a811614c0a5ab2514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
