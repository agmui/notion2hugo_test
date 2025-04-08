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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMSHDCU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYzI5XplIgQBea6FaxrCELhFxahYpDFXCOda4EX5U5rgIgSnrY73qgkfgJroHMg9ZuF2y7L8Pdmxht5uOdHRlJK4cq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKH1hBMnF3ID1OEW5CrcA656aTWn0%2FasPbmWyo8welUAb00A9707lHGicBgfhP3lkmKX6pPaJClxFcNMTuXovzVl6ZWtjWiZ9l8%2Bgddjbjolc1fqNMpt%2BfZJ5UhYEdHadylFtCgttWxPq5styf5CJfgaF7jr0jv4IBabXW%2FAZW8pbhkpXoHBBPLnf%2BIFJACCl%2FEiUpLd1XIfMhsQbt7rZPv17WDqAC3nCOe1G%2BLrEGRl5IX%2Ftehm06ys8aWo4i95jaHxWJRpAu5IyYNXNgkPZoq0nBryX%2FwY0tGzn1kKWVok2pHzRGZYNSJEKYyNUb6aG08OQ0jEI0nQw6wr1IGQbNkjw6%2Ffa3f7B2xPj5%2FbCd3B7gw0fXY7%2B0nmkOEKSJBj%2BOLBZvvfD%2Fzb4kyoGgOCCUhruVdcLTi0Rb9pLT9ar%2FrFMa5ENtJLlZbEexQOC8WDbHamgGNDkKxRzmE2%2BBnAtKT5rTfqwCeGxMB1mxiMnpe0A%2B8M0yekIJEFoe%2FnXUjaxcHccJ6%2BkuT7qKa54MzL19%2F3h2wY6DTZaWShCV8wGZbIDDNPW7rY4kgr9%2B4NPL5ySaIkkahMAvqJcKrpU31kUkK4%2FUhyAd5a8y3vb%2F37fogDhKHB%2Bk00jArJA0uJpbMzNNW6lwuSMdTbTxfcMJbw1b8GOqUBUYNmf0c8mHF682VxJNDmDJwpPWBfq5%2BMDjxoKsus6IvC961keL4T1x%2B1KOVJQX1IFnvwDixWWcFDSHJcsOxyymHomYN1aOyD0WPT%2FdURkAjqTiAFTK9bqNJXtMh7fDDkpF5ei1d0g0PJ3an7ACI6oBh%2BHAg6Ac8%2B4cvSFzmfQ7sjVFj%2BmqnMh8CmmhByNivwRVS1KW7kmdUWVWrrtyibw25c8gqF&X-Amz-Signature=2e2cba5b847c29df8976abb3c45add9185b5bf18cd4467062c2350b100582606&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
