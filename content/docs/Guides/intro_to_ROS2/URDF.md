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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DWK2DR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ9fWEyun516m4AZvaZOP1wzfNEzrddh%2FQXt6p9YoMJgIgf9faeIZTOWf1doRLyfaFpB08%2FPMmHm94izwcIGxlwV8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwgf5ovPEnn1zL31ircA7MElJz7g0IaFnUi6F4RbBin%2FXa29308twGSRa6fsi0RU1MRp%2FjLRKBPhxauFOFupJp1brZuuyPgN%2BYWVk1EIpFhMAnu2VEqPwHLgquDfI1Rya7QcOj2bAlKGWHxsWGcMbLMA5nubb3MbsATIjDs9%2FSvwA7ERbLospM0mPBLT2PY7Gbvx0oK4W5CMgqKxEnTxzD4mVo5U0s%2FSmRAJetDli7uUe%2FdLlIRGa59jMxFnZe8uSsNYTSUeuBxMs81V%2FgO0WJAl7tq%2Bj%2FdMwTgigIfwdQLPKK1WhB8LBi1hIR8RBlS6ZL2FhWwGskz3bavKPMQDQN7IVWk738uPN%2BvIRXRf0sKPlWwDbuZC%2FLKE40%2BVHQAEB3UDwNwj09%2FRsc2Ngm93XtYaFnO%2BeE2WpiqDRQMeQrurjHgLwbN7rabORWvkWXyuZNfemnCuA8e7PPYvlYameRVihZ5rHAHqMG56CGGeA4Kcr9cBDAjpUPVmU1Q9sNCvkL6xhEoit4tl9MIT8q494iNT%2FN4bZNoPQRYEMYEpRy5PRwM%2BQaOvd%2F7%2BC1IBTegYOVAzqe9Rs94q20LjKsjURtI216dnHBjkXUho1RDpbxpV8Zfra2pzupv4PIFP%2FYrvkiB4kk8n5oVRGYkMOqeqL0GOqUBXperI8IxU%2FwRkICvkzZ3kPxflttAjw0gOyPKGzx22UybEqJpERA%2Fahsxv1NiT%2FuszG0FfXv6YvC%2FtFiNcbetjDBgd3aIPknhMBmV3Wl1loPwqr25ZxBD4S%2Buz04UKMCPoRJPYtlpmfD4POx5VVNP9WHrvdGAjj2MThvHF28%2BgcDh1mEq5kSNbAgQVWPkEq1zolxJIVqSiYGRvJtZa%2B%2F72i3sFHx7&X-Amz-Signature=2b6c950bc4f2ca6668677698a3cb4f505f1d816422bb516d60a8d856b6425915&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DWK2DR%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ9fWEyun516m4AZvaZOP1wzfNEzrddh%2FQXt6p9YoMJgIgf9faeIZTOWf1doRLyfaFpB08%2FPMmHm94izwcIGxlwV8qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwgf5ovPEnn1zL31ircA7MElJz7g0IaFnUi6F4RbBin%2FXa29308twGSRa6fsi0RU1MRp%2FjLRKBPhxauFOFupJp1brZuuyPgN%2BYWVk1EIpFhMAnu2VEqPwHLgquDfI1Rya7QcOj2bAlKGWHxsWGcMbLMA5nubb3MbsATIjDs9%2FSvwA7ERbLospM0mPBLT2PY7Gbvx0oK4W5CMgqKxEnTxzD4mVo5U0s%2FSmRAJetDli7uUe%2FdLlIRGa59jMxFnZe8uSsNYTSUeuBxMs81V%2FgO0WJAl7tq%2Bj%2FdMwTgigIfwdQLPKK1WhB8LBi1hIR8RBlS6ZL2FhWwGskz3bavKPMQDQN7IVWk738uPN%2BvIRXRf0sKPlWwDbuZC%2FLKE40%2BVHQAEB3UDwNwj09%2FRsc2Ngm93XtYaFnO%2BeE2WpiqDRQMeQrurjHgLwbN7rabORWvkWXyuZNfemnCuA8e7PPYvlYameRVihZ5rHAHqMG56CGGeA4Kcr9cBDAjpUPVmU1Q9sNCvkL6xhEoit4tl9MIT8q494iNT%2FN4bZNoPQRYEMYEpRy5PRwM%2BQaOvd%2F7%2BC1IBTegYOVAzqe9Rs94q20LjKsjURtI216dnHBjkXUho1RDpbxpV8Zfra2pzupv4PIFP%2FYrvkiB4kk8n5oVRGYkMOqeqL0GOqUBXperI8IxU%2FwRkICvkzZ3kPxflttAjw0gOyPKGzx22UybEqJpERA%2Fahsxv1NiT%2FuszG0FfXv6YvC%2FtFiNcbetjDBgd3aIPknhMBmV3Wl1loPwqr25ZxBD4S%2Buz04UKMCPoRJPYtlpmfD4POx5VVNP9WHrvdGAjj2MThvHF28%2BgcDh1mEq5kSNbAgQVWPkEq1zolxJIVqSiYGRvJtZa%2B%2F72i3sFHx7&X-Amz-Signature=4658a42b9e73e27f2fb26d02d969cb3ee3b633dccb772fc392a2616922146f17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
