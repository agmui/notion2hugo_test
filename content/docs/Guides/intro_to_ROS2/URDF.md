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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3NRDW7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQEyzlx9Pud0H68Me%2Fpy7REMP3sp7UdE8PnEuok31%2FQwIgLXbzQy3bIStWLyHYscEfRkMJcUZbf4mB%2BZAtkE6D5q0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMO6%2BX7mRGG%2F9YdiFSrcA8rF2CEyZ%2FrVC%2B3ifIWA14czKiTGL2%2BxBativawidOg6xjMujxsBGTgojVcSGiFC2H6KWKe8YJNSEvU9YitKl6ajy6oFPr71vMPKsBCW6EN8FaUPx8bk4AiOoftDbbLEVlYQP0NC6JJCqgwo07HLOqz2Zg7etD5HH1ptKdaQOUkK99EapTrsli3fm608m6PlM3oaiOaSMJ4I0zdFLHp6PwjLpnkpQT%2B%2FMXnOirTGtKkp6DVq%2Fixn1N8wlJTPdOuvv2LhBPVIobTehvuosApDReSIHRE9oo%2F3z7RAWgbTxPmfOJrZQWeqiqoM%2B3GpHNxAeK6FRu1B8wq%2FTh2y6QVbRd9NfYPxyfUY3m4LqIRqIZ6jCrsyMR9bYi1qgwKKusmS%2B40tLlVH4FHZuMPP1xuFZ884aWRz3FvZlejX7uqN%2F861T65fer3vrrKMKmSE7M6aQPmx0swkC0ZDAfmuYekQZlZxM6UfbIjhTEGSGOE43IQG4I9EAXFfDXMZr%2BxqJyY3lkD1atCqShcSDpcot8tfm4%2BMvD94rhZcDqvxCil0ALMxNqQk9o%2FtdA6gqR2WCzs9rUDEq95tmq6fJmVKk3FpiE1Q3HmK%2FhX2yvWCdeUjUQelJ1SCfJwg5aybLRKgMJjKtr0GOqUBvd%2FJt%2FkwRjzWzAauu1ZZrv69o%2FPaLqUwmGipIC2B%2FvDaUP4IIJs6otxgY%2B5BflsajMzPAp3RpnXsTCU5hWRSEaOLmlZoq6D64SBpjZu%2BmyYijuEM8COdn2ZlnN9CrqRs8LXheL%2BTV69NihQYdIrXhFWtbvzXtHmtM%2FLJjs2lGn0byQIuDTcoJO2eyXNU4UnvaWnCXehrblNlfx9AxGOeHJMVE7Na&X-Amz-Signature=7910367f6ed2623e50fbc14e8c6c9f356bdab8e3ed75d47909186f1650664758&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3NRDW7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQEyzlx9Pud0H68Me%2Fpy7REMP3sp7UdE8PnEuok31%2FQwIgLXbzQy3bIStWLyHYscEfRkMJcUZbf4mB%2BZAtkE6D5q0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMO6%2BX7mRGG%2F9YdiFSrcA8rF2CEyZ%2FrVC%2B3ifIWA14czKiTGL2%2BxBativawidOg6xjMujxsBGTgojVcSGiFC2H6KWKe8YJNSEvU9YitKl6ajy6oFPr71vMPKsBCW6EN8FaUPx8bk4AiOoftDbbLEVlYQP0NC6JJCqgwo07HLOqz2Zg7etD5HH1ptKdaQOUkK99EapTrsli3fm608m6PlM3oaiOaSMJ4I0zdFLHp6PwjLpnkpQT%2B%2FMXnOirTGtKkp6DVq%2Fixn1N8wlJTPdOuvv2LhBPVIobTehvuosApDReSIHRE9oo%2F3z7RAWgbTxPmfOJrZQWeqiqoM%2B3GpHNxAeK6FRu1B8wq%2FTh2y6QVbRd9NfYPxyfUY3m4LqIRqIZ6jCrsyMR9bYi1qgwKKusmS%2B40tLlVH4FHZuMPP1xuFZ884aWRz3FvZlejX7uqN%2F861T65fer3vrrKMKmSE7M6aQPmx0swkC0ZDAfmuYekQZlZxM6UfbIjhTEGSGOE43IQG4I9EAXFfDXMZr%2BxqJyY3lkD1atCqShcSDpcot8tfm4%2BMvD94rhZcDqvxCil0ALMxNqQk9o%2FtdA6gqR2WCzs9rUDEq95tmq6fJmVKk3FpiE1Q3HmK%2FhX2yvWCdeUjUQelJ1SCfJwg5aybLRKgMJjKtr0GOqUBvd%2FJt%2FkwRjzWzAauu1ZZrv69o%2FPaLqUwmGipIC2B%2FvDaUP4IIJs6otxgY%2B5BflsajMzPAp3RpnXsTCU5hWRSEaOLmlZoq6D64SBpjZu%2BmyYijuEM8COdn2ZlnN9CrqRs8LXheL%2BTV69NihQYdIrXhFWtbvzXtHmtM%2FLJjs2lGn0byQIuDTcoJO2eyXNU4UnvaWnCXehrblNlfx9AxGOeHJMVE7Na&X-Amz-Signature=13369941937a9fc479cd4e23d68343e1d94756fce33e3fdb55fad2a9ae4497d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
