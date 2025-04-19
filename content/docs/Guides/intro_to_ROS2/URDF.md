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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNMMIBH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4fhOQ2OUUIckUcqT%2FQ3yk61EHE9xgxGaOmChi30SvFAiAnY3EUqlAtV%2FK4cW9FF905bBbTVoeEvW0jHoCM6UDXjyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOHSnvDdw6VH1K5SfKtwDzhKrNDzgkuxHObJpn7k2o8Vd106aFmXZKch2yOJJF%2FYvwoUp9CHb7CyVsNBgW3x7wQiVwSXhm60mSSCl0e9aJyzmynyWwExoQ7AMbY759z3KjVS0y24xB%2FABVAiETV664DOfuO1d3lBTpxwD6nG0czKOG0D0LW5suWbUP5SiznxCaKg6hLHJKyTCyonrdXcNxjWzvKo9DCr90uBIRtPQGuCUENRksfUx4v9HSDpcPHTQKPmDsUGGoPRRaoCMxU0Lj3lK0QJB%2Bk8VLAdzXec%2Bt%2FeYm1%2Fgq1aC55J4%2FTIEVzSUAIMeXB7Ci7pEdcqFoO2PskVTrVxNH8Hsue9yovF3585AOVV32O94PKmbmMnJZbkPzLupR%2B%2Bbyv7kUaQLn%2B9P6rDGM8uq5%2FD8JIZqtQ%2FYb27ipSst6jw2dVn2cxbVvNTVLSdKofIlRrddWFbjYeZdXHDuY4zXZOzN4wiKFcIA23QUaXW9B7J8yTVgy3DjnFB8M1om%2Bv%2F0%2FpXDpGsTLh4n%2F1aUuc9iPMGJx1pyozbdD%2BJ6za0leiPePQiLkfz41mQBTIVeE8uquH6bAZZAqGaYLZJqYI969Bp0oe7x0mJjPYUBoO9KBu1sVva0C6pyAR12uArccOWHt%2BpSYeIwt4aMwAY6pgE%2FMT22Bhw4HrjZFbscQc544PoIPuDc43dmtfbCgoZg1EdxSH5X8Q%2FROLCXDyojttMAmMjeooZTJdFbxQkyceZp%2B%2BsKkiALeyqqDYI4zyHO3MM3isOzSW81Lpq4hTaDwufnpAN2rZk5HU%2Fs2PxAwgfPMsrWtzg%2F0WRQxjP2XD2oCsmM0Y90ChiynXKa%2FWb4qKG8TmEFpP04uOZ3oP5PBzPyLd9PeGJY&X-Amz-Signature=927e4f5fda72a104d89fd8fcac928dd0217b85eaef11917a05a76e15206b0242&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPNMMIBH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4fhOQ2OUUIckUcqT%2FQ3yk61EHE9xgxGaOmChi30SvFAiAnY3EUqlAtV%2FK4cW9FF905bBbTVoeEvW0jHoCM6UDXjyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOHSnvDdw6VH1K5SfKtwDzhKrNDzgkuxHObJpn7k2o8Vd106aFmXZKch2yOJJF%2FYvwoUp9CHb7CyVsNBgW3x7wQiVwSXhm60mSSCl0e9aJyzmynyWwExoQ7AMbY759z3KjVS0y24xB%2FABVAiETV664DOfuO1d3lBTpxwD6nG0czKOG0D0LW5suWbUP5SiznxCaKg6hLHJKyTCyonrdXcNxjWzvKo9DCr90uBIRtPQGuCUENRksfUx4v9HSDpcPHTQKPmDsUGGoPRRaoCMxU0Lj3lK0QJB%2Bk8VLAdzXec%2Bt%2FeYm1%2Fgq1aC55J4%2FTIEVzSUAIMeXB7Ci7pEdcqFoO2PskVTrVxNH8Hsue9yovF3585AOVV32O94PKmbmMnJZbkPzLupR%2B%2Bbyv7kUaQLn%2B9P6rDGM8uq5%2FD8JIZqtQ%2FYb27ipSst6jw2dVn2cxbVvNTVLSdKofIlRrddWFbjYeZdXHDuY4zXZOzN4wiKFcIA23QUaXW9B7J8yTVgy3DjnFB8M1om%2Bv%2F0%2FpXDpGsTLh4n%2F1aUuc9iPMGJx1pyozbdD%2BJ6za0leiPePQiLkfz41mQBTIVeE8uquH6bAZZAqGaYLZJqYI969Bp0oe7x0mJjPYUBoO9KBu1sVva0C6pyAR12uArccOWHt%2BpSYeIwt4aMwAY6pgE%2FMT22Bhw4HrjZFbscQc544PoIPuDc43dmtfbCgoZg1EdxSH5X8Q%2FROLCXDyojttMAmMjeooZTJdFbxQkyceZp%2B%2BsKkiALeyqqDYI4zyHO3MM3isOzSW81Lpq4hTaDwufnpAN2rZk5HU%2Fs2PxAwgfPMsrWtzg%2F0WRQxjP2XD2oCsmM0Y90ChiynXKa%2FWb4qKG8TmEFpP04uOZ3oP5PBzPyLd9PeGJY&X-Amz-Signature=858af4dd49c528ba306ce8d7548d2a11338579846be23616c787e4ad64448cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
