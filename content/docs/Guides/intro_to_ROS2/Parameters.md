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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GA4WMYK%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T181231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCHLnO4sQYpnFyzJ0FEr%2FBmU%2B%2BXm589teTknZuOYrTK7wIhAJCEZqvODEEFimB36%2FWWj7QQs%2B%2BvK3s7k4eoeCtWhSlxKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYmMJ1eBRkZ2Gk7owq3AMrv4ePXr%2BG7YxK4dAICYdhmkcYJ2WWLAdWfddh7YuNV4WiHSkZMTjxVHZEijKYunQKPJ2Zvt0FNInzacSChvMA2xWg54pYe%2FiePiEfLAgkcbHC7mRRk93knLdEjueyD%2FjHmOxbbfAzVa3aRsOJ5M1IL8wRZOQV4NYq4ujCJvgOu0YEOfZMRxhOZBgZz5EWikAPtcROwc85qcAcetEyIl%2BxNTPFsdb9WgvBqi5XxFWh0EIO5XPUuW1fVjAmzRfU%2Bs3%2ByWGtI3PVrHsV0p2EBUb1aA7dd9MmD0DbrQB%2BeGtYZ2oGUlGeRWiZtPpCn2x9DZB7mX0PhQSalp1oiBNSbRtXc5ApvbhgK3QQx2tCPSA8CP1Zl1XJZH8ka27RAVKD0AR9%2ByjCRFyyFkD4N7Bw1laCO6gn5eugKeBttL20l9BNNMMNfStMHR0%2BMIVjd1hhzSU0910OOq4hA3aDs3nZX0Y9llCL%2FoWWnjKDZq9yJbVMYJSiTLnQ5AHMKfkdVYH1P5iq6PshgouzDckFaQLS1TcuJ3XL14D%2BQ58hyu755Q6rjDuB6Q9FXEmHvCAXoQSf1N65PaXqD5YhSpDmdyLfRXwFOIFGanK8xc0ygu%2FH%2F8by2oBnDjIV4DR4ApkTzjDUsvfBBjqkAbN7OTf73IeS4kXUiLJh9BLo5lKhNT0fo8esEDjqyGegzRYzcH6UPlB4SXpVDgzBSk1P5HLSOdroXi0aaWJR3UGY8q1%2B6CmNa%2F0mMRqOla%2B9H6wRu5CCBQU2flkM5KMfxSBauhv5S0K6cEJd%2FSXp5zrZoomeqErULjJCCJOmCLLqvKgTamP61Y%2FgdRWaPOrw%2BfAZOHN2UU7fQLIX9pMOC6K1iIvV&X-Amz-Signature=56f7b77b1388793e943d3ab9c2da1e54869d65a9b599eaf71012dee81a28207f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
