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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMMKLVE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCJ5lYU2uJWnxcVwiWZLEtfMv13OkbUykYNLALV%2FGZ%2FfQIhAJygOYsst5nrf4lPCdn3AggzGMvpx3WQZ13rz%2BPzUjgaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYGxmtdjksM%2BIEkTcq3AOcOZNkkrDtIghkIBxoPB3%2FGp8b%2BguLbWdshu4eE3XOt2U82qyrmz41C8dhQEiWhl0yZIWTQUMpo%2F2uykEIa8C5subye81bjzbA93bopYEm%2F%2FaWISneclypcVwhbAXzyHZe042%2BR5PGjUGaZ84lS%2FGEsZ40l3nLTJ%2FrMAryl%2BzpTWaJjApjCX%2FHNs0F8P4O5%2FyNZxNjGMjgEFDjgA8SbgXE77%2Fy%2F2brBdGtKPyPpSrkjFw%2BLz%2Bmfp4quYNnEtO0McGuooKfSrqYGK4aTf2YfFS0G66f%2Fm321%2B%2F2Bs4O245zemxsLlujQNPriRXA24De0j3gDU4Cw5MHv1Ehl1pxPKRbntpu3guNPhvCIINF%2FEbsemzxUPcTzn0N9pgf3Hv08k2X0M7gQBsufRXaWBZ0xkwO1Aq00BR4ok2iy4DrEszxfrZpGe1I5ahySqj1iKZdU0XtoU0Zz3V2eTMuHSVQZRCuobiRcokq1IwBAEe7gQ9W0EPWuCTJ%2BN09XIdWB89YnhLqnFgIsUYbKngCFhfRWOmrS1qRZgUtc8cNFBt64bL8XraiGEXSvfQUy3GmfvU1cS4ZgPLSXTqYlXHVBY1%2FMlV7WEe5ruK42Vqe1xO4uc3lY8lD3i6M8S9txCcYjzDz0Z7EBjqkAaUK%2FnkWNY7Cy1gC%2F9paoHJnD1AUUGZd7j0C0gSZ30o32ENjv88AaawU7qcmkdBF39Cxx5TvEjdAVNZDzQC2g456TEbgJndgfDVURtaMsepYiF%2B9B%2BzAkZyc0Twlv9O%2BI7ZnuPti7uLW7axSP8XQSy3bJI1zBYU3GuhA8hr1tlRN0Vg3JGmOGpdiNRVeIc08WB0v%2F8HyUh4Vcj3%2FQHwlKmm%2FpVN6&X-Amz-Signature=a973a0c5925815b8f6738fd90e2d2edad5057981091a1e28705a12f2d224e51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMMKLVE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCJ5lYU2uJWnxcVwiWZLEtfMv13OkbUykYNLALV%2FGZ%2FfQIhAJygOYsst5nrf4lPCdn3AggzGMvpx3WQZ13rz%2BPzUjgaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYGxmtdjksM%2BIEkTcq3AOcOZNkkrDtIghkIBxoPB3%2FGp8b%2BguLbWdshu4eE3XOt2U82qyrmz41C8dhQEiWhl0yZIWTQUMpo%2F2uykEIa8C5subye81bjzbA93bopYEm%2F%2FaWISneclypcVwhbAXzyHZe042%2BR5PGjUGaZ84lS%2FGEsZ40l3nLTJ%2FrMAryl%2BzpTWaJjApjCX%2FHNs0F8P4O5%2FyNZxNjGMjgEFDjgA8SbgXE77%2Fy%2F2brBdGtKPyPpSrkjFw%2BLz%2Bmfp4quYNnEtO0McGuooKfSrqYGK4aTf2YfFS0G66f%2Fm321%2B%2F2Bs4O245zemxsLlujQNPriRXA24De0j3gDU4Cw5MHv1Ehl1pxPKRbntpu3guNPhvCIINF%2FEbsemzxUPcTzn0N9pgf3Hv08k2X0M7gQBsufRXaWBZ0xkwO1Aq00BR4ok2iy4DrEszxfrZpGe1I5ahySqj1iKZdU0XtoU0Zz3V2eTMuHSVQZRCuobiRcokq1IwBAEe7gQ9W0EPWuCTJ%2BN09XIdWB89YnhLqnFgIsUYbKngCFhfRWOmrS1qRZgUtc8cNFBt64bL8XraiGEXSvfQUy3GmfvU1cS4ZgPLSXTqYlXHVBY1%2FMlV7WEe5ruK42Vqe1xO4uc3lY8lD3i6M8S9txCcYjzDz0Z7EBjqkAaUK%2FnkWNY7Cy1gC%2F9paoHJnD1AUUGZd7j0C0gSZ30o32ENjv88AaawU7qcmkdBF39Cxx5TvEjdAVNZDzQC2g456TEbgJndgfDVURtaMsepYiF%2B9B%2BzAkZyc0Twlv9O%2BI7ZnuPti7uLW7axSP8XQSy3bJI1zBYU3GuhA8hr1tlRN0Vg3JGmOGpdiNRVeIc08WB0v%2F8HyUh4Vcj3%2FQHwlKmm%2FpVN6&X-Amz-Signature=92d6c7e74238d6edf388ae630615060a58ef770e962976227899dbd1532b3f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
