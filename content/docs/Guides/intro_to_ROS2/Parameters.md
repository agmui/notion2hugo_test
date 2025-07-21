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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE4LDU6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRjpL7kSAXFP50v3yDwUpUrTZfedUofLAWMlVEQjANaQIgEKrOxBLkKXtrGb8UknBaGoKkFAa0TQX5erGE2MRwfNgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp0UMMScIVpB3maPircA0ROPkvq%2FPQPVNFXnfHPBhWkrP%2B1eL9w84wU9Z28h0nkjHMWrpt8IMXdmfObbqIz4HcWYQiGejFas4xhGlsN4RKTl24xu%2BL%2BWv5U6bz6TZ3XOyV%2FpUUij1d4O767LhSh%2BUMXaHCD7GzroXPFcAgmMKk2t3FaWiiuXKJfzY7MtrSCD5xLmDTEP6Sni5i3rDrlFp49YFdS9Jl59avRfxuv95xZTRiltNj%2FHeQLxoI%2BlWQm%2B4IfLsSptT4CpaA2sqN7gyjBB6QEwh2xeDj7duII88s4A2beOh0Di6F%2B8fakiW5i9glU3cD%2FxUdIE9nR851uupUB8J4ybq0wRjpQVuKOY3SZrMweq09k7dQXZRXrAFbzk1GtBrSUuvf1ST4txT70B8QVr5exOn8b8FjBQO68%2FLRUiRH9x5i2EBprLpTo5n2F49cKCWno47zc1362AuPo9VTejF736171Tko3QaeYlIUOxjkoKbz6pHuIXgW%2FuVy5cA15bArGduVIbUGlPStb2dyyUnAlxYYZcPZKlhcgsHA8dm8KUNgLANvT4fZybcptK5i1YTwYwngJxpl%2FKK%2B7sLKZYFMhiqgEQiSWyrzo%2BOKwzQNXC99axWRPnabzk%2FyK4ODNRx8UJH%2BuJWZ9MKqO%2BMMGOqUBzooA0CWKGYnMhcBoV0GduIApJcB2R%2BV8%2BKRXR1jFAzn3QdbzRTcv9Zk4U1tp97cx0BS38h1uOPdARzaMS1GRkoJbG1X%2FwOiIMkMTZBT8tswiBPHahY1IcRhWYHznWE3YIRbU5gBxf5kz1B01nQnFNsyhA91mkMVHMwTr91wsDnT5vpIe0C8GnCnd1fToZFlKlLPOdLTf63pASxqKGoyHRzKt3DTm&X-Amz-Signature=9ca1f3bec08dd8c9b695afd972844096885442e9e791bf1d20db5b49c007eb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
