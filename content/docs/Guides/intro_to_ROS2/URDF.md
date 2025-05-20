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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XZUFMB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fav9ZUUPJYyB2TIEyp9kztAkC3PJRPzQQ8sGARZeZgIhAP8D7ATW%2BqcE95EW6ZCgpiZm691snjINV7dTt2ZRI3HGKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0kLdo45QJP4ANna4q3AM9CaCNHYGHVtS5GbsNCEOWbn%2FpCVmEBx%2BGEt0PP%2Fhu20mFLXRgmjpd7wmNmc1Tm5RqRTofUDtyDg6sOWrR%2B1nIi0lf8p8SS1tZ3giDczFyhfCpcqFPqSiu2t2P%2BxarcIS3RzKCj8KbzRSdj8BfOtjkuTuaj1NXWLdeM7DSpkP2kixqL0b7OMKg%2BO7omKsME88%2B1VLqKggO6iv%2FsCA%2BBPa3CTz7iUVpGW3AeqfHBXMryg75MHIULsJ6ofeOlDNx%2Fis69Op%2B8HylUSJUTvDhVDdpaYFiVc%2BW5K2RzyTgJj7B%2FZ%2BmmkISsEMGiN%2BaYwjVX8fkVKj7zmrhCydtTRA5J753WLHFR51vHWNrKpjxhjr9BX%2FE7%2F%2B2dBkt3WAEyvzMPmX6hs1ljmWBg9r9mVEBXdSrHGUgNYFPUqpespn3PeGRE1Vm1O2x%2FPwoMtWovTEQ7i1Lq1tNWuaPtHnfC80LiMhNJmJU8afWCD8wnSIy6woiEMo6zbPiMheppZ4BjpXazfJoc7wE96iCUZdw%2Fa5iGVjmJ0pcadG218TlszN6M9vMoKFybuXMAnEr4wV9uIZVsrlSBCazImCxxf7YLz7NSmvPUljLfI6aisOETrztpOpiZEe3qzWy5OvjOVb0eDC1sbPBBjqkAZo%2BooTovwP8nIf4R%2FENE61ywjhR7RsK1oNYXWCS%2BvwnEoyzbM9AVBshFxL42W9PiqB0GlqiQGAXIAbm%2Fb0Te4c6o2ByZ7DCztSEHIV5sxfy3YVmKJ9z65juRdTzp9dOzHE1gNBgojUlF2qe06u8G7r1F9PHqEajxX2UYlODpfdOXFFt6wf%2FrY8t3LcfgoSmKF0JsbQPWvvI9iQ4ntEPfn%2FD9maR&X-Amz-Signature=46ff5873b5dbab0fa7a62d5961c43481651d00155143a60b5240306cb7fe582b&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6XZUFMB%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fav9ZUUPJYyB2TIEyp9kztAkC3PJRPzQQ8sGARZeZgIhAP8D7ATW%2BqcE95EW6ZCgpiZm691snjINV7dTt2ZRI3HGKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0kLdo45QJP4ANna4q3AM9CaCNHYGHVtS5GbsNCEOWbn%2FpCVmEBx%2BGEt0PP%2Fhu20mFLXRgmjpd7wmNmc1Tm5RqRTofUDtyDg6sOWrR%2B1nIi0lf8p8SS1tZ3giDczFyhfCpcqFPqSiu2t2P%2BxarcIS3RzKCj8KbzRSdj8BfOtjkuTuaj1NXWLdeM7DSpkP2kixqL0b7OMKg%2BO7omKsME88%2B1VLqKggO6iv%2FsCA%2BBPa3CTz7iUVpGW3AeqfHBXMryg75MHIULsJ6ofeOlDNx%2Fis69Op%2B8HylUSJUTvDhVDdpaYFiVc%2BW5K2RzyTgJj7B%2FZ%2BmmkISsEMGiN%2BaYwjVX8fkVKj7zmrhCydtTRA5J753WLHFR51vHWNrKpjxhjr9BX%2FE7%2F%2B2dBkt3WAEyvzMPmX6hs1ljmWBg9r9mVEBXdSrHGUgNYFPUqpespn3PeGRE1Vm1O2x%2FPwoMtWovTEQ7i1Lq1tNWuaPtHnfC80LiMhNJmJU8afWCD8wnSIy6woiEMo6zbPiMheppZ4BjpXazfJoc7wE96iCUZdw%2Fa5iGVjmJ0pcadG218TlszN6M9vMoKFybuXMAnEr4wV9uIZVsrlSBCazImCxxf7YLz7NSmvPUljLfI6aisOETrztpOpiZEe3qzWy5OvjOVb0eDC1sbPBBjqkAZo%2BooTovwP8nIf4R%2FENE61ywjhR7RsK1oNYXWCS%2BvwnEoyzbM9AVBshFxL42W9PiqB0GlqiQGAXIAbm%2Fb0Te4c6o2ByZ7DCztSEHIV5sxfy3YVmKJ9z65juRdTzp9dOzHE1gNBgojUlF2qe06u8G7r1F9PHqEajxX2UYlODpfdOXFFt6wf%2FrY8t3LcfgoSmKF0JsbQPWvvI9iQ4ntEPfn%2FD9maR&X-Amz-Signature=fb98a38e2a6a881b211c99f68722614d9bf4536aa3504b160448b6db6743920f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
