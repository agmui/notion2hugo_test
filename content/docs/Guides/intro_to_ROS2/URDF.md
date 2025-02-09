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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQWOSKD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE43Hg9zx62dHRKf4pl7dLAUVjyB8GmXKDkv4p9kFtIAiEA%2BMPPnCLc3TMF%2F4lKa0wYuL2yQ8yruiefcdmIs6JUWcoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp6s8InUbbzYitP3SrcA9TZEaUHzvGjrAW80hZrR%2FqhEj0kPis05BKRJ1UtbGG5le%2B1uxdNMY5nv%2BaWjV5OCGCIje12iuK3eLkrhYt3S9zqe9CPqcTEIzk3JLn2UNf3wyfEtz1kzlODwoh6mLNvH4qG96CwJGHI%2FcNZuAV%2FgDj6FzROmlc9NqSIyjphHGYIRK9oX%2BSP5miKbO%2F6qpzjwwDlTcBYiE9zrbofyc%2FpNAqrvR1VI4iqZrGZ4kuq3gOrFqAdFhml6Es5PTtHl3dIIhdj5pinswuoeQNpY0OxHxiSBLAkciKcZ6z%2Btd0ksNemj696fS2vGTY91v9IJgQR074eMX5Am6AkoK0bmfe8fZZX%2BgI%2F6%2BTpPhn7QQaDrcJEofF0%2BFPuHh5wSHyg4Gh5fLIEPiFaDUSsCmD5%2BBTa%2FCeYjE7112aA8RTYq5IccqcK18B7yzxEZ0wJE2oQ%2F86JCQlj1lyoZWedeNhNv4YNCyixpNq%2ByCM3clswbiRvPJvjDGvzejr7WsRA3r4%2Fl13PiQdK4rNvKBYqF3axkKblOokt2NYxZ6Bx1D2E%2B0eJEsaemlEIHPzLTWGOMo6VxyTB6V7kLaCNgto2lIeI6wj1JbuGidF1PCZnYTpAnrte9uQ4eDoFdE8k3u61OKSYMIHAoL0GOqUBrZd7gfNBGGtgKIjesVfk78Hm3pFCvqb%2BPS6ywXtusYzLcrcEbdveMSpiT5rYpDifQMlEkzXRgnHYDhUIjsy9UKU8P1wqLHZA2MseYUuN3eMPPZ9%2FQXj%2Fauc50bFSlcvypacBmENMej33yNX0Nch2twfQjRtEJ6noYttajVVIpRUUQYE0VNKV3b7fCl5EHNdQqWPhKxzPRZBlv3PBIM9kvKMmyz3%2B&X-Amz-Signature=1ef29f6b7ba979289a88a8e5423cb6efbc43d2fe3293fc19c5f5b120c0a5a63e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQWOSKD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE43Hg9zx62dHRKf4pl7dLAUVjyB8GmXKDkv4p9kFtIAiEA%2BMPPnCLc3TMF%2F4lKa0wYuL2yQ8yruiefcdmIs6JUWcoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBp6s8InUbbzYitP3SrcA9TZEaUHzvGjrAW80hZrR%2FqhEj0kPis05BKRJ1UtbGG5le%2B1uxdNMY5nv%2BaWjV5OCGCIje12iuK3eLkrhYt3S9zqe9CPqcTEIzk3JLn2UNf3wyfEtz1kzlODwoh6mLNvH4qG96CwJGHI%2FcNZuAV%2FgDj6FzROmlc9NqSIyjphHGYIRK9oX%2BSP5miKbO%2F6qpzjwwDlTcBYiE9zrbofyc%2FpNAqrvR1VI4iqZrGZ4kuq3gOrFqAdFhml6Es5PTtHl3dIIhdj5pinswuoeQNpY0OxHxiSBLAkciKcZ6z%2Btd0ksNemj696fS2vGTY91v9IJgQR074eMX5Am6AkoK0bmfe8fZZX%2BgI%2F6%2BTpPhn7QQaDrcJEofF0%2BFPuHh5wSHyg4Gh5fLIEPiFaDUSsCmD5%2BBTa%2FCeYjE7112aA8RTYq5IccqcK18B7yzxEZ0wJE2oQ%2F86JCQlj1lyoZWedeNhNv4YNCyixpNq%2ByCM3clswbiRvPJvjDGvzejr7WsRA3r4%2Fl13PiQdK4rNvKBYqF3axkKblOokt2NYxZ6Bx1D2E%2B0eJEsaemlEIHPzLTWGOMo6VxyTB6V7kLaCNgto2lIeI6wj1JbuGidF1PCZnYTpAnrte9uQ4eDoFdE8k3u61OKSYMIHAoL0GOqUBrZd7gfNBGGtgKIjesVfk78Hm3pFCvqb%2BPS6ywXtusYzLcrcEbdveMSpiT5rYpDifQMlEkzXRgnHYDhUIjsy9UKU8P1wqLHZA2MseYUuN3eMPPZ9%2FQXj%2Fauc50bFSlcvypacBmENMej33yNX0Nch2twfQjRtEJ6noYttajVVIpRUUQYE0VNKV3b7fCl5EHNdQqWPhKxzPRZBlv3PBIM9kvKMmyz3%2B&X-Amz-Signature=46c9e0074051fc937f2f5903dca7638426e7c86d7b8cc4dc410d42e6abc49db4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
