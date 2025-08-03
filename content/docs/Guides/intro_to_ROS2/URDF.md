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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZURYSPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMh60zslcE2AtTUe2L0YtpjAgDpPMQD4VCMWFCUHGinAIhAM3raNievGTh57kEaGjg4Q%2FRnPysi6G4QKGkqgxweZnBKv8DCDQQABoMNjM3NDIzMTgzODA1IgxaHUdtunNDT%2BKfnn4q3ANcEefCB95JW%2BDtRBDtbbI6ZucZTUL5XucNLuwIy%2Bd%2B5vRgogDb58yFq9pyGFev6Ea0SzpZeML1odPjrbW0g84GRceKZvDPKxXBQcfy8Yy%2FxmKdUlvqtxigSw%2BFk5mW9OPbapNkKA6gWZc4Yn9zqCqvA5Y5QuaXiBtU2LWcKYPW%2B%2B6I18ul4ezZoYfZf08pBHkuRR%2Fd4m7Oclhw9fPWuBrD0d5Az1Rgx6DwCepMgBTZ9pzxSVJ86WTiZdSMIiEQbl8DTrVn0DvpbZo3NZSP9wgSIJ%2FN9daDK3w03dc0FfPN1%2FKlLtPRRjIbHBGMmo7JJVSEpLmYmYmE8SL%2FF4MEfOGRcTDgnU12hW8hETgs8oUnW1T%2FRe63D9WpM6FvDrCgH64f5AeeNRCq61Bf1TcNMPd4at5YgD5BH%2FGms8tXBTlEAsz%2BOd94o9we1hGgso9wKusYvpiSvW6teVdLwLpDu482MHB7yEu7paZe6Lq8sjPqFQY0HhOnJtvOHc%2B1ZV%2BlmZOcrN8iPlggB3sloZawQHrt6ru6qrX2eCdeTaQL4oOeZRJNgB5wazY0ETSZ752crYBpLv5w%2B8SFwcSZTjhZgqp%2FufZDtoRBla3vqm8QXyO4tQ9Ib9CAQexa4He9LTDa2b7EBjqkATfeIL5yEt8jjLuX%2BQX0V9Ctqx%2FPiVym%2B3UgCHIpeHUvhvZNpDslYTUaTxCWTH3ISmEnv20jnKZnh7svg03VY5dkr5mvm2xvsT%2B5kJdtToAep1N2HjoyNuLiapvIimxAHvVRmMJU9KNPq5nt%2FKr5AfB0FYoMuNCw%2F%2BqV8iFAk8eOsASRoD%2BgNe4pePZjU4ySJGGRCYGWw2okezit5YGFxvUhpGKD&X-Amz-Signature=aa170f2d4a588de547b5dddfd34ebad95c7a4141e0c2e09640fdec0df14e22b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZURYSPV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMh60zslcE2AtTUe2L0YtpjAgDpPMQD4VCMWFCUHGinAIhAM3raNievGTh57kEaGjg4Q%2FRnPysi6G4QKGkqgxweZnBKv8DCDQQABoMNjM3NDIzMTgzODA1IgxaHUdtunNDT%2BKfnn4q3ANcEefCB95JW%2BDtRBDtbbI6ZucZTUL5XucNLuwIy%2Bd%2B5vRgogDb58yFq9pyGFev6Ea0SzpZeML1odPjrbW0g84GRceKZvDPKxXBQcfy8Yy%2FxmKdUlvqtxigSw%2BFk5mW9OPbapNkKA6gWZc4Yn9zqCqvA5Y5QuaXiBtU2LWcKYPW%2B%2B6I18ul4ezZoYfZf08pBHkuRR%2Fd4m7Oclhw9fPWuBrD0d5Az1Rgx6DwCepMgBTZ9pzxSVJ86WTiZdSMIiEQbl8DTrVn0DvpbZo3NZSP9wgSIJ%2FN9daDK3w03dc0FfPN1%2FKlLtPRRjIbHBGMmo7JJVSEpLmYmYmE8SL%2FF4MEfOGRcTDgnU12hW8hETgs8oUnW1T%2FRe63D9WpM6FvDrCgH64f5AeeNRCq61Bf1TcNMPd4at5YgD5BH%2FGms8tXBTlEAsz%2BOd94o9we1hGgso9wKusYvpiSvW6teVdLwLpDu482MHB7yEu7paZe6Lq8sjPqFQY0HhOnJtvOHc%2B1ZV%2BlmZOcrN8iPlggB3sloZawQHrt6ru6qrX2eCdeTaQL4oOeZRJNgB5wazY0ETSZ752crYBpLv5w%2B8SFwcSZTjhZgqp%2FufZDtoRBla3vqm8QXyO4tQ9Ib9CAQexa4He9LTDa2b7EBjqkATfeIL5yEt8jjLuX%2BQX0V9Ctqx%2FPiVym%2B3UgCHIpeHUvhvZNpDslYTUaTxCWTH3ISmEnv20jnKZnh7svg03VY5dkr5mvm2xvsT%2B5kJdtToAep1N2HjoyNuLiapvIimxAHvVRmMJU9KNPq5nt%2FKr5AfB0FYoMuNCw%2F%2BqV8iFAk8eOsASRoD%2BgNe4pePZjU4ySJGGRCYGWw2okezit5YGFxvUhpGKD&X-Amz-Signature=5fe8816727b7980a9ac952b22e0ede80fba755c820219d97a630bf1996598788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
