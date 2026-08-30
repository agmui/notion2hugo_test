---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXK4QRWL%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVjHr%2BviimCY9SPbYY3m1WUIOWlu4H592obLRBhQCmkAiEArcgJSDGz9bFseke4aSvp2uo2M%2FCJvijPhzwsBaLorXkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPcYsfF4muSww7BhoyrcA3jko8DeXcSXqTaOpYrq9iWnDR59W%2FwiILM7OSz83tbhxrHBezp4whvomfvJsE7%2FQdcHqtNvNHcFZAjdYVR8HyOzd56hkQPMgSN2TPqt8UO0BGATTFN%2BBMq4u3H3oORpKPUpNQezg1yi6WK8zFK0mFwnTgM8w0eEBt%2B%2FG%2FWAEBeSFI0UyA%2FszD1uYr4pkmWGrCCEcQC4%2BTB%2FW2sO%2BGVX12IJ0Ynm1D5mcrqFDFpPEOrR5pPaNFubvwewEsed1vJrVOSTMJaL17B6BM4WHv4vjClpGqCTKR0vBem3UDn1OL3kn37Zoyo4KTul%2B%2F2SE%2Fvm2hTXP8pTu7nwNw8ly7eskiXBNZ1TH5zZcgaksTMYHt8tERfZkNShSYwW7gQVd9m%2BdX5%2FaUD6BsQeS5iTv%2FFnTheik61YmKzHddNlVvxhBTsAl5t4bOL%2FtvVASSCG0KYmvkGdYIRCxdSZPZqW0uDbrit1thT14rgbjlmSNETu5gmbIU6M42iLoLYrBM2IEuD9ztgN97jnF0%2FQVk85nCytyBxV%2BSnJ1lsOtzvSu808VoCNbRW1YTOdheqPwbOO3DiAbs%2BR3SOT%2FCEJr9h3U6xwSdlMHPBkm4tnEpyJjNnb7HZoSfhhKJFL1ds3QTfWMK%2FLztQGOqUB7hsWodfAbTtdvsInUqrtrBKwGyAn0X31Wcnjqo0O0Pdp%2FwK8s9jrwYSZZi%2FcVnhO%2FBQJHIXd7U4O%2BiOH2Bfw8jPyTdeKGDF%2BChotGVa2E9ZEjz%2Bq%2BhcjbFaVOd%2Bs5%2F6xc9woSX%2FG2lWer6K0gCpMo8wQIRxQ0RDlavlQfQksz0WZwJIa%2FAMOBn0AZI6uWU7tOySp1C265XN6Hm2wBrduXTvIum5U&X-Amz-Signature=9df70b52eb0c67e19992ecfee47a96911ff984f78da825b5b77df3f8f9eb3462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXK4QRWL%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVjHr%2BviimCY9SPbYY3m1WUIOWlu4H592obLRBhQCmkAiEArcgJSDGz9bFseke4aSvp2uo2M%2FCJvijPhzwsBaLorXkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPcYsfF4muSww7BhoyrcA3jko8DeXcSXqTaOpYrq9iWnDR59W%2FwiILM7OSz83tbhxrHBezp4whvomfvJsE7%2FQdcHqtNvNHcFZAjdYVR8HyOzd56hkQPMgSN2TPqt8UO0BGATTFN%2BBMq4u3H3oORpKPUpNQezg1yi6WK8zFK0mFwnTgM8w0eEBt%2B%2FG%2FWAEBeSFI0UyA%2FszD1uYr4pkmWGrCCEcQC4%2BTB%2FW2sO%2BGVX12IJ0Ynm1D5mcrqFDFpPEOrR5pPaNFubvwewEsed1vJrVOSTMJaL17B6BM4WHv4vjClpGqCTKR0vBem3UDn1OL3kn37Zoyo4KTul%2B%2F2SE%2Fvm2hTXP8pTu7nwNw8ly7eskiXBNZ1TH5zZcgaksTMYHt8tERfZkNShSYwW7gQVd9m%2BdX5%2FaUD6BsQeS5iTv%2FFnTheik61YmKzHddNlVvxhBTsAl5t4bOL%2FtvVASSCG0KYmvkGdYIRCxdSZPZqW0uDbrit1thT14rgbjlmSNETu5gmbIU6M42iLoLYrBM2IEuD9ztgN97jnF0%2FQVk85nCytyBxV%2BSnJ1lsOtzvSu808VoCNbRW1YTOdheqPwbOO3DiAbs%2BR3SOT%2FCEJr9h3U6xwSdlMHPBkm4tnEpyJjNnb7HZoSfhhKJFL1ds3QTfWMK%2FLztQGOqUB7hsWodfAbTtdvsInUqrtrBKwGyAn0X31Wcnjqo0O0Pdp%2FwK8s9jrwYSZZi%2FcVnhO%2FBQJHIXd7U4O%2BiOH2Bfw8jPyTdeKGDF%2BChotGVa2E9ZEjz%2Bq%2BhcjbFaVOd%2Bs5%2F6xc9woSX%2FG2lWer6K0gCpMo8wQIRxQ0RDlavlQfQksz0WZwJIa%2FAMOBn0AZI6uWU7tOySp1C265XN6Hm2wBrduXTvIum5U&X-Amz-Signature=64f5e204da9393250157adad28b7aae59ddec698c7bde150c75cbe7a0bbeebe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
