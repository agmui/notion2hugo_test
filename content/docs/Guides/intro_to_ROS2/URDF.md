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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZLE2FH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiK31rS1Bsh2CnxRTjQDoT%2BbN%2B1c8KSnUNHkPVogpw7wIhAOedqRmhj%2Fsa6jxfTLJ2e6MJ4LIzjPzSOjsEwgzn48QGKv8DCGkQABoMNjM3NDIzMTgzODA1Igz5CzIw0%2F8OJtvgiCYq3AMEuD%2FMRRcj3bRxJDW5BiHpPn0XuJsO2%2FWcZf%2F66RVq5o6R4fK3PkqDOGjdH89v0Wz1IrRzsWo2hCL%2BaNxe5LE7wIwDgWzDm9UFkJNBljjTKzMOHlC7iYdcpZVxb35pHpcHrPr5GdNAi2J2V%2BzLAHLOu3KHqQL%2BkkGBiXlZxR6wkCspEPR1iRHemv5XHxYyExROEhbAOfssX%2FIRen5G5VMarI9Of6rXDo5bfyT2oR%2Bkkqkuwp9TqC7KUruqVprmvRlRUT%2BTpFPBXjDBWmCLcDcr89nrUr17Gb6di4i0ouFuqPEsAQzbNlUIGgfCzAFOX4NzbOBQ2MYHoEiTNAdI0wtXXsXiRyLcYU7TMoQoUgNNGLnndEWqyIUxnfFxPRVNhcYGlzENe8o97eRCuXwBp0CuuTMTFwkPYGf5otj30275zUdXJa3%2B6VdBcB%2Bt5avjVOuwmLC3olrf9cZ24Ju%2BnH7FU7NuZRmlg47DBPfdLydBkhrWsLe7Wl6WrOavGTPxVqZFFsdZdZkCWcZyn%2F6W1XaWq%2B8VeAXLKi2iXuCOhEjCD17SWrG3ykGzNBlg08eNFwWeNFYLGrXphESkalKHZfJE7S6ikCUk4v9z6l0h46yepvjP%2B4MXHbYoG8j%2FMzDz3sLCBjqkAUys72egCNWdLndA9icNqQWhp6HaUO2EIlW5wauPk7FJp1ZFrpQcnKTP2EjVWpJ2YS0SVAHRYuq8qstxcZYv8ruw7QU1YwlMa7S3e9AsHcZKBY%2FBkVzihqTH1suNEju3uT%2FRqvOoH2i8C1QXWVdwSJbqn32x1%2BErHreAVJrDpcZO9s5i4dkZKWLFxN3QPrLRI9Gy%2BDP6zPtvmut44vsvwRbNP73L&X-Amz-Signature=9353db918c67b51a4331f9028632e31f4d9186807a1384c25ed1569cf25f0825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HZLE2FH%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiK31rS1Bsh2CnxRTjQDoT%2BbN%2B1c8KSnUNHkPVogpw7wIhAOedqRmhj%2Fsa6jxfTLJ2e6MJ4LIzjPzSOjsEwgzn48QGKv8DCGkQABoMNjM3NDIzMTgzODA1Igz5CzIw0%2F8OJtvgiCYq3AMEuD%2FMRRcj3bRxJDW5BiHpPn0XuJsO2%2FWcZf%2F66RVq5o6R4fK3PkqDOGjdH89v0Wz1IrRzsWo2hCL%2BaNxe5LE7wIwDgWzDm9UFkJNBljjTKzMOHlC7iYdcpZVxb35pHpcHrPr5GdNAi2J2V%2BzLAHLOu3KHqQL%2BkkGBiXlZxR6wkCspEPR1iRHemv5XHxYyExROEhbAOfssX%2FIRen5G5VMarI9Of6rXDo5bfyT2oR%2Bkkqkuwp9TqC7KUruqVprmvRlRUT%2BTpFPBXjDBWmCLcDcr89nrUr17Gb6di4i0ouFuqPEsAQzbNlUIGgfCzAFOX4NzbOBQ2MYHoEiTNAdI0wtXXsXiRyLcYU7TMoQoUgNNGLnndEWqyIUxnfFxPRVNhcYGlzENe8o97eRCuXwBp0CuuTMTFwkPYGf5otj30275zUdXJa3%2B6VdBcB%2Bt5avjVOuwmLC3olrf9cZ24Ju%2BnH7FU7NuZRmlg47DBPfdLydBkhrWsLe7Wl6WrOavGTPxVqZFFsdZdZkCWcZyn%2F6W1XaWq%2B8VeAXLKi2iXuCOhEjCD17SWrG3ykGzNBlg08eNFwWeNFYLGrXphESkalKHZfJE7S6ikCUk4v9z6l0h46yepvjP%2B4MXHbYoG8j%2FMzDz3sLCBjqkAUys72egCNWdLndA9icNqQWhp6HaUO2EIlW5wauPk7FJp1ZFrpQcnKTP2EjVWpJ2YS0SVAHRYuq8qstxcZYv8ruw7QU1YwlMa7S3e9AsHcZKBY%2FBkVzihqTH1suNEju3uT%2FRqvOoH2i8C1QXWVdwSJbqn32x1%2BErHreAVJrDpcZO9s5i4dkZKWLFxN3QPrLRI9Gy%2BDP6zPtvmut44vsvwRbNP73L&X-Amz-Signature=659d8459213d4e6a817cf0eadfab866c285bca85ae8fe11f94bd14faf5aa70e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
