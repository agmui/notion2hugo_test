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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBLAPU3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDgm73euUqDRjkOqESLIv21Cng%2BibWgGL59tB4sAqSI6wIgJjqvvmk0yFIUHKoBtV1Y%2B1iu1ibc53uaH25wk9ugI5oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGG9LVmj4FWTRmJgCrcAyScjQQYRyigecEXQlCMM0L%2B3dzloZvmp168TAQK5o17kE5QS2zr%2Fjh8srUYQzxn3E1vh9xP58fnbPosCnQUs7l%2FQXE0UvhrfyczOn5lnztQwQcbHx7RmLhMDN1B4frJVxaKp2PUMcLtUKj6YWrJs9MKPNp%2F26ec5ynDFrEbv88XYXuYwbrzC62%2BhYLe1iF0ZZ12y6KYIvtw1512SSt0nG3zyiZL4WmUwbIsEGfdOSOD4l2UmGjfp3kNhJgQbJTD5n8wtICTCMAr4QqdUQ1%2B0%2FIvwKCVCBJMn7j%2BeH%2BB5Z0Zu6uphhoBGrmtmyaBQieWI5RnHwgIJHpd0AByFls%2F%2Fk4nJBqrTi6E4pNs50hU0vzODeuXHrIUdtMUIxP%2Fkkxgy58nD%2Bs1cAdXvEedf%2FuUyrSyOY1qmzAfTock80485kCOxOeZ37s9hxcPYs2%2ByLdDfWLF9kfK8mV20Q5WXQjTc%2BiJKM5sjUSWEu2WdOAU2uDZKXzR3nysHKGbmtKhmQYUs3DdzxU8flsgDo2vbtR%2BdHCZPHsFakl8uzBKO%2BS%2FJqDgbzYzmk3qtQfi%2B16s3Vyff2%2FyG9RE45S%2FBo8I9DLKVUms8VBgy8EAxJBw5n72wpmGTyEz5L8WzqR7%2FE1%2BMODRhL4GOqUBjf%2BmUetwElHqaDsD6fSDu4UxFDbLpwkvr5HfOQ9vdAMG8h1fwQRAuK2rD9zTei9y9RplpgrouIuJ%2FxhJ8Igv0jzB87vvDcrayUA1dpd1Hj0iG8csh3rN0Rvj%2FcFBSbZW8lxqGz2RrzKq%2B32NfNkm7HCaSvT5GETwFL8COYS87jnnSvDHWQQhMUIeyZwH6QALg%2BWaGCp6IAa2lXcARVNEj37FMiyE&X-Amz-Signature=3683bd1a7f240a38f92e6c456ecb0a165db08642afb905898ccde45105d891ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBLAPU3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDgm73euUqDRjkOqESLIv21Cng%2BibWgGL59tB4sAqSI6wIgJjqvvmk0yFIUHKoBtV1Y%2B1iu1ibc53uaH25wk9ugI5oqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGG9LVmj4FWTRmJgCrcAyScjQQYRyigecEXQlCMM0L%2B3dzloZvmp168TAQK5o17kE5QS2zr%2Fjh8srUYQzxn3E1vh9xP58fnbPosCnQUs7l%2FQXE0UvhrfyczOn5lnztQwQcbHx7RmLhMDN1B4frJVxaKp2PUMcLtUKj6YWrJs9MKPNp%2F26ec5ynDFrEbv88XYXuYwbrzC62%2BhYLe1iF0ZZ12y6KYIvtw1512SSt0nG3zyiZL4WmUwbIsEGfdOSOD4l2UmGjfp3kNhJgQbJTD5n8wtICTCMAr4QqdUQ1%2B0%2FIvwKCVCBJMn7j%2BeH%2BB5Z0Zu6uphhoBGrmtmyaBQieWI5RnHwgIJHpd0AByFls%2F%2Fk4nJBqrTi6E4pNs50hU0vzODeuXHrIUdtMUIxP%2Fkkxgy58nD%2Bs1cAdXvEedf%2FuUyrSyOY1qmzAfTock80485kCOxOeZ37s9hxcPYs2%2ByLdDfWLF9kfK8mV20Q5WXQjTc%2BiJKM5sjUSWEu2WdOAU2uDZKXzR3nysHKGbmtKhmQYUs3DdzxU8flsgDo2vbtR%2BdHCZPHsFakl8uzBKO%2BS%2FJqDgbzYzmk3qtQfi%2B16s3Vyff2%2FyG9RE45S%2FBo8I9DLKVUms8VBgy8EAxJBw5n72wpmGTyEz5L8WzqR7%2FE1%2BMODRhL4GOqUBjf%2BmUetwElHqaDsD6fSDu4UxFDbLpwkvr5HfOQ9vdAMG8h1fwQRAuK2rD9zTei9y9RplpgrouIuJ%2FxhJ8Igv0jzB87vvDcrayUA1dpd1Hj0iG8csh3rN0Rvj%2FcFBSbZW8lxqGz2RrzKq%2B32NfNkm7HCaSvT5GETwFL8COYS87jnnSvDHWQQhMUIeyZwH6QALg%2BWaGCp6IAa2lXcARVNEj37FMiyE&X-Amz-Signature=0c2cbc9d882e9409f5c99f0db19d055c32def98dcee73d3a17b12bc19dc920ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
