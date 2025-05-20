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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RQBQGGT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbA4%2BmaMkrYeX7bON5t0NyofJBQdX5qR32mWUHrxfFgIgRfXxyMz71QfmLLtmeXscdJaiXffLZk7z%2F7GdUe%2BQtWQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMriE6UAX%2FcSFW0aTSrcA2L5iJDKpS8HS40OQO8ZiQLXpR%2B6ihtMYS9E0H2KwRRrAv9C9BJroY3iB9lykbVgXSD9Nsbsvz42JOLXocabo9SK67M%2BU92exXavaYaCLXbjPQjmPiPrWxCvAd6rodg6bEKrf5YT%2FeNeBeGdAYsyV4yYMMW498pKcPSpQ%2Bu2qHQMzUFKXf6wgLfpRcLvRuWS6n6%2BeQJPlF22zRVvTP1r0lgP5Qw8%2F0BeLNvGlMsMGhvOu6bI5TTHERRBv5Sxl0Ph%2BWVPPY7Cn7ZatvJurfCDnox9RdYOMtq%2BnWpwPGmy3q2KduiO8XzZH4uGZvGr%2F2a7kxQzUINR1%2BePQn%2BYkvoEmvE1x7gL%2FuYdnMZPh%2Bn6uexznqTLFJ9n2khLDCV2c%2FkG5T37IpBpJqudBkLVVHg5eUinKsBE1ZTfot5zjYdX7XpBOuBbQPlm8NvxEaQJxGkCBROym1kwxpMjI5JUIUE5OKXEuG2eU8jbXDqnMN%2FGpprwcdpctTalKi0uuQ3sOo%2BNEHgBQKLlRXzmUuZOPF1%2FT83zvA7C35Wpgr9lvQZBR1AcClgJXGRA8W9JGgF4iSlYhEXxfOBjXKIcYjdPFFl0oXfBRb14ohT8YmWQKk0c9MWA8xTOb9%2FDcIlFPPppMKiYs8EGOqUB6cGGZOG5BO5XDO2UeenHhDQJLIEOjF0I18emZzfF%2B8cB1sHXHOKFL4RFF9EVyBJfLeEhN2LpQUm%2FvzaSsW6caFe%2B1x47kHwaam0eDegba6tHBMfo3Hb0r0yTrgZEtJfc6YWSrBwuemgFJYWqcahhOdj3eyvcGqQDepoE4pKdaYPT89niC4ZLafwGI6wgD51BkBtfgk32TYAAFYAW5%2Bsl%2Fw%2BjjYIc&X-Amz-Signature=79e9b72e58c8e1e5feb07beb2960ada25b87f9495da192f475017bab2e9990b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RQBQGGT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWbA4%2BmaMkrYeX7bON5t0NyofJBQdX5qR32mWUHrxfFgIgRfXxyMz71QfmLLtmeXscdJaiXffLZk7z%2F7GdUe%2BQtWQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMriE6UAX%2FcSFW0aTSrcA2L5iJDKpS8HS40OQO8ZiQLXpR%2B6ihtMYS9E0H2KwRRrAv9C9BJroY3iB9lykbVgXSD9Nsbsvz42JOLXocabo9SK67M%2BU92exXavaYaCLXbjPQjmPiPrWxCvAd6rodg6bEKrf5YT%2FeNeBeGdAYsyV4yYMMW498pKcPSpQ%2Bu2qHQMzUFKXf6wgLfpRcLvRuWS6n6%2BeQJPlF22zRVvTP1r0lgP5Qw8%2F0BeLNvGlMsMGhvOu6bI5TTHERRBv5Sxl0Ph%2BWVPPY7Cn7ZatvJurfCDnox9RdYOMtq%2BnWpwPGmy3q2KduiO8XzZH4uGZvGr%2F2a7kxQzUINR1%2BePQn%2BYkvoEmvE1x7gL%2FuYdnMZPh%2Bn6uexznqTLFJ9n2khLDCV2c%2FkG5T37IpBpJqudBkLVVHg5eUinKsBE1ZTfot5zjYdX7XpBOuBbQPlm8NvxEaQJxGkCBROym1kwxpMjI5JUIUE5OKXEuG2eU8jbXDqnMN%2FGpprwcdpctTalKi0uuQ3sOo%2BNEHgBQKLlRXzmUuZOPF1%2FT83zvA7C35Wpgr9lvQZBR1AcClgJXGRA8W9JGgF4iSlYhEXxfOBjXKIcYjdPFFl0oXfBRb14ohT8YmWQKk0c9MWA8xTOb9%2FDcIlFPPppMKiYs8EGOqUB6cGGZOG5BO5XDO2UeenHhDQJLIEOjF0I18emZzfF%2B8cB1sHXHOKFL4RFF9EVyBJfLeEhN2LpQUm%2FvzaSsW6caFe%2B1x47kHwaam0eDegba6tHBMfo3Hb0r0yTrgZEtJfc6YWSrBwuemgFJYWqcahhOdj3eyvcGqQDepoE4pKdaYPT89niC4ZLafwGI6wgD51BkBtfgk32TYAAFYAW5%2Bsl%2Fw%2BjjYIc&X-Amz-Signature=3354047f304500266a381940cfb4fc6812f527df520fc86031efccf821340a53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
