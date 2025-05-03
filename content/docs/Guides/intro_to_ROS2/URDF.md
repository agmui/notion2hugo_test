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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFMB3BP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGIEAmOpUwMF9PN3ZQd6V4WyTf1rIbhD3OGrELw8Kb7yAiBvNmE5lWtqrYoliVGM0ZdgroXeHb%2B8%2FUVKSD1Vb4yVYiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnPO8DG%2BXwDW0Nd9KtwDrKLwH49xphFC2V7MSC9TFDhoo9%2BcMJ%2F03bHD5ne77J3ewurMuR1LN0KKuo99WtdBM2ZWFzQANvBpd9p3VvIcDvqm1BISzRAiNeBIj6r0YLQ%2FXzNFqZlosi61V%2BadcmTcp2FY5TlnaWRan4SBydAB3cHXSU7z5jPA1OVODJ%2FmNhi81YQ9IIq4gWH%2FRlE0ECVoTXIsFgWXjzYOKh3PoXao%2B2PWd1KbSKLrXwM1BzFCp31rwoGWUtJKchbyJxqTOPdjGuoQ9tBw7fjmDv5A%2FnOyAosaKX4%2BiFPXH%2FtVFYWzIeR7VhCo1D3MHCINtqM%2FQUe%2BEx1ol6u0O1iN5XOd9hn6lbqVVbwtGfGcAPGD7OlvByBy42nACnwe1rBiU9pAZPci52j6WyuSU%2FjPtVTMNml88wX8CxS8pOL9H4Zz3sLCCHCMkHk%2Ff5GPCY2MeywDK%2Fpw4P%2BmeiA74PRAxZkBEj5cT2gjUiVSRiK6m88LH1IoATmGUO8cmnsKAOhpuzlhA5kCzeljI37OjUFr4DnufqjT4ajd3YvNO%2FP3AqHN1V6EVjIBLAKqs%2BrFD1GuNvIWWD1uiPgp6hCtXHXSGe18w%2BiDFlAHUxIAFrB5VLdVTK8QrRLvklFFcX2%2BxGo7%2Fpswwb%2FVwAY6pgFwmSNuJmnrM4t09ZGcnrtRGDzA9oszKl5YNOnGlLxEdsEBwzb1zvv02feE504nJXm9PS1E2teOjMzL0Y8qoQHFnW9y6cifeIVzgJkZtOrHpus%2BwTzu6eUrR4Ix83KDkvTTKjustuQ0DTZ6OsOzpj4pB%2BY7Wwnve46NdCrxb9n%2BsrfeXiPfoXFRgThn5i%2Fj0uhAlHCK2C6h66KUBSUGYsZJaqcUSQSL&X-Amz-Signature=5711b12e1bf3154288e261385c6589aacc151fc8316ae46301f679b7289ea490&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVFMB3BP%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGIEAmOpUwMF9PN3ZQd6V4WyTf1rIbhD3OGrELw8Kb7yAiBvNmE5lWtqrYoliVGM0ZdgroXeHb%2B8%2FUVKSD1Vb4yVYiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnPO8DG%2BXwDW0Nd9KtwDrKLwH49xphFC2V7MSC9TFDhoo9%2BcMJ%2F03bHD5ne77J3ewurMuR1LN0KKuo99WtdBM2ZWFzQANvBpd9p3VvIcDvqm1BISzRAiNeBIj6r0YLQ%2FXzNFqZlosi61V%2BadcmTcp2FY5TlnaWRan4SBydAB3cHXSU7z5jPA1OVODJ%2FmNhi81YQ9IIq4gWH%2FRlE0ECVoTXIsFgWXjzYOKh3PoXao%2B2PWd1KbSKLrXwM1BzFCp31rwoGWUtJKchbyJxqTOPdjGuoQ9tBw7fjmDv5A%2FnOyAosaKX4%2BiFPXH%2FtVFYWzIeR7VhCo1D3MHCINtqM%2FQUe%2BEx1ol6u0O1iN5XOd9hn6lbqVVbwtGfGcAPGD7OlvByBy42nACnwe1rBiU9pAZPci52j6WyuSU%2FjPtVTMNml88wX8CxS8pOL9H4Zz3sLCCHCMkHk%2Ff5GPCY2MeywDK%2Fpw4P%2BmeiA74PRAxZkBEj5cT2gjUiVSRiK6m88LH1IoATmGUO8cmnsKAOhpuzlhA5kCzeljI37OjUFr4DnufqjT4ajd3YvNO%2FP3AqHN1V6EVjIBLAKqs%2BrFD1GuNvIWWD1uiPgp6hCtXHXSGe18w%2BiDFlAHUxIAFrB5VLdVTK8QrRLvklFFcX2%2BxGo7%2Fpswwb%2FVwAY6pgFwmSNuJmnrM4t09ZGcnrtRGDzA9oszKl5YNOnGlLxEdsEBwzb1zvv02feE504nJXm9PS1E2teOjMzL0Y8qoQHFnW9y6cifeIVzgJkZtOrHpus%2BwTzu6eUrR4Ix83KDkvTTKjustuQ0DTZ6OsOzpj4pB%2BY7Wwnve46NdCrxb9n%2BsrfeXiPfoXFRgThn5i%2Fj0uhAlHCK2C6h66KUBSUGYsZJaqcUSQSL&X-Amz-Signature=ccc4bdde433759e07dff1054cf75860f401c7dd79719c997fb7180fc4cff930c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
