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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5WYKMY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy1EtTxOg8RbkOiJ1UrazDbg5vfjC8GMK4Xo0JnY8D8wIhAJvh3fW3w7zSy9shxZUeW1TYLat%2Blmqd%2F4X3uGfrq%2FQLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTSTRco2XDNdAF2FUq3AOFsGX0GL5VYMNUmpqBbbqG%2BoxDkjEC4YWSAMLhSr9qzPe3yiWpteEWWt%2B%2BikxN%2B5pGAvxyoWKsIEyqI7VvwHszsXxdt2aB0mIhHplUP8q4WOhYEinIFQM%2F2UN2Q1bACDASGhfeL5iQT3TozuMBZNXvmSge0HeT0NMkzOITfNLIAaB02mJxrysdIqfoKR3GOvJ%2BmJVphAcYlLA%2F3FjR%2FmRol6bo95sXOwB%2BndN1MokYRKhl%2FZrkCN6CdIgXjJZJtAOMnHkDHWh14%2FbDnsN56LocXQAOAFUtUSAwnzHV9J%2BACNy4BplffnL8DBMJsy3c4twRBfILexLEDyC8vqkphPrc9NUwLxeH8AOJGzWN7m%2B57uflS4AvUJ6vDTkIV1IV1JsPilJF9DufgBjTOoyRC5tiDLlBox56S%2FUQoF6LMPUQgIPra7Ltrxf8rHGwFqaFIx9d5pK6M%2BuUsLY%2FKEmxRb%2FX%2FKLPIZWFGYsKRPjwkyglB3JhQ4Kp9S1SfRpX2E1PbZ6f%2FZBe6nleK%2BOfZAUP7V3u1AAYEYsXSa5x7HXBmfad5U%2FIRyJyCJ8CilzaMA%2BCMmE7qY6BqzjNpS%2B1z4OE7vdmcAFeKsYPlJ5D98uPUBGuwVNuotqr%2FpYsQXzKVDCs8%2BfEBjqkATn78Nj8JBhr7G7mUf8K0%2FMzmWIrioKwxkq4TvxSCcKshkI2RQAm281jbwXhKrwD40yRRrDCa4XSZPmFH4c4vmKhCZomCb6QoX0ytO5U3X02b32vg%2Fyy3iQPU8ID5CIYXo7DYbgprlxQgdx098iIb98KFDPdXBkG99PI81lxo3RQg2W%2FhBcooko8bGFVJtOzCNjO67xMvw9FGqIwBw2R6tXs9GWO&X-Amz-Signature=b2ceb8871a9f27a5e403406a492c0135718b02bce1a7dfcd53e1b40eb59a0757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5WYKMY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy1EtTxOg8RbkOiJ1UrazDbg5vfjC8GMK4Xo0JnY8D8wIhAJvh3fW3w7zSy9shxZUeW1TYLat%2Blmqd%2F4X3uGfrq%2FQLKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTSTRco2XDNdAF2FUq3AOFsGX0GL5VYMNUmpqBbbqG%2BoxDkjEC4YWSAMLhSr9qzPe3yiWpteEWWt%2B%2BikxN%2B5pGAvxyoWKsIEyqI7VvwHszsXxdt2aB0mIhHplUP8q4WOhYEinIFQM%2F2UN2Q1bACDASGhfeL5iQT3TozuMBZNXvmSge0HeT0NMkzOITfNLIAaB02mJxrysdIqfoKR3GOvJ%2BmJVphAcYlLA%2F3FjR%2FmRol6bo95sXOwB%2BndN1MokYRKhl%2FZrkCN6CdIgXjJZJtAOMnHkDHWh14%2FbDnsN56LocXQAOAFUtUSAwnzHV9J%2BACNy4BplffnL8DBMJsy3c4twRBfILexLEDyC8vqkphPrc9NUwLxeH8AOJGzWN7m%2B57uflS4AvUJ6vDTkIV1IV1JsPilJF9DufgBjTOoyRC5tiDLlBox56S%2FUQoF6LMPUQgIPra7Ltrxf8rHGwFqaFIx9d5pK6M%2BuUsLY%2FKEmxRb%2FX%2FKLPIZWFGYsKRPjwkyglB3JhQ4Kp9S1SfRpX2E1PbZ6f%2FZBe6nleK%2BOfZAUP7V3u1AAYEYsXSa5x7HXBmfad5U%2FIRyJyCJ8CilzaMA%2BCMmE7qY6BqzjNpS%2B1z4OE7vdmcAFeKsYPlJ5D98uPUBGuwVNuotqr%2FpYsQXzKVDCs8%2BfEBjqkATn78Nj8JBhr7G7mUf8K0%2FMzmWIrioKwxkq4TvxSCcKshkI2RQAm281jbwXhKrwD40yRRrDCa4XSZPmFH4c4vmKhCZomCb6QoX0ytO5U3X02b32vg%2Fyy3iQPU8ID5CIYXo7DYbgprlxQgdx098iIb98KFDPdXBkG99PI81lxo3RQg2W%2FhBcooko8bGFVJtOzCNjO67xMvw9FGqIwBw2R6tXs9GWO&X-Amz-Signature=c6710a3bc34bf6a2365497f7158b2511657667ad35939bb504db0088eed5f96d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
