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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUCEZDV%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAnvBZFrmoDG5KEK8iD5zptwIEERJz97ulmVmqjawnj9AiEAhbW776KEzC5UXJPFTg7Mo76%2FWAoesSIKId7gzemrgKYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdCRKN6oBOvgC1xvircA28v7D5k9v2awVMAAHQncHAl%2Bcnb59sbXfWncKNoFsUpp8Goyj6Ry2S9ZIhmFPGKv5fGKk1qqQvFF9Af9zQuV%2BGNzx9gFPMB8N4xCwiZf5CxualvdhguBRJPNwqpzXGJ2EVTJvT42M%2F0dgAEuiy%2FHnUKNX%2Fgpzrdo8ePR9jkCAgsV%2FKYyD6Tv9y5MCHaP1HePaYnBZTW3atcrF3%2F4n6zblvybuTmeVo5sSnV8TYJ59dvpvGxyohw700bby9WktwnMNpaqjhqcqOR9G%2BZxm4CVMTsyEZJsCfEySZXhpQc3Tzf3uYxDlnDmOi2sIvTmoFsk7OgRJcBUjODdKpxTW7fjnK57Wuln3JyWzjOZJ7qHoUmh0PqwWzJu3rK%2BfWTv5TzXy2nlDtLUgHixZRDwi%2Bq%2Bho1vJS3R1FtDJs0oJziqLKAvHbtX8r4wA0kcvv21gTk2SgwQfNFioKIOUAvtahheB5BUxVX%2B9ueVhffgg%2B7Zq4gX1jg7QJRIel3ebFN5Im9JEDi3GYR8ufhdXzRc69c6Cx2rkkaPF4XwLlRTcZB3WgdjF7EGICl9wRauhv6x1OxWuI2BlBGX0CnZj3C0mh8Zg0ITTLs%2B%2BfG1W6NbSragC9XdfSQThX5sZGdRYipMMW93r8GOqUBqJSvtdvUMgJ%2B36O2Tgbi18hXcX4Pk3pI9m68jHmPQO2Qb8xrg7hTf%2FhyHQvol3JLe9HzFij5HQRRl6TblQg%2FmX9rNtMEZmCUWVxhl267HlEzvhLXAntYMaFyTpr86k7uwyrqNm61sP%2FHFTOdYBY3kfhlp19DImUPoLjY2k5Aj0rSviHGpbGHFr6Y5ZpdkwIgcyu47ogI1630t2OPiQKfI3pQwSBR&X-Amz-Signature=1da42e9330b0a88ab0d507617091a87fb7badcbd48d0529ba0fa9d1dbee988bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUCEZDV%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAnvBZFrmoDG5KEK8iD5zptwIEERJz97ulmVmqjawnj9AiEAhbW776KEzC5UXJPFTg7Mo76%2FWAoesSIKId7gzemrgKYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdCRKN6oBOvgC1xvircA28v7D5k9v2awVMAAHQncHAl%2Bcnb59sbXfWncKNoFsUpp8Goyj6Ry2S9ZIhmFPGKv5fGKk1qqQvFF9Af9zQuV%2BGNzx9gFPMB8N4xCwiZf5CxualvdhguBRJPNwqpzXGJ2EVTJvT42M%2F0dgAEuiy%2FHnUKNX%2Fgpzrdo8ePR9jkCAgsV%2FKYyD6Tv9y5MCHaP1HePaYnBZTW3atcrF3%2F4n6zblvybuTmeVo5sSnV8TYJ59dvpvGxyohw700bby9WktwnMNpaqjhqcqOR9G%2BZxm4CVMTsyEZJsCfEySZXhpQc3Tzf3uYxDlnDmOi2sIvTmoFsk7OgRJcBUjODdKpxTW7fjnK57Wuln3JyWzjOZJ7qHoUmh0PqwWzJu3rK%2BfWTv5TzXy2nlDtLUgHixZRDwi%2Bq%2Bho1vJS3R1FtDJs0oJziqLKAvHbtX8r4wA0kcvv21gTk2SgwQfNFioKIOUAvtahheB5BUxVX%2B9ueVhffgg%2B7Zq4gX1jg7QJRIel3ebFN5Im9JEDi3GYR8ufhdXzRc69c6Cx2rkkaPF4XwLlRTcZB3WgdjF7EGICl9wRauhv6x1OxWuI2BlBGX0CnZj3C0mh8Zg0ITTLs%2B%2BfG1W6NbSragC9XdfSQThX5sZGdRYipMMW93r8GOqUBqJSvtdvUMgJ%2B36O2Tgbi18hXcX4Pk3pI9m68jHmPQO2Qb8xrg7hTf%2FhyHQvol3JLe9HzFij5HQRRl6TblQg%2FmX9rNtMEZmCUWVxhl267HlEzvhLXAntYMaFyTpr86k7uwyrqNm61sP%2FHFTOdYBY3kfhlp19DImUPoLjY2k5Aj0rSviHGpbGHFr6Y5ZpdkwIgcyu47ogI1630t2OPiQKfI3pQwSBR&X-Amz-Signature=26e1cf32e8a95db94614faceb5ed05069302a97756fbee921e6023b16b47de07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
