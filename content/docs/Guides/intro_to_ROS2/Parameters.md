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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2U2GXJ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoie%2FyqpUPPqisOO2wbhBFvvMHWQsggboITye5VYCE2AiA4273y4PgvX1YSUy7m9QELFtRNe0ft4%2BG8RhEfvbdLKyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMcvH2WPgEPZ4Um4q0KtwDGeChXzYXmB0RCZhjtplQA6Oz4ZK8%2F2EzjDU2tdgalscruhkzdX7ZcfruQYO9d8VBqCtaD3DSyfs6ZgO%2FYtsvAbBXhc5nRPY%2FlTr%2BbEqWKAipstPnjtBeurpGcXE14bk8WJyRVzq41dHyEJEyK28MqVO33JToqXzvBUxd9YDZm2t7D3ZCxgibt%2FjYa1BMQIfZHEGwno4hH6x0HK2w%2Bxle6tpJP%2BXTT6mw97DMH7qeiAwEO3mfy30mMqq1te%2F1VyNYe2Z2azf%2BobMHA%2FwDcGMleEkmgMkZWXz9YtOV1cAnj2BzWDn3cn5OqArUn1HVlmBT4oqtuxH3%2BofSlT2N7b5fMw3r6iUKMLQTsqr3oBqZhMFMo%2FU%2FVVh%2FRJLeEm%2FuLPNxrmsyV6riYu8aD4IIhGLb7h8kzvkYtXj7vuJ8848p15xxgOoE3ywT6VHY%2B%2Bu66mnHryH9g%2Bki3l1Qa9g8bG5LBSPK02gjJ7dcWkNXzlMwSUH3L3xXsSMoBkkjKhOd3%2FcyDa7lrlCqQS3u7JTzbSq6%2F%2FtQbS7paz2lBQMsMk44T1UEUU2JuHk0DsM4a9klzCWFNy3rSwXnxHRFMYgzYnfq7s3%2BJ6MxguI8rGHJDA1mRLhkQTjv7%2BlkKG6wywswnfG5wAY6pgGLiBbJa5MYqLuvhNhKQbazWDoGKEfTcbvRdBvOwXD7XApzRi9v%2ByfgF8ECj%2Ff109qXKmbOfaQQnP9wAZgYL1IYbM0IgnM7O04Wif8t7zqn9Ein%2BIaomrUxK0RxeLOVQvMwV2%2FeyTTbmR6aDc801NjNDxRb136LKQvqEpxUD1N1%2F18AioQAxzoZqtT4Uey95Xf%2FpF5BrR%2BwAQjrsYBrnt3mxZjjEL23&X-Amz-Signature=8e15202d6662a75e148d258156aab8c4ddffef84ec9164220357968ff1aa3a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
