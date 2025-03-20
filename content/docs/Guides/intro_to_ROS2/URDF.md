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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LJU46M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFDu6hlxNATMuf%2BP8Ffl59%2BmOcMhKngN%2F092lPu7M69%2BAiB3c6W38Ks5IQAUhY8yK%2BgPfGBuDW0jEEXUBmHZZJ5xwyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMobDXVpdgxKZIW3f9KtwDtpzeEHL%2FbcXjCRKG1YlUemjO5cHgXrKQ2MeGIch2lgTHocGzi%2B%2FHXU77QRVq2zJV25waP0QoxXr9MjdEgBuDeERPu6Njb8I8ApwH4FgVlh9W6cSD0HOSC1xTq9wYBWpWeFuQfBlGSkTTKOPp9PCmq3u1ymN%2BJ83KnInz1ZTmcrGs%2F6N3dJJW2t3dTS2ZJld8vYu7I9vK4pPaQvbcdFMMZKbFrNoPp8bF9T6dDanuf1b6tFHBY%2FXWLAwcQ8DaXIFPDgkj1kleJTAajJNiECdKCoRLzYoSYE387dZr5gFA2FCissfXQ0xqb2y%2BSs1gT4IDORQbYy7j15xNBGEw9h7LrKB5RZiggcyOIhXTSomOIcs0WTTzA5p7rlsn74LRhGAOlusXM9U1WSptQLm5L%2FLFMJKn9xBGCzy5VWXcLraYNpn9KUK0CZKG%2BhkUsE7pFd6MLcg559B3IyYPUng3DpW4nVG58gxOav1k1IPaWv47E%2B4OGbzOTtT%2FFFkfASpwGolhoBi%2Fcs40rouNdzybOTi9VxF5reFyDjzNB8e3lIbMK3O73s8Q2Mi4GmyiutFpMsucHgRXamQqkaC2k9DGV7PNllBGSKxNcfg8qkJYtmwKCkp4H%2FCNp1lAvYZdkK0wr%2BnuvgY6pgEKVJmUlBlNZfEgH1A7ggre29lCJMRWUp8i%2BjofXq7O%2FrL9cX3DEC%2FJpTyc6Tcu1U%2FZ6eMe70hOH0JxGgRyqwCo7SmVuV%2BykymgHugg2yLEuLiySlWTH84AiLOx4IIl92lDBUDY8KWkjmTXsksHdYH9FZ55NrE5UxQu5zdz16Rcgfe7WVcO8hVziUN9mk4%2Fenf1tDEWdH7kGYWPnwQPMWILkRFj%2BwPC&X-Amz-Signature=69f1811f3cf8f0438fad40a8e96b82a4f3cc22cbc31da9df702e625f7bf0f81c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7LJU46M%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFDu6hlxNATMuf%2BP8Ffl59%2BmOcMhKngN%2F092lPu7M69%2BAiB3c6W38Ks5IQAUhY8yK%2BgPfGBuDW0jEEXUBmHZZJ5xwyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMobDXVpdgxKZIW3f9KtwDtpzeEHL%2FbcXjCRKG1YlUemjO5cHgXrKQ2MeGIch2lgTHocGzi%2B%2FHXU77QRVq2zJV25waP0QoxXr9MjdEgBuDeERPu6Njb8I8ApwH4FgVlh9W6cSD0HOSC1xTq9wYBWpWeFuQfBlGSkTTKOPp9PCmq3u1ymN%2BJ83KnInz1ZTmcrGs%2F6N3dJJW2t3dTS2ZJld8vYu7I9vK4pPaQvbcdFMMZKbFrNoPp8bF9T6dDanuf1b6tFHBY%2FXWLAwcQ8DaXIFPDgkj1kleJTAajJNiECdKCoRLzYoSYE387dZr5gFA2FCissfXQ0xqb2y%2BSs1gT4IDORQbYy7j15xNBGEw9h7LrKB5RZiggcyOIhXTSomOIcs0WTTzA5p7rlsn74LRhGAOlusXM9U1WSptQLm5L%2FLFMJKn9xBGCzy5VWXcLraYNpn9KUK0CZKG%2BhkUsE7pFd6MLcg559B3IyYPUng3DpW4nVG58gxOav1k1IPaWv47E%2B4OGbzOTtT%2FFFkfASpwGolhoBi%2Fcs40rouNdzybOTi9VxF5reFyDjzNB8e3lIbMK3O73s8Q2Mi4GmyiutFpMsucHgRXamQqkaC2k9DGV7PNllBGSKxNcfg8qkJYtmwKCkp4H%2FCNp1lAvYZdkK0wr%2BnuvgY6pgEKVJmUlBlNZfEgH1A7ggre29lCJMRWUp8i%2BjofXq7O%2FrL9cX3DEC%2FJpTyc6Tcu1U%2FZ6eMe70hOH0JxGgRyqwCo7SmVuV%2BykymgHugg2yLEuLiySlWTH84AiLOx4IIl92lDBUDY8KWkjmTXsksHdYH9FZ55NrE5UxQu5zdz16Rcgfe7WVcO8hVziUN9mk4%2Fenf1tDEWdH7kGYWPnwQPMWILkRFj%2BwPC&X-Amz-Signature=3908c720f852dcab300058b6d898cec2cf71c183e475dc16aa0faf264fbacf64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
