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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRJ6NGOI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIB2Fvp%2F4RW9w8uP%2FWoeyIvJqMRtW06oN7%2FaycenWhWUSAiEA3m5VrhbfUjdH9%2FvqOBwglm%2B1Zb7SrWg9sGm8KhSCN3oqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa8k9OyMbMkNyGF9CrcA4CGIDTLgb6QToGkdYNpX8OxYQRT%2FCd0bZGpoZiCDCggvtI6G4Nh%2FBrDEnC1ReSoO%2BucqlAL1YoFtc0mjACscKwINlZ0t5QS4sDNG6HyOPgd9VxzJiPUz4FzAqqhibuiJBDC2soUXYrvIToHuIJwXqvPo1MpFyZhSdBzJF6B%2BH8q05iASSDo0XXKY13zhozcWXLrwL6lYO4bl388eySGTScxEsVEmWFxytb%2F8MM%2FEP%2FyFtkWVxD7yNkCNWNW8pwsYm%2BweAOTZUZfeKLFWUibTfh4qKgAH7PgeqzSlePfQev72WZf2nDR4KtvbS07DEsk%2BOf40rRcl%2B6CsvIJsEfD9%2B7kdnZDUQ5njWL6vDPEdC%2Fv9ZC4GjJw%2BQvusNcH6WdB3pt5eWi90Ob%2BcUambWuW5q2CBHEhVasXCWCxCaUMsJ8lONLrcZU7iuFdfc6iP4Wc2W3PfGybEft4LcuRWm7oNfDN8fuVcIwMY%2FZm1%2BuMUnhcq1H2g0F9pMvmn8LIPTyqOWiAXB8PalnQJYuei3vvErkEUP9YEApsqhmqlD6alL7Cib4mcItopQnIUuwmhjPc2WAfj7AGRLt5SSN9jm6gdWs%2BesGQLc0rYBToBbK%2BPQ4Fp26eIe29Pb%2Fb7Ms8MJDv%2B74GOqUBMqGqq6O8KgxEQ%2BIJ2jlimMPZuH7a0asFwrLGEtSpRAvVg1bhBP0iVgl3t1RnClvu6Bh%2Fgf0rLjS93OtEVvXjeNEvHM4yWDQ7nfeCn64z%2FslJI3tdHanafJCNDndSr7dQjQnxLurJ6AOGB4EV4bOwEIysBxGj6tWSgfAua4obxErr7aAMOcvM19oU87U%2FGJ%2BlAygDIboi2PebUNnk4sY70U83PSm0&X-Amz-Signature=0d469b8ca31cd8d23893630b352e09ec6b83ceb2ffd16e93c105c2f82411b41d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
