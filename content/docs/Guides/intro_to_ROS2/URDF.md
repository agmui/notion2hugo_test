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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRW5HGNP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdzwcR3h69C2i8uHP4lhMJAj4QWxIt9%2BmlVaG6Rr2W4AiEAo%2FQ1KDFEw1u6xii1xD05DFqjwweP8zfj7pPF1T7l4kMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDA8spMFE0122tSAF0yrcAyRmus1zfrCXalmpI9l8RaTKrFmIaj6WgoJi8P7DFhibn6dPb8QoGyxnZreOj410aerCL5cp4YAUtngxQ2KZqQiHpxWD6hgM4U%2BCwgUkD5r1G%2F%2FkN2xL1MtqT1%2F9Igkb3BmaJSzNLkkCsYEN6kDDvz8YD%2ByAQq9%2B7YT5qEQ3IakLo3IHdiTu0DG4VpwZausIiGZhTJJ9haDNbJJai93RXYxbtDI%2BCZcGzRTEJHljICw6b1k4GULtQLD7CV9ykXyfZW81FAkoOD0O7vvdijr1OvE%2FqNoK0mphNkm3u9eO6Q4Yk2yndr0NDBu06jMT8JsuNEyPq7teDHztndWuXqZghMmW3VMNStdgstq%2B26jvpIJCRn%2BkvY2l%2FwtaYTsT170vipBDD1dd78Pbxq%2BI7%2BfP04o8b8nKte8qAkbIvMS6ltUJ%2Fjj8wZhejxi%2B1miTdv3ts7pevci95Uw8ePXvpf6F0YrJmHTboULY7Op9F%2BD2uusp1ezEWpbKbKPUNRU98%2FkA2aRYZqG8Gjifrz5V%2B4B6tcOtku0zp8UkYm9jtWDubc5iHJyKA9oUN7WHK4DRUavL6LzbH5P33CYU4kgsLHxwEXghOjPpEPgpJS%2FKVjumuP5F0lfqp0bffp7kHRgxMMvszb8GOqUBwxJSrIj8qT4ff2Z0%2BKiymDanjVUf%2FCeaCN2DThbQaOmFcXIxWxAbM%2BVuBgpC0ZP%2FIKbnq7G2xXHbWu2RBf0vFtQtOj9O8tYOqrPTiCPJNx39Au%2BuDTRT8sWi%2Frt5XkIEH08TnqYdQ5ddMJCKDQmz2G9NU5fTvYhJjlf%2FRXdD5mOQTkK%2Fc2DZ4xLXee%2BpoMCScmMjzVMMMKUbABdY6B%2B9nulE2Xn2&X-Amz-Signature=8059f7d22b56d3aabc5e8bf3c0c23758387a073ccb085fca45c01c4d431f2f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRW5HGNP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdzwcR3h69C2i8uHP4lhMJAj4QWxIt9%2BmlVaG6Rr2W4AiEAo%2FQ1KDFEw1u6xii1xD05DFqjwweP8zfj7pPF1T7l4kMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDA8spMFE0122tSAF0yrcAyRmus1zfrCXalmpI9l8RaTKrFmIaj6WgoJi8P7DFhibn6dPb8QoGyxnZreOj410aerCL5cp4YAUtngxQ2KZqQiHpxWD6hgM4U%2BCwgUkD5r1G%2F%2FkN2xL1MtqT1%2F9Igkb3BmaJSzNLkkCsYEN6kDDvz8YD%2ByAQq9%2B7YT5qEQ3IakLo3IHdiTu0DG4VpwZausIiGZhTJJ9haDNbJJai93RXYxbtDI%2BCZcGzRTEJHljICw6b1k4GULtQLD7CV9ykXyfZW81FAkoOD0O7vvdijr1OvE%2FqNoK0mphNkm3u9eO6Q4Yk2yndr0NDBu06jMT8JsuNEyPq7teDHztndWuXqZghMmW3VMNStdgstq%2B26jvpIJCRn%2BkvY2l%2FwtaYTsT170vipBDD1dd78Pbxq%2BI7%2BfP04o8b8nKte8qAkbIvMS6ltUJ%2Fjj8wZhejxi%2B1miTdv3ts7pevci95Uw8ePXvpf6F0YrJmHTboULY7Op9F%2BD2uusp1ezEWpbKbKPUNRU98%2FkA2aRYZqG8Gjifrz5V%2B4B6tcOtku0zp8UkYm9jtWDubc5iHJyKA9oUN7WHK4DRUavL6LzbH5P33CYU4kgsLHxwEXghOjPpEPgpJS%2FKVjumuP5F0lfqp0bffp7kHRgxMMvszb8GOqUBwxJSrIj8qT4ff2Z0%2BKiymDanjVUf%2FCeaCN2DThbQaOmFcXIxWxAbM%2BVuBgpC0ZP%2FIKbnq7G2xXHbWu2RBf0vFtQtOj9O8tYOqrPTiCPJNx39Au%2BuDTRT8sWi%2Frt5XkIEH08TnqYdQ5ddMJCKDQmz2G9NU5fTvYhJjlf%2FRXdD5mOQTkK%2Fc2DZ4xLXee%2BpoMCScmMjzVMMMKUbABdY6B%2B9nulE2Xn2&X-Amz-Signature=c88bfbc6406e39d4a565d6a817d48e7fd9f20302aa5045df4621169be9300296&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
