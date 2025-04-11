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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFD6CFE6%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCXe%2By%2B1JHb5U5BFs%2B38InQu0RgmSr2pvT2COsdSrcC8wIhANiXcQWpwRX5oou2aj3B65Sf1hgihAXWNm%2FozKlKA5ekKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF8gmH0YtkroCRfNMq3ANQ0%2Fwvjgtt8jztX0hBkVB9QJAVEfOi%2FCPSGsjv56krIusOGn63qU%2BwJeRlaOiSLpJU%2FUQ1wpRFFw%2FTCeeG%2B1XvmCKcismAWEfsE%2FuO6JOtm0b%2BfGfKOfGeNEO2SkHbOB61BF%2FKPNzA2CHrO%2FqF87T0u0jIfnwvLFAjfK9iTtbXnh%2B7yGB5GmKUNpFkkfv1Uzz1k3YKnJYBNROg1vSSo%2FeSNdkJcXa04Htc6i1G2l66%2FIn%2BcEaCrUGS2qP7Xtg3tWXzY9MOS65Cox0Wr%2F4llm9%2BoSLU7Cr5kAROLp7F0BdmWYhmIecr6xqBJb3m4%2FFoaL5LNHGnAQSBXKa7b0j3UgjhCM4jq17YFTEOvgIyc7wBz%2FG3LaDzTA0ZOddPsUZ%2Fzi7P0x9aKy9aVS%2Fth2BoUJgqbHsvm5p4GRzGZ3w3GA4zC3d%2BWOOnHTngd5qei3GdMBmaLrd4Fc5UwEKipJ6v4pGEGA4PYKLsxczaCGVSjhRjCRui7wcXVpyGyusEzVddb06%2F1RI0wW6ULF4iZ1AJ9%2F1kzc119OrJJEnKatUqgOJ0JAx09kn2quzku2n3jjN1ICk6W1aCvG9nu211Ah57Lq%2FQUnOJLhcreTY4pKSf11lbbJmVsRySP6V%2Fu1IT5jDsquK%2FBjqkAfpN4rnaxQmUq5Sx%2Fz%2BBBIF6zRcIhxsqsEhzFTTC2br11whPM0k%2FziP3XphOyGYaq6EU30MR8iouDJhdXZx743f6d8ipHlwQrNj9vgf%2BqpMLhA3jd5NcIHmBliPDC%2BcdVM6ULIlvsZrMSDSv7%2Bb39WLbvcZpUeovmXzBebbpI2FFhn24IojioSZDcFwcqEmwr4LifHvfajEPZB7QOppFpoecITrt&X-Amz-Signature=90751874427ef9f4b7c2ce7a369375ea718de97216cd24132d810bb66edf3ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
