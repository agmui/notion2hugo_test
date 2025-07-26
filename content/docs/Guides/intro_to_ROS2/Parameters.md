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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765VTEPZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBiikp3Hlq7Zq%2BfSNQPVQgohiY1mkgTYx7eE2QQTB%2BgsAiBrBRe78weett%2FViqdJApa4fxEV5ttimHYg6eZVmTq5xSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMuzkacCvhNiZc5jkdKtwDMKRr%2FrcTuy7wHc8B9OQ9TWb5e84BYWf4SFo9XUoVy77ks%2F8pJbEbwV1qCANMaeZ7Gj%2BTwB4LvgYK1RRBL8f%2B8SQIwCFJthufq5OCWriTVU1guBmiM6dNtEfrc%2F2Nx8l1wyPQF7o1CibY5LaIV2vSG1%2BcHqETjZWY8On0GwTcBSAe3%2BYO1YOBrTne4REy6mkoyb1h%2BvSV7z2W1Y4j%2BTXIrsFyv0dR8cMs3YjYQVVtQryAoaNp09tvQx0%2FGyffozeNPPK2hPfEvn3%2BltFwcRVZ3qj1yNLNKqTn%2FjnMaz4Tdk4EUQ21LABx%2BIjMg0iGGkLYg%2BV%2Bl9%2Fbt%2BxaXniNmwFtAdKBr1cWUDLLhuvA3Yu0EtjZDdksPdi1PnmCxqMnViHvw4t1lMAguPa4kHr3nfwxnxeAIf36jguonKxf%2Bds5YKCyFUdaW5shP9mT1GAAlV0F2VQYjVO5DlRKZ2wM1gm7qlabilsFJYqB614lnGVJGQ%2FDAv57gwvDxYjhQNAFH3J%2F7Lecm6%2Fsa5Qs%2BTrLTB4jZ38k6zH06LLQtl6KtQj%2FRfSt688rV72a1956P%2FlAdVwlHa8G3aNL1QxaSAafYrFL7uUHYp%2FjilqunMfxH2zAzDcTZu39ecByFfFu9AMwrPqSxAY6pgFzXNz2mnRpy5NZo2yTyNx3EJ4g32A9Utrck9lKRa96HXflnEtCYrPMYKH%2FwlNBuSG22KiSJeGhqAUnabdHYcryakJBlGMB2tiPmB4PH9VCxvXHpO3nUjvTUrQoUztU7WcFSX18P3GO4AMO1STZFQoe%2F7j2RQ9frWxK8PP0jTOYKuhVSQt1tEsyYhFWcwDpPfvgbJ71OjplIjYyKTKkrfBFfpK1vqZz&X-Amz-Signature=5373cec8c8d9116fe8bfd352fe36ff4987ae8f8b7cdcc1296139c4add854ab57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
