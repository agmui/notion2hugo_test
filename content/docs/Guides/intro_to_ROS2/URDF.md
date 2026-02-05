---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2YA3RMN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDwwosEzyGQoVwm8TkbIorckoxJkfpicK5htO1%2FBjJpwQIhAM3AlmNlAkHrMRTvXesIfLJtMkV%2FSdwum%2BCEZvHQxItXKv8DCCIQABoMNjM3NDIzMTgzODA1IgzjaPcZfu7BDrmx9c8q3AMZp3wj5veQnOruHD5x4jR9emJeZR6ZUvpm3uTV2kOuW7YoYU%2FYxybqElAcAetw2%2B3iz65Hp%2BqNw7v7QguzR3mry3lMsw6BFQtBhgTDmJyHxsw5R%2FYehDcGRCh1tVtsMLwDvbSEACklY46zoE17xHbVzPORbwFNk1fGasOOs%2BeE0vYYKuUg0Sp6NTFOqR7dx9WvJMI6Keaf2vxKfmL%2B1Qc5EdE7bVD0Feky0rKt8pUVjJD%2BXKglPuj5HtZm7sGb5%2Fg7Gp%2BQMcVgFLgUT38Drpzwon1mQ%2B4xYPHv5nTOfSCoacPYKVHRQWgJmMXvkX0h%2BQHOf9eZ3ZqmiKguAXy7MVmkDjgBALvYDMS2%2FE5hN8IdnBxR4TIituw4CfYpPGy%2F%2FMfMotnEMU31klUYST3IuFKtVT4mvW20NhJlir69UsyR58vlN9WYF%2F1uhVfUBDsdiD2xJca%2FTKohkXVc863X9K6HR3SBfD497fKKl7a5MVJqUllR2wF2lFGMAfqBWmwWL5JLTEWHAe2zPBCZu%2F76UyQqSGFrodLjzER%2BsW7Jwg5xmEPXw9xMFiBJnuWUkshS4W6tYT0bXwSh72NWXvtmhg0JVpfehSCOM8g5EK3%2BymlmbErUG8OMDqAAty7SMjDOzo%2FMBjqkAd%2FOWR%2BJvHi8oYvdTPFtFEVx22teQkL84v9wG1V6r2j1O8srW7pxBfNyluAsCGHEPjAqKbgrXeu8VeKqltMqVKziIr2BZDy7%2Bi%2BrPqgutDswUhZ3oVq5NX7QxHTqx7%2BuWuUUMYGQ3m2uaNrgVKne0ykc%2BTKjPrCxDWA34qeiQOS3zs8WWDVmQn%2BcefURYDqdXxVWDd%2BsCU2HEqBqWOc%2Fqh4RnRq1&X-Amz-Signature=ea96b186643ae401b9cb9ec93e17c740c9efa0e2b25dcbfad8b3687f4d4e2e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2YA3RMN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDwwosEzyGQoVwm8TkbIorckoxJkfpicK5htO1%2FBjJpwQIhAM3AlmNlAkHrMRTvXesIfLJtMkV%2FSdwum%2BCEZvHQxItXKv8DCCIQABoMNjM3NDIzMTgzODA1IgzjaPcZfu7BDrmx9c8q3AMZp3wj5veQnOruHD5x4jR9emJeZR6ZUvpm3uTV2kOuW7YoYU%2FYxybqElAcAetw2%2B3iz65Hp%2BqNw7v7QguzR3mry3lMsw6BFQtBhgTDmJyHxsw5R%2FYehDcGRCh1tVtsMLwDvbSEACklY46zoE17xHbVzPORbwFNk1fGasOOs%2BeE0vYYKuUg0Sp6NTFOqR7dx9WvJMI6Keaf2vxKfmL%2B1Qc5EdE7bVD0Feky0rKt8pUVjJD%2BXKglPuj5HtZm7sGb5%2Fg7Gp%2BQMcVgFLgUT38Drpzwon1mQ%2B4xYPHv5nTOfSCoacPYKVHRQWgJmMXvkX0h%2BQHOf9eZ3ZqmiKguAXy7MVmkDjgBALvYDMS2%2FE5hN8IdnBxR4TIituw4CfYpPGy%2F%2FMfMotnEMU31klUYST3IuFKtVT4mvW20NhJlir69UsyR58vlN9WYF%2F1uhVfUBDsdiD2xJca%2FTKohkXVc863X9K6HR3SBfD497fKKl7a5MVJqUllR2wF2lFGMAfqBWmwWL5JLTEWHAe2zPBCZu%2F76UyQqSGFrodLjzER%2BsW7Jwg5xmEPXw9xMFiBJnuWUkshS4W6tYT0bXwSh72NWXvtmhg0JVpfehSCOM8g5EK3%2BymlmbErUG8OMDqAAty7SMjDOzo%2FMBjqkAd%2FOWR%2BJvHi8oYvdTPFtFEVx22teQkL84v9wG1V6r2j1O8srW7pxBfNyluAsCGHEPjAqKbgrXeu8VeKqltMqVKziIr2BZDy7%2Bi%2BrPqgutDswUhZ3oVq5NX7QxHTqx7%2BuWuUUMYGQ3m2uaNrgVKne0ykc%2BTKjPrCxDWA34qeiQOS3zs8WWDVmQn%2BcefURYDqdXxVWDd%2BsCU2HEqBqWOc%2Fqh4RnRq1&X-Amz-Signature=21de8d7c51d2a340380bc7cdbe8b1fa2e5a26adeb8ef40dd92de85f9edd7b4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
