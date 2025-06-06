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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLCEUUD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvQxza34qnXB4alm7MMIDY8sUdvEo6LnvN411%2FDRkhAIhAI04%2BMPwlRyZTWINNl2JBxLvGKwA4OHK6XHGK5wiAMdqKv8DCF8QABoMNjM3NDIzMTgzODA1IgyV661xByeQLgu4bq8q3AOvaEP2uPac08RfZBtdDoVTby%2F4jOgpYE%2Fs%2B4XE7OKXIgGh31zdMYqcWQD8JJ5iSXXq%2Fb49NONyjzOlz2OKdhtK0MYEgfmj1aUhgtGsNBKSdV%2F6kDJPCR0UIBW4G%2Bl%2F9IEL0aORqtgcWhks9%2BeJcP7oy%2Bql4L0nbkFL1fZOpqSC2GLHTcdbEgQMrvT9s1O8W6VLort8Ra9z%2B1%2F1fUOyfu3vyJwPrROqFtDvgWZrm1rog7YnadphQ41OKYVBBfibADr%2BYIr4jYk3WSRq57U4qjg1yZDwczRWzCG%2FQHRw6WM7MzV3wxurbtMst3TNCDRpgJUY0SIhh1nZDDC4%2Fz6lS12xgU5LLXHH9hBHPNaZEyAf%2F1bxObfyHykbQIduZU4NsSNwJgPwENH3wvsLswCR9uPURcgAfmaWWIBJ4QdsNBIyTvTwvq0TR5v%2BAXGzGyQM4Ta9LY9VQQexZb1PfAwVkJ2ggKThAsFl%2BeW4p%2Bcyooa%2FmIxBqNP%2FQVaxYGQd8IxNbjohAswp0%2BlfEVZVib6hSBRSGd%2BM%2FtNzptG95Eygvcr36VK9%2BaaZgXw2%2B0K6loKWAj%2FC7n%2B6PYCsU3NDQOxHrK%2BHkGxg5MMkD58RDvJ%2BalSA4T6Bkm6ewfzC4hxDGDDe8IvCBjqkAZarrLae8SFjVE%2FovAUOpxe%2F5J6IOOyCRDtDMHqcfGK2V6F4vxWotqGgBPhlZCQATKG9DkeyEInuTo6aWtvcNCY%2FNvgJTSPI%2FHFMWvVi3%2BcZVYdyIoqvuBEIu4qXYhw2l%2B%2FL4bExS75Ms8w2aLY9jSJikip6BXSzrzKmIlni3nhP1ijODH8vHk1u5M5gxmzfdq%2FX%2BUZyVVHlUT9VTUFfeO9iAcdo&X-Amz-Signature=fb932edbf09246c684278a8b919475b5295b187dc04bab4ec1181388b00a32fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CLCEUUD%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvQxza34qnXB4alm7MMIDY8sUdvEo6LnvN411%2FDRkhAIhAI04%2BMPwlRyZTWINNl2JBxLvGKwA4OHK6XHGK5wiAMdqKv8DCF8QABoMNjM3NDIzMTgzODA1IgyV661xByeQLgu4bq8q3AOvaEP2uPac08RfZBtdDoVTby%2F4jOgpYE%2Fs%2B4XE7OKXIgGh31zdMYqcWQD8JJ5iSXXq%2Fb49NONyjzOlz2OKdhtK0MYEgfmj1aUhgtGsNBKSdV%2F6kDJPCR0UIBW4G%2Bl%2F9IEL0aORqtgcWhks9%2BeJcP7oy%2Bql4L0nbkFL1fZOpqSC2GLHTcdbEgQMrvT9s1O8W6VLort8Ra9z%2B1%2F1fUOyfu3vyJwPrROqFtDvgWZrm1rog7YnadphQ41OKYVBBfibADr%2BYIr4jYk3WSRq57U4qjg1yZDwczRWzCG%2FQHRw6WM7MzV3wxurbtMst3TNCDRpgJUY0SIhh1nZDDC4%2Fz6lS12xgU5LLXHH9hBHPNaZEyAf%2F1bxObfyHykbQIduZU4NsSNwJgPwENH3wvsLswCR9uPURcgAfmaWWIBJ4QdsNBIyTvTwvq0TR5v%2BAXGzGyQM4Ta9LY9VQQexZb1PfAwVkJ2ggKThAsFl%2BeW4p%2Bcyooa%2FmIxBqNP%2FQVaxYGQd8IxNbjohAswp0%2BlfEVZVib6hSBRSGd%2BM%2FtNzptG95Eygvcr36VK9%2BaaZgXw2%2B0K6loKWAj%2FC7n%2B6PYCsU3NDQOxHrK%2BHkGxg5MMkD58RDvJ%2BalSA4T6Bkm6ewfzC4hxDGDDe8IvCBjqkAZarrLae8SFjVE%2FovAUOpxe%2F5J6IOOyCRDtDMHqcfGK2V6F4vxWotqGgBPhlZCQATKG9DkeyEInuTo6aWtvcNCY%2FNvgJTSPI%2FHFMWvVi3%2BcZVYdyIoqvuBEIu4qXYhw2l%2B%2FL4bExS75Ms8w2aLY9jSJikip6BXSzrzKmIlni3nhP1ijODH8vHk1u5M5gxmzfdq%2FX%2BUZyVVHlUT9VTUFfeO9iAcdo&X-Amz-Signature=70649d858cb6645aa45a592cee4c7b8b3d9f6819ab2179033505a397d9aa7184&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
