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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5HHF4CX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAt66b4o5J%2BSVYKJbGHf4%2F8qeFMH1Yrkqg1feYLoBo5AiAQB9fBEVDJAzDRO0%2Fm9HprVjhzkDs7ntVTYKLD2AeUUCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvx2dPqbBWfqy3kOtKtwDDWordYT%2FZ7h2krE0n3PxUxum4mxUEcj3tLUjsUV67d%2FcfvZ0gyE7Zi9t2XJX0jGtE5ocXoAdFzMUk0jXRLdqv3X1AQ%2FlSWVlzdhoI1zUYKP%2BDNm1YQrsODx1RUzakla7231M4Hf957IZenD22bowWRxQNIsy1gv1vKzTeZOYHp5VGiXqpkgzI%2BwabUHyHyY5C7QAiYTcj2EQeegEJ6zKtO0slq2zWw5K8xFcbJ9y1pQnFba3GPhjzIvDU04fKyGO0qqUyhVBJZJTbgY%2BGIITQwS4t7mg80xmM34RizVM399B3Z5ELIsETPoEhYcRCBrO1R3EZAGCTa6iYxthd4fEUamf3r7PdrFT%2BTZM1s7CgvTKjeDvi9u3Z1uDzOawzPJXwB1%2FTMSkRw%2BI2eRJj3CgCJfeqSvYp7wPiWK5lIzlczZb5LVMu%2BZStmhfY7NXIF0Wvpso03b03A8lsYKCCxCZ1i0Z9p%2BludZGcQga0e%2BRZWFJ6LUJx%2Bxkmi2nGzXDE3XPQCGC7%2FCCZjSYSOH8drkQfSPMslXcEaKKkUPqRGLkiZnb4bGd5xDRaaFNWSDSMGo5RatK5Bs7bSGNyVaZaJlakiLH0gvsh2%2ByQxb1D%2FHyFegHNpr28Doh3aLTYVQwkJ38vAY6pgGNWfut%2BVlItBr%2B9fRhZ7YUI%2B4Jhz%2BDT0NA%2FuqKMsA0cMm9dspUH3I5A5FYEHAJ9a9LN6O6m0OTLw2eJ4dZp2OGJMHawu6vIvR7Nyljy%2FFIZtqjm5GGhxRJxsuiNtFK%2F3tNNJePXtw%2F%2BmzkSj89jN6Xlq7HP57%2BFQ1cJ7KDwFDBFd7kJNDPQZY3wKZVWdX2i1Qxe5Bcmro7v6NJQJ8XvqGEbv6k1pDx&X-Amz-Signature=72d5a7c0b3ffcb3806d4e8d862d01f093e8bb170143ba2f6c5a2e94dbae34805&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5HHF4CX%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAt66b4o5J%2BSVYKJbGHf4%2F8qeFMH1Yrkqg1feYLoBo5AiAQB9fBEVDJAzDRO0%2Fm9HprVjhzkDs7ntVTYKLD2AeUUCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvx2dPqbBWfqy3kOtKtwDDWordYT%2FZ7h2krE0n3PxUxum4mxUEcj3tLUjsUV67d%2FcfvZ0gyE7Zi9t2XJX0jGtE5ocXoAdFzMUk0jXRLdqv3X1AQ%2FlSWVlzdhoI1zUYKP%2BDNm1YQrsODx1RUzakla7231M4Hf957IZenD22bowWRxQNIsy1gv1vKzTeZOYHp5VGiXqpkgzI%2BwabUHyHyY5C7QAiYTcj2EQeegEJ6zKtO0slq2zWw5K8xFcbJ9y1pQnFba3GPhjzIvDU04fKyGO0qqUyhVBJZJTbgY%2BGIITQwS4t7mg80xmM34RizVM399B3Z5ELIsETPoEhYcRCBrO1R3EZAGCTa6iYxthd4fEUamf3r7PdrFT%2BTZM1s7CgvTKjeDvi9u3Z1uDzOawzPJXwB1%2FTMSkRw%2BI2eRJj3CgCJfeqSvYp7wPiWK5lIzlczZb5LVMu%2BZStmhfY7NXIF0Wvpso03b03A8lsYKCCxCZ1i0Z9p%2BludZGcQga0e%2BRZWFJ6LUJx%2Bxkmi2nGzXDE3XPQCGC7%2FCCZjSYSOH8drkQfSPMslXcEaKKkUPqRGLkiZnb4bGd5xDRaaFNWSDSMGo5RatK5Bs7bSGNyVaZaJlakiLH0gvsh2%2ByQxb1D%2FHyFegHNpr28Doh3aLTYVQwkJ38vAY6pgGNWfut%2BVlItBr%2B9fRhZ7YUI%2B4Jhz%2BDT0NA%2FuqKMsA0cMm9dspUH3I5A5FYEHAJ9a9LN6O6m0OTLw2eJ4dZp2OGJMHawu6vIvR7Nyljy%2FFIZtqjm5GGhxRJxsuiNtFK%2F3tNNJePXtw%2F%2BmzkSj89jN6Xlq7HP57%2BFQ1cJ7KDwFDBFd7kJNDPQZY3wKZVWdX2i1Qxe5Bcmro7v6NJQJ8XvqGEbv6k1pDx&X-Amz-Signature=4dbf739b19c161dc36946f8b5daf9db130f01e0eee21a2421eef926f7b1231e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
