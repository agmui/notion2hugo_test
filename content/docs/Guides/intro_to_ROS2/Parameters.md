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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2U5K4AC%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD00VdlfmL3vnXE175QaMKUcNjO4hSJbOzkyincYEFQnwIgEdHwiBFHl2S4S0ozUEmiPMfdABEL7qwa1hYFJ5oqTE8qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2F%2Fx0%2B8GGhGu4FZaCrcA9fxshbsvdx7vfk7HykciqHfCExLn1vq2WRweBVyWFNMnxCzRSwoUYxetwj1uC51z5fvzff4WunPdoZgj2QTaMJQs5cF9oxTv702s%2FRs9MKOleI0qgtW59eQ357NUuqULd7kitg2Rn17nuS9LaoaMLjZnEYXh6h7CA6pKivhjLkjviRKHNusWEejVUM64e%2BwdrARc1bty%2BS1R1pUOk6%2BcWfhkjPhg5ucChr5L14pgJiCAozeeQ%2Bs1Cgs%2BzI5vO4Gyrwmv40SVPXNM%2FbWGRx%2FCxmvwm1c58G%2FvMWv7SqaTSkyp96kNHRGN9F1QxK5SAklo%2FFPp11qFtHUZsMGhkdz%2FUf8zE30mXScdqIJjPgIsQlCjNvBnaCI1%2B91KS0xURHsIKHntwX8VtjuxclRy6%2BnFgyrIcG6u8HIYlbzz6DBBB1ljRxX3cMU%2BuhEX9RruuYBfqay6EmxsKAxXyWSCffA5%2FKRGnjm7bFj92p9%2FzqXDW%2BUakWzyEyyKW318lxWLxf4OH7xQinw5M0fmey9ZJD4ldf34BKRAYsAJR7M4x4SyewvRccgHbjMDcAcOheG1cTFHmhGAYQTEm%2BDrcpK2zXSIrBMz%2F3Q398zNvpphSxSNb%2B3zfgvhNkVsDcXAcaZMLSpsb8GOqUBbOflpqv8klCl4%2BUloWLd8dvMkZViNPM3RejZNszyhi7GnyS8mMR%2F3wswvROaUVdmY39idCnI3RmVoBEQQH3UNiMA8EE8wkGW2ZU2y6df%2BvtnvdPAq%2Firq6FmdXFrWp2heu2N0CswquF1B17xdNcKkDSqvg%2FeHSqPjuc1RVaEbt%2B0WkNV3JBbUKpFDc0XBCas9hqa%2BIziPfnJrxlgUnoxNWUF2mS7&X-Amz-Signature=b216748b52ab769a9b85da0f18e520370e5bf529cbc4df0e0bab0001fc233178&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
