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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVZYWMD5%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDGunIyrxTw22RJNLxCFjBoJfipFbjthR1PEZrlIEh%2F2wIhAOSGabzGdZwCdkOeeLVOhROK%2FOFbvCf7w2%2BckdteokmMKv8DCAwQABoMNjM3NDIzMTgzODA1Igw8ArMvlXrfd4z3l0Iq3ANwJ9ivh4rPPLDFhe1WRRs4uL%2FdAR07opU2fXNcfUdXvihg3FkG8hOA7dIZ%2B86NM16gdbcoG%2BUSdGpCNJCrAIKFi%2Fgkx0qBKhQTj9qv1CY8KwEM5HiPnUHY7H153hkXTdfm5ph5n3NmXHzknc5FKmEv7MgUEY1tWXjV1R4JkF1Vx6m0%2BTS3Vdnemni5aFpEDANmM2C98adRoa0AfPpjgKqvn8SWw106jhk5UgJGHh15OwsXT5YxobWszzNxbA2QFG9TNHGL8cA6goGoNlIYl3JSw04bdWkAPHbsnOI2DHpSRtDxjmMJA%2FhDTA%2FlgD5OJirRw6zjwjyaBBLNMMmmxfQhaaAJmySETnB1gOd0Hj9J2gs7rCV9GnrPttQmmibWf1hCLUcZ2Bmru92rLpxy3CmUkRB2fL4QGf6BaIFtgwT39eXQKpEuL6Z8eoVn7SZ6kchFQhplR41XWAUGaVyemBR7t3yEj%2BEvbE7Ewu0yHaAtdIM%2By%2BXDXyCjkIBZaHb4yY2sDfsi1wQdy4wop9tZYqJhFlZPAGCGvBSllIfEJUwo%2FmutNGiszt0dPpdomWpfvclDW4qm7j469J6HF6g7dWt%2FXhDdN0xGBqmMgyf0qAb5G1bGnweSqj1HEB9BqTCZg4XQBjqkAXfD%2BGKwsAmgOlQTouDBOGPOZGgvGaY3rHHmZ%2Bu%2BanB6NC5ltimu5Uj4eepq%2FAkmv6yRsHC9hwLJ6vVBqw7xX939YAlo2KP5NANRpvZgAut2gUqoD5vSulXt2Fos0a5680kXrJ8tc1EH%2Fr8zVc5fe0irZgrQMVcaIQuCKiAfOsWmxRy3xjYn%2FSKYE8gFngGuJHCQenRS4cco1lmnSjziGOfztu0C&X-Amz-Signature=7e7b5150bcba73bcf196b36d413644f437161c98154adabbf139725528be696e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
