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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UM5WU7Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXVTmsJd60k393hdB5EjYlMvLMaCui%2BBUQmydXCiEqrAiAfIcFcU7zl%2FIM4PlpI6clbdT3xAMmLTiAYFbkP5d4PsiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSozlrfZMuy9WruKRKtwDAVL1olstfpjzSgATejeb%2BlQFmzkApGWtERHvvvt9VU4A7JCnVQHiQaC78ZPJ5cb%2FgNZIneH95IvaQ4cbOZlXpF0tle4TVpV74ecyGgYDquCsffgKRgc43cpYShBkzgO5zjOyoeqZ80GfVs2Va1of2axDT0X%2BxF%2FcSgJqFwkp24bTomriZP4i%2FcIdYtWMHQvcwOz7lxc9Rido4%2FlgYZ2lNlAyMaUOrqC0csjPU1W%2BSO8SEKre3rchAkSmtqhFpPEyLn%2FKlzSlb4HtmqNt8YazZlxg0N92vUKUEkBBqYs270LkpAHBeua3cLLIPt5HzjGGt0p%2B%2B2wkvLjiIq3L06ocFt9eWboi4KbdhKWXA4QSsX7S2rBAVkFi6PsVghARdzFClVN1IxJMBKPVde%2FENaB6GngCzvJPnzux0%2BOqKGhnUe7hgVOdGtaNvCPx2JlP%2FDGr3Zq0L5h9%2FMOiTpUXech8sSg%2BZgG%2BVRlqyDSMDYoE2DhhMNz3qXvGGpURA2qDyJ1zsnopUc0dHqA6nCvWr%2F41m1HMRnqgl7LfOVshl7zGC5XjUti%2B%2Bs5DWJV6yfEPVF9LEhsOvgLCzYlu%2BaObra8%2FHbga1ASyy0usRNt9NABbSqYnrtieDZYHIWdc4M4wzJi1vQY6pgFK9cXxLMAljTIkgbM%2B2aHJFcZnq4P0wHa2hPybHzvfZE1uPBWq5qyW4Y9p0nJllVFckbretKJqhtPkSQkSyVhKTjpaK0ipeL%2B1EWgZrRlWfyxdc43siKUFF1qSL4XPT3sS6n%2Fe0X6H82v7wazihs2wCEhlsvh3VRQCiHBne2u6%2FjftsZd1MzYlkvbUeQI99dQxuIxNGZRUn%2F4vP9J%2FwGpmsbTIQ2yN&X-Amz-Signature=15dfb0f5f4b4c704480abddad1fdf70f9402c22e5cc8f203a2c53bf69c461aad&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UM5WU7Y%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXVTmsJd60k393hdB5EjYlMvLMaCui%2BBUQmydXCiEqrAiAfIcFcU7zl%2FIM4PlpI6clbdT3xAMmLTiAYFbkP5d4PsiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSozlrfZMuy9WruKRKtwDAVL1olstfpjzSgATejeb%2BlQFmzkApGWtERHvvvt9VU4A7JCnVQHiQaC78ZPJ5cb%2FgNZIneH95IvaQ4cbOZlXpF0tle4TVpV74ecyGgYDquCsffgKRgc43cpYShBkzgO5zjOyoeqZ80GfVs2Va1of2axDT0X%2BxF%2FcSgJqFwkp24bTomriZP4i%2FcIdYtWMHQvcwOz7lxc9Rido4%2FlgYZ2lNlAyMaUOrqC0csjPU1W%2BSO8SEKre3rchAkSmtqhFpPEyLn%2FKlzSlb4HtmqNt8YazZlxg0N92vUKUEkBBqYs270LkpAHBeua3cLLIPt5HzjGGt0p%2B%2B2wkvLjiIq3L06ocFt9eWboi4KbdhKWXA4QSsX7S2rBAVkFi6PsVghARdzFClVN1IxJMBKPVde%2FENaB6GngCzvJPnzux0%2BOqKGhnUe7hgVOdGtaNvCPx2JlP%2FDGr3Zq0L5h9%2FMOiTpUXech8sSg%2BZgG%2BVRlqyDSMDYoE2DhhMNz3qXvGGpURA2qDyJ1zsnopUc0dHqA6nCvWr%2F41m1HMRnqgl7LfOVshl7zGC5XjUti%2B%2Bs5DWJV6yfEPVF9LEhsOvgLCzYlu%2BaObra8%2FHbga1ASyy0usRNt9NABbSqYnrtieDZYHIWdc4M4wzJi1vQY6pgFK9cXxLMAljTIkgbM%2B2aHJFcZnq4P0wHa2hPybHzvfZE1uPBWq5qyW4Y9p0nJllVFckbretKJqhtPkSQkSyVhKTjpaK0ipeL%2B1EWgZrRlWfyxdc43siKUFF1qSL4XPT3sS6n%2Fe0X6H82v7wazihs2wCEhlsvh3VRQCiHBne2u6%2FjftsZd1MzYlkvbUeQI99dQxuIxNGZRUn%2F4vP9J%2FwGpmsbTIQ2yN&X-Amz-Signature=674efd79c2c2cc53df73cb9b1a7c00794419c3a32a966329232c302f5cc9d13a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
