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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TND6DPY%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCct5u%2BBnkpNDGb6MRqwWtXjpJ2Rud2eQDLbpvyf1ecmQIhAJTyj0axTK6TYcoPGaTy%2FpY0efx2OhRrPLpTtotgIuMcKv8DCDUQABoMNjM3NDIzMTgzODA1Igyr1o1atOSSu6KIEzAq3AO%2FEVsY5Z%2BjauI8xZsdN0aQtwIpZN66AaIv5ph2QZD086QasKkzr5A6NZPj2lvlayZFHjich%2Fv%2FEgV5CPV5xdlwA5F83sFYt0UMUAut9oD3jdOSYcMOMF7fzNK%2F6lfAesSQaMA5x8iTzq7sE2hYiT7zmq5uz%2Bu5rG8lu0LM%2B8Un%2Fh7YlAH9eIeg1rKzsDzseGUSgeFlxqWB%2F3O0Hl%2ForIMqXXZuvq38oXopMkrP9GigcLgDFyqen9kFhZYfcjaTX%2F%2FjELyg64byUT1lwEc3SGTW89rNA1UyiX2cfXvKzSClWaZ4MotmcP34fARH%2BHKKxpZg%2FglFCNijG0fNStlmaK8XISRxhHJtVNMV95SaYNGWUfZNmdvBOCMZ9nllXj0JVO1T%2F9vIvXvXpseNt%2FFl9qrfdj%2BR5K70OM3FE0zIJLs2dw%2FiSXPIE24HGn9DheUCnQWYyvTmp1XSk4ta920z7R1UemfBc%2Bt3MrMVCgHs2H%2FjNtEQ22QSEmypJvO4xbXW%2BN0yFxzSr2R1ZVQ8ypfKZbE4%2FhNnKL4vqvy9NA%2B5RCOAtfi7edj1%2FsduIKV9Mj%2FPC4KDu%2B8w28ID9pyen5mZXQoX%2BZGqToAzrKKwgTHM5QYE%2BHyb405cqANr57WYgzDo1ILCBjqkASeA3iTgcZYB2BXiN5rlMGFDOFiK7ZYZiHahW32nlc2YtX3jOd7URf9YOrKPP3WbezZVfNCgyZBfFtcQA5Dv9QETs1EQ19CbfpEIJ9qk8nzOYQ6wiLG2xOjrSrTBWGkcrEDJUlFbJWupat%2F6FRxbLPYBWqiCqI7JYZ0nZOsvmEoIf%2FIwtq4zPgPFak%2FpmS04OzOaXMC8aYJwyJpBUhQEgI7YSUsI&X-Amz-Signature=d432da10535b674d06b16c378568c9403c6e5e9acad9ca17497489834f6d2cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
