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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFFTEHI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDOK9Smn%2F7Tn5axwoOAX8OYsnza5t3JCVSZouod8uYEmgIgANEDSsUli917hldE72pK%2FiY2jEFy3GH5kNZb9fajgtEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCuVQ7ckcgjbUjrRyrcAyeGlnxR%2BxxqBo8ZbrZ6N3IfUXsQBJ7J0Smr8BsaC%2FIesfVvONCu0ZnZciv51jBbfMI1QWx8F0yoWusMdOblcHSmcR6Mge1cYYiwNL9ggkSceyqbtkl23ImfI4SaGp1ESOnEqgRb3Akio3yrifXv2fUYcBNLvQZCRDSME6XxffrTt1lwASI%2F7D1pHqEO%2B8iXoCZ2zp7VtbEdgL4bJBSMmQ%2BUpBlb%2FsT7%2FKT3K4qyTMj5a8elnyIIAmtjmfCKW0Ina8BI7IZAkYI6QXkuH1480%2FIJnCqdAVaZ2EoWG0JXZrVAUFbBkA5EjbX9qGsq%2FaQfxWxLsRZr11bR%2FTx0cRPx%2BXCIcUIfLuW67kmBDt0CqlUyNh02%2FaS3f0PmBYvkki4BBrC1AyaTrc9cGYcmQzJNhvf%2BBYdqCqqesD85IZCWVscn3k5hye%2Byj%2FSWjHJFiIfHEKyQqTvCokBZdzAXZ%2BwzMMj%2FKMCQS%2F%2BIvNfehzarl2TSryV3CHbTrWwJncalDcZdI%2BYWAc26utvBZV1Ggcjo4IqCkIIzMM5Spg4Iia%2BE8sHG1J8l3xBJQpZcjniQEGolz3Boy%2F36TyDMG7gW%2BWUk7jDpQf9%2BFk2HA59dGt1iQSpok9Js0%2BeLdsdNi30hMN2EssMGOqUBdPy2vCv5Ul5PegcbYD7WtYBV9iu1WLVFX%2BKZFPqS1ruD0djd4sYBN1UQrC%2BsQe4cQw4Io%2FIh8eF76hx5ZXe%2FnbkVMwkJ6ntvK78l5AINGTA4QGxoFgjdw10ukCZjNvF60DBCDu0UElLfpfwDqh2Zaq2gThWOWrBeb58eP5s4NVUXlJfhg3KXn8YSEsW3SxjgHwuV6UUezl6qVZiEdhwNm%2Frcb7h%2B&X-Amz-Signature=efdaf377b183f3fa6eb2b88de538740fdabe9ca90c2dd59b4c177af105fade28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFFTEHI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDOK9Smn%2F7Tn5axwoOAX8OYsnza5t3JCVSZouod8uYEmgIgANEDSsUli917hldE72pK%2FiY2jEFy3GH5kNZb9fajgtEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCuVQ7ckcgjbUjrRyrcAyeGlnxR%2BxxqBo8ZbrZ6N3IfUXsQBJ7J0Smr8BsaC%2FIesfVvONCu0ZnZciv51jBbfMI1QWx8F0yoWusMdOblcHSmcR6Mge1cYYiwNL9ggkSceyqbtkl23ImfI4SaGp1ESOnEqgRb3Akio3yrifXv2fUYcBNLvQZCRDSME6XxffrTt1lwASI%2F7D1pHqEO%2B8iXoCZ2zp7VtbEdgL4bJBSMmQ%2BUpBlb%2FsT7%2FKT3K4qyTMj5a8elnyIIAmtjmfCKW0Ina8BI7IZAkYI6QXkuH1480%2FIJnCqdAVaZ2EoWG0JXZrVAUFbBkA5EjbX9qGsq%2FaQfxWxLsRZr11bR%2FTx0cRPx%2BXCIcUIfLuW67kmBDt0CqlUyNh02%2FaS3f0PmBYvkki4BBrC1AyaTrc9cGYcmQzJNhvf%2BBYdqCqqesD85IZCWVscn3k5hye%2Byj%2FSWjHJFiIfHEKyQqTvCokBZdzAXZ%2BwzMMj%2FKMCQS%2F%2BIvNfehzarl2TSryV3CHbTrWwJncalDcZdI%2BYWAc26utvBZV1Ggcjo4IqCkIIzMM5Spg4Iia%2BE8sHG1J8l3xBJQpZcjniQEGolz3Boy%2F36TyDMG7gW%2BWUk7jDpQf9%2BFk2HA59dGt1iQSpok9Js0%2BeLdsdNi30hMN2EssMGOqUBdPy2vCv5Ul5PegcbYD7WtYBV9iu1WLVFX%2BKZFPqS1ruD0djd4sYBN1UQrC%2BsQe4cQw4Io%2FIh8eF76hx5ZXe%2FnbkVMwkJ6ntvK78l5AINGTA4QGxoFgjdw10ukCZjNvF60DBCDu0UElLfpfwDqh2Zaq2gThWOWrBeb58eP5s4NVUXlJfhg3KXn8YSEsW3SxjgHwuV6UUezl6qVZiEdhwNm%2Frcb7h%2B&X-Amz-Signature=331770cdb95b7850fabf0efc7c755d3a018341fc23924890a809ae5851906852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
