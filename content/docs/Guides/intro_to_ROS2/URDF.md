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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP45HJL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB2R1Sl%2FpJzilGd3ouGdwv0m1pmIQFsuw%2Fis3FpXKOp5AiEAtciJkOp73D7V1xNiNB%2B3sa1s3mFl7hfFR91GkDVAjO0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi7TDgWciDrmTYpHSrcAyKXp1sTLGhZgTIAuNerc6Yjynr6cvbg8NDmrBxAk%2Fb%2FENC2bhkrsyCQKziTZaZ%2BaQKFQKHZQH8elPdNGs7XOAbx4%2FVe1crBviqsSjqwDUY%2FD5%2BlCbZxcwDFTaQMKa%2FmvqPxSQjKrAN%2Bcx1VHGklQ1VqBd1j09Ndo3%2FbQ17hSW6JG6vzNStGwdaW%2FuFTF5iHma2RsALg%2F9CupLQul4Tw46cAt9FgkiXbILbz9qv1Qbcl1BTK%2FXkMLReyeTFGpgUogH4bnY7MwygXJlOw5HjrvYEXR5G6JwfNOnAqxM493kEkdYsWXAlwy474TKH4UMwusL14phlPWbuXNEo6biBxmc1GmaxuvLHv%2BtrmyglqeNmEf6ie5CQJ6SwUhOMh583PESP0OFDlmFLEtUfnTAm5Lt5IpDLgpN4CgNcv7bwGIOWMg5JTcqBpldpXe44cjQ02fnxAa8UPXY9j%2Bwf7wg3xT0Lnb0LAZuf1k3O3nukV7c3ZKDhs1h%2FrkyD2lCLJrMRe8XlTz%2BEgQS509A9NA%2F5fsgHA12s6kUCoG%2FXS621nErR7J3%2FBh4iqt0Uvx6JKg%2FtSuDxGj5XspS%2Fze777Ag61kGbugd4Vn%2Fn%2BovJmatgJfExJrVd3Gsr7HpO%2BphibMPzajsEGOqUBKpW9OYURt%2BRb5ivBEz3Eb6UJhnNCL418Qo6hWD4lmxawRAabyC6EUBL2%2BkxbZ6YmzwW10hpS60YxZdNYqYUY4RKxLhh9DsMbdnmbJbulYlMxzIC6u0HH%2BElxQJ2vL9e6%2F9miZ9d89r8BHzeuOHElLQszfPeGgjO4a5Ew2cKfmCKqpf9VczgNhACjDIjbO0%2Fd%2B4UUkEmv58bavR3lBWgPJkChDihl&X-Amz-Signature=a7be4a24d539288ba43d97403f68e1d69cddc1ea00e7b84c306eb5564841face&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP45HJL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIB2R1Sl%2FpJzilGd3ouGdwv0m1pmIQFsuw%2Fis3FpXKOp5AiEAtciJkOp73D7V1xNiNB%2B3sa1s3mFl7hfFR91GkDVAjO0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOi7TDgWciDrmTYpHSrcAyKXp1sTLGhZgTIAuNerc6Yjynr6cvbg8NDmrBxAk%2Fb%2FENC2bhkrsyCQKziTZaZ%2BaQKFQKHZQH8elPdNGs7XOAbx4%2FVe1crBviqsSjqwDUY%2FD5%2BlCbZxcwDFTaQMKa%2FmvqPxSQjKrAN%2Bcx1VHGklQ1VqBd1j09Ndo3%2FbQ17hSW6JG6vzNStGwdaW%2FuFTF5iHma2RsALg%2F9CupLQul4Tw46cAt9FgkiXbILbz9qv1Qbcl1BTK%2FXkMLReyeTFGpgUogH4bnY7MwygXJlOw5HjrvYEXR5G6JwfNOnAqxM493kEkdYsWXAlwy474TKH4UMwusL14phlPWbuXNEo6biBxmc1GmaxuvLHv%2BtrmyglqeNmEf6ie5CQJ6SwUhOMh583PESP0OFDlmFLEtUfnTAm5Lt5IpDLgpN4CgNcv7bwGIOWMg5JTcqBpldpXe44cjQ02fnxAa8UPXY9j%2Bwf7wg3xT0Lnb0LAZuf1k3O3nukV7c3ZKDhs1h%2FrkyD2lCLJrMRe8XlTz%2BEgQS509A9NA%2F5fsgHA12s6kUCoG%2FXS621nErR7J3%2FBh4iqt0Uvx6JKg%2FtSuDxGj5XspS%2Fze777Ag61kGbugd4Vn%2Fn%2BovJmatgJfExJrVd3Gsr7HpO%2BphibMPzajsEGOqUBKpW9OYURt%2BRb5ivBEz3Eb6UJhnNCL418Qo6hWD4lmxawRAabyC6EUBL2%2BkxbZ6YmzwW10hpS60YxZdNYqYUY4RKxLhh9DsMbdnmbJbulYlMxzIC6u0HH%2BElxQJ2vL9e6%2F9miZ9d89r8BHzeuOHElLQszfPeGgjO4a5Ew2cKfmCKqpf9VczgNhACjDIjbO0%2Fd%2B4UUkEmv58bavR3lBWgPJkChDihl&X-Amz-Signature=22c47083800b2d60c9f6f94ce5bd0abd44929f7390383a6aac2fcbfa77677830&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
