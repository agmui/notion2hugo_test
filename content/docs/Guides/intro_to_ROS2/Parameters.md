---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JRWJU7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8qL5a1n53zLdRBs7hbtsw%2BeB4%2BGtUKqHrdpgCIJC8MwIhAMKfpr1rYkCa%2BlQywLmCxyhsIw%2BdY4t3izdSEaQXKn5vKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpyTCkrkp3nagPmrMq3AMRZfbxQpobtxZ59R5L8LYJWosWLA0Q1t1SwLrfgdvgGEmjbTsh1OvpzA%2BHZJfK%2FYahOSxZVy6UJe4vYdr9i6OjRLw3oq0pQFESjccTDksqkfuaM4icMguTiYo%2FF9CxHJJ1DFmDfuYCYRtMDAaB77ctfD8UiNGDfN8B3dvE%2Bjg7Q4NafkdB2kJ3%2BuhNid3ytrPB1QdcUQnbXhaHLYOwLMItOad151JTB8cGF5uIQeKyt4MmlRFoXwVR%2BDZRS5sTKrZGIVzOvek1L6CpSMW%2BDjuqsMwSAq4M816Ic4hoH32MtEtvHGrSpYtp9gU4vcwDk6NVCXHs7Nix6hD11zxU7h%2FzRSm2OjO2A9Jy9FJ5c9C6%2BkkceMlJWWUfVxvxJ4nkcjYbIi%2Fn0Rfpwd4Capd%2FA30QTKItWJ1pPsoRtrQSr%2BOOG3SAHy3ZMfOOSAjwqczIzjYPyVCOv6%2B%2F3290NBd%2BnV40X9hS3hcjrYTJJJ7NBvIFJKYWO%2Biz0HjHnT%2Fq7Y%2FRAhRoTtoSziUgmUWVo%2FLr7rGycKk%2BDac9tK8sh5j5u9I9kCqO5xPymEJnubs3wDfYjpHAynw7j%2Fp1kpojp9m6FJLh3v%2BrwM6w%2FN7P6bDR9TL3SPDwX%2FvFmPH%2Ff365RjDI7KnBBjqkAaTTgiTE8hI1nwQVs1bswSp0R8mt%2BL4T7Bn9UhANN0gYqa0sCK4YfGGZJvtndT64IFqURe0C5%2FZufra3sAT4w0ivRl%2Ft4dhoziWphz3M7MRs9TW2EOcDs9YTCRRE7dhNaiqepwfbPITV9k%2FS2z0Cof5t1HRHKRiliSSW33wm%2FYrI2K8jjGNP5DxwRCJZGd3KHU8uPHg4aOU6ItXIAJWXhgY%2B4vom&X-Amz-Signature=399eee6651f0f00d26a1820ef1fa165e0c555edaceb1a9468e4a321a9e7b6bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
