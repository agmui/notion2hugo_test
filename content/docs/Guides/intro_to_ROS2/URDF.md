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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXAEO3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr772fPslMKRQdHDifZzDpWlGfidXd8CYQ3%2Bc%2FjLhmZAiEAnRPURrCEymeaMO8Bw5ZD34Z81N8YoQ5C9UPAe35hlN4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDERF1MJ3BnUGEJIdhyrcAyqd2%2FIRSf52sIw%2FH7gN9SQQ5gDGurSlRr0OdhuZUVD4aZnxwk3eywirjx%2FejP72g%2BIsh1az7Xjjzo8eSlSLMFGfeG5x5NCAXdeKFex%2Bjn0UmtKaVn7vPkxFEI1Rwd3wpnTrFmQ00Btjtw5FiuldbWTml17P%2F0IqP8puMZztEA%2BIci0iO1GcuLCbT08OGVfKXbsOXaFv%2BDQg3dA33Wbb1zHTwQd4wZhzouLl2StX4C8tX323CArU0M1TXz7kIBS45%2FTPNJXJP6umkx06FAMUbEcWpeNZonwUbeKl3dmh5Qv1CmVGFVSQ%2BZSLSIteenqgn%2BHrocsumTtVAZ7vOIcKrYN89kLz91bMA2HvgyQq63mUDcxMAnCcReIlx5AZ0xNrj9fdJqCCcjzTsahjEj7vPDCrbT7c2NArEG%2B37SlWFYYTYz0sIkEl%2BTRSxfdX5TpRIudukq3yLEukfJe7PL%2F59II%2By97EG5ste1BvEWHF0HL8jkEfu30cyjR7SF%2Ba1CM%2BaR0yQ2U7CaVSRXHvRFhGDatyfBADMe%2BOW2K0kdw9EJQo8e%2F0cLHQxXsnEQBKAMS9Rxc7wZb72dIDrs1SADwFkdouTcYyvv1IDAFzBQYk43nRa4IDi%2Bpq7rU4D2geMKzIxb8GOqUBY6Arsx5xuuk2NlnLShunHhT7J5Je2qCSgXQKZNuQYc0oRuEh1oHHjd21mKA8W2qjOh41Ai0Bnxn5alEMOx34fv9OZVrkhUTvIWkolteGjOe7y04kcua3rTV7TaPuUrWZTmtElM5BdKqtDZXPgaEdRowL4PIaH3ahKw358G7R6SCkJ1QSsxOCWGi2aUR9GWbTCOl%2F1M%2FsKe%2FVPgYPuoLZ9Lsx0V2u&X-Amz-Signature=e4475aeab8a58d83e376006a6404f45a6909b4c84f9b041e9367e0d384e191ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZXAEO3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHr772fPslMKRQdHDifZzDpWlGfidXd8CYQ3%2Bc%2FjLhmZAiEAnRPURrCEymeaMO8Bw5ZD34Z81N8YoQ5C9UPAe35hlN4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDERF1MJ3BnUGEJIdhyrcAyqd2%2FIRSf52sIw%2FH7gN9SQQ5gDGurSlRr0OdhuZUVD4aZnxwk3eywirjx%2FejP72g%2BIsh1az7Xjjzo8eSlSLMFGfeG5x5NCAXdeKFex%2Bjn0UmtKaVn7vPkxFEI1Rwd3wpnTrFmQ00Btjtw5FiuldbWTml17P%2F0IqP8puMZztEA%2BIci0iO1GcuLCbT08OGVfKXbsOXaFv%2BDQg3dA33Wbb1zHTwQd4wZhzouLl2StX4C8tX323CArU0M1TXz7kIBS45%2FTPNJXJP6umkx06FAMUbEcWpeNZonwUbeKl3dmh5Qv1CmVGFVSQ%2BZSLSIteenqgn%2BHrocsumTtVAZ7vOIcKrYN89kLz91bMA2HvgyQq63mUDcxMAnCcReIlx5AZ0xNrj9fdJqCCcjzTsahjEj7vPDCrbT7c2NArEG%2B37SlWFYYTYz0sIkEl%2BTRSxfdX5TpRIudukq3yLEukfJe7PL%2F59II%2By97EG5ste1BvEWHF0HL8jkEfu30cyjR7SF%2Ba1CM%2BaR0yQ2U7CaVSRXHvRFhGDatyfBADMe%2BOW2K0kdw9EJQo8e%2F0cLHQxXsnEQBKAMS9Rxc7wZb72dIDrs1SADwFkdouTcYyvv1IDAFzBQYk43nRa4IDi%2Bpq7rU4D2geMKzIxb8GOqUBY6Arsx5xuuk2NlnLShunHhT7J5Je2qCSgXQKZNuQYc0oRuEh1oHHjd21mKA8W2qjOh41Ai0Bnxn5alEMOx34fv9OZVrkhUTvIWkolteGjOe7y04kcua3rTV7TaPuUrWZTmtElM5BdKqtDZXPgaEdRowL4PIaH3ahKw358G7R6SCkJ1QSsxOCWGi2aUR9GWbTCOl%2F1M%2FsKe%2FVPgYPuoLZ9Lsx0V2u&X-Amz-Signature=13bd7cdf448b807fcc48702ecd2c6ddb33cc5f1c1c17149bb3bbaeccd4d644bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
