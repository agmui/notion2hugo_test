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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5I73N7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGS73UgEBFde01oVTVhGOGlMOmbSWJXlGXrn%2FNmlX3rTAiAEgXI1oBgprAZbBpvK0k28r%2BdtiK2r%2FYjBDQHks%2Fsn9Sr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMV%2FtIXtzT2WB%2BYbxoKtwDyzJKvWZ71ZnBswDw%2Fix1xSCZWFj6rMZXdC7VJ4rzxLUSPo7ctG9yzoWH7Tvno0qHamCH7Mh%2Fq%2BmsR9g%2FJVkglJSiZAYzaEUjQ%2FoejiSPXqr3AR2IQzzVNjm%2BDSGxb2I9R7UDos493Tm7xE1QvNhITMnX1divr5RRcG0ZWkD5H6rpLcN%2Fqg%2FSt3UrSxgUShZjKXP8oJjZC4zP7vkSqI8Ofb9zs1f%2FiZvnr73Zmnqr64Asw9u5bi%2FjuXZjHxZWDsaqf8cG%2B0Dd4WDmT4%2FON5Kt2HMOO7P7YPUJXG4gYx8IG9C2ITpvkVQGDDsVFNBgajOhtbLrpL5G0SQu6UOq6Uc5IahEDJVIFJ0s9M1I6VG7TXkAhpTjJNJPA4VgDH%2FVM%2BOhWSPSMkzjGqYYMJOpf7Ipq7A9sNBkdHi3itWxfflK9A0Jml5XDThUoiz038igZnT8h1KjCNDV3PxWuE99n6MNnsPXxhvCEjrnsx6qZSwAG98mqhXBrX0zT8zahmeY4213vmCPwSto0XmswCG8PQXc3NIYTBHKZieDkjsLu3XD1vthhzAAANj4GfKaFe39kUtJroQJ15JAs3RuxpOBrWt%2FD307akC%2BZGA39J32SeCdHzw65CVhVBlorZbodbEw9d%2BYwQY6pgGtM2WF34LbU9zBswg55NmnlJIOA5hXcJOilq3CX3%2BQ%2BH0alu4xumOkKjLTt19zUmLLwCJdfUwl6y%2FzMZYK5WDuwsta0V5MbiKOVaNAK5E3ztVA0ZM9p9ZOyCJzgcSfbLKYGg3dEqEaLeJfvqfsbW0RGNXIJk2wYUto5Rhx0PcGKLWDD%2FaJp7uReGyyEYvfYnpi9EKzGODD%2BnJM1srg3TRjdCtCIJYr&X-Amz-Signature=9f612c3f8092b5b6a2578c8a238350525c15d70c012a8b131af175515d9bb503&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B5I73N7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGS73UgEBFde01oVTVhGOGlMOmbSWJXlGXrn%2FNmlX3rTAiAEgXI1oBgprAZbBpvK0k28r%2BdtiK2r%2FYjBDQHks%2Fsn9Sr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMV%2FtIXtzT2WB%2BYbxoKtwDyzJKvWZ71ZnBswDw%2Fix1xSCZWFj6rMZXdC7VJ4rzxLUSPo7ctG9yzoWH7Tvno0qHamCH7Mh%2Fq%2BmsR9g%2FJVkglJSiZAYzaEUjQ%2FoejiSPXqr3AR2IQzzVNjm%2BDSGxb2I9R7UDos493Tm7xE1QvNhITMnX1divr5RRcG0ZWkD5H6rpLcN%2Fqg%2FSt3UrSxgUShZjKXP8oJjZC4zP7vkSqI8Ofb9zs1f%2FiZvnr73Zmnqr64Asw9u5bi%2FjuXZjHxZWDsaqf8cG%2B0Dd4WDmT4%2FON5Kt2HMOO7P7YPUJXG4gYx8IG9C2ITpvkVQGDDsVFNBgajOhtbLrpL5G0SQu6UOq6Uc5IahEDJVIFJ0s9M1I6VG7TXkAhpTjJNJPA4VgDH%2FVM%2BOhWSPSMkzjGqYYMJOpf7Ipq7A9sNBkdHi3itWxfflK9A0Jml5XDThUoiz038igZnT8h1KjCNDV3PxWuE99n6MNnsPXxhvCEjrnsx6qZSwAG98mqhXBrX0zT8zahmeY4213vmCPwSto0XmswCG8PQXc3NIYTBHKZieDkjsLu3XD1vthhzAAANj4GfKaFe39kUtJroQJ15JAs3RuxpOBrWt%2FD307akC%2BZGA39J32SeCdHzw65CVhVBlorZbodbEw9d%2BYwQY6pgGtM2WF34LbU9zBswg55NmnlJIOA5hXcJOilq3CX3%2BQ%2BH0alu4xumOkKjLTt19zUmLLwCJdfUwl6y%2FzMZYK5WDuwsta0V5MbiKOVaNAK5E3ztVA0ZM9p9ZOyCJzgcSfbLKYGg3dEqEaLeJfvqfsbW0RGNXIJk2wYUto5Rhx0PcGKLWDD%2FaJp7uReGyyEYvfYnpi9EKzGODD%2BnJM1srg3TRjdCtCIJYr&X-Amz-Signature=60886e346bc66fc197b318a21de1fd8c5bbbf5731285a72e0046a18412c1e079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
