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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLEIEL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWfL0R7mVTpUjhOCdEuS68sKchkpcwRqv2wggJyMEc9AiAAtVOFv0cyqyB5gu9CSFY%2BbwDC9Q3MgNvyr2T8j0JeKiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbpJxMt%2F8SvB3mNAKtwDwynDq4Huul0klc7Ug4CyWZwNNYlCpqDYWzorv%2FB07Y4T7o%2B6acXeIlVcaI25G2WUrTaefGXAzRcvKnznbrVJww99ZxxBaILpEvXoCydaZlnEiaHhcZjhiIEY04wYE6CHqtMm7%2BOEDaM0%2FfKrzBr0an2ANN1riHUTCI8sx2Dh%2FgaRJazjVK62HY1oA%2BzHyCYNs34YKF931OtRI59nemJQ8ZLm6ymm8E2cSatc55zoNRC2ldlUGAi8antpNMzjtrVe1xug33KbUasxW6OM7Gv%2FIMQ63v%2BehZ3rYOFtWQmmOPfl3J5H85gszdz%2Bfk4Zo43QGItucsmUf%2FDF11hcIp1sp1Yv6rzSwswvZq5BSvEnbYg%2FxRWFV7XutE3zuyYSIqiwlWw3KPMlXTwyGtLodM%2FZBB1ykDtQCX1hXyqDlFd6rJYI%2FfLeTSTs0gO2IjyEIgdyUqXKMfRrfEeyv8wM5bkE64ZM00znEOBhLeo6gDpFAEIUCHIM7CLftgkNghQht0qrJXWzEy7mGQ56gYP1DgXhozIeRKxjSn9SqxW8Y5s%2BZHu60td7pV7QcL6KTnIA7t9dSDvS8KUjVKArvTBIDdo8qidL1oMtDjViVAznLUfale5gEkNDatyHnK5rfoowwcXPvgY6pgGq8%2FAZwCHphP4trKCAKAPH9Cx9HzTVDAQ4dicLURuEY%2FiOT7vixpHzwpGknt0ca7wYoVI2Tss666%2B9BM%2BzGi6haDxkZ0S53kcBF9KGb2eMsvT9ta0%2Bfq7w%2F2sSBI9m%2B%2B4RSSTavzrHoNZTONklfVt1TnkezcfHGmMTJj1xQciWhuts368odb3KI6D1BXaQb7PvZZ5AzYDXW6owjsgq23c5vD9u3JK5&X-Amz-Signature=7e2f2305af7cf1f71677fe0a082c8049da946f9f3466b2b2a3ef8e3839610de9&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OLEIEL3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWfL0R7mVTpUjhOCdEuS68sKchkpcwRqv2wggJyMEc9AiAAtVOFv0cyqyB5gu9CSFY%2BbwDC9Q3MgNvyr2T8j0JeKiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbpJxMt%2F8SvB3mNAKtwDwynDq4Huul0klc7Ug4CyWZwNNYlCpqDYWzorv%2FB07Y4T7o%2B6acXeIlVcaI25G2WUrTaefGXAzRcvKnznbrVJww99ZxxBaILpEvXoCydaZlnEiaHhcZjhiIEY04wYE6CHqtMm7%2BOEDaM0%2FfKrzBr0an2ANN1riHUTCI8sx2Dh%2FgaRJazjVK62HY1oA%2BzHyCYNs34YKF931OtRI59nemJQ8ZLm6ymm8E2cSatc55zoNRC2ldlUGAi8antpNMzjtrVe1xug33KbUasxW6OM7Gv%2FIMQ63v%2BehZ3rYOFtWQmmOPfl3J5H85gszdz%2Bfk4Zo43QGItucsmUf%2FDF11hcIp1sp1Yv6rzSwswvZq5BSvEnbYg%2FxRWFV7XutE3zuyYSIqiwlWw3KPMlXTwyGtLodM%2FZBB1ykDtQCX1hXyqDlFd6rJYI%2FfLeTSTs0gO2IjyEIgdyUqXKMfRrfEeyv8wM5bkE64ZM00znEOBhLeo6gDpFAEIUCHIM7CLftgkNghQht0qrJXWzEy7mGQ56gYP1DgXhozIeRKxjSn9SqxW8Y5s%2BZHu60td7pV7QcL6KTnIA7t9dSDvS8KUjVKArvTBIDdo8qidL1oMtDjViVAznLUfale5gEkNDatyHnK5rfoowwcXPvgY6pgGq8%2FAZwCHphP4trKCAKAPH9Cx9HzTVDAQ4dicLURuEY%2FiOT7vixpHzwpGknt0ca7wYoVI2Tss666%2B9BM%2BzGi6haDxkZ0S53kcBF9KGb2eMsvT9ta0%2Bfq7w%2F2sSBI9m%2B%2B4RSSTavzrHoNZTONklfVt1TnkezcfHGmMTJj1xQciWhuts368odb3KI6D1BXaQb7PvZZ5AzYDXW6owjsgq23c5vD9u3JK5&X-Amz-Signature=7ef2072a2578b449f5a894035e95990e9ed45bf6044973a8deb2920321b20fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
