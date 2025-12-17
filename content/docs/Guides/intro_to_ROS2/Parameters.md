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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVN67JI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq%2FZvo1LVvPTPew51LENkelDvBEfMH0ZHN1HYkXP%2FLeQIhAN9EcMi528rrt2r5frEyzAwCKe86oL%2BpjJWzUsUwOC%2BhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwqdJlX4lDS4%2FeOEj4q3ANTp9R0R%2FxGxgjtZoBFFUAbU8NEUgMPmg6%2Ff3zQ2wQ2VTKkvnPSmiADczzTIrMv%2BURDNRoTWn9Z1j2AWkL%2B0vZHWWQSm4cKrxBLqRCxpjBBI4H%2FmAHxhxUU3V%2BbKlXm6UUmg80%2FU%2F4zK0k647RGUP8Qcq%2B0Ce%2BLYJN2acKcKqgaukGVCPilSeN8uK3Mf%2FEDr2zKWXpQ9KR0zo%2FNlyfypvqOUOHbiq00pLebG3TqUOu3b9iEyvJ5stYIVZrFyc9ptWU1L4kO3Sj2wIVXeVyaXSd4aPzZQthtkxJL1n%2BkK13nbOqwJrJFK1ukqijqp%2Fr7r51Jkm6kmQaob8dkPacABVYtpHlEzbCgf00iz7iQp%2B3OOzLY4nVxak0cWlL5yQmWM8Y28lfDv%2Bg12o2vxNwqfVPmHxDAgX9e%2BptM6pBZbZ1zFaeWh5bB3wgL5vVV3H6LNDMrKyPRT%2BPEkiTvVZT5h0Ujr8kRG0pks1k2HcyALyUoMKkofJmGb6bqkuRq9xWGhlr%2BtncGG5TA1f6e6kj4f1zcRmYPZ1rJJaLjQEIG%2F4bfJHDPYpnWqtg14iKRJ8qMThuCW8bRrVMhHsbKadthTL8%2Fo%2B4Refl8eMBcnBtAW74SZrzB0usP9SXRbAjYFjDV%2B4fKBjqkAQanF1ze0qWAhd9ia6ZOhqYpZ2tZCeT2u2Iz%2BaWnbiMwdSUrfaXAH8Ku1y7iJXIoaQG4JO%2FZOWsRZQ4dy90clrFoaqRyHT%2Bse1BecdG5uQjpDooj94LL3a9F6UPpHuBYSlluKLjRSt%2FKIG9KAzeGRiWHalimmLGthDzxWV5S2fPYewRNDPeFT0sGElQfifzUKznFqkxxPItKT%2BvTfvtt9xmALYeq&X-Amz-Signature=55348e2e2816d4d3428374f5ad90d915742d991db4e347a0151be9d12f520c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
