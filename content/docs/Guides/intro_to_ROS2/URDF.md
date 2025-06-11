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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIGHCKP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDTSf9wNBJp8q%2BxV1cIjqScShTdVwdSblI6nVbSjSxbsAIhAMQ4gFREC9%2BPfgdVs7JLtNchH3fp4wQSX728Aox8sT%2BrKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf73s8JYVPXomgmOUq3ANhnUmV%2F65w%2FF7r4NZ8pH9azmVIX6IwCIhogPiSZtLQmt%2BmAy2IIOEtxleDWr0YSNz9%2BeZft%2BeXO0SI95egIjmeCTMXWkadYK4bzJOy6e5HcrudAAuFpQ5G0eyE6y%2FnGBgE0%2Fm7m7JS5Z8cwqtD2%2BYBz3CzHucETGafAXGdsiRtIWsQWNuwhcX2Dy4VNpnx%2BAvCncmvrdd7%2B80f8CBjGIHdzx3mOJ6ptcnBhNqvviS0xTpzPon0Icrdgy%2Fsu%2BCRyv9a%2BM1ag3ydywxlpXhBtY5GbFS1uHFSPVSbvP5YfBACG6MKssDKcvEIRV5cDA73J9R9xEkdUm0YjeNzzUVowxmZ0P3x1Th%2BFWSriXAA6ttlg15VCbjH8zEUt7P7w4Nt8xDfxnqIc14L%2BTN0Kt2G%2FIvBxZVr%2F8u3b940ecTwiU7RSwjncfzQgnPuBugFLGzQKAEEcDfdJwh8V%2FnW77NEjn95VHQ08RYkqUqOxWUDH%2FfzJkUeC6MtiN%2BIp6x5iPrSY6kEDBHEvYweItV6MTMJPMkxKXN7TNvAqzHmD2Xrqz49aBl1%2FCwwealr%2F5UuH5Gfeo2AKDuYtSH9KsH2kA43RQRsbOB%2F8SiU4aldYzplVvuaOoUuuxSNFr6NKujWvTDsyKfCBjqkAVYr48EuFNa9gXj84DNIz%2Biu7bdl7r3zeNpmyw9BwrBxtzdJhG32V8CTMH3B45gyoZACmEWYvrReqsVNox2n74vUxgg7AYiDFr8ICgMxNLwqqLbaFu48GAa8VhZGyMcfTUJKLRgSsofhTHoYotBc7CSAMTgQ7NzeCYNbYU2DiMeGQrr%2BMYnYVRiGEWmfApt3m9J4zjJu9dokvnMlmEZTBM6Y%2BKdg&X-Amz-Signature=523a747495e10ef6e1cf2ee8f1a778fe05e5263ad8a918131bcfd7a4ef2fcba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIGHCKP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDTSf9wNBJp8q%2BxV1cIjqScShTdVwdSblI6nVbSjSxbsAIhAMQ4gFREC9%2BPfgdVs7JLtNchH3fp4wQSX728Aox8sT%2BrKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf73s8JYVPXomgmOUq3ANhnUmV%2F65w%2FF7r4NZ8pH9azmVIX6IwCIhogPiSZtLQmt%2BmAy2IIOEtxleDWr0YSNz9%2BeZft%2BeXO0SI95egIjmeCTMXWkadYK4bzJOy6e5HcrudAAuFpQ5G0eyE6y%2FnGBgE0%2Fm7m7JS5Z8cwqtD2%2BYBz3CzHucETGafAXGdsiRtIWsQWNuwhcX2Dy4VNpnx%2BAvCncmvrdd7%2B80f8CBjGIHdzx3mOJ6ptcnBhNqvviS0xTpzPon0Icrdgy%2Fsu%2BCRyv9a%2BM1ag3ydywxlpXhBtY5GbFS1uHFSPVSbvP5YfBACG6MKssDKcvEIRV5cDA73J9R9xEkdUm0YjeNzzUVowxmZ0P3x1Th%2BFWSriXAA6ttlg15VCbjH8zEUt7P7w4Nt8xDfxnqIc14L%2BTN0Kt2G%2FIvBxZVr%2F8u3b940ecTwiU7RSwjncfzQgnPuBugFLGzQKAEEcDfdJwh8V%2FnW77NEjn95VHQ08RYkqUqOxWUDH%2FfzJkUeC6MtiN%2BIp6x5iPrSY6kEDBHEvYweItV6MTMJPMkxKXN7TNvAqzHmD2Xrqz49aBl1%2FCwwealr%2F5UuH5Gfeo2AKDuYtSH9KsH2kA43RQRsbOB%2F8SiU4aldYzplVvuaOoUuuxSNFr6NKujWvTDsyKfCBjqkAVYr48EuFNa9gXj84DNIz%2Biu7bdl7r3zeNpmyw9BwrBxtzdJhG32V8CTMH3B45gyoZACmEWYvrReqsVNox2n74vUxgg7AYiDFr8ICgMxNLwqqLbaFu48GAa8VhZGyMcfTUJKLRgSsofhTHoYotBc7CSAMTgQ7NzeCYNbYU2DiMeGQrr%2BMYnYVRiGEWmfApt3m9J4zjJu9dokvnMlmEZTBM6Y%2BKdg&X-Amz-Signature=9e8f989ac3cf06b281f31903bc60c09cc8ca0ab168153f3dd1c7fa04e1e10f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
