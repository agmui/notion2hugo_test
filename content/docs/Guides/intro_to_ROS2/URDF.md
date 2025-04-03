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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644XD5CQB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMtgZCKkGoQHBYCKQVa2ISfX7SJ9NzVoVkta1WeJ5a0wIhAIKziDRivWEeRADmYK3VEU9CMu6Xu3pIQ5rmTJ5UGeD0KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdoNao27NuYmQ8M9gq3AORLFdh3HzVHmGWC10rycelG1aTMw0Lyh7fmXp0Etn2Cjp8Gmc3Z4I0OJzDN25TdjBvOkEtInoYYMTB%2FXe0klYuVT3NRknRjxHq8k43dLZlc4sDv%2FVrpCuwTInooLAQa2tFW4dKd%2BCjc9uWMwJaHlIjTFdJNYWoJyVBedDFflv83zQKkKAngvMpyqESp0oIgvtrGckqwjo8hkP4mbDNlTZ%2B5%2F12n0pFUl0GVUYy%2FV9dGv%2FvZRbAAzr%2FBBG0k2DwDum%2Fht8Xrw3htkmO%2B99bEngIOSY6yWaPmDaXk2KkhRFHEv3I%2FbtZWV0St1Y64rkdqcJvs1MlFCiLzRmjBNuVoyJPAuTu6u3Pi%2FM8R19qZkIg5kEC%2F6tixYxsPGZ3l9ybaEytTJCa8DzmIk4isSfQ%2FmvpooMnnhYzTeQnvuRv9FbOQuJZ4JWfu1JM%2FtFR0zSMc9jh%2BLpiNdQBzf8h6Ek3eqXw74mpswLfAFBt7EWj%2BMRH4S3jWFgdXO0Vptvj4Xg4eRp0g2AdD%2BNdKXh6gTeRMKkJn7bEYnQCl09Bdw%2FetnDrRSxYnEWy0fPHEdu3j1BspoDVPxhUQ0%2F0bAS7EgHJOyzoLWNC%2FdUxaVkMX1kygBN5WqtIt4tkCCmanD5%2F6TDUz7q%2FBjqkAdNMDZ3ts%2FTRBtAY5NXfeSif6gE%2FQjsJZPqeUrcxGuyTPZ9BnW8YprpN3zb%2FssdYTweTWWOLoDon8QIfKKQRdeKYrM8Ypbs71ctNjjtySoYt9RnocnxBlP29uG9njK4ssZnmwinvxz8ghSYBNfR7lc4V8yu%2F6ZZoDEpiEs%2Fj12PEggtac%2BghPH%2BtAQRSqeklqeBzyCY3pErX%2FN4eQKvV%2Fvb58KbA&X-Amz-Signature=7f8ccabb9d50a1b7ebe470668967038f2d70dea5929129c4869d168ea849e404&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644XD5CQB%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMtgZCKkGoQHBYCKQVa2ISfX7SJ9NzVoVkta1WeJ5a0wIhAIKziDRivWEeRADmYK3VEU9CMu6Xu3pIQ5rmTJ5UGeD0KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdoNao27NuYmQ8M9gq3AORLFdh3HzVHmGWC10rycelG1aTMw0Lyh7fmXp0Etn2Cjp8Gmc3Z4I0OJzDN25TdjBvOkEtInoYYMTB%2FXe0klYuVT3NRknRjxHq8k43dLZlc4sDv%2FVrpCuwTInooLAQa2tFW4dKd%2BCjc9uWMwJaHlIjTFdJNYWoJyVBedDFflv83zQKkKAngvMpyqESp0oIgvtrGckqwjo8hkP4mbDNlTZ%2B5%2F12n0pFUl0GVUYy%2FV9dGv%2FvZRbAAzr%2FBBG0k2DwDum%2Fht8Xrw3htkmO%2B99bEngIOSY6yWaPmDaXk2KkhRFHEv3I%2FbtZWV0St1Y64rkdqcJvs1MlFCiLzRmjBNuVoyJPAuTu6u3Pi%2FM8R19qZkIg5kEC%2F6tixYxsPGZ3l9ybaEytTJCa8DzmIk4isSfQ%2FmvpooMnnhYzTeQnvuRv9FbOQuJZ4JWfu1JM%2FtFR0zSMc9jh%2BLpiNdQBzf8h6Ek3eqXw74mpswLfAFBt7EWj%2BMRH4S3jWFgdXO0Vptvj4Xg4eRp0g2AdD%2BNdKXh6gTeRMKkJn7bEYnQCl09Bdw%2FetnDrRSxYnEWy0fPHEdu3j1BspoDVPxhUQ0%2F0bAS7EgHJOyzoLWNC%2FdUxaVkMX1kygBN5WqtIt4tkCCmanD5%2F6TDUz7q%2FBjqkAdNMDZ3ts%2FTRBtAY5NXfeSif6gE%2FQjsJZPqeUrcxGuyTPZ9BnW8YprpN3zb%2FssdYTweTWWOLoDon8QIfKKQRdeKYrM8Ypbs71ctNjjtySoYt9RnocnxBlP29uG9njK4ssZnmwinvxz8ghSYBNfR7lc4V8yu%2F6ZZoDEpiEs%2Fj12PEggtac%2BghPH%2BtAQRSqeklqeBzyCY3pErX%2FN4eQKvV%2Fvb58KbA&X-Amz-Signature=dcf5cd14f39608860562f21a038ea98a86599e058a09541d7dcf4bb77e99846d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
