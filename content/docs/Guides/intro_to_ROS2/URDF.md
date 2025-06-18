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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJTMI3F%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiMuKhk%2FnE0uAaBtqM%2BIKsItyJs0rQFaz%2BmdrhthBrOgIhAOHoOtsRYO%2BoPZZP5d7yWU5lCC0BllXhnH7HTwcL9k%2FXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1mM4WNspjoU8lO6Eq3ANgl5JixfFJwVdiT%2FdHxzDLzU7pXbv7V282DfHRXtIMYoFMEogsDCn8aNKZOYhg3jJD118xIj3p335TJWfq6nT3ZugtmYcw%2FM%2FHGF76hCwMWyt5ZsZhZ4ac3H90Uu2In8PgT2dNokJLcOdP8A%2FMB1Q9DWPQmCTnBofnfJ9nGxrTiJFkV55znBpVN7zl64TMTtDSCd4nbNoHkwSomzbZSS1jfHsYwsxjaYNf3Pwwtd%2FT9FQ%2Bh8xJYC7WY6L5d9ipNKLVm7NEXW6m7fUQIjHP1tLYTGHmBjd5d1N4QiAII1%2BwXBYhgDGgtbw6OQMutzijDePZhxVPuIsdnJz%2FezgD2qsi7rrcY1W6K5Cw4cZ5dE3abLYsYSqB4%2FTCQutiWc%2BmZ4dO2bpGJvF1buWJ12iXQcOqUZomjg2AS7OaRPLfRZbPMJZy2acfCREws%2FJ3iLbsbQr61p68dTgFCC2pHNfedzAnbNZaqefv%2BxDUWnRRUWYQa%2Bv9TW7mptaqHi4w6VXSdnenYxIAu4cRRwOuQdladNdbox4ZLYXy59TGYg3CJyQEp21dwWbTIE1Q6d8EdtvbLCpr9nxmj1cpdcNJYMnVqiqCJst1gGFJI87D%2Ffg%2BvQK7A33ImQUpF52pouJnZzCQ4cvCBjqkASGZiBgrsdcNfw3ADaZBw5g2aQ0nYiIypP4uFJkxrWI1gBpnvYxOz9CtyekaekrFx0%2BeoVBEyyopBiKIWr0vs6kV7nV8SPmyaFgmL0AuxDd7WCaAVY4QdvdA2sqGbZHI84GCWTlmoQkU7jvXEUEhuh931Zc%2BUlOX0CIiDmuK0aEeT7HUtCWRIA88jjwld5SwP76DS%2Borg2P8nJr%2BHRO67lTmoqCR&X-Amz-Signature=4bcaf58824dda2a63e4b3904363a5d12c13e5e2b0bf467b002d8f65b6c27eac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJTMI3F%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiMuKhk%2FnE0uAaBtqM%2BIKsItyJs0rQFaz%2BmdrhthBrOgIhAOHoOtsRYO%2BoPZZP5d7yWU5lCC0BllXhnH7HTwcL9k%2FXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1mM4WNspjoU8lO6Eq3ANgl5JixfFJwVdiT%2FdHxzDLzU7pXbv7V282DfHRXtIMYoFMEogsDCn8aNKZOYhg3jJD118xIj3p335TJWfq6nT3ZugtmYcw%2FM%2FHGF76hCwMWyt5ZsZhZ4ac3H90Uu2In8PgT2dNokJLcOdP8A%2FMB1Q9DWPQmCTnBofnfJ9nGxrTiJFkV55znBpVN7zl64TMTtDSCd4nbNoHkwSomzbZSS1jfHsYwsxjaYNf3Pwwtd%2FT9FQ%2Bh8xJYC7WY6L5d9ipNKLVm7NEXW6m7fUQIjHP1tLYTGHmBjd5d1N4QiAII1%2BwXBYhgDGgtbw6OQMutzijDePZhxVPuIsdnJz%2FezgD2qsi7rrcY1W6K5Cw4cZ5dE3abLYsYSqB4%2FTCQutiWc%2BmZ4dO2bpGJvF1buWJ12iXQcOqUZomjg2AS7OaRPLfRZbPMJZy2acfCREws%2FJ3iLbsbQr61p68dTgFCC2pHNfedzAnbNZaqefv%2BxDUWnRRUWYQa%2Bv9TW7mptaqHi4w6VXSdnenYxIAu4cRRwOuQdladNdbox4ZLYXy59TGYg3CJyQEp21dwWbTIE1Q6d8EdtvbLCpr9nxmj1cpdcNJYMnVqiqCJst1gGFJI87D%2Ffg%2BvQK7A33ImQUpF52pouJnZzCQ4cvCBjqkASGZiBgrsdcNfw3ADaZBw5g2aQ0nYiIypP4uFJkxrWI1gBpnvYxOz9CtyekaekrFx0%2BeoVBEyyopBiKIWr0vs6kV7nV8SPmyaFgmL0AuxDd7WCaAVY4QdvdA2sqGbZHI84GCWTlmoQkU7jvXEUEhuh931Zc%2BUlOX0CIiDmuK0aEeT7HUtCWRIA88jjwld5SwP76DS%2Borg2P8nJr%2BHRO67lTmoqCR&X-Amz-Signature=70381d850dd10ed95e289f813497afc5dfb0e2f5debe1dde33a27d7af8edcd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
