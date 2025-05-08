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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROW7Q5Q%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7XQbRZkXw3YneM2TxprdodqZv%2BVXGZwOnNdUNoBlmQIhAPeZkRjWTWyMJuBg%2BIqyER%2BPo4zEww6KKer2KadynjY7Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwjqYcWurP7UjmayuYq3AOXl507%2B55z7HyIb23wsn3PfIphjVx3wdZMY4kp%2BfdbKcsQiLht661JnJNyJtJcXPLvtCQVvyB61SqACBTwP%2B%2BxKpFvq%2BeJpSn4DyE88H91y38waIxJsKpv0OONqbnHXHeSZ4sMetW7KYD8iG2kFn2ilWCNNODSCxJhU9NJXX7JJxHUD51nANRT6IvFAg%2BNZK0E5CudHfp23W%2F4q%2BeVWpfzux%2BWAbyoC97t58INFW47V2BrodNjPFIshOI%2FVeDVBqan1ljk4QMWafG4Ccl0xKqhDqslyOrNgtuBwlMPX1E00OqogO3VxbrDZ9Ng62EVuAzz1q6MJjVqYej4u%2Bq0TPgPTi%2BRsYD8zY2eHvgu3bJQaMKxymuSLfJv3GYGTv3DvwwmGDzD3DoGb39x5TfkJxU4zG%2Fu%2BEbxP317TtXu7n3YbcV5STmpjhdo1MzRdr9NZ5EMiFfYJRnorzaqNVGxG%2BtzqHP1wz0X1%2FJRAdKfsQFadNxqx76dA6MQ6j27WSbcvLsIFBiDUiCJrKlZSoUqg6XUbRfKHdiUIuN2zR47JNU7pRNnuXGsm97nJkm%2FY4g4JxqcpxsuEjXrT0jSRYZCDPee20T8GmkCRgyR6rZKv0YnSv5ayguLoZB%2FsAHEMDC5mfTABjqkAcpy8xRI2uDuZUDpnghitvYryQtyct1bH3JGBRpsi23pgLtR%2FygVyMsDzlZcnhdGu%2FgKEBzV9W5bGNloVAF6tpLg8bMGxY%2BVAsMOm20zdhHIUCcliwbW0kr03IRO2iDZYknKkq7ozMBZSntJPM%2FTo9EVyvRGCBkbrXP9Xscb9h%2FyL6R%2BsRdEB5UVBmVrmqDtYzcNzOSjUdkXtaHw19226zlIXncK&X-Amz-Signature=6ccbb675db980ebc3ca4648c99aaf342cec8e346a3cef384ec5955ff3627262b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROW7Q5Q%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7XQbRZkXw3YneM2TxprdodqZv%2BVXGZwOnNdUNoBlmQIhAPeZkRjWTWyMJuBg%2BIqyER%2BPo4zEww6KKer2KadynjY7Kv8DCH0QABoMNjM3NDIzMTgzODA1IgwjqYcWurP7UjmayuYq3AOXl507%2B55z7HyIb23wsn3PfIphjVx3wdZMY4kp%2BfdbKcsQiLht661JnJNyJtJcXPLvtCQVvyB61SqACBTwP%2B%2BxKpFvq%2BeJpSn4DyE88H91y38waIxJsKpv0OONqbnHXHeSZ4sMetW7KYD8iG2kFn2ilWCNNODSCxJhU9NJXX7JJxHUD51nANRT6IvFAg%2BNZK0E5CudHfp23W%2F4q%2BeVWpfzux%2BWAbyoC97t58INFW47V2BrodNjPFIshOI%2FVeDVBqan1ljk4QMWafG4Ccl0xKqhDqslyOrNgtuBwlMPX1E00OqogO3VxbrDZ9Ng62EVuAzz1q6MJjVqYej4u%2Bq0TPgPTi%2BRsYD8zY2eHvgu3bJQaMKxymuSLfJv3GYGTv3DvwwmGDzD3DoGb39x5TfkJxU4zG%2Fu%2BEbxP317TtXu7n3YbcV5STmpjhdo1MzRdr9NZ5EMiFfYJRnorzaqNVGxG%2BtzqHP1wz0X1%2FJRAdKfsQFadNxqx76dA6MQ6j27WSbcvLsIFBiDUiCJrKlZSoUqg6XUbRfKHdiUIuN2zR47JNU7pRNnuXGsm97nJkm%2FY4g4JxqcpxsuEjXrT0jSRYZCDPee20T8GmkCRgyR6rZKv0YnSv5ayguLoZB%2FsAHEMDC5mfTABjqkAcpy8xRI2uDuZUDpnghitvYryQtyct1bH3JGBRpsi23pgLtR%2FygVyMsDzlZcnhdGu%2FgKEBzV9W5bGNloVAF6tpLg8bMGxY%2BVAsMOm20zdhHIUCcliwbW0kr03IRO2iDZYknKkq7ozMBZSntJPM%2FTo9EVyvRGCBkbrXP9Xscb9h%2FyL6R%2BsRdEB5UVBmVrmqDtYzcNzOSjUdkXtaHw19226zlIXncK&X-Amz-Signature=1b7b39cecd24c8c3466e956adb4b03eeba3b63ce75d8ac4818ac628507c3077c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
