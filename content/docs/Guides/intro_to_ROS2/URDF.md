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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TGEZR3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAwY2h6ej%2FP1oUHReC27%2F7jKOMoIvPjtNM5UpzI1iBvgIhAKQvBt6JzGCDxz92Prhqw31GZKTMZI0GTPiSJyugV5BpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwv%2FG3DUEUYniU4M34q3ANc40KVG99r3NEFePg%2Bh4lZEMV3uRbPcZsbiImMoLhJuZIA5u%2FBAy%2BBii7EAgmje0xPJpoMFPVfWQyAg5Lt5R2uBZmd%2FXMR%2F0VzQmPblovV9hb4b%2FFiFyIsg3X9hIIAkbGbrPVkgHKLpEizb6T6HuU27dOTyoziy4OaFhVOrrqN7Glu0hwuegDkr26QtY5CSOiZUFU1pEW4EB4JmLCFAucAybuNJZ61ZUfK6K6vBzGw4w81eIf2%2Fe7H7Ujpl88rpBjDC%2BZ%2BS9GaQbU1WWvvdAk53mQtFg43xQNlWAsLv%2B5kuDbKHSCo7h49InhB7Jxh%2BIT70%2FiQZzowCdqZTBufsxIjmIkwqNmqu3eZpUVWLdV0A6iMgWKk6Dez%2Bc7%2F2LZW%2FldLS%2BXVbE%2F9HuwLrsjQgpq%2FjHUEkekTvJ6Lx54gfycqQoWmI1X0xzP%2BemdbS3NOqUioP3t9mE9bTlsFzIQLXVxyW5JDvs4932G9BjauP8Vwu7yBtCWirk82tIvnB0plrvskagz68n5YZh%2FdZuISvoxZSpuHyLoav8EBrwVBI3lwN9HCKIBCoWf0WTIkQ%2Fz24W3i%2FoXhI3tMvlDapU9BZzlCXgmh6KE8G%2BhL9TGKo1AqSG52yKaMEoErAfNmdTD7gZHABjqkAR3q%2FrA1yT1W55bKEjPHnQLohpBNvHoffL6sDEeP%2BDpJiRUaUWTdsoy6Geknx0VOkwR9817fB5kq5Q%2BeEYYKKuIEizX3%2F8FrJ2zQa25LzJY4Rrn1ZIXCDYlTbPINn0VlHkUkYQ7EHr7zshBK1mM67GKYpzQPDNK4qrDNU6MwuGrVnbtIgVo64uoxuhKKqUd0tgGyIn2%2BPc8wsmsYXVqRr%2B9jnaT7&X-Amz-Signature=508302ce95968318022810577ad0f1b51c304a73faea6dac3df467d35b35bb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TGEZR3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDAwY2h6ej%2FP1oUHReC27%2F7jKOMoIvPjtNM5UpzI1iBvgIhAKQvBt6JzGCDxz92Prhqw31GZKTMZI0GTPiSJyugV5BpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwv%2FG3DUEUYniU4M34q3ANc40KVG99r3NEFePg%2Bh4lZEMV3uRbPcZsbiImMoLhJuZIA5u%2FBAy%2BBii7EAgmje0xPJpoMFPVfWQyAg5Lt5R2uBZmd%2FXMR%2F0VzQmPblovV9hb4b%2FFiFyIsg3X9hIIAkbGbrPVkgHKLpEizb6T6HuU27dOTyoziy4OaFhVOrrqN7Glu0hwuegDkr26QtY5CSOiZUFU1pEW4EB4JmLCFAucAybuNJZ61ZUfK6K6vBzGw4w81eIf2%2Fe7H7Ujpl88rpBjDC%2BZ%2BS9GaQbU1WWvvdAk53mQtFg43xQNlWAsLv%2B5kuDbKHSCo7h49InhB7Jxh%2BIT70%2FiQZzowCdqZTBufsxIjmIkwqNmqu3eZpUVWLdV0A6iMgWKk6Dez%2Bc7%2F2LZW%2FldLS%2BXVbE%2F9HuwLrsjQgpq%2FjHUEkekTvJ6Lx54gfycqQoWmI1X0xzP%2BemdbS3NOqUioP3t9mE9bTlsFzIQLXVxyW5JDvs4932G9BjauP8Vwu7yBtCWirk82tIvnB0plrvskagz68n5YZh%2FdZuISvoxZSpuHyLoav8EBrwVBI3lwN9HCKIBCoWf0WTIkQ%2Fz24W3i%2FoXhI3tMvlDapU9BZzlCXgmh6KE8G%2BhL9TGKo1AqSG52yKaMEoErAfNmdTD7gZHABjqkAR3q%2FrA1yT1W55bKEjPHnQLohpBNvHoffL6sDEeP%2BDpJiRUaUWTdsoy6Geknx0VOkwR9817fB5kq5Q%2BeEYYKKuIEizX3%2F8FrJ2zQa25LzJY4Rrn1ZIXCDYlTbPINn0VlHkUkYQ7EHr7zshBK1mM67GKYpzQPDNK4qrDNU6MwuGrVnbtIgVo64uoxuhKKqUd0tgGyIn2%2BPc8wsmsYXVqRr%2B9jnaT7&X-Amz-Signature=bb1f16367a8b5a02369667253f15085b2a06ecd7c6a9581839ffc8999b4646fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
