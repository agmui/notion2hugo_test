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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76BYAA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvdfosBr2qEGnxctFf8et%2B%2FrKWGfHHG5xyLbq2csYUUQIhAI1sEVqepnt7WmRR%2BtyJERzWGXQuh%2BgSLqK90Esz4W3YKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ1kl7wgv%2FBjVwqrQq3AM7x0YCaGYIM95MK6iYKybd%2BeyLH3CHQHF5%2Bve9JMw9VJcRanbln50e4eJbpTSyElmUnfVZbhFbt4YX6cSMWRnEibW0ks%2B7feBEo3yDASXWNpZjns1P0b4KbxqVDygPhd%2BPzraxXvTcCI5r2iaL2gKsXjgkgg%2BLIuBOZxv34ZzDJm19Q1tXEl68Su4kYo%2FOoaBxO%2BotU3VRHYHT6TKkEaHGiNoBuAOC8Y1TG86NG9ZRARBrJ27R1mgDOIWl2t02C4N%2FiRXOZIsLr%2FeO4vdgJcNd7cvMGCC1MfmKXVPq1oxRHw1HW%2BP7idl6oGebsc5s1Hv%2FebZ7P3IQuFIH%2FtMHSU8W4BPurSTOStaKN2sjisV8xOlFXpLux9DlSUTxMKKu0y80RmNVi5xNfoKKcYdnaoiiHfDWIfssrnFotKWsprI%2Fw861jMcZUnFfv02E5icvdF1CPO4GqXRhZrhfF1R2%2FhL%2Bw1BEB5HolAoJE2jE3vsK8S0BkIgjtlv9J1dX5PjpOYo%2B1NE4LNtRctwILiZPavobUgr0rR51CIkFME7gNf1Z5gM1LPk0S%2BXHojHhlpLD0eagG0ezS%2BlBNQGlPurPk%2FfZfc2RTKT7Pb%2BCQwEg0ADQqqbBgbV5r84XauptKTCkpNXCBjqkAYUPmhPRnTfuHOuim4t%2F8aDPGLLhKmsAgrS2y76tlTg5qk%2FeI4H9MEfsTHvFSjJKq2YYYQbTFkFC8BoTdm5yaeXv8qC7RxWvSHz0WeWtqb%2F0lz%2FYk7XLoCWkCRyac0EbFbU%2Bdl5kQLwytgBjrHTh1QgWuy%2Fv4Dq4gF%2BftRnbGm8WoMApPQDLU0cvmy0pQqYtLQJy3HSTlGC7XE017As2jOJBrdN3&X-Amz-Signature=0f59af9987588bf6a1bc38dc2eef6074fea93462499052e9413c8be10f2793f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76BYAA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvdfosBr2qEGnxctFf8et%2B%2FrKWGfHHG5xyLbq2csYUUQIhAI1sEVqepnt7WmRR%2BtyJERzWGXQuh%2BgSLqK90Esz4W3YKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ1kl7wgv%2FBjVwqrQq3AM7x0YCaGYIM95MK6iYKybd%2BeyLH3CHQHF5%2Bve9JMw9VJcRanbln50e4eJbpTSyElmUnfVZbhFbt4YX6cSMWRnEibW0ks%2B7feBEo3yDASXWNpZjns1P0b4KbxqVDygPhd%2BPzraxXvTcCI5r2iaL2gKsXjgkgg%2BLIuBOZxv34ZzDJm19Q1tXEl68Su4kYo%2FOoaBxO%2BotU3VRHYHT6TKkEaHGiNoBuAOC8Y1TG86NG9ZRARBrJ27R1mgDOIWl2t02C4N%2FiRXOZIsLr%2FeO4vdgJcNd7cvMGCC1MfmKXVPq1oxRHw1HW%2BP7idl6oGebsc5s1Hv%2FebZ7P3IQuFIH%2FtMHSU8W4BPurSTOStaKN2sjisV8xOlFXpLux9DlSUTxMKKu0y80RmNVi5xNfoKKcYdnaoiiHfDWIfssrnFotKWsprI%2Fw861jMcZUnFfv02E5icvdF1CPO4GqXRhZrhfF1R2%2FhL%2Bw1BEB5HolAoJE2jE3vsK8S0BkIgjtlv9J1dX5PjpOYo%2B1NE4LNtRctwILiZPavobUgr0rR51CIkFME7gNf1Z5gM1LPk0S%2BXHojHhlpLD0eagG0ezS%2BlBNQGlPurPk%2FfZfc2RTKT7Pb%2BCQwEg0ADQqqbBgbV5r84XauptKTCkpNXCBjqkAYUPmhPRnTfuHOuim4t%2F8aDPGLLhKmsAgrS2y76tlTg5qk%2FeI4H9MEfsTHvFSjJKq2YYYQbTFkFC8BoTdm5yaeXv8qC7RxWvSHz0WeWtqb%2F0lz%2FYk7XLoCWkCRyac0EbFbU%2Bdl5kQLwytgBjrHTh1QgWuy%2Fv4Dq4gF%2BftRnbGm8WoMApPQDLU0cvmy0pQqYtLQJy3HSTlGC7XE017As2jOJBrdN3&X-Amz-Signature=b2ea71a9cb29dc475f7ff5d13f0dac6bcaebe6c13a86a4cd597cdf392d5e71de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
