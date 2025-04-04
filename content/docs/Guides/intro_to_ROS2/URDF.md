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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEQB5AY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWFuyKz%2BYmtO305t%2BULfWY8cdzEtypNPr6FezfedjJeAiAye9X1g7OkdSSp7gBonzHEKOEzDq9Si3bZgZjx1DuO3ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMOv%2Bv6lHRwnxOBX3sKtwDKbMaliiq7Yn8zF1fvdkKioY8i2iXnlkl2FXDZcg6J0Jo1nJ5dYYB3sXjCB3v4F1A8y9J31O8svcdOeJWck8I62uFcWCvWwWkqGUEeYT5zhlKxjwcswsG1fvu8IpZnm9FPiYHysPS6z7gm5URLgQAuoMGOjhLPbNQ7Htu4ua1vJX54h5w7CGs9T6DBAftkvbKKixGmDXMNHuZZ9zcoxvdwTNDfi2xuneTof32tTrbuO7vXNr8QQgPVUlghqCKsdnMQjwoxBNtdg4qcDtAQUtR7slqP3zH4BBnN66OlGlhKX0cCsdm0kZ02k2OKaSwi0OPihHmF06GIE%2Fy%2BIj6Gt5A2Hz1Qeb2AO%2FiepWjD7VJE0J8u7pt%2FP9nKo3EtkIPhfdcAxgTN4L8lEo4IIcHeef5NOkn3UjBY%2BaICJuyhYbxLLH7Rizq6qjWifRjJ%2BRiv47t1vXHeed3ytDHZN%2FO%2FLkvt1eF7OroDun0guv%2F%2BmuqBcRUBjg4HWV0JNxp%2B57ZjcbgwzwO1K0l8McreAb6leF7xuTMMBd0rHudyX4pMPYCr3SQxIWSbrMU6srLKb6WpA4d7SbMc53rdd%2Fu9QX6rxopctVckVJ8oOkRiVmigdj8drDyhi4wguTFIj%2BozOswy8y%2FvwY6pgHqovqf6t1RUx4YFAodLQGHbBUY9mOE2adFOrj03kOkg1mY35b0tknIeEA6OYLS0WHuJ8N8Pt56rrO2hfodJnkJMej%2B%2B2%2BBzq49sLGAiqRw0EWS1wILDse190VK8RiCEGbGauDH7Bo6mzk1iiww0Y11ADj1JDFp7LR4K3oX4Gk4xc7BwK7oq916uw3J%2BCx4kwtExe1M0riXqEitUA5dxXJVUrPFsocX&X-Amz-Signature=16c619b4703a1deb2aa29ca5d5fc48dc39a1325580a194eba6fc280e1c223f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEQB5AY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWFuyKz%2BYmtO305t%2BULfWY8cdzEtypNPr6FezfedjJeAiAye9X1g7OkdSSp7gBonzHEKOEzDq9Si3bZgZjx1DuO3ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMOv%2Bv6lHRwnxOBX3sKtwDKbMaliiq7Yn8zF1fvdkKioY8i2iXnlkl2FXDZcg6J0Jo1nJ5dYYB3sXjCB3v4F1A8y9J31O8svcdOeJWck8I62uFcWCvWwWkqGUEeYT5zhlKxjwcswsG1fvu8IpZnm9FPiYHysPS6z7gm5URLgQAuoMGOjhLPbNQ7Htu4ua1vJX54h5w7CGs9T6DBAftkvbKKixGmDXMNHuZZ9zcoxvdwTNDfi2xuneTof32tTrbuO7vXNr8QQgPVUlghqCKsdnMQjwoxBNtdg4qcDtAQUtR7slqP3zH4BBnN66OlGlhKX0cCsdm0kZ02k2OKaSwi0OPihHmF06GIE%2Fy%2BIj6Gt5A2Hz1Qeb2AO%2FiepWjD7VJE0J8u7pt%2FP9nKo3EtkIPhfdcAxgTN4L8lEo4IIcHeef5NOkn3UjBY%2BaICJuyhYbxLLH7Rizq6qjWifRjJ%2BRiv47t1vXHeed3ytDHZN%2FO%2FLkvt1eF7OroDun0guv%2F%2BmuqBcRUBjg4HWV0JNxp%2B57ZjcbgwzwO1K0l8McreAb6leF7xuTMMBd0rHudyX4pMPYCr3SQxIWSbrMU6srLKb6WpA4d7SbMc53rdd%2Fu9QX6rxopctVckVJ8oOkRiVmigdj8drDyhi4wguTFIj%2BozOswy8y%2FvwY6pgHqovqf6t1RUx4YFAodLQGHbBUY9mOE2adFOrj03kOkg1mY35b0tknIeEA6OYLS0WHuJ8N8Pt56rrO2hfodJnkJMej%2B%2B2%2BBzq49sLGAiqRw0EWS1wILDse190VK8RiCEGbGauDH7Bo6mzk1iiww0Y11ADj1JDFp7LR4K3oX4Gk4xc7BwK7oq916uw3J%2BCx4kwtExe1M0riXqEitUA5dxXJVUrPFsocX&X-Amz-Signature=03a6c5822430b98524ec0dc5eceaa8a1860d2ff643551524a1346f1e7d97b704&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
