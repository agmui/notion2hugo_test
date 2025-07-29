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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7RGGMX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR1D9e%2Bfj4psv%2Bzusj2V050Hk%2B5iiHLU7jZkazJeGW1QIhAK3T7WGgbDFe54CUZ5PdiiaWYlHvooeWAjF86eklcvsTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjNIPpW801%2FcmIHtMq3APiJ2O8Zxdz%2F%2Fc3sbh%2FGijk4JvHT1lHYes%2BQYVXNSJcR4fpYX43udyZjfEFdgzwchVxWeQPfi3Okk8bL85jh%2FTG1VUMlnZ3eE%2F9W3qp7KgtQri9XlyTsX0UbJcuOFVTTXEHrusUqkr4WlRQL6ZUsGWtNhlijvE8W05mdSZ%2BGiKxILA0fZygwEQopVZXvgepad%2BE7BVBe2Cwin0uqpI36duv3Mfn5ICdUGHC03bo61XSNe1nviOCGY8yGvKqI1uD1wFep04fFKFKOpd4e6yEMCx7xBM%2BKh4bJ%2FTjhOdTGLjYqm1gjTx3%2Bz4R02nQVyrT221GcNiazVRtb254gFtEIsk7RhWfPf5vo%2FuGpf9FbdD3ObKKJ9MVIlpYkdC5rHw4ie%2BRHPzJqsev3atyjaauCVmS77ItUIQ1p3uaZxzWPEgFF%2BpwJXsqyvY%2BidwOyuvjOIvDRMmry422%2FW6sFFS4e6tAtcpxXdSNszULj5Ln%2BqOklZhNRn4ichmIsujiAGj7HGdECvHwPatadzSX2ie3YpHbQiIjCd2%2BF01LvEFs5bu2je0TikfziDpWF3O4PB3GKULORTc1PYxLQqmR6Ztn4xMzximfJvtgoxZt18ye0TFE8I3PdJZtaFR4CgOwDTCSrqTEBjqkAZSCaoUxLdDtT0gIpDSiQ0O5W%2B4uc4QDe5ASuYg80bw9nJDXXaSm%2FcO9rFVhGKAWRDehvwac0dRk7ShWowD9XYIFHxQdeLqTe8KivW1C56oj5nAOeUDg1yT3XPS86IO09IFhyu6VxegqBBomZqosXt%2BR3zD7%2Bhp1U4k083YsmB2%2BzY0H1U5wyAV71oa3lG6Cdvz%2BtZHh15VyisjaEmXL37AjFKwd&X-Amz-Signature=7dabf3b0e2a38fba423abe84c403d114f53ac4a6073c36604bc5c345d59d2a49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7RGGMX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR1D9e%2Bfj4psv%2Bzusj2V050Hk%2B5iiHLU7jZkazJeGW1QIhAK3T7WGgbDFe54CUZ5PdiiaWYlHvooeWAjF86eklcvsTKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjNIPpW801%2FcmIHtMq3APiJ2O8Zxdz%2F%2Fc3sbh%2FGijk4JvHT1lHYes%2BQYVXNSJcR4fpYX43udyZjfEFdgzwchVxWeQPfi3Okk8bL85jh%2FTG1VUMlnZ3eE%2F9W3qp7KgtQri9XlyTsX0UbJcuOFVTTXEHrusUqkr4WlRQL6ZUsGWtNhlijvE8W05mdSZ%2BGiKxILA0fZygwEQopVZXvgepad%2BE7BVBe2Cwin0uqpI36duv3Mfn5ICdUGHC03bo61XSNe1nviOCGY8yGvKqI1uD1wFep04fFKFKOpd4e6yEMCx7xBM%2BKh4bJ%2FTjhOdTGLjYqm1gjTx3%2Bz4R02nQVyrT221GcNiazVRtb254gFtEIsk7RhWfPf5vo%2FuGpf9FbdD3ObKKJ9MVIlpYkdC5rHw4ie%2BRHPzJqsev3atyjaauCVmS77ItUIQ1p3uaZxzWPEgFF%2BpwJXsqyvY%2BidwOyuvjOIvDRMmry422%2FW6sFFS4e6tAtcpxXdSNszULj5Ln%2BqOklZhNRn4ichmIsujiAGj7HGdECvHwPatadzSX2ie3YpHbQiIjCd2%2BF01LvEFs5bu2je0TikfziDpWF3O4PB3GKULORTc1PYxLQqmR6Ztn4xMzximfJvtgoxZt18ye0TFE8I3PdJZtaFR4CgOwDTCSrqTEBjqkAZSCaoUxLdDtT0gIpDSiQ0O5W%2B4uc4QDe5ASuYg80bw9nJDXXaSm%2FcO9rFVhGKAWRDehvwac0dRk7ShWowD9XYIFHxQdeLqTe8KivW1C56oj5nAOeUDg1yT3XPS86IO09IFhyu6VxegqBBomZqosXt%2BR3zD7%2Bhp1U4k083YsmB2%2BzY0H1U5wyAV71oa3lG6Cdvz%2BtZHh15VyisjaEmXL37AjFKwd&X-Amz-Signature=cf46bb646840868b675cee790c6d7c6cd15e099827a388cb3055d9ce2849ba8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
