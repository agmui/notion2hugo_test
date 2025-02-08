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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVZSDV2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCBmY74ZAXQ1xwHv4IiKJq4abBpUYl2WXpQpUMEnqd4QgIhAL%2FDVT5fZUM9uRF3Jrbj7LNVGXurVB2qnk2qhUCE7pKWKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BWyHKkAIWgFmZ0ggq3AOtRDTdvDj%2F0xKPAQCLbNvSUskmRCZz1QSd5F0C2xzCsDC3IJaXYOu2XGPBvgs0h7iPVe7KrFyvZi5spAIorfW%2BPdvrt%2Bn5XWphf1AZMqFLtjiRAmjOglIbr%2BY3I1CJwhxcfO89RaLLa6pJRCZrMn40Zq3xBynwVSYH5ThDnht4Sqlyt6r2Yjriyh2IJgOwdHCRwtvsd5CLG%2BahYv3mKb7n7aj%2BBW0ggadyqSwC3i9g%2BBfPkVK7SVZYpHobLSvRrKbaBBcmuo7ldFKm64E0R%2F78xnR%2Fu%2FC62IMQur916C09gvFi3oRils3tOFn9ie49QG8JHjpnRSM8nleGKu69%2FkgxTXqUFLF2p39U765sDm8CppudgKF2exNy2iSFd41tkQ2VUKkVvNKkjpf%2FFKWWmvyrD25IPiKSVJ%2FOnxmddjcdWI8F1pItx%2FZF7xWXLWoJA2BDjbGa9A37MlwAAuBoyIAAHOoMGmUmMLLiprwgMyRdPK%2B0oa6K8fjNbJJfBph%2BESa2qdiM2eu%2BMvtNyw9suER41wkdJiIs6MlwkiKDep9MrUS0wWdcEIlDIrRyQFzwUXma2qx%2BltWMpYDhD8H6f2SIk3YrnYVXP483SQVXREs4cZAsqryw4mRVQuCLcTCMkJy9BjqkAartAbNW7gDCeDjoSQkrJZvckBh4aloM%2BLHc2nVz1LRcXLyg8t3bYNTTePTsHpb3dy0d8hy0jWX3OBbTx%2FjeZCCV2Rj7aKTYbN9zeWLl0C4OUPBIhbIq%2BPkOmdEv3g5SMwpnqKCXEwtfgOVoewKt%2BUhDT7D%2Fabw6zXiYt2CI3oje%2BS1uDNyyJ26LJvYPsnVgHpbdYoryzkBGVKgK2Qq9mnSp5PX%2F&X-Amz-Signature=817df18578f650c4edac6a7c45b8c749121a3a2b1d0e704eff3da60ada25093c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVZSDV2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCBmY74ZAXQ1xwHv4IiKJq4abBpUYl2WXpQpUMEnqd4QgIhAL%2FDVT5fZUM9uRF3Jrbj7LNVGXurVB2qnk2qhUCE7pKWKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BWyHKkAIWgFmZ0ggq3AOtRDTdvDj%2F0xKPAQCLbNvSUskmRCZz1QSd5F0C2xzCsDC3IJaXYOu2XGPBvgs0h7iPVe7KrFyvZi5spAIorfW%2BPdvrt%2Bn5XWphf1AZMqFLtjiRAmjOglIbr%2BY3I1CJwhxcfO89RaLLa6pJRCZrMn40Zq3xBynwVSYH5ThDnht4Sqlyt6r2Yjriyh2IJgOwdHCRwtvsd5CLG%2BahYv3mKb7n7aj%2BBW0ggadyqSwC3i9g%2BBfPkVK7SVZYpHobLSvRrKbaBBcmuo7ldFKm64E0R%2F78xnR%2Fu%2FC62IMQur916C09gvFi3oRils3tOFn9ie49QG8JHjpnRSM8nleGKu69%2FkgxTXqUFLF2p39U765sDm8CppudgKF2exNy2iSFd41tkQ2VUKkVvNKkjpf%2FFKWWmvyrD25IPiKSVJ%2FOnxmddjcdWI8F1pItx%2FZF7xWXLWoJA2BDjbGa9A37MlwAAuBoyIAAHOoMGmUmMLLiprwgMyRdPK%2B0oa6K8fjNbJJfBph%2BESa2qdiM2eu%2BMvtNyw9suER41wkdJiIs6MlwkiKDep9MrUS0wWdcEIlDIrRyQFzwUXma2qx%2BltWMpYDhD8H6f2SIk3YrnYVXP483SQVXREs4cZAsqryw4mRVQuCLcTCMkJy9BjqkAartAbNW7gDCeDjoSQkrJZvckBh4aloM%2BLHc2nVz1LRcXLyg8t3bYNTTePTsHpb3dy0d8hy0jWX3OBbTx%2FjeZCCV2Rj7aKTYbN9zeWLl0C4OUPBIhbIq%2BPkOmdEv3g5SMwpnqKCXEwtfgOVoewKt%2BUhDT7D%2Fabw6zXiYt2CI3oje%2BS1uDNyyJ26LJvYPsnVgHpbdYoryzkBGVKgK2Qq9mnSp5PX%2F&X-Amz-Signature=cda9a70564b7b3c046d7a75b11f1ab178d27a361d62cfd2b43501a3e427526c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
