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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJT2FNZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDzLzjYrD9B%2FfyDtsLHycdjoS7n9Ipm3t3%2Bq9e1dmwt1AIgGaJxvy7lsB8DrT2bZHnuxdYnKyrpXQs9eCFZ6A%2FC7M4qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BTnOp7Mc1W0xt22ircA1HCDyKJ1DFIxUcIm1RAK%2BCqXNymFXQXhrVvosxjhcIIfefJtZSIO7AD9LReCzRqw%2F8t53%2FDigF%2F%2FgSzCsOTwwadi6N%2Brg6qF31Rf5qIcrKsVcdDukTdYGRxmeaV%2BnkyWB%2FiKi4kBP7tRceF4KU8fa9gHR90DVSiRsnHXUWwQsLtkMDG4x723hND6bqpS2Nldv0a9ygNZM2qKXURmI5zD%2F%2Fp%2BTS7%2Bhrfl0gGlgtCWG6cr8a9b8LZweexH%2FAVsaatK836N8GWOQybsAnZCkXsN23%2BKmGjAuHYX0pgLbT7%2Fc9WMHUWmjkoHTAY4bqPMP%2BJhWtQObZdsL%2BKdhrfFsnrbKu%2BidSwOkBAluhKywzIkLNLGvPniW7kPA9aYKfhPuu27KYhrzIxnrCtIgZSrsHbXGgvaqIKCf%2F49iB%2Bq7KWesBF%2Fa6FLy4Qw3SPai9iKYvUcXW%2FdhW80qCLKRBtO1qP8skbTVX747ZT%2BUnI0rih3Ci2DN4mpZKqNTGrzKK73%2FKy7JmaXCVhCCs%2BV7Qu055s2RnV7cDKixZ05lK96SLbFYPBCEf9%2BBe2HEUPogelWYP3ZsqhYTXqtTuoFqRRd2EEuaoC4logw1Bw4U6Se50kQxnUpKQIysDz75iJabSxMM2QysAGOqUBgNno0eFtJOikUGmgCBL8v5H%2B1nkcFWFcQBIrLgI5BOJ6SCX1dAt9KZJ6%2FU6vwT4NvChfHn0m07IS03xPZGysjQ0vVjGrgtx9%2B1EygH%2BH0uHCyZhR2pWvS%2B8QAQ9HziK4wN7yXAZSf4c9WwBxeytV7Met0qKb%2BOHw8u%2FA5kDWbG5%2BrCJ8ptnra%2F9ufP3AqJcYbHKILJh%2BWEW2u9MxUU%2FkSvxtkXMs&X-Amz-Signature=54fcc0a083fc94268e6670e2652b25ec25f82e5cf2561676f62c16fdfbb19f37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
