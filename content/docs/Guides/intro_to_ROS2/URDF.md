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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4IOGB3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeLuUuIG27RFuhpMYSjwWYsMY47amwNNADamPdn%2BbuEQIgB7gh%2FVGtU9jcjo0nIjDRGyrspSqoFi1j%2BHrczMG6GUoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc74MHrTYHg6GiVCSrcA9vEUBc8eSzBfvKbacph%2Bm2LEa1o%2BWRNN8Mf3p3%2BT9Mj%2BiPZao53tmSBBJxByS1%2FDrupXDKZrgP8fHvzLDpn8dhOZLi5S5BVPXZO47QZ8%2FgZiQ9ALYJ1sP4BCXYDiLMZO5DtHDaZBg6uwVd4tlTGYz54Tx%2BIwJb7lSltKK3BdY6IcViALgFOOfvEhrF5p3MlQ2cbD7O%2BbW4KRMEQgGQDpEa9i0z%2FCcz4LElIC23He6Ke9v%2BzyTY6kfYx6hr%2FqmdbV49GqUg7ZeP0%2BupXx6owBebN7zpI3pxcXw4BS%2FrUUG%2BfGVVktwId2Gv9O2s9l%2BQkiBFhcfkXNPpXjj%2Bs8Za66CVkiW19DjPXuRV%2B6LmjXZD0WOWubb%2FrTp1sHyUp5DOSrDnVNqWwISRjufSo3F9JqIutHjVJTESelaA1W7e0%2B8PIDjpqshJ3eCvxRJte%2FM4%2F1b2LUSTy4SNXFkiQSXLo1iO9ELlcrgwvv%2BEFKw8bmh1tnNrO3esHDWsj3oF16YTrnU6TtzyV96Y1On7uwengnvC4n04QPdEUBukXX5FzDsiB3oSAdknqu6x02G0HOIaGLAC0aoA8UAKS6qKJDt3hKzJVCeFbCjKOMarkXIP4l%2BKxAOPn8BOGGXW6thYnMMquh74GOqUBkKKR1%2Fz2ImFDUk%2BnbAvAqh7bqAKpvup45Pq7XV7EBPz8yKzeq0XE%2Fw6wR2szt23dspe3wbg861x7Ebr8kLZFx9wSlfIAQK8%2BcpR4xKOKMyj1G3sDjBOP0t7%2BrSQ50XVXXrxXj66gCssRM%2F0gR0DRRTeCMaDqzEZA3oS1YCWBhyStLLEaB71p01KOj3ghvxehsYSmIntZuxztRai90gQAexVgjZmK&X-Amz-Signature=055f385758f725b458fceb947bda3f03739a70433c669c27626b810f0493d8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4IOGB3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCeLuUuIG27RFuhpMYSjwWYsMY47amwNNADamPdn%2BbuEQIgB7gh%2FVGtU9jcjo0nIjDRGyrspSqoFi1j%2BHrczMG6GUoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc74MHrTYHg6GiVCSrcA9vEUBc8eSzBfvKbacph%2Bm2LEa1o%2BWRNN8Mf3p3%2BT9Mj%2BiPZao53tmSBBJxByS1%2FDrupXDKZrgP8fHvzLDpn8dhOZLi5S5BVPXZO47QZ8%2FgZiQ9ALYJ1sP4BCXYDiLMZO5DtHDaZBg6uwVd4tlTGYz54Tx%2BIwJb7lSltKK3BdY6IcViALgFOOfvEhrF5p3MlQ2cbD7O%2BbW4KRMEQgGQDpEa9i0z%2FCcz4LElIC23He6Ke9v%2BzyTY6kfYx6hr%2FqmdbV49GqUg7ZeP0%2BupXx6owBebN7zpI3pxcXw4BS%2FrUUG%2BfGVVktwId2Gv9O2s9l%2BQkiBFhcfkXNPpXjj%2Bs8Za66CVkiW19DjPXuRV%2B6LmjXZD0WOWubb%2FrTp1sHyUp5DOSrDnVNqWwISRjufSo3F9JqIutHjVJTESelaA1W7e0%2B8PIDjpqshJ3eCvxRJte%2FM4%2F1b2LUSTy4SNXFkiQSXLo1iO9ELlcrgwvv%2BEFKw8bmh1tnNrO3esHDWsj3oF16YTrnU6TtzyV96Y1On7uwengnvC4n04QPdEUBukXX5FzDsiB3oSAdknqu6x02G0HOIaGLAC0aoA8UAKS6qKJDt3hKzJVCeFbCjKOMarkXIP4l%2BKxAOPn8BOGGXW6thYnMMquh74GOqUBkKKR1%2Fz2ImFDUk%2BnbAvAqh7bqAKpvup45Pq7XV7EBPz8yKzeq0XE%2Fw6wR2szt23dspe3wbg861x7Ebr8kLZFx9wSlfIAQK8%2BcpR4xKOKMyj1G3sDjBOP0t7%2BrSQ50XVXXrxXj66gCssRM%2F0gR0DRRTeCMaDqzEZA3oS1YCWBhyStLLEaB71p01KOj3ghvxehsYSmIntZuxztRai90gQAexVgjZmK&X-Amz-Signature=b0d086d03cc9ed1dd2b9dfaf6a31623ddfc1688adbe5057d98a031a92d2cd790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
