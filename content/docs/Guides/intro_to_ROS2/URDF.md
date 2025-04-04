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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JIO72R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdDVb2WLIDZlLKLzmBDUpHc%2B3cshYDPyew%2FqcYpl%2Bd5wIhAOlP9sSaXzwrOxqLW9wPLHGhCDzYEfG0TCH8hYBlLFvSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjS1sBxMA5D4uBCCgq3APu1gMHak%2BmO27ySEPz%2Bsu9XxCJaEQFx%2FgWsTjwkO89tmRU5UzZJA%2BhLfXiRbsrEFDtX5HvHNd3kcmRTlLf%2Fao%2FQCo31T8tbR78rfCbN44aUe2sYRTsjtX9Y9dn9frM%2BxVRi1Pj72JmW18PCMXgHTDzH7v%2BRJprC2yIQmM3JHCrkZ4mlvdMAr6blBzHS39Zp7g8ET8cDajSSKPUWYDSDD5lhjHshvqKT9qNnPz3z6uz%2B%2BULARYP9zpAmhrs74dMIUoqZ3cuqyaOmhhQcTQlb3%2BWscapN%2FlTptxlz1QMwoYtfU%2BY7VCEltLHSBpvTz2NprAAe4dLdzc8JHj8LoRqRC0Bc0r2aypGr6S3l8lsEFUy1K4ymFcLfcFwl8tkEPB6YHVRohG%2BPJ0SBAdRcWa3v7qpAPoLMa6%2Bm3eKIWkuhkAzD9aZuetozR07S%2BV9srkiFBAsciIgqnblkt4buHfDmYjLuwKVnWBeILg0WiL29on8iudITXoctEX90TkJ4OoI4PMHO9rnFrOh8xmSaOmhqrXRHtuarEACBHFcr5pXCzyDPAqwEhiDTEM7kR5Sq4rA6Qps4rMW892mmSDa%2BfZQrVW%2BSpR5Lyyx5T2xn7lytM6gRgzm7sIl83uJnrxcKzDGxr2%2FBjqkAYli0gbykPiCCw%2FAt0nOMhIk1k1ICTH10JW4ylk2YqrXim94tAd3fx45HdpSPOgHVIdwI54dnbRAF61PJclBuKIH6IMEIcv86x18KdsoWgTTLww%2BNvbf2JCkn%2FctdBxfBankUN0laYa76utJM7UKVeoEGPX%2F9H5B3iSMRn3hheKxVokyUZxlyHNzprrdd1CgHCHDN0fbSHNa05fuNyueJAcZgkfI&X-Amz-Signature=91ad46e014ad4e777742cb306acdb45e9fbd394b70c1ae171d158d3816da4972&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JIO72R%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdDVb2WLIDZlLKLzmBDUpHc%2B3cshYDPyew%2FqcYpl%2Bd5wIhAOlP9sSaXzwrOxqLW9wPLHGhCDzYEfG0TCH8hYBlLFvSKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjS1sBxMA5D4uBCCgq3APu1gMHak%2BmO27ySEPz%2Bsu9XxCJaEQFx%2FgWsTjwkO89tmRU5UzZJA%2BhLfXiRbsrEFDtX5HvHNd3kcmRTlLf%2Fao%2FQCo31T8tbR78rfCbN44aUe2sYRTsjtX9Y9dn9frM%2BxVRi1Pj72JmW18PCMXgHTDzH7v%2BRJprC2yIQmM3JHCrkZ4mlvdMAr6blBzHS39Zp7g8ET8cDajSSKPUWYDSDD5lhjHshvqKT9qNnPz3z6uz%2B%2BULARYP9zpAmhrs74dMIUoqZ3cuqyaOmhhQcTQlb3%2BWscapN%2FlTptxlz1QMwoYtfU%2BY7VCEltLHSBpvTz2NprAAe4dLdzc8JHj8LoRqRC0Bc0r2aypGr6S3l8lsEFUy1K4ymFcLfcFwl8tkEPB6YHVRohG%2BPJ0SBAdRcWa3v7qpAPoLMa6%2Bm3eKIWkuhkAzD9aZuetozR07S%2BV9srkiFBAsciIgqnblkt4buHfDmYjLuwKVnWBeILg0WiL29on8iudITXoctEX90TkJ4OoI4PMHO9rnFrOh8xmSaOmhqrXRHtuarEACBHFcr5pXCzyDPAqwEhiDTEM7kR5Sq4rA6Qps4rMW892mmSDa%2BfZQrVW%2BSpR5Lyyx5T2xn7lytM6gRgzm7sIl83uJnrxcKzDGxr2%2FBjqkAYli0gbykPiCCw%2FAt0nOMhIk1k1ICTH10JW4ylk2YqrXim94tAd3fx45HdpSPOgHVIdwI54dnbRAF61PJclBuKIH6IMEIcv86x18KdsoWgTTLww%2BNvbf2JCkn%2FctdBxfBankUN0laYa76utJM7UKVeoEGPX%2F9H5B3iSMRn3hheKxVokyUZxlyHNzprrdd1CgHCHDN0fbSHNa05fuNyueJAcZgkfI&X-Amz-Signature=4cc0b2737493cc7d2e89571d236cebc0e84f55ce1f2df34fede682b8b44afcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
