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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT47NB3Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQICu6QVjjPKLqP%2FhkdS90hHYSmQrDkbgC2VOVzPnwGQIhAIr0StS6DH4JnFlltaEenvOzl0NrJhgfljF6v2M9mGECKv8DCFgQABoMNjM3NDIzMTgzODA1IgxzGFSiDZxuF6cX1YAq3AMeVDLYKVC5j1tJJUw7oE6Kfgic%2BImTwSxuqyiOpDKVG0A7McdarFofMnU1NLZqRaPU%2B3kfbWykimjyqbiPBfK6f9SiebgeFFuhE1fpY%2BS%2FHhUCGPXWJLw3Zg%2BFTcuUsFoAG%2FNM4ktDxf4jfAcRk6E9P0z7rax7TDucDBhnhF0fSxGrAxSkO0XEExD3O8AIGjTybuU5yeyo3eM4qza%2BKxkLzwzOJuR1yiyYRMSQNnAHH9YeNw40SqOWI2Gi8fuDFCb4zXVdlRJScOesdn%2Bu%2F6D6f%2F83TPuJ%2BJouhcYq4bA8JA0SpYnVxnlsj344KIOgRUaHszSekUQvCAq58c43n4ZtFyuh1SXrCyDXrxV7EmuMphVzlnv%2BXYeJirfGgSLqMnfR4fpkH%2BmMcvZfDL2rNRCbvp3b2DYY25B0ZDj8%2FMF%2BrEbNe6f%2FgXb5XGmczwbY7c15T95BmxcH9SwzPJHRyd5ffauyOvaaZ6tjXqy6O0cwYypNCFQFIgVH2kyX5Tig61utV6NjulP3SFHCmS0vb14bnsSns1nE4hAz4DqC%2Bp8wL2JaXeu8Y35B9n0E7wZn64i6nxt1geOFARFK%2Ba3cZEPQu3ALw47rlfO5j6%2BHEY%2BT%2B74LdEo477zbzz7bsjDU4KDBBjqkAeTobbqAbWDGZV7vmEB%2BZB2I%2FX0U0SgZ%2B7hwGKQTt0P%2Bd%2FC5Fz2Dt3m9ZqwTWWFU9cSz48SGkzvFYuL4pKU23RCXorHTvMdJKE3Hfd3e6tzQGVLn81Hqsr%2FWuRJYJhxWYtR4UYKBQ4yDuVtEp3Ui04lDoV773DEokiS5MRQ12PjkwH6%2Fsus3btPJ4TEhXHTDoNBONTGG9AYLkV5kpyGOBmhPs8kx&X-Amz-Signature=7c529e0486fdc23a31c2d3fe58c4f2b3b7e797f0c13c6b75fbd4b163488d6549&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT47NB3Q%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQICu6QVjjPKLqP%2FhkdS90hHYSmQrDkbgC2VOVzPnwGQIhAIr0StS6DH4JnFlltaEenvOzl0NrJhgfljF6v2M9mGECKv8DCFgQABoMNjM3NDIzMTgzODA1IgxzGFSiDZxuF6cX1YAq3AMeVDLYKVC5j1tJJUw7oE6Kfgic%2BImTwSxuqyiOpDKVG0A7McdarFofMnU1NLZqRaPU%2B3kfbWykimjyqbiPBfK6f9SiebgeFFuhE1fpY%2BS%2FHhUCGPXWJLw3Zg%2BFTcuUsFoAG%2FNM4ktDxf4jfAcRk6E9P0z7rax7TDucDBhnhF0fSxGrAxSkO0XEExD3O8AIGjTybuU5yeyo3eM4qza%2BKxkLzwzOJuR1yiyYRMSQNnAHH9YeNw40SqOWI2Gi8fuDFCb4zXVdlRJScOesdn%2Bu%2F6D6f%2F83TPuJ%2BJouhcYq4bA8JA0SpYnVxnlsj344KIOgRUaHszSekUQvCAq58c43n4ZtFyuh1SXrCyDXrxV7EmuMphVzlnv%2BXYeJirfGgSLqMnfR4fpkH%2BmMcvZfDL2rNRCbvp3b2DYY25B0ZDj8%2FMF%2BrEbNe6f%2FgXb5XGmczwbY7c15T95BmxcH9SwzPJHRyd5ffauyOvaaZ6tjXqy6O0cwYypNCFQFIgVH2kyX5Tig61utV6NjulP3SFHCmS0vb14bnsSns1nE4hAz4DqC%2Bp8wL2JaXeu8Y35B9n0E7wZn64i6nxt1geOFARFK%2Ba3cZEPQu3ALw47rlfO5j6%2BHEY%2BT%2B74LdEo477zbzz7bsjDU4KDBBjqkAeTobbqAbWDGZV7vmEB%2BZB2I%2FX0U0SgZ%2B7hwGKQTt0P%2Bd%2FC5Fz2Dt3m9ZqwTWWFU9cSz48SGkzvFYuL4pKU23RCXorHTvMdJKE3Hfd3e6tzQGVLn81Hqsr%2FWuRJYJhxWYtR4UYKBQ4yDuVtEp3Ui04lDoV773DEokiS5MRQ12PjkwH6%2Fsus3btPJ4TEhXHTDoNBONTGG9AYLkV5kpyGOBmhPs8kx&X-Amz-Signature=1a6dda49e1330cd8105cb6c03f0768e39a4db80840c906bb2d6b5709dce8ea32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
