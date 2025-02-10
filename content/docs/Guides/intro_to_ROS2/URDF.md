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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRXUAPQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeyLMrZHrBW%2BuxzwKXZ5cuu2TvIOgzLGG%2FXfF%2BqxseKAiEAzp5twluph%2B730SUT0YtnaPMw2DAJvtuklq2rDAMTBCMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaAFB8bL%2B2CHVGrFCrcA%2FMqiJMoXOhZ5WL2C%2BCA91i8KYo7%2FJpnHwSnNRuQob4Sf6XIyXoyc0WnBWcblne7SNJNvHKIkkbbc3iUK2tI%2BNa%2B70664nrfwMtGTIZ4SL8kH%2BUO3UbXJZG%2BzXLpbBzZ6tGGhy%2BhbCpRgFkTX29pIzpKVNqdXGUGlywKkvx%2FsfMFeM%2BexBsAv5rGVISzzYX4rZJ2GUXtV3yNjq3vE3D0eOYyTPbnmV3LJVpVyCzfQFkOawItGUy4ceNS2bSHPJTpihHEWsTLeNanl%2Ff6JbBupJnOU4K1%2FbwF%2BCBrKfxXT2YTDaW17fQL69tJqLkeTQhonUh%2B43Qlua1E4MQJHFucBJ6j6hc3080a4Yl7smBksEDjwafX38fXXGyFwKesILJwNw2CbCxKyVIgH752DerYCX1fUmCxsReJUMSLkXpTsoocbvSTA2lXdaIXVW%2BkvY%2FHFqDnuOSVnEjLEglj%2BsI3mYlhRiDWJH%2F01tf%2F6gQSqxhm0FwxVuY3QeQBtVz%2Fh6%2FgvG0Q%2B9yfbQBJkfLcszEQgYxEcYdr7aPwLAf3ir6HfjiLH9DWCj3mC2XA0OmUh0%2FK3dMQHAMolspwkI%2BXZoGO6PVVeDonurIfYh%2BomCAtFvOU1%2BFrIpzOiEmDwc4OMNH5pb0GOqUBmilbt6PQoBK5oxTbQDglRxmYWTdgasjcJBh4oonBJCW8X9SqGrNZ2Z9XX63r%2FgsHsGwO7eXkgEmveHsHi08SZjmGn5L3TBjsjZIYLLNpEouRXjlt3wXPqLRW3IfaeR5gVZkUNKdi%2BCoeb984lV%2FdcahA5eyl0qIu%2FMLtNAqx3t0FuZWs5%2FrKvvHtg7Mr%2Ft7TKuXdUF60lxD%2BXxwXC%2FEOefl00VdR&X-Amz-Signature=e180e276cdb3aabf9028533191eefb7802aee02a4ad0567479bce54d723164cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRXUAPQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeyLMrZHrBW%2BuxzwKXZ5cuu2TvIOgzLGG%2FXfF%2BqxseKAiEAzp5twluph%2B730SUT0YtnaPMw2DAJvtuklq2rDAMTBCMqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaAFB8bL%2B2CHVGrFCrcA%2FMqiJMoXOhZ5WL2C%2BCA91i8KYo7%2FJpnHwSnNRuQob4Sf6XIyXoyc0WnBWcblne7SNJNvHKIkkbbc3iUK2tI%2BNa%2B70664nrfwMtGTIZ4SL8kH%2BUO3UbXJZG%2BzXLpbBzZ6tGGhy%2BhbCpRgFkTX29pIzpKVNqdXGUGlywKkvx%2FsfMFeM%2BexBsAv5rGVISzzYX4rZJ2GUXtV3yNjq3vE3D0eOYyTPbnmV3LJVpVyCzfQFkOawItGUy4ceNS2bSHPJTpihHEWsTLeNanl%2Ff6JbBupJnOU4K1%2FbwF%2BCBrKfxXT2YTDaW17fQL69tJqLkeTQhonUh%2B43Qlua1E4MQJHFucBJ6j6hc3080a4Yl7smBksEDjwafX38fXXGyFwKesILJwNw2CbCxKyVIgH752DerYCX1fUmCxsReJUMSLkXpTsoocbvSTA2lXdaIXVW%2BkvY%2FHFqDnuOSVnEjLEglj%2BsI3mYlhRiDWJH%2F01tf%2F6gQSqxhm0FwxVuY3QeQBtVz%2Fh6%2FgvG0Q%2B9yfbQBJkfLcszEQgYxEcYdr7aPwLAf3ir6HfjiLH9DWCj3mC2XA0OmUh0%2FK3dMQHAMolspwkI%2BXZoGO6PVVeDonurIfYh%2BomCAtFvOU1%2BFrIpzOiEmDwc4OMNH5pb0GOqUBmilbt6PQoBK5oxTbQDglRxmYWTdgasjcJBh4oonBJCW8X9SqGrNZ2Z9XX63r%2FgsHsGwO7eXkgEmveHsHi08SZjmGn5L3TBjsjZIYLLNpEouRXjlt3wXPqLRW3IfaeR5gVZkUNKdi%2BCoeb984lV%2FdcahA5eyl0qIu%2FMLtNAqx3t0FuZWs5%2FrKvvHtg7Mr%2Ft7TKuXdUF60lxD%2BXxwXC%2FEOefl00VdR&X-Amz-Signature=4afd4e35e6745012e18e76f4bcf12b63326081c9ee0037af916da3ea9cee0e15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
