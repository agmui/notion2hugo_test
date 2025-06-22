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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCYS7TI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3lmxnn6s5Kt7XfQiwLhx6NesLvjbYTEE5OCIAGn4IawIhANZKZHODTHWAj0faZAvPv0CgVS0DHcUHSMrX6VwyWbVLKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn7yuDYVSwna1spVcq3AMTk%2FZOZoaOIVmIH0kOveRdRVahWrfQXZJZOHRYIHwqA03Bx7qZXtIUc1ZuNeoABHA3D%2FqTbk7rPkPXU183x9E1COI7cKAXGcNb9TleDScchGVkmgs3jQn2x5FnqyiQmWr2nxx2JaqpeWA4M%2BFPDiN7hsGGX71PamQVv8baSdAAzi65PxxzVaxKlJJery9nrTdZLxE4QVfyMy8ifkou0C8bohgWprb1IZIh5hiZz88fCA8tRUEBwdYiHr0Ok%2BZKZubuG5gAPp6xr6zoEZkMifzd4SHxgiYobvMafwyNFPunPy%2Fb7QAz7Rg9JiRw1Dr%2FTMioeV9uu6c7oZEn4EAwVTZjuVK%2FoZa5GHs2gT5kz8tPI8Jn4%2FOK5AjIwYKExrmjWVN6V2wz%2BUpVVAIwWVqiGTUcVyG03RvxqTUeMYBzQicg9yyLgc2fWsqSwuB42Mz7iE33fx6LhiYbzpDviX7%2Fh1LasI0q8%2BjZrSN03ud9gLkgvN2w9E8ZWSoyGr6bkxaj%2FXO%2BLeU1LsOqGswqOgCk7ok%2BsX9%2Fw9PlTB3N0gGXXqUfQjP6e2Bviq5z7OfTBig6TfnAAXxMajLGtmXISmJUCTWZXhBkRpQZI0NdFL2Bs8WFeHmkJVNDEo2ypiu21TDQo97CBjqkAWe1eV5VWn9lgsoPhaqSeOZDpfy4tnmEob2mj4VsNkP2i2ZY3c1L7YeFGn0R2sYntKD266bSLoSdU8deuPg3vqSVqpE%2BO7uEwABVTP6s3IaP0Jcr1VzUzJ3lVul1oYKFGczy0hA6x3fqHtzA25Av1wssaJm8NNu7BYDbHo3YXn7iSTEO5nWRXqQoiP5GWnQTIO6z99z8tbsaReDAgxW%2B0hwf%2B3CM&X-Amz-Signature=fd76317b1c068665cb23798551e551ff8103ecaae20bbc460a2c0696d2b74b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YCYS7TI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3lmxnn6s5Kt7XfQiwLhx6NesLvjbYTEE5OCIAGn4IawIhANZKZHODTHWAj0faZAvPv0CgVS0DHcUHSMrX6VwyWbVLKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn7yuDYVSwna1spVcq3AMTk%2FZOZoaOIVmIH0kOveRdRVahWrfQXZJZOHRYIHwqA03Bx7qZXtIUc1ZuNeoABHA3D%2FqTbk7rPkPXU183x9E1COI7cKAXGcNb9TleDScchGVkmgs3jQn2x5FnqyiQmWr2nxx2JaqpeWA4M%2BFPDiN7hsGGX71PamQVv8baSdAAzi65PxxzVaxKlJJery9nrTdZLxE4QVfyMy8ifkou0C8bohgWprb1IZIh5hiZz88fCA8tRUEBwdYiHr0Ok%2BZKZubuG5gAPp6xr6zoEZkMifzd4SHxgiYobvMafwyNFPunPy%2Fb7QAz7Rg9JiRw1Dr%2FTMioeV9uu6c7oZEn4EAwVTZjuVK%2FoZa5GHs2gT5kz8tPI8Jn4%2FOK5AjIwYKExrmjWVN6V2wz%2BUpVVAIwWVqiGTUcVyG03RvxqTUeMYBzQicg9yyLgc2fWsqSwuB42Mz7iE33fx6LhiYbzpDviX7%2Fh1LasI0q8%2BjZrSN03ud9gLkgvN2w9E8ZWSoyGr6bkxaj%2FXO%2BLeU1LsOqGswqOgCk7ok%2BsX9%2Fw9PlTB3N0gGXXqUfQjP6e2Bviq5z7OfTBig6TfnAAXxMajLGtmXISmJUCTWZXhBkRpQZI0NdFL2Bs8WFeHmkJVNDEo2ypiu21TDQo97CBjqkAWe1eV5VWn9lgsoPhaqSeOZDpfy4tnmEob2mj4VsNkP2i2ZY3c1L7YeFGn0R2sYntKD266bSLoSdU8deuPg3vqSVqpE%2BO7uEwABVTP6s3IaP0Jcr1VzUzJ3lVul1oYKFGczy0hA6x3fqHtzA25Av1wssaJm8NNu7BYDbHo3YXn7iSTEO5nWRXqQoiP5GWnQTIO6z99z8tbsaReDAgxW%2B0hwf%2B3CM&X-Amz-Signature=37539f34a92b4824d2cc3458b2d20bfd993067e8142e1715967abf4085aacd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
