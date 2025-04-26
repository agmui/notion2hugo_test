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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4VED22%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZaFk8zVx%2B2x0G4ErRNIAxbldAHj%2FOByfDzHPxWU32dQIgM7gkneyWxXzST%2FD3s9wWQAweXZXCnJ63xC5e0e3vJSUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJiriwz%2BmoMJS67AZyrcA7TgEkFdpmJWThHmNoLnK0zLVQ7K48KAHy6xnXCX%2FKhp7dl%2BxKK0CVY2qjNhY0QlGlACL%2B40r07hcHaqADqy84SFCT%2Fv2cntoxIV6kjy4GRKRc42YXLgLUiMdjU73%2B4ThuA0GMy4Jqq3tP6QRqQtMN0A07qeDsUBHBnj5fUDUeFwDHC%2FFDX%2Futujk%2B%2BtdQK8OmRqBa3dK09sg%2BVjjQv3fvKcRS0YjRoCXHgeqKFNjEjcVPLVgbAvvwDXzSALVKf0QCUvixFgU7E1XlBtuKCU81lnm%2B%2BFCnv4tDrL3%2BS2s8D%2FPnDfxiE5UgW4we3Crz6qxPceHn%2F8hAwFr2A2zfLhxx9yi9uZnX%2BYsaTVcJGNo4dU35C4OH3LbZla64BKzrlsBS%2BcGLp4Rh7n%2FZhZJFuIJN3GzvtgBEjxP20PJ9t8s5woM1HfkmJqJtV8srETDSOc9%2FtQL9x0K%2FqkizwVeDjSg%2BBdvlDEtQC1foTbYYaQgqzlwMz2zWjaf77NJ1pO8ctwomaf3wFRtmvzt%2FC%2F42x1K7BSRalARUUMwt3ERsYwlGa%2FZ4uKBPvY2%2F7riZ%2Bmg2m5PeTfagHWWDBbrJKFdJrjEgoQr7p9KiPeemwzm%2Faz%2FEEL20beiKRKni3lHwZ5MIDAtcAGOqUBKXOJRMl5UDTJrPJwFjRUuSG44NjSIOkdvsznHvql%2BHbRFbE02QB8n36MDnKiZd3rK3wAzBZYBJyNKosvqtHBcRxtFfz1MKhFLWEYzfYyDWlBbVxUSLP7DKy%2FrPFZVHmcMzG77vwDo37dg5mmobq%2B92q%2FOsO9BlbS57HrRQoXINXYUsLOHkrXcQX5FIdrVGutYGOMr%2B0s5xuUSLlTYEgkeO8NizEG&X-Amz-Signature=9ce622e1e27fc8dcd8760b43367d541dc2f1d867572bf77ed7f17d2a03e9848b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4VED22%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZaFk8zVx%2B2x0G4ErRNIAxbldAHj%2FOByfDzHPxWU32dQIgM7gkneyWxXzST%2FD3s9wWQAweXZXCnJ63xC5e0e3vJSUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJiriwz%2BmoMJS67AZyrcA7TgEkFdpmJWThHmNoLnK0zLVQ7K48KAHy6xnXCX%2FKhp7dl%2BxKK0CVY2qjNhY0QlGlACL%2B40r07hcHaqADqy84SFCT%2Fv2cntoxIV6kjy4GRKRc42YXLgLUiMdjU73%2B4ThuA0GMy4Jqq3tP6QRqQtMN0A07qeDsUBHBnj5fUDUeFwDHC%2FFDX%2Futujk%2B%2BtdQK8OmRqBa3dK09sg%2BVjjQv3fvKcRS0YjRoCXHgeqKFNjEjcVPLVgbAvvwDXzSALVKf0QCUvixFgU7E1XlBtuKCU81lnm%2B%2BFCnv4tDrL3%2BS2s8D%2FPnDfxiE5UgW4we3Crz6qxPceHn%2F8hAwFr2A2zfLhxx9yi9uZnX%2BYsaTVcJGNo4dU35C4OH3LbZla64BKzrlsBS%2BcGLp4Rh7n%2FZhZJFuIJN3GzvtgBEjxP20PJ9t8s5woM1HfkmJqJtV8srETDSOc9%2FtQL9x0K%2FqkizwVeDjSg%2BBdvlDEtQC1foTbYYaQgqzlwMz2zWjaf77NJ1pO8ctwomaf3wFRtmvzt%2FC%2F42x1K7BSRalARUUMwt3ERsYwlGa%2FZ4uKBPvY2%2F7riZ%2Bmg2m5PeTfagHWWDBbrJKFdJrjEgoQr7p9KiPeemwzm%2Faz%2FEEL20beiKRKni3lHwZ5MIDAtcAGOqUBKXOJRMl5UDTJrPJwFjRUuSG44NjSIOkdvsznHvql%2BHbRFbE02QB8n36MDnKiZd3rK3wAzBZYBJyNKosvqtHBcRxtFfz1MKhFLWEYzfYyDWlBbVxUSLP7DKy%2FrPFZVHmcMzG77vwDo37dg5mmobq%2B92q%2FOsO9BlbS57HrRQoXINXYUsLOHkrXcQX5FIdrVGutYGOMr%2B0s5xuUSLlTYEgkeO8NizEG&X-Amz-Signature=2b4a208cdcc8b0a10e34c7bf9b4bab73cfe8eaa55aa6d5d80586f47a26502fca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
