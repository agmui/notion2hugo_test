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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCA22LS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMXnXzKZqSqeSft0%2F46y4cU8XwQRWeWCzcxAXXeZ6LlwIhAO%2FgZxR5Znur2pFFnLp4Ml1gs%2BL1HwNa93l4yPz9YvF5Kv8DCHoQABoMNjM3NDIzMTgzODA1IgwZlR5MSjnYHd4GZpMq3AMUay%2FlVE9sakUN9sJqEyQLKhJgUKxJJy%2FTyNPpz7Js7n%2Bvs3F%2FbtQrvC12TG4ZX5E%2BzIkVFQHNYbXkUPM%2BBonCMITq4mk7ZM%2F0KuepObvEZYqKq2oztrZiMX4fzngeRyAGnnD9xVG9oEd84wKlPjG4KnGeX%2FZOABuFh%2BBMuvKtArlRJuLReWTcc7840WHjmYzmLHgbAp5UxZPle5NmcW8kkh6QKJmdp2QSqHCURFII9rt1osTHdas9r1VrrCEwhYoGmIx3mQ36aYtPPQJotfAG8PkqTlbUhyWggXsyVyvavSM5Qo9EIxb6S256yRusHp0PLSkD26gyNYVZzyPaCAEWKshV4SxSP5VwKwRgqZrEaDl3lvflTL3rzes4HLEYs0icA9xacApUwWLxqhu95pdnXhdMMCVKXiBy9wrY%2BKOht1ZJA0j%2BFcwpzXLzwY0ZoR1Uvqumhf8AR8%2FoCPYkU921LbAxdoWBti2sB9KjZZ1w9w0jftIgqyKucUgbo0HDd7s%2B6yJThw97yGuulQq0CTdo%2BX2NYqFASjiilhloSXGdELNc3BM4pyRqG98P3U9%2FNLR77Kq8owa%2FltxCuq4aPhiN2RvSpMOopH4osrDv4wFJdD6oj7AVKes1OW8NUzD2tMbCBjqkAfzY2B8hEc44CCAxZvxF18FrNCdWqjEfGIQEn34040jcQ5ZOC6JVOdD72fM%2BVGkkP3rdhbRf8rMMY3JdEqb5qHyOgy2bEGg%2Bn1Qb0AqG1zXMLCoGUlX9sFWrmB0zQGJlMdAcPOE%2BAFJOD%2F5j9GLYsQkTyE9fS%2FO6CIb%2B8M4DIu%2FjPxFyQhByRN1MaUyIJwbWQKc416G7AOvdGQWwyZlCiT136dkr&X-Amz-Signature=d844e9c8a892b03362d7abde7576b521277f0824750c777d2a2eee45d4226f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
