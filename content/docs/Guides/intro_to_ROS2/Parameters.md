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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JPKRXA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMCx64FpzGLBKqgECVwYtOqnFB3FIP3YcDnHkyLMngKQIhAMWgz3%2BFh4Jo%2FIjUJ%2F0jmwdN%2BBirOP8M%2FERHdTF22CK3KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4MSwgyOKfOC8Kmvwq3AOzVBKlxzy2GsJxMbuimenwSUxDqvNOj8P8jK3O27Or%2Bm9fwvmYhYox1Jst7ZUaXWQQsrYZYBq1mn6ZpPy%2FabOjvVVUB0vS4iXaksyvOOFd1hevNGxfNEbSy61IC5skJ2g3WtJP5Ue3ttW2%2FamWXyXQRQwRpbR1T83b1TrgGM6fsJCfSWsAggPDvmQAnhDK6WPNTJJzPIaiIYwn5zNsFUbZQCV8I1JOcLJvbXpOpsH6PIZkI31nn%2BTf8I3EUZEYFwnQS%2F%2Fmd02xC%2B500hhos3gpRy2qDWqU9d2LkY%2Bfk%2BuLUh2i3wJZhR0Yu4h17QQlj9Th3qIxzDvk9PQjkxm7oLMVcnhRsoaJZR8F04d3nGCKgFjidl7pexGWcVERKUHRKB3xV7nBmgOlPZLJxGgIvwfOXv3jTF76yQyC3KsHS%2B5fEDFaUgTikI0Y67onXiKMZaGKpIdN23vxbyTWz31BjxPAS9JtprMshgePPoCa9M6AGghznHvY7sjCZO93qZpBg8Ac%2Fme8rvbLsJuoM39tBth9%2FPE%2Bt5wIAR%2B%2BlkM6%2B5ebaOmeScTK7f4AWU7dJZCGSOX3ckpep0N94k1cjOcQw5IPNjPjLfB2WErs%2BCfHoOq5JE8XxYVZ7QV3v%2FioFjD75OG9BjqkASmPqOe9gbL9ihyMOyrrQPlWzGnIvdW0qDCXEwKqRgH9NAziaJrMHXNRTVD8OFecJyigXJKODbq0f3DL%2BlUutdOSBUWyoRlItaMl8x3n%2FftsJmcYcrC%2FbXTPO4%2Bposie3rdF6xz%2B6tZ20Y3h8AKnfnG6qmSy7nFitgREFrEbkxpA0UNq8SNNkRdzejCIdN5EfhmB5tNQnBb3QiRbwvjFdgRXDIGa&X-Amz-Signature=28fe9a5e93f220f694d25136749a0a5bbee69716f6be8eafcadae8f87daa05d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
