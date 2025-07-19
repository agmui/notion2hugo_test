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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5QIKAS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNsmMgsXgvz0TvanLwUce9vyo%2BR1xstKC5S2BMr%2BdWAAIhAML%2F%2B%2Bxbdah9ku3%2BIHsWKCuAxS7UxlykOV72lrGMg0Q0KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOIMKNxsiUl7x%2BZvcq3ANZdkwgQCRxXbGkQ9fWqRCApvbwJwSKnsxaJsNuL58BJSJsWteQh4d5LQiOamxB6hN3Fv15Cfr%2FxHnF586VMogmRoqHjiCvuX9R8GI%2F3Im8T4RW7zxCCagV7Mq8VOaCxNKhrAdZwf2XzZhfYIjqO0rOE%2FQ24jBK9VVJsqfGvHUk4Xtdc6MFudM56zhdZo1XDFGPtIQcEL5KJAB992OcA1035gmN9wPMFUY138SXos5jbkFUcHj65V5jVRtsPdgiAV1OkwCrbH7m3ZNvH19%2BRZRERlfwxxurwOqq%2F6YsyopkEVPoWvzevSqqOIy9zIpaRFFnnXvkPKdhb1BUtJh24u8aNjO6nicBjSd8kZS12Les49Hh1Mv5hpHgvfQKvqXJlRgsSNCsstlPfSUKuMrFXpJe8bFz%2Ba7sCv1PFJVcMPPugm0yagJWHAA4DYc%2Bwghz4DMRjS82jL2AKP%2FLG5YooJkeoW7R48sE8udVSkAu%2BD1M7itzDqysq3WP5Q9Py%2B%2FdORUhkaS7CytQZSmhHcsXN8F%2FHg8JMezKPdHVxPNCdvRPwO7HavyKsbXL6o3Uam5WIeMJIdsC86PIDSjsdRRcJeJHW7T75%2FuJfxQC4qEtlxiHVS%2F6GFXNIKl9z1yitzCYxezDBjqkAS%2F%2FhL%2Bs6%2BVbA2jEQtTsqKsKoSfpnAz2G5ZJ4AOq%2Bjxr%2FHjWNxNZmQP7X%2BdTfhyY6Y65bMgPrKNJgxhxj4xP8vG1ihsD7Mb8FCNhXGk59QxHoL8AIKXPMnOFeI5WvbzugzZ1bkEEswup1e%2Bl7tZZWEw9c%2BgcG663V1haxR7y2CC3QetGL35utVSYGkDnCRc1NWkg8idavBktmdNKVqMrmd7aozSB&X-Amz-Signature=6c4eb60b1d03747fb2a3681d21556787ca0e219539cabbd83402e0b172f18831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5QIKAS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNsmMgsXgvz0TvanLwUce9vyo%2BR1xstKC5S2BMr%2BdWAAIhAML%2F%2B%2Bxbdah9ku3%2BIHsWKCuAxS7UxlykOV72lrGMg0Q0KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOIMKNxsiUl7x%2BZvcq3ANZdkwgQCRxXbGkQ9fWqRCApvbwJwSKnsxaJsNuL58BJSJsWteQh4d5LQiOamxB6hN3Fv15Cfr%2FxHnF586VMogmRoqHjiCvuX9R8GI%2F3Im8T4RW7zxCCagV7Mq8VOaCxNKhrAdZwf2XzZhfYIjqO0rOE%2FQ24jBK9VVJsqfGvHUk4Xtdc6MFudM56zhdZo1XDFGPtIQcEL5KJAB992OcA1035gmN9wPMFUY138SXos5jbkFUcHj65V5jVRtsPdgiAV1OkwCrbH7m3ZNvH19%2BRZRERlfwxxurwOqq%2F6YsyopkEVPoWvzevSqqOIy9zIpaRFFnnXvkPKdhb1BUtJh24u8aNjO6nicBjSd8kZS12Les49Hh1Mv5hpHgvfQKvqXJlRgsSNCsstlPfSUKuMrFXpJe8bFz%2Ba7sCv1PFJVcMPPugm0yagJWHAA4DYc%2Bwghz4DMRjS82jL2AKP%2FLG5YooJkeoW7R48sE8udVSkAu%2BD1M7itzDqysq3WP5Q9Py%2B%2FdORUhkaS7CytQZSmhHcsXN8F%2FHg8JMezKPdHVxPNCdvRPwO7HavyKsbXL6o3Uam5WIeMJIdsC86PIDSjsdRRcJeJHW7T75%2FuJfxQC4qEtlxiHVS%2F6GFXNIKl9z1yitzCYxezDBjqkAS%2F%2FhL%2Bs6%2BVbA2jEQtTsqKsKoSfpnAz2G5ZJ4AOq%2Bjxr%2FHjWNxNZmQP7X%2BdTfhyY6Y65bMgPrKNJgxhxj4xP8vG1ihsD7Mb8FCNhXGk59QxHoL8AIKXPMnOFeI5WvbzugzZ1bkEEswup1e%2Bl7tZZWEw9c%2BgcG663V1haxR7y2CC3QetGL35utVSYGkDnCRc1NWkg8idavBktmdNKVqMrmd7aozSB&X-Amz-Signature=025a77101d7bbd78c6367c3c4c58733afc84fd0e7608b8de3cc92020e7dc9c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
