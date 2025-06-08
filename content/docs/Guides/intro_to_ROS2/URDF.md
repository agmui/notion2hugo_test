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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYM7EYNU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYDmylgInIdRX40kRP2%2Bm21x9hHTUbKtlhFVDZrTJdjAiBogWSIyjHpdXAMvcSQgk6kBRhbo%2BTehmkKDWdlPXJy%2BSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxfF0NB2KvRl6Tl%2FjKtwD4EKpAt0fgyIxLENwiRzAG6XW%2BFq%2FwvtJGBWeSpeoKP5ndKZziZNyqlafbTGJY7nlrVAiRC7NBOaHAHJvgN1%2F7SqmlHk%2B%2Fx6A%2BgBfTILQdvtDMjVMRpPyuDFGNYkgD6Cmi3xTSV7TLJeXxj29xD%2BiCKLPTaQgRXLpBxRhTzH3g%2F1BrHTh9DbFCCNc%2FHJ%2FIg20%2FesSO8Fx5tubRjgXoKUro%2B0prsF4j%2BliF7TPWcvZLP1S70E007Du8YKo%2Bs%2B%2FC%2FCDAWxEAZ5BvYkZ1XpV32urf7%2Bxu5ixm0quuKw1tlDZtuaUnxemarviv%2BcwDs%2FR0L%2BrN%2Bm2bKb8P9RtJOB0mwyZ3nH9260tgKCiDEOl44hJj5ni62p2Xta0FGHo6UR6QgV%2F1dciTF8xLzfJThXj8NxqbmyBFRUiEdAK47hEcVtjYw4icqqejmUXmhliXa237zb%2F%2Bn6NW3dTW5DfO81Z6z0ryIYYTtu4JV%2BXtwRfdeu4yGX0AgLUl51%2FVY6oLVG32KBZKkCaVgbN7hxSMdvKLPVlRsSTPpc0Jp9UtgKE3hl58Dqic6Pwh0sXKzWW258YNaKmYSSxMs0dvBlfu%2FjjV%2Fk1yP0F9BRQV0bLWSfIocl4nCu2F7tgGr8Ib78dg9kwoLOWwgY6pgHwR6oiFhGbXWi%2Bo1z6YpfkW84B2jNVa79WoGuPjlNWMTFWMg%2Fc%2BRADaTk53RdgbeeZFPFqtEXRb2yPrVMT40N6nvFW4BYneZQ%2BbCcZ4G5AQrc7boJLNuZm3%2FOB0ZDlXQf4UwrglOUgXaoczVw7Qqg0biizalpBfIi269xfvEcL7Z8qtB1tiIks0BaXjtPlhrWbOPli5Uw%2B3pED7CNJIKEveAh1kOzs&X-Amz-Signature=d71d860baa00e7d672356d265f395d08f9f0d2c70d24eee2be50fd2311675c10&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYM7EYNU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYDmylgInIdRX40kRP2%2Bm21x9hHTUbKtlhFVDZrTJdjAiBogWSIyjHpdXAMvcSQgk6kBRhbo%2BTehmkKDWdlPXJy%2BSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxfF0NB2KvRl6Tl%2FjKtwD4EKpAt0fgyIxLENwiRzAG6XW%2BFq%2FwvtJGBWeSpeoKP5ndKZziZNyqlafbTGJY7nlrVAiRC7NBOaHAHJvgN1%2F7SqmlHk%2B%2Fx6A%2BgBfTILQdvtDMjVMRpPyuDFGNYkgD6Cmi3xTSV7TLJeXxj29xD%2BiCKLPTaQgRXLpBxRhTzH3g%2F1BrHTh9DbFCCNc%2FHJ%2FIg20%2FesSO8Fx5tubRjgXoKUro%2B0prsF4j%2BliF7TPWcvZLP1S70E007Du8YKo%2Bs%2B%2FC%2FCDAWxEAZ5BvYkZ1XpV32urf7%2Bxu5ixm0quuKw1tlDZtuaUnxemarviv%2BcwDs%2FR0L%2BrN%2Bm2bKb8P9RtJOB0mwyZ3nH9260tgKCiDEOl44hJj5ni62p2Xta0FGHo6UR6QgV%2F1dciTF8xLzfJThXj8NxqbmyBFRUiEdAK47hEcVtjYw4icqqejmUXmhliXa237zb%2F%2Bn6NW3dTW5DfO81Z6z0ryIYYTtu4JV%2BXtwRfdeu4yGX0AgLUl51%2FVY6oLVG32KBZKkCaVgbN7hxSMdvKLPVlRsSTPpc0Jp9UtgKE3hl58Dqic6Pwh0sXKzWW258YNaKmYSSxMs0dvBlfu%2FjjV%2Fk1yP0F9BRQV0bLWSfIocl4nCu2F7tgGr8Ib78dg9kwoLOWwgY6pgHwR6oiFhGbXWi%2Bo1z6YpfkW84B2jNVa79WoGuPjlNWMTFWMg%2Fc%2BRADaTk53RdgbeeZFPFqtEXRb2yPrVMT40N6nvFW4BYneZQ%2BbCcZ4G5AQrc7boJLNuZm3%2FOB0ZDlXQf4UwrglOUgXaoczVw7Qqg0biizalpBfIi269xfvEcL7Z8qtB1tiIks0BaXjtPlhrWbOPli5Uw%2B3pED7CNJIKEveAh1kOzs&X-Amz-Signature=2ac40a76deff7bdd30562f33147b4b5543f0c07da2d24db0ab14ff9ddbee6d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
