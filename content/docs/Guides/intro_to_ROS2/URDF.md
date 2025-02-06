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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AYP6D6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDarqF8iPsY%2F3hWODd71aWE126nYVJyOQ8VvyQPVphIYwIgU2vngmNWazghoDK49f9yxNV7%2FaMqV%2B109Uf241A9n%2FAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOk4B098lUGMafeCYircAw0UgJVP4%2FEFdDvpUWiaT21eJK%2Fs1wcxg%2FpmUzLsew1IxmA2NY1ltjliyp%2BaadEUWttDpgp00WOaKRlfPiscndx7M2%2BnlYQ0XN3esT50aMC0t5LB48TIFHMfiJz9VqVIGBPo%2F265egmfWrmuzl53wWwwon37%2BwaoL4%2FT3jzHD6%2BnQbqQZNruSM7hIYmyEsJ9%2BzzH3dR5R6A%2BXKzMqLson4o0Kwh6eWvwLnE0%2FV6ySrxE%2FHa2UZbChCkp88Mf9dF4z4o9nHD45XgRNR7eaPMzEMrANnX5%2Fzuj1SamHlaDZSToOLwL1uXHP8O3u1H21h7NEOOjRS6E4lbItCq2IW6zx5QNicvKDRG%2B8LOohk2C7FErdLvfBY%2Fls0JUmLMTTLztquPSLOEjyECYL4z7ZM1C56OF4IHo5HTu%2FovldTzSCfo5VJikvdgEQLVKDk5DCJ4MHzwc%2B8wFC2mhweeGYHItouBOBP4NQZ5RYdoRHAFGl%2BzFn%2BrUZMgWA%2BBMjKLaZGvXj0qD3Hndss55lhTz0kNxERPsW5v3shqiH0Wn3FfHYkrupl96DKs2mJsGmtIn79BxB1EF60FYl%2FSkmE7uZauM9%2FbihkfaABazc0R5Eb09iaOb0JJP5%2BVepCoTzD08MOydk70GOqUBeyUIrZGzemTas%2BqgWOf4j6TpJi9mGJtpgTi1uPe33Ut3mtGH1xJ320SSPLStdV%2Bo4cehflsQHCiSCDUcel8neMK4SBVw7FwQSk0IrfiBT1tfy0zmrP9TwGjUo6YxTUz%2BgXIDw0u1wrPJu%2FvD6iqXQJsdh9k0DzF7LBdCZg9Vn6qw5T52NQoN7PPqCSaCND4A2NHUsp3V60NuZ7YqDv5r5mVigEps&X-Amz-Signature=e8098d1588338e6ddb955eb2ad96ffa15b6b4bd60c4d40e7c4d4dbd1534da50e&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663AYP6D6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDarqF8iPsY%2F3hWODd71aWE126nYVJyOQ8VvyQPVphIYwIgU2vngmNWazghoDK49f9yxNV7%2FaMqV%2B109Uf241A9n%2FAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOk4B098lUGMafeCYircAw0UgJVP4%2FEFdDvpUWiaT21eJK%2Fs1wcxg%2FpmUzLsew1IxmA2NY1ltjliyp%2BaadEUWttDpgp00WOaKRlfPiscndx7M2%2BnlYQ0XN3esT50aMC0t5LB48TIFHMfiJz9VqVIGBPo%2F265egmfWrmuzl53wWwwon37%2BwaoL4%2FT3jzHD6%2BnQbqQZNruSM7hIYmyEsJ9%2BzzH3dR5R6A%2BXKzMqLson4o0Kwh6eWvwLnE0%2FV6ySrxE%2FHa2UZbChCkp88Mf9dF4z4o9nHD45XgRNR7eaPMzEMrANnX5%2Fzuj1SamHlaDZSToOLwL1uXHP8O3u1H21h7NEOOjRS6E4lbItCq2IW6zx5QNicvKDRG%2B8LOohk2C7FErdLvfBY%2Fls0JUmLMTTLztquPSLOEjyECYL4z7ZM1C56OF4IHo5HTu%2FovldTzSCfo5VJikvdgEQLVKDk5DCJ4MHzwc%2B8wFC2mhweeGYHItouBOBP4NQZ5RYdoRHAFGl%2BzFn%2BrUZMgWA%2BBMjKLaZGvXj0qD3Hndss55lhTz0kNxERPsW5v3shqiH0Wn3FfHYkrupl96DKs2mJsGmtIn79BxB1EF60FYl%2FSkmE7uZauM9%2FbihkfaABazc0R5Eb09iaOb0JJP5%2BVepCoTzD08MOydk70GOqUBeyUIrZGzemTas%2BqgWOf4j6TpJi9mGJtpgTi1uPe33Ut3mtGH1xJ320SSPLStdV%2Bo4cehflsQHCiSCDUcel8neMK4SBVw7FwQSk0IrfiBT1tfy0zmrP9TwGjUo6YxTUz%2BgXIDw0u1wrPJu%2FvD6iqXQJsdh9k0DzF7LBdCZg9Vn6qw5T52NQoN7PPqCSaCND4A2NHUsp3V60NuZ7YqDv5r5mVigEps&X-Amz-Signature=c0855696a6bc842361dbaf34228265eb8ed5b595f74f7e6f9be2ba727bae71a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
