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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIRTEYK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeNqeXp27BkXXLDEa08VP04Roh9oLFS4WFLZZnADlk2AiA8WORsHUiRHnsqOQUHM7%2FEqL4ZGvdZc1I8A%2FJHQFtuMyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMj5u%2FlnqFlpoVHtWOKtwDJlM2UbXoqfb64jz551B8tFaWgwQZgXjQ13nc0CTRa1GN%2BlIHIWS3re0nW0A8SpHKLMd8kiHqViYx80OhwEqDWNYyUeYCVfStAeEv3DN0koELpLRKgkERnBuVHgcSRlDFHL%2BXLoBgxpRDMP2EsIT8sXkoVyPgr%2BbTxblB1dwsaEXabx3d76by2SA5gxbsO%2FiYyzZQWBDeuGawVSDLhMipyAd6v0G54ZNzAdJskOX03SfeBhCuTHxY2WiiT7FDRRJjM6WYdJprisl%2FwhxfcoGCWgYKkdMkoy9Y3TJzRxqT41dWyynRbKotJr8ydRhIcZJbPomWFRr8krXVsBd27b2bee6REBKx9MuR5fiI%2BuNig5zh0J1uruScuvp7YVjufqDVRpONKXq8en12w9wfL8gMmM3GpQXFJsNzpkAT7aTeSrD%2F7Sb1r8dA0P3JPhwylRwoqNCoPyrzjbml86VbffsROqtupjbg1QxjdqnZDPLVRF9H4w6zb1WrBwgMBXITAVGZ2snYjJvz0bTzhtzrTT7ZwheI29PRyF4NB5AjR42Q5H0HPRp2RXsmHtOX4IPQ%2B5RvIx6Y4H%2FnoB%2FabeR%2BLipBBgx0bp%2FsGfJCPiz5BfJZHDcTISmndpHFW1YNA3owxN7yvQY6pgEmKdh%2B05%2F9OLPcPItAUDmVx92bOA4I9mH2bcv5NapDNqBiUegWLLUPNerPj%2BjDHG3HYtgLQbML%2B37jBpG5DZP9brMgAgZfuYhTRKlZ1jcIggeJCOFv8q0JXqBpFpX7OyRX%2FF8aPHiMhcuCqoTqdRdymzpLT1VldOIoM%2BygQEad8ey2xM%2Bb3ZxeGzqz6%2B0UASvyble05WMJs%2BM9perIkoiWC0lDbFHk&X-Amz-Signature=6cff5f65b8e401508ee3ef267ee3826b0c23b830390304ac63d01ba118bd2078&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIRTEYK%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeNqeXp27BkXXLDEa08VP04Roh9oLFS4WFLZZnADlk2AiA8WORsHUiRHnsqOQUHM7%2FEqL4ZGvdZc1I8A%2FJHQFtuMyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMj5u%2FlnqFlpoVHtWOKtwDJlM2UbXoqfb64jz551B8tFaWgwQZgXjQ13nc0CTRa1GN%2BlIHIWS3re0nW0A8SpHKLMd8kiHqViYx80OhwEqDWNYyUeYCVfStAeEv3DN0koELpLRKgkERnBuVHgcSRlDFHL%2BXLoBgxpRDMP2EsIT8sXkoVyPgr%2BbTxblB1dwsaEXabx3d76by2SA5gxbsO%2FiYyzZQWBDeuGawVSDLhMipyAd6v0G54ZNzAdJskOX03SfeBhCuTHxY2WiiT7FDRRJjM6WYdJprisl%2FwhxfcoGCWgYKkdMkoy9Y3TJzRxqT41dWyynRbKotJr8ydRhIcZJbPomWFRr8krXVsBd27b2bee6REBKx9MuR5fiI%2BuNig5zh0J1uruScuvp7YVjufqDVRpONKXq8en12w9wfL8gMmM3GpQXFJsNzpkAT7aTeSrD%2F7Sb1r8dA0P3JPhwylRwoqNCoPyrzjbml86VbffsROqtupjbg1QxjdqnZDPLVRF9H4w6zb1WrBwgMBXITAVGZ2snYjJvz0bTzhtzrTT7ZwheI29PRyF4NB5AjR42Q5H0HPRp2RXsmHtOX4IPQ%2B5RvIx6Y4H%2FnoB%2FabeR%2BLipBBgx0bp%2FsGfJCPiz5BfJZHDcTISmndpHFW1YNA3owxN7yvQY6pgEmKdh%2B05%2F9OLPcPItAUDmVx92bOA4I9mH2bcv5NapDNqBiUegWLLUPNerPj%2BjDHG3HYtgLQbML%2B37jBpG5DZP9brMgAgZfuYhTRKlZ1jcIggeJCOFv8q0JXqBpFpX7OyRX%2FF8aPHiMhcuCqoTqdRdymzpLT1VldOIoM%2BygQEad8ey2xM%2Bb3ZxeGzqz6%2B0UASvyble05WMJs%2BM9perIkoiWC0lDbFHk&X-Amz-Signature=7bacbca65b2e6c99762701b920d7e0e2dffefae32e19ce4f76a2d826a78ba089&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
