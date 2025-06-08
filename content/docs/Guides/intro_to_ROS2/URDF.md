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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGP7QCQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfDvVO%2BoGiOKFmZm4kWAkcwje1QqKhAA8lzX6G1CDydAiEA14HYTWQWh3InK4yVjur5tZCnxr3jTLWN848nc9XmU%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb4YszVB0xXWMHGzyrcA8dVMrgyhfGoe8p8vK4WpF4jVwhVzFvIAX2mhk2D1zaaGJza%2BNVo8FsO9%2FzyNBfdv4NfVUrJNTzsPKul7DjDVEE7VfVdpEMicwEtp0A8zeaIXu7YrDkT5%2FORp0%2B%2BdSFTEFOk7NFu4mqeLEZnGCy3%2FWuMgIsp2%2FW1K7wNtgQBsSYAh0IoHfaUz5V%2BCYJCLHBSvRFwLAFOsg%2FySYvwMRE3JJdQ0E8%2BofyDyAY0llcvCAhSUouNtZgh1nJKjWOwWZ4RbMd%2FDdQN8%2BeFTK2FoK1Hktw%2BPHmjFSMl4WYU%2FghZIMp0XZ7WzgPrWnHAUbJXkCjW%2FwRDKDie4r2V2q6Wfim1ZmjNQPaRXUYF1dVvmf4ijM7mFREZVYWCSeawK96Crk%2F2PKDpIca9MoOGRG6nLY3gvdvqlAj9HmeeEoXnNypqHzCvGXHnEiA%2BLJrW%2FdsNB7SgNj16iirYywEgfo0we0r9S0%2B0wlLnW3xNSEdMNhG5mWCqLOsHb8JgeK%2BRBGtRNtBFtIgyG%2B59D644rHnnVCALR5vLsIcJZ0lF28sl6ZFeeny02vdxybg3JP5ax%2Ffod0uCDW5k387E87Xwn42mqQwMKif%2BpDACrLOi240N50PnMHd2slnc6w0VGUzjCFmlMN2mlcIGOqUBr2C0EhsBpfQ%2B1YyUk0RoMwV66x54%2BDLqQulHVvNL4%2Fj6qEgUCm9uwDlCLHRBIk8JjQYzDyaj3240MWaGMf1v8lkDTTBimi9lscb4mPlJ2LzcAGxZ357Bsl7asl%2F68uNK55KJzhBfqdkYfhjBEs1mxE31c%2F7IWLp7QuwlN5hdBqR%2B3uajLdu1wW0i80maQO5EV%2FoIr12%2Fg0eOpbtlz7uP%2BY75jfF6&X-Amz-Signature=f2b6e435053be297b2ac360380b6334510a3e2ef70a7d9744647f2f829334591&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGP7QCQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfDvVO%2BoGiOKFmZm4kWAkcwje1QqKhAA8lzX6G1CDydAiEA14HYTWQWh3InK4yVjur5tZCnxr3jTLWN848nc9XmU%2F4qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb4YszVB0xXWMHGzyrcA8dVMrgyhfGoe8p8vK4WpF4jVwhVzFvIAX2mhk2D1zaaGJza%2BNVo8FsO9%2FzyNBfdv4NfVUrJNTzsPKul7DjDVEE7VfVdpEMicwEtp0A8zeaIXu7YrDkT5%2FORp0%2B%2BdSFTEFOk7NFu4mqeLEZnGCy3%2FWuMgIsp2%2FW1K7wNtgQBsSYAh0IoHfaUz5V%2BCYJCLHBSvRFwLAFOsg%2FySYvwMRE3JJdQ0E8%2BofyDyAY0llcvCAhSUouNtZgh1nJKjWOwWZ4RbMd%2FDdQN8%2BeFTK2FoK1Hktw%2BPHmjFSMl4WYU%2FghZIMp0XZ7WzgPrWnHAUbJXkCjW%2FwRDKDie4r2V2q6Wfim1ZmjNQPaRXUYF1dVvmf4ijM7mFREZVYWCSeawK96Crk%2F2PKDpIca9MoOGRG6nLY3gvdvqlAj9HmeeEoXnNypqHzCvGXHnEiA%2BLJrW%2FdsNB7SgNj16iirYywEgfo0we0r9S0%2B0wlLnW3xNSEdMNhG5mWCqLOsHb8JgeK%2BRBGtRNtBFtIgyG%2B59D644rHnnVCALR5vLsIcJZ0lF28sl6ZFeeny02vdxybg3JP5ax%2Ffod0uCDW5k387E87Xwn42mqQwMKif%2BpDACrLOi240N50PnMHd2slnc6w0VGUzjCFmlMN2mlcIGOqUBr2C0EhsBpfQ%2B1YyUk0RoMwV66x54%2BDLqQulHVvNL4%2Fj6qEgUCm9uwDlCLHRBIk8JjQYzDyaj3240MWaGMf1v8lkDTTBimi9lscb4mPlJ2LzcAGxZ357Bsl7asl%2F68uNK55KJzhBfqdkYfhjBEs1mxE31c%2F7IWLp7QuwlN5hdBqR%2B3uajLdu1wW0i80maQO5EV%2FoIr12%2Fg0eOpbtlz7uP%2BY75jfF6&X-Amz-Signature=da1df068e894cf5de3f5c2277f031f46f66a3f7a3d0538f133a5b070a6f3cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
