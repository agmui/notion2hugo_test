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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532TZ7VN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDX48ntpvSnRrA3GMYI4L2pSqnGanAS1cFI7%2F6jZ%2FKlmAIgBGGSK0Ck1zUY%2Fva8I0CHizuk0EdIAL7caw%2BZUw2Ad%2FYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVkgmgFkxNptf1O8CrcA5LQmusZKBsch%2F30%2BrcI5KYFAGftvDj0Wl2TTN1HdD3MQAhNdmUFXhHzDyhTcogU9yXRoZh2CNd90VVbkiXFFQ1nu1hWki%2Bo04aE7a2pXI7DeT4Wj19GR13TRy4xTDbLNwmDhJQKeUbzLamX1W9SLApntz%2BifFs6GEOB%2Bb0%2Bs8IvhVEADVzN9kV2aqpIKYLflo49FWdCKkwWPekB8fnVtpdcZNMGZqYi5sK4U1QSnR717s7chGLWafU%2BPDGcOwR%2FOuECLazD393WaOJRJgwsTB40KyI9k2GJOUwumT7rCwJHRmMy7YxBk35fLrjLzx%2Bo2ojIWa%2Bn167Cqti%2B7hYwDZThJ5S%2FIoLGRTUU2GYisdrA9ZdJCPw8oHkbhfdx3nvC0%2F8rM9n5ir4SryDzQRPCbjTqL4F9s2CyhG6Y0qHRxAehjcWJLnZptZYR3CBc81ae6F4MEOGpquoV8sbD8%2FCykX9lyhS6N4dmts2qFBQTqTwPhbvPN0V8CfLsm4LJogHZHLkAbSKYPgwDbQU8gdCKPXuuImU1MRVAn1FWnozD3VLEcbvOeIaoi12H0OSsIedW%2Fe8tm71BDwxkoEy0QX8c0oy398MN1FLEeL5Lq6hH4dg5OafUZvfbe71rC5Q6MN2Z6sMGOqUBCBCNd%2BA02BSuc5AX9bX6%2FLfo%2FDMuzi8%2BQXdLH%2BrwoCICxhsde54I3iaOsG6mFqm839d0iu8T2AxA0LdVAEJ6jkeU98Qx3bQgHhhpNxN4Q0xB8z9R8UZE4kqiglzu%2FcYS7HvN7vNyKlQsRQD7vS2ifEXmXKqO4KVCHDXT%2FmIjtSBRqz%2Bkvqv4LgRSneIXAadiAixIyqzgQEprWsh24a9LT%2BVZlzAF&X-Amz-Signature=83ae41d20cafadf70349b0cfe20f1b34caa392b2c21f5ced99499efd4d54ba93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466532TZ7VN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDX48ntpvSnRrA3GMYI4L2pSqnGanAS1cFI7%2F6jZ%2FKlmAIgBGGSK0Ck1zUY%2Fva8I0CHizuk0EdIAL7caw%2BZUw2Ad%2FYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVkgmgFkxNptf1O8CrcA5LQmusZKBsch%2F30%2BrcI5KYFAGftvDj0Wl2TTN1HdD3MQAhNdmUFXhHzDyhTcogU9yXRoZh2CNd90VVbkiXFFQ1nu1hWki%2Bo04aE7a2pXI7DeT4Wj19GR13TRy4xTDbLNwmDhJQKeUbzLamX1W9SLApntz%2BifFs6GEOB%2Bb0%2Bs8IvhVEADVzN9kV2aqpIKYLflo49FWdCKkwWPekB8fnVtpdcZNMGZqYi5sK4U1QSnR717s7chGLWafU%2BPDGcOwR%2FOuECLazD393WaOJRJgwsTB40KyI9k2GJOUwumT7rCwJHRmMy7YxBk35fLrjLzx%2Bo2ojIWa%2Bn167Cqti%2B7hYwDZThJ5S%2FIoLGRTUU2GYisdrA9ZdJCPw8oHkbhfdx3nvC0%2F8rM9n5ir4SryDzQRPCbjTqL4F9s2CyhG6Y0qHRxAehjcWJLnZptZYR3CBc81ae6F4MEOGpquoV8sbD8%2FCykX9lyhS6N4dmts2qFBQTqTwPhbvPN0V8CfLsm4LJogHZHLkAbSKYPgwDbQU8gdCKPXuuImU1MRVAn1FWnozD3VLEcbvOeIaoi12H0OSsIedW%2Fe8tm71BDwxkoEy0QX8c0oy398MN1FLEeL5Lq6hH4dg5OafUZvfbe71rC5Q6MN2Z6sMGOqUBCBCNd%2BA02BSuc5AX9bX6%2FLfo%2FDMuzi8%2BQXdLH%2BrwoCICxhsde54I3iaOsG6mFqm839d0iu8T2AxA0LdVAEJ6jkeU98Qx3bQgHhhpNxN4Q0xB8z9R8UZE4kqiglzu%2FcYS7HvN7vNyKlQsRQD7vS2ifEXmXKqO4KVCHDXT%2FmIjtSBRqz%2Bkvqv4LgRSneIXAadiAixIyqzgQEprWsh24a9LT%2BVZlzAF&X-Amz-Signature=0b4ba6f50635751c296ab0dead1b1951e4e3c2331334e40b7f790d548197caba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
