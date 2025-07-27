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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HCLKA2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIA7vw6KOraclVK4dT%2Fdqusev9rbEXUPuuQiJ1kz%2Bm%2BIuAiEAlvI9uGLbk68HmXpfKTagK67M6tuuq9N7Kosu%2BXFPB2Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDITIvteD0fNLl2gnAircA%2B%2BWcy73IDy8qDCVtHFxnkp%2BpdNoIbPbgcbUinQnUDmyRVmnaZ6N0%2FNLZyHhX3pejrvRZ8qTRKqlJ9%2BecNH25zddeYHnOfXiRZNyEbkm2S%2BTr1RX%2BFB3KmelbR%2BkhzCW%2BC7vn9ErP1KDe34I8Tg6692uc%2FOD8MJCDAxZLhGl5T%2Bbck3uBGTfo0dPd9ieyiD6fo%2BQWhqf7ekPnBRsEwMZFWopNY5plBayQ8Su1oddMOmtJON%2Ba7sl1vliBi6G6hBIZS8hvydigKCGHDVDuTbM4Y%2BuGkU8Iz25%2FSW4%2F%2Fj%2B7Y5p7onEAnTOKyai69LX5GmLYL%2FE20yuOAuFdz3opYcOkVdy2VdQMghQSeGCgsn62i%2B11qwzAaZH5RXFz3nlevyvbogB3vCr%2BkPCFqKZPEJPGqfuf86OwGFyrIJB2mDG2GcArhRJaSjy5Q4CfWOzlPk8WzeLQ8vidS5NSyaQwq01SRf9bNTkVx8xnFZYV9tJ%2BhSUh5P%2BLe%2FZ3mZW1g0C3QHYUrHEWY8xEwpaOspYAt5iGIzayA213pGVi4vieVfm6wke7OTMBWcYUI89MQyKlLEiYXS%2FKVV85NQjxxnOGB7W8E%2F9picWrHb3pgU1CQxP5vBdZaqAUexXeej0TpYdMO%2B6lsQGOqUB2fIwC8akYvO0VSeabR2XVZh2SvfL3CFagpoQU1l3e4wPJNfUAx49I8pWtjm%2BzY04BbVSLJHABu21FD1ks72wW3eD70NeLS5bnqQmh2%2FYEdC8StEdyZvIA8Etno0t9QasuK%2FOyRfRu6KdbGi04Gnbn%2B25xG0AV6yrhaJNVINIjUjqryrL4sEWZeHUFA%2BJLbGCAg5WlXytVQY%2BiYh7zD6Q5oYKswy1&X-Amz-Signature=1615eb3c6c9942de2c4090e8dfa6184b3139f560cc612cadf09106ac5aac3bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657HCLKA2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIA7vw6KOraclVK4dT%2Fdqusev9rbEXUPuuQiJ1kz%2Bm%2BIuAiEAlvI9uGLbk68HmXpfKTagK67M6tuuq9N7Kosu%2BXFPB2Mq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDITIvteD0fNLl2gnAircA%2B%2BWcy73IDy8qDCVtHFxnkp%2BpdNoIbPbgcbUinQnUDmyRVmnaZ6N0%2FNLZyHhX3pejrvRZ8qTRKqlJ9%2BecNH25zddeYHnOfXiRZNyEbkm2S%2BTr1RX%2BFB3KmelbR%2BkhzCW%2BC7vn9ErP1KDe34I8Tg6692uc%2FOD8MJCDAxZLhGl5T%2Bbck3uBGTfo0dPd9ieyiD6fo%2BQWhqf7ekPnBRsEwMZFWopNY5plBayQ8Su1oddMOmtJON%2Ba7sl1vliBi6G6hBIZS8hvydigKCGHDVDuTbM4Y%2BuGkU8Iz25%2FSW4%2F%2Fj%2B7Y5p7onEAnTOKyai69LX5GmLYL%2FE20yuOAuFdz3opYcOkVdy2VdQMghQSeGCgsn62i%2B11qwzAaZH5RXFz3nlevyvbogB3vCr%2BkPCFqKZPEJPGqfuf86OwGFyrIJB2mDG2GcArhRJaSjy5Q4CfWOzlPk8WzeLQ8vidS5NSyaQwq01SRf9bNTkVx8xnFZYV9tJ%2BhSUh5P%2BLe%2FZ3mZW1g0C3QHYUrHEWY8xEwpaOspYAt5iGIzayA213pGVi4vieVfm6wke7OTMBWcYUI89MQyKlLEiYXS%2FKVV85NQjxxnOGB7W8E%2F9picWrHb3pgU1CQxP5vBdZaqAUexXeej0TpYdMO%2B6lsQGOqUB2fIwC8akYvO0VSeabR2XVZh2SvfL3CFagpoQU1l3e4wPJNfUAx49I8pWtjm%2BzY04BbVSLJHABu21FD1ks72wW3eD70NeLS5bnqQmh2%2FYEdC8StEdyZvIA8Etno0t9QasuK%2FOyRfRu6KdbGi04Gnbn%2B25xG0AV6yrhaJNVINIjUjqryrL4sEWZeHUFA%2BJLbGCAg5WlXytVQY%2BiYh7zD6Q5oYKswy1&X-Amz-Signature=22464d28327c321e1f1795549e5a514af58210945f792cdda5903fd294b26e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
