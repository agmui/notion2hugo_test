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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOBQZVM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsbFBHh3F6wtu%2FfB9FktnGhouwSRP%2BfLlbn52dCYnwkQIgWDlDKCCJA2PA19QbgSVFyV9XTIv6%2Fz7TNoqUscOCa98q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH5t76lVYBoiilbaBircA5xct2an5LqvEILiUWkgxlr4NZ3M6F3geN%2BBy9hllIg7gMMQK4EujozxpmnXO%2BEtOFTjnKbclbhIaXYGgcLstrJQ2ixGQC6CgI9r4dx4EEUduqe0Sns%2Fr84WO66e1ki6GxZQVXfgVk94PV8%2FLjyQgZZHQnX8XD0KGP6fbLKJuMqiyNCwVGZawX4dFkEsXKOIcA0m0BbnX%2FF%2FZ4FRP2T2EfK6p9hV7YCP6htTMlAUQFuUv82L3tWBiUshTHJITEzhdnrO1MOqeuo0BTNrRSi0Q2ASyIksXf1XLvapXcoXyrk5wWSjCNlQDAfymbffvdk0TiFGRa%2F2AZjvkun0LjKY5oD%2BkJZSyhBR0CemVAFmxBCYlsY4%2FPJrGHJyd6oYDdjPcC0imMGpkPeWesE7Quxb801q9Ie0tF591RWlr7PKzhuPMcysybA%2BB23YNScC0ld5HfoZZtdKNAAXomun9JCdA9%2B%2B%2B8t1VcT0aX1dtVoPsgQy4w9B3IF%2FLBQYr1dQBk%2FhwS79AviXkG1bSq%2BjciO2qeT2%2FlXyGjLd6HDlzVWM8HsE81GvkJsyXIHPnzPG5pUzHRlVnHltKc3TADohCQO42sbjv40O%2FJAn4GkvoJLNQgOS6ID4jJKDMxHzhQRjMOmd9cIGOqUBRhtsC3g9CuwL7KjaPyL4NGXKve%2BWJwXTp%2B83Ukgjt5a2yBovJYMIDWCqh9X1vv51Hd2DLuAlEtKZgdLTZlFL9FT4BVhCYZEKdgeXFTdAH2LMQMWNo5%2BKFSnk0KrCKD8sQiKKmG92Bu2Oxvo%2BQE2lGPYppq8XeoO07YWq7jAXeyoseFLQUgqFYxJmKzCSIL19AXfty0Jqgfo%2FINxz%2BVUyFV%2BTDc7o&X-Amz-Signature=91e6974ace012468f5144c22b7ef615c4f2bea3a91f01677e5754e715520dd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
