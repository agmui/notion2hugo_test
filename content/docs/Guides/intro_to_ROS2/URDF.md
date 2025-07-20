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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOZGUKS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5ZqJCwHMXT9BHz1DUD1gzIi3xtAbB6KVZ4WcboO%2FXAAiAnpW8xgf2otu223N1ytyzicZDWpBocIGYwDeiBrhAFEiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55tmrWLOT%2BVGzV2CKtwDp6rQSjvBGA3cDDXxD15Rc%2BitevzQV1%2B7aJ75sTVhl%2Bv7KN9KahrnRdgeXI%2BXNAIQcaymTpW5ev5Bl1CATQJLLVaLe31f%2BxSfpZO1z8ZaerzPI%2FADneZ7JDHRkneEh%2BB4ImVhmTLo%2B955MtePr33b3crZ%2FMAoq%2BN%2FmaeLkBEdrCWWHGFBgmLyG%2F%2Bw0ySw%2FNPqO2ebqh73ylU2kC65Vmrof6XcyNwyK1JdlOJXkh3uOkQ%2FmT0sVAXqzhgkL8FH6VzHEt12Df7eHzh9pcCIePzCrhLZ79xaydk5eyAnn4BMajwK8Lj8I5h3xVxpzNC4qhJJSwU1YwA35pcJ3u5tclbb0r65WpcSHfA7Kz9PzOyuacXpTelG%2Beo8PxFbKscVm8V1hFAxnpH0BlTzmmqC8omLTK%2FxdS3VE1haneT39w2DGtPjyMCM745lZJoAR2rPRywkYdhsY6rx7LMcX3H%2BKPut6CcN96xDwnytEwX3BJqwI8EGrs9WykjhkGIsu95AHeQtf9gaUxL8JpCoylW84jrgVxLLRy9D6IBh1HuBD1BwwdLvYo6UXmd6ePIMmJfYHm1aouRQTce88CiMTK6CNIcl1Sfco1Z1AMQ1Q4t69Lk767%2FF8TGDHpct8cuUEuwwkbHywwY6pgG67frPqfEJ6yAPC5JOgFaUZ9DrnRBgprqo%2B9N4xumK69zd6KEY6Zo4ytipLYOV0QjpX8BgNRSo%2F%2FIvTh1G6O%2B8R9aTpF8uuz6Hzkh5kP7wyC6unQtWq%2BDybxanGLgqRRD7rOP%2BuPKbwAhMOTeLtgrgBA6dsTFnKh%2F3K1rJcsRaKXQl7i5axLdLQnJxauN0GiDKd4msOMotHuyCoX7kcg8hzAyxQPqR&X-Amz-Signature=0921aea8424af242c2dd66ae2a3302a32136d26b51d7d3fe935fe500c55a2f6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOZGUKS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5ZqJCwHMXT9BHz1DUD1gzIi3xtAbB6KVZ4WcboO%2FXAAiAnpW8xgf2otu223N1ytyzicZDWpBocIGYwDeiBrhAFEiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55tmrWLOT%2BVGzV2CKtwDp6rQSjvBGA3cDDXxD15Rc%2BitevzQV1%2B7aJ75sTVhl%2Bv7KN9KahrnRdgeXI%2BXNAIQcaymTpW5ev5Bl1CATQJLLVaLe31f%2BxSfpZO1z8ZaerzPI%2FADneZ7JDHRkneEh%2BB4ImVhmTLo%2B955MtePr33b3crZ%2FMAoq%2BN%2FmaeLkBEdrCWWHGFBgmLyG%2F%2Bw0ySw%2FNPqO2ebqh73ylU2kC65Vmrof6XcyNwyK1JdlOJXkh3uOkQ%2FmT0sVAXqzhgkL8FH6VzHEt12Df7eHzh9pcCIePzCrhLZ79xaydk5eyAnn4BMajwK8Lj8I5h3xVxpzNC4qhJJSwU1YwA35pcJ3u5tclbb0r65WpcSHfA7Kz9PzOyuacXpTelG%2Beo8PxFbKscVm8V1hFAxnpH0BlTzmmqC8omLTK%2FxdS3VE1haneT39w2DGtPjyMCM745lZJoAR2rPRywkYdhsY6rx7LMcX3H%2BKPut6CcN96xDwnytEwX3BJqwI8EGrs9WykjhkGIsu95AHeQtf9gaUxL8JpCoylW84jrgVxLLRy9D6IBh1HuBD1BwwdLvYo6UXmd6ePIMmJfYHm1aouRQTce88CiMTK6CNIcl1Sfco1Z1AMQ1Q4t69Lk767%2FF8TGDHpct8cuUEuwwkbHywwY6pgG67frPqfEJ6yAPC5JOgFaUZ9DrnRBgprqo%2B9N4xumK69zd6KEY6Zo4ytipLYOV0QjpX8BgNRSo%2F%2FIvTh1G6O%2B8R9aTpF8uuz6Hzkh5kP7wyC6unQtWq%2BDybxanGLgqRRD7rOP%2BuPKbwAhMOTeLtgrgBA6dsTFnKh%2F3K1rJcsRaKXQl7i5axLdLQnJxauN0GiDKd4msOMotHuyCoX7kcg8hzAyxQPqR&X-Amz-Signature=3ac79d73e3358c784cefd25fad6cc2f686e5a544211da717e360a382e3b03b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
