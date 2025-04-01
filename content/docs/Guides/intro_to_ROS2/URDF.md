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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7AHFAL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDIGmLLVaAfwmLaS1ScvS8Qx8hX2VRnAnuqovC31T8CoAiBS2uoUiEdY3WAiB5HpfqxynmEoEGeRlkl1AsOoVHYvYiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1xlLMGlLd8omnlWKtwDHQZ4BpksdqGlSIVno%2FRK9IZszoLC%2FrRtb5lSI3xwFEJsOGAEgCH0SN2bi%2B78PG7TykOsS6P1tT6dnL1LtI%2BhFu8ahy8B3nrHRCvihtJWoMsI7YyRJlk0AnXDDyDYHDHeyz2%2Fi4RjFfHZBcxPaqQoOIWWUzNKm121S5eFNREENNUK1Jkw9u7D9gAjSxW7FKC1PyKSNpnAVUhJ7Km8nf%2BDadFT9sMmPybQ4%2B%2FinSfJq7c8KpwlHVLqeMwmqqsHXQuXa3yrDlckQ%2BJFP9RJHXUxaSCb62SjjiMzvy1WlvA9boMROr57dKu7sZUY7EpX3wxJDHSRzWdSNiZAsywop2ud2k6kAIjhZMWV%2BYDvah%2BbE5Zmdx5THmHtnZg6Gj76lpBirp98HSE4T4BfRz%2BohHZdwsDe4NVLqZXs2f9fhzU9b%2FSxTHNDvHO8RHL6Gb0tVpQKC%2FeLK7IDBQRfbG85fxgjf5PXazIzJHPZbXyGkvSnitsRGuOZEUNKYIS2maMoVdaRH5Jgk5Nnl0TUdb4gLOdhuGRROC7b78jhDj52dEf3hxC6h0oxJZmZRRmlkg2xmDH052VWUqT%2FIecKv1FgpdJZqzamCKHGFKaQ85gQlDCUtb3WHY8y1erj%2BApnuAYwmY6xvwY6pgFKDuEVtAY8zUk2GuyPV4EjOzjOMjG%2FB2T9OLMUFegVuphw%2BeVhuVP40bmxdxPU86uNfFy1j5C3jxehnvWeM0FDs4P%2BlG3oj6jGoEw3kqPEwu%2B7gLzEIGY8QjF0bvGZBXnuvaR9SSJRYq7R8w45ZaJzL6Bn0Y3%2Fkg%2FSm8fbS5UWWNoavCqSwTXNoOeG6N1V3IH2XYLD7vo5%2BsKY%2Ft9Zmp0FAeR%2BNeBS&X-Amz-Signature=9cbd49e5961b0e4c7ae5e003bf87b8a91984fe914e8c33d8290178d5a6a821fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7AHFAL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIDIGmLLVaAfwmLaS1ScvS8Qx8hX2VRnAnuqovC31T8CoAiBS2uoUiEdY3WAiB5HpfqxynmEoEGeRlkl1AsOoVHYvYiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1xlLMGlLd8omnlWKtwDHQZ4BpksdqGlSIVno%2FRK9IZszoLC%2FrRtb5lSI3xwFEJsOGAEgCH0SN2bi%2B78PG7TykOsS6P1tT6dnL1LtI%2BhFu8ahy8B3nrHRCvihtJWoMsI7YyRJlk0AnXDDyDYHDHeyz2%2Fi4RjFfHZBcxPaqQoOIWWUzNKm121S5eFNREENNUK1Jkw9u7D9gAjSxW7FKC1PyKSNpnAVUhJ7Km8nf%2BDadFT9sMmPybQ4%2B%2FinSfJq7c8KpwlHVLqeMwmqqsHXQuXa3yrDlckQ%2BJFP9RJHXUxaSCb62SjjiMzvy1WlvA9boMROr57dKu7sZUY7EpX3wxJDHSRzWdSNiZAsywop2ud2k6kAIjhZMWV%2BYDvah%2BbE5Zmdx5THmHtnZg6Gj76lpBirp98HSE4T4BfRz%2BohHZdwsDe4NVLqZXs2f9fhzU9b%2FSxTHNDvHO8RHL6Gb0tVpQKC%2FeLK7IDBQRfbG85fxgjf5PXazIzJHPZbXyGkvSnitsRGuOZEUNKYIS2maMoVdaRH5Jgk5Nnl0TUdb4gLOdhuGRROC7b78jhDj52dEf3hxC6h0oxJZmZRRmlkg2xmDH052VWUqT%2FIecKv1FgpdJZqzamCKHGFKaQ85gQlDCUtb3WHY8y1erj%2BApnuAYwmY6xvwY6pgFKDuEVtAY8zUk2GuyPV4EjOzjOMjG%2FB2T9OLMUFegVuphw%2BeVhuVP40bmxdxPU86uNfFy1j5C3jxehnvWeM0FDs4P%2BlG3oj6jGoEw3kqPEwu%2B7gLzEIGY8QjF0bvGZBXnuvaR9SSJRYq7R8w45ZaJzL6Bn0Y3%2Fkg%2FSm8fbS5UWWNoavCqSwTXNoOeG6N1V3IH2XYLD7vo5%2BsKY%2Ft9Zmp0FAeR%2BNeBS&X-Amz-Signature=ba8a20d356ddae1b7df8d627c83a5a15f77f71fafde37dd0969dc8d97230f306&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
