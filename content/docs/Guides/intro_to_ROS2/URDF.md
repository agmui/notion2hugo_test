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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD6UVIM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5ygvZ9te7wGa0H91IaaMJ7zwTqHueMVC26EhaDsiwwAiEA3RN9E6K7O3XrhA1iphne2TlPFcUwkHd82f0%2BejB4mCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaIzibGiLlsXnQNYircAyqROmN9gUqxodg%2BXQZyJCe1Je6r7gWldAwvd8rd3mHnKOxmbJtl377ogvIZfOZTw7htKUBIpTZFZiToemTO0Y4JLHcbEhiNFAAnUuJwfGcMkk5TvVXytacZgtkAEal6BYFb0syIYw0YUei%2B%2FtjpLaiJ5r%2BcbI0pyEvER%2FgsKBCjXHQSqYjFzLQdzi0mYbRIQgy%2Fql8UVuXS%2BbK0pWIv1nQTM5u%2Bulx2h2J9alMe74KfTm1ff8uSoVdhz78BL4KTTlDWLAGy9I%2BL2sv%2FcahV%2FOyg3L95txatS09g%2By%2FqP7KV4Uk1JnqLEr5VoGsPo9yuLYfK0FiiZQ3Ojfbdcflo%2BYrPTZplnH64lWO9nrIU74eb1%2BP1D1AD6I0W8G5mkN3Ynlh48FZuesN9HNBVbom7kcPZpHqlUT87R3qcEXIFUN5%2Fl8rMKF0M%2BsG8T0eWpqD1iLhbmpWZywUz%2B%2FwQKohfWcrh3%2FPyhgPhzNd%2B%2FwqR0UAZxXgVHnqCZ%2Bvbm%2FQptjiXzJ5PLpkjO3QC4vewj%2BtKGZM3O71rf8miZRJ8pKNn0df2aZlBLH%2FndEYJThmHbFu1R%2Fz6eTUTISqQl8AMMgXbcD%2FZ0GmBTdl2npPKhgYqQR%2F2rQ%2F0%2FKiCm02OxVz9MNaT98MGOqUBHmW6T0pKxyIAAWumG7QurHBELraM15D5s%2B4A0MFtqd4XU3%2BGlYHhfsh8py2vsPsB174kCv2czkMMZfnLsiEJg3ZcFyLvhIYCQDT%2BhdahRQTB8mNiPlCo6SdU6odxSCbgNdUN2WCFAIWk4%2FIwbEAckypzFsSHNRzl1sLaWXhAog22oShym9z4JMMgSoiw8hyqsnoj1MjwWBuc4HJAmEfucu2FrHhY&X-Amz-Signature=6078c482c431043a12f139efdc72f92b92e9a5021c7418335e71149b0e038547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOD6UVIM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5ygvZ9te7wGa0H91IaaMJ7zwTqHueMVC26EhaDsiwwAiEA3RN9E6K7O3XrhA1iphne2TlPFcUwkHd82f0%2BejB4mCsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaIzibGiLlsXnQNYircAyqROmN9gUqxodg%2BXQZyJCe1Je6r7gWldAwvd8rd3mHnKOxmbJtl377ogvIZfOZTw7htKUBIpTZFZiToemTO0Y4JLHcbEhiNFAAnUuJwfGcMkk5TvVXytacZgtkAEal6BYFb0syIYw0YUei%2B%2FtjpLaiJ5r%2BcbI0pyEvER%2FgsKBCjXHQSqYjFzLQdzi0mYbRIQgy%2Fql8UVuXS%2BbK0pWIv1nQTM5u%2Bulx2h2J9alMe74KfTm1ff8uSoVdhz78BL4KTTlDWLAGy9I%2BL2sv%2FcahV%2FOyg3L95txatS09g%2By%2FqP7KV4Uk1JnqLEr5VoGsPo9yuLYfK0FiiZQ3Ojfbdcflo%2BYrPTZplnH64lWO9nrIU74eb1%2BP1D1AD6I0W8G5mkN3Ynlh48FZuesN9HNBVbom7kcPZpHqlUT87R3qcEXIFUN5%2Fl8rMKF0M%2BsG8T0eWpqD1iLhbmpWZywUz%2B%2FwQKohfWcrh3%2FPyhgPhzNd%2B%2FwqR0UAZxXgVHnqCZ%2Bvbm%2FQptjiXzJ5PLpkjO3QC4vewj%2BtKGZM3O71rf8miZRJ8pKNn0df2aZlBLH%2FndEYJThmHbFu1R%2Fz6eTUTISqQl8AMMgXbcD%2FZ0GmBTdl2npPKhgYqQR%2F2rQ%2F0%2FKiCm02OxVz9MNaT98MGOqUBHmW6T0pKxyIAAWumG7QurHBELraM15D5s%2B4A0MFtqd4XU3%2BGlYHhfsh8py2vsPsB174kCv2czkMMZfnLsiEJg3ZcFyLvhIYCQDT%2BhdahRQTB8mNiPlCo6SdU6odxSCbgNdUN2WCFAIWk4%2FIwbEAckypzFsSHNRzl1sLaWXhAog22oShym9z4JMMgSoiw8hyqsnoj1MjwWBuc4HJAmEfucu2FrHhY&X-Amz-Signature=b970553383453492a5b163a76f7d2f2527d09a49eea217d458a4803deb990c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
