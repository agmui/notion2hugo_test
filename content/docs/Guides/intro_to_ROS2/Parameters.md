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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWSGBAZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEEf2TyfzB%2F9myiS012lop4XuMoSRV6v4ORWY7ubn%2FZZAiEA3p8LJUqpnZhGJ0CNvKKTGH8Z%2FlBegzfCZw0g5ZlRQ%2FgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO27qGhOHp7duEoH2SrcA%2FrnO6iB4sdxg0S0QYTor72BwNHSoHQSsZ33B%2B9vOoukABxDqK7fxmv1%2BGobuFHjOWrLxx20tU0I3%2FmKi61IMzIlMk8vIHYnyZx5i0bgpDjGe5D26vvraI6fTML%2FjC1a189tChnAJSJ1CmVf72IIDow41bWOC4XsE93dZUAmO7dJ%2BhpWBzwIPmH1Il55N9k4nUo6IIwiRLUUHOjZ49JbDBhazCgE42DGpwRMkRf3QEsIsCPTvT%2Fa%2FPsBettbT5T8VETZ2N89%2BebOPKYCzKXAWKF9EKu2SUkfHaUQrsV%2BnFzWPgRereRXBEZ9IWC4vRWJMNGn9Ebr5%2FAUo%2BDRFVwdKvMHQ0raWMk1FbHRssaBdMixlwa0zb2eIs97gvhWZBwHMD%2FYsCNO614%2BSkwVhraCoUysMycWzW1kCKwNM%2FWdynjtTbSsft772HlwYX9TsjgwSlLPZlzXGygUzkvFaFunr8xDKsMPxCol8hhxwClfKbeZG7nkTo1%2BVea9Pasnxp%2FOZnnC21272%2BfxyaHyF5gfnMs%2BDumdI52AwTR%2BgScGHLT99Au%2FeTxI83foRf3UYEhFWXxXLpnleQDAXHhgHGTN8h6vST08u6AriN3znCg8lhv7sLX5nsGzvS15CXPsMJXgnsAGOqUBmZDepsc71PsH7e1Dk%2BQgzNZcu6g9RVo1NdLjQhx2aa86DmyvugLHWBNkyBk2YmqKycyLk0qH2ZjJ48a2%2BimZ9Us%2FN36%2FY5KwsmWoZty3omqhvYwX659e2ys8izHIwU%2FxyReN72qIiFp0qkXt73zZVgUHWXBoKUAmN2D%2FI2q3bBHdsJIhv9pVdsXiYN%2B0eKw4B0X4xHcDIrGhzNmaMZUXArjNy83h&X-Amz-Signature=613fcdbbe79be0788b6451a6864d698451fec710f29d6825b9380d57cb30eeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
