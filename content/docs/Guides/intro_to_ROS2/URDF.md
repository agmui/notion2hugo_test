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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Y4IFWE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2BoAsIoe1L6ZDxapeh9Jm1ZtSmuJ1jPjs5iz0ZfiG3tAiBrS3lvzrxGlBUdsfbtjH8tIYfnmWAdlkxvniSX8VNCUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMlqz4%2FjJIUxWdGxW2KtwDJ1pD%2BNS1mssS1jtKoaX2CkShQVJGqIYddmiPidOEAVV809AtR%2FnFyY7JYxE1QutDOXOAJSM0Z7PKZjrC7ILI1lma9%2FRoENfypfmBhyThtQ8SeHM062BmQkNexA9hs5Vt%2FeFYbhMMZBEPZteSx%2F6SGQx1PkKeQSnyG%2BAToQW39vYvmj5y3GWlJRxcYK3hEaLKE0y0nTaE3R7bL4Zl2OmHfxlPMEt%2FSzfAV7EZAfGSwoBOPpvfFPaxzc%2BZRSQzGV1El6hXIOEPcqstW6i0w3on5UGt8S5tpjVg29ejSFJAcHDQzrunACqQGMyDlYvac4topJZU8cP1FOJhtOVaa9viLSmYDQtugjm9sTOz0IajicD8TcXXFreN3qJAbTiDs%2Briop2WhaoRu688lgzDBiqXxqa3Tu7bFJreLCQr7%2BpNhI15t1uG2VM8HPNlAK35SohVDOg%2BvWfCGKVNgHroU2%2FkF0M08Eg4ja6YgzpZOIeDTcUVr3pQqg2rnFdlMlAQLYGD9i%2FBnMsGEZLSbL0HAzxwxcLoVUcjNMIgASm4QTc889bcKBBBw%2FzdimMjzCy9jspj0loKE0n1CQIjKQSB5Q5xQuUUysCJsznD3rTJ0aHeczZVXY28x3zN9DAZpP8wxPbawwY6pgHendEdxkv6Kxpl2lA0Z%2Bb8Q7f3qZozaW7a4vqWCvVu%2FahFdfR%2BOLrqEP8wf%2BSUNoytgV6GGKdjdNwa%2FmeXxcj4Vs1G5Lj6rEa2ZWB2svkRvyspRjEWwOK4sfMmJ2K3iWPRiZffmGBgYNP%2BOoEgwvjWCqC4%2FnqasXdAHdbvfApYyNqhEG%2B%2BwonBQVCXsKK3PdYlHVF4dRIrERVVaIOJMUom2cbiGgVg&X-Amz-Signature=c3207860c4b5c5956a530349232e7473ad65d6c1a2317e59baebc8f0c7b49722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652Y4IFWE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2BoAsIoe1L6ZDxapeh9Jm1ZtSmuJ1jPjs5iz0ZfiG3tAiBrS3lvzrxGlBUdsfbtjH8tIYfnmWAdlkxvniSX8VNCUSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMlqz4%2FjJIUxWdGxW2KtwDJ1pD%2BNS1mssS1jtKoaX2CkShQVJGqIYddmiPidOEAVV809AtR%2FnFyY7JYxE1QutDOXOAJSM0Z7PKZjrC7ILI1lma9%2FRoENfypfmBhyThtQ8SeHM062BmQkNexA9hs5Vt%2FeFYbhMMZBEPZteSx%2F6SGQx1PkKeQSnyG%2BAToQW39vYvmj5y3GWlJRxcYK3hEaLKE0y0nTaE3R7bL4Zl2OmHfxlPMEt%2FSzfAV7EZAfGSwoBOPpvfFPaxzc%2BZRSQzGV1El6hXIOEPcqstW6i0w3on5UGt8S5tpjVg29ejSFJAcHDQzrunACqQGMyDlYvac4topJZU8cP1FOJhtOVaa9viLSmYDQtugjm9sTOz0IajicD8TcXXFreN3qJAbTiDs%2Briop2WhaoRu688lgzDBiqXxqa3Tu7bFJreLCQr7%2BpNhI15t1uG2VM8HPNlAK35SohVDOg%2BvWfCGKVNgHroU2%2FkF0M08Eg4ja6YgzpZOIeDTcUVr3pQqg2rnFdlMlAQLYGD9i%2FBnMsGEZLSbL0HAzxwxcLoVUcjNMIgASm4QTc889bcKBBBw%2FzdimMjzCy9jspj0loKE0n1CQIjKQSB5Q5xQuUUysCJsznD3rTJ0aHeczZVXY28x3zN9DAZpP8wxPbawwY6pgHendEdxkv6Kxpl2lA0Z%2Bb8Q7f3qZozaW7a4vqWCvVu%2FahFdfR%2BOLrqEP8wf%2BSUNoytgV6GGKdjdNwa%2FmeXxcj4Vs1G5Lj6rEa2ZWB2svkRvyspRjEWwOK4sfMmJ2K3iWPRiZffmGBgYNP%2BOoEgwvjWCqC4%2FnqasXdAHdbvfApYyNqhEG%2B%2BwonBQVCXsKK3PdYlHVF4dRIrERVVaIOJMUom2cbiGgVg&X-Amz-Signature=fa617630c169d7ad96359d8eaa77cce870dacef7c66ceb5841b737ef5e62e47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
