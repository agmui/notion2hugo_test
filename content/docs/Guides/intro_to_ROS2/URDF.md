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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GI7YH7Q%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGrBHAoBaxSvX%2F6vsAK6td2iGBu%2F5GTM%2BzQO0k3aopmAIhAO2m%2BIbLVFKN0BQtipMaQszS%2Fbfiq8E%2FwrhzNAdccCWxKv8DCFYQABoMNjM3NDIzMTgzODA1Igx0v4vpXPV2n1%2FJQdEq3AOiFSSvMKfGKwBHYsnctNhdw%2F34B92CQW%2BafVGrt7Np4y73%2FeNftbS3%2Bro40DQj4cFkJ5xSJerRLTCvzHjhs06KLGgC4nTt23YhZ9e8%2BFu8KzfcwaoDDOMTtYdRQpQxX3%2FTfGBK1CbFHdUkp6yTwln%2Bsbu4oRX6nKoQRwBnZgLfxZ7UY77%2FB%2FMKqoh2lb78DXolPg2xOHS0qUJQJyx12sJ95O13YlDaI%2B2OC06JVWT3Ou1A11%2FvJ6qC2RcFCro7iJQlnCq1Rwdin8QAdPdUkDbc9IvemnV1R3Lsd5p00Xpo8ySvUO01PibhHYJIPAz1fM5TLxkkqRfCc%2FoJoLht0m1amXmTKEK2fGdWaJci5T8OAlmhAZuMedCjIhJf3y4myqK0wRs57OsgRKJ104AuQczM6YlKf%2FMlVWz5mwmJbdygaaKWf8om2r%2BhpIWiZuuvCWkAgR8AUwylTAgW25Bq6ocPI5vVv3YW2MtcjouWUPzW8fyGZLGQVegpWkLHROShjrSpROmJkcfv0q3fldE0S6KBt%2Fh2lzITdnp6hdVsDC6XDvpdtSuoMkh8FoV5s6jMykwmTSfFKm%2B%2BAg9vp9FTvmy4JqXgsInjUZ%2BZMEc6QGBtMnWt0WQjAwZLoyvSOTDHuM2%2FBjqkAVYP7z08PlereOIsZv6v71t76et3hVet17p8R1JB8p751vjo4HisaNA%2FdD1r73tWxD0SKx%2FV9c1E6HBPELQMJEWGmCyt9WDSyihlNT%2FkBSumoLhxdzC%2BvxpWRPruno3RGcAr9luQkuzBJQ7WZuv9yrIGsIfhg7tpeRaSXVEHIu%2FNzCG26lAqVexAzqKpE0AwAdPyN7yFt8tdHOCutiv5qKkdC2V4&X-Amz-Signature=a717d96cc00f6b0405e4f1b5c4ec09e651b45dfc1594b91cb41f026ee520de44&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GI7YH7Q%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGrBHAoBaxSvX%2F6vsAK6td2iGBu%2F5GTM%2BzQO0k3aopmAIhAO2m%2BIbLVFKN0BQtipMaQszS%2Fbfiq8E%2FwrhzNAdccCWxKv8DCFYQABoMNjM3NDIzMTgzODA1Igx0v4vpXPV2n1%2FJQdEq3AOiFSSvMKfGKwBHYsnctNhdw%2F34B92CQW%2BafVGrt7Np4y73%2FeNftbS3%2Bro40DQj4cFkJ5xSJerRLTCvzHjhs06KLGgC4nTt23YhZ9e8%2BFu8KzfcwaoDDOMTtYdRQpQxX3%2FTfGBK1CbFHdUkp6yTwln%2Bsbu4oRX6nKoQRwBnZgLfxZ7UY77%2FB%2FMKqoh2lb78DXolPg2xOHS0qUJQJyx12sJ95O13YlDaI%2B2OC06JVWT3Ou1A11%2FvJ6qC2RcFCro7iJQlnCq1Rwdin8QAdPdUkDbc9IvemnV1R3Lsd5p00Xpo8ySvUO01PibhHYJIPAz1fM5TLxkkqRfCc%2FoJoLht0m1amXmTKEK2fGdWaJci5T8OAlmhAZuMedCjIhJf3y4myqK0wRs57OsgRKJ104AuQczM6YlKf%2FMlVWz5mwmJbdygaaKWf8om2r%2BhpIWiZuuvCWkAgR8AUwylTAgW25Bq6ocPI5vVv3YW2MtcjouWUPzW8fyGZLGQVegpWkLHROShjrSpROmJkcfv0q3fldE0S6KBt%2Fh2lzITdnp6hdVsDC6XDvpdtSuoMkh8FoV5s6jMykwmTSfFKm%2B%2BAg9vp9FTvmy4JqXgsInjUZ%2BZMEc6QGBtMnWt0WQjAwZLoyvSOTDHuM2%2FBjqkAVYP7z08PlereOIsZv6v71t76et3hVet17p8R1JB8p751vjo4HisaNA%2FdD1r73tWxD0SKx%2FV9c1E6HBPELQMJEWGmCyt9WDSyihlNT%2FkBSumoLhxdzC%2BvxpWRPruno3RGcAr9luQkuzBJQ7WZuv9yrIGsIfhg7tpeRaSXVEHIu%2FNzCG26lAqVexAzqKpE0AwAdPyN7yFt8tdHOCutiv5qKkdC2V4&X-Amz-Signature=3569190b71e76482a51f24112e2a19a693aff31fd5cb7bd285f0bda2d3f06c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
