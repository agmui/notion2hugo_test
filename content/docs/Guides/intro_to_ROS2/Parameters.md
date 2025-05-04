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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMODMAM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHq2GF%2B8EbCxRg53OzPOa1AxJAW7WGUubcU43PgsOhBUAiEA7qtpSQx1gneDLx4d46v%2BN8pFYmazg%2BoI%2BNurpPbRvyoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHucl7VzSFRM%2FQ9lgyrcAzPNRhNuutNF6wp6Q9uEoOUkhvkMuUukcWewTgfRO%2B1WCNw1t1onhR07zbwzWiFQTeA1hlGqoz1jHYZnm95irEr58j1od3DS3ZzJvOnM36lhh68HprGpjnVD9iA1wBorwdzlqS6rCNIcqQev1q2hET4nBsE2qx1IjWX1doJJFEqDBzx63lcgHLA7yU%2Fjws3aqyNyaUKmbGVMUrOx71CeEADaE3EsBM%2BUkJK%2FRfTkVX8hB%2FpzlyqDcbka1NWzyyyBaq7mypAqbMu2aIMu01BGEpCOfiYHXyn6BGifsl%2BCMpzOEKdUB8d6IiWT2styT%2FR6UTgUtn7a8J3m09AMs7qW%2FYQP%2Flm6mUPRBQVq6%2BjPHjJEvUE7N3FPgen64GrwrXlYRxBGeyYg%2BfXRKI5JEoi%2FrbXr8riccWzkTGLDU%2FCMNdQAGpAL7jFTL6o37Gd6Vt2nOhA8FTEXEEUjME2fLTwjdfLwXISzUqrJCFPI4DhWK7Fx2DIHYqvhtDV6I0OH%2Ba2z2ngMlpTVMkZt9l9wOyTVFBkCvzb21MZ%2FEFab55lRKYtCb3zzpMCNr64%2FLoJgL1DH9p3yye1CMPZrCIFIl07nfoFc4XnjVx2KbUgz39TfdZhlfOQ%2BbwPP9Fr%2FYU0bMI%2BK3cAGOqUBLA87FRa9f4DsIeg7Ei1JxL1tVBlruuUWKKsLwr%2FJb4f6sNBtppAUTjW8XDs7kLhBmEwNSG03d5vaDDhmFLO2O%2FmL3Igzdj8S3tWaMFWJus7WR4uwdqS138EgacTQogdWyP7nbQb%2F16oiChSR18xmM3Qph2qQ1engxI2GGTa4xL6rO28v3nfIPnl36AOSCu4yAlRre7kZaR5a2ORDuXGqsswgBYfG&X-Amz-Signature=4d9681fca90cd294fa442a84f567659a17f0f2c6bd955987c102e340e809684b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
