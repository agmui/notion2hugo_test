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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYO4DZE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6gdHDNzhDvyZ6TPrOfnRETgmeBW7fdYCEs5dEEKW3FAiA%2Bu4kZqOuTp7cLozmpnB4zTN%2Fo4Mh2xd5d1tbr38bpOir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM%2FS9jzN59PLbx%2FZ4RKtwD%2Bq4edF4FfeqsYNxNeuV88bFNCb6ghYZJYsHjI%2FVLI9N0W5y2eV5RdhADZ7AJyD0UwYDNK%2F8hmT5IZ85rwf%2BdVETuCV7KSBKump5jnwCwXzyWGlAhuH0W6jhqR6wCvSj%2Fu87lS53GkFiUPPl1PFq4zp1kP1%2BatSsLrRBw3vc7jOgY0OiCYJYeBBkkAr5ur%2Fal8pqXTZoneFsXxqcA%2F%2Bk0I%2F%2Fr7E45Lnhe4pP5YQAKv7WkYourfsW6t384pfZz9Az7ZzlLK6cHHt%2BGXgaNbEIYz6FH9XK6THUMQ5Ilo%2Bo%2FI5C2NERLLMn6Zyyz2MPzBy5a%2FRAljwWptCBzPM1f8ka0EkqT1huM%2FddAUvrMAli6a9GfknTCmfjLsvKZ%2BH%2B%2FlzDGSpSDmgIDHeS67%2B60Fz1ZVHWzkb9%2BQjPvGpzaj3%2B5Wy7O84m29u2o%2Fp7wZTJQ5eb9gclsdsHyoJCUqdc2VR2iT6loeG1ALhxjKTNF94oHR%2BQdFVLDkyCGxJz4mRf8UdZxDzxvDlYWZVvhFXM22qyk%2BmPzWJy%2FMKc4gQt5i9sQKCEqfpuXXYxqdIquuSkUQiDhwHoXCIu72IST7%2BVw%2F4SB%2BumIhTg8OVScq2nSOT2RpIaXGgdJO7Da0xMmOmIwiZbPwwY6pgGseDR%2Bl6Riq5unoMyZJRDss4Ql0%2F67UcztkmmhXbXLbrj7C3zzjsh68mdWUSCNdA557mQ4p5411mSDocPa7GGBx3fmDbegv5%2Bfat2gXpIa3zMapUSExrHN3BmU%2F7qOmSuJvd92DTJleq0zEpICG5EqjcCWISQ1Z9znr0sUvBNgSCM8SX4cMiniT5lnKDw7DPDv%2FlyuWpXU5LJLtqrFESdGgvDZBONp&X-Amz-Signature=e804a13dd193f1eae82cad8b7a5f2ce7428d1f5bb4a3d1bc51581cf3502452b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VYO4DZE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6gdHDNzhDvyZ6TPrOfnRETgmeBW7fdYCEs5dEEKW3FAiA%2Bu4kZqOuTp7cLozmpnB4zTN%2Fo4Mh2xd5d1tbr38bpOir%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIM%2FS9jzN59PLbx%2FZ4RKtwD%2Bq4edF4FfeqsYNxNeuV88bFNCb6ghYZJYsHjI%2FVLI9N0W5y2eV5RdhADZ7AJyD0UwYDNK%2F8hmT5IZ85rwf%2BdVETuCV7KSBKump5jnwCwXzyWGlAhuH0W6jhqR6wCvSj%2Fu87lS53GkFiUPPl1PFq4zp1kP1%2BatSsLrRBw3vc7jOgY0OiCYJYeBBkkAr5ur%2Fal8pqXTZoneFsXxqcA%2F%2Bk0I%2F%2Fr7E45Lnhe4pP5YQAKv7WkYourfsW6t384pfZz9Az7ZzlLK6cHHt%2BGXgaNbEIYz6FH9XK6THUMQ5Ilo%2Bo%2FI5C2NERLLMn6Zyyz2MPzBy5a%2FRAljwWptCBzPM1f8ka0EkqT1huM%2FddAUvrMAli6a9GfknTCmfjLsvKZ%2BH%2B%2FlzDGSpSDmgIDHeS67%2B60Fz1ZVHWzkb9%2BQjPvGpzaj3%2B5Wy7O84m29u2o%2Fp7wZTJQ5eb9gclsdsHyoJCUqdc2VR2iT6loeG1ALhxjKTNF94oHR%2BQdFVLDkyCGxJz4mRf8UdZxDzxvDlYWZVvhFXM22qyk%2BmPzWJy%2FMKc4gQt5i9sQKCEqfpuXXYxqdIquuSkUQiDhwHoXCIu72IST7%2BVw%2F4SB%2BumIhTg8OVScq2nSOT2RpIaXGgdJO7Da0xMmOmIwiZbPwwY6pgGseDR%2Bl6Riq5unoMyZJRDss4Ql0%2F67UcztkmmhXbXLbrj7C3zzjsh68mdWUSCNdA557mQ4p5411mSDocPa7GGBx3fmDbegv5%2Bfat2gXpIa3zMapUSExrHN3BmU%2F7qOmSuJvd92DTJleq0zEpICG5EqjcCWISQ1Z9znr0sUvBNgSCM8SX4cMiniT5lnKDw7DPDv%2FlyuWpXU5LJLtqrFESdGgvDZBONp&X-Amz-Signature=e67404068755dbe1f9f2d6bff65354e02bff727d9e50ca7ae8a6e9d270218093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
