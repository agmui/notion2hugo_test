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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKSOAOD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCaEmq9ypOxpIhIkAa%2B0JOCQ8F8FscvPir2HkRHocOUQIgcmD7Ee5EprFdxjuQciZDNyIbIpXOnHLkK8j1t3d5Rfgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIsS%2FZXxFSBsKdiPISrcA56g1X8uD7UhGDN%2BCYykl%2FFnTiTmIKS9lcDNjmO7iQQeVaXcMeNSFpjIdkluw4aOZSNC0RDF0RrImtu9GTbZ03xHQqU11siqMbVZt2N2J%2Bc5JG2Wu%2BfQC2hH81BvJwo43LFlVQsLzCSODKmAUQ3IoiFVsO9moczn5CDNnqZ9sfLNGVVb5zJAOaMDUe%2BF5kGWAdb4XThyXVcwJfrnQ3sALcI7mjwnkizWDXV4SBT9HUMAXhlirGsmZCcGmasdR6PHXouFq0BXlCGWhfxnDTltqBoSILQmgbs5KOvPtivy0QpMLh%2F%2BQxhwyZZ0N9pEcQs1XlnT32RXvodEydVM87AZJe1xMujQQM4xBVoF9Drm6urKJHlZpG2nVTgTpMIBGDE0RpJ2wqgFLmVP%2BG9AuuhuiKpd9AEw5ucKEOV25u0QdXUP5D1E%2BaGkGaYJgjwBiAx%2Bkl97P6hDqEJzWmBN41vX6ltl70PSd8AhY9wdXihxnhYVpSamYgDIUSe8HhMzrbWQ3z8b74TCq14hMrBqGvhO6181uZcBHRTHJkxui9C94KGDZnSBeIBP%2BMyMQa7u%2BdoAURVMXGJoMBbN45sbEhIkJCVRtMXI60uPyse1vSObgTucceDP%2Bu0SI71lbyEUMKbo474GOqUBdD80MOOqd2WsM5Li4PHqh0w5z57d%2B7EcSIheTkChdaUVQFBEujXnd9Bjw7CmKN3jAnjpgMmqnqndEWjL9S8KiTXWCtCINE%2FAGYIJOTLmsPV1yH%2BIkzQAsRgAl3PQAdX2DrEg4H3Tmb48CNGkFhObmPYw%2Bwo6qUgG%2BGc7k3x1ahZxyULmCzlwf72a1Iyqkhf7i%2BnBOiNVVL%2Bvj1f9oYYr%2Frdo%2FMwX&X-Amz-Signature=5913b9050680254ad8a6c1fc7948000b9ea1071133d676b60527e6b0ebbb59c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
