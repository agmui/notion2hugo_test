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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZB5YFM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEiKTrVsVbWJNQMWkM5VAY3qlIW36jVNgThWLsaq7KwIhAI0DK39nWLfN9dQ4nfIKyOXqHre8h%2FoDxXYS7mgs8UqtKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycxoBkR65NhaIVF4Mq3AOpBeMaXR7y5oKOtphjP5gJrLW%2FsFL%2BYYT456RbKW39ik%2BI0VW8gQSxLDpi0kzWoAJ%2FTwCBf13TafcnCcEPGQ6%2BTl0M2wm9reXwwF8DikvNwKZ98GYocMnN%2FLigD0%2Fl0O25cXQ3tVpvUmiMhBrolo1SHONcEdNkEZPRW9WHwoHa2yW2Svu7ysQYJSC0MKTP27p%2Bx6sTq%2BqLk7dmCj0Em8Gv1KnbypZ1T5Z3WpcoEwq6XA0I%2B1%2BFVTKqwcudP%2BsAMs38ScAz6%2BMUMeBYABSLK136x%2BKZm%2FwkcOnxymHwPuOgM0FELgCyKpbdIdNCwS0SOaw9yBp%2BMlkQM5OtaaZjSAz354H0ZiYlRn7rJzNaFDFw28EvkERqq4j1uEyXWinjBwerJjDPpw4P3o5eLpN%2BSdsrqG8FiO4ABP4%2FTyUgla0jdFmIBMZKYl7qgQtE1K%2FIb5C594vGIeFCPJpM2CZOi2tJ8YS3TjUpaLlSboT9V%2BrSdmd7AWZf%2BFe6Q7VFJDNloFYR0UWB5WqnWu9PqT9JNFYIHAmVN3%2BDWAMI3N%2FHBqMFTHMKc5WowpgLmk3GrKAD2Y%2FbSYod5q0gU3F4Tx43Vgnc1sKvpGMh2crvk2JejvfeEdwLnOEKJyaohsEGMzCTjt69BjqkAbqNceSkfzXEiJjzJ5aYhOyZbruWlQuGMrdPUrmQqIRgikK5fOorUCD3nXY98vV8wzgo3IaO4RwsZ0NOllYzcQNUPIko3K32adpYQTdp0ZysNTqh7OxJLiKoR%2FYwQYHezLisez2JMzi8zVTq8QibOA4%2FvoL5XhJ83O1oPDdMcUI%2B3vUQn0nqYD3htPu3rUAjWRb0uZzaaPgKwAAb3120XyLqadez&X-Amz-Signature=fc5eafcb304ddb85c5c1a70090155e99b29fc857d8b96e3bfac902feb7cd398b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QZB5YFM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEiKTrVsVbWJNQMWkM5VAY3qlIW36jVNgThWLsaq7KwIhAI0DK39nWLfN9dQ4nfIKyOXqHre8h%2FoDxXYS7mgs8UqtKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycxoBkR65NhaIVF4Mq3AOpBeMaXR7y5oKOtphjP5gJrLW%2FsFL%2BYYT456RbKW39ik%2BI0VW8gQSxLDpi0kzWoAJ%2FTwCBf13TafcnCcEPGQ6%2BTl0M2wm9reXwwF8DikvNwKZ98GYocMnN%2FLigD0%2Fl0O25cXQ3tVpvUmiMhBrolo1SHONcEdNkEZPRW9WHwoHa2yW2Svu7ysQYJSC0MKTP27p%2Bx6sTq%2BqLk7dmCj0Em8Gv1KnbypZ1T5Z3WpcoEwq6XA0I%2B1%2BFVTKqwcudP%2BsAMs38ScAz6%2BMUMeBYABSLK136x%2BKZm%2FwkcOnxymHwPuOgM0FELgCyKpbdIdNCwS0SOaw9yBp%2BMlkQM5OtaaZjSAz354H0ZiYlRn7rJzNaFDFw28EvkERqq4j1uEyXWinjBwerJjDPpw4P3o5eLpN%2BSdsrqG8FiO4ABP4%2FTyUgla0jdFmIBMZKYl7qgQtE1K%2FIb5C594vGIeFCPJpM2CZOi2tJ8YS3TjUpaLlSboT9V%2BrSdmd7AWZf%2BFe6Q7VFJDNloFYR0UWB5WqnWu9PqT9JNFYIHAmVN3%2BDWAMI3N%2FHBqMFTHMKc5WowpgLmk3GrKAD2Y%2FbSYod5q0gU3F4Tx43Vgnc1sKvpGMh2crvk2JejvfeEdwLnOEKJyaohsEGMzCTjt69BjqkAbqNceSkfzXEiJjzJ5aYhOyZbruWlQuGMrdPUrmQqIRgikK5fOorUCD3nXY98vV8wzgo3IaO4RwsZ0NOllYzcQNUPIko3K32adpYQTdp0ZysNTqh7OxJLiKoR%2FYwQYHezLisez2JMzi8zVTq8QibOA4%2FvoL5XhJ83O1oPDdMcUI%2B3vUQn0nqYD3htPu3rUAjWRb0uZzaaPgKwAAb3120XyLqadez&X-Amz-Signature=bc6dfc8333d33e10d22675225dabcfcba32ba880c5ddca4de0967a9a5c5e92cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
