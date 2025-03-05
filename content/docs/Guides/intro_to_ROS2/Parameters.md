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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXZMZKWB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T190322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFD6WlnMKSFjINz%2FlcBGV0QM3%2BQ%2BOmg9ur9aq3ARXu8XAiEAmSUEWNIvL1utJqyswzN3PXjBFZdMaV9kHNshssYFU4Qq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHLbzTO6D4lVsaIy5yrcA8dRqC3huMpsgETgtKRLHbkIt3sYsVNbVpbePt2KvhliBRLkSjtn333aPWLV0OCUTmso8otdSnXudZRBgyInrGNagKiPeRXerG7lhKz%2B0Nsus33WSb7%2FvTkSRoUf11NNXgYi%2F0eBVWmT3mzhgGZFIjHvyU%2FzoMQR2rnBsuY56EaaUXsbpGjQLZDw4M2TaiqhrocW8mP1rRAn5rTaFZnthMA5uJKxrNoy939ol7F002YA1jAnhnwy%2FPQu7XZlXiF%2B3gWTO1P44ZmI8U43%2FFqidE2ke3YmhmdmHkrHmqY46npNNqrmOL%2B%2B7FJ0206jjQYCOI%2BHN5fE%2BQm%2BT2EjqKEeMfzOaSdLwd40G%2FwSNMeku0VzMEXs1QHb6Pq%2Fkz5WxyiXEzuitBx0RnivktUUUCsquTHdlm2BHcfC1lbgg%2Fme2sKDSyVT%2B83c1qVad%2BUWOCfRSt0gImGDAT2%2FdaxUo5QBKLG8ao02zL1kEfW%2BjpxNcZrRXawSPMtqGLZuqHXKRSZ3T8tqrpp35RV7DpB3smhsUdNU7rlSdeW6vNaLHLg1yIz19%2FJvHphxQFd7rpG3uuHkVJ%2BmQp0%2F2oInopLZ874dZSK1aXpMzlfNewkI54jPIvNw3E4fUVbm0NCi4IAlMOyDor4GOqUBxXma5efKbYRKusWk%2BaQjfy%2FSjloLKYoP44BqNmJCqNvcRdH8iv6WxRFTzYvdCRy4N9ubg3v66h%2F6AfpsSNNbDD3KWpZ%2Bc0zITOd5nysaEJF0r3%2F52LPhrpFCrIeedllM%2FocVr8KKNsTcCjkpixOiotz%2BS2X1oLxNDJf2jjJWuaFAKbEhHm22008zTpWz9e4MZWAhhodR9WV2PF6IAuHRebnl7En3&X-Amz-Signature=39b68844fd30c4c778dc9874384bb03992cca7ef0e5bd360d5715070a1d360c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
