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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZP2NJO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpwjwoTao4hFp3ICPCwG7IGDk65d4eJVxXIbKMaFzA8AIhAP%2FMZgqDUiYYhZoUTMiR2%2F73XnpHq7n1f4pROCB856G%2BKv8DCCoQABoMNjM3NDIzMTgzODA1IgyZ9I0evkh2XLy2LSwq3AMSgNuXkfa%2Fr8hiV%2BtM7USVKgbmyIFVh6pBFhKayTnPEtyFAWFcnbU8UH%2B8Km4L4Eqs%2BfbSTKwoemPE0I46%2FQB81ht2czPpn%2BnfFAMb3d%2BPPP4lEA%2FK6l%2BlTkuV7gFHFcCp6el7Pc0JUxE67URmwj5rs1h%2FzoaiyuxHBevxt%2FXWczq0iQ62bxodH9juxnjH%2F1XyA1Xsj3VPKRyOMIlGpvWRUtoyz9XXYuP%2Fo%2FdHC6ilIl2fgPhrB8UN37RkKctxDmbBKFIzc7WDpkbKJtyRBWHWcAXYG%2F72y9r4iUYBuQfp8c0ILYRALnDSpfNw4HC4T8bZBUo0olCZAnrcPtl2qFKStd93th%2FUJY3h1LAFpFtDQKEOIaz2fFa92zv%2FZ62QC0%2FHhMjaXZFdXHPY0sDYeUdY3P9v6SHkbbqURGPIBuTAXY05qqi%2BXaR4KgpdEuBTohJFIAeTI8PV2%2B0MsrnEtwQey4zO3G7XLYUrG9o%2F5FJrKf72N0aou%2Ffrd3HWf3nrpXSAC8GJ8DY3KdEJkiYCPkcCAOUUyQ%2FAsvbOJHMfAaxjVZZR%2FSQYHEXr4G%2BUrl4GxXkS7DJ1GQU7uFwAb3iPK9BBN%2Bbm64xw2NgyAssB1i%2FP4psCMlcJRK4IITzVKTDyyrzEBjqkAWWk6U7m30cqK84suCFP2VeCxbYsdFJuIMFeNUzZ1mN1y788xAyYHKNc6GF0%2BaBfiQu%2By6Z09YmhnN2qH%2BT6snkzrd2w5us2f9ay69ZxJwIZhQ3dsLOk6k427EOwawJXYeco2xxJ5wdW41yPxWeTmazJu7hrwifVAgjCLpqsL7bS0AKSY8QC0jsPJ0Td9YCddAMZICIvRUz%2FYxCQtFySv902%2B5Cq&X-Amz-Signature=72a20e624fe74a72b41481a6181b5a7985a1683bdb6ba4e3c96cebd5eda4b1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CZP2NJO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpwjwoTao4hFp3ICPCwG7IGDk65d4eJVxXIbKMaFzA8AIhAP%2FMZgqDUiYYhZoUTMiR2%2F73XnpHq7n1f4pROCB856G%2BKv8DCCoQABoMNjM3NDIzMTgzODA1IgyZ9I0evkh2XLy2LSwq3AMSgNuXkfa%2Fr8hiV%2BtM7USVKgbmyIFVh6pBFhKayTnPEtyFAWFcnbU8UH%2B8Km4L4Eqs%2BfbSTKwoemPE0I46%2FQB81ht2czPpn%2BnfFAMb3d%2BPPP4lEA%2FK6l%2BlTkuV7gFHFcCp6el7Pc0JUxE67URmwj5rs1h%2FzoaiyuxHBevxt%2FXWczq0iQ62bxodH9juxnjH%2F1XyA1Xsj3VPKRyOMIlGpvWRUtoyz9XXYuP%2Fo%2FdHC6ilIl2fgPhrB8UN37RkKctxDmbBKFIzc7WDpkbKJtyRBWHWcAXYG%2F72y9r4iUYBuQfp8c0ILYRALnDSpfNw4HC4T8bZBUo0olCZAnrcPtl2qFKStd93th%2FUJY3h1LAFpFtDQKEOIaz2fFa92zv%2FZ62QC0%2FHhMjaXZFdXHPY0sDYeUdY3P9v6SHkbbqURGPIBuTAXY05qqi%2BXaR4KgpdEuBTohJFIAeTI8PV2%2B0MsrnEtwQey4zO3G7XLYUrG9o%2F5FJrKf72N0aou%2Ffrd3HWf3nrpXSAC8GJ8DY3KdEJkiYCPkcCAOUUyQ%2FAsvbOJHMfAaxjVZZR%2FSQYHEXr4G%2BUrl4GxXkS7DJ1GQU7uFwAb3iPK9BBN%2Bbm64xw2NgyAssB1i%2FP4psCMlcJRK4IITzVKTDyyrzEBjqkAWWk6U7m30cqK84suCFP2VeCxbYsdFJuIMFeNUzZ1mN1y788xAyYHKNc6GF0%2BaBfiQu%2By6Z09YmhnN2qH%2BT6snkzrd2w5us2f9ay69ZxJwIZhQ3dsLOk6k427EOwawJXYeco2xxJ5wdW41yPxWeTmazJu7hrwifVAgjCLpqsL7bS0AKSY8QC0jsPJ0Td9YCddAMZICIvRUz%2FYxCQtFySv902%2B5Cq&X-Amz-Signature=5caf41c95cac450b99035f3dcde7ab0fd974c771762a18b887c8060765cb960b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
