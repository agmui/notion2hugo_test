---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5VKYJSI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDWekENZP2whKXDQe4fzB8igJJziwr6EhM3DCdvLDG3WAIhAOh5BIgY%2FAJiPumWEqWmxZTgvx3HFfUmR4A3dGP9C0WSKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2DsbPfVEYPlAreAsq3AMWPZaLEkyvtET5LcyPinnehDrpg7TCaGHR9KfIjOYw2O5RLFyhFvDt4TfPcZvdtOtpQIw5KODLeIdMumK%2BUewYYONrb7lF1axn%2B%2FbPG4gql9XRQ0svecbsJDcNcGOSDKeSKyAhzr2JTi0J5xX0zJ5N0SO2DaQOVvs5gFqz%2BHAtbX57sYcj0iHXST3YQBVgAHdLbEvzyKykgIwtbh37RAo%2B9fGVbaOJpuIfipVDS0aWa9yniFd0YllrhQADTao3RFX5Pzlw6qBb%2Bg3WVZaIIQl2MDh5R6C572DqkpKVgLmV%2Bjbz2mPxtuPW2lvYwlnL4teSPTAelgo0cSLKumVoPbBg0TQ%2BsBYW3e6v4i8p2ldhRjU2P6fRo2NJXhaYG1eGbU2OOy4nqTJs59bTqrMf73La82co4DBv3Pdxpt5Yz1AFXJHQJM0fInUCP8E%2F2FhDIPtGj66u1GnJlk5AsGv%2Fvh1mJUAKmqn2ca1fXnJ5l91Xkzc3bJ7pWIymYCh90mfDvximak5BZGc0vYCh%2FxDthbcjqAiOtFo9up5xgUFIAUwOo1RCKT%2BZkHUCB27XnAWt6f8vMs2S86T4k9uf5nSj4w82SUG%2Bs5N05L9GJ7CZ%2BXNox4Fs7ENQfrq5Rx86rjCys8%2FEBjqkAb55Y1e4YdkuVBgKNF78N9fPgIdVP9GWjaBlqypc7Bmj0PtgbTb68JMkQTTnGkRr3Kt8gW4s4TNdLTPVqmzZ1T%2FcZpj%2FUv9FrBOTg2NsvsW5vLEd7ZH2I%2BJlrxagUhqmIgrqyQFhJ8WqjP%2BjaolnKjJw8wqXmOIXL0DHJ%2FlCuvVOj4O4FeS%2FC8rK9AxrW35dG%2Bl5hYN6tWXIfP6Aao1mZdffD2Nq&X-Amz-Signature=a5399c45fa8ccc7d867d65b14aef23d38e8bf503e8ab1c9504a5395eb0856a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5VKYJSI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDWekENZP2whKXDQe4fzB8igJJziwr6EhM3DCdvLDG3WAIhAOh5BIgY%2FAJiPumWEqWmxZTgvx3HFfUmR4A3dGP9C0WSKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2DsbPfVEYPlAreAsq3AMWPZaLEkyvtET5LcyPinnehDrpg7TCaGHR9KfIjOYw2O5RLFyhFvDt4TfPcZvdtOtpQIw5KODLeIdMumK%2BUewYYONrb7lF1axn%2B%2FbPG4gql9XRQ0svecbsJDcNcGOSDKeSKyAhzr2JTi0J5xX0zJ5N0SO2DaQOVvs5gFqz%2BHAtbX57sYcj0iHXST3YQBVgAHdLbEvzyKykgIwtbh37RAo%2B9fGVbaOJpuIfipVDS0aWa9yniFd0YllrhQADTao3RFX5Pzlw6qBb%2Bg3WVZaIIQl2MDh5R6C572DqkpKVgLmV%2Bjbz2mPxtuPW2lvYwlnL4teSPTAelgo0cSLKumVoPbBg0TQ%2BsBYW3e6v4i8p2ldhRjU2P6fRo2NJXhaYG1eGbU2OOy4nqTJs59bTqrMf73La82co4DBv3Pdxpt5Yz1AFXJHQJM0fInUCP8E%2F2FhDIPtGj66u1GnJlk5AsGv%2Fvh1mJUAKmqn2ca1fXnJ5l91Xkzc3bJ7pWIymYCh90mfDvximak5BZGc0vYCh%2FxDthbcjqAiOtFo9up5xgUFIAUwOo1RCKT%2BZkHUCB27XnAWt6f8vMs2S86T4k9uf5nSj4w82SUG%2Bs5N05L9GJ7CZ%2BXNox4Fs7ENQfrq5Rx86rjCys8%2FEBjqkAb55Y1e4YdkuVBgKNF78N9fPgIdVP9GWjaBlqypc7Bmj0PtgbTb68JMkQTTnGkRr3Kt8gW4s4TNdLTPVqmzZ1T%2FcZpj%2FUv9FrBOTg2NsvsW5vLEd7ZH2I%2BJlrxagUhqmIgrqyQFhJ8WqjP%2BjaolnKjJw8wqXmOIXL0DHJ%2FlCuvVOj4O4FeS%2FC8rK9AxrW35dG%2Bl5hYN6tWXIfP6Aao1mZdffD2Nq&X-Amz-Signature=26e95ba1584d598ff1fedba935bd8ccd659da96e17ec08ebbb14224091c38f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
