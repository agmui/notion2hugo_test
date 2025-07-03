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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AARJX6X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGahnIuNJU5AMU6ouaEZun%2FsphSLFfz2wZos3MEc3yljAiEAgD2tmXkWLsEUesP1EOXhkRJL8cGNPMNL530khiNP7X8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE9v3bpc9vF2EksQyrcAw5y5cWGmdulD%2BJHVZtpAmJn%2BV8BcSO9wLHFHldMLiAboyyGPmUraAUCcaN8zh7FJx5i%2Fxz2ozOsHF9ZS8AOnnicAQdYPiQs47Xkab8%2BANvKjDEkmIsupyIC0CM8vZWROetOInSM5fJK1hEp%2BE1CK1r6fzR8gxUbQ5JbW%2F0uBk%2FeIND3Jp1zmytoGrj4chpPSOnEVxlNZDAEAixEzX%2FOnIDF85K4mqbUB7ZcpDTFwrG5ijahHW6q5KACRrmWDk9aRrGJw8%2BliFZFtgGx1wKhiOuvzXEvh07Gg%2Fgzv0Pia%2BV4%2BxwxILh0Ud2TVD7SgYgOOyvCbnnZy1xA930VF2T572dET1IJKE876PRY6%2BKcjnZkQ%2B4RGk2ssZvzuPNy6DVFLBO6MBVgkaLgwEI0A82oeVh%2BqwgwajSkj8m0s1kD2MiXrTdPhRE3r7AlNHHdXK8EtERM21hR88v5OaWqiUfKnpq0%2BLBiDsz8c1TY2PJR4YhmtFViv%2ByNNHolfAyur0OxyXbZgTdt9Y8wucfVsyk%2BXm%2Fw3ZixpTq8dgajWNUCfbJlmx831ma7nUic0w0dUrUPqXqq7L0CQrwAxpcoO3aCwVmYDg1WQJOkF2IPVp7tFPe9Q1arYFM35xJOwy7XMJyHmMMGOqUBnftUcG6X5SqExb8%2FA%2B5WkgiBCOE9L4kw1TxqNjSlZfvVD7rzTEFeQbO1TozYAWkk2AJDw6zQL67NsT43kygKtgkSipBG4QQWUu2hfGMg%2BF0UuTRWXr96tu6Gwg2T%2Fq8JvmkTs9lEdpqf%2FjoWnWaqf9IJb%2FYDyXfdLEWXIoxEMotffm0yF%2BOeST96M9ft1EkUQGBnMlH1Kr9I2RTBoF93TvqVDVDq&X-Amz-Signature=75522d2972ff32da8da08f139c696d3e6d03fac4f570eae7649f3524c2e2f376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AARJX6X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIGahnIuNJU5AMU6ouaEZun%2FsphSLFfz2wZos3MEc3yljAiEAgD2tmXkWLsEUesP1EOXhkRJL8cGNPMNL530khiNP7X8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE9v3bpc9vF2EksQyrcAw5y5cWGmdulD%2BJHVZtpAmJn%2BV8BcSO9wLHFHldMLiAboyyGPmUraAUCcaN8zh7FJx5i%2Fxz2ozOsHF9ZS8AOnnicAQdYPiQs47Xkab8%2BANvKjDEkmIsupyIC0CM8vZWROetOInSM5fJK1hEp%2BE1CK1r6fzR8gxUbQ5JbW%2F0uBk%2FeIND3Jp1zmytoGrj4chpPSOnEVxlNZDAEAixEzX%2FOnIDF85K4mqbUB7ZcpDTFwrG5ijahHW6q5KACRrmWDk9aRrGJw8%2BliFZFtgGx1wKhiOuvzXEvh07Gg%2Fgzv0Pia%2BV4%2BxwxILh0Ud2TVD7SgYgOOyvCbnnZy1xA930VF2T572dET1IJKE876PRY6%2BKcjnZkQ%2B4RGk2ssZvzuPNy6DVFLBO6MBVgkaLgwEI0A82oeVh%2BqwgwajSkj8m0s1kD2MiXrTdPhRE3r7AlNHHdXK8EtERM21hR88v5OaWqiUfKnpq0%2BLBiDsz8c1TY2PJR4YhmtFViv%2ByNNHolfAyur0OxyXbZgTdt9Y8wucfVsyk%2BXm%2Fw3ZixpTq8dgajWNUCfbJlmx831ma7nUic0w0dUrUPqXqq7L0CQrwAxpcoO3aCwVmYDg1WQJOkF2IPVp7tFPe9Q1arYFM35xJOwy7XMJyHmMMGOqUBnftUcG6X5SqExb8%2FA%2B5WkgiBCOE9L4kw1TxqNjSlZfvVD7rzTEFeQbO1TozYAWkk2AJDw6zQL67NsT43kygKtgkSipBG4QQWUu2hfGMg%2BF0UuTRWXr96tu6Gwg2T%2Fq8JvmkTs9lEdpqf%2FjoWnWaqf9IJb%2FYDyXfdLEWXIoxEMotffm0yF%2BOeST96M9ft1EkUQGBnMlH1Kr9I2RTBoF93TvqVDVDq&X-Amz-Signature=a44d8908e9a53c73d817187699e5a378c8501b3daeb818409c45a712ec5d73ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
