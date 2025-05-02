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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AO5JV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCgZBhXvPYYr02S%2FTme5QqEoYEqIsL4avQkIEFCgkyrsAIhANfM5AGZEWLSsC9yDjHGkKTDbsAuixDvelOR4PXqEhPBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxDUA4CqmKKT8jaBgq3AOz77Zb6q83pSMrCx4RDR0diBGwk%2F%2B5%2FtROE5n7cKTSKXncyh49ByaD%2FJ5jf1dObNDKXQsglxMi3Bysbv6LGcpQn5t66IjY9kJOTzc1fsNx22VAYoPiAfpnz4at%2FzLdqrh9VfgKvuXWJbE9DJcch2VK%2F6ObrvUOlvDzr0fSlBLF8pV80zwjx5JEvASaCWBDGntEa4vQe9sFshrGZk75WcMOuqxd%2BiPXCo3yJ%2FqMenT1VmnqFuqCS%2FCAciq6Bq4OduTHLHdVGc7InvSAXd4S7Ju0UpSNU%2FKxoY2jELMuVkngE5qq4FWFIkZxqjwaumBIuje9zFIfgcYyjWGoY2cxgWzv2o7UXBQNPEcKdVbQ8jbNm9%2ByE7mHMzZ%2FXNIj8QC%2F30LnuzeAuBPHEXtthPn0gwvPS3j8qEPcDVwhL5tqcDNxsTyOpBL2pgriEdvNBzaHHXvxCGC4Aa18P1ex0pHUjUT9Dps1yBiICzcfSsRSpLw%2Fp3O6paUCCK%2BoTUyO5iIL5%2BY7fdh6YlgmzhBp1dQoADAI1IpXQ6dT7w7G5OgbeF3JuB9MHaDR38506DRDasoOzP4Wex0Pw3Qe90RrzvIu2cTLkLXkDkU3W46a%2FYoF1EwqAcxA3kSAfEIoige7wjCI19LABjqkAaabksg%2FKJPsVpgBSNrZgXCi%2BFII0SdTDF8GeNdMyk5P74CUIOKCFpvOk5FJfR2UwW8r99aZ%2BVbD1ckFv1ZwIwsCL%2BTJrutX%2FW9mq4aalyae8xFGUpt42bRlpTZ6mcYzbx2p7fH6LMY4%2FQqXpncPO7xgS%2BmrD5m%2BJWSuFcnC02qHUcFTpjqUnEPHY0lx8gOMnyYlbYD6OiqczOuZI9m0CUPYRSHj&X-Amz-Signature=fff12ab5dd40f39e4aa0366375b9ba439e38648f574851cbea893a381851adab&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7AO5JV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCgZBhXvPYYr02S%2FTme5QqEoYEqIsL4avQkIEFCgkyrsAIhANfM5AGZEWLSsC9yDjHGkKTDbsAuixDvelOR4PXqEhPBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxDUA4CqmKKT8jaBgq3AOz77Zb6q83pSMrCx4RDR0diBGwk%2F%2B5%2FtROE5n7cKTSKXncyh49ByaD%2FJ5jf1dObNDKXQsglxMi3Bysbv6LGcpQn5t66IjY9kJOTzc1fsNx22VAYoPiAfpnz4at%2FzLdqrh9VfgKvuXWJbE9DJcch2VK%2F6ObrvUOlvDzr0fSlBLF8pV80zwjx5JEvASaCWBDGntEa4vQe9sFshrGZk75WcMOuqxd%2BiPXCo3yJ%2FqMenT1VmnqFuqCS%2FCAciq6Bq4OduTHLHdVGc7InvSAXd4S7Ju0UpSNU%2FKxoY2jELMuVkngE5qq4FWFIkZxqjwaumBIuje9zFIfgcYyjWGoY2cxgWzv2o7UXBQNPEcKdVbQ8jbNm9%2ByE7mHMzZ%2FXNIj8QC%2F30LnuzeAuBPHEXtthPn0gwvPS3j8qEPcDVwhL5tqcDNxsTyOpBL2pgriEdvNBzaHHXvxCGC4Aa18P1ex0pHUjUT9Dps1yBiICzcfSsRSpLw%2Fp3O6paUCCK%2BoTUyO5iIL5%2BY7fdh6YlgmzhBp1dQoADAI1IpXQ6dT7w7G5OgbeF3JuB9MHaDR38506DRDasoOzP4Wex0Pw3Qe90RrzvIu2cTLkLXkDkU3W46a%2FYoF1EwqAcxA3kSAfEIoige7wjCI19LABjqkAaabksg%2FKJPsVpgBSNrZgXCi%2BFII0SdTDF8GeNdMyk5P74CUIOKCFpvOk5FJfR2UwW8r99aZ%2BVbD1ckFv1ZwIwsCL%2BTJrutX%2FW9mq4aalyae8xFGUpt42bRlpTZ6mcYzbx2p7fH6LMY4%2FQqXpncPO7xgS%2BmrD5m%2BJWSuFcnC02qHUcFTpjqUnEPHY0lx8gOMnyYlbYD6OiqczOuZI9m0CUPYRSHj&X-Amz-Signature=559ffeb0c7d28ed283c9e2ba451977351477f6cb56a6da7dc2a52a1ec7be11cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
