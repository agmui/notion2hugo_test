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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABGEXKP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFyRQE3yo7EhMMW9d5%2FxxUXH1NPHPFO3cp1ut3qJHCkDAiEAgMlZUR2EK6Lz%2FYLwLtkCaDmMzRTcTugSjyz64%2BEbI8cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBEgHr1symxBgk8QnSrcA7G063KiUsOGjYHlerbtsld7G78voj6xo%2F2LxsAhQf%2FU5AeWgq8rCNDqEz1JM1R1z4jhkc839%2BSb%2FVAtd47%2F3yAad7ZgoFcY3Pkhm5Tf6EkDoPy4iHuh7%2BhD5Gx%2FguATcOD2Wjjr3YZWo0u4Ns%2FQ2cbwoCDAiAEpXAfdGHH5si9%2FHiiuGHErllJtHWZy1DaKKMvFsa%2FT0o3w%2BgwL7qO%2BMzTnhNFxjA4DjoruHrExRkd6BdqEmPdlu7HxWtBl6%2FHD%2Fz6Q%2BMCX5P07GnxrhgqMGeapTpb%2BUWpS%2FLaOMII%2Ff%2Bk49%2F%2FxkjvtCp68d7SrT2EfiyJtbRL6Nf35fB6KYzwN0RQCar3GubUTtkEB%2FLdRcymgxrfb2X3ql3PeHJ%2FfX%2FnkHnnnjQJbImZ9s5U1kmVg4mc1ccyzgOI9%2FUSMCwg%2FnEMRhdNyMb%2BWg8dWneKwLHGYJICuzLCFJ4K1FeqxLBwTGulGC8IMiEexqCPgKJVcqnsinQXxx%2FRcE%2BZFh2hj%2F43lR4rFts3K9RyJTa%2BOaWtZ4OWmR%2BH49AhAE%2FJJi0F%2FuIm1xG8%2B4vZKiquD6G%2F5A%2FAakopkU5Ig9F%2BTO2MHMgcuA3hRlF0d3xR00SsltZEBbHe2KGOk3fU9JRt5EOV5MOSc9cIGOqUBZLkSoxYI18MKwd%2Fuo0yL3Ed%2FF%2BBeWNbtWHScXUlGypCSwJoi0YWDaXOtf52kLmH%2FLwr7iqeJ3SsuNWY9zQgXdY4M2cdAtp%2F20JkUxFPJ9ZiS%2BU7Xjx9BAbSG%2FxSjVZZ8dsyc2DLAW8YscqWYdQwA3kQqEnUVxP2CXxn5hBIFuM2Hh%2B5wIeSDJLDZeQUzRPlkEP4fOhtl2hUFOiMU%2BxGm32eFwb5u&X-Amz-Signature=d3d254513ab9e17759059f51767b41badd454d64b6868e684328214c7f0cdd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WABGEXKP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFyRQE3yo7EhMMW9d5%2FxxUXH1NPHPFO3cp1ut3qJHCkDAiEAgMlZUR2EK6Lz%2FYLwLtkCaDmMzRTcTugSjyz64%2BEbI8cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBEgHr1symxBgk8QnSrcA7G063KiUsOGjYHlerbtsld7G78voj6xo%2F2LxsAhQf%2FU5AeWgq8rCNDqEz1JM1R1z4jhkc839%2BSb%2FVAtd47%2F3yAad7ZgoFcY3Pkhm5Tf6EkDoPy4iHuh7%2BhD5Gx%2FguATcOD2Wjjr3YZWo0u4Ns%2FQ2cbwoCDAiAEpXAfdGHH5si9%2FHiiuGHErllJtHWZy1DaKKMvFsa%2FT0o3w%2BgwL7qO%2BMzTnhNFxjA4DjoruHrExRkd6BdqEmPdlu7HxWtBl6%2FHD%2Fz6Q%2BMCX5P07GnxrhgqMGeapTpb%2BUWpS%2FLaOMII%2Ff%2Bk49%2F%2FxkjvtCp68d7SrT2EfiyJtbRL6Nf35fB6KYzwN0RQCar3GubUTtkEB%2FLdRcymgxrfb2X3ql3PeHJ%2FfX%2FnkHnnnjQJbImZ9s5U1kmVg4mc1ccyzgOI9%2FUSMCwg%2FnEMRhdNyMb%2BWg8dWneKwLHGYJICuzLCFJ4K1FeqxLBwTGulGC8IMiEexqCPgKJVcqnsinQXxx%2FRcE%2BZFh2hj%2F43lR4rFts3K9RyJTa%2BOaWtZ4OWmR%2BH49AhAE%2FJJi0F%2FuIm1xG8%2B4vZKiquD6G%2F5A%2FAakopkU5Ig9F%2BTO2MHMgcuA3hRlF0d3xR00SsltZEBbHe2KGOk3fU9JRt5EOV5MOSc9cIGOqUBZLkSoxYI18MKwd%2Fuo0yL3Ed%2FF%2BBeWNbtWHScXUlGypCSwJoi0YWDaXOtf52kLmH%2FLwr7iqeJ3SsuNWY9zQgXdY4M2cdAtp%2F20JkUxFPJ9ZiS%2BU7Xjx9BAbSG%2FxSjVZZ8dsyc2DLAW8YscqWYdQwA3kQqEnUVxP2CXxn5hBIFuM2Hh%2B5wIeSDJLDZeQUzRPlkEP4fOhtl2hUFOiMU%2BxGm32eFwb5u&X-Amz-Signature=e2d8af6afc075b1f9810a7c2769983d50a3ca8b383f387ea74d0e4886868cab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
