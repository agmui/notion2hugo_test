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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CK4M4UP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClnbtcMClmmGVBGJlVslrwNmUEvWkq%2F4adBSDbeIDfygIhAJCaKCVEY7YYQNTcwKrcOIlBlArJ1bcdbO%2B8tsxm%2BlejKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUW3hXejxPcf7W0Pkq3APV9sqBBExmJ%2BezdjtqAQ3qsqNupjACoperCIgMV31Y7Mn52i13TodSxqNrVuONuo3SvqyTDui7sjdNBxPuyQJ5nLJqyKiC7haxK7sDQfd9HqHnB%2FXZuplOOHZf6ko%2FoWdG93jzylWZFSWxgLgiIYui5rh%2FXgJUNF2EsIplgR7Epq1uUzB3zV1Q1nCVhHP3Qv4F%2BuWZM31AzQoyVRH4nfNN0WP%2FSbf6mNmB8AV2LKRIyAQDFxBHApdrf%2FLCpL8hbSvZU8VIXYXPiB0YLIKAWT8vzn24vb0kaKdL89LwU2aeg2%2FMDvrEbz3S7acZ3SEAnuB%2FszTBJkUIwktwzS0l%2FeTtksxbBGaajet2uX56gPcSSq3%2F6VPo7viYawtlZ0yg7EgOPgK7C0fKtrV%2FIEO8I742pc5ZMjj3XwPs874l%2BThL70dVsKAUncSWuq8ey9a7P1eCui9yHWh6DC6piJttiLMOe62xo8kUfw8J1hy1UOlS%2FeDy3WDbCfKUY3%2Biokj4OF%2FK02iQhbG1DAVpD3iKSYOuskkJt9cwWf3h%2BxuHbMNp6u70JTRmMpiK6jyfAY3WnDxl1EnyeJWo7KL60abd6bFfhq2P86k3fHXz74qC9GRIyX%2Fq%2BT0bwePMnsWcxDDYv7HEBjqkAZWefyjlxcNDZ6p%2FE9A1R7eUZaR6Eeh%2F8MXzyFVWP6EkjanT2c%2B%2B5WxS2wTni3ZF8FUN8xWqETQlV690dXXbsSzS8JbS7A4zhru5%2BMoFkBiIzdaU0PacivANRvfRBefgK3zWEQOyYKxuMU9RIcUKkCmvVgZ60Wos76KDAIAdaXnyZmZ7lWRdGL7X5o2p5TaR1Qvm8TF9ZSbO0gyFwWrO9yQTnysx&X-Amz-Signature=3941522e1774ba18bc7d9f53ffae1eaa7351e99ebe067ef90d6767bdb7ee6dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
