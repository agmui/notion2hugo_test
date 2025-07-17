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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A57FD6D%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHvF2W8wgqz0sAy7vhH9zv6bvFVp6a520DqMxdekBOSnAiByda3ftBpYu9Ax19Kba5YbLaMbuafHgdlnNXlRF0orfSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMyRoohf%2F0YEpzZ%2F4gKtwDLBA5Kb5JczW5hvKahxxYn%2BGAchrwbQOzTQmS%2FEwrhxPCacGeIsYzgRuJa2qe%2F9SXnmoPN2wUzrukdScuYAzwBn1CWyBgNVE0JRcxfmH9de4FDQAUGO8MgURdDYgeaZbf0X4hlxzxYgtTjZF9%2F9mCnRRHUD%2BiIUVXtOwsJlKOdLKg98hb7MF1c%2FRO8N%2BZSz4KyTl8v1vDz8pvKzCLfKvoUYnkR5UdPARKvllHvPKEF0X6sLKGc5SMynowujqBaOc4R7viyYVyj4FKFaPiW8iUZ5PYLdPsyftJIns1JhC%2BDtKfHxc4kmCLpYPLIB8zubk4QYnXQ6pDkm%2FRGxu1CTz2s9NnHxOYtDxJVxPZ6RqPz1VOeDvtXa30p5ifxq2gnBpx94q9CBKQo1StF6c2%2FVxxxPha3n7jEwnlzRVzLBnz3e45BtByek%2BoyLvQqOI%2BPbF9kZh1KmBqhJZzq%2BbzkQh0jHVO9MSf9KarbcnSX7CeUK%2FGb%2BOqOQc%2Fyo%2FSoithy19EDc2rxzScWQ9Wa6Pm9k49tR9I9rDC2B5O1kWZbji%2B03TrtP5Ivbypl7xFBoXFqqSYQLzM0odYfzbYj8ru9zKwDyVhk6loY21C25YRdGKrcefkrO9C5NoHqPCI86MwuPngwwY6pgHmhBVa%2FXG5KvlAc4aJUvDTC0ZMRdgVPhrCLu2CfFvoYhX%2FzKfvIaxYFhlCSOuKB2w%2BY8g7naXRKzrs1lrX4CacQX1dfMJdV6OY%2FhOWakOWG8KkEJwIb%2Balotbc5sKkLk9l4pMl7EhLzI1CPSGkv4V0fQVwF16QJ%2FjM8j4c3ba3Mgp43m3Gs98bW%2F29Awimsveogq%2FgSFuySRJ28Ma8R13GrycxXFlx&X-Amz-Signature=a8c536ad55801cfa0dd0102867ac6b290f5baf0e94b8042bab235db6b13eebc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
