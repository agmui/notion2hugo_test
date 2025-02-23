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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNVGUKTO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXaYEMzxMhan7suwDt1rnLiqCJwiWGLiUI6tR7nHqROAiBx1KdGz%2FEM%2F8N4vHYsbvCSMuqp6vHsF7t5wSvOmEIl9Sr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMhYeHeuLPqUsZIrUJKtwD9Mf4XaxgxpAK1KlgF90wKHBFFAnJ%2BiiDUcBbckmLXAUrg0hS3w5lf8bPgKIMUBsTrFNBu%2B5IOf9PdR7A90eWOORCOEkX87jcO10w4cDVGH7JUW5XX560vnBZiNfGrj%2BWE2qfvsc1J9vVDaIm4gy8p0vU8Ft%2F16qA46pq0LcX3AQHwYWEA2i7TdujrxYO%2Bs%2BZSGaZOzumrbIJ6Zrl26Lck23otRaR4oaZT4Vn3dcI08QKH3HS%2FjONKCpDUVbtGqrNJzxcbCQ31vKuIMnml5YZZ3HXkR1mgNjHzIMuUz6aqS9jydq15iaLzzl67rHk4VMArUxPm4%2BUw91Z3N%2Bd%2FcyhX%2Fd9IN%2BmgAySgfiHwWmAlUjbaTQ6gWFH8Y7FIzPduuN9PMbq1H7GjMbiUcQfRvSSncVrvC07RVpbSd9NQKQlkGeq1Bcmzz3PyyqiorlcLFp2lrcdMVIFLoZk%2FLwSZ5u3Bg46W4UsiXBJk0w%2BYOaxf%2B2PtRkSGICSx6HU2HC6XDuTMDlGZp8hDtLWKL%2BN9m9M6gGgbscfTDAwXejTuZpCz7%2BU8zbO%2F9BEv2hPz5nIdeta7LRed2d7lg7zO23nb63j%2BWcWLPouQMX89HMJ4DdlmYNhVgNRTPnRnirKibUw8urrvQY6pgEJVhfAp6wDYQKo2is%2FpfCy5gv%2BEVvvy8b3KuTd01xF5ACWP2hXQkDAZds5xKW%2BDei%2FxWFs0ZEs%2FAUteGHClkAKLQUv5dDkW4FEjCe1a2GGFC29IxbxN2dD9Tc7Ntq5GFeN59R7A8WK3nOeNsf4H%2Fu3fSHRe%2BpeWu8kmWRYZcXqdSokvQaBULLkIhq9YtxbLzHQVjpAbNKxCDYVZucWIr8tVQxOdJks&X-Amz-Signature=10618a26270f3ed41693f000951ab264dcacc9f4498fe9f07aea6e349eaa4210&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
