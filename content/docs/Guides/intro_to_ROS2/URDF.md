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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WTOAIR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCBRvi9SOgoMVl%2F5KXnAYFcnMXbYUsKCoY8MEHOyTnoTAIhAO68qEqCrWxLl9GwyFmScdyVVDIWgdCZuqw6Fhl6ARNYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmDvZZmRW8rZAo94q3AMWCMXtqH6W3UtdPeNS1bdRFLmhhAJVbcJvZhs62pzoCJPYYltMqQUgFwYSCxTkfEFs%2F4g%2BJDhrp9svooK7wDsoB4USjsvDrDKd48qy02pUnmF7bTaqodLmAGMxONXdY6fMU7%2Fq%2Bxry1FbgrtolNocZOy%2BfwCT2kTObZ9eBUEpHR2RI6AuJ%2Ba87nmZoJTwBDkKEDzMvRHC5uVzCKmZyPzB3jxSHZB2UeIQlHSlhkBsxizFYjCeFargxAY1pjfav3tYPCzVpQA2Zv8ApC9A7L9mtPTcasw9uN6Dmf0QBidCBgdsT%2FOqLvZ54%2BJZd9WJWMc%2Blx1bbEU9H7XoumXX4YTZ79tEiyOxOYGVZ0KhnRJZc%2FNVvnZVy%2BEpk6zp1KvmLS0PnADwQJS35EEy7Id9dpUNFgE5qK%2Fn1Y7GX%2FabSAQAl74zKCrDs1T6WXCyIoXNutzY5l9ipDcOXQCbT%2BASqn8sQnU53okJbbG1NbPr3zAXc9G88ak%2BmWNWDx43K%2BsHH4Spypg38zCViiKVIa7blJ1ju%2FdszKbsdR%2FnlFAQ%2Fp%2FOAkbBYUpWznrfYpSg%2FuWushdUAy61un8IIbIGQALmRmWfa8uO0E79pMz3yin0rVxDs0P6vK%2BY5C9q%2BfJCTdjDVjZ3EBjqkAXDYZWiAzIcRbLb2AIGr9WzfPPCE%2FmE2I4nKHpRi7Jofhwl0zvgvg%2B7wtwvyHcEGt1fPHDOogNR11aw8qVUUNB%2BDh1a3wJrwFrpzbq%2FxcPZPTMoPeHg%2BdQD06mwIR79yrDu1GfyiA5PYEI%2FgTr9RUlrVr9PtxpJOOP2b4JxiHYiZoOZmutWPwFmIRWCWn8qMy1qV%2F0OQptxpQ1wyh5JWRFql9yIj&X-Amz-Signature=32f5822d50f1d813391a6b4914e1cf94afd82a57bb1178cfb24ffec75906e10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673WTOAIR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCBRvi9SOgoMVl%2F5KXnAYFcnMXbYUsKCoY8MEHOyTnoTAIhAO68qEqCrWxLl9GwyFmScdyVVDIWgdCZuqw6Fhl6ARNYKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmDvZZmRW8rZAo94q3AMWCMXtqH6W3UtdPeNS1bdRFLmhhAJVbcJvZhs62pzoCJPYYltMqQUgFwYSCxTkfEFs%2F4g%2BJDhrp9svooK7wDsoB4USjsvDrDKd48qy02pUnmF7bTaqodLmAGMxONXdY6fMU7%2Fq%2Bxry1FbgrtolNocZOy%2BfwCT2kTObZ9eBUEpHR2RI6AuJ%2Ba87nmZoJTwBDkKEDzMvRHC5uVzCKmZyPzB3jxSHZB2UeIQlHSlhkBsxizFYjCeFargxAY1pjfav3tYPCzVpQA2Zv8ApC9A7L9mtPTcasw9uN6Dmf0QBidCBgdsT%2FOqLvZ54%2BJZd9WJWMc%2Blx1bbEU9H7XoumXX4YTZ79tEiyOxOYGVZ0KhnRJZc%2FNVvnZVy%2BEpk6zp1KvmLS0PnADwQJS35EEy7Id9dpUNFgE5qK%2Fn1Y7GX%2FabSAQAl74zKCrDs1T6WXCyIoXNutzY5l9ipDcOXQCbT%2BASqn8sQnU53okJbbG1NbPr3zAXc9G88ak%2BmWNWDx43K%2BsHH4Spypg38zCViiKVIa7blJ1ju%2FdszKbsdR%2FnlFAQ%2Fp%2FOAkbBYUpWznrfYpSg%2FuWushdUAy61un8IIbIGQALmRmWfa8uO0E79pMz3yin0rVxDs0P6vK%2BY5C9q%2BfJCTdjDVjZ3EBjqkAXDYZWiAzIcRbLb2AIGr9WzfPPCE%2FmE2I4nKHpRi7Jofhwl0zvgvg%2B7wtwvyHcEGt1fPHDOogNR11aw8qVUUNB%2BDh1a3wJrwFrpzbq%2FxcPZPTMoPeHg%2BdQD06mwIR79yrDu1GfyiA5PYEI%2FgTr9RUlrVr9PtxpJOOP2b4JxiHYiZoOZmutWPwFmIRWCWn8qMy1qV%2F0OQptxpQ1wyh5JWRFql9yIj&X-Amz-Signature=f787d2601ee03c35593e2642e3bca30360f93d76fe08469814fce8b6cf8c8d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
