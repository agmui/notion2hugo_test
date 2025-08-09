---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T09:56:00.000Z"
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

clone this [repo](https://github.com/joshnewans/urdf_example) into an existing workspace:
`git clone` [`https://github.com/joshnewans/my_bot.git`](https://github.com/joshnewans/urdf_example.git)

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXJT5EB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAK7EyuqbiyU4sFoKHr1CwGHasTu0PulZHks6hAnIlgxAiBBKNzadFtk1Rm1pX5s4dieJXtfNqBW3Fvu7dfkH%2B4HpCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BeunIa6bUhtyIJ5KtwDvBHp5%2BgR9FQfkqkUfh3LenqgGaIm3zaudL7H68W0mubWHLcW8t9WPyknsKzRwkpALo%2FqODVIRZBAtGTUgcajeZ7r3EdgUeMaclyHWUYMAl%2BptoA4BgyjcEdxdXzRO9uqn6ZVcQrOr8NIUo8SBEi7dgJt6WkGfRvQTCoRswLn1fT6FNWS6l17WpS9YINyQcy%2FG%2Bb4hnp3pSVKn4n1FqK40xt%2FLu8NW7%2BFQYJ%2BsU1cwPYjW0jDdVlQdzMHph3EXf9TFWIJ6s1ilwlgMbruXiZF3HPbS8v2Z29X0KDzxVxWVQdtxrqSzLRnx1WVp%2BV2w%2B7um5rc%2BpySL%2BtqAeLmiCToEEmBttjfBt3hGAgtUTYfsdBWrw1LyV9XeI6kZgXePgkf3tdv1t2xORRQY9eihllSaFthYCvpttW12NFzGoXzrvrJk8mr%2FYot1yioSW5H6v7GZvMZRBdhc%2FHast6lt0ifbPDNJ6lxROo4RdQvb28RsYLLQ8oTEofDYAkbKvOMo%2FURCcJsQpI%2FMYpg5MFOTloSog2GIQJjdKb0SN7O3QhZWufohtivQUM29ZE4TVYlvXEixjz5wsWSSCuxIMOsSKVkkv4aCZbV7SG8koryzETMFg7f0T7eNosorZ2kHm0whPbaxAY6pgF%2BkLv3DX7wkmTEGQhwpLenNUDTPvCWYd2%2FY2DPBlQ19XjFtyb79b8CaI22wib9olBZierPx1jdlnZBY%2FWcnEQYyLfXod%2BHyMmKbnF6WgUVU0KM%2BBV1RV2OxXff4yeWd4lEXbgiqczBEBgqSPKhcZOu0wBcwpNKNRa2kA6nKuBcPpH949%2FH%2F2Kx3TXNTKQ3%2FAHAxP0%2Fszyt%2BKnXzIK9ufdshJ%2FiKswi&X-Amz-Signature=8b0707a2a726ac3dcd54396ef60ecda2730dbc2b1ffc4af6be0dff6244c22034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXJT5EB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAK7EyuqbiyU4sFoKHr1CwGHasTu0PulZHks6hAnIlgxAiBBKNzadFtk1Rm1pX5s4dieJXtfNqBW3Fvu7dfkH%2B4HpCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz%2BeunIa6bUhtyIJ5KtwDvBHp5%2BgR9FQfkqkUfh3LenqgGaIm3zaudL7H68W0mubWHLcW8t9WPyknsKzRwkpALo%2FqODVIRZBAtGTUgcajeZ7r3EdgUeMaclyHWUYMAl%2BptoA4BgyjcEdxdXzRO9uqn6ZVcQrOr8NIUo8SBEi7dgJt6WkGfRvQTCoRswLn1fT6FNWS6l17WpS9YINyQcy%2FG%2Bb4hnp3pSVKn4n1FqK40xt%2FLu8NW7%2BFQYJ%2BsU1cwPYjW0jDdVlQdzMHph3EXf9TFWIJ6s1ilwlgMbruXiZF3HPbS8v2Z29X0KDzxVxWVQdtxrqSzLRnx1WVp%2BV2w%2B7um5rc%2BpySL%2BtqAeLmiCToEEmBttjfBt3hGAgtUTYfsdBWrw1LyV9XeI6kZgXePgkf3tdv1t2xORRQY9eihllSaFthYCvpttW12NFzGoXzrvrJk8mr%2FYot1yioSW5H6v7GZvMZRBdhc%2FHast6lt0ifbPDNJ6lxROo4RdQvb28RsYLLQ8oTEofDYAkbKvOMo%2FURCcJsQpI%2FMYpg5MFOTloSog2GIQJjdKb0SN7O3QhZWufohtivQUM29ZE4TVYlvXEixjz5wsWSSCuxIMOsSKVkkv4aCZbV7SG8koryzETMFg7f0T7eNosorZ2kHm0whPbaxAY6pgF%2BkLv3DX7wkmTEGQhwpLenNUDTPvCWYd2%2FY2DPBlQ19XjFtyb79b8CaI22wib9olBZierPx1jdlnZBY%2FWcnEQYyLfXod%2BHyMmKbnF6WgUVU0KM%2BBV1RV2OxXff4yeWd4lEXbgiqczBEBgqSPKhcZOu0wBcwpNKNRa2kA6nKuBcPpH949%2FH%2F2Kx3TXNTKQ3%2FAHAxP0%2Fszyt%2BKnXzIK9ufdshJ%2FiKswi&X-Amz-Signature=0c1dcdef4b1f3edd6d997b2438cbf3878b1f4ad6721b5d36d0c03e0f71cefbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## The return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
