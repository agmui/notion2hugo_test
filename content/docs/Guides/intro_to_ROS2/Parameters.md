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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQIM34M4%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDvZ1RBAbhXfONy74fHLZi0htqaVH1KOEmASqSwT54wTwIhAMlCh3FZb61t%2Bot0OjBb7n%2BsNSjGtYnrKH4FTZ9UDXW4Kv8DCEQQABoMNjM3NDIzMTgzODA1Igy2R2IE7WpaqWLLOT8q3APh12uqd3OBiQ4nJqsVv5jbjYByWcDZqo7ZoedXkBmi1s5l9BLy8%2BRxeXe17FX%2F%2BwiTnIc1fQPc1eSZCIhsHBS55yijVknOhkuzVJPi7MDXZznetbbY1b38OrVRMr7FFiJvTy5Pp7ONyZmr2qeucBfYiEebWjl1C5gyxQQIIiDXK6ykm%2BbR3X7SQaNi%2F0VXQQUuWac7dURy3iwa9YGRVoWu9FDqWW7Zd5GZaDtWcoYX0%2F3ZC%2FaKkP1SZFc6X09oe%2FX22O0sMA%2Fn5GFL3SOxlbOMZjkVYfCPvLd%2BevHYYKOyVE5RCwOZ%2B2WX7DpjCwOdoeWX93gdT76LvErmSWrWadCJoHdUf38y%2BCS0vmfDxn1DIgZ4%2BHMdccrECXcpyALGDrdT2gfrnsgaMt9Ff2dUIqUXy%2BH%2BmCueLKihH9Ta3NlQfMjS3VCorJh3p2L3hWynm6nhtjAtkHGpWA%2F6l5SiMAWri%2BKkhYGIg0DWYuK0E7tf2tQK1M7OEZ%2BN%2FVqd8OtL79nINhOR3HjG%2BIzZQO%2FT1BXEMC%2B5%2Bk0l26XjHCopLtPqvP3uBxVIrMh1%2FPDsilFSl7tEXWAqe%2BYBtlYfweA%2FLrnaBteEjhe7IcUknnM9M5yUhxqLAyACKDHvszLc5zCZjI29BjqkAZESGYSEGl3PMxpoY7d%2BBC7IIuEpmbdFVBogDfx3rrXZiyZbPTjhYLGiU8TGW76%2BNhvPqvsYnF2FoJW26OatVN3Z0FK7Gjr8MA%2Bi5lMrg6o0i%2Bn7jaY76HHtn8ooZrergjZUNBtJdVhjb0dRyisZkZlkOqX%2BNuJ5SWGlNZMtjawsrUgkGvLNvhLuf1SdGY91RXYRDAgaCgyLbxCaSuuxf30%2FBxZ%2F&X-Amz-Signature=2f548af8ce0ce9c9409a8bf900d1a46382a8342ba22530b078279f26c00ecbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
