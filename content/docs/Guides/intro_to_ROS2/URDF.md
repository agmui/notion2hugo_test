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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3WD23V%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZXoCpQR7Pw8eVNKcSGfo8bh5umr%2FELvp4Y6TzAAHezAiAvXpFwiD8HDHeKV08ymHSXZlXJagjfi%2FPQP%2FVfMx4g%2FyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwFtiq9P2WQsuOHOKtwD9hRdY0ymxwF%2BItzU%2BtPORkcv%2B3HwTYEy436MK56D3dlGVf6VdM44j0Q9Q9vbaFGk8iTCiCKgFyYhNdQrt5V3rA7MO%2FQCjL6HaKwjAyf68bwFwp0CbuBbHW%2BmDozj3SQfHXxf6fpfXq2Lmyuza556CgbN3i6LsFfgcTDkUImkhFaoJnxv1%2FIu55JnIb9DLJaWrw797HTVX6ewMIwZhNe6VokXAPyPUo4tz9iScwBziyJZJASodqJm3pBNbOO3v0B7JMG9Y4MN8fEYNlAx%2FvrbMWL5kjI23Dk3vlOX7BGNRS7CFqA2PwWjq6t6lq2tjkGoZsevK7xjMN3jAEQzTmXq1irguEqXvVavIEJ2kl8oMKrD2TbZRMgycg0YBEyPLH1d34n5iQJDNZU3ZbdkCXNUaujB8jlFuQI%2BxdAXezwbSGv8H0b4b4nnDDJ9dGjrb%2F2SLt36cb5Y2xZByVsSUfRlzXI2w9ohUlQPW%2ByZy%2BJP42JT2fSAkg%2BPtaQZks8%2FStrz251ApRE9m5cHkspQoeLOloZKpwD4%2ByP%2BZtGz6etMNxFzYGtezQbcPl1pIdtYp50FLPS24xAlDTo8UroLJLXDd91G%2BdHekHLpykQouxDYT%2BSgwE0BQMP0GyHe3EMw%2BvzIwwY6pgHOozAcGNPTt4DdXVu2lZokSyQ7cCtLCUyXN6%2F8v%2Fxy3oCwWZDUqq3iU5MfoqJmQLrhTn7qfOHoWx9FkyEspfFDcFHSqkxijSG4G0wfov88ycDB0%2BxKuxlAt4A0SI2YZ2dP%2Frb7xPdfNb%2BHUuHbxC1QJN0IPlBU%2F%2BYYuaeTDcVUdFmJU7toWZtDM%2FTJRrIY665c1CM95nNLKajYBzszAxM4sL3PC0xN&X-Amz-Signature=15818aadb027c4789afdc3dd1d495d1bb96d062eead97a780ecfdb246b00ab1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3WD23V%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZXoCpQR7Pw8eVNKcSGfo8bh5umr%2FELvp4Y6TzAAHezAiAvXpFwiD8HDHeKV08ymHSXZlXJagjfi%2FPQP%2FVfMx4g%2FyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHwFtiq9P2WQsuOHOKtwD9hRdY0ymxwF%2BItzU%2BtPORkcv%2B3HwTYEy436MK56D3dlGVf6VdM44j0Q9Q9vbaFGk8iTCiCKgFyYhNdQrt5V3rA7MO%2FQCjL6HaKwjAyf68bwFwp0CbuBbHW%2BmDozj3SQfHXxf6fpfXq2Lmyuza556CgbN3i6LsFfgcTDkUImkhFaoJnxv1%2FIu55JnIb9DLJaWrw797HTVX6ewMIwZhNe6VokXAPyPUo4tz9iScwBziyJZJASodqJm3pBNbOO3v0B7JMG9Y4MN8fEYNlAx%2FvrbMWL5kjI23Dk3vlOX7BGNRS7CFqA2PwWjq6t6lq2tjkGoZsevK7xjMN3jAEQzTmXq1irguEqXvVavIEJ2kl8oMKrD2TbZRMgycg0YBEyPLH1d34n5iQJDNZU3ZbdkCXNUaujB8jlFuQI%2BxdAXezwbSGv8H0b4b4nnDDJ9dGjrb%2F2SLt36cb5Y2xZByVsSUfRlzXI2w9ohUlQPW%2ByZy%2BJP42JT2fSAkg%2BPtaQZks8%2FStrz251ApRE9m5cHkspQoeLOloZKpwD4%2ByP%2BZtGz6etMNxFzYGtezQbcPl1pIdtYp50FLPS24xAlDTo8UroLJLXDd91G%2BdHekHLpykQouxDYT%2BSgwE0BQMP0GyHe3EMw%2BvzIwwY6pgHOozAcGNPTt4DdXVu2lZokSyQ7cCtLCUyXN6%2F8v%2Fxy3oCwWZDUqq3iU5MfoqJmQLrhTn7qfOHoWx9FkyEspfFDcFHSqkxijSG4G0wfov88ycDB0%2BxKuxlAt4A0SI2YZ2dP%2Frb7xPdfNb%2BHUuHbxC1QJN0IPlBU%2F%2BYYuaeTDcVUdFmJU7toWZtDM%2FTJRrIY665c1CM95nNLKajYBzszAxM4sL3PC0xN&X-Amz-Signature=190797327fbc0cd5305e02ee9c1d9b1761ec2bb3746fef15392209fd41cb3058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
