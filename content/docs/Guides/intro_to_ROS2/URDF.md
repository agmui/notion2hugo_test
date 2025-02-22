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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7NDDJ5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoUzg%2Bj1mxamgZS5nNbvhqgAiPZ8KjiR1U%2FX6CWCY8YAIgOfByHl5lK8M4aLevN9VMTM7wa2BkC%2BH9IcFFi%2BF8mS8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY8FvkFOmJA%2FFr30CrcA4o2%2Bvpncczd6S7x0iQt2Ij%2BItryqo1%2FyVZxrl4peYUKTLNNGDtt9knX8snVBTOxchWlUgblUbbOp%2B1fht2mXAb4brK5d1554O5akbtvmm%2BCK7em79%2Fr26feOKBuWBrXkC3r4MoG529TTWBu8HeS%2Fkl%2Ft3C0P1CYFGrxrpiFlTPXNLQHN%2FWVpxZRovLfxu8WXw%2BI9ZY3Ogs79CmRUs5mlD5x32AmXHqCH5xBjM1c7kFAZYd2KrgsvbeTLO0xnzpmsEQGULy3ypnbGEutsUDWX%2BYM6E21WHH0DC4u3BuP8X39VW%2BKtFzjTl2wqaOlLSvpjFeL0vKYiZlANITcJCBlhw8gqNf60qfAFNLamnWCtHkQYrT62uKVnzaO2eo43SR4Zzcci6KZMahCnb9GGAmGVGiHM7kUlceau6yD9kGGkF2edXAF74781qf%2FUlI81i5%2F%2FRyrIWcl%2F5ehF5Hnq7MF6mQYsqbIrfySPF5kYUiiUJhdtBwLs0lzYG08Nu%2FCqHwbbvqIKZrufd5ZAj7of4BuRTqh5OS5qZlQeLP%2BQXX7P%2F8%2FFqJd3%2FOqQNIihKEAQVpcMly8%2FDWAUNgU6qaTlPZsHJp4Po4LhpeEFQBQYrodmsovw%2Btt9XEhoKV4lCgEMPDP5L0GOqUBt8LO2TpwtgTDBDYGyeAnc1YS0e6bbWZDrtBZ1E%2FqEDfjOzVCRumAixtbG%2BPHvjRcWWGJ5GnrmSwQhPjUQ4xnM9rQ0GWGrQxSRSVOmQrUDk2nSyUlFIzB7L8FblOdPzxlz%2FOBZXltVTW06VCTo0cyx1r0LqzAbSoHm7i8EH5U%2B%2BgwUQ%2Bt29YRG8N0WKuowINQVAHKKpSEO9U%2BPOfcKGeuPUoJcV1C&X-Amz-Signature=bc57e04bf28816f747b2934516ad2f501711fb2e3fd6ddf9b54016b1bcb92cff&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7NDDJ5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoUzg%2Bj1mxamgZS5nNbvhqgAiPZ8KjiR1U%2FX6CWCY8YAIgOfByHl5lK8M4aLevN9VMTM7wa2BkC%2BH9IcFFi%2BF8mS8qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY8FvkFOmJA%2FFr30CrcA4o2%2Bvpncczd6S7x0iQt2Ij%2BItryqo1%2FyVZxrl4peYUKTLNNGDtt9knX8snVBTOxchWlUgblUbbOp%2B1fht2mXAb4brK5d1554O5akbtvmm%2BCK7em79%2Fr26feOKBuWBrXkC3r4MoG529TTWBu8HeS%2Fkl%2Ft3C0P1CYFGrxrpiFlTPXNLQHN%2FWVpxZRovLfxu8WXw%2BI9ZY3Ogs79CmRUs5mlD5x32AmXHqCH5xBjM1c7kFAZYd2KrgsvbeTLO0xnzpmsEQGULy3ypnbGEutsUDWX%2BYM6E21WHH0DC4u3BuP8X39VW%2BKtFzjTl2wqaOlLSvpjFeL0vKYiZlANITcJCBlhw8gqNf60qfAFNLamnWCtHkQYrT62uKVnzaO2eo43SR4Zzcci6KZMahCnb9GGAmGVGiHM7kUlceau6yD9kGGkF2edXAF74781qf%2FUlI81i5%2F%2FRyrIWcl%2F5ehF5Hnq7MF6mQYsqbIrfySPF5kYUiiUJhdtBwLs0lzYG08Nu%2FCqHwbbvqIKZrufd5ZAj7of4BuRTqh5OS5qZlQeLP%2BQXX7P%2F8%2FFqJd3%2FOqQNIihKEAQVpcMly8%2FDWAUNgU6qaTlPZsHJp4Po4LhpeEFQBQYrodmsovw%2Btt9XEhoKV4lCgEMPDP5L0GOqUBt8LO2TpwtgTDBDYGyeAnc1YS0e6bbWZDrtBZ1E%2FqEDfjOzVCRumAixtbG%2BPHvjRcWWGJ5GnrmSwQhPjUQ4xnM9rQ0GWGrQxSRSVOmQrUDk2nSyUlFIzB7L8FblOdPzxlz%2FOBZXltVTW06VCTo0cyx1r0LqzAbSoHm7i8EH5U%2B%2BgwUQ%2Bt29YRG8N0WKuowINQVAHKKpSEO9U%2BPOfcKGeuPUoJcV1C&X-Amz-Signature=a7b51eb822d04c7cb36a602e72d6d8897e66b699452f54fc6dfcfc229ac5b12b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
