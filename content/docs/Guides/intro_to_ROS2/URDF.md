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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRMWJ7G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyndANa2YylfnNBAHOaNgbB2N%2FY08YHXXrKunLJjIT6QIhAKg%2FlFOmv6BgaufaYihilBYlbRcl4Kbh%2FXTKJonRv%2Bu4KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHIhXR9INoQbQRHssq3AP5%2BODjrCdtCZGUEnpKrZwm45Fjxg7q6X8wksAQUydsDQshJv7QV%2BK6OEjlCkrI0wvCvsL9lPIZBOgE1a3faiGCVvcWandCPpW0dapn%2FZF9Lv1AEHhRgoe3oUBr%2FkETQbWhuiDYninTQxsnOpb9wDseSSO0tcHW%2BMNjp7eEab7aApV6av8nm5klIFVeqT6%2BsjfqfbcrJE8aqMeHkLOdzw1BvYb329iwiDrWiekUE%2BkxYfjvRw%2BB6tc%2F9%2BY%2BU4xI7VMdXFtkriljd1ujvOQIYP9M0NEjUBe0Ihy%2FOqv01xqsil8g0AC7t4W%2BFl%2F8oKXF%2FgIjXoakriaYjMoUC%2BbGEE850ExApVbpb3h4W7j9%2BF2GfnfPmxtjzoi2s5lud9Z2Ttj1pGK95jG8761u0UKN0c5yxDSBgbM2DH6lDsesCxL20g3z49UkbhrWIVsXR%2BOXr2nkirXVygEHzzCPc0q9xDKUgbz0AOYUdFqTjlBmg0D9184hnWSr0xDW%2Fcxfmut1E375kJcCg%2Fe34mfD7R7BkWpRsVkp0k%2BJKB6RhQbqieiZ7Zp54HKL1R6r9RbZ0Q2Swy8sse7gx87SG553AdpYvBFvSbHtDsAtwm6GbJygIc7woNEW6Zp0iZUQfbK4NzDZ%2Bri%2BBjqkARG%2FoTXYvZ9Q1bTg9kMURwBtOgpK96r3Pw3sSlgJSq12LSiBEAX%2FtSQCm5y8%2By28mxhXamYL1y6rVmbM0V6aVYAF3biqRibJLn0CtOtpLP5LxuvB7e7cloEdh06HiWN4pcLoorWkpDNp1VHwRawrThlDt8JsMe3u6phEbTT2ieayvM4X3MPIbBCj7Rd7jj%2FSPjLh1HUhDxlAjFuAcKzfphsR8Ff6&X-Amz-Signature=22c6e95131454edf342d1533373901d0ccf7778ceee4e5100e8ea3176a9c4949&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMRMWJ7G%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCyndANa2YylfnNBAHOaNgbB2N%2FY08YHXXrKunLJjIT6QIhAKg%2FlFOmv6BgaufaYihilBYlbRcl4Kbh%2FXTKJonRv%2Bu4KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHIhXR9INoQbQRHssq3AP5%2BODjrCdtCZGUEnpKrZwm45Fjxg7q6X8wksAQUydsDQshJv7QV%2BK6OEjlCkrI0wvCvsL9lPIZBOgE1a3faiGCVvcWandCPpW0dapn%2FZF9Lv1AEHhRgoe3oUBr%2FkETQbWhuiDYninTQxsnOpb9wDseSSO0tcHW%2BMNjp7eEab7aApV6av8nm5klIFVeqT6%2BsjfqfbcrJE8aqMeHkLOdzw1BvYb329iwiDrWiekUE%2BkxYfjvRw%2BB6tc%2F9%2BY%2BU4xI7VMdXFtkriljd1ujvOQIYP9M0NEjUBe0Ihy%2FOqv01xqsil8g0AC7t4W%2BFl%2F8oKXF%2FgIjXoakriaYjMoUC%2BbGEE850ExApVbpb3h4W7j9%2BF2GfnfPmxtjzoi2s5lud9Z2Ttj1pGK95jG8761u0UKN0c5yxDSBgbM2DH6lDsesCxL20g3z49UkbhrWIVsXR%2BOXr2nkirXVygEHzzCPc0q9xDKUgbz0AOYUdFqTjlBmg0D9184hnWSr0xDW%2Fcxfmut1E375kJcCg%2Fe34mfD7R7BkWpRsVkp0k%2BJKB6RhQbqieiZ7Zp54HKL1R6r9RbZ0Q2Swy8sse7gx87SG553AdpYvBFvSbHtDsAtwm6GbJygIc7woNEW6Zp0iZUQfbK4NzDZ%2Bri%2BBjqkARG%2FoTXYvZ9Q1bTg9kMURwBtOgpK96r3Pw3sSlgJSq12LSiBEAX%2FtSQCm5y8%2By28mxhXamYL1y6rVmbM0V6aVYAF3biqRibJLn0CtOtpLP5LxuvB7e7cloEdh06HiWN4pcLoorWkpDNp1VHwRawrThlDt8JsMe3u6phEbTT2ieayvM4X3MPIbBCj7Rd7jj%2FSPjLh1HUhDxlAjFuAcKzfphsR8Ff6&X-Amz-Signature=5fb81a880d2637c19f531d4ce66d88e5c665dcf9678a1e878e12a8880e556cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
