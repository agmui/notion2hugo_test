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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKJBUGQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDekZo31BeAz7ya70aVAS156VLCPlQO4P9fxubbRLwETwIhAPlZ0%2BnUVQg0sME7vChsetLXFxGt8Gw4KVXDen%2BOqeijKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwom%2FpUh5pz0vRqeY4q3APJFd9OJJvMZmZmrZXxrkAlJ7imMZB%2FTeGkU1Oj9vGt1Zjj6MStHr6FTrEBXZbuGcIhNRmP6EvQo%2FW4Gk6MJ1wx%2BMtu9WdFGsoiMSs%2BwxZvPkTnpOb9fsREHw%2Fs6CeZznRQycdoO%2FJMMXh6HLsTwREempd1rQxO1%2BQ6c2IJgTykshlNyI54mZMWlYYK9ErjkGV2zOd6DyrVB6jjZnliv2XIvHjE90Gmy35Wsh3f2ccxYJDsfKL473S3kWpXs0uFOgARZZFkid6tYJt688ufqGFHYZqJrkn%2BhsF8gofOUsZ%2Bc9hgwt4HIP52iUcjPRaJF3lumHLyYdzdKY5XwwZO60PKwJn0zpnsbYJei9W2DhqA9ezCdzscIQTc3zsUCMABZlZTPSNdsQSPdZ5qVuAQyMnxbZ9yd1M4tsp31mQIEDdOmRh1cAbfRvtzgh9%2BlRXN2DL3V6UnPCyhMQC9N1ebwCKEMMBXauUnOBtD5%2FFxii61cr8V43bMAhh%2BTA86Crwr%2FWepnU6lknkfdcNRGnPDxGTgfpAQycCdLh9J1XU%2Bb7UJ2E7x2ExkiJiHCOAWnNka3T4PdbmkNBoT5tUA4ImreTNmSqTtb6FTQ40N6d2Kb8mz9hkRSx1KFlS9j%2FR2gDCfv6rCBjqkASckLsHyQbzVuTO7NVhUzl0STWotdL0PX0A8sRBqDpP%2FkrFBZNEgQlTpOQUMnmxiho568PxOiMEz3Pi%2FzZ%2BHrTgkWhDZyZqmHy655TEiKEjJMYVJTxVCjh0UAgCnLyLUc4rz66n5esRLBn59zWR44Mf3uPFk%2FpbE0phLdsPKRT9lgVH29JqFFllki%2BCGEikZah%2Fe9ZenergS9Xzt%2FLfWJ6qnG0KC&X-Amz-Signature=218495ffad22455334b5f535cf70ccccced9154335e342cfc7aa0ac81371d553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKJBUGQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDekZo31BeAz7ya70aVAS156VLCPlQO4P9fxubbRLwETwIhAPlZ0%2BnUVQg0sME7vChsetLXFxGt8Gw4KVXDen%2BOqeijKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwom%2FpUh5pz0vRqeY4q3APJFd9OJJvMZmZmrZXxrkAlJ7imMZB%2FTeGkU1Oj9vGt1Zjj6MStHr6FTrEBXZbuGcIhNRmP6EvQo%2FW4Gk6MJ1wx%2BMtu9WdFGsoiMSs%2BwxZvPkTnpOb9fsREHw%2Fs6CeZznRQycdoO%2FJMMXh6HLsTwREempd1rQxO1%2BQ6c2IJgTykshlNyI54mZMWlYYK9ErjkGV2zOd6DyrVB6jjZnliv2XIvHjE90Gmy35Wsh3f2ccxYJDsfKL473S3kWpXs0uFOgARZZFkid6tYJt688ufqGFHYZqJrkn%2BhsF8gofOUsZ%2Bc9hgwt4HIP52iUcjPRaJF3lumHLyYdzdKY5XwwZO60PKwJn0zpnsbYJei9W2DhqA9ezCdzscIQTc3zsUCMABZlZTPSNdsQSPdZ5qVuAQyMnxbZ9yd1M4tsp31mQIEDdOmRh1cAbfRvtzgh9%2BlRXN2DL3V6UnPCyhMQC9N1ebwCKEMMBXauUnOBtD5%2FFxii61cr8V43bMAhh%2BTA86Crwr%2FWepnU6lknkfdcNRGnPDxGTgfpAQycCdLh9J1XU%2Bb7UJ2E7x2ExkiJiHCOAWnNka3T4PdbmkNBoT5tUA4ImreTNmSqTtb6FTQ40N6d2Kb8mz9hkRSx1KFlS9j%2FR2gDCfv6rCBjqkASckLsHyQbzVuTO7NVhUzl0STWotdL0PX0A8sRBqDpP%2FkrFBZNEgQlTpOQUMnmxiho568PxOiMEz3Pi%2FzZ%2BHrTgkWhDZyZqmHy655TEiKEjJMYVJTxVCjh0UAgCnLyLUc4rz66n5esRLBn59zWR44Mf3uPFk%2FpbE0phLdsPKRT9lgVH29JqFFllki%2BCGEikZah%2Fe9ZenergS9Xzt%2FLfWJ6qnG0KC&X-Amz-Signature=ffcc2fac97f9990538f9ac99937513c39c77c10b4ca3ae7b39a761ed46d644f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
