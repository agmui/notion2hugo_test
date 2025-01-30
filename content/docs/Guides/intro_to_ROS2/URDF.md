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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THLJLF7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5HSgDzGKXWpx6sIrC6nqowjyiPcwpDkBascvBmWyBkAiEAqI2sgX2W4lXLkXpCgY2tuGTSXxwDoxrszelun5jtzekqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWAy833w0y%2FFqc7jircAyQUnN8eyrqfdyEnActPq2QN5ArF5HL9FgqmzQHgqDtcZbScV0Va9W3Dzh4YcJ6dwqhpVakRVJaqp9WHJ27ovpia7ndSDom%2Ff2JBD%2BfNpToOEvu4LgY35IHizznJJJcQu8T5x%2BL0w%2Bjnv88e8axk0Lvnspg9ByjLasMsEETKZ5mE3h3yva5mdujrzDVVydY1EFnvKS8Ap%2BSUClyY3MvO2d690Et2LR%2BO9uXujxjxjayUA5%2BYZFqm7ssDNBWQdyb6NPhAOnNHFenviuTBhHlOyZkRpOuTe0odnX%2FQ9sV02kp7QxTeeqJ1oWICyBJYstvKqtrW1k9d0TXK1A6Q5CZaGCZ3ogo4G979wpI3kQpZe6bJaxCq4D0FIjRbVsbrZf4zIiayCM%2Bxwm747XWpHnIuKO673r0ssg1BJvf%2FN2tgw4CX46DkL3FATvbehPN1K2gTeAgo2cmyzYn4mvuxxheqlkvLQnz5D6nGlO0zWSHStflhjPKXryFahiwQIh6q%2Ft7vLX5kTiGywFEgNAotOnhfT1xBdWM7zzwW2uPG68H8arhQCVhDOhsnuC9RTsJ522Q3yw4iiC3aySMUpijRozjSENbb%2FJlpTnI%2FSHh7UbdqkpFcd%2Fqe1kK8h%2BQC9nwPMKf%2B77wGOqUBIRZNUAWiHJuCZRv1PD0XiGfd3Y6IOk0TJvasNhS9X64aXhvwl9Srp5YYwG3q%2F5hi6RYWl%2FkMEH70JSSB2WzIPDaQNy6CqRvoN8bJSONaJ1zd1SRbObmAkU6OD3za5hKUiC1R3kn2NMN0T1lgNewzkxJgJ1vnQP5x9IPrxUKcxiyrN0nL013KHlL5jfeMVmgIU6IwmTdyoZRd3hYH%2BP9qqDaLRC2%2B&X-Amz-Signature=9b9181d334c5b61dcba0fcaef5a9284645b07e540bb086582f8524be24855bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THLJLF7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5HSgDzGKXWpx6sIrC6nqowjyiPcwpDkBascvBmWyBkAiEAqI2sgX2W4lXLkXpCgY2tuGTSXxwDoxrszelun5jtzekqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWAy833w0y%2FFqc7jircAyQUnN8eyrqfdyEnActPq2QN5ArF5HL9FgqmzQHgqDtcZbScV0Va9W3Dzh4YcJ6dwqhpVakRVJaqp9WHJ27ovpia7ndSDom%2Ff2JBD%2BfNpToOEvu4LgY35IHizznJJJcQu8T5x%2BL0w%2Bjnv88e8axk0Lvnspg9ByjLasMsEETKZ5mE3h3yva5mdujrzDVVydY1EFnvKS8Ap%2BSUClyY3MvO2d690Et2LR%2BO9uXujxjxjayUA5%2BYZFqm7ssDNBWQdyb6NPhAOnNHFenviuTBhHlOyZkRpOuTe0odnX%2FQ9sV02kp7QxTeeqJ1oWICyBJYstvKqtrW1k9d0TXK1A6Q5CZaGCZ3ogo4G979wpI3kQpZe6bJaxCq4D0FIjRbVsbrZf4zIiayCM%2Bxwm747XWpHnIuKO673r0ssg1BJvf%2FN2tgw4CX46DkL3FATvbehPN1K2gTeAgo2cmyzYn4mvuxxheqlkvLQnz5D6nGlO0zWSHStflhjPKXryFahiwQIh6q%2Ft7vLX5kTiGywFEgNAotOnhfT1xBdWM7zzwW2uPG68H8arhQCVhDOhsnuC9RTsJ522Q3yw4iiC3aySMUpijRozjSENbb%2FJlpTnI%2FSHh7UbdqkpFcd%2Fqe1kK8h%2BQC9nwPMKf%2B77wGOqUBIRZNUAWiHJuCZRv1PD0XiGfd3Y6IOk0TJvasNhS9X64aXhvwl9Srp5YYwG3q%2F5hi6RYWl%2FkMEH70JSSB2WzIPDaQNy6CqRvoN8bJSONaJ1zd1SRbObmAkU6OD3za5hKUiC1R3kn2NMN0T1lgNewzkxJgJ1vnQP5x9IPrxUKcxiyrN0nL013KHlL5jfeMVmgIU6IwmTdyoZRd3hYH%2BP9qqDaLRC2%2B&X-Amz-Signature=388b5965408ec25477ea966ccd414de987dac45d243dd9d7ef49f24cb3f29aa8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
