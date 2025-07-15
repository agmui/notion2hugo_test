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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJADH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDyKmcJg5fsbqMRKnq1WOPlVArUhylpG%2FXKLj9neJUDcQIhAIaCM8BueBiHoGpFDL1MyfLGSrtzRtnL%2BXPcU6lDP284Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxucpOzI2KspcQLdxQq3ANpOyXHvZYemBsA1NTBcxQ7gfjLIOY9QfUVsmR1ijN41%2BWYDo7x27W5xao4TpJFtLnEtqy%2FDY0GsSmSFXxPKed6%2B9MUnhbvqxnEGHFbv08JaXo86sAAmSElvu1479ma7JEfqo53FqGpwwAKitpr6Zq%2Bm0QjLGV6OELY0C%2FsPH1Yf3WOrGq5vfdSsB33F8%2FzdeRoWk%2BMRuLkm5pcyLIVYwYRMDCLYo%2FjqaT7Ipfag4JxdSwh%2Bp5kR8EyVbTuyjArLBtFS6NQn3bSgE%2B0qkrqSHWt6h11LJHpHJtY458eFExzrZZsySBc8V0jW%2BaP4drDuWIFt6V3U9J%2BfNvaLaggU5%2Fy2VEjIWVQmvmKgAAxgaRZfpxvbGizpUFBsL7jSrvOCE4uBkvb7PCBzqe99CYXLW%2FNkqT5dOeVPqTbOnQBBdhq1h2pCFWJbEny6vZb2rwv8MWDladcQ%2B2A8XY%2FSagOLIagJe8ePDAdw4uz6uAnhioefJqWCAkiQoHHexObmtGC0jRosgHRx7LilontfUJNtom5J6jjcu8HhqW410tGISV9No0cY%2F8IDXIromeGqApV0z3Qca%2F9lzHjpS3%2B%2FKqR9H4%2BzFI4jJoDHsMjlvMpE%2BuBONrMwLmeBo4Mna7EXzDDr9nDBjqkAXXyebF%2By6NATT0xgyytngMQHiIkT%2FahVNY2WKMrx1WjlvIAxV%2FC4WgL20TH7lg1uiqzNv293E4oSkdYFKuU5fnHno1vgWwxEAgTV%2FxJ7BL7TV2UFxqPBStbDf1Iia%2FAJDVFP42%2Fai%2FihfFtmh8aXo8UHzEs27InCBGT0SzhOcjO8%2BYuJg832LCQoGNiG1Sr4z3f41yM7X7qhwPmZiMyDZHAKiP7&X-Amz-Signature=f12245108127533e418bef51c5514761092016772d6e70fcc55ed30dcc417f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHJADH5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDyKmcJg5fsbqMRKnq1WOPlVArUhylpG%2FXKLj9neJUDcQIhAIaCM8BueBiHoGpFDL1MyfLGSrtzRtnL%2BXPcU6lDP284Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxucpOzI2KspcQLdxQq3ANpOyXHvZYemBsA1NTBcxQ7gfjLIOY9QfUVsmR1ijN41%2BWYDo7x27W5xao4TpJFtLnEtqy%2FDY0GsSmSFXxPKed6%2B9MUnhbvqxnEGHFbv08JaXo86sAAmSElvu1479ma7JEfqo53FqGpwwAKitpr6Zq%2Bm0QjLGV6OELY0C%2FsPH1Yf3WOrGq5vfdSsB33F8%2FzdeRoWk%2BMRuLkm5pcyLIVYwYRMDCLYo%2FjqaT7Ipfag4JxdSwh%2Bp5kR8EyVbTuyjArLBtFS6NQn3bSgE%2B0qkrqSHWt6h11LJHpHJtY458eFExzrZZsySBc8V0jW%2BaP4drDuWIFt6V3U9J%2BfNvaLaggU5%2Fy2VEjIWVQmvmKgAAxgaRZfpxvbGizpUFBsL7jSrvOCE4uBkvb7PCBzqe99CYXLW%2FNkqT5dOeVPqTbOnQBBdhq1h2pCFWJbEny6vZb2rwv8MWDladcQ%2B2A8XY%2FSagOLIagJe8ePDAdw4uz6uAnhioefJqWCAkiQoHHexObmtGC0jRosgHRx7LilontfUJNtom5J6jjcu8HhqW410tGISV9No0cY%2F8IDXIromeGqApV0z3Qca%2F9lzHjpS3%2B%2FKqR9H4%2BzFI4jJoDHsMjlvMpE%2BuBONrMwLmeBo4Mna7EXzDDr9nDBjqkAXXyebF%2By6NATT0xgyytngMQHiIkT%2FahVNY2WKMrx1WjlvIAxV%2FC4WgL20TH7lg1uiqzNv293E4oSkdYFKuU5fnHno1vgWwxEAgTV%2FxJ7BL7TV2UFxqPBStbDf1Iia%2FAJDVFP42%2Fai%2FihfFtmh8aXo8UHzEs27InCBGT0SzhOcjO8%2BYuJg832LCQoGNiG1Sr4z3f41yM7X7qhwPmZiMyDZHAKiP7&X-Amz-Signature=04bfe2eaba90aac54230e6cbabd27d2b129836db3ccf0e7f023d1688a96a5901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
