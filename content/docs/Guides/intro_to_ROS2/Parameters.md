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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBLHS3A%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCkDZ%2FoESCjm9YmRAbEDzOtC9oUFHbQrirWSFzxUHdrQIhAJZ%2F%2FPlToGIHwlZe1pPgCi5%2F8QcrxYWZ88UNLr8jtQ%2F4Kv8DCEAQABoMNjM3NDIzMTgzODA1Igy0OjUAnOBZ7iHSCEcq3AM4lp0JakC%2FBFd1LLF4KTxpqg%2FL%2FnBAhnI2QufqpQTxb7NRhIcYCMFssP0Ch%2BWNxuXANNE%2FMQHk7jsDQQ7bCDRIPtx3zaC05wpovjH7OdxxkW4ozSgO4NNwn2szhRy3txyxPQ%2FseoZNtwvOGna87ySZZ7FNNi2zG5cPlNDa7FJFSi%2B2mUW3lZHgY2iKJxWau%2FaWIVPp4bBUuZqNgmzMnXSUfEZrx9ybUPNWx2%2Fy%2FGVCm37SAv6XYipTjCigj90D6qDvJ7aTB7pv63O%2Bw6CuylL8NLsV5gOjBVSHlrAFc6KrG5YDxuyIXjtbEp3ckNu0z6P%2BwoRIte7LdBHjHKneBeDlfBNSg467Xc6tG4J%2B8o%2FyGXTSsOlLJzUGwtU2U36VZqSmjK2P%2BsWlhXcwmhEdex2NqR2H4bgwwvFQL%2BJdD6Ck4zuPh8O3eNOTQKF5nHOZzknQavaef9RoIOfekHE9eM0tVvKg9TcP%2FBDHTCH4nE4uSA%2B1oMVCC28Yo4TwDL95%2F4UfYAho%2FTV9zsY2Q%2BVFm7%2Fzt1gJx9K8QL3b64MNi%2F%2BtdahOchTSqbCHg8PCyHmxnfRGeHkJLFQWwVNz0r7d8wgB3rtLB1gU1wRlxZhx5mxdQERvucc4EmahSE1LSzDvwMi%2FBjqkAcPdy6nIyVIZ5GYm6DU7inj4mD91ARBSzmHIK1s4AefdsFxur81%2Fyq%2FImR4TBmWXS0Ii%2Fh3mxfmOGyvklVICGn7pVS9x574yi8X6wUkCtE68pZ4jl00yqN%2Fy8m%2F6ylEATcfd57SqKzB5HA7aAu6alH2VL1XmrdJynL3HAWb%2F%2FckWQtL8X9gKC3xnElaiGh2OPyGPpuES%2Be9TTytu%2BXdCzZQHpDfG&X-Amz-Signature=bf304c7105d34997216fae14f7ea47ecb55bd594a0509ab04f1b033b1fbbe579&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
