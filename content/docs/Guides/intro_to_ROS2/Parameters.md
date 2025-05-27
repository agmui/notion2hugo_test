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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAET3JGB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAONdTnHy3JKGiVB7Yl4ctCMMynvUKXIgYqMss7k%2Fr6NAiBggcJG%2BiP%2FT7jAxyZ75swTrLCqnJsjj21d6ox%2B1fsNzSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMQ56CHuZVL%2F%2F6ENzEKtwDBukVv4NrzBmipHJ02lxRoTvYZSHBFBgUc2zDBcjjBseTal2ZJQT84fauKZ5x02sg52YMjYdg1ufNrmiEflj9BIBSr82FHvyMDoAFD43tGtl7UjI5ZhrEsVsMOq6MrZcLGoefRrc3B1KizsmppUoklvrpPjWAt%2FRSxJZfrja3YMNa0PK9nnpeBABOCJ8K8%2Bn%2BsKrXufhLiea5La3qeeTlXy9UfNX4tKgPOzJVJ7xkdVkw7cafY7gz3S5jrGkL6NFB57J4rgCeUPn70mX%2F9GpX88%2FvycvD8bib1h4SnW0dpvAyQiIOc7R36qh64E9%2F%2B61j0q%2F%2FbQOh9DTrTwQkTfKXbUWz%2BYYGZH7u%2F%2B%2B6G6nZj25P1S3bZ28W2oeShZ%2Fy%2FflpXsnmInn6yDwf%2BBJmxKQx91BPjkTq5StTfrRbisddVN6EUaeLSKOkAXqzMBf9bFViq0018rZXUw6C4sTDNylcEosgmMhAI9cmqUaIJkpHpaXnJDXFsGHmMz0wjx%2Bqn7EAcyhuEOS8HMemfIWrt9qpqUErxj%2BJF9sWZyOVGIZgr32LAgaHg5B%2BhTtMXKEuakbvniJTQkwvKnYt2qMF2%2FxH0Mkt%2BfXQXQLY3JHXtcAyIv1CRrb%2BwuCFjMn1CrAw%2BvfYwQY6pgFVDHWFtfHcoJV1SXcPbtONBg46qSOY4oW9mn4J3vIO3by1r8GlahAAVnMOC%2FC3viISA3Gg0nEWuw88ZjUYjh0YFgCEKLzwjs5J3BPrWOY8q27U9qixNMBKDAgvCgg4P2KaGGDQFuuqrm9FZUTUHMrZFfSIhfbluFHlAC1ga27zov%2FpcdKLNA8ZFJhGBbWe10uygELC2qOjZXh6FXY7mV0yeYhyrHF4&X-Amz-Signature=567d987fc800f3edec92a1e89b4ebbe6b6776eccfc45e0f97423b41e2928e6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
