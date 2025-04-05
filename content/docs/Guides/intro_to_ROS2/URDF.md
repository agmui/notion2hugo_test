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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5VGRNL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDij%2BnkmjLPZWqsQf7p5Adk82gtXOKbl2PaarvIURbqCQIgH2nG0lvPOvCBr%2BWEcrlYtq1n%2BybJsc1HDQJFSk7AAmkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIZnpCFBwNamv0CWAircA3semCTLbt7BQTTgyJfA66Tvb55AqWWyN4ErqnKls8EBUeMJE0YgXjVk%2FFIiaDhuQqCTgvWsZDu7vV%2FfxeaZgD%2F8a5ZYeEmXdN3o7ipYCaso%2BI0uv7jrYtgUHua6P7O7bGBboBAmur87aM8URJfrBVXLBHOr%2FIFLHyCyM0fEaV3FHWOW%2Bshlhpf7R4c2NonI66xABja0iDskJSHClQRJyeBcZ4YkEvYno%2FshAXiVPxqu17LXdzUlJOHMdPZMbV1PTpdYJSHihpxLjGa%2Bq08hzMbMZYj9%2FOXE8sFQR1okYOMtwXr%2BViL27EBzBGK3i9nZnmbSN%2F1cCTGP1wfpGL5p5uzswIhngWLTz1hoMxaagN6MAHDagTQPQKnFK3nH69%2FLQc1RbIr45vEW3U3p4zNYlPaSi0J3WQHz4YzhlhIZPJWF8pzttfIcUVAreB4TP5D4yWw98%2FNXq5V74BjUfUyQhahuW%2FGx4MqxMOzb%2B9VQejiGRzTBQAY1WTo8Tgr7NVmlfXAC6NjUPAat8qQqYfBj13FH5KU3g4U8l6%2Byh65CryR%2F1ErJy4dBmBECAWxN3H8sO6yXfG4WCiyB9A4%2F%2BCks7j7QclQ7wSD4BfbkPO3%2BqkBrPmRqwrsgiHqf85nCMLPkw78GOqUBrrBZPrhTRodJERqFid2C2bsTecV3SkggsLvP8jZ8dav%2F94VxUjRLeDAVxxsU4RRRnJVFmiVH7AcgchDS0oeYbbgHKxzy2V4nXzgKZ%2BYxKp6m84OuLwFhaPFxGYrRznVZVo%2BacOV93jtbUUTZwFXccK5rNBF2yeaahEWQSWwyzk5%2BaTMMcBx9M2TWviyZEfP%2FHAg5Gzeo4s9qYy6lgp0i20twzRKs&X-Amz-Signature=5760c5a501c97129bfde6e09af0569339940e107f733fb2912ed7acba0f1da78&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H5VGRNL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDij%2BnkmjLPZWqsQf7p5Adk82gtXOKbl2PaarvIURbqCQIgH2nG0lvPOvCBr%2BWEcrlYtq1n%2BybJsc1HDQJFSk7AAmkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIZnpCFBwNamv0CWAircA3semCTLbt7BQTTgyJfA66Tvb55AqWWyN4ErqnKls8EBUeMJE0YgXjVk%2FFIiaDhuQqCTgvWsZDu7vV%2FfxeaZgD%2F8a5ZYeEmXdN3o7ipYCaso%2BI0uv7jrYtgUHua6P7O7bGBboBAmur87aM8URJfrBVXLBHOr%2FIFLHyCyM0fEaV3FHWOW%2Bshlhpf7R4c2NonI66xABja0iDskJSHClQRJyeBcZ4YkEvYno%2FshAXiVPxqu17LXdzUlJOHMdPZMbV1PTpdYJSHihpxLjGa%2Bq08hzMbMZYj9%2FOXE8sFQR1okYOMtwXr%2BViL27EBzBGK3i9nZnmbSN%2F1cCTGP1wfpGL5p5uzswIhngWLTz1hoMxaagN6MAHDagTQPQKnFK3nH69%2FLQc1RbIr45vEW3U3p4zNYlPaSi0J3WQHz4YzhlhIZPJWF8pzttfIcUVAreB4TP5D4yWw98%2FNXq5V74BjUfUyQhahuW%2FGx4MqxMOzb%2B9VQejiGRzTBQAY1WTo8Tgr7NVmlfXAC6NjUPAat8qQqYfBj13FH5KU3g4U8l6%2Byh65CryR%2F1ErJy4dBmBECAWxN3H8sO6yXfG4WCiyB9A4%2F%2BCks7j7QclQ7wSD4BfbkPO3%2BqkBrPmRqwrsgiHqf85nCMLPkw78GOqUBrrBZPrhTRodJERqFid2C2bsTecV3SkggsLvP8jZ8dav%2F94VxUjRLeDAVxxsU4RRRnJVFmiVH7AcgchDS0oeYbbgHKxzy2V4nXzgKZ%2BYxKp6m84OuLwFhaPFxGYrRznVZVo%2BacOV93jtbUUTZwFXccK5rNBF2yeaahEWQSWwyzk5%2BaTMMcBx9M2TWviyZEfP%2FHAg5Gzeo4s9qYy6lgp0i20twzRKs&X-Amz-Signature=f3f2b9cee2fb97199da362b6b4771eea9cfe68240c306ce4597764671638f7bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
