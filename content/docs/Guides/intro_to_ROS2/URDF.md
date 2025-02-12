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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBQ36TK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG3Wic1FN9M0PfC%2FR5haWQso8EFYvQM2NZN9%2BGY770SwIhAKpArNlHgz%2Bpoz1GPX7eRYb6aTlX8kleQUvmlhaNWCwUKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzNkaOOwFIfQ0Sg2Mq3AMxV0d65rCylQiYeOcGdUROPmJ5v16LSNlGODGjf%2BjEJ2YOm360c0Gu5MOL2S63f%2BfUJApGOYP28o5axF3EWyGMFLTUxpfVXzkVniENcFVA%2Fkx9ca5vma8RmRnTQjfoODs6gg9btJAI7%2BkFeNTrfK9KOIpaNY%2FWNuL05gQLLqSGjMekB9P8BOqBCLXXwTDyBvh%2BqkPm51%2FX0xkvD1RYfAF3Lo%2BnbWdFqD9SnLjDmsZ74GxYNVCc2w0y8sxVHKKOt5ouAUruwrG3XagP9JefjneGq2H0cEiB5o4rDmMZbqL78PzyXka2fZGEKs0d%2F9t7awH4lWaV5LxoQw%2FovpkcBaFvb%2BFKuDdoQaFUBWm%2BKZVZmujKBqO8GL9Ef6gElwX881v%2F9k8fGtsLJwYWgO%2Fp0ygFqylDzKM2bsGmyQ2u5xLQsNXZv1lncHoIYXkl8Do54uxmOlIbx%2FY27eNCJDaVM%2BNZs07BCL2yodOS972sKVoxOlIm0PvoBgflFqY1wCzxNzVzTUu9B6rCr%2Bp%2FTK4Apmw0Xkz2sGVHsBD425pklGzsNB3eXJtLanG402C6OL6DzBNXfAJ6MpkwED%2FBzDWUldMOniyXL0WM5viTkeFWCLu6gc%2BfwkpIMd7feeMbVjDnxbS9BjqkARd5H5NyyQR3SFCZ3dQxOd99EWikh2zqkWBGzMvC3UziJpfMdJ0mh9%2B9DVjUh2H%2FOxy3bAS%2FZe4eOndzHDIXTYNz0rmtHuq8F%2B5Pq6KHEp7%2BDv2W30ZBVWZ%2B8NC%2FVFPq%2F0uKuLsIvnKibFJxzhG40D5xOq54JdYVuAt93FzjUhWtPHHCVFAUJJ0CtqfYofT5rykg5VfNkAxWsXg2DrceoZR0rLE8&X-Amz-Signature=85444f0fc4b5992d5506d138397b1f0dcea2d8fed1fb325a7833b43e41c97795&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TBQ36TK%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG3Wic1FN9M0PfC%2FR5haWQso8EFYvQM2NZN9%2BGY770SwIhAKpArNlHgz%2Bpoz1GPX7eRYb6aTlX8kleQUvmlhaNWCwUKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzNkaOOwFIfQ0Sg2Mq3AMxV0d65rCylQiYeOcGdUROPmJ5v16LSNlGODGjf%2BjEJ2YOm360c0Gu5MOL2S63f%2BfUJApGOYP28o5axF3EWyGMFLTUxpfVXzkVniENcFVA%2Fkx9ca5vma8RmRnTQjfoODs6gg9btJAI7%2BkFeNTrfK9KOIpaNY%2FWNuL05gQLLqSGjMekB9P8BOqBCLXXwTDyBvh%2BqkPm51%2FX0xkvD1RYfAF3Lo%2BnbWdFqD9SnLjDmsZ74GxYNVCc2w0y8sxVHKKOt5ouAUruwrG3XagP9JefjneGq2H0cEiB5o4rDmMZbqL78PzyXka2fZGEKs0d%2F9t7awH4lWaV5LxoQw%2FovpkcBaFvb%2BFKuDdoQaFUBWm%2BKZVZmujKBqO8GL9Ef6gElwX881v%2F9k8fGtsLJwYWgO%2Fp0ygFqylDzKM2bsGmyQ2u5xLQsNXZv1lncHoIYXkl8Do54uxmOlIbx%2FY27eNCJDaVM%2BNZs07BCL2yodOS972sKVoxOlIm0PvoBgflFqY1wCzxNzVzTUu9B6rCr%2Bp%2FTK4Apmw0Xkz2sGVHsBD425pklGzsNB3eXJtLanG402C6OL6DzBNXfAJ6MpkwED%2FBzDWUldMOniyXL0WM5viTkeFWCLu6gc%2BfwkpIMd7feeMbVjDnxbS9BjqkARd5H5NyyQR3SFCZ3dQxOd99EWikh2zqkWBGzMvC3UziJpfMdJ0mh9%2B9DVjUh2H%2FOxy3bAS%2FZe4eOndzHDIXTYNz0rmtHuq8F%2B5Pq6KHEp7%2BDv2W30ZBVWZ%2B8NC%2FVFPq%2F0uKuLsIvnKibFJxzhG40D5xOq54JdYVuAt93FzjUhWtPHHCVFAUJJ0CtqfYofT5rykg5VfNkAxWsXg2DrceoZR0rLE8&X-Amz-Signature=b7ffc81cb84e4c260d5e947b6cc65c7ac805d52e9d3db2d78f321ba817cccfba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
