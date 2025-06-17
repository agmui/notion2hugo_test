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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OJP3TZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9zxB%2Fd3SYMfQ3Hy7V2gETUl%2Fm%2BJ%2FRivaKkOOR%2F4I4QIhAL0c2RgODGX2W3QUw3aib0ntqmpn3Vr6Q%2F%2F%2FWoJFEeMOKv8DCHUQABoMNjM3NDIzMTgzODA1Igzex9xI36oFEVRy5TEq3AMN3Z9D0DOZNELG9k7tJ%2BPdqHJzcWmwqLvprZZgyGM3i15HSbtJzbU%2FDGownN9%2F%2FCJ4cgSC2xNdMuUuUsSfOj7K52JMakN7ubXawdbb8uHeecf3nb8f0LUj0ibqepQgvaX9CJEsI8kKT6S2w%2FH9IOD9Ids9Kq7ujiCOmZvJeqxjHhd2g2E7qne7s832OGM%2Fd671XhpnNbMgdBzkgG57HkPsyFpyaZNt70N%2BI8yhulxdWHBy5se8m3p5HsTTwm9Jn%2FcYOYmRVu76MvwC72MuCFlioDW1HJgMhJDx37GYNXJLfAkvp4Vf4nyULeM2Bq7BqL%2FWW2nq6crrp2PqZ4U8w44RWKvs9Y3HoJeYaJ%2F2XJdrKoiXh5pdS%2FlLgYtjKbkeSMLgogIQV6zGOlsGksT9JLKiv0eJcZ%2F%2BTfStmL2%2BsCpEkGt%2FeR8mRlgRKf%2B7FNfEB7WQu7M8RVPSM5h0UgSTK3Ynx5A%2FIXDrf%2Bb01zW8bYEA0mceW9jd%2Buhsr8O%2FwI8y19QF%2BoarUyfVIT3MdXa5C0lF1Hc71IidHHBKMPEkiBwg%2F%2FAA6W%2BjwjrZXi5dxPgCjoRhC6FMskhVbGBzLSplppnYf4aXVOmb3H9TqhhbTLYpdJa2U7E94TK%2BvVKBeTDGpsXCBjqkAeFO3mP4yPKWxHq3g8A8m0U46lMGXZQJCsAOzD7hnnJ8%2B3NWtU4npv33mk9OxaT%2FoihQzqMfh%2FHldApK2Nw74xeVXl7RwQtaHc0Pfalaqh3t2xXNGCl7NWorMoIKCjERR1DSzgcVhTh0XL%2FdKPYoxM9RSyLf8jIHGDAX%2BrCPB5T219O4oeBIxk81v7liFy73VGUMN7wpWk9Kx4VDXvZQXuw5%2Bk7A&X-Amz-Signature=089a596389cdbb5aa4510b62c77fea51097ae8c09c5835fadca8ab1d85dbdfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OJP3TZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9zxB%2Fd3SYMfQ3Hy7V2gETUl%2Fm%2BJ%2FRivaKkOOR%2F4I4QIhAL0c2RgODGX2W3QUw3aib0ntqmpn3Vr6Q%2F%2F%2FWoJFEeMOKv8DCHUQABoMNjM3NDIzMTgzODA1Igzex9xI36oFEVRy5TEq3AMN3Z9D0DOZNELG9k7tJ%2BPdqHJzcWmwqLvprZZgyGM3i15HSbtJzbU%2FDGownN9%2F%2FCJ4cgSC2xNdMuUuUsSfOj7K52JMakN7ubXawdbb8uHeecf3nb8f0LUj0ibqepQgvaX9CJEsI8kKT6S2w%2FH9IOD9Ids9Kq7ujiCOmZvJeqxjHhd2g2E7qne7s832OGM%2Fd671XhpnNbMgdBzkgG57HkPsyFpyaZNt70N%2BI8yhulxdWHBy5se8m3p5HsTTwm9Jn%2FcYOYmRVu76MvwC72MuCFlioDW1HJgMhJDx37GYNXJLfAkvp4Vf4nyULeM2Bq7BqL%2FWW2nq6crrp2PqZ4U8w44RWKvs9Y3HoJeYaJ%2F2XJdrKoiXh5pdS%2FlLgYtjKbkeSMLgogIQV6zGOlsGksT9JLKiv0eJcZ%2F%2BTfStmL2%2BsCpEkGt%2FeR8mRlgRKf%2B7FNfEB7WQu7M8RVPSM5h0UgSTK3Ynx5A%2FIXDrf%2Bb01zW8bYEA0mceW9jd%2Buhsr8O%2FwI8y19QF%2BoarUyfVIT3MdXa5C0lF1Hc71IidHHBKMPEkiBwg%2F%2FAA6W%2BjwjrZXi5dxPgCjoRhC6FMskhVbGBzLSplppnYf4aXVOmb3H9TqhhbTLYpdJa2U7E94TK%2BvVKBeTDGpsXCBjqkAeFO3mP4yPKWxHq3g8A8m0U46lMGXZQJCsAOzD7hnnJ8%2B3NWtU4npv33mk9OxaT%2FoihQzqMfh%2FHldApK2Nw74xeVXl7RwQtaHc0Pfalaqh3t2xXNGCl7NWorMoIKCjERR1DSzgcVhTh0XL%2FdKPYoxM9RSyLf8jIHGDAX%2BrCPB5T219O4oeBIxk81v7liFy73VGUMN7wpWk9Kx4VDXvZQXuw5%2Bk7A&X-Amz-Signature=f7cb144b8a53ecedb418eaac33f0d23c23fb12f5d39f214482e802917d8ee566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
