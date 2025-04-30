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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRI455EY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDjZfK3leqKelsi02FgLhmqRGcZi12kh1y2l7b8t%2FSf8AIgZwf5SBaLlcWy6XD5Nxxeu16MZDeHigawX6FN9iXzdNsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA7ED8NdpMo15OcESrcA64xU4SrTw5pR4SBJjuE5OOenuVBPYzRSpAw5FA36%2BysXWF%2BgcAY73oaJKbaTn3AijqesoZutwBkKoCyxJu1b%2FgcvBUeoaIjUKqdfDlceBdMQFMuy7JdXbOsZVfgUz2i8jftQqS2UFexW1UKVF7BINhWY8H7cn%2BYgKcfZ5P7XbPxytE9iP4LcJCCVnheUKX9J6JvMtYWcAVv3e4xZ5g%2FIYXEGXFnaMFR77qrihbGtbDwHpRvU15wvL%2B55ZGZuqrW4QpVTy2is9wXEUfhSW77%2FkPLhrJi%2BeVWVNP2QNFY%2BGrQGcbuT4TRepigZEVkuaGgwSunmATrtSNG9wrs%2BgHp9UQzV%2F%2B%2Fd1WiYC3KPn1L2N0L4TmPR%2F762WWu2vNl12HWQ9uJapPhYJOyElok80kn2S89gqM5UU8OfHeOd3P1JeknA8GIqwHIgH%2BokJEzQITsUJ9ODoi1ZqwT3%2Bu5XuFfvKuLtiZpE6vrwAmk4xI%2FCeY9qVQj1wBgOEKvrMAOOjK%2FdjS1QLl2AotD93Qt%2BAXzCjvqnNEBv79pJDEmmcRK43smIEApBBjvnE3DTw7KSsI2nMV6hpvXn6Ov3uLfrmr8%2F6lJyHdVd6%2Bcj0%2BaqjFFHAgJO96ukajnk9NDxdOkML%2FPx8AGOqUBf6iOdY0MBcB2KM6QAFuM4WD740CtJ%2BOMknBe7NRlyzYuJ9fEAdNZDnme9q%2FKsPpGIWy%2Fs2HC6F22cLgleQaW6GBzJAc%2BXLtkX4uuoLurgdqsjsFRwam9JJAdrJoBDMM7yxStMafaMOAlDH95lJ2YGR5WHP7A8t%2BtW97YzzS8cX2QTd9TalhQihxbN%2BGLvhFNc0voHQX%2FfHiOOYwwLeDLMXAjcxqF&X-Amz-Signature=b9c1097c127a0a8ecf674984bba6504275ef6c528e68d9d8f1fa6c0475200f33&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRI455EY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDjZfK3leqKelsi02FgLhmqRGcZi12kh1y2l7b8t%2FSf8AIgZwf5SBaLlcWy6XD5Nxxeu16MZDeHigawX6FN9iXzdNsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJA7ED8NdpMo15OcESrcA64xU4SrTw5pR4SBJjuE5OOenuVBPYzRSpAw5FA36%2BysXWF%2BgcAY73oaJKbaTn3AijqesoZutwBkKoCyxJu1b%2FgcvBUeoaIjUKqdfDlceBdMQFMuy7JdXbOsZVfgUz2i8jftQqS2UFexW1UKVF7BINhWY8H7cn%2BYgKcfZ5P7XbPxytE9iP4LcJCCVnheUKX9J6JvMtYWcAVv3e4xZ5g%2FIYXEGXFnaMFR77qrihbGtbDwHpRvU15wvL%2B55ZGZuqrW4QpVTy2is9wXEUfhSW77%2FkPLhrJi%2BeVWVNP2QNFY%2BGrQGcbuT4TRepigZEVkuaGgwSunmATrtSNG9wrs%2BgHp9UQzV%2F%2B%2Fd1WiYC3KPn1L2N0L4TmPR%2F762WWu2vNl12HWQ9uJapPhYJOyElok80kn2S89gqM5UU8OfHeOd3P1JeknA8GIqwHIgH%2BokJEzQITsUJ9ODoi1ZqwT3%2Bu5XuFfvKuLtiZpE6vrwAmk4xI%2FCeY9qVQj1wBgOEKvrMAOOjK%2FdjS1QLl2AotD93Qt%2BAXzCjvqnNEBv79pJDEmmcRK43smIEApBBjvnE3DTw7KSsI2nMV6hpvXn6Ov3uLfrmr8%2F6lJyHdVd6%2Bcj0%2BaqjFFHAgJO96ukajnk9NDxdOkML%2FPx8AGOqUBf6iOdY0MBcB2KM6QAFuM4WD740CtJ%2BOMknBe7NRlyzYuJ9fEAdNZDnme9q%2FKsPpGIWy%2Fs2HC6F22cLgleQaW6GBzJAc%2BXLtkX4uuoLurgdqsjsFRwam9JJAdrJoBDMM7yxStMafaMOAlDH95lJ2YGR5WHP7A8t%2BtW97YzzS8cX2QTd9TalhQihxbN%2BGLvhFNc0voHQX%2FfHiOOYwwLeDLMXAjcxqF&X-Amz-Signature=97db7f1019efe987cdadb2a05a28f4c80d1d55c64608b7a4d819c7c96be2151b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
