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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB5KNIX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb14UOq9jQyvcKMtUYcScTIPeJu93I9W7%2FK8R9LcZUJwIhANNyRc93XhR0dobbf31Y%2FaY%2B6gpjk1i2qqaXiHZ2JWurKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypZJXjME7ihNlgATsq3AOA0xH38TmjyBJp1Yn3pJVWB7Sg1u0OZmX3y5%2FS6YyxvnZP%2FJC2w7AcnQWLcvTFLJ8GCVKSAIOWQdAldg68LZN7bNKIEq41xhWBX1axCToRW3PbMWeM74HIEssyou7VlrwxvC%2BFVcqeuWQia4VxizUdgeWRUnWyn91T1T6XspTvgUrel0GsWiUD509JxNzpqabU0aiiBFYdhOzCkQG3c4U9QcmC7t1v%2FE%2F75%2Bk7Yqud%2FOmzqhOZfdRKIEOKnB%2Ba2n7pbjophkNwl%2BSfkfI7SzE31MwWwb9xtW9rdhUBzRUQc1AERn4%2FrHUK7rMAo2ozKRWpfq7JABVXwDilZi05U1t3e3X1RFWqVSlfpIzUBSUbyfypROobGCzgxHYxO6yCYUAJ5RG%2FGFVIewvWawm%2B3Z3CB7HDHw%2BqYfFyG4TsO%2Fo1g7gk8aArTvFjDzry1b4a%2F2%2FtMaiFch6pBm3oah6RHinyLewbjx9fxnlEg3T03hF%2FHwT5IagX%2BHQC4pre%2FH1xhxoJrSyw30XzBzAvQh9PCJQMZzKCmqhMzQoGWSemJZaM4JT2Zx1aD4Ijj41sQhvcIhTB8iCz1f9HhxTUbTEHvbXWppm%2FMkomh8MmAn5ml3QiYPN1oXDdQXlyeLQhRjCWxuq8BjqkAZPF0FH1uKv5Eh%2FAYlcHg58d%2BxfPkBmCRUCLSH05aWRYf633em1l98IsD7dDyZ%2BROg6LXFRfrhNn8num%2B19nPjH9utZ1V4JYjkrnCZx6tCRHWXwGVbDgeJWSV5m1d1KaR%2B4Eh5ICYpA95ktP52VBJ%2BSGyeHHeSNsDQDaJEYMnb1uYgMd%2BFabyAKodJolffCj2ynczb3qdwKaw%2FOQrbcaq8QtbrFT&X-Amz-Signature=d95c49e596d492b59a1d161d7f9b6cc1f3e9b9e29f9793cefc3cba93b916442f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNB5KNIX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCb14UOq9jQyvcKMtUYcScTIPeJu93I9W7%2FK8R9LcZUJwIhANNyRc93XhR0dobbf31Y%2FaY%2B6gpjk1i2qqaXiHZ2JWurKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypZJXjME7ihNlgATsq3AOA0xH38TmjyBJp1Yn3pJVWB7Sg1u0OZmX3y5%2FS6YyxvnZP%2FJC2w7AcnQWLcvTFLJ8GCVKSAIOWQdAldg68LZN7bNKIEq41xhWBX1axCToRW3PbMWeM74HIEssyou7VlrwxvC%2BFVcqeuWQia4VxizUdgeWRUnWyn91T1T6XspTvgUrel0GsWiUD509JxNzpqabU0aiiBFYdhOzCkQG3c4U9QcmC7t1v%2FE%2F75%2Bk7Yqud%2FOmzqhOZfdRKIEOKnB%2Ba2n7pbjophkNwl%2BSfkfI7SzE31MwWwb9xtW9rdhUBzRUQc1AERn4%2FrHUK7rMAo2ozKRWpfq7JABVXwDilZi05U1t3e3X1RFWqVSlfpIzUBSUbyfypROobGCzgxHYxO6yCYUAJ5RG%2FGFVIewvWawm%2B3Z3CB7HDHw%2BqYfFyG4TsO%2Fo1g7gk8aArTvFjDzry1b4a%2F2%2FtMaiFch6pBm3oah6RHinyLewbjx9fxnlEg3T03hF%2FHwT5IagX%2BHQC4pre%2FH1xhxoJrSyw30XzBzAvQh9PCJQMZzKCmqhMzQoGWSemJZaM4JT2Zx1aD4Ijj41sQhvcIhTB8iCz1f9HhxTUbTEHvbXWppm%2FMkomh8MmAn5ml3QiYPN1oXDdQXlyeLQhRjCWxuq8BjqkAZPF0FH1uKv5Eh%2FAYlcHg58d%2BxfPkBmCRUCLSH05aWRYf633em1l98IsD7dDyZ%2BROg6LXFRfrhNn8num%2B19nPjH9utZ1V4JYjkrnCZx6tCRHWXwGVbDgeJWSV5m1d1KaR%2B4Eh5ICYpA95ktP52VBJ%2BSGyeHHeSNsDQDaJEYMnb1uYgMd%2BFabyAKodJolffCj2ynczb3qdwKaw%2FOQrbcaq8QtbrFT&X-Amz-Signature=732e58c42c93c286d7960c087836dafb44786b6663591e7a6a19acf21ca222ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
