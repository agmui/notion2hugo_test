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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4D5XN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDIMGc0PXB38pIL6nxpW%2FJXt4Nl3Q7WGjl9if2PZlyvZAIhAI%2FQamYa%2FUSIDXkxpc9f7dWJtFgj1IUubFyPP9NBLW4FKv8DCHIQABoMNjM3NDIzMTgzODA1IgxezxzGQksSxMhIhyEq3APVHN9nEBQXnUMHvMOuQ%2FdRluY9Lm9HvHWnF4dFV9U8pN2%2B5bAFt40ql%2B19RFY8RhDB%2FJwjW5eKaiqSMs3oej%2FWPNzah%2BHKFeKxp9tgIOuzGdSxID9T57pkbWA5u5oGqH4ORDupTjTPdt1yWdO6BszxR%2BSNBfqyRi3Bbdio0Lv6DgT7YTNOvW%2BM7VddGRHljPQmm8vthJXqVYxva5WfeLXes64nH%2BRtHDUoziXHmRfkcEbHrVpXDz%2B7stWJ%2FYY%2BavTLck%2BlDX3IQ0ed1gd54eXl3BYVXB91vmKH%2FKZtZoPz6z3ROqOApq8TZQcryKdyVL0PGTpGZRN%2BHiwSnl%2Bw7o%2BuriB2tjHChklMI8ih1pUKCnvWdC7IQMzaTe%2FaugZVz%2FJMv%2FU31A5kJ%2BEfQF%2F4SJ2HQQ%2FYvgQohobZ83p92fY7TgjgbsgY9%2BL43Bii81DvllCPUj2KtKTlVCnjxyBItV9zK4kUXRUjeL%2B4Rh6SaNAQdf2iahHsv73YUYXJmJR%2BQD0CV0sYkz%2BczMQRRwHO10DhgwjEnSBk51GmIGJUGVjCBP%2Fk9bZVpPTtyVuS5Gesju5nOBmxZKlNJ5RPGP%2FVMRm8wWXuFE18OFI3X%2BiL1PmJma6mG%2FMGIZ3Z8In%2FVjC53ZfEBjqkAZE17MWnkRRPtWEYG9qJzw%2BQdX2wLk%2Fb0teEZtrWbqUTG5BfKEF%2B54Fen%2FdcdwimLrycxxCS5FzinWvUyaelR3meCEO0Rb76PavRjHHl%2FcG9Bs56NHqSRikq0LGocN%2BCQ3TamldfSI3PZPC%2FythhoAL7CMc52zgk%2FIXadIz1FRtTxAz64KbsfHWi2%2B3LTW%2BN3%2FFcYLFZNW2E4yJvPdzTxNWweW%2FR&X-Amz-Signature=f7e4ab08b11ac701bae20f9e7b543f16a30788a4120c6071f19b8655383efb2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655O4D5XN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDIMGc0PXB38pIL6nxpW%2FJXt4Nl3Q7WGjl9if2PZlyvZAIhAI%2FQamYa%2FUSIDXkxpc9f7dWJtFgj1IUubFyPP9NBLW4FKv8DCHIQABoMNjM3NDIzMTgzODA1IgxezxzGQksSxMhIhyEq3APVHN9nEBQXnUMHvMOuQ%2FdRluY9Lm9HvHWnF4dFV9U8pN2%2B5bAFt40ql%2B19RFY8RhDB%2FJwjW5eKaiqSMs3oej%2FWPNzah%2BHKFeKxp9tgIOuzGdSxID9T57pkbWA5u5oGqH4ORDupTjTPdt1yWdO6BszxR%2BSNBfqyRi3Bbdio0Lv6DgT7YTNOvW%2BM7VddGRHljPQmm8vthJXqVYxva5WfeLXes64nH%2BRtHDUoziXHmRfkcEbHrVpXDz%2B7stWJ%2FYY%2BavTLck%2BlDX3IQ0ed1gd54eXl3BYVXB91vmKH%2FKZtZoPz6z3ROqOApq8TZQcryKdyVL0PGTpGZRN%2BHiwSnl%2Bw7o%2BuriB2tjHChklMI8ih1pUKCnvWdC7IQMzaTe%2FaugZVz%2FJMv%2FU31A5kJ%2BEfQF%2F4SJ2HQQ%2FYvgQohobZ83p92fY7TgjgbsgY9%2BL43Bii81DvllCPUj2KtKTlVCnjxyBItV9zK4kUXRUjeL%2B4Rh6SaNAQdf2iahHsv73YUYXJmJR%2BQD0CV0sYkz%2BczMQRRwHO10DhgwjEnSBk51GmIGJUGVjCBP%2Fk9bZVpPTtyVuS5Gesju5nOBmxZKlNJ5RPGP%2FVMRm8wWXuFE18OFI3X%2BiL1PmJma6mG%2FMGIZ3Z8In%2FVjC53ZfEBjqkAZE17MWnkRRPtWEYG9qJzw%2BQdX2wLk%2Fb0teEZtrWbqUTG5BfKEF%2B54Fen%2FdcdwimLrycxxCS5FzinWvUyaelR3meCEO0Rb76PavRjHHl%2FcG9Bs56NHqSRikq0LGocN%2BCQ3TamldfSI3PZPC%2FythhoAL7CMc52zgk%2FIXadIz1FRtTxAz64KbsfHWi2%2B3LTW%2BN3%2FFcYLFZNW2E4yJvPdzTxNWweW%2FR&X-Amz-Signature=e4f3c23636e48d04e35bda876ec9a6170621d5844e9883bc07eb491ffc84f673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
