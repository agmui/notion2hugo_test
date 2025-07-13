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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3CHFFW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCJzxMlmc0NmL1I5DU1jxIy2I3I54RMKabKsyO4xtGjAiAbhvMqXrCrMAme%2BRCOvrsMJ9DO0GFpKyx2%2BAsUrZf3CCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkv4VDkpb1e8v7xtKtwDipu77qerHZQoi%2F8eWbibO3A250nT3AmA7DYDKUZLG7Pb8f8CSeTctS%2FTbC%2FBTyneDBeeEUSYT2yBKuTzGysb73PVNz2N8%2F2XcQarX7HIafhJvk6wq0D%2BUIeg0wjX67h0MKLG3zqggf1%2BOjIWRsMoIi1Nxw97wwQm4G1JV1KopYMnx60TkC58XnkY44ji21lqnk4LGu6nQ94yITjFiaJIkkFEPHRyShxEuMsrtGH4I9kwnqhY%2BObiT2n251792SvHJjGSFMfBPZBoWtFPJPhYxQdes6ZmQ7%2BwSilskgb7r7K4gqELSYIuqkhR2CnkuDjjI035tn1LxWV9wSdQGYHMwZBNjTBGbX4OnljHXMeHSOXrdTaz76Cv3QNF9WL0Sh5KCmgA%2FTs9yG07JgwkziDy2t%2FBZ5b9VBI1jhMc4KsdbzjfRpnccq7SjPNnpI6AKD6HpqI9iM2pZ8XeModGWVzSbkbvvXO6X%2BObGWsczLforKaErdDIFIEHawqeuue5qrqI%2F9odOJPEuOURSBzLfnPhm6UGnqWdPb8OrZPq3Zouqn6Di8pCMuXNM7YSVZenmn7ZYzUgZrhvzsmMog94fRufK7vla6bUYpOzt%2BzpzimO%2BqrUCproFTJH96Y%2BmJUwvdnMwwY6pgECm0JavthOS%2BrI6i8xOq73MV8TH9ezdxpvg5qxmp5vVCz%2BUuEdmnN4t%2B%2BFoAXAk64k6p9Prq%2FTj5t5qr4NT5vmT0alwDLetIkiyQkFjEimPoJBtwDYUgOKIaeluw7L53VOQ%2BEHhfcbO%2Bxu4QK0Bgp%2B7eKsExIoG%2FPXwkpdIrHKj06Lv%2BdugZGgXtntB5LFI%2FN8gO5Y%2FdB1VM9ho66xlbdhoNxoeEmz&X-Amz-Signature=62ef18f8c0f333c4cfd308ad71c3ee6d6c463190748239c48820580fffa1e9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3CHFFW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCJzxMlmc0NmL1I5DU1jxIy2I3I54RMKabKsyO4xtGjAiAbhvMqXrCrMAme%2BRCOvrsMJ9DO0GFpKyx2%2BAsUrZf3CCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkv4VDkpb1e8v7xtKtwDipu77qerHZQoi%2F8eWbibO3A250nT3AmA7DYDKUZLG7Pb8f8CSeTctS%2FTbC%2FBTyneDBeeEUSYT2yBKuTzGysb73PVNz2N8%2F2XcQarX7HIafhJvk6wq0D%2BUIeg0wjX67h0MKLG3zqggf1%2BOjIWRsMoIi1Nxw97wwQm4G1JV1KopYMnx60TkC58XnkY44ji21lqnk4LGu6nQ94yITjFiaJIkkFEPHRyShxEuMsrtGH4I9kwnqhY%2BObiT2n251792SvHJjGSFMfBPZBoWtFPJPhYxQdes6ZmQ7%2BwSilskgb7r7K4gqELSYIuqkhR2CnkuDjjI035tn1LxWV9wSdQGYHMwZBNjTBGbX4OnljHXMeHSOXrdTaz76Cv3QNF9WL0Sh5KCmgA%2FTs9yG07JgwkziDy2t%2FBZ5b9VBI1jhMc4KsdbzjfRpnccq7SjPNnpI6AKD6HpqI9iM2pZ8XeModGWVzSbkbvvXO6X%2BObGWsczLforKaErdDIFIEHawqeuue5qrqI%2F9odOJPEuOURSBzLfnPhm6UGnqWdPb8OrZPq3Zouqn6Di8pCMuXNM7YSVZenmn7ZYzUgZrhvzsmMog94fRufK7vla6bUYpOzt%2BzpzimO%2BqrUCproFTJH96Y%2BmJUwvdnMwwY6pgECm0JavthOS%2BrI6i8xOq73MV8TH9ezdxpvg5qxmp5vVCz%2BUuEdmnN4t%2B%2BFoAXAk64k6p9Prq%2FTj5t5qr4NT5vmT0alwDLetIkiyQkFjEimPoJBtwDYUgOKIaeluw7L53VOQ%2BEHhfcbO%2Bxu4QK0Bgp%2B7eKsExIoG%2FPXwkpdIrHKj06Lv%2BdugZGgXtntB5LFI%2FN8gO5Y%2FdB1VM9ho66xlbdhoNxoeEmz&X-Amz-Signature=058c8e1211c9d4036e9197a31289e5b64fe832f94927d8718cfd02db70441ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
