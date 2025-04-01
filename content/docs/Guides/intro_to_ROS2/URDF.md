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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WI3ZNI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3%2Ft9ek54z1E%2BC%2FbY%2F2RUqEG28s%2FP6%2Fj8swFAwolLkOAiBe7dh2tMFzSjLlHZ9dH%2BHlcd6zpMiNTcw4jXR8XTBnNCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkASVhhcJklrlOLVVKtwDY1zk%2BqWDDp5q7HsiH38DlzHxuJuE00Y%2BiydWGvgl86MNWVU8OvqMEUlSB9k6wmDfkj8Z2ZLjf8XtdfE3mFY1IBh%2BzK1JTAZsJQJoSwTlOpMm0bV871%2Fm7ArIEVZPkpWs6a4WOolhiJHPnlj%2BbWlQJZLiEcwhxtI6gYihvIKlC9rMf%2F6Gd8r5PYoj8nfDaE9Xpa6X0rRrChhMKX%2BhjyYD2dsBmzv1%2BHfpQ68CWGB2yIhAXUo4X1WfjmRBuyGzhGr6qjxKrCje0qUWhNyvB0OMBAwSxXTN%2BWBEBZ3bWl9tUndaUVon39Du8psc3LrRthuJBiRXC3xFl94yNkllQrqTUI49R1H56rTk6SzMzL%2BeopsLZT%2BCgoj3PPXEwQS9U4LgqLFmop9gRVCV8jt0GUc3jltONE11zcQXL78b1JS17t%2FNM6MOnrenlhl91Xw%2FBOS32GSLFXq404QyNAxgW6tczbMdkzEOqqc7MTv5HdjW2i44AWGn1CV36XihTNNa07EsiLmC3gpm%2BqcTmGum1pyaD%2FmUk6ZOmXKjmv5wBo7U5C%2Fkvz%2F6%2F0W%2BatGeMHM%2F2J5r%2B%2FMqX09PGcwhJquzdTHGWKYGRi6OqeuXIbmzyIHUwKk9Q%2FgQ8aPIvmPX4qsw46ixvwY6pgGSSsBGvN%2BBETpClI1tkaCq1Ay787L1%2F0PvdLjZLA94cdNehKo4WtUPfIUt7Olvy6OE105IsheBxCvKKeEJVJ4%2FIO2Vr5oVLJdODZarNhf%2Bx7wjffs2cOoda32rJ%2BeNmWFIrSubPWC0sO%2Bvyrdw3e1tk%2BbuWK6D%2FcHow0%2F9Lv0uCIe8hOiTHQwoqsN0bzOjBhwSF%2B%2BYv%2BA1QBwjaCeLPd8jXioGeOgx&X-Amz-Signature=4b3ade7319062564295a18630e3061afb6f73cf0f6c8ab23955b4ca61cfcdf34&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WI3ZNI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3%2Ft9ek54z1E%2BC%2FbY%2F2RUqEG28s%2FP6%2Fj8swFAwolLkOAiBe7dh2tMFzSjLlHZ9dH%2BHlcd6zpMiNTcw4jXR8XTBnNCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkASVhhcJklrlOLVVKtwDY1zk%2BqWDDp5q7HsiH38DlzHxuJuE00Y%2BiydWGvgl86MNWVU8OvqMEUlSB9k6wmDfkj8Z2ZLjf8XtdfE3mFY1IBh%2BzK1JTAZsJQJoSwTlOpMm0bV871%2Fm7ArIEVZPkpWs6a4WOolhiJHPnlj%2BbWlQJZLiEcwhxtI6gYihvIKlC9rMf%2F6Gd8r5PYoj8nfDaE9Xpa6X0rRrChhMKX%2BhjyYD2dsBmzv1%2BHfpQ68CWGB2yIhAXUo4X1WfjmRBuyGzhGr6qjxKrCje0qUWhNyvB0OMBAwSxXTN%2BWBEBZ3bWl9tUndaUVon39Du8psc3LrRthuJBiRXC3xFl94yNkllQrqTUI49R1H56rTk6SzMzL%2BeopsLZT%2BCgoj3PPXEwQS9U4LgqLFmop9gRVCV8jt0GUc3jltONE11zcQXL78b1JS17t%2FNM6MOnrenlhl91Xw%2FBOS32GSLFXq404QyNAxgW6tczbMdkzEOqqc7MTv5HdjW2i44AWGn1CV36XihTNNa07EsiLmC3gpm%2BqcTmGum1pyaD%2FmUk6ZOmXKjmv5wBo7U5C%2Fkvz%2F6%2F0W%2BatGeMHM%2F2J5r%2B%2FMqX09PGcwhJquzdTHGWKYGRi6OqeuXIbmzyIHUwKk9Q%2FgQ8aPIvmPX4qsw46ixvwY6pgGSSsBGvN%2BBETpClI1tkaCq1Ay787L1%2F0PvdLjZLA94cdNehKo4WtUPfIUt7Olvy6OE105IsheBxCvKKeEJVJ4%2FIO2Vr5oVLJdODZarNhf%2Bx7wjffs2cOoda32rJ%2BeNmWFIrSubPWC0sO%2Bvyrdw3e1tk%2BbuWK6D%2FcHow0%2F9Lv0uCIe8hOiTHQwoqsN0bzOjBhwSF%2B%2BYv%2BA1QBwjaCeLPd8jXioGeOgx&X-Amz-Signature=6b31c605749a35f1237cdd9b6331418df02b343cb3ca9ed5f38d6649a6396c64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
