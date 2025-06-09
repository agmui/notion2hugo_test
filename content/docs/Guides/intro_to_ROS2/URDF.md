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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QY6NWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmATW4WY2GcGZkao%2BaP%2B1BE2Ktd%2Fa9eewCjlrYnmspXwIhAJ%2Fi1b8AHAasSdml%2B%2BcpcL4awv3%2B7k4Vun2rehKBfpLbKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3%2Fg%2B4HIEZSwNKULsq3AOxgO1wTEEly3cpgbU6elER9%2FcLH2PhL%2FGrfq%2Fy%2FKp98ss0INHSjI1218Wimpwxsk%2BSNus384E3GK4UQnwUrRf%2B6Nrnr37y2VcCK3L%2FosSCEsArgVD6bOiUy5AlBZGDPSH73lk4UOdsBkzF6eK0dw5YL4lJ35%2F3FuC5kxRmE9lOCBNvIiemIWsxCnBXNpjqoMmn4jhWCGq4APiF5FoQsxP%2BhSNoB76g2V4znCok9SeOpIVjloyX1rpBUw3lwKWguJEg%2BS%2BuM745yx2e6f7U4AldHXVd8wS4pj8OhXhFEI8RkuBhbr%2B9vGmfaLYJLmoqJEJDHWpFw9%2BZtQY5E%2B3vRkrG8eYdUy%2B2dg%2BMdIG3TOpLaxwcJhG6X%2FVpV00uWLbvc6zjx6okrNI6Q%2F5xtcH7KvtPN8pTgiXN0CXoZFDL3ZC%2Bni6UQNzqO%2FztgJBCzg7LCGGR0%2FFCXXR5gTrt8XHQ%2FZlqwS%2B8Xicjt0Zqmg%2FE%2BI4Dpch6pN3mZPx%2F2tlwq6Ptvb0Nal3jBKJI4XOBqtLb5C1KzxvLbbqyLz%2BNByjZRVGvbyzNO93x621ReKNLSMYzBOzRTXXtG0qTo2qHqTFHTxJx1eKiNFr0gxrAa9dn%2FlhxUuUUY6o4yBdCDCA2TTCgqprCBjqkAXdXDjPncRbUk6EGg5pzp%2BSWLZfOumqzOR1rDUGpBERiUw%2BHUiNnp%2BTzpSVwWOMNq8L4W6G3EICEU0RkHhlnOis%2BgcnMdqZHB%2BelWs%2FV0t%2FeKP1JcaD%2FMOqNa9YBw5tzSF8n72JMrQUVDDLz7ohOxkELnAYsW0EoVlaAVbBxWqA3GkzlYOjLZCqEn6%2FVseSpF9ZdIKxB9jDSIZ69heEZxs4NZTTw&X-Amz-Signature=1c6f6818482b0f74c0f91f2f0470a89663bdb6ba2e20ccf80373a066be2b70ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QY6NWY%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmATW4WY2GcGZkao%2BaP%2B1BE2Ktd%2Fa9eewCjlrYnmspXwIhAJ%2Fi1b8AHAasSdml%2B%2BcpcL4awv3%2B7k4Vun2rehKBfpLbKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3%2Fg%2B4HIEZSwNKULsq3AOxgO1wTEEly3cpgbU6elER9%2FcLH2PhL%2FGrfq%2Fy%2FKp98ss0INHSjI1218Wimpwxsk%2BSNus384E3GK4UQnwUrRf%2B6Nrnr37y2VcCK3L%2FosSCEsArgVD6bOiUy5AlBZGDPSH73lk4UOdsBkzF6eK0dw5YL4lJ35%2F3FuC5kxRmE9lOCBNvIiemIWsxCnBXNpjqoMmn4jhWCGq4APiF5FoQsxP%2BhSNoB76g2V4znCok9SeOpIVjloyX1rpBUw3lwKWguJEg%2BS%2BuM745yx2e6f7U4AldHXVd8wS4pj8OhXhFEI8RkuBhbr%2B9vGmfaLYJLmoqJEJDHWpFw9%2BZtQY5E%2B3vRkrG8eYdUy%2B2dg%2BMdIG3TOpLaxwcJhG6X%2FVpV00uWLbvc6zjx6okrNI6Q%2F5xtcH7KvtPN8pTgiXN0CXoZFDL3ZC%2Bni6UQNzqO%2FztgJBCzg7LCGGR0%2FFCXXR5gTrt8XHQ%2FZlqwS%2B8Xicjt0Zqmg%2FE%2BI4Dpch6pN3mZPx%2F2tlwq6Ptvb0Nal3jBKJI4XOBqtLb5C1KzxvLbbqyLz%2BNByjZRVGvbyzNO93x621ReKNLSMYzBOzRTXXtG0qTo2qHqTFHTxJx1eKiNFr0gxrAa9dn%2FlhxUuUUY6o4yBdCDCA2TTCgqprCBjqkAXdXDjPncRbUk6EGg5pzp%2BSWLZfOumqzOR1rDUGpBERiUw%2BHUiNnp%2BTzpSVwWOMNq8L4W6G3EICEU0RkHhlnOis%2BgcnMdqZHB%2BelWs%2FV0t%2FeKP1JcaD%2FMOqNa9YBw5tzSF8n72JMrQUVDDLz7ohOxkELnAYsW0EoVlaAVbBxWqA3GkzlYOjLZCqEn6%2FVseSpF9ZdIKxB9jDSIZ69heEZxs4NZTTw&X-Amz-Signature=a6156315ee7e3e05829305b8429ef7338c6e013292037742c3827fae3e99815f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
