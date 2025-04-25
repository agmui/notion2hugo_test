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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPCTT3D%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHqGLg8npf3Rjn%2FyAGIxxsAEGuLIKOt6mmBuT5v56c1AIgZC23fLiLhKYy5TlTI7XpDFcZ7sFrXkc%2Fm7i35gUqesAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDElyg4vUzo1LMjRswyrcA7jg7Y%2Bzyo5f0u8wds8k%2FbQGXQOw%2BhJU4NC2HA7QXyp4q6voVgBV%2BnUVaKMFS8nF2MdbCUXqEGL8Ty3M5cWqjD2Tn%2FDAkuqbUrwTNypRvCdJIlv6y7YkJlR8aZU%2FFvjJ60euCL5%2BbU6btyyZPhMOZDhGr%2FvUCF6sCX%2BlLsGAZgK3SiZyGMNsuEyxGcAu3PQkq2iofybi1AUgHHjfiyHwthUH840nro3rRheW1mE1DpCvPP3gAnIceAAEs0oc5ooIlRjP0xJEfksQ7hUGlbyusNF%2FqJvlo5pFNdNuN%2FeP7CDTmytaaCGJ8XwHM80OvlWAZYVsSWZBsjhV3BJjchv%2B9FLFXonL0brLQi1EvyhAYpwy7eaWmVELWLFGzi5%2F3MRBL2zAN%2BLjPXHJ%2FyP3wORYBUTIBXhm9ATFJxXvUufbrcWCvrddPeURG762qXv59EtUSFGt4MV2I%2Fxee01I2hV1mqyvteMZQdfh1GMdCt20ZIiAdPRLVdt13xF%2BdLNZTt6kDN%2FkuAdUwBAh3qrBpOayiMm%2BViFwlTd6glydmX0xb9qIsKM4J81S4%2FgVf4GP1VwFQpeQkYWayKC0oVcls04j6xoXuxpP%2B5SitYeYc%2F1SVf4o9eA1yu1qVYryTt5TMMCbrcAGOqUBbpUxe18ig7lg8PfGHQ0FTci%2FEy1b%2FJh6MvV1B6JhQQpfTvq52BvwwDTBnFaXyaxVpKDe8HtFM%2BF%2Fcck7icoBat%2FSAEb0haPzUJrCJY5B1Xcp%2BzjklDaDmSJ4n7ut7fMOJ31JzezGDtL%2BScbzg8i%2FHXLGjqbH46LZv1MR5eAroPdlPcChy2HrS1pNljCIKF0HuROJ%2FnYJi5AUgctjhXSeBjNnI5lq&X-Amz-Signature=6a7cb35a3f70035b68859e8ae18d7f8d8fb0283717db919b7cab1f09b8f3a4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPCTT3D%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHqGLg8npf3Rjn%2FyAGIxxsAEGuLIKOt6mmBuT5v56c1AIgZC23fLiLhKYy5TlTI7XpDFcZ7sFrXkc%2Fm7i35gUqesAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDElyg4vUzo1LMjRswyrcA7jg7Y%2Bzyo5f0u8wds8k%2FbQGXQOw%2BhJU4NC2HA7QXyp4q6voVgBV%2BnUVaKMFS8nF2MdbCUXqEGL8Ty3M5cWqjD2Tn%2FDAkuqbUrwTNypRvCdJIlv6y7YkJlR8aZU%2FFvjJ60euCL5%2BbU6btyyZPhMOZDhGr%2FvUCF6sCX%2BlLsGAZgK3SiZyGMNsuEyxGcAu3PQkq2iofybi1AUgHHjfiyHwthUH840nro3rRheW1mE1DpCvPP3gAnIceAAEs0oc5ooIlRjP0xJEfksQ7hUGlbyusNF%2FqJvlo5pFNdNuN%2FeP7CDTmytaaCGJ8XwHM80OvlWAZYVsSWZBsjhV3BJjchv%2B9FLFXonL0brLQi1EvyhAYpwy7eaWmVELWLFGzi5%2F3MRBL2zAN%2BLjPXHJ%2FyP3wORYBUTIBXhm9ATFJxXvUufbrcWCvrddPeURG762qXv59EtUSFGt4MV2I%2Fxee01I2hV1mqyvteMZQdfh1GMdCt20ZIiAdPRLVdt13xF%2BdLNZTt6kDN%2FkuAdUwBAh3qrBpOayiMm%2BViFwlTd6glydmX0xb9qIsKM4J81S4%2FgVf4GP1VwFQpeQkYWayKC0oVcls04j6xoXuxpP%2B5SitYeYc%2F1SVf4o9eA1yu1qVYryTt5TMMCbrcAGOqUBbpUxe18ig7lg8PfGHQ0FTci%2FEy1b%2FJh6MvV1B6JhQQpfTvq52BvwwDTBnFaXyaxVpKDe8HtFM%2BF%2Fcck7icoBat%2FSAEb0haPzUJrCJY5B1Xcp%2BzjklDaDmSJ4n7ut7fMOJ31JzezGDtL%2BScbzg8i%2FHXLGjqbH46LZv1MR5eAroPdlPcChy2HrS1pNljCIKF0HuROJ%2FnYJi5AUgctjhXSeBjNnI5lq&X-Amz-Signature=8421788271c7c6cdb08d54c7faacaa7640da41ea4a6eac494036caaf0dc09752&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
