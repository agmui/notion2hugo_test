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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXWZKEV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC6w%2FnKPYkt8xndchISPFO1PFkS1F0e3iFwJ%2FKw3YH14AiB5ZTNvGmOQI4C8A%2FFs9vtZtUC1GxfpTZXboRJynN%2FNAyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM4vUpbSk1pb79D4zhKtwDAtgF8PtUtZ9sxj3qa8llGHFuaLtE4r8ycbMc4YEfaXWdvHfVdkG6rdp4kmsl9ZATZ0ISFlO%2FNkR%2F%2FZ8YCUxUc8N%2Ff%2F3wfZ7pC18%2Bcn1NpEp7tMekmgbjOR17y9MoAPhjx92nQ%2Fc5weLcokdcTolQG0bkcAlBIU8lVaTzHopCaplLgUQdmm2PUgeT5cYCpVntHDgvePWGu5g5%2FyaHMlCkXT9Zq64eEP77TXsFpOihWK0UI%2FK3rldaY42jyuXxFlykLgvnqc%2F7CpH5skSoBVld9iosS8LwCewZkmsRak3%2BE3T0ghkZzvfj931BChDlgyTiwfJxVV9uQ5pR%2BrivgP0T4SZhHn9mFM%2FkK3miH7CzCF4vemgdYHSrZfILeyjvVjt%2B2ilgwUQfDiF2r5WbhLT5yi8Ve%2BEfZhAn3imC2antgKjiHJgaiV4HTscsFFlS34PCuy0w6CmPzwFHCiTLNt0jIrhjxY5ivEHNS7cUc02dB7Xfc8v8SNSm3VBO1lkDBZ6cFxzVseASN6wnoVqosmTFcl0PA3YWe605nk1N4tX%2B2CiiLbfbD%2BQWMYferkiYY2QCx4rYAUCmB42AjyPOXeDKHw4zn8Cf1LgFfRgb9rmjlAvZYonYnJybYnxKczYwh4v5vwY6pgGy8R1ERzGa9OUvVZ1JVD1Yv1B3LE%2Bjn%2FI7ZltPdCJtTMj86ojqEqVPcOJSEnVybgC7qr9hVAqwp5FtQKrdyZeALEO%2FbSIpd22vmf9bI2FMSBjWOj3p5M%2FEREztXb4jOIGFXHtoLmD4emvMjCbalI%2FNW4%2FZ4LwvdUlOlTUgrK%2BqcrMCrQstD9dGjITKzJRgDsD9eCjntzGohVYDlyCw6bDNu9ijbz8Z&X-Amz-Signature=d28bcb88a57bd4634a0b873b080b51f1bb230ab9d52712992cee8d7a777d81af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
