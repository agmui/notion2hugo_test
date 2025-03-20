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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZSML6J%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDt2xxMpDC4FxoZfGShKeBsX%2F093O72REE3aE40j4bErAiEAmQsl7r6lbzjOvvopHg97LVJJm5uQ7B2PzanFf%2F8%2F8o4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlUuLuczQI2iYfFOircA%2BmaH%2BHD4uLdo4dkK0IXjUMtq%2F%2BYVyyvXzDkgEAKXeLVxngJinUnG%2F8fr5zgV9FefS80MJj8IEj6NYwOP1%2BGa0UcFJALaoaLQ%2F2DbyJW34KmaQrQLaPmtbMDM35nOQ1SDmNRTM6OMUbkdvVr0%2FVZKkijF7jlX1U%2BYjECTGrYbEky4J%2B9TUmRlMFtMQeBiuZvsoA325eBBMtPUnm2bUgT%2FFYUHu6UytSA1y%2Bc6cp30w%2B%2F4XygdDNfSravEIS7lIpB0uqbUJdMY0LUm%2FKGAD6Q0ZOlfbvsyAFy2yCNt0bgpx5B80RXUkLoq1vqE3kKLiLQDcPdNC5vI2STlEZMslqvK32yrLdMu6Flf5dmBEO%2BNOxmgTjs2rAH6OQ8ms188S6aEiOuRExAjFJeptpdvNBjpuN5YUnGlvpD2Rn2LU%2FXjfaoai4LB6TjoTGqy2O54mA9x%2F5izRZ8YdN3lY73Ey21gF1XuWJXlC1LJVFPK0WbCS5zE9Iy1ShpmXUPy%2BVc7xTXM%2F7PG9pkei0RI1YXvl25N7Qnt%2BjAfYfQKLGOekzz9B1BVl%2FFR6fsh%2BqQe58Ck48vU7u%2FTsjwSg51pgGEQ28aevKQEApz4WkwO36DCtc%2BM%2ByVxpWMsfaAsE3ai3ICMMrD7r4GOqUB8QDh3u6Uba9s37Z4lcL44HCZVG%2BdWvxFl0mKznDnHg4gGvdeDsUFsRdzZeWF%2ByfQaz7d%2BdKAD8uWq0PQqbNEMSFrhSgo3QLu7xhBPDd5lr4PU%2FdY2zxct0uQtYSX4l8mROL8XNXi2WonkI121PZ0IRZ1mJQg6J3buK%2BC2rpyOOrDYgVvJq9hlzUr7FkWp7UcLmx%2BjQ8hcTg16p7%2BPAjraYWCGOZd&X-Amz-Signature=a35e2de24043fbd9d910c76cf13d06c712a31ecdc450dcead8a2a91b67451048&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
