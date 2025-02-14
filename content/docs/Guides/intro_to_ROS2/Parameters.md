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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEM64VAV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIF89CmILK7yqPSINuOo4HJ6bcoYU9yKqKvhv6Uw0%2B268AiBe2foss8rmBvh%2Fo%2FGQpkbztsmPvipbYL%2BkX5t2MNf%2Bjyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMUsuCbbh178C9V0deKtwDlBfoVyTdO45K%2BjVFqSCN8T2LzHjOI9kvFVotYQFqw8xkGGaORo2wp%2BytyeTWHH9UntJiel%2FTAV8Uwyi4zVWaaDKSZCCXmgr%2B0LW%2FT0Z84Ly2F4Z3fBALQYARy2dA3xilzRYFzfhISFc5yA5Or5LHduS%2BmsWXrh0z3S%2FAEaSnkP74w5L4jS9czVS%2Bbhd%2BTpm9GMbYTyMIzpNu5%2FLKT%2FWlKc%2BBalMqRuqTCI0CxtqdiKzISeq%2BbTgVLHJAwBxlGZ8%2FDDQh%2F%2B6X0W9Za4yVePjIfe3FRatmhHzZmtpbeLQZ5LtPTcTlw2V6iopZjwxYg5y9r8qaslZNuwVUdleT7Y0zVbOpuBkKLKGpXcYeb05zIKFjOrwSRMC%2FRkc1GM2l0VH6gqMM4%2BWInV%2Bhd58x5kuRAa061spT5k6Gy4OII1TJ043QSPie2qlJ2GdndPNRUbycAN2IVwPMq1NhtWE1A%2B02kkTYxnEtzgX9WtSucW7aYLckInm%2FSE3f5xZvrgpfSEj8BBrk1WMhNVjqtWHP9HniYDY4Ybjpo9xkCNP9a801qGGQfHq1Nu2s%2FQEOghM9RA2ZaT0WJBrRu%2FtALkyEPQb6s9qUmJ6FRLDWFUVXlGAPOHXVMHCLhZ06DLaoCv8wwtG%2BvQY6pgGCVzOB88Aua5qURFI9PQ%2BuqrwddDoct6M4SoosZ3ZwBYdYJ2%2Bstlu8sWgceQDtp7rgmGuNGdOBL1txwrEw8uEuBch9JDcZukT2ft7h3JuthlO24Ote%2FWM0vBk8hevv%2FbyB3e9%2F1o7pSAQgvVMNg5MBPSyN2mbn3SKSoqhIMWxoTJRDqd8XckZMVenyEEGW6tADMRkrJgnUrx%2FCN7g8moYx5yaEKS5I&X-Amz-Signature=8c38192b35b21313e23f459a65e877259a4030ab419c582fdeb53470a5fb9c86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
