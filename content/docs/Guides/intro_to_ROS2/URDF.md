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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYF6UMX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC21Ql8DBby%2BQAn4s8NfXsu%2BSKAt7s%2BaxdlK7zM8WxAOQIgIPkKhBYTXZ1S7FdLqNZC6aa6QLUkN2Gv4DcIe987Sf8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqlg1UkVH%2FyA9h5uCrcA6vZZ2%2FbYhTsf6qkbZyxQcwHFu3QUX%2BhqNO%2BLbKlWhl3i2ZiZy7E0NjrDxtuEAeFokBQWpKJKPoMOTZhkhm5WL3xnAQD%2BFSQL9xomPAOVZ5dxauQCqXMgixwqAbVKRo%2B9gfCmNPmSb6wCzvXUV%2Fg1wG5vKAcLuLnuZA45PxrSMM6JUF6nhac7ahvSYPYf0eQUlSS%2Fw%2BRcQXwUHj5kc%2BO55ukXKBIQydokOsPBvONghOXjJxGD8tdP8eTN92AkxMYCblzlbL7NNzj%2FYNRN%2BwogXPGxJzaz7wvAXfp7LyXqZ%2FlOyDXJBJJPDwqsTR7Rn2G7U1ksmspAtXM10dAm6tGAtAUScU%2BctX43bG%2FMQ6ZD%2BiuFdTke%2B%2B6DSgbnvnVsX7rinb4RLxEojWzfGJ6DUXKnhUV8DAAWIh3g11VNSs8xcwAVzLWH8kPqNd2E2aumUzfLraqzWyhBv5%2BQuuv7%2FQDmIHQg4HanZebTVw0ndCcqd%2BVC%2FN9HOYblfjaJCVAuld77QO7IrAJJmoXUNj%2BH9o%2Fren47RInz5u2GSLzxr%2FVnscb0zUxz66xyG6Q68X4qXqGarKOwPxEgrWa%2BYPvqUAB3oE%2Bm4aw77meWS33XlTlIqIYEVl9rB1B0RDZKZQ2MNSfoMQGOqUBp68Z8eT3twYktUY8mIrPKl9e0i3luBKardeBQe2x9%2F%2Fke3enIJMZX2puxGZma9NV9gmaD2iqeKxuohG5dX%2F%2BxAS%2BXAa6aQZIPi93ASIKoIantGISHoDWK9zM3xpjKdBzgSOS7CPEvjjmqLKy%2BUGOMQMBSnXcNMy2%2Fd5mzLL0wpOWTJpRpY4R%2BjD%2FwYnZsCxMZc%2F4qrYEvjieToSEI9HRlj0pccem&X-Amz-Signature=9ccbb140f10fe424d517d245f5f46b9f1530ae17cf9ed148a707a153a64e59a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYF6UMX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC21Ql8DBby%2BQAn4s8NfXsu%2BSKAt7s%2BaxdlK7zM8WxAOQIgIPkKhBYTXZ1S7FdLqNZC6aa6QLUkN2Gv4DcIe987Sf8qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqlg1UkVH%2FyA9h5uCrcA6vZZ2%2FbYhTsf6qkbZyxQcwHFu3QUX%2BhqNO%2BLbKlWhl3i2ZiZy7E0NjrDxtuEAeFokBQWpKJKPoMOTZhkhm5WL3xnAQD%2BFSQL9xomPAOVZ5dxauQCqXMgixwqAbVKRo%2B9gfCmNPmSb6wCzvXUV%2Fg1wG5vKAcLuLnuZA45PxrSMM6JUF6nhac7ahvSYPYf0eQUlSS%2Fw%2BRcQXwUHj5kc%2BO55ukXKBIQydokOsPBvONghOXjJxGD8tdP8eTN92AkxMYCblzlbL7NNzj%2FYNRN%2BwogXPGxJzaz7wvAXfp7LyXqZ%2FlOyDXJBJJPDwqsTR7Rn2G7U1ksmspAtXM10dAm6tGAtAUScU%2BctX43bG%2FMQ6ZD%2BiuFdTke%2B%2B6DSgbnvnVsX7rinb4RLxEojWzfGJ6DUXKnhUV8DAAWIh3g11VNSs8xcwAVzLWH8kPqNd2E2aumUzfLraqzWyhBv5%2BQuuv7%2FQDmIHQg4HanZebTVw0ndCcqd%2BVC%2FN9HOYblfjaJCVAuld77QO7IrAJJmoXUNj%2BH9o%2Fren47RInz5u2GSLzxr%2FVnscb0zUxz66xyG6Q68X4qXqGarKOwPxEgrWa%2BYPvqUAB3oE%2Bm4aw77meWS33XlTlIqIYEVl9rB1B0RDZKZQ2MNSfoMQGOqUBp68Z8eT3twYktUY8mIrPKl9e0i3luBKardeBQe2x9%2F%2Fke3enIJMZX2puxGZma9NV9gmaD2iqeKxuohG5dX%2F%2BxAS%2BXAa6aQZIPi93ASIKoIantGISHoDWK9zM3xpjKdBzgSOS7CPEvjjmqLKy%2BUGOMQMBSnXcNMy2%2Fd5mzLL0wpOWTJpRpY4R%2BjD%2FwYnZsCxMZc%2F4qrYEvjieToSEI9HRlj0pccem&X-Amz-Signature=25fa9697b24434c24947fe6f12078350fee0ef558fb74926f6099752aa639f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
