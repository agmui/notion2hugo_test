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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O66HJF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDBi8CDdfuBOy3JJ6mDvUntjzWW%2BHbUOJXT9dvxrhiWYwIgQVGuuNpEr0ENYJscS2QbtGjGiQci6G01YCaR520KLo8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFLa5EpXTH8xGITrHCrcA5VMWp6Uveu0UPa4fHGhv5NjR%2B9iqWEi4cUuMjzJrF3DOrU1fKdg%2F75xlwSx8az2pSLYaZQGhhmBXYTt%2FXkUXCUFdAmwikbyVaW%2Ft7NKIl%2BhXSDK%2FpoENJJvH8QfXjDCQWW7Yu5UCXQI8oo5YxFHHo3ecWkVHQBjbVgRiISqOeHzGwNH0kDxgYklB3%2FNHyJVts3Sm6Prurd5wSJMieW6tPxwx41ERY5N82EIBxBNBYZ8vHFfd3spyySXK3bOjJXb88tnVcwDOLZwDCwrXFJUCbeEoB19xRUsSVPXRSuL4%2BdM5Y3O1Fr3KkcIffGyzkDwNvr7zst6SvN54Qip%2F3ZJQnSMMi8vi22oBu6ezn2yQ8S8rqXu3lFuC43uMxwjem1YUmMInHm2FcY4msNL0KDPQS9eKx5rIhejc1ha9zd2%2BhW9pPRy6QPmRzvngQW5GCaIPagEyIPjeKgFrvW29oP8ujLwFBmLzzNyzRa%2BuBs2Rva6WEkDJSf%2Bm9nemODspsi%2BQPpCGLQ2L2UYHmLhY9G%2For3%2FaEDA68k161q89JNX3mg9h1FgMUReEWjdY0QGH95IijuysH8jKmlVmvUu9xTHSqKRaTk3etSEA0kDpIyr0bxaV3TzzZCT1HLDPsFuMKf%2BvcIGOqUBmd2qnGk2OcomraIxGVp%2ByrcNtzxsP7iQaKBzs9jHLkZCI%2BQNPcTc9n8AAlmeM9a5u946SL2hCA1%2BhgU3Icnz36g1he63NR5SyCgsuq9hAqg0peKZn5A5MOP749dD0JnAlOnbJff%2FuojJWKmFIf9CEm%2Bns3%2BxdYixOxombCvTBWm60IAFYOCBBjIkSgWDV%2FoIYHbtkDRSk9uP%2Fw41NEke%2BAS0EeeN&X-Amz-Signature=6390459f1e8ddb4dc194196fe5a749b3890f5c54992f3eb72a2fa7e8b9277f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6O66HJF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDBi8CDdfuBOy3JJ6mDvUntjzWW%2BHbUOJXT9dvxrhiWYwIgQVGuuNpEr0ENYJscS2QbtGjGiQci6G01YCaR520KLo8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFLa5EpXTH8xGITrHCrcA5VMWp6Uveu0UPa4fHGhv5NjR%2B9iqWEi4cUuMjzJrF3DOrU1fKdg%2F75xlwSx8az2pSLYaZQGhhmBXYTt%2FXkUXCUFdAmwikbyVaW%2Ft7NKIl%2BhXSDK%2FpoENJJvH8QfXjDCQWW7Yu5UCXQI8oo5YxFHHo3ecWkVHQBjbVgRiISqOeHzGwNH0kDxgYklB3%2FNHyJVts3Sm6Prurd5wSJMieW6tPxwx41ERY5N82EIBxBNBYZ8vHFfd3spyySXK3bOjJXb88tnVcwDOLZwDCwrXFJUCbeEoB19xRUsSVPXRSuL4%2BdM5Y3O1Fr3KkcIffGyzkDwNvr7zst6SvN54Qip%2F3ZJQnSMMi8vi22oBu6ezn2yQ8S8rqXu3lFuC43uMxwjem1YUmMInHm2FcY4msNL0KDPQS9eKx5rIhejc1ha9zd2%2BhW9pPRy6QPmRzvngQW5GCaIPagEyIPjeKgFrvW29oP8ujLwFBmLzzNyzRa%2BuBs2Rva6WEkDJSf%2Bm9nemODspsi%2BQPpCGLQ2L2UYHmLhY9G%2For3%2FaEDA68k161q89JNX3mg9h1FgMUReEWjdY0QGH95IijuysH8jKmlVmvUu9xTHSqKRaTk3etSEA0kDpIyr0bxaV3TzzZCT1HLDPsFuMKf%2BvcIGOqUBmd2qnGk2OcomraIxGVp%2ByrcNtzxsP7iQaKBzs9jHLkZCI%2BQNPcTc9n8AAlmeM9a5u946SL2hCA1%2BhgU3Icnz36g1he63NR5SyCgsuq9hAqg0peKZn5A5MOP749dD0JnAlOnbJff%2FuojJWKmFIf9CEm%2Bns3%2BxdYixOxombCvTBWm60IAFYOCBBjIkSgWDV%2FoIYHbtkDRSk9uP%2Fw41NEke%2BAS0EeeN&X-Amz-Signature=dbe17eaa804a33d822003dd5184424b2fc75277ebcb33a8e02469037d550c553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
