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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCY7YLBL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCMMPmHO0nTLZdgTC0ynHMTblHY3Lonol6nLHxGl2opPgIhAIx6yMT2q%2FQggptu5ykfSJt5n4WOXfV6bQjpPXZFKqrvKv8DCFMQABoMNjM3NDIzMTgzODA1Igzk37mF9XtMWlAMX78q3APcTPmaFUEZkT%2FIabNYmg%2FF%2FksY33BKoRwMIEHfrI59tLDA%2BuHwDlLIFb9DDz8WWfQtZFkJ%2FsmSUXc6xRmIIbj9Wy3ICd%2BjNdHw4viC7Oj7c8MvKywfpdQEzkOGkeRCoUhLmgv9riXXWCIk5%2BrPmZWUmrw5o8VOjo%2BMX3anbjNsvLGMprO9gl8dspDzu4HX6qU4VqIJ4QuNelgM46TZ3CFAleivvJVxeM9HPLyk69Sko4Co6dX9XUrb5Z2JUWS3xAGTX165IB9NjpePATkwQHz3ReWGmUFugnulXeIq3vgEz3bnELNSvFL1Bogj7kVQ4YkSBvqgWXoyuF06NhzaZ48Klvff0IRgKtZkTU6Jb2Kwt38%2FlgTnuwE6VloLj2Md6dssriABcnhLiesLd%2B2y5R%2FlQXvneCzOV7QNMiISsqu50pqLZwqKVYl13dYbxr8gT52f4n6RIQMYOPGi1aTOeHrmjZLHS8WnkM88dQkgSGKCHryz1baCRc1zp3IX5AwBDB%2Fd6xQXkVIdDq5CBWuUE6s6pCCDEE1%2FN3odv5sDiSVr7v4rkcIbR9oT7%2Bq2b3xnPJdZkIzLx%2B0hNJLI7V0a3mceEmjxE4nDsPkBpbjgHlcv4aLetKEX5bPLVKkEoDCqva6%2BBjqkAUvzeLXgSkV6rRiRYjo3%2BMXseAnhynEXhDcU5b2BVn%2BFdVznqrpaGo5j1h1dlfk%2Bnj4g3S0VSBN9ZixX8jB5wWcEzIxGmmWYHZ4s0rXvQpq5Fxpgje6YCo3FzoNFqtJytsXYEUkEjvvfqqSP8HSxTVwT8TsDKh%2FfTD6k57MR3hffSk0pUM3VRiI58OSui6tP3%2BWY1a8np0Yt9kjf1QttUrCBoz7J&X-Amz-Signature=5e3a11cd9d642bbb049afa0ebdc9c3f1af9a6d61a2c60a6a0126b1b9f8c221d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
