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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSLC6GL%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCgDrM1DpLmEOm21Vb%2B%2B9%2FVQAbQZEfH5al9U5fkPtZ3kAIhAKgoC3nEjGWgOhR%2BJ0A058gSzwUDBdf3Onmz7oKGAnbAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyJragGOngNIvCPGIUq3AOYWaZ4rzt%2BQJqb0o8is8R81aiF8ThxbzXvMy7nju6xCZ2KOJUH%2Bxu1%2FwbooVbzLgjPEB9cXUFuZLscbynbvzc4BSxj%2BrS5PHmOduQd1%2FJEqXpcFhWtumHj4qjIlJURTaNatFDAcYiZOBuWriMvgyHUKybkxcPyXt2Ui%2FoIZirQNf%2FBEzoSsID6iJM5hjgfd7%2FWFdXNrkww2ITzgV%2BmTrq0gYV05IWIthkVNY3b9k0OIMwgYXVNBq58ZiogijKieYp0iZTATDbhF8J75kcc6uHtPJrgvtRkt3YJQmPvK7RO3fAJoTHzYX4IjBhGOPvcUFDeZZ%2FToLzEGd3M6cYVLJvcQZ3VZEsjJOjLrBuQx%2F7hiKqNLY9zUKd2ZffFazVisBW9agOZmT5YtvuOqbdHn9e03%2FOY%2FnEuLa9g9VoapPL7v7P%2BreVZvy8As8Uqg7miDIIiQAF4NawIlM9mnvmg1lz17InrtOV2HXRFem0gUyLHgkFwH5tG4IBAwi2EMj%2BRRSd0DQKcv%2FYjEuUOcmjb7uM55Wrlqx36nL7qHdXIRNH%2FW5xfW%2F8K0J2%2BcfIHpDIsEeN4GQdTOWX%2B9ml3ZN4eOzJyzzzLzw17uZQH77TMbY2IYCg6WaBSbzGpFZtj1TDCtJXIBjqkAUfS7w2zaPtkN5cnAZZ0BTvKe2c5sPc5UFkwl1yCCcLEVBBy8mEyIV01RbNV6A4BDlCZgXAlruW3taQ3Ux9KA%2F9FXjCsJcwG%2Bo%2B3f93e%2FtCgg2amcoZ7GdQtaBahxQ5tpQdxr57Bcly1Qm6EhxBjqk2L4oI6JuQxmbWHdT2CxqCzM%2FYfY%2B8LuabjQUy1eCsq6nD83M4BNQBL0RFoG3i0bwAocoXk&X-Amz-Signature=fbd62c763cfaceba8604c2902a2d424d158ca18c4af58e175142565985e22767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CSLC6GL%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCgDrM1DpLmEOm21Vb%2B%2B9%2FVQAbQZEfH5al9U5fkPtZ3kAIhAKgoC3nEjGWgOhR%2BJ0A058gSzwUDBdf3Onmz7oKGAnbAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyJragGOngNIvCPGIUq3AOYWaZ4rzt%2BQJqb0o8is8R81aiF8ThxbzXvMy7nju6xCZ2KOJUH%2Bxu1%2FwbooVbzLgjPEB9cXUFuZLscbynbvzc4BSxj%2BrS5PHmOduQd1%2FJEqXpcFhWtumHj4qjIlJURTaNatFDAcYiZOBuWriMvgyHUKybkxcPyXt2Ui%2FoIZirQNf%2FBEzoSsID6iJM5hjgfd7%2FWFdXNrkww2ITzgV%2BmTrq0gYV05IWIthkVNY3b9k0OIMwgYXVNBq58ZiogijKieYp0iZTATDbhF8J75kcc6uHtPJrgvtRkt3YJQmPvK7RO3fAJoTHzYX4IjBhGOPvcUFDeZZ%2FToLzEGd3M6cYVLJvcQZ3VZEsjJOjLrBuQx%2F7hiKqNLY9zUKd2ZffFazVisBW9agOZmT5YtvuOqbdHn9e03%2FOY%2FnEuLa9g9VoapPL7v7P%2BreVZvy8As8Uqg7miDIIiQAF4NawIlM9mnvmg1lz17InrtOV2HXRFem0gUyLHgkFwH5tG4IBAwi2EMj%2BRRSd0DQKcv%2FYjEuUOcmjb7uM55Wrlqx36nL7qHdXIRNH%2FW5xfW%2F8K0J2%2BcfIHpDIsEeN4GQdTOWX%2B9ml3ZN4eOzJyzzzLzw17uZQH77TMbY2IYCg6WaBSbzGpFZtj1TDCtJXIBjqkAUfS7w2zaPtkN5cnAZZ0BTvKe2c5sPc5UFkwl1yCCcLEVBBy8mEyIV01RbNV6A4BDlCZgXAlruW3taQ3Ux9KA%2F9FXjCsJcwG%2Bo%2B3f93e%2FtCgg2amcoZ7GdQtaBahxQ5tpQdxr57Bcly1Qm6EhxBjqk2L4oI6JuQxmbWHdT2CxqCzM%2FYfY%2B8LuabjQUy1eCsq6nD83M4BNQBL0RFoG3i0bwAocoXk&X-Amz-Signature=eadb6138964023051b7c974a2e219d0d4f0c1778089c6fd1948b014546b2a341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
