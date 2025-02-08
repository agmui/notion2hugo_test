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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3OKOFNV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T031012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCssU6MV%2B9n1KhtETsXXT8O4wyMacDwDAL025V3WzwnCAIhALN8Efo9i%2FoW9pNJPGFr9e7Exmqfr%2ByDwcZ3LQWJFPw8KogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoV1xWgDyqlfWTF1Qq3APlkzYUauOnQzBClifyiRG0qJXPCaLlbstcRkKyKfCP95J9wT2EHWQFtJnXWalVOC9jiD8W74yseLydL%2B6WmC1lj%2BC56qPiD68C1h2cupkeKzkh58Dp%2BXc6302d3fJXABPFJ0iTBDDK04A8%2FzRXIUHisD9BZnv6LIiUhyFHkwNgdGVHIjd14fA%2B9P03unWiIFwfNDDher0z6phrxLgAizfuHBJDDyGMbUPwtlVpx6kcFv7JN6AvfIqLJdli5eqqkDkPegVYT952p%2F9SCive1O2ucpuTYoNol9YF%2B4EvmHq2ePA20LZ4grehondfJRg0v%2FfyMfncZd8MtjVzY6oxdGfCSsN8qm%2BTzNhHooAFh6WBa%2FQmJZ5tBD8DNVP%2FX7ADYubOqkEGZYkC8z4zey5JPC%2BMAQx%2FaCfSg%2FISjOsVpOQs2tvM6VQoXmP99kJiinZS1kLBUMMyZRVBPCT6PS8CXTPXtJJRS7HByLr%2Bx2vTpPh6Dkyq2hAI8LEu7PQVBSnAkrMX%2FAK79LCA1dhOHlh5T1ExmgCHjW52rIgBWZz9YY9ng52WChUsk0VkcB5L2dRgByJCHRdDjyL8UuS8HrPj6FC8zldi10%2FNpH3xp4sruIlBFYBMK06Ii6bq97MNMzCG%2Bpq9BjqkAcp4C6yb%2FGOloMTGiu6TPhdkVFfUZFWn9697mYrJQimjpk3bM%2FRGh2WFGO6gI%2FSgfbdx9aJ%2FM4XXXbm%2FvULT7VnESTIEvx0bm7oMLwb2o8PBPFkgG%2FHlkiOUoJkyMinvIe3zAaVpDrVqurJ5dLUsA0s1mhtGNIc2rsg6AHWwjuXo3le4ZewS%2FxnwFs1eyIM%2F5Z3aE8WYUlAPD5C5tZ8zjHZZZTSt&X-Amz-Signature=f829735a00f3ad264a8929a26359704190e254ae24775aa44234ec520e11b074&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
