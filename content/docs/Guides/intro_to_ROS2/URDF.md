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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNPKUIZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCz%2BeqhmvJMw6VUVX7A%2BD4LnVLerEuLieCunlLOuI8BRgIgCZOJZ8Rt8hN3pGn7B8Xkx09gBecPHa%2FTPYBdwSn8elMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FAak66pxe7whG%2FTyrcA%2BiA8YYV29afqtzmFjxFtLu%2BwPFYwB9S1ouXVj%2FvwXPozkO%2BdOBQS0GI9QdnCGWlgbGqATSLxiVbJ9BVB20UUp6IOCOsb94hfmu9%2BtlJB6x1H3zteDPUqyV2vClmwDFBK5r3JmZHLkSS9B%2BsgMTdnHETaOgdq0ApNE0O5g1AfdpNDIdada6WZai8C0zViy4XWwETvbr98jGypvuJPOsYcqYqANczbTbRncnU5bgmtfjuzjK7VMw11gmFLvy4MEvu%2FUZj0XychVqywjPsc1fo6OmcQhqfPe2BdwoiD4hrFXQwJd%2BdqT6ONiP2LQVK0N5MogWS6u1QeNH6miE71Wp9Fb7iTmcl2BCGH0Xk5m7pSorSIJv3bEkGHR4RECGgJRMC4flD3zli7pcHc%2BhaMxj%2BIr9ZZAHUmSWc1U432j%2F0KS0LFt7md5eHrZKF%2FSxj1T7ij2Krf29zOF1vHLSsW5nA7skWtaK1g9FL6xubsXBXS78EbtYK6anZCcmkFdHyXIM8hBWk8lZaVorsMa2WfnpHfiMQJmVgbfiGKkZ7zT3fPcug%2FENE99lGFhTxc4M1YA%2BPBkp%2Ff75Dumn2TGkoOwiU0Z6bGxgaMcMl%2BYT6lTZXxo9At3g20P%2BVEBIxkXvZMN2Ks78GOqUBL%2FxF1K%2BfUquWg5sxDgonrKbL3ldOaLeUKnUppHCkcPOb5EBgpZzbfCfC%2BTXNIi8sliLtKVw1yitgTe7f6rlnNi%2FTweef80rJcKDgmlHddAQgByNml1Fe%2BO7E4XlTmcxhaMcrOSilUeimZNPUNdQjBXQMtNLYQAlkLqxf3YoacrpA9su61nztcAKN02%2F%2FCijUwYkTzj1GY3gEvcCLpI8u5F%2F7mzIv&X-Amz-Signature=dd253b5e891283802166c017b840eab13d583c2b0685bc8b1dc8fc0a64fff506&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLNPKUIZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCz%2BeqhmvJMw6VUVX7A%2BD4LnVLerEuLieCunlLOuI8BRgIgCZOJZ8Rt8hN3pGn7B8Xkx09gBecPHa%2FTPYBdwSn8elMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FAak66pxe7whG%2FTyrcA%2BiA8YYV29afqtzmFjxFtLu%2BwPFYwB9S1ouXVj%2FvwXPozkO%2BdOBQS0GI9QdnCGWlgbGqATSLxiVbJ9BVB20UUp6IOCOsb94hfmu9%2BtlJB6x1H3zteDPUqyV2vClmwDFBK5r3JmZHLkSS9B%2BsgMTdnHETaOgdq0ApNE0O5g1AfdpNDIdada6WZai8C0zViy4XWwETvbr98jGypvuJPOsYcqYqANczbTbRncnU5bgmtfjuzjK7VMw11gmFLvy4MEvu%2FUZj0XychVqywjPsc1fo6OmcQhqfPe2BdwoiD4hrFXQwJd%2BdqT6ONiP2LQVK0N5MogWS6u1QeNH6miE71Wp9Fb7iTmcl2BCGH0Xk5m7pSorSIJv3bEkGHR4RECGgJRMC4flD3zli7pcHc%2BhaMxj%2BIr9ZZAHUmSWc1U432j%2F0KS0LFt7md5eHrZKF%2FSxj1T7ij2Krf29zOF1vHLSsW5nA7skWtaK1g9FL6xubsXBXS78EbtYK6anZCcmkFdHyXIM8hBWk8lZaVorsMa2WfnpHfiMQJmVgbfiGKkZ7zT3fPcug%2FENE99lGFhTxc4M1YA%2BPBkp%2Ff75Dumn2TGkoOwiU0Z6bGxgaMcMl%2BYT6lTZXxo9At3g20P%2BVEBIxkXvZMN2Ks78GOqUBL%2FxF1K%2BfUquWg5sxDgonrKbL3ldOaLeUKnUppHCkcPOb5EBgpZzbfCfC%2BTXNIi8sliLtKVw1yitgTe7f6rlnNi%2FTweef80rJcKDgmlHddAQgByNml1Fe%2BO7E4XlTmcxhaMcrOSilUeimZNPUNdQjBXQMtNLYQAlkLqxf3YoacrpA9su61nztcAKN02%2F%2FCijUwYkTzj1GY3gEvcCLpI8u5F%2F7mzIv&X-Amz-Signature=fe4ca9f951947050bc8f52de22d4855518c66e70c2e0b11128e534dc1044c557&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
