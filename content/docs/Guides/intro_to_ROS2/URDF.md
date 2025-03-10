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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62N5JP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIA8fPW8YiZmgZYALNkbHsoUfueQEIs2JlIS6lptoKCzeAiAGLYAyAzCbqaxG2fK1brSNJGhIt9N70%2BOxRCmT7VSgECqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTpK4cv4Xa4Gzde%2FEKtwD7O6a2C4XXVV8sXCMN%2BG9tG%2BzR2gWQvxPKUyZ9iAXM4jcpOr3S75WIv%2F%2B%2BWcL%2Fm7MPCGAbnDpDmUEJh0fftahqJ6h%2FIa%2Bw3DIeBbnUi9BUbV9TmDsoHkTmODB6%2BhiLcIJRTEBWzlOLoT%2BnvIh4CjLs%2FvSmCSi1OPFtwvdFdBViiHrAF5XV9OmkHgSyo3dch3lRDtIykVloobpxeriesI6dikZVkZX%2FTFmKBFaXU489bmgWs5L37zApGlPWd22MgFbAuCV8tt8f47A1CK68xQp%2BkjnlZxXaGPZKreP8QNugv58hE1wfTyBX1C%2BZEN4qr%2BPOb5oeYqSWfs%2Bcx3jWv6SdQ5pUjLPoTo5AfuSGnwYJ701XuyJ%2Bys%2BABarZCi%2B8CujGu%2BPUTGHUjMKlcOW%2FZ2tmW2bkqCtQsjm61aLIoCMDY7kHTtmajYNDRjOqUyJL%2F7Kd0fF9YUwBjI0i7%2BeBbeoIxqGV18KAgyHha6bKZpRXFjXKsxifsOhFnZzVUqPh5gPieJ1znwiPPUYNXSOKM3go7XxPAujh3GqpILnPkOMvHL9RoBZo78QQMKkQRYk97m2%2BTX4OF272LHRvmTzHL4UeSlIKUQAJP5dc73KpLJUtGsYKFAwjjPxs78D6gswnty4vgY6pgGtiVQJFM4JZrugENyfRWyUdCSO%2FFKYRKgLFYR0P%2BjkVc8tyZWSSV6%2BaSTxwvr5Tu5ebqg83hfgJsIxUXMw5dbmvsBQjrEbeNUQPGF0wtrRKlw1nOWEp7JYdeFMPYXZoDOZtOqZE7KWT9EpykCWOGjkejZK8N9PoUdt65oNUuIZMEHEMiBcECGOxBYpgypOmp1s6PEzejta27OR%2B8bKswntdPhYmziY&X-Amz-Signature=a93e08a53ac48f4a50b1055376745ec534ebbf9e3c68b9b3c554c4a21414287b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX62N5JP%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIA8fPW8YiZmgZYALNkbHsoUfueQEIs2JlIS6lptoKCzeAiAGLYAyAzCbqaxG2fK1brSNJGhIt9N70%2BOxRCmT7VSgECqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTpK4cv4Xa4Gzde%2FEKtwD7O6a2C4XXVV8sXCMN%2BG9tG%2BzR2gWQvxPKUyZ9iAXM4jcpOr3S75WIv%2F%2B%2BWcL%2Fm7MPCGAbnDpDmUEJh0fftahqJ6h%2FIa%2Bw3DIeBbnUi9BUbV9TmDsoHkTmODB6%2BhiLcIJRTEBWzlOLoT%2BnvIh4CjLs%2FvSmCSi1OPFtwvdFdBViiHrAF5XV9OmkHgSyo3dch3lRDtIykVloobpxeriesI6dikZVkZX%2FTFmKBFaXU489bmgWs5L37zApGlPWd22MgFbAuCV8tt8f47A1CK68xQp%2BkjnlZxXaGPZKreP8QNugv58hE1wfTyBX1C%2BZEN4qr%2BPOb5oeYqSWfs%2Bcx3jWv6SdQ5pUjLPoTo5AfuSGnwYJ701XuyJ%2Bys%2BABarZCi%2B8CujGu%2BPUTGHUjMKlcOW%2FZ2tmW2bkqCtQsjm61aLIoCMDY7kHTtmajYNDRjOqUyJL%2F7Kd0fF9YUwBjI0i7%2BeBbeoIxqGV18KAgyHha6bKZpRXFjXKsxifsOhFnZzVUqPh5gPieJ1znwiPPUYNXSOKM3go7XxPAujh3GqpILnPkOMvHL9RoBZo78QQMKkQRYk97m2%2BTX4OF272LHRvmTzHL4UeSlIKUQAJP5dc73KpLJUtGsYKFAwjjPxs78D6gswnty4vgY6pgGtiVQJFM4JZrugENyfRWyUdCSO%2FFKYRKgLFYR0P%2BjkVc8tyZWSSV6%2BaSTxwvr5Tu5ebqg83hfgJsIxUXMw5dbmvsBQjrEbeNUQPGF0wtrRKlw1nOWEp7JYdeFMPYXZoDOZtOqZE7KWT9EpykCWOGjkejZK8N9PoUdt65oNUuIZMEHEMiBcECGOxBYpgypOmp1s6PEzejta27OR%2B8bKswntdPhYmziY&X-Amz-Signature=c1ca6c0dc2fa74c8af1951cec0176f85f6caf8f08b5f0f638ff27d5295b1fbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
