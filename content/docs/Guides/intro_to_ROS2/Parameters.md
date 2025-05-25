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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNMEZQ6%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFuvAsWzdZgVm78wF1lnkn9ymBK5hVvUkNK1ayJOE48jAiALloYM57jW4qr%2BRF9b6feyNpp%2BxF5904l7sdkcFYLr7Cr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMaE7Uc4%2F9oKR8FnRdKtwDdQLr1n%2FVUm28JHFP4CJcLvmX3d8ertaupMyBrxznHFLBOSbj%2FqPCVUxqSl9rMtg2pgjg%2FXn2MMDvXHdtABpHagKc6jLvMBZWDxlIqB5%2B2XuSDLl08nWC0MOJP%2BKPxicukiat3G%2BrjhSGADASiCog256wpAd8ly8UjQkJhGZTxNCPpLibawQWH8pBNcMA6HBPWA3cuYXHOLfDXk9cezgvZx74ZuJp%2FdTFVIM7pOZgC9rqqAjXVOY0VMcASoQWwlhFZbZPtQZegZpi%2F5t%2FJtunr8u0Y2c8bfCEG8nGgPlLZj9jHEGuwnVofkhmiGvgVtorGDDO1PrMaKAb5PtMNTaqDhecvODADtZ8kKhv6HrWmeyjCLRW%2FP3%2Bos%2Bia31tm5uPNi%2F6EWddi%2BRxSDrbN9NZzzMf2rIK7KUoFXx3621gl%2By9y8MxcQGWgnIFctSt0HC8O9LtCIk557uTcJGar7frKhugb37QK6%2FHVRNqFyQpu6fAtN3WDtWWrVMSLUcShpKHkneYqxtcee3lSmPFiyECLyDwJVLzWKcwaUauE4rcooiI2O%2FxI65RMP8UsuYbD0Ww33OMy6TmrwFAaIO%2BK5pCxJB6x2nwnGp3WNmxUaeJuTMOjgpionsPnTEMAZgwztPKwQY6pgE7jgvpfmepDzK9UJIevSVNBh9TZ1eO7UJtEaZ13pQoVaK9a9dXXEB8Fvx5wlI2eZ7T%2FCLJktRF61Rwps8EYevr7HilJrK4%2FDyulrdkKNfIQyqDWyYN%2Fl6YkZ7Swp%2FoEm7sO6YAiJDJA1Ir8qY9eiQbmHsvUq7%2FK%2FN4%2FAQ8XSsUGP9cnmqncA%2BGMW5Aa54IP1CNecxip9OHGZvW1hHCBmauelwOJ4ur&X-Amz-Signature=986d85cf72bbffbe49e4e5e4416b07d3298d819e080f20944978c57a695a95a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
