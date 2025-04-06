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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCEPDGVT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQDdnbd25RHO%2B%2B5%2BTswg30GcbQWBtaKGis%2FkYI9%2FMZkAiEAstGEWh3Yt1LStI0JOUbNQPDRNl8PEXYXJGLLzaVsLysq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMYf6PS90w97dlwDmircAwCqRsXL0ZkcDolAzAgBnQWXyJ%2BpC1xE15PtdPwXootS3EkwnldtxXc%2FVeB6vzOY13JjpeT6IEsfXxfidj2wIPSfX%2FmaUvdi2GMOUq8HIkKv%2BY8gHqN3AfnzedOypQAq5WjVX%2FNW6ryeleWk0NlDuxYMLwzw2DzzhNSnRUkLuhGbTFVYSQzfKJT6Y2%2FLJabkxMB4cINWMV0bA7aozMawGL9KYE2qRXfDuSI4UxbZ%2FTGbJbR0Tz%2FGps1cShJcbVk3bqQSNhrX80n%2Bk0VrLsUmeQoRrnnbrDi2S3DyP44oOFEwHV1LfbvcqtFIEz8DXcTxC5cBNSpldzu2Q5IcqF33DaWBNw55IpOpYxNgP2agCARMtsiwNnXKe5lNjvtBHVPPBxUnc2HRbQZ9MvmXFXXqnw42gKt7NimlhuP7KW5oVHQabihFDMMbRQkwwyiCVe6nQX%2FKvhTiunXWlxviz7G4VQfJjaEDq6WFDJXnkT6Q7KEnanRTxUwMlPat%2BcBnKJU6CPouOerGGSY4UwKguiLkd%2B6fwZyGXo9AI2ccjXlcO9BFQGntZlK0ZzKWUmG19YW3vKwrAZf0avZACZcD1UiCi7%2BXGFq4AnvwwlniF0T%2Bs%2F%2BV2%2BVBaz%2Bag6sLrcmlMI7Dxr8GOqUBT%2FpZCTAVJDci0rkGBUQAzxN56tY2m5aSHCiYcEr2YuhawwRHslHoaMAg8KEZZ%2BoL9Vup934yRI0KDvovZSK2Q20JFK0JvvkNC0gURtpjZELO2LBd%2F7NmuKfzGzMj0GyWHst%2FrlAdCU6Yv7E%2BgBDu43pgVol%2Fxxfpr1y3soBMmSRemX6Tk%2BsGKmoHGtiyu%2BHvEHMs7pb%2BIzKCPl6B0pY465jIa6Rq&X-Amz-Signature=43a513d489c16d7484e33e28a4e9a846d002880fc3476e2298b799f0e159c7e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCEPDGVT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQDdnbd25RHO%2B%2B5%2BTswg30GcbQWBtaKGis%2FkYI9%2FMZkAiEAstGEWh3Yt1LStI0JOUbNQPDRNl8PEXYXJGLLzaVsLysq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMYf6PS90w97dlwDmircAwCqRsXL0ZkcDolAzAgBnQWXyJ%2BpC1xE15PtdPwXootS3EkwnldtxXc%2FVeB6vzOY13JjpeT6IEsfXxfidj2wIPSfX%2FmaUvdi2GMOUq8HIkKv%2BY8gHqN3AfnzedOypQAq5WjVX%2FNW6ryeleWk0NlDuxYMLwzw2DzzhNSnRUkLuhGbTFVYSQzfKJT6Y2%2FLJabkxMB4cINWMV0bA7aozMawGL9KYE2qRXfDuSI4UxbZ%2FTGbJbR0Tz%2FGps1cShJcbVk3bqQSNhrX80n%2Bk0VrLsUmeQoRrnnbrDi2S3DyP44oOFEwHV1LfbvcqtFIEz8DXcTxC5cBNSpldzu2Q5IcqF33DaWBNw55IpOpYxNgP2agCARMtsiwNnXKe5lNjvtBHVPPBxUnc2HRbQZ9MvmXFXXqnw42gKt7NimlhuP7KW5oVHQabihFDMMbRQkwwyiCVe6nQX%2FKvhTiunXWlxviz7G4VQfJjaEDq6WFDJXnkT6Q7KEnanRTxUwMlPat%2BcBnKJU6CPouOerGGSY4UwKguiLkd%2B6fwZyGXo9AI2ccjXlcO9BFQGntZlK0ZzKWUmG19YW3vKwrAZf0avZACZcD1UiCi7%2BXGFq4AnvwwlniF0T%2Bs%2F%2BV2%2BVBaz%2Bag6sLrcmlMI7Dxr8GOqUBT%2FpZCTAVJDci0rkGBUQAzxN56tY2m5aSHCiYcEr2YuhawwRHslHoaMAg8KEZZ%2BoL9Vup934yRI0KDvovZSK2Q20JFK0JvvkNC0gURtpjZELO2LBd%2F7NmuKfzGzMj0GyWHst%2FrlAdCU6Yv7E%2BgBDu43pgVol%2Fxxfpr1y3soBMmSRemX6Tk%2BsGKmoHGtiyu%2BHvEHMs7pb%2BIzKCPl6B0pY465jIa6Rq&X-Amz-Signature=2bbe7d683332165e2e6441103938010d17b17c0e787d3beb6e58750069362083&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
