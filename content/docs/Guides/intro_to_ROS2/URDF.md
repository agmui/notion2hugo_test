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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAGNMPO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDd5bI7BuGR%2FOopzkt4PNdGNuaFi94KFZix9UcfH1LvaAIhAMffmlxJiKfElrX6wJMVpXsamx0xOKZRwBYPt%2FaryoE%2FKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu7lFY324Tb6Akqwkq3AMtIGag45GwcovJ2jKPIVwbUQ4eOSR%2B1URZZJcnVQsg3evEfxJnNl1C6i%2BGBiq7wjYDpV8t%2FIMyxeysk29XKcoqTEgu1G1EW38Ha90E4ebzjKcGAE9yGGeBjUMVL53N%2FVFhdft0QDuwyNrk%2FsgZwurpKfYG0TgEdRXY3E2JFBhKb7u0arVXUNNO91lUM63doZ6A9DFe%2BU4pptc%2F4clqduoE2crb3QLzNJoYS3OzkKqz5os%2BsmmZhckP792Mrrqg%2F%2F1Dn696MZ7EiSDa7v7d0tKPJA88jdeQOLcgB4hM3yYMcKZldX9k99p71KqslegEYa9A%2FOHvxr1HLlXgGWXPv3djvtVxqiKDguwve3T6r3c4v8JBae%2BkjzeTVI7bihwpP6spnz0BnRrMiRGEBAgn30bYKhVuJHt5SY24Czf1czaFMXqNuVJzWUF3AfG8Wf5VKAt7Bad%2FJ3nm7k%2F4r7PqmnuCtXHVtbb%2FH92fRHg%2BP2OpFR7qtiI%2FU7z1RitI2s3UGgCJAfNBfF1e29hTBP%2FcbQylxJvOajA%2BLfJBeaB5HxgV5CwnIH%2BXUooDp%2B%2B%2B5UgzX1neUaTLdrpDXOBUBxUwuT2OlG77qTBcXv8BqZag2DTScWwiE5nAdgST69teRDC3iKrCBjqkAZLJlAhhdekJQ3RYgj4zJWQcPEoQ7gQaj3rXe4h288Gc6uHobMtcd4hdkVnvHyPacvIOOfO4XXamCUuCMLSExnG5XyNRksbMEmIuKqWjzQrbb9p4%2FhN%2BAWQBlSbK8hiJFPEkco%2B5vvAtmLsA6qKFyRrhJJZPxdlXOe1FobgLcivOFg8LAXD1sv%2Bx70lFc4ruoRkAfKwT97LVtY8bFDd1rBL5ZwjP&X-Amz-Signature=2e7ab2312d4618ea979402aa2d1c62d671b1bce65ea277ec27c031b81cd36278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSAGNMPO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDd5bI7BuGR%2FOopzkt4PNdGNuaFi94KFZix9UcfH1LvaAIhAMffmlxJiKfElrX6wJMVpXsamx0xOKZRwBYPt%2FaryoE%2FKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu7lFY324Tb6Akqwkq3AMtIGag45GwcovJ2jKPIVwbUQ4eOSR%2B1URZZJcnVQsg3evEfxJnNl1C6i%2BGBiq7wjYDpV8t%2FIMyxeysk29XKcoqTEgu1G1EW38Ha90E4ebzjKcGAE9yGGeBjUMVL53N%2FVFhdft0QDuwyNrk%2FsgZwurpKfYG0TgEdRXY3E2JFBhKb7u0arVXUNNO91lUM63doZ6A9DFe%2BU4pptc%2F4clqduoE2crb3QLzNJoYS3OzkKqz5os%2BsmmZhckP792Mrrqg%2F%2F1Dn696MZ7EiSDa7v7d0tKPJA88jdeQOLcgB4hM3yYMcKZldX9k99p71KqslegEYa9A%2FOHvxr1HLlXgGWXPv3djvtVxqiKDguwve3T6r3c4v8JBae%2BkjzeTVI7bihwpP6spnz0BnRrMiRGEBAgn30bYKhVuJHt5SY24Czf1czaFMXqNuVJzWUF3AfG8Wf5VKAt7Bad%2FJ3nm7k%2F4r7PqmnuCtXHVtbb%2FH92fRHg%2BP2OpFR7qtiI%2FU7z1RitI2s3UGgCJAfNBfF1e29hTBP%2FcbQylxJvOajA%2BLfJBeaB5HxgV5CwnIH%2BXUooDp%2B%2B%2B5UgzX1neUaTLdrpDXOBUBxUwuT2OlG77qTBcXv8BqZag2DTScWwiE5nAdgST69teRDC3iKrCBjqkAZLJlAhhdekJQ3RYgj4zJWQcPEoQ7gQaj3rXe4h288Gc6uHobMtcd4hdkVnvHyPacvIOOfO4XXamCUuCMLSExnG5XyNRksbMEmIuKqWjzQrbb9p4%2FhN%2BAWQBlSbK8hiJFPEkco%2B5vvAtmLsA6qKFyRrhJJZPxdlXOe1FobgLcivOFg8LAXD1sv%2Bx70lFc4ruoRkAfKwT97LVtY8bFDd1rBL5ZwjP&X-Amz-Signature=d549fb715dc0c02d0f2b23b819e8ad2acaea6520a4a9dd9564df9bbad0ff4443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
