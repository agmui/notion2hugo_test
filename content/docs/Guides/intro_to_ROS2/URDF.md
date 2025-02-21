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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCNZSBY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArQnfNy%2BiblEkf%2FzcBRmuVSAHf7ovk9djQ6zBAPyYHTAiA9Z%2BKGxL2KM7N%2BqFbkk37skjOZS%2Fx2OsmmxXnWxeOJfiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIbzok2oUD1xg2hvKtwDXY0Oe7EbrHsIoyOSFHxRzkMmjYKBiuia%2BbZ2CjCFNGfp%2FG73QSMhDZQKaafJ1B%2FBuuI4QGCjeO1T%2F2AT0kaKgTXmdGyO2MiZIycg1ZHN9vcdA%2Fw2E1caNLLjuX7C8UDV0kj3Ff%2Fho1Bd%2F0k6%2BcmOssgFwT%2FQicO3sLBW3ipZxCkx%2FjjO5N2lfbYScrOQpvBhjf5f5QC95Boe3WR2ESEy2hIGhSBio9Zswt0%2FyW9ZkHPOv3STo4FO462hsWLJZxVK1YV2oVM7i567tH5F9sQuyVPwaDTvvwAfZX83cCwv3fynm1gktITV7uXFvF%2FaHtkD4dESKs20SyBscBj0gB%2F5UL%2B8HNbPBx%2BchBCw5suZqLQPp0eWlEt9IlzQfI2gzf%2Bo9dC7gOc3kmLY9vh2FZcahn5VzydpArXijQrl0iZhUt58hJm6gPDiZIbt9WnmndNL1cAOTPFjHSQaszmYP5wJ4JSS02E%2B7AcqZV1mJo6kNinu8s9Rde1z78iw16CJhinHNMLJiY%2BqvLpz%2BRQZhTfAPpfD5yDn65RvLlwlms1aWwsUAQTQTZ%2FPgtmcybCsTZUE3kwkPxFXQgxvnt1amA19Ovtp7%2FMGtDny7S6Zu%2Bwo0Hb69ZxDHuP8yqR2W%2F0wg4TfvQY6pgFO7CxIq%2BWbbX81sElB8WpKMIX%2FD%2BnRzi%2FnJgYoVI6DlofCVJ4n0gu8q7%2Fir%2FzXk%2BPki9sRXwXvYcEd5viAN1vxsuDnCoAbtK4mJx0UFAl8ObPGRrWcV4pdZ05%2Fgxtuy52%2FtHSEM4qC1O5YBh%2FN7X5ZEyb5BRnH1ZrYCaQBm%2Bye3PoIqeIZg%2B5RLLVVCftFhGj5IDXzqdz8Qnv%2FJJHCdPuKZ1kwlb9%2F&X-Amz-Signature=6ce9c404a83ff1132391df26fa28edef12ee34ac32871d47e7bcc472bc1046f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GCNZSBY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArQnfNy%2BiblEkf%2FzcBRmuVSAHf7ovk9djQ6zBAPyYHTAiA9Z%2BKGxL2KM7N%2BqFbkk37skjOZS%2Fx2OsmmxXnWxeOJfiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIbzok2oUD1xg2hvKtwDXY0Oe7EbrHsIoyOSFHxRzkMmjYKBiuia%2BbZ2CjCFNGfp%2FG73QSMhDZQKaafJ1B%2FBuuI4QGCjeO1T%2F2AT0kaKgTXmdGyO2MiZIycg1ZHN9vcdA%2Fw2E1caNLLjuX7C8UDV0kj3Ff%2Fho1Bd%2F0k6%2BcmOssgFwT%2FQicO3sLBW3ipZxCkx%2FjjO5N2lfbYScrOQpvBhjf5f5QC95Boe3WR2ESEy2hIGhSBio9Zswt0%2FyW9ZkHPOv3STo4FO462hsWLJZxVK1YV2oVM7i567tH5F9sQuyVPwaDTvvwAfZX83cCwv3fynm1gktITV7uXFvF%2FaHtkD4dESKs20SyBscBj0gB%2F5UL%2B8HNbPBx%2BchBCw5suZqLQPp0eWlEt9IlzQfI2gzf%2Bo9dC7gOc3kmLY9vh2FZcahn5VzydpArXijQrl0iZhUt58hJm6gPDiZIbt9WnmndNL1cAOTPFjHSQaszmYP5wJ4JSS02E%2B7AcqZV1mJo6kNinu8s9Rde1z78iw16CJhinHNMLJiY%2BqvLpz%2BRQZhTfAPpfD5yDn65RvLlwlms1aWwsUAQTQTZ%2FPgtmcybCsTZUE3kwkPxFXQgxvnt1amA19Ovtp7%2FMGtDny7S6Zu%2Bwo0Hb69ZxDHuP8yqR2W%2F0wg4TfvQY6pgFO7CxIq%2BWbbX81sElB8WpKMIX%2FD%2BnRzi%2FnJgYoVI6DlofCVJ4n0gu8q7%2Fir%2FzXk%2BPki9sRXwXvYcEd5viAN1vxsuDnCoAbtK4mJx0UFAl8ObPGRrWcV4pdZ05%2Fgxtuy52%2FtHSEM4qC1O5YBh%2FN7X5ZEyb5BRnH1ZrYCaQBm%2Bye3PoIqeIZg%2B5RLLVVCftFhGj5IDXzqdz8Qnv%2FJJHCdPuKZ1kwlb9%2F&X-Amz-Signature=e57c1718bff93b33b4c88bdac46751af662e4f58b2a57b4ba63fcf59bbe381d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
