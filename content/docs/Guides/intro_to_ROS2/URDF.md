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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7R3PIH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDx50MOOMt5LH2R2%2FfSReu1OvBTubxvVSUlx%2FAA2GDrKgIgEoCcjRCwk4g1aKErLYYa7kQLdeh7imdDQI%2FLQvYtLb8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATgfW6LhrM7816%2FfCrcAxSbuDQfeZUe5X%2FLturelQcBX69XPV8vRWiYuOW7vGUzGQ0128rN5uAv%2F%2FH0%2BruvcI0HSpFcUh%2Fx2J2ZurNy6txo9ITnJ%2B46k%2BnsLjyJnmvcCdHDctOqJKhotcKUDq8KQonEacLp5qvYIduFPdY1VFAMxjoHeBW5AptqqWNHIH11nZLKQ7i97uVvF7COXvYmDhSNxeSFlR7%2BE6X3xL08dWScNWbwKFt2tIZl2SQ15b5HMv6hPd%2FbY8UPtVKnWUy833uD5Fu6Tnuxx4cKWS7ltng3xIXyHhRJHOSUMEFHS4Vv36pRTGheQReeq1ukKpI6dJTOfkhTgRN9gaWOyI9xt6CRp6ExzeR79vBzFL8S%2F2wiHJH1ZxitZfmk1DDzwTYevBPCzPYyFzoy3sTkjqA%2Bx%2BwooD2MTWLVXeAoSewxWTbYZJgRYqriFe6jddpDcusxGe1yhiIrP98i2ari2TEuK70e4pnfQ1Baa64UBnTHGXYLEdy0w7mTXmBjMG1MEKj7WMwb2TjLHZajyeIWhNQTWIkO4xDwoPgMdv0AnRANiiJPTakP3ytCyeFG%2FQha6HiUxLykjuIyA1VSCNJmJDX%2BJmXwGz15Itn2t%2FKUT3tvCJ3Fc%2F%2B1tn99YfzlDmuOMO%2BU678GOqUBtYPxi1FVLmqRy7dSvN%2BWtY88N5SHfQoQf3SGMz2JeAzGNJx5JdyQYmIC%2F1m1wy165rRszmW5NDwZcditlDAkffK2iJ2%2F44PIrUEkoFzuSkJn9r22lca7nUUTuEeu8mWR5AxNbsVlrAz0Te%2FiIemHDRL1RRYC5yG22Ajli35LSQO12CDMKz9%2BzD2lrnThLwt5T6IvFB%2FE%2BWK4U7H2%2BdgC0z2n3f%2Fk&X-Amz-Signature=505d6d540829acb2ba7450e05b107901a173834dc845a18bbb8b2ef56dd44867&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7R3PIH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDx50MOOMt5LH2R2%2FfSReu1OvBTubxvVSUlx%2FAA2GDrKgIgEoCcjRCwk4g1aKErLYYa7kQLdeh7imdDQI%2FLQvYtLb8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATgfW6LhrM7816%2FfCrcAxSbuDQfeZUe5X%2FLturelQcBX69XPV8vRWiYuOW7vGUzGQ0128rN5uAv%2F%2FH0%2BruvcI0HSpFcUh%2Fx2J2ZurNy6txo9ITnJ%2B46k%2BnsLjyJnmvcCdHDctOqJKhotcKUDq8KQonEacLp5qvYIduFPdY1VFAMxjoHeBW5AptqqWNHIH11nZLKQ7i97uVvF7COXvYmDhSNxeSFlR7%2BE6X3xL08dWScNWbwKFt2tIZl2SQ15b5HMv6hPd%2FbY8UPtVKnWUy833uD5Fu6Tnuxx4cKWS7ltng3xIXyHhRJHOSUMEFHS4Vv36pRTGheQReeq1ukKpI6dJTOfkhTgRN9gaWOyI9xt6CRp6ExzeR79vBzFL8S%2F2wiHJH1ZxitZfmk1DDzwTYevBPCzPYyFzoy3sTkjqA%2Bx%2BwooD2MTWLVXeAoSewxWTbYZJgRYqriFe6jddpDcusxGe1yhiIrP98i2ari2TEuK70e4pnfQ1Baa64UBnTHGXYLEdy0w7mTXmBjMG1MEKj7WMwb2TjLHZajyeIWhNQTWIkO4xDwoPgMdv0AnRANiiJPTakP3ytCyeFG%2FQha6HiUxLykjuIyA1VSCNJmJDX%2BJmXwGz15Itn2t%2FKUT3tvCJ3Fc%2F%2B1tn99YfzlDmuOMO%2BU678GOqUBtYPxi1FVLmqRy7dSvN%2BWtY88N5SHfQoQf3SGMz2JeAzGNJx5JdyQYmIC%2F1m1wy165rRszmW5NDwZcditlDAkffK2iJ2%2F44PIrUEkoFzuSkJn9r22lca7nUUTuEeu8mWR5AxNbsVlrAz0Te%2FiIemHDRL1RRYC5yG22Ajli35LSQO12CDMKz9%2BzD2lrnThLwt5T6IvFB%2FE%2BWK4U7H2%2BdgC0z2n3f%2Fk&X-Amz-Signature=37851ffbbf351c26beaad3f31be319dd6959edd362a3a14e84cc6627b5bdc12f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
