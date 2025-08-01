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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55K554P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtTOyMejRyvAxWw27Ki5IxR8CXUBuOsbKz5hcGIx%2FsegIhAN0avW9bZ3IvFYylFg5G%2BviepB%2Fjuoys%2BFADeLojeibaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmwgFLVBdWDAvdH4Uq3ANCLQoG1boOzAtJrHcXNz3NDvHjpgoWUpASr0ViXKKvHETOv21DzTToaDQkTWtEvPA7U4EwnPF9xig%2FC0Y8l2xw%2FzuHjgntiA2%2B0Asm8p7CMVQ8gAzYD6ZlztDuBYwkoNAALePE8mi1Z%2FDDsX%2FM6sIZvkVDnXYvIGe%2FUHhvb1ixVDwArFG1LhNhLUB%2BdWFy5U7Wcx2CSr7vMqCOpnN31GF%2FGZPhTWpYkk4Cfkf77xg0ghaUwyhLzRfckfGx7TMAUN8PIApK15ctoNOggP8iCxZ%2FDW2ijQQvARchSvpMh00Bt%2BxKOnczfsOIxxQZ%2FbnJjM8e6MBf2nw7yHU1dvG3tBr5FM5%2FwLKuBHwWsJfmMIKgtHzRtSeW15rnIz4j28h9Q6Ea34gVaS6t2xmdIMJyMjh2iS8tb5eB1%2Fj2cmxh8KPXhSRfFj8tGiiMhZ4oVcpBombmhG1KHTksmIhXHDl%2BtJ55kZTVKrSziBxdyO50u99AO%2B0MePWUW62u6tKHbDi%2B7SFTrGBavapcG1hF3TH8i4uPc%2FmE8HzWSO0oyY%2FCU6vFzYLw%2FsoxioZ5pXVWY01OWrUH7eHyt%2BEmM42rJc3%2BtyMAGNFg0A6nTU%2B6zeiEGEKkXxNVmD2vt49xKSHO7jC647LEBjqkARMebLj4macs1GnDrugZ2djs%2F9Z0EOZsI2fcJymOCX3AXq0eO5feXB8n%2FhxfFcI%2FC4OIa9CwLF56qacsWfSNcUYsyYm%2BhW7jJimMv6sqM0qZzv3U5mP4tACOEKZl4Ra0J8YA7QqMkVm2rjVN0WwuY8qrfuPEcu4lIiDhk1W%2BblpAYEXUqRfkvgFf3KRQD6%2FpBJ2pp5TsAyYPdUhAzsjCkTYsSdaS&X-Amz-Signature=f8797b08c1f78c5f1dc4a6b52dfce8cd67599f2d81048d20a1edc97ed25397a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T55K554P%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtTOyMejRyvAxWw27Ki5IxR8CXUBuOsbKz5hcGIx%2FsegIhAN0avW9bZ3IvFYylFg5G%2BviepB%2Fjuoys%2BFADeLojeibaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmwgFLVBdWDAvdH4Uq3ANCLQoG1boOzAtJrHcXNz3NDvHjpgoWUpASr0ViXKKvHETOv21DzTToaDQkTWtEvPA7U4EwnPF9xig%2FC0Y8l2xw%2FzuHjgntiA2%2B0Asm8p7CMVQ8gAzYD6ZlztDuBYwkoNAALePE8mi1Z%2FDDsX%2FM6sIZvkVDnXYvIGe%2FUHhvb1ixVDwArFG1LhNhLUB%2BdWFy5U7Wcx2CSr7vMqCOpnN31GF%2FGZPhTWpYkk4Cfkf77xg0ghaUwyhLzRfckfGx7TMAUN8PIApK15ctoNOggP8iCxZ%2FDW2ijQQvARchSvpMh00Bt%2BxKOnczfsOIxxQZ%2FbnJjM8e6MBf2nw7yHU1dvG3tBr5FM5%2FwLKuBHwWsJfmMIKgtHzRtSeW15rnIz4j28h9Q6Ea34gVaS6t2xmdIMJyMjh2iS8tb5eB1%2Fj2cmxh8KPXhSRfFj8tGiiMhZ4oVcpBombmhG1KHTksmIhXHDl%2BtJ55kZTVKrSziBxdyO50u99AO%2B0MePWUW62u6tKHbDi%2B7SFTrGBavapcG1hF3TH8i4uPc%2FmE8HzWSO0oyY%2FCU6vFzYLw%2FsoxioZ5pXVWY01OWrUH7eHyt%2BEmM42rJc3%2BtyMAGNFg0A6nTU%2B6zeiEGEKkXxNVmD2vt49xKSHO7jC647LEBjqkARMebLj4macs1GnDrugZ2djs%2F9Z0EOZsI2fcJymOCX3AXq0eO5feXB8n%2FhxfFcI%2FC4OIa9CwLF56qacsWfSNcUYsyYm%2BhW7jJimMv6sqM0qZzv3U5mP4tACOEKZl4Ra0J8YA7QqMkVm2rjVN0WwuY8qrfuPEcu4lIiDhk1W%2BblpAYEXUqRfkvgFf3KRQD6%2FpBJ2pp5TsAyYPdUhAzsjCkTYsSdaS&X-Amz-Signature=7f8b9ce74b228622ccfea0a058a8181e91b38f0f1eb64fb831e830aec7abde9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
