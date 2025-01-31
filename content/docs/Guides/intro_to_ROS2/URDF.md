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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EF4B2O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAxC7BzMqDzDBCAvs854m9DuwakNMWSz4yPKoe13mRgIgHguUulJsSsDcetLXJ1zAIhkm%2BDLKt%2BKb9irTNYc2gA8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4rUyhm9bz1aZjCCrcAzuqxNFwXWZJYe%2B6DVwJRmKMlxTIkvmwKozlXEwnh4J0%2Bsv07mv2wv9MPxmMgH5jAt0vqsLwFWEgcwsV2uS5JzzhoNeJr4rlDaE3QWt2WRnRb3QucFVw1w0wT3zYe8jqNRbczEi0V6Rc1k1zYhY2hUkgiPPc%2FPuK4deWpMoePbhQ%2B0FMpiTsO709S3C%2FI4QONL8PboHjjOSaSs9XdUQa%2Bt8S5f00Vt6Um9lGGxrk5ljAXAgbct7CLsnIbu3g0g7VzsDr31aR9DZbncn74HsAwiCHbNbX405J6BZxmnRbKGVWsH%2FEAEW6uvHgkuTymxcTGBSpaersHep9ooonUeHHEBzX4P0QdD%2F1vQD69PHAv7dG7Yag0xT6sDwiWwUknF7GEFygsh3LGwnrwv5pxr%2Foajn757CzlY936q5OIDXovbRpacsq%2BguFthlhoB2px0r1zBrejUkwGRQAYL3UkIHdI4%2BsF17zeSP7DriOFhrbgRiXbHVIcuBht5DQVATYexncKQS1Cf5cefLNJVQ%2BXCzh56nLY7xrmIjIp3EGe7vPMFKj0GXaBSwj0IV%2FEKjwO5mxxjFbXf5OVE7%2BLyCMEjv0l9VJc13YUBKhEFQyz69U7loFyWiFESJBOULigVGAMMy48rwGOqUBvrQDAW9lGaohF63wl7%2F92Y%2BAy0wfQLR7V9xLF4r44Hi9s7uJt1lpUW%2BYR7i40zbwg8Ivdn4YwBkBvQmG1Ve1n3o%2FPp3%2BQe8OXvOSHOW4CA90N3WXiE1hunZhTMNyFBtE1efMVlHtlRZfSzmnQ%2BtthYIMwAaO5Ai8hIvMY10LxqBVX%2B7q4Ix3%2BcNjwoRZXAGEwgdFoR0twzy5ICPhaESmiO0zpeGB&X-Amz-Signature=badc5b15c8e3628b459fdfa8519306c1cdfbbe98deb12ec325ac0bbfec5dce16&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EF4B2O%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAxC7BzMqDzDBCAvs854m9DuwakNMWSz4yPKoe13mRgIgHguUulJsSsDcetLXJ1zAIhkm%2BDLKt%2BKb9irTNYc2gA8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFP4rUyhm9bz1aZjCCrcAzuqxNFwXWZJYe%2B6DVwJRmKMlxTIkvmwKozlXEwnh4J0%2Bsv07mv2wv9MPxmMgH5jAt0vqsLwFWEgcwsV2uS5JzzhoNeJr4rlDaE3QWt2WRnRb3QucFVw1w0wT3zYe8jqNRbczEi0V6Rc1k1zYhY2hUkgiPPc%2FPuK4deWpMoePbhQ%2B0FMpiTsO709S3C%2FI4QONL8PboHjjOSaSs9XdUQa%2Bt8S5f00Vt6Um9lGGxrk5ljAXAgbct7CLsnIbu3g0g7VzsDr31aR9DZbncn74HsAwiCHbNbX405J6BZxmnRbKGVWsH%2FEAEW6uvHgkuTymxcTGBSpaersHep9ooonUeHHEBzX4P0QdD%2F1vQD69PHAv7dG7Yag0xT6sDwiWwUknF7GEFygsh3LGwnrwv5pxr%2Foajn757CzlY936q5OIDXovbRpacsq%2BguFthlhoB2px0r1zBrejUkwGRQAYL3UkIHdI4%2BsF17zeSP7DriOFhrbgRiXbHVIcuBht5DQVATYexncKQS1Cf5cefLNJVQ%2BXCzh56nLY7xrmIjIp3EGe7vPMFKj0GXaBSwj0IV%2FEKjwO5mxxjFbXf5OVE7%2BLyCMEjv0l9VJc13YUBKhEFQyz69U7loFyWiFESJBOULigVGAMMy48rwGOqUBvrQDAW9lGaohF63wl7%2F92Y%2BAy0wfQLR7V9xLF4r44Hi9s7uJt1lpUW%2BYR7i40zbwg8Ivdn4YwBkBvQmG1Ve1n3o%2FPp3%2BQe8OXvOSHOW4CA90N3WXiE1hunZhTMNyFBtE1efMVlHtlRZfSzmnQ%2BtthYIMwAaO5Ai8hIvMY10LxqBVX%2B7q4Ix3%2BcNjwoRZXAGEwgdFoR0twzy5ICPhaESmiO0zpeGB&X-Amz-Signature=45ef68dfad3268a4afc57ecdcd422d7c2e44ab74b100b492820d16f15fbb96e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
