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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ4T2MX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw8oy51jg24tQppH%2Brr8J57f6vBsyTXFS3Nwl%2Ba7SgYAiA2GtkAvAT6oyQXmLCUEyXVteFGT8wdCyRu%2Bj9ih9GuRyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyvQWhuIJ1PtXBVSKtwDrcVyiPK0CU3rNOOG90gtbn1pr4KWAcQQHecDfoX%2BzeXqWP4k1Nzbc9vn489IDLWZWQz53DaIwjR0h3tuFoa4PuqCMQ2tLWPv78upcgJ0OzBJR2iP3JqFIkdbyhZ6PxzEsU%2Bvgommf6oNeZ9HxJ9OXM85bF%2FdWGu0yDMXMhql7qSZkh4KUO3Xh8u5JTlpi4e5%2BLu%2FY3ro13wfRS%2Fqnta8BUXnnxiQSCrsXFmGqLhzxSb4xbiTt4NfFQxcjBBmqHFQmyX0QO9DbeO%2FiHGk96hwvef0NyqjLbE96zsDI8cJDRLOF84j2LvBQEZ5k7a2AUSbXDAv1s4Vv2QbrWWl%2FB8bFiuDALfSeMhUe3iJefjmT%2Bufffggt%2ByhDa8098KRpe6NKI8HteR%2Fb836rN3QeShZ27YX9qErmpaQ7JozubXd%2BiOIZfsElm2MfAz8rfXPany3DKG98%2FdgxlGd1u4CF8mtJU9OWiC67VTyFryT06YjsivE4MowGJHQT%2BFfAnGCcQcwVl7v5eSHZU3zBPdflFkM7AopppatmnrwpWcEQ0gS5dt6lLCcaf0P6PNiufuw%2FvafufHaFieVuKNyZS1xe4f%2FVyigOR9oWRScTsSGXn73h7oO%2Fdgarcrr5B6KBb8wtP%2FDwwY6pgEf0A4W3KLHxlx0p7c9CpGKuzIeMf3P9crlQHnSJcec9qHTVw6%2BWScDOFtt8mnpru0JQByeyuVE7I7Urr%2BqPcvks8MrgxCqC37FYPTCI3tlH6xztE0xbAfK9%2FT4ENTWfXNdSQ6T1WYaeRtDJygbo3mydRcHlT66KzOm63I0wFOvstHwv%2BX%2BvjimyCA1EQLs6wcL3Vgl9qM2W5dCV01f6RFgn%2FE1mSY%2F&X-Amz-Signature=27fba010bc207aa68ede785a062b9ba13896cd25dbd274c74ce024f8dad75e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IZ4T2MX%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw8oy51jg24tQppH%2Brr8J57f6vBsyTXFS3Nwl%2Ba7SgYAiA2GtkAvAT6oyQXmLCUEyXVteFGT8wdCyRu%2Bj9ih9GuRyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyvQWhuIJ1PtXBVSKtwDrcVyiPK0CU3rNOOG90gtbn1pr4KWAcQQHecDfoX%2BzeXqWP4k1Nzbc9vn489IDLWZWQz53DaIwjR0h3tuFoa4PuqCMQ2tLWPv78upcgJ0OzBJR2iP3JqFIkdbyhZ6PxzEsU%2Bvgommf6oNeZ9HxJ9OXM85bF%2FdWGu0yDMXMhql7qSZkh4KUO3Xh8u5JTlpi4e5%2BLu%2FY3ro13wfRS%2Fqnta8BUXnnxiQSCrsXFmGqLhzxSb4xbiTt4NfFQxcjBBmqHFQmyX0QO9DbeO%2FiHGk96hwvef0NyqjLbE96zsDI8cJDRLOF84j2LvBQEZ5k7a2AUSbXDAv1s4Vv2QbrWWl%2FB8bFiuDALfSeMhUe3iJefjmT%2Bufffggt%2ByhDa8098KRpe6NKI8HteR%2Fb836rN3QeShZ27YX9qErmpaQ7JozubXd%2BiOIZfsElm2MfAz8rfXPany3DKG98%2FdgxlGd1u4CF8mtJU9OWiC67VTyFryT06YjsivE4MowGJHQT%2BFfAnGCcQcwVl7v5eSHZU3zBPdflFkM7AopppatmnrwpWcEQ0gS5dt6lLCcaf0P6PNiufuw%2FvafufHaFieVuKNyZS1xe4f%2FVyigOR9oWRScTsSGXn73h7oO%2Fdgarcrr5B6KBb8wtP%2FDwwY6pgEf0A4W3KLHxlx0p7c9CpGKuzIeMf3P9crlQHnSJcec9qHTVw6%2BWScDOFtt8mnpru0JQByeyuVE7I7Urr%2BqPcvks8MrgxCqC37FYPTCI3tlH6xztE0xbAfK9%2FT4ENTWfXNdSQ6T1WYaeRtDJygbo3mydRcHlT66KzOm63I0wFOvstHwv%2BX%2BvjimyCA1EQLs6wcL3Vgl9qM2W5dCV01f6RFgn%2FE1mSY%2F&X-Amz-Signature=6d84911ac48dc150c3b61717b2ce8800ace5c61ed13a8021907112510e0af941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
