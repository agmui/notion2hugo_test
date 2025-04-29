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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZW35NY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0teJfh2k4T%2BQcvHvXV0WEya3ed20Y9%2Bh%2FN2uW08yzXgIhANHcH59asK4BYCwAQG1h5YZS%2Bmt9v4OxET2FFiEjpmDcKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydFzkSYweNBxsD74kq3AO5M21SedJ2%2B8gm93f3RU83NPTmb04rDc0nMsE7Cq7YEDOyyzzNMoIp5GIxq61TD2LQxyNO%2FD9D03MVAu5J%2BM1AZ%2F8%2BcA0QAHY9%2Bz07RqMrzXmACd4g3p%2FUw4GSgd8xtHX15hQlih5F2XM01d71qaOUR1lXKckzTq4rmbxMuU3K9pckOEnPZpdVgJjO1dvonPdJsmaWghHSQyyP9Bxrmxik74%2FoOWRyKvnH1ZTyYgPFQrxfxmqg5Sf733CucEoYiAVWU8iELsH2zcrOe4xRX6rui7aJSEHOjS8B7GkyQNPEO%2Fp55umsmKP8i0tScOq6EIm6Ero0svwQz6QguPv6yCcXyOwATN4sV9OikFwZVAeC1dm4ul4k7T4kRCfSl6QKplSIQUUwp%2FfbIJMD0D1%2F49rWIzgINvFirIHBPXCOTLapdJwx%2FIWw9eJomxUJuUwoGm%2FxN60PxbR0svogr0IDb4rGM6QOfW6AaM7yQfJgEKRnlJMdR%2B0pQ6OLGC%2BPKIE8WPP8mCq%2BUl%2Bk8Mo0seve549AxIkjpSNTpjo%2BfYzKl52NIlkribIR8N9T77%2BeGJKu3Cs3S8Fn2KUfXQZNWFjof5jgfxxXOeotusiQ7%2BEAhP7zsIqUhM24QJIo1N9HPTDwo8PABjqkAWo%2BpsQTPjYPRBgs7ESBMhFMlKHRpXWGLB32LWvIjxIBWIb%2FIXMe6wtrS0B5KEQMOKr2gPxl2CZWcmXnjU2M0TQVIamf1cI5PkVCPrCFqjrSc0Z%2BMYoPYrL5rbJA6xvCnum34G%2FA05W%2Bw1QDkhKfaR21R9pNUwIdxJykhYJ1zMO0VeNkrMRtJSQugL4nfcd5gPHE%2Bd2l68HrQPAERVnSgp6%2F%2B6nQ&X-Amz-Signature=8b15c69bbca33b0372536a89b109b65320648119f9edb175cf283ec91a0d744d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZW35NY%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0teJfh2k4T%2BQcvHvXV0WEya3ed20Y9%2Bh%2FN2uW08yzXgIhANHcH59asK4BYCwAQG1h5YZS%2Bmt9v4OxET2FFiEjpmDcKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydFzkSYweNBxsD74kq3AO5M21SedJ2%2B8gm93f3RU83NPTmb04rDc0nMsE7Cq7YEDOyyzzNMoIp5GIxq61TD2LQxyNO%2FD9D03MVAu5J%2BM1AZ%2F8%2BcA0QAHY9%2Bz07RqMrzXmACd4g3p%2FUw4GSgd8xtHX15hQlih5F2XM01d71qaOUR1lXKckzTq4rmbxMuU3K9pckOEnPZpdVgJjO1dvonPdJsmaWghHSQyyP9Bxrmxik74%2FoOWRyKvnH1ZTyYgPFQrxfxmqg5Sf733CucEoYiAVWU8iELsH2zcrOe4xRX6rui7aJSEHOjS8B7GkyQNPEO%2Fp55umsmKP8i0tScOq6EIm6Ero0svwQz6QguPv6yCcXyOwATN4sV9OikFwZVAeC1dm4ul4k7T4kRCfSl6QKplSIQUUwp%2FfbIJMD0D1%2F49rWIzgINvFirIHBPXCOTLapdJwx%2FIWw9eJomxUJuUwoGm%2FxN60PxbR0svogr0IDb4rGM6QOfW6AaM7yQfJgEKRnlJMdR%2B0pQ6OLGC%2BPKIE8WPP8mCq%2BUl%2Bk8Mo0seve549AxIkjpSNTpjo%2BfYzKl52NIlkribIR8N9T77%2BeGJKu3Cs3S8Fn2KUfXQZNWFjof5jgfxxXOeotusiQ7%2BEAhP7zsIqUhM24QJIo1N9HPTDwo8PABjqkAWo%2BpsQTPjYPRBgs7ESBMhFMlKHRpXWGLB32LWvIjxIBWIb%2FIXMe6wtrS0B5KEQMOKr2gPxl2CZWcmXnjU2M0TQVIamf1cI5PkVCPrCFqjrSc0Z%2BMYoPYrL5rbJA6xvCnum34G%2FA05W%2Bw1QDkhKfaR21R9pNUwIdxJykhYJ1zMO0VeNkrMRtJSQugL4nfcd5gPHE%2Bd2l68HrQPAERVnSgp6%2F%2B6nQ&X-Amz-Signature=bf7780289c439840f6fb840f4bb9aa17e27d21f574ec4a22a00bcfdfe3fde85d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
