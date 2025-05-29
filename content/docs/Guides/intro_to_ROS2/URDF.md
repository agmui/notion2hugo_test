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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4533WA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtLl2ybItzrthYcze%2FR70VmHb1XFyz%2BLH55sRo8AooKAiEApaJPInRP2wxTtrePIokPHIu2Y5cXWyS4HbSKHnntp8UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2smGCxAGCDw3m7zircA8pQTTpqbVzdj5NVDAMXfSACrYD7V4qLDUuhFcxJvLsuDghxq6oNpnrQeZNYLg0qNmt98vKVlGarWyQ5cUYOyGHKC2rwpNPBP4zeXrEB%2BuMWG3y1MEEW%2BWTFBe2nrGcMJIPSEPxerzmkeYG%2FsvAYK%2FJXUmjt%2FC7xK8VZK8EbDIl%2BuxsAV66u%2B7p2p8IUZQ7d%2FQXxxBHkf2R2f56FBLvGo21TnXtEbwyiFyzlK8jwh1bjZkoUWDQXN7rsaDrk2KBOkTnhQtLq%2BWo9aVXJOsu%2B8r14mEDtBGYFuwYc3izrz0RRv3JkuIvJscF%2FUrO0cOpaxV4nrjalMuXxdOzQDmkgwJu3ovdXGP5iaJhWoBxTBAkUbWuEyK3g0pDFjTHffER32%2FgvclWRQKU5N1IJ5w3k6EdHubCHNYYuqqE5qqf4DbulF%2BfEexbz3SboI3F6GsDwSgUkq5HHTQ7OZIivEF98yG%2BncOQiShnsQ0WLRgVYU5d%2BiQ08MMz5RHDEFZkHGwBF1sxSFp1upCmGHyz%2BVSPfMHfIShd%2FGxnaXvkRoDmlcT85onCmG8mHstUlupMTdYqZnIOu5DXyAkrFPoiXN7ZibAPJj0MgxAQNlyXeC90Pcn9ZzhE91h5xdaffzkjPMN%2Bz4sEGOqUBf73BwrZHU3FXwcXiHS0F1UuRFsJh1UDDEeWAL75fyt9X%2B1s0hDEhn7i0P6697%2F8ykrSCvX6It57Fst%2BChYDVwl099NTvt53%2B8f6E%2BRgklbOzPkeX9IEuqg01LF24BQm%2FPxfzkwOx94diHkjqyPNwNo08nHvQeOyzFFeFSdK9oFfKcs4r%2F6T2kbG3OJIxU6eVlud2vAMerhRAsHsOEkm9eNpU56Rv&X-Amz-Signature=61165bd947b893bac9807cd0a4db5690512d0265dcc66281749aa58bd6bc997c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4533WA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtLl2ybItzrthYcze%2FR70VmHb1XFyz%2BLH55sRo8AooKAiEApaJPInRP2wxTtrePIokPHIu2Y5cXWyS4HbSKHnntp8UqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB2smGCxAGCDw3m7zircA8pQTTpqbVzdj5NVDAMXfSACrYD7V4qLDUuhFcxJvLsuDghxq6oNpnrQeZNYLg0qNmt98vKVlGarWyQ5cUYOyGHKC2rwpNPBP4zeXrEB%2BuMWG3y1MEEW%2BWTFBe2nrGcMJIPSEPxerzmkeYG%2FsvAYK%2FJXUmjt%2FC7xK8VZK8EbDIl%2BuxsAV66u%2B7p2p8IUZQ7d%2FQXxxBHkf2R2f56FBLvGo21TnXtEbwyiFyzlK8jwh1bjZkoUWDQXN7rsaDrk2KBOkTnhQtLq%2BWo9aVXJOsu%2B8r14mEDtBGYFuwYc3izrz0RRv3JkuIvJscF%2FUrO0cOpaxV4nrjalMuXxdOzQDmkgwJu3ovdXGP5iaJhWoBxTBAkUbWuEyK3g0pDFjTHffER32%2FgvclWRQKU5N1IJ5w3k6EdHubCHNYYuqqE5qqf4DbulF%2BfEexbz3SboI3F6GsDwSgUkq5HHTQ7OZIivEF98yG%2BncOQiShnsQ0WLRgVYU5d%2BiQ08MMz5RHDEFZkHGwBF1sxSFp1upCmGHyz%2BVSPfMHfIShd%2FGxnaXvkRoDmlcT85onCmG8mHstUlupMTdYqZnIOu5DXyAkrFPoiXN7ZibAPJj0MgxAQNlyXeC90Pcn9ZzhE91h5xdaffzkjPMN%2Bz4sEGOqUBf73BwrZHU3FXwcXiHS0F1UuRFsJh1UDDEeWAL75fyt9X%2B1s0hDEhn7i0P6697%2F8ykrSCvX6It57Fst%2BChYDVwl099NTvt53%2B8f6E%2BRgklbOzPkeX9IEuqg01LF24BQm%2FPxfzkwOx94diHkjqyPNwNo08nHvQeOyzFFeFSdK9oFfKcs4r%2F6T2kbG3OJIxU6eVlud2vAMerhRAsHsOEkm9eNpU56Rv&X-Amz-Signature=04fb25a22ef9acaae816f14da440367a6d376f5c742f0c75c2df1be13ad46f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
