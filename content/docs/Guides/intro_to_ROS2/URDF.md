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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5HBA6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCi9uDeD1K5NY8AtF1Zl6DYsdIS5JO1YKsqKC0qs76ghwIgRBQKsVXZL8d4RycT78QlqKFI0O64UPgGxB6Al4NmW00q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDExxcc7E8%2FPgVu1WJyrcA9DBwthl3DZW3DROv3goVN7kxUH4tlmEDmbndYI1hJTiSps2gcmH7cy19Kypvfg2CUMWMH79BfX5mXKex0oRnRxq4iwlVeHPTZjo9AlH5EFXvpBrLHn2CFuHvhkXYYgvmE8Ou3Yl%2FL2XEnfynn%2B5JHM4gv5n5wDO6N15cTLfcCjZNIZfIC%2FXAmfZRomEFg3LhNvJY2nBETthY85tOg1N7roxmi4IYUX2YuAIpLwm6gwB6GDJlY%2FcivdB7AGwjL9A7xcEkI0qXBbiRdLQ9x72W3GprMeVSNfEbaMmhxoJ3lqqFEzUQtqscgtUtJbcZE61tkqjGXB3LqI5i%2FrU4zs1GCcNAUJAAqbITkg9oHIw3Fi8cQVXPhhxvx66x9wSZqwRt0VtN8LPamD%2FtTAeFEIRULDdk1O3tCQeuxvo8PpDc4Dj9EobbdgW%2Fj9GHYPa3hHpKc116e6MtE6BSzGjw2uH3xnMKHOlwMZizI30zs1XcAgA5wafiRCDM39xbBxX5NMhMHomiGzFc%2FzcEkRi%2FHQ4d6GwIT3D0qiQhHAzfSPsB2tfUBEJT2Kye5szpJDwTBJ370eykb5%2B9BgZrdksGVvRsuCZZ%2F2f6ViZr8xXS3Izy7FBSYY2uybi4z%2BZsAX%2FMJvWksEGOqUBJb6QafW7aBkPbSoxeixR1NNM8z6rqfNcS53UuidsSy%2BrthWqasgpSnQsxw1f8f0f%2BEaw%2BQoANu9dabBZGjcBWmT%2B0EsRLkJ0TEprR9NbAVppeeClF%2F2CLJRDTP1vcJOPjw1ZyyLX9Jyd6%2FQWa0Ojd718ckKa2NdO%2Bg7b0t1OUUW5ebSOSeQqmHw%2BDyQm1%2Fm5fYxy0Gq8NKdSTQcSxaKCzg1c03b7&X-Amz-Signature=cb6b111c44eb81ac41f48ed002ce0e0b87d411a4f4434a5e300879fd0f45bb77&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PH5HBA6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCi9uDeD1K5NY8AtF1Zl6DYsdIS5JO1YKsqKC0qs76ghwIgRBQKsVXZL8d4RycT78QlqKFI0O64UPgGxB6Al4NmW00q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDExxcc7E8%2FPgVu1WJyrcA9DBwthl3DZW3DROv3goVN7kxUH4tlmEDmbndYI1hJTiSps2gcmH7cy19Kypvfg2CUMWMH79BfX5mXKex0oRnRxq4iwlVeHPTZjo9AlH5EFXvpBrLHn2CFuHvhkXYYgvmE8Ou3Yl%2FL2XEnfynn%2B5JHM4gv5n5wDO6N15cTLfcCjZNIZfIC%2FXAmfZRomEFg3LhNvJY2nBETthY85tOg1N7roxmi4IYUX2YuAIpLwm6gwB6GDJlY%2FcivdB7AGwjL9A7xcEkI0qXBbiRdLQ9x72W3GprMeVSNfEbaMmhxoJ3lqqFEzUQtqscgtUtJbcZE61tkqjGXB3LqI5i%2FrU4zs1GCcNAUJAAqbITkg9oHIw3Fi8cQVXPhhxvx66x9wSZqwRt0VtN8LPamD%2FtTAeFEIRULDdk1O3tCQeuxvo8PpDc4Dj9EobbdgW%2Fj9GHYPa3hHpKc116e6MtE6BSzGjw2uH3xnMKHOlwMZizI30zs1XcAgA5wafiRCDM39xbBxX5NMhMHomiGzFc%2FzcEkRi%2FHQ4d6GwIT3D0qiQhHAzfSPsB2tfUBEJT2Kye5szpJDwTBJ370eykb5%2B9BgZrdksGVvRsuCZZ%2F2f6ViZr8xXS3Izy7FBSYY2uybi4z%2BZsAX%2FMJvWksEGOqUBJb6QafW7aBkPbSoxeixR1NNM8z6rqfNcS53UuidsSy%2BrthWqasgpSnQsxw1f8f0f%2BEaw%2BQoANu9dabBZGjcBWmT%2B0EsRLkJ0TEprR9NbAVppeeClF%2F2CLJRDTP1vcJOPjw1ZyyLX9Jyd6%2FQWa0Ojd718ckKa2NdO%2Bg7b0t1OUUW5ebSOSeQqmHw%2BDyQm1%2Fm5fYxy0Gq8NKdSTQcSxaKCzg1c03b7&X-Amz-Signature=802041b1f1d2512afd34d1fe94456f0ee7bd155325ce10b29fbca4036d41e20d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
