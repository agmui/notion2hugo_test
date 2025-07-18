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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JONQKGL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBzMoLvudaU7lbbzZYaeNJ2yengX7x3x8FFD%2BmofFxLXAiEA2KDsw62omWK4f2ezwzz9tvXLtPsNtA%2Ftp15YXN8coE4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNghxdzLocDD2JNhyrcA1cu3wctGqywbRLBcT%2BjGCf4kdjCQRr%2FoplLOBy8XpqWwkAGvEaf7DalPv%2F5zDKLjsGkOpomogknGAi2l0o3Ast1twEvXPkwW9M6N56DgswYwLauvikWQ340Pa%2Fec4l2VzWwi6s%2BB6%2FDsOsNUmtv29%2FKbwbl4W8C9kYsRYDC9JCbNKhqJZ8DoAK3g1z0qWIXtbckksewbkNsJ4%2BjPbsBb8hz75EAXRtCsQSSZf2MXDQ7eYkxdoa7ZOmWxrTTrA07ljZeDCFKauvXdRe5ftH2hIlWca24G2zzV0pWQ%2FkI9cXnHqvB9qev2heykrnDQoRh3oF21el%2FryKEiRxBodzR0VG%2FKq1teVseqgjBjdMuUETiAe87H4IRYB6p7ZxspXdgTe5V99jla1LGqM6MjWTGtksQAvJ6K371q%2BzJFIJ0kHEXS2y9XJBVmgO6q8xugVnitu0wOVKxU79RYuuTbotNk%2BO6ujPVpa%2BxRovmlZfai%2FA0XaKIE7SYS%2BlOg1X53yYkdLgOPUhV00iD1vMF1Gqno8MIdY0Jj2DBvY3hFhr3GH0A5o6DXxsvL6TxAoWDc0PGrczGY0j5xZC5vjJ0k3Gb1H1mMXXacLT2MwKuTUtf5kI2BO8BGmhJGBOsgkOhMMm%2B6sMGOqUB87q41jUkral%2FV9FjlIIvvX%2BnA20HhdI0QG9Q5l0AX9hVFDrBWdKpq7F1TlsvWmnZV088kaGlbNN1nU%2BmB5h9IUeVzu%2FZBFRtHcsZvP4%2Fm7BSFRUFIPcBE1swtdmjfoANkNGdBfi8V9ziz2%2FHLMgS3xn90zaStQ3pUvhkvt7skLyVO3ui8T5RTZFyavsF6rmkJbqS8pfdrIPQgUoKZS39V8phNniv&X-Amz-Signature=b54ececd9a77ac43ad27245cf0834f40f12045aa54913f664ba2a0d37af741ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JONQKGL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBzMoLvudaU7lbbzZYaeNJ2yengX7x3x8FFD%2BmofFxLXAiEA2KDsw62omWK4f2ezwzz9tvXLtPsNtA%2Ftp15YXN8coE4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNghxdzLocDD2JNhyrcA1cu3wctGqywbRLBcT%2BjGCf4kdjCQRr%2FoplLOBy8XpqWwkAGvEaf7DalPv%2F5zDKLjsGkOpomogknGAi2l0o3Ast1twEvXPkwW9M6N56DgswYwLauvikWQ340Pa%2Fec4l2VzWwi6s%2BB6%2FDsOsNUmtv29%2FKbwbl4W8C9kYsRYDC9JCbNKhqJZ8DoAK3g1z0qWIXtbckksewbkNsJ4%2BjPbsBb8hz75EAXRtCsQSSZf2MXDQ7eYkxdoa7ZOmWxrTTrA07ljZeDCFKauvXdRe5ftH2hIlWca24G2zzV0pWQ%2FkI9cXnHqvB9qev2heykrnDQoRh3oF21el%2FryKEiRxBodzR0VG%2FKq1teVseqgjBjdMuUETiAe87H4IRYB6p7ZxspXdgTe5V99jla1LGqM6MjWTGtksQAvJ6K371q%2BzJFIJ0kHEXS2y9XJBVmgO6q8xugVnitu0wOVKxU79RYuuTbotNk%2BO6ujPVpa%2BxRovmlZfai%2FA0XaKIE7SYS%2BlOg1X53yYkdLgOPUhV00iD1vMF1Gqno8MIdY0Jj2DBvY3hFhr3GH0A5o6DXxsvL6TxAoWDc0PGrczGY0j5xZC5vjJ0k3Gb1H1mMXXacLT2MwKuTUtf5kI2BO8BGmhJGBOsgkOhMMm%2B6sMGOqUB87q41jUkral%2FV9FjlIIvvX%2BnA20HhdI0QG9Q5l0AX9hVFDrBWdKpq7F1TlsvWmnZV088kaGlbNN1nU%2BmB5h9IUeVzu%2FZBFRtHcsZvP4%2Fm7BSFRUFIPcBE1swtdmjfoANkNGdBfi8V9ziz2%2FHLMgS3xn90zaStQ3pUvhkvt7skLyVO3ui8T5RTZFyavsF6rmkJbqS8pfdrIPQgUoKZS39V8phNniv&X-Amz-Signature=fd46f3e9f2f8b2a63d62b76d1017c8f55babd822f02b423594aed573332e516d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
