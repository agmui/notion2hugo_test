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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44M2TKN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3xQs1SztqezyF63J0QjZBo%2FI3H8Wi9wh3qynoWh9lAiAW8M%2BpFyjvqTvvOuNdH5QA4OozwT6RjVg4eWrFBMo7QSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBGoqoEZejwbswC2VKtwD9QyESXzjvaEhEkwUJC0IJs3fN2hXaIJY7eVQYY7tsMlUiwtdPk5vRXJjOyG%2BnAiQLzoME0rCzaxrI%2BunNkjOpslj3a9zU6e21WevgipCDTBgkgOxeNKzgEXF8%2BGMGPVML%2Bg96e73LYvNdy8CSmk8m8diZ8hw4p660J9GqEBBV%2BuF3Se7pAd67fcWTQQ4QLxWEGs1flPLm7xEXSJUE5aprsD0k7PkXkBSUY2fg7YvQR%2F3oAQZtsCtP7dQxsGjynwQYhU9WgbIFBen1UqPygp%2F6nz%2FahB6yvlbcLXrr6w8%2FnwjM5oFb%2BOIl821TEgxdPvhgt%2F7l4jUv%2BG48Ti2JefDhiqJuaNThq2d6e9IQC4wHCsuw8jdFFFUkONEFencvDWpGCt4jqUg1m9uFTT2ucAull6%2B31sp%2BmRSa4963JMbeduIFieB2O02QfWmsgPXwC7DSXYQPlShcprWbaUlbUaYcoKIdnZ4PMg3H34g%2F4fTRllixFp0m5FNoRbw75DwsqqFsuFvtZRPa3BYmE0Qc3UW7MWpH5PlC5vsdt9bV5sa61qAGLVO2d4ApO4hvt3X%2FbMVYaL9oVmVgiOfk0CeO8DknkTatRwn6xrvE2j%2B606uOUq%2F%2FKzLBEhWYmxN2yYw19iGwAY6pgFOVNK4tGYKGl5HfRuX7TXGzsXMHIxJe5tey5L4vX4fOhN9IXmTwnmFrx9imiscKU5PyMN8T%2FJHz0Nixij0RKyzaQBhTfhaiA%2Fz7x%2F6sRblMjRRvI%2Fay0ZHW9I2EHa1la9Hpqf8ZF21n3j1m5%2BiR9ZvsYaZRYFw7rKzkNPZZOPrUeuLhnL9wRhun6qnVoaoG2BoJvRrEPFXOoaHY8C1CGOGam%2Bd4yK4&X-Amz-Signature=9b8b16d8f586ee45bd674f63eaf5b465145a28456d47a200bee3540cc64c9dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44M2TKN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T021836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW3xQs1SztqezyF63J0QjZBo%2FI3H8Wi9wh3qynoWh9lAiAW8M%2BpFyjvqTvvOuNdH5QA4OozwT6RjVg4eWrFBMo7QSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBGoqoEZejwbswC2VKtwD9QyESXzjvaEhEkwUJC0IJs3fN2hXaIJY7eVQYY7tsMlUiwtdPk5vRXJjOyG%2BnAiQLzoME0rCzaxrI%2BunNkjOpslj3a9zU6e21WevgipCDTBgkgOxeNKzgEXF8%2BGMGPVML%2Bg96e73LYvNdy8CSmk8m8diZ8hw4p660J9GqEBBV%2BuF3Se7pAd67fcWTQQ4QLxWEGs1flPLm7xEXSJUE5aprsD0k7PkXkBSUY2fg7YvQR%2F3oAQZtsCtP7dQxsGjynwQYhU9WgbIFBen1UqPygp%2F6nz%2FahB6yvlbcLXrr6w8%2FnwjM5oFb%2BOIl821TEgxdPvhgt%2F7l4jUv%2BG48Ti2JefDhiqJuaNThq2d6e9IQC4wHCsuw8jdFFFUkONEFencvDWpGCt4jqUg1m9uFTT2ucAull6%2B31sp%2BmRSa4963JMbeduIFieB2O02QfWmsgPXwC7DSXYQPlShcprWbaUlbUaYcoKIdnZ4PMg3H34g%2F4fTRllixFp0m5FNoRbw75DwsqqFsuFvtZRPa3BYmE0Qc3UW7MWpH5PlC5vsdt9bV5sa61qAGLVO2d4ApO4hvt3X%2FbMVYaL9oVmVgiOfk0CeO8DknkTatRwn6xrvE2j%2B606uOUq%2F%2FKzLBEhWYmxN2yYw19iGwAY6pgFOVNK4tGYKGl5HfRuX7TXGzsXMHIxJe5tey5L4vX4fOhN9IXmTwnmFrx9imiscKU5PyMN8T%2FJHz0Nixij0RKyzaQBhTfhaiA%2Fz7x%2F6sRblMjRRvI%2Fay0ZHW9I2EHa1la9Hpqf8ZF21n3j1m5%2BiR9ZvsYaZRYFw7rKzkNPZZOPrUeuLhnL9wRhun6qnVoaoG2BoJvRrEPFXOoaHY8C1CGOGam%2Bd4yK4&X-Amz-Signature=e8f8304522f5aea76c4d22b13886b1685e3c83dc605768a257bf8a298a88fb87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
