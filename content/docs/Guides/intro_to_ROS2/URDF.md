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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGB7RGYG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGb8%2Bq%2BYWKIboziVxK76LRBkThP2XAoTZ59R0ZNiFdbAiEAoS7Nk5eU11mC4LWBnifNTL6KOzSdeM1Fu5TPhMQoSYMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLlyg%2F2AWfsb%2FjnbWircAys7B2WfoRUPPo5caL%2F53XVAv9RwDZED6aI%2Fpbdguca0dnXrIHoqItWeRFUfvCC9%2BgwPBRYVp7qT61r3Ay2sugw%2B%2Fwn2%2FBRq2DdJ3zirrtouxJojvHOoxCqqlBkVXF6R8urUehml5VBIkOYo7RVBjJod%2BXpkc5mRBsBOjLyuokV%2F%2FQ22QusqRqtqMMEkaBh1PTB8%2FermL9SQy7Kt2ddPDu060fBDLD9r0yaK%2FztV7i%2FGscRqvTXEPVn%2BAqMh0Ii8FyA8u10fbhcMygvJ7OAKPNPYB3X1kOq985CSNmDBMbFwCO%2FYyt96M48zWF%2BghUMiREkrW8Xbv9yy%2BsdGtfLB%2FUvjMB8mVT9L4w8BzdcCMOkEKt7uS9Pb8mtgSwaYWy3bEhJfa%2Bsa9JUsuFtSe6Jx0ccQwR91aiBfJDEqCAki58c04tXSWu6ddAfRb1DV0uFiq3Jm7%2FpdESIuVoliSpRqUM9VngSlJaUVjDyL2H5FUUDlwHkititqW%2BwohTP2mj0PQZO59KAKqyyDLcyJO7Xm5YtPSncGjtDm8QIXokmLy%2BUcwSUJ%2BAMdbf2%2BYl7G9jS2Jb7S7MYIyd%2B6q%2BAFAPp4UHzSdzpkIEzbiLHVMQ7jkzMQ0RYi1I1wmo69OrEBMIa4psEGOqUBUtU9vcEiFk5%2B5uao9IHWjQsxdY8tRrosNxDtGuZIBrxyma5CxFVlPKjoBDjH8rhd2rmSNS2Tuh2JmhTvkQ7CJ3NNnrJxE8onvaeEcU%2FqSmGyFwnl6GolX6QcQqA7c2sb5ZA1Opwg%2FHT0FC9BTVoufiYpUQdDPO0gj6LdS0%2FnPybFNRkqe3E7%2BvF1ZcDcTZAMitj7lfc8G%2FtCk5JCoUnK7KO5iBCz&X-Amz-Signature=cc48fb87d4621270b2cac7c5d668343312203348c318cbcb4191b2cfca046adf&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGB7RGYG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGb8%2Bq%2BYWKIboziVxK76LRBkThP2XAoTZ59R0ZNiFdbAiEAoS7Nk5eU11mC4LWBnifNTL6KOzSdeM1Fu5TPhMQoSYMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLlyg%2F2AWfsb%2FjnbWircAys7B2WfoRUPPo5caL%2F53XVAv9RwDZED6aI%2Fpbdguca0dnXrIHoqItWeRFUfvCC9%2BgwPBRYVp7qT61r3Ay2sugw%2B%2Fwn2%2FBRq2DdJ3zirrtouxJojvHOoxCqqlBkVXF6R8urUehml5VBIkOYo7RVBjJod%2BXpkc5mRBsBOjLyuokV%2F%2FQ22QusqRqtqMMEkaBh1PTB8%2FermL9SQy7Kt2ddPDu060fBDLD9r0yaK%2FztV7i%2FGscRqvTXEPVn%2BAqMh0Ii8FyA8u10fbhcMygvJ7OAKPNPYB3X1kOq985CSNmDBMbFwCO%2FYyt96M48zWF%2BghUMiREkrW8Xbv9yy%2BsdGtfLB%2FUvjMB8mVT9L4w8BzdcCMOkEKt7uS9Pb8mtgSwaYWy3bEhJfa%2Bsa9JUsuFtSe6Jx0ccQwR91aiBfJDEqCAki58c04tXSWu6ddAfRb1DV0uFiq3Jm7%2FpdESIuVoliSpRqUM9VngSlJaUVjDyL2H5FUUDlwHkititqW%2BwohTP2mj0PQZO59KAKqyyDLcyJO7Xm5YtPSncGjtDm8QIXokmLy%2BUcwSUJ%2BAMdbf2%2BYl7G9jS2Jb7S7MYIyd%2B6q%2BAFAPp4UHzSdzpkIEzbiLHVMQ7jkzMQ0RYi1I1wmo69OrEBMIa4psEGOqUBUtU9vcEiFk5%2B5uao9IHWjQsxdY8tRrosNxDtGuZIBrxyma5CxFVlPKjoBDjH8rhd2rmSNS2Tuh2JmhTvkQ7CJ3NNnrJxE8onvaeEcU%2FqSmGyFwnl6GolX6QcQqA7c2sb5ZA1Opwg%2FHT0FC9BTVoufiYpUQdDPO0gj6LdS0%2FnPybFNRkqe3E7%2BvF1ZcDcTZAMitj7lfc8G%2FtCk5JCoUnK7KO5iBCz&X-Amz-Signature=5101a1175a374815967299af7fa53a81c4c97bbba840d98afb4c08ec2bfc0d71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
