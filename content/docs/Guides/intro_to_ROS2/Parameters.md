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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNGRSMKW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDyMeTAC%2F8PSCZg3r8oNJrkA03ONe6F4uDMfwEoAZ4iDgIhALwGpvPbVUIn0usGuKOP2JKSu7Key9B1Ns6cz7ogDXlPKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIeiHhS38rBykBzNIq3AO9%2F4ZKH%2BLONwrxw29z8aokvjztFlDlyvqwtcf9lwNBocSOlPaEKORVfUcfTBJjswLBZk8SVvhNvuWdZ%2F95AxJ3b%2FM9M6u0jZB3YTLua3cXdQrKKpmVvPXhJxcM2oyGoH8%2FGbaVQ5RnrnbyNP4DHrDTg7RSUPtw549mbtNQ5LXKHK%2Bn9nEGD0hrW2dMT0%2FCOHMWF4%2BfHj4bEHraJ9Af8ekwp88lsPwbjSk4J11sb%2BTOhBI01mTVtLsI8x7Zh0avUMANgBoyIaBpmWqcS73kd0q001Eoqwx79egk4ejkYhHzUrJYvIvRFUAvNt%2FagsQvzy3XabVN0Z5rGL06K0CmQAoq00GN8PXqJRyUBBlBstm9ksj5tvAWvIR7KnuJQwem5rHnfecyLthOf7nQ9m%2Bmhja8Jnn5r%2Bfj6o8loluQvT6nBieRjjNRz7R1anru52a%2BjkMz3X1qOc%2BN7WtzNYtGhfp6A4It%2BrJacSL36tYW4%2F7Z28vJr0AQ%2BdatthRij%2BPuxqe22HkBrtFlnySVworLcXIe0bCIIXOH8vokIRa3Gx5M4UnQZ12vwPXjGof%2BKBU445v9KsZxST5tW%2BhVTdjriItgnhF3nHShuK6guN04yhotWiOC6MEnKb%2FdcxX3JzCL9N2%2FBjqkAVcVJxzDnC50ZGCXe8H2tgvon%2FiabAaOCe%2BFd25JOxhHUeVQqgUkNgKUvad427ZO2ZC3vlgJt7oSRf4hC8XCLxKcsA8RceBfHkW7OyurCJ%2FhT96T4DdMY3Lnmd7Mg6U3FPkHaGLr4O3dzvnib6qoFhfIXeZI5axQcFxbeccio1RS495uUeSbtHZjPiORjVmPyNYp3LADhVnfkwUmKqIh9s0u2gFk&X-Amz-Signature=91b0e9ecab7f4c585af1bf400195826e2b0f45916fffe623bbcb680f46eef93a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
