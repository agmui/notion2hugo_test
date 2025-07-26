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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETGPFB5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGQOqKKGsh%2Bl%2FBM8BOBm4bWz3NlQgtm6ZltU0wygeanhAiEAqsdAVo%2FmSAXmkOaHMRfzBhcE5JoEf4rArjdjJ3pw6ocq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPrz8Dmj2dBy37tU4yrcAzhbG98PphvQDayjtblOKs%2FmqKoTKq0WEi%2B8WXHCr1Ryy6ITLPAndl9Bitaem8OCDchTORieiWcMSPB5tNa3wZc56ij0EjkG1oI3d94oiZ8YORWbTUQlaIrDvx32bdhCDbzaH41vEJmixZqRvbhJEIDV31z8tIQnKVD8YIyW3jQRHjv4cEZuuwBL4kGbT60OmJeuUH0HMKCsyQoyul0sPcfjIhDLqa1R9dmcEQpzY8vwxIj6lQOdV040vJasc6drKs3ZClPjn5dUZuqMbxwdzNZV%2B69UfdnNKrENTR4%2FVtrsV%2FYO2aI0sUTFulTIcwhnVYnMtfL8XNxjjeLG4mcmk59iZpj7EwLfSacHJnXCFEO8h67IlW3JSkg3%2BTNnxAe78U903ajfGpog%2FUfmknzAL2Ptdvy5HDGkL6WwFZXFeDYP0lvx1ffL925%2BVYmgpDshxWI%2BdGFiEAS155mVHzCAxLNq40a2yLqmvOaDeqxuAJrTQ7aE6rIfH05705VW9H6YCnihEJw1cPcTpzMFhJ7N%2FzDSOq3koNzHS2RZO4BAs1%2FU7iydOULvYyCeHxyruvpDeG3WNBagBpv4vfHyqGLdOGwmJXlaaO67etXTHHOhLNjy690OOJyFUnyOvRfAMLnRj8QGOqUB4%2FComSmah9o%2F3qU5tTZQJ%2ByYOFCFRG3ma%2FjmfbmMy9VDAD6%2Ful3jYuNLGSNxD5%2FU3DZAW5OOKNZC4%2FAy7Jmm0nRc1WcfUSOFPW7RIcCfkK%2B4e%2FiVQtbvGsi4z2HNns2eCrasb14XKwFfM25i6DrEiKTXjCpbkNydB6s1MiZfpGd5C%2FAKk6VEUu%2F8HhpldOkGPKcvo2UvNcruCumKjauNUWanrI7t&X-Amz-Signature=a226b5b573c590b3981d2cdc0de96afb7b15b5c8e77c33a769f8a81ddd61ebad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETGPFB5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGQOqKKGsh%2Bl%2FBM8BOBm4bWz3NlQgtm6ZltU0wygeanhAiEAqsdAVo%2FmSAXmkOaHMRfzBhcE5JoEf4rArjdjJ3pw6ocq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPrz8Dmj2dBy37tU4yrcAzhbG98PphvQDayjtblOKs%2FmqKoTKq0WEi%2B8WXHCr1Ryy6ITLPAndl9Bitaem8OCDchTORieiWcMSPB5tNa3wZc56ij0EjkG1oI3d94oiZ8YORWbTUQlaIrDvx32bdhCDbzaH41vEJmixZqRvbhJEIDV31z8tIQnKVD8YIyW3jQRHjv4cEZuuwBL4kGbT60OmJeuUH0HMKCsyQoyul0sPcfjIhDLqa1R9dmcEQpzY8vwxIj6lQOdV040vJasc6drKs3ZClPjn5dUZuqMbxwdzNZV%2B69UfdnNKrENTR4%2FVtrsV%2FYO2aI0sUTFulTIcwhnVYnMtfL8XNxjjeLG4mcmk59iZpj7EwLfSacHJnXCFEO8h67IlW3JSkg3%2BTNnxAe78U903ajfGpog%2FUfmknzAL2Ptdvy5HDGkL6WwFZXFeDYP0lvx1ffL925%2BVYmgpDshxWI%2BdGFiEAS155mVHzCAxLNq40a2yLqmvOaDeqxuAJrTQ7aE6rIfH05705VW9H6YCnihEJw1cPcTpzMFhJ7N%2FzDSOq3koNzHS2RZO4BAs1%2FU7iydOULvYyCeHxyruvpDeG3WNBagBpv4vfHyqGLdOGwmJXlaaO67etXTHHOhLNjy690OOJyFUnyOvRfAMLnRj8QGOqUB4%2FComSmah9o%2F3qU5tTZQJ%2ByYOFCFRG3ma%2FjmfbmMy9VDAD6%2Ful3jYuNLGSNxD5%2FU3DZAW5OOKNZC4%2FAy7Jmm0nRc1WcfUSOFPW7RIcCfkK%2B4e%2FiVQtbvGsi4z2HNns2eCrasb14XKwFfM25i6DrEiKTXjCpbkNydB6s1MiZfpGd5C%2FAKk6VEUu%2F8HhpldOkGPKcvo2UvNcruCumKjauNUWanrI7t&X-Amz-Signature=11f36d6fdba52600ad242d3305699ffebb14522c81305a1a62af4896af9c7149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
