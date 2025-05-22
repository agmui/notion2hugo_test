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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJTJK2W2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEHMdFdS1GYjMN2QE3KlmnTR4llMAUmEEMULR7XTI%2FDsAiEAxwkiMml1pIYpOVzwBqiWWcXBevg4sn5wIaOPCofJkbQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjTGE89E3I8eVG%2BuyrcA1AOjrICb2jmEqgQOSOS4XDSKQN12v7Fab3mmBPSXbihpoPB4K2ljOZMVv%2Bo3sgRNDnWSjjP%2Fi2pz6IG%2FWE%2BCbOePBB2CEwmx7p1Yb%2B3Lm4j8FQvrGTRVnRAHaw3d5ffo7jFeibw9zxXoCataW0WvN9BMcauP5PfJq8BTS%2F791BJSYghfMGDYm%2FPcMxgVAHQBMk8JIptjQ9SjiQa29ue9Xvv%2BUhDqyHqM%2BV8z%2B9pt8i4yoDJCbWEsqES2Hw7mzYz1fI590%2BBWPr8GnnrzoQOgMnB8BolgJQ8QP41JMthCL5EvGSsqfRb0QHKvqm7G2DP5M5zm7YzewK1hPnbzIUxFhjnCTcoFDHrmcnljdWgbmubYf4MnxbbNX8LhnjIDTs33lTLJn9RDOQTC%2Fema78R%2FIIiwMqHkYoxdifaIL%2FJEnGJQU59chWiwyJhEWMHXVGqAfvOtRPPpvJ0QK%2BPzbolsT3pKti1aV6aA0AVFQAldd5s0qdJ8sEs2%2FQ8w%2BiR%2BZBzr6%2Bj774DcjHIoE8oX0GAtv5jK%2B4rG%2FheoAV%2F8JBECDaHJuEYBAOyxDxyk%2BK%2BTdx3xqqqcs0cywKbTLFYDQNAFYhs04tqgejFfoMIMcBPlYBTP1ff9%2FlvPiMcXCMBMN%2FHusEGOqUBWP0QH71tP2kbHSqIgQDEUSEnr7OcIlXNNIP8W2huM5dQJZtn8z0ZuD8ttTqh7Sp3zkHgPVOjCbaoEafJmaRdh5XQwyD5JwmLCeRsJamlqQ3IVGhWO1DDfPkrCFaGSUtXK3p2W1Gck8ykaX%2FkUiRfSsKt3nlwXYdrPj8KIAxG7BSAno9Y%2FjrZHHKj2rIMRwwmsX8QStC4SuQoH90e71d5gdBUdqte&X-Amz-Signature=65ae2260532da313cb2860bb6c194e9dbf66345eacc26a2593aac50bcf7a7951&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJTJK2W2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEHMdFdS1GYjMN2QE3KlmnTR4llMAUmEEMULR7XTI%2FDsAiEAxwkiMml1pIYpOVzwBqiWWcXBevg4sn5wIaOPCofJkbQqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjTGE89E3I8eVG%2BuyrcA1AOjrICb2jmEqgQOSOS4XDSKQN12v7Fab3mmBPSXbihpoPB4K2ljOZMVv%2Bo3sgRNDnWSjjP%2Fi2pz6IG%2FWE%2BCbOePBB2CEwmx7p1Yb%2B3Lm4j8FQvrGTRVnRAHaw3d5ffo7jFeibw9zxXoCataW0WvN9BMcauP5PfJq8BTS%2F791BJSYghfMGDYm%2FPcMxgVAHQBMk8JIptjQ9SjiQa29ue9Xvv%2BUhDqyHqM%2BV8z%2B9pt8i4yoDJCbWEsqES2Hw7mzYz1fI590%2BBWPr8GnnrzoQOgMnB8BolgJQ8QP41JMthCL5EvGSsqfRb0QHKvqm7G2DP5M5zm7YzewK1hPnbzIUxFhjnCTcoFDHrmcnljdWgbmubYf4MnxbbNX8LhnjIDTs33lTLJn9RDOQTC%2Fema78R%2FIIiwMqHkYoxdifaIL%2FJEnGJQU59chWiwyJhEWMHXVGqAfvOtRPPpvJ0QK%2BPzbolsT3pKti1aV6aA0AVFQAldd5s0qdJ8sEs2%2FQ8w%2BiR%2BZBzr6%2Bj774DcjHIoE8oX0GAtv5jK%2B4rG%2FheoAV%2F8JBECDaHJuEYBAOyxDxyk%2BK%2BTdx3xqqqcs0cywKbTLFYDQNAFYhs04tqgejFfoMIMcBPlYBTP1ff9%2FlvPiMcXCMBMN%2FHusEGOqUBWP0QH71tP2kbHSqIgQDEUSEnr7OcIlXNNIP8W2huM5dQJZtn8z0ZuD8ttTqh7Sp3zkHgPVOjCbaoEafJmaRdh5XQwyD5JwmLCeRsJamlqQ3IVGhWO1DDfPkrCFaGSUtXK3p2W1Gck8ykaX%2FkUiRfSsKt3nlwXYdrPj8KIAxG7BSAno9Y%2FjrZHHKj2rIMRwwmsX8QStC4SuQoH90e71d5gdBUdqte&X-Amz-Signature=6658518eb32e47108b72468c401a965c16e4321bafbe14b294b2be77204e0a02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
