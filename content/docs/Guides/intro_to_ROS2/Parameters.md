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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFEIHKO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIATE3t87EnLqGmELrDOvP2Zt2VbPPzgExQqrCv9WjA0EAiA8ekbO8rGr%2BLkXmKWSuhGfkCtASTIVsX7my47RbH5c6Sr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMzd5WkMddWjlTG0GtKtwDYA3lYCzOp7CwjE%2BtADH71JHWLvPOiovNbC6esHGXiJjeaceK75BetgjDY%2F1zTUlO1GLeCKTzHLwJn5tqDtMPOxArSPobyJiTNrOgp2rM4aqNxL417EdliL3%2BYbm45D12PUQi8FQPHMO4q5SYSvsc67RqM1TbWbTCJg2GCncJvGL%2FCmIIEGY6TN1Md8cq%2FrW5sAVyykudU2b67Sd5n%2FRbVHb7cjJf1RWj17nvzdJYrWuZjuCr87wK040SKK9r%2FM8NRlhhSU%2BKfr4Cshuu32oqlTshmD2YkSceFVCzgQBuvwp1vuWtUDBb4ax5z5pH2KrCQ5tOLNmrRZSYXXUXkgrNXhnqgNOX4%2F73gBQ1%2FBn11LLvpGhvd0%2BbbxOtwglRdJSdofMlaCFKqbMgHa85WXxOl7hZeCDJzev4iBmfxiQXjjetDg89VQM9ZVDWgdPhRDTyNKkTUb22yiRcYEKlnJk7OT%2Ffwvyf3nXHfalRr5IkLvDa4vDgtBRhot6PddEAdBhtGGpi0471dtTJIKHEVFN0I6p3NHxgYe4JDgbuQcHOUSIKvCDpMBMBNlAVYwl%2B3PkFOTE5flFeaxihDe1id9yD3CkRXF9CFuLFbxBk2mrM5dZ%2BJ%2B5sAwFnmPNvkeowgMD7vQY6pgFy1jYuE4MYkWzI2CGO2LBgWGfttSQRHZkEPTJGkCQQ81WW%2FjlY8F%2BgtBNtZr%2BSqZIV8se6jWFUJJ0tywI3nck%2FHrV6kdWYBu2dYiFgiNwCahdrM1T6mTQ2Aa%2FXvPeQNdk4YHS5yR82pnPqWqyGhKJyN%2BZl2tNYuSFQFRXY8PIWeIm6nZtSIgdt%2FzwKQPsgV8n%2FJxD97TV4QsRcMBc196lu9qybLpmT&X-Amz-Signature=b7bc143e019630247a085f77290d1010edd410d66d6aecb781df80d5cf978a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
