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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBZXG5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOl6%2FUnHckF1%2FSWZPq4fuyyBuowj6vqtxL1n1S3RuVfAIhAOgH22Hcaac6DSRLxzMYJcvL5wPLG51LVcs8H2vY%2FBstKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGWpEsqoYU4pfN3Mq3AOl%2FMKPtJKoOTs10%2FYR0w2mZBNq6XqBevIMQ0O1fWL93GeafXKcY2G2kGywr%2FMoZwVb1jM8ldjvrp41IC3jLPtpUL1KoV4%2B3%2FZdM7OI%2Bz8Ysrv4ddBLY9IxaAJdBKLuLMIPLTg89mN4EIZhmRUJnGe1QJKLlHZxcJ6rQJ8s8FKRW3hIjBb794KRMQadvk1on%2FsASRKzG1riENOy%2BXR76aVXJbPFWyOR%2FNtv5%2BDJ6NUsKL6JPIF%2BQ6wZ8qSc%2BwHbVJz%2BfdkG1Z%2FHB4zlbJOAowPfN5rxCqPLD1kVz2UNG0BIVTiBtg0Rmmqt0EV53wQRwhxJ0o0M0Dsk1HXyMxS3iJ6NlUTmVtrUfnGWQCvG2BWqzzdAYFl%2BbxBwoCwIuA0g8UKPO137ki0C49kqc5I8VQfvgW58Bxx55zhaaE8IvBrTQx%2FFnPW%2Bvq1U8WZFPqHPBXGW9x%2FznsMVzti73%2FqsNxUAfBRcfuBS3wbGD1y%2BagyYaoHcMYbbxBYqPwW1nYT5vKaY%2BiJUquls%2BX7Ng2PcJ%2FAgRqIBnDfPDbeK%2FFKsUBX%2FmJU0RoeoqI8L9O3gOUxbGQI9TUYUtKZrhwNR%2FuSiFgoTPaHHbIQnG7M4LisyeXlt9DZ4USh%2FbtagqlcP9jC77%2BHEBjqkATR1eupvfXcE7KZtjHBpGy1VAVgcLLSswTie4lXZtNSkOl%2BACF5DZ1Qx1Io4r3VyPl89TPDPQKaC0y1KI%2F8REi3zwj93IjYCew37fFhG7%2FtEPjiC%2BqJ2IdLJYLXkbMygv2XX2n%2FpB4%2F0NMhKKHkII6niktSQj7JX1XuCcw%2BnE0dbt8Cn%2Fc9rCC92MmgjfuFmPN3dAq43p2mrEC40ReHKBELS80hC&X-Amz-Signature=a71aa1e02e07ad8d89d645ca77f3c66fd9dcb115d6e3d038b8bcb1dd4425fa2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBZXG5O%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOl6%2FUnHckF1%2FSWZPq4fuyyBuowj6vqtxL1n1S3RuVfAIhAOgH22Hcaac6DSRLxzMYJcvL5wPLG51LVcs8H2vY%2FBstKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGWpEsqoYU4pfN3Mq3AOl%2FMKPtJKoOTs10%2FYR0w2mZBNq6XqBevIMQ0O1fWL93GeafXKcY2G2kGywr%2FMoZwVb1jM8ldjvrp41IC3jLPtpUL1KoV4%2B3%2FZdM7OI%2Bz8Ysrv4ddBLY9IxaAJdBKLuLMIPLTg89mN4EIZhmRUJnGe1QJKLlHZxcJ6rQJ8s8FKRW3hIjBb794KRMQadvk1on%2FsASRKzG1riENOy%2BXR76aVXJbPFWyOR%2FNtv5%2BDJ6NUsKL6JPIF%2BQ6wZ8qSc%2BwHbVJz%2BfdkG1Z%2FHB4zlbJOAowPfN5rxCqPLD1kVz2UNG0BIVTiBtg0Rmmqt0EV53wQRwhxJ0o0M0Dsk1HXyMxS3iJ6NlUTmVtrUfnGWQCvG2BWqzzdAYFl%2BbxBwoCwIuA0g8UKPO137ki0C49kqc5I8VQfvgW58Bxx55zhaaE8IvBrTQx%2FFnPW%2Bvq1U8WZFPqHPBXGW9x%2FznsMVzti73%2FqsNxUAfBRcfuBS3wbGD1y%2BagyYaoHcMYbbxBYqPwW1nYT5vKaY%2BiJUquls%2BX7Ng2PcJ%2FAgRqIBnDfPDbeK%2FFKsUBX%2FmJU0RoeoqI8L9O3gOUxbGQI9TUYUtKZrhwNR%2FuSiFgoTPaHHbIQnG7M4LisyeXlt9DZ4USh%2FbtagqlcP9jC77%2BHEBjqkATR1eupvfXcE7KZtjHBpGy1VAVgcLLSswTie4lXZtNSkOl%2BACF5DZ1Qx1Io4r3VyPl89TPDPQKaC0y1KI%2F8REi3zwj93IjYCew37fFhG7%2FtEPjiC%2BqJ2IdLJYLXkbMygv2XX2n%2FpB4%2F0NMhKKHkII6niktSQj7JX1XuCcw%2BnE0dbt8Cn%2Fc9rCC92MmgjfuFmPN3dAq43p2mrEC40ReHKBELS80hC&X-Amz-Signature=061fed98ccefa12d661e812d115064c1abd4e89b8063bd5da0fc3ad6df57bcea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
