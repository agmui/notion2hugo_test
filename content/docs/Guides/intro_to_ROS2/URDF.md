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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWS2ZWBT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCC0PXKz4aMOuljylVjaYiRRzdT24fkPQDkIqPg1BA5gIgA2oYcosITlNfAv0kYT6PUNlxMbnUWovrWqXRVqqC%2F48q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBwb%2FgMzhOpg50gGFyrcA3K1RY8hV7dJtsnJFhQjH66Wh7aG74bBqm4%2BJEl8WJ%2BxxsU22W2tz8x98mRoBn6JxxWcouKNs6NQ03Phru5hgEFmtK0%2Fc7T%2Bq78TDY6qFYkKQ4j0ZLbqCtkT6fRNximdNXzqajmmgna5%2Bwfh7BkYC3d0BZ%2BX9VE0n67H5uxdWFXrNemn0tKq%2FVBwGRffpTaARDHqF9AZPKI5MZcpNq5y69wsCvLpBROabJMCnd%2BbqixI756LQtIKuT4Uhp0YinptJXsDp%2F3RSEYALFazrY8SlEa31cC%2BNTyvgBeCGJWmCDDNRL8uunEGlMSaHnFL70WiAjdbq%2FP9zrDriIdLy9jIwJMkNK%2F0vyoCuA0eFXF7gNJUVNY3d8lryeHzXHbyFhgfDCiWs0zLzBN9dbZGI4KRbV701rfCypOpqprkbnjvT9xX54HXeFupI2b%2BTkbEhL7SWLn3ZSfOAg95iTu5ODVSA5YjrK0iL1XkTZotwu%2Ba6jtD%2B5ujfFbys%2BvyxQopuc0U32GPhJrb9ONGwdt9soBuvkqiSNzreRo4AWlCy692e50X8%2BSAEAkiLJbwnJpwfBFog8XrI%2FFzqS%2BX8G5E6F5fWAYotzWXeDoXjWpSAMG2ABI5KXl5QpNzpdxUchVSMP3D174GOqUBwDnft%2ByrQ57tVGobV9UKzFpx1yHkcPQAOmo%2F%2FUE6YJQaShtjl4XketoaA4p9RaFOHydSJXQxfxOaAKiUcjcXZTR82wcG%2BVbsoJG5E8xktz88BIrvIq12FKivp2flapekSpdXivxk2bJydYM0QPRLASurD2FV3y9WH5D9HSshQV6HoQ998HZ19%2FiUwr6fMj%2FBOC0MoinZLPxfACka%2FZTMhauWse4U&X-Amz-Signature=3420b99ab64c263ec05047eaa3e8e58e15a8b5ccd9140021e9b89ffc23c95792&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWS2ZWBT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCC0PXKz4aMOuljylVjaYiRRzdT24fkPQDkIqPg1BA5gIgA2oYcosITlNfAv0kYT6PUNlxMbnUWovrWqXRVqqC%2F48q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBwb%2FgMzhOpg50gGFyrcA3K1RY8hV7dJtsnJFhQjH66Wh7aG74bBqm4%2BJEl8WJ%2BxxsU22W2tz8x98mRoBn6JxxWcouKNs6NQ03Phru5hgEFmtK0%2Fc7T%2Bq78TDY6qFYkKQ4j0ZLbqCtkT6fRNximdNXzqajmmgna5%2Bwfh7BkYC3d0BZ%2BX9VE0n67H5uxdWFXrNemn0tKq%2FVBwGRffpTaARDHqF9AZPKI5MZcpNq5y69wsCvLpBROabJMCnd%2BbqixI756LQtIKuT4Uhp0YinptJXsDp%2F3RSEYALFazrY8SlEa31cC%2BNTyvgBeCGJWmCDDNRL8uunEGlMSaHnFL70WiAjdbq%2FP9zrDriIdLy9jIwJMkNK%2F0vyoCuA0eFXF7gNJUVNY3d8lryeHzXHbyFhgfDCiWs0zLzBN9dbZGI4KRbV701rfCypOpqprkbnjvT9xX54HXeFupI2b%2BTkbEhL7SWLn3ZSfOAg95iTu5ODVSA5YjrK0iL1XkTZotwu%2Ba6jtD%2B5ujfFbys%2BvyxQopuc0U32GPhJrb9ONGwdt9soBuvkqiSNzreRo4AWlCy692e50X8%2BSAEAkiLJbwnJpwfBFog8XrI%2FFzqS%2BX8G5E6F5fWAYotzWXeDoXjWpSAMG2ABI5KXl5QpNzpdxUchVSMP3D174GOqUBwDnft%2ByrQ57tVGobV9UKzFpx1yHkcPQAOmo%2F%2FUE6YJQaShtjl4XketoaA4p9RaFOHydSJXQxfxOaAKiUcjcXZTR82wcG%2BVbsoJG5E8xktz88BIrvIq12FKivp2flapekSpdXivxk2bJydYM0QPRLASurD2FV3y9WH5D9HSshQV6HoQ998HZ19%2FiUwr6fMj%2FBOC0MoinZLPxfACka%2FZTMhauWse4U&X-Amz-Signature=0366725ed257a92012f0a22da7f7f62b46204e47bf004bd03719468a9f2504ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
