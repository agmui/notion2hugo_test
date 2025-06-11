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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGNH3NK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIE15O0H4SWbfW4qZe7Bo%2B1XIkkH8v11jS9GLdz2FTsOmAiEAktCvkyrSxkRmMgChZV947dxEksDfUC6beXYPomU9MMMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq%2BT%2FGNoc2mUaWDYCrcA6%2Fxpd5wBOpkBfkLSpuX1mHYq5R6Q1u1v3eABVE2yl%2BrseJRJ3fS4HgsIVXSyakyhBW9CC6t%2BWlc8pp11ts73DEe3WK7VicO43m4HK6%2BkdU31VlimZcIdujZKBHqBKsATz5WxIukpD2aLbKQTAoJlanVJF5AbXYyvq26HMgG6%2B0M0%2FmDmrEfiMp%2BHJ69d49nL%2FHHBv8ILo2KaLM8AjTVJ8Z%2BuoYscYSOTGDHAUaDXJwcLtyquIwmuboUelnqvG8t0DeoyYuuR45pzFN15oNfT9FowfXnA6RI3pNPyzzvif8hkj%2FqhgxLjQrZzITKLbzm779Lw%2BQw0kGnnwDVKJHybQMyN1CMbKwTYv6ObnnhumNI8%2BeeDs0WqcNLKSnsXjqjMtu22%2Beau8PbGe%2FubCWPYB%2Fle9B5DnGmPW33zz2KxKrJlBG73OXxDAzF4aPUNQvKBAmNyiqwAD16MjoFqNPYHoGkJzCbuEG%2FtJM6w78YL91GcE%2BGcxdjSW5oea9OxMVeRj7chcHF1Enu4CQbK7sJA0gjo61QFQMVaoS2AS8AUPqLLVtnsV59nC2DaSpzFF5P3HrS2MwcvIl5gAd7jKxu5XzLx%2BTIlAoZ7p%2FyZNCcAWKM%2FQoDdGVGiiZs%2Bk0XMKSGqMIGOqUBcUnxB14NotAUt0WZP35QC2RgKtgWXbmvYNszTcP8hPlFWXcNW6lJ%2FzxYJE%2FlD9DBZD4CXJM0yJtOFsmZfh3Wh2RFC7m3KMVZKW77ng4P190vgnmb3gPct7pM9p66pLIHodHxGdj9QYD7SyXRJoLes720my7KYFCMbYTXM%2Bin1rwCVZfJui2%2BYMiKywOQdGsdBKtKk8JL5LzAMPCE9C97w8cxqQoP&X-Amz-Signature=71f04ca4b77c8e4680eae374d1cf4b29add49472dd5044f3653bd28aae46f3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SGNH3NK%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIE15O0H4SWbfW4qZe7Bo%2B1XIkkH8v11jS9GLdz2FTsOmAiEAktCvkyrSxkRmMgChZV947dxEksDfUC6beXYPomU9MMMqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq%2BT%2FGNoc2mUaWDYCrcA6%2Fxpd5wBOpkBfkLSpuX1mHYq5R6Q1u1v3eABVE2yl%2BrseJRJ3fS4HgsIVXSyakyhBW9CC6t%2BWlc8pp11ts73DEe3WK7VicO43m4HK6%2BkdU31VlimZcIdujZKBHqBKsATz5WxIukpD2aLbKQTAoJlanVJF5AbXYyvq26HMgG6%2B0M0%2FmDmrEfiMp%2BHJ69d49nL%2FHHBv8ILo2KaLM8AjTVJ8Z%2BuoYscYSOTGDHAUaDXJwcLtyquIwmuboUelnqvG8t0DeoyYuuR45pzFN15oNfT9FowfXnA6RI3pNPyzzvif8hkj%2FqhgxLjQrZzITKLbzm779Lw%2BQw0kGnnwDVKJHybQMyN1CMbKwTYv6ObnnhumNI8%2BeeDs0WqcNLKSnsXjqjMtu22%2Beau8PbGe%2FubCWPYB%2Fle9B5DnGmPW33zz2KxKrJlBG73OXxDAzF4aPUNQvKBAmNyiqwAD16MjoFqNPYHoGkJzCbuEG%2FtJM6w78YL91GcE%2BGcxdjSW5oea9OxMVeRj7chcHF1Enu4CQbK7sJA0gjo61QFQMVaoS2AS8AUPqLLVtnsV59nC2DaSpzFF5P3HrS2MwcvIl5gAd7jKxu5XzLx%2BTIlAoZ7p%2FyZNCcAWKM%2FQoDdGVGiiZs%2Bk0XMKSGqMIGOqUBcUnxB14NotAUt0WZP35QC2RgKtgWXbmvYNszTcP8hPlFWXcNW6lJ%2FzxYJE%2FlD9DBZD4CXJM0yJtOFsmZfh3Wh2RFC7m3KMVZKW77ng4P190vgnmb3gPct7pM9p66pLIHodHxGdj9QYD7SyXRJoLes720my7KYFCMbYTXM%2Bin1rwCVZfJui2%2BYMiKywOQdGsdBKtKk8JL5LzAMPCE9C97w8cxqQoP&X-Amz-Signature=e266f4fc3fe416bce14e09982e813962670cf9db062fb19d018a94fbfbcc2381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
