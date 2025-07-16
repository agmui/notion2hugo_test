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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT6W5CB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC4iadrg5giov3ytnGc%2FsKeSicZadfCjo4gY5JJBVEwEQIhAKU2au1MEI6maQ%2FreDfwiyvSue6ddyWhHRUeIlD6qiwbKv8DCFwQABoMNjM3NDIzMTgzODA1IgynqHeHvqbpQ%2F0NYKkq3AP06fS%2FDeWEMqdg64bbrwLgOuR1cr2TG%2Fzbe7sV3qK30gMfBZbEerpA0keRKWhlKllbKsPiP7M8FD7Cc9iztf0HVp8NDXG7ff6KTR4N4cBe1YqUmETHExFboi%2F7Mt9MvBebf%2BRUrhTmpr7yz4hQUKYlcVe6DoJhmPEIr2sZPAXJn8eG4CBmyzDt4oUvkMjMqVtNFbp3%2Fk3LY%2BXccq8fhNphXnvostqcbETYsVS0C%2FxGiKzVDypaq21A6fGGuwaWxZ6Z4C9F6H%2B8U1O8t%2BCvojc3xSvkRbAEeqwBBLWvV8ZrJlOWHBwIbWLCy%2Bep2gxgP2FSysF0D12pcSwvvonrhNU5M%2BE8x%2Flp28sr%2B%2FCFQ4UHu50jmb%2BeJQPlwBpvIy7nUAi%2B4u9f79OVqGCx4Br7p3cjSEldq7cRk0gzFY3GI6hieqPp3jbJSTVrqw9fjPDO2FEEiPcfXDbtgsemETDL8aKhS%2BxJosy6rSDfdRMPZenfDrLxCmf7dZFzpl%2FSgLlg469lw6rZITKQc7C%2BfeQqw3Fc8Ha97BqbH9aeVKtbmmPoV2mq90LM2RL4Jhsqb%2Fd2e6%2BPpBpL6f28bnBD5Y0EpygczJLyDK4TjAmxbZjh6wFMsE4J9gvvBE8Oo00fkzDEk97DBjqkAYD9xxzyTxmtIMQKa56lask7o6aO5HSTjk4oDAVQ2PVpp%2BluMd1CQrq1aEJI0rX%2FDY%2Bs%2BUDVLMwYE0RKrnhTKFsgt3tjxvzyk1gDeJpYXvunmaQ6vJ6Q%2BR885N9S3tw%2BgwH2uKI0BFlkOU2si3E5FMyeqwZ596baIgzVpskTEod8Bfgh9nGr1P8TvZbiV2syQ5t7HAg1PS529ADVVWPp6JYRi%2Fcq&X-Amz-Signature=512d58647e01530c7b7065e198d7bb92232baac9493166ee3f72b699ba5270f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAT6W5CB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC4iadrg5giov3ytnGc%2FsKeSicZadfCjo4gY5JJBVEwEQIhAKU2au1MEI6maQ%2FreDfwiyvSue6ddyWhHRUeIlD6qiwbKv8DCFwQABoMNjM3NDIzMTgzODA1IgynqHeHvqbpQ%2F0NYKkq3AP06fS%2FDeWEMqdg64bbrwLgOuR1cr2TG%2Fzbe7sV3qK30gMfBZbEerpA0keRKWhlKllbKsPiP7M8FD7Cc9iztf0HVp8NDXG7ff6KTR4N4cBe1YqUmETHExFboi%2F7Mt9MvBebf%2BRUrhTmpr7yz4hQUKYlcVe6DoJhmPEIr2sZPAXJn8eG4CBmyzDt4oUvkMjMqVtNFbp3%2Fk3LY%2BXccq8fhNphXnvostqcbETYsVS0C%2FxGiKzVDypaq21A6fGGuwaWxZ6Z4C9F6H%2B8U1O8t%2BCvojc3xSvkRbAEeqwBBLWvV8ZrJlOWHBwIbWLCy%2Bep2gxgP2FSysF0D12pcSwvvonrhNU5M%2BE8x%2Flp28sr%2B%2FCFQ4UHu50jmb%2BeJQPlwBpvIy7nUAi%2B4u9f79OVqGCx4Br7p3cjSEldq7cRk0gzFY3GI6hieqPp3jbJSTVrqw9fjPDO2FEEiPcfXDbtgsemETDL8aKhS%2BxJosy6rSDfdRMPZenfDrLxCmf7dZFzpl%2FSgLlg469lw6rZITKQc7C%2BfeQqw3Fc8Ha97BqbH9aeVKtbmmPoV2mq90LM2RL4Jhsqb%2Fd2e6%2BPpBpL6f28bnBD5Y0EpygczJLyDK4TjAmxbZjh6wFMsE4J9gvvBE8Oo00fkzDEk97DBjqkAYD9xxzyTxmtIMQKa56lask7o6aO5HSTjk4oDAVQ2PVpp%2BluMd1CQrq1aEJI0rX%2FDY%2Bs%2BUDVLMwYE0RKrnhTKFsgt3tjxvzyk1gDeJpYXvunmaQ6vJ6Q%2BR885N9S3tw%2BgwH2uKI0BFlkOU2si3E5FMyeqwZ596baIgzVpskTEod8Bfgh9nGr1P8TvZbiV2syQ5t7HAg1PS529ADVVWPp6JYRi%2Fcq&X-Amz-Signature=4e466d67ed7f757cfb17f978fb0be60982030fe4b80a4fdb9ead77840b785d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
