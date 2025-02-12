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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXJZIT6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu8eswtAV%2B4AVQpx9FjWYNyyJbTjdTpTNNjq7jlf3kMAiAzEksPayY7C9cV%2FgaGDZXxvWUYKYFNSXGt5EELVgl2IiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYQWaeViq6zrqNwzKtwDd%2ByWmnHkM6l0tL0EDEnCfE6SSc6C40pnGO3v6L8TmS3ny%2FgwK1qVLwOwMtgGw%2BAWLMS%2FhT7vykt9y%2Fl0xKmyGq2HsMy%2FlbeEBKYc5FA2MdlhYalnbj%2BLb0oCStvKqS3gpbSntGxN2fXGfcqXxOt%2B0GzBTgzZ8AwJgDKnlpOcazPmmL%2Bpmm8g4trPqezM1l63wdHXqW%2Bfq110iR4zc2G4hFw08r8krdcGbB8yaBes4dWltCcoxe4ZpmqeGzk2%2FkYn56%2BBtXRsttYY8os3047lv6piDOuktSR5FcV0iGOAG2ko9Av15PHdBUw6zUPsPlyyPLEk0lRSyBX0Q6z2LSCCnYqtTQ15G0IRdL1zVglg8F8Lv4vAzlOli8e34ZZ002reNGg9%2Ft%2BBixH5Bif3UyZMu3mVrhAL1GRywpv7y6cERSPf0d4PGz4ntzq4eHOOzk7EuTb6TxGznEwwge2fDUW657MDWd06jSLyvWnE5%2BHR0ma%2FQV80UkDstzgwvNF4fpxr%2BKaR4sDHRHBzUHYd%2Fl1QR8uoi%2F42B89jYGJiQvQPFRyfrO%2FyogqAPHT2HkU4RPjxWsQ1GajRcfDZAs0gcATR%2FnSiaGkM7s1mNxw5i89e5snrO2EFaWIQq9tW4KEw6b%2BzvQY6pgHnMmPE2qqQvM6PQakgDIbueyKT%2FofZ0%2BnkcqEoZ%2FRt3WgD8XXjn1Y%2Fno7EdzTsJbT0Kz64AVExHI2Jo%2BrV9Ot%2BcEYPv46qG%2Bc%2F6RvfoJNI8pY8Ym9smmGS9ShTwTO5SLVPKCskN1maZIdTHgwiglP8ayzo%2BjSSjlYmghUa%2F3R7%2BviLfNT6lBj%2BtnPR8mNFArWrXdPYR5KtGQVGm0ZdA%2Bv149LbDHG%2B&X-Amz-Signature=947cacdf7d317b3a3cc4a8f0a07518c2635f258cf4cfd4228d58760f3105ed5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
