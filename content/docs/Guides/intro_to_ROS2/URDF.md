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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CGPR7S%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1BldkqwVKQFxPZ7hMamBtySJRpCTrWdVSBN1FA%2BbRQIhAP2cg5qLlZ85BUKXBANt5FCLz2ggMytd1l9udwthptRWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhlZqkqfcsjMi3IPMq3APdbfUimEJBOiaUJcyjtCxgxtJv2cmomWACLl1%2FyEH0bZ57cdTwVO9zumUYli0ldY6XikroHVft01w%2F1cmtLT%2BASsKRP79B7uBBf6sSfMPz4QM%2BMvNMWEZe3qupP4Ze66abDXi5iQ0Rj3KmFlAQQOvqzaTSQCBlZq3G7sZiymIprRWGlr%2B8JBKV7k9vTvw1C%2BFmuCSWDldCVFCdaHcy3D9bl4pWzUW7eMLYT9bEkLIYWxX5%2FyFqVXF2X4mv6FHgoaJj43VcSebjX6caT%2BgIdAxAZH1OqKrQkHXWNVKyqo1oC4TNZvCamHUNC%2B2lg7wSwuNpJinxyVQPkTZ3K%2Fkx5L2P2cRBcpe4ykM3dTT3Po%2FClhc0hYcxnuq%2BIGDm%2Fx5vImqgt%2B88EL3K7HHW5CjxAQ4z8ea0yBgjZdyeJ053NvzqQD3uI3MXiHykdOpoerLQxAx%2FwTkjGkmLINbkK38hvgK0WIxaoSdz6vPmOwoybEVHe31et6WK08dD2Rfcl2Hy23yGbIVkdJAF0t0x5nuuQWizhuL0Ls9B%2BRKjgVjiHBGZN4WcZFcQlUs7CQ0SghoGxXuRXVkiKZ%2BvrKl95%2B7g%2FjjLxZ%2FtYHAXlngymoZUKuw5HCihtfh7IJ%2Bdgy9L5zCyxezDBjqkASxQjJ6Dm96rAmTeMvGwk7e2Y7%2BoGN9A4Jf0CBoJN5vFb0Dr1He6aum15l3No2TR%2FO4bsS18JEvBdiHO0%2BBzUhV6%2BEvDxwI1SFRa%2FrZxg4N7I7WtN2Ba%2FY9IqNvriTmUuA5KGYODtYfc%2FGZfT5oHjrasfziqCYG3QVfMPXvXpGlWE8mKWL53LQ03aBDVzGdy3ez%2F31ii7R%2BUTkW%2BFbwtaAWHtOsX&X-Amz-Signature=a16c86873b4dc706c1a0ae8f90e7bc849b7700ff9e041a8e35f9a1d852759a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CGPR7S%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV1BldkqwVKQFxPZ7hMamBtySJRpCTrWdVSBN1FA%2BbRQIhAP2cg5qLlZ85BUKXBANt5FCLz2ggMytd1l9udwthptRWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhlZqkqfcsjMi3IPMq3APdbfUimEJBOiaUJcyjtCxgxtJv2cmomWACLl1%2FyEH0bZ57cdTwVO9zumUYli0ldY6XikroHVft01w%2F1cmtLT%2BASsKRP79B7uBBf6sSfMPz4QM%2BMvNMWEZe3qupP4Ze66abDXi5iQ0Rj3KmFlAQQOvqzaTSQCBlZq3G7sZiymIprRWGlr%2B8JBKV7k9vTvw1C%2BFmuCSWDldCVFCdaHcy3D9bl4pWzUW7eMLYT9bEkLIYWxX5%2FyFqVXF2X4mv6FHgoaJj43VcSebjX6caT%2BgIdAxAZH1OqKrQkHXWNVKyqo1oC4TNZvCamHUNC%2B2lg7wSwuNpJinxyVQPkTZ3K%2Fkx5L2P2cRBcpe4ykM3dTT3Po%2FClhc0hYcxnuq%2BIGDm%2Fx5vImqgt%2B88EL3K7HHW5CjxAQ4z8ea0yBgjZdyeJ053NvzqQD3uI3MXiHykdOpoerLQxAx%2FwTkjGkmLINbkK38hvgK0WIxaoSdz6vPmOwoybEVHe31et6WK08dD2Rfcl2Hy23yGbIVkdJAF0t0x5nuuQWizhuL0Ls9B%2BRKjgVjiHBGZN4WcZFcQlUs7CQ0SghoGxXuRXVkiKZ%2BvrKl95%2B7g%2FjjLxZ%2FtYHAXlngymoZUKuw5HCihtfh7IJ%2Bdgy9L5zCyxezDBjqkASxQjJ6Dm96rAmTeMvGwk7e2Y7%2BoGN9A4Jf0CBoJN5vFb0Dr1He6aum15l3No2TR%2FO4bsS18JEvBdiHO0%2BBzUhV6%2BEvDxwI1SFRa%2FrZxg4N7I7WtN2Ba%2FY9IqNvriTmUuA5KGYODtYfc%2FGZfT5oHjrasfziqCYG3QVfMPXvXpGlWE8mKWL53LQ03aBDVzGdy3ez%2F31ii7R%2BUTkW%2BFbwtaAWHtOsX&X-Amz-Signature=d2e0c516ddc81d27870e003b71a6cf2fb7dba6e4fdda11d56b30aeebe8b319a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
