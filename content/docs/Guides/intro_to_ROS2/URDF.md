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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRA4LHUQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEMb4X1F0IBbq6P3f51e3DnBbdFtx56WIIEgfQNDAgI0AiEA3%2F%2BZhEigrskcCbftC7CKn2IA72nS5%2FpToY72HsfhcxMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEGwRqyNdKNfX9joiSrcA9%2Fn7k%2FWk2JTwQ%2FJQsQJN6ghgzcIv5r5s6ZXvQ71CnPt4LaKBEYMVKFp0psecxSBweFCC84Fkj7wF%2FTyPgpicKWaj2l1RwlvSFlDoTjYZ34Sv3irIz73FUR3oE5pKRwG%2FxPJuiip22gRHtr9mHClgO7eBuIlJRyV%2FYbM%2BtZQU6VWhcFzoeAJHie9Q281jrVuO4n0w5x68%2Bmruf8Ya0gpQkehsq7jwIjd%2BjYTDfVi34qS4WAeTTtTYE%2FkfpChRITM3tgiTB%2FNk1PafNXwJ9vkJ9BZkF%2Ff%2Fi6srRL0fK8DBmXdaE%2FpsuFmHbxX73lhziFaktgh3EqnGVaqvhTPB0ukDJ7t%2FvuI7omJxbh1ap6P9NBuWpJHOEAlf8rUf7OAsEtI4c0JC%2FxP8HDbe5NTEhitHj2ySC%2BBEmCDirsghOhXfn7sbl9OdD4T8jmw1iuJC%2FvmfcNvv8Eigps7GT6s2D1u8bFTLSqaEHZD90acpaO%2BZVnPXj68JgPgLMXbejtPgpQIR79eSAeMNBJEh9becSmU7cx9IXPjx6cP84UGSvrtA43czbB%2BLl1klPJbOVPSKaeSyhcW0%2F4Poo4G0wgj6JCRp0xKV%2F%2F2Io3%2BemehMYgPmFLEHVDh9%2F1uc9l2ZYeGMPXnysEGOqUB4tC1VC8k6vtQj%2BoBHFanJxoa5b4c%2BvHSQ0n35rRBAFp4MeaUw0PVugeHWqyzPzm5WGACLghW717gwQcSAvA3utXVC1h1kRgzTftsGrW5DkzIMCHYpxL3OJFqmBeQndyZQBK%2BORTM2dfy7gY4IVtXKTKkXet6QCsW4XImF7UoCLmiVHxuA%2BHhlF%2BCzimJxNsgWvbdF6PoABUmHP7qlsYSO0NlJ1Ek&X-Amz-Signature=49da115c2f440fab0cc22f6dea6fcd4dc41ce1aa318dc71dff2adf1a8f2018c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRA4LHUQ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEMb4X1F0IBbq6P3f51e3DnBbdFtx56WIIEgfQNDAgI0AiEA3%2F%2BZhEigrskcCbftC7CKn2IA72nS5%2FpToY72HsfhcxMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEGwRqyNdKNfX9joiSrcA9%2Fn7k%2FWk2JTwQ%2FJQsQJN6ghgzcIv5r5s6ZXvQ71CnPt4LaKBEYMVKFp0psecxSBweFCC84Fkj7wF%2FTyPgpicKWaj2l1RwlvSFlDoTjYZ34Sv3irIz73FUR3oE5pKRwG%2FxPJuiip22gRHtr9mHClgO7eBuIlJRyV%2FYbM%2BtZQU6VWhcFzoeAJHie9Q281jrVuO4n0w5x68%2Bmruf8Ya0gpQkehsq7jwIjd%2BjYTDfVi34qS4WAeTTtTYE%2FkfpChRITM3tgiTB%2FNk1PafNXwJ9vkJ9BZkF%2Ff%2Fi6srRL0fK8DBmXdaE%2FpsuFmHbxX73lhziFaktgh3EqnGVaqvhTPB0ukDJ7t%2FvuI7omJxbh1ap6P9NBuWpJHOEAlf8rUf7OAsEtI4c0JC%2FxP8HDbe5NTEhitHj2ySC%2BBEmCDirsghOhXfn7sbl9OdD4T8jmw1iuJC%2FvmfcNvv8Eigps7GT6s2D1u8bFTLSqaEHZD90acpaO%2BZVnPXj68JgPgLMXbejtPgpQIR79eSAeMNBJEh9becSmU7cx9IXPjx6cP84UGSvrtA43czbB%2BLl1klPJbOVPSKaeSyhcW0%2F4Poo4G0wgj6JCRp0xKV%2F%2F2Io3%2BemehMYgPmFLEHVDh9%2F1uc9l2ZYeGMPXnysEGOqUB4tC1VC8k6vtQj%2BoBHFanJxoa5b4c%2BvHSQ0n35rRBAFp4MeaUw0PVugeHWqyzPzm5WGACLghW717gwQcSAvA3utXVC1h1kRgzTftsGrW5DkzIMCHYpxL3OJFqmBeQndyZQBK%2BORTM2dfy7gY4IVtXKTKkXet6QCsW4XImF7UoCLmiVHxuA%2BHhlF%2BCzimJxNsgWvbdF6PoABUmHP7qlsYSO0NlJ1Ek&X-Amz-Signature=c30d60b051a68309115d6445337a78a39f3a3448476895a7d7f0ab1706f31642&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
