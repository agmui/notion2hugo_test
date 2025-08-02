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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SABQW3NU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeJSmnl7nTy0NcU8%2F0DaYEUdbS%2BoZc8o8hZ1A04hRoDAiEAjCNwO2OnyahyfcK9aZlcG97Ksrc2Qbwaqmt0aNM%2Ba0gq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEjb1F2dzataw%2BMtZCrcA7ChkQmXPg6eqhmaFA96R2YEUc%2FFvGBtF1rX%2FR3MxMOd%2FjT8PbtyhZpwFop79M8pRhwF4udwy0QbhoDL2oPF%2BzU1ar3Z9ku3nQCbLV00p3ezlPn8cH0kFLXI5J6W1bqz9k13rE57BK020Ve0l67QWcW1CJVf0ZbN5nz3bmzUT7NnD1GWF6ZITQ49uH0avw3eaHXT6oC16w1M%2F0tr4LdkGq7SoiW73hdgh8Tz%2FSpFN%2FxBGkHGDyg3UEJwVsXA9dGtKEQtNIU%2Fgn5DeR1RMJTBBmK7hfRXF%2FlIK96bSd%2Bd4AdIZND0TADiaLlQWmGpRf3yzxIEioCkgtKSdeadMwUBuVEi3VZ3y9W4caXg4264zwQXtBKd5ciF%2BShHyIMYVoGD9lM%2BMEtLwXx4MdLnXYehgzqmSR59AHzrg4px7z0Iexo8fBdISPdUftIaUkrnjIvT42eV9HKTNKYdnxHABpFwMhzrnjoQ%2FplRlx8cwfDTkVSRXhngBawtREkq96hoPXaTdFNtxCD%2F5pvlk%2BuMmPFQ1jAEDjS6jZ%2B1y%2FJ1foKFuVIUi9mAdp1kuK%2BlziMN4HeawTjuKnLRtkYlSxxevRxroRf1j5cmhEl0nvKK9FrCEgeh%2FDXZFiON5VisCkBjMIeRuMQGOqUBjTIxzs70E76fQxCwlsTxxZbkuhP2ijJY3c8tI2t%2Fk2%2BYAuFPgsspXZ546Nz6Pz1ZaDnB2P5gYaijkOqUF95C6VZehaWHq1EbFW70t6RuZE3Dr3FYTvwc2k1Fuzj76RAcxGbCSxoXL4qMlC%2FPCWthfYDbhD8jnV3TzM2qPHwAXg4LSO55w0qFNJ2KjCXUshcK0SUmUBiiBVsSfCKmc0HrBEUpXZ4A&X-Amz-Signature=6e1231665ebb9264b5d57114670a33add1f2e7360e73b1f8b6c893cd0d53a41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
