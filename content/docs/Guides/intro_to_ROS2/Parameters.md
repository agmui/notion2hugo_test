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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTM7O2ON%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDnmdETErzFHxM7ngtXt0QJjIx%2BtCF2%2BroyQUHAWtL3WQIgPsCuOHaZ4qJULtDk17ukHwQ2wmCZYPGA44oWe98Z4EwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAj7%2BrA62hWJ8nLCFyrcA9m4HJjgqfLF3UI5R6UR4uwN3oh93HoUDRo%2BDZA1evVXcLsLoGdfMr60ZNz4ibgEtPiv5M%2FRQcqY%2F5JBmbSdCfHu59TMxzvqFbSqCFt0U8lJKXqhglqgJ6N%2FSPbMW0%2Fx13SlpTT09mFerNgPMb8R1IfRBiMY%2FYINrTwrxdQNZ7EUFqL2sIvVZ1s1XzgDYxqbseDWAzMjc2%2FyTClEuSoH4i%2B03RRzkYarDdfTr8bLhSS%2F1w6aeSjXwMUr9UXrRBoHur%2FDg5km4G3ZNSKu8IDdJ2%2FfsOEA37Tdi7hBET3oLGzHNlASClNX4vCUutLdy550CjFnpj%2BodyJHftKkxxkqJk953NNbS9td2wA%2B8HgWu2HYAMyP8x%2Fbgh2LuN0qtzJs1VCHUpDxP34B2uw4crfmt%2F1QLZfZ9JD1knoNX4Zdq8inlXku2TNKcDIiw2ex1kQH8Coif3yEpEPQ7Zm4EWnzqZg%2F2zAgzJzLckufhlH9nLU2zIJDzEwxyAgxTQS9AcrJwJdWVlUldyOi2u9W7ODNWVNYFXLj2PhI7%2FzYwjCdIv6tTFXz%2BXiKP7Q%2BJrrgxFm28kAnXIeD4a1tINelZ62PY6vk7ZXNYXhX%2F%2F9XH1pAOGUftjn6mup%2FThs9aiu6MPnMoMQGOqUBK5VPk1YROTP5plT%2B%2BBBMQ6si%2FqXo0tlp6CKk4dDg%2FnoQtM0f%2Brv5CyRaa2v8o%2BDKSwg5YOtYREngF6iqv4hxtaexnttIKtXsX76tP%2FztgOccK4vloocSZipFsSvwynTv37J2P411ftJdzWnmus8VkJSzHS3SKi1i7ntwLShYSpWimmmHcJZfO6O0da%2FMFhYGdP65qfDRlJgNgt8qbKjH4bvrEzRj&X-Amz-Signature=b9e04ceaa972adb7a86a46ca241e3bf196c4fc43d213795db2d4ecc157ac5f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
