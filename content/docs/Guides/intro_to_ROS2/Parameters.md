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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCO7T2HU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD0ZR%2F6VpB27pewYSiNF%2FFDB0D5kj7WlGlYDI%2BRtU5QLAIhAIlBkAs6TxOfzJa051JOqeDZqGgYqBvMcToQZgUc%2FYy5Kv8DCFoQABoMNjM3NDIzMTgzODA1IgxT%2Fd%2BBu7BIMU1fu7Mq3AMmrLwcJwDbcSp7tmJkuDYEj4f4hKVpUtYqaXVDj4c48QMvaB%2Bd3upkWukpNuKtxbJfEw4o%2BSAQWvVCy6ZOaGTxHqv%2BYhJXGE%2FladDxBT066wpKZHdkCEewyh6rWYzYUd6TUlRRdTgWExNVm9cu3HhiiCyg%2BzzYxJw1EapvPG6xcrxUtVF55rNyU6rxQ4kRDhv91QQrQ5Hk%2FcXR6q6U8OMgwdirN7ELfxaDnj%2F85EiEM91qQkSaR5EmSk%2BXiaRnuOH7UwI9ZsUyAS06etKK9osLS03W0fHp59a9VBuCoxZsVCl%2FdFuwgUeCRH3dVQBr2x3npvE1j91gYSKMMwkZQo2gU6ThPridSsn3OXrGZZWKjfrtxj8flVf94P9BMdbX9My63GdHX5%2BKKMy4sV8hV6cYdVOzNCWR6JtEwvXiFVdQDP4helLdpb993td%2FecLzkIO3JMSjfLKgFJtJ2sJBozkrFVpBsQ46lm2ZsB6MAp4OPx3DMVwnmKiYcXupA84HrrIvYv3NT8HwqVL57GdYy%2F6Pb4D%2BLAKwg0y96g2foRv0uFoA2So7jjSBsae6fYWY1eTvJMYeAbIXSIvsGY9veIa2WvBEVPrbONb5EjuhXI6HZmkHRpLVJIuPT6tz7jCTlvTCBjqkAfz8I3nGA340HAqX1HJufQLV5vZ6cyBPFLJTJfZYIIiZzYip9eAqmT7h1hMUKF7XspVurae25Jz0pF9KoYgM4pK%2FS20X6EDGA289IbHyCIkhm2vrpiMjTCAva49c92zPAzJacbOLZ%2FEVTXv%2BysFWYWi%2FvbuO1MmkvD8YcE4dG9b8CC%2BYsBpsAvyI4uoDjpIeMYmqMSqNxuMMNWw2qc4OOJzQY%2FeT&X-Amz-Signature=4de1e19d6679edf4e7bf0153d805f8eb0aaaff2f34c01513d68d363c12ac1a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
