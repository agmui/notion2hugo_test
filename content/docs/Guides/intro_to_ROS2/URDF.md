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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB77X7TM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCXhIAl5Bo0ztbbaaegn9uPlrnKhS22Hi0XjuaKN9gQvAIhAMFOqkVDPQLVTdbDLzOEP6PvH6y%2BZv3G0RcGrEbTPvMvKv8DCHEQABoMNjM3NDIzMTgzODA1Igz7edurx0tcW8S1TvQq3AMaa23KafjMiNqb6o4Yt2mkn79gsHpA8p9%2Bfb6CREik7DZmU7plgrfv%2B7NBF4EUp8d0EZkH9zs6eQLCUwh9Tw4JACfe59ZDfVrP4Y7wV8t98d83QOMf%2FWbFxPBsUa7FksnThNzwCeUqynMNEVe5Pdbb1yiVHoTWIffN2YzI0GHjyatGTJbNIesxN%2F8AKB65EpBzv6%2B5Vx4vg4n0Rqp1QPvZmCn0GW4FpaBaP%2BXmzDdDZT%2FSa0YcsJomL2Cp0a76SdXhpsAqpC6oboBQxH6TXGlh2RfUys80U5UXtC8uKKZfBTLgcek6%2Bwu0A7Lv9qwPpVRtoKdBbqt9rZ3FBXqBfddDw7a2K0uaYy0GwAdccsqfLmwWsEXBEmxaR0%2BYuwxpRPeWtBdXmvqcLIKQOhkpiEbTAfSVVUQwI5NFk8GXsNnCdNeENyNkCEDljy90b375ZyDbaNEw%2BMyoA3s64cScdb1hNlaDufxCfKcrWq5KIhJK6K2V6UGiomavtrsvt8X0KTWjF4XQDxRP6nnbRaJzL7hwj1Iwi0qGNLgddkhmkL5o%2BpkTpCp04RKF0JsxUwkKkTDNwovSuLwrtnodTSNpSc9galXNOc%2F8magmaBS9KDNGUggSAkXaoe4FvG%2FrszC80su9BjqkAT8kad%2BX4AwEiMw6rDBmq8u2CvvWIUaloZXteVMuddeiUWJW5G6yWtqkI6Ksewx1u0qgDJmQSCkZcC6gKXQIA31psXyCFIa1tPmLTVX8IhZu1yGdng4L9MXDA%2FFpca8wS%2B9m7oSWXQaAY7qFcpG8LiGcYrMlJmwDsoEHmkT7GbqbAguyWfDHNJEothar%2FC0LtSuVjMhB%2FE3zFVJclSIaJB1pH66e&X-Amz-Signature=200a1f4e170375c88ccff960f6f8984a8f1caf913230c933782e458305787f24&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB77X7TM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCXhIAl5Bo0ztbbaaegn9uPlrnKhS22Hi0XjuaKN9gQvAIhAMFOqkVDPQLVTdbDLzOEP6PvH6y%2BZv3G0RcGrEbTPvMvKv8DCHEQABoMNjM3NDIzMTgzODA1Igz7edurx0tcW8S1TvQq3AMaa23KafjMiNqb6o4Yt2mkn79gsHpA8p9%2Bfb6CREik7DZmU7plgrfv%2B7NBF4EUp8d0EZkH9zs6eQLCUwh9Tw4JACfe59ZDfVrP4Y7wV8t98d83QOMf%2FWbFxPBsUa7FksnThNzwCeUqynMNEVe5Pdbb1yiVHoTWIffN2YzI0GHjyatGTJbNIesxN%2F8AKB65EpBzv6%2B5Vx4vg4n0Rqp1QPvZmCn0GW4FpaBaP%2BXmzDdDZT%2FSa0YcsJomL2Cp0a76SdXhpsAqpC6oboBQxH6TXGlh2RfUys80U5UXtC8uKKZfBTLgcek6%2Bwu0A7Lv9qwPpVRtoKdBbqt9rZ3FBXqBfddDw7a2K0uaYy0GwAdccsqfLmwWsEXBEmxaR0%2BYuwxpRPeWtBdXmvqcLIKQOhkpiEbTAfSVVUQwI5NFk8GXsNnCdNeENyNkCEDljy90b375ZyDbaNEw%2BMyoA3s64cScdb1hNlaDufxCfKcrWq5KIhJK6K2V6UGiomavtrsvt8X0KTWjF4XQDxRP6nnbRaJzL7hwj1Iwi0qGNLgddkhmkL5o%2BpkTpCp04RKF0JsxUwkKkTDNwovSuLwrtnodTSNpSc9galXNOc%2F8magmaBS9KDNGUggSAkXaoe4FvG%2FrszC80su9BjqkAT8kad%2BX4AwEiMw6rDBmq8u2CvvWIUaloZXteVMuddeiUWJW5G6yWtqkI6Ksewx1u0qgDJmQSCkZcC6gKXQIA31psXyCFIa1tPmLTVX8IhZu1yGdng4L9MXDA%2FFpca8wS%2B9m7oSWXQaAY7qFcpG8LiGcYrMlJmwDsoEHmkT7GbqbAguyWfDHNJEothar%2FC0LtSuVjMhB%2FE3zFVJclSIaJB1pH66e&X-Amz-Signature=c3afa9e386b85c9fb649e67ec8e0593e4c8c45ba0eda7c622b0baf842d19fb18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
