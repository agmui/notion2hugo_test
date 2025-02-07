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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OQOE4M%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEJ0yhdZBd8ZHkhTTge5SnOmJhtPmSkQOVC0rgtJD%2BSUAiB6dXtE6eA418hM46ER4MXspWqyR8zxaAXNUTmMa%2B55BCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM8vtYlEjGVnNCPVMcKtwDnJ6Fu1Q7%2Ba9Jr9aNczP%2FzlY89uXRi0puvMzaIOR0dXqrT94JlrlISNF7ZKdRSuIwC2rQ6o0%2B1pD9mqW6v5puAnemYnifFHlf2UdGLbXTukgOwk6Zyut6kPcS1Gj1HMiH0gOPC8rhmDMjxLa0A9OmL5lTy6ag5ko1wxznXMVi%2Bt8AcwYlL2Z0wIpcxRR3OML8XdLRH8VDw3lc5yJQ%2BiCKtpTorFcdqrd6SNqC6TC6zyejrsV%2FtQH%2BelyZ3Ytkw%2BUlIPPtdj1EaGgC2bwnc55rweW9bvsNqqponw071kzLnqB4rVS69IjRtwC%2B8jhz68AiSAug28A2lAr%2B10%2FHQbu6yw10QLLXozMsjoNtff2HVj8Aims4XmhhSYaHxd4CfHw9itPo0Wm4amQ7ahUG5gO6i3Xpa4F519lX49Vu6XO2%2BcIdg12nZFRM0bOOJivi9%2BoY4ICX2jlLFEbLt987Wrv%2B7fHXLJXyi1GZ1iwi7dye2kr%2BflC%2Fw8wHT6SfVwC3aSP8GLf2hUylbv%2FvydbIh%2BVwSWiYCGS0qYw5H2GKKhHtsWhg1FBu2ycZKXEda5cHfY30fj2hmrTBGEki2mN1JnSw9rHn%2F%2BicpClocIhcUe8aLLCyur5UuXAJpsra0UYwlJuVvQY6pgFhPwf%2FUN6zqCt8UvLo5XtBK%2B9XT320Xbyzei2mPTNWj5OFv9O1U3q31G9n4IhXF0%2FRAsPfy%2FbZ3JoPwDUDlAIEhmSzqo4nv0ixPZM%2B3Fad9g6AgueR11WEoVO6IqxtAu33LKRabs18tjSG%2B4FowTM%2FbxBTOjQEkr0m5S%2BoB4Lnbl4vvV7FKMR1hEugDu16tLo9fOTuJGb%2FsAFC6o9fPbVlnnUAad%2FT&X-Amz-Signature=d10c189c01d423a1cfbb655c1f058b1fabc9f613f9dccedc6d54ad9d0d4a8d44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
