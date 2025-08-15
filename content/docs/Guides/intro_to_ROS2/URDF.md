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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYU33MQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCSQs28v7d0oLv7YhVgC%2FShfyCaCXgW9cYIlS0DbkMRgAIhAKyH6%2Fj6F00zrM3F6LRBJMrsmi%2FlW2%2BTKXKltVq1rr6WKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJbTP3tQ9Tlg1iwakq3AOgOZNJj11jpSJDPf%2Bj7ZSVcahebNyRn8w2JXMIPpd%2FYEaZyNYS5Dt1G9j9cVZKaj%2FJj7kZzsh3UEHUkEl3J0ijuTmscptNkOw9%2FIrXrLU9aB%2BcxyQ49LdED2AUpfoQ6urWhb01KbtY9TRRkfWxOqdSdUfy%2FfYtyY%2FdXCu2xIs1FCp9UEpXAdKpBR60hw4txEhCRnpguGxjBffeBWOp9E49au56JdZCrE%2FiI15b%2BzvdAddTkejHY4kMdn8jHUAhz5ET%2FEAflxiU8oPb8MuQpGjm2fg%2BlAv81q7z22E3hHYiFwCJqjxb%2Fmu6uxpVLH9BCXacJ75WUKMN2aW%2FeWJ3UQ03Ym5M%2BgdkQYfMpaFQcf8U2lDcA8xsM7IenK9wkZ7Y4khRBcGrVrclUASf1X6R3h8PKaZX1mKtVi6FQ9j1yVIN8QVNpqT9KQPVwHsf5mUxXkiSRmWqSQVytTincnKNtAOyRcHfnOHzB23gTvEOoCl%2Fh51lrQGeaF21Wg%2Bg7QRo8%2BeBoeVvHREQKISfCwLFVZdHsc7H3vPLQsYbhxG7cDshQXNCaEkgRWYtA3S%2FLt%2B3iIZivJ40U7JyPhvjbqjq%2F%2BBnSUoY4sbyfPCGLRj8UBNb4AsX0KXRDclkP%2Fd%2FJDD72v3EBjqkAWIaV6Jhtl1hvIT2oPAfFjGuZG3tFPkgX%2FQ17Hj%2BBv2a8qHZes09SUvxQ4hkYnTqJJvAWBTNqNfzrb0dQNiDgN9QfyfN%2BbEpjQaCty5FQvNJflXsA%2BAmVSjFzxFCVRJM9IOGqmwG4kYbTpj3HhzTCpBHM6PVbSsCiXkIGR0qSryB5bgKjahsTgVr3pSY%2BXvKGiPLiWD5JFcrXu%2FXRKL9mZv%2B40qL&X-Amz-Signature=d3758fb6244e87cef3e933dee983124772704f114211b84e13685095117e4313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IYU33MQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCSQs28v7d0oLv7YhVgC%2FShfyCaCXgW9cYIlS0DbkMRgAIhAKyH6%2Fj6F00zrM3F6LRBJMrsmi%2FlW2%2BTKXKltVq1rr6WKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJbTP3tQ9Tlg1iwakq3AOgOZNJj11jpSJDPf%2Bj7ZSVcahebNyRn8w2JXMIPpd%2FYEaZyNYS5Dt1G9j9cVZKaj%2FJj7kZzsh3UEHUkEl3J0ijuTmscptNkOw9%2FIrXrLU9aB%2BcxyQ49LdED2AUpfoQ6urWhb01KbtY9TRRkfWxOqdSdUfy%2FfYtyY%2FdXCu2xIs1FCp9UEpXAdKpBR60hw4txEhCRnpguGxjBffeBWOp9E49au56JdZCrE%2FiI15b%2BzvdAddTkejHY4kMdn8jHUAhz5ET%2FEAflxiU8oPb8MuQpGjm2fg%2BlAv81q7z22E3hHYiFwCJqjxb%2Fmu6uxpVLH9BCXacJ75WUKMN2aW%2FeWJ3UQ03Ym5M%2BgdkQYfMpaFQcf8U2lDcA8xsM7IenK9wkZ7Y4khRBcGrVrclUASf1X6R3h8PKaZX1mKtVi6FQ9j1yVIN8QVNpqT9KQPVwHsf5mUxXkiSRmWqSQVytTincnKNtAOyRcHfnOHzB23gTvEOoCl%2Fh51lrQGeaF21Wg%2Bg7QRo8%2BeBoeVvHREQKISfCwLFVZdHsc7H3vPLQsYbhxG7cDshQXNCaEkgRWYtA3S%2FLt%2B3iIZivJ40U7JyPhvjbqjq%2F%2BBnSUoY4sbyfPCGLRj8UBNb4AsX0KXRDclkP%2Fd%2FJDD72v3EBjqkAWIaV6Jhtl1hvIT2oPAfFjGuZG3tFPkgX%2FQ17Hj%2BBv2a8qHZes09SUvxQ4hkYnTqJJvAWBTNqNfzrb0dQNiDgN9QfyfN%2BbEpjQaCty5FQvNJflXsA%2BAmVSjFzxFCVRJM9IOGqmwG4kYbTpj3HhzTCpBHM6PVbSsCiXkIGR0qSryB5bgKjahsTgVr3pSY%2BXvKGiPLiWD5JFcrXu%2FXRKL9mZv%2B40qL&X-Amz-Signature=e886afd016eb8397f417aa77e0f1fb5b6b069667689825a69574eb3aaefe5cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
