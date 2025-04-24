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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBZVYDA3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE122Ql0U7ob5R%2Fq2DO3a5MZN4phqn9rj4eMcCn8z6TlAiBIIT4ZG31p2%2BDrBdze1pmU0b9som0FUQfVFg%2B%2FA0EBeyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM7UgZzVtwWYyBf03YKtwDt9eIgUU43Un%2FdSLjAhk%2B5O7q8aifFQmhoD26MoOG3jj2B6upCJSakBjTCVljQR2tXtPcIQWRQuI5WGawWZbsnMPCSKFIKAsb7q6rJkPDFA6XmSNaw97chwUJw8%2F%2Birts7pNPBBa9toFtqn2FmhFW9HKn0UQwOvYfz8jUgBxVDusQ2NNXdBfEg3Yyic7rpP%2BkNdOWnTOqE72oIhFxvPY9kt12jtFUYIw4GuHtW1mrH6ReDEvgavacRE2IMKLzIzNEE41NJ2bP6oxKCaBTHijUYB8P3lj%2FEyXf4n3pZEkq0oYKDmN6hyEIA1gAFnz2%2FhD5QzA9e%2BfFbja0K0V5VUH5spD3LNrdexaUn2OpJL1p0jNLD%2FWwZAreUXcB%2Fw4QNAV1r03iCz21s3%2FtMmGrClolkbjrX4uZljb58SSstrW7bCKYqygVE1wyflAc44V0yTTnX1Z8GBzObNoOiPpYX9sxrRVhyyrgvosgG8iR7n0GH3urSp%2F1%2BnH2VgJ89bVQd1478eIN%2Bg7TtY5McFI%2FREOPIrvE4YPNBWnRSl0zA%2Fw68uvLZTZwf9sJaO%2BIJnlH0%2FAkeok%2FHpQ6XvD8vH1jYK8feUC9JEDmLNvFR7RRzumzTKtDsoN2VZbKQD5FCoAwwfSqwAY6pgGakkoz6JnuZI30nMt0tg6LvcuSNTq2lBuG%2BfGgx24gUe38gyKfZXy31aPRl0CcUnyw8k%2FAzeVAqitKSZWLXiCTs2WPgR7fBafT970iSrisksaxbFlpV%2FMG0qZVDR2TmWi3Wu1MioVTaGScQvBuE1x8CP4Uoyq0qYBJ2BxdN5MTPAtGowlwy7B%2BnHRspwvnr2YdeAguDQLJUEJ5XV9jmcGrraBpMDm%2F&X-Amz-Signature=4adfc0f881cbcb8b89488a558ef168d3b342e264dae24934c0975bc7cc98475b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
