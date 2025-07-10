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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSLYXR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BEZHiUZZp5Nn3W9dFpD7teoqNVyR6uWF3P0ece%2F8sJAiBsZI1LVFcb4dZrcTsJxBzmumVeMpWpanmTSoCyfhN%2BoCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFazPGrNM07gBFciKtwDc2bnAdQs62yP3qlsKNyKuxamcxgosTCHckJH%2F%2FLfBsVsaxtTp%2B9hmSMedPvL%2BvjtCatmqMOBVWGVILz%2B4GYd8Gdp9TN48cSeoK97XRGYTcG4vtghHZMtKjE12OGeUDevCwutNdnozyIx2VQd1caAF8oRyHRyoIa5zxkHBuiwkUYQDlXXk2qVc35mupKxWMHEXdH4H%2FJxQUR658Aub9OcqqjTvlT4amv%2F1zTHXIa3hjoBqIWGKTxXkwobAH%2BaPXA51hLXYGk0ZqrQb7GVppQY7%2BAWsaYtyDKKh332u8eDDYXkz%2BeNFRKjrJL0s4SknM%2F%2FAPwJIGho94rvE4NGBvOmwjJtkcmoFxnsITKs%2FkuDNnXdPn491ls223MysH4C4HFss3Eq0JPBr%2B2zB4NSwXu386lp3iBerCXNmQ%2BA1zznwre3nQ0iBLV54G%2FmyFtkzd%2FA%2BHRGAupo%2FfVXTi6ae1y0fi87fieIWbJS7omU6uNtz0L5yNOREpesRiXvYcSxAURiQHT3B4N9xTG%2BKnf3BlPuXDFiKOQ74mdgMXG0qItDX7lNzYl6vynH%2FxKM0JItnEW1adXHzcODKl4UGspMcZYYrqWDoA1yiyok2Iq9hC%2FCpR4RwWoh4ugKsjyx7Rkw1dS%2BwwY6pgFQ9XfWcueZlG2RzFWMp%2BmC3QcVGBgdwQQc9QMRVEp%2Bf%2BKlLAH47zedP9YWg55fTEfQPbpkLzS6NbClG2dd5iM5hG6HNRKZY8CD%2FFWvJkjlBzkI2JgUf28R%2BB2jEuh9DfN7PQnEOW0IORZRwOKjRNlSynA9C1vIqfB3125siwcoDm6H3tCG5upc7Q7iFRgUmVlB%2FXUhdckE2%2FqCG3NTe0zH3%2BgmrGYO&X-Amz-Signature=c63edb2763de5a051919bfc2caa00b673e86a0c4ce2863ab025446ee36e8b255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
