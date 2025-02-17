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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RAS2NS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICJHlzFgMW6yeDMyfjEMfMe84ZricOwiAUXFUxXwznUKAiEA6H9c9KlMlvKXFFIBQbhbxyP7%2BAFcx2NmA%2FRLYPntBx8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEWGoC2XLQg9KQzoTCrcA%2F%2Byrct5gYGF6Rs%2BqDCxR6UB5anR5rX75y24nMnZr8vkhthai1K%2FAVEr9RJ%2BaI%2BeSn6aFubPNp9zWN1jmAmWQUaoldFBcNfHGDMvsCHf5Rf%2Bs2sLKFK7MJR2GM23nhYsaMQDyYVrDUNWujvP4dhB6cbFs%2BnlmgYwezj7Gwqj6tnZYLUl%2BRElSnW7sBkEen7oIqhejUYGrGCqsLrmjQ0zP4jbihZdHdaVLtSX8v497ofg4lNpwF3WTrQzLceNrtQhaOq%2FsPxxHx%2Bsk1aoWHuANFdtqjSv%2FZKU3%2FyPQfh3xV%2FptK%2FVQfPFXuV7v0w7F1TZO9dNYKFCv5B0opPsuh%2FGoqMYN5KjXFYBxDnLwA5Ww6BmJ8BYION1NGUh7lEaIt76DMIMmynf0F%2FiN4UxTrCNVvcym5%2Bz1eCJbOWyDXfjVUXZC7JF57Ezqh76LPJ6Ts4RqMNAvp7Hz%2FZJ56cg8saJr35EpEJBMZULpBYjp59VTIA15hgIygjS4anw8jnuI9h1AWp8ZKIfyhQi6KyjdP4Cj8e4vr8wve9P8n92Nrena%2FiEvHB4epSacfLH%2FC2PEbeZW7DsiIF3lrQZl56PoakRkFzWBepqhu15%2BQzbdi%2FE%2FLa5VeIp4wU94qW8hxn%2FMIHKyr0GOqUBFhmO8gqyU97noL8UbVXjina5M9P92T4IitOXNib%2B9IobnoEZncilDME3hZXl8dEoa2BJxEdMrTaetHQROZiPZiKjgfqld6Obd6p9Oszok320sXWhpdLk%2Fgsz%2FpX6LcElAqUwDFKwn4MSJhaWm0DuN%2FGIKC6Vmy4Naks2%2BQB05gNHWHJsFYUYrCJlpjLlSPIxp%2BQL%2FCqCDA9CXecFR5q7IwdBg5BJ&X-Amz-Signature=b1e55fe3db21f19830a554698c290b35bfdccb1f15698d356745851ff2f7c484&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RAS2NS%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCICJHlzFgMW6yeDMyfjEMfMe84ZricOwiAUXFUxXwznUKAiEA6H9c9KlMlvKXFFIBQbhbxyP7%2BAFcx2NmA%2FRLYPntBx8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDEWGoC2XLQg9KQzoTCrcA%2F%2Byrct5gYGF6Rs%2BqDCxR6UB5anR5rX75y24nMnZr8vkhthai1K%2FAVEr9RJ%2BaI%2BeSn6aFubPNp9zWN1jmAmWQUaoldFBcNfHGDMvsCHf5Rf%2Bs2sLKFK7MJR2GM23nhYsaMQDyYVrDUNWujvP4dhB6cbFs%2BnlmgYwezj7Gwqj6tnZYLUl%2BRElSnW7sBkEen7oIqhejUYGrGCqsLrmjQ0zP4jbihZdHdaVLtSX8v497ofg4lNpwF3WTrQzLceNrtQhaOq%2FsPxxHx%2Bsk1aoWHuANFdtqjSv%2FZKU3%2FyPQfh3xV%2FptK%2FVQfPFXuV7v0w7F1TZO9dNYKFCv5B0opPsuh%2FGoqMYN5KjXFYBxDnLwA5Ww6BmJ8BYION1NGUh7lEaIt76DMIMmynf0F%2FiN4UxTrCNVvcym5%2Bz1eCJbOWyDXfjVUXZC7JF57Ezqh76LPJ6Ts4RqMNAvp7Hz%2FZJ56cg8saJr35EpEJBMZULpBYjp59VTIA15hgIygjS4anw8jnuI9h1AWp8ZKIfyhQi6KyjdP4Cj8e4vr8wve9P8n92Nrena%2FiEvHB4epSacfLH%2FC2PEbeZW7DsiIF3lrQZl56PoakRkFzWBepqhu15%2BQzbdi%2FE%2FLa5VeIp4wU94qW8hxn%2FMIHKyr0GOqUBFhmO8gqyU97noL8UbVXjina5M9P92T4IitOXNib%2B9IobnoEZncilDME3hZXl8dEoa2BJxEdMrTaetHQROZiPZiKjgfqld6Obd6p9Oszok320sXWhpdLk%2Fgsz%2FpX6LcElAqUwDFKwn4MSJhaWm0DuN%2FGIKC6Vmy4Naks2%2BQB05gNHWHJsFYUYrCJlpjLlSPIxp%2BQL%2FCqCDA9CXecFR5q7IwdBg5BJ&X-Amz-Signature=bb9ff166dc1c31dd7cae0c9f7a36827ef4cb1bc1e6aedb12a775e3d87e523f09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
