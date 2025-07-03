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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27JEV7F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6iWMsdayzRzvrVekt7SY6qzKVHybQaEjbIJWSgpqkCgIhAMk9xBbJaD3mlfqRzeL0ouecq1LDopR2ecifSS4oex6fKv8DCBcQABoMNjM3NDIzMTgzODA1IgwOtEzCmpw5Toic0uIq3ANomoTbRuCeBetaHf10y7%2BnD8Rqi%2FW8e9KPhsE2KEe3lLxvd3oExO6aK2ijZefT%2F%2BxVOi6lXAkdQK5a5K93cc%2FFJnWYnHDyfsqQfnhhntGiqv14nXrprf9vjr%2B0vykxn2rfmgZ%2BQP8HTafAcbypnu1FKtX2RRfXR5qrmOYln4gtrTSZv%2Bt5Qzx%2FLcN%2FXG%2Fcxo8T9AFZz3j5X4YlAANU%2FUng4z00ZnNRo%2Bu4ctdK84NRrU8mVrv60bwGgfyeWpRB7fd5b7menxiVPlatjKvy1bV8xLAIasKHBIKgku0fJiOO3iUZD92MdiY82uzJ%2BIavB5e624u9BSCkCvl29neHARfx%2FMCl%2BIVXP%2BMJqLm0oI7AykuOXRANqHu3wJxp%2B5SY8LDQC7TMH2lgYZTlio2jnq9lOIiZuCTnsWqBfIs4YA2QSNRILqH7XrDsXHD6pkfr6ErCBTQmho2jPHweRkZhGqHG5bEkL0liSNibAOjuxNk5%2BAY83amdiZzbwIdfeC%2Fw79R7b7n6Dut%2FugeRxhTyEh0Ra8FhbT3dWWvYOvzms2msUVrzNYQ03rss7E%2B5HFLYviTB5mZTCvxymzQGccY9MtTEt9LFaSEaKjuwtRmP2QShjm7nHtiRLu8qhKd%2FajCqjprDBjqkAWjr3bzqg0UdeTl06tE%2FfChMrUSiwAOT2srpnhvGRLk5eyDHSViXdwKB1ZEYAa2BCRhYTyO7FMNmb1F1aAqj%2FqzT%2FO%2FC%2FuNQpIQQZRwxMg2%2F3uqjD9D0TN0gTQuqeB8lx3W3wgI5n8fQ5MPCCVkl81Ioz6lyalnq8lRTMr8lB4csNLzZEKWxKef%2FtMAwKp6nkhcRjFY0DCkCb3jFRIs%2Fx8O5Isox&X-Amz-Signature=b7f56dc4ebae950f691dc1aa80d4638d3de7c11ec5888ad5b33d4573b59efa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27JEV7F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC6iWMsdayzRzvrVekt7SY6qzKVHybQaEjbIJWSgpqkCgIhAMk9xBbJaD3mlfqRzeL0ouecq1LDopR2ecifSS4oex6fKv8DCBcQABoMNjM3NDIzMTgzODA1IgwOtEzCmpw5Toic0uIq3ANomoTbRuCeBetaHf10y7%2BnD8Rqi%2FW8e9KPhsE2KEe3lLxvd3oExO6aK2ijZefT%2F%2BxVOi6lXAkdQK5a5K93cc%2FFJnWYnHDyfsqQfnhhntGiqv14nXrprf9vjr%2B0vykxn2rfmgZ%2BQP8HTafAcbypnu1FKtX2RRfXR5qrmOYln4gtrTSZv%2Bt5Qzx%2FLcN%2FXG%2Fcxo8T9AFZz3j5X4YlAANU%2FUng4z00ZnNRo%2Bu4ctdK84NRrU8mVrv60bwGgfyeWpRB7fd5b7menxiVPlatjKvy1bV8xLAIasKHBIKgku0fJiOO3iUZD92MdiY82uzJ%2BIavB5e624u9BSCkCvl29neHARfx%2FMCl%2BIVXP%2BMJqLm0oI7AykuOXRANqHu3wJxp%2B5SY8LDQC7TMH2lgYZTlio2jnq9lOIiZuCTnsWqBfIs4YA2QSNRILqH7XrDsXHD6pkfr6ErCBTQmho2jPHweRkZhGqHG5bEkL0liSNibAOjuxNk5%2BAY83amdiZzbwIdfeC%2Fw79R7b7n6Dut%2FugeRxhTyEh0Ra8FhbT3dWWvYOvzms2msUVrzNYQ03rss7E%2B5HFLYviTB5mZTCvxymzQGccY9MtTEt9LFaSEaKjuwtRmP2QShjm7nHtiRLu8qhKd%2FajCqjprDBjqkAWjr3bzqg0UdeTl06tE%2FfChMrUSiwAOT2srpnhvGRLk5eyDHSViXdwKB1ZEYAa2BCRhYTyO7FMNmb1F1aAqj%2FqzT%2FO%2FC%2FuNQpIQQZRwxMg2%2F3uqjD9D0TN0gTQuqeB8lx3W3wgI5n8fQ5MPCCVkl81Ioz6lyalnq8lRTMr8lB4csNLzZEKWxKef%2FtMAwKp6nkhcRjFY0DCkCb3jFRIs%2Fx8O5Isox&X-Amz-Signature=14b693eab59102cf7362db6d1bcd3c97036b44a6b3742b1cf33b5c16a2ec93c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
