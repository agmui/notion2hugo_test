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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXK6M72%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCPJ60jp7Xx6Gq8Bth6oVCdihbRCgwqiVxLsVSOOGWQWwIhAKywJ0mubm0TwdzYqUzxcK30gB2ZB223UxHePhcVQjBBKv8DCHgQABoMNjM3NDIzMTgzODA1IgwsS6SBvzz3SUZjKQwq3AOlytwKlQ2TLgZJNRzxDlhQ1sB7Z6h8k4zWJgqhgcw%2FyCsgLqtSqMventhXEAxqAw5SU5RlGI7R2MCxlYL8f1KtqoDr6QJOorTsjwR3K218052cyPM0WwQ1Dum7Ls78hKtA4gv35S9HQNSx%2FagoS1G79zQ26%2FTcIxCcKf%2FoLw1CV7z0FC49foagp04TMMzqIEk6dvw7i1SX1%2FtOU%2FXEsPCw3tR6k7Bam0JXPrhIt1NgmDt34OIT2YDf87FpqE%2BBkTdkaNhpF7fS2ixPT%2BKKc11bsW8iicMbDt3kF7k9jW4kGUpopuGXpJPG%2FN3spX1WZdv7Cw8F%2BGIdSrcE2MCQmQy6f%2F6UT6oR1rz8y67yxiH6%2FHqCj7CcgvkMsVDkVt3iBz7rc7A%2BOMAdRYqZybLPZa5ls5HY30DyvwnBr8GR%2FdOk3h9VrFzfkfIwoPMiTTubUIySqjp623fl9A0Ze%2FlCPH%2BB4pHtuU1FAHeb%2BoVQXG1n%2FzMxcbUA4Uhq7EZtd4EFj0GP8j9f3H081HNOO%2BGQaj%2FgpsgfjQqtYP5emXrVGZhcVlo22fwZT3GZSS9IVitvwCW4N%2FEJrGkO3ubJrQUDHhjLe7xnAzrGRWSrqWDdx9sQaO%2BwMma%2FMby6XXDXgTC%2FuK%2FDBjqkAZsJEX0%2FKtnirzZx%2Bqru3XzewUjPJSUc6sM36WS7ytL4AdGshIuBmW5%2B1xdbQEUbuulSi61LbTTUREnqq1pprS%2F7b5ie6tig0ZKSjsWLchGpkBExcql9e4CN8EySa9lCy1hEZnbvHls70Krp3kcKt%2FjLk%2BJoUVVT2Lov6slsftCEMyvu5zAktPa6Kfj9c1loQv8tDTPjw6UH2%2F7NDE2VR7zanj2R&X-Amz-Signature=02ea234a8f47c3b0fd34ba232b944b355b7cfa20e4f5a9b0b1679349e642393b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXK6M72%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCPJ60jp7Xx6Gq8Bth6oVCdihbRCgwqiVxLsVSOOGWQWwIhAKywJ0mubm0TwdzYqUzxcK30gB2ZB223UxHePhcVQjBBKv8DCHgQABoMNjM3NDIzMTgzODA1IgwsS6SBvzz3SUZjKQwq3AOlytwKlQ2TLgZJNRzxDlhQ1sB7Z6h8k4zWJgqhgcw%2FyCsgLqtSqMventhXEAxqAw5SU5RlGI7R2MCxlYL8f1KtqoDr6QJOorTsjwR3K218052cyPM0WwQ1Dum7Ls78hKtA4gv35S9HQNSx%2FagoS1G79zQ26%2FTcIxCcKf%2FoLw1CV7z0FC49foagp04TMMzqIEk6dvw7i1SX1%2FtOU%2FXEsPCw3tR6k7Bam0JXPrhIt1NgmDt34OIT2YDf87FpqE%2BBkTdkaNhpF7fS2ixPT%2BKKc11bsW8iicMbDt3kF7k9jW4kGUpopuGXpJPG%2FN3spX1WZdv7Cw8F%2BGIdSrcE2MCQmQy6f%2F6UT6oR1rz8y67yxiH6%2FHqCj7CcgvkMsVDkVt3iBz7rc7A%2BOMAdRYqZybLPZa5ls5HY30DyvwnBr8GR%2FdOk3h9VrFzfkfIwoPMiTTubUIySqjp623fl9A0Ze%2FlCPH%2BB4pHtuU1FAHeb%2BoVQXG1n%2FzMxcbUA4Uhq7EZtd4EFj0GP8j9f3H081HNOO%2BGQaj%2FgpsgfjQqtYP5emXrVGZhcVlo22fwZT3GZSS9IVitvwCW4N%2FEJrGkO3ubJrQUDHhjLe7xnAzrGRWSrqWDdx9sQaO%2BwMma%2FMby6XXDXgTC%2FuK%2FDBjqkAZsJEX0%2FKtnirzZx%2Bqru3XzewUjPJSUc6sM36WS7ytL4AdGshIuBmW5%2B1xdbQEUbuulSi61LbTTUREnqq1pprS%2F7b5ie6tig0ZKSjsWLchGpkBExcql9e4CN8EySa9lCy1hEZnbvHls70Krp3kcKt%2FjLk%2BJoUVVT2Lov6slsftCEMyvu5zAktPa6Kfj9c1loQv8tDTPjw6UH2%2F7NDE2VR7zanj2R&X-Amz-Signature=062e2e71b53b2ba8ffffcd6386acac6ab5a7e5a81137ba8bc03b5489aa8928ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
