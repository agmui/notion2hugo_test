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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPYM6KP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBXmrY0M0DKS4TLdRUL4i4Yce8ZOrGdImOMHtFm5uw23AiEAwWHndnAEzmgU0JA%2FySmm8LNVS74bY3QJKRe1eIs1h9Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDWuP1a9%2B2kV4FRu2ircA8XL8Sy2ndwg15g8RIXwNsV%2FfC3Kn9yw6vTNGJ1KIThpSFUhG4mL8onafrhFDhEPYR%2FxvQYiVcQHJNlbgwuIpEDlKQ2oxn3wPwvi7nqDcENWjW%2BcK2QQfDs74YcrPJeSS%2BYmyYEgRqRPautl0jLzLg3QyP3XnkJXhEhyv%2B0efwk%2Bp1E%2F1iX%2BR6BOcm9Dc%2Bz%2Fajao%2F6NMrzMoagzU%2FS%2F%2Fw0lkKoL5nQorja5lzIA3lI6eR%2FctuQAmyU92qiziIfMXvZ1N6MVAog33YYBBIUQL4H4j3zHASIsiLuvh7qkUlG1qw10uFj7E9Y%2FEhhfgbR2G%2BIp%2B7PG%2BFNUUI05UdpKSQBphWh1Xm81nxGB%2FHDjVUzyzD3g0V3FLjtoErP6JpS8kJc%2BxdvoxaXbUlNbt4PYN4CDwht%2BfQyzt5Ojz3bbJVzJS%2F5CsIotIoaNdqeWPeupQ5hSLBldOE8iMF3RQ5wz0vCNphA2%2BnQEHp7Jo7n9z7%2FmM1DqGrQP3taf7BGKcj5uUoxMw%2FOhtj3SWbuTSh75u2DcSusArxl8aRpLWhvptJscRRfYgvdPJp4AqR5Y6wmeNiW56ZgUYKIFCmmDFI1hM52kalTOU4FLcfn10d2doH5jWVIskOdW8pUjZpftWMNvbhL0GOqUBjOdxYEp%2FnJNYMFvAsVlrfPdN3FRNjZ8rJA%2BSgxcXuOl6yoWLCHgKJDZFm2ef%2BiLS4UOhfgHY%2F1Teb9vt%2FwvUGMao44dIwRebTj0xfYCLHpNC0Go1yNq8O3v7d%2BTIGcoPJvnkzO9AVdbFnnirEo8F1buNx6jdWzMowqRrULp9wxznv2T8vzBITItmWIGVyyygLwq94HyGFJIkbBQK6es65oWWM%2Fw5&X-Amz-Signature=fed63968bf4a1d3f055168aefec0f20b04929735f91c3ed8f5ad0e268f11540a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
