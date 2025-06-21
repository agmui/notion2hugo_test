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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEOVE52%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkuDQJdkAb%2B0OqPpypyAG0SHGjn%2F7EFYke23pFmnLHSgIhAOj7Nd0a38E1GcPIIo8xFeo9VWfaDSp5qQstZFz5lyDUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B%2FbhAknYDmxbA1dAq3APIOt2LlBOxQqX6oWnFfWdgRH9srddvuudZBGI36x0QjIxGGv7So%2FcMA2wJIRAfCx6TFAyOXaiID3i6OxSma6fajohhJnvEYQMKSPxe9LkAvpJfoUuGF8g6F64rmQWj5tzAT1qp5emkQmtlJYjvnLeQ9BnUj3LGX%2FTPpzx%2FnVoivjbR00hmJv9llrdc4w2yZQYI2WmHiZQ0g50sN4ogoWpLEUx30XUQE0AC8ZYPtvvlC2aTuReK22EKtnUyBALTL7aI%2BkCEhDI7reT92aYMlRrLfH2Yzs6CzAQV%2B3nmT4aWuib2gp2minpHFPlsemCTKeknQqsySC6%2Bfpcw5PLOyEyvYFIfe3%2Bk1gUejqy6gKqZAmO%2FWGbZziqH175mNPNgTCvK1hzAzNxs07ciKpXu6aIxfrcsHhOxsuPNul2oKOPYbeoHRdrGynWyBr7KVTTSw5dNf6YpkvFuMbQhP31TL2HWfz5JjuMyraDUsVhHxOlQelQJlE1FXXbXRhRbftEi4FbhcF6svqxfVg%2BxP55%2BeYUGQCu3dGDOaoMMiPEzw640xcJaHYCuQ42eahDOVaETx1Z0u6df8k0Gs%2B1eKxHVXUo2xawwQjaHoKHls6AQ4zz7odBGsgOfqPAZCDxKNDDfr9zCBjqkAY6suGwLdy8CMg%2BAV06NPHtxmMuvFABHPIdbCJU%2F2DeI%2F3rNAANtY%2Bsj77owLk10BXBtVzCDUhVWvbAppJ3jZa1pEkvurcq%2Br9k16%2Bv1wv7w20mfyn1fgR03D2I95P6LH%2B%2FCcM54mgx6ebtAGVzU742ZIimJsrHOp6KVLJTgP406%2F30VpqOcNTmuaaHdMLiYMiNhTkOYnGlK%2FuQEuAa6qB4ZFDjQ&X-Amz-Signature=3c76c2727a7f27a03c66304ac15e013165cdb766a1fc95c364ff13ffc2e83d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VEOVE52%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkuDQJdkAb%2B0OqPpypyAG0SHGjn%2F7EFYke23pFmnLHSgIhAOj7Nd0a38E1GcPIIo8xFeo9VWfaDSp5qQstZFz5lyDUKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B%2FbhAknYDmxbA1dAq3APIOt2LlBOxQqX6oWnFfWdgRH9srddvuudZBGI36x0QjIxGGv7So%2FcMA2wJIRAfCx6TFAyOXaiID3i6OxSma6fajohhJnvEYQMKSPxe9LkAvpJfoUuGF8g6F64rmQWj5tzAT1qp5emkQmtlJYjvnLeQ9BnUj3LGX%2FTPpzx%2FnVoivjbR00hmJv9llrdc4w2yZQYI2WmHiZQ0g50sN4ogoWpLEUx30XUQE0AC8ZYPtvvlC2aTuReK22EKtnUyBALTL7aI%2BkCEhDI7reT92aYMlRrLfH2Yzs6CzAQV%2B3nmT4aWuib2gp2minpHFPlsemCTKeknQqsySC6%2Bfpcw5PLOyEyvYFIfe3%2Bk1gUejqy6gKqZAmO%2FWGbZziqH175mNPNgTCvK1hzAzNxs07ciKpXu6aIxfrcsHhOxsuPNul2oKOPYbeoHRdrGynWyBr7KVTTSw5dNf6YpkvFuMbQhP31TL2HWfz5JjuMyraDUsVhHxOlQelQJlE1FXXbXRhRbftEi4FbhcF6svqxfVg%2BxP55%2BeYUGQCu3dGDOaoMMiPEzw640xcJaHYCuQ42eahDOVaETx1Z0u6df8k0Gs%2B1eKxHVXUo2xawwQjaHoKHls6AQ4zz7odBGsgOfqPAZCDxKNDDfr9zCBjqkAY6suGwLdy8CMg%2BAV06NPHtxmMuvFABHPIdbCJU%2F2DeI%2F3rNAANtY%2Bsj77owLk10BXBtVzCDUhVWvbAppJ3jZa1pEkvurcq%2Br9k16%2Bv1wv7w20mfyn1fgR03D2I95P6LH%2B%2FCcM54mgx6ebtAGVzU742ZIimJsrHOp6KVLJTgP406%2F30VpqOcNTmuaaHdMLiYMiNhTkOYnGlK%2FuQEuAa6qB4ZFDjQ&X-Amz-Signature=27e42428f4005658f8f3f6926b3997966f0797f502eb8fec2dbc3c30ba8dd30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
