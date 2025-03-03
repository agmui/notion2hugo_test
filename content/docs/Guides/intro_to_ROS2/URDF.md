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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7BWAJN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnGcpSqu1i7T%2FWnYfq1nLqW%2BeRy%2FGU6JhRIcaqgMUApAiApvz%2FNZoxtvOMpnLKd7S%2Bmf9eXiJMY65ySkbmRzmTDjCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNF9h73BB7cTHK%2FOWKtwDOObXWNglgXQWnu6%2BdbNZOQOVuU%2F3rpN52xT%2FBAof65QwKTfQSrl9xra3ALUeinfStl6w823cCmNZDwZQcD%2BoO57r9%2BbsNcwaLp3duCwLzhOMODKsiHZKuhB9CQDrx3yFlo6fnr%2FHFGnueT5gDfBCvgyc86yZBwlbuugG61X2vk5m23PjyGBpinAYCNij%2F%2BnzhsH6ZOBpBGgSV4%2Fu7UfkJZhirU%2BV1bckVvF9MWv6U85JG7A8n39Qr%2FnSWvEWboTIIVZTA5Z1eAtcJRZt7NB6zWLDCU2yzAyG2OajsLHqVRmAQ5tmjDX%2BlXVJZHiYwCF14vdYYRenA3fEkrVCCIGWinvxA0phI27I8mRLWFPx8MwgTpA0Qc%2BvYHQkyXCvBWP2%2BLNqGen%2FqlDm8xhoXi3MTVZzzFaA2CvFPx%2FvtPoIUh4hjC555SeEXbpTGYNnm7v00hlxFAuKTZLHCS9JYql4vAC7kf1ZxlBNsp%2BN8gDsJKCnSIHkqxeNL5xayLe3k%2FIeobFMPHczyo%2FUd146ZeDFi5YNtAk59jktfi2Lvmnz%2FwNUUI4SHKgib6wL2D9HYVFO64LcYap0dnnTts%2F7e7230P8UwpSut7jqaKokCGRtCdHL5b4V2OPGS14RUHwwxJ%2BUvgY6pgGak%2B5g7fjWs63D36O7alw7KWBqAArlpb0Nfp4i494WEUM%2FaXFKFpeDvfTnsg3LH5gLn1BmZZdyCX%2BC3Ia6sZmZXmRUUrf8cjVG9zA0UyiiP%2F2pxbZpjbk68bfywca7MOFer2fc1e99hS9t9M78VvFWuOXoh3nuEnNGbubN5JO5vDqI74BsKaeB0m0CFp94zjtApOlgIlU%2FGbA%2BIzXV5%2FBpzZ3JGofw&X-Amz-Signature=adc96d790bed63d9bfa98817864aed2731e1ccece03a0375b8d015f53dd0eaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7BWAJN%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnGcpSqu1i7T%2FWnYfq1nLqW%2BeRy%2FGU6JhRIcaqgMUApAiApvz%2FNZoxtvOMpnLKd7S%2Bmf9eXiJMY65ySkbmRzmTDjCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNF9h73BB7cTHK%2FOWKtwDOObXWNglgXQWnu6%2BdbNZOQOVuU%2F3rpN52xT%2FBAof65QwKTfQSrl9xra3ALUeinfStl6w823cCmNZDwZQcD%2BoO57r9%2BbsNcwaLp3duCwLzhOMODKsiHZKuhB9CQDrx3yFlo6fnr%2FHFGnueT5gDfBCvgyc86yZBwlbuugG61X2vk5m23PjyGBpinAYCNij%2F%2BnzhsH6ZOBpBGgSV4%2Fu7UfkJZhirU%2BV1bckVvF9MWv6U85JG7A8n39Qr%2FnSWvEWboTIIVZTA5Z1eAtcJRZt7NB6zWLDCU2yzAyG2OajsLHqVRmAQ5tmjDX%2BlXVJZHiYwCF14vdYYRenA3fEkrVCCIGWinvxA0phI27I8mRLWFPx8MwgTpA0Qc%2BvYHQkyXCvBWP2%2BLNqGen%2FqlDm8xhoXi3MTVZzzFaA2CvFPx%2FvtPoIUh4hjC555SeEXbpTGYNnm7v00hlxFAuKTZLHCS9JYql4vAC7kf1ZxlBNsp%2BN8gDsJKCnSIHkqxeNL5xayLe3k%2FIeobFMPHczyo%2FUd146ZeDFi5YNtAk59jktfi2Lvmnz%2FwNUUI4SHKgib6wL2D9HYVFO64LcYap0dnnTts%2F7e7230P8UwpSut7jqaKokCGRtCdHL5b4V2OPGS14RUHwwxJ%2BUvgY6pgGak%2B5g7fjWs63D36O7alw7KWBqAArlpb0Nfp4i494WEUM%2FaXFKFpeDvfTnsg3LH5gLn1BmZZdyCX%2BC3Ia6sZmZXmRUUrf8cjVG9zA0UyiiP%2F2pxbZpjbk68bfywca7MOFer2fc1e99hS9t9M78VvFWuOXoh3nuEnNGbubN5JO5vDqI74BsKaeB0m0CFp94zjtApOlgIlU%2FGbA%2BIzXV5%2FBpzZ3JGofw&X-Amz-Signature=562e5a644e58471aec76486b41b1fc9d707daf130291c9d9cf576587bd7d086c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
