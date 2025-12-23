---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEUP3NY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDt9JoAdx%2BgWfnUs5C7zocYjmCSSIMkGf79vLLAyWHgPAIhAP9kXZfOf7Pf1XqQWoOCR8RZIvbZxLg5ftPsc1JPqe7QKv8DCAMQABoMNjM3NDIzMTgzODA1IgyhjVufmKXisH4GF50q3ANTrhhJ1PE20N2oN%2BqUoi5nIhH8WcAGzlvBH%2FRERBQH639oM832YQ2E1Fnk7q3wLPVZNQz2xjrmkd%2FA8dvXbM%2F7emZLZJSJL9qfIlZ6uQHAklwTSnO63DCkmHtzObdAQ%2BXKT8p%2B2R5CdiKnTwJjZC69yAk9gA%2FJuNHjPxOcJzSjISXb7au58UfxHpEp8My%2BDn6MINC1EolSbMxIsXJxSnv%2FsCCCGnJg9r5X%2Bh1HZ548i0%2B%2B8Fh75ca5cXdGSTbWPKZpxNOfG8fiZpk2Rfk0dXzOcSXSpxcSjvJWgVOh7i00D2058y5xRVtVzWG6vlaIJ3ti60%2Bni6Heb03dMFYO6aH%2FCwMGTRU8REvoGPmnSXGAVGyGgwn%2Fytu1t7cwS2vx61E%2B82kUe8UcDsp5BTsC3w7JhBk8pRzHyO3KXz43Fgv8U6u8ca9sTnAWBloG3BrKAeZas9KaoctoicpmcA4svbzumsf7Z7pxlCST5v3heV82N0a9hvKAqRYURBBnnIO1ugvVyz%2FXuGqyj1uDvrxJtped6W%2BelFgnWpIaYlyTDffAxpDWTr5fLzgfqe3tNQIlVPDIKNwh5LJybIm2ARAGDi253sYknqitlyEXLz7xTrNagZKO8Sx4ekFHu4Si5jD%2B36fKBjqkAQ1zrcuD5iX55D9Ua5bCx5v%2Bs5tY%2B877Kcdrvxrfum%2FBBibDB2tAL6DGS7DxBDbpbHiUwLN83F4x%2BOairV2YWzzKKERtXtR0MpRRnrqXHfsFH0krBwv2YqYqRK%2F3QUQJaOdzY8ojlWG5Bcfk6YowlTizwHIk7J0SHHiaphSJKBdoU2csIXQB3FrjnO21Ad8gIP1r%2FJRh34KAYycyRN7KjypTy1mM&X-Amz-Signature=8b70fd4a21e52bb58bd74a5f577ff6dcbeea3a03727d395e9ebc9c0d545f84a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DEUP3NY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDt9JoAdx%2BgWfnUs5C7zocYjmCSSIMkGf79vLLAyWHgPAIhAP9kXZfOf7Pf1XqQWoOCR8RZIvbZxLg5ftPsc1JPqe7QKv8DCAMQABoMNjM3NDIzMTgzODA1IgyhjVufmKXisH4GF50q3ANTrhhJ1PE20N2oN%2BqUoi5nIhH8WcAGzlvBH%2FRERBQH639oM832YQ2E1Fnk7q3wLPVZNQz2xjrmkd%2FA8dvXbM%2F7emZLZJSJL9qfIlZ6uQHAklwTSnO63DCkmHtzObdAQ%2BXKT8p%2B2R5CdiKnTwJjZC69yAk9gA%2FJuNHjPxOcJzSjISXb7au58UfxHpEp8My%2BDn6MINC1EolSbMxIsXJxSnv%2FsCCCGnJg9r5X%2Bh1HZ548i0%2B%2B8Fh75ca5cXdGSTbWPKZpxNOfG8fiZpk2Rfk0dXzOcSXSpxcSjvJWgVOh7i00D2058y5xRVtVzWG6vlaIJ3ti60%2Bni6Heb03dMFYO6aH%2FCwMGTRU8REvoGPmnSXGAVGyGgwn%2Fytu1t7cwS2vx61E%2B82kUe8UcDsp5BTsC3w7JhBk8pRzHyO3KXz43Fgv8U6u8ca9sTnAWBloG3BrKAeZas9KaoctoicpmcA4svbzumsf7Z7pxlCST5v3heV82N0a9hvKAqRYURBBnnIO1ugvVyz%2FXuGqyj1uDvrxJtped6W%2BelFgnWpIaYlyTDffAxpDWTr5fLzgfqe3tNQIlVPDIKNwh5LJybIm2ARAGDi253sYknqitlyEXLz7xTrNagZKO8Sx4ekFHu4Si5jD%2B36fKBjqkAQ1zrcuD5iX55D9Ua5bCx5v%2Bs5tY%2B877Kcdrvxrfum%2FBBibDB2tAL6DGS7DxBDbpbHiUwLN83F4x%2BOairV2YWzzKKERtXtR0MpRRnrqXHfsFH0krBwv2YqYqRK%2F3QUQJaOdzY8ojlWG5Bcfk6YowlTizwHIk7J0SHHiaphSJKBdoU2csIXQB3FrjnO21Ad8gIP1r%2FJRh34KAYycyRN7KjypTy1mM&X-Amz-Signature=904328ced089491572a9c1cb49c2d5099fc1004d29b98247a942c421e09fd9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
