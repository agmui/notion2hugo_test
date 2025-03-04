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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWR2AGJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEexG3BJjy3JcG9R1Mpn4aZOETDgIkUOvuLAkhDwLB4AiAP9Yu3eBmQsKvq4XRlZGCzs7i1SeCAc6t1nOXLksWecCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUUen8FGWUl%2FtSnxKtwD6HPrkM5Fkdn9Owmc7C2vx0JkCuGh41UkrjD55rlz38lfSFMbRkL6YrPZY8yZ0JVHmcgxPSdndp%2FJ5k3p29qbscbJjWNlQtA2efOkqbuPwgyqyZ2qZ2WJKAEBzlyHA5Jxs7ikk2BQ4lcMfyc7XEO%2BYqlPBu3Fjm%2F5uhzzPsXSqPG9oBmNfP9nI1rS6yIwrJYvmu5ZvRyC5msdAjZ7QWptceSzPb0CFkmjHv080XZgiCj1KVvOEDkqCPobFHata2dBCi8ABYizOTti3TtPCnvWsVkGT0FhDuViKxG9ezNLDQU%2FaV9wq61waWJHMQ3Ol%2FwzNIH5o4dmkivSkvLSxgquPom54P%2Bqh9ta0hqjGpJZ4NOEu760HJy%2BTVNHkaOD74Skj92ZQ9eQuXDUCGdGOIqX0W1%2F5Nn79ax2BmSvL40NtMzXGOPegTRQkV2biNOIA9ux25lOhnwdk%2FRp0Sgb9lZloWb8m%2BEXN%2B3B8SHjLJQ2daoeDiw4vaRRw4Pz1aY1%2F%2BcJXXYM3N0vBv0slLaHc8eD78rYFwRz6uy7ObHxjbAHq46aX5xZnwwmdk5OLjXs8bmji4JA%2FbuDI9HF6eyWqTU4n3BBYidz9oPhe%2BL5Ibs2yYGisaeJGTjG46IJdEMw34qcvgY6pgGFEBb60ZlRs0NisbrPuWqnqsTExf3ZO2gXO%2F%2BrZ9Id9V8j0ttXZy3EuqMTQoRBmy56AE1mo%2BApMZjxEUSSAYcmBj7IOqjKGruwCnNvp5CE7P4SHuZAp%2BWqEMQ3KGFI87xQe03dxjajMcCvScOGZP%2B6HhcR%2Fk%2BI%2FR%2BUo9afhOrHfrwzaSZwD7UdYgXoKMrqqebncXS7ucdj0H5R%2FbhBvobr3s%2Fh88Q%2B&X-Amz-Signature=10e60fd1286066365161987ff459f6dfa0306415ac1881c2f8eda55535dc1703&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWR2AGJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEexG3BJjy3JcG9R1Mpn4aZOETDgIkUOvuLAkhDwLB4AiAP9Yu3eBmQsKvq4XRlZGCzs7i1SeCAc6t1nOXLksWecCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BUUen8FGWUl%2FtSnxKtwD6HPrkM5Fkdn9Owmc7C2vx0JkCuGh41UkrjD55rlz38lfSFMbRkL6YrPZY8yZ0JVHmcgxPSdndp%2FJ5k3p29qbscbJjWNlQtA2efOkqbuPwgyqyZ2qZ2WJKAEBzlyHA5Jxs7ikk2BQ4lcMfyc7XEO%2BYqlPBu3Fjm%2F5uhzzPsXSqPG9oBmNfP9nI1rS6yIwrJYvmu5ZvRyC5msdAjZ7QWptceSzPb0CFkmjHv080XZgiCj1KVvOEDkqCPobFHata2dBCi8ABYizOTti3TtPCnvWsVkGT0FhDuViKxG9ezNLDQU%2FaV9wq61waWJHMQ3Ol%2FwzNIH5o4dmkivSkvLSxgquPom54P%2Bqh9ta0hqjGpJZ4NOEu760HJy%2BTVNHkaOD74Skj92ZQ9eQuXDUCGdGOIqX0W1%2F5Nn79ax2BmSvL40NtMzXGOPegTRQkV2biNOIA9ux25lOhnwdk%2FRp0Sgb9lZloWb8m%2BEXN%2B3B8SHjLJQ2daoeDiw4vaRRw4Pz1aY1%2F%2BcJXXYM3N0vBv0slLaHc8eD78rYFwRz6uy7ObHxjbAHq46aX5xZnwwmdk5OLjXs8bmji4JA%2FbuDI9HF6eyWqTU4n3BBYidz9oPhe%2BL5Ibs2yYGisaeJGTjG46IJdEMw34qcvgY6pgGFEBb60ZlRs0NisbrPuWqnqsTExf3ZO2gXO%2F%2BrZ9Id9V8j0ttXZy3EuqMTQoRBmy56AE1mo%2BApMZjxEUSSAYcmBj7IOqjKGruwCnNvp5CE7P4SHuZAp%2BWqEMQ3KGFI87xQe03dxjajMcCvScOGZP%2B6HhcR%2Fk%2BI%2FR%2BUo9afhOrHfrwzaSZwD7UdYgXoKMrqqebncXS7ucdj0H5R%2FbhBvobr3s%2Fh88Q%2B&X-Amz-Signature=7c7b3c0c7c749b25fa97110f0a9e5618a81409da3cfcba5dcc368af07445b9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
