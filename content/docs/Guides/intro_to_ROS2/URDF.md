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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVOO5N7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEQW2ve%2FepWQOoL5qxD%2Fee7iF5i2gqkfAM7jjT8ZldIaAiEA5g%2BvDwzV40qO7zDHQa01J4S2ApkCM%2B%2B3EVMlibSHIbYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDALxeUUtYb039oHTuircA6ZhavAC%2FDvGqqlr5n%2BwuYN6VCx3YaEy0x1yF3bHYTJP%2Bp9euQpTirdC6ANvEANZJmSJlwDiZw6rYhy82ngpGLbWUxb%2Ft%2BRRRyfnqi84JgIbFS1zBEMDK6tNN5G95McRO0%2BIxJHiMfsxB4zHsGYH6g%2Fc3WE3CkWtxpbijE82P1DMt7jIJrXARzv7tZsJlaq%2B3j8xT9RPZBTDKu2W%2BMQb6spwf56CaVi7IixmpKG2ZE3szXb8T02erWSWX4tLkj37Ynh9dQWPiUNyVZlsfcWuwPcfj0%2BeE6DOggVifRwi%2BA3oNh8GxjcK%2B2WQOo8ZcMPKhXMXL6esf%2B6nauKZ1cAUYpW2MbE%2FNjfWqqDCZ7I7t5UvMm92gh90pb3NcVqGZkf8jaGnMSqIYG26gEAZMR%2FBTp8LsG9xe%2BNhWmpR%2B9HZQaUmSN4vcDc%2FtczjQTv5RJ5h%2BID1zqsXdvhRKOHDhrBr8MnSSzvvwBr49hSgu5f7LaBEhUUiSR1ZLQ%2FU3GT8Od0uK7tzkIi2L2xA2lxGaPeq8AFQZTrGtf2RkZLK3blPRiqSDnByzyq3fGB0XAwYTJWydfZlV4CEDC2lF4rt643LcbHBw663jfiKgawpgUf5ObR%2FF5VNiWYcoDNUmO2nMPKSrMMGOqUBzbG%2BLtyUvnAE8MRCaXQC5n95aw6%2BhEMLWYoiPSaUwsqF56RXf6kPzAW2c7kjaivtn87eZA9YH%2BfPSDyIho8e3skHsyTMggvPCPbVQNkPzq0fpbFgyHAnnFvWEt6v8oVN338MEIbC8wTivTW9H0rxo2Z0w4KCGTjQ54P5iAJ3qkk90Hrqo9voyPE1Gl7EPpKx3xABNBj95d4x%2BZQNSKKnq0yPQPkD&X-Amz-Signature=5e00cdfd970ca663ec7362476ddfadc0c6d605efdf2cc1b15226fb5165a18de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVOO5N7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEQW2ve%2FepWQOoL5qxD%2Fee7iF5i2gqkfAM7jjT8ZldIaAiEA5g%2BvDwzV40qO7zDHQa01J4S2ApkCM%2B%2B3EVMlibSHIbYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDALxeUUtYb039oHTuircA6ZhavAC%2FDvGqqlr5n%2BwuYN6VCx3YaEy0x1yF3bHYTJP%2Bp9euQpTirdC6ANvEANZJmSJlwDiZw6rYhy82ngpGLbWUxb%2Ft%2BRRRyfnqi84JgIbFS1zBEMDK6tNN5G95McRO0%2BIxJHiMfsxB4zHsGYH6g%2Fc3WE3CkWtxpbijE82P1DMt7jIJrXARzv7tZsJlaq%2B3j8xT9RPZBTDKu2W%2BMQb6spwf56CaVi7IixmpKG2ZE3szXb8T02erWSWX4tLkj37Ynh9dQWPiUNyVZlsfcWuwPcfj0%2BeE6DOggVifRwi%2BA3oNh8GxjcK%2B2WQOo8ZcMPKhXMXL6esf%2B6nauKZ1cAUYpW2MbE%2FNjfWqqDCZ7I7t5UvMm92gh90pb3NcVqGZkf8jaGnMSqIYG26gEAZMR%2FBTp8LsG9xe%2BNhWmpR%2B9HZQaUmSN4vcDc%2FtczjQTv5RJ5h%2BID1zqsXdvhRKOHDhrBr8MnSSzvvwBr49hSgu5f7LaBEhUUiSR1ZLQ%2FU3GT8Od0uK7tzkIi2L2xA2lxGaPeq8AFQZTrGtf2RkZLK3blPRiqSDnByzyq3fGB0XAwYTJWydfZlV4CEDC2lF4rt643LcbHBw663jfiKgawpgUf5ObR%2FF5VNiWYcoDNUmO2nMPKSrMMGOqUBzbG%2BLtyUvnAE8MRCaXQC5n95aw6%2BhEMLWYoiPSaUwsqF56RXf6kPzAW2c7kjaivtn87eZA9YH%2BfPSDyIho8e3skHsyTMggvPCPbVQNkPzq0fpbFgyHAnnFvWEt6v8oVN338MEIbC8wTivTW9H0rxo2Z0w4KCGTjQ54P5iAJ3qkk90Hrqo9voyPE1Gl7EPpKx3xABNBj95d4x%2BZQNSKKnq0yPQPkD&X-Amz-Signature=77e7f392c25ca8efb3959725e75e8ae9e2774dae2217f7883e9c9f65a3e3779c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
