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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSV3NS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDzOWhecbcS6NXDlGQj53zmY8uZejMptJiKqkGGLtNALAIhAKoX5uGLzEC20quxfFThWOHP0CVN89jHpMNIQmq%2Bx5dOKv8DCGMQABoMNjM3NDIzMTgzODA1Igw5C0Jqp4F4VjblGIQq3AOHpONFDTwMKgCyFVwc2j3iVXVswmt1N7T%2Fz9a1EvIdwBn%2BD95Vnt3Oj1zMj%2FRv417gPaQrrVIHsb4OK4dp8d3YgIfRBKvIH0YEt3Wod%2B0a2SY%2FKAV8AVy0bTcJo51r2iTbLzx1ZG9Ap0GjtydTA24khBR%2Fca9hx9%2FA5sTL6TRQHBYtWGc1uEyJG0NaveTiq95F3IrTKzVty7xjInv3HMU9ChZdLEUPRF%2B%2F7Mp0kUoUQ1uDxlKjwDt%2FlYRpTkP70bSqODdtbdHw%2BZn4xp2nFbYQ3yR2xYUVbHwHoV5zl15TPvz1tzWw%2FdvK1j0QiGmQMN3M84WgSzxVYF60mOJKtlWsFBjTaioXO%2B4heVo8AFYDb8vqfQjpt%2FZjshWJ9uQ3XiGCfiIIDP2VUgC0iOEx4%2Fg2J8bAOykOixTvjNEdgJaJr76vjE3Gs7QKTCPNZPo07qhYK4GCasMPrtcagi1uu%2BoCgyR2IQ1YcIGRWNtMqO8EU9cUtA3tfHE4AcnKLXTuFFKBlMOpAgQZniM4oLTcyiJRWqVWdlwbsDaQI009cZrQG48lRQAiV60xjjW3zQuDU2MnYzSjj279rrbviAgGl4aWx0iFOgbNDU29ybgIuJ9OKO%2BOEgionyVNnttInzD77qrDBjqkASQfrGZ1dbqlXKaWybcwmG4JttOaBSCuxyBXAAmfYL30qdlaA0%2FlnPBDfRm1MxhHamYJahBKpxCXCfatS%2Fulx2FNqftQ9t5X57LSYXVubuTpcU8fqzy0FDOxdO3KyUAfvLOhTQeRMoAylIkJZp5x3FTwlszO4352Fl75DfVYYiIMnN4YmwzPzj5RCaZeWdDRdoruIPk8S5CD0w1UaJlZspJh2KuD&X-Amz-Signature=19ce50a4dc51883823819bcb6c002556e856781d5f75d701bae2875fc968a2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJSV3NS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDzOWhecbcS6NXDlGQj53zmY8uZejMptJiKqkGGLtNALAIhAKoX5uGLzEC20quxfFThWOHP0CVN89jHpMNIQmq%2Bx5dOKv8DCGMQABoMNjM3NDIzMTgzODA1Igw5C0Jqp4F4VjblGIQq3AOHpONFDTwMKgCyFVwc2j3iVXVswmt1N7T%2Fz9a1EvIdwBn%2BD95Vnt3Oj1zMj%2FRv417gPaQrrVIHsb4OK4dp8d3YgIfRBKvIH0YEt3Wod%2B0a2SY%2FKAV8AVy0bTcJo51r2iTbLzx1ZG9Ap0GjtydTA24khBR%2Fca9hx9%2FA5sTL6TRQHBYtWGc1uEyJG0NaveTiq95F3IrTKzVty7xjInv3HMU9ChZdLEUPRF%2B%2F7Mp0kUoUQ1uDxlKjwDt%2FlYRpTkP70bSqODdtbdHw%2BZn4xp2nFbYQ3yR2xYUVbHwHoV5zl15TPvz1tzWw%2FdvK1j0QiGmQMN3M84WgSzxVYF60mOJKtlWsFBjTaioXO%2B4heVo8AFYDb8vqfQjpt%2FZjshWJ9uQ3XiGCfiIIDP2VUgC0iOEx4%2Fg2J8bAOykOixTvjNEdgJaJr76vjE3Gs7QKTCPNZPo07qhYK4GCasMPrtcagi1uu%2BoCgyR2IQ1YcIGRWNtMqO8EU9cUtA3tfHE4AcnKLXTuFFKBlMOpAgQZniM4oLTcyiJRWqVWdlwbsDaQI009cZrQG48lRQAiV60xjjW3zQuDU2MnYzSjj279rrbviAgGl4aWx0iFOgbNDU29ybgIuJ9OKO%2BOEgionyVNnttInzD77qrDBjqkASQfrGZ1dbqlXKaWybcwmG4JttOaBSCuxyBXAAmfYL30qdlaA0%2FlnPBDfRm1MxhHamYJahBKpxCXCfatS%2Fulx2FNqftQ9t5X57LSYXVubuTpcU8fqzy0FDOxdO3KyUAfvLOhTQeRMoAylIkJZp5x3FTwlszO4352Fl75DfVYYiIMnN4YmwzPzj5RCaZeWdDRdoruIPk8S5CD0w1UaJlZspJh2KuD&X-Amz-Signature=8e23eb26fd508c6f5a355ffa27881073f2ac7c707cdb9036e669937cdaa32739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
