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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVW5NR6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICIR4fzrhuOYSsLSSnWFK6%2BtbF3TLMBT%2BaHvQJpm6K0VAiAesrtEZRK3CM4MmtM3SHUZUW9qtSb1gq%2FtJgctmxDaeyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM1R8vYqPkCqmChXtCKtwDGocZuYd%2F3AygrBX1Iv1qP298J2tHpSwk64aPPzSFXRVqQkQZSrS7e4bzt4ZDNL3flUXelKesU%2Bm9tZWowzSkDTRXAPhvy6P7wJPPwpt7cnYaSVEm6yVVsZvWuEahHYULIBopHTlH7wWIAYj2Ymre2%2BX2%2FgE1sP%2F%2B2G9i4fQBA%2BmP9N2BpXeTxRGKaNF96jh4vVhx3TAYOMYIkNvVSS4eiK%2FL%2BFEJtuf08hfkP5Ah7ev4vUrk4ZQqmY4SFCWpooCZFNl4DfkbonBYw95RuA55DnNgznXpxXCOA3fgEIQU7vm5QctD%2BbaOgs0HCJ2yRmH0gkNP4aNChND5Z9r2evqaAAMAzGEqtfZmNIu3g1vrUO4nhLGyY%2FDoXMGg7ZYiFEfTc33kyDZHg%2FtuoIHUv0tdyQ%2Fmx7uxLusjJocRWmscxqyz4gxu4Clg7WRS2IGWGVjw5SXfKE0LNQ%2B8ZOC6n%2FYEhnIjmdN0q7x47amv1CefT9G3AclDRe3Rqy960dUiT7Xjz8kLUkppwTFx5%2FmNkDBTmuMKaaENVux6JcD4NbHZKYMsRyRClq2N2cs4oohDOatFVacscH1Z8D8dWhgqy%2Ff3HmoUaGmoDTBMsAI8MHECCzOhfsGUqzeIW0E%2BT4IwjvTmvgY6pgHHKWqflXT%2FQcuyWZ0%2BeBbIhaVcwEsEC%2Fq7rUKygb2nF8lE2FXSceDRMfW9cREBYV49cOrYbZE7exsFHxD0r%2Brw98hNk0i1HWKbl9hZBbVfcDKB60wBFfPddxhKrtnNNGPiqMn%2BPprAwvztoTkjK35a3%2BwphrbMKW0Fg4vseaAGY0Tx9EUWjgNrleNSAO3wEYkdzCKraCSi8ZhE5Az6zzegG4zJV9pe&X-Amz-Signature=5c3f994bcd3aadf3032c85ef975b6efdc534bbd08e2414e79b8f95fa30b4f97c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVW5NR6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICIR4fzrhuOYSsLSSnWFK6%2BtbF3TLMBT%2BaHvQJpm6K0VAiAesrtEZRK3CM4MmtM3SHUZUW9qtSb1gq%2FtJgctmxDaeyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM1R8vYqPkCqmChXtCKtwDGocZuYd%2F3AygrBX1Iv1qP298J2tHpSwk64aPPzSFXRVqQkQZSrS7e4bzt4ZDNL3flUXelKesU%2Bm9tZWowzSkDTRXAPhvy6P7wJPPwpt7cnYaSVEm6yVVsZvWuEahHYULIBopHTlH7wWIAYj2Ymre2%2BX2%2FgE1sP%2F%2B2G9i4fQBA%2BmP9N2BpXeTxRGKaNF96jh4vVhx3TAYOMYIkNvVSS4eiK%2FL%2BFEJtuf08hfkP5Ah7ev4vUrk4ZQqmY4SFCWpooCZFNl4DfkbonBYw95RuA55DnNgznXpxXCOA3fgEIQU7vm5QctD%2BbaOgs0HCJ2yRmH0gkNP4aNChND5Z9r2evqaAAMAzGEqtfZmNIu3g1vrUO4nhLGyY%2FDoXMGg7ZYiFEfTc33kyDZHg%2FtuoIHUv0tdyQ%2Fmx7uxLusjJocRWmscxqyz4gxu4Clg7WRS2IGWGVjw5SXfKE0LNQ%2B8ZOC6n%2FYEhnIjmdN0q7x47amv1CefT9G3AclDRe3Rqy960dUiT7Xjz8kLUkppwTFx5%2FmNkDBTmuMKaaENVux6JcD4NbHZKYMsRyRClq2N2cs4oohDOatFVacscH1Z8D8dWhgqy%2Ff3HmoUaGmoDTBMsAI8MHECCzOhfsGUqzeIW0E%2BT4IwjvTmvgY6pgHHKWqflXT%2FQcuyWZ0%2BeBbIhaVcwEsEC%2Fq7rUKygb2nF8lE2FXSceDRMfW9cREBYV49cOrYbZE7exsFHxD0r%2Brw98hNk0i1HWKbl9hZBbVfcDKB60wBFfPddxhKrtnNNGPiqMn%2BPprAwvztoTkjK35a3%2BwphrbMKW0Fg4vseaAGY0Tx9EUWjgNrleNSAO3wEYkdzCKraCSi8ZhE5Az6zzegG4zJV9pe&X-Amz-Signature=5707d2855c6602783d1770dc9c47823b9fba0a13c734acfb2b7cea9cf212b08b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
