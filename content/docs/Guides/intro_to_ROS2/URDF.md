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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDUCYZD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPPZxWn3Y2GQAP7jzROZ08VdoLAIvI3b%2FHmfvlqwNg6AiEA6GR5KBnBpp%2ByZ6s18hAJ8sdY6eyFlxX%2FPl4UikbR02sq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKyHf4%2Fhj384Ou9dSCrcA7hQpKnWgSgRPawEH5uIBrsc%2FjrVNLer0sA9pxkUZfFWLdB4lYT5nF0BZysliZuV3zUBucI%2Bpln0Ejzy95IiNhh9Bp%2FknmidIHIQYr8mjX9I%2Fr3Pqab4yF4qay1PiZJI1mNEEbiLeeskSi66hWw9W4Qc7F%2FfI34Cb8c7dD81t2AFs7OiYf%2BPWn2LVvhUFwLXkigbucry1dZ411Lfsb5anlG%2F9TmvHuAXgKdI0n1MGetBD0Ln%2F9o8dltilqUl84WQp7jBZgK0plmjIzlExB9Ft8a4Gxudd8u20HJuDFDcTDOktKoo605cOB2eK9dkQxeyIE%2Bg7vonlcDrSrltRfnN46JDoGQqNau8PULtjEm9wz4njDlV1ouyW2d4PmFt6Wu5b07ZxL1yZQOAXBqbkM5RyKZ72kochhGgeJJfEre%2Bik4psQqt9xYTuI58r9lQVVHYjhSCgaPSgjpYaPiHPfi6LQc%2BrCRRwKm3cj%2FYdM9UVqMBGOU0nwMtoueV7PwF0U7R8%2FJ72HSEB8E%2Ff4BO2nezzOrKriXZ9gPHss%2BJcFRgIpSm5PcS2GWd%2FXQfOH99RNsNWEnIXmFXCpBpbZP0gag1l788j8rztF%2BeCugzc7L6Hg7xm5eDuIURzqa%2FDiakMIHnqMEGOqUB6BDLGLtzZ4TgQAX%2Fi8JyqpIcidsrFJ91xZyb6KAW7UrWd5M2sA%2FAasvzjnJ1YgXpwdIDokKfLLy01IaY%2FhF8JAGaHnsbUyRrffY%2BF4zsoD%2BczkEvFA7KcXMJJVbpIl5vz7NYDqbWo4wg%2BVMKt2MRN%2FmAMBhe%2B5v8zEwvUn14TeviIZYR68jMf4AaPVk4%2B4NJ4hrYY0oqTwkAaF1SeHEmnUupWWyL&X-Amz-Signature=d93ed7b62c26b5fcf115fcca4e52c9d7a9df6171be2a31b5fca1ff380b652c39&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDUCYZD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPPZxWn3Y2GQAP7jzROZ08VdoLAIvI3b%2FHmfvlqwNg6AiEA6GR5KBnBpp%2ByZ6s18hAJ8sdY6eyFlxX%2FPl4UikbR02sq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKyHf4%2Fhj384Ou9dSCrcA7hQpKnWgSgRPawEH5uIBrsc%2FjrVNLer0sA9pxkUZfFWLdB4lYT5nF0BZysliZuV3zUBucI%2Bpln0Ejzy95IiNhh9Bp%2FknmidIHIQYr8mjX9I%2Fr3Pqab4yF4qay1PiZJI1mNEEbiLeeskSi66hWw9W4Qc7F%2FfI34Cb8c7dD81t2AFs7OiYf%2BPWn2LVvhUFwLXkigbucry1dZ411Lfsb5anlG%2F9TmvHuAXgKdI0n1MGetBD0Ln%2F9o8dltilqUl84WQp7jBZgK0plmjIzlExB9Ft8a4Gxudd8u20HJuDFDcTDOktKoo605cOB2eK9dkQxeyIE%2Bg7vonlcDrSrltRfnN46JDoGQqNau8PULtjEm9wz4njDlV1ouyW2d4PmFt6Wu5b07ZxL1yZQOAXBqbkM5RyKZ72kochhGgeJJfEre%2Bik4psQqt9xYTuI58r9lQVVHYjhSCgaPSgjpYaPiHPfi6LQc%2BrCRRwKm3cj%2FYdM9UVqMBGOU0nwMtoueV7PwF0U7R8%2FJ72HSEB8E%2Ff4BO2nezzOrKriXZ9gPHss%2BJcFRgIpSm5PcS2GWd%2FXQfOH99RNsNWEnIXmFXCpBpbZP0gag1l788j8rztF%2BeCugzc7L6Hg7xm5eDuIURzqa%2FDiakMIHnqMEGOqUB6BDLGLtzZ4TgQAX%2Fi8JyqpIcidsrFJ91xZyb6KAW7UrWd5M2sA%2FAasvzjnJ1YgXpwdIDokKfLLy01IaY%2FhF8JAGaHnsbUyRrffY%2BF4zsoD%2BczkEvFA7KcXMJJVbpIl5vz7NYDqbWo4wg%2BVMKt2MRN%2FmAMBhe%2B5v8zEwvUn14TeviIZYR68jMf4AaPVk4%2B4NJ4hrYY0oqTwkAaF1SeHEmnUupWWyL&X-Amz-Signature=e14c4aaf1168c59d503f44ded9fbaf8816194912bd2a258b6d4fd187b7bba100&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
