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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXRSNBN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID13MkV6qfBv2Ox%2FN1gzE76tzEu284129gGy%2BX7Pd7hjAiEAjhKjREkbzbdeWrsn%2FAP0W5VB43%2FidN4ZEnZggFHLzXkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRH%2Fz9%2Bc9mCCk42DSrcA4vJKVlnvUr7Y337XmrrvFm6U6Fk56B43rYo5xw7hxHyC5P1BfSk9ycPelC4K52Y9hghx%2FemuM14g0bUkWMWy1NOx%2Bq%2BG%2BAvCyLawSChNNAplOGMP%2F1kdxfHjI7o8QotZtzlWsydKre47BKyrSrLv37J5nJhsaLGRXaQ%2FkHz96qQS9TPGR8nrMDcMf6l2EVwr0ZUq9AZbTLsLYbuiMJfkVNnh0PjXxt1X7laPD61I3VtDK%2FgEaPGjUzY2QSdjpd1JvY4X9YbRBfT%2BadjZo8uEK4Ey0B%2FGE1EEsjXAmraiIkZl4KoKfZQg7v4DCIVUBDnlhjSRhqGY9w7uje6aT1Hq%2B1w6mBpo0n2WgXoQZy4LJ1zsZSk9t5gYOg1XZHyt0ViXwvs%2Ft9JFI84St4AF6hJrUknKS7ZarhcsCUBDRq%2Bc6ftl5%2FZ7t4%2FUt6%2FGjPDsdj4gXIE1PfcYWF3ArUSGy3rpHYr16NTBCKv7cfbFRY6jgeDgMIdXUmZpdefjmAcuF1F6kKhWG93aCbJ5Sy9sJ%2BCiY9Tn4bxEiTCb08dTJFlB0nUu0OGodHfrNlkDmdnnrdR9pGhV8LsWGcVE3fZ45HEkiYAOflQPagPsAq7sbYSZAKdk3wmbsZk6WzWspN1MLi5n8QGOqUBWhqtHidFPWNSuzMEb8ARIJy9HluDoMrEkiT3S4S5A7Y%2BD4USurT%2FirqLk%2BkZiqMHKO2eLVqswyNVgpgW9m0PSoZkBtTfJOXhO0E0rladFnw7hQ%2FgY7zDrCGLvwrIZpB94XsTP3Ws5kBOR%2BeopOQ0U164EkfKN9eM6wvyf72wVLtFtzS5SYXyq9po6CxFn8wt2PolHMksbBRDQFMSGtyDRhU2LqJm&X-Amz-Signature=642d7a553c7ec71390e0d5cc1f772014e7aa5a1b94d8e7deec569c33e5543b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXRSNBN%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID13MkV6qfBv2Ox%2FN1gzE76tzEu284129gGy%2BX7Pd7hjAiEAjhKjREkbzbdeWrsn%2FAP0W5VB43%2FidN4ZEnZggFHLzXkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRH%2Fz9%2Bc9mCCk42DSrcA4vJKVlnvUr7Y337XmrrvFm6U6Fk56B43rYo5xw7hxHyC5P1BfSk9ycPelC4K52Y9hghx%2FemuM14g0bUkWMWy1NOx%2Bq%2BG%2BAvCyLawSChNNAplOGMP%2F1kdxfHjI7o8QotZtzlWsydKre47BKyrSrLv37J5nJhsaLGRXaQ%2FkHz96qQS9TPGR8nrMDcMf6l2EVwr0ZUq9AZbTLsLYbuiMJfkVNnh0PjXxt1X7laPD61I3VtDK%2FgEaPGjUzY2QSdjpd1JvY4X9YbRBfT%2BadjZo8uEK4Ey0B%2FGE1EEsjXAmraiIkZl4KoKfZQg7v4DCIVUBDnlhjSRhqGY9w7uje6aT1Hq%2B1w6mBpo0n2WgXoQZy4LJ1zsZSk9t5gYOg1XZHyt0ViXwvs%2Ft9JFI84St4AF6hJrUknKS7ZarhcsCUBDRq%2Bc6ftl5%2FZ7t4%2FUt6%2FGjPDsdj4gXIE1PfcYWF3ArUSGy3rpHYr16NTBCKv7cfbFRY6jgeDgMIdXUmZpdefjmAcuF1F6kKhWG93aCbJ5Sy9sJ%2BCiY9Tn4bxEiTCb08dTJFlB0nUu0OGodHfrNlkDmdnnrdR9pGhV8LsWGcVE3fZ45HEkiYAOflQPagPsAq7sbYSZAKdk3wmbsZk6WzWspN1MLi5n8QGOqUBWhqtHidFPWNSuzMEb8ARIJy9HluDoMrEkiT3S4S5A7Y%2BD4USurT%2FirqLk%2BkZiqMHKO2eLVqswyNVgpgW9m0PSoZkBtTfJOXhO0E0rladFnw7hQ%2FgY7zDrCGLvwrIZpB94XsTP3Ws5kBOR%2BeopOQ0U164EkfKN9eM6wvyf72wVLtFtzS5SYXyq9po6CxFn8wt2PolHMksbBRDQFMSGtyDRhU2LqJm&X-Amz-Signature=773b8741e10363cc68c4f6b05be31212b8599e7117cb7a5d818f5b037fb333a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
