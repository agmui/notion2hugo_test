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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGF4NT5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM2dsK41jIq8VKBaP8AgKSUKN%2BE7u%2F5LPF6zD3gN3qxAIgYdV04vvewrjhRUK9j2Lfv0bCiFxPi9xhZNhBoLz2%2B0Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDArPBLiq%2FofoCAg%2FYyrcA2cMrhtptpSnuUNowKkpKjs0xFZV7zBThPSkf5hw7mm%2B6ubZXYgqjcB4qWTfOgEuc0dqRFtwGV44rGNRdA3iPOzn8FwXsUd5N%2Fvm6SLTtx365bJUZuVKx9OyrmF20evAIUunaGTyAfcwVY%2Ffw5L3BdH6J9Foe2EjcRu9bMIi5hoZs2oagAAaJbstyeY8deyG4O%2FR8WORzi8iNBNitFiFpmiPxg4zrNn7IqLEGRO%2Fs7%2FYxVRoikWs5bK9fDYHE5sRZ5csLUyW0%2F%2BzOGnzjLQzX2nnuZodKyShStO%2FuDNku2Vlq8fpFpwTWHT%2FzJURGT3qN6swSu3odFZ7%2F7JxUgsqOIgbFdo7MMNYKHYL5RaKstGiuxLHc3fx0%2FJAOnWWda8gP%2FVymSGAikED%2Fksy9EOtx5NJfQi351r1BmZ1WgZufnAObT8V8HNEYXQ7Ogr1iq4KHYOeTQ%2BUPHbBznwrPRrKJci0BRNwH90pcq80%2BbUQu8ZW5NWFI%2BX2%2FfBwtjhAQkV3SU6J40Bal8NvWK9y2jWmtNulDYvsm99gG2I93ljvvoqSBfWgXvFrTs%2FFBv3%2BlFa4Dli7y5N89Cx6qZ2nfC0XHkdwjy%2B%2BU4ktaaWnm%2Fp26lmhozTXyk%2Bq7C8UmqzYMLSIwb8GOqUBx5Rc3sdp1ETCOxHt7XHQzznvFcTuYXt250IambdQ0ALBXYHaMCHH2n5%2BL45U%2BOQMZfW4%2FKlklYLf0FG6NBD2kTcZtMLi84OniRij2o9Q8J92w0NkYMhQae7fWpLwBHjtDi8e7CnrbGan2IJT2oDNvX72gv3xInzJSHQSjTBJldUjhic1af10wv%2F%2Fi7Y5PREIOCihQFRGb5iAwus%2BRsNXVCMh0gsO&X-Amz-Signature=2cdfb17bf1f163baafd6306203e17786ca8255265b9b60c9651c77f074190d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGF4NT5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM2dsK41jIq8VKBaP8AgKSUKN%2BE7u%2F5LPF6zD3gN3qxAIgYdV04vvewrjhRUK9j2Lfv0bCiFxPi9xhZNhBoLz2%2B0Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDArPBLiq%2FofoCAg%2FYyrcA2cMrhtptpSnuUNowKkpKjs0xFZV7zBThPSkf5hw7mm%2B6ubZXYgqjcB4qWTfOgEuc0dqRFtwGV44rGNRdA3iPOzn8FwXsUd5N%2Fvm6SLTtx365bJUZuVKx9OyrmF20evAIUunaGTyAfcwVY%2Ffw5L3BdH6J9Foe2EjcRu9bMIi5hoZs2oagAAaJbstyeY8deyG4O%2FR8WORzi8iNBNitFiFpmiPxg4zrNn7IqLEGRO%2Fs7%2FYxVRoikWs5bK9fDYHE5sRZ5csLUyW0%2F%2BzOGnzjLQzX2nnuZodKyShStO%2FuDNku2Vlq8fpFpwTWHT%2FzJURGT3qN6swSu3odFZ7%2F7JxUgsqOIgbFdo7MMNYKHYL5RaKstGiuxLHc3fx0%2FJAOnWWda8gP%2FVymSGAikED%2Fksy9EOtx5NJfQi351r1BmZ1WgZufnAObT8V8HNEYXQ7Ogr1iq4KHYOeTQ%2BUPHbBznwrPRrKJci0BRNwH90pcq80%2BbUQu8ZW5NWFI%2BX2%2FfBwtjhAQkV3SU6J40Bal8NvWK9y2jWmtNulDYvsm99gG2I93ljvvoqSBfWgXvFrTs%2FFBv3%2BlFa4Dli7y5N89Cx6qZ2nfC0XHkdwjy%2B%2BU4ktaaWnm%2Fp26lmhozTXyk%2Bq7C8UmqzYMLSIwb8GOqUBx5Rc3sdp1ETCOxHt7XHQzznvFcTuYXt250IambdQ0ALBXYHaMCHH2n5%2BL45U%2BOQMZfW4%2FKlklYLf0FG6NBD2kTcZtMLi84OniRij2o9Q8J92w0NkYMhQae7fWpLwBHjtDi8e7CnrbGan2IJT2oDNvX72gv3xInzJSHQSjTBJldUjhic1af10wv%2F%2Fi7Y5PREIOCihQFRGb5iAwus%2BRsNXVCMh0gsO&X-Amz-Signature=641d55fbfbfdf9d6dace096c7d53bdb126abf1aa488ca87b820b5ca5bb9af658&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
