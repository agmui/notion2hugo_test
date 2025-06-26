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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZOUHTI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGRJxExADA1IRkDo%2F79IuUIAVPWKFDQ9dq8rKYIgHbERAiAoGZ3WzHjJBvZ82orO7Q7kw0VlAE4gKPe81LvzIQiqBir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zs5Rj6R6hekaatKKtwDnB1aUkomISCVnUwsZg5JvyG1sK0nKpCdytynAX6ysrxCoMFrjEjKL%2BNLIxzq7wwG8z4dWVD3TM%2B2WmA1BT3MuP2jcd7%2FQO4AiINjTQazYwJubT6gPGiMHpDYFdcJkbr2Yy3nYiTq%2Fk4YwpZgwVwTExB1kvDGzETHOc6BAFSxZKm8kt79qBFkhVH7W1bHhKoGFPwIjpYMFYSPoO76XtiWNBVaaIrGT2EpWvaAuv%2BAkVqh4oij7GoJ6Cs5kzgGSZFtqAfePnkulVTO7xYKmpiFDlkIW7t4xYXSNgB%2BFcA1YD3cNKUI%2F25WbRVJwy%2BwDWIPZGs6Ku9EkQdUMMRgkmZwAdGJ34RWo9%2FPyO2izeJiKL5E3o4rA%2BxKHi0D16I0Q5GG3TXeIPfTm7QPNtHRUyqFyQn3P9NsepfX1kkFGgIyJ3U53mWX%2Bt1jBRuy5pwx3ZOE%2BWGPzFVSn4Mb1PX83knzHW944CgvR4yN1ShQaBlI%2Fb8KQjIL8fIYZT%2BzIB6zoM29wzysTDPY%2BBGlpAUKYoZoXhlk5LX3m%2BxBBuDk9nKpcbxwxdn%2FqDj%2B3sBPmnvopldQGfjyGRp17XZbA3Gk8A6M3I7QKFzHcwTY6ZAohBoVgVC4NOPcuI0GIzASIrwwt4nzwgY6pgH2BgGWOOqgZC%2Fx%2F82qQFy90Nmwx6AIT%2FKMJSKebWBmJliMgGD5RcKi8E9%2Fha47tFeKatMVucQDSP9Hm%2FJ5XgkzRphzjHhaBuzWKOTqalfO6DrOWqb0LiRAZwL5rd4slW3HOEScI3M4BXytmx0FK6ekctwt90Tp1jPlA%2BDPU6oQt1beiN%2BPKqwOxs0NfnyyYYuuMONugCO%2FSr5ZaQE7%2BtGeVxKmur%2Fv&X-Amz-Signature=62139ec626cf8eaaf91ef065275d5f19dd41030d0f87b3cbaa22b83b69e72813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZOUHTI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIGRJxExADA1IRkDo%2F79IuUIAVPWKFDQ9dq8rKYIgHbERAiAoGZ3WzHjJBvZ82orO7Q7kw0VlAE4gKPe81LvzIQiqBir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1zs5Rj6R6hekaatKKtwDnB1aUkomISCVnUwsZg5JvyG1sK0nKpCdytynAX6ysrxCoMFrjEjKL%2BNLIxzq7wwG8z4dWVD3TM%2B2WmA1BT3MuP2jcd7%2FQO4AiINjTQazYwJubT6gPGiMHpDYFdcJkbr2Yy3nYiTq%2Fk4YwpZgwVwTExB1kvDGzETHOc6BAFSxZKm8kt79qBFkhVH7W1bHhKoGFPwIjpYMFYSPoO76XtiWNBVaaIrGT2EpWvaAuv%2BAkVqh4oij7GoJ6Cs5kzgGSZFtqAfePnkulVTO7xYKmpiFDlkIW7t4xYXSNgB%2BFcA1YD3cNKUI%2F25WbRVJwy%2BwDWIPZGs6Ku9EkQdUMMRgkmZwAdGJ34RWo9%2FPyO2izeJiKL5E3o4rA%2BxKHi0D16I0Q5GG3TXeIPfTm7QPNtHRUyqFyQn3P9NsepfX1kkFGgIyJ3U53mWX%2Bt1jBRuy5pwx3ZOE%2BWGPzFVSn4Mb1PX83knzHW944CgvR4yN1ShQaBlI%2Fb8KQjIL8fIYZT%2BzIB6zoM29wzysTDPY%2BBGlpAUKYoZoXhlk5LX3m%2BxBBuDk9nKpcbxwxdn%2FqDj%2B3sBPmnvopldQGfjyGRp17XZbA3Gk8A6M3I7QKFzHcwTY6ZAohBoVgVC4NOPcuI0GIzASIrwwt4nzwgY6pgH2BgGWOOqgZC%2Fx%2F82qQFy90Nmwx6AIT%2FKMJSKebWBmJliMgGD5RcKi8E9%2Fha47tFeKatMVucQDSP9Hm%2FJ5XgkzRphzjHhaBuzWKOTqalfO6DrOWqb0LiRAZwL5rd4slW3HOEScI3M4BXytmx0FK6ekctwt90Tp1jPlA%2BDPU6oQt1beiN%2BPKqwOxs0NfnyyYYuuMONugCO%2FSr5ZaQE7%2BtGeVxKmur%2Fv&X-Amz-Signature=44e8bcbe09a12b4d724325ae58d331764e81437e50104e1ca7fa668e4778903c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
