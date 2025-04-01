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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJJFLT5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCs77vhdVfCnx%2BlMI9ETLXDcoLrOybCMmco2X%2FAdstHRQIhAJ7SICI2cj4sZ53b0sjHRRdFF5xZpsyHIPvfGeHRW6WmKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzndkDX7d%2FUClf5U80q3AOoVkeiCEDVL89WQZINaIqkOkjMjWWJrCPYlkqmq3ZIIfSyVd%2BwII%2F%2B5j2vW2kZlw5nMgFScJlsZnqVxFEZeEE0GZV327osO1uIFnvL6aGFedE0nYE9ywihQtHP%2BEjLbR34ErJyo72r5HQede44VEyBrwLoewygiIdhJ%2B5fT5fCjDluRCQKYscSYAbGvgVM0gnl4bmWLz2lgKgyOYCEXgf0QCWghPPWToPdXboDxGJPcC1%2F8KQMq7UUQ3Q3k5j9e6DYlyy8Dqc1KqosMYaYAI9lT3nZCAPxgcekSeesQmEZtEAQWFUYbwAFq2bn1kXR07HBmPF8jAUSNHqd2LkrxAVIlRrkdHcCx2YQ%2BeSULSOtv%2BH6xNN6vTkwGZYrDsrbNcRSxo4l0atpNFMf5TFKHzw5SKthZvLWQrhRGvicDTUlF%2FSvIa06ZqeMqnsYYlfyBDaAmfd7tFzE1PJR3E9jU%2BKFHhMDm7YlnIUlrPHv9yJo7fY8zE%2B9kTwVO7eSK2lLj8hbI2G0%2F1OgS3aV9EnDssVVUvDcQAob%2BnUmStn4UKZ81Ah5W%2BkDdhV7MspHWynYCPY62D4RqeaTCpwvbUAxJRvE5Mqip%2Bo95%2Fr9%2FeOVTTibOm8BER6H76AAdrjgyzCah7C%2FBjqkAePar4Ig0QcmIRG1BsV3Sb%2Ba9jFWSqsjqoAkHvJiff4zc9VQdL%2F2IPFEUtwqEmYp6DwyW1QEy8eUHDKY2QikKjPVWuIMpOKYdsr7ZNhTVFBsl0lbOnBzXyp6VtCjjqmiHtIbDvyJ6e14Qnn6nhm0xB3eukjdHBWZ6pztkgUOgWk%2Ba42STlHo0OHGx63naVMl3mzmgVuM%2F0%2BdeRFxwO90ydRtHsJ7&X-Amz-Signature=e66d34bd79add61a617e95fbf2d35c3567f05ccc8a3d80b775f27646e32130bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJJFLT5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCs77vhdVfCnx%2BlMI9ETLXDcoLrOybCMmco2X%2FAdstHRQIhAJ7SICI2cj4sZ53b0sjHRRdFF5xZpsyHIPvfGeHRW6WmKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzndkDX7d%2FUClf5U80q3AOoVkeiCEDVL89WQZINaIqkOkjMjWWJrCPYlkqmq3ZIIfSyVd%2BwII%2F%2B5j2vW2kZlw5nMgFScJlsZnqVxFEZeEE0GZV327osO1uIFnvL6aGFedE0nYE9ywihQtHP%2BEjLbR34ErJyo72r5HQede44VEyBrwLoewygiIdhJ%2B5fT5fCjDluRCQKYscSYAbGvgVM0gnl4bmWLz2lgKgyOYCEXgf0QCWghPPWToPdXboDxGJPcC1%2F8KQMq7UUQ3Q3k5j9e6DYlyy8Dqc1KqosMYaYAI9lT3nZCAPxgcekSeesQmEZtEAQWFUYbwAFq2bn1kXR07HBmPF8jAUSNHqd2LkrxAVIlRrkdHcCx2YQ%2BeSULSOtv%2BH6xNN6vTkwGZYrDsrbNcRSxo4l0atpNFMf5TFKHzw5SKthZvLWQrhRGvicDTUlF%2FSvIa06ZqeMqnsYYlfyBDaAmfd7tFzE1PJR3E9jU%2BKFHhMDm7YlnIUlrPHv9yJo7fY8zE%2B9kTwVO7eSK2lLj8hbI2G0%2F1OgS3aV9EnDssVVUvDcQAob%2BnUmStn4UKZ81Ah5W%2BkDdhV7MspHWynYCPY62D4RqeaTCpwvbUAxJRvE5Mqip%2Bo95%2Fr9%2FeOVTTibOm8BER6H76AAdrjgyzCah7C%2FBjqkAePar4Ig0QcmIRG1BsV3Sb%2Ba9jFWSqsjqoAkHvJiff4zc9VQdL%2F2IPFEUtwqEmYp6DwyW1QEy8eUHDKY2QikKjPVWuIMpOKYdsr7ZNhTVFBsl0lbOnBzXyp6VtCjjqmiHtIbDvyJ6e14Qnn6nhm0xB3eukjdHBWZ6pztkgUOgWk%2Ba42STlHo0OHGx63naVMl3mzmgVuM%2F0%2BdeRFxwO90ydRtHsJ7&X-Amz-Signature=6ffa3f0e1044a96025c0a1fe123638fe7a0c5f0ccba3f04a449e696858319191&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
