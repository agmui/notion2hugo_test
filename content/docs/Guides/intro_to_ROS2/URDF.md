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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO23VA5M%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo807ZvmwkyVctmUlsx7t6ehUEPL7BMg3NNGtILvwVeQIhAL%2F62Cwau%2BFGSNbn8pZxr46hoySfqSSU7%2Brd7xqqDxrPKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJwPQOZ078RmUUzcq3AMKvLeE1ELKGgOhM%2BStoW0hxacbMndAXm%2FZjAxl%2FCudUpDu9tyJbQySTDKIJkhk7TzXjdiDmnda4JA%2B7RBTfSJmMoo03O0ps6CkAue%2F%2Bqt2DaBS%2BEJMtMkd27%2F7gWOUqyP9viUHUkP7z8eaWrdgz2aJS4svC6vlYlsZzTD1V4gNl6ThhVtKlV5S7hIizopCj9tbojP9HoOLskaW321oKeodSLlRaqjI63Z3Z8KOOiQ26DyfrbC8PnoZWCNU6OejYaqiFsXrrQsw3AuN72NAIqaRPcIveMpvc8tlR%2FWiiuOIY79Bry2AW0Up3UN1l0SitQIgGmWkFI3IhVl5LW5tTsREg9mF0GeedtrHV%2B6MW1aswVjorVDwIiCbE6dtRYKsNBLDcMLxTELVDTH0vm3FdgzprS%2FiP1%2BObhdFFsFdPIfbjQTg6lw37CEqHvZLls5daFWYVg626tZA7oocifuiDcZ0M4Wel7Mxp7%2FHh965xdT6Nld8ljiM48RmOt8GkzU1R1eJeMqB6%2B4ZHXT3qBOOFyoIQUN6BCRfpj7hdgS8q68pwg6XWltPKVlEGIBuMxiPcrosnUlHaoqLpXwT3SfC8Xw%2FTcPPoDbZujjA8F5bMJ%2BKDSCEKf3Sq9pJWcGttjD2rd7CBjqkAWMrVokuwi0WP4YBZcZ7U%2FNdu0p9X1Juy%2BRbNnQHdqY4Lcedg%2F%2FG8U6v2gDsE0O%2BeYgdjKwMbDLPFA8kK786yAMZjKj3o6B204iDh8vLvepUipsqgnH%2FvG7tGR%2BwMiLtpg5Td7uW6KhTPzS7%2BSU%2FVpbc6eGCJlFdTvjXJycBeav65TYtr5Rt3i4UG%2B6jfWDKHVUbROu%2B4pyanpoJoe%2FNN3HXkJkT&X-Amz-Signature=06bf865e615f57ac3c36319a4795c7d86893a2c9a6d70b8e0c117a78c0b2ce23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO23VA5M%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo807ZvmwkyVctmUlsx7t6ehUEPL7BMg3NNGtILvwVeQIhAL%2F62Cwau%2BFGSNbn8pZxr46hoySfqSSU7%2Brd7xqqDxrPKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcJwPQOZ078RmUUzcq3AMKvLeE1ELKGgOhM%2BStoW0hxacbMndAXm%2FZjAxl%2FCudUpDu9tyJbQySTDKIJkhk7TzXjdiDmnda4JA%2B7RBTfSJmMoo03O0ps6CkAue%2F%2Bqt2DaBS%2BEJMtMkd27%2F7gWOUqyP9viUHUkP7z8eaWrdgz2aJS4svC6vlYlsZzTD1V4gNl6ThhVtKlV5S7hIizopCj9tbojP9HoOLskaW321oKeodSLlRaqjI63Z3Z8KOOiQ26DyfrbC8PnoZWCNU6OejYaqiFsXrrQsw3AuN72NAIqaRPcIveMpvc8tlR%2FWiiuOIY79Bry2AW0Up3UN1l0SitQIgGmWkFI3IhVl5LW5tTsREg9mF0GeedtrHV%2B6MW1aswVjorVDwIiCbE6dtRYKsNBLDcMLxTELVDTH0vm3FdgzprS%2FiP1%2BObhdFFsFdPIfbjQTg6lw37CEqHvZLls5daFWYVg626tZA7oocifuiDcZ0M4Wel7Mxp7%2FHh965xdT6Nld8ljiM48RmOt8GkzU1R1eJeMqB6%2B4ZHXT3qBOOFyoIQUN6BCRfpj7hdgS8q68pwg6XWltPKVlEGIBuMxiPcrosnUlHaoqLpXwT3SfC8Xw%2FTcPPoDbZujjA8F5bMJ%2BKDSCEKf3Sq9pJWcGttjD2rd7CBjqkAWMrVokuwi0WP4YBZcZ7U%2FNdu0p9X1Juy%2BRbNnQHdqY4Lcedg%2F%2FG8U6v2gDsE0O%2BeYgdjKwMbDLPFA8kK786yAMZjKj3o6B204iDh8vLvepUipsqgnH%2FvG7tGR%2BwMiLtpg5Td7uW6KhTPzS7%2BSU%2FVpbc6eGCJlFdTvjXJycBeav65TYtr5Rt3i4UG%2B6jfWDKHVUbROu%2B4pyanpoJoe%2FNN3HXkJkT&X-Amz-Signature=3b86016fff68501fcc98fb5dbd5a99711ebfae266807c8cda3024648b97c16c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
