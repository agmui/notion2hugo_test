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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZIOSCN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCI77a5O7EL7Eqm%2FWOTwKDeQrAX2UY%2F8AG71cWRInW28AIhAMeFtLI7Gd8TpaJx0zzTKHeDCJBFkV1Qpyw8aWJYnrsmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfWkDWymYEKTvsv3Mq3AMrRbyV1nXqppmN8fwLy8KWb5bRTRrDTkxkDO4mzphjP1TrVDjusqms%2BTNZinHa43y%2BY7%2FsoTmRQf4oHJipcTS5PfG8NICJM8BOYXj4eOVQ1EWNgkMdaKYxKoasMpuaOxkhp6H0OwNyXbVqCuEqeyFUNTcdgBvJJKVsyIlUMCzmvI47eKMR70Shh%2FigkSPViwH%2FZn9QiHE6trCqRxJ5bFJF8Hjq8jqCEkXJPEfKHGBF8uDhCsfusKRgfp3yi9f4eSQJS4Cx7p0I5CU%2FyGofm3Iz7ZxIlc6szv6zylxRGbn8jNF9zb66hvgf6pPVZ9z063aN%2Bpduy9pGmC80C8sBLrfNH9yltFcnK0%2FBB7ljq2K4yVIlEX43Ol7Zw5YkHIAAAzZEj8Hg2ll5UJv1DCtqE7rsH%2BKhPqaCVVhqvwqkOkzkxvd6Y9fMrnnXkEstOvzTXf%2B0OVe5rhBgcbAT2GWow1mfPmvsnbyd%2B0y4yq3ZCEGtwQcLHj%2F%2BUgra958Z%2Fh%2Bq%2BnhhKp%2FtkNCQ0CREBfmKc34ZfqXmiWZDirGY6CpI6GmwNPdghLwyGdNRDg2teuMWQFSNXHScBsSE6oJwRRntbzRIbwwdTi3OsBeLBYcBzchKP%2B2JYk86BhQqxYO6bjDtt6jCBjqkAR4mRfQGL0RIoYIhRxViXLpuo2lqb8cQtyz4tlv9ab1gOYpW3t%2FZfRE1OIvGDBj19BOsIt59EbLOBfV8kxFFzgiC4D0XXmq3lL1m%2B%2FaU9sVTMGkqeI1DBSK9TJ%2FSjReTPgTKKUnvFCrEb5Ze%2FxMrTMUQZ7uUVRl8SWC8au1Boq3kC88RJvDMWqQAIvrrxYtMhTkmQ7V9WUUoWFSsomlEQJTWH8qY&X-Amz-Signature=18bed40dbe577cb8f4de7da84de0a873d2ebc085418eba04b94fc826223c07f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPZIOSCN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCI77a5O7EL7Eqm%2FWOTwKDeQrAX2UY%2F8AG71cWRInW28AIhAMeFtLI7Gd8TpaJx0zzTKHeDCJBFkV1Qpyw8aWJYnrsmKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfWkDWymYEKTvsv3Mq3AMrRbyV1nXqppmN8fwLy8KWb5bRTRrDTkxkDO4mzphjP1TrVDjusqms%2BTNZinHa43y%2BY7%2FsoTmRQf4oHJipcTS5PfG8NICJM8BOYXj4eOVQ1EWNgkMdaKYxKoasMpuaOxkhp6H0OwNyXbVqCuEqeyFUNTcdgBvJJKVsyIlUMCzmvI47eKMR70Shh%2FigkSPViwH%2FZn9QiHE6trCqRxJ5bFJF8Hjq8jqCEkXJPEfKHGBF8uDhCsfusKRgfp3yi9f4eSQJS4Cx7p0I5CU%2FyGofm3Iz7ZxIlc6szv6zylxRGbn8jNF9zb66hvgf6pPVZ9z063aN%2Bpduy9pGmC80C8sBLrfNH9yltFcnK0%2FBB7ljq2K4yVIlEX43Ol7Zw5YkHIAAAzZEj8Hg2ll5UJv1DCtqE7rsH%2BKhPqaCVVhqvwqkOkzkxvd6Y9fMrnnXkEstOvzTXf%2B0OVe5rhBgcbAT2GWow1mfPmvsnbyd%2B0y4yq3ZCEGtwQcLHj%2F%2BUgra958Z%2Fh%2Bq%2BnhhKp%2FtkNCQ0CREBfmKc34ZfqXmiWZDirGY6CpI6GmwNPdghLwyGdNRDg2teuMWQFSNXHScBsSE6oJwRRntbzRIbwwdTi3OsBeLBYcBzchKP%2B2JYk86BhQqxYO6bjDtt6jCBjqkAR4mRfQGL0RIoYIhRxViXLpuo2lqb8cQtyz4tlv9ab1gOYpW3t%2FZfRE1OIvGDBj19BOsIt59EbLOBfV8kxFFzgiC4D0XXmq3lL1m%2B%2FaU9sVTMGkqeI1DBSK9TJ%2FSjReTPgTKKUnvFCrEb5Ze%2FxMrTMUQZ7uUVRl8SWC8au1Boq3kC88RJvDMWqQAIvrrxYtMhTkmQ7V9WUUoWFSsomlEQJTWH8qY&X-Amz-Signature=d7e760c5a6ba0aa8b3cc64348b6dd2b9190c83a456726f4c1f5cfbdc6c0081a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
