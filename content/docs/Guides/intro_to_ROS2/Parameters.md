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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH2Y3J5V%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNGBrYrge3h%2By6SQxAbcFooqQDi8lZwLbxmGlluD%2FpCAIgQLFzcx9VX9bfU4N8jtz3N8rZ0Px5fIdsSTzIUhp60oIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiwPmyzLqRR%2Fx4pbSrcA%2BEXWYbkNNkv5qduY409I7cAd%2FhRn86Udkt5ThxnYbOSxFZLf2Baf%2FA%2F3AKlXTJFLvF%2FdbTJV9LHDzm6OEdOZ%2F1SZ%2BHnMbIXtF7GbRCCf0jSEENQuWxw534tVb07BdM7aKA%2FpYxYjsjiUArGiNwdjTLNER0Oa9xfRt1akUnJy3y6kXNHJc%2FNOnovRBrcBsBD2mF2Pkprf%2Fv2eWw3lC2zdYywe6W%2BMes%2BXYzlXkES1aQhzxzz1rObps9X%2BLfd%2Fp77vCq1q5GG60znDXQ8bDziygzC1T0rhSoPL2m6BUoqUmME7Hy5b%2FN8%2FYWlDU5E6ki5%2FZ2cDd4ul5Iax3KVeGFiqRWp9ACXP3286lXdUOMzucozx7zU7I5tLLScNN4DVUiiBXqLaq%2BftBCDSEaCfarUp7t09fUyprVb1Y0fHybJDSVdpP5Aw1HrlqXq817n1t0D3EggszRqfDtWmkQida9SpxFe%2B3A1DOQtAMu9xybIFobo%2FAk73hr1CxHk0O8zpIOOMlw%2BT%2Fjty3e%2BDNTPi83cbw5g5PUB6kK9EDLjs7xAMRdf0q0p%2Bxl1%2FV%2FWm5DvXmwOwxe6ak3ZmJjMWP%2FPeTdw9s4H0AtA5wAQoBBRYX5WcnB4wv6dy7DwF8lOUyRJMIuq5b0GOqUBY6O7%2FtsFDlPb8X7LEtpmYPa5q7uK%2Fiy0kfL17LYpAVynCSdzMKHHjJvVTcDUGeHy6Io%2B44Rn94Avj2fvjWonpfX7%2FEqZvq9R9RHSh963WdwxvBgzar53VhN1tqWGgX3DspKZotLX6p7q09NIzMR%2BJQuhYlEka%2BV%2FfqeTFNxnHkHg3dkoHwyfb%2BycPtQ%2B0CTmxHyJukOf2FQ3MhwjAQMkUZtFgBFW&X-Amz-Signature=b32dddb32e6e7786d1eca2eea0a48891ec9537ef25b2b66fe564346ac5d8a791&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
