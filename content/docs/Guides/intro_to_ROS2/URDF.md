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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQR5UOLH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ%2BIHpi046NCHsmgUA78EwMnc%2BseLsOO8owvq3EahtAiBVTLr7z8C7DUjOKx9kuyJO%2FUXyBZ4Xz9XiWtuMFE6Djyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMoGpOjHjArLw%2FOiPnKtwDuIRYlrhOREno2RKk3F4%2F9w%2BYI2Lh3qkE8Pm%2Bo0eqhdodhbPQrTB1IH6K9VsJvjjU7is9SDneh5TaeOhi%2BQbeyZs5gvzIOyGNt3C61z9uOinoTtxEQsso9sSGdC%2BJ5ajzwUeaBRY1kmYjSXsO7Kgh1V4G%2FX%2BOVujw11LLGYehTEEr0uG5OcO1AB4EBbJPJNEg5S3E%2BlZ1CY1ziAjf84elOXC27M%2FFBvQxSAa030RIYGCFCDVVZFDEKGffJ4%2B27VsM8vVGuO57ejwx%2FXPYvqctvZTNCpj7V0hyeD11P19vl0pgzqeYzEvu3yNftIhuFunycgkImWkVzCvsC4V5ncDK0v7gfZogb7XN67nvheXpGvF4GDx4Y7TL46R6OLbwMUK1H%2BmK2OkjO9if5s2uSXw8i2P1J7d9GZatPxj8%2Fv%2BI81UucycqOQZusjbxGhfhsnl9yPCpXK5m1FtxQEfMxhjCjpsdnCeKfVaJadHEl0xRvygaLOAMlOzXV2IOzkEd0krq72XmUbRODEnj3jWqGgna%2FBe5iO2n4WFL9PJ18I%2FQD2x17PnLv4s7H01gSd0rA6xiZpOGxNAnXnkIFbKbRzFJ2js0KOHaoPBliRq7Ny2bFT1aatnhx7QqvVIh%2B%2FMwtcujwQY6pgF%2BCcW1irVfZ7HngjlSsZO%2Fn4Gm7g7wBDJTEAHSviDBwxW%2Bd1IjjhD3Hw8%2B%2Bzygv8ZajUpB4hP1zHfLTRYWKH9Yj22fsQPX6vCgsvKjeXXisFdHkBcSGgfk8H7uItGpF12jno%2FnPbqBrdvmJ4d68B2kFVhVBdLYNU%2BdKpYl5MwHKnzJHMUpZWn9tLWAe%2B%2BeocRuGZ2Qk4BeyPj%2Fsk67eoaGSqs1MfA%2F&X-Amz-Signature=4516fe16c2ad6facb635f93402002d6a381a0c5eff2d281ba02f927ee44ca64c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQR5UOLH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBaJ%2BIHpi046NCHsmgUA78EwMnc%2BseLsOO8owvq3EahtAiBVTLr7z8C7DUjOKx9kuyJO%2FUXyBZ4Xz9XiWtuMFE6Djyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMoGpOjHjArLw%2FOiPnKtwDuIRYlrhOREno2RKk3F4%2F9w%2BYI2Lh3qkE8Pm%2Bo0eqhdodhbPQrTB1IH6K9VsJvjjU7is9SDneh5TaeOhi%2BQbeyZs5gvzIOyGNt3C61z9uOinoTtxEQsso9sSGdC%2BJ5ajzwUeaBRY1kmYjSXsO7Kgh1V4G%2FX%2BOVujw11LLGYehTEEr0uG5OcO1AB4EBbJPJNEg5S3E%2BlZ1CY1ziAjf84elOXC27M%2FFBvQxSAa030RIYGCFCDVVZFDEKGffJ4%2B27VsM8vVGuO57ejwx%2FXPYvqctvZTNCpj7V0hyeD11P19vl0pgzqeYzEvu3yNftIhuFunycgkImWkVzCvsC4V5ncDK0v7gfZogb7XN67nvheXpGvF4GDx4Y7TL46R6OLbwMUK1H%2BmK2OkjO9if5s2uSXw8i2P1J7d9GZatPxj8%2Fv%2BI81UucycqOQZusjbxGhfhsnl9yPCpXK5m1FtxQEfMxhjCjpsdnCeKfVaJadHEl0xRvygaLOAMlOzXV2IOzkEd0krq72XmUbRODEnj3jWqGgna%2FBe5iO2n4WFL9PJ18I%2FQD2x17PnLv4s7H01gSd0rA6xiZpOGxNAnXnkIFbKbRzFJ2js0KOHaoPBliRq7Ny2bFT1aatnhx7QqvVIh%2B%2FMwtcujwQY6pgF%2BCcW1irVfZ7HngjlSsZO%2Fn4Gm7g7wBDJTEAHSviDBwxW%2Bd1IjjhD3Hw8%2B%2Bzygv8ZajUpB4hP1zHfLTRYWKH9Yj22fsQPX6vCgsvKjeXXisFdHkBcSGgfk8H7uItGpF12jno%2FnPbqBrdvmJ4d68B2kFVhVBdLYNU%2BdKpYl5MwHKnzJHMUpZWn9tLWAe%2B%2BeocRuGZ2Qk4BeyPj%2Fsk67eoaGSqs1MfA%2F&X-Amz-Signature=a896ab95e143b38e7c13d62868e79bcf234d47d403f20507f8dced7056f8633b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
