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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDUENNE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGet9Pagljj5jD4YqLbWw%2FtP18Rv9W1FjEOS5THodbZDAiBXHkbILjyZqBgaIxt5X8izjNwRjKdmu6LXMYgcJ0CziyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMywzpJ7D1o6Oo1brFKtwDzBF6Q4BQzvpOzwlQgfxoCev769fuymJsL%2B1xiMTeHbVDL1zXjLdZl%2FNb3QwTLXLczykaATlWOyqhOmsVgX9Z5zADeVhL3Sii6HYuoej4VCg%2FLco312Oof7znPUv%2B8o%2FyPlxbuXBdLLxIMyiFeuyQJpOabku7K75bv%2Bs0MgVXJ%2FSrEZLEojRuaXxS4M7KXOZpowKfqE1JRCyNVRaR81kTkRYghT0juPD22c6E8LiahLU5cRh8fvVzi4giWoG6kAJE4UvCamBpoiuFDoqJXcvKT61b7ywhgwjBpwTB4%2BqYQXfykmz1MhVtTkHiqIfK%2B2gEEcbiYkQuRz9G8NDN5an4vlAzNM%2FbcNrfast7VF4chNeFSmyanYpall02gOpRJ0s842gJeBQrUU9qedzGU5jg45QOkAONkEyztkujCsd%2BZgRiSOruqRErrLh9bZ1CRT8WQLx3R2Xbc6yKq9jrGTven77WbStsnmdRLQCZyH63J%2FnNadjgwE0%2B0AQs2vWnRjHxWy4kaUkx4w%2Fqi4cKh%2F%2FEl9%2BtCQrLNC7cEMNg1%2BUQShGAme1p6YOqRKGd7694gPSzXczwuSVUBhnt2mT04s1Hx%2FAb6UADvQPdx39HS8tauPtoPGa9sjpyuAOfEycw2dS2wQY6pgEXojthZWKYRFP3Ijzurg%2BZcD72aDFIoE7ujdgTPcAud2xBRvFg0rrjlIGTxCqlEFWQuxtCNxfgZT4V%2B93%2FitSEp%2BvQAojglFeb%2B1oT9WygMM3IQr1k6kXo3vsYg7qIp81aVhZ2AmnRYOJ0Gjk7CGIT3qn4p5DHxSlz3hq4hbocOrIVHZBdlv%2FR5wq5STgjeJYuykVxaMPfBY%2BXl5v96JHudZ9LL1Yn&X-Amz-Signature=f018339e311902dcf241b3ee0d83b1233653870bad7162a6cc1547cf10905247&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDUENNE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGet9Pagljj5jD4YqLbWw%2FtP18Rv9W1FjEOS5THodbZDAiBXHkbILjyZqBgaIxt5X8izjNwRjKdmu6LXMYgcJ0CziyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMywzpJ7D1o6Oo1brFKtwDzBF6Q4BQzvpOzwlQgfxoCev769fuymJsL%2B1xiMTeHbVDL1zXjLdZl%2FNb3QwTLXLczykaATlWOyqhOmsVgX9Z5zADeVhL3Sii6HYuoej4VCg%2FLco312Oof7znPUv%2B8o%2FyPlxbuXBdLLxIMyiFeuyQJpOabku7K75bv%2Bs0MgVXJ%2FSrEZLEojRuaXxS4M7KXOZpowKfqE1JRCyNVRaR81kTkRYghT0juPD22c6E8LiahLU5cRh8fvVzi4giWoG6kAJE4UvCamBpoiuFDoqJXcvKT61b7ywhgwjBpwTB4%2BqYQXfykmz1MhVtTkHiqIfK%2B2gEEcbiYkQuRz9G8NDN5an4vlAzNM%2FbcNrfast7VF4chNeFSmyanYpall02gOpRJ0s842gJeBQrUU9qedzGU5jg45QOkAONkEyztkujCsd%2BZgRiSOruqRErrLh9bZ1CRT8WQLx3R2Xbc6yKq9jrGTven77WbStsnmdRLQCZyH63J%2FnNadjgwE0%2B0AQs2vWnRjHxWy4kaUkx4w%2Fqi4cKh%2F%2FEl9%2BtCQrLNC7cEMNg1%2BUQShGAme1p6YOqRKGd7694gPSzXczwuSVUBhnt2mT04s1Hx%2FAb6UADvQPdx39HS8tauPtoPGa9sjpyuAOfEycw2dS2wQY6pgEXojthZWKYRFP3Ijzurg%2BZcD72aDFIoE7ujdgTPcAud2xBRvFg0rrjlIGTxCqlEFWQuxtCNxfgZT4V%2B93%2FitSEp%2BvQAojglFeb%2B1oT9WygMM3IQr1k6kXo3vsYg7qIp81aVhZ2AmnRYOJ0Gjk7CGIT3qn4p5DHxSlz3hq4hbocOrIVHZBdlv%2FR5wq5STgjeJYuykVxaMPfBY%2BXl5v96JHudZ9LL1Yn&X-Amz-Signature=dfeed5a2ca29e4caec80db845e777a5d18afc825f8beb8743f17a152370efb74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
