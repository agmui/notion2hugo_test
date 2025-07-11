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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QNETCZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDspblGYAZuvA5IzuO%2BbLo8hvBopj7N3t1Fu2l9EgCa%2FQIhAJzef88NrTblCuJsR2MdkLbjYKdP20BHCFS2SeC0yTidKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx4yJGzZnQyL6duYq3APj1NBeHGLwOwl3trEXQpLFusWjIZPq52UhI4vWbi04DANZ73cWBvYu1vAsRwhGStscbxbaccr3kn0EBwNexA6S4sgBmkeDZcLXSA7S5fn8IuPajkI1kt%2BQe3G%2BmEU2MMfydc4%2BUlCasSd1b4oba33mPQ95U01w2D%2FbZgLrk%2B%2BFs%2BG3dC5ZcBi9ujdHe8P92Hf7p7Hp58CMbfnvkZCYV%2F8Br34Xif3jU7KigTOJLJVy0ZFtqGCY3brznJbHVOzjyVFkas%2BWL0IK3812IZwwOJE6mX%2FdKnPA8IhPDKe2SpWpw9O%2BQR6K2Y7RQXcBaW1rYK35HBURNzmr5HuEEghFzxs%2FCJ1R18U1Z%2Fw3XGL1rg84n0MO11ybQMu4uox1SpN9pA2E2NUKzL8u%2FBRUwMmSpoNBDj2tuZX9UYsYmXOVsdn%2BHstJ1G5G%2BPXWQwzcH99aB8gcI565QJuun7USxagRQ3zJdkNI2rKgW5P4wYb72qD1%2FGosM5KGTkLG0eAtkUXwlzDpKQqcVwcx7HRhgbpTWSCpvthtgBSnf9KVi0hvvjVhcmD%2BGQIKww2%2FBLvnuI%2B4Lrl1ZWJ6jKuQZgpLUYd9T2k%2FjySxaFVlaJcdk37Z%2BbYY2oRpXN1noUt0nYL0lTDA%2FcLDBjqkAVaxwNUTfDO%2FsF0OeRcIn7D5luxp2oyr6D0rvgRgyqZsC7zmp5dklgOxALZOXR3Lb2JyccPOqiO3CC560xUUvbcJi5pmAxBVZ388aFsu2euRWZ0EAm6WxdZgvJf74N%2FT0vkHilxF5qgUs9qVwuzOIt3FrqisulA9iI2VUnpA%2BsE1O9yzfn8uCIYNfhc5apWPYX7bdadkX5fYRfnGc7S7ZJknbOlz&X-Amz-Signature=9120dece51e60c8ecfa98dbc41dc9c3c4908fde4e24fe051162663f127a6a288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QNETCZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDspblGYAZuvA5IzuO%2BbLo8hvBopj7N3t1Fu2l9EgCa%2FQIhAJzef88NrTblCuJsR2MdkLbjYKdP20BHCFS2SeC0yTidKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx4yJGzZnQyL6duYq3APj1NBeHGLwOwl3trEXQpLFusWjIZPq52UhI4vWbi04DANZ73cWBvYu1vAsRwhGStscbxbaccr3kn0EBwNexA6S4sgBmkeDZcLXSA7S5fn8IuPajkI1kt%2BQe3G%2BmEU2MMfydc4%2BUlCasSd1b4oba33mPQ95U01w2D%2FbZgLrk%2B%2BFs%2BG3dC5ZcBi9ujdHe8P92Hf7p7Hp58CMbfnvkZCYV%2F8Br34Xif3jU7KigTOJLJVy0ZFtqGCY3brznJbHVOzjyVFkas%2BWL0IK3812IZwwOJE6mX%2FdKnPA8IhPDKe2SpWpw9O%2BQR6K2Y7RQXcBaW1rYK35HBURNzmr5HuEEghFzxs%2FCJ1R18U1Z%2Fw3XGL1rg84n0MO11ybQMu4uox1SpN9pA2E2NUKzL8u%2FBRUwMmSpoNBDj2tuZX9UYsYmXOVsdn%2BHstJ1G5G%2BPXWQwzcH99aB8gcI565QJuun7USxagRQ3zJdkNI2rKgW5P4wYb72qD1%2FGosM5KGTkLG0eAtkUXwlzDpKQqcVwcx7HRhgbpTWSCpvthtgBSnf9KVi0hvvjVhcmD%2BGQIKww2%2FBLvnuI%2B4Lrl1ZWJ6jKuQZgpLUYd9T2k%2FjySxaFVlaJcdk37Z%2BbYY2oRpXN1noUt0nYL0lTDA%2FcLDBjqkAVaxwNUTfDO%2FsF0OeRcIn7D5luxp2oyr6D0rvgRgyqZsC7zmp5dklgOxALZOXR3Lb2JyccPOqiO3CC560xUUvbcJi5pmAxBVZ388aFsu2euRWZ0EAm6WxdZgvJf74N%2FT0vkHilxF5qgUs9qVwuzOIt3FrqisulA9iI2VUnpA%2BsE1O9yzfn8uCIYNfhc5apWPYX7bdadkX5fYRfnGc7S7ZJknbOlz&X-Amz-Signature=8f72e1c27f3efc0e5a9d069fa853dc1b515b659f966106e83737dbae2c61c5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
