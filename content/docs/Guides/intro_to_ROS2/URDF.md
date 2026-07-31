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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MD7QB2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXIevGPugHtgJAj4JYM32XqO8Dm6ttcGpv76ql5wzaHAIhAMslRfR3%2BnLeJ3zusXVIY1GEa3L%2BxkQ51hChj%2BPum0ESKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYqMPLEU3WG4LSldUq3APdXIVT9Yoe5mvtSQGl%2FoXmAzDihEjSdN%2BiCUsuKQPcJsK6l6ZOuStWntk4zOPKVxB%2Fp3q2OrjZ6aqglsxN%2B%2BXfumdEyTfuzfH0wsFX%2FX7b1T8tD14Wg1xnc%2Bxo2nIKrE8e8vzr4H5W92RqdQcTNIyPlC7y6Ds2MaMX8BYlX%2F7rOpDdhW%2FX0MLzgCV0YGaHnjjz1FOnuVHgkXnKpgr%2B%2FANzRGiNh4MhywsCHAxDrJFfLPGx3N7jaCr69zyrytwTvAmdRSTjfmgLAMNwmJU%2FpSkAOHZqFhe0CoD0NO0Y1WDEMrnRUrnV3F6fvQ2BF8tRPW%2Bv4GLQdwBS8TrTpezXdlr4sGu19U8w6oeGpqqjpf%2FzIgpj9mchDDbq0J7CvpIlcEzyZTeTWRiBQDiKe%2FIB1SgFkaFu0%2BTDY%2FcaEVcbTB5eU7laSyO3Q%2FtKifDR6GCowUgAtnPKZbONhCskq0Q%2FcJ2fG5rvR%2FzqY5tmYNfwDpZvg01DLBaUCSoI%2Bvo3rS5sVOT5gZnKu1BTRb5FYxSbcSIpqfYSOO02qEmfmtb%2BQnJSNWex03tsARbGhjtaarZRaJ%2BXpfxGNcdsx3BFz3cWBVnAIdYY5aXwU7ZJWat5Kf2y8JirtQtI2qf89i4UATDHlLDTBjqkATbWjED0raHug1RfIs37jWR%2FS2SR122WArnJNjCVuop9pcuk%2BBqy5Xnhr20F7%2BMvaZoNfB0hSBbN9YY630Cb2EmmYTnD8nOpr5Clf3Yk4aZQ5xe3Yl8tpMM7dZIdWL9NiBHvzDaBRY1hsyK%2BxoGNuoedwN3ZjGq3cv1FJO2oYGEGLW0SSpBs3zIsUJoiMFy20H6Fnk4cpvK4mYxeajUxKkGA2dX2&X-Amz-Signature=a0205699374455a8f397aeb2b9c5b93c32a60854317f47e456065f0513cecddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MD7QB2T%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXIevGPugHtgJAj4JYM32XqO8Dm6ttcGpv76ql5wzaHAIhAMslRfR3%2BnLeJ3zusXVIY1GEa3L%2BxkQ51hChj%2BPum0ESKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYqMPLEU3WG4LSldUq3APdXIVT9Yoe5mvtSQGl%2FoXmAzDihEjSdN%2BiCUsuKQPcJsK6l6ZOuStWntk4zOPKVxB%2Fp3q2OrjZ6aqglsxN%2B%2BXfumdEyTfuzfH0wsFX%2FX7b1T8tD14Wg1xnc%2Bxo2nIKrE8e8vzr4H5W92RqdQcTNIyPlC7y6Ds2MaMX8BYlX%2F7rOpDdhW%2FX0MLzgCV0YGaHnjjz1FOnuVHgkXnKpgr%2B%2FANzRGiNh4MhywsCHAxDrJFfLPGx3N7jaCr69zyrytwTvAmdRSTjfmgLAMNwmJU%2FpSkAOHZqFhe0CoD0NO0Y1WDEMrnRUrnV3F6fvQ2BF8tRPW%2Bv4GLQdwBS8TrTpezXdlr4sGu19U8w6oeGpqqjpf%2FzIgpj9mchDDbq0J7CvpIlcEzyZTeTWRiBQDiKe%2FIB1SgFkaFu0%2BTDY%2FcaEVcbTB5eU7laSyO3Q%2FtKifDR6GCowUgAtnPKZbONhCskq0Q%2FcJ2fG5rvR%2FzqY5tmYNfwDpZvg01DLBaUCSoI%2Bvo3rS5sVOT5gZnKu1BTRb5FYxSbcSIpqfYSOO02qEmfmtb%2BQnJSNWex03tsARbGhjtaarZRaJ%2BXpfxGNcdsx3BFz3cWBVnAIdYY5aXwU7ZJWat5Kf2y8JirtQtI2qf89i4UATDHlLDTBjqkATbWjED0raHug1RfIs37jWR%2FS2SR122WArnJNjCVuop9pcuk%2BBqy5Xnhr20F7%2BMvaZoNfB0hSBbN9YY630Cb2EmmYTnD8nOpr5Clf3Yk4aZQ5xe3Yl8tpMM7dZIdWL9NiBHvzDaBRY1hsyK%2BxoGNuoedwN3ZjGq3cv1FJO2oYGEGLW0SSpBs3zIsUJoiMFy20H6Fnk4cpvK4mYxeajUxKkGA2dX2&X-Amz-Signature=2e08cbc4b11680d6778f8bcc90d833c7bfc070b0d868672362546256985cf69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
