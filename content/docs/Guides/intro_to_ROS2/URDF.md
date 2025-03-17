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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXQGCG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eOEtECqfGMc1FJX5cBdUng1O3JccDrRZocJtttwLLAIgFLgixU3uf1QI7G11WqACZ6TwHV%2BvJo7go5BeLmu8t1Iq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMACgdxxvWg96051lSrcAznlqrwbzKirhGXPrjXRN4c7wVdC5I4EeYmAefP5YYzIohbGzz8%2FdbuB3PDvF0O6dnVR7WfFHODa4VfG2p4CtndysCCtnrWaSIzf%2B4FPy%2FPK5YS720B60LgjC3Y7nzwznGe%2FqHdVnqadfhw469BdCEjo0Kou6lMPEVQYXZZ8Ypk%2B3VJ%2F%2Flpvyt2RhQ8UQZy%2BXbpBBX9rhwps8TzOiiCFtArg3m3Jh2jas3H8MM5feRkTuIa1pY3SCFViXFiooHtNI8IupPHmiP5h21CyKMYNoJMVRGQR7xZHU0tHTzZ6z768LUZSHVl1N1Qd2XXYXlSLJqaluvGnPjOYNhmmxdfxENCTJ1ZWFSybS6Ohb6Wyz%2BO1Y9QQ5IfkwP0XJPsVVKM1CiAbYnjmaf24GUknaDAehuxj7qS8H%2FlCGrvqu%2B7pbPSs392omyQH2N4wXaF4HH2zmwjDgc3GxOs4Ua4ahDL4mDv48RTKkLe%2BF7y1lhndo2A2CHphIgijyyZoh5YOiBPgfd3V0u7t3dWsVVk0COw7YL5k5AWYcS4GnvPNPw87zxp9n9Zat2jQByGxd4vwIQ2dRruE90gNON6AoINazTJWECdMpl7ffl0gV%2BRlTi7WD%2BSh53TB%2FIpPHVnpMJeHMMTw3b4GOqUB7F3mQRSWAV7SvsW%2BQN0YAZ0%2FqtsCWPjy4vTwaJTnvwS9AN5vkgTvCmwnRc4jE%2F%2BwCNDk0s6r5Ar%2B5oVogels1psPHLITZagOgvnC4kBpPgWA6Kvt9wX8EfjOYoJQiqx4fCSMd790XHFSdvXENZfmKunhko1mzmvJv1KQrCkZy3wUlyR4sq1iPkia4GHBCIdYzpo4skWbEqlpo3BWX%2F%2FPnQD3gcwR&X-Amz-Signature=a6efff2793eb2c6c2adb77cf9d02bc78b54c221c36565d571537675116d3b97f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJXQGCG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eOEtECqfGMc1FJX5cBdUng1O3JccDrRZocJtttwLLAIgFLgixU3uf1QI7G11WqACZ6TwHV%2BvJo7go5BeLmu8t1Iq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMACgdxxvWg96051lSrcAznlqrwbzKirhGXPrjXRN4c7wVdC5I4EeYmAefP5YYzIohbGzz8%2FdbuB3PDvF0O6dnVR7WfFHODa4VfG2p4CtndysCCtnrWaSIzf%2B4FPy%2FPK5YS720B60LgjC3Y7nzwznGe%2FqHdVnqadfhw469BdCEjo0Kou6lMPEVQYXZZ8Ypk%2B3VJ%2F%2Flpvyt2RhQ8UQZy%2BXbpBBX9rhwps8TzOiiCFtArg3m3Jh2jas3H8MM5feRkTuIa1pY3SCFViXFiooHtNI8IupPHmiP5h21CyKMYNoJMVRGQR7xZHU0tHTzZ6z768LUZSHVl1N1Qd2XXYXlSLJqaluvGnPjOYNhmmxdfxENCTJ1ZWFSybS6Ohb6Wyz%2BO1Y9QQ5IfkwP0XJPsVVKM1CiAbYnjmaf24GUknaDAehuxj7qS8H%2FlCGrvqu%2B7pbPSs392omyQH2N4wXaF4HH2zmwjDgc3GxOs4Ua4ahDL4mDv48RTKkLe%2BF7y1lhndo2A2CHphIgijyyZoh5YOiBPgfd3V0u7t3dWsVVk0COw7YL5k5AWYcS4GnvPNPw87zxp9n9Zat2jQByGxd4vwIQ2dRruE90gNON6AoINazTJWECdMpl7ffl0gV%2BRlTi7WD%2BSh53TB%2FIpPHVnpMJeHMMTw3b4GOqUB7F3mQRSWAV7SvsW%2BQN0YAZ0%2FqtsCWPjy4vTwaJTnvwS9AN5vkgTvCmwnRc4jE%2F%2BwCNDk0s6r5Ar%2B5oVogels1psPHLITZagOgvnC4kBpPgWA6Kvt9wX8EfjOYoJQiqx4fCSMd790XHFSdvXENZfmKunhko1mzmvJv1KQrCkZy3wUlyR4sq1iPkia4GHBCIdYzpo4skWbEqlpo3BWX%2F%2FPnQD3gcwR&X-Amz-Signature=3f9abe9153f351abdc31ec989587b1561198921da6bc105be95e307d4ad97d03&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
