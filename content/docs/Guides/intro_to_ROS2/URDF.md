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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7ZJCM6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE39lQVUQpRSr8JV5Gfy9bZUwf%2BjWGayYvFYlgd0cUN4AiEA%2FZcq3cIrylT5SBe5xKmluZURd1EUnDtkJZr0xj%2F9YZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZeFcAEhotPW69EMCrcA357sZTHUuYKOxFGXo4ljbcqZxn7zFJKPl%2BIcVoVM0GlVRl4gxlLwKDfd6HGM0oP%2BN1BaSc1EV4x2vvqOyDiRUdW7AQZE1qS9r%2Ber%2FIGEXK8GbvocKJ%2FIrCpuseOjvHDFrU5gZelhPlumcLEnjP4YAM2bDIqhkk3Y2CmpMiO68TBtGd%2F2rMhbqwSTrpGe5eP810L76NDJzcJNvQ8fQSlBKgWiFi%2BgT%2BpVu84o6ZG3vWmlonaQXCrU92Fbxuhe5ztKmBI%2Bl7EPEvwKMSa3SD1dmx%2FwFF6EhFTrxnpbig4snPAIzwCuIRPlHluWsjx%2BMvnahswMjqj%2BMGwduyksm3IeHAgKMG3f3IVXWy2D3UUTXlnra%2FTUxauy1vgBaqNdf2vrjEBt7l0PdPtXFo2gwaZpR%2Bk9TUdQrFJn79gRCnT0UonE9C%2Fng4sYfxY4Pp%2B07ofgJ3AKteTo9EbnsbhfUQWxQvN%2B9hIRS9%2BGUbX0VH1fUok%2F4MwUk1xwiNlNq8p6IN%2Fuu80nm8W%2BqSl1W8jCs%2BcijlsBPWBY1kPwFxtX8huOmypVwz5HMJFg7QXY9Y%2BmkEKJFLK4%2FxfYsSNRswKysI9vRu34ZhnpM0HCrt1YyuoFKEspHdzsf6puV4dKremMPiy48EGOqUBA8GCzD2CXLuZnqfi7mW%2B0LNLVZVBt797y713aiVHy7i83TU5Lm60EpW42Ba4CVsPUTOPdUMysmEIbVq8CQnCLLYKH5teL7BwMnRLYrD1tNSR71D7kEzjNK1UwDqG2Ja%2BRrjbLAdaSdsqjvhfigAxknuX7XXje5POyrO56IBQMCnR2n7D%2FFFuJi%2B4%2BIWMruXM9YdiPRfu07UBeTtkDkONo7ahsmc6&X-Amz-Signature=c5cc9e4496b6bfc1e92de926a9ece0f74fe1c2a13545c81dda0c0a664c928e22&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL7ZJCM6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE39lQVUQpRSr8JV5Gfy9bZUwf%2BjWGayYvFYlgd0cUN4AiEA%2FZcq3cIrylT5SBe5xKmluZURd1EUnDtkJZr0xj%2F9YZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZeFcAEhotPW69EMCrcA357sZTHUuYKOxFGXo4ljbcqZxn7zFJKPl%2BIcVoVM0GlVRl4gxlLwKDfd6HGM0oP%2BN1BaSc1EV4x2vvqOyDiRUdW7AQZE1qS9r%2Ber%2FIGEXK8GbvocKJ%2FIrCpuseOjvHDFrU5gZelhPlumcLEnjP4YAM2bDIqhkk3Y2CmpMiO68TBtGd%2F2rMhbqwSTrpGe5eP810L76NDJzcJNvQ8fQSlBKgWiFi%2BgT%2BpVu84o6ZG3vWmlonaQXCrU92Fbxuhe5ztKmBI%2Bl7EPEvwKMSa3SD1dmx%2FwFF6EhFTrxnpbig4snPAIzwCuIRPlHluWsjx%2BMvnahswMjqj%2BMGwduyksm3IeHAgKMG3f3IVXWy2D3UUTXlnra%2FTUxauy1vgBaqNdf2vrjEBt7l0PdPtXFo2gwaZpR%2Bk9TUdQrFJn79gRCnT0UonE9C%2Fng4sYfxY4Pp%2B07ofgJ3AKteTo9EbnsbhfUQWxQvN%2B9hIRS9%2BGUbX0VH1fUok%2F4MwUk1xwiNlNq8p6IN%2Fuu80nm8W%2BqSl1W8jCs%2BcijlsBPWBY1kPwFxtX8huOmypVwz5HMJFg7QXY9Y%2BmkEKJFLK4%2FxfYsSNRswKysI9vRu34ZhnpM0HCrt1YyuoFKEspHdzsf6puV4dKremMPiy48EGOqUBA8GCzD2CXLuZnqfi7mW%2B0LNLVZVBt797y713aiVHy7i83TU5Lm60EpW42Ba4CVsPUTOPdUMysmEIbVq8CQnCLLYKH5teL7BwMnRLYrD1tNSR71D7kEzjNK1UwDqG2Ja%2BRrjbLAdaSdsqjvhfigAxknuX7XXje5POyrO56IBQMCnR2n7D%2FFFuJi%2B4%2BIWMruXM9YdiPRfu07UBeTtkDkONo7ahsmc6&X-Amz-Signature=a5aa8365c16983c7c6dc87271203b218ad62643b1cf896fbc067b12a263ccd48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
