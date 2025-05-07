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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MVW6H5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T132518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJjQa6RJdnzHnseOZPOG16mJL1hxmsaIKjdpWqlJd8YQIgLwx7pIbKry1BIe8nJUAqkRJ7bZGZq%2BdMBNuIcpfwty0q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDB1tMV8tnQkJfr%2FtZSrcA2ecNKWflAXyH6RBCClnLdysH9UV9%2BnbmVrZYkEiGl9LWSv2XeI%2F5gzrs2R0yMm%2Bo%2Bx8oz4WRo9YMkoisfEFsqv3XswGmgMRF%2FRIK04Q5%2BdlpLf8N9s%2F5U9EOOyjB1ddMq%2FyUkMhgGjyOJMt0BRiE120pkQ%2FR3ypKmOQItIIQ24PLaIYNthveGPKTc6S3ULM66vNrcolYRKUJISlv0%2FwCxaTk6q1432Gqnn5ZmUEj4zZU77wlQ%2FrpNESvkgty8WYRbH62Z5GY58tnLOgRsIRZTrK532zDuLWvAR5oTLHwofF4jnYePeHZH1Y0fWANyc%2BC2CcLIjCU02EOmO2LNefd1SLZQIKppTtm671xz96p7Dfrs6wS4wbRbYDiCnrqWxdfM%2FjKlCxVAIppW79qsGpU5q9TBq2ub1v43TbY4JNZY7EgnF3M7nObOWzkMl1Hi%2BvLpAg%2FW0mTBNEZHH1Hg0Dz7FDsePgGdhk5XZZJ1BFqznTY%2F9yxXa4BvKY1DEu5negpbtZ20%2Bd0h8ZSixM1TPPzTzhZufIUgnUp%2Fohz%2BKcJUsQRBtuEB7LoQlZvQD89vUGxfMXFJiyz0EFvYnqvAh9jVhhq6tSmV%2BpvRjXB891XyztgK%2FUDYrHe9VfAN%2FuMIWz7cAGOqUBkcHxZLAzkoQs6eGvDe8Ww%2BE7JNdrRO49B8oSMwcd%2FPMheKkNBGUZEBCoDiFCUMqbnE2suqbkyFW2OqocLdMzpELw5iPat1fv46CWuNPnd7U0XaGPqUc5xMzgm0smld8qaxFUWOZHLeF4xz7Fb7Ve7MNVuYdBOcUERU%2BQocQriqkYcNjiJVnE6VsulzPif1ALNCVJNqRfAxDh8UnN5GGBhjrkhQEw&X-Amz-Signature=e1fbbd6a51e3b260675a1d2db1d50fa8c4ba6b726262fc8a85809b0124e21737&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
