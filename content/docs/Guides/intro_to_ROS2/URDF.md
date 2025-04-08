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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPBZEVP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDnE%2F9Ff1NOcAAFwzbZKJyNmyCUqzBaRq13xKqT0a88eAiEA8RWsx8PsxKXBZ2iHeBAC3RG4agmU2KFRUpXYhVIFVMEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEeUbzLtrFBzigROVCrcAz5heTx9IQgfqIF6TNAUwKlBIirGLNvV6fZwFZBCen6pAy3MigLmHKdhOzNFFNMz%2FXrSk5AnPCfBoeR0BTM11YKTxmrxUu0NwL4oFKHEEUDHrQfeRFIbhxnI9PQuNGg1U4z%2BIPN%2Fe5n1gYiErFiNmmL5VfBR%2FSkoUlB3X6Zz0dbJpDL2Q%2FbIgSh3Qf5pq1gpsF2mKRKChbLRBxFHtPysQtXaOosqWvd7wKXzZ5l4nG8VD816XLX93foWoJDn7dL4qt7M1BZR%2FIRPyhS0jt%2FQ%2FTZDoAvV4wudlE1gKOhUGnFtcs%2BfnyzYF1%2BJQ1jK%2BK2PKToUfnzAr65c5GE2yt864qUJIDl%2BZgD8oJr52KxuTXrQNsxlnHHcRqYx23v4IM6TWQ%2FMVrGvsuPvO%2FgEygvlNV6xflRfV9k9xjKWFenbDGmWRvUj%2BgZKAVItx2hfzGYb2inl2sGGTvd6hdih%2B1lDnz8uCLxO94XiDOX%2F4zPcnyRo2W%2BenUhQS95Fva0zKlz67dxENPZyhJ5sCQJyndq%2BVf3mzJm%2FMuF%2BT4WmeXKMXApkWEGYlWeU0NmCLoksSKC8vK%2BxWvcmu4JbmT8Rn53ofc5PrXgSjb2CJK%2BfL%2F0z5wZWNfCmKk9nz6Cr1JyoML%2FB1r8GOqUBIgPqlgTdOkAQHpKkqb0kSYMQLMpYdlAVXV952C7m5XMX4x7qvoRjGxOO%2BzXh1gKXN431IQtCNzXE3nAUbobxY7ndFrp0PyrCqGcKFn%2FISQ6XGtiaMexUhOH1Wm%2Ff5e1ExkbM3sN37uz7a%2FEpw0NWF2URlQGfjrcgRELp%2FHwt0YnxhlG%2FA1u15ZlLXH6gcTg2uRK1bCBHwAhEQNdZjKgIDJ3jNWc%2F&X-Amz-Signature=78a2d597e7c3b87462bc67a07b53587f0bcbe54d63b20b133271b64434895d66&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STPBZEVP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDnE%2F9Ff1NOcAAFwzbZKJyNmyCUqzBaRq13xKqT0a88eAiEA8RWsx8PsxKXBZ2iHeBAC3RG4agmU2KFRUpXYhVIFVMEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEeUbzLtrFBzigROVCrcAz5heTx9IQgfqIF6TNAUwKlBIirGLNvV6fZwFZBCen6pAy3MigLmHKdhOzNFFNMz%2FXrSk5AnPCfBoeR0BTM11YKTxmrxUu0NwL4oFKHEEUDHrQfeRFIbhxnI9PQuNGg1U4z%2BIPN%2Fe5n1gYiErFiNmmL5VfBR%2FSkoUlB3X6Zz0dbJpDL2Q%2FbIgSh3Qf5pq1gpsF2mKRKChbLRBxFHtPysQtXaOosqWvd7wKXzZ5l4nG8VD816XLX93foWoJDn7dL4qt7M1BZR%2FIRPyhS0jt%2FQ%2FTZDoAvV4wudlE1gKOhUGnFtcs%2BfnyzYF1%2BJQ1jK%2BK2PKToUfnzAr65c5GE2yt864qUJIDl%2BZgD8oJr52KxuTXrQNsxlnHHcRqYx23v4IM6TWQ%2FMVrGvsuPvO%2FgEygvlNV6xflRfV9k9xjKWFenbDGmWRvUj%2BgZKAVItx2hfzGYb2inl2sGGTvd6hdih%2B1lDnz8uCLxO94XiDOX%2F4zPcnyRo2W%2BenUhQS95Fva0zKlz67dxENPZyhJ5sCQJyndq%2BVf3mzJm%2FMuF%2BT4WmeXKMXApkWEGYlWeU0NmCLoksSKC8vK%2BxWvcmu4JbmT8Rn53ofc5PrXgSjb2CJK%2BfL%2F0z5wZWNfCmKk9nz6Cr1JyoML%2FB1r8GOqUBIgPqlgTdOkAQHpKkqb0kSYMQLMpYdlAVXV952C7m5XMX4x7qvoRjGxOO%2BzXh1gKXN431IQtCNzXE3nAUbobxY7ndFrp0PyrCqGcKFn%2FISQ6XGtiaMexUhOH1Wm%2Ff5e1ExkbM3sN37uz7a%2FEpw0NWF2URlQGfjrcgRELp%2FHwt0YnxhlG%2FA1u15ZlLXH6gcTg2uRK1bCBHwAhEQNdZjKgIDJ3jNWc%2F&X-Amz-Signature=77d911360eafbdd3bc63f8e8ac666fed1fd7672533e142a946da798f273f618a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
