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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGN2VUQD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApk1%2BvI59ig49pYYnzD0p45%2FwbaEiu7WRRbdGQK46VaAiBeH1bqJhfk61ln5IF%2BSOIrLF5G7AI8JtKS1JqMWHiL2yqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSSg8tGvovGFh7OpcKtwDmCERFhQCPqEy6zuhaNc8yqxMxFOxR%2BTtOqqvD166evTf8OwXfnaeQBjnEtwBeiUlrgy%2FbZRbIMuI5vZuc49kgcUCQrs5QBB%2BDTKqjq0TjfIVYdsMQdnaiIDcBUcOsRB0mIprSKrAQZ55BYdzCN8FAHvuiy6cNMDUqfHC9iZpAquM1cPfBmoQsyvpe0PGQtMoRVsNIyzuUBfr4NCUEejpjJTqRr7zJEhVWTxczfkYnFheaRCoTdJLJ7XW%2B0cne8rx5OsV%2BxFrS%2FZ66Dmt5HKTgFNufsgc0iJ1vnY4dKh5ID5yk%2FhB6m5ytP7hYKAayBPpkuGoRhAbMQRUNau6DDDFWmHfpw8KiJzJVUYzQaEWQAoXhMXKcxWRyEUjckthfsJY3vt%2BeHK1sLlpY%2Bp9xxa5EIomyYdODbTa6KdNkAeDRN7Wfn93ZSvQbB0G4W37LHMvOkbL7JaN5QctAmJGXVfYXAZ9orjrF89WhIRSh9OHr%2Fq%2BipTOLPzvj5nLBQmUHrWZAzMaEyoh%2FM3e0o39aU9Ly2ihyEs0Edk4qiPXtr9LdiISDt5VDIKuIsI94xxCBKdkqJ1rbm8R6l4G7ho8KeMmq%2BqUpjqYzN%2F2LSw0Foqo5U3vlwqBc%2BQVo5oPr3Yw9P7xvAY6pgFIY5rZabWgNkJVwY2%2FhcfaFIZEAhiX5wufLKd1t58p23YZAHh5VFu4Fxxc%2B2HlMNMr7AFffzuKRfzeFqwNTLi%2BXUcT592WboJCuWpStC%2B7grlTmex%2BThNetgn4G5x6NWYGXbq7Kq33BwY98cJyqUCWA%2BXivsufc35RjR4aW%2FD%2F83ZOIMtOuuwWTLS8pU1PGaEWPfRcSfNmlbgBe%2FoIOYBfmFQfkFXD&X-Amz-Signature=ee516e6feef062d3834b58e02ecabab393356d117652864aa34597bcd3fbd528&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
