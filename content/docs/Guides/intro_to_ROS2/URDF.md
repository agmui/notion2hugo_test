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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAWF2XK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD6KS2qjzp9Ct%2Fvx0B6oWTKBHdzqp%2FhnN3kD%2Brkd0LYEQIhAIxLK9MhYvp8CzROGb9VTussoDVjhjJbTmU%2Bk1lOO93OKv8DCH8QABoMNjM3NDIzMTgzODA1IgyPCdwUn3Uzs30u1bwq3AOaMZKL0jm0OcJqgM%2Fu2TKZLXTiQdVbJXhPU8q9I4dmcSxWOVNCL7hqgcIz0RqNM2f7pmBj79xtTDGZ0ivHZuXyzFAG4zS0NVAEtFcTMfIqLBkTMUeMcU2WyJ2UY90dnwm4NCRNR%2BnS5utGlXLxRE2ySpTiwLk2hDiHEd6C71vsr6Yr2RQEpGmi%2F26btLcac%2FNYDlLB9RNk1znmstro5%2BZIg6dN3X1jopi5hvfjfTWsHDocgV0zYecnvqBJQjut0d1WfroxkIJZ1Hu%2BmbDTwGHSEHP70%2BIMsg%2BlmWixJ65hnE8xu7lFbCd7sDi6cgp3AvhAd2I9uy%2Fb9lgPrrD8ddtAbfu4Qf%2BIGyHrKKSkXdLsgRponjW%2FxnIuA8Pw23plLMjXbiMnIBU8gsumVpHBI0FiJfXmbHYlMZs1thAKtOGhB18uVvDsZ1sRYRExxUST8pch2sx26IovcOu6u0iTCKeG91TtjjWDTNSzFDeLQA8NJQ19PcFjDn2gJR20IbOe%2BhVKQW6c0De6h3GcP6%2FBNRMFq5s0wlmxQ4FnNj3Y7aAsD9ykJeKpcbhmaW0Klfnzv%2F%2FNZJJeXdd%2B08ISsN0sYbo7ZOJxnaw86mChBtXhYB2vp5vKOEZrUUtS2RY%2BgDCb3KG%2FBjqkAe7vL0XEVmaTG2xnokIGZ6TiEzEaviayxyINtAxcDbSZZ8HRUyuqhmTS1Iy9SS3RUGESrrvD7o%2BA95Mu9hyzJt45KEz%2FMhpMZH0pY1o003TE7jZXUkMglPMIZidjuAu6xiws3aAQolktQqX0oZNBgXtQaZ9pZaMwe1kkGiP%2FT89rIjMR%2FFfx0k%2FDIj6Do5N01%2Fx1e1pS5xkOymaLcPX10iwaDrZo&X-Amz-Signature=30133b25e5bc5f66eac5c22f1efd7265145f9bdd9cc71a748e42808b53fc6c07&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IAWF2XK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQD6KS2qjzp9Ct%2Fvx0B6oWTKBHdzqp%2FhnN3kD%2Brkd0LYEQIhAIxLK9MhYvp8CzROGb9VTussoDVjhjJbTmU%2Bk1lOO93OKv8DCH8QABoMNjM3NDIzMTgzODA1IgyPCdwUn3Uzs30u1bwq3AOaMZKL0jm0OcJqgM%2Fu2TKZLXTiQdVbJXhPU8q9I4dmcSxWOVNCL7hqgcIz0RqNM2f7pmBj79xtTDGZ0ivHZuXyzFAG4zS0NVAEtFcTMfIqLBkTMUeMcU2WyJ2UY90dnwm4NCRNR%2BnS5utGlXLxRE2ySpTiwLk2hDiHEd6C71vsr6Yr2RQEpGmi%2F26btLcac%2FNYDlLB9RNk1znmstro5%2BZIg6dN3X1jopi5hvfjfTWsHDocgV0zYecnvqBJQjut0d1WfroxkIJZ1Hu%2BmbDTwGHSEHP70%2BIMsg%2BlmWixJ65hnE8xu7lFbCd7sDi6cgp3AvhAd2I9uy%2Fb9lgPrrD8ddtAbfu4Qf%2BIGyHrKKSkXdLsgRponjW%2FxnIuA8Pw23plLMjXbiMnIBU8gsumVpHBI0FiJfXmbHYlMZs1thAKtOGhB18uVvDsZ1sRYRExxUST8pch2sx26IovcOu6u0iTCKeG91TtjjWDTNSzFDeLQA8NJQ19PcFjDn2gJR20IbOe%2BhVKQW6c0De6h3GcP6%2FBNRMFq5s0wlmxQ4FnNj3Y7aAsD9ykJeKpcbhmaW0Klfnzv%2F%2FNZJJeXdd%2B08ISsN0sYbo7ZOJxnaw86mChBtXhYB2vp5vKOEZrUUtS2RY%2BgDCb3KG%2FBjqkAe7vL0XEVmaTG2xnokIGZ6TiEzEaviayxyINtAxcDbSZZ8HRUyuqhmTS1Iy9SS3RUGESrrvD7o%2BA95Mu9hyzJt45KEz%2FMhpMZH0pY1o003TE7jZXUkMglPMIZidjuAu6xiws3aAQolktQqX0oZNBgXtQaZ9pZaMwe1kkGiP%2FT89rIjMR%2FFfx0k%2FDIj6Do5N01%2Fx1e1pS5xkOymaLcPX10iwaDrZo&X-Amz-Signature=c8134286056171d89947faa777bfd5e55bd6d97d66baf265cf8175959af9ef77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
