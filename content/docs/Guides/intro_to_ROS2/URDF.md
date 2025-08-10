---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAUQFDY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2F6VpWnWJOLc3JuHOa%2F4hbfb749ocLyjH8I%2FIDcGOBAiBGjev2YLsSgxinXpjMczh4u9b0rsGi3ei8diBtRjZ6mCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWmWZYrvIvDj5MgkKtwDwb%2F3Dpr1qfG%2Bo9%2BPk2C6vO9z7UBT1rJdqCjlFrnl%2BWi7hvZlcNnX1oCqElsWU7lT2VuqjdiM1c%2FHvD1Svcm91c9G0I%2B0ZqQ8HsAM3ygPvo7tjPlclW8JN2enPJY11XJ%2Fpn5CSF8MwrQFzh9xfWdwChVAu6mlRTJbmeMMAaoOm9cW6eXyhdDMlENzyBS7lOTqvSHjKjmbN8kGYaQQrZmce6vQg%2Fh9t%2FOLjFs6eJB0U6opa5ZrMgR2oqdJGBGAHaCVli3hvI3COC230WKXb5xnte4wcJjUUjmessviAR4eEEmF16M1eJ1FbXdMjXmhrCSgwpAE6iERYiZL7lhFFAqvfzRn%2FweCCiKbyS91d30yCFCz8akKtOVHu8nGFpw0XtZtupjbDktrJD4xsfvae60LU6eNMOTGMFzAC7Wue7xqw87ScfypMi1R4zA3Cch8FcjzsW6D92oIdS7e8S%2BLnCmfggM61neLgCZWYkoNs61fi7IsokwOJKH7AFr7BXh9uRFnhTa4xninN%2BQ32hf6vx3%2FZ7AM8RYBcfa3v4MtVPWOMb6QLSQf4EWzwOPD0%2F2RHXXNGWEgOs3lAwGRB7J21mE4SVxMgL%2B4KjR76uypadEBaj08mR%2BrqmlEyN0664Qwn7rjxAY6pgHjPQ0coC1KIH%2FhUgm721L7WbYRV85oJI7P8yp9IoHe3OTieV%2BiG0BRfw%2BWdyal9BGgTX%2BQuMcZX%2BKhhRPo9%2BUY%2BSGL3gqjHe0Z42OZ%2B5CzGKtrqTuA4dpAohyZ%2Bn%2B69t4qrLhsa1EKfTn0mu6r8tSWQEBm46WbNIqHsV8vgTxD2OpyqrHroRXNB8Lgvb2%2BRYsHrnKH7wZISNqBrVWJgA6lQNCdwCv3&X-Amz-Signature=20aa5c94bab907dca30d7a00fb6aaea09578dd50a96ed69bb0b5b0a601442a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAUQFDY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6%2F6VpWnWJOLc3JuHOa%2F4hbfb749ocLyjH8I%2FIDcGOBAiBGjev2YLsSgxinXpjMczh4u9b0rsGi3ei8diBtRjZ6mCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjWmWZYrvIvDj5MgkKtwDwb%2F3Dpr1qfG%2Bo9%2BPk2C6vO9z7UBT1rJdqCjlFrnl%2BWi7hvZlcNnX1oCqElsWU7lT2VuqjdiM1c%2FHvD1Svcm91c9G0I%2B0ZqQ8HsAM3ygPvo7tjPlclW8JN2enPJY11XJ%2Fpn5CSF8MwrQFzh9xfWdwChVAu6mlRTJbmeMMAaoOm9cW6eXyhdDMlENzyBS7lOTqvSHjKjmbN8kGYaQQrZmce6vQg%2Fh9t%2FOLjFs6eJB0U6opa5ZrMgR2oqdJGBGAHaCVli3hvI3COC230WKXb5xnte4wcJjUUjmessviAR4eEEmF16M1eJ1FbXdMjXmhrCSgwpAE6iERYiZL7lhFFAqvfzRn%2FweCCiKbyS91d30yCFCz8akKtOVHu8nGFpw0XtZtupjbDktrJD4xsfvae60LU6eNMOTGMFzAC7Wue7xqw87ScfypMi1R4zA3Cch8FcjzsW6D92oIdS7e8S%2BLnCmfggM61neLgCZWYkoNs61fi7IsokwOJKH7AFr7BXh9uRFnhTa4xninN%2BQ32hf6vx3%2FZ7AM8RYBcfa3v4MtVPWOMb6QLSQf4EWzwOPD0%2F2RHXXNGWEgOs3lAwGRB7J21mE4SVxMgL%2B4KjR76uypadEBaj08mR%2BrqmlEyN0664Qwn7rjxAY6pgHjPQ0coC1KIH%2FhUgm721L7WbYRV85oJI7P8yp9IoHe3OTieV%2BiG0BRfw%2BWdyal9BGgTX%2BQuMcZX%2BKhhRPo9%2BUY%2BSGL3gqjHe0Z42OZ%2B5CzGKtrqTuA4dpAohyZ%2Bn%2B69t4qrLhsa1EKfTn0mu6r8tSWQEBm46WbNIqHsV8vgTxD2OpyqrHroRXNB8Lgvb2%2BRYsHrnKH7wZISNqBrVWJgA6lQNCdwCv3&X-Amz-Signature=25d91246eccde93b743a14eb2a550a4fb08e3c592420743c8b2ee495f5ceeb52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
