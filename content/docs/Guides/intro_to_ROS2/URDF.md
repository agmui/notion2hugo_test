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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFDZM5G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCJE5lJGPn7VCkFOUuotJvnD%2BqoD91dbDGnEjzDbrjcVgIgL0ICvKt7OFtN0EPxWKUYL6CruySMwqpYYbFDUt1vBOsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO%2F6Vzd7OIcEDX%2FlCrcA0AHg6MXI7kk4DfXi1g6RzIVZCYSSA7%2BcddvH0o0bVW1NafEVzKJCfAMsEBT5W1%2F00baxjD7M%2FqGCfFStJjFypPBkT313cxOd90IC785L%2BjSzPOVYVyRESgx3CGMDU841fOPEmg7M1azWIh4lmBN5ZI7S2B2vpcYC8owVzDZGop7UHra%2BBScPzVqI%2B0XHj6kctEhqjU1TRgPezljR6MWJAJFzjMHdZt3pZ1ImRtDFAiyKKJrgVZsJ8rdLzOoSjJhVRBpSPo7MUOfmOHUAJPr0G6EBrveQojqSkRaWG5Yi6yRlGHfOqpyo1cHUExc7LkvVTEl7GDwNaqxCGH1%2BQ%2F%2BSLw5GH49%2F%2FAbwEOccnZWM4MCcs1LCDoRfKeuZX%2FsoDemnHHpPpoVDhg2Z1Z4QmPCHDNBJ5iUBQ3bShHXBkvfHW55JCG5o53Xh8IpNkB%2BAHk3Mm4CjK1Iv1lv4%2BHWNE2j3B4VsfLWamK2GVQX8t%2BNGVh03No4E%2FIi%2BaCGmtf92fw2KBlC2yJojw9s19eAtVjBkfAicMLKFVRm%2B2V6UcxzUiqkIn00UNbYIapJ9%2F9R6mdwWlq5lamzAQ71qhR2GNiQmNWOy9f%2FheS6uEf592P%2F91LBha%2FskhP31uIsLlBMMKPfv8EGOqUBdc2PFPwxJxALOBAXVzlTuM8AFrBoLEOPBtZimWEagwHMsKHIoBVISrDTWBvlgK5QPx70V14PtWPuZnAwObIinLMCO%2BCw2xXn1vbqJu4R3i5y8SQglRmaCv1NPFcsSTgx%2FmhTfqMWlsUZgHTAvR9Pkz6egEg7IQulCHlwetNqJQ4I4Rp%2FYEtl%2BtRAla2%2FfYTkah5hf8lpbuLkEHiIfzE%2FosDnpRbQ&X-Amz-Signature=6b0822acc6402d3b1bed5947a8bc2e6608397bf338d3ffed41b5e118cebf8626&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFDZM5G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCJE5lJGPn7VCkFOUuotJvnD%2BqoD91dbDGnEjzDbrjcVgIgL0ICvKt7OFtN0EPxWKUYL6CruySMwqpYYbFDUt1vBOsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPO%2F6Vzd7OIcEDX%2FlCrcA0AHg6MXI7kk4DfXi1g6RzIVZCYSSA7%2BcddvH0o0bVW1NafEVzKJCfAMsEBT5W1%2F00baxjD7M%2FqGCfFStJjFypPBkT313cxOd90IC785L%2BjSzPOVYVyRESgx3CGMDU841fOPEmg7M1azWIh4lmBN5ZI7S2B2vpcYC8owVzDZGop7UHra%2BBScPzVqI%2B0XHj6kctEhqjU1TRgPezljR6MWJAJFzjMHdZt3pZ1ImRtDFAiyKKJrgVZsJ8rdLzOoSjJhVRBpSPo7MUOfmOHUAJPr0G6EBrveQojqSkRaWG5Yi6yRlGHfOqpyo1cHUExc7LkvVTEl7GDwNaqxCGH1%2BQ%2F%2BSLw5GH49%2F%2FAbwEOccnZWM4MCcs1LCDoRfKeuZX%2FsoDemnHHpPpoVDhg2Z1Z4QmPCHDNBJ5iUBQ3bShHXBkvfHW55JCG5o53Xh8IpNkB%2BAHk3Mm4CjK1Iv1lv4%2BHWNE2j3B4VsfLWamK2GVQX8t%2BNGVh03No4E%2FIi%2BaCGmtf92fw2KBlC2yJojw9s19eAtVjBkfAicMLKFVRm%2B2V6UcxzUiqkIn00UNbYIapJ9%2F9R6mdwWlq5lamzAQ71qhR2GNiQmNWOy9f%2FheS6uEf592P%2F91LBha%2FskhP31uIsLlBMMKPfv8EGOqUBdc2PFPwxJxALOBAXVzlTuM8AFrBoLEOPBtZimWEagwHMsKHIoBVISrDTWBvlgK5QPx70V14PtWPuZnAwObIinLMCO%2BCw2xXn1vbqJu4R3i5y8SQglRmaCv1NPFcsSTgx%2FmhTfqMWlsUZgHTAvR9Pkz6egEg7IQulCHlwetNqJQ4I4Rp%2FYEtl%2BtRAla2%2FfYTkah5hf8lpbuLkEHiIfzE%2FosDnpRbQ&X-Amz-Signature=a80ec637dc0fd983e338d304a3c776fdfbc5f3a6bfe7dce0fe8c62df6a5bf3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
