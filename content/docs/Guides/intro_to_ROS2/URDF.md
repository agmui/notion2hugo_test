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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEHNS75%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHT2UvN%2Bafwtz6ycLF1K6%2Be0GHZG5ThuD1TDNcLE4CZwAiBVPfouXiBNrqPWiCahvmnGOBpN5Wqopqv%2FY5rNuC%2FWZCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXRyTO9DvdmCcZ%2F0KtwDhm%2FN6bXeazuqVYXNyMgYmIbYyK9HCXPI9kTyzlOrVRsAaMREtlxa8%2Fw9qda7WHAm93n0f28nH8joTtYtLK4U7RI2V8MS9ymo%2BzeXrQeLy4YfnhUDdOffrhm%2BN2uQS%2FvVcC6rJZc1EUBaI2sQYEl2TumYXHgFO4OhRLc05qDDbdxReby5oUiuio8MQq8Idn84xAFRmp2zKqoiq2GX0DMlqu%2F8yw8BO%2B0rqGm9zfCp2foCHaSAV4t3XcZNYNLxxzdB9HlqC3VpE7FPhRFgBD5oUbV%2FYRa6d3XhtP0hQJ%2FlTwy5fQPdKEE91xhOzxpZAclC86DU67soUnaubOwVyy4DQyomrcFcBOCEwOKFJ%2BKQ%2BZLRaLOIXbQeXT6%2BFAA2Rxc6FnGqzky1G8KiujM7QZc7VYRuQ9MiyaD%2BGMW5far63jh3iIiIlSYOatwIsCvKggzgcNVTJauPxd9sqAiS6ZfHGH580DUn7Tgyz5xGSGwvbNSEMzx8XL%2B0XseEdUuy9X8zvCVuZd7Ky%2Bmsa7%2B8F4Qb%2Bgnfk%2Bb9QJsEYUJLUtuED0JuWlMBUam9P9bXExxvfc21lm%2FofwDN7Adq%2FOUot2T%2FghFbeZIuA7rXTcGX3i%2FJWc9NtJbb1MtNlC92xl8wiIf%2BwAY6pgETCeSnSpGP%2B7G9dnFx1yFR8pJYVk6yRG3iRYQnJxT%2FgBM4CKXuAz6lyf9l3HESJLPpRJqPfFTIgfJJZdaD19iJmCJiN3HG6Z4Zi7WfGYjijjEXBCfhLg%2FaxorsvceT1YEoOfnA7Tov7d5GkXKhFGq5NULYk7zA%2BDyh6m0QOB4h0vwkc8AO1wE7YWjYOFRCNyZC9%2BTV61Y9%2BMz2%2FrBMuAm7Z9Sbri29&X-Amz-Signature=d27e9a5000cbac6c2472e0333a00360349e4510afa1dfee675dd80e6cb806b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEHNS75%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHT2UvN%2Bafwtz6ycLF1K6%2Be0GHZG5ThuD1TDNcLE4CZwAiBVPfouXiBNrqPWiCahvmnGOBpN5Wqopqv%2FY5rNuC%2FWZCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVXRyTO9DvdmCcZ%2F0KtwDhm%2FN6bXeazuqVYXNyMgYmIbYyK9HCXPI9kTyzlOrVRsAaMREtlxa8%2Fw9qda7WHAm93n0f28nH8joTtYtLK4U7RI2V8MS9ymo%2BzeXrQeLy4YfnhUDdOffrhm%2BN2uQS%2FvVcC6rJZc1EUBaI2sQYEl2TumYXHgFO4OhRLc05qDDbdxReby5oUiuio8MQq8Idn84xAFRmp2zKqoiq2GX0DMlqu%2F8yw8BO%2B0rqGm9zfCp2foCHaSAV4t3XcZNYNLxxzdB9HlqC3VpE7FPhRFgBD5oUbV%2FYRa6d3XhtP0hQJ%2FlTwy5fQPdKEE91xhOzxpZAclC86DU67soUnaubOwVyy4DQyomrcFcBOCEwOKFJ%2BKQ%2BZLRaLOIXbQeXT6%2BFAA2Rxc6FnGqzky1G8KiujM7QZc7VYRuQ9MiyaD%2BGMW5far63jh3iIiIlSYOatwIsCvKggzgcNVTJauPxd9sqAiS6ZfHGH580DUn7Tgyz5xGSGwvbNSEMzx8XL%2B0XseEdUuy9X8zvCVuZd7Ky%2Bmsa7%2B8F4Qb%2Bgnfk%2Bb9QJsEYUJLUtuED0JuWlMBUam9P9bXExxvfc21lm%2FofwDN7Adq%2FOUot2T%2FghFbeZIuA7rXTcGX3i%2FJWc9NtJbb1MtNlC92xl8wiIf%2BwAY6pgETCeSnSpGP%2B7G9dnFx1yFR8pJYVk6yRG3iRYQnJxT%2FgBM4CKXuAz6lyf9l3HESJLPpRJqPfFTIgfJJZdaD19iJmCJiN3HG6Z4Zi7WfGYjijjEXBCfhLg%2FaxorsvceT1YEoOfnA7Tov7d5GkXKhFGq5NULYk7zA%2BDyh6m0QOB4h0vwkc8AO1wE7YWjYOFRCNyZC9%2BTV61Y9%2BMz2%2FrBMuAm7Z9Sbri29&X-Amz-Signature=955676862b22e5127eac54d22f4a6d170a30631d54a31d64bb3c08411da0d878&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
