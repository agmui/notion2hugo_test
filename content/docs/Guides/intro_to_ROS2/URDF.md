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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNKODWL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtAgmpM0ZhwP%2FHGgjiZOhTssw05MjbRL5Yk%2F%2F3W8%2FlNAiAcRR677UDcqaXfihdXe7J%2BQvZTxqdlPJ3XmJU1ewbsICqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGOhg1%2FOTQMPdvuA2KtwDD4%2FaOAgcHvzVWnWGeGDk3L2E2iRVW%2FqliCb3HIFddVvHFUsjHEzMxhVIrEW39ShC%2BxbMjz01Q3uobJ4YqSAeEM9ircxx1SzBpPh6AxMcDRbF%2FUET301O0DHTcQAMaz%2FSUDcoteu10qkYIDfm3VyfTZSY18zpbu7WTzAhDn1KfE3aBTjJLBgNobacnhGyktADovoHJLsr9aquU7vtpmRNRIoQk2vs8DXl2sVXLcZakrEufE%2B9cOSUVoshz%2BQMFAOpdqSz9ALJ1rm%2FZTHVxIhnY1yAXz0wGzR9crlFkjDIc1rKJpb%2FF5dojfKhfO9RBSHeTOw2fW4o27AjOJeCnmjvKgp3HCIQIthUGGecmostDLgqsAuHSCtuoK8wB2sYrlJpO7oHcCOYgysX8NsPRh0r1Fjpk%2BSpdKtwjzuGkWkJKfq6kTwEMuuCM%2FAgBKFdW2kS76pb1M3%2BKXG%2BWmidwBVLW5RoDdF2jx%2FRJIzjpWnmAL0pj5i3SpfLZvfY8XuxATkhwunr0fAuvTmhhbMvj%2F1DmRqw7A4FE2DCIhla74zXf3y1bZVLeaD%2Bo06gJD81wPH7v0bMy%2BcQ8b3wtSSYoeCU5Au1yNYV6hqdrZpnZWBjs7ZO1Mr9rcbFQ8qLVZMw3IDyvAY6pgHS4oy8LJI8stlIOthbXAdNlr7VDe8mb8npLT6PV%2BfF0d8jkNHS9QdrNGLMLHuoMji8aAqa5z1PaS9WnKfGduXHdS6K17M12Ga7IOWrinhagNJpfIS4Sz%2Fo4VOYgCqnMOvvd0YkvOkG8BUhlqd90pUf46OkUb1eGfB9BI9u38FYqKgCedAuOuX5c13vI6DnAE9ARI1yDdFGdHQ9zg%2F24sY6dKHvnZiu&X-Amz-Signature=ae9b3ae5d5df1bc90dec40a47e39386187aa9f1105cd498f572b123cae3fb195&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CNKODWL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtAgmpM0ZhwP%2FHGgjiZOhTssw05MjbRL5Yk%2F%2F3W8%2FlNAiAcRR677UDcqaXfihdXe7J%2BQvZTxqdlPJ3XmJU1ewbsICqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGOhg1%2FOTQMPdvuA2KtwDD4%2FaOAgcHvzVWnWGeGDk3L2E2iRVW%2FqliCb3HIFddVvHFUsjHEzMxhVIrEW39ShC%2BxbMjz01Q3uobJ4YqSAeEM9ircxx1SzBpPh6AxMcDRbF%2FUET301O0DHTcQAMaz%2FSUDcoteu10qkYIDfm3VyfTZSY18zpbu7WTzAhDn1KfE3aBTjJLBgNobacnhGyktADovoHJLsr9aquU7vtpmRNRIoQk2vs8DXl2sVXLcZakrEufE%2B9cOSUVoshz%2BQMFAOpdqSz9ALJ1rm%2FZTHVxIhnY1yAXz0wGzR9crlFkjDIc1rKJpb%2FF5dojfKhfO9RBSHeTOw2fW4o27AjOJeCnmjvKgp3HCIQIthUGGecmostDLgqsAuHSCtuoK8wB2sYrlJpO7oHcCOYgysX8NsPRh0r1Fjpk%2BSpdKtwjzuGkWkJKfq6kTwEMuuCM%2FAgBKFdW2kS76pb1M3%2BKXG%2BWmidwBVLW5RoDdF2jx%2FRJIzjpWnmAL0pj5i3SpfLZvfY8XuxATkhwunr0fAuvTmhhbMvj%2F1DmRqw7A4FE2DCIhla74zXf3y1bZVLeaD%2Bo06gJD81wPH7v0bMy%2BcQ8b3wtSSYoeCU5Au1yNYV6hqdrZpnZWBjs7ZO1Mr9rcbFQ8qLVZMw3IDyvAY6pgHS4oy8LJI8stlIOthbXAdNlr7VDe8mb8npLT6PV%2BfF0d8jkNHS9QdrNGLMLHuoMji8aAqa5z1PaS9WnKfGduXHdS6K17M12Ga7IOWrinhagNJpfIS4Sz%2Fo4VOYgCqnMOvvd0YkvOkG8BUhlqd90pUf46OkUb1eGfB9BI9u38FYqKgCedAuOuX5c13vI6DnAE9ARI1yDdFGdHQ9zg%2F24sY6dKHvnZiu&X-Amz-Signature=2c495ca06b731be8e71ba30e591d6e88269d588f1e002f2092fa622ee331b4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
