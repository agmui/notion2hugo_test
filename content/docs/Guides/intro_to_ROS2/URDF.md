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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPVCXH3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX3DNwSpBMawhwcddKn%2BQm0yUwLaFHkH1PSPIQ11veaQIhAMre5l7TFgi8eClp6%2F2twsNnATV2E3Ge1zEW%2BFyfCvSaKv8DCGQQABoMNjM3NDIzMTgzODA1IgyBuChM4Ac%2BcdR7pm8q3APZbska89BsmP%2F3quhzDIuX743aWYlEZiwUQq%2FeXP0uf25fBlFP8Mh7UBIr1I3YVDNwp7Mg16vdh7Xw6ZZRtbQVyoO%2BCcD9iL6aWia41FR29OS5pFXXCEdYIFYeMZX%2BlBqcl%2BzDZpvq4eZKUoHuqB5ApqYgnzG1U%2BhofqFEIZ4BUb7nu96dXRyP5ulepagR%2FRhIqEi6Fb2Q8h8hgcoIyWErCK79PgzKAoUpYqUHaV4EYrnRFX9JOQkhdJe%2FbsOcrKiWowvJ7n7sevEUs3XNNB9SOiwSKsUq5LC2%2F36Z8TLJM%2Bp6SdMwgDHZF1T570JAHxkK%2FtisiDVo7FSSrjKhzrhkhkBpsYs2%2BbA4bbOLQOq5kfvvzvcumVWWfEtCEHZ%2F5UThMc0X30c7wuhHVMtmAXJUmOX%2BPjMwPj%2F3KFMFF3X%2Fiuyf6%2FFIYTZlLLiCBWeo5o6beTRjBFUxkD%2FL7O0gX2Q%2BTIOiqTT6OftP8aaNDOba6Kzc0qaXTOLzfiklefxTYjjGiSWB7nKBkw5eH1JwVaCAg7qMm22xDyEXq8KdUZCXPuYXyBofoesFvWQen8MI7xJYF9IPSmJkqVxUIWD6Y8xS8RVJxoaB8rKnelXTqG1rqInNFLWROOoE1dPb9TDs2Zu%2FBjqkARl2NpbY83iqHwq1II7ygn4kie2NdNssS4QZ7qM6YQg%2F%2FpkzMTFlDREWckX1XgZV8tWdxuBI9fgx2fi3DC%2BCpIv6DGDoHdQEEBXiR7JoqyNcsG9A%2B0WqaaptfwS3Bpb27hgLHA7MiBkBuU1Pp%2BAItbbdLIddCydax5YEKanx72UTkadjgNWfdOuq1Mg%2BXAbnSBRjCAtcGQ4cRASW3BnXvtf2ZJza&X-Amz-Signature=b97892acced86d132ad40ed252f42806f9e71f6b07ea3a11fc5abd11c4900e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPVCXH3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX3DNwSpBMawhwcddKn%2BQm0yUwLaFHkH1PSPIQ11veaQIhAMre5l7TFgi8eClp6%2F2twsNnATV2E3Ge1zEW%2BFyfCvSaKv8DCGQQABoMNjM3NDIzMTgzODA1IgyBuChM4Ac%2BcdR7pm8q3APZbska89BsmP%2F3quhzDIuX743aWYlEZiwUQq%2FeXP0uf25fBlFP8Mh7UBIr1I3YVDNwp7Mg16vdh7Xw6ZZRtbQVyoO%2BCcD9iL6aWia41FR29OS5pFXXCEdYIFYeMZX%2BlBqcl%2BzDZpvq4eZKUoHuqB5ApqYgnzG1U%2BhofqFEIZ4BUb7nu96dXRyP5ulepagR%2FRhIqEi6Fb2Q8h8hgcoIyWErCK79PgzKAoUpYqUHaV4EYrnRFX9JOQkhdJe%2FbsOcrKiWowvJ7n7sevEUs3XNNB9SOiwSKsUq5LC2%2F36Z8TLJM%2Bp6SdMwgDHZF1T570JAHxkK%2FtisiDVo7FSSrjKhzrhkhkBpsYs2%2BbA4bbOLQOq5kfvvzvcumVWWfEtCEHZ%2F5UThMc0X30c7wuhHVMtmAXJUmOX%2BPjMwPj%2F3KFMFF3X%2Fiuyf6%2FFIYTZlLLiCBWeo5o6beTRjBFUxkD%2FL7O0gX2Q%2BTIOiqTT6OftP8aaNDOba6Kzc0qaXTOLzfiklefxTYjjGiSWB7nKBkw5eH1JwVaCAg7qMm22xDyEXq8KdUZCXPuYXyBofoesFvWQen8MI7xJYF9IPSmJkqVxUIWD6Y8xS8RVJxoaB8rKnelXTqG1rqInNFLWROOoE1dPb9TDs2Zu%2FBjqkARl2NpbY83iqHwq1II7ygn4kie2NdNssS4QZ7qM6YQg%2F%2FpkzMTFlDREWckX1XgZV8tWdxuBI9fgx2fi3DC%2BCpIv6DGDoHdQEEBXiR7JoqyNcsG9A%2B0WqaaptfwS3Bpb27hgLHA7MiBkBuU1Pp%2BAItbbdLIddCydax5YEKanx72UTkadjgNWfdOuq1Mg%2BXAbnSBRjCAtcGQ4cRASW3BnXvtf2ZJza&X-Amz-Signature=90bde67c0cbbcf37634d7a87bba61cef94632c18b7243a4ebd9b1f064893679d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
