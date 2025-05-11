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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLWB2JU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICYns%2F%2FIpMmUlj3hLnOLDG79lnsbbELT4WtCNtawo4ScAiEA9xYmT1hNW4iCeKQwerh6TT57HAAbbDYbJbFdtjtjZU4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSdjUHknch4EuC3ESrcA5FQmuu5PfcRtCktLUYSuuWhlR72OyXolC4mn727WEJ6XKj%2FF0w7LXvZ6ubvDnsSKQXd2wzwzMo30Qy4Y%2BEK%2BRD0oTCcvwhv%2F4fM4IOOu3%2FP8o9E3URUbE15xobgJeFKrrMvnHafNjff9ENBtl6BDYmbWmCYUANmFht%2Btl2foZ2eU1P1N%2FU4%2F0gOP7hZLDDtZ459zdi1jofbC0nPK8ckLXdnl2Vqqu2IPesRryw24X3EMMFLjVew63FW%2Fna0kNe4pODMHNDFZuYhbQ%2Fk2ElE6w3cyhlm0lrsUEyAG3uGrsfE6ly78V1dAM3tqCbQDA0D9VNYYmoMJnE0qg%2F9FUnAWpUq4JlrZRWWKmYngScijoepAu%2BWK3moVfAP4fIMTTjqktxT5k9XhO4IubIVeZ3ZGAez98hEg8H7672%2F60qnuZVuenPfQfngVkJG0NDy2mvNv7n00FzGB5M2A26dZtHYuJoyxpwXPjxoTJY0WcfLqRYXTvKjmOgJILxs9bFxKEZIt24VA9BFE9mt6kRcAa3mLjPi3kun1Dr0TzoYe3SFeq7RuPoMlPJK4nFBgh0csfUess5ffndlFlzxq3V%2BIzujC7cdfpMUDt275XOTwvH6AkOzkO3juHfs0ZixZtvrMOPdgMEGOqUBwwmEz%2BhSMg8ceSzOI3qaU3NGUaglSbAy%2FxTtsiAvDIzODa1Qv1MUa%2BlJnG305w4S0%2BEbg339xHbn%2FdgQbDWIkgsI24cvl4B%2BPPTL%2BfUjNdCMcYkGZ0yR8aOfxTR0CGZ58NZmsuFpWltM8Jlwst3kPQu2Wl8rqgok%2B8%2FZZ5%2FH1Q2Bcdiq6XzODo%2ByY2%2F89zSgGdGRGwwnvRczt7TmoNLBOaZuZ4Tf&X-Amz-Signature=0872f386b0144908f40296c8fa686040e5467e8476eb9236773c8c044454a8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLWB2JU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICYns%2F%2FIpMmUlj3hLnOLDG79lnsbbELT4WtCNtawo4ScAiEA9xYmT1hNW4iCeKQwerh6TT57HAAbbDYbJbFdtjtjZU4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSdjUHknch4EuC3ESrcA5FQmuu5PfcRtCktLUYSuuWhlR72OyXolC4mn727WEJ6XKj%2FF0w7LXvZ6ubvDnsSKQXd2wzwzMo30Qy4Y%2BEK%2BRD0oTCcvwhv%2F4fM4IOOu3%2FP8o9E3URUbE15xobgJeFKrrMvnHafNjff9ENBtl6BDYmbWmCYUANmFht%2Btl2foZ2eU1P1N%2FU4%2F0gOP7hZLDDtZ459zdi1jofbC0nPK8ckLXdnl2Vqqu2IPesRryw24X3EMMFLjVew63FW%2Fna0kNe4pODMHNDFZuYhbQ%2Fk2ElE6w3cyhlm0lrsUEyAG3uGrsfE6ly78V1dAM3tqCbQDA0D9VNYYmoMJnE0qg%2F9FUnAWpUq4JlrZRWWKmYngScijoepAu%2BWK3moVfAP4fIMTTjqktxT5k9XhO4IubIVeZ3ZGAez98hEg8H7672%2F60qnuZVuenPfQfngVkJG0NDy2mvNv7n00FzGB5M2A26dZtHYuJoyxpwXPjxoTJY0WcfLqRYXTvKjmOgJILxs9bFxKEZIt24VA9BFE9mt6kRcAa3mLjPi3kun1Dr0TzoYe3SFeq7RuPoMlPJK4nFBgh0csfUess5ffndlFlzxq3V%2BIzujC7cdfpMUDt275XOTwvH6AkOzkO3juHfs0ZixZtvrMOPdgMEGOqUBwwmEz%2BhSMg8ceSzOI3qaU3NGUaglSbAy%2FxTtsiAvDIzODa1Qv1MUa%2BlJnG305w4S0%2BEbg339xHbn%2FdgQbDWIkgsI24cvl4B%2BPPTL%2BfUjNdCMcYkGZ0yR8aOfxTR0CGZ58NZmsuFpWltM8Jlwst3kPQu2Wl8rqgok%2B8%2FZZ5%2FH1Q2Bcdiq6XzODo%2ByY2%2F89zSgGdGRGwwnvRczt7TmoNLBOaZuZ4Tf&X-Amz-Signature=a581114d4370dccb14ed48739a89624a9d276dd964cc415408d2b089a9b88ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
