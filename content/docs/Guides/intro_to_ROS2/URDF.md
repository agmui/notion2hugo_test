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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BFRDFP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFgr%2FZrcbtkOPxM%2FTaSs3GYbXjqkUFxC2RhVwtOxhjNuAiA37FjnZfzROqs759d7cChzL%2BcS3yKi6AmkJgF57NtxeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYaIBy9u6W74yt5CKtwDklsARgUzfLetwHCcEj3ittQf%2F7adyR8YoGvWIbVGbvt0Hfgp6F6%2B1LH9SzUl87Npv87Ybf%2BqeBILJPcJQ6AaezcGiT857iyPNxgdDxe%2F3MUOCcTzKWI3oex0etmk%2FOWp7BBjF9DWFy7bzW8vkkjQOuXxJ4j%2FBFDhLhx6%2BJ8BU9%2FtjaP%2B9SP6HZexB9eLFDWDAi2yG%2Bys8eVftu6Axjmx6jEBtgGqmm%2FDf%2BOP%2F%2F74QIIjnvO7AW7%2FCZoRzUO48QCyycXUhvWYX6JiaWmua4qB3eiutUxuL8hrDxwv1itF3UN0LDDiuRbzYKBD2pWm57JHBAPa9GQtjd04Ne8IkteYV7dJR7Mtogw8xvYS5E877AmKtbO8Bg35mly3SsZGsoz4CyG%2BISlSJUBj6J4G9%2BX2I3AbpY07mAEozjNwK9EpjFYa4DiZL3%2BqpaCCWJqTcbXs7%2Fe95aOPbpeoSKoeE9YfutL3RPDQkJfRMaL8cUTT6FuS7Iuc4Jf2ElSkI9kyHsAR%2BTn6GpEgod%2FHqG%2B76TOMxkNIZoQxcCpjm5dHX9e1ZAlvl2yMgo42OGqw%2Fbq%2BKwE8FEep3mzMVCprzCUZ8CjZlEgVY4PoDEHoK5G6X%2BeOLilqjxbOAb2pU9vpJKQw04fRwAY6pgEosCGuAfiGZKSmXdu0c0FrRkbFQBHmNLdkgoj6nDq9PnocQA%2Fy283h%2FpdDin1Y%2Brfuvp%2Bo0lGE2J9brWKDU8lqGGfv1YeWnFQtgJhvir5EuwjDICW0HwMinQIboioDwVuPTLxyC74%2FpPAwWKCMlMLSE1H2TwSJvM%2FGH6XZjYpD9b4Ei7tCjHgAGJeJVI5YWTc4xrsr4hP7h%2F4TKITwSmPnXkp1GSV7&X-Amz-Signature=2dc463264d0eeb6deb667f45da1eda43efa170357b786ccde294ad44d754fa31&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BFRDFP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFgr%2FZrcbtkOPxM%2FTaSs3GYbXjqkUFxC2RhVwtOxhjNuAiA37FjnZfzROqs759d7cChzL%2BcS3yKi6AmkJgF57NtxeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYaIBy9u6W74yt5CKtwDklsARgUzfLetwHCcEj3ittQf%2F7adyR8YoGvWIbVGbvt0Hfgp6F6%2B1LH9SzUl87Npv87Ybf%2BqeBILJPcJQ6AaezcGiT857iyPNxgdDxe%2F3MUOCcTzKWI3oex0etmk%2FOWp7BBjF9DWFy7bzW8vkkjQOuXxJ4j%2FBFDhLhx6%2BJ8BU9%2FtjaP%2B9SP6HZexB9eLFDWDAi2yG%2Bys8eVftu6Axjmx6jEBtgGqmm%2FDf%2BOP%2F%2F74QIIjnvO7AW7%2FCZoRzUO48QCyycXUhvWYX6JiaWmua4qB3eiutUxuL8hrDxwv1itF3UN0LDDiuRbzYKBD2pWm57JHBAPa9GQtjd04Ne8IkteYV7dJR7Mtogw8xvYS5E877AmKtbO8Bg35mly3SsZGsoz4CyG%2BISlSJUBj6J4G9%2BX2I3AbpY07mAEozjNwK9EpjFYa4DiZL3%2BqpaCCWJqTcbXs7%2Fe95aOPbpeoSKoeE9YfutL3RPDQkJfRMaL8cUTT6FuS7Iuc4Jf2ElSkI9kyHsAR%2BTn6GpEgod%2FHqG%2B76TOMxkNIZoQxcCpjm5dHX9e1ZAlvl2yMgo42OGqw%2Fbq%2BKwE8FEep3mzMVCprzCUZ8CjZlEgVY4PoDEHoK5G6X%2BeOLilqjxbOAb2pU9vpJKQw04fRwAY6pgEosCGuAfiGZKSmXdu0c0FrRkbFQBHmNLdkgoj6nDq9PnocQA%2Fy283h%2FpdDin1Y%2Brfuvp%2Bo0lGE2J9brWKDU8lqGGfv1YeWnFQtgJhvir5EuwjDICW0HwMinQIboioDwVuPTLxyC74%2FpPAwWKCMlMLSE1H2TwSJvM%2FGH6XZjYpD9b4Ei7tCjHgAGJeJVI5YWTc4xrsr4hP7h%2F4TKITwSmPnXkp1GSV7&X-Amz-Signature=8f54c31e09684dba47c1ddb071413b1509f4680d3ffbe986d49d7364402b23c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
