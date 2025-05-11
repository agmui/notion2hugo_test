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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBNOXW6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD80%2Fsmx74E87FBPGr9dy%2FcMd%2BQxPxsfZu0DYHXUsI3TAIgH7gGncdloUxc4S%2FqNUbmDm5PTK51wWDzD1Aadkc1XFsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwmtMYgBUUQKBEYMCrcAyjOSwlmNAnJryDivBkjnmgg6g9iQUOUouZPNaCClIS7HPM9LjPs1FMqNMpBVNGlmUIauAHnCKr1%2Bo2Q7bzF9j8XYvCSPq7PwOqHrySzQQbi%2BkAFbSa726Tvy189BaVid4uVXuIfEBW1CqwNlF0opDa5Axy9j4VnNxD3IDaqsZfYNSLvPFffDoNNzGgWN8HSGeS8zA%2F9%2FA33ouiWH1V0cPfg4nnon%2F5d9bPHdYltEYJuCVznjfPZPqu3oo840nYFYEnYI07luuvOtLP7LHI4FeUsLjR1cbQoMr37PSF7WHBbLe%2F%2BLS3pdIyZ2GESyPkgYtd6qX2xaiLM5hHwuyWq9Qtchry592WSNvvekFnbvLCmE64ysDToNVUkMbmJcIHMKDms6iwRrAS1%2BDg27ksXsRX63Ddh0PbEaiefnE76qw7at7A9SwtBMwQYbB1ItA2M11qnYez6XhkXv6cjV2eA4jWY0ZgKkorOJY76pBRD%2FlYMw2jLBwVcaouMDKOuDYtTmxwI0WD7f07vc6%2FGGL%2Bu1WqqVCBLkuM2klGiBCAIlwtJUtwn29XBCmMHbjWP2mNDFS9IVnlGXnk5CxAHta3eRFx9aQPO6Aa4Rquv3jCx5ar3C2jtJsDputNLrRP4MMbDgMEGOqUB17ZZh7uqcsOXD4IeD38wybjV266WO1YDKIp9JvpFGHymTd6wkIAjcCiNgAv7zPA7DLQJfgjTABlWI5DAf%2FpLRUBGdc9wlN8a6rgLLTK2T4J4IVAG%2BNNkgM5GQaKH8oEMkgr0cXAa%2FNhucazsljhBl37FR%2F7TOKSkIn%2BmcMATq5Ck0jcz7GowVTR6kO5uw6Om9hkHsnFiaKXh8fYUaw3FD%2F%2FaN5pQ&X-Amz-Signature=ba4163268adef7d0921749fc4ff06f3e612c334e76705c84eeb8403ed4f9778b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVBNOXW6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD80%2Fsmx74E87FBPGr9dy%2FcMd%2BQxPxsfZu0DYHXUsI3TAIgH7gGncdloUxc4S%2FqNUbmDm5PTK51wWDzD1Aadkc1XFsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwmtMYgBUUQKBEYMCrcAyjOSwlmNAnJryDivBkjnmgg6g9iQUOUouZPNaCClIS7HPM9LjPs1FMqNMpBVNGlmUIauAHnCKr1%2Bo2Q7bzF9j8XYvCSPq7PwOqHrySzQQbi%2BkAFbSa726Tvy189BaVid4uVXuIfEBW1CqwNlF0opDa5Axy9j4VnNxD3IDaqsZfYNSLvPFffDoNNzGgWN8HSGeS8zA%2F9%2FA33ouiWH1V0cPfg4nnon%2F5d9bPHdYltEYJuCVznjfPZPqu3oo840nYFYEnYI07luuvOtLP7LHI4FeUsLjR1cbQoMr37PSF7WHBbLe%2F%2BLS3pdIyZ2GESyPkgYtd6qX2xaiLM5hHwuyWq9Qtchry592WSNvvekFnbvLCmE64ysDToNVUkMbmJcIHMKDms6iwRrAS1%2BDg27ksXsRX63Ddh0PbEaiefnE76qw7at7A9SwtBMwQYbB1ItA2M11qnYez6XhkXv6cjV2eA4jWY0ZgKkorOJY76pBRD%2FlYMw2jLBwVcaouMDKOuDYtTmxwI0WD7f07vc6%2FGGL%2Bu1WqqVCBLkuM2klGiBCAIlwtJUtwn29XBCmMHbjWP2mNDFS9IVnlGXnk5CxAHta3eRFx9aQPO6Aa4Rquv3jCx5ar3C2jtJsDputNLrRP4MMbDgMEGOqUB17ZZh7uqcsOXD4IeD38wybjV266WO1YDKIp9JvpFGHymTd6wkIAjcCiNgAv7zPA7DLQJfgjTABlWI5DAf%2FpLRUBGdc9wlN8a6rgLLTK2T4J4IVAG%2BNNkgM5GQaKH8oEMkgr0cXAa%2FNhucazsljhBl37FR%2F7TOKSkIn%2BmcMATq5Ck0jcz7GowVTR6kO5uw6Om9hkHsnFiaKXh8fYUaw3FD%2F%2FaN5pQ&X-Amz-Signature=735558b10962a19c56db9aec1b3ce7320541fa4e2312cad47f5ccfbba108ccfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
