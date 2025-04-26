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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6YPNDK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjfatosGdJ0Ynk7QYUiS%2FgaVooHlFRCldCZkV%2BJg8ffAiASrmq%2BoYnnN0c7K04C%2FTxA4cZNYdEYcFC3euEZaW7l2Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRoi5xdoDLRLZigr9KtwDKjKXJw3AE8FCMB%2FZ8UfDKuWRUs9cytIjhWMuBRkQOBb5kOkOJYF%2F%2FpZS1DlXXIBYAmfPSU0UC0QOVB8kxPLhouVEV7OltgCk%2FWNkcOUOMqdhmmQb0avVCiZuQYCEB%2F5LmaAJ5u6DkJzi%2BPBx%2FuiwoNsZ8cAgI7R8FtXhh3GgveJrpPcqhDquhNALCIOjtmTbbEiEUTvmA15pncFBHiBX5se2W19ejU1Xgb1EIZOtK7xFWPFHPy1i33UF4fvN0j4OTPABd%2FKvilWFxKcAzErmSov%2BXAEhuvzV1dUee8o1hql5o1iPScaCFqsDsTdmSS0vd2VsxorEeFpmofEzpRN7josSzvwMNmfEAp9AChGjWN6lDrvmfl75YwXiT1nTd1wdXJxBjoLNbXBlzx106kYuQqqpsN6pfMK7FKbfDHZXQ3dlQECK0B0ilvP61QW1grTzilX1cAIwdfGiQgQopYtL3kG7CSzEP1beOHroIMqUgev2MdU%2FaR5p9Vg7ZEHwosKpgKK2tSEDhY9hLJrVV5FvAy85Ml%2F2lSTPZyv0UqOBc2namSdhh5FcuiCuLtLymGGmobhJhytezmlr6JI%2FjJKgf47U%2BSeN%2FKdhh0cQuxYFUvdPV39CgNJwM5Yevo4wpKm0wAY6pgG%2FiO0Fayq18oShshtikKDH9GNt2Dfv6rPYCMOqr3SHiRItdYzMimWtltX%2F%2FbDt7XXg5%2FssKpcFddVXzT1aLt8RNbXUYk8gI1NGucVyxxAYkMz%2FUyt2dyewPQaXaDjBr4VAeytW0CsZdXQlUuPIFJSZhssNKU6HGlb5B4J3IxwzeXOt4qrXV2%2FMLxvhgz%2FREPiwk7prwvuV0K61x8z7K%2BlBG16rOGIz&X-Amz-Signature=1a4a96d39571de1a65268a916bc8fe20f1bd66c36d27109a6b0e1998ddcbb13c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6YPNDK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjfatosGdJ0Ynk7QYUiS%2FgaVooHlFRCldCZkV%2BJg8ffAiASrmq%2BoYnnN0c7K04C%2FTxA4cZNYdEYcFC3euEZaW7l2Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMRoi5xdoDLRLZigr9KtwDKjKXJw3AE8FCMB%2FZ8UfDKuWRUs9cytIjhWMuBRkQOBb5kOkOJYF%2F%2FpZS1DlXXIBYAmfPSU0UC0QOVB8kxPLhouVEV7OltgCk%2FWNkcOUOMqdhmmQb0avVCiZuQYCEB%2F5LmaAJ5u6DkJzi%2BPBx%2FuiwoNsZ8cAgI7R8FtXhh3GgveJrpPcqhDquhNALCIOjtmTbbEiEUTvmA15pncFBHiBX5se2W19ejU1Xgb1EIZOtK7xFWPFHPy1i33UF4fvN0j4OTPABd%2FKvilWFxKcAzErmSov%2BXAEhuvzV1dUee8o1hql5o1iPScaCFqsDsTdmSS0vd2VsxorEeFpmofEzpRN7josSzvwMNmfEAp9AChGjWN6lDrvmfl75YwXiT1nTd1wdXJxBjoLNbXBlzx106kYuQqqpsN6pfMK7FKbfDHZXQ3dlQECK0B0ilvP61QW1grTzilX1cAIwdfGiQgQopYtL3kG7CSzEP1beOHroIMqUgev2MdU%2FaR5p9Vg7ZEHwosKpgKK2tSEDhY9hLJrVV5FvAy85Ml%2F2lSTPZyv0UqOBc2namSdhh5FcuiCuLtLymGGmobhJhytezmlr6JI%2FjJKgf47U%2BSeN%2FKdhh0cQuxYFUvdPV39CgNJwM5Yevo4wpKm0wAY6pgG%2FiO0Fayq18oShshtikKDH9GNt2Dfv6rPYCMOqr3SHiRItdYzMimWtltX%2F%2FbDt7XXg5%2FssKpcFddVXzT1aLt8RNbXUYk8gI1NGucVyxxAYkMz%2FUyt2dyewPQaXaDjBr4VAeytW0CsZdXQlUuPIFJSZhssNKU6HGlb5B4J3IxwzeXOt4qrXV2%2FMLxvhgz%2FREPiwk7prwvuV0K61x8z7K%2BlBG16rOGIz&X-Amz-Signature=69af4e4dbe582e83e2175372f1aed7a41cdbd3908b11934b64b7e170b6dbecbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
