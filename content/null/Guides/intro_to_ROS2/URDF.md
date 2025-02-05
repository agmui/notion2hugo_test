---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/URDF.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBEV2XU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCID6XhRXfqo%2BD10EB4LbETRb97dcsoYXPdRGG3SFrBsz1AiEAzKNfJrAUdTYObJ826O6QG9xJ%2F9PERFEkw8EEQQnPHQAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDbmXME7ZtDWEpHxZCrcAzvxr%2FmZbB0oSEkfPs6Pac%2BaesHHHN0DnOJxd6qWzWxPdRoYE%2FVYPo2dnXA7P%2BgGtN3nczgSz8%2FaT%2BKQ%2FV5o18Mc5mFtG7pF0zT%2B45jfhysDp%2Fgz8EUGvMoZGOao0DLlYI0XRaAqV%2Bk%2FQmubvMU%2FOimjRXSjuGuUTvCQ5XaKkQJ3DNhQ%2F3MKOa7MRzKzwVzk6W2GD%2BwgrH1LNzSef8TEpILmV7yZ56UWnVA%2Br6ELQ%2FX2TRJMghW9MoJwvuHdZM4yU6SHhrESNqC2iQKchfrfMfiHmIC0CX3qh5d4Vp3WGHVZxA0Ru847k6HnBDAqHyiW%2BaciROFrLoA5X0RwxALpJNrzKh2FrpvKiTyjP8gE3zLW6lMa9jPlzRdT%2FlK2e98ssnubiU7Csn5V0ENvrhTvlsohXpSDh9G4gBoBaexmiO8MUViRodsHrA%2F9pxr%2FkkpKQbT9%2FJHh5BtTFuz%2Fr2QA%2BJ15Iwun%2BglYDnda84HhTSfzLXZ1NAjMBopKhBM%2B7PbGdZ6%2BfPS420UWJD22Wkgh5G8SPg0rbXt1Vr9mT5MCR7omCF8EEqJD%2BYKVcxP%2FxYBoDbRFFH6mKlYRp0GxC2kHCY%2BxLqstXhtat3vmRZdkHoxkOOucNtavzJ8PUjfJMNOXjL0GOqUBlT%2BQkOQbee%2FQe8FkQ2BSyqR2YrsfIfTUDB4YDJkgYn1Qr4SgKkcP88QxoA9WZf%2Byf5YpwvR6q5bNwtB0TcY72dliIHhvk%2FlrYT%2Bl3BL14Wy0nzpfhjXrH1BUqYO5%2Bmj9Kye%2B2z3bOTM%2BMZz7cAnPeITnnPQUEsXoTXIVKbcWzBnuTBCHYNc4ltmpF639HfkEgar1q6DJpDtryxSBBPfczUjz3hui&X-Amz-Signature=085c8994d4c08ee0cfdf9be94745a621f4e77a92f9827b0db277167e4b0f9746&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBEV2XU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCID6XhRXfqo%2BD10EB4LbETRb97dcsoYXPdRGG3SFrBsz1AiEAzKNfJrAUdTYObJ826O6QG9xJ%2F9PERFEkw8EEQQnPHQAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDbmXME7ZtDWEpHxZCrcAzvxr%2FmZbB0oSEkfPs6Pac%2BaesHHHN0DnOJxd6qWzWxPdRoYE%2FVYPo2dnXA7P%2BgGtN3nczgSz8%2FaT%2BKQ%2FV5o18Mc5mFtG7pF0zT%2B45jfhysDp%2Fgz8EUGvMoZGOao0DLlYI0XRaAqV%2Bk%2FQmubvMU%2FOimjRXSjuGuUTvCQ5XaKkQJ3DNhQ%2F3MKOa7MRzKzwVzk6W2GD%2BwgrH1LNzSef8TEpILmV7yZ56UWnVA%2Br6ELQ%2FX2TRJMghW9MoJwvuHdZM4yU6SHhrESNqC2iQKchfrfMfiHmIC0CX3qh5d4Vp3WGHVZxA0Ru847k6HnBDAqHyiW%2BaciROFrLoA5X0RwxALpJNrzKh2FrpvKiTyjP8gE3zLW6lMa9jPlzRdT%2FlK2e98ssnubiU7Csn5V0ENvrhTvlsohXpSDh9G4gBoBaexmiO8MUViRodsHrA%2F9pxr%2FkkpKQbT9%2FJHh5BtTFuz%2Fr2QA%2BJ15Iwun%2BglYDnda84HhTSfzLXZ1NAjMBopKhBM%2B7PbGdZ6%2BfPS420UWJD22Wkgh5G8SPg0rbXt1Vr9mT5MCR7omCF8EEqJD%2BYKVcxP%2FxYBoDbRFFH6mKlYRp0GxC2kHCY%2BxLqstXhtat3vmRZdkHoxkOOucNtavzJ8PUjfJMNOXjL0GOqUBlT%2BQkOQbee%2FQe8FkQ2BSyqR2YrsfIfTUDB4YDJkgYn1Qr4SgKkcP88QxoA9WZf%2Byf5YpwvR6q5bNwtB0TcY72dliIHhvk%2FlrYT%2Bl3BL14Wy0nzpfhjXrH1BUqYO5%2Bmj9Kye%2B2z3bOTM%2BMZz7cAnPeITnnPQUEsXoTXIVKbcWzBnuTBCHYNc4ltmpF639HfkEgar1q6DJpDtryxSBBPfczUjz3hui&X-Amz-Signature=2edaafad99989798c9ecfd42b456425ec428c9d1cc7d373bfb70714545d07436&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
