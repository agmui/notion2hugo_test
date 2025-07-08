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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNPAGHSE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHWqHDz7Ck1Oqv7aoOX9UspOZ6WoyLmiwX1Ykm2681YAIgEklpsHemSgjRS%2FG2NFXO5cWHTqXY1cmqAbYqBraT2IwqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOuo5h93%2Bj5yDYT4ircA9GUxTAJjZ8IL%2Brjyg9Rq9tQZLUOUA9cU%2FTeTzHHTiI9j9gkA3kAa9uP%2F0%2FMzX3fPUkzLZgXWUER%2FNOyM3kuCnXHRMOyeg4f8eV1ieWvldAi9bMCkv8QvHBbALWEUuKfwuKzRiQpeTLsObIeUfpDChzq0YuKAR4x13%2Bxi9%2Fm9fzfdG6cEgneYEW0IDDcr46bEMxR5J4FWMxxc7SwLBUMKTJ%2FpJzCxWeOysZ4AHrgCPI4i5%2Fw1sZI%2FsJ2X%2FC9Tfn3csZ03104Yahm8byC15A3IYyw1WeH0WOGouNV4ToWF1iWnnjOUO5YKGViTg7QO74%2BNwcaKvvqraQaMEUAFB73j0Y5e1dHhY7rOnpva9TlZOKX3wYVwC5CLDgnG5eo6y27krJQlQXeSlLzCBnE6w54dRbXP8TRQz5xgcB52KgiHB3Grhj23bfR2FqKQZIbJlmRLrMb41m%2F503srQq6MJhlLM88Wvr7kM4Aa9nG2xM1a9HXeKbZqXUA0eP%2FyRI6CpiaNPTlV1nnUtWpeZr4FjOQlRcJYqF9FAsWW9gt%2FGahDotje73YA%2FSYIEDkkg9A4GKqcOAmTMPvLwCWxGwXO5A1%2BgwBqY%2FZ2pFHGsyfv1EV2%2FQwqeTfwpO%2FLF%2B%2BbhKiMNXYtcMGOqUB7D6qFlEJwj4CWzS88otSvQd%2BTUt9Zuj0wqm40kCxit%2FU8RijpqndnTFZcRukKkp8aNHRweSqR0eKIPFtP51e%2Bv8WwmfaEbJbMBEaH7dZF5e8Zw%2B9q81L%2Ftdc%2Fh5COz%2BMGtt8iaK0uIHZJHatHZKnTgHPmWot7tlguJUf5PQ2%2FxZW7zfM2vdborrf10TcjaEojRH9k%2B5JoY2Iyu1fzt5YREltE4aG&X-Amz-Signature=6eb5b2bc58160f7d93509e5c1ace6698008a99f63f03e06cc5d3ed2b12734ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
