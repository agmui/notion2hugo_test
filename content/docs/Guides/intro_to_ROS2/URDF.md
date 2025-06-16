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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDUXOA3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEFhuRz%2FEnw0rQ0vj9lCiXyKweRkM4xJRhDLrKyPa4NiAiEAunugeZ3Dd80lxnQDhFFjk6nrCaLTefTwGJx7ZJpyMXgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGwZzqe2zA9sIQkrgSrcA67bf0nAB%2FFernljpmrKJ0MuHhq15416SZ3a2rdlU9P0N80WKJTk66cDVSxva18jjb%2FLKygSmdRCAcnbubXT8CC41Uz6qBwcd0X2jL2ZK3CKejSDts2gE%2FtVCyPy0YIBL%2Fl6k9rDR20XmuQMfOndCnf9lPsAO3m4XIee3MawPv75j42pryHNfBI9f1OZBweAgznXD63NieyBP4J3Ua73sE4I4fBEjKgQtAt%2BcimTD7vPIN5VknI7p9rn%2BFMq1gS3h66R2uQttiMb%2Bqr15FAkO6CmvpDoQM49z7InHyTEufHe%2B8h5%2BBRw8gmrUShDcvkp9hFG4dN9j5%2Bw37OoFuvoCCSTFfFEf723zgMFPhbhy%2BcaZb1zLQsooBpgv0OGx%2FiAbfbbfPA6Fv2WR%2BGOOiHFdrSIq8skLnFA8LrUTlCJOenOJXNFB7H5aUeQj4j4Sk6dpjhQ8lFkpFruwkSybXmN0vWIFxHNKwKIFxUd7sZNQ56amxnpNZz9gXp4DkUgvdp5GWujj4I88hdbCwula39IUbNpsJjNB1obWE6HonAnPdk5GCdnbklSjdykxPMXUaImEzyDwh3PQW8fIIGmCG7xvmyErcz%2BWqIohCTHRH646sz0EVdPSx24kfHjExcQMPbIwMIGOqUBmN1ga7ZEBekiKmn9aI0h9GnQuUQiHgTo%2FqpnhfQebsnyAisQrYd5xg5uEAWXtLVfS2MLIn%2Bhi%2FDim9nJ478onCQLiz2zlbQ8bZuNQRQu6Y7eUKI%2BDINebZ%2B3mmgh1t5hwZWHh77qpPXSTBhMSfO0C6zzNWXDFUQ59Fknd36z0QadJ1O67lLokJU3bNy4%2BuaQc1aZLk4jvtaGzMEnMGpQOOyh95hm&X-Amz-Signature=418f7a04e3396330154665b97af32fbf53a1a60c1c2f5e5ef37e2fce68b71dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDUXOA3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEFhuRz%2FEnw0rQ0vj9lCiXyKweRkM4xJRhDLrKyPa4NiAiEAunugeZ3Dd80lxnQDhFFjk6nrCaLTefTwGJx7ZJpyMXgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGwZzqe2zA9sIQkrgSrcA67bf0nAB%2FFernljpmrKJ0MuHhq15416SZ3a2rdlU9P0N80WKJTk66cDVSxva18jjb%2FLKygSmdRCAcnbubXT8CC41Uz6qBwcd0X2jL2ZK3CKejSDts2gE%2FtVCyPy0YIBL%2Fl6k9rDR20XmuQMfOndCnf9lPsAO3m4XIee3MawPv75j42pryHNfBI9f1OZBweAgznXD63NieyBP4J3Ua73sE4I4fBEjKgQtAt%2BcimTD7vPIN5VknI7p9rn%2BFMq1gS3h66R2uQttiMb%2Bqr15FAkO6CmvpDoQM49z7InHyTEufHe%2B8h5%2BBRw8gmrUShDcvkp9hFG4dN9j5%2Bw37OoFuvoCCSTFfFEf723zgMFPhbhy%2BcaZb1zLQsooBpgv0OGx%2FiAbfbbfPA6Fv2WR%2BGOOiHFdrSIq8skLnFA8LrUTlCJOenOJXNFB7H5aUeQj4j4Sk6dpjhQ8lFkpFruwkSybXmN0vWIFxHNKwKIFxUd7sZNQ56amxnpNZz9gXp4DkUgvdp5GWujj4I88hdbCwula39IUbNpsJjNB1obWE6HonAnPdk5GCdnbklSjdykxPMXUaImEzyDwh3PQW8fIIGmCG7xvmyErcz%2BWqIohCTHRH646sz0EVdPSx24kfHjExcQMPbIwMIGOqUBmN1ga7ZEBekiKmn9aI0h9GnQuUQiHgTo%2FqpnhfQebsnyAisQrYd5xg5uEAWXtLVfS2MLIn%2Bhi%2FDim9nJ478onCQLiz2zlbQ8bZuNQRQu6Y7eUKI%2BDINebZ%2B3mmgh1t5hwZWHh77qpPXSTBhMSfO0C6zzNWXDFUQ59Fknd36z0QadJ1O67lLokJU3bNy4%2BuaQc1aZLk4jvtaGzMEnMGpQOOyh95hm&X-Amz-Signature=204b4d90accd88104eade037c8fdeb92b1e888c6dffc503f4e956d733e7987a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
