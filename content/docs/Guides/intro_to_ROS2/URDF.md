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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAMPD5X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw9CPAOlN9MaUG%2FxKeJ7zESyvHrYlq%2BhXyqkBPuWLejAiEAxTSbgFD66CoBdIVvicIaL4FMgtKT5wyR3Vkd7ImIWxQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOqb1o%2B%2B8vF6kj11SyrcA24Bleu63ns08B9uMEEjRI4aneSEhctpNMpbj0P%2Fz8EirG6yhl2YALiu%2B7OgNH0ZqQI0wHOmSPXwcN2ElEIomWQh6tfU5b%2BtcsHiO3Sc4jUbRtZuCAW5EUkawfX7b%2F971lN8DUCCIr957C75sY%2BDWgi0VzbUJW1Y8mDhRctPyyoKfm8wugWlMVGmMk4sV9X%2BCQhct%2BPESGTaGmrdSft3iIka2FuIAwoDiIWfQXOpGCu%2Blp%2B%2BFXH9%2Fe64pcR9Y0bsCJinjbnnJUwIZ9BAXl%2BnDcBfwzsBmVNrHaUltsTyWvKS1L2KY8kIAzkdKHnpbfMO3ZEPmHksPBBTT18HqhBqvrUUAYCJRTeDCnAkM6hs7YySSpW%2F9zzkS7lULdkFcOwk72zklR4GRsfDl1adBc11WtebSaN%2BfIuGvADze4T7WhElE%2BK%2FNpomiqe5BgcUBEEz7hME5YZqf565KXF36Nr9Rd5ZLoc3zs2MxgmbG0ds%2B0co9Sw%2FTQrch8o9GjOVR0ID1qFrly3Sy9hSviGokkUtMiFXYi5xexow4oYJCYh2BW7orLhUftpL0e0wtSXeBWbSeZt7n0iGIAzhPnHo1ltJrOhONUxCVmLQYQnGs9AfnlGU%2BFTaoKePpGao1NLMMLuPp74GOqUByjArVv8VsW4Dsysfuz955qEbhU0PUoWRq8D0hrSb0PzaLmt6pXFJDf5fnXjMz5VwHCF9slwJZ2rl3lz0CboDxoXylBQX791HGsp283QiI1DxIntqs4yiW9fu%2B5oCHGQiuryTXYoO83T5p31adfbKDC1sIk%2BYU198qGkjcYBg0RrGzSYT7rlzKi7I5L%2BSZNz%2BS4AoYnnclxkD01WqBfBOcREnPr8f&X-Amz-Signature=bf7f307cfd2d0d0bb700a2156b56ffef2515fd221cfa2518ada6193908fb14af&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAMPD5X%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw9CPAOlN9MaUG%2FxKeJ7zESyvHrYlq%2BhXyqkBPuWLejAiEAxTSbgFD66CoBdIVvicIaL4FMgtKT5wyR3Vkd7ImIWxQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOqb1o%2B%2B8vF6kj11SyrcA24Bleu63ns08B9uMEEjRI4aneSEhctpNMpbj0P%2Fz8EirG6yhl2YALiu%2B7OgNH0ZqQI0wHOmSPXwcN2ElEIomWQh6tfU5b%2BtcsHiO3Sc4jUbRtZuCAW5EUkawfX7b%2F971lN8DUCCIr957C75sY%2BDWgi0VzbUJW1Y8mDhRctPyyoKfm8wugWlMVGmMk4sV9X%2BCQhct%2BPESGTaGmrdSft3iIka2FuIAwoDiIWfQXOpGCu%2Blp%2B%2BFXH9%2Fe64pcR9Y0bsCJinjbnnJUwIZ9BAXl%2BnDcBfwzsBmVNrHaUltsTyWvKS1L2KY8kIAzkdKHnpbfMO3ZEPmHksPBBTT18HqhBqvrUUAYCJRTeDCnAkM6hs7YySSpW%2F9zzkS7lULdkFcOwk72zklR4GRsfDl1adBc11WtebSaN%2BfIuGvADze4T7WhElE%2BK%2FNpomiqe5BgcUBEEz7hME5YZqf565KXF36Nr9Rd5ZLoc3zs2MxgmbG0ds%2B0co9Sw%2FTQrch8o9GjOVR0ID1qFrly3Sy9hSviGokkUtMiFXYi5xexow4oYJCYh2BW7orLhUftpL0e0wtSXeBWbSeZt7n0iGIAzhPnHo1ltJrOhONUxCVmLQYQnGs9AfnlGU%2BFTaoKePpGao1NLMMLuPp74GOqUByjArVv8VsW4Dsysfuz955qEbhU0PUoWRq8D0hrSb0PzaLmt6pXFJDf5fnXjMz5VwHCF9slwJZ2rl3lz0CboDxoXylBQX791HGsp283QiI1DxIntqs4yiW9fu%2B5oCHGQiuryTXYoO83T5p31adfbKDC1sIk%2BYU198qGkjcYBg0RrGzSYT7rlzKi7I5L%2BSZNz%2BS4AoYnnclxkD01WqBfBOcREnPr8f&X-Amz-Signature=06b916d3fc8f50cd1d4690c4a98054cd7db98815ebbfa10ed9bc9911d5c205cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
