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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNGLUBJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa6MBJPwO0zSj4Z1IUyMT6yDzHFQ5NjRLIjwryYryHngIhAMPoo0l7%2FsR6%2Fd%2BNe82EyiXIxwDjQv%2BlHmphSdV9KarZKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0bOaFX4yNj6qwG5Yq3AOyqPE40E2Cd2px7NEYNrCM1tzjC%2FLRXkQrhPG16huh1HkzMTXlTy9Xudi0mGDS81HdL5%2FOP6x0ZrF8lhx4Ntju5E%2BOeRlR%2B1i8%2F2akg8yVFdLnSWJCOAnTjzvkUSEWDsdsYqos7Fn3RKGjnTOmMMU2TRr6oycEH1ICc3rBer96hzzu9eHeT8nmWY5%2FI4W3WaMOJ2YiMtLYHufQHpfw3Jqy0SxmWsHAZWty8tDFxAYk1%2FdTjKRHbG0YGH1eyj4DnjOoCRZCKJyZJW3S8b%2FyAnnXG%2F7r8Puv6PvFZqSx6OKOPBk%2F82G5Ym%2FeKP4%2F5tgzI3wU1dJspupbCEnrKK5kZKV88XH85HMiawhqxRBGPiJAfr6cV6A9EuMbo24%2FYqFhvK%2BQXSJJBUaq5fyFHMnDfl%2BoKX38kRztqbFXn4aGwIsqH%2B6eazIlxJd9iqE0ceaTkaQ9NkAMGrLWZWz8vTgrubEoyXWk5U%2FDplbXcRhLs%2FGAn4zRBdNfcX9OcEhsrdMrV7tj1EyLCB3vp5pOPUd%2BWxAZBs22XuT5pd%2FR6oFCI1UxgmiYh96d9rkF1BZindOYd80ulesseL1GPBjZTAnPuHLFglSDckL%2BzlMaZtkG4GxRF%2FAWVwvc93tSKVvGZTCOsZTCBjqkAeEI3jw2S0jEk0Lbf7HZCWSAWW60jbE4Qu%2F40fy%2FAhque2dId2INaz8EKHU%2FQfNdLXfWGcI4b9NFetiqrzadImWYj%2B3w9mbDPs8wDva5VsnaShj39I8LN6p4AYg7E8wai9JRKNpo7gclOCpoTNnW3GuezJTJXqE3KObhiSrfvHVO6kp7%2BjZZRBEB%2BhuLcwNyNCOXYoKg%2BdMSNy20aiXc7wfKHxfK&X-Amz-Signature=b389d2c1d8d0c83e7ce322a15c356985d9ff0e5830d6e496cf8ed00fa12b6f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNGLUBJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa6MBJPwO0zSj4Z1IUyMT6yDzHFQ5NjRLIjwryYryHngIhAMPoo0l7%2FsR6%2Fd%2BNe82EyiXIxwDjQv%2BlHmphSdV9KarZKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0bOaFX4yNj6qwG5Yq3AOyqPE40E2Cd2px7NEYNrCM1tzjC%2FLRXkQrhPG16huh1HkzMTXlTy9Xudi0mGDS81HdL5%2FOP6x0ZrF8lhx4Ntju5E%2BOeRlR%2B1i8%2F2akg8yVFdLnSWJCOAnTjzvkUSEWDsdsYqos7Fn3RKGjnTOmMMU2TRr6oycEH1ICc3rBer96hzzu9eHeT8nmWY5%2FI4W3WaMOJ2YiMtLYHufQHpfw3Jqy0SxmWsHAZWty8tDFxAYk1%2FdTjKRHbG0YGH1eyj4DnjOoCRZCKJyZJW3S8b%2FyAnnXG%2F7r8Puv6PvFZqSx6OKOPBk%2F82G5Ym%2FeKP4%2F5tgzI3wU1dJspupbCEnrKK5kZKV88XH85HMiawhqxRBGPiJAfr6cV6A9EuMbo24%2FYqFhvK%2BQXSJJBUaq5fyFHMnDfl%2BoKX38kRztqbFXn4aGwIsqH%2B6eazIlxJd9iqE0ceaTkaQ9NkAMGrLWZWz8vTgrubEoyXWk5U%2FDplbXcRhLs%2FGAn4zRBdNfcX9OcEhsrdMrV7tj1EyLCB3vp5pOPUd%2BWxAZBs22XuT5pd%2FR6oFCI1UxgmiYh96d9rkF1BZindOYd80ulesseL1GPBjZTAnPuHLFglSDckL%2BzlMaZtkG4GxRF%2FAWVwvc93tSKVvGZTCOsZTCBjqkAeEI3jw2S0jEk0Lbf7HZCWSAWW60jbE4Qu%2F40fy%2FAhque2dId2INaz8EKHU%2FQfNdLXfWGcI4b9NFetiqrzadImWYj%2B3w9mbDPs8wDva5VsnaShj39I8LN6p4AYg7E8wai9JRKNpo7gclOCpoTNnW3GuezJTJXqE3KObhiSrfvHVO6kp7%2BjZZRBEB%2BhuLcwNyNCOXYoKg%2BdMSNy20aiXc7wfKHxfK&X-Amz-Signature=60c3680badf54abe9a98b9a0f3dd766f668f23a40d47df199e6cd1840b99e8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
