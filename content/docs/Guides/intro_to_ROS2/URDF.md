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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZVP5VM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD3KNJUzSKsJprEM76FpVcjK43I9tmQV1Zb6DJUNPXX5wIhALPztJfO6fRz%2FAC7eURTdNMAvv2CPTfMCm60Wn2X97AqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxVloaPL7mDkFgaR4q3AOs9s3tiH90wWX1moosVuSvKv2OVUD3sTvTG9c0IrsyJ7p6PgK%2FY%2Fl%2B2rEaZ%2FQ6Fxr329mGE%2F4z%2BXTsO7uR%2BkiVEtG2DAF8NJne0L%2B%2FIQUkSXcw5Utmw%2F%2Fig6aimjjETZAd7b8Uke%2FqYXsIDtFWDtKSAPhZpreq5wBVTOsXuQDfYZyBn32130YbjcQUklXC1%2BvSXzhjakf1SHKvxM8655mW%2B%2Fvmgv9FHlpLQ5hzP5Zvj3GvPEcZHYXhE2%2FKl86cXgDzu8EfQZQQB8rGzWvaAZtrh8%2FlzqPg0%2FSbejZ7N8FinFiSmVGNJDwMznT41idRi6YIk0UWKHr%2Be8ToBPFGpWvT2sVNAMUEZFn8mBhwRusOLjCUCjn1seHtnqCLZ27LuuSdmgek5X9UHN0ifgUu5OOWsgi5ACLU3bUH%2BZel0HTadcICjbUYYqlqWVE9Lx%2FKWodZdrofuHHRlBM%2BysVq6e1wrW%2BjJ%2B1kTds%2BYejhFL35wP9NoG9nxp0MixjGnYzNMMaw0x%2BW0LBQOtdycrONTJStEVfpLWkkdJHpy1C46HGSQS2YDeX3hQTo%2FZE%2Be6401LPLKF5mq4BiPBRh7tWjG5GOlhaVndC1Ou65ENDjQngXrZu5YvkQ3tIkDK3xjjCQ2%2Fa%2BBjqkAb4gsLf9UtA43mBgeUlG2hszu4aYkDALdDNCvCM6OskOxT8ZmvdGPL86gypOy13lKGO9u63e8epU3qu8LU8A2Zy1BsDgZRifh6A0I1k78yTa3U8Fgl6VgNSnrimAr46iTzbxphKCu%2BElgyeUbr0c1wzShcSNxaJM8TD4%2FZgg75eqmVWR%2Be98w%2FXqu5acVg83hmikZeVuH1ABQixzKwrg2uEjrpH%2B&X-Amz-Signature=fd134537950d8a62fe6a9ba1f9def7106465f04ccee06f8ddefdf17139be9106&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZVP5VM%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQD3KNJUzSKsJprEM76FpVcjK43I9tmQV1Zb6DJUNPXX5wIhALPztJfO6fRz%2FAC7eURTdNMAvv2CPTfMCm60Wn2X97AqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxVloaPL7mDkFgaR4q3AOs9s3tiH90wWX1moosVuSvKv2OVUD3sTvTG9c0IrsyJ7p6PgK%2FY%2Fl%2B2rEaZ%2FQ6Fxr329mGE%2F4z%2BXTsO7uR%2BkiVEtG2DAF8NJne0L%2B%2FIQUkSXcw5Utmw%2F%2Fig6aimjjETZAd7b8Uke%2FqYXsIDtFWDtKSAPhZpreq5wBVTOsXuQDfYZyBn32130YbjcQUklXC1%2BvSXzhjakf1SHKvxM8655mW%2B%2Fvmgv9FHlpLQ5hzP5Zvj3GvPEcZHYXhE2%2FKl86cXgDzu8EfQZQQB8rGzWvaAZtrh8%2FlzqPg0%2FSbejZ7N8FinFiSmVGNJDwMznT41idRi6YIk0UWKHr%2Be8ToBPFGpWvT2sVNAMUEZFn8mBhwRusOLjCUCjn1seHtnqCLZ27LuuSdmgek5X9UHN0ifgUu5OOWsgi5ACLU3bUH%2BZel0HTadcICjbUYYqlqWVE9Lx%2FKWodZdrofuHHRlBM%2BysVq6e1wrW%2BjJ%2B1kTds%2BYejhFL35wP9NoG9nxp0MixjGnYzNMMaw0x%2BW0LBQOtdycrONTJStEVfpLWkkdJHpy1C46HGSQS2YDeX3hQTo%2FZE%2Be6401LPLKF5mq4BiPBRh7tWjG5GOlhaVndC1Ou65ENDjQngXrZu5YvkQ3tIkDK3xjjCQ2%2Fa%2BBjqkAb4gsLf9UtA43mBgeUlG2hszu4aYkDALdDNCvCM6OskOxT8ZmvdGPL86gypOy13lKGO9u63e8epU3qu8LU8A2Zy1BsDgZRifh6A0I1k78yTa3U8Fgl6VgNSnrimAr46iTzbxphKCu%2BElgyeUbr0c1wzShcSNxaJM8TD4%2FZgg75eqmVWR%2Be98w%2FXqu5acVg83hmikZeVuH1ABQixzKwrg2uEjrpH%2B&X-Amz-Signature=111727ee31d1a8d3f762f9837076084a2830d95351f10fb94f855629f7c05481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
