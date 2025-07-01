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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UAHXRPJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T051442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLMC4fEOx9xUGhtMlkGr%2FUtwEnRXyvUZzIrNSsvx0OQAiAkZfS8TF63gvpS8jrB2VgaJikIvXsDC6bGaHLhT5RRQiqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8wN43IloT9RIkEWRKtwD4RJW%2FsvabPeZGZ31RMXCP4yh9hsZ%2FfN9bHsTWug6ne4Rqe3KHyavOmWSiCZry8R0VU2RFd3WFqgPtDqU27GnQ1vihtAy3UPyPSec2es01dj6UdN%2B8Pu5bl4e2aeECyzVqOLLxcRfqZ06t5Q%2FKGSUzbYeUU5tiy22uv1Bz5NltGHhetHeeNtuKlZ9%2FrN7v8l%2FWlYgAMjusqYs2pwDT6SGI6hFlo4btOm8tVvrsTSLbs%2FF2%2BGEjcxdIIJlKwvTGbVMpZCCnUySpSw8lABnOEKtvaUBvm1JLQo0%2B2nka6J2bcLHTyJwkTNsiZgN9CDRJsIbl%2BqoqeAo%2FgKeFsZCjfyzTLUH2aMUxa6CPX%2FGKXmrV6n%2Bf9pmH9yatNQVIn4SLe5mQW07i%2FcGy5ZpREfhWjOCYv53atbXXLJzHYeMpeo5tauOpEb%2BHNJLAfDsQkIlImTD9i%2FZT7zTLzo%2FIJ6tnkmif%2FdQ8wNrNfnrjQemiexl2VX8FR8Dy%2FomFUnF3EVEyWTkEgc2mutqX0ol%2FRkR9ZxFSZ9YHXWaioe%2BM7LRKK6WkBPVLXSBlvzIZEUohbvCXg4kXn8Iip6Vts11z%2B21H5OqcgZDcOAJhqgxCxvX4cm%2BMv6NFJTV0zywE%2B8gh%2BAwkcyNwwY6pgEvpv0Lr%2FsqjVQh7s9qYiKeBGwVgBgEolHt3TPwtHSDpJYZLrUXFThgF%2B4e9Hh7Lt9Sm7Zrm%2FZ10xVOYiNIJR%2BqHtcbYrmjCjC4kYx1qks9vCqafy35OAEq2z5Bgupd7AB6bU5NsiNHQzLZdHcg%2B%2F0Ra%2BmB5dv4Vwc2mLV4EolchWQfPzxC3m9jDhd13jt%2BY0SQReP4BXD8cCyqX91e%2F%2BRNMyexAsVm&X-Amz-Signature=60a421c33fbe405993ff77a4e5dc38db027a00c99e46708bd50f18c564026f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
