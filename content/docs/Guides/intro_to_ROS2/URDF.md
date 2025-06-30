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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4VVSEE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECrXrsKjjtlsJmhStDzwor233ln2dKH8hUDuwDQ68gWAiB5KAuVPM%2B2aP9vop8fBE9Oa3CkPR0g0YITYqnA85fpFSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT8zhE7hQ8m6xzs3AKtwDXqsR2Kk%2BCvDSPQDwQN2m%2FREYcxAHd24uO62Gj6JV9B037Xfo6QSLlmziZa47ym2uZs4xXkDkxDRKK7IjUh9W3zZJy4jfVxD54pXV5AeentFj1Mk7Oy1Tesx%2Bj%2Bs%2FA4gRM15fHIvYAQHAP6r5M8XAN43lem0q7owyJIMlGiEqZXbQVJ0K6M4AHjZnGUYnO62CoBTKkblOBImBHC%2F8S10kMEwkyP%2FOzwRSR5nIQOoThwvDAWzis3MZ4JH%2BvFk%2FQdntMcOSqKUKW3zeKtoOFgOcx5J9%2B7xZ%2FKLeNy%2FIWcGhzlk1ia5xER9Ffk2Gp4mXxAFm6N3mvAMyGZsQQSNMNO85uBUNY1tjAwzL9qCRMMAWcX61MYhr37Br6nFeE0Izcfs1d5qa1Xg6YMYCUmSuGPDZw3gkCc1Z6d2qJiTzPRbsucH%2FyH3dQeUgCGiv0%2Bw6cJ76kSm8yJQ5nNjzmM%2FcytZquet18jvDN97yZmlw5oSpSDxHcLOjbP5WH2h6IUMDK00NZyLn2JA18Dc79r2rZdIkyBE5YZ2eYm8VZ8SwRlUukjNpORswBXl5mqtV%2FqZF9iJ2u5M3PLx4upjevs7PouNhmYaEavJUJl%2B5BdFtqxHNODEBQi0CKe%2BqFwfPgKswts2GwwY6pgEnwybKWEGN0KbxeawLJbgdcxCTf1FJH1xdWvBcMBteaV4dnSBpmeWgK5h3KE1oVmDZpqvo1JWhnLDSHGdNTrVmTiNuqKrh2EyVlb1zLCm%2BV4dq0uP2jW%2BSWMddGPumDSlPgnSq68xQiGO1yCM8zdmJSo8ckZLJ19%2Bs3tupAuh9OwHE0moDDU%2BxdI71xShGz3u4viiiWsfOY1hSZTXABrBfJbv5Vrx4&X-Amz-Signature=0a45e535d5565b28fe86933443425149893a8b0aadf54778c9ebed4291c6025a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4VVSEE%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T004636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECrXrsKjjtlsJmhStDzwor233ln2dKH8hUDuwDQ68gWAiB5KAuVPM%2B2aP9vop8fBE9Oa3CkPR0g0YITYqnA85fpFSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT8zhE7hQ8m6xzs3AKtwDXqsR2Kk%2BCvDSPQDwQN2m%2FREYcxAHd24uO62Gj6JV9B037Xfo6QSLlmziZa47ym2uZs4xXkDkxDRKK7IjUh9W3zZJy4jfVxD54pXV5AeentFj1Mk7Oy1Tesx%2Bj%2Bs%2FA4gRM15fHIvYAQHAP6r5M8XAN43lem0q7owyJIMlGiEqZXbQVJ0K6M4AHjZnGUYnO62CoBTKkblOBImBHC%2F8S10kMEwkyP%2FOzwRSR5nIQOoThwvDAWzis3MZ4JH%2BvFk%2FQdntMcOSqKUKW3zeKtoOFgOcx5J9%2B7xZ%2FKLeNy%2FIWcGhzlk1ia5xER9Ffk2Gp4mXxAFm6N3mvAMyGZsQQSNMNO85uBUNY1tjAwzL9qCRMMAWcX61MYhr37Br6nFeE0Izcfs1d5qa1Xg6YMYCUmSuGPDZw3gkCc1Z6d2qJiTzPRbsucH%2FyH3dQeUgCGiv0%2Bw6cJ76kSm8yJQ5nNjzmM%2FcytZquet18jvDN97yZmlw5oSpSDxHcLOjbP5WH2h6IUMDK00NZyLn2JA18Dc79r2rZdIkyBE5YZ2eYm8VZ8SwRlUukjNpORswBXl5mqtV%2FqZF9iJ2u5M3PLx4upjevs7PouNhmYaEavJUJl%2B5BdFtqxHNODEBQi0CKe%2BqFwfPgKswts2GwwY6pgEnwybKWEGN0KbxeawLJbgdcxCTf1FJH1xdWvBcMBteaV4dnSBpmeWgK5h3KE1oVmDZpqvo1JWhnLDSHGdNTrVmTiNuqKrh2EyVlb1zLCm%2BV4dq0uP2jW%2BSWMddGPumDSlPgnSq68xQiGO1yCM8zdmJSo8ckZLJ19%2Bs3tupAuh9OwHE0moDDU%2BxdI71xShGz3u4viiiWsfOY1hSZTXABrBfJbv5Vrx4&X-Amz-Signature=ca4cdfb327d57bcef0d813c9db377d44ffdb002438d595dc39493f910653e9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
