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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQV2LNY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwAiC4y7OPW8t9MYYcxVIcQiH%2FJf34dTjSgJ2IexsZ9AiAaU2rdljhl6ljQgmEbvnJg8aRAz6u%2BpDeNIBDHc2wyAyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMzGIeUXRVx%2BX0cqS1KtwDZjcJ2zdg71bN0xC5AAVr4xK8fDb8C1astCibrm38SHu2hf%2BGy%2Biz%2FWmMBmcQTfwBVBNzWAUChLloXHmRzP3%2Bezh5DQxIeYWieqN2iOFCY8HkGVnhqKAwx8haboBJamEoZtWLSmMumRgSVZ6qfVG1e6fr5PQauYgO%2FWIur1koc%2BfL19%2FmQPR5QG3MFNF2V7zVmnDHB4DyQWt3tkVen%2FAzHPkOxoAFlQi2gW0ZrZniDrvAGhumbeNJbAUIyPw1gvncHNUE8n%2BQKYnPaxKwlC4GCKxcfZbUKj%2Bjy8f6oPiyl2smJn5m03rADa8ISrboMv611UnO9t5KFNoaZY%2F%2BmAjbpIh2JpyeDkdfgMdxTMhqRFnxpENKlB%2BxNcn536%2BEWJLTEZTeI640t6DaqobjVLS7nKthyE%2F6LJd8iplZsdOeXe7j8mtrcZ7oRVd%2Bye%2BPSMQ7A8kd9QvcvHKP0zC9Fq2GdZyM8hqW3f9fCneRN46k1P83wzeubWXTbanqD%2BfQteF7QS6PJUOB6jaErYYMbDrmQWoB0dLK0i8lceNKtvRdYfDYY2vz4sA9%2FHKEhsrq7I9bLLmiWSReZ5D14%2B9kgm0zRCzlIBOvvDIbtWAxyTO27LTonJhTFcXeV7ulYIkw3bzCvwY6pgGKlEUVbi6pdTBmgcrcYPNcpwINkWtS5G7%2BAjY5cEk2tFe6OeyYjm0Y4HSf7sef0kmUMFyqIDf56uz28mUjb1S5AP1rmtvwFPkcG94HoNmyPwKwLaZDNKmttb9O7KGz2JibPFgjQW4qX0CjUc3cBB%2BrbwHGmytflho9XAUJx2sirXC2psG5N5wOdAaUpSqKys5eHK9JkgyxlTEEeszEdnWFSYWx1B4C&X-Amz-Signature=62e0d11a9e83e6ec02c3c0444626284a8c0b297c90d073412f843bf92d7723ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQV2LNY%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwAiC4y7OPW8t9MYYcxVIcQiH%2FJf34dTjSgJ2IexsZ9AiAaU2rdljhl6ljQgmEbvnJg8aRAz6u%2BpDeNIBDHc2wyAyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMzGIeUXRVx%2BX0cqS1KtwDZjcJ2zdg71bN0xC5AAVr4xK8fDb8C1astCibrm38SHu2hf%2BGy%2Biz%2FWmMBmcQTfwBVBNzWAUChLloXHmRzP3%2Bezh5DQxIeYWieqN2iOFCY8HkGVnhqKAwx8haboBJamEoZtWLSmMumRgSVZ6qfVG1e6fr5PQauYgO%2FWIur1koc%2BfL19%2FmQPR5QG3MFNF2V7zVmnDHB4DyQWt3tkVen%2FAzHPkOxoAFlQi2gW0ZrZniDrvAGhumbeNJbAUIyPw1gvncHNUE8n%2BQKYnPaxKwlC4GCKxcfZbUKj%2Bjy8f6oPiyl2smJn5m03rADa8ISrboMv611UnO9t5KFNoaZY%2F%2BmAjbpIh2JpyeDkdfgMdxTMhqRFnxpENKlB%2BxNcn536%2BEWJLTEZTeI640t6DaqobjVLS7nKthyE%2F6LJd8iplZsdOeXe7j8mtrcZ7oRVd%2Bye%2BPSMQ7A8kd9QvcvHKP0zC9Fq2GdZyM8hqW3f9fCneRN46k1P83wzeubWXTbanqD%2BfQteF7QS6PJUOB6jaErYYMbDrmQWoB0dLK0i8lceNKtvRdYfDYY2vz4sA9%2FHKEhsrq7I9bLLmiWSReZ5D14%2B9kgm0zRCzlIBOvvDIbtWAxyTO27LTonJhTFcXeV7ulYIkw3bzCvwY6pgGKlEUVbi6pdTBmgcrcYPNcpwINkWtS5G7%2BAjY5cEk2tFe6OeyYjm0Y4HSf7sef0kmUMFyqIDf56uz28mUjb1S5AP1rmtvwFPkcG94HoNmyPwKwLaZDNKmttb9O7KGz2JibPFgjQW4qX0CjUc3cBB%2BrbwHGmytflho9XAUJx2sirXC2psG5N5wOdAaUpSqKys5eHK9JkgyxlTEEeszEdnWFSYWx1B4C&X-Amz-Signature=4d50edc81b516b6ea3011ce66f1ec3b62893a1670740ed0940934a488d57e97e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
