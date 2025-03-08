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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJTQ6ZG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDACsz7gFZyZCif4tJzVnBPZsHAizSUDy3qr38n5V84fwIhALU1cM%2BqPspsPK5APVrDV%2Ff1KdHS6gMEfu8Hc0rubrHaKv8DCGMQABoMNjM3NDIzMTgzODA1IgxBFRIqB%2Bqgx%2FUezVUq3AO6lm3ugTo5GJ6VnNfI29hLYfk32HBunzA3tuh%2BTC5v2cJp0CXS706ribGgl3j9DL9t2%2FKY8IOU4UHvjZAsKjsibNR%2BdaRKLjwIMSFm403K%2F5htEOBZvm4qjZuyJzyRqB04YySIMjapZdoxoFGiSQQae34NR1QMiDaon1uLPS0C%2B%2BvWkIr0%2BJFcW%2FleqbRLNcPIZETtIB0fxBqK%2FQpnmliaWClje2UF6chAJ9FanbNP4dAL6udrhyQ8wKrWc17xQ6XNSsCNtT5BWsDRbjl48QWomn2XNtmdyfoyU%2B4FUB355MF1EPTpRuFbcDSJmts632eko1OGHWqr90jmx%2BzRpDX4coN%2BOMIA2xr7nkaWK9VLJNdgO5YY1mZDiwEr32zHvmG6Z4Riqz0udy4WvdPOkOCbDc41wX8dCiRDr9JHo4x5OC2mHT1vriQQtN28cSrF6juBdd2W%2FyDiVe%2BA3TCgc9%2BIpTwF8Ii5vskgrEjHgspHR12EyyljaeS%2F%2FUdeuDhCT0XXl%2Bs3InsVrHmFPkCctANHLf%2Bc9R2GDeVDrVwdw8NS0wLFh8oXRbRXTMX9qMc1QYYC%2FpjMQGNfOMQKt5kOBsOx%2BO3WlkmuA8I1Vo1CBMfPCpfIho0LJspROO4cOjD3grK%2BBjqkAbDkgezLmqeS2qGfw9otAviic7iggC%2BXN%2B2HUEQr%2Bpn0ht9pBEUyV3LDR%2BBeNXhWyXV1YsKhW5iqJc00VNtA1RF7b6emqJ8nyMFuVzTQbITFFKvB%2FtK9DqpPuPl9I65DnnDRE55uGIlrX%2BkZgnu4TMDQpn%2B6etQ%2FZamykPWSy5fQYtBlOm9iayGiqnqthMnCylUDf0OsnOaeFK4fF6q2Figcc8dV&X-Amz-Signature=51aac4d437aac8a92e8b1707574ede2d53961c0ab5b37e63209763631e2d87f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJTQ6ZG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDACsz7gFZyZCif4tJzVnBPZsHAizSUDy3qr38n5V84fwIhALU1cM%2BqPspsPK5APVrDV%2Ff1KdHS6gMEfu8Hc0rubrHaKv8DCGMQABoMNjM3NDIzMTgzODA1IgxBFRIqB%2Bqgx%2FUezVUq3AO6lm3ugTo5GJ6VnNfI29hLYfk32HBunzA3tuh%2BTC5v2cJp0CXS706ribGgl3j9DL9t2%2FKY8IOU4UHvjZAsKjsibNR%2BdaRKLjwIMSFm403K%2F5htEOBZvm4qjZuyJzyRqB04YySIMjapZdoxoFGiSQQae34NR1QMiDaon1uLPS0C%2B%2BvWkIr0%2BJFcW%2FleqbRLNcPIZETtIB0fxBqK%2FQpnmliaWClje2UF6chAJ9FanbNP4dAL6udrhyQ8wKrWc17xQ6XNSsCNtT5BWsDRbjl48QWomn2XNtmdyfoyU%2B4FUB355MF1EPTpRuFbcDSJmts632eko1OGHWqr90jmx%2BzRpDX4coN%2BOMIA2xr7nkaWK9VLJNdgO5YY1mZDiwEr32zHvmG6Z4Riqz0udy4WvdPOkOCbDc41wX8dCiRDr9JHo4x5OC2mHT1vriQQtN28cSrF6juBdd2W%2FyDiVe%2BA3TCgc9%2BIpTwF8Ii5vskgrEjHgspHR12EyyljaeS%2F%2FUdeuDhCT0XXl%2Bs3InsVrHmFPkCctANHLf%2Bc9R2GDeVDrVwdw8NS0wLFh8oXRbRXTMX9qMc1QYYC%2FpjMQGNfOMQKt5kOBsOx%2BO3WlkmuA8I1Vo1CBMfPCpfIho0LJspROO4cOjD3grK%2BBjqkAbDkgezLmqeS2qGfw9otAviic7iggC%2BXN%2B2HUEQr%2Bpn0ht9pBEUyV3LDR%2BBeNXhWyXV1YsKhW5iqJc00VNtA1RF7b6emqJ8nyMFuVzTQbITFFKvB%2FtK9DqpPuPl9I65DnnDRE55uGIlrX%2BkZgnu4TMDQpn%2B6etQ%2FZamykPWSy5fQYtBlOm9iayGiqnqthMnCylUDf0OsnOaeFK4fF6q2Figcc8dV&X-Amz-Signature=ec864252e50e8a108af6da9ba0ce4a907ec736666f87c569deae73c15d52d726&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
