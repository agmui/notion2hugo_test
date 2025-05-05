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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRRL52Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFk%2B88A6DqpA0XU9vpqDgBgtZL1dbdTR7qECmpdPnSfCAiA9kx9iWPclm%2Bih15Lf1UO49LLKNi8H6JuBxJu9xeGdKSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMA19YyJpCfSoI5HmuKtwDWymeKgH94keyIzQCNWl68n%2B1aVOTBvPmZJz42Ct7rv%2B0jzF9O59%2Fvzrn3lBLGQPJ%2BZNj8ooUAyAZ7Ff5E%2F6ABBgT7PKllfON5t2Emz2KfCmR%2F163M8nPf1OyDsM1zljI1VqDXfl4gDtJwcIDbuNgRGpnG9jkSvmNge0agA2bosTD2mNUqfZAbKlYdihCOWNe08ltAwR%2FlQvJ5KdxsnYV6u1A1NUhlDs891GG9mFeI3IvpWS5oN9VA68uLL2l6xXGuqclGAxHbA2BF6tn87wnERZIPx5%2BqiN1mIzd5xPFmz%2BbD49oYUkeoE7M%2BH5V9B%2BcasuOUie8VjO3t%2BZjnjnxZjElg4NLIscb2PMbtKMQanTwjjQFRZBMwkLqQK2i7a4Fb0d3BWrchXlJc8eVeB0sPyRICoQBbIjAobCXEUb1J9gDt7UDiX9C%2Fw725twPe%2FP1ropTVFgHFNgAmlLdvgEwsOLMyD3pdYNLIJkPHFzc%2BHC0l5Hoi3SYQcSxNG%2FHu%2FXU0vm%2FRIN%2FuIvZD6ySOSjEBWBFHBqeDz5YTFh4FlDBLEylHQkoA%2BRoHLfyCyCKbc9n64SScmtUlniX%2BIc3hcCLdnzkwW%2BdOeTYTOYwiXZQt%2BY9XN%2Bb2QwIpdGfeqcw3qzfwAY6pgGvQqr7CYVhtC2rPM%2ByNGZhSwS8aRWKATHvqntZ639hnMCundfC7QUaShyOFaqmjIYkpkt1RLiDHJvaDRSrOyN36XH5f8jjdrC165u32ln%2BlDVzWplPzr%2BrOnAxX%2Bq%2BbC%2FTjGJubc7OQdB0fn%2BVDmujQr25PBsKNXoRXHtBLxGns2%2F3cgRViPUrDb8O4fW%2B%2FZm49nfDb7X8e9QPsz6CGLfkv5mA03Fu&X-Amz-Signature=a5f9db0e5097e288d7f67ba24a77b6bd1be3ec50291eeb36b48eb3c7a361d0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FRRL52Z%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFk%2B88A6DqpA0XU9vpqDgBgtZL1dbdTR7qECmpdPnSfCAiA9kx9iWPclm%2Bih15Lf1UO49LLKNi8H6JuBxJu9xeGdKSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMA19YyJpCfSoI5HmuKtwDWymeKgH94keyIzQCNWl68n%2B1aVOTBvPmZJz42Ct7rv%2B0jzF9O59%2Fvzrn3lBLGQPJ%2BZNj8ooUAyAZ7Ff5E%2F6ABBgT7PKllfON5t2Emz2KfCmR%2F163M8nPf1OyDsM1zljI1VqDXfl4gDtJwcIDbuNgRGpnG9jkSvmNge0agA2bosTD2mNUqfZAbKlYdihCOWNe08ltAwR%2FlQvJ5KdxsnYV6u1A1NUhlDs891GG9mFeI3IvpWS5oN9VA68uLL2l6xXGuqclGAxHbA2BF6tn87wnERZIPx5%2BqiN1mIzd5xPFmz%2BbD49oYUkeoE7M%2BH5V9B%2BcasuOUie8VjO3t%2BZjnjnxZjElg4NLIscb2PMbtKMQanTwjjQFRZBMwkLqQK2i7a4Fb0d3BWrchXlJc8eVeB0sPyRICoQBbIjAobCXEUb1J9gDt7UDiX9C%2Fw725twPe%2FP1ropTVFgHFNgAmlLdvgEwsOLMyD3pdYNLIJkPHFzc%2BHC0l5Hoi3SYQcSxNG%2FHu%2FXU0vm%2FRIN%2FuIvZD6ySOSjEBWBFHBqeDz5YTFh4FlDBLEylHQkoA%2BRoHLfyCyCKbc9n64SScmtUlniX%2BIc3hcCLdnzkwW%2BdOeTYTOYwiXZQt%2BY9XN%2Bb2QwIpdGfeqcw3qzfwAY6pgGvQqr7CYVhtC2rPM%2ByNGZhSwS8aRWKATHvqntZ639hnMCundfC7QUaShyOFaqmjIYkpkt1RLiDHJvaDRSrOyN36XH5f8jjdrC165u32ln%2BlDVzWplPzr%2BrOnAxX%2Bq%2BbC%2FTjGJubc7OQdB0fn%2BVDmujQr25PBsKNXoRXHtBLxGns2%2F3cgRViPUrDb8O4fW%2B%2FZm49nfDb7X8e9QPsz6CGLfkv5mA03Fu&X-Amz-Signature=f3d5690ff27bac9d83393d77507a80c9727889b43dcea8ad51bbeaa01612ed57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
