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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXYNXKA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDg1y9Ux5yVHFCkQID1JlCjZBHJ9RjWF%2F1m0xf1GjT0YAIgEFuEdcWGD2X9G7rwlT2NMlGzI%2FayZ4Swe%2F9kVm0mN3cq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEI%2F%2F4r4xQ04t9pi5SrcA3ksljmsJYOyl4rw4vFS633haQcZ3cXNz%2FTNvaVhsgLIJhlGpawX14oAwX3CF1%2BIKG%2B4w2Av%2BaDQfIZv%2FjGkiwQDhZkxl1YM0tOkdY1pjZWnATjiP1%2B21Hl%2FSCZPyGmWd%2F1CV5%2FByTbTGamdK7KilEv7yaJ0V9Ek6a6%2Fap6pl2u1%2FYlJRjK9XGbTL6VZCsxDQqwxQWTAEImBP%2BG26Cj3n98ELszuhOcrVa7G28JtNu8nGmRMmTr%2BcYG7BtBBe9JJyarSuIiXMR1dhRJUH2sUmAPhFedZr3MFqJ9XalxAL%2BdnZcBmO6XLZdqx2Z7k8rQmLVGtS3YBhEs6RvEDr0Cm9Wkj9%2BpH6RRJiBWY6gt2ZSWDmy9jdc14oz6JfACYlYKMwxrqwufHSeqe7NF5lFvJoHH6s4dWE6vMm%2BmsSYAl1rwyjewBPfXUscP8Y61lvU5NTMM5Y5JRIHzEPaU32O5kJt88sIAI%2FrJ8Mrgxmimag8wIr0zzpv2yPEm3oU17wcQpcUqkpWNDFWmRNjxHg7HivV1iBjgyFRIacEE3S9yp23vCMw5vzfjg%2FD8H2v97s4d%2FCi00tdKGgx%2BNMYANP%2BkD7ewF9%2B1opj8J%2BwfgVr8Ok1gG7523%2Ft%2Fme8nMrChdMIiv3MMGOqUBSxeD8UrZWqE%2FcKO38j3ZxOo3Xolka107WzGvod0CG1Wo3nTwhGHbZsP5yIMpXOSlSffptM7b%2BaQSMKvZ60LvlPduZfLqVa15eo%2BmFtSGuC%2BneIuj%2BWJkIKmzDm1LHHHxCjmkjAg7%2F5n%2BpdgUD52Neosv2fQY28MWd%2FrGQYrzaD4gRryMr7a8AaSelO9GV1jAe95zBBqtuBV2x%2FtxlGwXBmsShR9M&X-Amz-Signature=a63d56bca0ff42767c0ab996504865f721a467a95499771d94f7c891b0242084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMXYNXKA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDg1y9Ux5yVHFCkQID1JlCjZBHJ9RjWF%2F1m0xf1GjT0YAIgEFuEdcWGD2X9G7rwlT2NMlGzI%2FayZ4Swe%2F9kVm0mN3cq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEI%2F%2F4r4xQ04t9pi5SrcA3ksljmsJYOyl4rw4vFS633haQcZ3cXNz%2FTNvaVhsgLIJhlGpawX14oAwX3CF1%2BIKG%2B4w2Av%2BaDQfIZv%2FjGkiwQDhZkxl1YM0tOkdY1pjZWnATjiP1%2B21Hl%2FSCZPyGmWd%2F1CV5%2FByTbTGamdK7KilEv7yaJ0V9Ek6a6%2Fap6pl2u1%2FYlJRjK9XGbTL6VZCsxDQqwxQWTAEImBP%2BG26Cj3n98ELszuhOcrVa7G28JtNu8nGmRMmTr%2BcYG7BtBBe9JJyarSuIiXMR1dhRJUH2sUmAPhFedZr3MFqJ9XalxAL%2BdnZcBmO6XLZdqx2Z7k8rQmLVGtS3YBhEs6RvEDr0Cm9Wkj9%2BpH6RRJiBWY6gt2ZSWDmy9jdc14oz6JfACYlYKMwxrqwufHSeqe7NF5lFvJoHH6s4dWE6vMm%2BmsSYAl1rwyjewBPfXUscP8Y61lvU5NTMM5Y5JRIHzEPaU32O5kJt88sIAI%2FrJ8Mrgxmimag8wIr0zzpv2yPEm3oU17wcQpcUqkpWNDFWmRNjxHg7HivV1iBjgyFRIacEE3S9yp23vCMw5vzfjg%2FD8H2v97s4d%2FCi00tdKGgx%2BNMYANP%2BkD7ewF9%2B1opj8J%2BwfgVr8Ok1gG7523%2Ft%2Fme8nMrChdMIiv3MMGOqUBSxeD8UrZWqE%2FcKO38j3ZxOo3Xolka107WzGvod0CG1Wo3nTwhGHbZsP5yIMpXOSlSffptM7b%2BaQSMKvZ60LvlPduZfLqVa15eo%2BmFtSGuC%2BneIuj%2BWJkIKmzDm1LHHHxCjmkjAg7%2F5n%2BpdgUD52Neosv2fQY28MWd%2FrGQYrzaD4gRryMr7a8AaSelO9GV1jAe95zBBqtuBV2x%2FtxlGwXBmsShR9M&X-Amz-Signature=164fd43ebca88bdda668aab9eeb3b83c686b0f27008ef77248f07f3926ca901e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
