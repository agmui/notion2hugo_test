---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECUEZRZ%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBtf5X7uz4pOUit3HQW2GDi1Sttm%2B71s7V2qc4ZxyOPLAiBjrdo6SWTYzA4urS7pt%2BT6lkXPLZxTWXLtgtDvboCMyCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn858Cd5z4d1B7l%2BzKtwDtilcOTGtc1dbaTg9s9tvI6lx7vXG9Lsu4uUtG7HCpJ5ifnNCnlxI83KHg32ocQI8wONnbKut4kUoUNu9ELfYFgSWGfvZlxzlSQBzZ7h1QjMbuxPy5kUVF5CSOxQ4SX2mfd9J71UeoE71IpGTBCf40ZGe6TyVfcnbBuzm6j3DbyOfRl7LZq8ZHyO7zHXCIfh3GP7o7aD%2BrwexnOFV12devVxquu7P115ZUbPaCxe4S6Dk1b7WvLpKqVIfcQd9eHK5TboNfxzj%2FVVwbnOIEHVUE4d9X23lPwDtGEtL7YTRk2ROJlZVggpuuHLymucnUwWpg%2Bx9hWt7DS95n%2FvWZTx2g24JRnM7TQgdS4iGIBjobmBOX4PEiBeDVdK0Qqpe1YyJP55%2Bg3BKaEi5JTT6aFtomA5VOS%2Fpy8dF5NHxaSTYn0k0jC9fWHP%2BWzx4jVkKHvHpq8sHL6FEoM35C4g7%2BQW4MlFyQTli6Dhzo%2Bi1q52UT6m1ntKiPJqJ59898Tv0rYMlclejpE5UJKoEqfSFC825dtNObOiCgMThXlPNVtoQFQnGAVFvqkYNe8X7kZwtm6Muf7EnL30WJKklYtEIRok1s8Oi9fulTd4ow4hZw65YbmyP%2BNRsnlhmOG7IpkYw9O%2BnxgY6pgGHdsJJZ4pL8H2vQ8pnOJMPr7rOFLLTpwNzywAx79ULNinSryrUusPMS723Qi2YlC4Ez23csM9UDLmfRduWpxxRqO%2Fh%2B5CB4jFTGaEkCk%2BT86KRi6BrD%2B1qZO7NSDgISf3p6Nd21sJ5RQyygb3Y%2BB0k5ORs2Qwk9GrbQPTKcHCi2L9z70pCGStix82eOB1YSySwXQyxeLc8%2FJerZp1C4nYcDa63Z4ob&X-Amz-Signature=84b509b2180a09e864f19087c777448fff103f97b086afe18cb10c2531721611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECUEZRZ%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBtf5X7uz4pOUit3HQW2GDi1Sttm%2B71s7V2qc4ZxyOPLAiBjrdo6SWTYzA4urS7pt%2BT6lkXPLZxTWXLtgtDvboCMyCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn858Cd5z4d1B7l%2BzKtwDtilcOTGtc1dbaTg9s9tvI6lx7vXG9Lsu4uUtG7HCpJ5ifnNCnlxI83KHg32ocQI8wONnbKut4kUoUNu9ELfYFgSWGfvZlxzlSQBzZ7h1QjMbuxPy5kUVF5CSOxQ4SX2mfd9J71UeoE71IpGTBCf40ZGe6TyVfcnbBuzm6j3DbyOfRl7LZq8ZHyO7zHXCIfh3GP7o7aD%2BrwexnOFV12devVxquu7P115ZUbPaCxe4S6Dk1b7WvLpKqVIfcQd9eHK5TboNfxzj%2FVVwbnOIEHVUE4d9X23lPwDtGEtL7YTRk2ROJlZVggpuuHLymucnUwWpg%2Bx9hWt7DS95n%2FvWZTx2g24JRnM7TQgdS4iGIBjobmBOX4PEiBeDVdK0Qqpe1YyJP55%2Bg3BKaEi5JTT6aFtomA5VOS%2Fpy8dF5NHxaSTYn0k0jC9fWHP%2BWzx4jVkKHvHpq8sHL6FEoM35C4g7%2BQW4MlFyQTli6Dhzo%2Bi1q52UT6m1ntKiPJqJ59898Tv0rYMlclejpE5UJKoEqfSFC825dtNObOiCgMThXlPNVtoQFQnGAVFvqkYNe8X7kZwtm6Muf7EnL30WJKklYtEIRok1s8Oi9fulTd4ow4hZw65YbmyP%2BNRsnlhmOG7IpkYw9O%2BnxgY6pgGHdsJJZ4pL8H2vQ8pnOJMPr7rOFLLTpwNzywAx79ULNinSryrUusPMS723Qi2YlC4Ez23csM9UDLmfRduWpxxRqO%2Fh%2B5CB4jFTGaEkCk%2BT86KRi6BrD%2B1qZO7NSDgISf3p6Nd21sJ5RQyygb3Y%2BB0k5ORs2Qwk9GrbQPTKcHCi2L9z70pCGStix82eOB1YSySwXQyxeLc8%2FJerZp1C4nYcDa63Z4ob&X-Amz-Signature=34b04957716fe063f99a22dd9473ca93f848f6f07d2a22e8b11c0d3d8e4f2973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
