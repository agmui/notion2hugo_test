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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKXK6JQN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqXm%2FdXiI86zXMtBGi5DvpMvVJfE8LQLl%2FHkUpj3v0SwIgY0vj%2FYBzS%2BIGmrmp9yYjTX4PPVp72Z5tm%2BG1m8Qo8BIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FT3iem2sGlvCAlfircA%2BlguWt5nxvVNskHecx%2F%2FTPtWaOj2fPW5udwcp5P%2Fo%2BB6PrZop%2B9xo7Ub7K8%2FZ%2BeEKPR1k9vZu%2FbRm5m4YF075wyLkLT7f5nd5GCS55Upg%2BowS8wcoofaZzxRJhdZT%2BboldLtczbKrD8LeYjHoQ6eL74jxjZ56ITmg76QyB4s0RLvNJm42eqc2%2Fu3wOQQo0Z7JDCl48lq0PGZEiTGOBy%2F25dGXOhqzWgW1e0ZOsrFjeNZ8wukgD8QK0dDTMNR%2BkuUvtxyOos2IW2yKFtoKgTaqtDUJsHB5DDQ8xGOc1mmh%2Fb23ouUoMU6QRPq8BV8tESAzrv%2BNGPUk9Wxq2aKxn0jpqVv3yrWCFrFr2HY311K%2BTYXa%2F0elBGNm1CtnbM%2FeEQQ%2FOXyqjqrs6x%2F1dcMzLi1nMTrCLxo%2BbDUazRPcsvaofggR6SkuX%2FJmjB%2BbWBoJEz0StnB0du9vErAOPegtuDlrJu2ziy9WEVrFFqY3%2B5wJJYHiJNF55AGaf0IvtQL30PZNTYlQ2Ax9iV1I90NJZ0JWXBCMnV1ItxfRKwGfJOhcc4bbC5HQOAabXjNOUsq1G7l5LrKrnFSh4KaweIohsMiS%2BUdqUWUzJK%2FKenHsFGq21rWcyL%2B5KPBKmMk%2BtXMMCurcEGOqUB2oaVRIq%2F1kKXUotOXPUgPnwVlPFJZJYl6EPt5DaJexb1iVOQwgppaDb2jECt9dQFOXUOip9C8Q%2FvnCUWwMfk36%2F2i6r2LLPQFLC4Xko3of%2BfLlD6EF7fd9GWFsdPEcurn0GRQuIPICUllLvqQ74Tb2%2FfdFzqtETfjAGJ9z5bJA%2B9Os0smn6NQFHkMfC0rIoxakVExDWCXVB0DyvhugVswzY2WOR4&X-Amz-Signature=ff1d7c26fa2b86e7d31c0832ab7ba1e3b2f42ecc260b90a1e8daab10a0b63b57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
