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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIW76YG%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDrE0B1PrDcL%2Fry17errwyRTihKUAK%2F6vp%2FLyhvSTZtNAiEAlfXnkMckUBHZcZo6Y1NG1KsCwXXyOhpc7X5e9iacEFoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLxRJn%2F3m1PxyYBHCrcA7U%2BPZaFnh8EE7HIUSjCRTUloyxhk9Tqf54gOoSjrdnaL3Err1vQpkzKJZ4jdRC6GMetKX3A%2B%2BUIZby9yrYCBohmvQaSegbYpvMlems%2Frq5%2FpslSNX2MAdZSPjGgC92Lah7sr7xqezqT3Fdnp5cO9VeXfVKzJjfa7FaMu1d85e9KaYh3Khuk91ND1thIj0BAUxA5Sa4J0bNmONjhU45xs2d2WZbj3JZ91gaKBM53QhNe%2Fv7cpyAc5Sxo2HBbTN3Mq0CE1238Yns89zkkl5gut9pKJNz16%2FGZg%2B9RigNRVtYJ%2FZvcIshRCbChortcdDVB83lcgJpN0AXH%2BjaAKP4TTKgo45IJ7o7kQLlL4XBb1OWPtoPhS1Gam25Sl5nDi6z%2FUyrjDasN1TuJQY9SR%2FlwUBgxNpS3IwAuQvKUbCW33YDiB84HLApcsKiqNQrrj4pvjG%2Fv%2F29qfpeIoy58V0dhDyOj%2BeqcK0iBR85fqY9u1MaLFBRU8GgdNEtrPCsKMp6LhK1252q0%2FI0F6%2Fb5Q%2BlrLfyrIAdTOyG8M62t33iVxJCykLds%2Bdu2liftMK9niRFFGRHZcRKRy%2B9FX7%2FuVINclF6AaghH94ZvDn938%2FX35IW6RyXZaITANnBRAEWeMM3tnM4GOqUBioGCVlbL9N9hg0MXG8v5ne%2FGbHVHe7Iifw1PaPSG%2FdoMzYBS%2FZglPO9Oefh0pOs474M%2Ffbhkq8zfWyNO8C%2FTQmZg09nKIYHm1Tmof79fJENUMApOVmaian9AkUW19Ew6fAbDyfGmn0d0xXcDi19nuAiS4UZycLu%2FnTyqUjbAOjZhJdMW1Ld8jf3XbL3npO6kV5RnE7uidAV%2F8fss9qPwenLDMT%2B%2F&X-Amz-Signature=2598896be0d327d4f797b9b4f39273b5927662bfaa585e71a05eb93c08e21710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIW76YG%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDrE0B1PrDcL%2Fry17errwyRTihKUAK%2F6vp%2FLyhvSTZtNAiEAlfXnkMckUBHZcZo6Y1NG1KsCwXXyOhpc7X5e9iacEFoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLxRJn%2F3m1PxyYBHCrcA7U%2BPZaFnh8EE7HIUSjCRTUloyxhk9Tqf54gOoSjrdnaL3Err1vQpkzKJZ4jdRC6GMetKX3A%2B%2BUIZby9yrYCBohmvQaSegbYpvMlems%2Frq5%2FpslSNX2MAdZSPjGgC92Lah7sr7xqezqT3Fdnp5cO9VeXfVKzJjfa7FaMu1d85e9KaYh3Khuk91ND1thIj0BAUxA5Sa4J0bNmONjhU45xs2d2WZbj3JZ91gaKBM53QhNe%2Fv7cpyAc5Sxo2HBbTN3Mq0CE1238Yns89zkkl5gut9pKJNz16%2FGZg%2B9RigNRVtYJ%2FZvcIshRCbChortcdDVB83lcgJpN0AXH%2BjaAKP4TTKgo45IJ7o7kQLlL4XBb1OWPtoPhS1Gam25Sl5nDi6z%2FUyrjDasN1TuJQY9SR%2FlwUBgxNpS3IwAuQvKUbCW33YDiB84HLApcsKiqNQrrj4pvjG%2Fv%2F29qfpeIoy58V0dhDyOj%2BeqcK0iBR85fqY9u1MaLFBRU8GgdNEtrPCsKMp6LhK1252q0%2FI0F6%2Fb5Q%2BlrLfyrIAdTOyG8M62t33iVxJCykLds%2Bdu2liftMK9niRFFGRHZcRKRy%2B9FX7%2FuVINclF6AaghH94ZvDn938%2FX35IW6RyXZaITANnBRAEWeMM3tnM4GOqUBioGCVlbL9N9hg0MXG8v5ne%2FGbHVHe7Iifw1PaPSG%2FdoMzYBS%2FZglPO9Oefh0pOs474M%2Ffbhkq8zfWyNO8C%2FTQmZg09nKIYHm1Tmof79fJENUMApOVmaian9AkUW19Ew6fAbDyfGmn0d0xXcDi19nuAiS4UZycLu%2FnTyqUjbAOjZhJdMW1Ld8jf3XbL3npO6kV5RnE7uidAV%2F8fss9qPwenLDMT%2B%2F&X-Amz-Signature=6858b82e1afed4f6dd61f01688ab6344aac6976f60754a56fb3f73cc56395f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
