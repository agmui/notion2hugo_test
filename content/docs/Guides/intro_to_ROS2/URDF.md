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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466777NVWSH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGuUFbS6v6m4GX7NYGkGgq3IKZOvKpzEfr0PXSAUdtUbAiEA008cKir%2BpLeyIv8mWaJgTEbLa89bke5XHoyklAEYCUsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWH%2Fj8iQJj9GDUAISrcAxDrOcl8shSYVmSvJvt6vZH8miTGjnSoICJY9cLF9mSniq6myhCTWQ%2FoFHz4fGYr%2BCm4ALUiEtDooVq9cmHARm5Vg69%2BC4ZFsUQ1M%2FBDKHSTWkGdQ1SVAES9vm4ZDbxImvSDh0edUQctyOjqivQfNtUZJZJWGoye5TUBnsvT%2B%2F6BAYdG1MXELqFAZyN%2BQQHUVI0JhW4QMc5dphFCQ7k7lI%2BGse6NjiHwRDAVXSMokEz6tc3tVQW61RCMLSLGS8bHzY%2BBts3irV43Sqb5E6z6bfxc4Ic0biLAByzSm%2BKiZvvwkVsX%2BRRo%2BHfI3x6EMTJ%2BWUuFKMMmMrkkx0sdv2A8DtUmmEYEJtp7CCpLMCU9KaxG1YSDV3Psw9kh5MACLpypOuWc2wLsqHUx64HCxbMsR4f9iwZEMq%2F%2BTxgZ6IQCp2QJ2EIlL7tvHmqGg2yAq36S4AC7o4u4UJINDSrE2BpIkiQZhR7e2v0ZeFzG6VQ51Mlt7%2FjIuX47gceSvWRr2AJVjPHYmk38J5mkXimsG%2FWYctMa4hpb1He0CkYEoNoqJrpRuSoTQQFMmpOLwoJSaLxYj6j1R0%2BHOERnLhA%2FwUclofhu6yQXYhAthTR9om6RNyhYlJt3WSPDL8UbyMr4MPK69r4GOqUBObRRHNiRZteOYJv6b0IkfOWF4pMPao8bAQbffY3eoitX1etguJ5VYwVjSo%2FF4Z5J8GRXNgLjeyYarZyx9x0M%2Fbb0K6I2pTdHxelRKh810KHRBblKOpHQ8YznTRtPHNyPtMjcPn93WOM2vz0zVVU%2B4CRZD5RAxXqx5P%2FqIp4Z2rv0be9OBfS1NlEDT0HThYCxz%2FsbzbmopQDdJglModFKcPYUPBO%2B&X-Amz-Signature=c50c44bf45ca7a653f6726f6e740eb01713416bbd889d9c6bad389de2f1dfc95&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466777NVWSH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGuUFbS6v6m4GX7NYGkGgq3IKZOvKpzEfr0PXSAUdtUbAiEA008cKir%2BpLeyIv8mWaJgTEbLa89bke5XHoyklAEYCUsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWH%2Fj8iQJj9GDUAISrcAxDrOcl8shSYVmSvJvt6vZH8miTGjnSoICJY9cLF9mSniq6myhCTWQ%2FoFHz4fGYr%2BCm4ALUiEtDooVq9cmHARm5Vg69%2BC4ZFsUQ1M%2FBDKHSTWkGdQ1SVAES9vm4ZDbxImvSDh0edUQctyOjqivQfNtUZJZJWGoye5TUBnsvT%2B%2F6BAYdG1MXELqFAZyN%2BQQHUVI0JhW4QMc5dphFCQ7k7lI%2BGse6NjiHwRDAVXSMokEz6tc3tVQW61RCMLSLGS8bHzY%2BBts3irV43Sqb5E6z6bfxc4Ic0biLAByzSm%2BKiZvvwkVsX%2BRRo%2BHfI3x6EMTJ%2BWUuFKMMmMrkkx0sdv2A8DtUmmEYEJtp7CCpLMCU9KaxG1YSDV3Psw9kh5MACLpypOuWc2wLsqHUx64HCxbMsR4f9iwZEMq%2F%2BTxgZ6IQCp2QJ2EIlL7tvHmqGg2yAq36S4AC7o4u4UJINDSrE2BpIkiQZhR7e2v0ZeFzG6VQ51Mlt7%2FjIuX47gceSvWRr2AJVjPHYmk38J5mkXimsG%2FWYctMa4hpb1He0CkYEoNoqJrpRuSoTQQFMmpOLwoJSaLxYj6j1R0%2BHOERnLhA%2FwUclofhu6yQXYhAthTR9om6RNyhYlJt3WSPDL8UbyMr4MPK69r4GOqUBObRRHNiRZteOYJv6b0IkfOWF4pMPao8bAQbffY3eoitX1etguJ5VYwVjSo%2FF4Z5J8GRXNgLjeyYarZyx9x0M%2Fbb0K6I2pTdHxelRKh810KHRBblKOpHQ8YznTRtPHNyPtMjcPn93WOM2vz0zVVU%2B4CRZD5RAxXqx5P%2FqIp4Z2rv0be9OBfS1NlEDT0HThYCxz%2FsbzbmopQDdJglModFKcPYUPBO%2B&X-Amz-Signature=5c9325096846af95fe71659ee66b9ebf36a5ffdb839733238294b5bdcb298a35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
