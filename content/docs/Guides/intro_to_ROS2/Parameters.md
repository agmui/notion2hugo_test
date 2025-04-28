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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORPZIVE%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkntMJb1%2FsjKVaYEKFHeUK1rKgpmEkbVhZI4i7v7KSTQIhAMOwkcrwIPDJhHmsSzvlbzK%2Bl1PmerHv6jdSofvgQFnBKv8DCHsQABoMNjM3NDIzMTgzODA1Igw94lUYkQorVtI7v3Yq3APyqcEaVVUEasKLTf7Kfdrxai2lkC4TaRuBFJlOOEgggu6mCdfKtFsLGtuYAvMkFTTQBYngWPhHFnb2PYo4oYPW10gHEa2wSpQMj036CA1u4H6hHq7BomilVOv78LDHc4wNaleLYAZMbbcnOBubIwPDswQMCLakBmMyNJCkPGQkNcp%2F1wtx667SGBfwI4KGESratb8EH52fkFQkG9aEnuAfC2bPnITox7VSSjVbjm9qEFHGa%2BwkrrlFKwX1KeTiosLvkDnaN5hRtAPwwzpmLpvK%2FU7TW2%2Fh1ztUpmbVqxj3%2Fnd%2Bh7sYcUvW5zDPv5S0JouakKptm%2BJ7EmyktRx05Ill4C6%2BSUeA1igKBGGOGFGGey2XiY4WsOKBCDWZsmxkxWrgWJg%2FCq0HZq1Yh1n%2B6bPBbX124q5gn%2FmRc6DmCNH3JNfuBdxVdYtLBDRg15NjEj23vvaGLe6RlLpQzr2JpMhIlIZtKzKDgmp2NbLiSQnyFHeeqJq4enwazJcgV899NAQ43XWSLfcvwq%2FCPxClG6QdIyuHYXSAGbv99WhwQ8F%2FgbGU1mDXnv3RMoxtcb5j9tCngJDohtA%2FwZ2LAW%2FNsaqXMSy8TApETcQVYFeNW%2BtS9QPLMPnNJMu2YUdAijCF9b7ABjqkAZs1MzLOKsy2FXxAvxN6tfAVV2Tq55TBeov0UCqaHZHyWVkPoNbeWl2E65IlNJjWRQYxkYxBUImjscBu6%2B2g55BQVTgwqCdsA6eeHL026qYvMjM%2F7BRfSsJvXK2%2BIOT2ifnjOpSQ82QDp2Lj2oTXAT5zufjyFi1tBEA1medCtLZiGRi%2Fa%2BIb4%2BQZknh5C28%2BGLb2RRfIb0pAaIXd%2BQc1XMtQMg0f&X-Amz-Signature=d6ba39dc69c22ef0119fd0cc9562abd401e7f11143de45b851e0e4ce67be3373&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
