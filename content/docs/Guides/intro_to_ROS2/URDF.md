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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDNDQFL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy2iq3EBBV0rgZa5eHhcuVYUYJ3WvgHeEkDH%2BrjLVCSQIhAIYfy8JulI7Ya1j1lqEikne951rle7X0wNlbdmAI%2B7jFKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC1nxOomW%2FH7%2FEek8q3AP2mzA9vNEDtLzQIP9IEay5ZZ1UCGRDqxUxm%2Bmo%2BS4MxJ04NHC3pU%2B0unmuHXJEj6dY41oNbKASHScqrHH78%2BADge1EMBpPcAPBpp0YwkvAw2J0mBVahpWMkCexq8%2BvO5P0Vcl0vAGCSiKBGS%2BZjYK6ts%2B7XCmtfzJW7sqEOeu3HHuiY3Ez26RaztPghH3qMcfhdAkjiIQoZ9u9n1IEfOEGr5uItF1hB64IhaW2NQz8jG1S6CUuvKOQOmXJw3tmvDHMAbW5y4ihw8BYB6OmQyOIhYPPZGr22JEK1zYyjD7zpYBv5dvAbgvsAkXv25CyH5SC%2BCAwzHCJBaIa%2FAvfqf4QVirk8nk1XzSJCADquyTyJdpn9gketFgxAImi83TRH1si2thkEYTZL6iPWRQdbT4yWcc92SHU2MmvR3%2FhjbiBZ7HUjY%2F2%2FGUID3qkNd5Az%2F0t0XKzxd0Va0AWxFP8k1ljujPbBDH95gfvcqVIcHibGkWUscZNpPJt695mCMJ9ZyiSqVLRtO6a7M5R80VbW8nc3q0fn9aLB2QhebMvhjPQetA6Io%2FbHoiqghah9zK9KgR2xYxfAVW%2Fprue1Y%2FzG%2B5mrL%2Bu5Li9nKbzTO0vsA1qKVBzjSOg7TY2dlsREjCdzYzDBjqkASrn1bO%2BPzW12Tg2jGR5WVZRwltf1qTttfVblVA460oxe0tTOpno0oOkZthKknKcObpZ2j%2FytJyV63%2BL2ZdaD0KngYuj6m3IQZiJkSWUVfwXOv8%2BtE2O8Z%2BzWOxnRJKTX%2FjEAfc93W2%2BxhGz1R4XPOGXHI36Vr1LoqQ2gbGkB%2BqPKfd6flFdr54p97%2F0krnNdYiRrAznLDjXuGBWqlB%2F1YbTd62p&X-Amz-Signature=6029df9ab91f21b2aca8a92bc79aeadb5f683ad4099cc1ee597aad99e9270c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDNDQFL%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy2iq3EBBV0rgZa5eHhcuVYUYJ3WvgHeEkDH%2BrjLVCSQIhAIYfy8JulI7Ya1j1lqEikne951rle7X0wNlbdmAI%2B7jFKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC1nxOomW%2FH7%2FEek8q3AP2mzA9vNEDtLzQIP9IEay5ZZ1UCGRDqxUxm%2Bmo%2BS4MxJ04NHC3pU%2B0unmuHXJEj6dY41oNbKASHScqrHH78%2BADge1EMBpPcAPBpp0YwkvAw2J0mBVahpWMkCexq8%2BvO5P0Vcl0vAGCSiKBGS%2BZjYK6ts%2B7XCmtfzJW7sqEOeu3HHuiY3Ez26RaztPghH3qMcfhdAkjiIQoZ9u9n1IEfOEGr5uItF1hB64IhaW2NQz8jG1S6CUuvKOQOmXJw3tmvDHMAbW5y4ihw8BYB6OmQyOIhYPPZGr22JEK1zYyjD7zpYBv5dvAbgvsAkXv25CyH5SC%2BCAwzHCJBaIa%2FAvfqf4QVirk8nk1XzSJCADquyTyJdpn9gketFgxAImi83TRH1si2thkEYTZL6iPWRQdbT4yWcc92SHU2MmvR3%2FhjbiBZ7HUjY%2F2%2FGUID3qkNd5Az%2F0t0XKzxd0Va0AWxFP8k1ljujPbBDH95gfvcqVIcHibGkWUscZNpPJt695mCMJ9ZyiSqVLRtO6a7M5R80VbW8nc3q0fn9aLB2QhebMvhjPQetA6Io%2FbHoiqghah9zK9KgR2xYxfAVW%2Fprue1Y%2FzG%2B5mrL%2Bu5Li9nKbzTO0vsA1qKVBzjSOg7TY2dlsREjCdzYzDBjqkASrn1bO%2BPzW12Tg2jGR5WVZRwltf1qTttfVblVA460oxe0tTOpno0oOkZthKknKcObpZ2j%2FytJyV63%2BL2ZdaD0KngYuj6m3IQZiJkSWUVfwXOv8%2BtE2O8Z%2BzWOxnRJKTX%2FjEAfc93W2%2BxhGz1R4XPOGXHI36Vr1LoqQ2gbGkB%2BqPKfd6flFdr54p97%2F0krnNdYiRrAznLDjXuGBWqlB%2F1YbTd62p&X-Amz-Signature=24c2201f5d6f1bca66dff682b0c00e35ded14e6d86bd2fcf1a45f7b6f5f62bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
