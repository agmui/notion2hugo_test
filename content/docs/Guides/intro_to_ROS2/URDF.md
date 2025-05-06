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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKW3DWB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfmNI%2BtTSXjyQvp7eDZrrnjWuO3JOeV9yR0q6VxUibqgIgY254%2B0p1R7rwMJFsnvYGklbyZIXPNU41o42UuMZjd8wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMMK6SyRPCOjh4v4RircAx%2BGUkaonBOv0%2FB%2F04QZzQeUtd%2BSa%2FLK394%2FJn1TV4qZevcdHeelyZ%2FxSIGkeWMWCJP0ATeybf9SOJmQdwlq%2FSLH6gKL6BSwvq3hIN6XQx2l3SJd58eQaniVqpW5zwIGpfapJj%2FQNL5IVF%2BUEgeAQmfDpdBJQPMqw9NC%2BcWe11RdVB%2BLIMv3dHWQ4QhEfDV17HG1i2%2FF0M3W64QEDqJeL5dNemXEXmPACCRJkrQtnZSMH7SB%2BQS55pL3in0JJA0C3dbwcF%2BYklOsBFJXHNTn7WZ6AsN9jNPICrGNerY46YC15SarD4Q%2BZJc78tROCT0KvOL%2F4yfMA1xoklggkhOnp4HV84UFkwZUeezBxqPuGOZnRPpSrTXOwDx0ttSlqDOdcxBrLg7KAT76yrzBc1%2BLrwFm7Ji0r%2Bx0aHm7N9A8vw5rHNl%2BY8XWreyT%2FwBHdvw2w9yhy0kz9Mq2ePxVoBxVpruWDUXUpSB1Ea5BgFeMmYgwzgWimzJSFSsQYxfbN86eMTCym1K8%2B5xfE%2BWcrwIXrbh32xIch1jR3qzspcAdljMYuUslT2uXMPAao4%2BuoXPk8gPPX4XvKvborBi2WjcQPorPmduN8i4ufYB0nSYn3svcE6xYGmcEg1AnBDsvMIDL5cAGOqUBbZB0ioHMhCLNqXB3qrutd5tFPYHOvt1nBDTNFHPq3m800AGGf8%2BH%2BrZg1humx7kgGBPmEa2bD6tV450iqGBB8vQDhlhJQ0vzLuPNNXmAVD43KXIlJDCp%2BlFXnLZeH10Mw3sFRMTYlclouUwTiq4lrgqki%2F9fucwnWzrTFYNL5lm%2BuPUzTgaZgKYtFUcfpWhxlMZyEfdqmXrsFiatQa3au0C5FE2i&X-Amz-Signature=c7c220030315fc502bca9e0e14f5ea13280047803479d4acf2a54ebab624fbc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCKW3DWB%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfmNI%2BtTSXjyQvp7eDZrrnjWuO3JOeV9yR0q6VxUibqgIgY254%2B0p1R7rwMJFsnvYGklbyZIXPNU41o42UuMZjd8wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMMK6SyRPCOjh4v4RircAx%2BGUkaonBOv0%2FB%2F04QZzQeUtd%2BSa%2FLK394%2FJn1TV4qZevcdHeelyZ%2FxSIGkeWMWCJP0ATeybf9SOJmQdwlq%2FSLH6gKL6BSwvq3hIN6XQx2l3SJd58eQaniVqpW5zwIGpfapJj%2FQNL5IVF%2BUEgeAQmfDpdBJQPMqw9NC%2BcWe11RdVB%2BLIMv3dHWQ4QhEfDV17HG1i2%2FF0M3W64QEDqJeL5dNemXEXmPACCRJkrQtnZSMH7SB%2BQS55pL3in0JJA0C3dbwcF%2BYklOsBFJXHNTn7WZ6AsN9jNPICrGNerY46YC15SarD4Q%2BZJc78tROCT0KvOL%2F4yfMA1xoklggkhOnp4HV84UFkwZUeezBxqPuGOZnRPpSrTXOwDx0ttSlqDOdcxBrLg7KAT76yrzBc1%2BLrwFm7Ji0r%2Bx0aHm7N9A8vw5rHNl%2BY8XWreyT%2FwBHdvw2w9yhy0kz9Mq2ePxVoBxVpruWDUXUpSB1Ea5BgFeMmYgwzgWimzJSFSsQYxfbN86eMTCym1K8%2B5xfE%2BWcrwIXrbh32xIch1jR3qzspcAdljMYuUslT2uXMPAao4%2BuoXPk8gPPX4XvKvborBi2WjcQPorPmduN8i4ufYB0nSYn3svcE6xYGmcEg1AnBDsvMIDL5cAGOqUBbZB0ioHMhCLNqXB3qrutd5tFPYHOvt1nBDTNFHPq3m800AGGf8%2BH%2BrZg1humx7kgGBPmEa2bD6tV450iqGBB8vQDhlhJQ0vzLuPNNXmAVD43KXIlJDCp%2BlFXnLZeH10Mw3sFRMTYlclouUwTiq4lrgqki%2F9fucwnWzrTFYNL5lm%2BuPUzTgaZgKYtFUcfpWhxlMZyEfdqmXrsFiatQa3au0C5FE2i&X-Amz-Signature=c7fe74002c2331ed13a6c03cffb2ecbfd61eb79e78391a5bb110b550dda7b888&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
