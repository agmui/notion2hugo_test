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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3ZLRQJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC0qiKmZiw5yC%2FtW9oNOCAPCJDDgfn9stX03O9LGwcRugIhAODvypkDvHXC8HkA5XPP0PcxK1NGuCosXUZWqeC5905QKv8DCHcQABoMNjM3NDIzMTgzODA1Igy5VoJZrSvEYhao21gq3AOPTSYrC%2BIUZB2%2F0iIpeyaxUAT%2FXs%2B6zdwA8i%2F9ZGKC%2FJqr1pwH6z1S%2B927i0j11AsBezIhEauQNoYVn3UnsqhaMWJ74Ame3zLLDw4zRi%2BADPZdqVlTE7V18Qf%2Bh0IXne91LhDFHmRzUsf%2Bqh%2FnukI1oCEuo2vuqfQ2Dcr9xqJVDOlhh9L2%2F6H8Wf5jRuAnyN5tFLxNRU%2FwwxvuVq8H1gFyGB9AjHOOjpHVfisbIwuwKxVB%2BhLvDcCrBjdP8A%2Fm0FVO7awRoBxAa22Sjtf3Wn%2B5TQpMsbTeuEXxIgRgRhmrutOJ8y87sFhDskBbONBV4wzatFuaqNO%2FizkGxk3RiBcu63BoODeOmmDxsh62ACseYkQmp5PYUxDn9E1CDX3SqIksR3H%2FIbE8YrOQE24Jclm6WpveGk21UfEVAQ30tgSwr%2BrUhUMm2tLYJ92%2FAEVhxIyosUzopOrHq%2FcC8AqzoBE96mrMD6IZ%2BjNtdL%2BfxWOOtWAV9immMxTv0K%2FykB5nKop1eKOpHj6aFu5BKd18lGLx67Z2aoBlekv%2FljxnXkQxg0wLHN2tx9kWKfT8IUKz91o%2FsQaKkAXDx%2BY4SciMMx7%2Bn1fvmvaJ1qcoi3a%2Bxs7%2BvE3YJy%2Fzs8jJmi58hDD6zPrCBjqkAUh4PbOcrMkWXxX993jH1O4QXzfiF1FyVVdS7sl5U1MGQA16wNC9Jcy40bDWQ%2FtC56EpW80CNupc6SIsI6ODU3Q1LUeZQm1s5sCDFbzOwCnhm7EDryUmKaoQdTUFfAzI4V7iUlwneq2ykDnTAOsQTqlDXTCcRnVCCK2EyQbmHJ6cRZJoTrtXn2uVfFrJSxxE5SzMn3cV%2Fiu5BRIScDC9NxybXRdO&X-Amz-Signature=bc4d745563f76aa49eddfe2b12203b9fa6d4cc6c039431f23af584559451ad39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3ZLRQJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC0qiKmZiw5yC%2FtW9oNOCAPCJDDgfn9stX03O9LGwcRugIhAODvypkDvHXC8HkA5XPP0PcxK1NGuCosXUZWqeC5905QKv8DCHcQABoMNjM3NDIzMTgzODA1Igy5VoJZrSvEYhao21gq3AOPTSYrC%2BIUZB2%2F0iIpeyaxUAT%2FXs%2B6zdwA8i%2F9ZGKC%2FJqr1pwH6z1S%2B927i0j11AsBezIhEauQNoYVn3UnsqhaMWJ74Ame3zLLDw4zRi%2BADPZdqVlTE7V18Qf%2Bh0IXne91LhDFHmRzUsf%2Bqh%2FnukI1oCEuo2vuqfQ2Dcr9xqJVDOlhh9L2%2F6H8Wf5jRuAnyN5tFLxNRU%2FwwxvuVq8H1gFyGB9AjHOOjpHVfisbIwuwKxVB%2BhLvDcCrBjdP8A%2Fm0FVO7awRoBxAa22Sjtf3Wn%2B5TQpMsbTeuEXxIgRgRhmrutOJ8y87sFhDskBbONBV4wzatFuaqNO%2FizkGxk3RiBcu63BoODeOmmDxsh62ACseYkQmp5PYUxDn9E1CDX3SqIksR3H%2FIbE8YrOQE24Jclm6WpveGk21UfEVAQ30tgSwr%2BrUhUMm2tLYJ92%2FAEVhxIyosUzopOrHq%2FcC8AqzoBE96mrMD6IZ%2BjNtdL%2BfxWOOtWAV9immMxTv0K%2FykB5nKop1eKOpHj6aFu5BKd18lGLx67Z2aoBlekv%2FljxnXkQxg0wLHN2tx9kWKfT8IUKz91o%2FsQaKkAXDx%2BY4SciMMx7%2Bn1fvmvaJ1qcoi3a%2Bxs7%2BvE3YJy%2Fzs8jJmi58hDD6zPrCBjqkAUh4PbOcrMkWXxX993jH1O4QXzfiF1FyVVdS7sl5U1MGQA16wNC9Jcy40bDWQ%2FtC56EpW80CNupc6SIsI6ODU3Q1LUeZQm1s5sCDFbzOwCnhm7EDryUmKaoQdTUFfAzI4V7iUlwneq2ykDnTAOsQTqlDXTCcRnVCCK2EyQbmHJ6cRZJoTrtXn2uVfFrJSxxE5SzMn3cV%2Fiu5BRIScDC9NxybXRdO&X-Amz-Signature=472fb206b730ec7dc29cee36cc3ed3e6d735916c3523866e788d2e3cf726201a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
