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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SO32YDL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFXMP%2BMBSP5nkjqMpKm8RrqTldYQIGgd4tAtAtuRz9urAiEAzN7qDK2BxabLHu8mOHIfYw2nV0uElcUyJxExy7FiseUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAzHqxSWk18G1UgQbyrcA8t1myJ5LBYIjj%2FB7v05VVnjeJpawAMiQDLY19WRS13IBMUu344ayft7lGuvNCVJBDLR5or3OlAAlKev7hK5532n9d0BYLpwekuos2LaCbWVyCmq1rNuptvmFRtu%2B6lEMpICW8MpwrujR6bVcVrf%2FEixrx3G0wE7w4TKKyOS%2B0Q8G3EUSOBRmWJRs8y6wNnfXYi5a%2BlaFxY1YiAF9UJclWB6KvyfEjavGJ0ft4EzHt53%2Bl8%2BXMLywxg5ipW2WoFVm7KoXKIkHi2RODAZHj%2FJQB0jLz0UWyXq9Ip6eKvN5jDcouOkMNdGFMnnAn5g8Rcj8pY4KsvZ8aah9fSf%2BQq1QUT7%2BxhgxqnRzmFSL22s%2FwdsKXxoSvCXYlHJKzTC6HNMcrAzMHaM3NoNLmSKxCkuqVybjS3ogdHzdqeQwm%2FaupPXqDQmJZ2g4rd41%2Fsme8HHnm9sp5cVfexdm3pnKOvjtcVWOGaPGyGqsWoaXRfM6d0jKQfE4TaUKyITmB5SeDiizx4R6idJ7FFF2GBXETa1tmU9bUnEsC2xdUE2%2FseI9flNXNDIoUr8vxiVM5nqExSAWp0xcgGWFHc1vdryC9TUT8t3yl153y6SUpO9nas5AhWBBQTmy6oENa5ZrCe9MIugqMAGOqUBveyvEg8frrg%2FW0xYLnWxbswvdDwDEMknrk6DoEY8nXyqTKRZpJTRNtp291t28ISX6cVsTxNDQyEmrDhBU%2B%2FIyZ41ciq4%2BKQ1WHtHgHLJmC0eXcmuYpx3wR21i462Nu9c2WVTQI7SKq2e0qgAml2p5yA5skPlo7%2F%2BlgSvf%2BU77LaqxhJbEsTywhk566VQTqUF%2BfKz88Q56bPC8raPOANJ11Y%2B855L&X-Amz-Signature=e8352f9df6fa2a490c03a8d8280e4a6cc28cb05a0c9fc26c743cde1775104e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SO32YDL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFXMP%2BMBSP5nkjqMpKm8RrqTldYQIGgd4tAtAtuRz9urAiEAzN7qDK2BxabLHu8mOHIfYw2nV0uElcUyJxExy7FiseUq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDAzHqxSWk18G1UgQbyrcA8t1myJ5LBYIjj%2FB7v05VVnjeJpawAMiQDLY19WRS13IBMUu344ayft7lGuvNCVJBDLR5or3OlAAlKev7hK5532n9d0BYLpwekuos2LaCbWVyCmq1rNuptvmFRtu%2B6lEMpICW8MpwrujR6bVcVrf%2FEixrx3G0wE7w4TKKyOS%2B0Q8G3EUSOBRmWJRs8y6wNnfXYi5a%2BlaFxY1YiAF9UJclWB6KvyfEjavGJ0ft4EzHt53%2Bl8%2BXMLywxg5ipW2WoFVm7KoXKIkHi2RODAZHj%2FJQB0jLz0UWyXq9Ip6eKvN5jDcouOkMNdGFMnnAn5g8Rcj8pY4KsvZ8aah9fSf%2BQq1QUT7%2BxhgxqnRzmFSL22s%2FwdsKXxoSvCXYlHJKzTC6HNMcrAzMHaM3NoNLmSKxCkuqVybjS3ogdHzdqeQwm%2FaupPXqDQmJZ2g4rd41%2Fsme8HHnm9sp5cVfexdm3pnKOvjtcVWOGaPGyGqsWoaXRfM6d0jKQfE4TaUKyITmB5SeDiizx4R6idJ7FFF2GBXETa1tmU9bUnEsC2xdUE2%2FseI9flNXNDIoUr8vxiVM5nqExSAWp0xcgGWFHc1vdryC9TUT8t3yl153y6SUpO9nas5AhWBBQTmy6oENa5ZrCe9MIugqMAGOqUBveyvEg8frrg%2FW0xYLnWxbswvdDwDEMknrk6DoEY8nXyqTKRZpJTRNtp291t28ISX6cVsTxNDQyEmrDhBU%2B%2FIyZ41ciq4%2BKQ1WHtHgHLJmC0eXcmuYpx3wR21i462Nu9c2WVTQI7SKq2e0qgAml2p5yA5skPlo7%2F%2BlgSvf%2BU77LaqxhJbEsTywhk566VQTqUF%2BfKz88Q56bPC8raPOANJ11Y%2B855L&X-Amz-Signature=58fe3dc4a85e0d1e602a6a1073c1942af155069dd838851ea3dd15ffb9426a15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
