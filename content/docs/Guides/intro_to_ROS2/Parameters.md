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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKW4USY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFPTsGpxaBvwVVkFQHLmVXBMKyRODR95ByWkiWRm0VXXAiAygD%2FWuiD1lnNFH8ZQV3QoUDCi%2By8mNRatni0G2jtf5ir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM49P672rVxLRlc0%2FNKtwDsi701E8hfso9anjrkhZFNB9oaOBR2A9vjfJwrvwBQxrtkAHJoIjXYJgR1Ajoau1L8gb6WOaMeFgR1um9Q6PFhCuSkufPV8W4RJjST%2BYDDtULIoOWxbW03Q9FT5adPregFW7%2FiIWjeiWr2Y6E7apEd601IZ40JU4oWtoB2IosLxpS9javnDpePI%2BdVq%2Bpq8e97IQGRCa4qASInmWvN2sViOnLSOWD5Qgba%2FalFBcUdeE0Sf3QNZe35y7SUz%2B2ayE4YrG3UNcdCnJp4e3G1CEYxk9nx7bvirG%2B%2FzphSnkQwc1GugdapQlmA2ldxP5mx8niLcxvvZx5XfjxY%2BTYzQV%2FLy%2Fxr1lu0XgcGVpkZjX6SG0QUyHIYdR%2BpeG1EIptVadNewU%2F4zpDY0vywxCkFxZx%2FZKY25srznfaFm0c9xpvdYq7O%2ByjhMZr3w7mKr0CiJsmEuyEgwkNGWLKBTLnQ%2Fii0rM3ezz46bCuBhxCuBYv20B3HjDvvGvX2M3JgX2VFMyZe9E%2BNYlYg%2B%2BufPKaN6MW8aUe%2BwUr2R9xpa3D1r35MCYCC3QkB7QqV%2BvHl%2BUoOUPWKbdrCSwfGkaKqlTtP3yQETR05yfffJowXQ2R%2BKyF3qIflNgCb6woPqXnHdIwseGnygY6pgEbyJDfTdBwUdqFh7EsVL4Hn7Ah0vLbeBlLMytZT0FLTjnihjSivfQUkUscvp6mOr88rnAvM%2FIhy1vPZ4E2ZAg9LCg2SAScFJfxTimBOEWnEzTIYr7hkkuMjALiFoC0ytAPx0%2F%2FOnLwqYjdsIKu%2FTC%2FG688jVyqZE%2BjABDKOoiUYvX%2FcR4dLwaIXr00Kh8tCIbWEBeHaW1uivzIQhopBsrWk71qyGqM&X-Amz-Signature=2748a5fb44d3ae7f5a5cb3d1c2606e30d9f10a77f7369de93f61cef507bfc111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
