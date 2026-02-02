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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM54RZ2Z%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIH1HNRZOOrIecP6KLd7HkcSxzqj6ySybJEiObC3YbPPxAiEAkOdj%2B83UkCEN6fGLXbZlr4VamkE9DdM0I2cYbBoLv6kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzTP6eoNcRN2z4EGircA5UV70VrEkiM3vy%2F3koYp0tTncTmMLsWTjBzS%2BuXA2cFGSEWWTlwDaTTZwOVlq8asBWzFcuJGcLkko0TblAOO1pwrlqRBtA7yfy07TrIALL3zphCAigNFYiWyp0q4ENXEZ2BNEC%2Bi8xqgMp0qohCV1a1xK1cicOL5ILpz%2BJP3lvE7kGjQt9YZ9QkHdyI0q%2B2FymzXKTFubc6gibJBrA%2BrqzQ6qBMD7WFAPF1A0SqYzPDBRJ%2FIuprjk0ifv4IHkwt3gES380C4fmO0DjZ8UrMRaFqV0TEuARnonp9%2F%2F%2FuqpoLXJVBUL2%2FCg0CDSJ6MYGubfU6j%2FfNEB4ib2a2GrXXv%2FmpeEPMOmtQ2b2TPF7%2FShM3XJdel2xUj%2FnikGC5IhNPIXB4QcFEE5YlWZPcd9MLrKcOVdiMjqcSIOX5%2B%2B01eU7CIIaw0LTpTX%2BgoEc9NrfIhrCh1Tw%2B%2ByqMsZ6zUPU%2FrwVTn7jdUo8xSCZ82OqfYsrhfqZxcrsKMXGFIdpRHstzwwLM%2BymIPOFm2GXpwtZBviZ0Igu8RjNEnvDP6S7CBqa4Rfm6LSDcbENAc63OU9zuew1%2BprxmdSYI1GSWIf5v9kIUg%2Fr6gD0R1xWE66NAmjWj7A5mVMpu4C3%2BWtQxMPuHgMwGOqUBnqWjcHvLSj1811jseMb%2B%2FkbaV8zelHG5lQn1pNVo5cP805vFE78A7TCScmUpAfP2Gjz5M73qFkm96fu0hbEpqPZn44prdk%2BdpsJw7SvpmPeFFOfWH%2Fjpl2ZNwRreb3cCmP3bnY2%2F8k7ugtKfPIymWHFSQz1sbJqw19uj%2Bb7XwI7JVRy8CUk7jAcrXkNuquiQTMo18C%2B1dEqw48XNfpHO4sViuxnW&X-Amz-Signature=6e11c7edb1fc1a71654e47eecce184c7bbd31683115640a1e583a3467ddb09c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM54RZ2Z%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIH1HNRZOOrIecP6KLd7HkcSxzqj6ySybJEiObC3YbPPxAiEAkOdj%2B83UkCEN6fGLXbZlr4VamkE9DdM0I2cYbBoLv6kqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzTP6eoNcRN2z4EGircA5UV70VrEkiM3vy%2F3koYp0tTncTmMLsWTjBzS%2BuXA2cFGSEWWTlwDaTTZwOVlq8asBWzFcuJGcLkko0TblAOO1pwrlqRBtA7yfy07TrIALL3zphCAigNFYiWyp0q4ENXEZ2BNEC%2Bi8xqgMp0qohCV1a1xK1cicOL5ILpz%2BJP3lvE7kGjQt9YZ9QkHdyI0q%2B2FymzXKTFubc6gibJBrA%2BrqzQ6qBMD7WFAPF1A0SqYzPDBRJ%2FIuprjk0ifv4IHkwt3gES380C4fmO0DjZ8UrMRaFqV0TEuARnonp9%2F%2F%2FuqpoLXJVBUL2%2FCg0CDSJ6MYGubfU6j%2FfNEB4ib2a2GrXXv%2FmpeEPMOmtQ2b2TPF7%2FShM3XJdel2xUj%2FnikGC5IhNPIXB4QcFEE5YlWZPcd9MLrKcOVdiMjqcSIOX5%2B%2B01eU7CIIaw0LTpTX%2BgoEc9NrfIhrCh1Tw%2B%2ByqMsZ6zUPU%2FrwVTn7jdUo8xSCZ82OqfYsrhfqZxcrsKMXGFIdpRHstzwwLM%2BymIPOFm2GXpwtZBviZ0Igu8RjNEnvDP6S7CBqa4Rfm6LSDcbENAc63OU9zuew1%2BprxmdSYI1GSWIf5v9kIUg%2Fr6gD0R1xWE66NAmjWj7A5mVMpu4C3%2BWtQxMPuHgMwGOqUBnqWjcHvLSj1811jseMb%2B%2FkbaV8zelHG5lQn1pNVo5cP805vFE78A7TCScmUpAfP2Gjz5M73qFkm96fu0hbEpqPZn44prdk%2BdpsJw7SvpmPeFFOfWH%2Fjpl2ZNwRreb3cCmP3bnY2%2F8k7ugtKfPIymWHFSQz1sbJqw19uj%2Bb7XwI7JVRy8CUk7jAcrXkNuquiQTMo18C%2B1dEqw48XNfpHO4sViuxnW&X-Amz-Signature=eac41ccb5ef7163e4adf4b6d2fb80fc6809a8d317fb13d2c1e9ce707b0499c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
