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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IMOMHA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDFJ8N0bVlwjxYrT1feE29xa1FMN6RJJyiCsMcZjScuLgIgcY6%2BxolRMkh116CWGduLZGqekGVuyq%2F9IfjqK2KiUGQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEfwGKSt%2FHuM9L14NCrcAwIoXnKm%2B7kP5Gb6AMcYiY0aev%2FyyXYUYekxc22uG%2F8stV2e1GFOVbVcFf%2BIZaB3Rkh53gIQAoLPtnSqW4u%2BlDQ0%2BfXQU9eQ4%2BMfmRgFTxBpZkIiBedVu%2B7K6zaFu39rVrM%2FUz6I5aqDd7%2BzdKdFPRajYMBdz1XKTrZJgRbaBW4g95R%2BiqWKBewbjT9u8jNoMQfnbMItSzkqhSiZja%2FUUkkYBHCU6IIhD4Whox%2Bi4QABtbvwWwpV17aQZVngDROupT9aLa783LV%2BH5I4lWt%2FXCUE3ADEZUy76XXMoTFjpuKjopg2OgdWA16UNh%2BN9mPCq8Ekr5gkRRssFdFToeAU5b9oGclp4wrmR0eATvXm5lhmg%2Fy9PthTHmlB%2FiMl%2B0%2F9BIrH6YUMYFNug%2F%2Bg2lQUIOpDMPGVVu5Il%2FTPDeZIiE%2B1DeTTGqQbjZYEFMxC5WwfYoT%2BdhUx9xL%2BMakk1%2BP5Of6FKqL2SrdeR4HrVonINXJET%2FMv0ypUFjDD19sAc4pJhjVw5zX5IKaAtQkBGzUauJ2UC1Jndaut8Nq9%2BgBjmkd34PnslExOfpcaVAP4j43gcONL7G9PeLBOmDjNDnRcVtvS%2BG%2BT6UbLZyDYnNVOx%2BSHCbvGv1is5WjtU1HQMISss74GOqUBwIohT7no%2B8Kcsn%2B3iFK%2BMuSKykinzXpBRCIJH5nL7MxObUxhF7j9Jrx6Aeu%2BliP4UhoFrRT4QhzoLbKybAmBcFebA9MQNLkJhJ%2BLY3YD5Wiqp%2BZPcG6DLnAl7jpi0s23vMUjjETiCxkIKgQH85ors%2FCQI9VeXDOUjMb8Wa4v80YaerIxZpY57qIHuS%2BW0ypMN0D0zmryuVsBogO4hWQS4Lo%2BRKK7&X-Amz-Signature=609da9088afb810c03c601e828050e76ce524f1f8d76e2d2a9ade386a0b7c436&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
