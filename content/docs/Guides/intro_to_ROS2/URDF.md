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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBIWLXGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDJJepSXv756m84KTW8iDC1CI7UX451qZW6J%2BIPNHqCvAiEA%2FnsoUL3hIqiD5ECzTR4331rhBYeDsIPufTuG2JvP0aAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMct%2FWISOVKn%2FkL6syrcA1QIivj6GqZaFfsCYJq2pGAE8Ri77FXS4BDLFmfbP5CLcGBGPRr0EGXVlCtMZlswGo4OngvKtWtrlBxbQVvcd7noL8hsc4cr7XSBcxqB3vN3NU6ZjdnNV51wCfZS%2Bs%2FIKWooAcOyacxf%2BO2iMem34bBhWIoGB2Zs98IKEBDmXkwM5d%2Bxhkem6vyeXjY9z0%2FZBuRc4JaFWa%2B6aPJNr4v9uWQivWzu2FzyYnFz2c7kGhS9yoQQ4g4kLdL%2FmnSK0cMJzs9HA5eD17UFRPbapslXTZ9LX36zx1gvIAJ5smUKXH%2BPMTvw%2FN1jXGo8CgPIET5muS4DX8AVde%2FrAm%2BaRT%2BE7Mk4Ta%2BIiILKzEMsKlF3ltqCn4OnLW3qs2uISKEAIvLCG62Rp2sQjxX7boWfWff5DwoMRRvvgTJd0xVqr1NLaLx4BOUP%2Bd0Y8p5VslNBPCi8cVwN0QCBLQgXoq8UaVmCzaj8%2BtFxH1RhVbFLWBGlEDKJeb4cL0uU0PRJ1HZYORL%2BWhXNIIrSnyzg%2FS7BLf4nxWEZlVDp7SeRP%2BycYY25%2B75XyH29RfeO6jegLVUv0VXLEfTqIafD58w808S8IUUsK3H2QU%2FGTdAFjGcVXqEhxynJeF7l0tzx8nfdoTB%2BMOyv58MGOqUBYxSO5pqZ2E%2FtCzISILKMae1H%2BGoEXkmuZYg1VfnJdTl46i2vKwicsfSS3I2qqU70O7oihAI0rXSFziZKrO79swfMpK3wuRBTHyDzJx1JVMxgb6UvIKMPF%2BA5OSWUtdUI%2BeRyBc7ziO7nHvJOdMFFdT9LXaIRjJtN9ATrPh4FoWnkFsfJ0hriN%2FuJ3x99e4K6HeT1vFeQw2js1eRVfsgzj2quHwzO&X-Amz-Signature=9dfcbcbd0beb5df18b1a5e07626c70eeb6830a427eed975911fba43a0945073c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBIWLXGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDJJepSXv756m84KTW8iDC1CI7UX451qZW6J%2BIPNHqCvAiEA%2FnsoUL3hIqiD5ECzTR4331rhBYeDsIPufTuG2JvP0aAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMct%2FWISOVKn%2FkL6syrcA1QIivj6GqZaFfsCYJq2pGAE8Ri77FXS4BDLFmfbP5CLcGBGPRr0EGXVlCtMZlswGo4OngvKtWtrlBxbQVvcd7noL8hsc4cr7XSBcxqB3vN3NU6ZjdnNV51wCfZS%2Bs%2FIKWooAcOyacxf%2BO2iMem34bBhWIoGB2Zs98IKEBDmXkwM5d%2Bxhkem6vyeXjY9z0%2FZBuRc4JaFWa%2B6aPJNr4v9uWQivWzu2FzyYnFz2c7kGhS9yoQQ4g4kLdL%2FmnSK0cMJzs9HA5eD17UFRPbapslXTZ9LX36zx1gvIAJ5smUKXH%2BPMTvw%2FN1jXGo8CgPIET5muS4DX8AVde%2FrAm%2BaRT%2BE7Mk4Ta%2BIiILKzEMsKlF3ltqCn4OnLW3qs2uISKEAIvLCG62Rp2sQjxX7boWfWff5DwoMRRvvgTJd0xVqr1NLaLx4BOUP%2Bd0Y8p5VslNBPCi8cVwN0QCBLQgXoq8UaVmCzaj8%2BtFxH1RhVbFLWBGlEDKJeb4cL0uU0PRJ1HZYORL%2BWhXNIIrSnyzg%2FS7BLf4nxWEZlVDp7SeRP%2BycYY25%2B75XyH29RfeO6jegLVUv0VXLEfTqIafD58w808S8IUUsK3H2QU%2FGTdAFjGcVXqEhxynJeF7l0tzx8nfdoTB%2BMOyv58MGOqUBYxSO5pqZ2E%2FtCzISILKMae1H%2BGoEXkmuZYg1VfnJdTl46i2vKwicsfSS3I2qqU70O7oihAI0rXSFziZKrO79swfMpK3wuRBTHyDzJx1JVMxgb6UvIKMPF%2BA5OSWUtdUI%2BeRyBc7ziO7nHvJOdMFFdT9LXaIRjJtN9ATrPh4FoWnkFsfJ0hriN%2FuJ3x99e4K6HeT1vFeQw2js1eRVfsgzj2quHwzO&X-Amz-Signature=207e56f90379efa3ef9183e7238f82ba44c725097a001666b4b78e993bf8afe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
