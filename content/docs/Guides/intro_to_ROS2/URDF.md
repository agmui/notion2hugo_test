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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6GUTRR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC%2B11i5upwRIISNjs1qVYpoWPcGY1BNSJYOR%2FGLKu%2FA0wIhAJCOR7ybluaxt%2BAVYe4JDOYxw9jrsgwmGJV3ecZDkGu1Kv8DCCgQABoMNjM3NDIzMTgzODA1IgwfBBIfovLEsKISorMq3APxedx4Tc9z8Ss0uHM8kjKK9UI1VQNd74%2BekQG0To3iu8eTxnZMMAikdJVgCKVgOUpM6J8uFDLRLlWlcVQyYPi5tuEYgB9%2BrVsGGKBp51dcEa1c9Pwev31P%2FLD%2Bm2ltKL%2BeQtl3ARKFpIXL0JFckh4TYbIFglEKfkSBThFsVAzkg%2FkqSm5XViRwtXCG8wvd%2FOIUbw7ylgNu2VXVyW0JML6i15miJEEdJC8lC3cezW%2FITpYBvZsIVA%2BSz3Mu3tdV0a6E3U71%2FSPiE5DIpROJP71fZl1s2mbxlX387VZDDSjTYAYJcqpcPDFi%2BKjOmxvmULJKac8RHxXa94oiM%2Bp0JTWO6AUgjuhd7WoCv%2Bm0wMtyJvskFammV5KFJqt0oszFWTH%2FA5wTNA%2FeGDGMlh0JeRsfOlnmEJClNhoFG7h%2FJm9x9EkSD3wcz6tVARmOaUqTprYqo43lbU3SP87Nq20eRv5Uyl0IG8S4RJUHCKmq%2Fi2s10%2Fg092dHcZFAMFfYLERWo0pT4NqnNw%2B%2BZRzldX9MvHf0GdBACoeCytybv4pdrJtgFeXaQfPAr5O7kFz60zGVUEFr9DbLpSQsfB5lvtWjG4exqCB8LcS2FLSWGFjzJ%2F5QqPXuap0aVKgH%2BLU2TCFvLTCBjqkARpPFof6CAfAgn%2BaRuUxjLIDvB4agjU2kz%2FfRW9EyTC4ifmrgOtXhYT4PzLtEEM8QuYas35i200TMTlkxy9HXvIyoYG87A%2BPvKYl3hQNvzjlFJUDo9y1mb11%2BPgC6Byi3xMsOnNjhCi08wlUqhMDnl%2BugPqfl3FVgyB%2FQHzvB%2BRFBu3A7N%2FEIjmNosGStcVeYHGFJ2y6FtrkzMFs6DUFq%2BEeI9Ha&X-Amz-Signature=28429c103f793569bfd3fb450d8fabf9768db1c30adb54b74a8ac967612f781f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6GUTRR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC%2B11i5upwRIISNjs1qVYpoWPcGY1BNSJYOR%2FGLKu%2FA0wIhAJCOR7ybluaxt%2BAVYe4JDOYxw9jrsgwmGJV3ecZDkGu1Kv8DCCgQABoMNjM3NDIzMTgzODA1IgwfBBIfovLEsKISorMq3APxedx4Tc9z8Ss0uHM8kjKK9UI1VQNd74%2BekQG0To3iu8eTxnZMMAikdJVgCKVgOUpM6J8uFDLRLlWlcVQyYPi5tuEYgB9%2BrVsGGKBp51dcEa1c9Pwev31P%2FLD%2Bm2ltKL%2BeQtl3ARKFpIXL0JFckh4TYbIFglEKfkSBThFsVAzkg%2FkqSm5XViRwtXCG8wvd%2FOIUbw7ylgNu2VXVyW0JML6i15miJEEdJC8lC3cezW%2FITpYBvZsIVA%2BSz3Mu3tdV0a6E3U71%2FSPiE5DIpROJP71fZl1s2mbxlX387VZDDSjTYAYJcqpcPDFi%2BKjOmxvmULJKac8RHxXa94oiM%2Bp0JTWO6AUgjuhd7WoCv%2Bm0wMtyJvskFammV5KFJqt0oszFWTH%2FA5wTNA%2FeGDGMlh0JeRsfOlnmEJClNhoFG7h%2FJm9x9EkSD3wcz6tVARmOaUqTprYqo43lbU3SP87Nq20eRv5Uyl0IG8S4RJUHCKmq%2Fi2s10%2Fg092dHcZFAMFfYLERWo0pT4NqnNw%2B%2BZRzldX9MvHf0GdBACoeCytybv4pdrJtgFeXaQfPAr5O7kFz60zGVUEFr9DbLpSQsfB5lvtWjG4exqCB8LcS2FLSWGFjzJ%2F5QqPXuap0aVKgH%2BLU2TCFvLTCBjqkARpPFof6CAfAgn%2BaRuUxjLIDvB4agjU2kz%2FfRW9EyTC4ifmrgOtXhYT4PzLtEEM8QuYas35i200TMTlkxy9HXvIyoYG87A%2BPvKYl3hQNvzjlFJUDo9y1mb11%2BPgC6Byi3xMsOnNjhCi08wlUqhMDnl%2BugPqfl3FVgyB%2FQHzvB%2BRFBu3A7N%2FEIjmNosGStcVeYHGFJ2y6FtrkzMFs6DUFq%2BEeI9Ha&X-Amz-Signature=62d467ddec809660e8ab2fc76c53a21e477caf6129277a443fa58f08857fe39a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
