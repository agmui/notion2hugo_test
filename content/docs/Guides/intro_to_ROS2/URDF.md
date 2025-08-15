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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUCUZUK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDHOR0ARq7Cac6YqVB8cI32lOt7NSNAsQ0pvj6OZbD7IwIgIK%2Bw3Hg4zxfDWBmA0i0tXSlORqUjx8KbdJQ2%2Bd%2Fh8jMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFdeEatTfGl0LPj%2FOircAxBWy2NrV%2BcivvQBjpAzNrrmngsfqzxksxxFAa4X%2Fxc2H4ASfYBQcZLg3SUnbxf0Wh7ZoL%2B7EsUDdoFA91kxUl9%2Fann5Li4awsdkNj3Vk0J4nK2008nsIoYToSMT3nvFojg3GIOuZuQmCdZ6KpIpyqF8vtEbu4OAYOTOMQXV86EojU17GqPhQMvBuJiWQampESCdqT%2Bqt3jcqJnUEilJjtCyXO%2BWOt11kbsSXF0z1b4GqJDrD866nPHNZ55kqNMl5w4%2BU8tk1MLtpPMas8ulB%2FEr5jAByrhj4SkpUGvsicswMhOLyRQISeAok1lkfGWZWFuJtmL3kcys633U%2BX5PDVQranFqv3stGxlmcg%2FLLI77%2BFOYbJqbrJ0d91cOVH9UYTR90fWcFa6NhWs9pfBqUuBb43az1jhZ%2BsiHrPKIe8WllYw23xveqPh0nb%2BnDGE491SE0ZN4OLmETYav%2FzgQEwa1tUDf8L0fFfcCteVMCkdcSq%2FLfEMA0hJbgjiBmtE5TcJTwuh8%2B4yuGHqSTy%2B1QVHnSLgXkBZ0%2BaNi0F7NTR4PNP%2BMkDj6yjglraDOmk%2BUhrgXfFXZe5h5JczlX9EjJ1%2BjaqR6z%2BcGiVciNCm5NS2HFNFDnaJrWscnaP%2BPMKDa%2FcQGOqUB9iP4UmaV5UjWUm2N%2BmJOjqW9s1WMTskd48rZ%2Fp2%2BwrbHj6J9Z2L%2B1gWOydHE5SnHbhwkN75IWvqD7eo46E9f1AMdy22ekobIqxJCCfPQKvVa4sXwy%2BkIev36N56NJuh5DcHEY7vsHAgbghgCDhCo5GYt2qn3oZOMI%2BRW5iL36TRqa9AZt9QT1Etoyl0q1ta%2FcplM0JTo19a1YICUX2oEZTwS6iDX&X-Amz-Signature=42e86bdf8984415f1b721329a9a27ec0a86ba397b2e38d5a27197b9260cef8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUCUZUK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDHOR0ARq7Cac6YqVB8cI32lOt7NSNAsQ0pvj6OZbD7IwIgIK%2Bw3Hg4zxfDWBmA0i0tXSlORqUjx8KbdJQ2%2Bd%2Fh8jMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFdeEatTfGl0LPj%2FOircAxBWy2NrV%2BcivvQBjpAzNrrmngsfqzxksxxFAa4X%2Fxc2H4ASfYBQcZLg3SUnbxf0Wh7ZoL%2B7EsUDdoFA91kxUl9%2Fann5Li4awsdkNj3Vk0J4nK2008nsIoYToSMT3nvFojg3GIOuZuQmCdZ6KpIpyqF8vtEbu4OAYOTOMQXV86EojU17GqPhQMvBuJiWQampESCdqT%2Bqt3jcqJnUEilJjtCyXO%2BWOt11kbsSXF0z1b4GqJDrD866nPHNZ55kqNMl5w4%2BU8tk1MLtpPMas8ulB%2FEr5jAByrhj4SkpUGvsicswMhOLyRQISeAok1lkfGWZWFuJtmL3kcys633U%2BX5PDVQranFqv3stGxlmcg%2FLLI77%2BFOYbJqbrJ0d91cOVH9UYTR90fWcFa6NhWs9pfBqUuBb43az1jhZ%2BsiHrPKIe8WllYw23xveqPh0nb%2BnDGE491SE0ZN4OLmETYav%2FzgQEwa1tUDf8L0fFfcCteVMCkdcSq%2FLfEMA0hJbgjiBmtE5TcJTwuh8%2B4yuGHqSTy%2B1QVHnSLgXkBZ0%2BaNi0F7NTR4PNP%2BMkDj6yjglraDOmk%2BUhrgXfFXZe5h5JczlX9EjJ1%2BjaqR6z%2BcGiVciNCm5NS2HFNFDnaJrWscnaP%2BPMKDa%2FcQGOqUB9iP4UmaV5UjWUm2N%2BmJOjqW9s1WMTskd48rZ%2Fp2%2BwrbHj6J9Z2L%2B1gWOydHE5SnHbhwkN75IWvqD7eo46E9f1AMdy22ekobIqxJCCfPQKvVa4sXwy%2BkIev36N56NJuh5DcHEY7vsHAgbghgCDhCo5GYt2qn3oZOMI%2BRW5iL36TRqa9AZt9QT1Etoyl0q1ta%2FcplM0JTo19a1YICUX2oEZTwS6iDX&X-Amz-Signature=579e06a81d585ccc7067d87d67d63054d147b31daf2dcf963592e2b0c519247c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
