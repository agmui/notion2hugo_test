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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZA7RZ6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDDkLofp4ftI2wd6QAeyrev8ltXqAc2JPGKd97Kd54VkAiEA%2BEutlm%2B6IkxV0HZFKw9ycqeZqqFpO%2FI47p5WYPW270YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMa8LbsMoD7dRjnKXyrcA%2BHm59Z%2BYoYxfJIfQNP61hnfAel%2BfJzcHiJ68KPwDQLtLYWoTo78u8sATKJLjSoveiXTXdFSbykYz5Syi6Ky4KXDO1EBuoMR3PrbW2gK5nP%2FGx0eO1fyxUS1TMS1qn48yTw4%2Bic4mWKizOnt38Gi%2BDTmdNY6gXI9qKHXCkFngMA3kNu91y4lzz6oC5ZGIB0B6nVOAdK1OymJ9165O5r36VM8ccL7mISV%2BE%2FYjP8TaKG39Y8qGZSuUio6L0dI32fe%2BWOEhNM5y5RyZfW%2BYs0XEujBsmceB8KfIN9GAYdx%2F2dsleMIjk2F2y55xPfGFeuO6dd%2FkK9UCw82bNRQURnhQbJQbKsB8TQajUThbnEwTnrGso01Tr1pM6CvlzjvXGjgWY8gwHYJ%2FpuPtYIUVIp5vd3IKMoWHrbKRPHiKerrymWlL7c8T0seFMFc6LwF0STWMjsjabfN%2B7G%2F%2F8ssMNOycevPOGsUrBzqp%2FJ43rmsfbQ2xYOseVY310z6TpYICEJrTWKcQYuNGy%2FFN1yhS2DGxZB%2BAUvDKERGZ3NHtizt0U0TEO%2BXocylgC8qE4YCok%2B34QFkFevlPXllqv5nSdwxi72RLm4LM4jrXGczPsDe6%2Bk%2B%2BGYmEeA%2FRqCdZA4BMLmRvMEGOqUBDZYFso7VeBO0JL%2FUvZ81x5%2BJaGKWE0A8rkFCiavYbCjLyIfqdiIgwI0lbj6U6pr4lR1TmTFR1OMLSeqV2hU421gt6hnTP%2BuL42DoRDA%2FVrBxzzQvuMO5P57AufwrMq3u7MKH7ALLdBrPBgdDfRVppKh9dNQ1oqyiFR6UKVQv%2Bk2S4LVkmM7UwHH%2FKo%2BLtfgACHep0anJ9HxKJtYM7xH1n0fjt5PH&X-Amz-Signature=7dbc5087c555e70e489728070e6dd77a1b2d630955b0328828649513418732bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
