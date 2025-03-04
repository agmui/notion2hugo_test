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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLTLOG7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmZlbNEvErxOR7NLeS%2Fh80cURMlIu5wmAYwG90PMK%2BQAiEAsKRj4pQEKzL7zyqO94CasHPAxg5USBwkkonoaoPDCVAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4nOoZTOJ8m3n3JtCrcAxz7z0TRpkxaAX7e4XAz7SjfvaiJ4kVkwV5A%2BKi9rWFoViG1kAxhsAcAMuYB2flMRigf2yl%2FF4o1OpplysxfL6qDvsxNxWiH7J25Wk06xZf0%2BWul0BWvjulQ00Dhae%2BsmHF%2FR6PguhDknZZANGfyxSZCrl%2FemyQJZ1ZL38uhfFv9OlEkzmmoGOHvI7GZsBmpsqq1EsKXl1OMqcvSZUDpt9zqde2omxKjgYFgw%2BATkX44kDvWNm756N%2BTyZUXzWSPRWLnjXEeokFWhl9jEAU0xjEsNIE%2FqUb4NY%2BRCchO0YmigydTSKQSEtC3r%2F5JKKmw3Fopni2NpuGNsHtBEKDC9vRMbvvzolCoQqNvH3F5XsciEWFuHSF9qCX1FmzIsH%2BalO%2Bkd6Rw0AxFEECi%2BP7%2B4s9MLieBN6JKtiIBwe9QPyUsJWg5hin2%2BsGVjIwMp9t%2BrS6RFIhNjYtwOmLT2aODnfZvnfc1sMuTmY8p232qvW8vT%2FkpMgzMzuv%2BO9bzkKd9iLjo4ozk5X5Z8qODMjTSFoU4c8PcBEYwT9dRUFsJm58SjPATH2C8ywL7I9gM7s13lpgPh%2FR5txonwSYQLjRndvhuYXLt1quxLyuRHcwbUegoGV0hPGBd0Rk1wSyEMK3TnL4GOqUBAkJwMkv%2FX7zhxQDx%2FPr0qHvdSHN9vV6SRtcAOJ6eedQGri%2Bp3tQC1AjGW3OZBANGh0dK3GSKuAUV984iS9TErTNzx%2FZqzUeh27mhLmw%2FIIJdmuywk8mBmzsRV0xKzLeEVPZe5gyhEX0CArYrj00xoszkEewMJFv4ksOqPJUG56ys2MWVZyzXTf4JdaBtIqx5JIlQVWDxa9L6DPWEpUN17vCF50AA&X-Amz-Signature=a5963cb1a1a621f7b8c768210024dc7e29fca12f53122c4bcd0d615e35a07b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WLTLOG7%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmZlbNEvErxOR7NLeS%2Fh80cURMlIu5wmAYwG90PMK%2BQAiEAsKRj4pQEKzL7zyqO94CasHPAxg5USBwkkonoaoPDCVAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4nOoZTOJ8m3n3JtCrcAxz7z0TRpkxaAX7e4XAz7SjfvaiJ4kVkwV5A%2BKi9rWFoViG1kAxhsAcAMuYB2flMRigf2yl%2FF4o1OpplysxfL6qDvsxNxWiH7J25Wk06xZf0%2BWul0BWvjulQ00Dhae%2BsmHF%2FR6PguhDknZZANGfyxSZCrl%2FemyQJZ1ZL38uhfFv9OlEkzmmoGOHvI7GZsBmpsqq1EsKXl1OMqcvSZUDpt9zqde2omxKjgYFgw%2BATkX44kDvWNm756N%2BTyZUXzWSPRWLnjXEeokFWhl9jEAU0xjEsNIE%2FqUb4NY%2BRCchO0YmigydTSKQSEtC3r%2F5JKKmw3Fopni2NpuGNsHtBEKDC9vRMbvvzolCoQqNvH3F5XsciEWFuHSF9qCX1FmzIsH%2BalO%2Bkd6Rw0AxFEECi%2BP7%2B4s9MLieBN6JKtiIBwe9QPyUsJWg5hin2%2BsGVjIwMp9t%2BrS6RFIhNjYtwOmLT2aODnfZvnfc1sMuTmY8p232qvW8vT%2FkpMgzMzuv%2BO9bzkKd9iLjo4ozk5X5Z8qODMjTSFoU4c8PcBEYwT9dRUFsJm58SjPATH2C8ywL7I9gM7s13lpgPh%2FR5txonwSYQLjRndvhuYXLt1quxLyuRHcwbUegoGV0hPGBd0Rk1wSyEMK3TnL4GOqUBAkJwMkv%2FX7zhxQDx%2FPr0qHvdSHN9vV6SRtcAOJ6eedQGri%2Bp3tQC1AjGW3OZBANGh0dK3GSKuAUV984iS9TErTNzx%2FZqzUeh27mhLmw%2FIIJdmuywk8mBmzsRV0xKzLeEVPZe5gyhEX0CArYrj00xoszkEewMJFv4ksOqPJUG56ys2MWVZyzXTf4JdaBtIqx5JIlQVWDxa9L6DPWEpUN17vCF50AA&X-Amz-Signature=350716ba0e0697700abb1c83b187186622ffd57ef00323f6c976e302ab7a3567&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
