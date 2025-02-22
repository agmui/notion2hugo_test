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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONVSXZR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkSgqnjuDf1R5ScYsjhNC3pFuQtDJu4zDMWbeaEWd2BAIhAKOo1oqdDVqPT2SnjNl9aeruHpjE3ZfNXBVVHFHmTiolKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUnj1T%2BtD2kYclxUq3AM9vQnawhUK1m6YaOv%2F7afeOJsYOC5%2B%2BnkVm6X9WL3TFpXQ7ZTKI3Sm2C4aFI3jQppw88X8Ozvuqi1ulBt5vfO%2BIlC%2F2Ti0GQkMu7u0cebarQ5%2F%2F0wrw8ymWu09HhZBqsAgB4FEkDmPgztoTexrA3Wn%2FFcVKcO0y1ENepV5iPiw9lzhVPR1Oc2b15iBLZgeM7XZ8YinofHON6e55ZRYFr69jOU2QBYggUkHH6LAMSFG9naDLa2JirOwXx4RnFeCRtWvtBG1jZjhUadB63xlDR7%2FIvjqQrZgExaYUbHbz0M0uGBmOgBsvzt%2Fk7Uhm3pqVe2e%2BbN6ltbKuNLquhAQaV4ZICYmAIev3C2%2F6TWM6CpIhXdJN5OPQZZdCBvvJtmntRmX7LAn9muxost97Chdlpai3WpOsNwCBjKpOIk82adCvDHYDG3uUUgeZvdJ2Gvv0R1crAQR68I5gU5FOHAQxyWRikntWFCQAnt93clGlNWIiv9V%2FFMbksjY5MIreWofI%2BNy3wRhM7GL%2Fxnzw1h5kL95WzUzknsP%2Ftxc4CN8VpOJahhwqMmie3uvFLzzFcGUAVcdqLAQ3rsQkxIFGy1SP3xrf%2BhFhYfYJOrbr1F2ayg0lQoShXhKbk9DkCSHRzDG5%2Ba9BjqkARInQnkIQqUuCJitGmyOsyPaPJXWl6SrmGNhdABCBU8SVp%2B87k7%2B7h9NZFQXYBhSUQw1H3sUotu%2FJKWmPeTVoXY2Ym5X842%2F1N%2BKLjLnVDznFYNWNl96s%2BED0Xlj8rc9P4KeT4c6iuS3ufvnzkanwL3LXc5ReTFFysC29N7OZpZJu%2FsN7pYMjGIrE5WeyBIU8Bwm1E32hk134gARhs3RqM1Do6%2F0&X-Amz-Signature=efeca836fd076e8d4acb4a7e2612b0bd1c847015c7d02e13d5a45e27390e1d73&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ONVSXZR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkSgqnjuDf1R5ScYsjhNC3pFuQtDJu4zDMWbeaEWd2BAIhAKOo1oqdDVqPT2SnjNl9aeruHpjE3ZfNXBVVHFHmTiolKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSUnj1T%2BtD2kYclxUq3AM9vQnawhUK1m6YaOv%2F7afeOJsYOC5%2B%2BnkVm6X9WL3TFpXQ7ZTKI3Sm2C4aFI3jQppw88X8Ozvuqi1ulBt5vfO%2BIlC%2F2Ti0GQkMu7u0cebarQ5%2F%2F0wrw8ymWu09HhZBqsAgB4FEkDmPgztoTexrA3Wn%2FFcVKcO0y1ENepV5iPiw9lzhVPR1Oc2b15iBLZgeM7XZ8YinofHON6e55ZRYFr69jOU2QBYggUkHH6LAMSFG9naDLa2JirOwXx4RnFeCRtWvtBG1jZjhUadB63xlDR7%2FIvjqQrZgExaYUbHbz0M0uGBmOgBsvzt%2Fk7Uhm3pqVe2e%2BbN6ltbKuNLquhAQaV4ZICYmAIev3C2%2F6TWM6CpIhXdJN5OPQZZdCBvvJtmntRmX7LAn9muxost97Chdlpai3WpOsNwCBjKpOIk82adCvDHYDG3uUUgeZvdJ2Gvv0R1crAQR68I5gU5FOHAQxyWRikntWFCQAnt93clGlNWIiv9V%2FFMbksjY5MIreWofI%2BNy3wRhM7GL%2Fxnzw1h5kL95WzUzknsP%2Ftxc4CN8VpOJahhwqMmie3uvFLzzFcGUAVcdqLAQ3rsQkxIFGy1SP3xrf%2BhFhYfYJOrbr1F2ayg0lQoShXhKbk9DkCSHRzDG5%2Ba9BjqkARInQnkIQqUuCJitGmyOsyPaPJXWl6SrmGNhdABCBU8SVp%2B87k7%2B7h9NZFQXYBhSUQw1H3sUotu%2FJKWmPeTVoXY2Ym5X842%2F1N%2BKLjLnVDznFYNWNl96s%2BED0Xlj8rc9P4KeT4c6iuS3ufvnzkanwL3LXc5ReTFFysC29N7OZpZJu%2FsN7pYMjGIrE5WeyBIU8Bwm1E32hk134gARhs3RqM1Do6%2F0&X-Amz-Signature=01d1be0209a1f14281bd9e7e7c9dae762b1ccfbf23a17d2273fdb2c4b49f4aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
