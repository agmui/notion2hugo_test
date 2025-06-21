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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDAWVB6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK6U%2B4Uh%2FV7p6pyOvFaI3BMQ6Qc2a0p424SKQWt6%2BTQAiEAmImrHcXBRNPxqMNAlcTxFJTs5dLNElkGqFtdp707bSYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNIOrbxt1%2F82UmiMSrcA9t5W3P94xnhmy1v6NtDrQMiR9T9%2B6z9d%2Br0%2FQQGS1QG9W2PG4eeFcZ2dGPWSNiLTqcmROWZh1Ww0ZDapf5dA%2BV%2FmDXC476nJ29xF1A5LPXXFAGHOriV4eRCAa%2BoA7xARQUW4g03lljsYzxLWJOLAaNV7uQz3BMTQL4IJI8nVI6eAapKI4y2C9Sah0l%2BsAj12I4TU3MQ%2BLkGr0MCv56FwmPKEpHKv8yNg7zsy3VjUEcduu%2BGkX94wIstq62Kq1lhZTjmDBdzlwKiJUKF9PlH%2BY5cxElkWnF%2BdKcHPRkl5aDw2xP8W6o9Gone5%2BHi624x6DdHcM89IWYz2T%2FneBcFjdGiuPnhH7%2B3RdCmkZpbwmzVB4Li%2FmX6Kh7Cz58wchvTSao3QCOeGdar%2BeZQueGI5eb0itQ4yyF4rSJ5rQmJ8yOPUqf8%2Ff7dWpwJG3tDPb%2FRcGTT5TFEaFfCALnj7mRME%2FvUx6bROmPRmUNXNrTsGqt%2F920%2F00a22Gwl1dewC3VvC2RiaTGLbhykl9TNc%2FaNYjMu7TtZeUlulMBYlJ%2FKhrLt937SYWUvGmc3y2Wj3Z7AhZlS6LyQezY%2FkMYStNSWBXhIC5QWRaYmKNQgFAtnFkLBRVjPcE9Vh0c%2BOKkvMM6v2MIGOqUB91jzB%2FP2kH98%2BfY4xP%2FV7m3Qc1NmNaIdCMHiNT72CbXFqfeH8nTHhbLe1WRyX2r8liiDlZ19FadFjcgTFiS2RGVUVjepIct%2BmCgNRW6HA%2B1togrUJzGY4A3gqq%2FG0W6QDQDR99LtoTCZoFZyW8S5pCL7P6WyknRXLoPzr1K5dh9V%2FJeWWLAIchlvLAggUQyqGrx4T2WY2bN9o6zhx2OvwRXrYOk9&X-Amz-Signature=503727f4f5c97e1fc8e6fa9eabbbfec8f7deb1a1fb6f2bd6cd08dd7d68e7ee8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMDAWVB6%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK6U%2B4Uh%2FV7p6pyOvFaI3BMQ6Qc2a0p424SKQWt6%2BTQAiEAmImrHcXBRNPxqMNAlcTxFJTs5dLNElkGqFtdp707bSYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNIOrbxt1%2F82UmiMSrcA9t5W3P94xnhmy1v6NtDrQMiR9T9%2B6z9d%2Br0%2FQQGS1QG9W2PG4eeFcZ2dGPWSNiLTqcmROWZh1Ww0ZDapf5dA%2BV%2FmDXC476nJ29xF1A5LPXXFAGHOriV4eRCAa%2BoA7xARQUW4g03lljsYzxLWJOLAaNV7uQz3BMTQL4IJI8nVI6eAapKI4y2C9Sah0l%2BsAj12I4TU3MQ%2BLkGr0MCv56FwmPKEpHKv8yNg7zsy3VjUEcduu%2BGkX94wIstq62Kq1lhZTjmDBdzlwKiJUKF9PlH%2BY5cxElkWnF%2BdKcHPRkl5aDw2xP8W6o9Gone5%2BHi624x6DdHcM89IWYz2T%2FneBcFjdGiuPnhH7%2B3RdCmkZpbwmzVB4Li%2FmX6Kh7Cz58wchvTSao3QCOeGdar%2BeZQueGI5eb0itQ4yyF4rSJ5rQmJ8yOPUqf8%2Ff7dWpwJG3tDPb%2FRcGTT5TFEaFfCALnj7mRME%2FvUx6bROmPRmUNXNrTsGqt%2F920%2F00a22Gwl1dewC3VvC2RiaTGLbhykl9TNc%2FaNYjMu7TtZeUlulMBYlJ%2FKhrLt937SYWUvGmc3y2Wj3Z7AhZlS6LyQezY%2FkMYStNSWBXhIC5QWRaYmKNQgFAtnFkLBRVjPcE9Vh0c%2BOKkvMM6v2MIGOqUB91jzB%2FP2kH98%2BfY4xP%2FV7m3Qc1NmNaIdCMHiNT72CbXFqfeH8nTHhbLe1WRyX2r8liiDlZ19FadFjcgTFiS2RGVUVjepIct%2BmCgNRW6HA%2B1togrUJzGY4A3gqq%2FG0W6QDQDR99LtoTCZoFZyW8S5pCL7P6WyknRXLoPzr1K5dh9V%2FJeWWLAIchlvLAggUQyqGrx4T2WY2bN9o6zhx2OvwRXrYOk9&X-Amz-Signature=b5bed1290f55c2bb4367c68d66065084a8c88f140784609a9f71cd7cef8b8d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
