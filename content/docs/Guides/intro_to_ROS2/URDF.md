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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRM43HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDKQ3at9ma2x%2Foun%2BaOpcsWu%2Bp58mMf%2BiuSSJFo3P86aQIgO0ceGBc7clOZSve4fHwwYMkyj33VtaBaChs45p7ajDIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc%2BzGmbM%2BYGB6uOZircAypAnlL%2F86kdDm10SeeTqAadwQv13D3qY6W3hgu1YZIeiDyVbejeQX1nYxsJJoPxrdP4gbLbZveH9iFL86%2FJLGoW020qos6N2mpHSUreCQQOvzuDmaWpVWq%2F73%2Bru3u5vW4nMSC3q9sqaqzZep2nLIwYog%2FWuu1Qkif0vAOu0%2BU11fL61cI%2B96T%2FvgmuoFAi0fYZMZO86YE0O4ct8vr36bhsbqb96gVKgOGtkIISZV2uWAHmlonQISCgPMHmhdG7NFWzsrXqQodaymfTVTabej1%2BzujyJbE5K%2BuYxRc6pDsx49JnjQrea0rVhcAtg%2BMYWgR9Alklu2XpExHotLHpThUFfAb7t4DNZuE4CNFc03Xix%2FPc6comg88H%2FB0T3Kzt1Lx%2Fc4rppKcGDIRCx5hGbSKked6G4NXd%2BwMKkzFBFWSz%2FFt6Gn3BuzvhY8QNYwGxbZ8WESS4djppzc5VZ4hpAj%2FhZBUDfdobRl56kIBpI84UsM8ocKIwhV7ILbdmqLPSuWGA0wCZf7mAiznn%2F5aWMZ1hgKZwNWqi%2BnWCkg8uVPCS49Dbq8N5GiznmBx4i0Aa%2BnnrMSRpRa236YmzrtdF9aVsg86JelzebgWjyWHJYlkplYFDtOM9X%2B5d4okPMKecxb4GOqUBT6yAs3Z4b1iSxB46a7NEhmCBpCTd0B9BDsEtKwwDQ8s%2B4c%2FdZ8sOUwJgm29NNiDdp58%2BHGbhEAgOTH7hSFHTIofY6xkfsb6Y%2FM7rC7sz710icOf3l%2FojG0OttkaApV%2FThHcd2Rri5wPlQydgDOahzguUoCwFh7Zm9mxT%2F3uhI9IbxtwGSf3uPXHKc5vNqmaW7J4kmawYqnQvFMleFuKubJvggUjF&X-Amz-Signature=40deb1e27e7ad88f3a29d00f486bb3ac6f564f2ae182da38917c6bb882a5b0a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVRM43HC%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDKQ3at9ma2x%2Foun%2BaOpcsWu%2Bp58mMf%2BiuSSJFo3P86aQIgO0ceGBc7clOZSve4fHwwYMkyj33VtaBaChs45p7ajDIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc%2BzGmbM%2BYGB6uOZircAypAnlL%2F86kdDm10SeeTqAadwQv13D3qY6W3hgu1YZIeiDyVbejeQX1nYxsJJoPxrdP4gbLbZveH9iFL86%2FJLGoW020qos6N2mpHSUreCQQOvzuDmaWpVWq%2F73%2Bru3u5vW4nMSC3q9sqaqzZep2nLIwYog%2FWuu1Qkif0vAOu0%2BU11fL61cI%2B96T%2FvgmuoFAi0fYZMZO86YE0O4ct8vr36bhsbqb96gVKgOGtkIISZV2uWAHmlonQISCgPMHmhdG7NFWzsrXqQodaymfTVTabej1%2BzujyJbE5K%2BuYxRc6pDsx49JnjQrea0rVhcAtg%2BMYWgR9Alklu2XpExHotLHpThUFfAb7t4DNZuE4CNFc03Xix%2FPc6comg88H%2FB0T3Kzt1Lx%2Fc4rppKcGDIRCx5hGbSKked6G4NXd%2BwMKkzFBFWSz%2FFt6Gn3BuzvhY8QNYwGxbZ8WESS4djppzc5VZ4hpAj%2FhZBUDfdobRl56kIBpI84UsM8ocKIwhV7ILbdmqLPSuWGA0wCZf7mAiznn%2F5aWMZ1hgKZwNWqi%2BnWCkg8uVPCS49Dbq8N5GiznmBx4i0Aa%2BnnrMSRpRa236YmzrtdF9aVsg86JelzebgWjyWHJYlkplYFDtOM9X%2B5d4okPMKecxb4GOqUBT6yAs3Z4b1iSxB46a7NEhmCBpCTd0B9BDsEtKwwDQ8s%2B4c%2FdZ8sOUwJgm29NNiDdp58%2BHGbhEAgOTH7hSFHTIofY6xkfsb6Y%2FM7rC7sz710icOf3l%2FojG0OttkaApV%2FThHcd2Rri5wPlQydgDOahzguUoCwFh7Zm9mxT%2F3uhI9IbxtwGSf3uPXHKc5vNqmaW7J4kmawYqnQvFMleFuKubJvggUjF&X-Amz-Signature=291f3f542e60151cd08609b3be1efc569275308740b40d91dd17f6f5d298b3c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
