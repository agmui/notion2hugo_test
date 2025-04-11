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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4VZB2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDSoNEj9clQ9za5xqQJJHQAC%2BbeQI0vbxfVDH9PkZ1R0gIhAI3aphgdKdXdyqcmvAhfXuaNIMRgdOXfwX%2FAICzE4HZ8KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo1QSMJ5iKqvhSFt0q3ANP7aHtA7PPp7%2BX%2FopawyuV3CJtNZD%2BgGtJ%2BNPH63MqrYDUhObVfi1nXXgQ99F9ebAvJAS8hg0izQHNnOgj9IbqnYJalAnU2X35Tlpq6VHAtvcN8D74NaUidTrGk5NMkgVtduDYpGkG7tIGiNebta1Lmu2TP3M9PhVRzNkvazhr7ICzROBNYSTSGNsenONaZXq0YwnfrYDyNC%2FIRiRt5dB%2BMY8RVEQ3cbZwGjp0ptJEltPDP7kErohcY7xSYWpUN3v%2F1u%2Bo4Kt2iTL9%2BEfS35Djjp3lcW2kx%2B99A%2BsBSXAaQhmuT8lbEi0i9vuvnAVVS13xDk7rsl0qCNqOCrMPARY02H0qje83ecI36S96pToIdhPLVzh%2FQzFZ5dtljnqahQ810jDlkR2moXieMuFKoHgKEZyEw2a0OVEsX2vBgnfQW2aRcrMPMJ6f33EBKg%2FuZ1RBLRv2eVOYcZTCRGRo037YpjIKOIF1UY8ZirH%2BF%2F%2FO%2F97J25N014hU0Iz511reE7j6WHsFKSUO9e3RZa3HSdLzvSxsaGbirSDRaPaphvjd4WWyeMruYNnJhqMLYBDgt%2Bg1vmLaUHsBV%2BG8BWYwGXMJZquU6KVdTd6CHwATI9bXzKGjJMTvhThHJADyATDLyuO%2FBjqkAfxvED3DUj%2FE%2BXqJr5OpK9Lj7oC43vIr5C2u8r%2BTEs97CyrPJtrbzOod0uf3%2F%2B8UZfODoo1LmzUK4nd9qnar%2B3Q5B3Q0hWEOsVK4Kn0D7FEy%2BlBnYSLU%2BdaHp3%2F86qPPOE0wJvAJUYlc2wMrZ2AqImSwa3fwUceqB45U6%2BLNoDjoHwjusx5h2WErXql2FFv9pPL%2B8QJGFy%2FRZM84pYBRUcB0Dxag&X-Amz-Signature=d9db8fbc0dcca475427d2756f03b0d0f1d924e84fcf0c34305c403e4bdc1e1a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4VZB2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDSoNEj9clQ9za5xqQJJHQAC%2BbeQI0vbxfVDH9PkZ1R0gIhAI3aphgdKdXdyqcmvAhfXuaNIMRgdOXfwX%2FAICzE4HZ8KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo1QSMJ5iKqvhSFt0q3ANP7aHtA7PPp7%2BX%2FopawyuV3CJtNZD%2BgGtJ%2BNPH63MqrYDUhObVfi1nXXgQ99F9ebAvJAS8hg0izQHNnOgj9IbqnYJalAnU2X35Tlpq6VHAtvcN8D74NaUidTrGk5NMkgVtduDYpGkG7tIGiNebta1Lmu2TP3M9PhVRzNkvazhr7ICzROBNYSTSGNsenONaZXq0YwnfrYDyNC%2FIRiRt5dB%2BMY8RVEQ3cbZwGjp0ptJEltPDP7kErohcY7xSYWpUN3v%2F1u%2Bo4Kt2iTL9%2BEfS35Djjp3lcW2kx%2B99A%2BsBSXAaQhmuT8lbEi0i9vuvnAVVS13xDk7rsl0qCNqOCrMPARY02H0qje83ecI36S96pToIdhPLVzh%2FQzFZ5dtljnqahQ810jDlkR2moXieMuFKoHgKEZyEw2a0OVEsX2vBgnfQW2aRcrMPMJ6f33EBKg%2FuZ1RBLRv2eVOYcZTCRGRo037YpjIKOIF1UY8ZirH%2BF%2F%2FO%2F97J25N014hU0Iz511reE7j6WHsFKSUO9e3RZa3HSdLzvSxsaGbirSDRaPaphvjd4WWyeMruYNnJhqMLYBDgt%2Bg1vmLaUHsBV%2BG8BWYwGXMJZquU6KVdTd6CHwATI9bXzKGjJMTvhThHJADyATDLyuO%2FBjqkAfxvED3DUj%2FE%2BXqJr5OpK9Lj7oC43vIr5C2u8r%2BTEs97CyrPJtrbzOod0uf3%2F%2B8UZfODoo1LmzUK4nd9qnar%2B3Q5B3Q0hWEOsVK4Kn0D7FEy%2BlBnYSLU%2BdaHp3%2F86qPPOE0wJvAJUYlc2wMrZ2AqImSwa3fwUceqB45U6%2BLNoDjoHwjusx5h2WErXql2FFv9pPL%2B8QJGFy%2FRZM84pYBRUcB0Dxag&X-Amz-Signature=2e43cad6e41cf58820bd96733dfc20f7e4503b65a298dbea00ded0cfb7f085cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
