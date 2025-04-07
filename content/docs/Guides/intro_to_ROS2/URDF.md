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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CA3IE3L%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJnl5sTJf4fckM55JhYQinEGTK%2BWTnrAk2kV2ZO7fkHwIhAK%2BGHwhs3rnJSkVHk0iPcW7i0lZaC2gTFjTZz9VOtP90Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxGMYe8KiTcqmWafhMq3AMBROwnMp8VmxbkCZ2lwalHoe13Fx4Xik%2BurHJ5IDGzxL1u4eBww%2B0LRUgaSCVAPyK156RaR2OLfSkU4vqORFC%2BduuSHUZu3IoFplWL6N4D0Ki1H3r7yQ7Ke8g%2FA%2F3%2FVGPTAaAGy7PXQlial04tpo9qDejzWUbmnx2YvrJLXzU1noa8tGKZ0lq8y1mmf3fMOib2f4ViQfb4Sm2z9Zvo8KTeDK3Go0w4PuVHHESrwQ7vHPhTbi%2BoxMvlkN7O2j4F3jujuehpbFxbrIS2rclSmiIskSPgmeCrojqvnI5RH6TV17sf79Jjy%2FCyX06HwNlYZ%2Bq9Uz7yvH0A8qQJxpX1IAWEa%2FcD0yh24E3y7ONCXpHQDPq8txzbU5KgpSx7dXkMyXtI829HKvxxHe1cgljigXcxgBFenSJor%2FVraDaghJmC1N02GtvRmRlTcfzJQD0zLYPSRNIgUdE8lGUx6K2qZ8BK6tSLC09gI6VQM64ID92mlsFCjDJ%2BmFhHeteBSFNQqU76F%2FYSHkN7P7NunOTqmIeMKpTSDFPGyuC4KAaVs2LaqpLWhgSGupPyNrfhU1EONJQsXPG0plPADO2aTpE9vcrqjXCJOA1oM0BR8VGLgPc5N9rpRdJn4ythCi%2FqwTCzhdG%2FBjqkAeZ1Vh8xEgMT4nKXnpQlOwpCZbC5UuGKcqR0yQYg1cDVMyC75%2BPSq1SjkH6GuWcNcFynOnmMc1bd0LiHxJM0D60Ovcf6UcIUA%2F4xNBmhT71AeaEQeCTj1m9zme0uPDBXTt5lGjupDxThK5ZIauB7zLy17UQDq4I7A1k89osmgFsizqwt%2BT5fFXEftbEpX%2BuK7xOcOKqyxEJR01dHSU3HVumu779X&X-Amz-Signature=59dabdcfba47511ca96998f809dd7d22ed23e0bf3efe5e1e2e8abe028244e0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CA3IE3L%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJnl5sTJf4fckM55JhYQinEGTK%2BWTnrAk2kV2ZO7fkHwIhAK%2BGHwhs3rnJSkVHk0iPcW7i0lZaC2gTFjTZz9VOtP90Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxGMYe8KiTcqmWafhMq3AMBROwnMp8VmxbkCZ2lwalHoe13Fx4Xik%2BurHJ5IDGzxL1u4eBww%2B0LRUgaSCVAPyK156RaR2OLfSkU4vqORFC%2BduuSHUZu3IoFplWL6N4D0Ki1H3r7yQ7Ke8g%2FA%2F3%2FVGPTAaAGy7PXQlial04tpo9qDejzWUbmnx2YvrJLXzU1noa8tGKZ0lq8y1mmf3fMOib2f4ViQfb4Sm2z9Zvo8KTeDK3Go0w4PuVHHESrwQ7vHPhTbi%2BoxMvlkN7O2j4F3jujuehpbFxbrIS2rclSmiIskSPgmeCrojqvnI5RH6TV17sf79Jjy%2FCyX06HwNlYZ%2Bq9Uz7yvH0A8qQJxpX1IAWEa%2FcD0yh24E3y7ONCXpHQDPq8txzbU5KgpSx7dXkMyXtI829HKvxxHe1cgljigXcxgBFenSJor%2FVraDaghJmC1N02GtvRmRlTcfzJQD0zLYPSRNIgUdE8lGUx6K2qZ8BK6tSLC09gI6VQM64ID92mlsFCjDJ%2BmFhHeteBSFNQqU76F%2FYSHkN7P7NunOTqmIeMKpTSDFPGyuC4KAaVs2LaqpLWhgSGupPyNrfhU1EONJQsXPG0plPADO2aTpE9vcrqjXCJOA1oM0BR8VGLgPc5N9rpRdJn4ythCi%2FqwTCzhdG%2FBjqkAeZ1Vh8xEgMT4nKXnpQlOwpCZbC5UuGKcqR0yQYg1cDVMyC75%2BPSq1SjkH6GuWcNcFynOnmMc1bd0LiHxJM0D60Ovcf6UcIUA%2F4xNBmhT71AeaEQeCTj1m9zme0uPDBXTt5lGjupDxThK5ZIauB7zLy17UQDq4I7A1k89osmgFsizqwt%2BT5fFXEftbEpX%2BuK7xOcOKqyxEJR01dHSU3HVumu779X&X-Amz-Signature=bcab642ece19794fe48ec92b2312df102579d91c15a1de90fdc2d4efa25d7a53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
