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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUXMEPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvm9T9Sqm8ffDbNfqUCKK%2FSMP8Qom5qo5WFf%2BkMkGiHQIhAM8TQv9VnF0hp7uPBbPMIeiCJIVJI3OJw%2BpybpiGIlmjKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfQyRvDNvwuj4fIvMq3AMUL3k%2FVdXXSNHvOuFlOHGEiqN0bU9vAB8PlvZIXqlmtkkLzXoNs34orX6e1lB0i5MHsRBRFZuQSCrvzoEPh1ppiq37P32ob97PXUAS1ets2xT641qx3vXj3Rrtzz%2BsKGmAbmB1gH5zlUqS5Lhs%2Bel8y21jyqScy4KCgSifwNqwW26xPZhjf3%2FryDQjhcD%2BAqNjsCf4GG2HpAMDEBYXlV7RtaXsXtX%2BTZEumwTBbFoblXDU%2F2tMtUWTPs8XDpxILDcEYJbfZjJ6Eg7lUNh4hGFPKCnZSsqVdQnZkeeNrmHOk0u4AMdLO4r6AOmcKMlkgLwAByY4PRpu64qWhxnav52%2BdlUySZkqdUaNug%2FaMGepeJlHg1uOOvggX6UnyBoMNGYXlp%2BRlMYQFJ1MF2Jlq49MWp%2FN%2BqCTaWFmBsUuZ4sNmIx4K8020YDxrjawnHyWrkRj%2Bt2iLG029spahmydHcbz1Lb8MGwHRvD0Kj6CuGa1M%2FK8HBxtf4AgQNNr82Ph%2BtH1h%2B9FufNlYi%2Blhn%2FRpCps%2Bi3Oo4fB7GSmcUHWBl0AHIE%2F13mo9fcxua0aoSR7SNhfvobOye7YtQ3FilDdbFXWM6xZSjLIRVa2YkQ825cp3vsX6l%2Bpd5IVJfyWzDDfs87CBjqkATMOFblvXfXj%2F9epPbX7Vzcz26CBmei5ZQCQnOjs7iblXCSnuF2D%2FUresIAoOBzoOrWGKjNivqxOntib3ZzyQhDj8vbQmnLkYC7CDcxmZJOKvoVUth%2BbVkMIybxxE06VhPXiKlIZLlltn4pnc13Hlf4w4%2BmmJtHnziZwB8FpYvDkAAlTzYc71Th8u5PJFEkOPeKTTHh9yH89gQo2zQy13gpEIwkU&X-Amz-Signature=6c1eb6d6955c219c0ff37d7bc034f4b1c4df65c06c9d5cf8d89b5f3030d4f956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUXMEPD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvm9T9Sqm8ffDbNfqUCKK%2FSMP8Qom5qo5WFf%2BkMkGiHQIhAM8TQv9VnF0hp7uPBbPMIeiCJIVJI3OJw%2BpybpiGIlmjKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfQyRvDNvwuj4fIvMq3AMUL3k%2FVdXXSNHvOuFlOHGEiqN0bU9vAB8PlvZIXqlmtkkLzXoNs34orX6e1lB0i5MHsRBRFZuQSCrvzoEPh1ppiq37P32ob97PXUAS1ets2xT641qx3vXj3Rrtzz%2BsKGmAbmB1gH5zlUqS5Lhs%2Bel8y21jyqScy4KCgSifwNqwW26xPZhjf3%2FryDQjhcD%2BAqNjsCf4GG2HpAMDEBYXlV7RtaXsXtX%2BTZEumwTBbFoblXDU%2F2tMtUWTPs8XDpxILDcEYJbfZjJ6Eg7lUNh4hGFPKCnZSsqVdQnZkeeNrmHOk0u4AMdLO4r6AOmcKMlkgLwAByY4PRpu64qWhxnav52%2BdlUySZkqdUaNug%2FaMGepeJlHg1uOOvggX6UnyBoMNGYXlp%2BRlMYQFJ1MF2Jlq49MWp%2FN%2BqCTaWFmBsUuZ4sNmIx4K8020YDxrjawnHyWrkRj%2Bt2iLG029spahmydHcbz1Lb8MGwHRvD0Kj6CuGa1M%2FK8HBxtf4AgQNNr82Ph%2BtH1h%2B9FufNlYi%2Blhn%2FRpCps%2Bi3Oo4fB7GSmcUHWBl0AHIE%2F13mo9fcxua0aoSR7SNhfvobOye7YtQ3FilDdbFXWM6xZSjLIRVa2YkQ825cp3vsX6l%2Bpd5IVJfyWzDDfs87CBjqkATMOFblvXfXj%2F9epPbX7Vzcz26CBmei5ZQCQnOjs7iblXCSnuF2D%2FUresIAoOBzoOrWGKjNivqxOntib3ZzyQhDj8vbQmnLkYC7CDcxmZJOKvoVUth%2BbVkMIybxxE06VhPXiKlIZLlltn4pnc13Hlf4w4%2BmmJtHnziZwB8FpYvDkAAlTzYc71Th8u5PJFEkOPeKTTHh9yH89gQo2zQy13gpEIwkU&X-Amz-Signature=f0a7888b989c43a85275cc1e47ebfae2f44f9e73be2f3072c97ecf8f00ebdaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
