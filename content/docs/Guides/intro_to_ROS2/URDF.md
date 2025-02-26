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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566S3ANZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDploy0jZRoiuDKf8hzYxW9YVYjwFlFwjLTiAFx55qkFAIhAMcG2VU3xUmT7oOL3Bp6b%2Fn31Kdd8%2BXKzOi27jt5RYV6Kv8DCGMQABoMNjM3NDIzMTgzODA1Igww6Omg5bfOxzCayowq3APSVxJqQyg80XtqAXoKDHXr2S2VBjKjYV4kwUiBP%2F4bsDs3bwbEiotiIwtsbXie1jwOLeWm1LfOfOaxOg9iIAx8vLUmMF60c3ZrZ901EVG%2BmGtUk44qy0yuccdcL6x%2F5wI8yT6NB6lnsbM%2B7nFPS77o1sZuTYxfa0024Cwb1DN%2B8mKDg08ovENmvmWorzfc8kgGVKZH12hMdwh0HLnhNHZrYDjgfYayqRIK4R0iuG%2BeU%2FWZzGERklw4ERecqJijDdsjtb5u0v1eKxVZHfdd4SD%2BAOyHZ2R4M2BWm1ujYtUMGKOcJlsy7IZB99sSiTF49AcOGnJGCNwkIzWktbwdnWQkrRSN2mtGhqT7Vwcin2nFydyWOg7tKwiKjpOrm6ltZJF63vVqXOLLle9SApUWuq%2FAf8%2Bwpq3IWEDdkiqolUnS22uz3dKInSdckbZXIzhHOMieRmMorRrIxjYCDOjRdDVFpsa9yh%2Futo%2FCSzgKozwcdDc%2BCMclltgNUlGgXSd5XHEb3Fb8WEAUEF3DJ5YFtjZAyRob7Q7uicZOHGgtdotlnootdnKV7A7x0UlYUu2AFoLB6KQP7orRcbScF2esMmLXCNVdXsJ78iZsFvyfCk55AHiZn8D35hmFOfKj%2FjDVqf29BjqkAfz1TXrEkHbtnMsH2QRuqrZdevm582XhlbA4kbyx5TRpbH%2FmFtUKbXRyGkT%2FpfdO019fv6Tv7oOx4qiejT6ob4eF6%2FX32agDnyPb8kfC2Ux%2BWm54p%2FkLfdSDGaecaZqnhVYTG%2FMT6WVY2lO%2FnlnjD%2FsWCWvj6G39x%2BNNFxvfHwRgCGT6mph2n8QgCYCWujd2y1elL%2FZ38rg%2B4EcL3VqHkcDKjgaa&X-Amz-Signature=7786da6f3cee73b0600c197d14c1516ec98278d356b14e6e08a37c70414a12b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466566S3ANZ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDploy0jZRoiuDKf8hzYxW9YVYjwFlFwjLTiAFx55qkFAIhAMcG2VU3xUmT7oOL3Bp6b%2Fn31Kdd8%2BXKzOi27jt5RYV6Kv8DCGMQABoMNjM3NDIzMTgzODA1Igww6Omg5bfOxzCayowq3APSVxJqQyg80XtqAXoKDHXr2S2VBjKjYV4kwUiBP%2F4bsDs3bwbEiotiIwtsbXie1jwOLeWm1LfOfOaxOg9iIAx8vLUmMF60c3ZrZ901EVG%2BmGtUk44qy0yuccdcL6x%2F5wI8yT6NB6lnsbM%2B7nFPS77o1sZuTYxfa0024Cwb1DN%2B8mKDg08ovENmvmWorzfc8kgGVKZH12hMdwh0HLnhNHZrYDjgfYayqRIK4R0iuG%2BeU%2FWZzGERklw4ERecqJijDdsjtb5u0v1eKxVZHfdd4SD%2BAOyHZ2R4M2BWm1ujYtUMGKOcJlsy7IZB99sSiTF49AcOGnJGCNwkIzWktbwdnWQkrRSN2mtGhqT7Vwcin2nFydyWOg7tKwiKjpOrm6ltZJF63vVqXOLLle9SApUWuq%2FAf8%2Bwpq3IWEDdkiqolUnS22uz3dKInSdckbZXIzhHOMieRmMorRrIxjYCDOjRdDVFpsa9yh%2Futo%2FCSzgKozwcdDc%2BCMclltgNUlGgXSd5XHEb3Fb8WEAUEF3DJ5YFtjZAyRob7Q7uicZOHGgtdotlnootdnKV7A7x0UlYUu2AFoLB6KQP7orRcbScF2esMmLXCNVdXsJ78iZsFvyfCk55AHiZn8D35hmFOfKj%2FjDVqf29BjqkAfz1TXrEkHbtnMsH2QRuqrZdevm582XhlbA4kbyx5TRpbH%2FmFtUKbXRyGkT%2FpfdO019fv6Tv7oOx4qiejT6ob4eF6%2FX32agDnyPb8kfC2Ux%2BWm54p%2FkLfdSDGaecaZqnhVYTG%2FMT6WVY2lO%2FnlnjD%2FsWCWvj6G39x%2BNNFxvfHwRgCGT6mph2n8QgCYCWujd2y1elL%2FZ38rg%2B4EcL3VqHkcDKjgaa&X-Amz-Signature=8726693d57817d1adf4465f2b30ed7dc88de7b8f53a5e6698f0ed006cc68e235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
