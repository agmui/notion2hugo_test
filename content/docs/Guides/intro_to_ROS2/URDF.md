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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5EIRWY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4%2FEO1sY2%2BZt197sGL02oqNW4NdxbLo7IJUqcu0a9dvQIhAIo4ptfLz3XaHkN1IC6WCLOg%2F59Ws4%2BAETC2QraSa1rgKv8DCCAQABoMNjM3NDIzMTgzODA1IgxTxVM9b19oxbVqyO4q3APucO24BPOwqgHOmQHosZyaggU5HlPTgIJZRC9lqrwv1%2BqgIgdwkLdHCKKQ06qyEHwI3PAlBMWPnjE0UofrRUcihHVXSQNu7MrWmYod0NCD6y4kHjXfwhP6g%2FJg8m%2BtKhLMucJRQn7Y9KCRaZWBGQmtP9YgGBuTl%2BDJz0RDhoNCXzZgVCzsptwu4G2U94KUAkmcsH5%2BsVpv9embDE7HHcDUY6JFzx4jV7LuEFCFobXDpzOZadRh0omdEvY8DU8Gl6LTWbvxTZVLo%2BsZ1PeLSINKDXDgxmRr4X2wMG9oaVFcBeDYCemuHv6Tz%2F%2BoAY%2FARQ1PycCsCKZtZ%2Bsug4SApY608Zr2NsKOfJfc5AFRh%2FaOo8AVfmXQQLEPc%2FzZALulhR29AKbZnaXuygL3gjuOieesOyZZdlTmOO1e%2FZDOtI2awKT%2FvwXd4%2FZSexAPc9txQ1I9g4VkGH5Oj%2BKh1uE2yXeTYOaOvORPOYS06uPwRzKsej02xi2VYkfFxUOL74kvgF1WALKgG5J%2BywVJCDxz9rq7kVqyIZHK78OZWZkhHGIZkadrU1y4FJH1fdjgvSv%2BDvC7BWCokmExmq5MwYlLF2xAheiG48qoOkCuzsWG%2FY4U8TehJ%2BoVWH%2FR1aJ%2FgTCglYW9BjqkARub85XZNq8zH%2FLD1PNJuvneOHc3jRMQJPR%2BKsOJuxkMRisYKDW40pTHG0nsh8m6L9WVpomBjqvDCAPRu0UBroXJgs65KFnIur24xa2UccShqeaCuFsWAmf%2FyxZ62R9rK1zl2UYVYT30BbMIDm3CtaAr3d2YhLhA%2FyXxWjztQCj6%2FnpCPQ2XJXkRFx6AVK1pd2td2ciDU1awpC0P4GjFTkpsxPod&X-Amz-Signature=6a3546b5a02166aac12a0632f9617d7045f35554a824d82327671f55268cce3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5EIRWY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD4%2FEO1sY2%2BZt197sGL02oqNW4NdxbLo7IJUqcu0a9dvQIhAIo4ptfLz3XaHkN1IC6WCLOg%2F59Ws4%2BAETC2QraSa1rgKv8DCCAQABoMNjM3NDIzMTgzODA1IgxTxVM9b19oxbVqyO4q3APucO24BPOwqgHOmQHosZyaggU5HlPTgIJZRC9lqrwv1%2BqgIgdwkLdHCKKQ06qyEHwI3PAlBMWPnjE0UofrRUcihHVXSQNu7MrWmYod0NCD6y4kHjXfwhP6g%2FJg8m%2BtKhLMucJRQn7Y9KCRaZWBGQmtP9YgGBuTl%2BDJz0RDhoNCXzZgVCzsptwu4G2U94KUAkmcsH5%2BsVpv9embDE7HHcDUY6JFzx4jV7LuEFCFobXDpzOZadRh0omdEvY8DU8Gl6LTWbvxTZVLo%2BsZ1PeLSINKDXDgxmRr4X2wMG9oaVFcBeDYCemuHv6Tz%2F%2BoAY%2FARQ1PycCsCKZtZ%2Bsug4SApY608Zr2NsKOfJfc5AFRh%2FaOo8AVfmXQQLEPc%2FzZALulhR29AKbZnaXuygL3gjuOieesOyZZdlTmOO1e%2FZDOtI2awKT%2FvwXd4%2FZSexAPc9txQ1I9g4VkGH5Oj%2BKh1uE2yXeTYOaOvORPOYS06uPwRzKsej02xi2VYkfFxUOL74kvgF1WALKgG5J%2BywVJCDxz9rq7kVqyIZHK78OZWZkhHGIZkadrU1y4FJH1fdjgvSv%2BDvC7BWCokmExmq5MwYlLF2xAheiG48qoOkCuzsWG%2FY4U8TehJ%2BoVWH%2FR1aJ%2FgTCglYW9BjqkARub85XZNq8zH%2FLD1PNJuvneOHc3jRMQJPR%2BKsOJuxkMRisYKDW40pTHG0nsh8m6L9WVpomBjqvDCAPRu0UBroXJgs65KFnIur24xa2UccShqeaCuFsWAmf%2FyxZ62R9rK1zl2UYVYT30BbMIDm3CtaAr3d2YhLhA%2FyXxWjztQCj6%2FnpCPQ2XJXkRFx6AVK1pd2td2ciDU1awpC0P4GjFTkpsxPod&X-Amz-Signature=a87b7d2d879f1a10e306b9ee03652acf0aeb72b1aea088e4c308e92d7c21fbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
