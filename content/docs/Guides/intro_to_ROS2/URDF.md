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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5YK6M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICnmcKk1w6CVYc7A78EyghFITy14PGKPIR1kf6SA8VVtAiBmbNWoeGBE35UprCBRO%2F3u8ZXPgSvRnC89U6Jh25kghir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM4H6FhXRbKrCeKKHHKtwD2tt%2BFJLIs%2BmRd%2FJ0o6DIO%2BebBaeiDRTYdKDwjXTFd8dmmvdCSRSQDlHUH3BiNySIbzGwzt4PGDnjG1leKGzaRv6Rkrexb2O9AIvEqxPPlO6Q69JtyBX%2FnabDdUUtGymmERCu5OL7A4%2F2QK4KMWPvmbylx7%2BUuqmoPSfZytLnKZecpy2h%2FTgIgcNWAQ%2BWo1W2LLcKwv4YlZc6lvSJ5nz5iTSaZByzLAJ%2Bv6kQIwPFcdIoKdKVPAcuarH0rQioa4GViLpqSBU78SOOariu6USTGkCGjQ%2F2FxNtqntnB476hT7qV2QUD9p5aw6r%2FuLVbCN4Y5AarP2BLekhmsLVZdzrFzv%2B%2F6j6hx25K17UF%2Bzi%2FAVM3dMCWaM3z6BtG2zGfV4dtc9ogICDq0NdRJ6%2B1aX3ox0B1W4SnTAZ2r5X0FONL4SG%2BhrBsWLaPpbX9%2Bqyj7ANqnTAFYt5fSA74gD%2F2cmXoxq9IVMkFJZmoIZRqBSz1iTa03pmNAhzdktrMyJxnhq6c96MZne2D%2BaRxPJPwi9jnAnzrFGHBUJ93eyweQpBPMgS8VNf%2BDgWzPSWAKNJTvw%2FJY1hgPkw3AR50j5moLCpEMh2XNToxBof5AIOSWkVJx5w9xKy41WyeBHVZCUwzY7PxAY6pgGdCRUCdz5GB85%2BkgoOWelkmpXMMB6AHfVStDxJqfg6HPZzU6F3WYGvGPD5X7fNccGhA23uvf%2Fk89Vmz3gMiyuUe7Ie9uSmOtCI2Dkhz29%2BWD2%2FiCnhkYM73mdmMM4C1aKW0nJ%2Bc101ua8qpL527KAvgGYNcpWmkf8zW6Nlx2yliofPDTjnA2zGkV6M2R%2BQ68zEB9Aq%2FoRun7%2FaBSgGafxRtuF%2BS7kv&X-Amz-Signature=4e40dae18c5caea3b7dfd218c49d534209f490995631ceb846353468c18972d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN5YK6M%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICnmcKk1w6CVYc7A78EyghFITy14PGKPIR1kf6SA8VVtAiBmbNWoeGBE35UprCBRO%2F3u8ZXPgSvRnC89U6Jh25kghir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM4H6FhXRbKrCeKKHHKtwD2tt%2BFJLIs%2BmRd%2FJ0o6DIO%2BebBaeiDRTYdKDwjXTFd8dmmvdCSRSQDlHUH3BiNySIbzGwzt4PGDnjG1leKGzaRv6Rkrexb2O9AIvEqxPPlO6Q69JtyBX%2FnabDdUUtGymmERCu5OL7A4%2F2QK4KMWPvmbylx7%2BUuqmoPSfZytLnKZecpy2h%2FTgIgcNWAQ%2BWo1W2LLcKwv4YlZc6lvSJ5nz5iTSaZByzLAJ%2Bv6kQIwPFcdIoKdKVPAcuarH0rQioa4GViLpqSBU78SOOariu6USTGkCGjQ%2F2FxNtqntnB476hT7qV2QUD9p5aw6r%2FuLVbCN4Y5AarP2BLekhmsLVZdzrFzv%2B%2F6j6hx25K17UF%2Bzi%2FAVM3dMCWaM3z6BtG2zGfV4dtc9ogICDq0NdRJ6%2B1aX3ox0B1W4SnTAZ2r5X0FONL4SG%2BhrBsWLaPpbX9%2Bqyj7ANqnTAFYt5fSA74gD%2F2cmXoxq9IVMkFJZmoIZRqBSz1iTa03pmNAhzdktrMyJxnhq6c96MZne2D%2BaRxPJPwi9jnAnzrFGHBUJ93eyweQpBPMgS8VNf%2BDgWzPSWAKNJTvw%2FJY1hgPkw3AR50j5moLCpEMh2XNToxBof5AIOSWkVJx5w9xKy41WyeBHVZCUwzY7PxAY6pgGdCRUCdz5GB85%2BkgoOWelkmpXMMB6AHfVStDxJqfg6HPZzU6F3WYGvGPD5X7fNccGhA23uvf%2Fk89Vmz3gMiyuUe7Ie9uSmOtCI2Dkhz29%2BWD2%2FiCnhkYM73mdmMM4C1aKW0nJ%2Bc101ua8qpL527KAvgGYNcpWmkf8zW6Nlx2yliofPDTjnA2zGkV6M2R%2BQ68zEB9Aq%2FoRun7%2FaBSgGafxRtuF%2BS7kv&X-Amz-Signature=09ca98895208c12e209af0d3e7de4d8a2ac8b9c33bc1cee9b07870d5061e27a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
