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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZE35BL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC3D9rLyy3q0ZSv%2BE%2FNEcjCWv2uzgVSUe%2Bd61CEqIC0JAIhAMIXjZlFnkrnUj9pDm9VqCqiJN9qQqb8FpHFIsWt03enKv8DCBUQABoMNjM3NDIzMTgzODA1IgxtaRqwzZoLtlMDE2oq3ANMiQticVPBSCw%2B9diZQpN4PX17mfw3J0Pdq5emayfAeNDJ4CQkiTlleyDUFxmRR9g9rqAs%2FTpw%2BRPDFJvzfI8Tijnxf41XbgWQqfq1Z1sIpUtnIwziWDpJSbqNbvdtK5hCZRYfhRDUVRoxs5v%2BNeHCGmE27Akd72YORGfB6ItOA4v19rnYbHKylid2PW4fXOBYs1xN%2F9gj3v%2F3w3SbCTog1WmwXiQ%2BKWGaZmb4E6%2F82HQXDV%2FyUnRXFrRIQsKQiW2qml%2B6iDXUu8zXX%2FC2eEBigz6%2BEMUr%2B9NJUsbZM0Stfwp4f5NIMt6RZEqMREf9opNpli3UxsIAb%2F7a9hzD3G%2BW0kLlw%2FY4hIoXhuT5wL6%2B53uos286CKurT36HcHraujtSrZWovCDpuwnExwUSK0govuz09nCrm%2B1d6SHeJ2LTtuD340zS5UGlNuAkJwjxt211kiTSo6agBG3g6F3YGYRd2G%2F6VcLeTR8cz9ubLmqJNStNq2uxpFwzKJHpkm5%2ByNVD4t%2FsrinWPGcJt%2F%2BNhDhuZCLXYTPU%2FlJ17eLgxB4%2FbAPOOfaZ6sVKiq2lToP3891QhGUua7nTtc6amlFRoBqnwovUzEzkgR4n82%2B3wWVRU86NkpLAzlOINdAqNDDI4ZnDBjqkAQXSGGG%2Bpve0SR7c9O%2FQBh%2FdnVwVyp9IctMq7tZpx8HjsfSqiA1GflAO4AssnlC0L7AzA4HOR4mC09a%2FHK8UoVPhMB4Ixt8D1WYstun7Uo1gefz3QUoEZes23Pmu8wcgiySuPfOVMhbAP8jo8ZPG6dJ5hAFuv4G2TGv0H8MNyClduiZebQGtQUKoH5bnnODClF1r6f9hzkVhNT%2FhdKWw0NpgoBT7&X-Amz-Signature=229fd3bc4933a7f08984585259f730c7c1f652254c8a72c926fe72b82ebfda4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZE35BL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC3D9rLyy3q0ZSv%2BE%2FNEcjCWv2uzgVSUe%2Bd61CEqIC0JAIhAMIXjZlFnkrnUj9pDm9VqCqiJN9qQqb8FpHFIsWt03enKv8DCBUQABoMNjM3NDIzMTgzODA1IgxtaRqwzZoLtlMDE2oq3ANMiQticVPBSCw%2B9diZQpN4PX17mfw3J0Pdq5emayfAeNDJ4CQkiTlleyDUFxmRR9g9rqAs%2FTpw%2BRPDFJvzfI8Tijnxf41XbgWQqfq1Z1sIpUtnIwziWDpJSbqNbvdtK5hCZRYfhRDUVRoxs5v%2BNeHCGmE27Akd72YORGfB6ItOA4v19rnYbHKylid2PW4fXOBYs1xN%2F9gj3v%2F3w3SbCTog1WmwXiQ%2BKWGaZmb4E6%2F82HQXDV%2FyUnRXFrRIQsKQiW2qml%2B6iDXUu8zXX%2FC2eEBigz6%2BEMUr%2B9NJUsbZM0Stfwp4f5NIMt6RZEqMREf9opNpli3UxsIAb%2F7a9hzD3G%2BW0kLlw%2FY4hIoXhuT5wL6%2B53uos286CKurT36HcHraujtSrZWovCDpuwnExwUSK0govuz09nCrm%2B1d6SHeJ2LTtuD340zS5UGlNuAkJwjxt211kiTSo6agBG3g6F3YGYRd2G%2F6VcLeTR8cz9ubLmqJNStNq2uxpFwzKJHpkm5%2ByNVD4t%2FsrinWPGcJt%2F%2BNhDhuZCLXYTPU%2FlJ17eLgxB4%2FbAPOOfaZ6sVKiq2lToP3891QhGUua7nTtc6amlFRoBqnwovUzEzkgR4n82%2B3wWVRU86NkpLAzlOINdAqNDDI4ZnDBjqkAQXSGGG%2Bpve0SR7c9O%2FQBh%2FdnVwVyp9IctMq7tZpx8HjsfSqiA1GflAO4AssnlC0L7AzA4HOR4mC09a%2FHK8UoVPhMB4Ixt8D1WYstun7Uo1gefz3QUoEZes23Pmu8wcgiySuPfOVMhbAP8jo8ZPG6dJ5hAFuv4G2TGv0H8MNyClduiZebQGtQUKoH5bnnODClF1r6f9hzkVhNT%2FhdKWw0NpgoBT7&X-Amz-Signature=e9d3f68db8e4c09c111b99178f26d79919cb16d590a1c336f8405217d5b56904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
