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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3STXNZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDBVA2vdZYqDvpt0%2FfIuuvaGwvcLMko6vorrUxh3ui34QIgLF5v62Dsv%2FI5yPFG87N9AXS6%2BT2VSFRPtrNPezR3OaEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDod6Ka6FJyTWYBD9SrcA%2BLeccAxC4GNHEVRkhmcBj9j%2FoxeY8L52NcB4ra%2BqgUOvwhn2%2BTpNxpFR83RZO3uTIe0527TogLLxj7c3KTcNHbvESUCHXJm%2FmC0ybCYL1VHz9Ci7xXtQQFF%2FTpl4SNSG1DlLiZtmem6SB004DfgzCRtYc4fruK2hGhthrPvd5z0Wdo6h1Q61DNPnQOwn12A0Murv%2FOTEWDp9H0a4ylbpzDJsHS4eQh41Ex1GixWZbKMh1z4a3B%2FXFw0BMVgjtnA%2Fc%2BsooKr6740PB0v1qboeYqz5IZMKh5OSe17mKk9xi6J%2Foi9DLiWOr5B8UoJXTPnB4Jn1HWRHZnKSjCTBiQNgvOP4TA%2BoystsfsYC69mp6smZixfBAdUqHG%2Bru1X%2FD1dunX9g3PW1f%2BUjKeei58xpE%2BoxxRdSOu4ukZiBIqSZBzMk0UuMBQRUAsU708ErHN3f6tceZfVbuxyG0Vdh%2FilCSKMeOP6IZ2lsjTob0e3W7VSs%2BOfFmsucV4lEmynhZYSlOyYYZXBiXt8rlHJufkzVv0gJarTPm6yMGg%2FNwIcSQC%2FLBc0mVxw1rYbOWXfUOUySExoidLYL8rJ91ICjhcjcdip2Vfj3c5lTrHjcr2TsdwRmnr26OuvTE4sW%2BWPMIqugsIGOqUBS7smLF8sh7Orh98C%2BuiAU4JoUOYPM%2BWh22k6ygV%2BDNoHx2uA%2BtItby9tRpO7G%2B%2B9gOKQexozbdiWUZUhD%2BiIjzS%2BbhsjC9pV%2FTI8gdswe77T2cjWmMDZ9q24VJUCGN2JNHm8LJZjWluMk8%2BRo6LIiXlqaSttnBNMBOkklH3byEWjU9hK0mHjocUL9bX9m41VNaiy5ZBM2JwrKFDBQ8XqqhI0MpWq&X-Amz-Signature=54700bf444cfa6369c074920b558be8a843704a490edea7f7181e9cb0c6cbed8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U3STXNZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDBVA2vdZYqDvpt0%2FfIuuvaGwvcLMko6vorrUxh3ui34QIgLF5v62Dsv%2FI5yPFG87N9AXS6%2BT2VSFRPtrNPezR3OaEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDDod6Ka6FJyTWYBD9SrcA%2BLeccAxC4GNHEVRkhmcBj9j%2FoxeY8L52NcB4ra%2BqgUOvwhn2%2BTpNxpFR83RZO3uTIe0527TogLLxj7c3KTcNHbvESUCHXJm%2FmC0ybCYL1VHz9Ci7xXtQQFF%2FTpl4SNSG1DlLiZtmem6SB004DfgzCRtYc4fruK2hGhthrPvd5z0Wdo6h1Q61DNPnQOwn12A0Murv%2FOTEWDp9H0a4ylbpzDJsHS4eQh41Ex1GixWZbKMh1z4a3B%2FXFw0BMVgjtnA%2Fc%2BsooKr6740PB0v1qboeYqz5IZMKh5OSe17mKk9xi6J%2Foi9DLiWOr5B8UoJXTPnB4Jn1HWRHZnKSjCTBiQNgvOP4TA%2BoystsfsYC69mp6smZixfBAdUqHG%2Bru1X%2FD1dunX9g3PW1f%2BUjKeei58xpE%2BoxxRdSOu4ukZiBIqSZBzMk0UuMBQRUAsU708ErHN3f6tceZfVbuxyG0Vdh%2FilCSKMeOP6IZ2lsjTob0e3W7VSs%2BOfFmsucV4lEmynhZYSlOyYYZXBiXt8rlHJufkzVv0gJarTPm6yMGg%2FNwIcSQC%2FLBc0mVxw1rYbOWXfUOUySExoidLYL8rJ91ICjhcjcdip2Vfj3c5lTrHjcr2TsdwRmnr26OuvTE4sW%2BWPMIqugsIGOqUBS7smLF8sh7Orh98C%2BuiAU4JoUOYPM%2BWh22k6ygV%2BDNoHx2uA%2BtItby9tRpO7G%2B%2B9gOKQexozbdiWUZUhD%2BiIjzS%2BbhsjC9pV%2FTI8gdswe77T2cjWmMDZ9q24VJUCGN2JNHm8LJZjWluMk8%2BRo6LIiXlqaSttnBNMBOkklH3byEWjU9hK0mHjocUL9bX9m41VNaiy5ZBM2JwrKFDBQ8XqqhI0MpWq&X-Amz-Signature=76591d8460f54fcc39c05f472141681c5e773a9a0e93bced60b688446d7b63ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
