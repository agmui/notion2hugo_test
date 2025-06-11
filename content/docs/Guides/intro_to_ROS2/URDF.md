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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYCMSVB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP09PiM6SvHWIPzgcCSNfkgi1vT394J4z7s3jFAfcjbAiBrlF4ObiCwPH6X%2B3og%2BWgL%2FoBnu5zjFh%2BZRoYotEoO8yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjutC1GYWcXC%2BxuLKtwDnzept6YbJHGNvR4z056nAMU2UKKvLwwVTpGaM1DgKsa1VKIt2JRsYb2D1mBnkZym%2FpKFEAzkV%2Bp2o1S%2BCOO825pdExc0WVBX7%2B%2BSpc8TdASJA%2Bx6Yx25H2JN%2BOsw1S%2Bcpa0Am3i4%2FSBB0foMsWL6DL%2F5ix9D1Yq2wTsQL14DBgZm%2BgqRHo59Iqr98Uu1%2BzW3Yhr4%2FOet0tm8FHgUMwaYda531xqK0BdO%2F9Nb40rSDWcpzqy%2BwiePc0kRMz06uKlLKwkRPEko3tS90RGTjg32k1sUJRw%2BP3%2B5O0yVlblWOaDOjIRLBbBS%2BwVuaSo9UUnVQcKL%2F0%2FxXc9ux%2B25bHhOhvy25Gb0PDfofKNGyusjl0bacVC0wZR7sTC4Fgfyi4c2XWlB6SGuF1T5lGqwh9d5Cq%2FbNiWNFnI8HTiSCNk181gYWhDUnKn%2Fn%2By9k%2BwuM4Bs%2BZtXhAt%2BvZh4pPt5nP3Ihhbk%2FdDTkTBOwG2x1nRjNxAzc6MMI6mEwXaxBiZyjnq4awEO9PwcKse5OZW8g4jroBWikgE58RP8QeuJyGF14ryAy4CbnjM07TFKemmUva5eXa9t4X2UeZr6syRZIPMEe1%2B32PT%2BNdiIGNJnqP6RPv1DKF%2FvfEJbpcjahT4w9bilwgY6pgE2YwN15%2FTls4OviSQz8P99jrI7KqKKrdLY%2Bp%2BgFaIVZQDg6xprScZp7olwRgUDiO7pU3YAuhZHka9oumMuXBvnoWguBTwZggUqOkTUBM%2F3N1az%2BZcVrFzI0vii%2FeuygLeU94wEhaw0SfdjE2EEMLeSgU3crl0DcB1ljynGwsXy53dn%2BgpcqTxSsjl7GgZurjzBffRp23CaTtcIU976B5okbqFuXyUY&X-Amz-Signature=133c88208799110e88468e79faf6826d9f7a0988a39fcefab18ef36f93f5cae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYCMSVB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP09PiM6SvHWIPzgcCSNfkgi1vT394J4z7s3jFAfcjbAiBrlF4ObiCwPH6X%2B3og%2BWgL%2FoBnu5zjFh%2BZRoYotEoO8yqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjutC1GYWcXC%2BxuLKtwDnzept6YbJHGNvR4z056nAMU2UKKvLwwVTpGaM1DgKsa1VKIt2JRsYb2D1mBnkZym%2FpKFEAzkV%2Bp2o1S%2BCOO825pdExc0WVBX7%2B%2BSpc8TdASJA%2Bx6Yx25H2JN%2BOsw1S%2Bcpa0Am3i4%2FSBB0foMsWL6DL%2F5ix9D1Yq2wTsQL14DBgZm%2BgqRHo59Iqr98Uu1%2BzW3Yhr4%2FOet0tm8FHgUMwaYda531xqK0BdO%2F9Nb40rSDWcpzqy%2BwiePc0kRMz06uKlLKwkRPEko3tS90RGTjg32k1sUJRw%2BP3%2B5O0yVlblWOaDOjIRLBbBS%2BwVuaSo9UUnVQcKL%2F0%2FxXc9ux%2B25bHhOhvy25Gb0PDfofKNGyusjl0bacVC0wZR7sTC4Fgfyi4c2XWlB6SGuF1T5lGqwh9d5Cq%2FbNiWNFnI8HTiSCNk181gYWhDUnKn%2Fn%2By9k%2BwuM4Bs%2BZtXhAt%2BvZh4pPt5nP3Ihhbk%2FdDTkTBOwG2x1nRjNxAzc6MMI6mEwXaxBiZyjnq4awEO9PwcKse5OZW8g4jroBWikgE58RP8QeuJyGF14ryAy4CbnjM07TFKemmUva5eXa9t4X2UeZr6syRZIPMEe1%2B32PT%2BNdiIGNJnqP6RPv1DKF%2FvfEJbpcjahT4w9bilwgY6pgE2YwN15%2FTls4OviSQz8P99jrI7KqKKrdLY%2Bp%2BgFaIVZQDg6xprScZp7olwRgUDiO7pU3YAuhZHka9oumMuXBvnoWguBTwZggUqOkTUBM%2F3N1az%2BZcVrFzI0vii%2FeuygLeU94wEhaw0SfdjE2EEMLeSgU3crl0DcB1ljynGwsXy53dn%2BgpcqTxSsjl7GgZurjzBffRp23CaTtcIU976B5okbqFuXyUY&X-Amz-Signature=2ed1a5f2f061228e197928df42251e0440460ef784e01c777b198077ce918060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
