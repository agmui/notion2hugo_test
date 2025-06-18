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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFR64VIL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMWAlTkjA8h53beUMs%2Fdmq4RJH0sZ5yaktBB9Hxnm%2BEwIhALLljMFmIvxXblzvuGEEs%2BkYSUD9rSCTfcTzfsMsHwm2KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznF7dweTJfyfwHRxsq3APj3PbnmTdM2qWfb01gKA5qml9PzEzfoBV0BtFG%2FMGIVe7YX5pj%2BiBjjiVAeDa5JFHDUZ95NAB1V54uHaectrU3rCXKLubyt%2F9Gn%2B9Loi0P7LEe%2FbzAOvWNElY50epYrsFe55AuIcmJur1w8nDIqKjKWUCw23xf%2FOubIZDnbf0VVgPu%2BRCQ7nIfhUWwYYc%2BzoMGfGRgOhGoBasoeTtSZTBhizDjVP5r3F3iUEXXUKBMXJzGkpM8%2BGcY%2F%2FKA9u9fgDse6p%2BABLz%2FcxBO7KOrca6OotfxkK8WQztLB%2FN1pe5aeMeFCP3Xg%2F0GTqncB%2FX6TFoJtlwuew5NVyOxai2ZuyJbtBoIMscu535gagMEb1dZKZMlgcCW9eId%2BuemE839jhMjUZJ%2B19mS3%2FnBRuMpboq%2BK3Nw%2BSZMS52gGUl66FKrdRh8iF%2FhJDvtuOdYd89bLeO6lh63k2wWPf2xcIkAU%2BkXk1mcypHRtCCCnn60HwJ27OL%2FHO4enmgWjG83rRia3%2FUmuO5%2FPeaOO2y9zhsc0H52z00UgT%2FP7Pc1DkOspdro2PN5%2FhEvrtPjdKTr3kFEkrKlTXi%2F1pEP9T4nlR3WwpsiGOrdAQsKYmKo8eXG5cqrCN4Sc5InsqxUX5InbTCNt8rCBjqkAThiTIXj3qYqwOntUxNu7plBnOUKtEcIV3HHer9GTjZD9dXZb3soqPcKOMejQfAFiMLi9Z6ZTx4MwNXWtX4fHSwR%2BmrYyj3E5fBl8FcKJv3kKng6%2FVETRGwzZsjaJvrE0pvQh%2Bz3ETfllRMrIZsy0SIeucBe84hNvdoOP8R4ZB6Hw1d4hMgGBprPfA7EKvmBcpofzPuI6SLy9218oGV6qfvwJjhY&X-Amz-Signature=90d516a45c4a219c9c5c59259fdddb0aca0cf1fb68cc347d6ac118958544764a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFR64VIL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMWAlTkjA8h53beUMs%2Fdmq4RJH0sZ5yaktBB9Hxnm%2BEwIhALLljMFmIvxXblzvuGEEs%2BkYSUD9rSCTfcTzfsMsHwm2KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznF7dweTJfyfwHRxsq3APj3PbnmTdM2qWfb01gKA5qml9PzEzfoBV0BtFG%2FMGIVe7YX5pj%2BiBjjiVAeDa5JFHDUZ95NAB1V54uHaectrU3rCXKLubyt%2F9Gn%2B9Loi0P7LEe%2FbzAOvWNElY50epYrsFe55AuIcmJur1w8nDIqKjKWUCw23xf%2FOubIZDnbf0VVgPu%2BRCQ7nIfhUWwYYc%2BzoMGfGRgOhGoBasoeTtSZTBhizDjVP5r3F3iUEXXUKBMXJzGkpM8%2BGcY%2F%2FKA9u9fgDse6p%2BABLz%2FcxBO7KOrca6OotfxkK8WQztLB%2FN1pe5aeMeFCP3Xg%2F0GTqncB%2FX6TFoJtlwuew5NVyOxai2ZuyJbtBoIMscu535gagMEb1dZKZMlgcCW9eId%2BuemE839jhMjUZJ%2B19mS3%2FnBRuMpboq%2BK3Nw%2BSZMS52gGUl66FKrdRh8iF%2FhJDvtuOdYd89bLeO6lh63k2wWPf2xcIkAU%2BkXk1mcypHRtCCCnn60HwJ27OL%2FHO4enmgWjG83rRia3%2FUmuO5%2FPeaOO2y9zhsc0H52z00UgT%2FP7Pc1DkOspdro2PN5%2FhEvrtPjdKTr3kFEkrKlTXi%2F1pEP9T4nlR3WwpsiGOrdAQsKYmKo8eXG5cqrCN4Sc5InsqxUX5InbTCNt8rCBjqkAThiTIXj3qYqwOntUxNu7plBnOUKtEcIV3HHer9GTjZD9dXZb3soqPcKOMejQfAFiMLi9Z6ZTx4MwNXWtX4fHSwR%2BmrYyj3E5fBl8FcKJv3kKng6%2FVETRGwzZsjaJvrE0pvQh%2Bz3ETfllRMrIZsy0SIeucBe84hNvdoOP8R4ZB6Hw1d4hMgGBprPfA7EKvmBcpofzPuI6SLy9218oGV6qfvwJjhY&X-Amz-Signature=7dff14840b938981ca1a40b1f33a1a52c62d8bd83a15c0536fde8e3516bca28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
