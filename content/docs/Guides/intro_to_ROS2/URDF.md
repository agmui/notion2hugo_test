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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNMF5BX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHr9Grm5mH6Q1%2FRfcrF5fqb%2BbsCu15nrODXy0Osly2qQIhAMDPucr5VrF4nW%2F8C0jyNorCsZFxzSqpuei1dBvDyN7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxridI9OmHC513AhTQq3AOvKfEDwfI1ZoTJxmRBlEUXRRKPrxYoOp0gNuNBEPmm9ESPkDXqhD52gEWeB96R4O9PdChwvZjHhjQMopOwBJHF6epHwxHLhH%2BuSh5kOzE0w7hgFQePi4IkoxTUuxckYoiuRysOZFvGMhuYTPNG7FxjTX6JIEgKUxfpMK40%2BT1sMFSLskymbeBeJDO5r8oFgZNRDoN3DNfoZSsu0Kp8Y8JRtxJSJvylh2olsbtMkeybFsGl6AFHEMy16Onky9lhhpa%2BOeTCxboI2QmsE156r6SaazAfzvGJvBS5mpbottNvs8061PaCqwW1VFk38orFQHRvRUubMvg4CJ0OXKPadzzgyom%2FMbDFICLpsvlaIdHkdV9RFuXBVDHeQKR5wCpW0gxoat7WAnOzSz8ujwBcbjwbNDst5%2Ff5NVAd14EIHCZET5G4lEhk22AQ9qvWfEHJjfooREbxDpmHd8DtDzkr8I7hPbGo0KGytFhYaUgr9k90LslvJHUnsowJcYNmo4JXpI912YpawYxCYDCLHBYiMmedFS8Ghq9q%2Bry%2BUGyyPzwDZFyrXy%2Fgaa1TjUJKrL9UufNgfjIMSDDICHRd1epEfnMk0r4ZERwX36YGi1O1LZnDHzQTlKHrI4eb5mIcizDE%2FIzABjqkAVgw7e8fINR9Kr08f5k70OK%2B4aJ1p68KgqcNylZ78FM6C4VW9fMiFdhEN6AehciG1vAllHK3BAnxeN%2FQY7TlNlrqyh797Z40YuaGeJW%2BWB%2ByjbvnShu26O1HiqLVicK%2FjzMBdTDT7Pu1tMAoVqtQ4R%2BquRdj%2B35Ybc7%2BIUtJTqF1zz%2FUrCUvBoS%2B6hrEERaYrWtoisvn%2F1GdIMbOWS7%2FhwkrJU5A&X-Amz-Signature=f06195f7278c83076913e31fe9c7f3da4500222d4f064227acc72bc2070ca3e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNMF5BX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHr9Grm5mH6Q1%2FRfcrF5fqb%2BbsCu15nrODXy0Osly2qQIhAMDPucr5VrF4nW%2F8C0jyNorCsZFxzSqpuei1dBvDyN7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxridI9OmHC513AhTQq3AOvKfEDwfI1ZoTJxmRBlEUXRRKPrxYoOp0gNuNBEPmm9ESPkDXqhD52gEWeB96R4O9PdChwvZjHhjQMopOwBJHF6epHwxHLhH%2BuSh5kOzE0w7hgFQePi4IkoxTUuxckYoiuRysOZFvGMhuYTPNG7FxjTX6JIEgKUxfpMK40%2BT1sMFSLskymbeBeJDO5r8oFgZNRDoN3DNfoZSsu0Kp8Y8JRtxJSJvylh2olsbtMkeybFsGl6AFHEMy16Onky9lhhpa%2BOeTCxboI2QmsE156r6SaazAfzvGJvBS5mpbottNvs8061PaCqwW1VFk38orFQHRvRUubMvg4CJ0OXKPadzzgyom%2FMbDFICLpsvlaIdHkdV9RFuXBVDHeQKR5wCpW0gxoat7WAnOzSz8ujwBcbjwbNDst5%2Ff5NVAd14EIHCZET5G4lEhk22AQ9qvWfEHJjfooREbxDpmHd8DtDzkr8I7hPbGo0KGytFhYaUgr9k90LslvJHUnsowJcYNmo4JXpI912YpawYxCYDCLHBYiMmedFS8Ghq9q%2Bry%2BUGyyPzwDZFyrXy%2Fgaa1TjUJKrL9UufNgfjIMSDDICHRd1epEfnMk0r4ZERwX36YGi1O1LZnDHzQTlKHrI4eb5mIcizDE%2FIzABjqkAVgw7e8fINR9Kr08f5k70OK%2B4aJ1p68KgqcNylZ78FM6C4VW9fMiFdhEN6AehciG1vAllHK3BAnxeN%2FQY7TlNlrqyh797Z40YuaGeJW%2BWB%2ByjbvnShu26O1HiqLVicK%2FjzMBdTDT7Pu1tMAoVqtQ4R%2BquRdj%2B35Ybc7%2BIUtJTqF1zz%2FUrCUvBoS%2B6hrEERaYrWtoisvn%2F1GdIMbOWS7%2FhwkrJU5A&X-Amz-Signature=c3cef7b68901c2b271de05b9c02da040c5d6a6db1a47ae934855f8b8df953c35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
