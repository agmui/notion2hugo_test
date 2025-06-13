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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ROH65T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzPvpQSvABZB3xPwp%2Fqunbv0feOomEMdMYnHYURySB9wIhAM0Py1QufHT7HnfKxhenJkcc%2BnleJ7hrEi7M1DRZ2UXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsK7mAOZm%2BCEDri9wq3ANeRKJ8Zup7AXTVw7QsE9Vg%2BSgH4AsQaDztUhhakepDyHVbtZt%2FTXPWoFFpFWWSodKR773Jj6gq%2FI6rpdgWbEFiSYpVZMtG98cEeAX0aAYJw0w9n%2FN9cvSJrEaBD93NDN7Vaxstuu%2BHF0pZfHcL8MfcxuZeXxjiYsqIWXDOGF40GDExT1IsbAz0DrQ9qydw%2BdWmuy9MkqvlKTebp4iFMT1kKpYZRup7BDM5gyYmu6BcuJCpb2eUJwVUrC9wmdInj5tzruAGDiL9SdlnzqLM9c1x6PVThb7AeFqY4vBQsJUxWZVHffQ6WtcplMfsPU%2F9Q%2FtJ02ZYTaRFQjAJJ7Xmw2mNWsAYBcclRyJes%2Bv4grvv2jW%2BedUFVo9WClm9kUL%2B4P1ZY7igHdian%2Fh4v6f6X%2BnKA4NHVNCa9CSFfi1p5l6qBuyvniP90K5rYnqegrpUgZAc4F0Z1Oz2eTe73Y%2B1U1S4VROKMS5hTjtCVrWmw9Vd2p%2BTnPXx6Zym5wwr03S2JZvN3pMHlxKniWotea6TIlUK4LU7gWToZ2YnqBs2RGWe%2B3KJXasihdVCU1SayRj9fWt8kfV3aTttE6Ocqg28T1MCVzB%2BnW4cOvoyebvYrc9o2Am4CesfJAweIIWItzDspK7CBjqkAZPdnlZNb1rwaVukfpfKqjda9jHVcXFzb887zInx%2Fj93d1p3nYJGw7vcLhqq3uhK47Ob3gc1N%2BtUWzyYyQdDAo8MEIhTWugpyRwP5ziu8%2FfPzWPBfgqiPMnGpt5qRyD%2BTgnpbSRQCaBjKl6eNEtCrmLIgh9SRLecLlb5wu7A9eQolHFqs6tEWkn9CDYh4zu6%2F%2BIdzW5d6V7TPC5SdAri6Sn0pjmU&X-Amz-Signature=4d6fdb1a9f5cf65eec073abfb5568623e2538e396300c8b9e2df16a3717969cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623ROH65T%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDzPvpQSvABZB3xPwp%2Fqunbv0feOomEMdMYnHYURySB9wIhAM0Py1QufHT7HnfKxhenJkcc%2BnleJ7hrEi7M1DRZ2UXVKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsK7mAOZm%2BCEDri9wq3ANeRKJ8Zup7AXTVw7QsE9Vg%2BSgH4AsQaDztUhhakepDyHVbtZt%2FTXPWoFFpFWWSodKR773Jj6gq%2FI6rpdgWbEFiSYpVZMtG98cEeAX0aAYJw0w9n%2FN9cvSJrEaBD93NDN7Vaxstuu%2BHF0pZfHcL8MfcxuZeXxjiYsqIWXDOGF40GDExT1IsbAz0DrQ9qydw%2BdWmuy9MkqvlKTebp4iFMT1kKpYZRup7BDM5gyYmu6BcuJCpb2eUJwVUrC9wmdInj5tzruAGDiL9SdlnzqLM9c1x6PVThb7AeFqY4vBQsJUxWZVHffQ6WtcplMfsPU%2F9Q%2FtJ02ZYTaRFQjAJJ7Xmw2mNWsAYBcclRyJes%2Bv4grvv2jW%2BedUFVo9WClm9kUL%2B4P1ZY7igHdian%2Fh4v6f6X%2BnKA4NHVNCa9CSFfi1p5l6qBuyvniP90K5rYnqegrpUgZAc4F0Z1Oz2eTe73Y%2B1U1S4VROKMS5hTjtCVrWmw9Vd2p%2BTnPXx6Zym5wwr03S2JZvN3pMHlxKniWotea6TIlUK4LU7gWToZ2YnqBs2RGWe%2B3KJXasihdVCU1SayRj9fWt8kfV3aTttE6Ocqg28T1MCVzB%2BnW4cOvoyebvYrc9o2Am4CesfJAweIIWItzDspK7CBjqkAZPdnlZNb1rwaVukfpfKqjda9jHVcXFzb887zInx%2Fj93d1p3nYJGw7vcLhqq3uhK47Ob3gc1N%2BtUWzyYyQdDAo8MEIhTWugpyRwP5ziu8%2FfPzWPBfgqiPMnGpt5qRyD%2BTgnpbSRQCaBjKl6eNEtCrmLIgh9SRLecLlb5wu7A9eQolHFqs6tEWkn9CDYh4zu6%2F%2BIdzW5d6V7TPC5SdAri6Sn0pjmU&X-Amz-Signature=a24d7b00bafdc7c4fba6960cb296e8e1c5b3f39312bab54b719e9f9cf3af31fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
