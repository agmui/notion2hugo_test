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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSF6RAXB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pZk9728DfRMC0VAlcEKlMwiMJOJuh0TWO%2B5j72lSsAIhAPBLTQPYy7PBmIVwmnTNn%2B%2FTEDjPKC1TUtxNeTqkhATEKv8DCEsQABoMNjM3NDIzMTgzODA1IgwkDgxH5G%2B%2BWMqKCY4q3AMYmfmeWHJvxYtbIRI6n2qS8AHrQWT0exu%2BtRKkg83C1RgcX2aKJKGh3AExJdPE0SQP14eGheWePN8MSnZLi5KrzoIFyuY9uJzR%2BGjG%2F4QozsYbbkolw8ZbIRFM3bAgwR8vmN8QMKaEfYcj4gSbkcfV0YIxiR4BIgWoDj2Az6VBaWc51WQt6%2FwZbbGd4e8wHbNpCwo8tyED8Y5Y9qy2eXi%2FGRFYBh%2FeMc2aO%2FWAu5jRHzMGDYfk9zcKq2OSWt%2BUQ1VzjAA%2BRfBCV9OLTMq8GzmCQNqyyJLRGErIqTcdxRm8V0JsHRUhLaB1KKLDpiU2xGCgHVWH6TkVckUkITbS6wdMeweA1%2FRcFkZ2zY3QEstc70AlQcIgPNN6cUxkQUoWvN2JDRhjXsBsVuWjrbghlJ7FvvHFihrnVXYOZAvt3TkuaeC0lVQT%2Be7qVXyGOzM20wdoint2hPswmhcD%2B5vmw4rr7YGzDyTMJskHKH0id3%2BO%2FVCcp47DN0Wdzrm4abcHCGol0blsmclBIjOATpggl2CS1E3xjk8Sx7Z3LE66QrEjcR%2FMzquUMYk7J52ioD7FzDPzn4OfXzdEZPD1rM%2B%2BVXFuWnhTEVPcaPjoLFqdJm46FO4ZR%2BurFLrflmhyRTD38sq%2FBjqkAQniAT8GeGEV7ma2X2ghUGij4waqfo4ixUTkS%2BbnTptpyRLOdtmRJlual%2Fp8bvvcAJAdiDK6KdsYSar3HjfpoBNZaoUTdF5JdmK9jcknXB92UOZVh5woAZeBWIO1l75OMuqA652qzCvsJtxFcx0J4KcSvwmfyFmmhVkDDF73%2FDFsVtvuE425ifsy829giBgy57iV0gmr0JCCgf914LJQ%2Bqi6SYWE&X-Amz-Signature=4eac3fb5a9ea59422e4eda171a4fa8117662322b9ee5a7902a4f6c6c2c78b9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
