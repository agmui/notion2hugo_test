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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPATRTJG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2ByO2hAm7CisojSWSH9s%2FPCRZEs3usKcjyja1spST5gIgA1ftzJT%2BOjrX0oaS5IE3S58aDhzfSv%2B5bvMqWvsqMUEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJM%2BBENuNxq10TFcCircA3sBhoLmGs35g2LDPYavmHGPmZlooGx7BQmAAnJpKd9pHaX%2F03HvRQshYTZUg8f5rH4YDHDwJU5QYeoI7YzYntKyGSTIf3k41SxsRRGkmr2sQ7Vi4T9Ra%2BNtd6f8CsZUDCvSLqXX%2FK7M2fwk2KM15wKzQzzGD43hAc3EAa%2Fvf8Uo%2Fo9XK8YynjhMWQ94H5Y68XJJ4UqnRd%2FcCscxOhaqdkzVgbt9MfD3ZlELS5bwKCDWuM6CYdKEXEKee8rSzfk4TkTx7iqK50xOz3DMhBKjA6hgHUggWbbBDuPSr%2F2f%2FjRUO8%2FYJqR%2Bz3zm5bBITCEfkvUUY2q38XLeLF67p1ZbGnaPOGKS0Oz8LhzCxaByQPU8FLXi9X4%2B2LR%2FS9Z6DUi0JH7e8cvcRcXq89SM7tL6SmjCzI3E4kUzpzfNBeGKA58o%2Bc6ohf5GBKfotXJpjBXvHc%2FkjHfr7zEbbqn01gk4kITulRNVX%2F2IrrxrGSoZ57UkY0nEQG8blPaz%2BIDXVG4%2FnRcoSDeR6oJhnHZpdGbOPe2qpwwfWOXbAKGifkbSCtfbRDbKcEyDf4UppiOOBtrSBnIZ%2FvUDMKkH1gC5JhxrRHKZ3edwLdGjR4kBdobrY0ecEK8zuYPvebnxEfqfMJbeh8AGOqUB%2FT42Qz9w8CwfS2WD%2FOFX8UFSywX0DIDlsWAQ4fYrrJKZsVgQJCkBQqN9jSVRyGZrBYTVWhNb81uiJtb8AJh4rQxp2mZ50l1Adqs4OqEoxmeHRhH8ODz9k%2Fs9Y8PLbpZ1FpuH1lRfH1WzsF5Qtg7VW%2FGxNOFO6UhOf47L0Z%2B3BiTMmqxmZJDti6y9nmbUOXnhPGxVlAo2jwzX7khMRC%2FKNFVxtlkp&X-Amz-Signature=2f8a5ad0393a5a003927b6cf962ecb7ba7d70bd292291a967f5f2fab69a02556&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPATRTJG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2ByO2hAm7CisojSWSH9s%2FPCRZEs3usKcjyja1spST5gIgA1ftzJT%2BOjrX0oaS5IE3S58aDhzfSv%2B5bvMqWvsqMUEq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJM%2BBENuNxq10TFcCircA3sBhoLmGs35g2LDPYavmHGPmZlooGx7BQmAAnJpKd9pHaX%2F03HvRQshYTZUg8f5rH4YDHDwJU5QYeoI7YzYntKyGSTIf3k41SxsRRGkmr2sQ7Vi4T9Ra%2BNtd6f8CsZUDCvSLqXX%2FK7M2fwk2KM15wKzQzzGD43hAc3EAa%2Fvf8Uo%2Fo9XK8YynjhMWQ94H5Y68XJJ4UqnRd%2FcCscxOhaqdkzVgbt9MfD3ZlELS5bwKCDWuM6CYdKEXEKee8rSzfk4TkTx7iqK50xOz3DMhBKjA6hgHUggWbbBDuPSr%2F2f%2FjRUO8%2FYJqR%2Bz3zm5bBITCEfkvUUY2q38XLeLF67p1ZbGnaPOGKS0Oz8LhzCxaByQPU8FLXi9X4%2B2LR%2FS9Z6DUi0JH7e8cvcRcXq89SM7tL6SmjCzI3E4kUzpzfNBeGKA58o%2Bc6ohf5GBKfotXJpjBXvHc%2FkjHfr7zEbbqn01gk4kITulRNVX%2F2IrrxrGSoZ57UkY0nEQG8blPaz%2BIDXVG4%2FnRcoSDeR6oJhnHZpdGbOPe2qpwwfWOXbAKGifkbSCtfbRDbKcEyDf4UppiOOBtrSBnIZ%2FvUDMKkH1gC5JhxrRHKZ3edwLdGjR4kBdobrY0ecEK8zuYPvebnxEfqfMJbeh8AGOqUB%2FT42Qz9w8CwfS2WD%2FOFX8UFSywX0DIDlsWAQ4fYrrJKZsVgQJCkBQqN9jSVRyGZrBYTVWhNb81uiJtb8AJh4rQxp2mZ50l1Adqs4OqEoxmeHRhH8ODz9k%2Fs9Y8PLbpZ1FpuH1lRfH1WzsF5Qtg7VW%2FGxNOFO6UhOf47L0Z%2B3BiTMmqxmZJDti6y9nmbUOXnhPGxVlAo2jwzX7khMRC%2FKNFVxtlkp&X-Amz-Signature=3ae6867e97f1e450d815e7804e06eb86bd6c02c70f107686e1e9e26847868fce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
