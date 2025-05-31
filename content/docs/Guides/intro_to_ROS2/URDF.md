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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPT5NUM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaDdt5ocKv48L2NChID9i8W7lRD%2BY4g%2BNT5sa9yrEMgIhAJqwU5XSe9I84%2FG5GECodoSxfDfRhMyZFzEEh8%2FL04jBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVio6iwms6gKZuiMq3ANDBf1dzu4OnmrqTNVltxdpmhuAiyxGjrdoYmPm0ypeNb0s4uZdCGKDyd9GED8bSiK6b5SUlqIrY1Mka6w3oZN7GQSlPCDzI6Mekxg9YJe%2BpAZvFc3yg%2FnaSFj8vIpRUGOpcpNUks%2FJoIj9XpHahvABKQfiKUN18G%2F7DZ870cL%2Bwg6h%2FwbOX2LmE%2BBd9miQFsCKboWB6%2Fqk6iYKZD08rRwkpEngsHDSQ5RIum44VdfFmjsIIAAtrZdYMw%2BwLaPowPHi9YezOTGK%2BErOcQM4TEFAYALaiBNdu8jNmxgBb1fHtsLrjxfxQqd0Cky5s43pM0mup8lLgtRpaGRwEy%2FtwO3dahqEiqFlrecDe21UKGEEhuJmh5z3J80lM7EyYfQzuo08jgQTOiSsBbVPwJ3dqdxF9aWaMlw3XS2VIZiLgDef7QoNlZb7nfke3y9a3K2lFsBmRk2KD%2FLJW%2FOz3EuvRoeL9cZJ4WdSoZU%2FTWxQrNYs6ryaxU%2FXeQEP5GuEYsi7uY0WO%2F0pIBVBZi8dcWmb7U2CxRkucHMUW4t%2F2Q7K7wq%2FQTe4XLad5qRzAtxua2DwxG0x62Nuexw7wOfOqgVvA4aB%2BEkIL60DkApJM3oCAMb9Ci%2FQfslB%2BFNMfl8y2zDm5OnBBjqkAcH%2BnfE7WHoVkjFF1t74RpatzoaddWmTKU04CeeOonQXoVJ8V4aSZxRzhXjwdvbF1IyWlZSCeaOIV%2BXhj%2BfGW1e6ikxkCXQ%2BKIjBywcPocSqrSVdzePq5CSn7CUHI7W9v3%2BT3tbqAGwKM0ZGLbSKaoQAj9J%2BINzItXoZ35lN3b9Zdf5dp2QlFhDw50rcdsBX6HDhZ3JbI3evKQXt1rdjT42WiF%2BS&X-Amz-Signature=0808461adc0f411d18db91151ae7416831e107ac8559143f61cb2894e7bbcac3&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPT5NUM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaDdt5ocKv48L2NChID9i8W7lRD%2BY4g%2BNT5sa9yrEMgIhAJqwU5XSe9I84%2FG5GECodoSxfDfRhMyZFzEEh8%2FL04jBKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpVio6iwms6gKZuiMq3ANDBf1dzu4OnmrqTNVltxdpmhuAiyxGjrdoYmPm0ypeNb0s4uZdCGKDyd9GED8bSiK6b5SUlqIrY1Mka6w3oZN7GQSlPCDzI6Mekxg9YJe%2BpAZvFc3yg%2FnaSFj8vIpRUGOpcpNUks%2FJoIj9XpHahvABKQfiKUN18G%2F7DZ870cL%2Bwg6h%2FwbOX2LmE%2BBd9miQFsCKboWB6%2Fqk6iYKZD08rRwkpEngsHDSQ5RIum44VdfFmjsIIAAtrZdYMw%2BwLaPowPHi9YezOTGK%2BErOcQM4TEFAYALaiBNdu8jNmxgBb1fHtsLrjxfxQqd0Cky5s43pM0mup8lLgtRpaGRwEy%2FtwO3dahqEiqFlrecDe21UKGEEhuJmh5z3J80lM7EyYfQzuo08jgQTOiSsBbVPwJ3dqdxF9aWaMlw3XS2VIZiLgDef7QoNlZb7nfke3y9a3K2lFsBmRk2KD%2FLJW%2FOz3EuvRoeL9cZJ4WdSoZU%2FTWxQrNYs6ryaxU%2FXeQEP5GuEYsi7uY0WO%2F0pIBVBZi8dcWmb7U2CxRkucHMUW4t%2F2Q7K7wq%2FQTe4XLad5qRzAtxua2DwxG0x62Nuexw7wOfOqgVvA4aB%2BEkIL60DkApJM3oCAMb9Ci%2FQfslB%2BFNMfl8y2zDm5OnBBjqkAcH%2BnfE7WHoVkjFF1t74RpatzoaddWmTKU04CeeOonQXoVJ8V4aSZxRzhXjwdvbF1IyWlZSCeaOIV%2BXhj%2BfGW1e6ikxkCXQ%2BKIjBywcPocSqrSVdzePq5CSn7CUHI7W9v3%2BT3tbqAGwKM0ZGLbSKaoQAj9J%2BINzItXoZ35lN3b9Zdf5dp2QlFhDw50rcdsBX6HDhZ3JbI3evKQXt1rdjT42WiF%2BS&X-Amz-Signature=b7fee510c1eca8cfb53939dd9a74b293196ff1583abb98d7016d06587cd81738&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
