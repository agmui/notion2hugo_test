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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKEZNIZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVM1joU2lMK5fKfKeC7QydYlGaZKXzdgTOgU%2BwEtM3SwIhAPkTLy2U4eEBcTSjnzl9Jvwxe9dk0cKYwKEaIGcvzx%2FwKv8DCHgQABoMNjM3NDIzMTgzODA1IgxiO1Zkwaj6rS9k8mwq3AMRBLqWMTDMZH%2FapuGY8M%2BEmL%2Bw%2FvUoT4Nctm0i7fKxxNIhgmO61HEjNG2QA5ni%2BXEMczensjS7IuTHI7LES96A4T7MK2j3gDLF5tZU5qdEJs4yk8Nbb3kW6FMgHa7jTwsUcESnyMmftrF9oRtI%2Fj70QDjBnb5dOe7Tg7QqO28dQCI5tEsrkt01iGHPjMnyIOeQWLtd4XEM96lrzNF1OOaUWg2r89u6qyyVSu7u%2FNYuff4OnjHS3%2BCEOxTNeTTe9YKPPMg9Ycy%2FxyMg3%2Bd4M1PL19j4ePRpwmSxs3naFUPWSBkF5IGlnX2Y4ikXif5rn3HyVC7saO6CvIFQ6GFjITM2AneEkw7F5Wws694FxythA0CY1p1MlYjEo6d4a9YB071BZbyplxGGZA84TUjDNwAT%2BAy3eEXydxunzxTPh1Wul1Yfi8IUmDYogEIlDAlB9B%2BXQWD8hecxv6f72aaG68MxtglmQbzT%2BqM7j74EQPZDbQo7iYZn2ZPx1WLrGmihAbf2%2BJIA9qt7NDSO%2BekpCVA0g9%2BJKsmSIPrcWA83sIjCWkn5Qi5DKgxi%2Bp%2F4qCKYfH7btqUjxYuDVhGc4JaUaorSI%2FflpgKoYml%2Flb3GLiyvJVFs9TnUpNCU4eHF0TC9xtzBBjqkAcMiBFYHpj71wiipYVhqcBeg2e0LOrDhbBdVo%2BwN3wLnPYmGoe2ySj83TLZKQnv9bWWUZvdW2gEnTD%2F%2B0mthrO9mR2sz1mnvxy4iZxCumB4rWs7S94UAwvE21Nkg%2FI6QzGFgBJQG0BRy6CY4lLwnOJp0wuu9fqIXumvShfHNmUUeBz%2BtX8NsQchDWMIy%2FoJvMKsiGLCc2hTfTUctDk9EEvUYUMZQ&X-Amz-Signature=dd7ca40fd07110b822455d53b12270f0fd629f6493a9f2299923e37fe5553efa&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKEZNIZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVM1joU2lMK5fKfKeC7QydYlGaZKXzdgTOgU%2BwEtM3SwIhAPkTLy2U4eEBcTSjnzl9Jvwxe9dk0cKYwKEaIGcvzx%2FwKv8DCHgQABoMNjM3NDIzMTgzODA1IgxiO1Zkwaj6rS9k8mwq3AMRBLqWMTDMZH%2FapuGY8M%2BEmL%2Bw%2FvUoT4Nctm0i7fKxxNIhgmO61HEjNG2QA5ni%2BXEMczensjS7IuTHI7LES96A4T7MK2j3gDLF5tZU5qdEJs4yk8Nbb3kW6FMgHa7jTwsUcESnyMmftrF9oRtI%2Fj70QDjBnb5dOe7Tg7QqO28dQCI5tEsrkt01iGHPjMnyIOeQWLtd4XEM96lrzNF1OOaUWg2r89u6qyyVSu7u%2FNYuff4OnjHS3%2BCEOxTNeTTe9YKPPMg9Ycy%2FxyMg3%2Bd4M1PL19j4ePRpwmSxs3naFUPWSBkF5IGlnX2Y4ikXif5rn3HyVC7saO6CvIFQ6GFjITM2AneEkw7F5Wws694FxythA0CY1p1MlYjEo6d4a9YB071BZbyplxGGZA84TUjDNwAT%2BAy3eEXydxunzxTPh1Wul1Yfi8IUmDYogEIlDAlB9B%2BXQWD8hecxv6f72aaG68MxtglmQbzT%2BqM7j74EQPZDbQo7iYZn2ZPx1WLrGmihAbf2%2BJIA9qt7NDSO%2BekpCVA0g9%2BJKsmSIPrcWA83sIjCWkn5Qi5DKgxi%2Bp%2F4qCKYfH7btqUjxYuDVhGc4JaUaorSI%2FflpgKoYml%2Flb3GLiyvJVFs9TnUpNCU4eHF0TC9xtzBBjqkAcMiBFYHpj71wiipYVhqcBeg2e0LOrDhbBdVo%2BwN3wLnPYmGoe2ySj83TLZKQnv9bWWUZvdW2gEnTD%2F%2B0mthrO9mR2sz1mnvxy4iZxCumB4rWs7S94UAwvE21Nkg%2FI6QzGFgBJQG0BRy6CY4lLwnOJp0wuu9fqIXumvShfHNmUUeBz%2BtX8NsQchDWMIy%2FoJvMKsiGLCc2hTfTUctDk9EEvUYUMZQ&X-Amz-Signature=2a0a51a7ccfdbe56255e48bff715a68b9a21a87c372a4b06f0c25b11124ff648&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
