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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRDLCDM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHipjoxZ47%2B1GmgC8AvRnu%2FmM%2FY5qqk0XrzPgtkfM7x%2FAiAYIqL%2FL0aU4ABusN5ssrFd9rwuvLr9M2Whq2acPmpoIyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM5J1k7SVviZq%2F8bXQKtwDjOAN641VXWyoEL6HroW4U%2F7uht%2Bs2%2FHmGsm3xzMNGtUu%2BGANgpbNqVBnjTe5ZBLfSC3ZF6EGoNQ6oFqoSo5wsjNTkXuRgzLHxZVeS3HsDMudviW%2BmluSZZEUEHiAM33UPsW%2Fpe8isDcmZ2YXjL1mPYgQU7ejGBMcl%2BUvZoF63s%2BePnlafBrjLZ33pxo5lzByS65JrtHFjUaC%2BFh9eBzvVrDdLZR0U6hYfLDgq52BU%2FdoglqFcK%2BJPMzyKIwd4DgdjJVEU4GVGLr3d1v52QThnFRt1ZbFf2x1a8g2IxORP%2FQUksG7u5nuljSZYZ43BDGQrJV5iPBmYUdGpqNQmBpeIy4yd2gTLziITIDK%2FwGpG5buY9n7yvxVuXYHNzSudY4bDk7UnvrVCEQcSeqp2yvza8rKdhacthMfhQGig8C%2FyqHSTEMp55JA%2F05Fm3ES4Epd5ptiQuERpc5MvnGirAC892AJZu%2Fw%2FFA3%2BvCF0JPClwKXlybuzzNm0zu0EahG07X3uF7KpTvb1hse0Crd8NPboItJTlvCiINLw7BBUjkckeBD7%2Bc6eD8EXzs1woMRubd9DsGcQZi%2FsRTmlpPtMO0Btn6l7hWBcWq5BvrWpxvqtSmHRQIZRNRzDvSzLzsw96K7wgY6pgGftmwy3448LNSUS2wFfvTC5ASGWx9euEX%2Bk6%2FaLP2NXB7mGo%2Fl7wlabpQffnefNK6wOFfb8qGpcCm2XIE5SoCUDD3kwvOhLCPrLmBJo1p3qENNOYme7bU8T0KmSTvMcreaGmdIac34iOIEv5Czq2S1eZo6xe5ZrRWt43024d2qKQV9P3qOzGPjPDSm3cZfizFkQDE9cKSg2XY%2BSIa9QAjyeqTEEpym&X-Amz-Signature=18dbd0dea0d8dbefa4f83686cb0b8196e444092a67bb2ee5778a41b0cf03d8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BRDLCDM%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHipjoxZ47%2B1GmgC8AvRnu%2FmM%2FY5qqk0XrzPgtkfM7x%2FAiAYIqL%2FL0aU4ABusN5ssrFd9rwuvLr9M2Whq2acPmpoIyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM5J1k7SVviZq%2F8bXQKtwDjOAN641VXWyoEL6HroW4U%2F7uht%2Bs2%2FHmGsm3xzMNGtUu%2BGANgpbNqVBnjTe5ZBLfSC3ZF6EGoNQ6oFqoSo5wsjNTkXuRgzLHxZVeS3HsDMudviW%2BmluSZZEUEHiAM33UPsW%2Fpe8isDcmZ2YXjL1mPYgQU7ejGBMcl%2BUvZoF63s%2BePnlafBrjLZ33pxo5lzByS65JrtHFjUaC%2BFh9eBzvVrDdLZR0U6hYfLDgq52BU%2FdoglqFcK%2BJPMzyKIwd4DgdjJVEU4GVGLr3d1v52QThnFRt1ZbFf2x1a8g2IxORP%2FQUksG7u5nuljSZYZ43BDGQrJV5iPBmYUdGpqNQmBpeIy4yd2gTLziITIDK%2FwGpG5buY9n7yvxVuXYHNzSudY4bDk7UnvrVCEQcSeqp2yvza8rKdhacthMfhQGig8C%2FyqHSTEMp55JA%2F05Fm3ES4Epd5ptiQuERpc5MvnGirAC892AJZu%2Fw%2FFA3%2BvCF0JPClwKXlybuzzNm0zu0EahG07X3uF7KpTvb1hse0Crd8NPboItJTlvCiINLw7BBUjkckeBD7%2Bc6eD8EXzs1woMRubd9DsGcQZi%2FsRTmlpPtMO0Btn6l7hWBcWq5BvrWpxvqtSmHRQIZRNRzDvSzLzsw96K7wgY6pgGftmwy3448LNSUS2wFfvTC5ASGWx9euEX%2Bk6%2FaLP2NXB7mGo%2Fl7wlabpQffnefNK6wOFfb8qGpcCm2XIE5SoCUDD3kwvOhLCPrLmBJo1p3qENNOYme7bU8T0KmSTvMcreaGmdIac34iOIEv5Czq2S1eZo6xe5ZrRWt43024d2qKQV9P3qOzGPjPDSm3cZfizFkQDE9cKSg2XY%2BSIa9QAjyeqTEEpym&X-Amz-Signature=55a7a7a82bc1a376372fef5507baec2ce0936075d880d003005fffb0ec7b0479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
