---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW6XBHS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGYsh9we8gO4vNFipZ0xe5hJNIue%2BKLv5g9YTRN%2BkKEAIhAMjiPy4LOxlEyOqSJdFJa9758dZUVV5zlarL6h4MlSVmKv8DCCYQABoMNjM3NDIzMTgzODA1Igw%2FzzuVvsvJ%2B0sKreAq3APp5akYwAMg8UqSC1LLR4ImTZPGeVHO6cn3GUKX3D1wzIheZftjTNWyRkSjIPEFb%2FhZnuRaEhrUpfct0ivZLHRNdeeugBV4eUCCeACL5D%2FsD%2FgONCOhftsnzZkmb4%2BKHWjMTJZuda1pf3pWD1Bt6q8GYm%2BRR4izpevjbQcw%2F9W1Vwqit8jO%2BVgIXjQGGMYDbwiGpBVWROoAkK7yXsCfm3bnL69ykNOqwiC143bfv%2Bt45rlgRzP%2BaZTxNmu0oau%2FJUpCRq%2BvuU2%2ByZI7xYq3o0R6iBd4f8InAqKAc2DfqunhamVvf03Z8nhenJ30bzhSFRWcI92BTw5rQwB6Z%2BwGRXvcOkbq0hoyOi8GLCBDo1BnoZwNv2VqoHyUopzqFHN2AnKA%2FOW%2By6JnFIcMmq6dQU9ZBp81gNLoCR2FAOsQlcy9GQAnSdNzFEXisEZ%2FUPnStX6ZJ1rkDZDoicOdjUbUivEqJrGO3diEIQMsicfcOl0jeT76qSCJY%2BQZpmnmZoI8e%2BIkb78nwLfKuprqo%2FxrDLVsnfIj2QRSl18O6qnHzRVNbLPipJvgDrE3HrJ4%2BaVSuhna6yXFSP7LdusLZukiKSHrpDjkJtowPVDpAMzTQXqnQE2QHW%2BSbTbNE0ToDTCHq%2FDEBjqkAbwH3HeS9gxoCM%2BRc2lpapWeBKbCNlzo6ciBmHnNs%2ByQEJHCjpDv%2BOm3Xm0CxzTDC9mzJITtikGXjrfWTFvyspg12bZtd5beuCLFK%2F9%2BPdjDh5wcVamH8Rtx%2FHW419RODNNwnx6D812LKdsMQ29A8E6mSkNxwM0Xwl9JjToIFeytI2m5%2FQp4rbUA338MMuEjla3jD4QIymsZh0HqopZpSSa69nIz&X-Amz-Signature=ce7cd86508ea0d44e7a0fdc433597d1b8e4d99e1331be35b42ece1e292433f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZW6XBHS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGYsh9we8gO4vNFipZ0xe5hJNIue%2BKLv5g9YTRN%2BkKEAIhAMjiPy4LOxlEyOqSJdFJa9758dZUVV5zlarL6h4MlSVmKv8DCCYQABoMNjM3NDIzMTgzODA1Igw%2FzzuVvsvJ%2B0sKreAq3APp5akYwAMg8UqSC1LLR4ImTZPGeVHO6cn3GUKX3D1wzIheZftjTNWyRkSjIPEFb%2FhZnuRaEhrUpfct0ivZLHRNdeeugBV4eUCCeACL5D%2FsD%2FgONCOhftsnzZkmb4%2BKHWjMTJZuda1pf3pWD1Bt6q8GYm%2BRR4izpevjbQcw%2F9W1Vwqit8jO%2BVgIXjQGGMYDbwiGpBVWROoAkK7yXsCfm3bnL69ykNOqwiC143bfv%2Bt45rlgRzP%2BaZTxNmu0oau%2FJUpCRq%2BvuU2%2ByZI7xYq3o0R6iBd4f8InAqKAc2DfqunhamVvf03Z8nhenJ30bzhSFRWcI92BTw5rQwB6Z%2BwGRXvcOkbq0hoyOi8GLCBDo1BnoZwNv2VqoHyUopzqFHN2AnKA%2FOW%2By6JnFIcMmq6dQU9ZBp81gNLoCR2FAOsQlcy9GQAnSdNzFEXisEZ%2FUPnStX6ZJ1rkDZDoicOdjUbUivEqJrGO3diEIQMsicfcOl0jeT76qSCJY%2BQZpmnmZoI8e%2BIkb78nwLfKuprqo%2FxrDLVsnfIj2QRSl18O6qnHzRVNbLPipJvgDrE3HrJ4%2BaVSuhna6yXFSP7LdusLZukiKSHrpDjkJtowPVDpAMzTQXqnQE2QHW%2BSbTbNE0ToDTCHq%2FDEBjqkAbwH3HeS9gxoCM%2BRc2lpapWeBKbCNlzo6ciBmHnNs%2ByQEJHCjpDv%2BOm3Xm0CxzTDC9mzJITtikGXjrfWTFvyspg12bZtd5beuCLFK%2F9%2BPdjDh5wcVamH8Rtx%2FHW419RODNNwnx6D812LKdsMQ29A8E6mSkNxwM0Xwl9JjToIFeytI2m5%2FQp4rbUA338MMuEjla3jD4QIymsZh0HqopZpSSa69nIz&X-Amz-Signature=6b8486f4b089b2f2598af3c69e8f887acf05307a45411d0774c3d3c28e36e41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
