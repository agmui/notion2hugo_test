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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQ6XLT7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC5c%2F8UaEp5DpDwFyRzuKxflgI9FaX6bqFYs1JNdjjbaQIgeYzm59hTDkB0ncrMRTXVOfuE8Y6x4EFM1Xld8IrB3%2Bkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP%2Fqw6GMw0ofu66AXSrcA8Cj8MczpOdBnWYo52YOxiJ6RvCZ6WaC2U2L6PAaxYatt%2BE90lz6dtcUtxSGJxuaGYseucHh6L0NPPjY9PZ20gMYRVlBpziE29i7e88tZUQJXRYcd85tXat8DZUlGxcXG2%2BfRM%2BUVcr0dCdUGKAw8eVnW3hfPR3ALjqJbQsSrix%2BhjFryIP48uIkffn71qLeYSRYE7cKNapdpU2tUkVhBSiusCkIv7UvG28GG3d01Yli0mkkB%2BZbG7usbSW14bb0dMx8RkgLvdns40u8SBBj9qOt1pQfN%2Fug%2FQjh0V4kkPbGZWWIQJNxkZwrWUMPOQkgR6%2F8i%2BxLI8JkBCgvOAUW9nD%2F9NX2ANqzbhiaOAjB3cqczlphaJd%2FDUPp%2FbQG9ViA87ya9uwEqaS0GD2Wf6pie1l0AMbFOtArNpk0wZpNjN05cVoK3HALENQZGWIj32x0hPAm4Rubz%2BLK5kC%2BLOmN8etlRoBY3y%2BRa51iaDdQ76JMQvp6AFw0RgOaFyXRvR6rfuqLTSzk78ISHkFS6jorxf8nil0EIOBW1BFP3%2B7PFHOUEjmapfo9vbPCPFzch%2FXoy6Bqp7qSjfX9QZZzqnFTJ5EOJdT53dJuyfL9czcWcLOPFt34%2FOtRW3KxDf%2FuMMf6vb0GOqUBeV4wBeNeHYNUjpmU9N5CnsyTQYY6iO4wdh5YvEIng4isICCGokRiAJ3uqt25yBvVsQfrgU3ScejQI8vWZCdYZFP5gKvD%2BoB61fe5laX7FSam8%2B6SKzF4JQCmpotw32C8aGhehPy%2B8stUbKYMpQEojPccZ313wV4JarzN5TeTZh8T2hQpgMITWFjC6j1DGgv2X5kMuJBe9vATLNSAg9B0ISEDy8FC&X-Amz-Signature=10f92f9d3ec482e10d346575a3d56558508a08f470411afd4e4ad65e998b2cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQ6XLT7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC5c%2F8UaEp5DpDwFyRzuKxflgI9FaX6bqFYs1JNdjjbaQIgeYzm59hTDkB0ncrMRTXVOfuE8Y6x4EFM1Xld8IrB3%2Bkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDP%2Fqw6GMw0ofu66AXSrcA8Cj8MczpOdBnWYo52YOxiJ6RvCZ6WaC2U2L6PAaxYatt%2BE90lz6dtcUtxSGJxuaGYseucHh6L0NPPjY9PZ20gMYRVlBpziE29i7e88tZUQJXRYcd85tXat8DZUlGxcXG2%2BfRM%2BUVcr0dCdUGKAw8eVnW3hfPR3ALjqJbQsSrix%2BhjFryIP48uIkffn71qLeYSRYE7cKNapdpU2tUkVhBSiusCkIv7UvG28GG3d01Yli0mkkB%2BZbG7usbSW14bb0dMx8RkgLvdns40u8SBBj9qOt1pQfN%2Fug%2FQjh0V4kkPbGZWWIQJNxkZwrWUMPOQkgR6%2F8i%2BxLI8JkBCgvOAUW9nD%2F9NX2ANqzbhiaOAjB3cqczlphaJd%2FDUPp%2FbQG9ViA87ya9uwEqaS0GD2Wf6pie1l0AMbFOtArNpk0wZpNjN05cVoK3HALENQZGWIj32x0hPAm4Rubz%2BLK5kC%2BLOmN8etlRoBY3y%2BRa51iaDdQ76JMQvp6AFw0RgOaFyXRvR6rfuqLTSzk78ISHkFS6jorxf8nil0EIOBW1BFP3%2B7PFHOUEjmapfo9vbPCPFzch%2FXoy6Bqp7qSjfX9QZZzqnFTJ5EOJdT53dJuyfL9czcWcLOPFt34%2FOtRW3KxDf%2FuMMf6vb0GOqUBeV4wBeNeHYNUjpmU9N5CnsyTQYY6iO4wdh5YvEIng4isICCGokRiAJ3uqt25yBvVsQfrgU3ScejQI8vWZCdYZFP5gKvD%2BoB61fe5laX7FSam8%2B6SKzF4JQCmpotw32C8aGhehPy%2B8stUbKYMpQEojPccZ313wV4JarzN5TeTZh8T2hQpgMITWFjC6j1DGgv2X5kMuJBe9vATLNSAg9B0ISEDy8FC&X-Amz-Signature=45325431ef6540037501fdb0d18f2778bfea8289529d0aad3d527657d217a526&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
