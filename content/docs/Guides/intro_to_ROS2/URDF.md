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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RLKDR3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICT1vKhgVOE559Px45QJPtqRTDonJlCtxtaVpgKLCjAOAiB3J3i2fQ7GIOpQ1GmudaHIVduzdxW8k79ynZKIihMkviqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLc8SHg7qgJ%2FNl219KtwDmHqNoj68MmjPl%2FQJxDW%2Flx3c3DLQHjfn03khwuHua56MPZUG22f%2FUSxLNrFszKGi3o8uoLXgJr5OI2kaJfMCNOTO3HiqIpEoFM%2BdUXBu3lqtY1l5gLaTiw62XN%2FUtQW9%2FeTVZWXOIGHdDTUBE7WdjaBHNbG11sWRZAHB91t1SLlqxXYyPcpISCJLWYl9TRg8jk5zBNuxmhXM7yjOqtavEpVMnYaMsyCp6QSF7omdrAyoWZ3uhMJWfePRDXPg9CLmyNuNwVk4csesC0E%2BXFH3UZuKwvMfv3N2SzP0xxTeGQXVxj7HNj3wT36P1TP3icRj4i3K%2FVfE3yugb69vam2z9%2FAKlHxCFbvIJhYoBzlVnbYW6%2BOYuUWMra5GlyPWtDYZQvL%2Beydpmu5eMEREjlN4pgtRp8ucogGVb8qQHNYgtJ10Hjqvw%2Fz%2FZU3YuHVfJWpd7AT%2F1WjCu2a8B7co9eknUZWEIHcEL9eB7QWDhUgePXVi3EJWMPIBbp9PBOVhikV4ZVhx9Hl63GN5kv764vo9wFKH03K3VX4x%2FG7UcJ3%2Bm7bSN74WAr%2F7gKiwjoEBKN%2FdoZgrICYmbMdeCNYPEOTW4cLpPtvt%2BQb1ZC5WqnajyXmmrY%2FYrLg5qrNVVbQw0%2FKJvgY6pgHZ3wfm3U6X8Pd6tWGTzbZVIEYalo4FYVzdwG1yx0eD1vh8mVLjIeUDnMDhCTCZUtqEl9xSFcn7nRUrN6rROBYuhmlybsFaE1%2FXrI4ulQkEMwhTgFXc%2BxWrrMJNE7Q3rJ9xqHAOL7T%2Bw%2BwV%2BbGfO2YY%2F94bKNkE6yFDZpbogIRf9VlXEM5Y5t%2BOVz%2B4lkttAU9bS3Ij2glIMQbXxKOb7u%2FH2MsZcHDX&X-Amz-Signature=08bdc3d0e2f5cd743f3c5edc4e54ea21f3607d8ab9e0595a553713c3f5d1804c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RLKDR3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCICT1vKhgVOE559Px45QJPtqRTDonJlCtxtaVpgKLCjAOAiB3J3i2fQ7GIOpQ1GmudaHIVduzdxW8k79ynZKIihMkviqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLc8SHg7qgJ%2FNl219KtwDmHqNoj68MmjPl%2FQJxDW%2Flx3c3DLQHjfn03khwuHua56MPZUG22f%2FUSxLNrFszKGi3o8uoLXgJr5OI2kaJfMCNOTO3HiqIpEoFM%2BdUXBu3lqtY1l5gLaTiw62XN%2FUtQW9%2FeTVZWXOIGHdDTUBE7WdjaBHNbG11sWRZAHB91t1SLlqxXYyPcpISCJLWYl9TRg8jk5zBNuxmhXM7yjOqtavEpVMnYaMsyCp6QSF7omdrAyoWZ3uhMJWfePRDXPg9CLmyNuNwVk4csesC0E%2BXFH3UZuKwvMfv3N2SzP0xxTeGQXVxj7HNj3wT36P1TP3icRj4i3K%2FVfE3yugb69vam2z9%2FAKlHxCFbvIJhYoBzlVnbYW6%2BOYuUWMra5GlyPWtDYZQvL%2Beydpmu5eMEREjlN4pgtRp8ucogGVb8qQHNYgtJ10Hjqvw%2Fz%2FZU3YuHVfJWpd7AT%2F1WjCu2a8B7co9eknUZWEIHcEL9eB7QWDhUgePXVi3EJWMPIBbp9PBOVhikV4ZVhx9Hl63GN5kv764vo9wFKH03K3VX4x%2FG7UcJ3%2Bm7bSN74WAr%2F7gKiwjoEBKN%2FdoZgrICYmbMdeCNYPEOTW4cLpPtvt%2BQb1ZC5WqnajyXmmrY%2FYrLg5qrNVVbQw0%2FKJvgY6pgHZ3wfm3U6X8Pd6tWGTzbZVIEYalo4FYVzdwG1yx0eD1vh8mVLjIeUDnMDhCTCZUtqEl9xSFcn7nRUrN6rROBYuhmlybsFaE1%2FXrI4ulQkEMwhTgFXc%2BxWrrMJNE7Q3rJ9xqHAOL7T%2Bw%2BwV%2BbGfO2YY%2F94bKNkE6yFDZpbogIRf9VlXEM5Y5t%2BOVz%2B4lkttAU9bS3Ij2glIMQbXxKOb7u%2FH2MsZcHDX&X-Amz-Signature=0ccd5e8c8c3cb6e3b940da295c6c3ec6f3c14fc82b6a0a7328f3406a0df9264f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
