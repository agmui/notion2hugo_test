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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25LZ74E%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHgh1ZNaQFcr6NQ370ILaU5ZGQBCV8kqg3BJttSexgXAiB4Grj3CWChQQcz5PX10TikBXaINjmGodQomVD107SFYSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMu%2F8%2BExOm1sh4BAckKtwDBkiUnRTzzsh1%2FNLHE271XyLAxen%2FtfIj6mMelaHm%2BrJESV2oj45l3Bb00PzL8Oy%2B3RXoQU%2BKiH4Mb9w7B4h9hKzPJDSW9TRbTFE%2Fsbzgx9ExMWucuz95uxTu0vwkkURG4IvicYTh0vgJKyDU%2Fmv74KCioDAIlmfxJn5XgxqXpORSg1E6HzBdQZQKQmnRqdo7Ha7lx0SuijqWzTT%2Bp%2FTT1Wy7dyCoQ%2FxbzC58zVkhTO4p5yhZENLyxe2RaljiphZuroRhSaHfmjc8IdVZs1b6HTAD%2FsWZusUB8J2DcC%2FW9NBszxD6ZUYLTxGvX969XZlaivJ1E2p1PkN88D3v1Llvqse5Wd5lG%2B2l2OBaZGQW3uliE1O4Kuxk7vlf7fb1Q7ojeku6leubXmzSJmNeTyJn8WoY1ghGOhyO23VJyviHvNTGp%2BIULw1il9ZiVFnNXuCnLVhIvF%2BX72S6ayy5R%2By2hoBFEixnG7Ffq46fQcChv0uy9KPR0EAhrGD1st7KtcbZYxl0jcSuxILu%2F3V%2F17mQKGIKhzadU8IjouKNGJwl5YVyMXHwhUIFnEWotR%2FBB%2Byzt87uiVKQVcbIO%2FWtSkkRy9LZEO2bbgjKX6kVt9DeJLGsYF%2BahgiXtqcNyLEwp%2FH8vwY6pgFz0E35HqFoz6XBCnhVfTpUiiqOoBhgQubmO7LzBhxiVznUfaqDGIwNfNb61dNVK%2FREyrSsbYyfqzsgL2NGdniMc8y7E1%2FdqqR7W%2BCMQnHODL9HUmM77OXLY8fvHDMJ6f5%2BgwPpng6gNUTY5UfWGpNV%2FMJlKkRD8DGPdSOXyqXu1u%2B7CQ4nDMsBAualYRXqxZg%2Fk1hYDRnXDnh%2Bzdv2Hdi5OIm2VByx&X-Amz-Signature=a6349ab42c89c26c7a0fc2c596f3a120c3ccc9c1cea9e2352363b1a94ceb2fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25LZ74E%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHgh1ZNaQFcr6NQ370ILaU5ZGQBCV8kqg3BJttSexgXAiB4Grj3CWChQQcz5PX10TikBXaINjmGodQomVD107SFYSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMu%2F8%2BExOm1sh4BAckKtwDBkiUnRTzzsh1%2FNLHE271XyLAxen%2FtfIj6mMelaHm%2BrJESV2oj45l3Bb00PzL8Oy%2B3RXoQU%2BKiH4Mb9w7B4h9hKzPJDSW9TRbTFE%2Fsbzgx9ExMWucuz95uxTu0vwkkURG4IvicYTh0vgJKyDU%2Fmv74KCioDAIlmfxJn5XgxqXpORSg1E6HzBdQZQKQmnRqdo7Ha7lx0SuijqWzTT%2Bp%2FTT1Wy7dyCoQ%2FxbzC58zVkhTO4p5yhZENLyxe2RaljiphZuroRhSaHfmjc8IdVZs1b6HTAD%2FsWZusUB8J2DcC%2FW9NBszxD6ZUYLTxGvX969XZlaivJ1E2p1PkN88D3v1Llvqse5Wd5lG%2B2l2OBaZGQW3uliE1O4Kuxk7vlf7fb1Q7ojeku6leubXmzSJmNeTyJn8WoY1ghGOhyO23VJyviHvNTGp%2BIULw1il9ZiVFnNXuCnLVhIvF%2BX72S6ayy5R%2By2hoBFEixnG7Ffq46fQcChv0uy9KPR0EAhrGD1st7KtcbZYxl0jcSuxILu%2F3V%2F17mQKGIKhzadU8IjouKNGJwl5YVyMXHwhUIFnEWotR%2FBB%2Byzt87uiVKQVcbIO%2FWtSkkRy9LZEO2bbgjKX6kVt9DeJLGsYF%2BahgiXtqcNyLEwp%2FH8vwY6pgFz0E35HqFoz6XBCnhVfTpUiiqOoBhgQubmO7LzBhxiVznUfaqDGIwNfNb61dNVK%2FREyrSsbYyfqzsgL2NGdniMc8y7E1%2FdqqR7W%2BCMQnHODL9HUmM77OXLY8fvHDMJ6f5%2BgwPpng6gNUTY5UfWGpNV%2FMJlKkRD8DGPdSOXyqXu1u%2B7CQ4nDMsBAualYRXqxZg%2Fk1hYDRnXDnh%2Bzdv2Hdi5OIm2VByx&X-Amz-Signature=d157a8b5bc72a94432147703f2b7a9ca2ace2727fc4b693d5b0932516b545427&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
