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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIQOBEY%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDe9qo5TeuwmSJ9nXwvE8jXfQ2asGh0EU%2BQZxM6ygXwIhAMBO4otRFZcSJsk45d8iOAUPCvJvol3wHQjmv8ogPceaKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwgrAvoYYKW7B0fKAq3AP%2BR00WAb9UGawW91DYJKTcktMWSCXsVChs0OyLqVj97qK5ddb7EzAC2PbIf4w1HOr3uoerLq27Rck5QiC%2F0V9pyELEKNiqEsM3jeAv5XeJf%2FOQIh%2BFcWy%2FRUxobe5uBKUhMGrfjitYrM3mLb8KMd6apJORHkHkpFWjmdFgb6MiOyL8WYsouGWA3pG7UXK%2FdLLM9R5pmMhi3hdSQngGZyGU0yOyMmap6rf36yu0aYXqM%2Fnv1BDNZFB2QTZiM5rm2DcD%2F6gJF4FlS29ffdTMvM8MT9FPLyrTU1rYn1TbjJV%2BD%2BDg5Em4TMNDUPkPzcBdEPErTjiRGltPrJQjXgPJX7iTUbvhfKVINHBn%2BxHj34i4Q9M3%2FW6Ywmc6xNJr72g%2FLg6LOe4yppt9rxTntXLeqs6cO56V8nrhvz%2FKXBdgyT0HV15Q4H0VJXZRSaUCIhu86XeeuWRMjfgzZzLazN8LwqzGCR4q%2BWdjEZCMvhl5XtOC4yjXnY9RNafZ6cb5v2690BXkAE90DWlHqCch7dtQULgmEGzkW0nFVZUXEW3qdIBNDxXhbrt7RaAR4cZ1XwUIOMGi5buVOaLwkuGOVUwlt38MUryelWVKgVfi6rFFcz8X3V4MZTwJj05bOcrMFDDYo43DBjqkATcop0m2z9xuHVTOuqp1QoGN0xixnhOzSwIoxaxxNsAnYmq6aBBmZS7HnkIxf2mjcwF9RDwJTCLMOgmTEZ9VP%2B5F%2Fu0QTiQYo8ZChO71JTIEsaKIH9%2F4R2XE13OCWabIJAK5xfaFEBMpfi%2FWR9zn3LI%2Fd2RHoaR0wmfk8aVsfLpEOCoU8QxwRK9lPH8C5KzhVlbLVIv46Ftdzwq3Srvj%2BFDCRo4K&X-Amz-Signature=5fc7be1d93069b6a972baf158992bcfa9dda60372d895deb563ff830eb8d8c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIQOBEY%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxDe9qo5TeuwmSJ9nXwvE8jXfQ2asGh0EU%2BQZxM6ygXwIhAMBO4otRFZcSJsk45d8iOAUPCvJvol3wHQjmv8ogPceaKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwgrAvoYYKW7B0fKAq3AP%2BR00WAb9UGawW91DYJKTcktMWSCXsVChs0OyLqVj97qK5ddb7EzAC2PbIf4w1HOr3uoerLq27Rck5QiC%2F0V9pyELEKNiqEsM3jeAv5XeJf%2FOQIh%2BFcWy%2FRUxobe5uBKUhMGrfjitYrM3mLb8KMd6apJORHkHkpFWjmdFgb6MiOyL8WYsouGWA3pG7UXK%2FdLLM9R5pmMhi3hdSQngGZyGU0yOyMmap6rf36yu0aYXqM%2Fnv1BDNZFB2QTZiM5rm2DcD%2F6gJF4FlS29ffdTMvM8MT9FPLyrTU1rYn1TbjJV%2BD%2BDg5Em4TMNDUPkPzcBdEPErTjiRGltPrJQjXgPJX7iTUbvhfKVINHBn%2BxHj34i4Q9M3%2FW6Ywmc6xNJr72g%2FLg6LOe4yppt9rxTntXLeqs6cO56V8nrhvz%2FKXBdgyT0HV15Q4H0VJXZRSaUCIhu86XeeuWRMjfgzZzLazN8LwqzGCR4q%2BWdjEZCMvhl5XtOC4yjXnY9RNafZ6cb5v2690BXkAE90DWlHqCch7dtQULgmEGzkW0nFVZUXEW3qdIBNDxXhbrt7RaAR4cZ1XwUIOMGi5buVOaLwkuGOVUwlt38MUryelWVKgVfi6rFFcz8X3V4MZTwJj05bOcrMFDDYo43DBjqkATcop0m2z9xuHVTOuqp1QoGN0xixnhOzSwIoxaxxNsAnYmq6aBBmZS7HnkIxf2mjcwF9RDwJTCLMOgmTEZ9VP%2B5F%2Fu0QTiQYo8ZChO71JTIEsaKIH9%2F4R2XE13OCWabIJAK5xfaFEBMpfi%2FWR9zn3LI%2Fd2RHoaR0wmfk8aVsfLpEOCoU8QxwRK9lPH8C5KzhVlbLVIv46Ftdzwq3Srvj%2BFDCRo4K&X-Amz-Signature=7fcc844a51a844281e9643a7a483d4806c17a3709c1e2f0abe0524251c30d248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
