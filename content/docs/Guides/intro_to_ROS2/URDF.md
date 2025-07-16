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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGENBEJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAL7EaBsLluvYwWVADClcvwNL3U0h7ICx9CTUZuCcu9zAiBbGWWJZAIN9vaInCajw0eJX1iUZplWKuCsvyt9mKLm%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMtIPdXo3IMyOBBZKhKtwDjMOnXejpM8GsfLjz0PTdB4Ba7P78jOJQZnh1qYe15ydCBpBnj1CyXg7R%2Bf3CZeEBxs8VhGCJsFJW1U2lqIeJ0hKtiZOP9QSptpw2RxaMX6rJHiOfwtv5sKjmK%2B5HRbAmJyljSliOSHpujoC8lKzKI6YURDc0CCOxnVyKoK7%2B36Ol82hr4Glv4LdaiEAR%2BxlBaPNCjmXF9eH7SxAbTBSA21tqzNnchGWYJfDYlRlnYpFX%2BVjD8UnbORciNOa2ENNx7UO4ouaggEuvjsQ7V0Pr%2BANvDXRvdzGo0WanRD%2BDAv7L3oTUCOwupE89fGGBWt9%2FOImoCM6O1ZvK%2BZmzebS7rAC62T%2BWtCdwh4xvXIXHOEks5UyqPksG42o8wSFjmVNJ7PSfjEY1bQlS7R4Cq3xuyZ3wgnjQ%2FMjTR27N244z077cvROmyowrBxBNEXBuG7Q1bvsFBohEO1qQDZqBVBm7K71BXrYdOA9Xqzb9a3DRJzz5NGeUFyY2jeXyYfiPsYiHcJI04sWp7P1PyiJZM2vOMC0IqEkuoNSURWio4HWgwmZHH5yWqtNksSLki42ES3jzWB8oGQaCrimsnsxp3Q8QwyLkkNmNm4aNKjllioX3TIDMPxANO%2FMuZHOBjZgw4bPfwwY6pgFk1v6OzM3duWRivDILuLFZdFNx68knArGS7CltpstXRuuiNlwa0l%2FTvJ3VrfCwGaPdEa4gyDp8HVsMxdTryZ3Z9oMHaXrNqV4jCHMauc9VkAekz%2F0qJ8u1SZiY5vgz4jTXQ%2Bh54%2F%2BHymbaGjNRpxTWqO%2BKAGdpjLW7c4IwQS1f6mhtLqvzRylT4JEoTsKSAX%2FaoUHDYmPI5PABz8YFEP%2Fl7XtLUpIw&X-Amz-Signature=56d61a99ab5890e772d8846e2a3dd24c6e4da90851479a076ea1abf359c02fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGENBEJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAL7EaBsLluvYwWVADClcvwNL3U0h7ICx9CTUZuCcu9zAiBbGWWJZAIN9vaInCajw0eJX1iUZplWKuCsvyt9mKLm%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMtIPdXo3IMyOBBZKhKtwDjMOnXejpM8GsfLjz0PTdB4Ba7P78jOJQZnh1qYe15ydCBpBnj1CyXg7R%2Bf3CZeEBxs8VhGCJsFJW1U2lqIeJ0hKtiZOP9QSptpw2RxaMX6rJHiOfwtv5sKjmK%2B5HRbAmJyljSliOSHpujoC8lKzKI6YURDc0CCOxnVyKoK7%2B36Ol82hr4Glv4LdaiEAR%2BxlBaPNCjmXF9eH7SxAbTBSA21tqzNnchGWYJfDYlRlnYpFX%2BVjD8UnbORciNOa2ENNx7UO4ouaggEuvjsQ7V0Pr%2BANvDXRvdzGo0WanRD%2BDAv7L3oTUCOwupE89fGGBWt9%2FOImoCM6O1ZvK%2BZmzebS7rAC62T%2BWtCdwh4xvXIXHOEks5UyqPksG42o8wSFjmVNJ7PSfjEY1bQlS7R4Cq3xuyZ3wgnjQ%2FMjTR27N244z077cvROmyowrBxBNEXBuG7Q1bvsFBohEO1qQDZqBVBm7K71BXrYdOA9Xqzb9a3DRJzz5NGeUFyY2jeXyYfiPsYiHcJI04sWp7P1PyiJZM2vOMC0IqEkuoNSURWio4HWgwmZHH5yWqtNksSLki42ES3jzWB8oGQaCrimsnsxp3Q8QwyLkkNmNm4aNKjllioX3TIDMPxANO%2FMuZHOBjZgw4bPfwwY6pgFk1v6OzM3duWRivDILuLFZdFNx68knArGS7CltpstXRuuiNlwa0l%2FTvJ3VrfCwGaPdEa4gyDp8HVsMxdTryZ3Z9oMHaXrNqV4jCHMauc9VkAekz%2F0qJ8u1SZiY5vgz4jTXQ%2Bh54%2F%2BHymbaGjNRpxTWqO%2BKAGdpjLW7c4IwQS1f6mhtLqvzRylT4JEoTsKSAX%2FaoUHDYmPI5PABz8YFEP%2Fl7XtLUpIw&X-Amz-Signature=7bb3c390f047ca7c57277540fcd6ec1cd8f0b087c0a8964691c78be02026fb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
