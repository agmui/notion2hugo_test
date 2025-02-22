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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNCEFZSH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASI0OoGs5BVpdMXxpZV2%2BZgBROXNTB7gP1DtGoknA8hAiBvLRFuvf1LiOeLnH4Mj0bO6%2BU1EOhxcqzu7%2FLNzfYpgCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxAX%2BBGtpmfOsCpEJKtwDGa7j4P9MOMHqaFnnFq7NYBUnW3jnsQdXIiEHZfsCz6w3TZXqmEM9llKh%2BxtWuJh%2B5vBq7TArBDkE5sJ57Zw7DE6AWbkCLyHgeWWsi91cEQME5fHntWWB4KCKNYQ0JaaA4529jd9mHOQvvhGFHME6pr8UiyCqygg2VwusnHO4Bq8MDBsx6ot2V7GqdyWZGORP09xsEQwo2bYBlKys4o8%2BWiHT%2BIZudev%2Bw6XaDmIHMNh6O5%2FFpX5jntKYTd4oVHbdY%2FmKo8Ue2uPM6P5516QEXZHoY9k8Hru1OlPNnFqqsRZ5eO%2BNUfykrGhwhWcoB7Wzm6IR%2BCQfqKHRMPAhM2cDAo4tgkTXiI5n0%2Bl%2BXqEu2AU0pfsJpzkFz1mKTRRuVDo6UIN8JIuJlUD%2BVQW8D208n7JslkLxVkITY5CvoGoVi8m%2F01rr21qYk6YtBTP422ZIh1A0ifVJvjlw2p51SmSndGakKkrhiFYki1%2FCDyxX4Yyss0XRHIjQXaoIYdLg9hIoy%2BgdwHc378PwZCkrbkc0dA1SQnOYZnktmCEd0wEWlfAKQC7KJ9SUje0MoqODWilCPpgZNWOWqZsalGfmc95JL6GA1TtvFfM%2B37YwRocRbSAXYDGBHHra2AWq3a0wq%2BnmvQY6pgF40S02Q1TodCSY7kV9i3m6%2F%2FcbxQjJMgG8OI2LCroGhxqbYCAfU7yWm%2F9TZwIaJ29DBOkQX5dzuRsfFw6xKQ%2FF%2FVb17ajSimPhCsTx5KaaFOqTxRImcW5tyJU9C5xWlOAYNddv9lfnf5WeP2Dzo3YBf0VvFSaQ8KMbobCk91f1dg0y6hX8mpi1o5kIQ8hBXS95uibqlItoC49caJYdJ8INZV4yMxd4&X-Amz-Signature=9b18800fb2808082791ac7c0b4c0f813727a40e74618c21fec4228147f3040ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNCEFZSH%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T131105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASI0OoGs5BVpdMXxpZV2%2BZgBROXNTB7gP1DtGoknA8hAiBvLRFuvf1LiOeLnH4Mj0bO6%2BU1EOhxcqzu7%2FLNzfYpgCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxAX%2BBGtpmfOsCpEJKtwDGa7j4P9MOMHqaFnnFq7NYBUnW3jnsQdXIiEHZfsCz6w3TZXqmEM9llKh%2BxtWuJh%2B5vBq7TArBDkE5sJ57Zw7DE6AWbkCLyHgeWWsi91cEQME5fHntWWB4KCKNYQ0JaaA4529jd9mHOQvvhGFHME6pr8UiyCqygg2VwusnHO4Bq8MDBsx6ot2V7GqdyWZGORP09xsEQwo2bYBlKys4o8%2BWiHT%2BIZudev%2Bw6XaDmIHMNh6O5%2FFpX5jntKYTd4oVHbdY%2FmKo8Ue2uPM6P5516QEXZHoY9k8Hru1OlPNnFqqsRZ5eO%2BNUfykrGhwhWcoB7Wzm6IR%2BCQfqKHRMPAhM2cDAo4tgkTXiI5n0%2Bl%2BXqEu2AU0pfsJpzkFz1mKTRRuVDo6UIN8JIuJlUD%2BVQW8D208n7JslkLxVkITY5CvoGoVi8m%2F01rr21qYk6YtBTP422ZIh1A0ifVJvjlw2p51SmSndGakKkrhiFYki1%2FCDyxX4Yyss0XRHIjQXaoIYdLg9hIoy%2BgdwHc378PwZCkrbkc0dA1SQnOYZnktmCEd0wEWlfAKQC7KJ9SUje0MoqODWilCPpgZNWOWqZsalGfmc95JL6GA1TtvFfM%2B37YwRocRbSAXYDGBHHra2AWq3a0wq%2BnmvQY6pgF40S02Q1TodCSY7kV9i3m6%2F%2FcbxQjJMgG8OI2LCroGhxqbYCAfU7yWm%2F9TZwIaJ29DBOkQX5dzuRsfFw6xKQ%2FF%2FVb17ajSimPhCsTx5KaaFOqTxRImcW5tyJU9C5xWlOAYNddv9lfnf5WeP2Dzo3YBf0VvFSaQ8KMbobCk91f1dg0y6hX8mpi1o5kIQ8hBXS95uibqlItoC49caJYdJ8INZV4yMxd4&X-Amz-Signature=3ac9283f0920f490b15562d1bc38f0cb2169ca6292bbc2afe202631a0ef037fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
