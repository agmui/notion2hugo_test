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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKH4RHX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDs3cDHX6wli8Z%2B8qC9gO6qdRq0%2BWXRguvVVPErh8DyhwIgFzmjhtqjrK24e7hGinNMf1hhXavF8j%2Fo1hOqYOz%2F%2BFIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN%2F2oRO94YD4cJ4jtircA9o30tbbZ1pqiRDK7POfzz1vcBu%2BfpsEDAfMTsttJPDXIfC9P1jP0t6cLvmdB0mC4XgECgZfdNodRfQNao7Lgmg5mNXa2%2BchDhx6SbDsw5UJ6WOg5F2eWduLR10ieNh6Cb1s0k0KWV1Jads5nuNh0AddDBxWslOGmHWfkXVob7kzFIffgYKOiE7v%2Bga0NPFE5oB0sGHHQLFDIJJ%2F%2BC8B7cXxZxpMSm2XHM7jyeLriau3mXJWuEK4LxaAs05uyi7sbIWEC5OUeQnl%2By%2Fvir1PjZThv9FsCy9SGERBV6fEyY5X%2BQUsf51AVVZNeuKY44jsn%2Bk64J%2FHVouey2e6dsYZbUQgt48pKhXymZ05RLUPEy2D78NfM06iTqXTrdVUufAzhO3GJDF3VI3T%2Fd84CB4px1nyq1c%2FtaxyID2bqUOkZ3Kt19DC1Na2MKIWFemBYO5Rjqx1YUz%2FYPL3pLZ9PTSVHEP%2B3ZfXT4wi6kscfx6cgYgbFan%2FutT0xPHOSL8S8Dhg0JJoU6oTFLQ4Ysr00GzyTcF35bXZINndl5udCoch9enjY0GgaEf7cZq5ybQ5fQTh8tJe40MrJLMB6lYr7IEAN6E0BUoVKTuYXRY9dq99jImv8U6Nh9d5K0%2BiUyy6MOq6lsQGOqUBsPVnqs0DNMUMfwFKy%2BqYzFtKTXw3G0or72pozFK2MCuLrQAHgsFJBBn0CxffEF%2FWgzP5fI%2FPA6WmjZG1cNJsBd5uypUZlnp5XTJlM3PvQumKYtY2jBB%2BaZX9dHV7OxxI9P4D%2BTlVxjUItd%2FB2IIphRCy%2FesPF0Os31YSDXjMZG23dF3oHoxOv0RcaiJXfjYKquHhrbyrgh4BawdxZ36FeH0VfGpL&X-Amz-Signature=b50953b89a42423391122891ba60c766fc88955a8d7918e7d294ed1b4df762a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKH4RHX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDs3cDHX6wli8Z%2B8qC9gO6qdRq0%2BWXRguvVVPErh8DyhwIgFzmjhtqjrK24e7hGinNMf1hhXavF8j%2Fo1hOqYOz%2F%2BFIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN%2F2oRO94YD4cJ4jtircA9o30tbbZ1pqiRDK7POfzz1vcBu%2BfpsEDAfMTsttJPDXIfC9P1jP0t6cLvmdB0mC4XgECgZfdNodRfQNao7Lgmg5mNXa2%2BchDhx6SbDsw5UJ6WOg5F2eWduLR10ieNh6Cb1s0k0KWV1Jads5nuNh0AddDBxWslOGmHWfkXVob7kzFIffgYKOiE7v%2Bga0NPFE5oB0sGHHQLFDIJJ%2F%2BC8B7cXxZxpMSm2XHM7jyeLriau3mXJWuEK4LxaAs05uyi7sbIWEC5OUeQnl%2By%2Fvir1PjZThv9FsCy9SGERBV6fEyY5X%2BQUsf51AVVZNeuKY44jsn%2Bk64J%2FHVouey2e6dsYZbUQgt48pKhXymZ05RLUPEy2D78NfM06iTqXTrdVUufAzhO3GJDF3VI3T%2Fd84CB4px1nyq1c%2FtaxyID2bqUOkZ3Kt19DC1Na2MKIWFemBYO5Rjqx1YUz%2FYPL3pLZ9PTSVHEP%2B3ZfXT4wi6kscfx6cgYgbFan%2FutT0xPHOSL8S8Dhg0JJoU6oTFLQ4Ysr00GzyTcF35bXZINndl5udCoch9enjY0GgaEf7cZq5ybQ5fQTh8tJe40MrJLMB6lYr7IEAN6E0BUoVKTuYXRY9dq99jImv8U6Nh9d5K0%2BiUyy6MOq6lsQGOqUBsPVnqs0DNMUMfwFKy%2BqYzFtKTXw3G0or72pozFK2MCuLrQAHgsFJBBn0CxffEF%2FWgzP5fI%2FPA6WmjZG1cNJsBd5uypUZlnp5XTJlM3PvQumKYtY2jBB%2BaZX9dHV7OxxI9P4D%2BTlVxjUItd%2FB2IIphRCy%2FesPF0Os31YSDXjMZG23dF3oHoxOv0RcaiJXfjYKquHhrbyrgh4BawdxZ36FeH0VfGpL&X-Amz-Signature=9fb500448e570fa454978bc44d4c31637de12fdf1d56148929fa727241ea5b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
