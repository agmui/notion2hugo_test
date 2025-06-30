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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMFX6PM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFu%2Bjnz%2FZTZ5jMUXdwrRMevcs5ijF%2FJJOboBdsdiaWmYAiBBH4DpMDLsKBg%2FFtgbt502ZZLAQEOb6tFvRWJSjp9rMSqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeJAFxbWv44Z1wsI9KtwDv7zdCriGOGvuJaUweU4Ib2b%2Fl6kYlDC27gzB1gz69Y6YTO1cSfFlVPCk8gu%2Brtc7n0AZtM2%2BoNpsRB6krrEul3cVDbjiPGmKf8edOEunvR0PoJQooBDGylI7bTNnncwnIbRb2uCLirzo2AgDhiw%2BMcCEDpoPFIEyON3pr4BzaKObJodyJkvyA13DWTVbzRGmYLY9Ej4OEPEGIiL2wnu37MNe1MAYLdgY%2FrZ3z9nhVygYUkekup2IT5xffOrMvZAWRbkIqTWN4O2rW3%2FsMBUZ14JPvw9IhhIhWb8OEGwDAdLyKL%2Bt4RzhE1Y0t4FKv4n9HnccP7aCb%2BjhuII2sPy1cF31YaqUzgaXYeBFWO5OXfTJchY4OYAyoQ9w7pzpaVrtOal0Moi0QJEWitEyp2aTVs7qi%2FCcyxZA8F4BoO5V6tBEe7bzjccg7IkN63dSyQEhGRIzKLqXxB7vUhvRznxiPLML3CYc6s8LvzoTFPOM2mhPOCGMZNH0Dr05bj38nm4owNdaIW49P3t7mGaTt5guqhUQwLk%2BtPnd6CyDTQmuoLNAkTpY6ayIC1M40ePGzL3j2iAxeharjzaRBAUoruLU6sZsKEaZ42oobIfsSaEOr01w%2F%2FTPjZQ2O005Q0sw8ZSHwwY6pgHhaRYaBo1y68bvCF6fwsZCEDTBcSY8nNs86lC66Us9HYOqHOEFU%2FK1psCq4tmyNGyi8nf92C9jZVrC8%2FCwMGsnyGlhOjOdnmbnYciCo%2FBZwF51RFZ1dF3emUp7ozwWTO15GjNAuh5UCLteTdgkNftBl5W%2B98%2FR2%2FyxeeuJISoTqkeElNts15H3XEE37uEynC%2FTd7COGtjYbeGVZ87yCrZxB6KFUREf&X-Amz-Signature=4617741f93ff7394ce769d75d181ee569e416fdd2c4b5d189c07a9d7e68478f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
