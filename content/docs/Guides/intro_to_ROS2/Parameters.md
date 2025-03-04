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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SASFGK3R%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrp3imwBP4tEUmffKxABzwxmc%2FfBqPQ2WlEFVAjysPhAIgcd3OmjsB3qyN8%2FbKtqe1UVtm7uNac7kPfhTYe9B6H50qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEhtGWvN9yN3FuK3wCrcA9BS%2FdnhFwwGAwWYb78HtsWFnHaEsl9bp7fpXbtjmNDJ5PNfDlLKmvTrknxDT6ij0uxPSjKBBtAfzv1BBFVL65y%2BFTaq3RW0RDRKs2j5EtXEEvz00SYpPDeM3bmomNoSdKTJ5k%2Be1KgNlSONKTkU2Wrku5ZGsZwT2yjjcKit0WcQUxWhUMTqMmvYG03298Hs789i9cxKP2QJfoxqbRlkfZ3f0Jaxlu4dvAEYKUn8oP8f%2BSLeynVzK1tNsCDTznzuCSIh6TLNVBOHVpmqJj406%2FBfk8G5MlnuyO59PKZmZCoSzjqtJY36sTPH3wwz2rD1uxX7BhoX51ac1HUhlItt1ZdKaR4GyVKBkmqwUM8xbayTtpfn1z1NC%2FRdlDLNUeCwXh23z5zeXiGPD9w4AIMPInOUVdrZTZ%2F3cx2xqPmwMmr8%2FYvsK%2BOPAtQSXVthAB5s4K1Eb614B9HONsJV8ROa4MstZ4ZiD4saRdJe8phZfyD8QvEexBEj5MyDib0a%2FMs8sXLbifvHrX8jQk8qeP0J2GbpEdz9O28XL0wZ0fhMwqfoo1zYG%2Fgg7ldSsyiLMXBPKYP9m8x2hmTl344YPMm4RTHMtCNQEXhV4MZZr%2BDHCP4HOet0PyyVNTL7Q4faMKSEm74GOqUBIXI6Ic0eGHfIrsJhB6tRsFpBlXzkVvDiW5bHTVndOp0LNvxaawib%2Bq58rA9yap1c2cO6ymGWtpAlXZIRghnK%2B0ozBvfxkQ8UQLMtMbqddSRZdhr00ZppHcWD0mvujpDCphwnWO%2BmrO2I752ZKJuGM3WLF2UjyZE5jVdCjJBuXtWrXw9zEPczZa60dE9rj%2Fvts%2BhcoWEHWEZsMVxxAmeOzb1A7oO1&X-Amz-Signature=64fb751a4908c896de9663ec48e0663ab96a9c6b39e186c4f04d0ff5bd0ebae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
