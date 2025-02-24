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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT37MK2N%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG24qiWkJ3E67D%2Bt7ZSFAdhhTLBXyxSHY%2Bbj4Qdct7YiAiBCzbwoo72m75909lOCqyQtfbS3%2BxuF7fm1nslbBc9geyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM6bUDmrNItdzuVQKIKtwDGiuHtUdnpixQC9bCcCY8z9zPD3rXZ1NZaXPexT9Qx4LDq%2BOMnCCDcUC6bUdyydcESlJj56QLOhhaw8fDpS97Q8MmJo68WVEZJ5SELmYzpy0NIyVUIbq55vH7CPQCQTCHExtnYloGFu8EpJ%2FCN6fUVNo%2BEsmSF2%2FNmA72sf%2BoUrGeBiZaC3DnjkyuiCTrecNjxDZm188hg%2Fk6svH1xQ4ENYpDd%2F1pOiA85vpnLeuhKxs%2FkM6I0pd2u%2BesqGFAihsxWhWzsNTep13lsubUuKAtgGbVWfKBkaS6cTD8eBaIa6PAg%2BTsC%2FYxC32NTW6GXSMWLcDN%2BCyJ%2F1Y3q%2FVTLVnJjukQ6hmwQjeL9DT%2B2XnQHKCSAYGJRPSLAjrD3hgKdt4dcYr8m6gEeKb52byFP5hIFd5vaD4Z4RPEWx2Ni1Z6qXE5WOSVeMBk3qfRRHte0tavt4JFG3u1vFR6v4UsfvduDjH5%2BB7q9hJQPmbeJylxWVripDetOtgkBsll2seeaMSGtwjX5Y9xR1yeJFER0OssE4Kbhb5CZlu0oDoEC1GQL39tIIcvzbb6UBVCFd7CVmp%2FB36PNVYUSuS%2FRXWJdZINGVuHSANcPXC7fBogfG7NFum5ghCGCsyN%2FWs63now3uHvvQY6pgGmeVR1KD0wre0yairOaTA7I2SLiq5FYvsVFqM5TI6pbiMaYP5pLvVx%2FRUvNMYburD1oiclYON%2F4M8fFD%2FVinO1ybMj9nxyvu9JLL9LE4Yygudy94if9o9FLPhMyNST8vZNbsXaBSMdOqH5kyVSDyYepwbSBmgWTnOg%2FdJouJMCEt3gh989JEnQ2Hta0RBNg%2BFGfbqdNMV1Z5Lv7MS%2FU0btGhIXna7Y&X-Amz-Signature=e883f56b6bd9dd569053c3a7f1f51bc95a6b738f13623320f7f1fde7f2cf092d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT37MK2N%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG24qiWkJ3E67D%2Bt7ZSFAdhhTLBXyxSHY%2Bbj4Qdct7YiAiBCzbwoo72m75909lOCqyQtfbS3%2BxuF7fm1nslbBc9geyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM6bUDmrNItdzuVQKIKtwDGiuHtUdnpixQC9bCcCY8z9zPD3rXZ1NZaXPexT9Qx4LDq%2BOMnCCDcUC6bUdyydcESlJj56QLOhhaw8fDpS97Q8MmJo68WVEZJ5SELmYzpy0NIyVUIbq55vH7CPQCQTCHExtnYloGFu8EpJ%2FCN6fUVNo%2BEsmSF2%2FNmA72sf%2BoUrGeBiZaC3DnjkyuiCTrecNjxDZm188hg%2Fk6svH1xQ4ENYpDd%2F1pOiA85vpnLeuhKxs%2FkM6I0pd2u%2BesqGFAihsxWhWzsNTep13lsubUuKAtgGbVWfKBkaS6cTD8eBaIa6PAg%2BTsC%2FYxC32NTW6GXSMWLcDN%2BCyJ%2F1Y3q%2FVTLVnJjukQ6hmwQjeL9DT%2B2XnQHKCSAYGJRPSLAjrD3hgKdt4dcYr8m6gEeKb52byFP5hIFd5vaD4Z4RPEWx2Ni1Z6qXE5WOSVeMBk3qfRRHte0tavt4JFG3u1vFR6v4UsfvduDjH5%2BB7q9hJQPmbeJylxWVripDetOtgkBsll2seeaMSGtwjX5Y9xR1yeJFER0OssE4Kbhb5CZlu0oDoEC1GQL39tIIcvzbb6UBVCFd7CVmp%2FB36PNVYUSuS%2FRXWJdZINGVuHSANcPXC7fBogfG7NFum5ghCGCsyN%2FWs63now3uHvvQY6pgGmeVR1KD0wre0yairOaTA7I2SLiq5FYvsVFqM5TI6pbiMaYP5pLvVx%2FRUvNMYburD1oiclYON%2F4M8fFD%2FVinO1ybMj9nxyvu9JLL9LE4Yygudy94if9o9FLPhMyNST8vZNbsXaBSMdOqH5kyVSDyYepwbSBmgWTnOg%2FdJouJMCEt3gh989JEnQ2Hta0RBNg%2BFGfbqdNMV1Z5Lv7MS%2FU0btGhIXna7Y&X-Amz-Signature=b4db4178c0c1ea0cbc19f2436c242cf1c4fcb8cc4277edac7ee54dfa298983fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
