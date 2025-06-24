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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUH5VWE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEbtOgIHsx%2B6e8duAbARA9bvTtV0gk0jXgc1l8Rn%2FShmAiBEPbnbnVX0d6oNJgxZu9ebJjdqcXQW4h3F6oTF3MKmWyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM6UY6JneFtVIZpubcKtwDkEh4Ll29Q%2BMx0rRKa3X%2FOnYmLdwA%2FY15ql61485D39sHD0z9DQJKVPxTBGQYIp9B6qdywXnzhDfiOc%2FXhOTBn25ZWU9jN%2BFTmO2k765WiXf%2BmxH80svYvsZW3rapIGFc8PLT6oUrgXzCKZsYKIvvd4INmQaGJhh1xavXmMs4ToesRHpwBl5ujk04vOUpsOT3zFu%2FJwPNUE3hG3Hj0wroPeLE42pxXFp8CUZc4IL2uej2f610xeN7NlSDbJ%2F8shHZ%2FW0VzO2mbnQNgFLMRNRLeohkfFZUPIbzPba1BeXBm66Td%2B93Y9O4qtcNH8m2Y2m2vNmr1XiwioaSAH1Bu2xqdbCe7tTDR59X4kN%2FYtT4WGva8mrnkSgstu%2F80u2xJnvq7IdocGRqK%2FouCpGSibw7jp4zRjwE6GLj%2BLrBqMpoMeQD64abl1Qyc8pRPID6UrJGCJUGMiyUNXwBeg8yC8jjeWAUm9Z847UJv%2BfBbeRyudlJ%2FoGmg6C2dMnHUnSYDu8dsHXLFinlHrl1S9OXv%2BR9NWXJryvitxYTaCepq647sotZlrKJXbQ18s%2Fu3SGLlHrn7Q4ZPnhick91XWSWOlieL1%2FpL%2FbAbO%2Bp8R9ZhXMr83WuqgWWIhaGedctF08whdfnwgY6pgEzqwDcncwTYlPbCN5Rkh7oyVDy0avoTV3t7HE20R8A0Fpl303%2Ba3ztRXfkjlE%2FmjXHJYhXUAn%2Bj7C7pE8mbL1zDTZzK298c3JxUqcLDhJ%2Bo%2Fu6KwWKQiA3D0mNZ%2FAhy0IKs5z%2BxBqbN7uvT92xUMxwm9zUX74oT2fSjAyk0%2FXd4iNJ4jQXMj%2BWJHWqwk5rzAI7t9jAkQUGgqwe1xu1s58BPYRY%2FSDU&X-Amz-Signature=a020e7015d834cebcec5e56462e13eb4f880458468f864fb83194d5fd0b5fa90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUH5VWE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEbtOgIHsx%2B6e8duAbARA9bvTtV0gk0jXgc1l8Rn%2FShmAiBEPbnbnVX0d6oNJgxZu9ebJjdqcXQW4h3F6oTF3MKmWyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM6UY6JneFtVIZpubcKtwDkEh4Ll29Q%2BMx0rRKa3X%2FOnYmLdwA%2FY15ql61485D39sHD0z9DQJKVPxTBGQYIp9B6qdywXnzhDfiOc%2FXhOTBn25ZWU9jN%2BFTmO2k765WiXf%2BmxH80svYvsZW3rapIGFc8PLT6oUrgXzCKZsYKIvvd4INmQaGJhh1xavXmMs4ToesRHpwBl5ujk04vOUpsOT3zFu%2FJwPNUE3hG3Hj0wroPeLE42pxXFp8CUZc4IL2uej2f610xeN7NlSDbJ%2F8shHZ%2FW0VzO2mbnQNgFLMRNRLeohkfFZUPIbzPba1BeXBm66Td%2B93Y9O4qtcNH8m2Y2m2vNmr1XiwioaSAH1Bu2xqdbCe7tTDR59X4kN%2FYtT4WGva8mrnkSgstu%2F80u2xJnvq7IdocGRqK%2FouCpGSibw7jp4zRjwE6GLj%2BLrBqMpoMeQD64abl1Qyc8pRPID6UrJGCJUGMiyUNXwBeg8yC8jjeWAUm9Z847UJv%2BfBbeRyudlJ%2FoGmg6C2dMnHUnSYDu8dsHXLFinlHrl1S9OXv%2BR9NWXJryvitxYTaCepq647sotZlrKJXbQ18s%2Fu3SGLlHrn7Q4ZPnhick91XWSWOlieL1%2FpL%2FbAbO%2Bp8R9ZhXMr83WuqgWWIhaGedctF08whdfnwgY6pgEzqwDcncwTYlPbCN5Rkh7oyVDy0avoTV3t7HE20R8A0Fpl303%2Ba3ztRXfkjlE%2FmjXHJYhXUAn%2Bj7C7pE8mbL1zDTZzK298c3JxUqcLDhJ%2Bo%2Fu6KwWKQiA3D0mNZ%2FAhy0IKs5z%2BxBqbN7uvT92xUMxwm9zUX74oT2fSjAyk0%2FXd4iNJ4jQXMj%2BWJHWqwk5rzAI7t9jAkQUGgqwe1xu1s58BPYRY%2FSDU&X-Amz-Signature=adedf21b1970c2b7b4fd387eeb9d4783eee12531241fa4f133b9fd488acd3490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
