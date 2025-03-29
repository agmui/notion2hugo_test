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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TNMS6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC2AxIK%2BZ8BxKL%2FOhLYnSAgESzqpUS8NHsOs4JbbecHnwIhAIU14Ztl3ohYkyUor9cAgOuCMYw9d%2B4odXwNU19764hpKv8DCGkQABoMNjM3NDIzMTgzODA1IgzbHt6rm%2BqeAwh06L0q3AN3Wa0XPU6uCmkBEFotkT3bXVV71o%2BSUCwKDH1ih1d%2BW5nipl4dyY3b4GqDzX7bzd7i2MQu5%2FRP%2FTHAXVkA2g43WKCyifXSJvKvd0VutKzamur%2BFOTYmpSBUoX06c5FLE53y4MU8X8Pm%2F79ar77LMoPFsyw5oBjxWZwAo%2B0AHaLYL7ThpUcgfho6fu4zwg0Xs0VdoZhdEMdr6KULFQDtlQgEvP36JQ452DUqeo2hCZwfa7c03q5R%2FfswoYY0jZJh5XCKktPqltphD9OkMzXCJG1%2FSbLev9erGNWakoTt1EVYJXUW6MNyfIL3Seu93trXmybIebb0vY3eLLxRtKIG%2Bo8yhTtZZgZnNokK3JozHIVA6sOod%2By4unj5K4HUczfqPU4iCEdMn3PgKVC21qtm2lvK5pLfnim0gP9e4iorweYwOvOx4Jr7IN%2B3O0wmfeAqjO920L0lYT6Q7cjhKDUCksFAcxOFu1DL4QFR98UEiF65xToSK1qll0hR2z5n7ffcPaSGGHNbl1dR3UayYBlk9XrJKkNcnrTlnWGKa9SnNPChHKi1rladCEuzYW2aexquikv64fT8HQmfjSJbmVOlDmhO6ITjGlL7F%2FzY8gqoQO8mYKWICc8vWXtjW7gKjC%2F35y%2FBjqkAXX7MHuYD1UHz%2Bi1YY6QbF9LRcc9SJ%2FMFTgg%2B3bnQXIuWtROnzNDrFBrmVBGr%2BPv7i2qcT0KsNs5bEJIe4RprCg1YhikXB2qiStk%2BCFyLltE8TeJnN1ZaTU4z%2FtISbRQjD48GhZ5H0xKqCMieUi6VaX4jnLNaLRcU478bV135mh3bBa0WzHThY1V%2Fg7urDBf7VMOm1Y15zV9xESYjiFX8QGLQH3T&X-Amz-Signature=7916e435e1e1f8d0e85439b7f269bb370eba0f427b1dea946deb3f47b7cea774&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TNMS6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC2AxIK%2BZ8BxKL%2FOhLYnSAgESzqpUS8NHsOs4JbbecHnwIhAIU14Ztl3ohYkyUor9cAgOuCMYw9d%2B4odXwNU19764hpKv8DCGkQABoMNjM3NDIzMTgzODA1IgzbHt6rm%2BqeAwh06L0q3AN3Wa0XPU6uCmkBEFotkT3bXVV71o%2BSUCwKDH1ih1d%2BW5nipl4dyY3b4GqDzX7bzd7i2MQu5%2FRP%2FTHAXVkA2g43WKCyifXSJvKvd0VutKzamur%2BFOTYmpSBUoX06c5FLE53y4MU8X8Pm%2F79ar77LMoPFsyw5oBjxWZwAo%2B0AHaLYL7ThpUcgfho6fu4zwg0Xs0VdoZhdEMdr6KULFQDtlQgEvP36JQ452DUqeo2hCZwfa7c03q5R%2FfswoYY0jZJh5XCKktPqltphD9OkMzXCJG1%2FSbLev9erGNWakoTt1EVYJXUW6MNyfIL3Seu93trXmybIebb0vY3eLLxRtKIG%2Bo8yhTtZZgZnNokK3JozHIVA6sOod%2By4unj5K4HUczfqPU4iCEdMn3PgKVC21qtm2lvK5pLfnim0gP9e4iorweYwOvOx4Jr7IN%2B3O0wmfeAqjO920L0lYT6Q7cjhKDUCksFAcxOFu1DL4QFR98UEiF65xToSK1qll0hR2z5n7ffcPaSGGHNbl1dR3UayYBlk9XrJKkNcnrTlnWGKa9SnNPChHKi1rladCEuzYW2aexquikv64fT8HQmfjSJbmVOlDmhO6ITjGlL7F%2FzY8gqoQO8mYKWICc8vWXtjW7gKjC%2F35y%2FBjqkAXX7MHuYD1UHz%2Bi1YY6QbF9LRcc9SJ%2FMFTgg%2B3bnQXIuWtROnzNDrFBrmVBGr%2BPv7i2qcT0KsNs5bEJIe4RprCg1YhikXB2qiStk%2BCFyLltE8TeJnN1ZaTU4z%2FtISbRQjD48GhZ5H0xKqCMieUi6VaX4jnLNaLRcU478bV135mh3bBa0WzHThY1V%2Fg7urDBf7VMOm1Y15zV9xESYjiFX8QGLQH3T&X-Amz-Signature=9cf1db62126f0f61cc9144d7adb39070fcb0557662aab662acb2ee8629ca8bab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
