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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AYBILF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk91MjZ10lOQiaWWyD7%2FZGnP8stnZmJPWrlfdDFkjxdQIgdXXkAzAqmFzUu07FdInVfPahZMlZPJGR87u5SGNr%2FsQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDF0NiFaathSzILpttCrcA901CklezYBnW7bWnARrvL4NTs%2B8o8Eqro8iqGtQxY5A3KtKf4UBt8fz7gQ9OEW2FZxW9sniM9dm3ZWMf8VA%2F2KfjACPZhLzyLfoDAS9ZlBTaZ%2BWPD7P14a9eoOdka4ZudjEQD7tbcsU7WGGkq26Wu1iEcaGpdMO98paYrGq9Ll3v0Th37uB7CMby6qmub0ZTqGH7ixr6i6ksUyFUEdHfB4t2%2FZLpTGkgbMUswi2mG%2FF%2FHXJsgyDQSRqeFzNFpSuO%2B5V4BP4tnEjx8sh2Wn4vpEbc39%2BTqYZnO0RlxejmQIddlLBYWDonpEWQl5UzG6gwaujI%2BPegyGbhq1SurWTL9nLKa9TOG%2Bo9z1lkuGtHlsD%2BdaBqjBvwMdJJlQ%2FRgqLgQJxBoO4b3qtWQdOO23X6LMsfIhhsguW6l3xkeGdlbAvHqgRmJ%2BjiTINNY6dmI0Fw7TUb%2BoV%2FYV%2BBDHkmmYhW0MZUNju8Jz4rRubaR7Fid1M%2FFbMHOradwo2vfh8A7gQGgeucr8lRecF%2Bxg1qvdCWEkT71OvHmuH1bq07cufgbI%2BlWXED53bsHN9HVJyZ%2FpmqkwsX%2FEKgoHpLsrH98C4WIt4eme6mPqOK%2FYZV4FcV8TSpKzeaW29KivE3SprMLOR68AGOqUBNA4lGRTlz%2F7EuBQ%2BmE68DFO2lToMumYRx0wKhk0hGnpOFKgUJY%2FJvAkZ2DBqo1wP0tVUgYazh%2FTAGL%2FrDTDPBeLdvh0Cu256u2YYLHf8DIbb0HPAt6tcuIVaENVB2B%2Bz2OAOLj80Ez1iq2VR%2BxfnZhBrtU%2Bb1UnK7CgIQ6xWW0W85Y038IlLFHsxEBDW7f7AhYpC0kdX8BbBlrDMZZ7eMc0wutvQ&X-Amz-Signature=0c1e65cd763b5f28dad79bef4a3ba75cf28a031ca12576ec536f110ac413bf01&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632AYBILF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T041137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk91MjZ10lOQiaWWyD7%2FZGnP8stnZmJPWrlfdDFkjxdQIgdXXkAzAqmFzUu07FdInVfPahZMlZPJGR87u5SGNr%2FsQq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDF0NiFaathSzILpttCrcA901CklezYBnW7bWnARrvL4NTs%2B8o8Eqro8iqGtQxY5A3KtKf4UBt8fz7gQ9OEW2FZxW9sniM9dm3ZWMf8VA%2F2KfjACPZhLzyLfoDAS9ZlBTaZ%2BWPD7P14a9eoOdka4ZudjEQD7tbcsU7WGGkq26Wu1iEcaGpdMO98paYrGq9Ll3v0Th37uB7CMby6qmub0ZTqGH7ixr6i6ksUyFUEdHfB4t2%2FZLpTGkgbMUswi2mG%2FF%2FHXJsgyDQSRqeFzNFpSuO%2B5V4BP4tnEjx8sh2Wn4vpEbc39%2BTqYZnO0RlxejmQIddlLBYWDonpEWQl5UzG6gwaujI%2BPegyGbhq1SurWTL9nLKa9TOG%2Bo9z1lkuGtHlsD%2BdaBqjBvwMdJJlQ%2FRgqLgQJxBoO4b3qtWQdOO23X6LMsfIhhsguW6l3xkeGdlbAvHqgRmJ%2BjiTINNY6dmI0Fw7TUb%2BoV%2FYV%2BBDHkmmYhW0MZUNju8Jz4rRubaR7Fid1M%2FFbMHOradwo2vfh8A7gQGgeucr8lRecF%2Bxg1qvdCWEkT71OvHmuH1bq07cufgbI%2BlWXED53bsHN9HVJyZ%2FpmqkwsX%2FEKgoHpLsrH98C4WIt4eme6mPqOK%2FYZV4FcV8TSpKzeaW29KivE3SprMLOR68AGOqUBNA4lGRTlz%2F7EuBQ%2BmE68DFO2lToMumYRx0wKhk0hGnpOFKgUJY%2FJvAkZ2DBqo1wP0tVUgYazh%2FTAGL%2FrDTDPBeLdvh0Cu256u2YYLHf8DIbb0HPAt6tcuIVaENVB2B%2Bz2OAOLj80Ez1iq2VR%2BxfnZhBrtU%2Bb1UnK7CgIQ6xWW0W85Y038IlLFHsxEBDW7f7AhYpC0kdX8BbBlrDMZZ7eMc0wutvQ&X-Amz-Signature=22af1fa984d53b8a044a0425f05caa889e95b86cf0d5bd3f01dbab440e9febc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
