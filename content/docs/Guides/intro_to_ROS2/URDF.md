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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTFELZW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gpQySaoJfDWPSMWYArXSSkBtPuhwfhr0F9XUbxBqnwIhANKri5RVhhyUYrLJiYlHPa8HS3iZbv2H9WUrdM%2Bd7zEWKv8DCCkQABoMNjM3NDIzMTgzODA1IgxRxup5x21hBgUDL4Iq3APe%2Bz3kYVMyiAYFlx0stOFuG3%2BFCImXqkMMT4X6L0ASwe2rL3ZCW0U4moZMdjie2Pq0nT5HwHxZ4SKaTY7VIbmY0MdX%2FnHvn1bqJQa9rLioxtjktjPdGpfxtyu5JXtjph1h9qLRRM%2Bs6Ag4fKOtdeiI0mtQpVytsw4Dxs3rfK5oPFyCQi0vj69%2FXXYzSRrqnK2Zr6YZHS7UWDauAsq7o6PoRyt59egmuXih1QK3jWGZhZL40IF2Fz7XLi%2B0yCmQtQbUEHWXJPyYRBm%2FsibEVp7F1Ro01yqGnCzCgDZlqw2ukw0w%2FG1JAeuWjlJ7YHDRg9z8gaX2bXeMff68iUtlEGqAm%2F%2Fsi9ccdmwcixbQXV0NfdXUoxGOvzOVL0GukQIlxFUcaxFunnA0kSuFp35ZfXXyHGikfposDUvB927%2BWVjO7WxQw4Y15q2zJhtcq4aK28wy3AdF3BnYe6EQHz8a9dR7pcM%2BNSIeN5zPyPPgVDNQq7DpsP%2FCieQdb5ZGJIdS6qQhbKzdC4ylvmwXw0yYNtOzkU4K8egq%2B0VcJ62YQkpydWQXzxMtbPdNqPwVDMJjAG0a5%2Fl5Xd3ZOMBpVQ26QtUZn92lwFcfRYpY0WECvM%2Bw1R0oWbdhYqlpJwcmlDCwgq3ABjqkAQTsOIq4YoT1I4XfTshSHxgDzAoOHNRfJXeAnHvu71Qm3MXArNIX%2FTPmZEm8TK4hTw%2Fk876a%2FYqXhSzpWKo2iNG8jKbS0DWdoeKTPFP6FbMKyzqulci3mmVHHsg7miQ0DJQcqzBgJL3S8v%2FSX1rar87CrDvJxH1SnO3G%2BGXBj%2BIAsFmrff5Z12G1riiYLYTmRmgBGGHC4im6Oc3w72twANqsaGn6&X-Amz-Signature=b3c32af08fb365a301f0bb6019452707f216be1a94bb35bf91496f678838daea&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTFELZW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gpQySaoJfDWPSMWYArXSSkBtPuhwfhr0F9XUbxBqnwIhANKri5RVhhyUYrLJiYlHPa8HS3iZbv2H9WUrdM%2Bd7zEWKv8DCCkQABoMNjM3NDIzMTgzODA1IgxRxup5x21hBgUDL4Iq3APe%2Bz3kYVMyiAYFlx0stOFuG3%2BFCImXqkMMT4X6L0ASwe2rL3ZCW0U4moZMdjie2Pq0nT5HwHxZ4SKaTY7VIbmY0MdX%2FnHvn1bqJQa9rLioxtjktjPdGpfxtyu5JXtjph1h9qLRRM%2Bs6Ag4fKOtdeiI0mtQpVytsw4Dxs3rfK5oPFyCQi0vj69%2FXXYzSRrqnK2Zr6YZHS7UWDauAsq7o6PoRyt59egmuXih1QK3jWGZhZL40IF2Fz7XLi%2B0yCmQtQbUEHWXJPyYRBm%2FsibEVp7F1Ro01yqGnCzCgDZlqw2ukw0w%2FG1JAeuWjlJ7YHDRg9z8gaX2bXeMff68iUtlEGqAm%2F%2Fsi9ccdmwcixbQXV0NfdXUoxGOvzOVL0GukQIlxFUcaxFunnA0kSuFp35ZfXXyHGikfposDUvB927%2BWVjO7WxQw4Y15q2zJhtcq4aK28wy3AdF3BnYe6EQHz8a9dR7pcM%2BNSIeN5zPyPPgVDNQq7DpsP%2FCieQdb5ZGJIdS6qQhbKzdC4ylvmwXw0yYNtOzkU4K8egq%2B0VcJ62YQkpydWQXzxMtbPdNqPwVDMJjAG0a5%2Fl5Xd3ZOMBpVQ26QtUZn92lwFcfRYpY0WECvM%2Bw1R0oWbdhYqlpJwcmlDCwgq3ABjqkAQTsOIq4YoT1I4XfTshSHxgDzAoOHNRfJXeAnHvu71Qm3MXArNIX%2FTPmZEm8TK4hTw%2Fk876a%2FYqXhSzpWKo2iNG8jKbS0DWdoeKTPFP6FbMKyzqulci3mmVHHsg7miQ0DJQcqzBgJL3S8v%2FSX1rar87CrDvJxH1SnO3G%2BGXBj%2BIAsFmrff5Z12G1riiYLYTmRmgBGGHC4im6Oc3w72twANqsaGn6&X-Amz-Signature=77553de8c584ef9370e761b7513acf17a066b2997d6534c692ad5a7c81cc5a48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
