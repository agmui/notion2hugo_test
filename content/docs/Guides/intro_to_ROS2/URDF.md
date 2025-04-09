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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QKPLZR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDYB3tWgH8oJUXjN6IDiiyH3raiKX%2FV0zb0ZTFtvLMn%2BAiEAkEPH6K5jXe1xZkc6jOdIAPO7PQQ8ngWsnqnYs4WxV7QqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwtkJZCHSfqH9AMKyrcA7a6GKZtqZsN1J6WaBMNoXmgAW7wvuAITeBh%2FK%2FG6xB9x98HA7J59LICaslVa8T0YkQ8sroYVphRmTB%2FLVtyj7JGfEX2SnalAiY7DrfqLENzLfDUMFyggJcZ%2Flv10f7gCXxaUJn1NJqiN1syJjQLgT1LygRNww8NgmiY28RzJBUnCRfbxhUhITUwAOe26l%2FXNqoC0n5%2Fllyd3iZ9FuqbxtN1kaVP9L54Ju6l9sykC1%2F5%2BMCjSI14vMGJJvN7OJGXvO5JeWPDNoXWuSz%2FjI7KbQGCCGV%2FndGxuFXRwDXxcBMX2Sv140Rg8BzI5tMxWAdZUv6dwK3jH1CTkWsoYmp8sb5iYbl22baGHoXZwOWH3dEpFOX5JCJrSzmCp13K7XIyHZhBu5wpDKlidRaBbK9jSloVjaZDxbYX%2FOWcAtFx6abFs8BAIhNK%2BLbUtS9armFT3ySRStR%2F0pAW9s239Frcppeb%2BW0l2r2qp1WAuh83cbosGr7OFPSAcPIILy8zt7hsLShQLAFe9oBC8W3EJEg0oOgJONwnqBY7DBdpipzLLQaUMiFx59OHf2ElMVHmdhkltWMmXqzQHM8Eocj6qfVfr%2BXAm91%2FCAgGpa3uD%2B%2FWqZ39NqR8CLyhc29jVfHdMOKy2b8GOqUBdTjNLUvbF8ZcnBZYHsSLV%2BIeZ1Xaf561RwElzUH8PpfaVk1TtlpN7GfZKNclmPLobX7iAxT2oeFxMsw5Cz2hoS7ocoxoVC5FrISJeT2kgS%2B90Y84WSSdhBbCI5LdWGgVXqt%2FsWiGSCFCQZDsSJ6Xo5uMNmQTg1568r5lM%2F7KoohjpE6pZ49kEC4cmioBZrVi8YBKcRRhIBH%2FsFzXut1Mqn3zDSU2&X-Amz-Signature=e66c654c3b18ba3dfb4161c24751af36fa48c4fc03ea582285ac9bb50b041280&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QKPLZR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIDYB3tWgH8oJUXjN6IDiiyH3raiKX%2FV0zb0ZTFtvLMn%2BAiEAkEPH6K5jXe1xZkc6jOdIAPO7PQQ8ngWsnqnYs4WxV7QqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwtkJZCHSfqH9AMKyrcA7a6GKZtqZsN1J6WaBMNoXmgAW7wvuAITeBh%2FK%2FG6xB9x98HA7J59LICaslVa8T0YkQ8sroYVphRmTB%2FLVtyj7JGfEX2SnalAiY7DrfqLENzLfDUMFyggJcZ%2Flv10f7gCXxaUJn1NJqiN1syJjQLgT1LygRNww8NgmiY28RzJBUnCRfbxhUhITUwAOe26l%2FXNqoC0n5%2Fllyd3iZ9FuqbxtN1kaVP9L54Ju6l9sykC1%2F5%2BMCjSI14vMGJJvN7OJGXvO5JeWPDNoXWuSz%2FjI7KbQGCCGV%2FndGxuFXRwDXxcBMX2Sv140Rg8BzI5tMxWAdZUv6dwK3jH1CTkWsoYmp8sb5iYbl22baGHoXZwOWH3dEpFOX5JCJrSzmCp13K7XIyHZhBu5wpDKlidRaBbK9jSloVjaZDxbYX%2FOWcAtFx6abFs8BAIhNK%2BLbUtS9armFT3ySRStR%2F0pAW9s239Frcppeb%2BW0l2r2qp1WAuh83cbosGr7OFPSAcPIILy8zt7hsLShQLAFe9oBC8W3EJEg0oOgJONwnqBY7DBdpipzLLQaUMiFx59OHf2ElMVHmdhkltWMmXqzQHM8Eocj6qfVfr%2BXAm91%2FCAgGpa3uD%2B%2FWqZ39NqR8CLyhc29jVfHdMOKy2b8GOqUBdTjNLUvbF8ZcnBZYHsSLV%2BIeZ1Xaf561RwElzUH8PpfaVk1TtlpN7GfZKNclmPLobX7iAxT2oeFxMsw5Cz2hoS7ocoxoVC5FrISJeT2kgS%2B90Y84WSSdhBbCI5LdWGgVXqt%2FsWiGSCFCQZDsSJ6Xo5uMNmQTg1568r5lM%2F7KoohjpE6pZ49kEC4cmioBZrVi8YBKcRRhIBH%2FsFzXut1Mqn3zDSU2&X-Amz-Signature=ad9b12a5211356b167cb225094b0acd76cc10a61c047a1e7420f182624c912a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
