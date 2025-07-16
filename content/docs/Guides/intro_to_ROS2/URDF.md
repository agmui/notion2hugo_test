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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQMBIEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD9Po6VBit92%2FFAuGrrLDVOv6sX9QrejxAfKvHUP0j4iwIhALs1FS9OuwFZxybYvBIaUeR2qdWIbuYxGZBmXUC3y%2Fr1Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxmkoXRbdM1NSGkGyUq3APnIVcNmpZ8ZGdk2Mga3b6fur7ysz32nDXoIQWlbYyNSMxpFPW%2FKOQ3MZA%2F40KfcJkqMcfmNZ0QNtHDsWy6UEDtxT1WNqMnc%2F4jfWUAZ9akevrzz4xse6LO%2FrjINd5mHT4Lz%2FhGHNqO%2BR8RIGNDWZpC%2F6z2NVKNr7UZZIWJliORa6JDTjysqdCaGNXn6WQfDI9EBxuqfBctghzsdG3vfb2J1RLJ71VjZXPadWigYjruBtfyXDTFk4eyqz96n%2B%2Bu0JIOfT0o%2Bp7jUWva8n3%2BSu3aEeWlOyHPQIMsW5fBdVF8S8WmfEtYy2UtApg0%2B7%2F%2Frv3aiWx8qv8PbNZ9Qjblox6owAiKFSrmZrwEzwAQ1foXhI8a0MyoOW4D3F%2F8Ox08u2UnqotiKnWPixsIbg3g9CA32%2Bn9HUH5cn1ptAM0gu0g6LrkC5L8DMOPOpUlrbBlW5ixBVJIOEaz%2BnuOxtQpzj%2BESNysTN4uJ6WGjXvnw1wzpCRTQdXDVv%2FBlI4NEOHbf2k84tNhvedVlQlgVLumPiojG3JHVZ0szYqgFEzxNsYspBAA%2FEo%2BvM7vj5V2Az8%2FHu5716MZ8B5gE1T%2BfoDo2DYP21eCLbuIcKfiw1CK1Y%2BCtJvU23sfKdz%2BozF%2FljC9vd3DBjqkAdwEDtRrEnc1mKf2DgN2C2Tpb2Ot6y1I01W0WJLEimGlvW5yxOhqeg9CkVbBgMktm11WKKe9534JmSeTYdXoFL%2BhfcsyLguFSVppZLnRdaonbC%2B5DqpLAlOsiISJUlvBRIfgSDCx3m%2FNpPXG%2BTXTAp5WIvPeJly17Vd97vmgCM32uH9olA9T7OoJmvuKv2sV1j0MG9ji97DwqLHL5lEEe0p949zv&X-Amz-Signature=9931786e3dc1c8ef8804238cf355a6e6644f1ca3ae0b4140f5d9a85e0443818a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHQMBIEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD9Po6VBit92%2FFAuGrrLDVOv6sX9QrejxAfKvHUP0j4iwIhALs1FS9OuwFZxybYvBIaUeR2qdWIbuYxGZBmXUC3y%2Fr1Kv8DCFkQABoMNjM3NDIzMTgzODA1IgxmkoXRbdM1NSGkGyUq3APnIVcNmpZ8ZGdk2Mga3b6fur7ysz32nDXoIQWlbYyNSMxpFPW%2FKOQ3MZA%2F40KfcJkqMcfmNZ0QNtHDsWy6UEDtxT1WNqMnc%2F4jfWUAZ9akevrzz4xse6LO%2FrjINd5mHT4Lz%2FhGHNqO%2BR8RIGNDWZpC%2F6z2NVKNr7UZZIWJliORa6JDTjysqdCaGNXn6WQfDI9EBxuqfBctghzsdG3vfb2J1RLJ71VjZXPadWigYjruBtfyXDTFk4eyqz96n%2B%2Bu0JIOfT0o%2Bp7jUWva8n3%2BSu3aEeWlOyHPQIMsW5fBdVF8S8WmfEtYy2UtApg0%2B7%2F%2Frv3aiWx8qv8PbNZ9Qjblox6owAiKFSrmZrwEzwAQ1foXhI8a0MyoOW4D3F%2F8Ox08u2UnqotiKnWPixsIbg3g9CA32%2Bn9HUH5cn1ptAM0gu0g6LrkC5L8DMOPOpUlrbBlW5ixBVJIOEaz%2BnuOxtQpzj%2BESNysTN4uJ6WGjXvnw1wzpCRTQdXDVv%2FBlI4NEOHbf2k84tNhvedVlQlgVLumPiojG3JHVZ0szYqgFEzxNsYspBAA%2FEo%2BvM7vj5V2Az8%2FHu5716MZ8B5gE1T%2BfoDo2DYP21eCLbuIcKfiw1CK1Y%2BCtJvU23sfKdz%2BozF%2FljC9vd3DBjqkAdwEDtRrEnc1mKf2DgN2C2Tpb2Ot6y1I01W0WJLEimGlvW5yxOhqeg9CkVbBgMktm11WKKe9534JmSeTYdXoFL%2BhfcsyLguFSVppZLnRdaonbC%2B5DqpLAlOsiISJUlvBRIfgSDCx3m%2FNpPXG%2BTXTAp5WIvPeJly17Vd97vmgCM32uH9olA9T7OoJmvuKv2sV1j0MG9ji97DwqLHL5lEEe0p949zv&X-Amz-Signature=47df54aa550da940b0437f9d10c7c486c9d638af3e6e1ad5a75ad9985b459d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
