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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LA3V4HQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBmVWdL%2F3RdW01jnmm1TlybrQud6REFC4rrX2fJCrfsaAiBOuJB6s63a8eqiqNIJ96FZGlyRQBnJJSNCMqLts4HA1Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMYDot%2FrLE4LYDi9nxKtwDwnAKRgk64VbmRIKq1WLZD1XkBQQs7IUEntBFj5Meu375x2DlkAbSqwcWjOddVze4te3s4plmCM8ARyMMf3FKDW26LWl%2Bp0TOYU1Buce%2FI8OtAb7JncpyuVhnQkZ8%2Fbcl3g%2B3JaNMAyyI0F5V6e7jOhTnyhaNFIFkjLlO3cP8EIlq89J45yc6FliqtVzuNKH6hYoXSqfhPx4IeOeGFzT9f2byc9ksgfrJjOFSm53Uq63yi7Nzj%2BP2a30rhOc7DGPW3UMQAkJicWBW%2B1DeCVzYpZYaLV78tzH6jqrRwnjQTUuTK7btXTgP9Zn1zkGVupp5lSIQRAgBGCdmCYWXinJv3tKBrbslD5SF5FfTH7fd6ilV4p4oOg%2BG8qdjYE6H%2Bw2KMHEs5qghDnfzj8nEgTABBLQ0YlZ%2BtOx8KW2L8HY6r6AbQsM4eJDfkiX9GZf1aRCumm835zTqsgCH6Po73dxw0td%2FYUaJGKR%2BaAUtQZE1YsGEuh5Js0lKaKJ3notJ1PdTt6jBRrBPmjIcyZl45VWSKRrGMHSGEbgnJb%2BOjgV%2F8Y4ALw14QA7fWiCceSzfBaTJ6ZYs0zeb6Iw83QH5iTWIxE8QzI5aQb6W7kF5pgCyuKreODviARqS6E0NRVUw7eu0vgY6pgHq16hPruZrrhrvC32GXcnJiELtKDeTb2hIraymNvOpCycNNNfq71J2DUFKSPniQQ4Q%2FlHEyNKAFf3KInMNUuTyY1t6At0pwcz5WRaD8jBA3ioVPyne4aCNfzfZvZqLjxAlBm%2BIOisOTKPVTWqOkIfSV8oTKsHgQtdlVHyTj0QTXnRp62JuRjD2c9iw1XCDiRSx3wg7NK%2F2UUMwysfzFp2pgnqC2SjK&X-Amz-Signature=5f797f0b59f6db20132072a48fb492e8e33aa6e8bb939c25a0451d20c495c83a&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LA3V4HQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBmVWdL%2F3RdW01jnmm1TlybrQud6REFC4rrX2fJCrfsaAiBOuJB6s63a8eqiqNIJ96FZGlyRQBnJJSNCMqLts4HA1Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMYDot%2FrLE4LYDi9nxKtwDwnAKRgk64VbmRIKq1WLZD1XkBQQs7IUEntBFj5Meu375x2DlkAbSqwcWjOddVze4te3s4plmCM8ARyMMf3FKDW26LWl%2Bp0TOYU1Buce%2FI8OtAb7JncpyuVhnQkZ8%2Fbcl3g%2B3JaNMAyyI0F5V6e7jOhTnyhaNFIFkjLlO3cP8EIlq89J45yc6FliqtVzuNKH6hYoXSqfhPx4IeOeGFzT9f2byc9ksgfrJjOFSm53Uq63yi7Nzj%2BP2a30rhOc7DGPW3UMQAkJicWBW%2B1DeCVzYpZYaLV78tzH6jqrRwnjQTUuTK7btXTgP9Zn1zkGVupp5lSIQRAgBGCdmCYWXinJv3tKBrbslD5SF5FfTH7fd6ilV4p4oOg%2BG8qdjYE6H%2Bw2KMHEs5qghDnfzj8nEgTABBLQ0YlZ%2BtOx8KW2L8HY6r6AbQsM4eJDfkiX9GZf1aRCumm835zTqsgCH6Po73dxw0td%2FYUaJGKR%2BaAUtQZE1YsGEuh5Js0lKaKJ3notJ1PdTt6jBRrBPmjIcyZl45VWSKRrGMHSGEbgnJb%2BOjgV%2F8Y4ALw14QA7fWiCceSzfBaTJ6ZYs0zeb6Iw83QH5iTWIxE8QzI5aQb6W7kF5pgCyuKreODviARqS6E0NRVUw7eu0vgY6pgHq16hPruZrrhrvC32GXcnJiELtKDeTb2hIraymNvOpCycNNNfq71J2DUFKSPniQQ4Q%2FlHEyNKAFf3KInMNUuTyY1t6At0pwcz5WRaD8jBA3ioVPyne4aCNfzfZvZqLjxAlBm%2BIOisOTKPVTWqOkIfSV8oTKsHgQtdlVHyTj0QTXnRp62JuRjD2c9iw1XCDiRSx3wg7NK%2F2UUMwysfzFp2pgnqC2SjK&X-Amz-Signature=93c3761587bc5c4c80c13ccec29e6d073389dea5e6bf56879f8b67fb078b9f13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
