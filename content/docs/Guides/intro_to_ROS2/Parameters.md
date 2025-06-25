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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFYLGB7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQC3zcosOJ8e7QndnawULjfY3pgCp45Aa6k1ae2HXZsWMQIgEhk5js7hkq3VX4%2BcAguqfc2XFHGewT%2FvFQ1Nqsh2uKIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMR8FTWA%2BKOAzva%2ByyrcA%2BlY42rSd9hJCLZk4vf9Fq5dB67JGEsuQ8%2FSJiiFndWan8JtUrD6pDyaeMu9OzOnNkOLzddVU3XWR%2BeSXQ6vPER6jVvjM24FyCelPO3kAKzizKzmQcHKDMf8TOf39dWm5cqZRNNObpRtj8lFc8b4smd1HIPuBzAdN%2B79D5gsppQ955djlml6HE78SFAogc%2FSlSB2xmiWGhjX%2FGcsdEuk0AE%2FegzPEd1Lln8Tz85xkbSZ3Jz73fwpPZ6SsFVOvr2K2yb4%2BOpnhoEGi6nS9hlLL3aiQnF%2BzuQMbTiLBiF0TVLbyDPnxaalRx5PGGw6tG2axE%2BsLKvOtVCCd%2Fu6AmlZqJ04YTBVubsPYcF1ba0a5Rzw%2FRJwdNpZRBuV8uSd1U35nxv0SU0bAxOXEreFWpjzWl08pQd0fUiZ17kQfA319sMJXBZKgae8RBOJjNQBvy69pR6kQG0zdQc5gsWkA0qHvU59gBnUfEpJMT6Kl4WyohKyDmwljtGLIEQ8kBTFEvV0UYJksHJZczIdUoz1PWm0CGWuBflGRd0gjLkQiZj5yWtFAZq%2Fd57mZJla9mdLh6aX3TliVvcnOPbeBMo6LxUyO1llrtYCBCjbUNgBZY%2FxIXu5lJCsdL7BP5HYQ05VMMre7sIGOqUBD2CryR05pvI%2FmuQMoabYOOViR2rMO3qEH0gm6E6USMZotKxekc3gx%2FN1Iz91560c7IjltS0EINE1huN0qk8zUiY%2FR%2B9uN8GcPJ49V60wveo8NdXafQG9LYcoCrbqTDxNXOYAVNncZ21xiUlw0ljosRwhnTIq550Buyru8dfO4eYYhnmVv%2FFoMQayRB6qOs%2FuWUqZD1MEmeitFLraFAgkwQAVibLz&X-Amz-Signature=fc13d39ba957b21afd0176043a66d5d8dcf5d9f7affe4017deedb3af486ad4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
