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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUEUT3V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIENj78xeyopjIXRNhzjO7rLdm23JxccVkcpvmEnfVI8lAiAgx9MBYk5pHlDZWlfVBRMcLZAkysm%2B6mlOMH%2BqvTi7DCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMEBoEi%2Bappg3QW5cdKtwD1UwNuoX1X7EKAVEEeyHjBLAgOHB6yAhqu09Ow5s71BsqtXmWwVEhDj%2Fz1S5kcwT6ti85CFB66JJXneOqDwcF9%2FwZoarsoDnGmMRmUQwwwOrqtRhEtYSUbK0bczLdcQO11E8HGtp5rAxKdDJpMG2XbRJl56h1KVI1NikVXh%2B53HkkqZejm86CbenICnvh%2BgWIMsDnjUpjapOdEnDaNnQ%2Foch1L87GY0bOnxjoNLGXkwf0ewWL8KT6iaKNrVsBGmF7C98hWpevJLFEM4tjR5zOjzDqIMNfbB%2FVkJ4DG6V21hOX%2B%2F8aP%2Fe0Aasv%2B7wyDf0rPQMT3PKWk7oEuCqe4SPBXJMe0JoQMTTaM6TO9wbQpOi9C82HAz8exZbYlPmmTe7GhqjgIbQexukcvO3OawDYeSvvyTI6FcfZumS8bzz6V0l%2BfhObuI3whKqHJZozPaCAGFeOIJsiQ96g3OSyfdIJtRZ8Vp06XJY6yA526RwyK2aNCcpVMW%2Bry3qlZyjPfHK4w%2FkNxy%2Bk6HVuTik0%2Fl7R3%2FJ9z0lmJofoLHtCbdnrjjIe0YNPJGtDpswmItq%2BXCg2sOK5epW4As6XBhFM3jwIRkKyXvFxzlUKVT8ULLk5h8MyodH%2FhlaFGEH9o5sw4o2awwY6pgEm%2FWPNg3QcwcUoRkXjph1vNzxy2lOx7v4s8w8lgxwjqLiU1qeBbFhehhKdKN5KUqiB%2FMBg7x%2FJtv3ZQU%2BHxsKqARAA8RN%2FJhdXYW4LB0xbRhROFPS4HsDJz8DKp6NlMpwLSGWFAJ4bxsvw5YF4tF3OQFBjAUy%2FaErq2ifaqgEv9prI7uXDjfWueqyEno5%2FBLAZp%2B80Gcp909q8Vzmy3h%2BaQPzmssIV&X-Amz-Signature=327179bad252d2d26ce993cb8949024948e6a6254b1b3604e885d4912025b341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NUEUT3V%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIENj78xeyopjIXRNhzjO7rLdm23JxccVkcpvmEnfVI8lAiAgx9MBYk5pHlDZWlfVBRMcLZAkysm%2B6mlOMH%2BqvTi7DCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMEBoEi%2Bappg3QW5cdKtwD1UwNuoX1X7EKAVEEeyHjBLAgOHB6yAhqu09Ow5s71BsqtXmWwVEhDj%2Fz1S5kcwT6ti85CFB66JJXneOqDwcF9%2FwZoarsoDnGmMRmUQwwwOrqtRhEtYSUbK0bczLdcQO11E8HGtp5rAxKdDJpMG2XbRJl56h1KVI1NikVXh%2B53HkkqZejm86CbenICnvh%2BgWIMsDnjUpjapOdEnDaNnQ%2Foch1L87GY0bOnxjoNLGXkwf0ewWL8KT6iaKNrVsBGmF7C98hWpevJLFEM4tjR5zOjzDqIMNfbB%2FVkJ4DG6V21hOX%2B%2F8aP%2Fe0Aasv%2B7wyDf0rPQMT3PKWk7oEuCqe4SPBXJMe0JoQMTTaM6TO9wbQpOi9C82HAz8exZbYlPmmTe7GhqjgIbQexukcvO3OawDYeSvvyTI6FcfZumS8bzz6V0l%2BfhObuI3whKqHJZozPaCAGFeOIJsiQ96g3OSyfdIJtRZ8Vp06XJY6yA526RwyK2aNCcpVMW%2Bry3qlZyjPfHK4w%2FkNxy%2Bk6HVuTik0%2Fl7R3%2FJ9z0lmJofoLHtCbdnrjjIe0YNPJGtDpswmItq%2BXCg2sOK5epW4As6XBhFM3jwIRkKyXvFxzlUKVT8ULLk5h8MyodH%2FhlaFGEH9o5sw4o2awwY6pgEm%2FWPNg3QcwcUoRkXjph1vNzxy2lOx7v4s8w8lgxwjqLiU1qeBbFhehhKdKN5KUqiB%2FMBg7x%2FJtv3ZQU%2BHxsKqARAA8RN%2FJhdXYW4LB0xbRhROFPS4HsDJz8DKp6NlMpwLSGWFAJ4bxsvw5YF4tF3OQFBjAUy%2FaErq2ifaqgEv9prI7uXDjfWueqyEno5%2FBLAZp%2B80Gcp909q8Vzmy3h%2BaQPzmssIV&X-Amz-Signature=bd5e4a8647f3fdc2e4d55b631982fd193ac7c804e3376c0338ef4cc6282368b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
