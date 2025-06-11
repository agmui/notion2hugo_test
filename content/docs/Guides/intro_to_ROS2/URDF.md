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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJRVQNG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELVNiymAf2Pdl6eKwJXD3vhH6LYDe0Ba3VhSf9PY8YUAiBm6CsnN46vdXSBeh19mZAYKlkJZLdqKfxmOK2RnrzGFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsaXcbrOzt%2B5Es17OKtwDxyYGybgsyBivRdWI71uRDnKYUo1gVN7LcV%2BR45zeyUenhPcJxzpWbYFVFg1%2F3NAn1OKf6AtT0qQy50A5l1fp7YtR7uN6I6YYpy2bbHiWpPXXrFz8yGERV%2B0Dwo7vbHTsVq6kjfGsdQhNQ%2FTNvXQK8Q8t5DlstLSf9%2FB71suIW5ByVpIv1D%2B2kSVuKQj7D26vxagYH55ziTTdxwz2e90sWGXlPNYYtJqXNKHlb79MmImbqnwwp8bjH0lTIpIvgj3i22tBN4rHynjwu4Xme41%2FT9Oz6p5QeQpC4T1VXsSw7tbsnT9w7XgEaVq%2BO2kF1NevtQulEDcOYWJb0L7MHK4Qp9zGMsMqrIlHGgRala4bRGUJvESdilWYZwH51I1NXhOZUAbbOxaBRQSKDsL4ynzRK3rdtau0jCMBCDfPgTlXbkcDBwFXURVOEi%2BtRCPXhqKtv2kKyxzKJuQe7%2F9EFCWIJMez1jo7cS4TuE%2Fy0CEBsyjPczYS55Wt7xb07war09NotQyPdU%2ByV4tBB98p1m2haZi16nwYxlT5PzMqHaBJMnfpuBy8i1%2BriS9E%2F3lhvAGugoTkz7MafMTEtKWdtwJ4AuGbkG9uZqjQYlCJBnS6NhMIzJC9wDV0RWSJSZUwzOWlwgY6pgHb6OhGWhfRSC6qt9EAzMQQprx7%2FwLyq71T2hKooHUyDMJuG%2FHe0l1G%2Bq2vcY9mSLTif64WFlmKsMsuy0TPkeZ8sZOjMzyAcLdtCgF31DDStPMt8KqU76yvZnMlfnnKoVWRW53OvEpD2dbXTkl%2BDrdwGcHcPZ1n75%2Bnqpg1gXIDdyV5r%2BXf%2BIkvKnfflyhOUaAfYXvgJn1B4VAxTbX11WJM7W4Xuc%2Fq&X-Amz-Signature=38d4fac74df42c1f357a6f13a5747791394e2eb8fe49d202d9e0724340606e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJRVQNG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELVNiymAf2Pdl6eKwJXD3vhH6LYDe0Ba3VhSf9PY8YUAiBm6CsnN46vdXSBeh19mZAYKlkJZLdqKfxmOK2RnrzGFyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsaXcbrOzt%2B5Es17OKtwDxyYGybgsyBivRdWI71uRDnKYUo1gVN7LcV%2BR45zeyUenhPcJxzpWbYFVFg1%2F3NAn1OKf6AtT0qQy50A5l1fp7YtR7uN6I6YYpy2bbHiWpPXXrFz8yGERV%2B0Dwo7vbHTsVq6kjfGsdQhNQ%2FTNvXQK8Q8t5DlstLSf9%2FB71suIW5ByVpIv1D%2B2kSVuKQj7D26vxagYH55ziTTdxwz2e90sWGXlPNYYtJqXNKHlb79MmImbqnwwp8bjH0lTIpIvgj3i22tBN4rHynjwu4Xme41%2FT9Oz6p5QeQpC4T1VXsSw7tbsnT9w7XgEaVq%2BO2kF1NevtQulEDcOYWJb0L7MHK4Qp9zGMsMqrIlHGgRala4bRGUJvESdilWYZwH51I1NXhOZUAbbOxaBRQSKDsL4ynzRK3rdtau0jCMBCDfPgTlXbkcDBwFXURVOEi%2BtRCPXhqKtv2kKyxzKJuQe7%2F9EFCWIJMez1jo7cS4TuE%2Fy0CEBsyjPczYS55Wt7xb07war09NotQyPdU%2ByV4tBB98p1m2haZi16nwYxlT5PzMqHaBJMnfpuBy8i1%2BriS9E%2F3lhvAGugoTkz7MafMTEtKWdtwJ4AuGbkG9uZqjQYlCJBnS6NhMIzJC9wDV0RWSJSZUwzOWlwgY6pgHb6OhGWhfRSC6qt9EAzMQQprx7%2FwLyq71T2hKooHUyDMJuG%2FHe0l1G%2Bq2vcY9mSLTif64WFlmKsMsuy0TPkeZ8sZOjMzyAcLdtCgF31DDStPMt8KqU76yvZnMlfnnKoVWRW53OvEpD2dbXTkl%2BDrdwGcHcPZ1n75%2Bnqpg1gXIDdyV5r%2BXf%2BIkvKnfflyhOUaAfYXvgJn1B4VAxTbX11WJM7W4Xuc%2Fq&X-Amz-Signature=49425822e2f95be63c437da47cbe3d15bba24bbf28cc04aa346b9f5215526f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
