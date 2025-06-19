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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6A74KM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlfxl8r0FLaIxqBNwux13L2MDRXTpQuPgNUg1d2VG4JQIgUl0qzscYYQmwX3gpKvJn6HznWwswFZCbZiVxD%2Bk%2FTS8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVtsgvA7Sh6VP1n3SrcAzeDPpaNOolJ%2Fwfs2cCT4BsZBuCI%2FEq6lUbl3Z0WcNXH3r6ViYLdaOKcLPDMQH%2FOIyb3ssZolBhT5q0pbpyuSKd8ukAbSBRAy7SioySEoo3DAsxpDbtfjt0fO4NGSfcZPT3hbgwzLAHWtCxUIzGWX7B1Et2X%2F66opOAvy9AmfyhFgPbe%2BUDRcKXThzIhkYYrNrx7Yr1KU55EyGPF7yWyvW%2BhcIlIxh5FAZvLb9pTeAU3H3mEkCpEOEK1Nkms%2BQ54G0TIzh443DJI4btnSbTmUMpubaUqWwyno1B0Vd%2FLUa%2Fi%2BQdHnyZR0Ev8ahvXnZ0BHisBXHDNszt28VfSkczd7kJ9IAAl%2BkTna4RlW5Obpar8%2Fh%2FzSdcgwLYLUdoz8liYfRdqagHFvt2M1%2BQszQLusX8iQiDNC9UABBb%2Ft5Qqfj4%2BO%2Ftl%2F2PZYHgRl2WAtuqH6%2F5AtnKzOm9T6Jp2CYNoey33%2FTJRdbQ4GqQWDcwooL4EbzVHOh9i7GmRYXKD4viIgjsCqUJSmW0fsAeErDNtS5jXyXAeOf83UHlpgSTxVCfwDYkt9QfC9Squ5iz9HdvLTAhJYC2oY5U0ajocKbageyE1NPuseO%2BouqRdo4OZQbhsEkK9HZ7HAUx2A71mMNnd0MIGOqUBzIEiCC9Oe4EaBNIcsu2OyFkCKObNUV83LUtrWBIiAPMVoLLJ0%2FBeX54JdvNtHXKZ3MgmuUdRTLqw3x4mgzNPkuLLpqYPAG7MPAuoSKWfcZrqgefbSMcYyhNLAyeZ2bDD5oWAjTR6KDtdHaSSi%2F8rMiBJX%2FcCApjQHngJ6NgXrX6M3QI8xqCzvKKV6mmCDdo9dQcxC9joWJ%2BxtW6FAnFUz5lO1NB1&X-Amz-Signature=68b4f2c2c35f4c828a8a7087005ce5f482921d8ad2954b039c42c62eb74689d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6A74KM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlfxl8r0FLaIxqBNwux13L2MDRXTpQuPgNUg1d2VG4JQIgUl0qzscYYQmwX3gpKvJn6HznWwswFZCbZiVxD%2Bk%2FTS8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVtsgvA7Sh6VP1n3SrcAzeDPpaNOolJ%2Fwfs2cCT4BsZBuCI%2FEq6lUbl3Z0WcNXH3r6ViYLdaOKcLPDMQH%2FOIyb3ssZolBhT5q0pbpyuSKd8ukAbSBRAy7SioySEoo3DAsxpDbtfjt0fO4NGSfcZPT3hbgwzLAHWtCxUIzGWX7B1Et2X%2F66opOAvy9AmfyhFgPbe%2BUDRcKXThzIhkYYrNrx7Yr1KU55EyGPF7yWyvW%2BhcIlIxh5FAZvLb9pTeAU3H3mEkCpEOEK1Nkms%2BQ54G0TIzh443DJI4btnSbTmUMpubaUqWwyno1B0Vd%2FLUa%2Fi%2BQdHnyZR0Ev8ahvXnZ0BHisBXHDNszt28VfSkczd7kJ9IAAl%2BkTna4RlW5Obpar8%2Fh%2FzSdcgwLYLUdoz8liYfRdqagHFvt2M1%2BQszQLusX8iQiDNC9UABBb%2Ft5Qqfj4%2BO%2Ftl%2F2PZYHgRl2WAtuqH6%2F5AtnKzOm9T6Jp2CYNoey33%2FTJRdbQ4GqQWDcwooL4EbzVHOh9i7GmRYXKD4viIgjsCqUJSmW0fsAeErDNtS5jXyXAeOf83UHlpgSTxVCfwDYkt9QfC9Squ5iz9HdvLTAhJYC2oY5U0ajocKbageyE1NPuseO%2BouqRdo4OZQbhsEkK9HZ7HAUx2A71mMNnd0MIGOqUBzIEiCC9Oe4EaBNIcsu2OyFkCKObNUV83LUtrWBIiAPMVoLLJ0%2FBeX54JdvNtHXKZ3MgmuUdRTLqw3x4mgzNPkuLLpqYPAG7MPAuoSKWfcZrqgefbSMcYyhNLAyeZ2bDD5oWAjTR6KDtdHaSSi%2F8rMiBJX%2FcCApjQHngJ6NgXrX6M3QI8xqCzvKKV6mmCDdo9dQcxC9joWJ%2BxtW6FAnFUz5lO1NB1&X-Amz-Signature=ccf42f303ddc5e08b4988cc927189b2ebed56ca6018e3ed5b4e77262f5b7de56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
