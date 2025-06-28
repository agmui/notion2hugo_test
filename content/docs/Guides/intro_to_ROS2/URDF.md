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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZQFOGG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZs2Nqmac5Rih4kHKEHwJQp95UVbW7RlNjwty46BZtQIgbQ7OflHGtvDAFpWWX45HCsM4D%2F2VhqboGakZ47X9Yg0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAesHNfiF7SBDRhkuSrcA5K9yEdpggrWbqSAfAPr6ASH5eqrgOHTC62888at19BnkIz3pzHFSRPzY6wMQhpU8bVPHmSpa%2FEVTmu3wnjY7jf3NhNj%2BtJN2YEa%2BmQPQCAbaBIGD5NZdpEuFt4oc5mONtaKDMPYLiUNdnXEeD35LoVcXnCXU2BzH0AsBmne7hXJx7ocwBwVOdEy%2ByV1ZIvYNK%2FyXHszhkfGwbH0CU%2F%2B5SAYPM%2BxgrXAaJq9BpnEltkomiJJB2gAkW4A2USVlj61OHJasg544SLhPS62s7R8WXZermlEyi8TJ233PlIhIjTLowP0jdZzgT2wAg7bQlu0Lw43wNg%2BdnrM7jBPv7kEtJd%2BsO95CBEjS0PJLX0RnApnJUXb0%2FuT5YBU%2FomnRypiW2N6OUeGPe62icmsfj695EMXAkKtx%2FBA2rNfYd9U%2B8Lcixg45K8J5Qty6lBHdKm7R3r5c7hurPOhmESp336RyCMLxxmU8r5KbDNmhQGCX%2BbIV3vL2jHJPJbllLBWbHehYeUNtMuQLYZDTDSuYO4Hr129%2BPbnH5oCf7ljRhL1w34o1Ju9ifd9Sl5UG4Ix7m6Y0zqeSsqAa36ouRq3UNpKpnmvbZHifhJOr4mxDVf4wxYjnMYo%2FMlN1qCRtF92MOvJ%2FsIGOqUBcRPfBao1ZtmjFo3GaquuewCdXmqkY801k9S537bcBMEmnpHR8wPVeo%2Bu%2BvT1ppRKrRxflUB7YzY9yc%2FuKf%2FFUqr3CQw%2FaU3Cuondi%2B4GbBJLaA4O1yE0ZKQ4CcPkklEHsV6eolL2Mld6L6JZRFHXu6sv9FVQ0B82y9kQtOGW9JdiN3G3TDYJnj86yaZrm0k2DKcAizLPCeuFUSiiEC73cv%2Bn75oo&X-Amz-Signature=4ae3bfb6fdffe881555bb5e65444c2e59f9a58d7ab3142ee13104811c7dc3470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZQFOGG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyZs2Nqmac5Rih4kHKEHwJQp95UVbW7RlNjwty46BZtQIgbQ7OflHGtvDAFpWWX45HCsM4D%2F2VhqboGakZ47X9Yg0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAesHNfiF7SBDRhkuSrcA5K9yEdpggrWbqSAfAPr6ASH5eqrgOHTC62888at19BnkIz3pzHFSRPzY6wMQhpU8bVPHmSpa%2FEVTmu3wnjY7jf3NhNj%2BtJN2YEa%2BmQPQCAbaBIGD5NZdpEuFt4oc5mONtaKDMPYLiUNdnXEeD35LoVcXnCXU2BzH0AsBmne7hXJx7ocwBwVOdEy%2ByV1ZIvYNK%2FyXHszhkfGwbH0CU%2F%2B5SAYPM%2BxgrXAaJq9BpnEltkomiJJB2gAkW4A2USVlj61OHJasg544SLhPS62s7R8WXZermlEyi8TJ233PlIhIjTLowP0jdZzgT2wAg7bQlu0Lw43wNg%2BdnrM7jBPv7kEtJd%2BsO95CBEjS0PJLX0RnApnJUXb0%2FuT5YBU%2FomnRypiW2N6OUeGPe62icmsfj695EMXAkKtx%2FBA2rNfYd9U%2B8Lcixg45K8J5Qty6lBHdKm7R3r5c7hurPOhmESp336RyCMLxxmU8r5KbDNmhQGCX%2BbIV3vL2jHJPJbllLBWbHehYeUNtMuQLYZDTDSuYO4Hr129%2BPbnH5oCf7ljRhL1w34o1Ju9ifd9Sl5UG4Ix7m6Y0zqeSsqAa36ouRq3UNpKpnmvbZHifhJOr4mxDVf4wxYjnMYo%2FMlN1qCRtF92MOvJ%2FsIGOqUBcRPfBao1ZtmjFo3GaquuewCdXmqkY801k9S537bcBMEmnpHR8wPVeo%2Bu%2BvT1ppRKrRxflUB7YzY9yc%2FuKf%2FFUqr3CQw%2FaU3Cuondi%2B4GbBJLaA4O1yE0ZKQ4CcPkklEHsV6eolL2Mld6L6JZRFHXu6sv9FVQ0B82y9kQtOGW9JdiN3G3TDYJnj86yaZrm0k2DKcAizLPCeuFUSiiEC73cv%2Bn75oo&X-Amz-Signature=38f761f6f70ccfe7ddb68f0c57bea1b3a4ea633affe54ea8d268e2c188763934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
