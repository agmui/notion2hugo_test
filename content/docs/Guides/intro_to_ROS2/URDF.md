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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634COHB2T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIC8u5%2FKo9VMF%2FOi%2FBw8kliaH82BSjFRt8QJ0soL6QfWMAiBgK5A8xlZGaev8EY8i0TlZQUkMjPi7KJXcE0dm2CLkgyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMCS2Mp6%2FoicIM03N4KtwD4qZoUSugsFXc%2B892b8usJpgOnsaA0njkb%2ByOqMgypUhNob7GpYc1Jq51LeSaZjqnc7tcUymhpDZf65gk9vuT9IrWt1QHUrg34KW4HQN2%2B0beIewkmcxLF%2FmdvFBMfpfnOkFl%2FBQeNqz04dgHTSHlHr68%2BjAPQGs7Vhnh608YcvgSwgZwmJqQuGVvXh731pyH8fJV8Dj60f6odoJMGxJW6xiyLj8%2BNP5BAxBWOlj6x27pI3BtxKeeSxoE7flipmKiesNpRIFATwAFMnlAaT4f%2BRTFddCUnRMiJqomm700KFjHbEygtpaPsDc11XSB8GHmUiK1ERKuMYypZnOq%2F41wjtT9Et8sMxznuSoKzgpUxJgRJW1cPmEMjv4d5OIwvLOuKO0tAne9ryDrGpa5%2BRhZjZJ5vhOPRnIdjqLwznpu30qXRlPHIcLIZjitHWyGHE3XKP6MaqJ3gplJdzUDalqM3lTQwqAkxkOIeeyqU3Ib%2Fqi3dHAUfvzxGE2PILVvhQazMiKmQMnNAj878F16hY4ScE%2Fywlp9rZIZ2r%2FMs%2FAaud%2BO1ymdrK6NVms%2F9WJbxQQNONcGldx4qRVIqlXZipHnfK8fEDo15FDvarI5t9mvl7ZLT23t7lzQcjjOhh0wwraowwY6pgGIrq5JeZCoTnBritrmId354CgyioECg44owLqDNimqQdCtVF%2FV5VbzbeOhoDFEvjD5e0gEtFzcffqzJV8KmbDse%2FZNOw9JiYOvLhd5QhfFb66MYHAQyiQzxlCh8N5AGaoFK1nYD7GASMKi7wLltb1O%2Bl9Dy5NmLbp%2BRToODvsyzf0wWjZR0yUWhSDj%2Bvk7zhas1Pv1UpUvtsZwKfJg3zcLHafpsYgc&X-Amz-Signature=2f645de8be5015eeb37780208d540c4436927259446826627855d81d90cfd0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634COHB2T%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIC8u5%2FKo9VMF%2FOi%2FBw8kliaH82BSjFRt8QJ0soL6QfWMAiBgK5A8xlZGaev8EY8i0TlZQUkMjPi7KJXcE0dm2CLkgyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMCS2Mp6%2FoicIM03N4KtwD4qZoUSugsFXc%2B892b8usJpgOnsaA0njkb%2ByOqMgypUhNob7GpYc1Jq51LeSaZjqnc7tcUymhpDZf65gk9vuT9IrWt1QHUrg34KW4HQN2%2B0beIewkmcxLF%2FmdvFBMfpfnOkFl%2FBQeNqz04dgHTSHlHr68%2BjAPQGs7Vhnh608YcvgSwgZwmJqQuGVvXh731pyH8fJV8Dj60f6odoJMGxJW6xiyLj8%2BNP5BAxBWOlj6x27pI3BtxKeeSxoE7flipmKiesNpRIFATwAFMnlAaT4f%2BRTFddCUnRMiJqomm700KFjHbEygtpaPsDc11XSB8GHmUiK1ERKuMYypZnOq%2F41wjtT9Et8sMxznuSoKzgpUxJgRJW1cPmEMjv4d5OIwvLOuKO0tAne9ryDrGpa5%2BRhZjZJ5vhOPRnIdjqLwznpu30qXRlPHIcLIZjitHWyGHE3XKP6MaqJ3gplJdzUDalqM3lTQwqAkxkOIeeyqU3Ib%2Fqi3dHAUfvzxGE2PILVvhQazMiKmQMnNAj878F16hY4ScE%2Fywlp9rZIZ2r%2FMs%2FAaud%2BO1ymdrK6NVms%2F9WJbxQQNONcGldx4qRVIqlXZipHnfK8fEDo15FDvarI5t9mvl7ZLT23t7lzQcjjOhh0wwraowwY6pgGIrq5JeZCoTnBritrmId354CgyioECg44owLqDNimqQdCtVF%2FV5VbzbeOhoDFEvjD5e0gEtFzcffqzJV8KmbDse%2FZNOw9JiYOvLhd5QhfFb66MYHAQyiQzxlCh8N5AGaoFK1nYD7GASMKi7wLltb1O%2Bl9Dy5NmLbp%2BRToODvsyzf0wWjZR0yUWhSDj%2Bvk7zhas1Pv1UpUvtsZwKfJg3zcLHafpsYgc&X-Amz-Signature=738b00736e131c3c79717006412375ad76f305d9b52dfc475f743580c5ee89d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
