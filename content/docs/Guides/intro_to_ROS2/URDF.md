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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIWMZEJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElWJZ%2FnzKNA1WKvOPttpOek1A8g%2FPq94K3YAycWVR%2FgAiBlENwPLOBz%2FZJA76qTPjM7NwYllOj56Sfec5eI%2FE4GPyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMjJwvm9iI02zUi77jKtwDCEcHoW0coiF23nsoh3h6K24Xr4nyQhb1Jo5RnlsZeWP4DXE75TVlezBeHykCbyK6mAjimi1Gdcf5RGv1RQ%2FTP7fOXNr5KCacud9bYFE499krUybbwt2uZeorqVB6Pw1kbIbDyf8bliyW5VUpyDz%2BXJ4pnpuxUWHQQ00n7G4DH9%2FK%2FI3HmQZ2Sq9Q7HUILimxFhUQwyJlfrxYpR4xWaeUi19Uy6BWYeyw4hg5oqPEe2Q%2BoVuyE7NJL5z54gga%2FNlR3scP2SRYrjyVoS7NqS1nxl1GG39z5PTmouQLWF9zIZCBuX%2B1jP0BweUisQrDNco4LDytYRUWXP9YaWL6BKyAcX%2B%2B1GvRVhKGz5dt42LdTUsJUEgEkecc3NC3V4H72r8DkhwOVczL0JddO2v2aZq7npdBTWWyBZSvNkHdU1Whv%2FEqrFUIvVJaJ5zJzkgHEULYtHCGVvP0UVQWRYEXcywAy5iUQRplOCVfqlpgvry5xB24eysCY6GVbHX2rjPdaDQrvjZ3oxCCgmVzABgscD62ypAUI13HLKZsiMeS1%2BQyCWrpY1dFdrOHRR45EYs0CPqCXipiA%2B66qkcYHwI9%2BKpNPSiMvax5QZDZp63BeB86xmJPN63IdgobEeV0C%2B4wkeufvgY6pgFCgkU%2FLbe2cO0RNMVcyngrolNDQivpmp%2FR7r3w8EGKeSheoDV8ETrkNst6U6o2jnYM3LulFF5i1jrY0Yk8e6rMx5gBtswckPLVO8sZBQWGxuCTDiEx88Oib9BOWecMyGQPKqsADA1GFrfrN5Q9%2Fh3F0PtZPAL7OrS%2BNy%2FeBI4qXDTW7jqv9L337DZ%2BA31Q%2Fht4B6IVFGvnTXxJBc3PkBYYgBVuQu0r&X-Amz-Signature=aac3981473e7bea118117e7ccc2ed1484b80f25a87732a18c6bfa65b4204945c&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIWMZEJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElWJZ%2FnzKNA1WKvOPttpOek1A8g%2FPq94K3YAycWVR%2FgAiBlENwPLOBz%2FZJA76qTPjM7NwYllOj56Sfec5eI%2FE4GPyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMjJwvm9iI02zUi77jKtwDCEcHoW0coiF23nsoh3h6K24Xr4nyQhb1Jo5RnlsZeWP4DXE75TVlezBeHykCbyK6mAjimi1Gdcf5RGv1RQ%2FTP7fOXNr5KCacud9bYFE499krUybbwt2uZeorqVB6Pw1kbIbDyf8bliyW5VUpyDz%2BXJ4pnpuxUWHQQ00n7G4DH9%2FK%2FI3HmQZ2Sq9Q7HUILimxFhUQwyJlfrxYpR4xWaeUi19Uy6BWYeyw4hg5oqPEe2Q%2BoVuyE7NJL5z54gga%2FNlR3scP2SRYrjyVoS7NqS1nxl1GG39z5PTmouQLWF9zIZCBuX%2B1jP0BweUisQrDNco4LDytYRUWXP9YaWL6BKyAcX%2B%2B1GvRVhKGz5dt42LdTUsJUEgEkecc3NC3V4H72r8DkhwOVczL0JddO2v2aZq7npdBTWWyBZSvNkHdU1Whv%2FEqrFUIvVJaJ5zJzkgHEULYtHCGVvP0UVQWRYEXcywAy5iUQRplOCVfqlpgvry5xB24eysCY6GVbHX2rjPdaDQrvjZ3oxCCgmVzABgscD62ypAUI13HLKZsiMeS1%2BQyCWrpY1dFdrOHRR45EYs0CPqCXipiA%2B66qkcYHwI9%2BKpNPSiMvax5QZDZp63BeB86xmJPN63IdgobEeV0C%2B4wkeufvgY6pgFCgkU%2FLbe2cO0RNMVcyngrolNDQivpmp%2FR7r3w8EGKeSheoDV8ETrkNst6U6o2jnYM3LulFF5i1jrY0Yk8e6rMx5gBtswckPLVO8sZBQWGxuCTDiEx88Oib9BOWecMyGQPKqsADA1GFrfrN5Q9%2Fh3F0PtZPAL7OrS%2BNy%2FeBI4qXDTW7jqv9L337DZ%2BA31Q%2Fht4B6IVFGvnTXxJBc3PkBYYgBVuQu0r&X-Amz-Signature=24b2e9c7f37b4e6c8341f9aa81c5cad1e0a6400813b6b6c74cb9ac0d3cd52e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
