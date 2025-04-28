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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4FBSNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK0NAxCyAvhyckSurh%2F55UjV7%2FaloORNx3BRC%2BzLUpKQIgPZ1gm6DAEZiG%2F94tFA9ihg9VatM5aU2%2FU0TE4Um%2BAXEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPiYgahL5iY4pOJ2IyrcA6cjVcc6EjU3YOOs5xrVrRGrYd8L1Lw%2FFQygqRxz%2FS3o2E3jrDH2LQ0opKYkQcOaCuIAs2fCxWFr0eVD%2BsNjIh2%2BW1l%2BBmNLZcuQ9wXOUVPqlNaJTb1oxkQuuuvXp0W5SzfJYXIGKcNtzr12KNfU0yvI8RB5d%2F%2BXfiDOcFi%2BnhwbtLy%2FdHBrteQuRUFNP3FDe1PSlf2DmQmEz%2Bch4nHVkVBFgG5dhcAmtnWuLiLGG5gn2SjIM9oBBVQv3PTFP8%2FQgN6xVmgJ5Tqvw%2BLQou80PFMgNJ9Kqy3h2dH%2BuE3QAEt%2Fye6JdAIo%2Bc3fOLueO7Lo2nhSUl0m3hD2sO6zW4UCXhRxWUMO3b4sZnEzJTj9bWieU2azWFqfRGR%2BcWmlbTcj3YUco0NwOSf7Ngw0nPtC3eFnDnkeqYitkjd%2BlRjArNr0pytvcWbR%2FEsb3HwpeFw%2F5GotCQvtAtWqyFUryKVrJFJu%2FtPJesBOjGGV0EaAHcZjgZmVE1HA99txGmDHc3MiWkzCaLnb71hdlfTYbz5mXpS6EXrXbrVld72hRzQrbkSlXsg73T762C9kf%2Fh%2FXr7lVCkc9hgZWgKq01T2Y%2B%2BtfDLoC2mQ7sSYBytFDBFrj%2BsaL9DOkqG6NIeLBEWFMOG3v8AGOqUBb6jFxoG73xxHHj5vDq%2FRfm%2FVZufjxm1ZFzaY1ex4CSom%2FxGmP84LuDRrstpt9JOD1OivA9MdXxNfuslfd%2BfCNs84n0DdfGYC842QpBlIUGIGnOyVylfztN7u7ZjC%2BAdTL1OQ12IL6fydDz84VWED2rYql4X%2Fcw4fE1i27YsmhLos0L6zVoujAiL%2F9%2BU4Dy1K%2FGGr5pMcU3cw%2FiD41UewrSlAJcHQ&X-Amz-Signature=9f21b832799fbc7f1373c10c479f13d961436daab1f8f16901055e7cbb0f30b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4FBSNN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK0NAxCyAvhyckSurh%2F55UjV7%2FaloORNx3BRC%2BzLUpKQIgPZ1gm6DAEZiG%2F94tFA9ihg9VatM5aU2%2FU0TE4Um%2BAXEq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDPiYgahL5iY4pOJ2IyrcA6cjVcc6EjU3YOOs5xrVrRGrYd8L1Lw%2FFQygqRxz%2FS3o2E3jrDH2LQ0opKYkQcOaCuIAs2fCxWFr0eVD%2BsNjIh2%2BW1l%2BBmNLZcuQ9wXOUVPqlNaJTb1oxkQuuuvXp0W5SzfJYXIGKcNtzr12KNfU0yvI8RB5d%2F%2BXfiDOcFi%2BnhwbtLy%2FdHBrteQuRUFNP3FDe1PSlf2DmQmEz%2Bch4nHVkVBFgG5dhcAmtnWuLiLGG5gn2SjIM9oBBVQv3PTFP8%2FQgN6xVmgJ5Tqvw%2BLQou80PFMgNJ9Kqy3h2dH%2BuE3QAEt%2Fye6JdAIo%2Bc3fOLueO7Lo2nhSUl0m3hD2sO6zW4UCXhRxWUMO3b4sZnEzJTj9bWieU2azWFqfRGR%2BcWmlbTcj3YUco0NwOSf7Ngw0nPtC3eFnDnkeqYitkjd%2BlRjArNr0pytvcWbR%2FEsb3HwpeFw%2F5GotCQvtAtWqyFUryKVrJFJu%2FtPJesBOjGGV0EaAHcZjgZmVE1HA99txGmDHc3MiWkzCaLnb71hdlfTYbz5mXpS6EXrXbrVld72hRzQrbkSlXsg73T762C9kf%2Fh%2FXr7lVCkc9hgZWgKq01T2Y%2B%2BtfDLoC2mQ7sSYBytFDBFrj%2BsaL9DOkqG6NIeLBEWFMOG3v8AGOqUBb6jFxoG73xxHHj5vDq%2FRfm%2FVZufjxm1ZFzaY1ex4CSom%2FxGmP84LuDRrstpt9JOD1OivA9MdXxNfuslfd%2BfCNs84n0DdfGYC842QpBlIUGIGnOyVylfztN7u7ZjC%2BAdTL1OQ12IL6fydDz84VWED2rYql4X%2Fcw4fE1i27YsmhLos0L6zVoujAiL%2F9%2BU4Dy1K%2FGGr5pMcU3cw%2FiD41UewrSlAJcHQ&X-Amz-Signature=58cfd1bf70054a774e780fd2a4dbd9a3d7eece9fc9e39a05d9a47f9859f7c5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
