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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGBDRRK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd3d55VlXOd4%2BL3Ce82cZlGxHzfb5cwcciK9mUBGTeCAiAcq3%2B4hb0j6rP3HgMBYmk%2Ba76pQRHKBFytLya2HXJTPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1xkeQAz74sM2PhKKtwDrSoFa%2Fc%2Fqo%2BfCM5Dqh2w23AAUrUMnLgt4PKb%2B8lBPoa2k%2Bxknv8Sc41VszN9L%2F3rqD3KIieTt4%2B2QGqH0hdArCKPMbDI4RDFMC7mHTRLnDkp45UD7TRPNi7CgxEpTZ433%2FucYGIwljgeOxQODLvxh0K5UdJfiXQ63rPOWMJt1C5eAl81W4SU6RXzqRsOjQ067Vn0H%2BfZQG0N20udkg6vt4ABIAZ8e9vetjmDlRIL%2FNQC1u1Fk97e%2FMD8GADw6IOb%2BH6PzYQcp4vLPGIWrnqYA6ao%2F0w1pKlpFsI2NwmbMq1JTSZpxksYqnsCNRAQEsn2oZt97VPrJO94t0F%2FUsn3BGgpNHqaPRHdhFzx7OqmsZdwnOigGU5Qx2vkYFwjPF3uLVGz8SlMtFK%2Bg5tj3qrXRcKlncgILgw0zD%2FBwuW52yP6Lp9zLndqGB2uPfduDqx7NKzAQFga9bm5FnB8WR6u3qiVhdVJIt%2BNIbcY3sLVtlGsc8lVPVw%2BlidhgaZpLiaavjVPa8btfDP3cdX2CRy%2Fvph%2BBghFZlD%2BRiEinZ66%2FDNDNAU4DMS9pWts0rm5toW4U4DnusGG29m2Z%2FjSDCZ1z9%2FvFv78c2PUaL0rhUtKopvMmKTMoO8l3%2BYSrU4w2Y3evQY6pgG63cs7OxZsieb3WMVdvCEMnNFHvVbkObmrirREF8vmNnlrP9yp5t%2BQEPBvsNV9p%2Fa5xopW8zqcf2%2BOhQLbZ7MphS3LQQGHSBdFrS1wg1djK%2BevaoXKqqw2Tg27CaEA71wvgc7OKoMcjWtgQWvDLs5IkjsDEyfG9QavVmCGT%2Bp7qRxCq6CgMQimUxndrG7CJWVJd39ew1obTsw0wETUW5sySAzdyq%2FY&X-Amz-Signature=877c11d402310d88e02c03f1c5b925dc62841544ab7c0a3853502a14168d6eae&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TGBDRRK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd3d55VlXOd4%2BL3Ce82cZlGxHzfb5cwcciK9mUBGTeCAiAcq3%2B4hb0j6rP3HgMBYmk%2Ba76pQRHKBFytLya2HXJTPCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1xkeQAz74sM2PhKKtwDrSoFa%2Fc%2Fqo%2BfCM5Dqh2w23AAUrUMnLgt4PKb%2B8lBPoa2k%2Bxknv8Sc41VszN9L%2F3rqD3KIieTt4%2B2QGqH0hdArCKPMbDI4RDFMC7mHTRLnDkp45UD7TRPNi7CgxEpTZ433%2FucYGIwljgeOxQODLvxh0K5UdJfiXQ63rPOWMJt1C5eAl81W4SU6RXzqRsOjQ067Vn0H%2BfZQG0N20udkg6vt4ABIAZ8e9vetjmDlRIL%2FNQC1u1Fk97e%2FMD8GADw6IOb%2BH6PzYQcp4vLPGIWrnqYA6ao%2F0w1pKlpFsI2NwmbMq1JTSZpxksYqnsCNRAQEsn2oZt97VPrJO94t0F%2FUsn3BGgpNHqaPRHdhFzx7OqmsZdwnOigGU5Qx2vkYFwjPF3uLVGz8SlMtFK%2Bg5tj3qrXRcKlncgILgw0zD%2FBwuW52yP6Lp9zLndqGB2uPfduDqx7NKzAQFga9bm5FnB8WR6u3qiVhdVJIt%2BNIbcY3sLVtlGsc8lVPVw%2BlidhgaZpLiaavjVPa8btfDP3cdX2CRy%2Fvph%2BBghFZlD%2BRiEinZ66%2FDNDNAU4DMS9pWts0rm5toW4U4DnusGG29m2Z%2FjSDCZ1z9%2FvFv78c2PUaL0rhUtKopvMmKTMoO8l3%2BYSrU4w2Y3evQY6pgG63cs7OxZsieb3WMVdvCEMnNFHvVbkObmrirREF8vmNnlrP9yp5t%2BQEPBvsNV9p%2Fa5xopW8zqcf2%2BOhQLbZ7MphS3LQQGHSBdFrS1wg1djK%2BevaoXKqqw2Tg27CaEA71wvgc7OKoMcjWtgQWvDLs5IkjsDEyfG9QavVmCGT%2Bp7qRxCq6CgMQimUxndrG7CJWVJd39ew1obTsw0wETUW5sySAzdyq%2FY&X-Amz-Signature=a9a5059cfa637da26e75386ed7fd39beabc498566f9f30a01b509739db9982b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
