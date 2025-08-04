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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDPRXVG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeFcpXcTC%2Bb8oo5mqFax79YwX%2F9GULTPL8l4Ro4w5iEgIgL4TnHntm0Gtw6w4m9aRIZswyersIfh6WJobu2eydHcUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKEPLZIbkLhZ27Kp8yrcA5u0mSmPQl4t34Mi%2F7vy3wU0ubhy1obxwwTdPGF8JJ8WfIYDQg4cPAAWFvMB%2B3I8POOAmN%2F8zZsmI04gYvVkScLS%2FVkLEuAlbZr%2Fb8PyKFiUi4BGh9FoC3I6o%2Bvi4sZPiA2vR615CyY5LotCZblLVvIwTuQBBJTS1iRONFtrzXCNc6xriEf7tdFS6uUJr%2FW%2FcMMH5nB%2FKwimt%2BpIZwCoHY%2Bcl73xuddoXIPkT09KJprR1iu1ggxCP5XfeKmmaohzuHiwJUrT6CsRakamBcbxZNFVEQl3IaR0aqI%2BDnaCWwZJ3Xs6iCf6ZMCKTVdiceqy%2FtW%2FWltnSW7vSH3veqbatVAA%2F7ET4rY7NixxtKjX3RZn0%2BDHTn7fpy7K0hbZd6OW7VQAEt%2FSfbtRocdZsN0aLesK9v0VSWFPvnuDc21pvVvYnR9yndayYaRjvx8ETQ8guO%2Buds%2Ft9IYYQG2wVkyrzJp28fIzDwk%2BMX4FeU%2BKZq5KIjenOLBq23gt9VpsvlzZ2K3DHBJiWb4fJ%2FWOBEaPMxBmsuz9KiclvBLXnt98JluIFIrZGJb1hpU93qg8u2Vl3rr4So1MgBSbQ5vVrqJpjizYhMWyNYNuJqS0W75hwkVAuZ3RQ380AKcxwbV2MLWdxMQGOqUBVz2KUAy13e2ycpQeBH5Uze0KTsCfUj72xewyd7l4sNHYNP4wzzH38FXPe9HBNCCiSOLv3IP7cIYwaO6%2FYAL4%2FojMKLUeMzP88loAeQoWvzKBK2UjJvzFRR8xh4sx7aeiEXOLB6rvsDaoiOlHDFeJxJkhS6x9P9Qv0LZvITYqF3o33X1N%2B0gmIlU%2Fte6Iofp%2FMF4bn04YVx0c%2B%2F3bM7VCAvhdPjU8&X-Amz-Signature=bffd939273e46708f6e876d5f58d6727e3418aa2b9a9c0842306d26152d19185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDPRXVG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeFcpXcTC%2Bb8oo5mqFax79YwX%2F9GULTPL8l4Ro4w5iEgIgL4TnHntm0Gtw6w4m9aRIZswyersIfh6WJobu2eydHcUq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKEPLZIbkLhZ27Kp8yrcA5u0mSmPQl4t34Mi%2F7vy3wU0ubhy1obxwwTdPGF8JJ8WfIYDQg4cPAAWFvMB%2B3I8POOAmN%2F8zZsmI04gYvVkScLS%2FVkLEuAlbZr%2Fb8PyKFiUi4BGh9FoC3I6o%2Bvi4sZPiA2vR615CyY5LotCZblLVvIwTuQBBJTS1iRONFtrzXCNc6xriEf7tdFS6uUJr%2FW%2FcMMH5nB%2FKwimt%2BpIZwCoHY%2Bcl73xuddoXIPkT09KJprR1iu1ggxCP5XfeKmmaohzuHiwJUrT6CsRakamBcbxZNFVEQl3IaR0aqI%2BDnaCWwZJ3Xs6iCf6ZMCKTVdiceqy%2FtW%2FWltnSW7vSH3veqbatVAA%2F7ET4rY7NixxtKjX3RZn0%2BDHTn7fpy7K0hbZd6OW7VQAEt%2FSfbtRocdZsN0aLesK9v0VSWFPvnuDc21pvVvYnR9yndayYaRjvx8ETQ8guO%2Buds%2Ft9IYYQG2wVkyrzJp28fIzDwk%2BMX4FeU%2BKZq5KIjenOLBq23gt9VpsvlzZ2K3DHBJiWb4fJ%2FWOBEaPMxBmsuz9KiclvBLXnt98JluIFIrZGJb1hpU93qg8u2Vl3rr4So1MgBSbQ5vVrqJpjizYhMWyNYNuJqS0W75hwkVAuZ3RQ380AKcxwbV2MLWdxMQGOqUBVz2KUAy13e2ycpQeBH5Uze0KTsCfUj72xewyd7l4sNHYNP4wzzH38FXPe9HBNCCiSOLv3IP7cIYwaO6%2FYAL4%2FojMKLUeMzP88loAeQoWvzKBK2UjJvzFRR8xh4sx7aeiEXOLB6rvsDaoiOlHDFeJxJkhS6x9P9Qv0LZvITYqF3o33X1N%2B0gmIlU%2Fte6Iofp%2FMF4bn04YVx0c%2B%2F3bM7VCAvhdPjU8&X-Amz-Signature=3d0a4f256d9de1c7be21c9027c6a95accd1793f10a887f46acdb6d07a421c76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
