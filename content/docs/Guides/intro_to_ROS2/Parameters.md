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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QPWLA5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBvcm52kvsTGzp7b%2BPMBFMAbcPW41oFVWBHxybW95cCqAiEA8xeIRUGXzY76W2w4rJsBKDY%2FpKBwautEety9m5lGBt0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFqvoUx4JIqxGIV4TircA3apB%2FK9qHi41GCbev9lpcVVp%2B7iOOzlZ6VhDe8p3jUICfF86WzmCBM5%2BVvuYRV9BeyzVmDEA4bv%2BDetDq2c3jCo5vlSUVQAnofwjs42xyn%2FYTGRJ474Kw4WHLNEFpnNHldFbRXkLfhduUku8mXeyEbs5LQgN0eXyk3ZaoCrFDiLfL9n7BiuqaE%2BxkWI%2FTRneP4UXuEJ%2BL1noKuUMoY1uBCpLf8XHyHMDv16f6PEQ5xH9jgHnl84elS5kSyDf4rJf2QY9cEeIFCwf%2BDX57K%2FJMXPdY6JeNobIG9eSb1ezNaFc9PQydkM0R4ENAkZNBd6Kjzk%2Bf6DmPn%2BFYAEtOZOwXH9rMnM1gWB5Wowy0gcyTfzgPlFtyEGOlxdQtNUdK9dxYR6FdjkxUlWa4uzBuHwcTAnSSAmUy%2BbkdngOgCoTQzXr5WrIevy8ZSpVDiRxjw0AocuMsWf6gBw05aqW%2FG24csjf5YzBZtgGR0qJky7kOoWmW1tesqwQA162s53hjAIYQZPJ8qh14Tn4%2FRFmL1YTiYViAfqJzdCmHBfUEIhHiGzppZj%2FPtDgWmoi%2FBEhxghx%2Bv89uwq5nt8zVlRShLcj1vOZ6z2zWFyqWBDE9HqBosu8jWimpJTZ7tAN9%2FNML%2BXrMMGOqUBKntR9Ma%2BEv618hFN6XuVdlM8zEu%2BhzJtbsFZb3CZqFJcpxJIJukRc9TBEn%2FSpFP6jFbvxYB9VhHsvYRepx7wRtmx19bMffmsHmgMN1%2FqXcVjleS%2BCXvqVm0limyDs%2BmwWEzM30o39Kh8WdL6qN2aYhx50fV03%2BapZNP210BZA0kleXV0sQc5nTHtYy7zvFVxn8%2BIK%2F3djnlgG7K%2Fp5jeq6W1pNjU&X-Amz-Signature=14d8b55a011009c25f3db6db102574706d6dd3e091812359489ebe2a0464aecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
