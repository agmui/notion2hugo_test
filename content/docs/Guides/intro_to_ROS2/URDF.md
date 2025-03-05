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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4QR4MS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH17hd9IjvkFIb%2FVEKhUZK1bnWEDiZGyOeS0JfFE0TcICIF3IS2LFM77J5v1zRmgPAZtW82joMP8ysldnGvEadKxXKv8DCBoQABoMNjM3NDIzMTgzODA1IgzAmYuUxYUUoY7HDtEq3AOJ7ScknLraM0lMpLxMlbuP8f9ky5itNF49DVkk7esFL21YJ2NCpvIgm7njkK8zBEC0U2YzM2jQzr%2FRProM2nfnQJXCY3oW8FwElKiM7rYllUujTN40O%2F8U7rYq%2BfZwBeB2%2BZLsaZODG34IV6oiOh%2B2vM6%2Bgm8DGS%2FghOZUjnnc0L5iQ7bK6sWhhUxWOALAn8Jue%2BsWfakCkIvKgSaWpiG44XGLTD3gEnGuXUcuElSKPAsQSECyCX58Jr5tKUJ7CwUUAYhTi%2FEMbwKz%2Fi4EV%2B4GslMfY39gJ0dgzfZLTRBQ80Br9rBiWbmPtSO0j3Xclrun7si8C0LrWrw2V%2FDra84WSvaoYQfV2tqfNXSQ5KymcB0Am6GJvn60Guxd6zCm6Cyw6l3UTEdMXwa5mUfzinrtP2APr%2FKcGzQ2Ei%2B6Uq0uPPuMVWCjeDj7QyHodqMSCUxhDc%2FlqhiJ%2FPY2BOkYtwahDiEvFCb2ireyG7tlg0noRcoHbibaMitZVdq8iivw3XbSYGzXMoUz6Vb83Dhz0pBFsJN7Uh225RqQUHjbqrbmS5riKtEg%2BrT4Gnty%2BYbIWJP%2Bo3XxbigiW4q2MEIl1ASDBjvPs71eVkI1geKaFnDhYVYVWY1jU5U3tUgE6jDlg6K%2BBjqnAZ2k9rlVlqK614uho6Z0DfK0FA%2BEkMuO4DH3HaW2%2BwLoMiWPGtUQyO%2FPr1AyMP0%2BNSu7VF8eoJAHTsKGP7kcm6mT5UJP3BqooBSqmubLWM8SuvWn1kRaTWUu3u3QEdhiZxoPtG8afDleB9RKDTu%2B53EK8djIIcFniBb4ax%2FOqIDfU%2B0E9gEPI2zpqTO1ullNrVZfrlPZS6D7KMJC3zeulyulk90nPOs7&X-Amz-Signature=4fd6f9ce441d36bb8e6e9b20732629d4a4e4fa28736955ea58b6a029f5f1ef8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4QR4MS%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH17hd9IjvkFIb%2FVEKhUZK1bnWEDiZGyOeS0JfFE0TcICIF3IS2LFM77J5v1zRmgPAZtW82joMP8ysldnGvEadKxXKv8DCBoQABoMNjM3NDIzMTgzODA1IgzAmYuUxYUUoY7HDtEq3AOJ7ScknLraM0lMpLxMlbuP8f9ky5itNF49DVkk7esFL21YJ2NCpvIgm7njkK8zBEC0U2YzM2jQzr%2FRProM2nfnQJXCY3oW8FwElKiM7rYllUujTN40O%2F8U7rYq%2BfZwBeB2%2BZLsaZODG34IV6oiOh%2B2vM6%2Bgm8DGS%2FghOZUjnnc0L5iQ7bK6sWhhUxWOALAn8Jue%2BsWfakCkIvKgSaWpiG44XGLTD3gEnGuXUcuElSKPAsQSECyCX58Jr5tKUJ7CwUUAYhTi%2FEMbwKz%2Fi4EV%2B4GslMfY39gJ0dgzfZLTRBQ80Br9rBiWbmPtSO0j3Xclrun7si8C0LrWrw2V%2FDra84WSvaoYQfV2tqfNXSQ5KymcB0Am6GJvn60Guxd6zCm6Cyw6l3UTEdMXwa5mUfzinrtP2APr%2FKcGzQ2Ei%2B6Uq0uPPuMVWCjeDj7QyHodqMSCUxhDc%2FlqhiJ%2FPY2BOkYtwahDiEvFCb2ireyG7tlg0noRcoHbibaMitZVdq8iivw3XbSYGzXMoUz6Vb83Dhz0pBFsJN7Uh225RqQUHjbqrbmS5riKtEg%2BrT4Gnty%2BYbIWJP%2Bo3XxbigiW4q2MEIl1ASDBjvPs71eVkI1geKaFnDhYVYVWY1jU5U3tUgE6jDlg6K%2BBjqnAZ2k9rlVlqK614uho6Z0DfK0FA%2BEkMuO4DH3HaW2%2BwLoMiWPGtUQyO%2FPr1AyMP0%2BNSu7VF8eoJAHTsKGP7kcm6mT5UJP3BqooBSqmubLWM8SuvWn1kRaTWUu3u3QEdhiZxoPtG8afDleB9RKDTu%2B53EK8djIIcFniBb4ax%2FOqIDfU%2B0E9gEPI2zpqTO1ullNrVZfrlPZS6D7KMJC3zeulyulk90nPOs7&X-Amz-Signature=a20ffb743c5a59eb9c5a8fa75be6ab2c4131543f050d0d345ed53a7e39069397&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
