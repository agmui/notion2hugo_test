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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QW7XOP4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFCnLPi1KAaUEFnvtHcqhWgD5syIU27cjFGIZjwmLMxcAiEAoMtnl2o%2FUVQZ3TcjTQVNvRVnvAsT%2BYl22qoMja072rsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwN4FENA6pvmNCcEircAy%2F3YyEbYf8L%2BR7uk2hYhBQGMflHuK1EcaHVzIfqtbWFPL6uAydHh4JtxNipagAAHHeQ7LSh87TuF8LKEbOUoLTD4PKedKC68WlRm4mvtUF27ta6UVknd0qknh6ncB8Xpis4lAmpKoz3AYsPFQezJOxbPfeY6wVJ5GDHuGi4eAf6g3Bfc0ClofFngvojBbXBL0%2BrmEHyOXH%2B7HQJq8FA%2FuWgdg1Q7%2F722FguPPqsYyTux1RxsrktxoifK1XG6svWAmDXf6HWUGmTik1HsBgLnoo7%2BygFN4U57s0b7s0wfSy086CeDRkfJRnDESaGXkj79KQlgvKtZ80TcdFksupHgPuFoRUN0wur964fiM3hghkn9p%2FtOMLXhJZRqtdFHb%2FqDHhtAiW3VBh%2FFlwvHT6xVBVV4UomONENiasTTTO9eFI5PYSbMV8YUCbRDU5fy1o0Ik1SafAOUmDm7CKgiwaBOadUIU4FkNZCxaQX3U%2Fsot996ySO%2BUy242hbxS6qziri%2BE92e2MeTND24hqv0HLzaLdJt1busq4e6hwBJVJQ1GvdfDJmYHVQnQhGYtHjM5CUdF0lJ6Wc4vbFaxYjqiCvu0PWJiSEdiDJwFSw8wGdg%2FC4S9guLTbDes8BD0waMMSKs78GOqUBthWyMd%2BDvAIcPuDc7ozp8fiGLVV9LG1I0mXA5KnxnYrjcRAjoQqEfnN%2FVB5pufOdQq4w8Nj3PfXP3CGkD5qp32Z5CJ41RwIeYlGTUYzsWndBGYK1JTo72xT6Zvo%2F3vZZS3j0qOFRZppGIdXxoIOxOEAttYIzGydv2XJ8n0Tfo2sw2Ds7Q4QWc%2Fk%2BRR95RdsPkKYECEut7rY9lXYOuqmBHCbpkPMk&X-Amz-Signature=3121b7defc594098531b3eea611afaa4f7359025d741cc884c55be9bd0adf271&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
