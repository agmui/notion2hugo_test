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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBJ6BJY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBmL%2Ff1L3ZC%2BRZDkk3dqa3gzPgvkD6MCVYS56zu0m9J8AiArDHZ5oa3y4GjEtdQxTpZ0yqyIiemVw2lS0%2BpGPcMoiSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2278yKNmwtlNFFIKtwDdOhxsjDAHDJAQg71HRUOEYL%2FkHIHdtucYYeDwXNXA1RSTulzPLobMVWOOgYxcE5ihrT%2FXtA5zgkgOb8I5J3UTLuLPB6lNZvpmgiOU2Bbz1MYiMKNNduTLr5oaA0msweVKWbrNrfalPKS2ATLb0sbCNdfjZPZvEM0KPlNAy1ot6Ge7clVkGR%2FMalBbaAMDK%2FdUxG33zQ692tKidJGljv4SYMdDObSDIAXTpUfrCrVpjy9fRy1q%2Fp8SECU41gUX5YZ6PMgx8Lo6sq0IXFO%2BLNrJvOjcCZD7tNnRwfUgXg8mTj1x3YWJfqGaxsKEcfEr9jSPx%2FjM30LM%2BkzRex1hzR3o64qBkiqxGaacf%2Bh08ANKK3QgrKgxGW%2Bg8co78wMujPN3peqCb71%2BDNUlAgiWMddSB582m2onh%2BgVa3DqiZY1E%2FG%2B8lO9ibTT9wyTzncwCBQFF433gkl%2FAwIMoa%2FM1d0Dlk1BZFNOBL6iwTFdrh%2BEp9oMj1jFRkiiwvltoa1guRh9fMfheNiWcQKZoV2cR5VkhIhyOMI%2BVof1TL1i10KXEwK37pe1GwL7E4AvIRUS9veOBYhOBHocLr45QGSqOVK7nZ4EqZ%2BIzn3uLqxTlbricGyNlYKIvSiLREu97kwiIOPwAY6pgG5AXR7l%2BMeV88u1sknFa%2Fcgd%2BbDQN5Nf0bTU723eIknT6YrkasIxDogr9vN8DoXrByHJww6Adi3L7hzBWCf5tV2iOgWdxmbE2b47TeGP4t4VqC%2BcW2jy1nTf6Tk%2FDDQrCex6Nk6xvDHq64Up3LBg7EGg5M6SuvXqRXIr82gpGbeNFLpr9Z%2BjK%2FRQ6iPqf0cBtQ%2BkkwmHp5zKCC3SznKl%2BitXbxtGwR&X-Amz-Signature=c7aa8b0a3019d133a85fa449e35b347c5f63a12e1facca0171f863aa5eb7ba59&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBJ6BJY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBmL%2Ff1L3ZC%2BRZDkk3dqa3gzPgvkD6MCVYS56zu0m9J8AiArDHZ5oa3y4GjEtdQxTpZ0yqyIiemVw2lS0%2BpGPcMoiSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2278yKNmwtlNFFIKtwDdOhxsjDAHDJAQg71HRUOEYL%2FkHIHdtucYYeDwXNXA1RSTulzPLobMVWOOgYxcE5ihrT%2FXtA5zgkgOb8I5J3UTLuLPB6lNZvpmgiOU2Bbz1MYiMKNNduTLr5oaA0msweVKWbrNrfalPKS2ATLb0sbCNdfjZPZvEM0KPlNAy1ot6Ge7clVkGR%2FMalBbaAMDK%2FdUxG33zQ692tKidJGljv4SYMdDObSDIAXTpUfrCrVpjy9fRy1q%2Fp8SECU41gUX5YZ6PMgx8Lo6sq0IXFO%2BLNrJvOjcCZD7tNnRwfUgXg8mTj1x3YWJfqGaxsKEcfEr9jSPx%2FjM30LM%2BkzRex1hzR3o64qBkiqxGaacf%2Bh08ANKK3QgrKgxGW%2Bg8co78wMujPN3peqCb71%2BDNUlAgiWMddSB582m2onh%2BgVa3DqiZY1E%2FG%2B8lO9ibTT9wyTzncwCBQFF433gkl%2FAwIMoa%2FM1d0Dlk1BZFNOBL6iwTFdrh%2BEp9oMj1jFRkiiwvltoa1guRh9fMfheNiWcQKZoV2cR5VkhIhyOMI%2BVof1TL1i10KXEwK37pe1GwL7E4AvIRUS9veOBYhOBHocLr45QGSqOVK7nZ4EqZ%2BIzn3uLqxTlbricGyNlYKIvSiLREu97kwiIOPwAY6pgG5AXR7l%2BMeV88u1sknFa%2Fcgd%2BbDQN5Nf0bTU723eIknT6YrkasIxDogr9vN8DoXrByHJww6Adi3L7hzBWCf5tV2iOgWdxmbE2b47TeGP4t4VqC%2BcW2jy1nTf6Tk%2FDDQrCex6Nk6xvDHq64Up3LBg7EGg5M6SuvXqRXIr82gpGbeNFLpr9Z%2BjK%2FRQ6iPqf0cBtQ%2BkkwmHp5zKCC3SznKl%2BitXbxtGwR&X-Amz-Signature=8b56ab6bd45f33d1f8f4cd8cf77478f989307e6f6aa255947f576880b77bf2db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
