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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELZOK5M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1W0IMN0OOUhwO3hyRysOEAlmCtazjcgVhIDj%2F9fKGHgIhAI8qVyvEMFppbEn7fzJ%2BrdQ9ie4EM30D0IANs3ytLocjKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygPREVKMs2MuZwmkQq3ANPEtlO4ln5mqUrGI8i0CpYtQSI7cAi6ULVJaElvC53rXvrI9h2itZzlgU9itCs1%2FraA9aolCwdRiht%2Fbng08y%2Fqehn0AEHKNsTOa%2Bb8mVM7lambtd9Gs%2Ba7JTaOAmOn7f9d%2BqQYYKm7lyS3oyWeT3VqPxCYH9v%2BrWQqCA5eFxxaXq5BDRsJLoyVQNSt%2Fb4oAzrYXpfzOMii23bM3LxXoCnKyLM0yGXenf4jr6HFees2kwNrfRXABjCoJ71VScbbETe8S6aLPvICXyG83yte9JA%2B2XRuvGgp7ZYIZ6Iy8NpxqEZU0uc76Pk2Qd6tEAc1C0D8CgNejUhxWPovSVzjt3qEfxkBou9yGp0CgqlbA1y90%2F9wXOv01%2BQv0ENP58MrOl5eAHhi8W569Yqayhohqg1pHVFZI%2FDQgCSY2tnSa%2BobM%2FRfJ07366stYd3uKncVRdW%2BaxrM7NhLlvX0eklIzhJHcZ4j6JNdmELoHp%2BVJPJ7KoK0l37QXXRxam%2BnPsROpuIADyuvoLTH%2FK1eZCOfUiPfG7TBSXIvpVkHNT7s83b4QVTQHi3eY84rjhV%2B0u8%2Brww4%2BHKKleiHuZKnRpTMMaCVmgTYAUa7yhKYyCu7QroTsVcS7n3slTAQclIKjD5zKm9BjqkAQEbIcsB4LTvhczOM38%2B%2BAVXKXF6TGkrvJVq%2BiRzY2zrEQ2LTp5rTe6FrBrRIS8ZJvm7Gk1TRsgRmvQ2fT%2Btbrfqb%2FI3xDb%2FiUJgGfznhxluI7Sj1b5uwB%2FhutPMzqfikH6r5b642lcJ7Om%2FU0HY5Z1dj0QvF6HNHcNY2L3RPovpNpOJXJWGfxUl%2BYduJOJvofey9tTKu2Oi7b5vtYr8swietjEt&X-Amz-Signature=5fb4981085601c71004e895fc42fdf29cdbfe3fd75387af522e39f472e553f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SELZOK5M%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1W0IMN0OOUhwO3hyRysOEAlmCtazjcgVhIDj%2F9fKGHgIhAI8qVyvEMFppbEn7fzJ%2BrdQ9ie4EM30D0IANs3ytLocjKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygPREVKMs2MuZwmkQq3ANPEtlO4ln5mqUrGI8i0CpYtQSI7cAi6ULVJaElvC53rXvrI9h2itZzlgU9itCs1%2FraA9aolCwdRiht%2Fbng08y%2Fqehn0AEHKNsTOa%2Bb8mVM7lambtd9Gs%2Ba7JTaOAmOn7f9d%2BqQYYKm7lyS3oyWeT3VqPxCYH9v%2BrWQqCA5eFxxaXq5BDRsJLoyVQNSt%2Fb4oAzrYXpfzOMii23bM3LxXoCnKyLM0yGXenf4jr6HFees2kwNrfRXABjCoJ71VScbbETe8S6aLPvICXyG83yte9JA%2B2XRuvGgp7ZYIZ6Iy8NpxqEZU0uc76Pk2Qd6tEAc1C0D8CgNejUhxWPovSVzjt3qEfxkBou9yGp0CgqlbA1y90%2F9wXOv01%2BQv0ENP58MrOl5eAHhi8W569Yqayhohqg1pHVFZI%2FDQgCSY2tnSa%2BobM%2FRfJ07366stYd3uKncVRdW%2BaxrM7NhLlvX0eklIzhJHcZ4j6JNdmELoHp%2BVJPJ7KoK0l37QXXRxam%2BnPsROpuIADyuvoLTH%2FK1eZCOfUiPfG7TBSXIvpVkHNT7s83b4QVTQHi3eY84rjhV%2B0u8%2Brww4%2BHKKleiHuZKnRpTMMaCVmgTYAUa7yhKYyCu7QroTsVcS7n3slTAQclIKjD5zKm9BjqkAQEbIcsB4LTvhczOM38%2B%2BAVXKXF6TGkrvJVq%2BiRzY2zrEQ2LTp5rTe6FrBrRIS8ZJvm7Gk1TRsgRmvQ2fT%2Btbrfqb%2FI3xDb%2FiUJgGfznhxluI7Sj1b5uwB%2FhutPMzqfikH6r5b642lcJ7Om%2FU0HY5Z1dj0QvF6HNHcNY2L3RPovpNpOJXJWGfxUl%2BYduJOJvofey9tTKu2Oi7b5vtYr8swietjEt&X-Amz-Signature=3a2ccd0a4da86b8e4830432876a1193c19d8480890e813635cf594230d1efe30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
