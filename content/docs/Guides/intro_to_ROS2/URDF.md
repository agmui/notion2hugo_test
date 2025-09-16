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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WMM4JF%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCp0apTE7JKDUYUyUTJIFPGhN5BbrSievEbIJ8hYwNTywIgOAB%2FzDHI6TfLmRoNONhf15EJqpqS4bJt82jQtzexS4AqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGkelFc5XSybh0OyircA3QfpF4F9LZFk4REJd26WRqr1wEwc6XNxO64AB6q26XkjgUXm1RlgKMSUIKcpiqbZXFVr72RXqaxXpfryYGwUg6JN1mcb4IWsxyOKO4cNFK8PTqSEA44KCwYkN3OsbK04LxXSwPYjShMyaMNL1dD%2F8Mx1YnwW0Npnd31vA5fXuWh0G6ePTYHytc23UIRbYsVvQ8OoMWUKjYDkke12SCSVEKzMQoy1pIU0kC%2BTaMGItQmOl4Tb%2FPanXOm1U71Tzr1NQgRG%2Bkjcox0vH%2F4LRRSd9nMVIdZa5rfALcdfwYOEEuGulDYcdqAijhRMN0v9GWfaMKq9ylUhG4duSDXJDzW0o4k29C78WOcz%2Fqj3q%2FwedCzDE8JYBTO6sKHW65aBUzLgMcVa3Wpz5VdUltjTvFGP%2FnmDi7hQxAD02J68%2BJpmI1CTY0JPNv8H2xK6YeHevqtDFz2c0c8G4OyfeqdivHFRpF2EdBwl4b8ZlIlzxLGgHEFZXuRFySDGJQQ8JD8Kp5DqGXfOpMhSUVi2cw0jclVqhDfxABQ8Mmkoqv93e4ohDEoiOjJDdnfKQkh4UepplouI0nmOHqYZhyJwP7UwGVad%2BdVtI0vgBj0fI7M%2F3BzUfyA7tHNySqSL5QcinDYMJDwosYGOqUBORafGrJiG4fkKBMQqY4lh2ltsX57f%2FyfDNik4z8JH219AjGcqgeVbP%2BoxJeRxFb7EdBRskvikBqvrOfS2FihKzUePHVj4E9IHphMW7DDOm82MMhgFKMkQg%2BS9AQPAPSW938RFlxjtPrdFL2nbC8MmhVMtRNIepP9ewirzo6cdJ%2BIgWxYjgWdA3DinJ%2BavtO9TvjWgu%2BJ2vDnfNi2oF%2B2kgHPtpCb&X-Amz-Signature=d87b124ce0ba7db538da24b7c39f651935b22ccc8e7dd9ad8c9629671afc5733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WMM4JF%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCp0apTE7JKDUYUyUTJIFPGhN5BbrSievEbIJ8hYwNTywIgOAB%2FzDHI6TfLmRoNONhf15EJqpqS4bJt82jQtzexS4AqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGkelFc5XSybh0OyircA3QfpF4F9LZFk4REJd26WRqr1wEwc6XNxO64AB6q26XkjgUXm1RlgKMSUIKcpiqbZXFVr72RXqaxXpfryYGwUg6JN1mcb4IWsxyOKO4cNFK8PTqSEA44KCwYkN3OsbK04LxXSwPYjShMyaMNL1dD%2F8Mx1YnwW0Npnd31vA5fXuWh0G6ePTYHytc23UIRbYsVvQ8OoMWUKjYDkke12SCSVEKzMQoy1pIU0kC%2BTaMGItQmOl4Tb%2FPanXOm1U71Tzr1NQgRG%2Bkjcox0vH%2F4LRRSd9nMVIdZa5rfALcdfwYOEEuGulDYcdqAijhRMN0v9GWfaMKq9ylUhG4duSDXJDzW0o4k29C78WOcz%2Fqj3q%2FwedCzDE8JYBTO6sKHW65aBUzLgMcVa3Wpz5VdUltjTvFGP%2FnmDi7hQxAD02J68%2BJpmI1CTY0JPNv8H2xK6YeHevqtDFz2c0c8G4OyfeqdivHFRpF2EdBwl4b8ZlIlzxLGgHEFZXuRFySDGJQQ8JD8Kp5DqGXfOpMhSUVi2cw0jclVqhDfxABQ8Mmkoqv93e4ohDEoiOjJDdnfKQkh4UepplouI0nmOHqYZhyJwP7UwGVad%2BdVtI0vgBj0fI7M%2F3BzUfyA7tHNySqSL5QcinDYMJDwosYGOqUBORafGrJiG4fkKBMQqY4lh2ltsX57f%2FyfDNik4z8JH219AjGcqgeVbP%2BoxJeRxFb7EdBRskvikBqvrOfS2FihKzUePHVj4E9IHphMW7DDOm82MMhgFKMkQg%2BS9AQPAPSW938RFlxjtPrdFL2nbC8MmhVMtRNIepP9ewirzo6cdJ%2BIgWxYjgWdA3DinJ%2BavtO9TvjWgu%2BJ2vDnfNi2oF%2B2kgHPtpCb&X-Amz-Signature=7028049bd077841b628e9a1a03aa4a6011de9b6c185e2ff2abff59afc8dbc046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
