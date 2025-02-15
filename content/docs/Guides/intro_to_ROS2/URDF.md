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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674M7M5XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGCPskS8AC%2BGl584tqTZACclvBYjX%2FfDDhkvZ5i%2F0a2NAiEAzZXSjW4DH1GM5Bw%2FzyF%2F8LNGoJ7LKA3tkmrxs5F6D%2BIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE4ZqQDB%2BSP3dX1G3ircAxSVN9UqtJzOuVNCjHsfmucuOoWM5MWUajNCvcuVtIQ5frJoMzM1f86zHsx7tmXmlcmfwSZGegWxHJ%2FBhK749GWhaHNh1FrFwAIQMzj38C2i66%2FCrRGRmeg%2FVzk2%2ByHIm2EgZcZ9422F5nBipkQolcwv7lPyJ%2FUk52d5ZlbGrBJAlqLcrl%2F2HF87K%2FX5nLvBDPbMjkAmyQa4vxuSqk0JCrzBFVWZ%2FYwOdpd4G1KyjG558skDhFr4tQZFYfkfDKqrKUF9ISYTdEcsXD3bPGtH7vMZZa5rydudwOFUW%2B7yt6pYLKEhR9LG6WKGGOdiHsXik9sb7OkrtjQnlSM8Yw43XiqU5Jt%2BOzUbvk126B%2FdWnZ%2BEY8GLYqsCB5JI8m17r%2FcJDG7nTW6kDYhMI7F0PSZYAspHvjBtCqDrEZVXQI00xsy6t%2B%2BYOaiL4eYToR%2FGiLMKxyDXLmRoyjUq9FoauhIAUpXce0cu9ct%2BuBBOa8MHoaPJvsFO69LruTaEBA9fMCum%2FmmoqqgM9lF2aggdl%2BL4QfngPspECygVClxkkNLD7lVQXVwQyogSEYnNRus0ZiApVAVUoAw1NPtfVz8eSFV8PfvcquyVo3Ou%2BO45xx7J2K1Mp5K1KdOo7wVKXVPMNXMwL0GOqUBaspqRxmII0flQ0lDCJYxcr3DikzGeD1OqEPZLsAJRmkB%2FHdUFl4Fmmxwg2OsGnXqTR59dHkMSw6kg01dcov%2FVZvKRpQRCbiVBtJtzPPNhEICjYK0XTPUlup6SWd6s%2F0EjepQ5a5cgGvmBEhFcfyft7cxAbr2Zpgp2ZPUc79SBLS9TSX4%2BlB9zaJqmUla7OPaZ3yW9aJXr1QmkhaTGaTiTEBO46BZ&X-Amz-Signature=d119a9aa3c8b7392ffc174af242f550386542c382da4b1b8f68de76fe11eb346&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674M7M5XQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGCPskS8AC%2BGl584tqTZACclvBYjX%2FfDDhkvZ5i%2F0a2NAiEAzZXSjW4DH1GM5Bw%2FzyF%2F8LNGoJ7LKA3tkmrxs5F6D%2BIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDE4ZqQDB%2BSP3dX1G3ircAxSVN9UqtJzOuVNCjHsfmucuOoWM5MWUajNCvcuVtIQ5frJoMzM1f86zHsx7tmXmlcmfwSZGegWxHJ%2FBhK749GWhaHNh1FrFwAIQMzj38C2i66%2FCrRGRmeg%2FVzk2%2ByHIm2EgZcZ9422F5nBipkQolcwv7lPyJ%2FUk52d5ZlbGrBJAlqLcrl%2F2HF87K%2FX5nLvBDPbMjkAmyQa4vxuSqk0JCrzBFVWZ%2FYwOdpd4G1KyjG558skDhFr4tQZFYfkfDKqrKUF9ISYTdEcsXD3bPGtH7vMZZa5rydudwOFUW%2B7yt6pYLKEhR9LG6WKGGOdiHsXik9sb7OkrtjQnlSM8Yw43XiqU5Jt%2BOzUbvk126B%2FdWnZ%2BEY8GLYqsCB5JI8m17r%2FcJDG7nTW6kDYhMI7F0PSZYAspHvjBtCqDrEZVXQI00xsy6t%2B%2BYOaiL4eYToR%2FGiLMKxyDXLmRoyjUq9FoauhIAUpXce0cu9ct%2BuBBOa8MHoaPJvsFO69LruTaEBA9fMCum%2FmmoqqgM9lF2aggdl%2BL4QfngPspECygVClxkkNLD7lVQXVwQyogSEYnNRus0ZiApVAVUoAw1NPtfVz8eSFV8PfvcquyVo3Ou%2BO45xx7J2K1Mp5K1KdOo7wVKXVPMNXMwL0GOqUBaspqRxmII0flQ0lDCJYxcr3DikzGeD1OqEPZLsAJRmkB%2FHdUFl4Fmmxwg2OsGnXqTR59dHkMSw6kg01dcov%2FVZvKRpQRCbiVBtJtzPPNhEICjYK0XTPUlup6SWd6s%2F0EjepQ5a5cgGvmBEhFcfyft7cxAbr2Zpgp2ZPUc79SBLS9TSX4%2BlB9zaJqmUla7OPaZ3yW9aJXr1QmkhaTGaTiTEBO46BZ&X-Amz-Signature=05ee810e17a9ebc580ac980bd5a71c9af1d5e993bde2e032cf6daf57a412f298&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
