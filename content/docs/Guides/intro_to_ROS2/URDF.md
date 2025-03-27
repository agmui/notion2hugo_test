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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QXAJIR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3JgT12VsCZ8OzQ335cjLtreHeRTj9upjXnEFvnp5mwIhAMxoz%2FKddIUobHU5cbAVL0rcMWNb%2BrEI99GcEAnBKciDKv8DCD0QABoMNjM3NDIzMTgzODA1Igx%2FkUo6yzjOEJg%2FAqsq3AMloJUlCr1E%2FdqmRdfxvddiz%2BwIGywmSr%2B8ZdEzT%2Bb93gyU1zW1y%2B8SjepIPphomCo6Igv9qawEcDqwfL35qNMCvsarbezINzbAhMPUwRy%2FZunr%2FtfxQF7bpIo1jh%2B2ULldhNf8TUEU3MEIF7geb2TqoYk%2Bk2btQmMka%2F3YkgRN%2Fd%2B6T2x%2BiB%2FmxBF1We4w6Q0SIR3qsBO7PccjtYpqDno40ma09diXkxZ9zzemWYV1I%2BYLU8fsxlc1BtUfp6b4fmb88guBCRnIcNWtJ8ygSmedLlBCRUe7SJYEEJnZgw%2BGahRrY6mn%2Bbm%2Fw5XVnnDZWPxjzwS1ySycNSoAmNYStSyRJVBcCn4hl%2Bxp%2Fqd%2F4rHuZxN5NUnGRb2D2h87pQPAbpOI6fW44VS1h1au5SD0PbhbS7Q3hEFfsuskuGERrXYDiEONsqJGaUVltNfb50Ix6xe1KkDrUiAg3K0P07gyra1U1P9mIusAqs20LtGlGn0EHC5jEePcXjIEZ32faX3oZMY%2FLXEMSzMsIhPSoGMTgDM9IfcSzGqgTmlwQsfMmJxIJ8ulV%2FrihDdx1HJI4hXG07kS%2BIz81nkEun%2FstYLOgLiluhVhcDQo3cooZ08LXsE7Zs%2F00yozPW1BkJC9LzDOiZO%2FBjqkATYnS9izToAGU%2BlTiRZL8J4VC9dX1RDOWBQo6qMalC15R5N%2Fl%2FpYSINxtHL0%2BfU1mbNFxbQ%2FzXegEq5yAH%2B2sxIoI0AemB1YlwBFF5VvNnemq8ljyEmdcjQUPiKwQYSGLagtfuY0eKNSsBpEPhzJOYcexFSk4av6u%2FiXuE14i%2B0r%2B7VCpXyIi0kS5n1p19%2FiRUGwS4Q%2B6tgrJrrp4%2FPipFCk%2FZsl&X-Amz-Signature=cee96d31095165e4bb7285af84cdce22662436af345176d6907873ff7a6edfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QXAJIR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3JgT12VsCZ8OzQ335cjLtreHeRTj9upjXnEFvnp5mwIhAMxoz%2FKddIUobHU5cbAVL0rcMWNb%2BrEI99GcEAnBKciDKv8DCD0QABoMNjM3NDIzMTgzODA1Igx%2FkUo6yzjOEJg%2FAqsq3AMloJUlCr1E%2FdqmRdfxvddiz%2BwIGywmSr%2B8ZdEzT%2Bb93gyU1zW1y%2B8SjepIPphomCo6Igv9qawEcDqwfL35qNMCvsarbezINzbAhMPUwRy%2FZunr%2FtfxQF7bpIo1jh%2B2ULldhNf8TUEU3MEIF7geb2TqoYk%2Bk2btQmMka%2F3YkgRN%2Fd%2B6T2x%2BiB%2FmxBF1We4w6Q0SIR3qsBO7PccjtYpqDno40ma09diXkxZ9zzemWYV1I%2BYLU8fsxlc1BtUfp6b4fmb88guBCRnIcNWtJ8ygSmedLlBCRUe7SJYEEJnZgw%2BGahRrY6mn%2Bbm%2Fw5XVnnDZWPxjzwS1ySycNSoAmNYStSyRJVBcCn4hl%2Bxp%2Fqd%2F4rHuZxN5NUnGRb2D2h87pQPAbpOI6fW44VS1h1au5SD0PbhbS7Q3hEFfsuskuGERrXYDiEONsqJGaUVltNfb50Ix6xe1KkDrUiAg3K0P07gyra1U1P9mIusAqs20LtGlGn0EHC5jEePcXjIEZ32faX3oZMY%2FLXEMSzMsIhPSoGMTgDM9IfcSzGqgTmlwQsfMmJxIJ8ulV%2FrihDdx1HJI4hXG07kS%2BIz81nkEun%2FstYLOgLiluhVhcDQo3cooZ08LXsE7Zs%2F00yozPW1BkJC9LzDOiZO%2FBjqkATYnS9izToAGU%2BlTiRZL8J4VC9dX1RDOWBQo6qMalC15R5N%2Fl%2FpYSINxtHL0%2BfU1mbNFxbQ%2FzXegEq5yAH%2B2sxIoI0AemB1YlwBFF5VvNnemq8ljyEmdcjQUPiKwQYSGLagtfuY0eKNSsBpEPhzJOYcexFSk4av6u%2FiXuE14i%2B0r%2B7VCpXyIi0kS5n1p19%2FiRUGwS4Q%2B6tgrJrrp4%2FPipFCk%2FZsl&X-Amz-Signature=7a8fa756222c98c6af1fa1204e3b884b4fd12c565725979f0d42e4e0baffb1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
