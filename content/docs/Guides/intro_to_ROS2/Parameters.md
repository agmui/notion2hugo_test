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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRC73YGI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIE2AKcCTv1hPexwAhwNdsq%2BejLYO2V%2FT%2BCT3c8dKpa6wAiB1ztwCXPICbYRmjsAa5z3vEHCjUMkZD%2FcOQg%2BTPeGHlir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMSVZHXu1Oj3aoienuKtwDRdFEgY11i2985ZDY3cS06vMlyBIrCeYkf6bAvgqW3jXgNwEm3J5XoNlFK53pvwK%2BU1D9mdLpg19uZHao2xVfOMuUedpkKKa%2BejfN1Cb484z8ahxO6hd3nXBTFqtVyhXmQZ6Pr%2B8wlKWI0jDpUwhPz6sl0s2HI3JtHPKrBtT22AI2t%2F5E1ofXTBbMGiEm1nlX%2BMoozt%2FZ1THKnWwbsaRWzLqmAqvZLBVmFpmadD2Zr6kMw%2BTf%2FHEHCk%2Bw4a3nz5HB1omO401sI%2BWYfG3QCv7%2Fq8qr%2B0Gu0%2Fdz%2BUfa5YbdhqUW6WI83gam%2BtLXXXefJMVNxetiWJsyeNmAFn37RB%2F%2FcQyy4T%2FzaFQa6RW0hbz1snWVfOqgvGRLs2Omk2pi%2BWaHiLcWMzDjWz%2BQeCGVYXLdSEscaIu3f05esgbz0xgK7IC1%2B6qf24yBhuaIfS3BUwX9asnZ7b0zj477ihjgnUBywQ%2BPyDUYIsUGeW74jBJ5JpJt2vZkDPRxR6%2BqOgyhTevx4d6%2FhQC9W2Dzz4eIUhJhDD0O9w8kgbZeki5VPKtX02Cp8ANTK6dCg1qUyB37%2FNqftzFn7JJtlb7XFzfe3gaztKwwdfjlJRK2aDJMfFmZcdgLRdot3%2F39lkTEJrAwzt%2BcvwY6pgGIkR6noEcLc5a4rUepXsE4pXpfaVEQKJGtxA9FLJvTi4UHy8ksGoVvyGUhNSi%2FNCqgjnsFC2Hwkei6GvSVAjMIdz5vBrl4pMCGtcGeObfVYOM5S%2FVO%2FY%2FGZoQWDfcTCS4FVJEPfhNsmKXbq68qXyU%2FCvSk9q3vlQqYqUwXgRma%2BwxMBuAO8o0GfxwX8Cox2g7O6ZnooqKxrWMh5XldaxA5enInGaCU&X-Amz-Signature=9182461d2bbfe298576569a48b452d61d3693f5adb3185a38b1e0faafbc1abbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
