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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WV6EOV4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRUI6p6az8IA%2FfHfGRKfXfCT%2B9T%2FfggBzgNHDKRX2I4AIgPy5dt7r7StpMkGsklL7gxKBPIP%2B2WUIl%2BePrZz16ycoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG%2Bf6trqyLv2mZHGZyrcA09UgcFaGAcROMHObRgzf2z%2F%2FVMYYM%2FAEX7bSGYvoeuSF7UMmY24Kbn42zGCDvZznfoSYbITlkNz%2BK9NGwwqJBevYogwXWuTjzXAhCT9uWTLRLQPcQmzbqdL4u0h8upKPxjrQ5DOgnflj6cl06D90x63IqTA9S5xaS%2BDqFPIOG1B8HG9AVXmY5Tk%2BB9uUx8qc%2BR67EozrjoB%2B8q7nI%2FM8oHKJcbGHETkQMOJwuy%2FPFF2GZKLaxYDSCsENAolgtgPym98bFS%2FQokPiZmSe0aDrhzgcRgXT9RfSYt4BUaGFYBiO8u0YND%2BCI01D5ozbZWdzHGBC%2Bm6ZzbSUpHBcBTTLSbYMA0k0PX3E9alqRRz3ZshU1sU%2FrtHQIRSOd6F0VNMUQhbTkjFw%2B5U9qh32NWjE6KNS1RFg7SETwtMso4cYkt5xc4DpAzRG%2FVRn3QDPBn%2FiC81MIO3PB9Ax7ZDZXUbDe9iNVfviNZhJhJi9ij1lIvYkpiBDfVRv%2BxxWDZ898MxStF1zIv69utCXmRw7zLZ506H9zo2xICCtkiwxcKsoej%2BTsFS3L3r4nUcb17Fh65nDJvkVR2hu8B4Gdx03Wks3VMpFXQ3z%2Boayk9VYl9VjFFsffZ8gwVYT6hIrtxCMO%2BvrMAGOqUBUTGMF8NQcN8NL4ypGy55Z0FRcJYZlZ7PAT1EBYaUj%2FEqLzgXXhK1HwQQJXugvLXuVRSUvYuSMBc8a%2FB54DoutrUvIXFkYDYpFu3Bp1%2BxrjMiu7QfP0z%2BTAUESuO4SKe3SxRa39O8cnrEf06rjtScRNdyvAu3lHAmu63DA%2BsiGiGKB%2FknhNT%2BAWO4zOWtGz9XsPg76ljse7grJJWHrmLyVTrMI97t&X-Amz-Signature=542ea4ce645372a66571dcd78e20120f1f1d129a8074c010f6092aaf364b234b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WV6EOV4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRUI6p6az8IA%2FfHfGRKfXfCT%2B9T%2FfggBzgNHDKRX2I4AIgPy5dt7r7StpMkGsklL7gxKBPIP%2B2WUIl%2BePrZz16ycoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG%2Bf6trqyLv2mZHGZyrcA09UgcFaGAcROMHObRgzf2z%2F%2FVMYYM%2FAEX7bSGYvoeuSF7UMmY24Kbn42zGCDvZznfoSYbITlkNz%2BK9NGwwqJBevYogwXWuTjzXAhCT9uWTLRLQPcQmzbqdL4u0h8upKPxjrQ5DOgnflj6cl06D90x63IqTA9S5xaS%2BDqFPIOG1B8HG9AVXmY5Tk%2BB9uUx8qc%2BR67EozrjoB%2B8q7nI%2FM8oHKJcbGHETkQMOJwuy%2FPFF2GZKLaxYDSCsENAolgtgPym98bFS%2FQokPiZmSe0aDrhzgcRgXT9RfSYt4BUaGFYBiO8u0YND%2BCI01D5ozbZWdzHGBC%2Bm6ZzbSUpHBcBTTLSbYMA0k0PX3E9alqRRz3ZshU1sU%2FrtHQIRSOd6F0VNMUQhbTkjFw%2B5U9qh32NWjE6KNS1RFg7SETwtMso4cYkt5xc4DpAzRG%2FVRn3QDPBn%2FiC81MIO3PB9Ax7ZDZXUbDe9iNVfviNZhJhJi9ij1lIvYkpiBDfVRv%2BxxWDZ898MxStF1zIv69utCXmRw7zLZ506H9zo2xICCtkiwxcKsoej%2BTsFS3L3r4nUcb17Fh65nDJvkVR2hu8B4Gdx03Wks3VMpFXQ3z%2Boayk9VYl9VjFFsffZ8gwVYT6hIrtxCMO%2BvrMAGOqUBUTGMF8NQcN8NL4ypGy55Z0FRcJYZlZ7PAT1EBYaUj%2FEqLzgXXhK1HwQQJXugvLXuVRSUvYuSMBc8a%2FB54DoutrUvIXFkYDYpFu3Bp1%2BxrjMiu7QfP0z%2BTAUESuO4SKe3SxRa39O8cnrEf06rjtScRNdyvAu3lHAmu63DA%2BsiGiGKB%2FknhNT%2BAWO4zOWtGz9XsPg76ljse7grJJWHrmLyVTrMI97t&X-Amz-Signature=0ad76bc341a5b07d9b58382476d3eb93b0aa88ddf1de61bf51637c7834769018&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
