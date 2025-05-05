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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD7TMHN4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpAQk6CatIPLbUG4bNp4kh%2BXLav2FZcV8lJYAOhzSnqQIhAM1BlDEmA4y5zDn%2B8R%2FPXwPSBzoxRajdVYW89CZ79LA8Kv8DCDAQABoMNjM3NDIzMTgzODA1IgydQL6VTYbkhghTRUAq3AO06iCO%2B34Y6wQltYKiafamLPhEcO5Mq4oo1U6WkYxY6EiotFVf7aFWdHT1%2FY7d5nXUvPgPy%2FJdI%2Fl%2F0UCf8EFM99%2Fj4ZdX8Jhd237SmGnUoblwbVuin7HrEOJ8V8KolFKKpMSUppLdQ%2BnwUjpuFsiv4rmqdz2rC5rbYV8Q6F91qo3hF1mmIlt3fko%2BU9ZNTAJ42OOCkZL0tG921Vpk4vTM2FaLULy86IUyxxRL5vI73TLiwEvYkD0SowzPA9cT5vUOwk5cDsPCzv%2Btjw58GlLpioLY1w9fRrSYbGoH%2B4EH0pa1sCVLFTOm52M%2F4NivaBOaz84lQGcMBAmCEZ1PO4A7nbenKh7RZzljJulsd0JKtJJSx%2F2Onw76sh1hbCwfq0D5zueyjVgOCDS5NbXUg3%2FM%2Bt4dkNo0FzOv7kcQTH6TkBYrS3M7iggOmDtjzy4Xg5Rwir2hM3bsBZdD9lBudvdVhFjfMNu2cqDIV1k527for4Hn8O%2F4XFpFcgiuqu1FrZk6paw%2FC12YH43lTJVHSUxyc4IWWgPHJvGhkdMrafoS6jnTQgsZUwN1gv1zu9rpitPijjlr%2B2SR%2BzctHWXHUKwYEl40J1yQm1v84UMXJC1A0FL1Z%2BstJJnCRWxrQjCUluPABjqkAdgtC59OTEHfF9IaHdxYNXEiHoQLdx3xuzQytu4YaxqBaz8S2xFt44l%2BcjcJttvlkTBZwGTel39UwhBZWam4msLaoCK9bDrqK6Nk6QeY6QsX6ggix9jhVmalkFjcrxLdeE1PCDCgeptlHl32vOiMrp%2BXYoHRucMOVkLpOfg2up7WCiQZLDW3DqoC8ijc2gDL277RnVgud1fMMOyP9IE8rV7jQNis&X-Amz-Signature=6e5ddbdbcbd3b5db15b995f8e58d59774f95c953013cde5c1e1e7b3c77ec14d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD7TMHN4%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpAQk6CatIPLbUG4bNp4kh%2BXLav2FZcV8lJYAOhzSnqQIhAM1BlDEmA4y5zDn%2B8R%2FPXwPSBzoxRajdVYW89CZ79LA8Kv8DCDAQABoMNjM3NDIzMTgzODA1IgydQL6VTYbkhghTRUAq3AO06iCO%2B34Y6wQltYKiafamLPhEcO5Mq4oo1U6WkYxY6EiotFVf7aFWdHT1%2FY7d5nXUvPgPy%2FJdI%2Fl%2F0UCf8EFM99%2Fj4ZdX8Jhd237SmGnUoblwbVuin7HrEOJ8V8KolFKKpMSUppLdQ%2BnwUjpuFsiv4rmqdz2rC5rbYV8Q6F91qo3hF1mmIlt3fko%2BU9ZNTAJ42OOCkZL0tG921Vpk4vTM2FaLULy86IUyxxRL5vI73TLiwEvYkD0SowzPA9cT5vUOwk5cDsPCzv%2Btjw58GlLpioLY1w9fRrSYbGoH%2B4EH0pa1sCVLFTOm52M%2F4NivaBOaz84lQGcMBAmCEZ1PO4A7nbenKh7RZzljJulsd0JKtJJSx%2F2Onw76sh1hbCwfq0D5zueyjVgOCDS5NbXUg3%2FM%2Bt4dkNo0FzOv7kcQTH6TkBYrS3M7iggOmDtjzy4Xg5Rwir2hM3bsBZdD9lBudvdVhFjfMNu2cqDIV1k527for4Hn8O%2F4XFpFcgiuqu1FrZk6paw%2FC12YH43lTJVHSUxyc4IWWgPHJvGhkdMrafoS6jnTQgsZUwN1gv1zu9rpitPijjlr%2B2SR%2BzctHWXHUKwYEl40J1yQm1v84UMXJC1A0FL1Z%2BstJJnCRWxrQjCUluPABjqkAdgtC59OTEHfF9IaHdxYNXEiHoQLdx3xuzQytu4YaxqBaz8S2xFt44l%2BcjcJttvlkTBZwGTel39UwhBZWam4msLaoCK9bDrqK6Nk6QeY6QsX6ggix9jhVmalkFjcrxLdeE1PCDCgeptlHl32vOiMrp%2BXYoHRucMOVkLpOfg2up7WCiQZLDW3DqoC8ijc2gDL277RnVgud1fMMOyP9IE8rV7jQNis&X-Amz-Signature=a53889c23b020f250e5db708f9681a3d58126a5a738857b28b7ee8fb1ef138e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
