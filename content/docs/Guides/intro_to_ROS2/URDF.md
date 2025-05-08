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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6OKJWM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClEv9H%2BL4H81lkl42KXPUyYbN1If%2BiCGokN3VHyYUDWgIhAP%2FbaTguMW4JZokX6uhV%2FP7GS2DLj15nyqFQahXNwEOGKv8DCG8QABoMNjM3NDIzMTgzODA1IgyN1YruB7mjirgU3rgq3AMo93i%2FQSaCytbh7Ldah%2FFqznG5YAVweAIXv0ysaxnF5Pw6%2FC%2F1j6KI05il9cQKL95tCM83%2BWXx8ugMeqWvl568m7L928uSO8Py73rqZCEFE4QdLQ9Klf0yh4f4MBeJiXI4GpgSBJtTu2IUBl3%2BurBtw5SkVCwtKifBjueUsMaknyz3qMO7jCOrieDeFfqvyWXXJstJ9a29OAAdNAS7ij0mdjB7CtplZ%2BD%2BYshJfYDFnma6IfK9ha84z2eT8nJhVSewJ8Cu2Z53km7HY4wCItWGoDvmsZrojvcFWhiG99lVl37rkWnFCLoKKLDuZrbfDbK2soLGckUiUdRaTzJjCf0TLn20M0XKoGKMdGjDcft1oYLyIQzv3EfyzXnha6JuSs5rAoCZGH0ns9WJudY5uw98ZYE7yQWBuBZ5tjLhcLiXQ1WBeocVU5mGXlKQtvZ1dkBN9FhJsfOvzCY5KWzyOH%2Fxv0dBisQDr8obtUwDD061dFGCzqlhVbI1i2%2Bf3wxUjyzKfXNyu6JWj7T6KwfuZbnrC8JNG0GMwKbhqkEYa4vzurOktuNVSrRgFm7m3EpjuSS%2FGWO6em2PbwoZdEY6uJE40ui8Vcokvze7rMmiUc8n%2BWGNxE8pSX1ZX6JQkTCBlPHABjqkAbXJJ8omtjhEpmMpKwBdbcWP6%2Fl5qEGm9%2BcXdnw3wcQO1o2MJ%2BvehTo44LKYOVPnR9S7uP8AadF0orjtXgupdpN4hUiwDpw%2BrF0HHtW2Yqdt8v9iibculww3x6Di2qblWj1vep9hq92Zn2NoqJnohC1sVVEwShpzaxHUGK2wEBbPVr%2FYdbKWKilHUm5UWuEuoL8EtN8ygwYim8IRtVq4spF8TqaX&X-Amz-Signature=b5f3cfcc251f2ee2921b02f423ab6473b7b5170d09559f32721fc4bbe6375f56&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6OKJWM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClEv9H%2BL4H81lkl42KXPUyYbN1If%2BiCGokN3VHyYUDWgIhAP%2FbaTguMW4JZokX6uhV%2FP7GS2DLj15nyqFQahXNwEOGKv8DCG8QABoMNjM3NDIzMTgzODA1IgyN1YruB7mjirgU3rgq3AMo93i%2FQSaCytbh7Ldah%2FFqznG5YAVweAIXv0ysaxnF5Pw6%2FC%2F1j6KI05il9cQKL95tCM83%2BWXx8ugMeqWvl568m7L928uSO8Py73rqZCEFE4QdLQ9Klf0yh4f4MBeJiXI4GpgSBJtTu2IUBl3%2BurBtw5SkVCwtKifBjueUsMaknyz3qMO7jCOrieDeFfqvyWXXJstJ9a29OAAdNAS7ij0mdjB7CtplZ%2BD%2BYshJfYDFnma6IfK9ha84z2eT8nJhVSewJ8Cu2Z53km7HY4wCItWGoDvmsZrojvcFWhiG99lVl37rkWnFCLoKKLDuZrbfDbK2soLGckUiUdRaTzJjCf0TLn20M0XKoGKMdGjDcft1oYLyIQzv3EfyzXnha6JuSs5rAoCZGH0ns9WJudY5uw98ZYE7yQWBuBZ5tjLhcLiXQ1WBeocVU5mGXlKQtvZ1dkBN9FhJsfOvzCY5KWzyOH%2Fxv0dBisQDr8obtUwDD061dFGCzqlhVbI1i2%2Bf3wxUjyzKfXNyu6JWj7T6KwfuZbnrC8JNG0GMwKbhqkEYa4vzurOktuNVSrRgFm7m3EpjuSS%2FGWO6em2PbwoZdEY6uJE40ui8Vcokvze7rMmiUc8n%2BWGNxE8pSX1ZX6JQkTCBlPHABjqkAbXJJ8omtjhEpmMpKwBdbcWP6%2Fl5qEGm9%2BcXdnw3wcQO1o2MJ%2BvehTo44LKYOVPnR9S7uP8AadF0orjtXgupdpN4hUiwDpw%2BrF0HHtW2Yqdt8v9iibculww3x6Di2qblWj1vep9hq92Zn2NoqJnohC1sVVEwShpzaxHUGK2wEBbPVr%2FYdbKWKilHUm5UWuEuoL8EtN8ygwYim8IRtVq4spF8TqaX&X-Amz-Signature=164bbb0b2b780c2554e1df34029022c2985872223eec5809dc46f61f0b059164&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
